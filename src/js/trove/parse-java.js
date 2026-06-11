({
  requires: [
    { "import-type": "builtin", name: "srcloc" },
    { "import-type": "builtin", name: "ast" },
    { "import-type": "builtin", name: "lists" }
  ],
  nativeRequires: [
    "pyret-base/js/java-tokenizer",
    "pyret-base/js/java-parser"
  ],
  provides: {
    shorthands: {
      "Program": {
          tag: "name",
          origin: { "import-type": "uri", uri: "builtin://ast" },
          name: "Program"
        }
    },
    values: {
      "surface-parse": ["arrow", ["String", "String"], "Program"],
      "maybe-surface-parse": ["arrow", ["String", "String"], ["Option", "Program"]],
    }
  },
  theModule: function(RUNTIME, NAMESPACE, uri, srclocLib, astLib, listsLib, tokenizer, parser) {
    var srcloc = RUNTIME.getField(srclocLib, "values");
    var ast    = RUNTIME.getField(astLib, "values");
    var lists  = RUNTIME.getField(listsLib, "values");

    var link  = RUNTIME.getField(lists, "link");
    var empty = RUNTIME.getField(lists, "empty");

    var makePyretPos  = RUNTIME.ffi.makePyretPos;
    var combinePyretPos = RUNTIME.ffi.combinePyretPos;

    // ---------------------------------------------------------------------------
    // Utility: make Pyret list from a JS array
    function makeList(arr) {
      var ret = empty;
      for (var i = arr.length - 1; i >= 0; i--) ret = link.app(arr[i], ret);
      return ret;
    }

    // ---------------------------------------------------------------------------
    // Main translator function: takes the jglr parse tree and a filename string
    function translate(node, fileName) {
      var pos  = function(p) { return makePyretPos(fileName, p); };
      var pos2 = function(p1, p2) { return combinePyretPos(fileName, p1, p2); };

      // Forward declaration — filled in below
      function tr(node) {
        if (!translators[node.name])
          throw new Error("No translator for node: " + node.name + " (" + JSON.stringify(node.value) + ")");
        return translators[node.name](node);
      }

      // Shorthand helpers
      function sname(tok) {
        if (tok.value === "_")
          return RUNTIME.getField(ast, 's-underscore').app(pos(tok.pos));
        return RUNTIME.getField(ast, 's-name').app(pos(tok.pos), RUNTIME.makeString(tok.value));
      }
      function sbind(p, nameTok, ann) {
        return RUNTIME.getField(ast, 's-bind')
          .app(p, RUNTIME.makeBoolean(false), sname(nameTok), ann);
      }
      function sblank() { return RUNTIME.getField(ast, 'a-blank'); }
      function snone()  { return RUNTIME.ffi.makeNone(); }
      function ssome(v) { return RUNTIME.ffi.makeSome(v); }
      function sblock(p, stmts) {
        return RUNTIME.getField(ast, 's-block').app(p, makeList(stmts));
      }
      // Wrap any Expr in a single-statement s-block; well-formed.arr requires
      // s-block in many positions (function/lambda/branch bodies, _else, for body).
      // Nested s-block is harmless.
      function asBlock(p, expr) {
        return sblock(p, [expr]);
      }
      function sid(p, name) {
        return RUNTIME.getField(ast, 's-id')
          .app(p, RUNTIME.getField(ast, 's-name').app(p, RUNTIME.makeString(name)));
      }
      function sapp(p, fn, args) {
        return RUNTIME.getField(ast, 's-app').app(p, fn, makeList(args));
      }

      // ---------------------------------------------------------------------------
      // Type annotation translation
      function trTypeAnn(node) {
        var k = node.kids;
        switch (k[0].name) {
          case 'INT': case 'LONG': case 'DOUBLE': case 'FLOAT':
            return RUNTIME.getField(ast, 'a-name')
              .app(pos(node.pos), RUNTIME.getField(ast, 's-name').app(pos(k[0].pos), RUNTIME.makeString("Number")));
          case 'BOOLEAN':
            return RUNTIME.getField(ast, 'a-name')
              .app(pos(node.pos), RUNTIME.getField(ast, 's-name').app(pos(k[0].pos), RUNTIME.makeString("Boolean")));
          case 'VOID':
            return sblank();
          case 'NAME':
            if (k.length === 1) {
              // Plain type name: String, List, Tree, etc.
              return RUNTIME.getField(ast, 'a-name')
                .app(pos(node.pos), RUNTIME.getField(ast, 's-name').app(pos(k[0].pos), RUNTIME.makeString(k[0].value)));
            } else {
              // Generic: List<Number> → a-app(a-name(List), [a-name(Number)])
              // kids: [NAME, LT, type-ann, (COMMA type-ann)*, GT]
              var baseAnn = RUNTIME.getField(ast, 'a-name')
                .app(pos(k[0].pos), RUNTIME.getField(ast, 's-name').app(pos(k[0].pos), RUNTIME.makeString(k[0].value)));
              var typeArgs = [];
              for (var i = 2; i < k.length; i++) {
                if (k[i].name === 'type-ann') typeArgs.push(trTypeAnn(k[i]));
              }
              return RUNTIME.getField(ast, 'a-app')
                .app(pos(node.pos), baseAnn, makeList(typeArgs));
            }
          case 'PARENSPACE':
            // Function type: (T1, T2 -> R) or (() -> R)
            // kids: [PARENSPACE, type-ann?, (COMMA type-ann)*, THINARROW, type-ann(ret), RPAREN]
            var argAnns = [];
            var arrowIdx = -1;
            for (var i = 1; i < k.length; i++) {
              if (k[i].name === 'THINARROW') { arrowIdx = i; break; }
              if (k[i].name === 'type-ann') argAnns.push(trTypeAnn(k[i]));
            }
            var retAnn = trTypeAnn(k[arrowIdx + 1]);
            return RUNTIME.getField(ast, 'a-arrow')
              .app(pos(node.pos), makeList(argAnns), retAnn, RUNTIME.makeBoolean(true));
          default:
            return sblank();
        }
      }

      // ---------------------------------------------------------------------------
      // Extract params from fun-decl/lambda kids
      // fun-decl kids: [type-ann, NAME, PARENNOSPACE, param?, (COMMA param)*, RPAREN, block, where?]
      function getParamsFromKids(kids, startIdx) {
        var params = [];
        for (var i = startIdx; i < kids.length; i++) {
          if (kids[i].name === 'RPAREN') break;
          if (kids[i].name === 'param' || kids[i].name === 'lambda-param') params.push(kids[i]);
        }
        return params;
      }
      function trParam(node) {
        // param: type-ann NAME             (fun-decl + typed lambda-param)
        // lambda-param: NAME               (bare lambda-param, no annotation)
        if (node.kids.length === 1) {
          return sbind(pos(node.pos), node.kids[0], sblank());
        }
        return sbind(pos(node.pos), node.kids[1], trTypeAnn(node.kids[0]));
      }

      // ---------------------------------------------------------------------------
      // Block + return lifting

      // Get true block-stmts from a block node (filter out LBRACE/RBRACE)
      function getBlockStmts(blockNode) {
        return blockNode.kids.filter(function(k) {
          return k.name === 'block-stmt' || k.name === 'assert-stmt' || k.name === 'yield-stmt';
        });
      }

      // Get the inner stmt node from a block-stmt wrapper
      function unwrapStmt(node) {
        if (node.name === 'block-stmt') return node.kids[0];
        return node;  // assert-stmt, yield-stmt already unwrapped
      }

      // Check if an if-stmt is a guard clause: no else, single return in then-block
      function isGuardClause(ifNode) {
        // if-stmt kids (no else): [IF, PARENSPACE, full-expr, RPAREN, block]  length=5
        if (ifNode.kids.length !== 5) return false;
        var thenBlock = ifNode.kids[4];
        var stmts = getBlockStmts(thenBlock).map(unwrapStmt);
        return stmts.length === 1 && stmts[0].name === 'return-stmt';
      }

      // Translate a return-stmt's value (or sblank placeholder for void return)
      function trReturnVal(retNode) {
        // return-stmt: [RETURN, SEMI] or [RETURN, full-expr, SEMI]
        if (retNode.kids.length === 2) {
          // RETURN SEMI → void; return sid as placeholder
          return sid(pos(retNode.pos), "nothing");
        }
        return tr(retNode.kids[1]);
      }

      // Lift returns from a list of block stmts → Pyret Expr
      function liftReturns(stmts, blockPos) {
        if (stmts.length === 0) {
          return sid(blockPos, "nothing");
        }
        var first = stmts[0];
        var rest  = stmts.slice(1);

        // Tier 1: only element is a return-stmt
        if (first.name === 'return-stmt' && rest.length === 0) {
          return trReturnVal(first);
        }

        // Tier 2: guard clause — if (cond) { return val; } <rest>
        if (first.name === 'if-stmt' && isGuardClause(first) && rest.length > 0) {
          var ifKids = first.kids;
          var cond   = tr(ifKids[2]);  // full-expr
          var thenStmts = getBlockStmts(ifKids[4]).map(unwrapStmt);
          var thenVal   = trReturnVal(thenStmts[0]);
          var elseExpr  = liftReturns(rest, blockPos);
          var branch    = RUNTIME.getField(ast, 's-if-branch')
            .app(pos(first.pos), cond, sblock(pos(first.pos), [thenVal]));
          // well-formed.arr requires s-if-else._else :: Expr % (is-s-block)
          var elseBlock = sblock(blockPos, [elseExpr]);
          return RUNTIME.getField(ast, 's-if-else')
            .app(pos(first.pos), makeList([branch]), elseBlock, RUNTIME.makeBoolean(false));
        }

        // Regular stmt with no following stmts (last stmt is not return)
        if (rest.length === 0) {
          return trStmt(first, blockPos);
        }

        // Regular stmt with more stmts
        var headExpr = trStmt(first, blockPos);
        var restExpr = liftReturns(rest, blockPos);
        // Build s-block
        var headStmts = [headExpr];
        if (restExpr.name === 's-block') {
          // Flatten nested s-block
          var innerStmts = RUNTIME.ffi.toArray(RUNTIME.getField(restExpr, 'stmts'));
          return RUNTIME.getField(ast, 's-block').app(pos(first.pos), makeList(headStmts.concat(innerStmts)));
        }
        return sblock(pos(first.pos), headStmts.concat([restExpr]));
      }

      // Translate a single block-stmt wrapper (or unwrapped stmt)
      function trStmt(node, blockPos) {
        if (node.name === 'block-stmt' || node.name === 'top-stmt') return trStmt(node.kids[0], blockPos);
        return tr(node);
      }

      // Translate a block node → Pyret s-block Expr (with return lifting).
      // Function bodies and other "block-typed" positions require an s-block;
      // liftReturns may yield a bare s-if-else / s-op / etc. Wrap unconditionally —
      // a single-element s-block is fine and matches well-formed.arr's expectation.
      function trBlock(blockNode) {
        var rawStmts = getBlockStmts(blockNode).map(unwrapStmt);
        var expr = liftReturns(rawStmts, pos(blockNode.pos));
        return sblock(pos(blockNode.pos), [expr]);
      }

      // ---------------------------------------------------------------------------
      // Binary operator mapping
      var binopMap = {
        '+':  'op+',  '-':  'op-',  '*':  'op*',  '/':  'op/',
        '==': 'op==', '!=': 'op<>', '<':  'op<',  '>':  'op>',
        '<=': 'op<=', '>=': 'op>=',
        '&&': 'opand', '||': 'opor'
      };
      // Java operator precedence (higher number = binds tighter).
      // Pyret's well-formedness disallows mixing operator kinds at the same
      // s-op level, so we tree these up explicitly per Java precedence.
      var binopPrec = {
        '*': 5, '/': 5, '%': 5,
        '+': 4, '-': 4,
        '<': 3, '<=': 3, '>': 3, '>=': 3,
        '==': 2, '!=': 2,
        '&&': 1,
        '||': 0
      };
      // Build an s-paren wrapper around an Expr so well-formed.arr's reachable-ops
      // check stops descending across operator-kind boundaries. We only wrap
      // operands that came from buildBinop (tagged via .__jarretOp).
      function maybeParen(expr) {
        if (expr && expr.__jarretOp) {
          return RUNTIME.getField(ast, 's-paren')
            .app(expr.__jarretOp.pos, expr);
        }
        return expr;
      }
      function buildBinop(left, opTok, right) {
        var opVal = opTok.kids[0].value;
        if (opVal === '%') {
          return sapp(pos(opTok.pos), sid(pos(opTok.pos), "num-modulo"),
                      [maybeParen(left), maybeParen(right)]);
        }
        var opStr = binopMap[opVal];
        if (!opStr) throw new Error("Unknown binary operator: " + opVal);
        var p = pos(opTok.pos);
        var result = RUNTIME.getField(ast, 's-op')
          .app(p, p, RUNTIME.makeString(opStr), maybeParen(left), maybeParen(right));
        // Tag so the next level's maybeParen() can wrap us. The tag is invisible
        // to Pyret-side code; it only lives on the JS reference.
        result.__jarretOp = { pos: p };
        return result;
      }

      // ---------------------------------------------------------------------------
      // Node translators
      var translators = {

        'program': function(node) {
          var prelude  = node.kids[0];
          var topBlock = node.kids[1];

          // Collect imports from prelude
          var imports = prelude.kids
            .filter(function(k) { return k.name === 'import-stmt'; })
            .map(function(k) { return tr(k); });

          // Translate top-level stmts
          var topStmts = topBlock.kids
            .filter(function(k) { return k.name === 'top-stmt'; })
            .map(function(k) { return trStmt(k, pos(topBlock.pos)); });

          var body = sblock(pos(topBlock.pos), topStmts.length > 0 ? topStmts : [sid(pos(topBlock.pos), "nothing")]);
          // Jarret defaults to `provide *`: top-level functions, vars, and data
          // are exported. There's no `public` modifier yet; modules either
          // expose everything or nothing, and we choose everything to match
          // typical Java/Pyret expectations for multi-module programs.
          var provideAll    = RUNTIME.getField(ast, 's-provide-all').app(pos(node.pos));
          var provideTypAll = RUNTIME.getField(ast, 's-provide-types-all').app(pos(node.pos));

          return RUNTIME.getField(ast, 's-program')
            .app(pos(node.pos), snone(), provideAll, provideTypAll,
                 empty, makeList(imports), body);
        },

        'import-stmt': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          if (k[0].name === 'IMPORT') {
            if (k.length === 3) {
              // import NAME;
              var imp = RUNTIME.getField(ast, 's-const-import')
                .app(pos(k[1].pos), RUNTIME.makeString(k[1].value));
              return RUNTIME.getField(ast, 's-import')
                .app(p, imp, sname(k[1]));
            } else if (k[2].name === 'PARENNOSPACE') {
              // import NAME(STRING) [as NAME]; — file import, optional alias
              var kind = k[1].value;  // "file"
              var arg  = k[3].value.slice(1, -1);  // strip quotes
              var imp  = RUNTIME.getField(ast, 's-special-import')
                .app(p, RUNTIME.makeString(kind), makeList([RUNTIME.makeString(arg)]));
              var aliasName;
              if (k[5] && k[5].name === 'AS') {
                // explicit `as NAME` after the file(STRING) form
                aliasName = RUNTIME.getField(ast, 's-name')
                  .app(p, RUNTIME.makeString(k[6].value));
              } else {
                // Derive module name from filename without extension
                var modName = arg.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9_]/g, '_');
                aliasName = RUNTIME.getField(ast, 's-name')
                  .app(p, RUNTIME.makeString(modName));
              }
              return RUNTIME.getField(ast, 's-import').app(p, imp, aliasName);
            } else if (k[2].name === 'AS') {
              // import NAME as NAME;
              var imp = RUNTIME.getField(ast, 's-const-import')
                .app(pos(k[1].pos), RUNTIME.makeString(k[1].value));
              return RUNTIME.getField(ast, 's-import')
                .app(p, imp, sname(k[3]));
            }
          } else if (k[0].name === 'INCLUDE') {
            var imp = RUNTIME.getField(ast, 's-const-import')
              .app(pos(k[1].pos), RUNTIME.makeString(k[1].value));
            return RUNTIME.getField(ast, 's-include').app(p, imp);
          }
          throw new Error("Unknown import-stmt: " + JSON.stringify(node));
        },

        'fun-decl': function(node) {
          var k   = node.kids;
          var p   = pos(node.pos);
          var retAnn  = trTypeAnn(k[0]);
          var fname   = k[1].value;
          var params  = getParamsFromKids(k, 3).map(trParam);
          // Find block and where-clause
          var blockNode  = null, whereNode = null;
          for (var i = 3; i < k.length; i++) {
            if (k[i].name === 'block')       blockNode  = k[i];
            if (k[i].name === 'where-clause') whereNode = k[i];
          }
          var body  = trBlock(blockNode);
          var check = whereNode ? trWhereClause(whereNode) : [snone(), snone()];
          return RUNTIME.getField(ast, 's-fun')
            .app(p, RUNTIME.makeString(fname), empty, makeList(params), retAnn,
                 RUNTIME.makeString(""), body, check[0], check[1], RUNTIME.makeBoolean(false));
        },

        'data-decl': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          var dname = k[1].value;
          var variants = k.filter(function(c) { return c.name === 'variant-decl'; }).map(tr);
          return RUNTIME.getField(ast, 's-data')
            .app(p, RUNTIME.makeString(dname), empty, empty,
                 makeList(variants), empty, snone(), snone());
        },

        'variant-decl': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          var vname = k[0].value;
          if (k.length === 1) {
            // Singleton variant: Name
            return RUNTIME.getField(ast, 's-singleton-variant')
              .app(p, RUNTIME.makeString(vname), empty);
          } else {
            // Variant with members: Name(type1 f1, ...)
            var members = k.filter(function(c) { return c.name === 'variant-member'; })
              .map(function(m) {
                var mAnn  = trTypeAnn(m.kids[0]);
                var mName = m.kids[1].value;
                return RUNTIME.getField(ast, 's-variant-member')
                  .app(pos(m.pos),
                       RUNTIME.getField(ast, 's-normal'),
                       sbind(pos(m.pos), m.kids[1], mAnn));
              });
            return RUNTIME.getField(ast, 's-variant')
              .app(p, pos(k[0].pos), RUNTIME.makeString(vname),
                   makeList(members), empty);
          }
        },

        'let-stmt': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          // [type-ann, NAME, EQUALS, full-expr, SEMI]
          var ann  = trTypeAnn(k[0]);
          var bind = sbind(p, k[1], ann);
          var val  = tr(k[3]);
          return RUNTIME.getField(ast, 's-let')
            .app(p, bind, val, RUNTIME.makeBoolean(false));
        },

        'var-stmt': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          // [VAR, type-ann, NAME, EQUALS, full-expr, SEMI]
          var ann  = trTypeAnn(k[1]);
          var bind = sbind(p, k[2], ann);
          var val  = tr(k[4]);
          return RUNTIME.getField(ast, 's-var').app(p, bind, val);
        },

        'rec-stmt': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          // [REC, type-ann, NAME, EQUALS, full-expr, SEMI]
          var ann  = trTypeAnn(k[1]);
          var bind = sbind(p, k[2], ann);
          var val  = tr(k[4]);
          return RUNTIME.getField(ast, 's-rec').app(p, bind, val);
        },

        'assign-stmt': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          // [NAME, COLONEQUALS, full-expr, SEMI]
          return RUNTIME.getField(ast, 's-assign').app(p, sname(k[0]), tr(k[2]));
        },

        'if-stmt': function(node) {
          // [IF, PARENSPACE, full-expr, RPAREN, block, (ELSE (block|if-stmt))?]
          // Pyret's s-if-else stores else-if as a flat list of branches; flatten the chain.
          var p = pos(node.pos);
          var branches = [];
          var elseBody = null;
          var cur = node;
          while (cur && cur.name === 'if-stmt') {
            var ck = cur.kids;
            var cond      = tr(ck[2]);
            var thenBlock = trBlock(ck[4]);
            branches.push(RUNTIME.getField(ast, 's-if-branch')
              .app(pos(cur.pos), cond, thenBlock));
            if (ck.length === 5) {
              cur = null;
            } else {
              var nextElse = ck[6];
              if (nextElse.name === 'if-stmt') {
                cur = nextElse;
              } else {
                elseBody = trBlock(nextElse);
                cur = null;
              }
            }
          }
          if (elseBody) {
            return RUNTIME.getField(ast, 's-if-else')
              .app(p, makeList(branches), elseBody, RUNTIME.makeBoolean(false));
          } else {
            return RUNTIME.getField(ast, 's-if')
              .app(p, makeList(branches), RUNTIME.makeBoolean(false));
          }
        },

        'for-stmt': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          // [FOR, PARENSPACE, type-ann, NAME, COLON, full-expr, RPAREN, block]
          var ann      = trTypeAnn(k[2]);
          var bindNode = k[3];
          var coll     = tr(k[5]);
          var body     = trBlock(k[7]);
          var forBind  = RUNTIME.getField(ast, 's-for-bind')
            .app(pos(bindNode.pos), sbind(pos(bindNode.pos), bindNode, ann), coll);
          // Iterator: lists.each
          var iterFn = RUNTIME.getField(ast, 's-dot')
            .app(p, sid(p, "lists"), RUNTIME.makeString("each"));
          return RUNTIME.getField(ast, 's-for')
            .app(p, iterFn, makeList([forBind]), sblank(), body, RUNTIME.makeBoolean(false));
        },

        'check-block': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          // Named: [ATCHECK, VOID, NAME, PARENNOSPACE, RPAREN, LBRACE, (block-stmt|assert-stmt)*, RBRACE]
          // Anon:  [ATCHECK, LBRACE, (block-stmt|assert-stmt)*, RBRACE]
          var checkName, startIdx;
          if (k[1].name === 'VOID') {
            checkName = ssome(RUNTIME.makeString(k[2].value));
            startIdx  = 6;
          } else {
            checkName = snone();
            startIdx  = 2;
          }
          var checkStmts = k.slice(startIdx, k.length - 1)
            .filter(function(c) { return c.name === 'assert-stmt' || c.name === 'block-stmt'; })
            .map(function(c) { return c.name === 'block-stmt' ? trStmt(c, p) : trAssertStmt(c); });
          var checkBody = sblock(p, checkStmts.length > 0 ? checkStmts : [sid(p, "nothing")]);
          return RUNTIME.getField(ast, 's-check')
            .app(p, checkName, checkBody, RUNTIME.makeBoolean(true));
        },

        'expr-stmt': function(node) {
          return tr(node.kids[0]);  // full-expr (SEMI is ignored)
        },

        'top-expr-stmt': function(node) {
          return tr(node.kids[0]);
        },

        'full-expr': function(node) {
          return tr(node.kids[0]);
        },

        'lambda-expr': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          // [PARENSPACE, (lambda-param COMMA?)*, RPAREN, THINARROW, full-expr]
          var params = getParamsFromKids(k, 1).map(trParam);
          // Find THINARROW and the body
          var bodyIdx = -1;
          for (var i = 1; i < k.length; i++) {
            if (k[i].name === 'THINARROW') { bodyIdx = i + 1; break; }
          }
          var body = tr(k[bodyIdx]);
          return RUNTIME.getField(ast, 's-lam')
            .app(p, RUNTIME.makeString(""), empty, makeList(params), sblank(),
                 RUNTIME.makeString(""), asBlock(p, body), snone(), snone(), RUNTIME.makeBoolean(false));
        },

        'binop-expr': function(node) {
          var k = node.kids;
          if (k.length === 1) return tr(k[0]);
          // Collect operands + operator tokens, then apply Java precedence.
          // Shunting-yard variant: left-associative, "pop if stack op >= current op".
          var operandStack = [tr(k[0])];
          var opStack = [];   // raw binop nodes (so positions are preserved)
          for (var i = 1; i < k.length; i += 2) {
            var opNode = k[i];
            var opVal  = opNode.kids[0].value;
            var curPrec = binopPrec[opVal];
            if (curPrec === undefined) throw new Error("Unknown binary operator: " + opVal);
            while (opStack.length > 0) {
              var topVal = opStack[opStack.length - 1].kids[0].value;
              if (binopPrec[topVal] >= curPrec) {
                var rhs = operandStack.pop();
                var lhs = operandStack.pop();
                operandStack.push(buildBinop(lhs, opStack.pop(), rhs));
              } else break;
            }
            opStack.push(opNode);
            operandStack.push(tr(k[i + 1]));
          }
          while (opStack.length > 0) {
            var rhs2 = operandStack.pop();
            var lhs2 = operandStack.pop();
            operandStack.push(buildBinop(lhs2, opStack.pop(), rhs2));
          }
          return operandStack[0];
        },

        'binop': function(node) {
          return node.kids[0];  // raw token; used by binop-expr directly
        },

        'unop-expr': function(node) {
          var k = node.kids;
          if (k[0].name === 'BANG') {
            // !expr → not(expr)
            var inner = tr(k[1]);
            return sapp(pos(node.pos), sid(pos(k[0].pos), "not"), [inner]);
          } else if (k[0].name === 'DASH') {
            // -expr → 0 - expr
            var inner = tr(k[1]);
            var zero  = RUNTIME.getField(ast, 's-num')
              .app(pos(k[0].pos), RUNTIME.makeNumber(0));
            return RUNTIME.getField(ast, 's-op')
              .app(pos(node.pos), pos(k[0].pos), RUNTIME.makeString("op-"), zero, inner);
          } else {
            return tr(k[0]);  // app-or-access
          }
        },

        'app-or-access': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          if (k.length === 1) {
            // prim-expr
            return tr(k[0]);
          }
          var base = tr(k[0]);
          if (k[1].name === 'PARENNOSPACE') {
            // Function call: f(args...)
            var args = [];
            for (var i = 2; i < k.length; i++) {
              if (k[i].name === 'full-expr') args.push(tr(k[i]));
            }
            return sapp(p, base, args);
          } else if (k[1].name === 'DOT') {
            // Field access: obj.field
            return RUNTIME.getField(ast, 's-dot')
              .app(p, base, RUNTIME.makeString(k[2].value));
          } else if (k[1].name === 'LBRACK') {
            // Array subscript: arr[idx] — translate as get(arr, idx)
            return sapp(p, sid(p, "get"), [base, tr(k[2])]);
          }
          throw new Error("Unknown app-or-access pattern");
        },

        'prim-expr': function(node) {
          var k = node.kids;
          if (k[0].name === 'PARENSPACE' || k[0].name === 'PARENAFTERBRACE') {
            return RUNTIME.getField(ast, 's-paren')
              .app(pos(node.pos), tr(k[1]));
          }
          return tr(k[0]);
        },

        'NUMBER': function(node) {
          return RUNTIME.getField(ast, 's-num')
            .app(pos(node.pos), RUNTIME.makeNumberFromString(node.value));
        },
        'STRING': function(node) {
          // Strip quotes
          var s = node.value.slice(1, -1)
            .replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
          return RUNTIME.getField(ast, 's-str').app(pos(node.pos), RUNTIME.makeString(s));
        },
        'TRUE': function(node) {
          return RUNTIME.getField(ast, 's-bool').app(pos(node.pos), RUNTIME.makeBoolean(true));
        },
        'FALSE': function(node) {
          return RUNTIME.getField(ast, 's-bool').app(pos(node.pos), RUNTIME.makeBoolean(false));
        },
        'NULL': function(node) {
          return sid(pos(node.pos), "nothing");
        },
        'NAME': function(node) {
          return RUNTIME.getField(ast, 's-id')
            .app(pos(node.pos), RUNTIME.getField(ast, 's-name')
              .app(pos(node.pos), RUNTIME.makeString(node.value)));
        },

        'switch-expr': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          // [SWITCH, PARENSPACE, full-expr, RPAREN, LBRACE, case-branch*, default-branch?, RBRACE]
          var val       = tr(k[2]);
          var branches  = [];
          var elseBranch = null;
          for (var i = 5; i < k.length - 1; i++) {
            if (k[i].name === 'case-branch')    branches.push(trCaseBranch(k[i]));
            if (k[i].name === 'default-branch') elseBranch = trDefaultBranch(k[i]);
          }
          if (elseBranch) {
            return RUNTIME.getField(ast, 's-cases-else')
              .app(p, sblank(), val, makeList(branches), elseBranch, RUNTIME.makeBoolean(false));
          } else {
            return RUNTIME.getField(ast, 's-cases')
              .app(p, sblank(), val, makeList(branches), RUNTIME.makeBoolean(false));
          }
        },

        'block-expr': function(node) {
          // block { stmt; stmt; finalExpr; } — evaluate stmts in order; the
          // last stmt's value is the value of the block. Uses the same
          // return-lifting machinery as function bodies, wrapped in
          // s-user-block so the well-formedness checker treats it as an
          // explicit `block:` form rather than an implicit body.
          var p = pos(node.pos);
          var rawStmts = getBlockStmts(node).map(unwrapStmt);
          var inner;
          if (rawStmts.length === 0) {
            inner = sblock(p, [sid(p, "nothing")]);
          } else {
            inner = sblock(p, [liftReturns(rawStmts, p)]);
          }
          return RUNTIME.getField(ast, 's-user-block').app(p, inner);
        },

        'record-expr': function(node) {
          // {name: expr, name: expr} → s-obj(loc, [s-data-field(loc, name, expr), ...])
          // {} → s-obj(loc, [])
          var k = node.kids;
          var p = pos(node.pos);
          var fields = [];
          for (var i = 0; i < k.length; i++) {
            var kid = k[i];
            if (kid.name === 'record-field') {
              // kids: [NAME, COLON, full-expr]
              var fp    = pos(kid.pos);
              var fname = kid.kids[0].value;
              var fval  = tr(kid.kids[2]);
              fields.push(RUNTIME.getField(ast, 's-data-field')
                .app(fp, RUNTIME.makeString(fname), fval));
            }
          }
          return RUNTIME.getField(ast, 's-obj').app(p, makeList(fields));
        },

        'table-expr': function(node) {
          // table { type1 col1, type2 col2 ; row: v1, v2 ; row: v1, v2 ; }
          //   → s-table(loc, [s-field-name(loc, col, ann), ...],
          //                  [s-table-row(loc, [expr,...]), ...])
          var k = node.kids;
          var p = pos(node.pos);
          var headers = [];
          var rows = [];
          for (var i = 0; i < k.length; i++) {
            var kid = k[i];
            if (kid.name === 'table-header') {
              // kids: [type-ann, NAME]
              var ann = trTypeAnn(kid.kids[0]);
              var hp  = pos(kid.pos);
              var hn  = kid.kids[1].value;
              headers.push(RUNTIME.getField(ast, 's-field-name')
                .app(hp, RUNTIME.makeString(hn), ann));
            } else if (kid.name === 'table-row') {
              // kids: [ROW, COLON, full-expr, COMMA, full-expr, ...]
              var rp = pos(kid.pos);
              var elems = [];
              for (var j = 2; j < kid.kids.length; j++) {
                if (kid.kids[j].name === 'full-expr') elems.push(tr(kid.kids[j]));
              }
              rows.push(RUNTIME.getField(ast, 's-table-row')
                .app(rp, makeList(elems)));
            }
          }
          return RUNTIME.getField(ast, 's-table')
            .app(p, makeList(headers), makeList(rows));
        },

        'ask-expr': function(node) {
          // ask { c1 -> e1; c2 -> e2; otherwise -> e3; }
          //   → s-if-pipe(loc, [s-if-pipe-branch(c1, sblock(e1)), ...], false)
          //   → s-if-pipe-else(loc, [...], sblock(e3), false)
          // well-formed.arr requires bodies and _else to be s-block when blocky=false.
          var k = node.kids;
          var p = pos(node.pos);
          var branches = [];
          var elseExpr = null;
          for (var i = 0; i < k.length; i++) {
            var kid = k[i];
            if (kid.name === 'ask-branch') {
              // kids: [binop-expr, THINARROW, full-expr]
              var bp   = pos(kid.pos);
              var test = tr(kid.kids[0]);
              var body = sblock(bp, [tr(kid.kids[2])]);
              branches.push(RUNTIME.getField(ast, 's-if-pipe-branch')
                .app(bp, test, body));
            } else if (kid.name === 'otherwise-branch') {
              // kids: [OTHERWISE, THINARROW, full-expr]
              elseExpr = sblock(pos(kid.pos), [tr(kid.kids[2])]);
            }
          }
          if (elseExpr === null) {
            return RUNTIME.getField(ast, 's-if-pipe')
              .app(p, makeList(branches), RUNTIME.makeBoolean(false));
          }
          return RUNTIME.getField(ast, 's-if-pipe-else')
            .app(p, makeList(branches), elseExpr, RUNTIME.makeBoolean(false));
        },

        'new-expr': function(node) {
          // new NAME(args)  →  NAME(args). The `new` keyword is sugar; the
          // result is identical to a bare constructor call.
          // kids: [NEW, NAME, PARENNOSPACE, full-expr*, RPAREN]
          var k = node.kids;
          var p = pos(node.pos);
          var fnName = k[1].value;
          var args = [];
          for (var i = 3; i < k.length - 1; i++) {
            if (k[i].name === 'full-expr') args.push(tr(k[i]));
          }
          return sapp(p, sid(pos(k[1].pos), fnName), args);
        },

        'construct-expr': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          if (k.length === 2) {
            // [LBRACK, RBRACK] — empty list
            return RUNTIME.getField(ast, 's-construct')
              .app(p, RUNTIME.getField(ast, 's-construct-normal'),
                   sid(p, "list"), empty);
          }
          // [LBRACK, NAME, COLON, full-expr*, RBRACK] — [name: exprs...]
          var ctorName = k[1].value;
          var elems = [];
          for (var i = 3; i < k.length; i++) {
            if (k[i].name === 'full-expr') elems.push(tr(k[i]));
          }
          return RUNTIME.getField(ast, 's-construct')
            .app(p, RUNTIME.getField(ast, 's-construct-normal'),
                 sid(p, ctorName), makeList(elems));
        },

        'map-for-expr': function(node) {
          var k = node.kids;
          var p = pos(node.pos);
          // [LBRACK, FOR, PARENSPACE, type-ann, NAME, COLON, full-expr, RPAREN, block, RBRACK]
          var ann     = trTypeAnn(k[3]);
          var bindTok = k[4];
          var coll    = tr(k[6]);
          // The block should contain a yield-stmt as the last element
          var yieldStmt = null;
          var preStmts  = [];
          var blockStmts = getBlockStmts(k[8]).map(unwrapStmt);
          blockStmts.forEach(function(s) {
            if (s.name === 'yield-stmt') yieldStmt = s;
            else preStmts.push(s);
          });
          var bodyExpr;
          if (yieldStmt) {
            var yieldVal = tr(yieldStmt.kids[1]);
            bodyExpr = preStmts.length > 0
              ? sblock(p, preStmts.map(function(s) { return trStmt(s, p); }).concat([yieldVal]))
              : yieldVal;
          } else {
            bodyExpr = liftReturns(blockStmts, p);
          }
          var forBind = RUNTIME.getField(ast, 's-for-bind')
            .app(pos(bindTok.pos), sbind(pos(bindTok.pos), bindTok, ann), coll);
          var iterFn = RUNTIME.getField(ast, 's-dot')
            .app(p, sid(p, "lists"), RUNTIME.makeString("map"));
          return RUNTIME.getField(ast, 's-for')
            .app(p, iterFn, makeList([forBind]), sblank(), asBlock(p, bodyExpr), RUNTIME.makeBoolean(false));
        },

        'yield-stmt': function(node) {
          // yield-stmt in a block-stmt context: treat as expr
          return tr(node.kids[1]);
        },

        'return-stmt': function(node) {
          // Should be handled by liftReturns, but handle direct translation too
          return trReturnVal(node);
        },

        'spy-stmt': function(node) {
          // spy(x, y, z) → spy: x, y, z end (implicit labels = identifier names)
          var k = node.kids;
          var p = pos(node.pos);
          var fields = [];
          for (var i = 2; i < k.length - 2; i++) {
            if (k[i].name !== 'NAME') continue;  // skip COMMA tokens
            var nm = k[i].value;
            var fp = pos(k[i].pos);
            fields.push(RUNTIME.getField(ast, 's-spy-expr')
              .app(fp, RUNTIME.makeString(nm), sid(fp, nm), RUNTIME.makeBoolean(true)));
          }
          return RUNTIME.getField(ast, 's-spy-block')
            .app(p, snone(), makeList(fields));
        },

        'type-ann': function(node) {
          return trTypeAnn(node);
        },

      };

      // ---------------------------------------------------------------------------
      // Case branch helpers (used by switch-expr translator)
      function trCaseBranch(node) {
        var k = node.kids;
        var p = pos(node.pos);
        // Constructor pattern: [CASE, NAME, PARENNOSPACE, NAME*, RPAREN, COLON, switch-body]
        // Singleton: [CASE, NAME, COLON, switch-body]
        var vname = k[1].value;
        var bodyNode = k[k.length - 1];  // switch-body
        var bodyExpr = asBlock(p, trSwitchBody(bodyNode));

        if (k[2].name === 'PARENNOSPACE') {
          // Constructor with bindings
          var bindNames = k.slice(3, k.length - 3)  // between PARENNOSPACE and RPAREN COLON switch-body
            .filter(function(c) { return c.name === 'NAME'; });
          var args = bindNames.map(function(n) {
            return RUNTIME.getField(ast, 's-cases-bind')
              .app(pos(n.pos),
                   RUNTIME.getField(ast, 's-cases-bind-normal'),
                   sbind(pos(n.pos), n, sblank()));
          });
          return RUNTIME.getField(ast, 's-cases-branch')
            .app(p, pos(k[1].pos), RUNTIME.makeString(vname), makeList(args), bodyExpr);
        } else {
          // Singleton
          return RUNTIME.getField(ast, 's-singleton-cases-branch')
            .app(p, pos(k[1].pos), RUNTIME.makeString(vname), bodyExpr);
        }
      }

      function trDefaultBranch(node) {
        var k = node.kids;
        // [DEFAULT, COLON, switch-body]
        return asBlock(pos(node.pos), trSwitchBody(k[2]));
      }

      function trSwitchBody(node) {
        var k = node.kids;
        // switch-body: (block-stmt)* yield-stmt
        // Extract yield-stmt (last child)
        var yieldStmt = null;
        var preStmts  = [];
        k.forEach(function(c) {
          if (c.name === 'yield-stmt') yieldStmt = c;
          else if (c.name === 'block-stmt') preStmts.push(unwrapStmt(c));
        });
        if (!yieldStmt) throw new Error("switch-body missing yield-stmt");
        var yieldVal = tr(yieldStmt.kids[1]);
        if (preStmts.length === 0) return yieldVal;
        var stmts = preStmts.map(function(s) { return trStmt(s, pos(node.pos)); });
        return sblock(pos(node.pos), stmts.concat([yieldVal]));
      }

      // ---------------------------------------------------------------------------
      // Assert stmt → s-check-test
      function trAssertStmt(node) {
        var k = node.kids;
        var p = pos(node.pos);

        function opIs()    { return RUNTIME.getField(ast, 's-op-is').app(p); }
        function opIsNot() { return RUNTIME.getField(ast, 's-op-is-not').app(p); }
        function opSat()   { return RUNTIME.getField(ast, 's-op-satisfies').app(p); }
        function opRaise() { return RUNTIME.getField(ast, 's-op-raises').app(p); }

        switch (k[0].name) {
          case 'ASSERTEQUALS':
            // assertEquals(a, b) → a is b
            return RUNTIME.getField(ast, 's-check-test')
              .app(p, opIs(), snone(), tr(k[2]), ssome(tr(k[4])), snone());
          case 'ASSERTNOTEQUALS':
            // assertNotEquals(a, b) → a is-not b
            return RUNTIME.getField(ast, 's-check-test')
              .app(p, opIsNot(), snone(), tr(k[2]), ssome(tr(k[4])), snone());
          case 'ASSERTTRUE':
            // assertTrue(a) → a is true
            return RUNTIME.getField(ast, 's-check-test')
              .app(p, opIs(), snone(), tr(k[2]),
                   ssome(RUNTIME.getField(ast, 's-bool').app(p, RUNTIME.makeBoolean(true))),
                   snone());
          case 'ASSERTFALSE':
            // assertFalse(a) → a is false
            return RUNTIME.getField(ast, 's-check-test')
              .app(p, opIs(), snone(), tr(k[2]),
                   ssome(RUNTIME.getField(ast, 's-bool').app(p, RUNTIME.makeBoolean(false))),
                   snone());
          case 'ASSERTSATISFIES':
            // assertSatisfies(a, pred) → a satisfies pred
            return RUNTIME.getField(ast, 's-check-test')
              .app(p, opSat(), snone(), tr(k[2]), ssome(tr(k[4])), snone());
          case 'ASSERTRAISES':
            // assertRaises(thunk, msg) → thunk() raises msg
            return RUNTIME.getField(ast, 's-check-test')
              .app(p, opRaise(), snone(), sapp(p, tr(k[2]), []), ssome(tr(k[4])), snone());
          case 'full-expr':
            // full-expr IS full-expr / ISNOT / SATISFIES / RAISES
            if (k[1].name === 'IS') {
              return RUNTIME.getField(ast, 's-check-test')
                .app(p, opIs(), snone(), tr(k[0]), ssome(tr(k[2])), snone());
            } else if (k[1].name === 'ISNOT') {
              return RUNTIME.getField(ast, 's-check-test')
                .app(p, opIsNot(), snone(), tr(k[0]), ssome(tr(k[2])), snone());
            } else if (k[1].name === 'SATISFIES') {
              return RUNTIME.getField(ast, 's-check-test')
                .app(p, opSat(), snone(), tr(k[0]), ssome(tr(k[2])), snone());
            } else if (k[1].name === 'RAISES') {
              return RUNTIME.getField(ast, 's-check-test')
                .app(p, opRaise(), snone(), tr(k[0]), ssome(tr(k[2])), snone());
            }
            break;
        }
        throw new Error("Unknown assert-stmt: " + k[0].name);
      }

      // ---------------------------------------------------------------------------
      // Where-clause handler: returns [checkLocOpt, checkBodyOpt]
      function trWhereClause(node) {
        var k = node.kids;
        var p = pos(node.pos);
        // [WHERE, LBRACE, (block-stmt|assert-stmt)*, RBRACE]
        var checkStmts = k.slice(2, k.length - 1)
          .filter(function(c) { return c.name === 'assert-stmt' || c.name === 'block-stmt'; })
          .map(function(c) { return c.name === 'block-stmt' ? trStmt(c, p) : trAssertStmt(c); });
        var checkBody = sblock(p, checkStmts.length > 0 ? checkStmts : [sid(p, "nothing")]);
        return [ssome(p), ssome(checkBody)];
      }

      return tr(node);
    }  // end translate()

    // ---------------------------------------------------------------------------
    // surface-parse entry point
    function surfaceParse(src, fileName) {
      tokenizer.Tokenizer.tokenizeFrom(src);
      var parseResult = parser.JavaGrammar.parse(tokenizer.Tokenizer);
      if (!parseResult) {
        RUNTIME.ffi.throwParseErrorNextToken(
          makePyretPos(fileName, {startRow: 0, startCol: 0, startChar: 0,
                                   endRow: 0,   endCol: 0,   endChar: 0}));
      }
      var count = parser.JavaGrammar.countAllParses(parseResult);
      if (count !== 1) {
        RUNTIME.ffi.throwParseErrorNextToken(
          makePyretPos(fileName, {startRow: 0, startCol: 0, startChar: 0,
                                   endRow: 0,   endCol: 0,   endChar: 0}));
      }
      var tree = parser.JavaGrammar.constructUniqueParse(parseResult);
      return translate(tree, fileName);
    }

    return RUNTIME.makeModuleReturn(
      {
        "surface-parse": RUNTIME.makeFunction(function(src, fileName) {
          RUNTIME.ffi.checkArity(2, arguments, "surface-parse", false);
          RUNTIME.checkString(src);
          RUNTIME.checkString(fileName);
          return surfaceParse(RUNTIME.unwrap(src), RUNTIME.unwrap(fileName));
        }, "surface-parse"),
        "maybe-surface-parse": RUNTIME.makeFunction(function(src, fileName) {
          RUNTIME.ffi.checkArity(2, arguments, "maybe-surface-parse", false);
          RUNTIME.checkString(src);
          RUNTIME.checkString(fileName);
          try {
            return RUNTIME.ffi.makeSome(surfaceParse(RUNTIME.unwrap(src), RUNTIME.unwrap(fileName)));
          } catch(e) {
            return RUNTIME.ffi.makeNone();
          }
        }, "maybe-surface-parse"),
      },
      {}
    );
  }
})
