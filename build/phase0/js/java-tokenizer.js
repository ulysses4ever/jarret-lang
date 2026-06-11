define("pyret-base/js/java-tokenizer", ["jglr/jglr"], function(E) {
  const SrcLoc = E.SrcLoc;
  const GenTokenizer = E.Tokenizer2;
  const IGNORED_WS = {name: "WS"};

  function Tokenizer(spec) {
    [spec.keywords, spec.comments, spec.symbols].forEach(function(specs) {
      for (var first in specs)
        specs[first].forEach(function(s) {
          if (s.parenIsForExp === true)
            s.parenIsForExp = "PARENSPACE";
          else if (!s.parenIsForExp)
            s.parenIsForExp = false;
        });
    });
    for (var first in spec.keywords) {
      spec.keywords[first].forEach(function(s) { s.noFollow = spec.keywordsNoFollow; });
    }
    GenTokenizer.call(this, spec);
    this.parenIsForExp = "PARENSPACE";
  }
  Tokenizer.prototype = Object.create(GenTokenizer.prototype);
  Tokenizer.prototype.tokenizeFrom = function(str) {
    GenTokenizer.prototype.tokenizeFrom.call(this, str);
    this.parenIsForExp = "PARENSPACE";
  };
  Tokenizer.prototype.makeToken = function makeToken(tok_name, s, pos, tok_spec) {
    var t = new E.Token(tok_name, s);
    t.pos = pos;
    this.parenIsForExp = tok_spec && tok_spec.parenIsForExp;
    this.priorWhitespace = false;
    return t;
  };
  Tokenizer.prototype.makeWSToken = function makeWSToken(startLine, startCol, startPos) {
    this.parenIsForExp = true;
    this.priorWhitespace = true;
    this.addWhitespace(SrcLoc.make(startLine, startCol, startPos, this.line, this.col, this.pos));
    return IGNORED_WS;
  };

  // Reuse Pyret's escape-fixing logic for strings
  const escapes = new RegExp("^(.*?)\\\\([\\\\\"\'nrt]|u[0-9A-Fa-f]{1,4}|x[0-9A-Fa-f]{1,2}|[0-7]{1,3}|[\r\n]{1,2})");
  function fixEscapes(s) {
    var ret = "";
    var match = escapes.exec(s);
    while (match !== null) {
      var esc = match[2];
      ret += match[1];
      s = s.slice(match[0].length);
      if (esc === "\n" || esc === "\r" || esc === "\n\r" || esc === "\r\n") {}
      else if (esc === "n") { ret += "\n"; }
      else if (esc === "r") { ret += "\r"; }
      else if (esc === "t") { ret += "\t"; }
      else if (esc === "\"") { ret += "\""; }
      else if (esc === "'") { ret += "'"; }
      else if (esc === "\\") { ret += "\\"; }
      else if (esc[0] === 'u') { ret += String.fromCharCode(parseInt(esc.slice(1), 16)); }
      else if (esc[0] === 'x') { ret += String.fromCharCode(parseInt(esc.slice(1), 16)); }
      else { ret += String.fromCharCode(parseInt(esc, 8)); }
      match = escapes.exec(s);
    }
    ret += s;
    return ret;
  }

  function makeTrie(kwds) {
    var ans = Object.create(null);
    for (var i = 0; i < kwds.length; i++) {
      var firsts = kwds[i].firsts || [kwds[i].val[0]];
      firsts.forEach(function(first) {
        var byFirst = ans[first];
        if (byFirst === undefined)
          byFirst = ans[first] = [];
        byFirst.push(kwds[i]);
      });
    }
    return ans;
  }
  function makeDict(str) {
    var ans = {};
    for (var i = 0; i < str.length; i++) {
      ans[str[i]] = true;
    }
    return ans;
  }

  // keywordsNoFollow: characters that may NOT follow a keyword (identifier continuations)
  const keywordsNoFollow = new Set("-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890");

  const wsString = " \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff";
  const whitespace = makeDict(wsString);
  const identChars = makeDict("_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");

  // Java keywords (all set parenIsForExp: true so keyword(...) always produces PARENSPACE)
  var keywords = makeTrie([
    // Control flow
    {name: "IF",      val: "if",      parenIsForExp: true},
    {name: "ELSE",    val: "else",    parenIsForExp: true},
    {name: "FOR",     val: "for",     parenIsForExp: true},
    {name: "WHILE",   val: "while",   parenIsForExp: true},
    {name: "SWITCH",  val: "switch",  parenIsForExp: true},
    {name: "CASE",    val: "case",    parenIsForExp: true},
    {name: "DEFAULT", val: "default", parenIsForExp: true},
    {name: "RETURN",  val: "return",  parenIsForExp: true},
    {name: "YIELD",   val: "yield",   parenIsForExp: true},
    {name: "BREAK",   val: "break",   parenIsForExp: true},
    // Declarations
    {name: "VAR",     val: "var",     parenIsForExp: true},
    {name: "REC",     val: "rec",     parenIsForExp: true},
    {name: "DATA",    val: "data",    parenIsForExp: true},
    {name: "NEW",     val: "new",     parenIsForExp: true},
    // Module system
    {name: "IMPORT",  val: "import",  parenIsForExp: true},
    {name: "INCLUDE", val: "include", parenIsForExp: true},
    {name: "AS",      val: "as",      parenIsForExp: true},
    {name: "FROM",    val: "from",    parenIsForExp: true},
    // Where clause (Pyret-style)
    {name: "WHERE",   val: "where",   parenIsForExp: true},
    {name: "IS",      val: "is",      parenIsForExp: true},
    {name: "ISNOT",   val: "is-not",  parenIsForExp: true},
    {name: "SATISFIES", val: "satisfies", parenIsForExp: true},
    {name: "RAISES",  val: "raises",  parenIsForExp: true},
    // Debugging
    {name: "SPY",     val: "spy",     parenIsForExp: true},
    // Block expression (Pyret's `block:`)
    {name: "BLOCK",   val: "block",   parenIsForExp: true},
    // Multi-branch conditional (Pyret's ask:)
    {name: "ASK",       val: "ask",       parenIsForExp: true},
    {name: "OTHERWISE", val: "otherwise", parenIsForExp: true},
    // Table literals
    {name: "TABLE",     val: "table",     parenIsForExp: true},
    {name: "ROW",       val: "row",       parenIsForExp: true},
    // Table column operations
    {name: "SIEVE",     val: "sieve",     parenIsForExp: true},
    {name: "USING",     val: "using",     parenIsForExp: true},
    {name: "ORDER",     val: "order",     parenIsForExp: true},
    {name: "ASCENDING", val: "ascending", parenIsForExp: true},
    {name: "DESCENDING",val: "descending",parenIsForExp: true},
    {name: "SELECT",    val: "select",    parenIsForExp: true},
    {name: "EXTEND",    val: "extend",    parenIsForExp: true},
    {name: "EXTRACT",   val: "extract",   parenIsForExp: true},
    // Type keywords
    {name: "INT",     val: "int",     parenIsForExp: true},
    {name: "LONG",    val: "long",    parenIsForExp: true},
    {name: "DOUBLE",  val: "double",  parenIsForExp: true},
    {name: "FLOAT",   val: "float",   parenIsForExp: true},
    {name: "BOOLEAN", val: "boolean", parenIsForExp: true},
    {name: "VOID",    val: "void",    parenIsForExp: true},
    // Literals
    {name: "TRUE",    val: "true"},
    {name: "FALSE",   val: "false"},
    {name: "NULL",    val: "null"},
    // Test assertions
    {name: "ASSERTEQUALS",      val: "assertEquals"},
    {name: "ASSERTNOTEQUALS",   val: "assertNotEquals"},
    {name: "ASSERTTRUE",        val: "assertTrue"},
    {name: "ASSERTFALSE",       val: "assertFalse"},
    {name: "ASSERTSATISFIES",   val: "assertSatisfies"},
    {name: "ASSERTRAISES",      val: "assertRaises"},
  ]);

  // String literals – reuse double-quote and single-quote patterns
  const dquot_str = new RegExp("\"(?:\\\\[01234567]{1,3}|\\\\x[0-9a-fA-F]{1,2}|\\\\u[0-9a-fA-F]{1,4}|\\\\[\\\\nrt\"\']|[^\\\\\"\n\r])*\"", "g");
  const squot_str = new RegExp("\'(?:\\\\[01234567]{1,3}|\\\\x[0-9a-fA-F]{1,2}|\\\\u[0-9a-fA-F]{1,4}|\\\\[\\\\nrt\"\']|[^\\\\\'\n\r])*\'", "g");
  const unterminated_string = new RegExp("(?:[\"\']).*", "g");

  // Number pattern
  const digit = makeDict("0123456789");

  var symbols = makeTrie([
    // Paired delimiters
    {name: "LBRACE",  val: "{", parenIsForExp: "PARENAFTERBRACE"},
    {name: "RBRACE",  val: "}"},
    {name: "LBRACK",  val: "[", parenIsForExp: true},
    {name: "RBRACK",  val: "]"},
    // ( is space-sensitive for function call disambiguation
    { name: "LPAREN", val: "(", parenIsForExp: true,
      process: function processLParen(tok_spec) {
        var tok_type = this.parenIsForExp || "PARENNOSPACE";
        if (this.priorWhitespace)
          tok_type = "PARENSPACE";
        var line = this.curLine, col = this.curCol, pos = this.pos;
        this.curCol++;
        this.pos++;
        return this.makeToken(tok_type, "(",
          SrcLoc.make(line, col, pos, this.curLine, this.curCol, this.pos),
          tok_spec);
      }},
    {name: "RPAREN",  val: ")"},
    // Separators
    {name: "COMMA",   val: ",", parenIsForExp: true},
    {name: "SEMI",    val: ";", parenIsForExp: true},
    {name: "DOT",     val: ".", noFollow: new Set("1234567890")},
    // Annotation / Check
    { name: "ATCHECK", val: "@Check", parenIsForExp: true },
    // Multi-char operators (must appear before single-char versions)
    {name: "AND",          val: "&&", parenIsForExp: true},
    {name: "OR",           val: "||", parenIsForExp: true},
    {name: "COLONCOLON",   val: "::"},
    {name: "COLONEQUALS",  val: ":=", parenIsForExp: true},
    {name: "COLON",        val: ":", parenIsForExp: true},
    {name: "THINARROW",    val: "->", parenIsForExp: true},
    {name: "EQUALEQUAL",   val: "==", parenIsForExp: true},
    {name: "NEQ",          val: "!=", parenIsForExp: true},
    {name: "LEQ",          val: "<=", parenIsForExp: true},
    {name: "GEQ",          val: ">=", parenIsForExp: true},
    {name: "THICKARROW",   val: "=>", parenIsForExp: true},
    {name: "EQUALS",       val: "=", noFollow: new Set("=~>"), parenIsForExp: true},
    {name: "LT",           val: "<", noFollow: new Set("="), parenIsForExp: true},
    {name: "GT",           val: ">", noFollow: new Set("="), parenIsForExp: true},
    {name: "BANG",         val: "!", noFollow: new Set("="), parenIsForExp: true},
    {name: "PLUS",         val: "+", parenIsForExp: true},
    {name: "DASH",         val: "-", noFollow: new Set(">"), parenIsForExp: true},
    {name: "TIMES",        val: "*", parenIsForExp: true},
    {name: "SLASH",        val: "/", noFollow: new Set("/"), parenIsForExp: true},
    {name: "PERCENT",      val: "%", parenIsForExp: true},
    // Number token
    { name: "NUMBER", val: "", firsts: new Set("0123456789"),
      process: function tokenizeNumber(tok_spec) {
        var line = this.curLine, col = this.curCol, pos = this.pos;
        // Integer portion
        this.pos++; this.curCol++;
        while (digit[this.str[this.pos]]) {
          this.pos++; this.curCol++;
        }
        // Optional decimal
        if (this.str[this.pos] === ".") {
          var ahead = this.pos + 1;
          if (digit[this.str[ahead]]) {
            this.pos++; this.curCol++;
            while (digit[this.str[this.pos]]) {
              this.pos++; this.curCol++;
            }
          }
        }
        // Optional exponent
        if (this.str[this.pos] === "e" || this.str[this.pos] === "E") {
          var advance = this.pos + 1;
          if (this.str[advance] === "+" || this.str[advance] === "-") advance++;
          if (digit[this.str[advance]]) {
            advance++;
            while (digit[this.str[advance]]) advance++;
            this.curCol += (advance - this.pos);
            this.pos = advance;
          }
        }
        this.priorWhitespace = false;
        return this.makeToken("NUMBER", this.str.slice(pos, this.pos),
          SrcLoc.make(line, col, pos, this.curLine, this.curCol, this.pos),
          tok_spec);
      }},
    // NAME token (identifiers, including type names like String)
    { name: "NAME", val: "", firsts: new Set("_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
      process: function tokenizeName(tok_spec) {
        var line = this.curLine, col = this.curCol, pos = this.pos;
        this.pos++; this.curCol++;
        while (this.pos < this.len) {
          if (identChars[this.str[this.pos]]) {
            this.pos++; this.curCol++;
          } else if (this.str[this.pos] === "-") {
            // Allow kebab-case identifiers (Pyret style) for interop
            var front = this.pos + 1;
            while (this.str[front] === "-") front++;
            if (identChars[this.str[front]]) {
              this.curCol += (front - this.pos);
              this.pos = front;
            } else {
              break;
            }
          } else {
            break;
          }
        }
        return this.makeToken("NAME", this.str.slice(pos, this.pos),
          SrcLoc.make(line, col, pos, this.curLine, this.curCol, this.pos),
          tok_spec);
      }},
    // String literals
    { name: "STRING", val: "\"",
      process: function tokenizeDQString(tok_spec) {
        var line = this.curLine, col = this.curCol, pos = this.pos;
        var match;
        dquot_str.lastIndex = this.pos;
        unterminated_string.lastIndex = this.pos;
        if ((match = dquot_str.exec(this.str))) {
          this.pos += match[0].length;
          this.curCol += match[0].length;
          return this.makeToken("STRING", fixEscapes(this.str.slice(pos, this.pos)),
            SrcLoc.make(line, col, pos, this.curLine, this.curCol, this.pos), tok_spec);
        } else if ((match = unterminated_string.exec(this.str))) {
          this.pos += match[0].length;
          this.curCol += match[0].length;
          return this.makeToken("UNTERMINATED-STRING", this.str.slice(pos, this.pos),
            SrcLoc.make(line, col, pos, this.curLine, this.curCol, this.pos), tok_spec);
        }
      }},
    { name: "STRING", val: "'",
      process: function tokenizeSQString(tok_spec) {
        var line = this.curLine, col = this.curCol, pos = this.pos;
        var match;
        squot_str.lastIndex = this.pos;
        unterminated_string.lastIndex = this.pos;
        if ((match = squot_str.exec(this.str))) {
          this.pos += match[0].length;
          this.curCol += match[0].length;
          return this.makeToken("STRING", fixEscapes(this.str.slice(pos, this.pos)),
            SrcLoc.make(line, col, pos, this.curLine, this.curCol, this.pos), tok_spec);
        } else if ((match = unterminated_string.exec(this.str))) {
          this.pos += match[0].length;
          this.curCol += match[0].length;
          return this.makeToken("UNTERMINATED-STRING", this.str.slice(pos, this.pos),
            SrcLoc.make(line, col, pos, this.curLine, this.curCol, this.pos), tok_spec);
        }
      }},
  ]);

  // Java-style comments
  const comments = makeTrie([
    // Block comment /* ... */
    { name: "BLOCKCOMMENT", val: "/*",
      process: function tokenizeBlockComment(tok_spec) {
        var line = this.curLine, col = this.curCol, pos = this.pos;
        this.pos += 2; this.curCol += 2;
        while (this.pos < this.len) {
          if (this.str.startsWith("*/", this.pos)) {
            this.pos += 2; this.curCol += 2;
            return this.makeWSToken(line, col, pos);
          } else if (this.str[this.pos] === "\n") {
            this.curLine++; this.curCol = 0; this.pos++;
          } else {
            this.pos++; this.curCol++;
          }
        }
        // Unterminated
        var ws_loc = SrcLoc.make(line, col, pos, this.curLine, this.curCol, this.pos);
        return this.makeToken("UNTERMINATED-BLOCK-COMMENT", this.str.slice(pos, this.pos), ws_loc, tok_spec);
      }},
    // Line comment //
    { name: "COMMENT", val: "//",
      process: function tokenizeLineComment(tok_spec) {
        var line = this.curLine, col = this.curCol, pos = this.pos;
        while (this.pos < this.len && this.str[this.pos] !== "\n" && this.str[this.pos] !== "\r") {
          this.pos++; this.curCol++;
        }
        return this.makeWSToken(line, col, pos);
      }},
  ]);

  const spec = {
    keywords,
    keywordsNoFollow,
    symbols,
    whitespace,
    comments,
    ignore: new Set(["WS", "COMMENT"])
  };

  return {
    'Tokenizer': new Tokenizer(spec)
  };
});
