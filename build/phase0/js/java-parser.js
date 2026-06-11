define('pyret-base/js/java-parser', ['jglr/jglr'],
/** @param {{Grammar : {fromSerializable : !Function}, Nonterm : !Object, Token : !Object, Rule : !Object}} E */
function(E) {
  const Grammar = E.Grammar;
  const Nonterm = E.Nonterm;
  const Token = E.Token;
  const Rule = E.Rule;

  var g_json = {
    "version": 1,
    "start": "START",
    "name": "JavaGrammar",
    "acceptStates": [
      1
    ],
    "mode": "RNGLR",
    "rulesByOldId": {
      "0": {
        "name": "program",
        "symbols": [
          "@prelude",
          "@top-block"
        ]
      },
      "1": {
        "name": "prelude",
        "symbols": [
          "@prelude_I0*"
        ]
      },
      "2": {
        "name": "prelude_I0*",
        "symbols": []
      },
      "3": {
        "name": "prelude_I0*",
        "symbols": [
          "@prelude_I0*",
          "@prelude_I0"
        ]
      },
      "4": {
        "name": "prelude_I0",
        "symbols": [
          "@import-stmt"
        ]
      },
      "5": {
        "name": "import-stmt",
        "symbols": [
          "'IMPORT",
          "'NAME",
          "'SEMI"
        ]
      },
      "6": {
        "name": "import-stmt",
        "symbols": [
          "'IMPORT",
          "'NAME",
          "'AS",
          "'NAME",
          "'SEMI"
        ]
      },
      "7": {
        "name": "import-stmt",
        "symbols": [
          "'IMPORT",
          "'NAME",
          "'PARENNOSPACE",
          "'STRING",
          "'RPAREN",
          "'SEMI"
        ]
      },
      "8": {
        "name": "import-stmt",
        "symbols": [
          "'IMPORT",
          "'NAME",
          "'PARENNOSPACE",
          "'STRING",
          "'RPAREN",
          "'AS",
          "'NAME",
          "'SEMI"
        ]
      },
      "9": {
        "name": "import-stmt",
        "symbols": [
          "'INCLUDE",
          "'NAME",
          "'SEMI"
        ]
      },
      "10": {
        "name": "import-stmt",
        "symbols": [
          "'INCLUDE",
          "'NAME",
          "'AS",
          "'NAME",
          "'SEMI"
        ]
      },
      "11": {
        "name": "import-stmt",
        "symbols": [
          "'INCLUDE",
          "'NAME",
          "'PARENNOSPACE",
          "'STRING",
          "'RPAREN",
          "'SEMI"
        ]
      },
      "12": {
        "name": "top-block",
        "symbols": [
          "@top-block_I0*"
        ]
      },
      "13": {
        "name": "top-block_I0*",
        "symbols": []
      },
      "14": {
        "name": "top-block_I0*",
        "symbols": [
          "@top-block_I0*",
          "@top-block_I0"
        ]
      },
      "15": {
        "name": "top-block_I0",
        "symbols": [
          "@top-stmt"
        ]
      },
      "16": {
        "name": "top-stmt",
        "symbols": [
          "@fun-decl"
        ]
      },
      "17": {
        "name": "top-stmt",
        "symbols": [
          "@data-decl"
        ]
      },
      "18": {
        "name": "top-stmt",
        "symbols": [
          "@check-block"
        ]
      },
      "19": {
        "name": "top-stmt",
        "symbols": [
          "@let-stmt"
        ]
      },
      "20": {
        "name": "top-stmt",
        "symbols": [
          "@var-stmt"
        ]
      },
      "21": {
        "name": "top-stmt",
        "symbols": [
          "@assign-stmt"
        ]
      },
      "22": {
        "name": "top-stmt",
        "symbols": [
          "@expr-stmt"
        ]
      },
      "23": {
        "name": "block",
        "symbols": [
          "'LBRACE",
          "@block_I1*",
          "'RBRACE"
        ]
      },
      "24": {
        "name": "block_I1*",
        "symbols": []
      },
      "25": {
        "name": "block_I1*",
        "symbols": [
          "@block_I1*",
          "@block_I1"
        ]
      },
      "26": {
        "name": "block_I1",
        "symbols": [
          "@block-stmt"
        ]
      },
      "27": {
        "name": "block-stmt",
        "symbols": [
          "@fun-decl"
        ]
      },
      "28": {
        "name": "block-stmt",
        "symbols": [
          "@data-decl"
        ]
      },
      "29": {
        "name": "block-stmt",
        "symbols": [
          "@if-stmt"
        ]
      },
      "30": {
        "name": "block-stmt",
        "symbols": [
          "@for-stmt"
        ]
      },
      "31": {
        "name": "block-stmt",
        "symbols": [
          "@check-block"
        ]
      },
      "32": {
        "name": "block-stmt",
        "symbols": [
          "@return-stmt"
        ]
      },
      "33": {
        "name": "block-stmt",
        "symbols": [
          "@let-stmt"
        ]
      },
      "34": {
        "name": "block-stmt",
        "symbols": [
          "@var-stmt"
        ]
      },
      "35": {
        "name": "block-stmt",
        "symbols": [
          "@assign-stmt"
        ]
      },
      "36": {
        "name": "block-stmt",
        "symbols": [
          "@yield-stmt"
        ]
      },
      "37": {
        "name": "block-stmt",
        "symbols": [
          "@spy-stmt"
        ]
      },
      "38": {
        "name": "block-stmt",
        "symbols": [
          "@expr-stmt"
        ]
      },
      "39": {
        "name": "spy-stmt",
        "symbols": [
          "'SPY",
          "'PARENSPACE",
          "'NAME",
          "@spy-stmt_I3*",
          "'RPAREN",
          "'SEMI"
        ]
      },
      "40": {
        "name": "spy-stmt_I3*",
        "symbols": []
      },
      "41": {
        "name": "spy-stmt_I3*",
        "symbols": [
          "@spy-stmt_I3*",
          "@spy-stmt_I3"
        ]
      },
      "42": {
        "name": "spy-stmt_I3",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "43": {
        "name": "fun-decl",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'PARENNOSPACE",
          "@fun-decl_I3?",
          "'RPAREN",
          "@block",
          "@fun-decl_I6?"
        ]
      },
      "44": {
        "name": "fun-decl_I3?",
        "symbols": []
      },
      "45": {
        "name": "fun-decl_I3?",
        "symbols": [
          "@fun-decl_I3"
        ]
      },
      "46": {
        "name": "fun-decl_I3",
        "symbols": [
          "@param",
          "@fun-decl_I3_I1*"
        ]
      },
      "47": {
        "name": "fun-decl_I3_I1*",
        "symbols": []
      },
      "48": {
        "name": "fun-decl_I3_I1*",
        "symbols": [
          "@fun-decl_I3_I1*",
          "@fun-decl_I3_I1"
        ]
      },
      "49": {
        "name": "fun-decl_I3_I1",
        "symbols": [
          "'COMMA",
          "@param"
        ]
      },
      "50": {
        "name": "fun-decl_I6?",
        "symbols": []
      },
      "51": {
        "name": "fun-decl_I6?",
        "symbols": [
          "@fun-decl_I6"
        ]
      },
      "52": {
        "name": "fun-decl_I6",
        "symbols": [
          "@where-clause"
        ]
      },
      "53": {
        "name": "param",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "54": {
        "name": "where-clause",
        "symbols": [
          "'WHERE",
          "'LBRACE",
          "@where-clause_I2*",
          "'RBRACE"
        ]
      },
      "55": {
        "name": "where-clause_I2*",
        "symbols": []
      },
      "56": {
        "name": "where-clause_I2*",
        "symbols": [
          "@where-clause_I2*",
          "@where-clause_I2"
        ]
      },
      "57": {
        "name": "where-clause_I2",
        "symbols": [
          "@block-stmt"
        ]
      },
      "58": {
        "name": "where-clause_I2",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "59": {
        "name": "type-ann",
        "symbols": [
          "'INT"
        ]
      },
      "60": {
        "name": "type-ann",
        "symbols": [
          "'LONG"
        ]
      },
      "61": {
        "name": "type-ann",
        "symbols": [
          "'DOUBLE"
        ]
      },
      "62": {
        "name": "type-ann",
        "symbols": [
          "'FLOAT"
        ]
      },
      "63": {
        "name": "type-ann",
        "symbols": [
          "'BOOLEAN"
        ]
      },
      "64": {
        "name": "type-ann",
        "symbols": [
          "'VOID"
        ]
      },
      "65": {
        "name": "type-ann",
        "symbols": [
          "'NAME",
          "@type-ann_A6_I1?"
        ]
      },
      "66": {
        "name": "type-ann_A6_I1?",
        "symbols": []
      },
      "67": {
        "name": "type-ann_A6_I1?",
        "symbols": [
          "@type-ann_A6_I1"
        ]
      },
      "68": {
        "name": "type-ann_A6_I1",
        "symbols": [
          "'LT",
          "@type-ann",
          "@type-ann_A6_I1_I2*",
          "'GT"
        ]
      },
      "69": {
        "name": "type-ann_A6_I1_I2*",
        "symbols": []
      },
      "70": {
        "name": "type-ann_A6_I1_I2*",
        "symbols": [
          "@type-ann_A6_I1_I2*",
          "@type-ann_A6_I1_I2"
        ]
      },
      "71": {
        "name": "type-ann_A6_I1_I2",
        "symbols": [
          "'COMMA",
          "@type-ann"
        ]
      },
      "72": {
        "name": "type-ann",
        "symbols": [
          "'PARENSPACE",
          "@type-ann_A7_I1?",
          "'THINARROW",
          "@type-ann",
          "'RPAREN"
        ]
      },
      "73": {
        "name": "type-ann_A7_I1?",
        "symbols": []
      },
      "74": {
        "name": "type-ann_A7_I1?",
        "symbols": [
          "@type-ann_A7_I1"
        ]
      },
      "75": {
        "name": "type-ann_A7_I1",
        "symbols": [
          "@type-ann",
          "@type-ann_A7_I1_I1*"
        ]
      },
      "76": {
        "name": "type-ann_A7_I1_I1*",
        "symbols": []
      },
      "77": {
        "name": "type-ann_A7_I1_I1*",
        "symbols": [
          "@type-ann_A7_I1_I1*",
          "@type-ann_A7_I1_I1"
        ]
      },
      "78": {
        "name": "type-ann_A7_I1_I1",
        "symbols": [
          "'COMMA",
          "@type-ann"
        ]
      },
      "79": {
        "name": "data-decl",
        "symbols": [
          "'DATA",
          "'NAME",
          "'LBRACE",
          "@variant-decl",
          "@data-decl_I4*",
          "@data-decl_I5?",
          "'RBRACE"
        ]
      },
      "80": {
        "name": "data-decl_I4*",
        "symbols": []
      },
      "81": {
        "name": "data-decl_I4*",
        "symbols": [
          "@data-decl_I4*",
          "@data-decl_I4"
        ]
      },
      "82": {
        "name": "data-decl_I4",
        "symbols": [
          "'SEMI",
          "@variant-decl"
        ]
      },
      "83": {
        "name": "data-decl_I5?",
        "symbols": []
      },
      "84": {
        "name": "data-decl_I5?",
        "symbols": [
          "@data-decl_I5"
        ]
      },
      "85": {
        "name": "data-decl_I5",
        "symbols": [
          "'SEMI"
        ]
      },
      "86": {
        "name": "variant-decl",
        "symbols": [
          "'NAME",
          "'PARENNOSPACE",
          "@variant-decl_A0_I2?",
          "'RPAREN"
        ]
      },
      "87": {
        "name": "variant-decl_A0_I2?",
        "symbols": []
      },
      "88": {
        "name": "variant-decl_A0_I2?",
        "symbols": [
          "@variant-decl_A0_I2"
        ]
      },
      "89": {
        "name": "variant-decl_A0_I2",
        "symbols": [
          "@variant-member",
          "@variant-decl_A0_I2_I1*"
        ]
      },
      "90": {
        "name": "variant-decl_A0_I2_I1*",
        "symbols": []
      },
      "91": {
        "name": "variant-decl_A0_I2_I1*",
        "symbols": [
          "@variant-decl_A0_I2_I1*",
          "@variant-decl_A0_I2_I1"
        ]
      },
      "92": {
        "name": "variant-decl_A0_I2_I1",
        "symbols": [
          "'COMMA",
          "@variant-member"
        ]
      },
      "93": {
        "name": "variant-decl",
        "symbols": [
          "'NAME"
        ]
      },
      "94": {
        "name": "variant-member",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "95": {
        "name": "if-stmt",
        "symbols": [
          "'IF",
          "'PARENSPACE",
          "@full-expr",
          "'RPAREN",
          "@block",
          "@if-stmt_I5*",
          "@if-stmt_I6?"
        ]
      },
      "96": {
        "name": "if-stmt_I5*",
        "symbols": []
      },
      "97": {
        "name": "if-stmt_I5*",
        "symbols": [
          "@if-stmt_I5*",
          "@if-stmt_I5"
        ]
      },
      "98": {
        "name": "if-stmt_I5",
        "symbols": [
          "'ELSE",
          "'IF",
          "'PARENSPACE",
          "@full-expr",
          "'RPAREN",
          "@block"
        ]
      },
      "99": {
        "name": "if-stmt_I6?",
        "symbols": []
      },
      "100": {
        "name": "if-stmt_I6?",
        "symbols": [
          "@if-stmt_I6"
        ]
      },
      "101": {
        "name": "if-stmt_I6",
        "symbols": [
          "'ELSE",
          "@block"
        ]
      },
      "102": {
        "name": "for-stmt",
        "symbols": [
          "'FOR",
          "'PARENSPACE",
          "@type-ann",
          "'NAME",
          "'COLON",
          "@full-expr",
          "'RPAREN",
          "@block"
        ]
      },
      "103": {
        "name": "return-stmt",
        "symbols": [
          "'RETURN",
          "@full-expr",
          "'SEMI"
        ]
      },
      "104": {
        "name": "return-stmt",
        "symbols": [
          "'RETURN",
          "'SEMI"
        ]
      },
      "105": {
        "name": "let-stmt",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'EQUALS",
          "@full-expr",
          "@let-stmt_I4?"
        ]
      },
      "106": {
        "name": "let-stmt_I4?",
        "symbols": []
      },
      "107": {
        "name": "let-stmt_I4?",
        "symbols": [
          "@let-stmt_I4"
        ]
      },
      "108": {
        "name": "let-stmt_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "109": {
        "name": "var-stmt",
        "symbols": [
          "'VAR",
          "@type-ann",
          "'NAME",
          "'EQUALS",
          "@full-expr",
          "@var-stmt_I5?"
        ]
      },
      "110": {
        "name": "var-stmt_I5?",
        "symbols": []
      },
      "111": {
        "name": "var-stmt_I5?",
        "symbols": [
          "@var-stmt_I5"
        ]
      },
      "112": {
        "name": "var-stmt_I5",
        "symbols": [
          "'SEMI"
        ]
      },
      "113": {
        "name": "assign-stmt",
        "symbols": [
          "'NAME",
          "'COLONEQUALS",
          "@full-expr",
          "@assign-stmt_I3?"
        ]
      },
      "114": {
        "name": "assign-stmt_I3?",
        "symbols": []
      },
      "115": {
        "name": "assign-stmt_I3?",
        "symbols": [
          "@assign-stmt_I3"
        ]
      },
      "116": {
        "name": "assign-stmt_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "117": {
        "name": "expr-stmt",
        "symbols": [
          "@full-expr",
          "@expr-stmt_I1?"
        ]
      },
      "118": {
        "name": "expr-stmt_I1?",
        "symbols": []
      },
      "119": {
        "name": "expr-stmt_I1?",
        "symbols": [
          "@expr-stmt_I1"
        ]
      },
      "120": {
        "name": "expr-stmt_I1",
        "symbols": [
          "'SEMI"
        ]
      },
      "121": {
        "name": "check-block",
        "symbols": [
          "'ATCHECK",
          "'VOID",
          "'NAME",
          "'PARENNOSPACE",
          "'RPAREN",
          "'LBRACE",
          "@check-block_A0_I6*",
          "'RBRACE"
        ]
      },
      "122": {
        "name": "check-block_A0_I6*",
        "symbols": []
      },
      "123": {
        "name": "check-block_A0_I6*",
        "symbols": [
          "@check-block_A0_I6*",
          "@check-block_A0_I6"
        ]
      },
      "124": {
        "name": "check-block_A0_I6",
        "symbols": [
          "@block-stmt"
        ]
      },
      "125": {
        "name": "check-block_A0_I6",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "126": {
        "name": "check-block",
        "symbols": [
          "'ATCHECK",
          "'LBRACE",
          "@check-block_A1_I2*",
          "'RBRACE"
        ]
      },
      "127": {
        "name": "check-block_A1_I2*",
        "symbols": []
      },
      "128": {
        "name": "check-block_A1_I2*",
        "symbols": [
          "@check-block_A1_I2*",
          "@check-block_A1_I2"
        ]
      },
      "129": {
        "name": "check-block_A1_I2",
        "symbols": [
          "@block-stmt"
        ]
      },
      "130": {
        "name": "check-block_A1_I2",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "131": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTEQUALS",
          "'PARENNOSPACE",
          "@full-expr",
          "'COMMA",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A0_I6?"
        ]
      },
      "132": {
        "name": "assert-stmt_A0_I6?",
        "symbols": []
      },
      "133": {
        "name": "assert-stmt_A0_I6?",
        "symbols": [
          "@assert-stmt_A0_I6"
        ]
      },
      "134": {
        "name": "assert-stmt_A0_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "135": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTNOTEQUALS",
          "'PARENNOSPACE",
          "@full-expr",
          "'COMMA",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A1_I6?"
        ]
      },
      "136": {
        "name": "assert-stmt_A1_I6?",
        "symbols": []
      },
      "137": {
        "name": "assert-stmt_A1_I6?",
        "symbols": [
          "@assert-stmt_A1_I6"
        ]
      },
      "138": {
        "name": "assert-stmt_A1_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "139": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTTRUE",
          "'PARENNOSPACE",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A2_I4?"
        ]
      },
      "140": {
        "name": "assert-stmt_A2_I4?",
        "symbols": []
      },
      "141": {
        "name": "assert-stmt_A2_I4?",
        "symbols": [
          "@assert-stmt_A2_I4"
        ]
      },
      "142": {
        "name": "assert-stmt_A2_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "143": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTFALSE",
          "'PARENNOSPACE",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A3_I4?"
        ]
      },
      "144": {
        "name": "assert-stmt_A3_I4?",
        "symbols": []
      },
      "145": {
        "name": "assert-stmt_A3_I4?",
        "symbols": [
          "@assert-stmt_A3_I4"
        ]
      },
      "146": {
        "name": "assert-stmt_A3_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "147": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTSATISFIES",
          "'PARENNOSPACE",
          "@full-expr",
          "'COMMA",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A4_I6?"
        ]
      },
      "148": {
        "name": "assert-stmt_A4_I6?",
        "symbols": []
      },
      "149": {
        "name": "assert-stmt_A4_I6?",
        "symbols": [
          "@assert-stmt_A4_I6"
        ]
      },
      "150": {
        "name": "assert-stmt_A4_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "151": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTRAISES",
          "'PARENNOSPACE",
          "@full-expr",
          "'COMMA",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A5_I6?"
        ]
      },
      "152": {
        "name": "assert-stmt_A5_I6?",
        "symbols": []
      },
      "153": {
        "name": "assert-stmt_A5_I6?",
        "symbols": [
          "@assert-stmt_A5_I6"
        ]
      },
      "154": {
        "name": "assert-stmt_A5_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "155": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'IS",
          "@full-expr",
          "@assert-stmt_A6_I3?"
        ]
      },
      "156": {
        "name": "assert-stmt_A6_I3?",
        "symbols": []
      },
      "157": {
        "name": "assert-stmt_A6_I3?",
        "symbols": [
          "@assert-stmt_A6_I3"
        ]
      },
      "158": {
        "name": "assert-stmt_A6_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "159": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'ISNOT",
          "@full-expr",
          "@assert-stmt_A7_I3?"
        ]
      },
      "160": {
        "name": "assert-stmt_A7_I3?",
        "symbols": []
      },
      "161": {
        "name": "assert-stmt_A7_I3?",
        "symbols": [
          "@assert-stmt_A7_I3"
        ]
      },
      "162": {
        "name": "assert-stmt_A7_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "163": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'SATISFIES",
          "@full-expr",
          "@assert-stmt_A8_I3?"
        ]
      },
      "164": {
        "name": "assert-stmt_A8_I3?",
        "symbols": []
      },
      "165": {
        "name": "assert-stmt_A8_I3?",
        "symbols": [
          "@assert-stmt_A8_I3"
        ]
      },
      "166": {
        "name": "assert-stmt_A8_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "167": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'RAISES",
          "@full-expr",
          "@assert-stmt_A9_I3?"
        ]
      },
      "168": {
        "name": "assert-stmt_A9_I3?",
        "symbols": []
      },
      "169": {
        "name": "assert-stmt_A9_I3?",
        "symbols": [
          "@assert-stmt_A9_I3"
        ]
      },
      "170": {
        "name": "assert-stmt_A9_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "171": {
        "name": "switch-expr",
        "symbols": [
          "'SWITCH",
          "'PARENSPACE",
          "@full-expr",
          "'RPAREN",
          "'LBRACE",
          "@switch-expr_I5*",
          "@switch-expr_I6?",
          "'RBRACE"
        ]
      },
      "172": {
        "name": "switch-expr_I5*",
        "symbols": []
      },
      "173": {
        "name": "switch-expr_I5*",
        "symbols": [
          "@switch-expr_I5*",
          "@switch-expr_I5"
        ]
      },
      "174": {
        "name": "switch-expr_I5",
        "symbols": [
          "@case-branch"
        ]
      },
      "175": {
        "name": "switch-expr_I6?",
        "symbols": []
      },
      "176": {
        "name": "switch-expr_I6?",
        "symbols": [
          "@switch-expr_I6"
        ]
      },
      "177": {
        "name": "switch-expr_I6",
        "symbols": [
          "@default-branch"
        ]
      },
      "178": {
        "name": "case-branch",
        "symbols": [
          "'CASE",
          "'NAME",
          "'PARENNOSPACE",
          "@case-branch_A0_I3?",
          "'RPAREN",
          "'COLON",
          "@switch-body"
        ]
      },
      "179": {
        "name": "case-branch_A0_I3?",
        "symbols": []
      },
      "180": {
        "name": "case-branch_A0_I3?",
        "symbols": [
          "@case-branch_A0_I3"
        ]
      },
      "181": {
        "name": "case-branch_A0_I3",
        "symbols": [
          "'NAME",
          "@case-branch_A0_I3_I1*"
        ]
      },
      "182": {
        "name": "case-branch_A0_I3_I1*",
        "symbols": []
      },
      "183": {
        "name": "case-branch_A0_I3_I1*",
        "symbols": [
          "@case-branch_A0_I3_I1*",
          "@case-branch_A0_I3_I1"
        ]
      },
      "184": {
        "name": "case-branch_A0_I3_I1",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "185": {
        "name": "case-branch",
        "symbols": [
          "'CASE",
          "'NAME",
          "'COLON",
          "@switch-body"
        ]
      },
      "186": {
        "name": "default-branch",
        "symbols": [
          "'DEFAULT",
          "'COLON",
          "@switch-body"
        ]
      },
      "187": {
        "name": "switch-body",
        "symbols": [
          "@switch-body_I0*",
          "@yield-stmt"
        ]
      },
      "188": {
        "name": "switch-body_I0*",
        "symbols": []
      },
      "189": {
        "name": "switch-body_I0*",
        "symbols": [
          "@switch-body_I0*",
          "@switch-body_I0"
        ]
      },
      "190": {
        "name": "switch-body_I0",
        "symbols": [
          "@block-stmt"
        ]
      },
      "191": {
        "name": "yield-stmt",
        "symbols": [
          "'YIELD",
          "@full-expr",
          "@yield-stmt_I2?"
        ]
      },
      "192": {
        "name": "yield-stmt_I2?",
        "symbols": []
      },
      "193": {
        "name": "yield-stmt_I2?",
        "symbols": [
          "@yield-stmt_I2"
        ]
      },
      "194": {
        "name": "yield-stmt_I2",
        "symbols": [
          "'SEMI"
        ]
      },
      "195": {
        "name": "lambda-expr",
        "symbols": [
          "'PARENSPACE",
          "@lambda-expr_A0_I1?",
          "'RPAREN",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "196": {
        "name": "lambda-expr_A0_I1?",
        "symbols": []
      },
      "197": {
        "name": "lambda-expr_A0_I1?",
        "symbols": [
          "@lambda-expr_A0_I1"
        ]
      },
      "198": {
        "name": "lambda-expr_A0_I1",
        "symbols": [
          "@lambda-param",
          "@lambda-expr_A0_I1_I1*"
        ]
      },
      "199": {
        "name": "lambda-expr_A0_I1_I1*",
        "symbols": []
      },
      "200": {
        "name": "lambda-expr_A0_I1_I1*",
        "symbols": [
          "@lambda-expr_A0_I1_I1*",
          "@lambda-expr_A0_I1_I1"
        ]
      },
      "201": {
        "name": "lambda-expr_A0_I1_I1",
        "symbols": [
          "'COMMA",
          "@lambda-param"
        ]
      },
      "202": {
        "name": "lambda-expr",
        "symbols": [
          "'PARENNOSPACE",
          "@lambda-expr_A1_I1?",
          "'RPAREN",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "203": {
        "name": "lambda-expr_A1_I1?",
        "symbols": []
      },
      "204": {
        "name": "lambda-expr_A1_I1?",
        "symbols": [
          "@lambda-expr_A1_I1"
        ]
      },
      "205": {
        "name": "lambda-expr_A1_I1",
        "symbols": [
          "@lambda-param",
          "@lambda-expr_A1_I1_I1*"
        ]
      },
      "206": {
        "name": "lambda-expr_A1_I1_I1*",
        "symbols": []
      },
      "207": {
        "name": "lambda-expr_A1_I1_I1*",
        "symbols": [
          "@lambda-expr_A1_I1_I1*",
          "@lambda-expr_A1_I1_I1"
        ]
      },
      "208": {
        "name": "lambda-expr_A1_I1_I1",
        "symbols": [
          "'COMMA",
          "@lambda-param"
        ]
      },
      "209": {
        "name": "lambda-param",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "210": {
        "name": "lambda-param",
        "symbols": [
          "'NAME"
        ]
      },
      "211": {
        "name": "full-expr",
        "symbols": [
          "@lambda-expr"
        ]
      },
      "212": {
        "name": "full-expr",
        "symbols": [
          "@binop-expr"
        ]
      },
      "213": {
        "name": "binop-expr",
        "symbols": [
          "@unop-expr",
          "@binop-expr_I1*"
        ]
      },
      "214": {
        "name": "binop-expr_I1*",
        "symbols": []
      },
      "215": {
        "name": "binop-expr_I1*",
        "symbols": [
          "@binop-expr_I1*",
          "@binop-expr_I1"
        ]
      },
      "216": {
        "name": "binop-expr_I1",
        "symbols": [
          "@binop",
          "@unop-expr"
        ]
      },
      "217": {
        "name": "binop",
        "symbols": [
          "'PLUS"
        ]
      },
      "218": {
        "name": "binop",
        "symbols": [
          "'DASH"
        ]
      },
      "219": {
        "name": "binop",
        "symbols": [
          "'TIMES"
        ]
      },
      "220": {
        "name": "binop",
        "symbols": [
          "'SLASH"
        ]
      },
      "221": {
        "name": "binop",
        "symbols": [
          "'PERCENT"
        ]
      },
      "222": {
        "name": "binop",
        "symbols": [
          "'EQUALEQUAL"
        ]
      },
      "223": {
        "name": "binop",
        "symbols": [
          "'NEQ"
        ]
      },
      "224": {
        "name": "binop",
        "symbols": [
          "'LEQ"
        ]
      },
      "225": {
        "name": "binop",
        "symbols": [
          "'GEQ"
        ]
      },
      "226": {
        "name": "binop",
        "symbols": [
          "'LT"
        ]
      },
      "227": {
        "name": "binop",
        "symbols": [
          "'GT"
        ]
      },
      "228": {
        "name": "binop",
        "symbols": [
          "'AND"
        ]
      },
      "229": {
        "name": "binop",
        "symbols": [
          "'OR"
        ]
      },
      "230": {
        "name": "unop-expr",
        "symbols": [
          "'BANG",
          "@unop-expr"
        ]
      },
      "231": {
        "name": "unop-expr",
        "symbols": [
          "'DASH",
          "@unop-expr"
        ]
      },
      "232": {
        "name": "unop-expr",
        "symbols": [
          "@app-or-access"
        ]
      },
      "233": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'PARENNOSPACE",
          "@app-or-access_A0_I2?",
          "'RPAREN"
        ]
      },
      "234": {
        "name": "app-or-access_A0_I2?",
        "symbols": []
      },
      "235": {
        "name": "app-or-access_A0_I2?",
        "symbols": [
          "@app-or-access_A0_I2"
        ]
      },
      "236": {
        "name": "app-or-access_A0_I2",
        "symbols": [
          "@full-expr",
          "@app-or-access_A0_I2_I1*"
        ]
      },
      "237": {
        "name": "app-or-access_A0_I2_I1*",
        "symbols": []
      },
      "238": {
        "name": "app-or-access_A0_I2_I1*",
        "symbols": [
          "@app-or-access_A0_I2_I1*",
          "@app-or-access_A0_I2_I1"
        ]
      },
      "239": {
        "name": "app-or-access_A0_I2_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "240": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'DOT",
          "'NAME"
        ]
      },
      "241": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'LBRACK",
          "@binop-expr",
          "'RBRACK"
        ]
      },
      "242": {
        "name": "app-or-access",
        "symbols": [
          "@prim-expr"
        ]
      },
      "243": {
        "name": "prim-expr",
        "symbols": [
          "'NUMBER"
        ]
      },
      "244": {
        "name": "prim-expr",
        "symbols": [
          "'STRING"
        ]
      },
      "245": {
        "name": "prim-expr",
        "symbols": [
          "'TRUE"
        ]
      },
      "246": {
        "name": "prim-expr",
        "symbols": [
          "'FALSE"
        ]
      },
      "247": {
        "name": "prim-expr",
        "symbols": [
          "'NULL"
        ]
      },
      "248": {
        "name": "prim-expr",
        "symbols": [
          "'NAME"
        ]
      },
      "249": {
        "name": "prim-expr",
        "symbols": [
          "'PARENSPACE",
          "@binop-expr",
          "'RPAREN"
        ]
      },
      "250": {
        "name": "prim-expr",
        "symbols": [
          "'PARENAFTERBRACE",
          "@binop-expr",
          "'RPAREN"
        ]
      },
      "251": {
        "name": "prim-expr",
        "symbols": [
          "@switch-expr"
        ]
      },
      "252": {
        "name": "prim-expr",
        "symbols": [
          "@construct-expr"
        ]
      },
      "253": {
        "name": "prim-expr",
        "symbols": [
          "@map-for-expr"
        ]
      },
      "254": {
        "name": "prim-expr",
        "symbols": [
          "@new-expr"
        ]
      },
      "255": {
        "name": "prim-expr",
        "symbols": [
          "@ask-expr"
        ]
      },
      "256": {
        "name": "prim-expr",
        "symbols": [
          "@table-expr"
        ]
      },
      "257": {
        "name": "prim-expr",
        "symbols": [
          "@record-expr"
        ]
      },
      "258": {
        "name": "record-expr",
        "symbols": [
          "'LBRACE",
          "@record-field",
          "@record-expr_A0_I2*",
          "'RBRACE"
        ]
      },
      "259": {
        "name": "record-expr_A0_I2*",
        "symbols": []
      },
      "260": {
        "name": "record-expr_A0_I2*",
        "symbols": [
          "@record-expr_A0_I2*",
          "@record-expr_A0_I2"
        ]
      },
      "261": {
        "name": "record-expr_A0_I2",
        "symbols": [
          "'COMMA",
          "@record-field"
        ]
      },
      "262": {
        "name": "record-expr",
        "symbols": [
          "'LBRACE",
          "'RBRACE"
        ]
      },
      "263": {
        "name": "record-field",
        "symbols": [
          "'NAME",
          "'COLON",
          "@full-expr"
        ]
      },
      "264": {
        "name": "table-expr",
        "symbols": [
          "'TABLE",
          "'LBRACE",
          "@table-header",
          "@table-expr_I3*",
          "'SEMI",
          "@table-expr_I5*",
          "'RBRACE"
        ]
      },
      "265": {
        "name": "table-expr_I3*",
        "symbols": []
      },
      "266": {
        "name": "table-expr_I3*",
        "symbols": [
          "@table-expr_I3*",
          "@table-expr_I3"
        ]
      },
      "267": {
        "name": "table-expr_I3",
        "symbols": [
          "'COMMA",
          "@table-header"
        ]
      },
      "268": {
        "name": "table-expr_I5*",
        "symbols": []
      },
      "269": {
        "name": "table-expr_I5*",
        "symbols": [
          "@table-expr_I5*",
          "@table-expr_I5"
        ]
      },
      "270": {
        "name": "table-expr_I5",
        "symbols": [
          "@table-row",
          "'SEMI"
        ]
      },
      "271": {
        "name": "table-header",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "272": {
        "name": "table-row",
        "symbols": [
          "'ROW",
          "'COLON",
          "@full-expr",
          "@table-row_I3*"
        ]
      },
      "273": {
        "name": "table-row_I3*",
        "symbols": []
      },
      "274": {
        "name": "table-row_I3*",
        "symbols": [
          "@table-row_I3*",
          "@table-row_I3"
        ]
      },
      "275": {
        "name": "table-row_I3",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "276": {
        "name": "ask-expr",
        "symbols": [
          "'ASK",
          "'LBRACE",
          "@ask-branch",
          "'SEMI",
          "@ask-expr_A0_I4*",
          "'RBRACE"
        ]
      },
      "277": {
        "name": "ask-expr_A0_I4*",
        "symbols": []
      },
      "278": {
        "name": "ask-expr_A0_I4*",
        "symbols": [
          "@ask-expr_A0_I4*",
          "@ask-expr_A0_I4"
        ]
      },
      "279": {
        "name": "ask-expr_A0_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "280": {
        "name": "ask-expr",
        "symbols": [
          "'ASK",
          "'LBRACE",
          "@ask-branch",
          "'SEMI",
          "@ask-expr_A1_I4*",
          "@otherwise-branch",
          "'SEMI",
          "'RBRACE"
        ]
      },
      "281": {
        "name": "ask-expr_A1_I4*",
        "symbols": []
      },
      "282": {
        "name": "ask-expr_A1_I4*",
        "symbols": [
          "@ask-expr_A1_I4*",
          "@ask-expr_A1_I4"
        ]
      },
      "283": {
        "name": "ask-expr_A1_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "284": {
        "name": "ask-branch",
        "symbols": [
          "@binop-expr",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "285": {
        "name": "otherwise-branch",
        "symbols": [
          "'OTHERWISE",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "286": {
        "name": "new-expr",
        "symbols": [
          "'NEW",
          "'NAME",
          "'PARENNOSPACE",
          "@new-expr_I3?",
          "'RPAREN"
        ]
      },
      "287": {
        "name": "new-expr_I3?",
        "symbols": []
      },
      "288": {
        "name": "new-expr_I3?",
        "symbols": [
          "@new-expr_I3"
        ]
      },
      "289": {
        "name": "new-expr_I3",
        "symbols": [
          "@full-expr",
          "@new-expr_I3_I1*"
        ]
      },
      "290": {
        "name": "new-expr_I3_I1*",
        "symbols": []
      },
      "291": {
        "name": "new-expr_I3_I1*",
        "symbols": [
          "@new-expr_I3_I1*",
          "@new-expr_I3_I1"
        ]
      },
      "292": {
        "name": "new-expr_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "293": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'NAME",
          "'COLON",
          "@construct-expr_A0_I3?",
          "'RBRACK"
        ]
      },
      "294": {
        "name": "construct-expr_A0_I3?",
        "symbols": []
      },
      "295": {
        "name": "construct-expr_A0_I3?",
        "symbols": [
          "@construct-expr_A0_I3"
        ]
      },
      "296": {
        "name": "construct-expr_A0_I3",
        "symbols": [
          "@full-expr",
          "@construct-expr_A0_I3_I1*"
        ]
      },
      "297": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": []
      },
      "298": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": [
          "@construct-expr_A0_I3_I1*",
          "@construct-expr_A0_I3_I1"
        ]
      },
      "299": {
        "name": "construct-expr_A0_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "300": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'RBRACK"
        ]
      },
      "301": {
        "name": "map-for-expr",
        "symbols": [
          "'LBRACK",
          "'FOR",
          "'PARENSPACE",
          "@type-ann",
          "'NAME",
          "'COLON",
          "@full-expr",
          "'RPAREN",
          "@block",
          "'RBRACK"
        ]
      },
      "302": {
        "name": "START",
        "symbols": [
          "@program"
        ]
      },
      "392": {
        "position": 1,
        "like": 0
      },
      "449": {
        "position": 1,
        "like": 1
      },
      "739": {
        "position": 2,
        "like": 0
      },
      "741": {
        "position": 1,
        "like": 12
      },
      "2660": {
        "position": 2,
        "like": 3
      },
      "2690": {
        "position": 1,
        "like": 4
      },
      "2931": {
        "position": 1,
        "like": 65
      },
      "2932": {
        "position": 1,
        "like": 248
      },
      "3041": {
        "position": 1,
        "like": 244
      },
      "3083": {
        "position": 2,
        "like": 14
      },
      "3111": {
        "position": 1,
        "like": 15
      },
      "3139": {
        "position": 1,
        "like": 16
      },
      "3167": {
        "position": 1,
        "like": 17
      },
      "3195": {
        "position": 1,
        "like": 18
      },
      "3223": {
        "position": 1,
        "like": 19
      },
      "3251": {
        "position": 1,
        "like": 20
      },
      "3279": {
        "position": 1,
        "like": 21
      },
      "3307": {
        "position": 1,
        "like": 22
      },
      "3605": {
        "position": 1,
        "like": 59
      },
      "3607": {
        "position": 1,
        "like": 60
      },
      "3609": {
        "position": 1,
        "like": 61
      },
      "3611": {
        "position": 1,
        "like": 62
      },
      "3613": {
        "position": 1,
        "like": 63
      },
      "3615": {
        "position": 1,
        "like": 64
      },
      "3645": {
        "position": 1,
        "like": 117
      },
      "3838": {
        "position": 1,
        "like": 251
      },
      "3922": {
        "position": 1,
        "like": 211
      },
      "3951": {
        "position": 1,
        "like": 212
      },
      "3980": {
        "position": 1,
        "like": 213
      },
      "4171": {
        "position": 1,
        "like": 232
      },
      "4464": {
        "position": 1,
        "like": 242
      },
      "4506": {
        "position": 1,
        "like": 243
      },
      "4548": {
        "position": 1,
        "like": 245
      },
      "4590": {
        "position": 1,
        "like": 246
      },
      "4632": {
        "position": 1,
        "like": 247
      },
      "4716": {
        "position": 1,
        "like": 252
      },
      "4758": {
        "position": 1,
        "like": 253
      },
      "4800": {
        "position": 1,
        "like": 254
      },
      "4842": {
        "position": 1,
        "like": 255
      },
      "4884": {
        "position": 1,
        "like": 256
      },
      "4926": {
        "position": 1,
        "like": 257
      },
      "5346": {
        "position": 2,
        "like": 65
      },
      "5348": {
        "position": 1,
        "like": 67
      },
      "5388": {
        "position": 1,
        "like": 210
      },
      "5394": {
        "position": 1,
        "like": 205
      },
      "5429": {
        "position": 1,
        "like": 204
      },
      "5434": {
        "position": 2,
        "like": 262
      },
      "5537": {
        "position": 1,
        "like": 75
      },
      "5557": {
        "position": 1,
        "like": 74
      },
      "5590": {
        "position": 1,
        "like": 197
      },
      "5592": {
        "position": 1,
        "like": 198
      },
      "5752": {
        "position": 1,
        "like": 120
      },
      "5780": {
        "position": 2,
        "like": 117
      },
      "5808": {
        "position": 1,
        "like": 119
      },
      "6042": {
        "position": 2,
        "like": 213
      },
      "6360": {
        "position": 2,
        "like": 231
      },
      "6401": {
        "position": 2,
        "like": 230
      },
      "6725": {
        "position": 2,
        "like": 300
      },
      "7013": {
        "position": 3,
        "like": 5
      },
      "7133": {
        "position": 3,
        "like": 9
      },
      "7240": {
        "position": 3,
        "like": 113
      },
      "7349": {
        "position": 2,
        "like": 209
      },
      "7352": {
        "position": 2,
        "like": 205
      },
      "7484": {
        "position": 2,
        "like": 75
      },
      "7530": {
        "position": 2,
        "like": 198
      },
      "7537": {
        "position": 3,
        "like": 249
      },
      "9632": {
        "position": 1,
        "like": 226
      },
      "9649": {
        "position": 1,
        "like": 227
      },
      "9666": {
        "position": 2,
        "like": 215
      },
      "9748": {
        "position": 1,
        "like": 217
      },
      "9765": {
        "position": 1,
        "like": 218
      },
      "9782": {
        "position": 1,
        "like": 219
      },
      "9799": {
        "position": 1,
        "like": 220
      },
      "9816": {
        "position": 1,
        "like": 221
      },
      "9833": {
        "position": 1,
        "like": 222
      },
      "9850": {
        "position": 1,
        "like": 223
      },
      "9867": {
        "position": 1,
        "like": 224
      },
      "9884": {
        "position": 1,
        "like": 225
      },
      "9901": {
        "position": 1,
        "like": 228
      },
      "9918": {
        "position": 1,
        "like": 229
      },
      "9942": {
        "position": 1,
        "like": 236
      },
      "10003": {
        "position": 1,
        "like": 235
      },
      "10024": {
        "position": 3,
        "like": 240
      },
      "10234": {
        "position": 3,
        "like": 250
      },
      "10648": {
        "position": 1,
        "like": 116
      },
      "10676": {
        "position": 4,
        "like": 113
      },
      "10704": {
        "position": 1,
        "like": 115
      },
      "10735": {
        "position": 2,
        "like": 207
      },
      "10774": {
        "position": 3,
        "like": 263
      },
      "10809": {
        "position": 4,
        "like": 258
      },
      "10854": {
        "position": 2,
        "like": 260
      },
      "10860": {
        "position": 2,
        "like": 77
      },
      "10908": {
        "position": 2,
        "like": 200
      },
      "10942": {
        "position": 1,
        "like": 45
      },
      "10944": {
        "position": 1,
        "like": 46
      },
      "10950": {
        "position": 4,
        "like": 105
      },
      "11060": {
        "position": 1,
        "like": 93
      },
      "11182": {
        "position": 1,
        "like": 27
      },
      "11221": {
        "position": 1,
        "like": 28
      },
      "11260": {
        "position": 1,
        "like": 31
      },
      "11299": {
        "position": 1,
        "like": 33
      },
      "11338": {
        "position": 1,
        "like": 34
      },
      "11377": {
        "position": 1,
        "like": 35
      },
      "11416": {
        "position": 1,
        "like": 38
      },
      "11485": {
        "position": 4,
        "like": 126
      },
      "11513": {
        "position": 1,
        "like": 129
      },
      "11552": {
        "position": 1,
        "like": 29
      },
      "11591": {
        "position": 1,
        "like": 30
      },
      "11630": {
        "position": 1,
        "like": 32
      },
      "11669": {
        "position": 1,
        "like": 36
      },
      "11708": {
        "position": 1,
        "like": 37
      },
      "11840": {
        "position": 1,
        "like": 130
      },
      "12287": {
        "position": 2,
        "like": 128
      },
      "13149": {
        "position": 2,
        "like": 216
      },
      "13190": {
        "position": 2,
        "like": 236
      },
      "13197": {
        "position": 4,
        "like": 233
      },
      "13239": {
        "position": 4,
        "like": 241
      },
      "13283": {
        "position": 1,
        "like": 296
      },
      "13333": {
        "position": 1,
        "like": 295
      },
      "13377": {
        "position": 2,
        "like": 271
      },
      "13581": {
        "position": 1,
        "like": 289
      },
      "13629": {
        "position": 1,
        "like": 288
      },
      "13631": {
        "position": 5,
        "like": 6
      },
      "13721": {
        "position": 5,
        "like": 10
      },
      "13784": {
        "position": 4,
        "like": 68
      },
      "13786": {
        "position": 2,
        "like": 70
      },
      "13789": {
        "position": 2,
        "like": 208
      },
      "13792": {
        "position": 5,
        "like": 202
      },
      "13821": {
        "position": 2,
        "like": 261
      },
      "13824": {
        "position": 2,
        "like": 78
      },
      "13827": {
        "position": 5,
        "like": 72
      },
      "13829": {
        "position": 5,
        "like": 195
      },
      "13858": {
        "position": 2,
        "like": 201
      },
      "13861": {
        "position": 2,
        "like": 53
      },
      "13920": {
        "position": 2,
        "like": 46
      },
      "13927": {
        "position": 1,
        "like": 108
      },
      "13955": {
        "position": 5,
        "like": 105
      },
      "13983": {
        "position": 1,
        "like": 107
      },
      "14055": {
        "position": 5,
        "like": 109
      },
      "14473": {
        "position": 2,
        "like": 104
      },
      "14785": {
        "position": 2,
        "like": 191
      },
      "15017": {
        "position": 2,
        "like": 238
      },
      "15020": {
        "position": 2,
        "like": 296
      },
      "15027": {
        "position": 5,
        "like": 293
      },
      "15160": {
        "position": 2,
        "like": 266
      },
      "15163": {
        "position": 3,
        "like": 284
      },
      "15320": {
        "position": 2,
        "like": 289
      },
      "15327": {
        "position": 5,
        "like": 286
      },
      "15369": {
        "position": 6,
        "like": 7
      },
      "15429": {
        "position": 6,
        "like": 11
      },
      "15459": {
        "position": 2,
        "like": 71
      },
      "15462": {
        "position": 6,
        "like": 43
      },
      "15694": {
        "position": 2,
        "like": 48
      },
      "15703": {
        "position": 1,
        "like": 88
      },
      "15705": {
        "position": 1,
        "like": 89
      },
      "15712": {
        "position": 1,
        "like": 85
      },
      "15744": {
        "position": 2,
        "like": 81
      },
      "15747": {
        "position": 1,
        "like": 84
      },
      "15749": {
        "position": 1,
        "like": 112
      },
      "15777": {
        "position": 6,
        "like": 109
      },
      "15805": {
        "position": 1,
        "like": 111
      },
      "15915": {
        "position": 3,
        "like": 155
      },
      "16068": {
        "position": 3,
        "like": 159
      },
      "16221": {
        "position": 3,
        "like": 163
      },
      "16374": {
        "position": 3,
        "like": 167
      },
      "16566": {
        "position": 3,
        "like": 103
      },
      "16839": {
        "position": 1,
        "like": 194
      },
      "16878": {
        "position": 3,
        "like": 191
      },
      "16917": {
        "position": 1,
        "like": 193
      },
      "17119": {
        "position": 2,
        "like": 239
      },
      "17125": {
        "position": 2,
        "like": 298
      },
      "17218": {
        "position": 2,
        "like": 267
      },
      "17221": {
        "position": 6,
        "like": 276
      },
      "17281": {
        "position": 2,
        "like": 278
      },
      "17359": {
        "position": 2,
        "like": 282
      },
      "17382": {
        "position": 2,
        "like": 291
      },
      "17415": {
        "position": 7,
        "like": 43
      },
      "17443": {
        "position": 1,
        "like": 51
      },
      "17471": {
        "position": 1,
        "like": 52
      },
      "17621": {
        "position": 2,
        "like": 49
      },
      "17624": {
        "position": 2,
        "like": 94
      },
      "17627": {
        "position": 4,
        "like": 86
      },
      "17630": {
        "position": 2,
        "like": 89
      },
      "17637": {
        "position": 2,
        "like": 82
      },
      "17640": {
        "position": 7,
        "like": 79
      },
      "17764": {
        "position": 1,
        "like": 158
      },
      "17803": {
        "position": 4,
        "like": 155
      },
      "17842": {
        "position": 1,
        "like": 157
      },
      "17881": {
        "position": 1,
        "like": 162
      },
      "17920": {
        "position": 4,
        "like": 159
      },
      "17959": {
        "position": 1,
        "like": 161
      },
      "17998": {
        "position": 1,
        "like": 166
      },
      "18037": {
        "position": 4,
        "like": 163
      },
      "18076": {
        "position": 1,
        "like": 165
      },
      "18115": {
        "position": 1,
        "like": 170
      },
      "18154": {
        "position": 4,
        "like": 167
      },
      "18193": {
        "position": 1,
        "like": 169
      },
      "18349": {
        "position": 4,
        "like": 139
      },
      "18502": {
        "position": 4,
        "like": 143
      },
      "18918": {
        "position": 2,
        "like": 173
      },
      "18922": {
        "position": 1,
        "like": 174
      },
      "18926": {
        "position": 1,
        "like": 176
      },
      "18928": {
        "position": 1,
        "like": 177
      },
      "18940": {
        "position": 2,
        "like": 299
      },
      "18985": {
        "position": 7,
        "like": 264
      },
      "19027": {
        "position": 2,
        "like": 269
      },
      "19035": {
        "position": 2,
        "like": 279
      },
      "19053": {
        "position": 2,
        "like": 283
      },
      "19115": {
        "position": 2,
        "like": 292
      },
      "19118": {
        "position": 8,
        "like": 8
      },
      "19252": {
        "position": 3,
        "like": 23
      },
      "19281": {
        "position": 2,
        "like": 25
      },
      "19314": {
        "position": 1,
        "like": 26
      },
      "19350": {
        "position": 2,
        "like": 91
      },
      "19392": {
        "position": 2,
        "like": 41
      },
      "19398": {
        "position": 5,
        "like": 95
      },
      "19645": {
        "position": 1,
        "like": 142
      },
      "19684": {
        "position": 5,
        "like": 139
      },
      "19723": {
        "position": 1,
        "like": 141
      },
      "19762": {
        "position": 1,
        "like": 146
      },
      "19801": {
        "position": 5,
        "like": 143
      },
      "19840": {
        "position": 1,
        "like": 145
      },
      "19957": {
        "position": 8,
        "like": 121
      },
      "19985": {
        "position": 1,
        "like": 124
      },
      "20024": {
        "position": 1,
        "like": 125
      },
      "20063": {
        "position": 2,
        "like": 123
      },
      "20102": {
        "position": 8,
        "like": 171
      },
      "20260": {
        "position": 2,
        "like": 270
      },
      "20265": {
        "position": 8,
        "like": 280
      },
      "20307": {
        "position": 3,
        "like": 285
      },
      "20452": {
        "position": 2,
        "like": 92
      },
      "20455": {
        "position": 6,
        "like": 39
      },
      "20494": {
        "position": 2,
        "like": 42
      },
      "20497": {
        "position": 6,
        "like": 95
      },
      "20768": {
        "position": 6,
        "like": 131
      },
      "20921": {
        "position": 6,
        "like": 135
      },
      "21074": {
        "position": 6,
        "like": 147
      },
      "21227": {
        "position": 6,
        "like": 151
      },
      "21393": {
        "position": 3,
        "like": 186
      },
      "21503": {
        "position": 3,
        "like": 272
      },
      "21509": {
        "position": 4,
        "like": 54
      },
      "21537": {
        "position": 1,
        "like": 57
      },
      "21576": {
        "position": 2,
        "like": 56
      },
      "21615": {
        "position": 1,
        "like": 58
      },
      "21654": {
        "position": 7,
        "like": 95
      },
      "21693": {
        "position": 2,
        "like": 97
      },
      "21812": {
        "position": 1,
        "like": 100
      },
      "21890": {
        "position": 1,
        "like": 134
      },
      "21929": {
        "position": 7,
        "like": 131
      },
      "21968": {
        "position": 1,
        "like": 133
      },
      "22007": {
        "position": 1,
        "like": 138
      },
      "22046": {
        "position": 7,
        "like": 135
      },
      "22085": {
        "position": 1,
        "like": 137
      },
      "22124": {
        "position": 1,
        "like": 150
      },
      "22163": {
        "position": 7,
        "like": 147
      },
      "22202": {
        "position": 1,
        "like": 149
      },
      "22241": {
        "position": 1,
        "like": 154
      },
      "22280": {
        "position": 7,
        "like": 151
      },
      "22319": {
        "position": 1,
        "like": 153
      },
      "22358": {
        "position": 1,
        "like": 181
      },
      "22368": {
        "position": 1,
        "like": 180
      },
      "22370": {
        "position": 4,
        "like": 185
      },
      "22378": {
        "position": 1,
        "like": 190
      },
      "22410": {
        "position": 2,
        "like": 187
      },
      "22412": {
        "position": 2,
        "like": 189
      },
      "22444": {
        "position": 10,
        "like": 301
      },
      "22486": {
        "position": 4,
        "like": 272
      },
      "22493": {
        "position": 2,
        "like": 101
      },
      "22572": {
        "position": 8,
        "like": 102
      },
      "22611": {
        "position": 2,
        "like": 181
      },
      "22625": {
        "position": 2,
        "like": 274
      },
      "22671": {
        "position": 2,
        "like": 183
      },
      "22678": {
        "position": 2,
        "like": 275
      },
      "22721": {
        "position": 2,
        "like": 184
      },
      "22724": {
        "position": 7,
        "like": 178
      },
      "22768": {
        "position": 6,
        "like": 98
      }
    },
    "actionsByOldId": {
      "0": "dA",
      "1": "dA",
      "2": "Inline",
      "3": [
        "ListSnoc",
        "prelude_I0*",
        "prelude_I0",
        true
      ],
      "4": "Inline",
      "5": "dA",
      "6": "dA",
      "7": "dA",
      "8": "dA",
      "9": "dA",
      "10": "dA",
      "11": "dA",
      "12": "dA",
      "13": "Inline",
      "14": [
        "ListSnoc",
        "top-block_I0*",
        "top-block_I0",
        true
      ],
      "15": "Inline",
      "16": "dA",
      "17": "dA",
      "18": "dA",
      "19": "dA",
      "20": "dA",
      "21": "dA",
      "22": "dA",
      "23": "dA",
      "24": "Inline",
      "25": [
        "ListSnoc",
        "block_I1*",
        "block_I1",
        true
      ],
      "26": "Inline",
      "27": "dA",
      "28": "dA",
      "29": "dA",
      "30": "dA",
      "31": "dA",
      "32": "dA",
      "33": "dA",
      "34": "dA",
      "35": "dA",
      "36": "dA",
      "37": "dA",
      "38": "dA",
      "39": "dA",
      "40": "Inline",
      "41": [
        "ListSnoc",
        "spy-stmt_I3*",
        "spy-stmt_I3",
        true
      ],
      "42": "Inline",
      "43": "dA",
      "44": "Inline",
      "45": "Inline",
      "46": "Inline",
      "47": "Inline",
      "48": [
        "ListSnoc",
        "fun-decl_I3_I1*",
        "fun-decl_I3_I1",
        true
      ],
      "49": "Inline",
      "50": "Inline",
      "51": "Inline",
      "52": "Inline",
      "53": "dA",
      "54": "dA",
      "55": "Inline",
      "56": [
        "ListSnoc",
        "where-clause_I2*",
        "where-clause_I2",
        true
      ],
      "57": "Inline",
      "58": "Inline",
      "59": "dA",
      "60": "dA",
      "61": "dA",
      "62": "dA",
      "63": "dA",
      "64": "dA",
      "65": "dA",
      "66": "Inline",
      "67": "Inline",
      "68": "Inline",
      "69": "Inline",
      "70": [
        "ListSnoc",
        "type-ann_A6_I1_I2*",
        "type-ann_A6_I1_I2",
        true
      ],
      "71": "Inline",
      "72": "dA",
      "73": "Inline",
      "74": "Inline",
      "75": "Inline",
      "76": "Inline",
      "77": [
        "ListSnoc",
        "type-ann_A7_I1_I1*",
        "type-ann_A7_I1_I1",
        true
      ],
      "78": "Inline",
      "79": "dA",
      "80": "Inline",
      "81": [
        "ListSnoc",
        "data-decl_I4*",
        "data-decl_I4",
        true
      ],
      "82": "Inline",
      "83": "Inline",
      "84": "Inline",
      "85": "Inline",
      "86": "dA",
      "87": "Inline",
      "88": "Inline",
      "89": "Inline",
      "90": "Inline",
      "91": [
        "ListSnoc",
        "variant-decl_A0_I2_I1*",
        "variant-decl_A0_I2_I1",
        true
      ],
      "92": "Inline",
      "93": "dA",
      "94": "dA",
      "95": "dA",
      "96": "Inline",
      "97": [
        "ListSnoc",
        "if-stmt_I5*",
        "if-stmt_I5",
        true
      ],
      "98": "Inline",
      "99": "Inline",
      "100": "Inline",
      "101": "Inline",
      "102": "dA",
      "103": "dA",
      "104": "dA",
      "105": "dA",
      "106": "Inline",
      "107": "Inline",
      "108": "Inline",
      "109": "dA",
      "110": "Inline",
      "111": "Inline",
      "112": "Inline",
      "113": "dA",
      "114": "Inline",
      "115": "Inline",
      "116": "Inline",
      "117": "dA",
      "118": "Inline",
      "119": "Inline",
      "120": "Inline",
      "121": "dA",
      "122": "Inline",
      "123": [
        "ListSnoc",
        "check-block_A0_I6*",
        "check-block_A0_I6",
        true
      ],
      "124": "Inline",
      "125": "Inline",
      "126": "dA",
      "127": "Inline",
      "128": [
        "ListSnoc",
        "check-block_A1_I2*",
        "check-block_A1_I2",
        true
      ],
      "129": "Inline",
      "130": "Inline",
      "131": "dA",
      "132": "Inline",
      "133": "Inline",
      "134": "Inline",
      "135": "dA",
      "136": "Inline",
      "137": "Inline",
      "138": "Inline",
      "139": "dA",
      "140": "Inline",
      "141": "Inline",
      "142": "Inline",
      "143": "dA",
      "144": "Inline",
      "145": "Inline",
      "146": "Inline",
      "147": "dA",
      "148": "Inline",
      "149": "Inline",
      "150": "Inline",
      "151": "dA",
      "152": "Inline",
      "153": "Inline",
      "154": "Inline",
      "155": "dA",
      "156": "Inline",
      "157": "Inline",
      "158": "Inline",
      "159": "dA",
      "160": "Inline",
      "161": "Inline",
      "162": "Inline",
      "163": "dA",
      "164": "Inline",
      "165": "Inline",
      "166": "Inline",
      "167": "dA",
      "168": "Inline",
      "169": "Inline",
      "170": "Inline",
      "171": "dA",
      "172": "Inline",
      "173": [
        "ListSnoc",
        "switch-expr_I5*",
        "switch-expr_I5",
        true
      ],
      "174": "Inline",
      "175": "Inline",
      "176": "Inline",
      "177": "Inline",
      "178": "dA",
      "179": "Inline",
      "180": "Inline",
      "181": "Inline",
      "182": "Inline",
      "183": [
        "ListSnoc",
        "case-branch_A0_I3_I1*",
        "case-branch_A0_I3_I1",
        true
      ],
      "184": "Inline",
      "185": "dA",
      "186": "dA",
      "187": "dA",
      "188": "Inline",
      "189": [
        "ListSnoc",
        "switch-body_I0*",
        "switch-body_I0",
        true
      ],
      "190": "Inline",
      "191": "dA",
      "192": "Inline",
      "193": "Inline",
      "194": "Inline",
      "195": "dA",
      "196": "Inline",
      "197": "Inline",
      "198": "Inline",
      "199": "Inline",
      "200": [
        "ListSnoc",
        "lambda-expr_A0_I1_I1*",
        "lambda-expr_A0_I1_I1",
        true
      ],
      "201": "Inline",
      "202": "dA",
      "203": "Inline",
      "204": "Inline",
      "205": "Inline",
      "206": "Inline",
      "207": [
        "ListSnoc",
        "lambda-expr_A1_I1_I1*",
        "lambda-expr_A1_I1_I1",
        true
      ],
      "208": "Inline",
      "209": "dA",
      "210": "dA",
      "211": "dA",
      "212": "dA",
      "213": "dA",
      "214": "Inline",
      "215": [
        "ListSnoc",
        "binop-expr_I1*",
        "binop-expr_I1",
        true
      ],
      "216": "Inline",
      "217": "dA",
      "218": "dA",
      "219": "dA",
      "220": "dA",
      "221": "dA",
      "222": "dA",
      "223": "dA",
      "224": "dA",
      "225": "dA",
      "226": "dA",
      "227": "dA",
      "228": "dA",
      "229": "dA",
      "230": "dA",
      "231": "dA",
      "232": "dA",
      "233": "dA",
      "234": "Inline",
      "235": "Inline",
      "236": "Inline",
      "237": "Inline",
      "238": [
        "ListSnoc",
        "app-or-access_A0_I2_I1*",
        "app-or-access_A0_I2_I1",
        true
      ],
      "239": "Inline",
      "240": "dA",
      "241": "dA",
      "242": "dA",
      "243": "dA",
      "244": "dA",
      "245": "dA",
      "246": "dA",
      "247": "dA",
      "248": "dA",
      "249": "dA",
      "250": "dA",
      "251": "dA",
      "252": "dA",
      "253": "dA",
      "254": "dA",
      "255": "dA",
      "256": "dA",
      "257": "dA",
      "258": "dA",
      "259": "Inline",
      "260": [
        "ListSnoc",
        "record-expr_A0_I2*",
        "record-expr_A0_I2",
        true
      ],
      "261": "Inline",
      "262": "dA",
      "263": "dA",
      "264": "dA",
      "265": "Inline",
      "266": [
        "ListSnoc",
        "table-expr_I3*",
        "table-expr_I3",
        true
      ],
      "267": "Inline",
      "268": "Inline",
      "269": [
        "ListSnoc",
        "table-expr_I5*",
        "table-expr_I5",
        true
      ],
      "270": "Inline",
      "271": "dA",
      "272": "dA",
      "273": "Inline",
      "274": [
        "ListSnoc",
        "table-row_I3*",
        "table-row_I3",
        true
      ],
      "275": "Inline",
      "276": "dA",
      "277": "Inline",
      "278": [
        "ListSnoc",
        "ask-expr_A0_I4*",
        "ask-expr_A0_I4",
        true
      ],
      "279": "Inline",
      "280": "dA",
      "281": "Inline",
      "282": [
        "ListSnoc",
        "ask-expr_A1_I4*",
        "ask-expr_A1_I4",
        true
      ],
      "283": "Inline",
      "284": "dA",
      "285": "dA",
      "286": "dA",
      "287": "Inline",
      "288": "Inline",
      "289": "Inline",
      "290": "Inline",
      "291": [
        "ListSnoc",
        "new-expr_I3_I1*",
        "new-expr_I3_I1",
        true
      ],
      "292": "Inline",
      "293": "dA",
      "294": "Inline",
      "295": "Inline",
      "296": "Inline",
      "297": "Inline",
      "298": [
        "ListSnoc",
        "construct-expr_A0_I3_I1*",
        "construct-expr_A0_I3_I1",
        true
      ],
      "299": "Inline",
      "300": "dA",
      "301": "dA",
      "302": "dA"
    },
    "flagsByOldId": {},
    "rules": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      72,
      66,
      67,
      68,
      69,
      70,
      71,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      93,
      87,
      88,
      89,
      90,
      91,
      92,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      126,
      122,
      123,
      124,
      125,
      127,
      128,
      129,
      130,
      131,
      135,
      139,
      143,
      147,
      151,
      155,
      159,
      163,
      167,
      132,
      133,
      134,
      136,
      137,
      138,
      140,
      141,
      142,
      144,
      145,
      146,
      148,
      149,
      150,
      152,
      153,
      154,
      156,
      157,
      158,
      160,
      161,
      162,
      164,
      165,
      166,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      185,
      179,
      180,
      181,
      182,
      183,
      184,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      202,
      196,
      197,
      198,
      199,
      200,
      201,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      240,
      241,
      242,
      234,
      235,
      236,
      237,
      238,
      239,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250,
      251,
      252,
      253,
      254,
      255,
      256,
      257,
      258,
      262,
      259,
      260,
      261,
      263,
      264,
      265,
      266,
      267,
      268,
      269,
      270,
      271,
      272,
      273,
      274,
      275,
      276,
      280,
      277,
      278,
      279,
      281,
      282,
      283,
      284,
      285,
      286,
      287,
      288,
      289,
      290,
      291,
      292,
      293,
      300,
      294,
      295,
      296,
      297,
      298,
      299,
      301,
      302
    ],
    "reduceActions": [
      0,
      1,
      1,
      2,
      2,
      3,
      392,
      4,
      12,
      4,
      13,
      5,
      449,
      0,
      739,
      0,
      741,
      0,
      2660,
      0,
      2690,
      0,
      2932,
      0,
      2931,
      12,
      66,
      12,
      203,
      46,
      3041,
      0,
      3083,
      0,
      3111,
      0,
      3139,
      0,
      3167,
      0,
      3195,
      0,
      3223,
      0,
      3251,
      0,
      3279,
      0,
      3307,
      0,
      196,
      44,
      73,
      14,
      3605,
      0,
      3607,
      0,
      3609,
      0,
      3611,
      0,
      3613,
      0,
      3615,
      0,
      3645,
      25,
      118,
      25,
      3838,
      0,
      3922,
      0,
      3951,
      0,
      3980,
      48,
      214,
      48,
      4171,
      0,
      4464,
      0,
      4506,
      0,
      4548,
      0,
      4590,
      0,
      4632,
      0,
      4716,
      0,
      4758,
      0,
      4800,
      0,
      4842,
      0,
      4884,
      0,
      4926,
      0,
      5346,
      0,
      5348,
      0,
      5388,
      0,
      5394,
      47,
      206,
      47,
      5429,
      0,
      5434,
      0,
      259,
      51,
      76,
      15,
      5537,
      15,
      5557,
      0,
      5590,
      0,
      5592,
      45,
      199,
      45,
      5752,
      0,
      5780,
      0,
      5808,
      0,
      127,
      27,
      6042,
      0,
      6360,
      0,
      6401,
      0,
      234,
      49,
      6725,
      0,
      7013,
      0,
      7133,
      0,
      69,
      13,
      7240,
      24,
      114,
      24,
      7349,
      0,
      7352,
      0,
      7484,
      0,
      7530,
      0,
      7537,
      0,
      44,
      8,
      9632,
      0,
      9649,
      0,
      9666,
      0,
      9748,
      0,
      9765,
      0,
      9782,
      0,
      9799,
      0,
      9816,
      0,
      9833,
      0,
      9850,
      0,
      9867,
      0,
      9884,
      0,
      9901,
      0,
      9918,
      0,
      9942,
      50,
      237,
      50,
      10003,
      0,
      10024,
      0,
      294,
      59,
      10234,
      0,
      265,
      52,
      287,
      57,
      10648,
      0,
      10676,
      0,
      10704,
      0,
      10735,
      0,
      10774,
      0,
      10809,
      0,
      10854,
      0,
      10860,
      0,
      10908,
      0,
      10942,
      0,
      10944,
      9,
      47,
      9,
      10950,
      22,
      106,
      22,
      11060,
      0,
      80,
      16,
      11182,
      0,
      11221,
      0,
      11260,
      0,
      11299,
      0,
      11338,
      0,
      11377,
      0,
      11416,
      0,
      11485,
      0,
      11513,
      0,
      11552,
      0,
      11591,
      0,
      11630,
      0,
      11669,
      0,
      11708,
      0,
      11840,
      0,
      12287,
      0,
      13149,
      0,
      13190,
      0,
      13197,
      0,
      13239,
      0,
      297,
      60,
      13283,
      60,
      13333,
      0,
      13377,
      0,
      277,
      55,
      281,
      56,
      13581,
      58,
      290,
      58,
      13629,
      0,
      13631,
      0,
      13721,
      0,
      13784,
      0,
      13786,
      0,
      13789,
      0,
      13792,
      0,
      13821,
      0,
      13824,
      0,
      13827,
      0,
      13829,
      0,
      13858,
      0,
      13861,
      0,
      13920,
      0,
      13927,
      0,
      13955,
      0,
      13983,
      0,
      87,
      18,
      83,
      17,
      14055,
      23,
      110,
      23,
      14473,
      0,
      14785,
      43,
      192,
      43,
      172,
      38,
      15017,
      0,
      15020,
      0,
      15027,
      0,
      268,
      53,
      15160,
      0,
      15163,
      0,
      15320,
      0,
      15327,
      0,
      15369,
      0,
      15429,
      0,
      15459,
      0,
      15462,
      10,
      50,
      10,
      24,
      6,
      15694,
      0,
      15703,
      0,
      15705,
      19,
      90,
      19,
      15712,
      0,
      15744,
      0,
      15747,
      0,
      15749,
      0,
      15777,
      0,
      15805,
      0,
      40,
      7,
      15915,
      34,
      156,
      34,
      16068,
      35,
      160,
      35,
      16221,
      36,
      164,
      36,
      16374,
      37,
      168,
      37,
      16566,
      0,
      16839,
      0,
      16878,
      0,
      16917,
      0,
      122,
      26,
      175,
      39,
      17119,
      0,
      17125,
      0,
      17218,
      0,
      17221,
      0,
      17281,
      0,
      17359,
      0,
      17382,
      0,
      17415,
      0,
      17443,
      0,
      17471,
      0,
      17621,
      0,
      17624,
      0,
      17627,
      0,
      17630,
      0,
      17637,
      0,
      17640,
      0,
      17764,
      0,
      17803,
      0,
      17842,
      0,
      17881,
      0,
      17920,
      0,
      17959,
      0,
      17998,
      0,
      18037,
      0,
      18076,
      0,
      18115,
      0,
      18154,
      0,
      18193,
      0,
      18349,
      30,
      140,
      30,
      18502,
      31,
      144,
      31,
      18918,
      0,
      18922,
      0,
      18926,
      0,
      18928,
      0,
      18940,
      0,
      18985,
      0,
      19027,
      0,
      19035,
      0,
      19053,
      0,
      19115,
      0,
      19118,
      0,
      55,
      11,
      19252,
      0,
      19281,
      0,
      19314,
      0,
      19350,
      0,
      19392,
      0,
      19398,
      62,
      96,
      20,
      19645,
      0,
      19684,
      0,
      19723,
      0,
      19762,
      0,
      19801,
      0,
      19840,
      0,
      19957,
      0,
      19985,
      0,
      20024,
      0,
      20063,
      0,
      20102,
      0,
      188,
      42,
      20260,
      0,
      20265,
      0,
      20307,
      0,
      20452,
      0,
      20455,
      0,
      20494,
      0,
      20497,
      21,
      99,
      21,
      20768,
      28,
      132,
      28,
      20921,
      29,
      136,
      29,
      21074,
      32,
      148,
      32,
      21227,
      33,
      152,
      33,
      179,
      40,
      21393,
      0,
      21503,
      54,
      273,
      54,
      21509,
      0,
      21537,
      0,
      21576,
      0,
      21615,
      0,
      21654,
      0,
      21693,
      0,
      21812,
      0,
      21890,
      0,
      21929,
      0,
      21968,
      0,
      22007,
      0,
      22046,
      0,
      22085,
      0,
      22124,
      0,
      22163,
      0,
      22202,
      0,
      22241,
      0,
      22280,
      0,
      22319,
      0,
      22358,
      41,
      182,
      41,
      22368,
      0,
      22370,
      0,
      22378,
      0,
      22410,
      0,
      22412,
      0,
      22444,
      0,
      22486,
      0,
      22493,
      0,
      22572,
      0,
      22611,
      0,
      22625,
      0,
      22671,
      0,
      22678,
      0,
      22721,
      0,
      22724,
      0,
      22768,
      0
    ],
    "rnTable": [
      {
        "program": [
          1
        ],
        "prelude": [
          2
        ],
        "prelude_I0*": [
          3
        ],
        "$": [
          -1,
          0,
          2,
          4
        ],
        "'IMPORT": [
          -1,
          4
        ],
        "'NAME": [
          -1,
          2,
          4
        ],
        "'PARENNOSPACE": [
          -1,
          2,
          4
        ],
        "'STRING": [
          -1,
          2,
          4
        ],
        "'INCLUDE": [
          -1,
          4
        ],
        "'LBRACE": [
          -1,
          2,
          4
        ],
        "'PARENSPACE": [
          -1,
          2,
          4
        ],
        "'INT": [
          -1,
          2,
          4
        ],
        "'LONG": [
          -1,
          2,
          4
        ],
        "'DOUBLE": [
          -1,
          2,
          4
        ],
        "'FLOAT": [
          -1,
          2,
          4
        ],
        "'BOOLEAN": [
          -1,
          2,
          4
        ],
        "'VOID": [
          -1,
          2,
          4
        ],
        "'DATA": [
          -1,
          2,
          4
        ],
        "'VAR": [
          -1,
          2,
          4
        ],
        "'ATCHECK": [
          -1,
          2,
          4
        ],
        "'SWITCH": [
          -1,
          2,
          4
        ],
        "'DASH": [
          -1,
          2,
          4
        ],
        "'BANG": [
          -1,
          2,
          4
        ],
        "'LBRACK": [
          -1,
          2,
          4
        ],
        "'NUMBER": [
          -1,
          2,
          4
        ],
        "'TRUE": [
          -1,
          2,
          4
        ],
        "'FALSE": [
          -1,
          2,
          4
        ],
        "'NULL": [
          -1,
          2,
          4
        ],
        "'PARENAFTERBRACE": [
          -1,
          2,
          4
        ],
        "'TABLE": [
          -1,
          2,
          4
        ],
        "'ASK": [
          -1,
          2,
          4
        ],
        "'NEW": [
          -1,
          2,
          4
        ]
      },
      {
        "$": [
          -1,
          -1
        ]
      },
      {
        "top-block": [
          4
        ],
        "top-block_I0*": [
          5
        ],
        "$": [
          -1,
          6,
          8,
          10
        ],
        "'NAME": [
          -1,
          10
        ],
        "'PARENNOSPACE": [
          -1,
          10
        ],
        "'STRING": [
          -1,
          10
        ],
        "'LBRACE": [
          -1,
          10
        ],
        "'PARENSPACE": [
          -1,
          10
        ],
        "'INT": [
          -1,
          10
        ],
        "'LONG": [
          -1,
          10
        ],
        "'DOUBLE": [
          -1,
          10
        ],
        "'FLOAT": [
          -1,
          10
        ],
        "'BOOLEAN": [
          -1,
          10
        ],
        "'VOID": [
          -1,
          10
        ],
        "'DATA": [
          -1,
          10
        ],
        "'VAR": [
          -1,
          10
        ],
        "'ATCHECK": [
          -1,
          10
        ],
        "'SWITCH": [
          -1,
          10
        ],
        "'DASH": [
          -1,
          10
        ],
        "'BANG": [
          -1,
          10
        ],
        "'LBRACK": [
          -1,
          10
        ],
        "'NUMBER": [
          -1,
          10
        ],
        "'TRUE": [
          -1,
          10
        ],
        "'FALSE": [
          -1,
          10
        ],
        "'NULL": [
          -1,
          10
        ],
        "'PARENAFTERBRACE": [
          -1,
          10
        ],
        "'TABLE": [
          -1,
          10
        ],
        "'ASK": [
          -1,
          10
        ],
        "'NEW": [
          -1,
          10
        ]
      },
      {
        "prelude_I0": [
          6
        ],
        "import-stmt": [
          7
        ],
        "'IMPORT": [
          8
        ],
        "'INCLUDE": [
          9
        ],
        "$": [
          -1,
          12
        ],
        "'NAME": [
          -1,
          12
        ],
        "'PARENNOSPACE": [
          -1,
          12
        ],
        "'STRING": [
          -1,
          12
        ],
        "'LBRACE": [
          -1,
          12
        ],
        "'PARENSPACE": [
          -1,
          12
        ],
        "'INT": [
          -1,
          12
        ],
        "'LONG": [
          -1,
          12
        ],
        "'DOUBLE": [
          -1,
          12
        ],
        "'FLOAT": [
          -1,
          12
        ],
        "'BOOLEAN": [
          -1,
          12
        ],
        "'VOID": [
          -1,
          12
        ],
        "'DATA": [
          -1,
          12
        ],
        "'VAR": [
          -1,
          12
        ],
        "'ATCHECK": [
          -1,
          12
        ],
        "'SWITCH": [
          -1,
          12
        ],
        "'DASH": [
          -1,
          12
        ],
        "'BANG": [
          -1,
          12
        ],
        "'LBRACK": [
          -1,
          12
        ],
        "'NUMBER": [
          -1,
          12
        ],
        "'TRUE": [
          -1,
          12
        ],
        "'FALSE": [
          -1,
          12
        ],
        "'NULL": [
          -1,
          12
        ],
        "'PARENAFTERBRACE": [
          -1,
          12
        ],
        "'TABLE": [
          -1,
          12
        ],
        "'ASK": [
          -1,
          12
        ],
        "'NEW": [
          -1,
          12
        ]
      },
      {
        "$": [
          -1,
          14
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "top-block_I0": [
          13
        ],
        "top-stmt": [
          14
        ],
        "fun-decl": [
          15
        ],
        "data-decl": [
          16
        ],
        "check-block": [
          17
        ],
        "let-stmt": [
          18
        ],
        "var-stmt": [
          19
        ],
        "assign-stmt": [
          20
        ],
        "expr-stmt": [
          21
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          23
        ],
        "type-ann": [
          24
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "'DATA": [
          31
        ],
        "full-expr": [
          32
        ],
        "'VAR": [
          33
        ],
        "'ATCHECK": [
          34
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ],
        "$": [
          -1,
          16
        ]
      },
      {
        "$": [
          -1,
          18
        ],
        "'IMPORT": [
          -1,
          18
        ],
        "'NAME": [
          -1,
          18
        ],
        "'PARENNOSPACE": [
          -1,
          18
        ],
        "'STRING": [
          -1,
          18
        ],
        "'INCLUDE": [
          -1,
          18
        ],
        "'LBRACE": [
          -1,
          18
        ],
        "'PARENSPACE": [
          -1,
          18
        ],
        "'INT": [
          -1,
          18
        ],
        "'LONG": [
          -1,
          18
        ],
        "'DOUBLE": [
          -1,
          18
        ],
        "'FLOAT": [
          -1,
          18
        ],
        "'BOOLEAN": [
          -1,
          18
        ],
        "'VOID": [
          -1,
          18
        ],
        "'DATA": [
          -1,
          18
        ],
        "'VAR": [
          -1,
          18
        ],
        "'ATCHECK": [
          -1,
          18
        ],
        "'SWITCH": [
          -1,
          18
        ],
        "'DASH": [
          -1,
          18
        ],
        "'BANG": [
          -1,
          18
        ],
        "'LBRACK": [
          -1,
          18
        ],
        "'NUMBER": [
          -1,
          18
        ],
        "'TRUE": [
          -1,
          18
        ],
        "'FALSE": [
          -1,
          18
        ],
        "'NULL": [
          -1,
          18
        ],
        "'PARENAFTERBRACE": [
          -1,
          18
        ],
        "'TABLE": [
          -1,
          18
        ],
        "'ASK": [
          -1,
          18
        ],
        "'NEW": [
          -1,
          18
        ]
      },
      {
        "$": [
          -1,
          20
        ],
        "'IMPORT": [
          -1,
          20
        ],
        "'NAME": [
          -1,
          20
        ],
        "'PARENNOSPACE": [
          -1,
          20
        ],
        "'STRING": [
          -1,
          20
        ],
        "'INCLUDE": [
          -1,
          20
        ],
        "'LBRACE": [
          -1,
          20
        ],
        "'PARENSPACE": [
          -1,
          20
        ],
        "'INT": [
          -1,
          20
        ],
        "'LONG": [
          -1,
          20
        ],
        "'DOUBLE": [
          -1,
          20
        ],
        "'FLOAT": [
          -1,
          20
        ],
        "'BOOLEAN": [
          -1,
          20
        ],
        "'VOID": [
          -1,
          20
        ],
        "'DATA": [
          -1,
          20
        ],
        "'VAR": [
          -1,
          20
        ],
        "'ATCHECK": [
          -1,
          20
        ],
        "'SWITCH": [
          -1,
          20
        ],
        "'DASH": [
          -1,
          20
        ],
        "'BANG": [
          -1,
          20
        ],
        "'LBRACK": [
          -1,
          20
        ],
        "'NUMBER": [
          -1,
          20
        ],
        "'TRUE": [
          -1,
          20
        ],
        "'FALSE": [
          -1,
          20
        ],
        "'NULL": [
          -1,
          20
        ],
        "'PARENAFTERBRACE": [
          -1,
          20
        ],
        "'TABLE": [
          -1,
          20
        ],
        "'ASK": [
          -1,
          20
        ],
        "'NEW": [
          -1,
          20
        ]
      },
      {
        "'NAME": [
          59
        ]
      },
      {
        "'NAME": [
          60
        ]
      },
      {
        "type-ann_A6_I1?": [
          61
        ],
        "type-ann_A6_I1": [
          62
        ],
        "'LT": [
          63,
          22
        ],
        "'COLONEQUALS": [
          64
        ],
        "$": [
          -1,
          22
        ],
        "'NAME": [
          -1,
          24,
          22,
          26
        ],
        "'SEMI": [
          -1,
          22
        ],
        "'PARENNOSPACE": [
          -1,
          22
        ],
        "'STRING": [
          -1,
          22
        ],
        "'LBRACE": [
          -1,
          22
        ],
        "'RBRACE": [
          -1,
          22
        ],
        "'SPY": [
          -1,
          22
        ],
        "'PARENSPACE": [
          -1,
          22
        ],
        "'INT": [
          -1,
          22
        ],
        "'LONG": [
          -1,
          22
        ],
        "'DOUBLE": [
          -1,
          22
        ],
        "'FLOAT": [
          -1,
          22
        ],
        "'BOOLEAN": [
          -1,
          22
        ],
        "'VOID": [
          -1,
          22
        ],
        "'GT": [
          -1,
          22
        ],
        "'DATA": [
          -1,
          22
        ],
        "'IF": [
          -1,
          22
        ],
        "'FOR": [
          -1,
          22
        ],
        "'RETURN": [
          -1,
          22
        ],
        "'VAR": [
          -1,
          22
        ],
        "'ATCHECK": [
          -1,
          22
        ],
        "'ASSERTEQUALS": [
          -1,
          22
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          22
        ],
        "'ASSERTTRUE": [
          -1,
          22
        ],
        "'ASSERTFALSE": [
          -1,
          22
        ],
        "'ASSERTSATISFIES": [
          -1,
          22
        ],
        "'ASSERTRAISES": [
          -1,
          22
        ],
        "'IS": [
          -1,
          22
        ],
        "'ISNOT": [
          -1,
          22
        ],
        "'SATISFIES": [
          -1,
          22
        ],
        "'RAISES": [
          -1,
          22
        ],
        "'SWITCH": [
          -1,
          22
        ],
        "'YIELD": [
          -1,
          22
        ],
        "'PLUS": [
          -1,
          22
        ],
        "'DASH": [
          -1,
          22
        ],
        "'TIMES": [
          -1,
          22
        ],
        "'SLASH": [
          -1,
          22
        ],
        "'PERCENT": [
          -1,
          22
        ],
        "'EQUALEQUAL": [
          -1,
          22
        ],
        "'NEQ": [
          -1,
          22
        ],
        "'LEQ": [
          -1,
          22
        ],
        "'GEQ": [
          -1,
          22
        ],
        "'AND": [
          -1,
          22
        ],
        "'OR": [
          -1,
          22
        ],
        "'BANG": [
          -1,
          22
        ],
        "'DOT": [
          -1,
          22
        ],
        "'LBRACK": [
          -1,
          22
        ],
        "'NUMBER": [
          -1,
          22
        ],
        "'TRUE": [
          -1,
          22
        ],
        "'FALSE": [
          -1,
          22
        ],
        "'NULL": [
          -1,
          22
        ],
        "'PARENAFTERBRACE": [
          -1,
          22
        ],
        "'TABLE": [
          -1,
          22
        ],
        "'ASK": [
          -1,
          22
        ],
        "'NEW": [
          -1,
          22
        ]
      },
      {
        "'NAME": [
          65
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          67
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "lambda-param": [
          68
        ],
        "lambda-expr_A1_I1?": [
          69
        ],
        "lambda-expr_A1_I1": [
          70
        ],
        "'RPAREN": [
          -1,
          28
        ]
      },
      {
        "$": [
          -1,
          30
        ],
        "'NAME": [
          -1,
          30
        ],
        "'SEMI": [
          -1,
          30
        ],
        "'PARENNOSPACE": [
          -1,
          30
        ],
        "'STRING": [
          -1,
          30
        ],
        "'RPAREN": [
          -1,
          30
        ],
        "'LBRACE": [
          -1,
          30
        ],
        "'RBRACE": [
          -1,
          30
        ],
        "'SPY": [
          -1,
          30
        ],
        "'PARENSPACE": [
          -1,
          30
        ],
        "'COMMA": [
          -1,
          30
        ],
        "'INT": [
          -1,
          30
        ],
        "'LONG": [
          -1,
          30
        ],
        "'DOUBLE": [
          -1,
          30
        ],
        "'FLOAT": [
          -1,
          30
        ],
        "'BOOLEAN": [
          -1,
          30
        ],
        "'VOID": [
          -1,
          30
        ],
        "'LT": [
          -1,
          30
        ],
        "'GT": [
          -1,
          30
        ],
        "'THINARROW": [
          -1,
          30
        ],
        "'DATA": [
          -1,
          30
        ],
        "'IF": [
          -1,
          30
        ],
        "'FOR": [
          -1,
          30
        ],
        "'RETURN": [
          -1,
          30
        ],
        "'VAR": [
          -1,
          30
        ],
        "'ATCHECK": [
          -1,
          30
        ],
        "'ASSERTEQUALS": [
          -1,
          30
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          30
        ],
        "'ASSERTTRUE": [
          -1,
          30
        ],
        "'ASSERTFALSE": [
          -1,
          30
        ],
        "'ASSERTSATISFIES": [
          -1,
          30
        ],
        "'ASSERTRAISES": [
          -1,
          30
        ],
        "'IS": [
          -1,
          30
        ],
        "'ISNOT": [
          -1,
          30
        ],
        "'SATISFIES": [
          -1,
          30
        ],
        "'RAISES": [
          -1,
          30
        ],
        "'SWITCH": [
          -1,
          30
        ],
        "'CASE": [
          -1,
          30
        ],
        "'DEFAULT": [
          -1,
          30
        ],
        "'YIELD": [
          -1,
          30
        ],
        "'PLUS": [
          -1,
          30
        ],
        "'DASH": [
          -1,
          30
        ],
        "'TIMES": [
          -1,
          30
        ],
        "'SLASH": [
          -1,
          30
        ],
        "'PERCENT": [
          -1,
          30
        ],
        "'EQUALEQUAL": [
          -1,
          30
        ],
        "'NEQ": [
          -1,
          30
        ],
        "'LEQ": [
          -1,
          30
        ],
        "'GEQ": [
          -1,
          30
        ],
        "'AND": [
          -1,
          30
        ],
        "'OR": [
          -1,
          30
        ],
        "'BANG": [
          -1,
          30
        ],
        "'DOT": [
          -1,
          30
        ],
        "'LBRACK": [
          -1,
          30
        ],
        "'RBRACK": [
          -1,
          30
        ],
        "'NUMBER": [
          -1,
          30
        ],
        "'TRUE": [
          -1,
          30
        ],
        "'FALSE": [
          -1,
          30
        ],
        "'NULL": [
          -1,
          30
        ],
        "'PARENAFTERBRACE": [
          -1,
          30
        ],
        "'TABLE": [
          -1,
          30
        ],
        "'ASK": [
          -1,
          30
        ],
        "'NEW": [
          -1,
          30
        ]
      },
      {
        "$": [
          -1,
          32
        ],
        "'NAME": [
          -1,
          32
        ],
        "'PARENNOSPACE": [
          -1,
          32
        ],
        "'STRING": [
          -1,
          32
        ],
        "'LBRACE": [
          -1,
          32
        ],
        "'PARENSPACE": [
          -1,
          32
        ],
        "'INT": [
          -1,
          32
        ],
        "'LONG": [
          -1,
          32
        ],
        "'DOUBLE": [
          -1,
          32
        ],
        "'FLOAT": [
          -1,
          32
        ],
        "'BOOLEAN": [
          -1,
          32
        ],
        "'VOID": [
          -1,
          32
        ],
        "'DATA": [
          -1,
          32
        ],
        "'VAR": [
          -1,
          32
        ],
        "'ATCHECK": [
          -1,
          32
        ],
        "'SWITCH": [
          -1,
          32
        ],
        "'DASH": [
          -1,
          32
        ],
        "'BANG": [
          -1,
          32
        ],
        "'LBRACK": [
          -1,
          32
        ],
        "'NUMBER": [
          -1,
          32
        ],
        "'TRUE": [
          -1,
          32
        ],
        "'FALSE": [
          -1,
          32
        ],
        "'NULL": [
          -1,
          32
        ],
        "'PARENAFTERBRACE": [
          -1,
          32
        ],
        "'TABLE": [
          -1,
          32
        ],
        "'ASK": [
          -1,
          32
        ],
        "'NEW": [
          -1,
          32
        ]
      },
      {
        "$": [
          -1,
          34
        ],
        "'NAME": [
          -1,
          34
        ],
        "'PARENNOSPACE": [
          -1,
          34
        ],
        "'STRING": [
          -1,
          34
        ],
        "'LBRACE": [
          -1,
          34
        ],
        "'PARENSPACE": [
          -1,
          34
        ],
        "'INT": [
          -1,
          34
        ],
        "'LONG": [
          -1,
          34
        ],
        "'DOUBLE": [
          -1,
          34
        ],
        "'FLOAT": [
          -1,
          34
        ],
        "'BOOLEAN": [
          -1,
          34
        ],
        "'VOID": [
          -1,
          34
        ],
        "'DATA": [
          -1,
          34
        ],
        "'VAR": [
          -1,
          34
        ],
        "'ATCHECK": [
          -1,
          34
        ],
        "'SWITCH": [
          -1,
          34
        ],
        "'DASH": [
          -1,
          34
        ],
        "'BANG": [
          -1,
          34
        ],
        "'LBRACK": [
          -1,
          34
        ],
        "'NUMBER": [
          -1,
          34
        ],
        "'TRUE": [
          -1,
          34
        ],
        "'FALSE": [
          -1,
          34
        ],
        "'NULL": [
          -1,
          34
        ],
        "'PARENAFTERBRACE": [
          -1,
          34
        ],
        "'TABLE": [
          -1,
          34
        ],
        "'ASK": [
          -1,
          34
        ],
        "'NEW": [
          -1,
          34
        ]
      },
      {
        "$": [
          -1,
          36
        ],
        "'NAME": [
          -1,
          36
        ],
        "'PARENNOSPACE": [
          -1,
          36
        ],
        "'STRING": [
          -1,
          36
        ],
        "'LBRACE": [
          -1,
          36
        ],
        "'PARENSPACE": [
          -1,
          36
        ],
        "'INT": [
          -1,
          36
        ],
        "'LONG": [
          -1,
          36
        ],
        "'DOUBLE": [
          -1,
          36
        ],
        "'FLOAT": [
          -1,
          36
        ],
        "'BOOLEAN": [
          -1,
          36
        ],
        "'VOID": [
          -1,
          36
        ],
        "'DATA": [
          -1,
          36
        ],
        "'VAR": [
          -1,
          36
        ],
        "'ATCHECK": [
          -1,
          36
        ],
        "'SWITCH": [
          -1,
          36
        ],
        "'DASH": [
          -1,
          36
        ],
        "'BANG": [
          -1,
          36
        ],
        "'LBRACK": [
          -1,
          36
        ],
        "'NUMBER": [
          -1,
          36
        ],
        "'TRUE": [
          -1,
          36
        ],
        "'FALSE": [
          -1,
          36
        ],
        "'NULL": [
          -1,
          36
        ],
        "'PARENAFTERBRACE": [
          -1,
          36
        ],
        "'TABLE": [
          -1,
          36
        ],
        "'ASK": [
          -1,
          36
        ],
        "'NEW": [
          -1,
          36
        ]
      },
      {
        "$": [
          -1,
          38
        ],
        "'NAME": [
          -1,
          38
        ],
        "'PARENNOSPACE": [
          -1,
          38
        ],
        "'STRING": [
          -1,
          38
        ],
        "'LBRACE": [
          -1,
          38
        ],
        "'PARENSPACE": [
          -1,
          38
        ],
        "'INT": [
          -1,
          38
        ],
        "'LONG": [
          -1,
          38
        ],
        "'DOUBLE": [
          -1,
          38
        ],
        "'FLOAT": [
          -1,
          38
        ],
        "'BOOLEAN": [
          -1,
          38
        ],
        "'VOID": [
          -1,
          38
        ],
        "'DATA": [
          -1,
          38
        ],
        "'VAR": [
          -1,
          38
        ],
        "'ATCHECK": [
          -1,
          38
        ],
        "'SWITCH": [
          -1,
          38
        ],
        "'DASH": [
          -1,
          38
        ],
        "'BANG": [
          -1,
          38
        ],
        "'LBRACK": [
          -1,
          38
        ],
        "'NUMBER": [
          -1,
          38
        ],
        "'TRUE": [
          -1,
          38
        ],
        "'FALSE": [
          -1,
          38
        ],
        "'NULL": [
          -1,
          38
        ],
        "'PARENAFTERBRACE": [
          -1,
          38
        ],
        "'TABLE": [
          -1,
          38
        ],
        "'ASK": [
          -1,
          38
        ],
        "'NEW": [
          -1,
          38
        ]
      },
      {
        "$": [
          -1,
          40
        ],
        "'NAME": [
          -1,
          40
        ],
        "'PARENNOSPACE": [
          -1,
          40
        ],
        "'STRING": [
          -1,
          40
        ],
        "'LBRACE": [
          -1,
          40
        ],
        "'PARENSPACE": [
          -1,
          40
        ],
        "'INT": [
          -1,
          40
        ],
        "'LONG": [
          -1,
          40
        ],
        "'DOUBLE": [
          -1,
          40
        ],
        "'FLOAT": [
          -1,
          40
        ],
        "'BOOLEAN": [
          -1,
          40
        ],
        "'VOID": [
          -1,
          40
        ],
        "'DATA": [
          -1,
          40
        ],
        "'VAR": [
          -1,
          40
        ],
        "'ATCHECK": [
          -1,
          40
        ],
        "'SWITCH": [
          -1,
          40
        ],
        "'DASH": [
          -1,
          40
        ],
        "'BANG": [
          -1,
          40
        ],
        "'LBRACK": [
          -1,
          40
        ],
        "'NUMBER": [
          -1,
          40
        ],
        "'TRUE": [
          -1,
          40
        ],
        "'FALSE": [
          -1,
          40
        ],
        "'NULL": [
          -1,
          40
        ],
        "'PARENAFTERBRACE": [
          -1,
          40
        ],
        "'TABLE": [
          -1,
          40
        ],
        "'ASK": [
          -1,
          40
        ],
        "'NEW": [
          -1,
          40
        ]
      },
      {
        "$": [
          -1,
          42
        ],
        "'NAME": [
          -1,
          42
        ],
        "'PARENNOSPACE": [
          -1,
          42
        ],
        "'STRING": [
          -1,
          42
        ],
        "'LBRACE": [
          -1,
          42
        ],
        "'PARENSPACE": [
          -1,
          42
        ],
        "'INT": [
          -1,
          42
        ],
        "'LONG": [
          -1,
          42
        ],
        "'DOUBLE": [
          -1,
          42
        ],
        "'FLOAT": [
          -1,
          42
        ],
        "'BOOLEAN": [
          -1,
          42
        ],
        "'VOID": [
          -1,
          42
        ],
        "'DATA": [
          -1,
          42
        ],
        "'VAR": [
          -1,
          42
        ],
        "'ATCHECK": [
          -1,
          42
        ],
        "'SWITCH": [
          -1,
          42
        ],
        "'DASH": [
          -1,
          42
        ],
        "'BANG": [
          -1,
          42
        ],
        "'LBRACK": [
          -1,
          42
        ],
        "'NUMBER": [
          -1,
          42
        ],
        "'TRUE": [
          -1,
          42
        ],
        "'FALSE": [
          -1,
          42
        ],
        "'NULL": [
          -1,
          42
        ],
        "'PARENAFTERBRACE": [
          -1,
          42
        ],
        "'TABLE": [
          -1,
          42
        ],
        "'ASK": [
          -1,
          42
        ],
        "'NEW": [
          -1,
          42
        ]
      },
      {
        "$": [
          -1,
          44
        ],
        "'NAME": [
          -1,
          44
        ],
        "'PARENNOSPACE": [
          -1,
          44
        ],
        "'STRING": [
          -1,
          44
        ],
        "'LBRACE": [
          -1,
          44
        ],
        "'PARENSPACE": [
          -1,
          44
        ],
        "'INT": [
          -1,
          44
        ],
        "'LONG": [
          -1,
          44
        ],
        "'DOUBLE": [
          -1,
          44
        ],
        "'FLOAT": [
          -1,
          44
        ],
        "'BOOLEAN": [
          -1,
          44
        ],
        "'VOID": [
          -1,
          44
        ],
        "'DATA": [
          -1,
          44
        ],
        "'VAR": [
          -1,
          44
        ],
        "'ATCHECK": [
          -1,
          44
        ],
        "'SWITCH": [
          -1,
          44
        ],
        "'DASH": [
          -1,
          44
        ],
        "'BANG": [
          -1,
          44
        ],
        "'LBRACK": [
          -1,
          44
        ],
        "'NUMBER": [
          -1,
          44
        ],
        "'TRUE": [
          -1,
          44
        ],
        "'FALSE": [
          -1,
          44
        ],
        "'NULL": [
          -1,
          44
        ],
        "'PARENAFTERBRACE": [
          -1,
          44
        ],
        "'TABLE": [
          -1,
          44
        ],
        "'ASK": [
          -1,
          44
        ],
        "'NEW": [
          -1,
          44
        ]
      },
      {
        "$": [
          -1,
          46
        ],
        "'NAME": [
          -1,
          46
        ],
        "'PARENNOSPACE": [
          -1,
          46
        ],
        "'STRING": [
          -1,
          46
        ],
        "'LBRACE": [
          -1,
          46
        ],
        "'PARENSPACE": [
          -1,
          46
        ],
        "'INT": [
          -1,
          46
        ],
        "'LONG": [
          -1,
          46
        ],
        "'DOUBLE": [
          -1,
          46
        ],
        "'FLOAT": [
          -1,
          46
        ],
        "'BOOLEAN": [
          -1,
          46
        ],
        "'VOID": [
          -1,
          46
        ],
        "'DATA": [
          -1,
          46
        ],
        "'VAR": [
          -1,
          46
        ],
        "'ATCHECK": [
          -1,
          46
        ],
        "'SWITCH": [
          -1,
          46
        ],
        "'DASH": [
          -1,
          46
        ],
        "'BANG": [
          -1,
          46
        ],
        "'LBRACK": [
          -1,
          46
        ],
        "'NUMBER": [
          -1,
          46
        ],
        "'TRUE": [
          -1,
          46
        ],
        "'FALSE": [
          -1,
          46
        ],
        "'NULL": [
          -1,
          46
        ],
        "'PARENAFTERBRACE": [
          -1,
          46
        ],
        "'TABLE": [
          -1,
          46
        ],
        "'ASK": [
          -1,
          46
        ],
        "'NEW": [
          -1,
          46
        ]
      },
      {
        "$": [
          -1,
          48
        ],
        "'NAME": [
          -1,
          48
        ],
        "'PARENNOSPACE": [
          -1,
          48
        ],
        "'STRING": [
          -1,
          48
        ],
        "'LBRACE": [
          -1,
          48
        ],
        "'PARENSPACE": [
          -1,
          48
        ],
        "'INT": [
          -1,
          48
        ],
        "'LONG": [
          -1,
          48
        ],
        "'DOUBLE": [
          -1,
          48
        ],
        "'FLOAT": [
          -1,
          48
        ],
        "'BOOLEAN": [
          -1,
          48
        ],
        "'VOID": [
          -1,
          48
        ],
        "'DATA": [
          -1,
          48
        ],
        "'VAR": [
          -1,
          48
        ],
        "'ATCHECK": [
          -1,
          48
        ],
        "'SWITCH": [
          -1,
          48
        ],
        "'DASH": [
          -1,
          48
        ],
        "'BANG": [
          -1,
          48
        ],
        "'LBRACK": [
          -1,
          48
        ],
        "'NUMBER": [
          -1,
          48
        ],
        "'TRUE": [
          -1,
          48
        ],
        "'FALSE": [
          -1,
          48
        ],
        "'NULL": [
          -1,
          48
        ],
        "'PARENAFTERBRACE": [
          -1,
          48
        ],
        "'TABLE": [
          -1,
          48
        ],
        "'ASK": [
          -1,
          48
        ],
        "'NEW": [
          -1,
          48
        ]
      },
      {
        "'NAME": [
          71
        ],
        "'RBRACE": [
          72
        ],
        "record-field": [
          73
        ]
      },
      {
        "'NAME": [
          74
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          75
        ],
        "type-ann": [
          76
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "type-ann_A7_I1?": [
          77
        ],
        "type-ann_A7_I1": [
          78
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr_A0_I1?": [
          79
        ],
        "lambda-expr_A0_I1": [
          80
        ],
        "lambda-param": [
          81
        ],
        "binop-expr": [
          82
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ],
        "'RPAREN": [
          -1,
          50
        ],
        "'THINARROW": [
          -1,
          52
        ]
      },
      {
        "'NAME": [
          83
        ]
      },
      {
        "'NAME": [
          -1,
          54
        ],
        "'RPAREN": [
          -1,
          54
        ],
        "'COMMA": [
          -1,
          54
        ],
        "'GT": [
          -1,
          54
        ],
        "'THINARROW": [
          -1,
          54
        ]
      },
      {
        "'NAME": [
          -1,
          56
        ],
        "'RPAREN": [
          -1,
          56
        ],
        "'COMMA": [
          -1,
          56
        ],
        "'GT": [
          -1,
          56
        ],
        "'THINARROW": [
          -1,
          56
        ]
      },
      {
        "'NAME": [
          -1,
          58
        ],
        "'RPAREN": [
          -1,
          58
        ],
        "'COMMA": [
          -1,
          58
        ],
        "'GT": [
          -1,
          58
        ],
        "'THINARROW": [
          -1,
          58
        ]
      },
      {
        "'NAME": [
          -1,
          60
        ],
        "'RPAREN": [
          -1,
          60
        ],
        "'COMMA": [
          -1,
          60
        ],
        "'GT": [
          -1,
          60
        ],
        "'THINARROW": [
          -1,
          60
        ]
      },
      {
        "'NAME": [
          -1,
          62
        ],
        "'RPAREN": [
          -1,
          62
        ],
        "'COMMA": [
          -1,
          62
        ],
        "'GT": [
          -1,
          62
        ],
        "'THINARROW": [
          -1,
          62
        ]
      },
      {
        "'NAME": [
          -1,
          64
        ],
        "'RPAREN": [
          -1,
          64
        ],
        "'COMMA": [
          -1,
          64
        ],
        "'GT": [
          -1,
          64
        ],
        "'THINARROW": [
          -1,
          64
        ]
      },
      {
        "'NAME": [
          84
        ]
      },
      {
        "'SEMI": [
          85
        ],
        "expr-stmt_I1?": [
          86
        ],
        "expr-stmt_I1": [
          87
        ],
        "$": [
          -1,
          66,
          68
        ],
        "'NAME": [
          -1,
          66,
          68
        ],
        "'PARENNOSPACE": [
          -1,
          66,
          68
        ],
        "'STRING": [
          -1,
          66,
          68
        ],
        "'LBRACE": [
          -1,
          66,
          68
        ],
        "'RBRACE": [
          -1,
          66,
          68
        ],
        "'SPY": [
          -1,
          66,
          68
        ],
        "'PARENSPACE": [
          -1,
          66,
          68
        ],
        "'INT": [
          -1,
          66,
          68
        ],
        "'LONG": [
          -1,
          66,
          68
        ],
        "'DOUBLE": [
          -1,
          66,
          68
        ],
        "'FLOAT": [
          -1,
          66,
          68
        ],
        "'BOOLEAN": [
          -1,
          66,
          68
        ],
        "'VOID": [
          -1,
          66,
          68
        ],
        "'DATA": [
          -1,
          66,
          68
        ],
        "'IF": [
          -1,
          66,
          68
        ],
        "'FOR": [
          -1,
          66,
          68
        ],
        "'RETURN": [
          -1,
          66,
          68
        ],
        "'VAR": [
          -1,
          66,
          68
        ],
        "'ATCHECK": [
          -1,
          66,
          68
        ],
        "'SWITCH": [
          -1,
          66,
          68
        ],
        "'YIELD": [
          -1,
          66,
          68
        ],
        "'DASH": [
          -1,
          66,
          68
        ],
        "'BANG": [
          -1,
          66,
          68
        ],
        "'LBRACK": [
          -1,
          66,
          68
        ],
        "'NUMBER": [
          -1,
          66,
          68
        ],
        "'TRUE": [
          -1,
          66,
          68
        ],
        "'FALSE": [
          -1,
          66,
          68
        ],
        "'NULL": [
          -1,
          66,
          68
        ],
        "'PARENAFTERBRACE": [
          -1,
          66,
          68
        ],
        "'TABLE": [
          -1,
          66,
          68
        ],
        "'ASK": [
          -1,
          66,
          68
        ],
        "'NEW": [
          -1,
          66,
          68
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          89
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ]
      },
      {
        "'LBRACE": [
          90
        ],
        "'VOID": [
          91
        ]
      },
      {
        "$": [
          -1,
          70
        ],
        "'NAME": [
          -1,
          70
        ],
        "'SEMI": [
          -1,
          70
        ],
        "'PARENNOSPACE": [
          -1,
          70
        ],
        "'STRING": [
          -1,
          70
        ],
        "'RPAREN": [
          -1,
          70
        ],
        "'LBRACE": [
          -1,
          70
        ],
        "'RBRACE": [
          -1,
          70
        ],
        "'SPY": [
          -1,
          70
        ],
        "'PARENSPACE": [
          -1,
          70
        ],
        "'COMMA": [
          -1,
          70
        ],
        "'INT": [
          -1,
          70
        ],
        "'LONG": [
          -1,
          70
        ],
        "'DOUBLE": [
          -1,
          70
        ],
        "'FLOAT": [
          -1,
          70
        ],
        "'BOOLEAN": [
          -1,
          70
        ],
        "'VOID": [
          -1,
          70
        ],
        "'LT": [
          -1,
          70
        ],
        "'GT": [
          -1,
          70
        ],
        "'THINARROW": [
          -1,
          70
        ],
        "'DATA": [
          -1,
          70
        ],
        "'IF": [
          -1,
          70
        ],
        "'FOR": [
          -1,
          70
        ],
        "'RETURN": [
          -1,
          70
        ],
        "'VAR": [
          -1,
          70
        ],
        "'ATCHECK": [
          -1,
          70
        ],
        "'ASSERTEQUALS": [
          -1,
          70
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          70
        ],
        "'ASSERTTRUE": [
          -1,
          70
        ],
        "'ASSERTFALSE": [
          -1,
          70
        ],
        "'ASSERTSATISFIES": [
          -1,
          70
        ],
        "'ASSERTRAISES": [
          -1,
          70
        ],
        "'IS": [
          -1,
          70
        ],
        "'ISNOT": [
          -1,
          70
        ],
        "'SATISFIES": [
          -1,
          70
        ],
        "'RAISES": [
          -1,
          70
        ],
        "'SWITCH": [
          -1,
          70
        ],
        "'CASE": [
          -1,
          70
        ],
        "'DEFAULT": [
          -1,
          70
        ],
        "'YIELD": [
          -1,
          70
        ],
        "'PLUS": [
          -1,
          70
        ],
        "'DASH": [
          -1,
          70
        ],
        "'TIMES": [
          -1,
          70
        ],
        "'SLASH": [
          -1,
          70
        ],
        "'PERCENT": [
          -1,
          70
        ],
        "'EQUALEQUAL": [
          -1,
          70
        ],
        "'NEQ": [
          -1,
          70
        ],
        "'LEQ": [
          -1,
          70
        ],
        "'GEQ": [
          -1,
          70
        ],
        "'AND": [
          -1,
          70
        ],
        "'OR": [
          -1,
          70
        ],
        "'BANG": [
          -1,
          70
        ],
        "'DOT": [
          -1,
          70
        ],
        "'LBRACK": [
          -1,
          70
        ],
        "'RBRACK": [
          -1,
          70
        ],
        "'NUMBER": [
          -1,
          70
        ],
        "'TRUE": [
          -1,
          70
        ],
        "'FALSE": [
          -1,
          70
        ],
        "'NULL": [
          -1,
          70
        ],
        "'PARENAFTERBRACE": [
          -1,
          70
        ],
        "'TABLE": [
          -1,
          70
        ],
        "'ASK": [
          -1,
          70
        ],
        "'NEW": [
          -1,
          70
        ]
      },
      {
        "'PARENSPACE": [
          92
        ]
      },
      {
        "$": [
          -1,
          72
        ],
        "'NAME": [
          -1,
          72
        ],
        "'SEMI": [
          -1,
          72
        ],
        "'PARENNOSPACE": [
          -1,
          72
        ],
        "'STRING": [
          -1,
          72
        ],
        "'RPAREN": [
          -1,
          72
        ],
        "'LBRACE": [
          -1,
          72
        ],
        "'RBRACE": [
          -1,
          72
        ],
        "'SPY": [
          -1,
          72
        ],
        "'PARENSPACE": [
          -1,
          72
        ],
        "'COMMA": [
          -1,
          72
        ],
        "'INT": [
          -1,
          72
        ],
        "'LONG": [
          -1,
          72
        ],
        "'DOUBLE": [
          -1,
          72
        ],
        "'FLOAT": [
          -1,
          72
        ],
        "'BOOLEAN": [
          -1,
          72
        ],
        "'VOID": [
          -1,
          72
        ],
        "'DATA": [
          -1,
          72
        ],
        "'IF": [
          -1,
          72
        ],
        "'FOR": [
          -1,
          72
        ],
        "'RETURN": [
          -1,
          72
        ],
        "'VAR": [
          -1,
          72
        ],
        "'ATCHECK": [
          -1,
          72
        ],
        "'ASSERTEQUALS": [
          -1,
          72
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          72
        ],
        "'ASSERTTRUE": [
          -1,
          72
        ],
        "'ASSERTFALSE": [
          -1,
          72
        ],
        "'ASSERTSATISFIES": [
          -1,
          72
        ],
        "'ASSERTRAISES": [
          -1,
          72
        ],
        "'IS": [
          -1,
          72
        ],
        "'ISNOT": [
          -1,
          72
        ],
        "'SATISFIES": [
          -1,
          72
        ],
        "'RAISES": [
          -1,
          72
        ],
        "'SWITCH": [
          -1,
          72
        ],
        "'CASE": [
          -1,
          72
        ],
        "'DEFAULT": [
          -1,
          72
        ],
        "'YIELD": [
          -1,
          72
        ],
        "'DASH": [
          -1,
          72
        ],
        "'BANG": [
          -1,
          72
        ],
        "'LBRACK": [
          -1,
          72
        ],
        "'RBRACK": [
          -1,
          72
        ],
        "'NUMBER": [
          -1,
          72
        ],
        "'TRUE": [
          -1,
          72
        ],
        "'FALSE": [
          -1,
          72
        ],
        "'NULL": [
          -1,
          72
        ],
        "'PARENAFTERBRACE": [
          -1,
          72
        ],
        "'TABLE": [
          -1,
          72
        ],
        "'ASK": [
          -1,
          72
        ],
        "'NEW": [
          -1,
          72
        ]
      },
      {
        "$": [
          -1,
          74
        ],
        "'NAME": [
          -1,
          74
        ],
        "'SEMI": [
          -1,
          74
        ],
        "'PARENNOSPACE": [
          -1,
          74
        ],
        "'STRING": [
          -1,
          74
        ],
        "'RPAREN": [
          -1,
          74
        ],
        "'LBRACE": [
          -1,
          74
        ],
        "'RBRACE": [
          -1,
          74
        ],
        "'SPY": [
          -1,
          74
        ],
        "'PARENSPACE": [
          -1,
          74
        ],
        "'COMMA": [
          -1,
          74
        ],
        "'INT": [
          -1,
          74
        ],
        "'LONG": [
          -1,
          74
        ],
        "'DOUBLE": [
          -1,
          74
        ],
        "'FLOAT": [
          -1,
          74
        ],
        "'BOOLEAN": [
          -1,
          74
        ],
        "'VOID": [
          -1,
          74
        ],
        "'DATA": [
          -1,
          74
        ],
        "'IF": [
          -1,
          74
        ],
        "'FOR": [
          -1,
          74
        ],
        "'RETURN": [
          -1,
          74
        ],
        "'VAR": [
          -1,
          74
        ],
        "'ATCHECK": [
          -1,
          74
        ],
        "'ASSERTEQUALS": [
          -1,
          74
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          74
        ],
        "'ASSERTTRUE": [
          -1,
          74
        ],
        "'ASSERTFALSE": [
          -1,
          74
        ],
        "'ASSERTSATISFIES": [
          -1,
          74
        ],
        "'ASSERTRAISES": [
          -1,
          74
        ],
        "'IS": [
          -1,
          74
        ],
        "'ISNOT": [
          -1,
          74
        ],
        "'SATISFIES": [
          -1,
          74
        ],
        "'RAISES": [
          -1,
          74
        ],
        "'SWITCH": [
          -1,
          74
        ],
        "'CASE": [
          -1,
          74
        ],
        "'DEFAULT": [
          -1,
          74
        ],
        "'YIELD": [
          -1,
          74
        ],
        "'DASH": [
          -1,
          74
        ],
        "'BANG": [
          -1,
          74
        ],
        "'LBRACK": [
          -1,
          74
        ],
        "'RBRACK": [
          -1,
          74
        ],
        "'NUMBER": [
          -1,
          74
        ],
        "'TRUE": [
          -1,
          74
        ],
        "'FALSE": [
          -1,
          74
        ],
        "'NULL": [
          -1,
          74
        ],
        "'PARENAFTERBRACE": [
          -1,
          74
        ],
        "'TABLE": [
          -1,
          74
        ],
        "'ASK": [
          -1,
          74
        ],
        "'NEW": [
          -1,
          74
        ]
      },
      {
        "binop-expr_I1*": [
          93
        ],
        "$": [
          -1,
          76,
          78
        ],
        "'NAME": [
          -1,
          76,
          78
        ],
        "'SEMI": [
          -1,
          76,
          78
        ],
        "'PARENNOSPACE": [
          -1,
          76,
          78
        ],
        "'STRING": [
          -1,
          76,
          78
        ],
        "'RPAREN": [
          -1,
          76,
          78
        ],
        "'LBRACE": [
          -1,
          76,
          78
        ],
        "'RBRACE": [
          -1,
          76,
          78
        ],
        "'SPY": [
          -1,
          76,
          78
        ],
        "'PARENSPACE": [
          -1,
          76,
          78
        ],
        "'COMMA": [
          -1,
          76,
          78
        ],
        "'INT": [
          -1,
          76,
          78
        ],
        "'LONG": [
          -1,
          76,
          78
        ],
        "'DOUBLE": [
          -1,
          76,
          78
        ],
        "'FLOAT": [
          -1,
          76,
          78
        ],
        "'BOOLEAN": [
          -1,
          76,
          78
        ],
        "'VOID": [
          -1,
          76,
          78
        ],
        "'LT": [
          -1,
          78
        ],
        "'GT": [
          -1,
          78
        ],
        "'THINARROW": [
          -1,
          76,
          78
        ],
        "'DATA": [
          -1,
          76,
          78
        ],
        "'IF": [
          -1,
          76,
          78
        ],
        "'FOR": [
          -1,
          76,
          78
        ],
        "'RETURN": [
          -1,
          76,
          78
        ],
        "'VAR": [
          -1,
          76,
          78
        ],
        "'ATCHECK": [
          -1,
          76,
          78
        ],
        "'ASSERTEQUALS": [
          -1,
          76,
          78
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          76,
          78
        ],
        "'ASSERTTRUE": [
          -1,
          76,
          78
        ],
        "'ASSERTFALSE": [
          -1,
          76,
          78
        ],
        "'ASSERTSATISFIES": [
          -1,
          76,
          78
        ],
        "'ASSERTRAISES": [
          -1,
          76,
          78
        ],
        "'IS": [
          -1,
          76,
          78
        ],
        "'ISNOT": [
          -1,
          76,
          78
        ],
        "'SATISFIES": [
          -1,
          76,
          78
        ],
        "'RAISES": [
          -1,
          76,
          78
        ],
        "'SWITCH": [
          -1,
          76,
          78
        ],
        "'CASE": [
          -1,
          76,
          78
        ],
        "'DEFAULT": [
          -1,
          76,
          78
        ],
        "'YIELD": [
          -1,
          76,
          78
        ],
        "'PLUS": [
          -1,
          78
        ],
        "'DASH": [
          -1,
          76,
          78
        ],
        "'TIMES": [
          -1,
          78
        ],
        "'SLASH": [
          -1,
          78
        ],
        "'PERCENT": [
          -1,
          78
        ],
        "'EQUALEQUAL": [
          -1,
          78
        ],
        "'NEQ": [
          -1,
          78
        ],
        "'LEQ": [
          -1,
          78
        ],
        "'GEQ": [
          -1,
          78
        ],
        "'AND": [
          -1,
          78
        ],
        "'OR": [
          -1,
          78
        ],
        "'BANG": [
          -1,
          76,
          78
        ],
        "'LBRACK": [
          -1,
          76,
          78
        ],
        "'RBRACK": [
          -1,
          76,
          78
        ],
        "'NUMBER": [
          -1,
          76,
          78
        ],
        "'TRUE": [
          -1,
          76,
          78
        ],
        "'FALSE": [
          -1,
          76,
          78
        ],
        "'NULL": [
          -1,
          76,
          78
        ],
        "'PARENAFTERBRACE": [
          -1,
          76,
          78
        ],
        "'TABLE": [
          -1,
          76,
          78
        ],
        "'ASK": [
          -1,
          76,
          78
        ],
        "'NEW": [
          -1,
          76,
          78
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          95
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "unop-expr": [
          96
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          95
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "unop-expr": [
          97
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'PARENNOSPACE": [
          98,
          80
        ],
        "'DOT": [
          99
        ],
        "'LBRACK": [
          100,
          80
        ],
        "$": [
          -1,
          80
        ],
        "'NAME": [
          -1,
          80
        ],
        "'SEMI": [
          -1,
          80
        ],
        "'STRING": [
          -1,
          80
        ],
        "'RPAREN": [
          -1,
          80
        ],
        "'LBRACE": [
          -1,
          80
        ],
        "'RBRACE": [
          -1,
          80
        ],
        "'SPY": [
          -1,
          80
        ],
        "'PARENSPACE": [
          -1,
          80
        ],
        "'COMMA": [
          -1,
          80
        ],
        "'INT": [
          -1,
          80
        ],
        "'LONG": [
          -1,
          80
        ],
        "'DOUBLE": [
          -1,
          80
        ],
        "'FLOAT": [
          -1,
          80
        ],
        "'BOOLEAN": [
          -1,
          80
        ],
        "'VOID": [
          -1,
          80
        ],
        "'LT": [
          -1,
          80
        ],
        "'GT": [
          -1,
          80
        ],
        "'THINARROW": [
          -1,
          80
        ],
        "'DATA": [
          -1,
          80
        ],
        "'IF": [
          -1,
          80
        ],
        "'FOR": [
          -1,
          80
        ],
        "'RETURN": [
          -1,
          80
        ],
        "'VAR": [
          -1,
          80
        ],
        "'ATCHECK": [
          -1,
          80
        ],
        "'ASSERTEQUALS": [
          -1,
          80
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          80
        ],
        "'ASSERTTRUE": [
          -1,
          80
        ],
        "'ASSERTFALSE": [
          -1,
          80
        ],
        "'ASSERTSATISFIES": [
          -1,
          80
        ],
        "'ASSERTRAISES": [
          -1,
          80
        ],
        "'IS": [
          -1,
          80
        ],
        "'ISNOT": [
          -1,
          80
        ],
        "'SATISFIES": [
          -1,
          80
        ],
        "'RAISES": [
          -1,
          80
        ],
        "'SWITCH": [
          -1,
          80
        ],
        "'CASE": [
          -1,
          80
        ],
        "'DEFAULT": [
          -1,
          80
        ],
        "'YIELD": [
          -1,
          80
        ],
        "'PLUS": [
          -1,
          80
        ],
        "'DASH": [
          -1,
          80
        ],
        "'TIMES": [
          -1,
          80
        ],
        "'SLASH": [
          -1,
          80
        ],
        "'PERCENT": [
          -1,
          80
        ],
        "'EQUALEQUAL": [
          -1,
          80
        ],
        "'NEQ": [
          -1,
          80
        ],
        "'LEQ": [
          -1,
          80
        ],
        "'GEQ": [
          -1,
          80
        ],
        "'AND": [
          -1,
          80
        ],
        "'OR": [
          -1,
          80
        ],
        "'BANG": [
          -1,
          80
        ],
        "'RBRACK": [
          -1,
          80
        ],
        "'NUMBER": [
          -1,
          80
        ],
        "'TRUE": [
          -1,
          80
        ],
        "'FALSE": [
          -1,
          80
        ],
        "'NULL": [
          -1,
          80
        ],
        "'PARENAFTERBRACE": [
          -1,
          80
        ],
        "'TABLE": [
          -1,
          80
        ],
        "'ASK": [
          -1,
          80
        ],
        "'NEW": [
          -1,
          80
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'FOR": [
          102
        ],
        "'RBRACK": [
          103
        ]
      },
      {
        "$": [
          -1,
          82
        ],
        "'NAME": [
          -1,
          82
        ],
        "'SEMI": [
          -1,
          82
        ],
        "'PARENNOSPACE": [
          -1,
          82
        ],
        "'STRING": [
          -1,
          82
        ],
        "'RPAREN": [
          -1,
          82
        ],
        "'LBRACE": [
          -1,
          82
        ],
        "'RBRACE": [
          -1,
          82
        ],
        "'SPY": [
          -1,
          82
        ],
        "'PARENSPACE": [
          -1,
          82
        ],
        "'COMMA": [
          -1,
          82
        ],
        "'INT": [
          -1,
          82
        ],
        "'LONG": [
          -1,
          82
        ],
        "'DOUBLE": [
          -1,
          82
        ],
        "'FLOAT": [
          -1,
          82
        ],
        "'BOOLEAN": [
          -1,
          82
        ],
        "'VOID": [
          -1,
          82
        ],
        "'LT": [
          -1,
          82
        ],
        "'GT": [
          -1,
          82
        ],
        "'THINARROW": [
          -1,
          82
        ],
        "'DATA": [
          -1,
          82
        ],
        "'IF": [
          -1,
          82
        ],
        "'FOR": [
          -1,
          82
        ],
        "'RETURN": [
          -1,
          82
        ],
        "'VAR": [
          -1,
          82
        ],
        "'ATCHECK": [
          -1,
          82
        ],
        "'ASSERTEQUALS": [
          -1,
          82
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          82
        ],
        "'ASSERTTRUE": [
          -1,
          82
        ],
        "'ASSERTFALSE": [
          -1,
          82
        ],
        "'ASSERTSATISFIES": [
          -1,
          82
        ],
        "'ASSERTRAISES": [
          -1,
          82
        ],
        "'IS": [
          -1,
          82
        ],
        "'ISNOT": [
          -1,
          82
        ],
        "'SATISFIES": [
          -1,
          82
        ],
        "'RAISES": [
          -1,
          82
        ],
        "'SWITCH": [
          -1,
          82
        ],
        "'CASE": [
          -1,
          82
        ],
        "'DEFAULT": [
          -1,
          82
        ],
        "'YIELD": [
          -1,
          82
        ],
        "'PLUS": [
          -1,
          82
        ],
        "'DASH": [
          -1,
          82
        ],
        "'TIMES": [
          -1,
          82
        ],
        "'SLASH": [
          -1,
          82
        ],
        "'PERCENT": [
          -1,
          82
        ],
        "'EQUALEQUAL": [
          -1,
          82
        ],
        "'NEQ": [
          -1,
          82
        ],
        "'LEQ": [
          -1,
          82
        ],
        "'GEQ": [
          -1,
          82
        ],
        "'AND": [
          -1,
          82
        ],
        "'OR": [
          -1,
          82
        ],
        "'BANG": [
          -1,
          82
        ],
        "'DOT": [
          -1,
          82
        ],
        "'LBRACK": [
          -1,
          82
        ],
        "'RBRACK": [
          -1,
          82
        ],
        "'NUMBER": [
          -1,
          82
        ],
        "'TRUE": [
          -1,
          82
        ],
        "'FALSE": [
          -1,
          82
        ],
        "'NULL": [
          -1,
          82
        ],
        "'PARENAFTERBRACE": [
          -1,
          82
        ],
        "'TABLE": [
          -1,
          82
        ],
        "'ASK": [
          -1,
          82
        ],
        "'NEW": [
          -1,
          82
        ]
      },
      {
        "$": [
          -1,
          84
        ],
        "'NAME": [
          -1,
          84
        ],
        "'SEMI": [
          -1,
          84
        ],
        "'PARENNOSPACE": [
          -1,
          84
        ],
        "'STRING": [
          -1,
          84
        ],
        "'RPAREN": [
          -1,
          84
        ],
        "'LBRACE": [
          -1,
          84
        ],
        "'RBRACE": [
          -1,
          84
        ],
        "'SPY": [
          -1,
          84
        ],
        "'PARENSPACE": [
          -1,
          84
        ],
        "'COMMA": [
          -1,
          84
        ],
        "'INT": [
          -1,
          84
        ],
        "'LONG": [
          -1,
          84
        ],
        "'DOUBLE": [
          -1,
          84
        ],
        "'FLOAT": [
          -1,
          84
        ],
        "'BOOLEAN": [
          -1,
          84
        ],
        "'VOID": [
          -1,
          84
        ],
        "'LT": [
          -1,
          84
        ],
        "'GT": [
          -1,
          84
        ],
        "'THINARROW": [
          -1,
          84
        ],
        "'DATA": [
          -1,
          84
        ],
        "'IF": [
          -1,
          84
        ],
        "'FOR": [
          -1,
          84
        ],
        "'RETURN": [
          -1,
          84
        ],
        "'VAR": [
          -1,
          84
        ],
        "'ATCHECK": [
          -1,
          84
        ],
        "'ASSERTEQUALS": [
          -1,
          84
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          84
        ],
        "'ASSERTTRUE": [
          -1,
          84
        ],
        "'ASSERTFALSE": [
          -1,
          84
        ],
        "'ASSERTSATISFIES": [
          -1,
          84
        ],
        "'ASSERTRAISES": [
          -1,
          84
        ],
        "'IS": [
          -1,
          84
        ],
        "'ISNOT": [
          -1,
          84
        ],
        "'SATISFIES": [
          -1,
          84
        ],
        "'RAISES": [
          -1,
          84
        ],
        "'SWITCH": [
          -1,
          84
        ],
        "'CASE": [
          -1,
          84
        ],
        "'DEFAULT": [
          -1,
          84
        ],
        "'YIELD": [
          -1,
          84
        ],
        "'PLUS": [
          -1,
          84
        ],
        "'DASH": [
          -1,
          84
        ],
        "'TIMES": [
          -1,
          84
        ],
        "'SLASH": [
          -1,
          84
        ],
        "'PERCENT": [
          -1,
          84
        ],
        "'EQUALEQUAL": [
          -1,
          84
        ],
        "'NEQ": [
          -1,
          84
        ],
        "'LEQ": [
          -1,
          84
        ],
        "'GEQ": [
          -1,
          84
        ],
        "'AND": [
          -1,
          84
        ],
        "'OR": [
          -1,
          84
        ],
        "'BANG": [
          -1,
          84
        ],
        "'DOT": [
          -1,
          84
        ],
        "'LBRACK": [
          -1,
          84
        ],
        "'RBRACK": [
          -1,
          84
        ],
        "'NUMBER": [
          -1,
          84
        ],
        "'TRUE": [
          -1,
          84
        ],
        "'FALSE": [
          -1,
          84
        ],
        "'NULL": [
          -1,
          84
        ],
        "'PARENAFTERBRACE": [
          -1,
          84
        ],
        "'TABLE": [
          -1,
          84
        ],
        "'ASK": [
          -1,
          84
        ],
        "'NEW": [
          -1,
          84
        ]
      },
      {
        "$": [
          -1,
          86
        ],
        "'NAME": [
          -1,
          86
        ],
        "'SEMI": [
          -1,
          86
        ],
        "'PARENNOSPACE": [
          -1,
          86
        ],
        "'STRING": [
          -1,
          86
        ],
        "'RPAREN": [
          -1,
          86
        ],
        "'LBRACE": [
          -1,
          86
        ],
        "'RBRACE": [
          -1,
          86
        ],
        "'SPY": [
          -1,
          86
        ],
        "'PARENSPACE": [
          -1,
          86
        ],
        "'COMMA": [
          -1,
          86
        ],
        "'INT": [
          -1,
          86
        ],
        "'LONG": [
          -1,
          86
        ],
        "'DOUBLE": [
          -1,
          86
        ],
        "'FLOAT": [
          -1,
          86
        ],
        "'BOOLEAN": [
          -1,
          86
        ],
        "'VOID": [
          -1,
          86
        ],
        "'LT": [
          -1,
          86
        ],
        "'GT": [
          -1,
          86
        ],
        "'THINARROW": [
          -1,
          86
        ],
        "'DATA": [
          -1,
          86
        ],
        "'IF": [
          -1,
          86
        ],
        "'FOR": [
          -1,
          86
        ],
        "'RETURN": [
          -1,
          86
        ],
        "'VAR": [
          -1,
          86
        ],
        "'ATCHECK": [
          -1,
          86
        ],
        "'ASSERTEQUALS": [
          -1,
          86
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          86
        ],
        "'ASSERTTRUE": [
          -1,
          86
        ],
        "'ASSERTFALSE": [
          -1,
          86
        ],
        "'ASSERTSATISFIES": [
          -1,
          86
        ],
        "'ASSERTRAISES": [
          -1,
          86
        ],
        "'IS": [
          -1,
          86
        ],
        "'ISNOT": [
          -1,
          86
        ],
        "'SATISFIES": [
          -1,
          86
        ],
        "'RAISES": [
          -1,
          86
        ],
        "'SWITCH": [
          -1,
          86
        ],
        "'CASE": [
          -1,
          86
        ],
        "'DEFAULT": [
          -1,
          86
        ],
        "'YIELD": [
          -1,
          86
        ],
        "'PLUS": [
          -1,
          86
        ],
        "'DASH": [
          -1,
          86
        ],
        "'TIMES": [
          -1,
          86
        ],
        "'SLASH": [
          -1,
          86
        ],
        "'PERCENT": [
          -1,
          86
        ],
        "'EQUALEQUAL": [
          -1,
          86
        ],
        "'NEQ": [
          -1,
          86
        ],
        "'LEQ": [
          -1,
          86
        ],
        "'GEQ": [
          -1,
          86
        ],
        "'AND": [
          -1,
          86
        ],
        "'OR": [
          -1,
          86
        ],
        "'BANG": [
          -1,
          86
        ],
        "'DOT": [
          -1,
          86
        ],
        "'LBRACK": [
          -1,
          86
        ],
        "'RBRACK": [
          -1,
          86
        ],
        "'NUMBER": [
          -1,
          86
        ],
        "'TRUE": [
          -1,
          86
        ],
        "'FALSE": [
          -1,
          86
        ],
        "'NULL": [
          -1,
          86
        ],
        "'PARENAFTERBRACE": [
          -1,
          86
        ],
        "'TABLE": [
          -1,
          86
        ],
        "'ASK": [
          -1,
          86
        ],
        "'NEW": [
          -1,
          86
        ]
      },
      {
        "$": [
          -1,
          88
        ],
        "'NAME": [
          -1,
          88
        ],
        "'SEMI": [
          -1,
          88
        ],
        "'PARENNOSPACE": [
          -1,
          88
        ],
        "'STRING": [
          -1,
          88
        ],
        "'RPAREN": [
          -1,
          88
        ],
        "'LBRACE": [
          -1,
          88
        ],
        "'RBRACE": [
          -1,
          88
        ],
        "'SPY": [
          -1,
          88
        ],
        "'PARENSPACE": [
          -1,
          88
        ],
        "'COMMA": [
          -1,
          88
        ],
        "'INT": [
          -1,
          88
        ],
        "'LONG": [
          -1,
          88
        ],
        "'DOUBLE": [
          -1,
          88
        ],
        "'FLOAT": [
          -1,
          88
        ],
        "'BOOLEAN": [
          -1,
          88
        ],
        "'VOID": [
          -1,
          88
        ],
        "'LT": [
          -1,
          88
        ],
        "'GT": [
          -1,
          88
        ],
        "'THINARROW": [
          -1,
          88
        ],
        "'DATA": [
          -1,
          88
        ],
        "'IF": [
          -1,
          88
        ],
        "'FOR": [
          -1,
          88
        ],
        "'RETURN": [
          -1,
          88
        ],
        "'VAR": [
          -1,
          88
        ],
        "'ATCHECK": [
          -1,
          88
        ],
        "'ASSERTEQUALS": [
          -1,
          88
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          88
        ],
        "'ASSERTTRUE": [
          -1,
          88
        ],
        "'ASSERTFALSE": [
          -1,
          88
        ],
        "'ASSERTSATISFIES": [
          -1,
          88
        ],
        "'ASSERTRAISES": [
          -1,
          88
        ],
        "'IS": [
          -1,
          88
        ],
        "'ISNOT": [
          -1,
          88
        ],
        "'SATISFIES": [
          -1,
          88
        ],
        "'RAISES": [
          -1,
          88
        ],
        "'SWITCH": [
          -1,
          88
        ],
        "'CASE": [
          -1,
          88
        ],
        "'DEFAULT": [
          -1,
          88
        ],
        "'YIELD": [
          -1,
          88
        ],
        "'PLUS": [
          -1,
          88
        ],
        "'DASH": [
          -1,
          88
        ],
        "'TIMES": [
          -1,
          88
        ],
        "'SLASH": [
          -1,
          88
        ],
        "'PERCENT": [
          -1,
          88
        ],
        "'EQUALEQUAL": [
          -1,
          88
        ],
        "'NEQ": [
          -1,
          88
        ],
        "'LEQ": [
          -1,
          88
        ],
        "'GEQ": [
          -1,
          88
        ],
        "'AND": [
          -1,
          88
        ],
        "'OR": [
          -1,
          88
        ],
        "'BANG": [
          -1,
          88
        ],
        "'DOT": [
          -1,
          88
        ],
        "'LBRACK": [
          -1,
          88
        ],
        "'RBRACK": [
          -1,
          88
        ],
        "'NUMBER": [
          -1,
          88
        ],
        "'TRUE": [
          -1,
          88
        ],
        "'FALSE": [
          -1,
          88
        ],
        "'NULL": [
          -1,
          88
        ],
        "'PARENAFTERBRACE": [
          -1,
          88
        ],
        "'TABLE": [
          -1,
          88
        ],
        "'ASK": [
          -1,
          88
        ],
        "'NEW": [
          -1,
          88
        ]
      },
      {
        "$": [
          -1,
          90
        ],
        "'NAME": [
          -1,
          90
        ],
        "'SEMI": [
          -1,
          90
        ],
        "'PARENNOSPACE": [
          -1,
          90
        ],
        "'STRING": [
          -1,
          90
        ],
        "'RPAREN": [
          -1,
          90
        ],
        "'LBRACE": [
          -1,
          90
        ],
        "'RBRACE": [
          -1,
          90
        ],
        "'SPY": [
          -1,
          90
        ],
        "'PARENSPACE": [
          -1,
          90
        ],
        "'COMMA": [
          -1,
          90
        ],
        "'INT": [
          -1,
          90
        ],
        "'LONG": [
          -1,
          90
        ],
        "'DOUBLE": [
          -1,
          90
        ],
        "'FLOAT": [
          -1,
          90
        ],
        "'BOOLEAN": [
          -1,
          90
        ],
        "'VOID": [
          -1,
          90
        ],
        "'LT": [
          -1,
          90
        ],
        "'GT": [
          -1,
          90
        ],
        "'THINARROW": [
          -1,
          90
        ],
        "'DATA": [
          -1,
          90
        ],
        "'IF": [
          -1,
          90
        ],
        "'FOR": [
          -1,
          90
        ],
        "'RETURN": [
          -1,
          90
        ],
        "'VAR": [
          -1,
          90
        ],
        "'ATCHECK": [
          -1,
          90
        ],
        "'ASSERTEQUALS": [
          -1,
          90
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          90
        ],
        "'ASSERTTRUE": [
          -1,
          90
        ],
        "'ASSERTFALSE": [
          -1,
          90
        ],
        "'ASSERTSATISFIES": [
          -1,
          90
        ],
        "'ASSERTRAISES": [
          -1,
          90
        ],
        "'IS": [
          -1,
          90
        ],
        "'ISNOT": [
          -1,
          90
        ],
        "'SATISFIES": [
          -1,
          90
        ],
        "'RAISES": [
          -1,
          90
        ],
        "'SWITCH": [
          -1,
          90
        ],
        "'CASE": [
          -1,
          90
        ],
        "'DEFAULT": [
          -1,
          90
        ],
        "'YIELD": [
          -1,
          90
        ],
        "'PLUS": [
          -1,
          90
        ],
        "'DASH": [
          -1,
          90
        ],
        "'TIMES": [
          -1,
          90
        ],
        "'SLASH": [
          -1,
          90
        ],
        "'PERCENT": [
          -1,
          90
        ],
        "'EQUALEQUAL": [
          -1,
          90
        ],
        "'NEQ": [
          -1,
          90
        ],
        "'LEQ": [
          -1,
          90
        ],
        "'GEQ": [
          -1,
          90
        ],
        "'AND": [
          -1,
          90
        ],
        "'OR": [
          -1,
          90
        ],
        "'BANG": [
          -1,
          90
        ],
        "'DOT": [
          -1,
          90
        ],
        "'LBRACK": [
          -1,
          90
        ],
        "'RBRACK": [
          -1,
          90
        ],
        "'NUMBER": [
          -1,
          90
        ],
        "'TRUE": [
          -1,
          90
        ],
        "'FALSE": [
          -1,
          90
        ],
        "'NULL": [
          -1,
          90
        ],
        "'PARENAFTERBRACE": [
          -1,
          90
        ],
        "'TABLE": [
          -1,
          90
        ],
        "'ASK": [
          -1,
          90
        ],
        "'NEW": [
          -1,
          90
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          95
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "binop-expr": [
          104
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "$": [
          -1,
          92
        ],
        "'NAME": [
          -1,
          92
        ],
        "'SEMI": [
          -1,
          92
        ],
        "'PARENNOSPACE": [
          -1,
          92
        ],
        "'STRING": [
          -1,
          92
        ],
        "'RPAREN": [
          -1,
          92
        ],
        "'LBRACE": [
          -1,
          92
        ],
        "'RBRACE": [
          -1,
          92
        ],
        "'SPY": [
          -1,
          92
        ],
        "'PARENSPACE": [
          -1,
          92
        ],
        "'COMMA": [
          -1,
          92
        ],
        "'INT": [
          -1,
          92
        ],
        "'LONG": [
          -1,
          92
        ],
        "'DOUBLE": [
          -1,
          92
        ],
        "'FLOAT": [
          -1,
          92
        ],
        "'BOOLEAN": [
          -1,
          92
        ],
        "'VOID": [
          -1,
          92
        ],
        "'LT": [
          -1,
          92
        ],
        "'GT": [
          -1,
          92
        ],
        "'THINARROW": [
          -1,
          92
        ],
        "'DATA": [
          -1,
          92
        ],
        "'IF": [
          -1,
          92
        ],
        "'FOR": [
          -1,
          92
        ],
        "'RETURN": [
          -1,
          92
        ],
        "'VAR": [
          -1,
          92
        ],
        "'ATCHECK": [
          -1,
          92
        ],
        "'ASSERTEQUALS": [
          -1,
          92
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          92
        ],
        "'ASSERTTRUE": [
          -1,
          92
        ],
        "'ASSERTFALSE": [
          -1,
          92
        ],
        "'ASSERTSATISFIES": [
          -1,
          92
        ],
        "'ASSERTRAISES": [
          -1,
          92
        ],
        "'IS": [
          -1,
          92
        ],
        "'ISNOT": [
          -1,
          92
        ],
        "'SATISFIES": [
          -1,
          92
        ],
        "'RAISES": [
          -1,
          92
        ],
        "'SWITCH": [
          -1,
          92
        ],
        "'CASE": [
          -1,
          92
        ],
        "'DEFAULT": [
          -1,
          92
        ],
        "'YIELD": [
          -1,
          92
        ],
        "'PLUS": [
          -1,
          92
        ],
        "'DASH": [
          -1,
          92
        ],
        "'TIMES": [
          -1,
          92
        ],
        "'SLASH": [
          -1,
          92
        ],
        "'PERCENT": [
          -1,
          92
        ],
        "'EQUALEQUAL": [
          -1,
          92
        ],
        "'NEQ": [
          -1,
          92
        ],
        "'LEQ": [
          -1,
          92
        ],
        "'GEQ": [
          -1,
          92
        ],
        "'AND": [
          -1,
          92
        ],
        "'OR": [
          -1,
          92
        ],
        "'BANG": [
          -1,
          92
        ],
        "'DOT": [
          -1,
          92
        ],
        "'LBRACK": [
          -1,
          92
        ],
        "'RBRACK": [
          -1,
          92
        ],
        "'NUMBER": [
          -1,
          92
        ],
        "'TRUE": [
          -1,
          92
        ],
        "'FALSE": [
          -1,
          92
        ],
        "'NULL": [
          -1,
          92
        ],
        "'PARENAFTERBRACE": [
          -1,
          92
        ],
        "'TABLE": [
          -1,
          92
        ],
        "'ASK": [
          -1,
          92
        ],
        "'NEW": [
          -1,
          92
        ]
      },
      {
        "$": [
          -1,
          94
        ],
        "'NAME": [
          -1,
          94
        ],
        "'SEMI": [
          -1,
          94
        ],
        "'PARENNOSPACE": [
          -1,
          94
        ],
        "'STRING": [
          -1,
          94
        ],
        "'RPAREN": [
          -1,
          94
        ],
        "'LBRACE": [
          -1,
          94
        ],
        "'RBRACE": [
          -1,
          94
        ],
        "'SPY": [
          -1,
          94
        ],
        "'PARENSPACE": [
          -1,
          94
        ],
        "'COMMA": [
          -1,
          94
        ],
        "'INT": [
          -1,
          94
        ],
        "'LONG": [
          -1,
          94
        ],
        "'DOUBLE": [
          -1,
          94
        ],
        "'FLOAT": [
          -1,
          94
        ],
        "'BOOLEAN": [
          -1,
          94
        ],
        "'VOID": [
          -1,
          94
        ],
        "'LT": [
          -1,
          94
        ],
        "'GT": [
          -1,
          94
        ],
        "'THINARROW": [
          -1,
          94
        ],
        "'DATA": [
          -1,
          94
        ],
        "'IF": [
          -1,
          94
        ],
        "'FOR": [
          -1,
          94
        ],
        "'RETURN": [
          -1,
          94
        ],
        "'VAR": [
          -1,
          94
        ],
        "'ATCHECK": [
          -1,
          94
        ],
        "'ASSERTEQUALS": [
          -1,
          94
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          94
        ],
        "'ASSERTTRUE": [
          -1,
          94
        ],
        "'ASSERTFALSE": [
          -1,
          94
        ],
        "'ASSERTSATISFIES": [
          -1,
          94
        ],
        "'ASSERTRAISES": [
          -1,
          94
        ],
        "'IS": [
          -1,
          94
        ],
        "'ISNOT": [
          -1,
          94
        ],
        "'SATISFIES": [
          -1,
          94
        ],
        "'RAISES": [
          -1,
          94
        ],
        "'SWITCH": [
          -1,
          94
        ],
        "'CASE": [
          -1,
          94
        ],
        "'DEFAULT": [
          -1,
          94
        ],
        "'YIELD": [
          -1,
          94
        ],
        "'PLUS": [
          -1,
          94
        ],
        "'DASH": [
          -1,
          94
        ],
        "'TIMES": [
          -1,
          94
        ],
        "'SLASH": [
          -1,
          94
        ],
        "'PERCENT": [
          -1,
          94
        ],
        "'EQUALEQUAL": [
          -1,
          94
        ],
        "'NEQ": [
          -1,
          94
        ],
        "'LEQ": [
          -1,
          94
        ],
        "'GEQ": [
          -1,
          94
        ],
        "'AND": [
          -1,
          94
        ],
        "'OR": [
          -1,
          94
        ],
        "'BANG": [
          -1,
          94
        ],
        "'DOT": [
          -1,
          94
        ],
        "'LBRACK": [
          -1,
          94
        ],
        "'RBRACK": [
          -1,
          94
        ],
        "'NUMBER": [
          -1,
          94
        ],
        "'TRUE": [
          -1,
          94
        ],
        "'FALSE": [
          -1,
          94
        ],
        "'NULL": [
          -1,
          94
        ],
        "'PARENAFTERBRACE": [
          -1,
          94
        ],
        "'TABLE": [
          -1,
          94
        ],
        "'ASK": [
          -1,
          94
        ],
        "'NEW": [
          -1,
          94
        ]
      },
      {
        "$": [
          -1,
          96
        ],
        "'NAME": [
          -1,
          96
        ],
        "'SEMI": [
          -1,
          96
        ],
        "'PARENNOSPACE": [
          -1,
          96
        ],
        "'STRING": [
          -1,
          96
        ],
        "'RPAREN": [
          -1,
          96
        ],
        "'LBRACE": [
          -1,
          96
        ],
        "'RBRACE": [
          -1,
          96
        ],
        "'SPY": [
          -1,
          96
        ],
        "'PARENSPACE": [
          -1,
          96
        ],
        "'COMMA": [
          -1,
          96
        ],
        "'INT": [
          -1,
          96
        ],
        "'LONG": [
          -1,
          96
        ],
        "'DOUBLE": [
          -1,
          96
        ],
        "'FLOAT": [
          -1,
          96
        ],
        "'BOOLEAN": [
          -1,
          96
        ],
        "'VOID": [
          -1,
          96
        ],
        "'LT": [
          -1,
          96
        ],
        "'GT": [
          -1,
          96
        ],
        "'THINARROW": [
          -1,
          96
        ],
        "'DATA": [
          -1,
          96
        ],
        "'IF": [
          -1,
          96
        ],
        "'FOR": [
          -1,
          96
        ],
        "'RETURN": [
          -1,
          96
        ],
        "'VAR": [
          -1,
          96
        ],
        "'ATCHECK": [
          -1,
          96
        ],
        "'ASSERTEQUALS": [
          -1,
          96
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          96
        ],
        "'ASSERTTRUE": [
          -1,
          96
        ],
        "'ASSERTFALSE": [
          -1,
          96
        ],
        "'ASSERTSATISFIES": [
          -1,
          96
        ],
        "'ASSERTRAISES": [
          -1,
          96
        ],
        "'IS": [
          -1,
          96
        ],
        "'ISNOT": [
          -1,
          96
        ],
        "'SATISFIES": [
          -1,
          96
        ],
        "'RAISES": [
          -1,
          96
        ],
        "'SWITCH": [
          -1,
          96
        ],
        "'CASE": [
          -1,
          96
        ],
        "'DEFAULT": [
          -1,
          96
        ],
        "'YIELD": [
          -1,
          96
        ],
        "'PLUS": [
          -1,
          96
        ],
        "'DASH": [
          -1,
          96
        ],
        "'TIMES": [
          -1,
          96
        ],
        "'SLASH": [
          -1,
          96
        ],
        "'PERCENT": [
          -1,
          96
        ],
        "'EQUALEQUAL": [
          -1,
          96
        ],
        "'NEQ": [
          -1,
          96
        ],
        "'LEQ": [
          -1,
          96
        ],
        "'GEQ": [
          -1,
          96
        ],
        "'AND": [
          -1,
          96
        ],
        "'OR": [
          -1,
          96
        ],
        "'BANG": [
          -1,
          96
        ],
        "'DOT": [
          -1,
          96
        ],
        "'LBRACK": [
          -1,
          96
        ],
        "'RBRACK": [
          -1,
          96
        ],
        "'NUMBER": [
          -1,
          96
        ],
        "'TRUE": [
          -1,
          96
        ],
        "'FALSE": [
          -1,
          96
        ],
        "'NULL": [
          -1,
          96
        ],
        "'PARENAFTERBRACE": [
          -1,
          96
        ],
        "'TABLE": [
          -1,
          96
        ],
        "'ASK": [
          -1,
          96
        ],
        "'NEW": [
          -1,
          96
        ]
      },
      {
        "$": [
          -1,
          98
        ],
        "'NAME": [
          -1,
          98
        ],
        "'SEMI": [
          -1,
          98
        ],
        "'PARENNOSPACE": [
          -1,
          98
        ],
        "'STRING": [
          -1,
          98
        ],
        "'RPAREN": [
          -1,
          98
        ],
        "'LBRACE": [
          -1,
          98
        ],
        "'RBRACE": [
          -1,
          98
        ],
        "'SPY": [
          -1,
          98
        ],
        "'PARENSPACE": [
          -1,
          98
        ],
        "'COMMA": [
          -1,
          98
        ],
        "'INT": [
          -1,
          98
        ],
        "'LONG": [
          -1,
          98
        ],
        "'DOUBLE": [
          -1,
          98
        ],
        "'FLOAT": [
          -1,
          98
        ],
        "'BOOLEAN": [
          -1,
          98
        ],
        "'VOID": [
          -1,
          98
        ],
        "'LT": [
          -1,
          98
        ],
        "'GT": [
          -1,
          98
        ],
        "'THINARROW": [
          -1,
          98
        ],
        "'DATA": [
          -1,
          98
        ],
        "'IF": [
          -1,
          98
        ],
        "'FOR": [
          -1,
          98
        ],
        "'RETURN": [
          -1,
          98
        ],
        "'VAR": [
          -1,
          98
        ],
        "'ATCHECK": [
          -1,
          98
        ],
        "'ASSERTEQUALS": [
          -1,
          98
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          98
        ],
        "'ASSERTTRUE": [
          -1,
          98
        ],
        "'ASSERTFALSE": [
          -1,
          98
        ],
        "'ASSERTSATISFIES": [
          -1,
          98
        ],
        "'ASSERTRAISES": [
          -1,
          98
        ],
        "'IS": [
          -1,
          98
        ],
        "'ISNOT": [
          -1,
          98
        ],
        "'SATISFIES": [
          -1,
          98
        ],
        "'RAISES": [
          -1,
          98
        ],
        "'SWITCH": [
          -1,
          98
        ],
        "'CASE": [
          -1,
          98
        ],
        "'DEFAULT": [
          -1,
          98
        ],
        "'YIELD": [
          -1,
          98
        ],
        "'PLUS": [
          -1,
          98
        ],
        "'DASH": [
          -1,
          98
        ],
        "'TIMES": [
          -1,
          98
        ],
        "'SLASH": [
          -1,
          98
        ],
        "'PERCENT": [
          -1,
          98
        ],
        "'EQUALEQUAL": [
          -1,
          98
        ],
        "'NEQ": [
          -1,
          98
        ],
        "'LEQ": [
          -1,
          98
        ],
        "'GEQ": [
          -1,
          98
        ],
        "'AND": [
          -1,
          98
        ],
        "'OR": [
          -1,
          98
        ],
        "'BANG": [
          -1,
          98
        ],
        "'DOT": [
          -1,
          98
        ],
        "'LBRACK": [
          -1,
          98
        ],
        "'RBRACK": [
          -1,
          98
        ],
        "'NUMBER": [
          -1,
          98
        ],
        "'TRUE": [
          -1,
          98
        ],
        "'FALSE": [
          -1,
          98
        ],
        "'NULL": [
          -1,
          98
        ],
        "'PARENAFTERBRACE": [
          -1,
          98
        ],
        "'TABLE": [
          -1,
          98
        ],
        "'ASK": [
          -1,
          98
        ],
        "'NEW": [
          -1,
          98
        ]
      },
      {
        "$": [
          -1,
          100
        ],
        "'NAME": [
          -1,
          100
        ],
        "'SEMI": [
          -1,
          100
        ],
        "'PARENNOSPACE": [
          -1,
          100
        ],
        "'STRING": [
          -1,
          100
        ],
        "'RPAREN": [
          -1,
          100
        ],
        "'LBRACE": [
          -1,
          100
        ],
        "'RBRACE": [
          -1,
          100
        ],
        "'SPY": [
          -1,
          100
        ],
        "'PARENSPACE": [
          -1,
          100
        ],
        "'COMMA": [
          -1,
          100
        ],
        "'INT": [
          -1,
          100
        ],
        "'LONG": [
          -1,
          100
        ],
        "'DOUBLE": [
          -1,
          100
        ],
        "'FLOAT": [
          -1,
          100
        ],
        "'BOOLEAN": [
          -1,
          100
        ],
        "'VOID": [
          -1,
          100
        ],
        "'LT": [
          -1,
          100
        ],
        "'GT": [
          -1,
          100
        ],
        "'THINARROW": [
          -1,
          100
        ],
        "'DATA": [
          -1,
          100
        ],
        "'IF": [
          -1,
          100
        ],
        "'FOR": [
          -1,
          100
        ],
        "'RETURN": [
          -1,
          100
        ],
        "'VAR": [
          -1,
          100
        ],
        "'ATCHECK": [
          -1,
          100
        ],
        "'ASSERTEQUALS": [
          -1,
          100
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          100
        ],
        "'ASSERTTRUE": [
          -1,
          100
        ],
        "'ASSERTFALSE": [
          -1,
          100
        ],
        "'ASSERTSATISFIES": [
          -1,
          100
        ],
        "'ASSERTRAISES": [
          -1,
          100
        ],
        "'IS": [
          -1,
          100
        ],
        "'ISNOT": [
          -1,
          100
        ],
        "'SATISFIES": [
          -1,
          100
        ],
        "'RAISES": [
          -1,
          100
        ],
        "'SWITCH": [
          -1,
          100
        ],
        "'CASE": [
          -1,
          100
        ],
        "'DEFAULT": [
          -1,
          100
        ],
        "'YIELD": [
          -1,
          100
        ],
        "'PLUS": [
          -1,
          100
        ],
        "'DASH": [
          -1,
          100
        ],
        "'TIMES": [
          -1,
          100
        ],
        "'SLASH": [
          -1,
          100
        ],
        "'PERCENT": [
          -1,
          100
        ],
        "'EQUALEQUAL": [
          -1,
          100
        ],
        "'NEQ": [
          -1,
          100
        ],
        "'LEQ": [
          -1,
          100
        ],
        "'GEQ": [
          -1,
          100
        ],
        "'AND": [
          -1,
          100
        ],
        "'OR": [
          -1,
          100
        ],
        "'BANG": [
          -1,
          100
        ],
        "'DOT": [
          -1,
          100
        ],
        "'LBRACK": [
          -1,
          100
        ],
        "'RBRACK": [
          -1,
          100
        ],
        "'NUMBER": [
          -1,
          100
        ],
        "'TRUE": [
          -1,
          100
        ],
        "'FALSE": [
          -1,
          100
        ],
        "'NULL": [
          -1,
          100
        ],
        "'PARENAFTERBRACE": [
          -1,
          100
        ],
        "'TABLE": [
          -1,
          100
        ],
        "'ASK": [
          -1,
          100
        ],
        "'NEW": [
          -1,
          100
        ]
      },
      {
        "$": [
          -1,
          102
        ],
        "'NAME": [
          -1,
          102
        ],
        "'SEMI": [
          -1,
          102
        ],
        "'PARENNOSPACE": [
          -1,
          102
        ],
        "'STRING": [
          -1,
          102
        ],
        "'RPAREN": [
          -1,
          102
        ],
        "'LBRACE": [
          -1,
          102
        ],
        "'RBRACE": [
          -1,
          102
        ],
        "'SPY": [
          -1,
          102
        ],
        "'PARENSPACE": [
          -1,
          102
        ],
        "'COMMA": [
          -1,
          102
        ],
        "'INT": [
          -1,
          102
        ],
        "'LONG": [
          -1,
          102
        ],
        "'DOUBLE": [
          -1,
          102
        ],
        "'FLOAT": [
          -1,
          102
        ],
        "'BOOLEAN": [
          -1,
          102
        ],
        "'VOID": [
          -1,
          102
        ],
        "'LT": [
          -1,
          102
        ],
        "'GT": [
          -1,
          102
        ],
        "'THINARROW": [
          -1,
          102
        ],
        "'DATA": [
          -1,
          102
        ],
        "'IF": [
          -1,
          102
        ],
        "'FOR": [
          -1,
          102
        ],
        "'RETURN": [
          -1,
          102
        ],
        "'VAR": [
          -1,
          102
        ],
        "'ATCHECK": [
          -1,
          102
        ],
        "'ASSERTEQUALS": [
          -1,
          102
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          102
        ],
        "'ASSERTTRUE": [
          -1,
          102
        ],
        "'ASSERTFALSE": [
          -1,
          102
        ],
        "'ASSERTSATISFIES": [
          -1,
          102
        ],
        "'ASSERTRAISES": [
          -1,
          102
        ],
        "'IS": [
          -1,
          102
        ],
        "'ISNOT": [
          -1,
          102
        ],
        "'SATISFIES": [
          -1,
          102
        ],
        "'RAISES": [
          -1,
          102
        ],
        "'SWITCH": [
          -1,
          102
        ],
        "'CASE": [
          -1,
          102
        ],
        "'DEFAULT": [
          -1,
          102
        ],
        "'YIELD": [
          -1,
          102
        ],
        "'PLUS": [
          -1,
          102
        ],
        "'DASH": [
          -1,
          102
        ],
        "'TIMES": [
          -1,
          102
        ],
        "'SLASH": [
          -1,
          102
        ],
        "'PERCENT": [
          -1,
          102
        ],
        "'EQUALEQUAL": [
          -1,
          102
        ],
        "'NEQ": [
          -1,
          102
        ],
        "'LEQ": [
          -1,
          102
        ],
        "'GEQ": [
          -1,
          102
        ],
        "'AND": [
          -1,
          102
        ],
        "'OR": [
          -1,
          102
        ],
        "'BANG": [
          -1,
          102
        ],
        "'DOT": [
          -1,
          102
        ],
        "'LBRACK": [
          -1,
          102
        ],
        "'RBRACK": [
          -1,
          102
        ],
        "'NUMBER": [
          -1,
          102
        ],
        "'TRUE": [
          -1,
          102
        ],
        "'FALSE": [
          -1,
          102
        ],
        "'NULL": [
          -1,
          102
        ],
        "'PARENAFTERBRACE": [
          -1,
          102
        ],
        "'TABLE": [
          -1,
          102
        ],
        "'ASK": [
          -1,
          102
        ],
        "'NEW": [
          -1,
          102
        ]
      },
      {
        "'LBRACE": [
          105
        ]
      },
      {
        "'LBRACE": [
          106
        ]
      },
      {
        "'NAME": [
          107
        ]
      },
      {
        "'SEMI": [
          108
        ],
        "'AS": [
          109
        ],
        "'PARENNOSPACE": [
          110
        ]
      },
      {
        "'SEMI": [
          111
        ],
        "'AS": [
          112
        ],
        "'PARENNOSPACE": [
          113
        ]
      },
      {
        "'NAME": [
          -1,
          104
        ],
        "'RPAREN": [
          -1,
          104
        ],
        "'COMMA": [
          -1,
          104
        ],
        "'GT": [
          -1,
          104
        ],
        "'THINARROW": [
          -1,
          104
        ]
      },
      {
        "'NAME": [
          -1,
          106
        ],
        "'RPAREN": [
          -1,
          106
        ],
        "'COMMA": [
          -1,
          106
        ],
        "'GT": [
          -1,
          106
        ],
        "'THINARROW": [
          -1,
          106
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          114
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          116
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "type-ann_A6_I1?": [
          61
        ],
        "type-ann_A6_I1": [
          62
        ],
        "'LT": [
          63
        ],
        "'NAME": [
          -1,
          24,
          26
        ],
        "'RPAREN": [
          -1,
          108
        ],
        "'COMMA": [
          -1,
          108
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          117
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "type-ann_A7_I1?": [
          77
        ],
        "type-ann_A7_I1": [
          78
        ],
        "'THINARROW": [
          -1,
          52
        ]
      },
      {
        "'NAME": [
          118
        ]
      },
      {
        "lambda-expr_A1_I1_I1*": [
          119
        ],
        "'RPAREN": [
          -1,
          110,
          112
        ],
        "'COMMA": [
          -1,
          112
        ]
      },
      {
        "'RPAREN": [
          120
        ]
      },
      {
        "'RPAREN": [
          -1,
          114
        ]
      },
      {
        "'COLON": [
          121
        ]
      },
      {
        "$": [
          -1,
          116
        ],
        "'NAME": [
          -1,
          116
        ],
        "'SEMI": [
          -1,
          116
        ],
        "'PARENNOSPACE": [
          -1,
          116
        ],
        "'STRING": [
          -1,
          116
        ],
        "'RPAREN": [
          -1,
          116
        ],
        "'LBRACE": [
          -1,
          116
        ],
        "'RBRACE": [
          -1,
          116
        ],
        "'SPY": [
          -1,
          116
        ],
        "'PARENSPACE": [
          -1,
          116
        ],
        "'COMMA": [
          -1,
          116
        ],
        "'INT": [
          -1,
          116
        ],
        "'LONG": [
          -1,
          116
        ],
        "'DOUBLE": [
          -1,
          116
        ],
        "'FLOAT": [
          -1,
          116
        ],
        "'BOOLEAN": [
          -1,
          116
        ],
        "'VOID": [
          -1,
          116
        ],
        "'LT": [
          -1,
          116
        ],
        "'GT": [
          -1,
          116
        ],
        "'THINARROW": [
          -1,
          116
        ],
        "'DATA": [
          -1,
          116
        ],
        "'IF": [
          -1,
          116
        ],
        "'FOR": [
          -1,
          116
        ],
        "'RETURN": [
          -1,
          116
        ],
        "'VAR": [
          -1,
          116
        ],
        "'ATCHECK": [
          -1,
          116
        ],
        "'ASSERTEQUALS": [
          -1,
          116
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          116
        ],
        "'ASSERTTRUE": [
          -1,
          116
        ],
        "'ASSERTFALSE": [
          -1,
          116
        ],
        "'ASSERTSATISFIES": [
          -1,
          116
        ],
        "'ASSERTRAISES": [
          -1,
          116
        ],
        "'IS": [
          -1,
          116
        ],
        "'ISNOT": [
          -1,
          116
        ],
        "'SATISFIES": [
          -1,
          116
        ],
        "'RAISES": [
          -1,
          116
        ],
        "'SWITCH": [
          -1,
          116
        ],
        "'CASE": [
          -1,
          116
        ],
        "'DEFAULT": [
          -1,
          116
        ],
        "'YIELD": [
          -1,
          116
        ],
        "'PLUS": [
          -1,
          116
        ],
        "'DASH": [
          -1,
          116
        ],
        "'TIMES": [
          -1,
          116
        ],
        "'SLASH": [
          -1,
          116
        ],
        "'PERCENT": [
          -1,
          116
        ],
        "'EQUALEQUAL": [
          -1,
          116
        ],
        "'NEQ": [
          -1,
          116
        ],
        "'LEQ": [
          -1,
          116
        ],
        "'GEQ": [
          -1,
          116
        ],
        "'AND": [
          -1,
          116
        ],
        "'OR": [
          -1,
          116
        ],
        "'BANG": [
          -1,
          116
        ],
        "'DOT": [
          -1,
          116
        ],
        "'LBRACK": [
          -1,
          116
        ],
        "'RBRACK": [
          -1,
          116
        ],
        "'NUMBER": [
          -1,
          116
        ],
        "'TRUE": [
          -1,
          116
        ],
        "'FALSE": [
          -1,
          116
        ],
        "'NULL": [
          -1,
          116
        ],
        "'PARENAFTERBRACE": [
          -1,
          116
        ],
        "'TABLE": [
          -1,
          116
        ],
        "'ASK": [
          -1,
          116
        ],
        "'NEW": [
          -1,
          116
        ]
      },
      {
        "record-expr_A0_I2*": [
          122
        ],
        "'RBRACE": [
          -1,
          118
        ],
        "'COMMA": [
          -1,
          118
        ]
      },
      {
        "type-ann_A6_I1?": [
          61
        ],
        "type-ann_A6_I1": [
          62
        ],
        "'LT": [
          63,
          22
        ],
        "'NAME": [
          -1,
          24,
          26
        ],
        "'PARENNOSPACE": [
          -1,
          22
        ],
        "'RPAREN": [
          -1,
          108,
          22
        ],
        "'COMMA": [
          -1,
          24,
          108,
          26
        ],
        "'GT": [
          -1,
          22
        ],
        "'THINARROW": [
          -1,
          24,
          26
        ],
        "'PLUS": [
          -1,
          22
        ],
        "'DASH": [
          -1,
          22
        ],
        "'TIMES": [
          -1,
          22
        ],
        "'SLASH": [
          -1,
          22
        ],
        "'PERCENT": [
          -1,
          22
        ],
        "'EQUALEQUAL": [
          -1,
          22
        ],
        "'NEQ": [
          -1,
          22
        ],
        "'LEQ": [
          -1,
          22
        ],
        "'GEQ": [
          -1,
          22
        ],
        "'AND": [
          -1,
          22
        ],
        "'OR": [
          -1,
          22
        ],
        "'DOT": [
          -1,
          22
        ],
        "'LBRACK": [
          -1,
          22
        ]
      },
      {
        "'NAME": [
          123
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          75
        ],
        "type-ann": [
          117
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "type-ann_A7_I1?": [
          77
        ],
        "type-ann_A7_I1": [
          78
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "binop-expr": [
          82
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ],
        "'THINARROW": [
          -1,
          52
        ]
      },
      {
        "'NAME": [
          118
        ],
        "type-ann_A7_I1_I1*": [
          124
        ],
        "'COMMA": [
          -1,
          120
        ],
        "'THINARROW": [
          -1,
          122,
          120
        ]
      },
      {
        "'THINARROW": [
          125
        ]
      },
      {
        "'THINARROW": [
          -1,
          124
        ]
      },
      {
        "'RPAREN": [
          126
        ]
      },
      {
        "'RPAREN": [
          -1,
          126
        ]
      },
      {
        "lambda-expr_A0_I1_I1*": [
          127
        ],
        "'RPAREN": [
          -1,
          128,
          130
        ],
        "'COMMA": [
          -1,
          130
        ]
      },
      {
        "'RPAREN": [
          128
        ]
      },
      {
        "'PARENNOSPACE": [
          129
        ],
        "'EQUALS": [
          130
        ]
      },
      {
        "'LBRACE": [
          131
        ]
      },
      {
        "$": [
          -1,
          132
        ],
        "'NAME": [
          -1,
          132
        ],
        "'PARENNOSPACE": [
          -1,
          132
        ],
        "'STRING": [
          -1,
          132
        ],
        "'LBRACE": [
          -1,
          132
        ],
        "'RBRACE": [
          -1,
          132
        ],
        "'SPY": [
          -1,
          132
        ],
        "'PARENSPACE": [
          -1,
          132
        ],
        "'INT": [
          -1,
          132
        ],
        "'LONG": [
          -1,
          132
        ],
        "'DOUBLE": [
          -1,
          132
        ],
        "'FLOAT": [
          -1,
          132
        ],
        "'BOOLEAN": [
          -1,
          132
        ],
        "'VOID": [
          -1,
          132
        ],
        "'DATA": [
          -1,
          132
        ],
        "'IF": [
          -1,
          132
        ],
        "'FOR": [
          -1,
          132
        ],
        "'RETURN": [
          -1,
          132
        ],
        "'VAR": [
          -1,
          132
        ],
        "'ATCHECK": [
          -1,
          132
        ],
        "'ASSERTEQUALS": [
          -1,
          132
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          132
        ],
        "'ASSERTTRUE": [
          -1,
          132
        ],
        "'ASSERTFALSE": [
          -1,
          132
        ],
        "'ASSERTSATISFIES": [
          -1,
          132
        ],
        "'ASSERTRAISES": [
          -1,
          132
        ],
        "'SWITCH": [
          -1,
          132
        ],
        "'YIELD": [
          -1,
          132
        ],
        "'DASH": [
          -1,
          132
        ],
        "'BANG": [
          -1,
          132
        ],
        "'LBRACK": [
          -1,
          132
        ],
        "'NUMBER": [
          -1,
          132
        ],
        "'TRUE": [
          -1,
          132
        ],
        "'FALSE": [
          -1,
          132
        ],
        "'NULL": [
          -1,
          132
        ],
        "'PARENAFTERBRACE": [
          -1,
          132
        ],
        "'TABLE": [
          -1,
          132
        ],
        "'ASK": [
          -1,
          132
        ],
        "'NEW": [
          -1,
          132
        ]
      },
      {
        "$": [
          -1,
          134
        ],
        "'NAME": [
          -1,
          134
        ],
        "'PARENNOSPACE": [
          -1,
          134
        ],
        "'STRING": [
          -1,
          134
        ],
        "'LBRACE": [
          -1,
          134
        ],
        "'RBRACE": [
          -1,
          134
        ],
        "'SPY": [
          -1,
          134
        ],
        "'PARENSPACE": [
          -1,
          134
        ],
        "'INT": [
          -1,
          134
        ],
        "'LONG": [
          -1,
          134
        ],
        "'DOUBLE": [
          -1,
          134
        ],
        "'FLOAT": [
          -1,
          134
        ],
        "'BOOLEAN": [
          -1,
          134
        ],
        "'VOID": [
          -1,
          134
        ],
        "'DATA": [
          -1,
          134
        ],
        "'IF": [
          -1,
          134
        ],
        "'FOR": [
          -1,
          134
        ],
        "'RETURN": [
          -1,
          134
        ],
        "'VAR": [
          -1,
          134
        ],
        "'ATCHECK": [
          -1,
          134
        ],
        "'ASSERTEQUALS": [
          -1,
          134
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          134
        ],
        "'ASSERTTRUE": [
          -1,
          134
        ],
        "'ASSERTFALSE": [
          -1,
          134
        ],
        "'ASSERTSATISFIES": [
          -1,
          134
        ],
        "'ASSERTRAISES": [
          -1,
          134
        ],
        "'SWITCH": [
          -1,
          134
        ],
        "'YIELD": [
          -1,
          134
        ],
        "'DASH": [
          -1,
          134
        ],
        "'BANG": [
          -1,
          134
        ],
        "'LBRACK": [
          -1,
          134
        ],
        "'NUMBER": [
          -1,
          134
        ],
        "'TRUE": [
          -1,
          134
        ],
        "'FALSE": [
          -1,
          134
        ],
        "'NULL": [
          -1,
          134
        ],
        "'PARENAFTERBRACE": [
          -1,
          134
        ],
        "'TABLE": [
          -1,
          134
        ],
        "'ASK": [
          -1,
          134
        ],
        "'NEW": [
          -1,
          134
        ]
      },
      {
        "$": [
          -1,
          136
        ],
        "'NAME": [
          -1,
          136
        ],
        "'PARENNOSPACE": [
          -1,
          136
        ],
        "'STRING": [
          -1,
          136
        ],
        "'LBRACE": [
          -1,
          136
        ],
        "'RBRACE": [
          -1,
          136
        ],
        "'SPY": [
          -1,
          136
        ],
        "'PARENSPACE": [
          -1,
          136
        ],
        "'INT": [
          -1,
          136
        ],
        "'LONG": [
          -1,
          136
        ],
        "'DOUBLE": [
          -1,
          136
        ],
        "'FLOAT": [
          -1,
          136
        ],
        "'BOOLEAN": [
          -1,
          136
        ],
        "'VOID": [
          -1,
          136
        ],
        "'DATA": [
          -1,
          136
        ],
        "'IF": [
          -1,
          136
        ],
        "'FOR": [
          -1,
          136
        ],
        "'RETURN": [
          -1,
          136
        ],
        "'VAR": [
          -1,
          136
        ],
        "'ATCHECK": [
          -1,
          136
        ],
        "'ASSERTEQUALS": [
          -1,
          136
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          136
        ],
        "'ASSERTTRUE": [
          -1,
          136
        ],
        "'ASSERTFALSE": [
          -1,
          136
        ],
        "'ASSERTSATISFIES": [
          -1,
          136
        ],
        "'ASSERTRAISES": [
          -1,
          136
        ],
        "'SWITCH": [
          -1,
          136
        ],
        "'YIELD": [
          -1,
          136
        ],
        "'DASH": [
          -1,
          136
        ],
        "'BANG": [
          -1,
          136
        ],
        "'LBRACK": [
          -1,
          136
        ],
        "'NUMBER": [
          -1,
          136
        ],
        "'TRUE": [
          -1,
          136
        ],
        "'FALSE": [
          -1,
          136
        ],
        "'NULL": [
          -1,
          136
        ],
        "'PARENAFTERBRACE": [
          -1,
          136
        ],
        "'TABLE": [
          -1,
          136
        ],
        "'ASK": [
          -1,
          136
        ],
        "'NEW": [
          -1,
          136
        ]
      },
      {
        "type-ann_A6_I1?": [
          61
        ],
        "type-ann_A6_I1": [
          62
        ],
        "'LT": [
          63
        ],
        "'NAME": [
          -1,
          24,
          26
        ],
        "'RPAREN": [
          -1,
          24,
          26
        ],
        "'COMMA": [
          -1,
          24,
          26
        ],
        "'GT": [
          -1,
          24,
          26
        ],
        "'THINARROW": [
          -1,
          24,
          26
        ]
      },
      {
        "'NAME": [
          132
        ]
      },
      {
        "check-block_A1_I2*": [
          133
        ],
        "'NAME": [
          -1,
          138
        ],
        "'PARENNOSPACE": [
          -1,
          138
        ],
        "'STRING": [
          -1,
          138
        ],
        "'LBRACE": [
          -1,
          138
        ],
        "'RBRACE": [
          -1,
          138
        ],
        "'SPY": [
          -1,
          138
        ],
        "'PARENSPACE": [
          -1,
          138
        ],
        "'INT": [
          -1,
          138
        ],
        "'LONG": [
          -1,
          138
        ],
        "'DOUBLE": [
          -1,
          138
        ],
        "'FLOAT": [
          -1,
          138
        ],
        "'BOOLEAN": [
          -1,
          138
        ],
        "'VOID": [
          -1,
          138
        ],
        "'DATA": [
          -1,
          138
        ],
        "'IF": [
          -1,
          138
        ],
        "'FOR": [
          -1,
          138
        ],
        "'RETURN": [
          -1,
          138
        ],
        "'VAR": [
          -1,
          138
        ],
        "'ATCHECK": [
          -1,
          138
        ],
        "'ASSERTEQUALS": [
          -1,
          138
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          138
        ],
        "'ASSERTTRUE": [
          -1,
          138
        ],
        "'ASSERTFALSE": [
          -1,
          138
        ],
        "'ASSERTSATISFIES": [
          -1,
          138
        ],
        "'ASSERTRAISES": [
          -1,
          138
        ],
        "'SWITCH": [
          -1,
          138
        ],
        "'YIELD": [
          -1,
          138
        ],
        "'DASH": [
          -1,
          138
        ],
        "'BANG": [
          -1,
          138
        ],
        "'LBRACK": [
          -1,
          138
        ],
        "'NUMBER": [
          -1,
          138
        ],
        "'TRUE": [
          -1,
          138
        ],
        "'FALSE": [
          -1,
          138
        ],
        "'NULL": [
          -1,
          138
        ],
        "'PARENAFTERBRACE": [
          -1,
          138
        ],
        "'TABLE": [
          -1,
          138
        ],
        "'ASK": [
          -1,
          138
        ],
        "'NEW": [
          -1,
          138
        ]
      },
      {
        "'NAME": [
          134
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          135
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'LT": [
          136
        ],
        "'GT": [
          137
        ],
        "binop-expr_I1": [
          138
        ],
        "binop": [
          139
        ],
        "'PLUS": [
          140
        ],
        "'DASH": [
          141,
          140
        ],
        "'TIMES": [
          142
        ],
        "'SLASH": [
          143
        ],
        "'PERCENT": [
          144
        ],
        "'EQUALEQUAL": [
          145
        ],
        "'NEQ": [
          146
        ],
        "'LEQ": [
          147
        ],
        "'GEQ": [
          148
        ],
        "'AND": [
          149
        ],
        "'OR": [
          150
        ],
        "$": [
          -1,
          140
        ],
        "'NAME": [
          -1,
          140
        ],
        "'SEMI": [
          -1,
          140
        ],
        "'PARENNOSPACE": [
          -1,
          140
        ],
        "'STRING": [
          -1,
          140
        ],
        "'RPAREN": [
          -1,
          140
        ],
        "'LBRACE": [
          -1,
          140
        ],
        "'RBRACE": [
          -1,
          140
        ],
        "'SPY": [
          -1,
          140
        ],
        "'PARENSPACE": [
          -1,
          140
        ],
        "'COMMA": [
          -1,
          140
        ],
        "'INT": [
          -1,
          140
        ],
        "'LONG": [
          -1,
          140
        ],
        "'DOUBLE": [
          -1,
          140
        ],
        "'FLOAT": [
          -1,
          140
        ],
        "'BOOLEAN": [
          -1,
          140
        ],
        "'VOID": [
          -1,
          140
        ],
        "'THINARROW": [
          -1,
          140
        ],
        "'DATA": [
          -1,
          140
        ],
        "'IF": [
          -1,
          140
        ],
        "'FOR": [
          -1,
          140
        ],
        "'RETURN": [
          -1,
          140
        ],
        "'VAR": [
          -1,
          140
        ],
        "'ATCHECK": [
          -1,
          140
        ],
        "'ASSERTEQUALS": [
          -1,
          140
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          140
        ],
        "'ASSERTTRUE": [
          -1,
          140
        ],
        "'ASSERTFALSE": [
          -1,
          140
        ],
        "'ASSERTSATISFIES": [
          -1,
          140
        ],
        "'ASSERTRAISES": [
          -1,
          140
        ],
        "'IS": [
          -1,
          140
        ],
        "'ISNOT": [
          -1,
          140
        ],
        "'SATISFIES": [
          -1,
          140
        ],
        "'RAISES": [
          -1,
          140
        ],
        "'SWITCH": [
          -1,
          140
        ],
        "'CASE": [
          -1,
          140
        ],
        "'DEFAULT": [
          -1,
          140
        ],
        "'YIELD": [
          -1,
          140
        ],
        "'BANG": [
          -1,
          140
        ],
        "'LBRACK": [
          -1,
          140
        ],
        "'RBRACK": [
          -1,
          140
        ],
        "'NUMBER": [
          -1,
          140
        ],
        "'TRUE": [
          -1,
          140
        ],
        "'FALSE": [
          -1,
          140
        ],
        "'NULL": [
          -1,
          140
        ],
        "'PARENAFTERBRACE": [
          -1,
          140
        ],
        "'TABLE": [
          -1,
          140
        ],
        "'ASK": [
          -1,
          140
        ],
        "'NEW": [
          -1,
          140
        ]
      },
      {
        "$": [
          -1,
          22
        ],
        "'NAME": [
          -1,
          22
        ],
        "'SEMI": [
          -1,
          22
        ],
        "'PARENNOSPACE": [
          -1,
          22
        ],
        "'STRING": [
          -1,
          22
        ],
        "'RPAREN": [
          -1,
          22
        ],
        "'LBRACE": [
          -1,
          22
        ],
        "'RBRACE": [
          -1,
          22
        ],
        "'SPY": [
          -1,
          22
        ],
        "'PARENSPACE": [
          -1,
          22
        ],
        "'COMMA": [
          -1,
          22
        ],
        "'INT": [
          -1,
          22
        ],
        "'LONG": [
          -1,
          22
        ],
        "'DOUBLE": [
          -1,
          22
        ],
        "'FLOAT": [
          -1,
          22
        ],
        "'BOOLEAN": [
          -1,
          22
        ],
        "'VOID": [
          -1,
          22
        ],
        "'LT": [
          -1,
          22
        ],
        "'GT": [
          -1,
          22
        ],
        "'THINARROW": [
          -1,
          22
        ],
        "'DATA": [
          -1,
          22
        ],
        "'IF": [
          -1,
          22
        ],
        "'FOR": [
          -1,
          22
        ],
        "'RETURN": [
          -1,
          22
        ],
        "'VAR": [
          -1,
          22
        ],
        "'ATCHECK": [
          -1,
          22
        ],
        "'ASSERTEQUALS": [
          -1,
          22
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          22
        ],
        "'ASSERTTRUE": [
          -1,
          22
        ],
        "'ASSERTFALSE": [
          -1,
          22
        ],
        "'ASSERTSATISFIES": [
          -1,
          22
        ],
        "'ASSERTRAISES": [
          -1,
          22
        ],
        "'IS": [
          -1,
          22
        ],
        "'ISNOT": [
          -1,
          22
        ],
        "'SATISFIES": [
          -1,
          22
        ],
        "'RAISES": [
          -1,
          22
        ],
        "'SWITCH": [
          -1,
          22
        ],
        "'CASE": [
          -1,
          22
        ],
        "'DEFAULT": [
          -1,
          22
        ],
        "'YIELD": [
          -1,
          22
        ],
        "'PLUS": [
          -1,
          22
        ],
        "'DASH": [
          -1,
          22
        ],
        "'TIMES": [
          -1,
          22
        ],
        "'SLASH": [
          -1,
          22
        ],
        "'PERCENT": [
          -1,
          22
        ],
        "'EQUALEQUAL": [
          -1,
          22
        ],
        "'NEQ": [
          -1,
          22
        ],
        "'LEQ": [
          -1,
          22
        ],
        "'GEQ": [
          -1,
          22
        ],
        "'AND": [
          -1,
          22
        ],
        "'OR": [
          -1,
          22
        ],
        "'BANG": [
          -1,
          22
        ],
        "'DOT": [
          -1,
          22
        ],
        "'LBRACK": [
          -1,
          22
        ],
        "'RBRACK": [
          -1,
          22
        ],
        "'NUMBER": [
          -1,
          22
        ],
        "'TRUE": [
          -1,
          22
        ],
        "'FALSE": [
          -1,
          22
        ],
        "'NULL": [
          -1,
          22
        ],
        "'PARENAFTERBRACE": [
          -1,
          22
        ],
        "'TABLE": [
          -1,
          22
        ],
        "'ASK": [
          -1,
          22
        ],
        "'NEW": [
          -1,
          22
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          95
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "binop-expr": [
          82
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "$": [
          -1,
          142
        ],
        "'NAME": [
          -1,
          142
        ],
        "'SEMI": [
          -1,
          142
        ],
        "'PARENNOSPACE": [
          -1,
          142
        ],
        "'STRING": [
          -1,
          142
        ],
        "'RPAREN": [
          -1,
          142
        ],
        "'LBRACE": [
          -1,
          142
        ],
        "'RBRACE": [
          -1,
          142
        ],
        "'SPY": [
          -1,
          142
        ],
        "'PARENSPACE": [
          -1,
          142
        ],
        "'COMMA": [
          -1,
          142
        ],
        "'INT": [
          -1,
          142
        ],
        "'LONG": [
          -1,
          142
        ],
        "'DOUBLE": [
          -1,
          142
        ],
        "'FLOAT": [
          -1,
          142
        ],
        "'BOOLEAN": [
          -1,
          142
        ],
        "'VOID": [
          -1,
          142
        ],
        "'LT": [
          -1,
          142
        ],
        "'GT": [
          -1,
          142
        ],
        "'THINARROW": [
          -1,
          142
        ],
        "'DATA": [
          -1,
          142
        ],
        "'IF": [
          -1,
          142
        ],
        "'FOR": [
          -1,
          142
        ],
        "'RETURN": [
          -1,
          142
        ],
        "'VAR": [
          -1,
          142
        ],
        "'ATCHECK": [
          -1,
          142
        ],
        "'ASSERTEQUALS": [
          -1,
          142
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          142
        ],
        "'ASSERTTRUE": [
          -1,
          142
        ],
        "'ASSERTFALSE": [
          -1,
          142
        ],
        "'ASSERTSATISFIES": [
          -1,
          142
        ],
        "'ASSERTRAISES": [
          -1,
          142
        ],
        "'IS": [
          -1,
          142
        ],
        "'ISNOT": [
          -1,
          142
        ],
        "'SATISFIES": [
          -1,
          142
        ],
        "'RAISES": [
          -1,
          142
        ],
        "'SWITCH": [
          -1,
          142
        ],
        "'CASE": [
          -1,
          142
        ],
        "'DEFAULT": [
          -1,
          142
        ],
        "'YIELD": [
          -1,
          142
        ],
        "'PLUS": [
          -1,
          142
        ],
        "'DASH": [
          -1,
          142
        ],
        "'TIMES": [
          -1,
          142
        ],
        "'SLASH": [
          -1,
          142
        ],
        "'PERCENT": [
          -1,
          142
        ],
        "'EQUALEQUAL": [
          -1,
          142
        ],
        "'NEQ": [
          -1,
          142
        ],
        "'LEQ": [
          -1,
          142
        ],
        "'GEQ": [
          -1,
          142
        ],
        "'AND": [
          -1,
          142
        ],
        "'OR": [
          -1,
          142
        ],
        "'BANG": [
          -1,
          142
        ],
        "'LBRACK": [
          -1,
          142
        ],
        "'RBRACK": [
          -1,
          142
        ],
        "'NUMBER": [
          -1,
          142
        ],
        "'TRUE": [
          -1,
          142
        ],
        "'FALSE": [
          -1,
          142
        ],
        "'NULL": [
          -1,
          142
        ],
        "'PARENAFTERBRACE": [
          -1,
          142
        ],
        "'TABLE": [
          -1,
          142
        ],
        "'ASK": [
          -1,
          142
        ],
        "'NEW": [
          -1,
          142
        ]
      },
      {
        "$": [
          -1,
          144
        ],
        "'NAME": [
          -1,
          144
        ],
        "'SEMI": [
          -1,
          144
        ],
        "'PARENNOSPACE": [
          -1,
          144
        ],
        "'STRING": [
          -1,
          144
        ],
        "'RPAREN": [
          -1,
          144
        ],
        "'LBRACE": [
          -1,
          144
        ],
        "'RBRACE": [
          -1,
          144
        ],
        "'SPY": [
          -1,
          144
        ],
        "'PARENSPACE": [
          -1,
          144
        ],
        "'COMMA": [
          -1,
          144
        ],
        "'INT": [
          -1,
          144
        ],
        "'LONG": [
          -1,
          144
        ],
        "'DOUBLE": [
          -1,
          144
        ],
        "'FLOAT": [
          -1,
          144
        ],
        "'BOOLEAN": [
          -1,
          144
        ],
        "'VOID": [
          -1,
          144
        ],
        "'LT": [
          -1,
          144
        ],
        "'GT": [
          -1,
          144
        ],
        "'THINARROW": [
          -1,
          144
        ],
        "'DATA": [
          -1,
          144
        ],
        "'IF": [
          -1,
          144
        ],
        "'FOR": [
          -1,
          144
        ],
        "'RETURN": [
          -1,
          144
        ],
        "'VAR": [
          -1,
          144
        ],
        "'ATCHECK": [
          -1,
          144
        ],
        "'ASSERTEQUALS": [
          -1,
          144
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          144
        ],
        "'ASSERTTRUE": [
          -1,
          144
        ],
        "'ASSERTFALSE": [
          -1,
          144
        ],
        "'ASSERTSATISFIES": [
          -1,
          144
        ],
        "'ASSERTRAISES": [
          -1,
          144
        ],
        "'IS": [
          -1,
          144
        ],
        "'ISNOT": [
          -1,
          144
        ],
        "'SATISFIES": [
          -1,
          144
        ],
        "'RAISES": [
          -1,
          144
        ],
        "'SWITCH": [
          -1,
          144
        ],
        "'CASE": [
          -1,
          144
        ],
        "'DEFAULT": [
          -1,
          144
        ],
        "'YIELD": [
          -1,
          144
        ],
        "'PLUS": [
          -1,
          144
        ],
        "'DASH": [
          -1,
          144
        ],
        "'TIMES": [
          -1,
          144
        ],
        "'SLASH": [
          -1,
          144
        ],
        "'PERCENT": [
          -1,
          144
        ],
        "'EQUALEQUAL": [
          -1,
          144
        ],
        "'NEQ": [
          -1,
          144
        ],
        "'LEQ": [
          -1,
          144
        ],
        "'GEQ": [
          -1,
          144
        ],
        "'AND": [
          -1,
          144
        ],
        "'OR": [
          -1,
          144
        ],
        "'BANG": [
          -1,
          144
        ],
        "'LBRACK": [
          -1,
          144
        ],
        "'RBRACK": [
          -1,
          144
        ],
        "'NUMBER": [
          -1,
          144
        ],
        "'TRUE": [
          -1,
          144
        ],
        "'FALSE": [
          -1,
          144
        ],
        "'NULL": [
          -1,
          144
        ],
        "'PARENAFTERBRACE": [
          -1,
          144
        ],
        "'TABLE": [
          -1,
          144
        ],
        "'ASK": [
          -1,
          144
        ],
        "'NEW": [
          -1,
          144
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          151
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "app-or-access_A0_I2?": [
          152
        ],
        "app-or-access_A0_I2": [
          153
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ],
        "'RPAREN": [
          -1,
          146
        ]
      },
      {
        "'NAME": [
          154
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          95
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "binop-expr": [
          155
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'COLON": [
          156
        ]
      },
      {
        "'PARENSPACE": [
          157
        ]
      },
      {
        "$": [
          -1,
          148
        ],
        "'NAME": [
          -1,
          148
        ],
        "'SEMI": [
          -1,
          148
        ],
        "'PARENNOSPACE": [
          -1,
          148
        ],
        "'STRING": [
          -1,
          148
        ],
        "'RPAREN": [
          -1,
          148
        ],
        "'LBRACE": [
          -1,
          148
        ],
        "'RBRACE": [
          -1,
          148
        ],
        "'SPY": [
          -1,
          148
        ],
        "'PARENSPACE": [
          -1,
          148
        ],
        "'COMMA": [
          -1,
          148
        ],
        "'INT": [
          -1,
          148
        ],
        "'LONG": [
          -1,
          148
        ],
        "'DOUBLE": [
          -1,
          148
        ],
        "'FLOAT": [
          -1,
          148
        ],
        "'BOOLEAN": [
          -1,
          148
        ],
        "'VOID": [
          -1,
          148
        ],
        "'LT": [
          -1,
          148
        ],
        "'GT": [
          -1,
          148
        ],
        "'THINARROW": [
          -1,
          148
        ],
        "'DATA": [
          -1,
          148
        ],
        "'IF": [
          -1,
          148
        ],
        "'FOR": [
          -1,
          148
        ],
        "'RETURN": [
          -1,
          148
        ],
        "'VAR": [
          -1,
          148
        ],
        "'ATCHECK": [
          -1,
          148
        ],
        "'ASSERTEQUALS": [
          -1,
          148
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          148
        ],
        "'ASSERTTRUE": [
          -1,
          148
        ],
        "'ASSERTFALSE": [
          -1,
          148
        ],
        "'ASSERTSATISFIES": [
          -1,
          148
        ],
        "'ASSERTRAISES": [
          -1,
          148
        ],
        "'IS": [
          -1,
          148
        ],
        "'ISNOT": [
          -1,
          148
        ],
        "'SATISFIES": [
          -1,
          148
        ],
        "'RAISES": [
          -1,
          148
        ],
        "'SWITCH": [
          -1,
          148
        ],
        "'CASE": [
          -1,
          148
        ],
        "'DEFAULT": [
          -1,
          148
        ],
        "'YIELD": [
          -1,
          148
        ],
        "'PLUS": [
          -1,
          148
        ],
        "'DASH": [
          -1,
          148
        ],
        "'TIMES": [
          -1,
          148
        ],
        "'SLASH": [
          -1,
          148
        ],
        "'PERCENT": [
          -1,
          148
        ],
        "'EQUALEQUAL": [
          -1,
          148
        ],
        "'NEQ": [
          -1,
          148
        ],
        "'LEQ": [
          -1,
          148
        ],
        "'GEQ": [
          -1,
          148
        ],
        "'AND": [
          -1,
          148
        ],
        "'OR": [
          -1,
          148
        ],
        "'BANG": [
          -1,
          148
        ],
        "'DOT": [
          -1,
          148
        ],
        "'LBRACK": [
          -1,
          148
        ],
        "'RBRACK": [
          -1,
          148
        ],
        "'NUMBER": [
          -1,
          148
        ],
        "'TRUE": [
          -1,
          148
        ],
        "'FALSE": [
          -1,
          148
        ],
        "'NULL": [
          -1,
          148
        ],
        "'PARENAFTERBRACE": [
          -1,
          148
        ],
        "'TABLE": [
          -1,
          148
        ],
        "'ASK": [
          -1,
          148
        ],
        "'NEW": [
          -1,
          148
        ]
      },
      {
        "'RPAREN": [
          158
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          159
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "table-header": [
          160
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          95
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "binop-expr": [
          161
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "ask-branch": [
          162
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'PARENNOSPACE": [
          163
        ]
      },
      {
        "$": [
          -1,
          150
        ],
        "'IMPORT": [
          -1,
          150
        ],
        "'NAME": [
          -1,
          150
        ],
        "'PARENNOSPACE": [
          -1,
          150
        ],
        "'STRING": [
          -1,
          150
        ],
        "'INCLUDE": [
          -1,
          150
        ],
        "'LBRACE": [
          -1,
          150
        ],
        "'PARENSPACE": [
          -1,
          150
        ],
        "'INT": [
          -1,
          150
        ],
        "'LONG": [
          -1,
          150
        ],
        "'DOUBLE": [
          -1,
          150
        ],
        "'FLOAT": [
          -1,
          150
        ],
        "'BOOLEAN": [
          -1,
          150
        ],
        "'VOID": [
          -1,
          150
        ],
        "'DATA": [
          -1,
          150
        ],
        "'VAR": [
          -1,
          150
        ],
        "'ATCHECK": [
          -1,
          150
        ],
        "'SWITCH": [
          -1,
          150
        ],
        "'DASH": [
          -1,
          150
        ],
        "'BANG": [
          -1,
          150
        ],
        "'LBRACK": [
          -1,
          150
        ],
        "'NUMBER": [
          -1,
          150
        ],
        "'TRUE": [
          -1,
          150
        ],
        "'FALSE": [
          -1,
          150
        ],
        "'NULL": [
          -1,
          150
        ],
        "'PARENAFTERBRACE": [
          -1,
          150
        ],
        "'TABLE": [
          -1,
          150
        ],
        "'ASK": [
          -1,
          150
        ],
        "'NEW": [
          -1,
          150
        ]
      },
      {
        "'NAME": [
          164
        ]
      },
      {
        "'STRING": [
          165
        ]
      },
      {
        "$": [
          -1,
          152
        ],
        "'IMPORT": [
          -1,
          152
        ],
        "'NAME": [
          -1,
          152
        ],
        "'PARENNOSPACE": [
          -1,
          152
        ],
        "'STRING": [
          -1,
          152
        ],
        "'INCLUDE": [
          -1,
          152
        ],
        "'LBRACE": [
          -1,
          152
        ],
        "'PARENSPACE": [
          -1,
          152
        ],
        "'INT": [
          -1,
          152
        ],
        "'LONG": [
          -1,
          152
        ],
        "'DOUBLE": [
          -1,
          152
        ],
        "'FLOAT": [
          -1,
          152
        ],
        "'BOOLEAN": [
          -1,
          152
        ],
        "'VOID": [
          -1,
          152
        ],
        "'DATA": [
          -1,
          152
        ],
        "'VAR": [
          -1,
          152
        ],
        "'ATCHECK": [
          -1,
          152
        ],
        "'SWITCH": [
          -1,
          152
        ],
        "'DASH": [
          -1,
          152
        ],
        "'BANG": [
          -1,
          152
        ],
        "'LBRACK": [
          -1,
          152
        ],
        "'NUMBER": [
          -1,
          152
        ],
        "'TRUE": [
          -1,
          152
        ],
        "'FALSE": [
          -1,
          152
        ],
        "'NULL": [
          -1,
          152
        ],
        "'PARENAFTERBRACE": [
          -1,
          152
        ],
        "'TABLE": [
          -1,
          152
        ],
        "'ASK": [
          -1,
          152
        ],
        "'NEW": [
          -1,
          152
        ]
      },
      {
        "'NAME": [
          166
        ]
      },
      {
        "'STRING": [
          167
        ]
      },
      {
        "type-ann_A6_I1_I2*": [
          168
        ],
        "'COMMA": [
          -1,
          154
        ],
        "'GT": [
          -1,
          154
        ]
      },
      {
        "'NAME": [
          74
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          75
        ],
        "type-ann": [
          67
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr_A0_I1?": [
          79
        ],
        "lambda-expr_A0_I1": [
          80
        ],
        "lambda-param": [
          81
        ],
        "binop-expr": [
          82
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ],
        "'RPAREN": [
          -1,
          50
        ]
      },
      {
        "'SEMI": [
          169
        ],
        "assign-stmt_I3?": [
          170
        ],
        "assign-stmt_I3": [
          171
        ],
        "$": [
          -1,
          156,
          158
        ],
        "'NAME": [
          -1,
          156,
          158
        ],
        "'PARENNOSPACE": [
          -1,
          156,
          158
        ],
        "'STRING": [
          -1,
          156,
          158
        ],
        "'LBRACE": [
          -1,
          156,
          158
        ],
        "'RBRACE": [
          -1,
          156,
          158
        ],
        "'SPY": [
          -1,
          156,
          158
        ],
        "'PARENSPACE": [
          -1,
          156,
          158
        ],
        "'INT": [
          -1,
          156,
          158
        ],
        "'LONG": [
          -1,
          156,
          158
        ],
        "'DOUBLE": [
          -1,
          156,
          158
        ],
        "'FLOAT": [
          -1,
          156,
          158
        ],
        "'BOOLEAN": [
          -1,
          156,
          158
        ],
        "'VOID": [
          -1,
          156,
          158
        ],
        "'DATA": [
          -1,
          156,
          158
        ],
        "'IF": [
          -1,
          156,
          158
        ],
        "'FOR": [
          -1,
          156,
          158
        ],
        "'RETURN": [
          -1,
          156,
          158
        ],
        "'VAR": [
          -1,
          156,
          158
        ],
        "'ATCHECK": [
          -1,
          156,
          158
        ],
        "'ASSERTEQUALS": [
          -1,
          156,
          158
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          156,
          158
        ],
        "'ASSERTTRUE": [
          -1,
          156,
          158
        ],
        "'ASSERTFALSE": [
          -1,
          156,
          158
        ],
        "'ASSERTSATISFIES": [
          -1,
          156,
          158
        ],
        "'ASSERTRAISES": [
          -1,
          156,
          158
        ],
        "'SWITCH": [
          -1,
          156,
          158
        ],
        "'YIELD": [
          -1,
          156,
          158
        ],
        "'DASH": [
          -1,
          156,
          158
        ],
        "'BANG": [
          -1,
          156,
          158
        ],
        "'LBRACK": [
          -1,
          156,
          158
        ],
        "'NUMBER": [
          -1,
          156,
          158
        ],
        "'TRUE": [
          -1,
          156,
          158
        ],
        "'FALSE": [
          -1,
          156,
          158
        ],
        "'NULL": [
          -1,
          156,
          158
        ],
        "'PARENAFTERBRACE": [
          -1,
          156,
          158
        ],
        "'TABLE": [
          -1,
          156,
          158
        ],
        "'ASK": [
          -1,
          156,
          158
        ],
        "'NEW": [
          -1,
          156,
          158
        ]
      },
      {
        "type-ann_A7_I1_I1*": [
          124
        ],
        "'COMMA": [
          -1,
          120
        ],
        "'THINARROW": [
          -1,
          122,
          120
        ]
      },
      {
        "'RPAREN": [
          -1,
          160
        ],
        "'COMMA": [
          -1,
          160
        ]
      },
      {
        "'COMMA": [
          172
        ],
        "lambda-expr_A1_I1_I1": [
          173
        ],
        "'RPAREN": [
          -1,
          162
        ]
      },
      {
        "'THINARROW": [
          174
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          175
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RBRACE": [
          176
        ],
        "'COMMA": [
          177
        ],
        "record-expr_A0_I2": [
          178
        ]
      },
      {
        "type-ann_A6_I1?": [
          61
        ],
        "type-ann_A6_I1": [
          62
        ],
        "'LT": [
          63,
          22
        ],
        "'PARENNOSPACE": [
          -1,
          22
        ],
        "'RPAREN": [
          -1,
          22
        ],
        "'COMMA": [
          -1,
          24,
          26
        ],
        "'GT": [
          -1,
          22
        ],
        "'THINARROW": [
          -1,
          24,
          26
        ],
        "'PLUS": [
          -1,
          22
        ],
        "'DASH": [
          -1,
          22
        ],
        "'TIMES": [
          -1,
          22
        ],
        "'SLASH": [
          -1,
          22
        ],
        "'PERCENT": [
          -1,
          22
        ],
        "'EQUALEQUAL": [
          -1,
          22
        ],
        "'NEQ": [
          -1,
          22
        ],
        "'LEQ": [
          -1,
          22
        ],
        "'GEQ": [
          -1,
          22
        ],
        "'AND": [
          -1,
          22
        ],
        "'OR": [
          -1,
          22
        ],
        "'DOT": [
          -1,
          22
        ],
        "'LBRACK": [
          -1,
          22
        ]
      },
      {
        "'COMMA": [
          179
        ],
        "type-ann_A7_I1_I1": [
          180
        ],
        "'THINARROW": [
          -1,
          164
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          181
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ]
      },
      {
        "'THINARROW": [
          182
        ]
      },
      {
        "'COMMA": [
          183
        ],
        "lambda-expr_A0_I1_I1": [
          184
        ],
        "'RPAREN": [
          -1,
          166
        ]
      },
      {
        "$": [
          -1,
          168
        ],
        "'NAME": [
          -1,
          168
        ],
        "'SEMI": [
          -1,
          168
        ],
        "'PARENNOSPACE": [
          -1,
          168
        ],
        "'STRING": [
          -1,
          168
        ],
        "'RPAREN": [
          -1,
          168
        ],
        "'LBRACE": [
          -1,
          168
        ],
        "'RBRACE": [
          -1,
          168
        ],
        "'SPY": [
          -1,
          168
        ],
        "'PARENSPACE": [
          -1,
          168
        ],
        "'COMMA": [
          -1,
          168
        ],
        "'INT": [
          -1,
          168
        ],
        "'LONG": [
          -1,
          168
        ],
        "'DOUBLE": [
          -1,
          168
        ],
        "'FLOAT": [
          -1,
          168
        ],
        "'BOOLEAN": [
          -1,
          168
        ],
        "'VOID": [
          -1,
          168
        ],
        "'LT": [
          -1,
          168
        ],
        "'GT": [
          -1,
          168
        ],
        "'THINARROW": [
          -1,
          168
        ],
        "'DATA": [
          -1,
          168
        ],
        "'IF": [
          -1,
          168
        ],
        "'FOR": [
          -1,
          168
        ],
        "'RETURN": [
          -1,
          168
        ],
        "'VAR": [
          -1,
          168
        ],
        "'ATCHECK": [
          -1,
          168
        ],
        "'ASSERTEQUALS": [
          -1,
          168
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          168
        ],
        "'ASSERTTRUE": [
          -1,
          168
        ],
        "'ASSERTFALSE": [
          -1,
          168
        ],
        "'ASSERTSATISFIES": [
          -1,
          168
        ],
        "'ASSERTRAISES": [
          -1,
          168
        ],
        "'IS": [
          -1,
          168
        ],
        "'ISNOT": [
          -1,
          168
        ],
        "'SATISFIES": [
          -1,
          168
        ],
        "'RAISES": [
          -1,
          168
        ],
        "'SWITCH": [
          -1,
          168
        ],
        "'CASE": [
          -1,
          168
        ],
        "'DEFAULT": [
          -1,
          168
        ],
        "'YIELD": [
          -1,
          168
        ],
        "'PLUS": [
          -1,
          168
        ],
        "'DASH": [
          -1,
          168
        ],
        "'TIMES": [
          -1,
          168
        ],
        "'SLASH": [
          -1,
          168
        ],
        "'PERCENT": [
          -1,
          168
        ],
        "'EQUALEQUAL": [
          -1,
          168
        ],
        "'NEQ": [
          -1,
          168
        ],
        "'LEQ": [
          -1,
          168
        ],
        "'GEQ": [
          -1,
          168
        ],
        "'AND": [
          -1,
          168
        ],
        "'OR": [
          -1,
          168
        ],
        "'BANG": [
          -1,
          168
        ],
        "'DOT": [
          -1,
          168
        ],
        "'LBRACK": [
          -1,
          168
        ],
        "'RBRACK": [
          -1,
          168
        ],
        "'NUMBER": [
          -1,
          168
        ],
        "'TRUE": [
          -1,
          168
        ],
        "'FALSE": [
          -1,
          168
        ],
        "'NULL": [
          -1,
          168
        ],
        "'PARENAFTERBRACE": [
          -1,
          168
        ],
        "'TABLE": [
          -1,
          168
        ],
        "'ASK": [
          -1,
          168
        ],
        "'NEW": [
          -1,
          168
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          185
        ],
        "fun-decl_I3?": [
          186
        ],
        "fun-decl_I3": [
          187
        ],
        "param": [
          188
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "'RPAREN": [
          -1,
          170
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          189
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          190
        ],
        "variant-decl": [
          191
        ]
      },
      {
        "'EQUALS": [
          192
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "fun-decl": [
          193
        ],
        "data-decl": [
          194
        ],
        "check-block": [
          195
        ],
        "let-stmt": [
          196
        ],
        "var-stmt": [
          197
        ],
        "assign-stmt": [
          198
        ],
        "expr-stmt": [
          199
        ],
        "'LBRACE": [
          22
        ],
        "'RBRACE": [
          200
        ],
        "block-stmt": [
          201
        ],
        "if-stmt": [
          202
        ],
        "for-stmt": [
          203
        ],
        "return-stmt": [
          204
        ],
        "yield-stmt": [
          205
        ],
        "spy-stmt": [
          206
        ],
        "'SPY": [
          207
        ],
        "'PARENSPACE": [
          23
        ],
        "type-ann": [
          24
        ],
        "assert-stmt": [
          208
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "'DATA": [
          31
        ],
        "'IF": [
          209
        ],
        "full-expr": [
          210
        ],
        "'FOR": [
          211
        ],
        "'RETURN": [
          212
        ],
        "'VAR": [
          33
        ],
        "'ATCHECK": [
          34
        ],
        "check-block_A1_I2": [
          213
        ],
        "'ASSERTEQUALS": [
          214
        ],
        "'ASSERTNOTEQUALS": [
          215
        ],
        "'ASSERTTRUE": [
          216
        ],
        "'ASSERTFALSE": [
          217
        ],
        "'ASSERTSATISFIES": [
          218
        ],
        "'ASSERTRAISES": [
          219
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "'YIELD": [
          220
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'PARENNOSPACE": [
          221
        ]
      },
      {
        "'RPAREN": [
          222
        ]
      },
      {
        "'NAME": [
          -1,
          172
        ],
        "'STRING": [
          -1,
          172
        ],
        "'LBRACE": [
          -1,
          172
        ],
        "'PARENSPACE": [
          -1,
          172
        ],
        "'SWITCH": [
          -1,
          172
        ],
        "'DASH": [
          -1,
          172
        ],
        "'BANG": [
          -1,
          172
        ],
        "'LBRACK": [
          -1,
          172
        ],
        "'NUMBER": [
          -1,
          172
        ],
        "'TRUE": [
          -1,
          172
        ],
        "'FALSE": [
          -1,
          172
        ],
        "'NULL": [
          -1,
          172
        ],
        "'PARENAFTERBRACE": [
          -1,
          172
        ],
        "'TABLE": [
          -1,
          172
        ],
        "'ASK": [
          -1,
          172
        ],
        "'NEW": [
          -1,
          172
        ]
      },
      {
        "'NAME": [
          -1,
          174
        ],
        "'STRING": [
          -1,
          174
        ],
        "'LBRACE": [
          -1,
          174
        ],
        "'PARENSPACE": [
          -1,
          174
        ],
        "'SWITCH": [
          -1,
          174
        ],
        "'DASH": [
          -1,
          174
        ],
        "'BANG": [
          -1,
          174
        ],
        "'LBRACK": [
          -1,
          174
        ],
        "'NUMBER": [
          -1,
          174
        ],
        "'TRUE": [
          -1,
          174
        ],
        "'FALSE": [
          -1,
          174
        ],
        "'NULL": [
          -1,
          174
        ],
        "'PARENAFTERBRACE": [
          -1,
          174
        ],
        "'TABLE": [
          -1,
          174
        ],
        "'ASK": [
          -1,
          174
        ],
        "'NEW": [
          -1,
          174
        ]
      },
      {
        "$": [
          -1,
          176
        ],
        "'NAME": [
          -1,
          176
        ],
        "'SEMI": [
          -1,
          176
        ],
        "'PARENNOSPACE": [
          -1,
          176
        ],
        "'STRING": [
          -1,
          176
        ],
        "'RPAREN": [
          -1,
          176
        ],
        "'LBRACE": [
          -1,
          176
        ],
        "'RBRACE": [
          -1,
          176
        ],
        "'SPY": [
          -1,
          176
        ],
        "'PARENSPACE": [
          -1,
          176
        ],
        "'COMMA": [
          -1,
          176
        ],
        "'INT": [
          -1,
          176
        ],
        "'LONG": [
          -1,
          176
        ],
        "'DOUBLE": [
          -1,
          176
        ],
        "'FLOAT": [
          -1,
          176
        ],
        "'BOOLEAN": [
          -1,
          176
        ],
        "'VOID": [
          -1,
          176
        ],
        "'LT": [
          -1,
          176
        ],
        "'GT": [
          -1,
          176
        ],
        "'THINARROW": [
          -1,
          176
        ],
        "'DATA": [
          -1,
          176
        ],
        "'IF": [
          -1,
          176
        ],
        "'FOR": [
          -1,
          176
        ],
        "'RETURN": [
          -1,
          176
        ],
        "'VAR": [
          -1,
          176
        ],
        "'ATCHECK": [
          -1,
          176
        ],
        "'ASSERTEQUALS": [
          -1,
          176
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          176
        ],
        "'ASSERTTRUE": [
          -1,
          176
        ],
        "'ASSERTFALSE": [
          -1,
          176
        ],
        "'ASSERTSATISFIES": [
          -1,
          176
        ],
        "'ASSERTRAISES": [
          -1,
          176
        ],
        "'IS": [
          -1,
          176
        ],
        "'ISNOT": [
          -1,
          176
        ],
        "'SATISFIES": [
          -1,
          176
        ],
        "'RAISES": [
          -1,
          176
        ],
        "'SWITCH": [
          -1,
          176
        ],
        "'CASE": [
          -1,
          176
        ],
        "'DEFAULT": [
          -1,
          176
        ],
        "'YIELD": [
          -1,
          176
        ],
        "'PLUS": [
          -1,
          176
        ],
        "'DASH": [
          -1,
          176
        ],
        "'TIMES": [
          -1,
          176
        ],
        "'SLASH": [
          -1,
          176
        ],
        "'PERCENT": [
          -1,
          176
        ],
        "'EQUALEQUAL": [
          -1,
          176
        ],
        "'NEQ": [
          -1,
          176
        ],
        "'LEQ": [
          -1,
          176
        ],
        "'GEQ": [
          -1,
          176
        ],
        "'AND": [
          -1,
          176
        ],
        "'OR": [
          -1,
          176
        ],
        "'BANG": [
          -1,
          176
        ],
        "'LBRACK": [
          -1,
          176
        ],
        "'RBRACK": [
          -1,
          176
        ],
        "'NUMBER": [
          -1,
          176
        ],
        "'TRUE": [
          -1,
          176
        ],
        "'FALSE": [
          -1,
          176
        ],
        "'NULL": [
          -1,
          176
        ],
        "'PARENAFTERBRACE": [
          -1,
          176
        ],
        "'TABLE": [
          -1,
          176
        ],
        "'ASK": [
          -1,
          176
        ],
        "'NEW": [
          -1,
          176
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          95
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "unop-expr": [
          223
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          -1,
          178
        ],
        "'STRING": [
          -1,
          178
        ],
        "'LBRACE": [
          -1,
          178
        ],
        "'PARENSPACE": [
          -1,
          178
        ],
        "'SWITCH": [
          -1,
          178
        ],
        "'DASH": [
          -1,
          178
        ],
        "'BANG": [
          -1,
          178
        ],
        "'LBRACK": [
          -1,
          178
        ],
        "'NUMBER": [
          -1,
          178
        ],
        "'TRUE": [
          -1,
          178
        ],
        "'FALSE": [
          -1,
          178
        ],
        "'NULL": [
          -1,
          178
        ],
        "'PARENAFTERBRACE": [
          -1,
          178
        ],
        "'TABLE": [
          -1,
          178
        ],
        "'ASK": [
          -1,
          178
        ],
        "'NEW": [
          -1,
          178
        ]
      },
      {
        "'NAME": [
          -1,
          180
        ],
        "'STRING": [
          -1,
          180
        ],
        "'LBRACE": [
          -1,
          180
        ],
        "'PARENSPACE": [
          -1,
          180
        ],
        "'SWITCH": [
          -1,
          180
        ],
        "'DASH": [
          -1,
          180
        ],
        "'BANG": [
          -1,
          180
        ],
        "'LBRACK": [
          -1,
          180
        ],
        "'NUMBER": [
          -1,
          180
        ],
        "'TRUE": [
          -1,
          180
        ],
        "'FALSE": [
          -1,
          180
        ],
        "'NULL": [
          -1,
          180
        ],
        "'PARENAFTERBRACE": [
          -1,
          180
        ],
        "'TABLE": [
          -1,
          180
        ],
        "'ASK": [
          -1,
          180
        ],
        "'NEW": [
          -1,
          180
        ]
      },
      {
        "'NAME": [
          -1,
          182
        ],
        "'STRING": [
          -1,
          182
        ],
        "'LBRACE": [
          -1,
          182
        ],
        "'PARENSPACE": [
          -1,
          182
        ],
        "'SWITCH": [
          -1,
          182
        ],
        "'DASH": [
          -1,
          182
        ],
        "'BANG": [
          -1,
          182
        ],
        "'LBRACK": [
          -1,
          182
        ],
        "'NUMBER": [
          -1,
          182
        ],
        "'TRUE": [
          -1,
          182
        ],
        "'FALSE": [
          -1,
          182
        ],
        "'NULL": [
          -1,
          182
        ],
        "'PARENAFTERBRACE": [
          -1,
          182
        ],
        "'TABLE": [
          -1,
          182
        ],
        "'ASK": [
          -1,
          182
        ],
        "'NEW": [
          -1,
          182
        ]
      },
      {
        "'NAME": [
          -1,
          184
        ],
        "'STRING": [
          -1,
          184
        ],
        "'LBRACE": [
          -1,
          184
        ],
        "'PARENSPACE": [
          -1,
          184
        ],
        "'SWITCH": [
          -1,
          184
        ],
        "'DASH": [
          -1,
          184
        ],
        "'BANG": [
          -1,
          184
        ],
        "'LBRACK": [
          -1,
          184
        ],
        "'NUMBER": [
          -1,
          184
        ],
        "'TRUE": [
          -1,
          184
        ],
        "'FALSE": [
          -1,
          184
        ],
        "'NULL": [
          -1,
          184
        ],
        "'PARENAFTERBRACE": [
          -1,
          184
        ],
        "'TABLE": [
          -1,
          184
        ],
        "'ASK": [
          -1,
          184
        ],
        "'NEW": [
          -1,
          184
        ]
      },
      {
        "'NAME": [
          -1,
          186
        ],
        "'STRING": [
          -1,
          186
        ],
        "'LBRACE": [
          -1,
          186
        ],
        "'PARENSPACE": [
          -1,
          186
        ],
        "'SWITCH": [
          -1,
          186
        ],
        "'DASH": [
          -1,
          186
        ],
        "'BANG": [
          -1,
          186
        ],
        "'LBRACK": [
          -1,
          186
        ],
        "'NUMBER": [
          -1,
          186
        ],
        "'TRUE": [
          -1,
          186
        ],
        "'FALSE": [
          -1,
          186
        ],
        "'NULL": [
          -1,
          186
        ],
        "'PARENAFTERBRACE": [
          -1,
          186
        ],
        "'TABLE": [
          -1,
          186
        ],
        "'ASK": [
          -1,
          186
        ],
        "'NEW": [
          -1,
          186
        ]
      },
      {
        "'NAME": [
          -1,
          188
        ],
        "'STRING": [
          -1,
          188
        ],
        "'LBRACE": [
          -1,
          188
        ],
        "'PARENSPACE": [
          -1,
          188
        ],
        "'SWITCH": [
          -1,
          188
        ],
        "'DASH": [
          -1,
          188
        ],
        "'BANG": [
          -1,
          188
        ],
        "'LBRACK": [
          -1,
          188
        ],
        "'NUMBER": [
          -1,
          188
        ],
        "'TRUE": [
          -1,
          188
        ],
        "'FALSE": [
          -1,
          188
        ],
        "'NULL": [
          -1,
          188
        ],
        "'PARENAFTERBRACE": [
          -1,
          188
        ],
        "'TABLE": [
          -1,
          188
        ],
        "'ASK": [
          -1,
          188
        ],
        "'NEW": [
          -1,
          188
        ]
      },
      {
        "'NAME": [
          -1,
          190
        ],
        "'STRING": [
          -1,
          190
        ],
        "'LBRACE": [
          -1,
          190
        ],
        "'PARENSPACE": [
          -1,
          190
        ],
        "'SWITCH": [
          -1,
          190
        ],
        "'DASH": [
          -1,
          190
        ],
        "'BANG": [
          -1,
          190
        ],
        "'LBRACK": [
          -1,
          190
        ],
        "'NUMBER": [
          -1,
          190
        ],
        "'TRUE": [
          -1,
          190
        ],
        "'FALSE": [
          -1,
          190
        ],
        "'NULL": [
          -1,
          190
        ],
        "'PARENAFTERBRACE": [
          -1,
          190
        ],
        "'TABLE": [
          -1,
          190
        ],
        "'ASK": [
          -1,
          190
        ],
        "'NEW": [
          -1,
          190
        ]
      },
      {
        "'NAME": [
          -1,
          192
        ],
        "'STRING": [
          -1,
          192
        ],
        "'LBRACE": [
          -1,
          192
        ],
        "'PARENSPACE": [
          -1,
          192
        ],
        "'SWITCH": [
          -1,
          192
        ],
        "'DASH": [
          -1,
          192
        ],
        "'BANG": [
          -1,
          192
        ],
        "'LBRACK": [
          -1,
          192
        ],
        "'NUMBER": [
          -1,
          192
        ],
        "'TRUE": [
          -1,
          192
        ],
        "'FALSE": [
          -1,
          192
        ],
        "'NULL": [
          -1,
          192
        ],
        "'PARENAFTERBRACE": [
          -1,
          192
        ],
        "'TABLE": [
          -1,
          192
        ],
        "'ASK": [
          -1,
          192
        ],
        "'NEW": [
          -1,
          192
        ]
      },
      {
        "'NAME": [
          -1,
          194
        ],
        "'STRING": [
          -1,
          194
        ],
        "'LBRACE": [
          -1,
          194
        ],
        "'PARENSPACE": [
          -1,
          194
        ],
        "'SWITCH": [
          -1,
          194
        ],
        "'DASH": [
          -1,
          194
        ],
        "'BANG": [
          -1,
          194
        ],
        "'LBRACK": [
          -1,
          194
        ],
        "'NUMBER": [
          -1,
          194
        ],
        "'TRUE": [
          -1,
          194
        ],
        "'FALSE": [
          -1,
          194
        ],
        "'NULL": [
          -1,
          194
        ],
        "'PARENAFTERBRACE": [
          -1,
          194
        ],
        "'TABLE": [
          -1,
          194
        ],
        "'ASK": [
          -1,
          194
        ],
        "'NEW": [
          -1,
          194
        ]
      },
      {
        "'NAME": [
          -1,
          196
        ],
        "'STRING": [
          -1,
          196
        ],
        "'LBRACE": [
          -1,
          196
        ],
        "'PARENSPACE": [
          -1,
          196
        ],
        "'SWITCH": [
          -1,
          196
        ],
        "'DASH": [
          -1,
          196
        ],
        "'BANG": [
          -1,
          196
        ],
        "'LBRACK": [
          -1,
          196
        ],
        "'NUMBER": [
          -1,
          196
        ],
        "'TRUE": [
          -1,
          196
        ],
        "'FALSE": [
          -1,
          196
        ],
        "'NULL": [
          -1,
          196
        ],
        "'PARENAFTERBRACE": [
          -1,
          196
        ],
        "'TABLE": [
          -1,
          196
        ],
        "'ASK": [
          -1,
          196
        ],
        "'NEW": [
          -1,
          196
        ]
      },
      {
        "'NAME": [
          -1,
          198
        ],
        "'STRING": [
          -1,
          198
        ],
        "'LBRACE": [
          -1,
          198
        ],
        "'PARENSPACE": [
          -1,
          198
        ],
        "'SWITCH": [
          -1,
          198
        ],
        "'DASH": [
          -1,
          198
        ],
        "'BANG": [
          -1,
          198
        ],
        "'LBRACK": [
          -1,
          198
        ],
        "'NUMBER": [
          -1,
          198
        ],
        "'TRUE": [
          -1,
          198
        ],
        "'FALSE": [
          -1,
          198
        ],
        "'NULL": [
          -1,
          198
        ],
        "'PARENAFTERBRACE": [
          -1,
          198
        ],
        "'TABLE": [
          -1,
          198
        ],
        "'ASK": [
          -1,
          198
        ],
        "'NEW": [
          -1,
          198
        ]
      },
      {
        "app-or-access_A0_I2_I1*": [
          224
        ],
        "'RPAREN": [
          -1,
          200,
          202
        ],
        "'COMMA": [
          -1,
          202
        ]
      },
      {
        "'RPAREN": [
          225
        ]
      },
      {
        "'RPAREN": [
          -1,
          204
        ]
      },
      {
        "$": [
          -1,
          206
        ],
        "'NAME": [
          -1,
          206
        ],
        "'SEMI": [
          -1,
          206
        ],
        "'PARENNOSPACE": [
          -1,
          206
        ],
        "'STRING": [
          -1,
          206
        ],
        "'RPAREN": [
          -1,
          206
        ],
        "'LBRACE": [
          -1,
          206
        ],
        "'RBRACE": [
          -1,
          206
        ],
        "'SPY": [
          -1,
          206
        ],
        "'PARENSPACE": [
          -1,
          206
        ],
        "'COMMA": [
          -1,
          206
        ],
        "'INT": [
          -1,
          206
        ],
        "'LONG": [
          -1,
          206
        ],
        "'DOUBLE": [
          -1,
          206
        ],
        "'FLOAT": [
          -1,
          206
        ],
        "'BOOLEAN": [
          -1,
          206
        ],
        "'VOID": [
          -1,
          206
        ],
        "'LT": [
          -1,
          206
        ],
        "'GT": [
          -1,
          206
        ],
        "'THINARROW": [
          -1,
          206
        ],
        "'DATA": [
          -1,
          206
        ],
        "'IF": [
          -1,
          206
        ],
        "'FOR": [
          -1,
          206
        ],
        "'RETURN": [
          -1,
          206
        ],
        "'VAR": [
          -1,
          206
        ],
        "'ATCHECK": [
          -1,
          206
        ],
        "'ASSERTEQUALS": [
          -1,
          206
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          206
        ],
        "'ASSERTTRUE": [
          -1,
          206
        ],
        "'ASSERTFALSE": [
          -1,
          206
        ],
        "'ASSERTSATISFIES": [
          -1,
          206
        ],
        "'ASSERTRAISES": [
          -1,
          206
        ],
        "'IS": [
          -1,
          206
        ],
        "'ISNOT": [
          -1,
          206
        ],
        "'SATISFIES": [
          -1,
          206
        ],
        "'RAISES": [
          -1,
          206
        ],
        "'SWITCH": [
          -1,
          206
        ],
        "'CASE": [
          -1,
          206
        ],
        "'DEFAULT": [
          -1,
          206
        ],
        "'YIELD": [
          -1,
          206
        ],
        "'PLUS": [
          -1,
          206
        ],
        "'DASH": [
          -1,
          206
        ],
        "'TIMES": [
          -1,
          206
        ],
        "'SLASH": [
          -1,
          206
        ],
        "'PERCENT": [
          -1,
          206
        ],
        "'EQUALEQUAL": [
          -1,
          206
        ],
        "'NEQ": [
          -1,
          206
        ],
        "'LEQ": [
          -1,
          206
        ],
        "'GEQ": [
          -1,
          206
        ],
        "'AND": [
          -1,
          206
        ],
        "'OR": [
          -1,
          206
        ],
        "'BANG": [
          -1,
          206
        ],
        "'DOT": [
          -1,
          206
        ],
        "'LBRACK": [
          -1,
          206
        ],
        "'RBRACK": [
          -1,
          206
        ],
        "'NUMBER": [
          -1,
          206
        ],
        "'TRUE": [
          -1,
          206
        ],
        "'FALSE": [
          -1,
          206
        ],
        "'NULL": [
          -1,
          206
        ],
        "'PARENAFTERBRACE": [
          -1,
          206
        ],
        "'TABLE": [
          -1,
          206
        ],
        "'ASK": [
          -1,
          206
        ],
        "'NEW": [
          -1,
          206
        ]
      },
      {
        "'RBRACK": [
          226
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          227
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ],
        "construct-expr_A0_I3?": [
          228
        ],
        "construct-expr_A0_I3": [
          229
        ],
        "'RBRACK": [
          -1,
          208
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          230
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ]
      },
      {
        "$": [
          -1,
          210
        ],
        "'NAME": [
          -1,
          210
        ],
        "'SEMI": [
          -1,
          210
        ],
        "'PARENNOSPACE": [
          -1,
          210
        ],
        "'STRING": [
          -1,
          210
        ],
        "'RPAREN": [
          -1,
          210
        ],
        "'LBRACE": [
          -1,
          210
        ],
        "'RBRACE": [
          -1,
          210
        ],
        "'SPY": [
          -1,
          210
        ],
        "'PARENSPACE": [
          -1,
          210
        ],
        "'COMMA": [
          -1,
          210
        ],
        "'INT": [
          -1,
          210
        ],
        "'LONG": [
          -1,
          210
        ],
        "'DOUBLE": [
          -1,
          210
        ],
        "'FLOAT": [
          -1,
          210
        ],
        "'BOOLEAN": [
          -1,
          210
        ],
        "'VOID": [
          -1,
          210
        ],
        "'LT": [
          -1,
          210
        ],
        "'GT": [
          -1,
          210
        ],
        "'THINARROW": [
          -1,
          210
        ],
        "'DATA": [
          -1,
          210
        ],
        "'IF": [
          -1,
          210
        ],
        "'FOR": [
          -1,
          210
        ],
        "'RETURN": [
          -1,
          210
        ],
        "'VAR": [
          -1,
          210
        ],
        "'ATCHECK": [
          -1,
          210
        ],
        "'ASSERTEQUALS": [
          -1,
          210
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          210
        ],
        "'ASSERTTRUE": [
          -1,
          210
        ],
        "'ASSERTFALSE": [
          -1,
          210
        ],
        "'ASSERTSATISFIES": [
          -1,
          210
        ],
        "'ASSERTRAISES": [
          -1,
          210
        ],
        "'IS": [
          -1,
          210
        ],
        "'ISNOT": [
          -1,
          210
        ],
        "'SATISFIES": [
          -1,
          210
        ],
        "'RAISES": [
          -1,
          210
        ],
        "'SWITCH": [
          -1,
          210
        ],
        "'CASE": [
          -1,
          210
        ],
        "'DEFAULT": [
          -1,
          210
        ],
        "'YIELD": [
          -1,
          210
        ],
        "'PLUS": [
          -1,
          210
        ],
        "'DASH": [
          -1,
          210
        ],
        "'TIMES": [
          -1,
          210
        ],
        "'SLASH": [
          -1,
          210
        ],
        "'PERCENT": [
          -1,
          210
        ],
        "'EQUALEQUAL": [
          -1,
          210
        ],
        "'NEQ": [
          -1,
          210
        ],
        "'LEQ": [
          -1,
          210
        ],
        "'GEQ": [
          -1,
          210
        ],
        "'AND": [
          -1,
          210
        ],
        "'OR": [
          -1,
          210
        ],
        "'BANG": [
          -1,
          210
        ],
        "'DOT": [
          -1,
          210
        ],
        "'LBRACK": [
          -1,
          210
        ],
        "'RBRACK": [
          -1,
          210
        ],
        "'NUMBER": [
          -1,
          210
        ],
        "'TRUE": [
          -1,
          210
        ],
        "'FALSE": [
          -1,
          210
        ],
        "'NULL": [
          -1,
          210
        ],
        "'PARENAFTERBRACE": [
          -1,
          210
        ],
        "'TABLE": [
          -1,
          210
        ],
        "'ASK": [
          -1,
          210
        ],
        "'NEW": [
          -1,
          210
        ]
      },
      {
        "'NAME": [
          231
        ]
      },
      {
        "table-expr_I3*": [
          232
        ],
        "'SEMI": [
          -1,
          212
        ],
        "'COMMA": [
          -1,
          212
        ]
      },
      {
        "'THINARROW": [
          233
        ]
      },
      {
        "'SEMI": [
          234
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          235
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ],
        "new-expr_I3?": [
          236
        ],
        "new-expr_I3": [
          237
        ],
        "'RPAREN": [
          -1,
          214
        ]
      },
      {
        "'SEMI": [
          238
        ]
      },
      {
        "'RPAREN": [
          239
        ]
      },
      {
        "'SEMI": [
          240
        ]
      },
      {
        "'RPAREN": [
          241
        ]
      },
      {
        "'COMMA": [
          242
        ],
        "'GT": [
          243
        ],
        "type-ann_A6_I1_I2": [
          244
        ]
      },
      {
        "$": [
          -1,
          216
        ],
        "'NAME": [
          -1,
          216
        ],
        "'PARENNOSPACE": [
          -1,
          216
        ],
        "'STRING": [
          -1,
          216
        ],
        "'LBRACE": [
          -1,
          216
        ],
        "'RBRACE": [
          -1,
          216
        ],
        "'SPY": [
          -1,
          216
        ],
        "'PARENSPACE": [
          -1,
          216
        ],
        "'INT": [
          -1,
          216
        ],
        "'LONG": [
          -1,
          216
        ],
        "'DOUBLE": [
          -1,
          216
        ],
        "'FLOAT": [
          -1,
          216
        ],
        "'BOOLEAN": [
          -1,
          216
        ],
        "'VOID": [
          -1,
          216
        ],
        "'DATA": [
          -1,
          216
        ],
        "'IF": [
          -1,
          216
        ],
        "'FOR": [
          -1,
          216
        ],
        "'RETURN": [
          -1,
          216
        ],
        "'VAR": [
          -1,
          216
        ],
        "'ATCHECK": [
          -1,
          216
        ],
        "'ASSERTEQUALS": [
          -1,
          216
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          216
        ],
        "'ASSERTTRUE": [
          -1,
          216
        ],
        "'ASSERTFALSE": [
          -1,
          216
        ],
        "'ASSERTSATISFIES": [
          -1,
          216
        ],
        "'ASSERTRAISES": [
          -1,
          216
        ],
        "'SWITCH": [
          -1,
          216
        ],
        "'YIELD": [
          -1,
          216
        ],
        "'DASH": [
          -1,
          216
        ],
        "'BANG": [
          -1,
          216
        ],
        "'LBRACK": [
          -1,
          216
        ],
        "'NUMBER": [
          -1,
          216
        ],
        "'TRUE": [
          -1,
          216
        ],
        "'FALSE": [
          -1,
          216
        ],
        "'NULL": [
          -1,
          216
        ],
        "'PARENAFTERBRACE": [
          -1,
          216
        ],
        "'TABLE": [
          -1,
          216
        ],
        "'ASK": [
          -1,
          216
        ],
        "'NEW": [
          -1,
          216
        ]
      },
      {
        "$": [
          -1,
          218
        ],
        "'NAME": [
          -1,
          218
        ],
        "'PARENNOSPACE": [
          -1,
          218
        ],
        "'STRING": [
          -1,
          218
        ],
        "'LBRACE": [
          -1,
          218
        ],
        "'RBRACE": [
          -1,
          218
        ],
        "'SPY": [
          -1,
          218
        ],
        "'PARENSPACE": [
          -1,
          218
        ],
        "'INT": [
          -1,
          218
        ],
        "'LONG": [
          -1,
          218
        ],
        "'DOUBLE": [
          -1,
          218
        ],
        "'FLOAT": [
          -1,
          218
        ],
        "'BOOLEAN": [
          -1,
          218
        ],
        "'VOID": [
          -1,
          218
        ],
        "'DATA": [
          -1,
          218
        ],
        "'IF": [
          -1,
          218
        ],
        "'FOR": [
          -1,
          218
        ],
        "'RETURN": [
          -1,
          218
        ],
        "'VAR": [
          -1,
          218
        ],
        "'ATCHECK": [
          -1,
          218
        ],
        "'ASSERTEQUALS": [
          -1,
          218
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          218
        ],
        "'ASSERTTRUE": [
          -1,
          218
        ],
        "'ASSERTFALSE": [
          -1,
          218
        ],
        "'ASSERTSATISFIES": [
          -1,
          218
        ],
        "'ASSERTRAISES": [
          -1,
          218
        ],
        "'SWITCH": [
          -1,
          218
        ],
        "'YIELD": [
          -1,
          218
        ],
        "'DASH": [
          -1,
          218
        ],
        "'BANG": [
          -1,
          218
        ],
        "'LBRACK": [
          -1,
          218
        ],
        "'NUMBER": [
          -1,
          218
        ],
        "'TRUE": [
          -1,
          218
        ],
        "'FALSE": [
          -1,
          218
        ],
        "'NULL": [
          -1,
          218
        ],
        "'PARENAFTERBRACE": [
          -1,
          218
        ],
        "'TABLE": [
          -1,
          218
        ],
        "'ASK": [
          -1,
          218
        ],
        "'NEW": [
          -1,
          218
        ]
      },
      {
        "$": [
          -1,
          220
        ],
        "'NAME": [
          -1,
          220
        ],
        "'PARENNOSPACE": [
          -1,
          220
        ],
        "'STRING": [
          -1,
          220
        ],
        "'LBRACE": [
          -1,
          220
        ],
        "'RBRACE": [
          -1,
          220
        ],
        "'SPY": [
          -1,
          220
        ],
        "'PARENSPACE": [
          -1,
          220
        ],
        "'INT": [
          -1,
          220
        ],
        "'LONG": [
          -1,
          220
        ],
        "'DOUBLE": [
          -1,
          220
        ],
        "'FLOAT": [
          -1,
          220
        ],
        "'BOOLEAN": [
          -1,
          220
        ],
        "'VOID": [
          -1,
          220
        ],
        "'DATA": [
          -1,
          220
        ],
        "'IF": [
          -1,
          220
        ],
        "'FOR": [
          -1,
          220
        ],
        "'RETURN": [
          -1,
          220
        ],
        "'VAR": [
          -1,
          220
        ],
        "'ATCHECK": [
          -1,
          220
        ],
        "'ASSERTEQUALS": [
          -1,
          220
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          220
        ],
        "'ASSERTTRUE": [
          -1,
          220
        ],
        "'ASSERTFALSE": [
          -1,
          220
        ],
        "'ASSERTSATISFIES": [
          -1,
          220
        ],
        "'ASSERTRAISES": [
          -1,
          220
        ],
        "'SWITCH": [
          -1,
          220
        ],
        "'YIELD": [
          -1,
          220
        ],
        "'DASH": [
          -1,
          220
        ],
        "'BANG": [
          -1,
          220
        ],
        "'LBRACK": [
          -1,
          220
        ],
        "'NUMBER": [
          -1,
          220
        ],
        "'TRUE": [
          -1,
          220
        ],
        "'FALSE": [
          -1,
          220
        ],
        "'NULL": [
          -1,
          220
        ],
        "'PARENAFTERBRACE": [
          -1,
          220
        ],
        "'TABLE": [
          -1,
          220
        ],
        "'ASK": [
          -1,
          220
        ],
        "'NEW": [
          -1,
          220
        ]
      },
      {
        "'NAME": [
          65
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          67
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "lambda-param": [
          245
        ]
      },
      {
        "'RPAREN": [
          -1,
          222
        ],
        "'COMMA": [
          -1,
          222
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          246
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RBRACE": [
          -1,
          224
        ],
        "'COMMA": [
          -1,
          224
        ]
      },
      {
        "$": [
          -1,
          226
        ],
        "'NAME": [
          -1,
          226
        ],
        "'SEMI": [
          -1,
          226
        ],
        "'PARENNOSPACE": [
          -1,
          226
        ],
        "'STRING": [
          -1,
          226
        ],
        "'RPAREN": [
          -1,
          226
        ],
        "'LBRACE": [
          -1,
          226
        ],
        "'RBRACE": [
          -1,
          226
        ],
        "'SPY": [
          -1,
          226
        ],
        "'PARENSPACE": [
          -1,
          226
        ],
        "'COMMA": [
          -1,
          226
        ],
        "'INT": [
          -1,
          226
        ],
        "'LONG": [
          -1,
          226
        ],
        "'DOUBLE": [
          -1,
          226
        ],
        "'FLOAT": [
          -1,
          226
        ],
        "'BOOLEAN": [
          -1,
          226
        ],
        "'VOID": [
          -1,
          226
        ],
        "'LT": [
          -1,
          226
        ],
        "'GT": [
          -1,
          226
        ],
        "'THINARROW": [
          -1,
          226
        ],
        "'DATA": [
          -1,
          226
        ],
        "'IF": [
          -1,
          226
        ],
        "'FOR": [
          -1,
          226
        ],
        "'RETURN": [
          -1,
          226
        ],
        "'VAR": [
          -1,
          226
        ],
        "'ATCHECK": [
          -1,
          226
        ],
        "'ASSERTEQUALS": [
          -1,
          226
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          226
        ],
        "'ASSERTTRUE": [
          -1,
          226
        ],
        "'ASSERTFALSE": [
          -1,
          226
        ],
        "'ASSERTSATISFIES": [
          -1,
          226
        ],
        "'ASSERTRAISES": [
          -1,
          226
        ],
        "'IS": [
          -1,
          226
        ],
        "'ISNOT": [
          -1,
          226
        ],
        "'SATISFIES": [
          -1,
          226
        ],
        "'RAISES": [
          -1,
          226
        ],
        "'SWITCH": [
          -1,
          226
        ],
        "'CASE": [
          -1,
          226
        ],
        "'DEFAULT": [
          -1,
          226
        ],
        "'YIELD": [
          -1,
          226
        ],
        "'PLUS": [
          -1,
          226
        ],
        "'DASH": [
          -1,
          226
        ],
        "'TIMES": [
          -1,
          226
        ],
        "'SLASH": [
          -1,
          226
        ],
        "'PERCENT": [
          -1,
          226
        ],
        "'EQUALEQUAL": [
          -1,
          226
        ],
        "'NEQ": [
          -1,
          226
        ],
        "'LEQ": [
          -1,
          226
        ],
        "'GEQ": [
          -1,
          226
        ],
        "'AND": [
          -1,
          226
        ],
        "'OR": [
          -1,
          226
        ],
        "'BANG": [
          -1,
          226
        ],
        "'DOT": [
          -1,
          226
        ],
        "'LBRACK": [
          -1,
          226
        ],
        "'RBRACK": [
          -1,
          226
        ],
        "'NUMBER": [
          -1,
          226
        ],
        "'TRUE": [
          -1,
          226
        ],
        "'FALSE": [
          -1,
          226
        ],
        "'NULL": [
          -1,
          226
        ],
        "'PARENAFTERBRACE": [
          -1,
          226
        ],
        "'TABLE": [
          -1,
          226
        ],
        "'ASK": [
          -1,
          226
        ],
        "'NEW": [
          -1,
          226
        ]
      },
      {
        "'NAME": [
          71
        ],
        "record-field": [
          247
        ]
      },
      {
        "'RBRACE": [
          -1,
          228
        ],
        "'COMMA": [
          -1,
          228
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          248
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ]
      },
      {
        "'COMMA": [
          -1,
          230
        ],
        "'THINARROW": [
          -1,
          230
        ]
      },
      {
        "'RPAREN": [
          249
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          250
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          65
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          67
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "lambda-param": [
          251
        ]
      },
      {
        "'RPAREN": [
          -1,
          232
        ],
        "'COMMA": [
          -1,
          232
        ]
      },
      {
        "'NAME": [
          252
        ]
      },
      {
        "'RPAREN": [
          253
        ]
      },
      {
        "'RPAREN": [
          -1,
          234
        ]
      },
      {
        "fun-decl_I3_I1*": [
          254
        ],
        "'RPAREN": [
          -1,
          236,
          238
        ],
        "'COMMA": [
          -1,
          238
        ]
      },
      {
        "'SEMI": [
          255
        ],
        "let-stmt_I4?": [
          256
        ],
        "let-stmt_I4": [
          257
        ],
        "$": [
          -1,
          240,
          242
        ],
        "'NAME": [
          -1,
          240,
          242
        ],
        "'PARENNOSPACE": [
          -1,
          240,
          242
        ],
        "'STRING": [
          -1,
          240,
          242
        ],
        "'LBRACE": [
          -1,
          240,
          242
        ],
        "'RBRACE": [
          -1,
          240,
          242
        ],
        "'SPY": [
          -1,
          240,
          242
        ],
        "'PARENSPACE": [
          -1,
          240,
          242
        ],
        "'INT": [
          -1,
          240,
          242
        ],
        "'LONG": [
          -1,
          240,
          242
        ],
        "'DOUBLE": [
          -1,
          240,
          242
        ],
        "'FLOAT": [
          -1,
          240,
          242
        ],
        "'BOOLEAN": [
          -1,
          240,
          242
        ],
        "'VOID": [
          -1,
          240,
          242
        ],
        "'DATA": [
          -1,
          240,
          242
        ],
        "'IF": [
          -1,
          240,
          242
        ],
        "'FOR": [
          -1,
          240,
          242
        ],
        "'RETURN": [
          -1,
          240,
          242
        ],
        "'VAR": [
          -1,
          240,
          242
        ],
        "'ATCHECK": [
          -1,
          240,
          242
        ],
        "'ASSERTEQUALS": [
          -1,
          240,
          242
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          240,
          242
        ],
        "'ASSERTTRUE": [
          -1,
          240,
          242
        ],
        "'ASSERTFALSE": [
          -1,
          240,
          242
        ],
        "'ASSERTSATISFIES": [
          -1,
          240,
          242
        ],
        "'ASSERTRAISES": [
          -1,
          240,
          242
        ],
        "'SWITCH": [
          -1,
          240,
          242
        ],
        "'YIELD": [
          -1,
          240,
          242
        ],
        "'DASH": [
          -1,
          240,
          242
        ],
        "'BANG": [
          -1,
          240,
          242
        ],
        "'LBRACK": [
          -1,
          240,
          242
        ],
        "'NUMBER": [
          -1,
          240,
          242
        ],
        "'TRUE": [
          -1,
          240,
          242
        ],
        "'FALSE": [
          -1,
          240,
          242
        ],
        "'NULL": [
          -1,
          240,
          242
        ],
        "'PARENAFTERBRACE": [
          -1,
          240,
          242
        ],
        "'TABLE": [
          -1,
          240,
          242
        ],
        "'ASK": [
          -1,
          240,
          242
        ],
        "'NEW": [
          -1,
          240,
          242
        ]
      },
      {
        "'PARENNOSPACE": [
          258
        ],
        "'SEMI": [
          -1,
          244
        ],
        "'RBRACE": [
          -1,
          244
        ]
      },
      {
        "data-decl_I4*": [
          259
        ],
        "'SEMI": [
          -1,
          246
        ],
        "'RBRACE": [
          -1,
          246
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          260
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          -1,
          248
        ],
        "'PARENNOSPACE": [
          -1,
          248
        ],
        "'STRING": [
          -1,
          248
        ],
        "'LBRACE": [
          -1,
          248
        ],
        "'RBRACE": [
          -1,
          248
        ],
        "'SPY": [
          -1,
          248
        ],
        "'PARENSPACE": [
          -1,
          248
        ],
        "'INT": [
          -1,
          248
        ],
        "'LONG": [
          -1,
          248
        ],
        "'DOUBLE": [
          -1,
          248
        ],
        "'FLOAT": [
          -1,
          248
        ],
        "'BOOLEAN": [
          -1,
          248
        ],
        "'VOID": [
          -1,
          248
        ],
        "'DATA": [
          -1,
          248
        ],
        "'IF": [
          -1,
          248
        ],
        "'FOR": [
          -1,
          248
        ],
        "'RETURN": [
          -1,
          248
        ],
        "'VAR": [
          -1,
          248
        ],
        "'ATCHECK": [
          -1,
          248
        ],
        "'ASSERTEQUALS": [
          -1,
          248
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          248
        ],
        "'ASSERTTRUE": [
          -1,
          248
        ],
        "'ASSERTFALSE": [
          -1,
          248
        ],
        "'ASSERTSATISFIES": [
          -1,
          248
        ],
        "'ASSERTRAISES": [
          -1,
          248
        ],
        "'SWITCH": [
          -1,
          248
        ],
        "'YIELD": [
          -1,
          248
        ],
        "'DASH": [
          -1,
          248
        ],
        "'BANG": [
          -1,
          248
        ],
        "'LBRACK": [
          -1,
          248
        ],
        "'NUMBER": [
          -1,
          248
        ],
        "'TRUE": [
          -1,
          248
        ],
        "'FALSE": [
          -1,
          248
        ],
        "'NULL": [
          -1,
          248
        ],
        "'PARENAFTERBRACE": [
          -1,
          248
        ],
        "'TABLE": [
          -1,
          248
        ],
        "'ASK": [
          -1,
          248
        ],
        "'NEW": [
          -1,
          248
        ]
      },
      {
        "'NAME": [
          -1,
          250
        ],
        "'PARENNOSPACE": [
          -1,
          250
        ],
        "'STRING": [
          -1,
          250
        ],
        "'LBRACE": [
          -1,
          250
        ],
        "'RBRACE": [
          -1,
          250
        ],
        "'SPY": [
          -1,
          250
        ],
        "'PARENSPACE": [
          -1,
          250
        ],
        "'INT": [
          -1,
          250
        ],
        "'LONG": [
          -1,
          250
        ],
        "'DOUBLE": [
          -1,
          250
        ],
        "'FLOAT": [
          -1,
          250
        ],
        "'BOOLEAN": [
          -1,
          250
        ],
        "'VOID": [
          -1,
          250
        ],
        "'DATA": [
          -1,
          250
        ],
        "'IF": [
          -1,
          250
        ],
        "'FOR": [
          -1,
          250
        ],
        "'RETURN": [
          -1,
          250
        ],
        "'VAR": [
          -1,
          250
        ],
        "'ATCHECK": [
          -1,
          250
        ],
        "'ASSERTEQUALS": [
          -1,
          250
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          250
        ],
        "'ASSERTTRUE": [
          -1,
          250
        ],
        "'ASSERTFALSE": [
          -1,
          250
        ],
        "'ASSERTSATISFIES": [
          -1,
          250
        ],
        "'ASSERTRAISES": [
          -1,
          250
        ],
        "'SWITCH": [
          -1,
          250
        ],
        "'YIELD": [
          -1,
          250
        ],
        "'DASH": [
          -1,
          250
        ],
        "'BANG": [
          -1,
          250
        ],
        "'LBRACK": [
          -1,
          250
        ],
        "'NUMBER": [
          -1,
          250
        ],
        "'TRUE": [
          -1,
          250
        ],
        "'FALSE": [
          -1,
          250
        ],
        "'NULL": [
          -1,
          250
        ],
        "'PARENAFTERBRACE": [
          -1,
          250
        ],
        "'TABLE": [
          -1,
          250
        ],
        "'ASK": [
          -1,
          250
        ],
        "'NEW": [
          -1,
          250
        ]
      },
      {
        "'NAME": [
          -1,
          252
        ],
        "'PARENNOSPACE": [
          -1,
          252
        ],
        "'STRING": [
          -1,
          252
        ],
        "'LBRACE": [
          -1,
          252
        ],
        "'RBRACE": [
          -1,
          252
        ],
        "'SPY": [
          -1,
          252
        ],
        "'PARENSPACE": [
          -1,
          252
        ],
        "'INT": [
          -1,
          252
        ],
        "'LONG": [
          -1,
          252
        ],
        "'DOUBLE": [
          -1,
          252
        ],
        "'FLOAT": [
          -1,
          252
        ],
        "'BOOLEAN": [
          -1,
          252
        ],
        "'VOID": [
          -1,
          252
        ],
        "'DATA": [
          -1,
          252
        ],
        "'IF": [
          -1,
          252
        ],
        "'FOR": [
          -1,
          252
        ],
        "'RETURN": [
          -1,
          252
        ],
        "'VAR": [
          -1,
          252
        ],
        "'ATCHECK": [
          -1,
          252
        ],
        "'ASSERTEQUALS": [
          -1,
          252
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          252
        ],
        "'ASSERTTRUE": [
          -1,
          252
        ],
        "'ASSERTFALSE": [
          -1,
          252
        ],
        "'ASSERTSATISFIES": [
          -1,
          252
        ],
        "'ASSERTRAISES": [
          -1,
          252
        ],
        "'SWITCH": [
          -1,
          252
        ],
        "'YIELD": [
          -1,
          252
        ],
        "'DASH": [
          -1,
          252
        ],
        "'BANG": [
          -1,
          252
        ],
        "'LBRACK": [
          -1,
          252
        ],
        "'NUMBER": [
          -1,
          252
        ],
        "'TRUE": [
          -1,
          252
        ],
        "'FALSE": [
          -1,
          252
        ],
        "'NULL": [
          -1,
          252
        ],
        "'PARENAFTERBRACE": [
          -1,
          252
        ],
        "'TABLE": [
          -1,
          252
        ],
        "'ASK": [
          -1,
          252
        ],
        "'NEW": [
          -1,
          252
        ]
      },
      {
        "'NAME": [
          -1,
          254
        ],
        "'PARENNOSPACE": [
          -1,
          254
        ],
        "'STRING": [
          -1,
          254
        ],
        "'LBRACE": [
          -1,
          254
        ],
        "'RBRACE": [
          -1,
          254
        ],
        "'SPY": [
          -1,
          254
        ],
        "'PARENSPACE": [
          -1,
          254
        ],
        "'INT": [
          -1,
          254
        ],
        "'LONG": [
          -1,
          254
        ],
        "'DOUBLE": [
          -1,
          254
        ],
        "'FLOAT": [
          -1,
          254
        ],
        "'BOOLEAN": [
          -1,
          254
        ],
        "'VOID": [
          -1,
          254
        ],
        "'DATA": [
          -1,
          254
        ],
        "'IF": [
          -1,
          254
        ],
        "'FOR": [
          -1,
          254
        ],
        "'RETURN": [
          -1,
          254
        ],
        "'VAR": [
          -1,
          254
        ],
        "'ATCHECK": [
          -1,
          254
        ],
        "'ASSERTEQUALS": [
          -1,
          254
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          254
        ],
        "'ASSERTTRUE": [
          -1,
          254
        ],
        "'ASSERTFALSE": [
          -1,
          254
        ],
        "'ASSERTSATISFIES": [
          -1,
          254
        ],
        "'ASSERTRAISES": [
          -1,
          254
        ],
        "'SWITCH": [
          -1,
          254
        ],
        "'YIELD": [
          -1,
          254
        ],
        "'DASH": [
          -1,
          254
        ],
        "'BANG": [
          -1,
          254
        ],
        "'LBRACK": [
          -1,
          254
        ],
        "'NUMBER": [
          -1,
          254
        ],
        "'TRUE": [
          -1,
          254
        ],
        "'FALSE": [
          -1,
          254
        ],
        "'NULL": [
          -1,
          254
        ],
        "'PARENAFTERBRACE": [
          -1,
          254
        ],
        "'TABLE": [
          -1,
          254
        ],
        "'ASK": [
          -1,
          254
        ],
        "'NEW": [
          -1,
          254
        ]
      },
      {
        "'NAME": [
          -1,
          256
        ],
        "'PARENNOSPACE": [
          -1,
          256
        ],
        "'STRING": [
          -1,
          256
        ],
        "'LBRACE": [
          -1,
          256
        ],
        "'RBRACE": [
          -1,
          256
        ],
        "'SPY": [
          -1,
          256
        ],
        "'PARENSPACE": [
          -1,
          256
        ],
        "'INT": [
          -1,
          256
        ],
        "'LONG": [
          -1,
          256
        ],
        "'DOUBLE": [
          -1,
          256
        ],
        "'FLOAT": [
          -1,
          256
        ],
        "'BOOLEAN": [
          -1,
          256
        ],
        "'VOID": [
          -1,
          256
        ],
        "'DATA": [
          -1,
          256
        ],
        "'IF": [
          -1,
          256
        ],
        "'FOR": [
          -1,
          256
        ],
        "'RETURN": [
          -1,
          256
        ],
        "'VAR": [
          -1,
          256
        ],
        "'ATCHECK": [
          -1,
          256
        ],
        "'ASSERTEQUALS": [
          -1,
          256
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          256
        ],
        "'ASSERTTRUE": [
          -1,
          256
        ],
        "'ASSERTFALSE": [
          -1,
          256
        ],
        "'ASSERTSATISFIES": [
          -1,
          256
        ],
        "'ASSERTRAISES": [
          -1,
          256
        ],
        "'SWITCH": [
          -1,
          256
        ],
        "'YIELD": [
          -1,
          256
        ],
        "'DASH": [
          -1,
          256
        ],
        "'BANG": [
          -1,
          256
        ],
        "'LBRACK": [
          -1,
          256
        ],
        "'NUMBER": [
          -1,
          256
        ],
        "'TRUE": [
          -1,
          256
        ],
        "'FALSE": [
          -1,
          256
        ],
        "'NULL": [
          -1,
          256
        ],
        "'PARENAFTERBRACE": [
          -1,
          256
        ],
        "'TABLE": [
          -1,
          256
        ],
        "'ASK": [
          -1,
          256
        ],
        "'NEW": [
          -1,
          256
        ]
      },
      {
        "'NAME": [
          -1,
          258
        ],
        "'PARENNOSPACE": [
          -1,
          258
        ],
        "'STRING": [
          -1,
          258
        ],
        "'LBRACE": [
          -1,
          258
        ],
        "'RBRACE": [
          -1,
          258
        ],
        "'SPY": [
          -1,
          258
        ],
        "'PARENSPACE": [
          -1,
          258
        ],
        "'INT": [
          -1,
          258
        ],
        "'LONG": [
          -1,
          258
        ],
        "'DOUBLE": [
          -1,
          258
        ],
        "'FLOAT": [
          -1,
          258
        ],
        "'BOOLEAN": [
          -1,
          258
        ],
        "'VOID": [
          -1,
          258
        ],
        "'DATA": [
          -1,
          258
        ],
        "'IF": [
          -1,
          258
        ],
        "'FOR": [
          -1,
          258
        ],
        "'RETURN": [
          -1,
          258
        ],
        "'VAR": [
          -1,
          258
        ],
        "'ATCHECK": [
          -1,
          258
        ],
        "'ASSERTEQUALS": [
          -1,
          258
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          258
        ],
        "'ASSERTTRUE": [
          -1,
          258
        ],
        "'ASSERTFALSE": [
          -1,
          258
        ],
        "'ASSERTSATISFIES": [
          -1,
          258
        ],
        "'ASSERTRAISES": [
          -1,
          258
        ],
        "'SWITCH": [
          -1,
          258
        ],
        "'YIELD": [
          -1,
          258
        ],
        "'DASH": [
          -1,
          258
        ],
        "'BANG": [
          -1,
          258
        ],
        "'LBRACK": [
          -1,
          258
        ],
        "'NUMBER": [
          -1,
          258
        ],
        "'TRUE": [
          -1,
          258
        ],
        "'FALSE": [
          -1,
          258
        ],
        "'NULL": [
          -1,
          258
        ],
        "'PARENAFTERBRACE": [
          -1,
          258
        ],
        "'TABLE": [
          -1,
          258
        ],
        "'ASK": [
          -1,
          258
        ],
        "'NEW": [
          -1,
          258
        ]
      },
      {
        "'NAME": [
          -1,
          260
        ],
        "'PARENNOSPACE": [
          -1,
          260
        ],
        "'STRING": [
          -1,
          260
        ],
        "'LBRACE": [
          -1,
          260
        ],
        "'RBRACE": [
          -1,
          260
        ],
        "'SPY": [
          -1,
          260
        ],
        "'PARENSPACE": [
          -1,
          260
        ],
        "'INT": [
          -1,
          260
        ],
        "'LONG": [
          -1,
          260
        ],
        "'DOUBLE": [
          -1,
          260
        ],
        "'FLOAT": [
          -1,
          260
        ],
        "'BOOLEAN": [
          -1,
          260
        ],
        "'VOID": [
          -1,
          260
        ],
        "'DATA": [
          -1,
          260
        ],
        "'IF": [
          -1,
          260
        ],
        "'FOR": [
          -1,
          260
        ],
        "'RETURN": [
          -1,
          260
        ],
        "'VAR": [
          -1,
          260
        ],
        "'ATCHECK": [
          -1,
          260
        ],
        "'ASSERTEQUALS": [
          -1,
          260
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          260
        ],
        "'ASSERTTRUE": [
          -1,
          260
        ],
        "'ASSERTFALSE": [
          -1,
          260
        ],
        "'ASSERTSATISFIES": [
          -1,
          260
        ],
        "'ASSERTRAISES": [
          -1,
          260
        ],
        "'SWITCH": [
          -1,
          260
        ],
        "'YIELD": [
          -1,
          260
        ],
        "'DASH": [
          -1,
          260
        ],
        "'BANG": [
          -1,
          260
        ],
        "'LBRACK": [
          -1,
          260
        ],
        "'NUMBER": [
          -1,
          260
        ],
        "'TRUE": [
          -1,
          260
        ],
        "'FALSE": [
          -1,
          260
        ],
        "'NULL": [
          -1,
          260
        ],
        "'PARENAFTERBRACE": [
          -1,
          260
        ],
        "'TABLE": [
          -1,
          260
        ],
        "'ASK": [
          -1,
          260
        ],
        "'NEW": [
          -1,
          260
        ]
      },
      {
        "$": [
          -1,
          262
        ],
        "'NAME": [
          -1,
          262
        ],
        "'PARENNOSPACE": [
          -1,
          262
        ],
        "'STRING": [
          -1,
          262
        ],
        "'LBRACE": [
          -1,
          262
        ],
        "'RBRACE": [
          -1,
          262
        ],
        "'SPY": [
          -1,
          262
        ],
        "'PARENSPACE": [
          -1,
          262
        ],
        "'INT": [
          -1,
          262
        ],
        "'LONG": [
          -1,
          262
        ],
        "'DOUBLE": [
          -1,
          262
        ],
        "'FLOAT": [
          -1,
          262
        ],
        "'BOOLEAN": [
          -1,
          262
        ],
        "'VOID": [
          -1,
          262
        ],
        "'DATA": [
          -1,
          262
        ],
        "'IF": [
          -1,
          262
        ],
        "'FOR": [
          -1,
          262
        ],
        "'RETURN": [
          -1,
          262
        ],
        "'VAR": [
          -1,
          262
        ],
        "'ATCHECK": [
          -1,
          262
        ],
        "'ASSERTEQUALS": [
          -1,
          262
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          262
        ],
        "'ASSERTTRUE": [
          -1,
          262
        ],
        "'ASSERTFALSE": [
          -1,
          262
        ],
        "'ASSERTSATISFIES": [
          -1,
          262
        ],
        "'ASSERTRAISES": [
          -1,
          262
        ],
        "'SWITCH": [
          -1,
          262
        ],
        "'YIELD": [
          -1,
          262
        ],
        "'DASH": [
          -1,
          262
        ],
        "'BANG": [
          -1,
          262
        ],
        "'LBRACK": [
          -1,
          262
        ],
        "'NUMBER": [
          -1,
          262
        ],
        "'TRUE": [
          -1,
          262
        ],
        "'FALSE": [
          -1,
          262
        ],
        "'NULL": [
          -1,
          262
        ],
        "'PARENAFTERBRACE": [
          -1,
          262
        ],
        "'TABLE": [
          -1,
          262
        ],
        "'ASK": [
          -1,
          262
        ],
        "'NEW": [
          -1,
          262
        ]
      },
      {
        "'NAME": [
          -1,
          264
        ],
        "'PARENNOSPACE": [
          -1,
          264
        ],
        "'STRING": [
          -1,
          264
        ],
        "'LBRACE": [
          -1,
          264
        ],
        "'RBRACE": [
          -1,
          264
        ],
        "'SPY": [
          -1,
          264
        ],
        "'PARENSPACE": [
          -1,
          264
        ],
        "'INT": [
          -1,
          264
        ],
        "'LONG": [
          -1,
          264
        ],
        "'DOUBLE": [
          -1,
          264
        ],
        "'FLOAT": [
          -1,
          264
        ],
        "'BOOLEAN": [
          -1,
          264
        ],
        "'VOID": [
          -1,
          264
        ],
        "'DATA": [
          -1,
          264
        ],
        "'IF": [
          -1,
          264
        ],
        "'FOR": [
          -1,
          264
        ],
        "'RETURN": [
          -1,
          264
        ],
        "'VAR": [
          -1,
          264
        ],
        "'ATCHECK": [
          -1,
          264
        ],
        "'ASSERTEQUALS": [
          -1,
          264
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          264
        ],
        "'ASSERTTRUE": [
          -1,
          264
        ],
        "'ASSERTFALSE": [
          -1,
          264
        ],
        "'ASSERTSATISFIES": [
          -1,
          264
        ],
        "'ASSERTRAISES": [
          -1,
          264
        ],
        "'SWITCH": [
          -1,
          264
        ],
        "'YIELD": [
          -1,
          264
        ],
        "'DASH": [
          -1,
          264
        ],
        "'BANG": [
          -1,
          264
        ],
        "'LBRACK": [
          -1,
          264
        ],
        "'NUMBER": [
          -1,
          264
        ],
        "'TRUE": [
          -1,
          264
        ],
        "'FALSE": [
          -1,
          264
        ],
        "'NULL": [
          -1,
          264
        ],
        "'PARENAFTERBRACE": [
          -1,
          264
        ],
        "'TABLE": [
          -1,
          264
        ],
        "'ASK": [
          -1,
          264
        ],
        "'NEW": [
          -1,
          264
        ]
      },
      {
        "'NAME": [
          -1,
          266
        ],
        "'PARENNOSPACE": [
          -1,
          266
        ],
        "'STRING": [
          -1,
          266
        ],
        "'LBRACE": [
          -1,
          266
        ],
        "'RBRACE": [
          -1,
          266
        ],
        "'SPY": [
          -1,
          266
        ],
        "'PARENSPACE": [
          -1,
          266
        ],
        "'INT": [
          -1,
          266
        ],
        "'LONG": [
          -1,
          266
        ],
        "'DOUBLE": [
          -1,
          266
        ],
        "'FLOAT": [
          -1,
          266
        ],
        "'BOOLEAN": [
          -1,
          266
        ],
        "'VOID": [
          -1,
          266
        ],
        "'DATA": [
          -1,
          266
        ],
        "'IF": [
          -1,
          266
        ],
        "'FOR": [
          -1,
          266
        ],
        "'RETURN": [
          -1,
          266
        ],
        "'VAR": [
          -1,
          266
        ],
        "'ATCHECK": [
          -1,
          266
        ],
        "'ASSERTEQUALS": [
          -1,
          266
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          266
        ],
        "'ASSERTTRUE": [
          -1,
          266
        ],
        "'ASSERTFALSE": [
          -1,
          266
        ],
        "'ASSERTSATISFIES": [
          -1,
          266
        ],
        "'ASSERTRAISES": [
          -1,
          266
        ],
        "'SWITCH": [
          -1,
          266
        ],
        "'YIELD": [
          -1,
          266
        ],
        "'DASH": [
          -1,
          266
        ],
        "'BANG": [
          -1,
          266
        ],
        "'LBRACK": [
          -1,
          266
        ],
        "'NUMBER": [
          -1,
          266
        ],
        "'TRUE": [
          -1,
          266
        ],
        "'FALSE": [
          -1,
          266
        ],
        "'NULL": [
          -1,
          266
        ],
        "'PARENAFTERBRACE": [
          -1,
          266
        ],
        "'TABLE": [
          -1,
          266
        ],
        "'ASK": [
          -1,
          266
        ],
        "'NEW": [
          -1,
          266
        ]
      },
      {
        "'NAME": [
          -1,
          268
        ],
        "'PARENNOSPACE": [
          -1,
          268
        ],
        "'STRING": [
          -1,
          268
        ],
        "'LBRACE": [
          -1,
          268
        ],
        "'RBRACE": [
          -1,
          268
        ],
        "'SPY": [
          -1,
          268
        ],
        "'PARENSPACE": [
          -1,
          268
        ],
        "'INT": [
          -1,
          268
        ],
        "'LONG": [
          -1,
          268
        ],
        "'DOUBLE": [
          -1,
          268
        ],
        "'FLOAT": [
          -1,
          268
        ],
        "'BOOLEAN": [
          -1,
          268
        ],
        "'VOID": [
          -1,
          268
        ],
        "'DATA": [
          -1,
          268
        ],
        "'IF": [
          -1,
          268
        ],
        "'FOR": [
          -1,
          268
        ],
        "'RETURN": [
          -1,
          268
        ],
        "'VAR": [
          -1,
          268
        ],
        "'ATCHECK": [
          -1,
          268
        ],
        "'ASSERTEQUALS": [
          -1,
          268
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          268
        ],
        "'ASSERTTRUE": [
          -1,
          268
        ],
        "'ASSERTFALSE": [
          -1,
          268
        ],
        "'ASSERTSATISFIES": [
          -1,
          268
        ],
        "'ASSERTRAISES": [
          -1,
          268
        ],
        "'SWITCH": [
          -1,
          268
        ],
        "'YIELD": [
          -1,
          268
        ],
        "'DASH": [
          -1,
          268
        ],
        "'BANG": [
          -1,
          268
        ],
        "'LBRACK": [
          -1,
          268
        ],
        "'NUMBER": [
          -1,
          268
        ],
        "'TRUE": [
          -1,
          268
        ],
        "'FALSE": [
          -1,
          268
        ],
        "'NULL": [
          -1,
          268
        ],
        "'PARENAFTERBRACE": [
          -1,
          268
        ],
        "'TABLE": [
          -1,
          268
        ],
        "'ASK": [
          -1,
          268
        ],
        "'NEW": [
          -1,
          268
        ]
      },
      {
        "'NAME": [
          -1,
          270
        ],
        "'PARENNOSPACE": [
          -1,
          270
        ],
        "'STRING": [
          -1,
          270
        ],
        "'LBRACE": [
          -1,
          270
        ],
        "'RBRACE": [
          -1,
          270
        ],
        "'SPY": [
          -1,
          270
        ],
        "'PARENSPACE": [
          -1,
          270
        ],
        "'INT": [
          -1,
          270
        ],
        "'LONG": [
          -1,
          270
        ],
        "'DOUBLE": [
          -1,
          270
        ],
        "'FLOAT": [
          -1,
          270
        ],
        "'BOOLEAN": [
          -1,
          270
        ],
        "'VOID": [
          -1,
          270
        ],
        "'DATA": [
          -1,
          270
        ],
        "'IF": [
          -1,
          270
        ],
        "'FOR": [
          -1,
          270
        ],
        "'RETURN": [
          -1,
          270
        ],
        "'VAR": [
          -1,
          270
        ],
        "'ATCHECK": [
          -1,
          270
        ],
        "'ASSERTEQUALS": [
          -1,
          270
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          270
        ],
        "'ASSERTTRUE": [
          -1,
          270
        ],
        "'ASSERTFALSE": [
          -1,
          270
        ],
        "'ASSERTSATISFIES": [
          -1,
          270
        ],
        "'ASSERTRAISES": [
          -1,
          270
        ],
        "'SWITCH": [
          -1,
          270
        ],
        "'YIELD": [
          -1,
          270
        ],
        "'DASH": [
          -1,
          270
        ],
        "'BANG": [
          -1,
          270
        ],
        "'LBRACK": [
          -1,
          270
        ],
        "'NUMBER": [
          -1,
          270
        ],
        "'TRUE": [
          -1,
          270
        ],
        "'FALSE": [
          -1,
          270
        ],
        "'NULL": [
          -1,
          270
        ],
        "'PARENAFTERBRACE": [
          -1,
          270
        ],
        "'TABLE": [
          -1,
          270
        ],
        "'ASK": [
          -1,
          270
        ],
        "'NEW": [
          -1,
          270
        ]
      },
      {
        "'NAME": [
          -1,
          272
        ],
        "'PARENNOSPACE": [
          -1,
          272
        ],
        "'STRING": [
          -1,
          272
        ],
        "'LBRACE": [
          -1,
          272
        ],
        "'RBRACE": [
          -1,
          272
        ],
        "'SPY": [
          -1,
          272
        ],
        "'PARENSPACE": [
          -1,
          272
        ],
        "'INT": [
          -1,
          272
        ],
        "'LONG": [
          -1,
          272
        ],
        "'DOUBLE": [
          -1,
          272
        ],
        "'FLOAT": [
          -1,
          272
        ],
        "'BOOLEAN": [
          -1,
          272
        ],
        "'VOID": [
          -1,
          272
        ],
        "'DATA": [
          -1,
          272
        ],
        "'IF": [
          -1,
          272
        ],
        "'FOR": [
          -1,
          272
        ],
        "'RETURN": [
          -1,
          272
        ],
        "'VAR": [
          -1,
          272
        ],
        "'ATCHECK": [
          -1,
          272
        ],
        "'ASSERTEQUALS": [
          -1,
          272
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          272
        ],
        "'ASSERTTRUE": [
          -1,
          272
        ],
        "'ASSERTFALSE": [
          -1,
          272
        ],
        "'ASSERTSATISFIES": [
          -1,
          272
        ],
        "'ASSERTRAISES": [
          -1,
          272
        ],
        "'SWITCH": [
          -1,
          272
        ],
        "'YIELD": [
          -1,
          272
        ],
        "'DASH": [
          -1,
          272
        ],
        "'BANG": [
          -1,
          272
        ],
        "'LBRACK": [
          -1,
          272
        ],
        "'NUMBER": [
          -1,
          272
        ],
        "'TRUE": [
          -1,
          272
        ],
        "'FALSE": [
          -1,
          272
        ],
        "'NULL": [
          -1,
          272
        ],
        "'PARENAFTERBRACE": [
          -1,
          272
        ],
        "'TABLE": [
          -1,
          272
        ],
        "'ASK": [
          -1,
          272
        ],
        "'NEW": [
          -1,
          272
        ]
      },
      {
        "'NAME": [
          -1,
          274
        ],
        "'PARENNOSPACE": [
          -1,
          274
        ],
        "'STRING": [
          -1,
          274
        ],
        "'LBRACE": [
          -1,
          274
        ],
        "'RBRACE": [
          -1,
          274
        ],
        "'SPY": [
          -1,
          274
        ],
        "'PARENSPACE": [
          -1,
          274
        ],
        "'INT": [
          -1,
          274
        ],
        "'LONG": [
          -1,
          274
        ],
        "'DOUBLE": [
          -1,
          274
        ],
        "'FLOAT": [
          -1,
          274
        ],
        "'BOOLEAN": [
          -1,
          274
        ],
        "'VOID": [
          -1,
          274
        ],
        "'DATA": [
          -1,
          274
        ],
        "'IF": [
          -1,
          274
        ],
        "'FOR": [
          -1,
          274
        ],
        "'RETURN": [
          -1,
          274
        ],
        "'VAR": [
          -1,
          274
        ],
        "'ATCHECK": [
          -1,
          274
        ],
        "'ASSERTEQUALS": [
          -1,
          274
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          274
        ],
        "'ASSERTTRUE": [
          -1,
          274
        ],
        "'ASSERTFALSE": [
          -1,
          274
        ],
        "'ASSERTSATISFIES": [
          -1,
          274
        ],
        "'ASSERTRAISES": [
          -1,
          274
        ],
        "'SWITCH": [
          -1,
          274
        ],
        "'YIELD": [
          -1,
          274
        ],
        "'DASH": [
          -1,
          274
        ],
        "'BANG": [
          -1,
          274
        ],
        "'LBRACK": [
          -1,
          274
        ],
        "'NUMBER": [
          -1,
          274
        ],
        "'TRUE": [
          -1,
          274
        ],
        "'FALSE": [
          -1,
          274
        ],
        "'NULL": [
          -1,
          274
        ],
        "'PARENAFTERBRACE": [
          -1,
          274
        ],
        "'TABLE": [
          -1,
          274
        ],
        "'ASK": [
          -1,
          274
        ],
        "'NEW": [
          -1,
          274
        ]
      },
      {
        "'PARENSPACE": [
          261
        ]
      },
      {
        "'NAME": [
          -1,
          276
        ],
        "'PARENNOSPACE": [
          -1,
          276
        ],
        "'STRING": [
          -1,
          276
        ],
        "'LBRACE": [
          -1,
          276
        ],
        "'RBRACE": [
          -1,
          276
        ],
        "'SPY": [
          -1,
          276
        ],
        "'PARENSPACE": [
          -1,
          276
        ],
        "'INT": [
          -1,
          276
        ],
        "'LONG": [
          -1,
          276
        ],
        "'DOUBLE": [
          -1,
          276
        ],
        "'FLOAT": [
          -1,
          276
        ],
        "'BOOLEAN": [
          -1,
          276
        ],
        "'VOID": [
          -1,
          276
        ],
        "'DATA": [
          -1,
          276
        ],
        "'IF": [
          -1,
          276
        ],
        "'FOR": [
          -1,
          276
        ],
        "'RETURN": [
          -1,
          276
        ],
        "'VAR": [
          -1,
          276
        ],
        "'ATCHECK": [
          -1,
          276
        ],
        "'ASSERTEQUALS": [
          -1,
          276
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          276
        ],
        "'ASSERTTRUE": [
          -1,
          276
        ],
        "'ASSERTFALSE": [
          -1,
          276
        ],
        "'ASSERTSATISFIES": [
          -1,
          276
        ],
        "'ASSERTRAISES": [
          -1,
          276
        ],
        "'SWITCH": [
          -1,
          276
        ],
        "'YIELD": [
          -1,
          276
        ],
        "'DASH": [
          -1,
          276
        ],
        "'BANG": [
          -1,
          276
        ],
        "'LBRACK": [
          -1,
          276
        ],
        "'NUMBER": [
          -1,
          276
        ],
        "'TRUE": [
          -1,
          276
        ],
        "'FALSE": [
          -1,
          276
        ],
        "'NULL": [
          -1,
          276
        ],
        "'PARENAFTERBRACE": [
          -1,
          276
        ],
        "'TABLE": [
          -1,
          276
        ],
        "'ASK": [
          -1,
          276
        ],
        "'NEW": [
          -1,
          276
        ]
      },
      {
        "'PARENSPACE": [
          262
        ]
      },
      {
        "'SEMI": [
          85
        ],
        "expr-stmt_I1?": [
          86
        ],
        "expr-stmt_I1": [
          87
        ],
        "'IS": [
          263
        ],
        "'ISNOT": [
          264
        ],
        "'SATISFIES": [
          265
        ],
        "'RAISES": [
          266
        ],
        "'NAME": [
          -1,
          66,
          68
        ],
        "'PARENNOSPACE": [
          -1,
          66,
          68
        ],
        "'STRING": [
          -1,
          66,
          68
        ],
        "'LBRACE": [
          -1,
          66,
          68
        ],
        "'RBRACE": [
          -1,
          66,
          68
        ],
        "'SPY": [
          -1,
          66,
          68
        ],
        "'PARENSPACE": [
          -1,
          66,
          68
        ],
        "'INT": [
          -1,
          66,
          68
        ],
        "'LONG": [
          -1,
          66,
          68
        ],
        "'DOUBLE": [
          -1,
          66,
          68
        ],
        "'FLOAT": [
          -1,
          66,
          68
        ],
        "'BOOLEAN": [
          -1,
          66,
          68
        ],
        "'VOID": [
          -1,
          66,
          68
        ],
        "'DATA": [
          -1,
          66,
          68
        ],
        "'IF": [
          -1,
          66,
          68
        ],
        "'FOR": [
          -1,
          66,
          68
        ],
        "'RETURN": [
          -1,
          66,
          68
        ],
        "'VAR": [
          -1,
          66,
          68
        ],
        "'ATCHECK": [
          -1,
          66,
          68
        ],
        "'ASSERTEQUALS": [
          -1,
          66,
          68
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          66,
          68
        ],
        "'ASSERTTRUE": [
          -1,
          66,
          68
        ],
        "'ASSERTFALSE": [
          -1,
          66,
          68
        ],
        "'ASSERTSATISFIES": [
          -1,
          66,
          68
        ],
        "'ASSERTRAISES": [
          -1,
          66,
          68
        ],
        "'SWITCH": [
          -1,
          66,
          68
        ],
        "'YIELD": [
          -1,
          66,
          68
        ],
        "'DASH": [
          -1,
          66,
          68
        ],
        "'BANG": [
          -1,
          66,
          68
        ],
        "'LBRACK": [
          -1,
          66,
          68
        ],
        "'NUMBER": [
          -1,
          66,
          68
        ],
        "'TRUE": [
          -1,
          66,
          68
        ],
        "'FALSE": [
          -1,
          66,
          68
        ],
        "'NULL": [
          -1,
          66,
          68
        ],
        "'PARENAFTERBRACE": [
          -1,
          66,
          68
        ],
        "'TABLE": [
          -1,
          66,
          68
        ],
        "'ASK": [
          -1,
          66,
          68
        ],
        "'NEW": [
          -1,
          66,
          68
        ]
      },
      {
        "'PARENSPACE": [
          267
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'SEMI": [
          268
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          269
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          -1,
          278
        ],
        "'PARENNOSPACE": [
          -1,
          278
        ],
        "'STRING": [
          -1,
          278
        ],
        "'LBRACE": [
          -1,
          278
        ],
        "'RBRACE": [
          -1,
          278
        ],
        "'SPY": [
          -1,
          278
        ],
        "'PARENSPACE": [
          -1,
          278
        ],
        "'INT": [
          -1,
          278
        ],
        "'LONG": [
          -1,
          278
        ],
        "'DOUBLE": [
          -1,
          278
        ],
        "'FLOAT": [
          -1,
          278
        ],
        "'BOOLEAN": [
          -1,
          278
        ],
        "'VOID": [
          -1,
          278
        ],
        "'DATA": [
          -1,
          278
        ],
        "'IF": [
          -1,
          278
        ],
        "'FOR": [
          -1,
          278
        ],
        "'RETURN": [
          -1,
          278
        ],
        "'VAR": [
          -1,
          278
        ],
        "'ATCHECK": [
          -1,
          278
        ],
        "'ASSERTEQUALS": [
          -1,
          278
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          278
        ],
        "'ASSERTTRUE": [
          -1,
          278
        ],
        "'ASSERTFALSE": [
          -1,
          278
        ],
        "'ASSERTSATISFIES": [
          -1,
          278
        ],
        "'ASSERTRAISES": [
          -1,
          278
        ],
        "'SWITCH": [
          -1,
          278
        ],
        "'YIELD": [
          -1,
          278
        ],
        "'DASH": [
          -1,
          278
        ],
        "'BANG": [
          -1,
          278
        ],
        "'LBRACK": [
          -1,
          278
        ],
        "'NUMBER": [
          -1,
          278
        ],
        "'TRUE": [
          -1,
          278
        ],
        "'FALSE": [
          -1,
          278
        ],
        "'NULL": [
          -1,
          278
        ],
        "'PARENAFTERBRACE": [
          -1,
          278
        ],
        "'TABLE": [
          -1,
          278
        ],
        "'ASK": [
          -1,
          278
        ],
        "'NEW": [
          -1,
          278
        ]
      },
      {
        "'PARENNOSPACE": [
          270
        ]
      },
      {
        "'PARENNOSPACE": [
          271
        ]
      },
      {
        "'PARENNOSPACE": [
          272
        ]
      },
      {
        "'PARENNOSPACE": [
          273
        ]
      },
      {
        "'PARENNOSPACE": [
          274
        ]
      },
      {
        "'PARENNOSPACE": [
          275
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          276
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RPAREN": [
          277
        ]
      },
      {
        "'LBRACE": [
          278
        ]
      },
      {
        "$": [
          -1,
          280
        ],
        "'NAME": [
          -1,
          280
        ],
        "'SEMI": [
          -1,
          280
        ],
        "'PARENNOSPACE": [
          -1,
          280
        ],
        "'STRING": [
          -1,
          280
        ],
        "'RPAREN": [
          -1,
          280
        ],
        "'LBRACE": [
          -1,
          280
        ],
        "'RBRACE": [
          -1,
          280
        ],
        "'SPY": [
          -1,
          280
        ],
        "'PARENSPACE": [
          -1,
          280
        ],
        "'COMMA": [
          -1,
          280
        ],
        "'INT": [
          -1,
          280
        ],
        "'LONG": [
          -1,
          280
        ],
        "'DOUBLE": [
          -1,
          280
        ],
        "'FLOAT": [
          -1,
          280
        ],
        "'BOOLEAN": [
          -1,
          280
        ],
        "'VOID": [
          -1,
          280
        ],
        "'LT": [
          -1,
          280
        ],
        "'GT": [
          -1,
          280
        ],
        "'THINARROW": [
          -1,
          280
        ],
        "'DATA": [
          -1,
          280
        ],
        "'IF": [
          -1,
          280
        ],
        "'FOR": [
          -1,
          280
        ],
        "'RETURN": [
          -1,
          280
        ],
        "'VAR": [
          -1,
          280
        ],
        "'ATCHECK": [
          -1,
          280
        ],
        "'ASSERTEQUALS": [
          -1,
          280
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          280
        ],
        "'ASSERTTRUE": [
          -1,
          280
        ],
        "'ASSERTFALSE": [
          -1,
          280
        ],
        "'ASSERTSATISFIES": [
          -1,
          280
        ],
        "'ASSERTRAISES": [
          -1,
          280
        ],
        "'IS": [
          -1,
          280
        ],
        "'ISNOT": [
          -1,
          280
        ],
        "'SATISFIES": [
          -1,
          280
        ],
        "'RAISES": [
          -1,
          280
        ],
        "'SWITCH": [
          -1,
          280
        ],
        "'CASE": [
          -1,
          280
        ],
        "'DEFAULT": [
          -1,
          280
        ],
        "'YIELD": [
          -1,
          280
        ],
        "'PLUS": [
          -1,
          280
        ],
        "'DASH": [
          -1,
          280
        ],
        "'TIMES": [
          -1,
          280
        ],
        "'SLASH": [
          -1,
          280
        ],
        "'PERCENT": [
          -1,
          280
        ],
        "'EQUALEQUAL": [
          -1,
          280
        ],
        "'NEQ": [
          -1,
          280
        ],
        "'LEQ": [
          -1,
          280
        ],
        "'GEQ": [
          -1,
          280
        ],
        "'AND": [
          -1,
          280
        ],
        "'OR": [
          -1,
          280
        ],
        "'BANG": [
          -1,
          280
        ],
        "'LBRACK": [
          -1,
          280
        ],
        "'RBRACK": [
          -1,
          280
        ],
        "'NUMBER": [
          -1,
          280
        ],
        "'TRUE": [
          -1,
          280
        ],
        "'FALSE": [
          -1,
          280
        ],
        "'NULL": [
          -1,
          280
        ],
        "'PARENAFTERBRACE": [
          -1,
          280
        ],
        "'TABLE": [
          -1,
          280
        ],
        "'ASK": [
          -1,
          280
        ],
        "'NEW": [
          -1,
          280
        ]
      },
      {
        "'COMMA": [
          279
        ],
        "app-or-access_A0_I2_I1": [
          280
        ],
        "'RPAREN": [
          -1,
          282
        ]
      },
      {
        "$": [
          -1,
          284
        ],
        "'NAME": [
          -1,
          284
        ],
        "'SEMI": [
          -1,
          284
        ],
        "'PARENNOSPACE": [
          -1,
          284
        ],
        "'STRING": [
          -1,
          284
        ],
        "'RPAREN": [
          -1,
          284
        ],
        "'LBRACE": [
          -1,
          284
        ],
        "'RBRACE": [
          -1,
          284
        ],
        "'SPY": [
          -1,
          284
        ],
        "'PARENSPACE": [
          -1,
          284
        ],
        "'COMMA": [
          -1,
          284
        ],
        "'INT": [
          -1,
          284
        ],
        "'LONG": [
          -1,
          284
        ],
        "'DOUBLE": [
          -1,
          284
        ],
        "'FLOAT": [
          -1,
          284
        ],
        "'BOOLEAN": [
          -1,
          284
        ],
        "'VOID": [
          -1,
          284
        ],
        "'LT": [
          -1,
          284
        ],
        "'GT": [
          -1,
          284
        ],
        "'THINARROW": [
          -1,
          284
        ],
        "'DATA": [
          -1,
          284
        ],
        "'IF": [
          -1,
          284
        ],
        "'FOR": [
          -1,
          284
        ],
        "'RETURN": [
          -1,
          284
        ],
        "'VAR": [
          -1,
          284
        ],
        "'ATCHECK": [
          -1,
          284
        ],
        "'ASSERTEQUALS": [
          -1,
          284
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          284
        ],
        "'ASSERTTRUE": [
          -1,
          284
        ],
        "'ASSERTFALSE": [
          -1,
          284
        ],
        "'ASSERTSATISFIES": [
          -1,
          284
        ],
        "'ASSERTRAISES": [
          -1,
          284
        ],
        "'IS": [
          -1,
          284
        ],
        "'ISNOT": [
          -1,
          284
        ],
        "'SATISFIES": [
          -1,
          284
        ],
        "'RAISES": [
          -1,
          284
        ],
        "'SWITCH": [
          -1,
          284
        ],
        "'CASE": [
          -1,
          284
        ],
        "'DEFAULT": [
          -1,
          284
        ],
        "'YIELD": [
          -1,
          284
        ],
        "'PLUS": [
          -1,
          284
        ],
        "'DASH": [
          -1,
          284
        ],
        "'TIMES": [
          -1,
          284
        ],
        "'SLASH": [
          -1,
          284
        ],
        "'PERCENT": [
          -1,
          284
        ],
        "'EQUALEQUAL": [
          -1,
          284
        ],
        "'NEQ": [
          -1,
          284
        ],
        "'LEQ": [
          -1,
          284
        ],
        "'GEQ": [
          -1,
          284
        ],
        "'AND": [
          -1,
          284
        ],
        "'OR": [
          -1,
          284
        ],
        "'BANG": [
          -1,
          284
        ],
        "'DOT": [
          -1,
          284
        ],
        "'LBRACK": [
          -1,
          284
        ],
        "'RBRACK": [
          -1,
          284
        ],
        "'NUMBER": [
          -1,
          284
        ],
        "'TRUE": [
          -1,
          284
        ],
        "'FALSE": [
          -1,
          284
        ],
        "'NULL": [
          -1,
          284
        ],
        "'PARENAFTERBRACE": [
          -1,
          284
        ],
        "'TABLE": [
          -1,
          284
        ],
        "'ASK": [
          -1,
          284
        ],
        "'NEW": [
          -1,
          284
        ]
      },
      {
        "$": [
          -1,
          286
        ],
        "'NAME": [
          -1,
          286
        ],
        "'SEMI": [
          -1,
          286
        ],
        "'PARENNOSPACE": [
          -1,
          286
        ],
        "'STRING": [
          -1,
          286
        ],
        "'RPAREN": [
          -1,
          286
        ],
        "'LBRACE": [
          -1,
          286
        ],
        "'RBRACE": [
          -1,
          286
        ],
        "'SPY": [
          -1,
          286
        ],
        "'PARENSPACE": [
          -1,
          286
        ],
        "'COMMA": [
          -1,
          286
        ],
        "'INT": [
          -1,
          286
        ],
        "'LONG": [
          -1,
          286
        ],
        "'DOUBLE": [
          -1,
          286
        ],
        "'FLOAT": [
          -1,
          286
        ],
        "'BOOLEAN": [
          -1,
          286
        ],
        "'VOID": [
          -1,
          286
        ],
        "'LT": [
          -1,
          286
        ],
        "'GT": [
          -1,
          286
        ],
        "'THINARROW": [
          -1,
          286
        ],
        "'DATA": [
          -1,
          286
        ],
        "'IF": [
          -1,
          286
        ],
        "'FOR": [
          -1,
          286
        ],
        "'RETURN": [
          -1,
          286
        ],
        "'VAR": [
          -1,
          286
        ],
        "'ATCHECK": [
          -1,
          286
        ],
        "'ASSERTEQUALS": [
          -1,
          286
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          286
        ],
        "'ASSERTTRUE": [
          -1,
          286
        ],
        "'ASSERTFALSE": [
          -1,
          286
        ],
        "'ASSERTSATISFIES": [
          -1,
          286
        ],
        "'ASSERTRAISES": [
          -1,
          286
        ],
        "'IS": [
          -1,
          286
        ],
        "'ISNOT": [
          -1,
          286
        ],
        "'SATISFIES": [
          -1,
          286
        ],
        "'RAISES": [
          -1,
          286
        ],
        "'SWITCH": [
          -1,
          286
        ],
        "'CASE": [
          -1,
          286
        ],
        "'DEFAULT": [
          -1,
          286
        ],
        "'YIELD": [
          -1,
          286
        ],
        "'PLUS": [
          -1,
          286
        ],
        "'DASH": [
          -1,
          286
        ],
        "'TIMES": [
          -1,
          286
        ],
        "'SLASH": [
          -1,
          286
        ],
        "'PERCENT": [
          -1,
          286
        ],
        "'EQUALEQUAL": [
          -1,
          286
        ],
        "'NEQ": [
          -1,
          286
        ],
        "'LEQ": [
          -1,
          286
        ],
        "'GEQ": [
          -1,
          286
        ],
        "'AND": [
          -1,
          286
        ],
        "'OR": [
          -1,
          286
        ],
        "'BANG": [
          -1,
          286
        ],
        "'DOT": [
          -1,
          286
        ],
        "'LBRACK": [
          -1,
          286
        ],
        "'RBRACK": [
          -1,
          286
        ],
        "'NUMBER": [
          -1,
          286
        ],
        "'TRUE": [
          -1,
          286
        ],
        "'FALSE": [
          -1,
          286
        ],
        "'NULL": [
          -1,
          286
        ],
        "'PARENAFTERBRACE": [
          -1,
          286
        ],
        "'TABLE": [
          -1,
          286
        ],
        "'ASK": [
          -1,
          286
        ],
        "'NEW": [
          -1,
          286
        ]
      },
      {
        "construct-expr_A0_I3_I1*": [
          281
        ],
        "'COMMA": [
          -1,
          288
        ],
        "'RBRACK": [
          -1,
          290,
          288
        ]
      },
      {
        "'RBRACK": [
          282
        ]
      },
      {
        "'RBRACK": [
          -1,
          292
        ]
      },
      {
        "'NAME": [
          283
        ]
      },
      {
        "'SEMI": [
          -1,
          294
        ],
        "'COMMA": [
          -1,
          294
        ]
      },
      {
        "'SEMI": [
          284
        ],
        "'COMMA": [
          285
        ],
        "table-expr_I3": [
          286
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          287
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "ask-expr_A0_I4*": [
          288
        ],
        "ask-expr_A1_I4*": [
          289
        ],
        "'NAME": [
          -1,
          296,
          298
        ],
        "'STRING": [
          -1,
          296,
          298
        ],
        "'LBRACE": [
          -1,
          296,
          298
        ],
        "'RBRACE": [
          -1,
          296
        ],
        "'PARENSPACE": [
          -1,
          296,
          298
        ],
        "'SWITCH": [
          -1,
          296,
          298
        ],
        "'DASH": [
          -1,
          296,
          298
        ],
        "'BANG": [
          -1,
          296,
          298
        ],
        "'LBRACK": [
          -1,
          296,
          298
        ],
        "'NUMBER": [
          -1,
          296,
          298
        ],
        "'TRUE": [
          -1,
          296,
          298
        ],
        "'FALSE": [
          -1,
          296,
          298
        ],
        "'NULL": [
          -1,
          296,
          298
        ],
        "'PARENAFTERBRACE": [
          -1,
          296,
          298
        ],
        "'TABLE": [
          -1,
          296,
          298
        ],
        "'ASK": [
          -1,
          296,
          298
        ],
        "'OTHERWISE": [
          -1,
          298
        ],
        "'NEW": [
          -1,
          296,
          298
        ]
      },
      {
        "new-expr_I3_I1*": [
          290
        ],
        "'RPAREN": [
          -1,
          300,
          302
        ],
        "'COMMA": [
          -1,
          302
        ]
      },
      {
        "'RPAREN": [
          291
        ]
      },
      {
        "'RPAREN": [
          -1,
          304
        ]
      },
      {
        "$": [
          -1,
          306
        ],
        "'IMPORT": [
          -1,
          306
        ],
        "'NAME": [
          -1,
          306
        ],
        "'PARENNOSPACE": [
          -1,
          306
        ],
        "'STRING": [
          -1,
          306
        ],
        "'INCLUDE": [
          -1,
          306
        ],
        "'LBRACE": [
          -1,
          306
        ],
        "'PARENSPACE": [
          -1,
          306
        ],
        "'INT": [
          -1,
          306
        ],
        "'LONG": [
          -1,
          306
        ],
        "'DOUBLE": [
          -1,
          306
        ],
        "'FLOAT": [
          -1,
          306
        ],
        "'BOOLEAN": [
          -1,
          306
        ],
        "'VOID": [
          -1,
          306
        ],
        "'DATA": [
          -1,
          306
        ],
        "'VAR": [
          -1,
          306
        ],
        "'ATCHECK": [
          -1,
          306
        ],
        "'SWITCH": [
          -1,
          306
        ],
        "'DASH": [
          -1,
          306
        ],
        "'BANG": [
          -1,
          306
        ],
        "'LBRACK": [
          -1,
          306
        ],
        "'NUMBER": [
          -1,
          306
        ],
        "'TRUE": [
          -1,
          306
        ],
        "'FALSE": [
          -1,
          306
        ],
        "'NULL": [
          -1,
          306
        ],
        "'PARENAFTERBRACE": [
          -1,
          306
        ],
        "'TABLE": [
          -1,
          306
        ],
        "'ASK": [
          -1,
          306
        ],
        "'NEW": [
          -1,
          306
        ]
      },
      {
        "'SEMI": [
          292
        ],
        "'AS": [
          293
        ]
      },
      {
        "$": [
          -1,
          308
        ],
        "'IMPORT": [
          -1,
          308
        ],
        "'NAME": [
          -1,
          308
        ],
        "'PARENNOSPACE": [
          -1,
          308
        ],
        "'STRING": [
          -1,
          308
        ],
        "'INCLUDE": [
          -1,
          308
        ],
        "'LBRACE": [
          -1,
          308
        ],
        "'PARENSPACE": [
          -1,
          308
        ],
        "'INT": [
          -1,
          308
        ],
        "'LONG": [
          -1,
          308
        ],
        "'DOUBLE": [
          -1,
          308
        ],
        "'FLOAT": [
          -1,
          308
        ],
        "'BOOLEAN": [
          -1,
          308
        ],
        "'VOID": [
          -1,
          308
        ],
        "'DATA": [
          -1,
          308
        ],
        "'VAR": [
          -1,
          308
        ],
        "'ATCHECK": [
          -1,
          308
        ],
        "'SWITCH": [
          -1,
          308
        ],
        "'DASH": [
          -1,
          308
        ],
        "'BANG": [
          -1,
          308
        ],
        "'LBRACK": [
          -1,
          308
        ],
        "'NUMBER": [
          -1,
          308
        ],
        "'TRUE": [
          -1,
          308
        ],
        "'FALSE": [
          -1,
          308
        ],
        "'NULL": [
          -1,
          308
        ],
        "'PARENAFTERBRACE": [
          -1,
          308
        ],
        "'TABLE": [
          -1,
          308
        ],
        "'ASK": [
          -1,
          308
        ],
        "'NEW": [
          -1,
          308
        ]
      },
      {
        "'SEMI": [
          294
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          295
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ]
      },
      {
        "'NAME": [
          -1,
          310
        ],
        "'RPAREN": [
          -1,
          310
        ],
        "'COMMA": [
          -1,
          310
        ],
        "'GT": [
          -1,
          310
        ],
        "'THINARROW": [
          -1,
          310
        ]
      },
      {
        "'COMMA": [
          -1,
          312
        ],
        "'GT": [
          -1,
          312
        ]
      },
      {
        "'RPAREN": [
          -1,
          314
        ],
        "'COMMA": [
          -1,
          314
        ]
      },
      {
        "$": [
          -1,
          316
        ],
        "'NAME": [
          -1,
          316
        ],
        "'SEMI": [
          -1,
          316
        ],
        "'PARENNOSPACE": [
          -1,
          316
        ],
        "'STRING": [
          -1,
          316
        ],
        "'RPAREN": [
          -1,
          316
        ],
        "'LBRACE": [
          -1,
          316
        ],
        "'RBRACE": [
          -1,
          316
        ],
        "'SPY": [
          -1,
          316
        ],
        "'PARENSPACE": [
          -1,
          316
        ],
        "'COMMA": [
          -1,
          316
        ],
        "'INT": [
          -1,
          316
        ],
        "'LONG": [
          -1,
          316
        ],
        "'DOUBLE": [
          -1,
          316
        ],
        "'FLOAT": [
          -1,
          316
        ],
        "'BOOLEAN": [
          -1,
          316
        ],
        "'VOID": [
          -1,
          316
        ],
        "'DATA": [
          -1,
          316
        ],
        "'IF": [
          -1,
          316
        ],
        "'FOR": [
          -1,
          316
        ],
        "'RETURN": [
          -1,
          316
        ],
        "'VAR": [
          -1,
          316
        ],
        "'ATCHECK": [
          -1,
          316
        ],
        "'ASSERTEQUALS": [
          -1,
          316
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          316
        ],
        "'ASSERTTRUE": [
          -1,
          316
        ],
        "'ASSERTFALSE": [
          -1,
          316
        ],
        "'ASSERTSATISFIES": [
          -1,
          316
        ],
        "'ASSERTRAISES": [
          -1,
          316
        ],
        "'IS": [
          -1,
          316
        ],
        "'ISNOT": [
          -1,
          316
        ],
        "'SATISFIES": [
          -1,
          316
        ],
        "'RAISES": [
          -1,
          316
        ],
        "'SWITCH": [
          -1,
          316
        ],
        "'CASE": [
          -1,
          316
        ],
        "'DEFAULT": [
          -1,
          316
        ],
        "'YIELD": [
          -1,
          316
        ],
        "'DASH": [
          -1,
          316
        ],
        "'BANG": [
          -1,
          316
        ],
        "'LBRACK": [
          -1,
          316
        ],
        "'RBRACK": [
          -1,
          316
        ],
        "'NUMBER": [
          -1,
          316
        ],
        "'TRUE": [
          -1,
          316
        ],
        "'FALSE": [
          -1,
          316
        ],
        "'NULL": [
          -1,
          316
        ],
        "'PARENAFTERBRACE": [
          -1,
          316
        ],
        "'TABLE": [
          -1,
          316
        ],
        "'ASK": [
          -1,
          316
        ],
        "'NEW": [
          -1,
          316
        ]
      },
      {
        "'RBRACE": [
          -1,
          318
        ],
        "'COMMA": [
          -1,
          318
        ]
      },
      {
        "'COMMA": [
          -1,
          320
        ],
        "'THINARROW": [
          -1,
          320
        ]
      },
      {
        "'NAME": [
          -1,
          322
        ],
        "'RPAREN": [
          -1,
          322
        ],
        "'COMMA": [
          -1,
          322
        ],
        "'GT": [
          -1,
          322
        ],
        "'THINARROW": [
          -1,
          322
        ]
      },
      {
        "$": [
          -1,
          324
        ],
        "'NAME": [
          -1,
          324
        ],
        "'SEMI": [
          -1,
          324
        ],
        "'PARENNOSPACE": [
          -1,
          324
        ],
        "'STRING": [
          -1,
          324
        ],
        "'RPAREN": [
          -1,
          324
        ],
        "'LBRACE": [
          -1,
          324
        ],
        "'RBRACE": [
          -1,
          324
        ],
        "'SPY": [
          -1,
          324
        ],
        "'PARENSPACE": [
          -1,
          324
        ],
        "'COMMA": [
          -1,
          324
        ],
        "'INT": [
          -1,
          324
        ],
        "'LONG": [
          -1,
          324
        ],
        "'DOUBLE": [
          -1,
          324
        ],
        "'FLOAT": [
          -1,
          324
        ],
        "'BOOLEAN": [
          -1,
          324
        ],
        "'VOID": [
          -1,
          324
        ],
        "'DATA": [
          -1,
          324
        ],
        "'IF": [
          -1,
          324
        ],
        "'FOR": [
          -1,
          324
        ],
        "'RETURN": [
          -1,
          324
        ],
        "'VAR": [
          -1,
          324
        ],
        "'ATCHECK": [
          -1,
          324
        ],
        "'ASSERTEQUALS": [
          -1,
          324
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          324
        ],
        "'ASSERTTRUE": [
          -1,
          324
        ],
        "'ASSERTFALSE": [
          -1,
          324
        ],
        "'ASSERTSATISFIES": [
          -1,
          324
        ],
        "'ASSERTRAISES": [
          -1,
          324
        ],
        "'IS": [
          -1,
          324
        ],
        "'ISNOT": [
          -1,
          324
        ],
        "'SATISFIES": [
          -1,
          324
        ],
        "'RAISES": [
          -1,
          324
        ],
        "'SWITCH": [
          -1,
          324
        ],
        "'CASE": [
          -1,
          324
        ],
        "'DEFAULT": [
          -1,
          324
        ],
        "'YIELD": [
          -1,
          324
        ],
        "'DASH": [
          -1,
          324
        ],
        "'BANG": [
          -1,
          324
        ],
        "'LBRACK": [
          -1,
          324
        ],
        "'RBRACK": [
          -1,
          324
        ],
        "'NUMBER": [
          -1,
          324
        ],
        "'TRUE": [
          -1,
          324
        ],
        "'FALSE": [
          -1,
          324
        ],
        "'NULL": [
          -1,
          324
        ],
        "'PARENAFTERBRACE": [
          -1,
          324
        ],
        "'TABLE": [
          -1,
          324
        ],
        "'ASK": [
          -1,
          324
        ],
        "'NEW": [
          -1,
          324
        ]
      },
      {
        "'RPAREN": [
          -1,
          326
        ],
        "'COMMA": [
          -1,
          326
        ]
      },
      {
        "'RPAREN": [
          -1,
          328
        ],
        "'COMMA": [
          -1,
          328
        ]
      },
      {
        "block": [
          296
        ],
        "'LBRACE": [
          297
        ]
      },
      {
        "'COMMA": [
          298
        ],
        "fun-decl_I3_I1": [
          299
        ],
        "'RPAREN": [
          -1,
          330
        ]
      },
      {
        "$": [
          -1,
          332
        ],
        "'NAME": [
          -1,
          332
        ],
        "'PARENNOSPACE": [
          -1,
          332
        ],
        "'STRING": [
          -1,
          332
        ],
        "'LBRACE": [
          -1,
          332
        ],
        "'RBRACE": [
          -1,
          332
        ],
        "'SPY": [
          -1,
          332
        ],
        "'PARENSPACE": [
          -1,
          332
        ],
        "'INT": [
          -1,
          332
        ],
        "'LONG": [
          -1,
          332
        ],
        "'DOUBLE": [
          -1,
          332
        ],
        "'FLOAT": [
          -1,
          332
        ],
        "'BOOLEAN": [
          -1,
          332
        ],
        "'VOID": [
          -1,
          332
        ],
        "'DATA": [
          -1,
          332
        ],
        "'IF": [
          -1,
          332
        ],
        "'FOR": [
          -1,
          332
        ],
        "'RETURN": [
          -1,
          332
        ],
        "'VAR": [
          -1,
          332
        ],
        "'ATCHECK": [
          -1,
          332
        ],
        "'ASSERTEQUALS": [
          -1,
          332
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          332
        ],
        "'ASSERTTRUE": [
          -1,
          332
        ],
        "'ASSERTFALSE": [
          -1,
          332
        ],
        "'ASSERTSATISFIES": [
          -1,
          332
        ],
        "'ASSERTRAISES": [
          -1,
          332
        ],
        "'SWITCH": [
          -1,
          332
        ],
        "'YIELD": [
          -1,
          332
        ],
        "'DASH": [
          -1,
          332
        ],
        "'BANG": [
          -1,
          332
        ],
        "'LBRACK": [
          -1,
          332
        ],
        "'NUMBER": [
          -1,
          332
        ],
        "'TRUE": [
          -1,
          332
        ],
        "'FALSE": [
          -1,
          332
        ],
        "'NULL": [
          -1,
          332
        ],
        "'PARENAFTERBRACE": [
          -1,
          332
        ],
        "'TABLE": [
          -1,
          332
        ],
        "'ASK": [
          -1,
          332
        ],
        "'NEW": [
          -1,
          332
        ]
      },
      {
        "$": [
          -1,
          334
        ],
        "'NAME": [
          -1,
          334
        ],
        "'PARENNOSPACE": [
          -1,
          334
        ],
        "'STRING": [
          -1,
          334
        ],
        "'LBRACE": [
          -1,
          334
        ],
        "'RBRACE": [
          -1,
          334
        ],
        "'SPY": [
          -1,
          334
        ],
        "'PARENSPACE": [
          -1,
          334
        ],
        "'INT": [
          -1,
          334
        ],
        "'LONG": [
          -1,
          334
        ],
        "'DOUBLE": [
          -1,
          334
        ],
        "'FLOAT": [
          -1,
          334
        ],
        "'BOOLEAN": [
          -1,
          334
        ],
        "'VOID": [
          -1,
          334
        ],
        "'DATA": [
          -1,
          334
        ],
        "'IF": [
          -1,
          334
        ],
        "'FOR": [
          -1,
          334
        ],
        "'RETURN": [
          -1,
          334
        ],
        "'VAR": [
          -1,
          334
        ],
        "'ATCHECK": [
          -1,
          334
        ],
        "'ASSERTEQUALS": [
          -1,
          334
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          334
        ],
        "'ASSERTTRUE": [
          -1,
          334
        ],
        "'ASSERTFALSE": [
          -1,
          334
        ],
        "'ASSERTSATISFIES": [
          -1,
          334
        ],
        "'ASSERTRAISES": [
          -1,
          334
        ],
        "'SWITCH": [
          -1,
          334
        ],
        "'YIELD": [
          -1,
          334
        ],
        "'DASH": [
          -1,
          334
        ],
        "'BANG": [
          -1,
          334
        ],
        "'LBRACK": [
          -1,
          334
        ],
        "'NUMBER": [
          -1,
          334
        ],
        "'TRUE": [
          -1,
          334
        ],
        "'FALSE": [
          -1,
          334
        ],
        "'NULL": [
          -1,
          334
        ],
        "'PARENAFTERBRACE": [
          -1,
          334
        ],
        "'TABLE": [
          -1,
          334
        ],
        "'ASK": [
          -1,
          334
        ],
        "'NEW": [
          -1,
          334
        ]
      },
      {
        "$": [
          -1,
          336
        ],
        "'NAME": [
          -1,
          336
        ],
        "'PARENNOSPACE": [
          -1,
          336
        ],
        "'STRING": [
          -1,
          336
        ],
        "'LBRACE": [
          -1,
          336
        ],
        "'RBRACE": [
          -1,
          336
        ],
        "'SPY": [
          -1,
          336
        ],
        "'PARENSPACE": [
          -1,
          336
        ],
        "'INT": [
          -1,
          336
        ],
        "'LONG": [
          -1,
          336
        ],
        "'DOUBLE": [
          -1,
          336
        ],
        "'FLOAT": [
          -1,
          336
        ],
        "'BOOLEAN": [
          -1,
          336
        ],
        "'VOID": [
          -1,
          336
        ],
        "'DATA": [
          -1,
          336
        ],
        "'IF": [
          -1,
          336
        ],
        "'FOR": [
          -1,
          336
        ],
        "'RETURN": [
          -1,
          336
        ],
        "'VAR": [
          -1,
          336
        ],
        "'ATCHECK": [
          -1,
          336
        ],
        "'ASSERTEQUALS": [
          -1,
          336
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          336
        ],
        "'ASSERTTRUE": [
          -1,
          336
        ],
        "'ASSERTFALSE": [
          -1,
          336
        ],
        "'ASSERTSATISFIES": [
          -1,
          336
        ],
        "'ASSERTRAISES": [
          -1,
          336
        ],
        "'SWITCH": [
          -1,
          336
        ],
        "'YIELD": [
          -1,
          336
        ],
        "'DASH": [
          -1,
          336
        ],
        "'BANG": [
          -1,
          336
        ],
        "'LBRACK": [
          -1,
          336
        ],
        "'NUMBER": [
          -1,
          336
        ],
        "'TRUE": [
          -1,
          336
        ],
        "'FALSE": [
          -1,
          336
        ],
        "'NULL": [
          -1,
          336
        ],
        "'PARENAFTERBRACE": [
          -1,
          336
        ],
        "'TABLE": [
          -1,
          336
        ],
        "'ASK": [
          -1,
          336
        ],
        "'NEW": [
          -1,
          336
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          300
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "variant-decl_A0_I2?": [
          301
        ],
        "variant-decl_A0_I2": [
          302
        ],
        "variant-member": [
          303
        ],
        "'RPAREN": [
          -1,
          338
        ]
      },
      {
        "'SEMI": [
          304
        ],
        "data-decl_I5?": [
          305
        ],
        "data-decl_I4": [
          306
        ],
        "data-decl_I5": [
          307
        ],
        "'RBRACE": [
          -1,
          340
        ]
      },
      {
        "'SEMI": [
          308
        ],
        "var-stmt_I5?": [
          309
        ],
        "var-stmt_I5": [
          310
        ],
        "$": [
          -1,
          342,
          344
        ],
        "'NAME": [
          -1,
          342,
          344
        ],
        "'PARENNOSPACE": [
          -1,
          342,
          344
        ],
        "'STRING": [
          -1,
          342,
          344
        ],
        "'LBRACE": [
          -1,
          342,
          344
        ],
        "'RBRACE": [
          -1,
          342,
          344
        ],
        "'SPY": [
          -1,
          342,
          344
        ],
        "'PARENSPACE": [
          -1,
          342,
          344
        ],
        "'INT": [
          -1,
          342,
          344
        ],
        "'LONG": [
          -1,
          342,
          344
        ],
        "'DOUBLE": [
          -1,
          342,
          344
        ],
        "'FLOAT": [
          -1,
          342,
          344
        ],
        "'BOOLEAN": [
          -1,
          342,
          344
        ],
        "'VOID": [
          -1,
          342,
          344
        ],
        "'DATA": [
          -1,
          342,
          344
        ],
        "'IF": [
          -1,
          342,
          344
        ],
        "'FOR": [
          -1,
          342,
          344
        ],
        "'RETURN": [
          -1,
          342,
          344
        ],
        "'VAR": [
          -1,
          342,
          344
        ],
        "'ATCHECK": [
          -1,
          342,
          344
        ],
        "'ASSERTEQUALS": [
          -1,
          342,
          344
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          342,
          344
        ],
        "'ASSERTTRUE": [
          -1,
          342,
          344
        ],
        "'ASSERTFALSE": [
          -1,
          342,
          344
        ],
        "'ASSERTSATISFIES": [
          -1,
          342,
          344
        ],
        "'ASSERTRAISES": [
          -1,
          342,
          344
        ],
        "'SWITCH": [
          -1,
          342,
          344
        ],
        "'YIELD": [
          -1,
          342,
          344
        ],
        "'DASH": [
          -1,
          342,
          344
        ],
        "'BANG": [
          -1,
          342,
          344
        ],
        "'LBRACK": [
          -1,
          342,
          344
        ],
        "'NUMBER": [
          -1,
          342,
          344
        ],
        "'TRUE": [
          -1,
          342,
          344
        ],
        "'FALSE": [
          -1,
          342,
          344
        ],
        "'NULL": [
          -1,
          342,
          344
        ],
        "'PARENAFTERBRACE": [
          -1,
          342,
          344
        ],
        "'TABLE": [
          -1,
          342,
          344
        ],
        "'ASK": [
          -1,
          342,
          344
        ],
        "'NEW": [
          -1,
          342,
          344
        ]
      },
      {
        "'NAME": [
          311
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          312
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          313
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          314
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          315
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          316
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          317
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ]
      },
      {
        "'NAME": [
          -1,
          346
        ],
        "'PARENNOSPACE": [
          -1,
          346
        ],
        "'STRING": [
          -1,
          346
        ],
        "'LBRACE": [
          -1,
          346
        ],
        "'RBRACE": [
          -1,
          346
        ],
        "'SPY": [
          -1,
          346
        ],
        "'PARENSPACE": [
          -1,
          346
        ],
        "'INT": [
          -1,
          346
        ],
        "'LONG": [
          -1,
          346
        ],
        "'DOUBLE": [
          -1,
          346
        ],
        "'FLOAT": [
          -1,
          346
        ],
        "'BOOLEAN": [
          -1,
          346
        ],
        "'VOID": [
          -1,
          346
        ],
        "'DATA": [
          -1,
          346
        ],
        "'IF": [
          -1,
          346
        ],
        "'FOR": [
          -1,
          346
        ],
        "'RETURN": [
          -1,
          346
        ],
        "'VAR": [
          -1,
          346
        ],
        "'ATCHECK": [
          -1,
          346
        ],
        "'ASSERTEQUALS": [
          -1,
          346
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          346
        ],
        "'ASSERTTRUE": [
          -1,
          346
        ],
        "'ASSERTFALSE": [
          -1,
          346
        ],
        "'ASSERTSATISFIES": [
          -1,
          346
        ],
        "'ASSERTRAISES": [
          -1,
          346
        ],
        "'SWITCH": [
          -1,
          346
        ],
        "'YIELD": [
          -1,
          346
        ],
        "'DASH": [
          -1,
          346
        ],
        "'BANG": [
          -1,
          346
        ],
        "'LBRACK": [
          -1,
          346
        ],
        "'NUMBER": [
          -1,
          346
        ],
        "'TRUE": [
          -1,
          346
        ],
        "'FALSE": [
          -1,
          346
        ],
        "'NULL": [
          -1,
          346
        ],
        "'PARENAFTERBRACE": [
          -1,
          346
        ],
        "'TABLE": [
          -1,
          346
        ],
        "'ASK": [
          -1,
          346
        ],
        "'NEW": [
          -1,
          346
        ]
      },
      {
        "'SEMI": [
          318
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          319
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          320
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          321
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          322
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          323
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          324
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'SEMI": [
          325
        ],
        "yield-stmt_I2?": [
          326
        ],
        "yield-stmt_I2": [
          327
        ],
        "'NAME": [
          -1,
          348,
          350
        ],
        "'PARENNOSPACE": [
          -1,
          348,
          350
        ],
        "'STRING": [
          -1,
          348,
          350
        ],
        "'LBRACE": [
          -1,
          348,
          350
        ],
        "'RBRACE": [
          -1,
          348,
          350
        ],
        "'SPY": [
          -1,
          348,
          350
        ],
        "'PARENSPACE": [
          -1,
          348,
          350
        ],
        "'INT": [
          -1,
          348,
          350
        ],
        "'LONG": [
          -1,
          348,
          350
        ],
        "'DOUBLE": [
          -1,
          348,
          350
        ],
        "'FLOAT": [
          -1,
          348,
          350
        ],
        "'BOOLEAN": [
          -1,
          348,
          350
        ],
        "'VOID": [
          -1,
          348,
          350
        ],
        "'DATA": [
          -1,
          348,
          350
        ],
        "'IF": [
          -1,
          348,
          350
        ],
        "'FOR": [
          -1,
          348,
          350
        ],
        "'RETURN": [
          -1,
          348,
          350
        ],
        "'VAR": [
          -1,
          348,
          350
        ],
        "'ATCHECK": [
          -1,
          348,
          350
        ],
        "'ASSERTEQUALS": [
          -1,
          348,
          350
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          348,
          350
        ],
        "'ASSERTTRUE": [
          -1,
          348,
          350
        ],
        "'ASSERTFALSE": [
          -1,
          348,
          350
        ],
        "'ASSERTSATISFIES": [
          -1,
          348,
          350
        ],
        "'ASSERTRAISES": [
          -1,
          348,
          350
        ],
        "'SWITCH": [
          -1,
          348,
          350
        ],
        "'CASE": [
          -1,
          348,
          350
        ],
        "'DEFAULT": [
          -1,
          348,
          350
        ],
        "'YIELD": [
          -1,
          348,
          350
        ],
        "'DASH": [
          -1,
          348,
          350
        ],
        "'BANG": [
          -1,
          348,
          350
        ],
        "'LBRACK": [
          -1,
          348,
          350
        ],
        "'NUMBER": [
          -1,
          348,
          350
        ],
        "'TRUE": [
          -1,
          348,
          350
        ],
        "'FALSE": [
          -1,
          348,
          350
        ],
        "'NULL": [
          -1,
          348,
          350
        ],
        "'PARENAFTERBRACE": [
          -1,
          348,
          350
        ],
        "'TABLE": [
          -1,
          348,
          350
        ],
        "'ASK": [
          -1,
          348,
          350
        ],
        "'NEW": [
          -1,
          348,
          350
        ]
      },
      {
        "'LBRACE": [
          328
        ]
      },
      {
        "switch-expr_I5*": [
          329
        ],
        "'RBRACE": [
          -1,
          352
        ],
        "'CASE": [
          -1,
          352
        ],
        "'DEFAULT": [
          -1,
          352
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          330
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RPAREN": [
          -1,
          354
        ],
        "'COMMA": [
          -1,
          354
        ]
      },
      {
        "'COMMA": [
          331
        ],
        "construct-expr_A0_I3_I1": [
          332
        ],
        "'RBRACK": [
          -1,
          356
        ]
      },
      {
        "$": [
          -1,
          358
        ],
        "'NAME": [
          -1,
          358
        ],
        "'SEMI": [
          -1,
          358
        ],
        "'PARENNOSPACE": [
          -1,
          358
        ],
        "'STRING": [
          -1,
          358
        ],
        "'RPAREN": [
          -1,
          358
        ],
        "'LBRACE": [
          -1,
          358
        ],
        "'RBRACE": [
          -1,
          358
        ],
        "'SPY": [
          -1,
          358
        ],
        "'PARENSPACE": [
          -1,
          358
        ],
        "'COMMA": [
          -1,
          358
        ],
        "'INT": [
          -1,
          358
        ],
        "'LONG": [
          -1,
          358
        ],
        "'DOUBLE": [
          -1,
          358
        ],
        "'FLOAT": [
          -1,
          358
        ],
        "'BOOLEAN": [
          -1,
          358
        ],
        "'VOID": [
          -1,
          358
        ],
        "'LT": [
          -1,
          358
        ],
        "'GT": [
          -1,
          358
        ],
        "'THINARROW": [
          -1,
          358
        ],
        "'DATA": [
          -1,
          358
        ],
        "'IF": [
          -1,
          358
        ],
        "'FOR": [
          -1,
          358
        ],
        "'RETURN": [
          -1,
          358
        ],
        "'VAR": [
          -1,
          358
        ],
        "'ATCHECK": [
          -1,
          358
        ],
        "'ASSERTEQUALS": [
          -1,
          358
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          358
        ],
        "'ASSERTTRUE": [
          -1,
          358
        ],
        "'ASSERTFALSE": [
          -1,
          358
        ],
        "'ASSERTSATISFIES": [
          -1,
          358
        ],
        "'ASSERTRAISES": [
          -1,
          358
        ],
        "'IS": [
          -1,
          358
        ],
        "'ISNOT": [
          -1,
          358
        ],
        "'SATISFIES": [
          -1,
          358
        ],
        "'RAISES": [
          -1,
          358
        ],
        "'SWITCH": [
          -1,
          358
        ],
        "'CASE": [
          -1,
          358
        ],
        "'DEFAULT": [
          -1,
          358
        ],
        "'YIELD": [
          -1,
          358
        ],
        "'PLUS": [
          -1,
          358
        ],
        "'DASH": [
          -1,
          358
        ],
        "'TIMES": [
          -1,
          358
        ],
        "'SLASH": [
          -1,
          358
        ],
        "'PERCENT": [
          -1,
          358
        ],
        "'EQUALEQUAL": [
          -1,
          358
        ],
        "'NEQ": [
          -1,
          358
        ],
        "'LEQ": [
          -1,
          358
        ],
        "'GEQ": [
          -1,
          358
        ],
        "'AND": [
          -1,
          358
        ],
        "'OR": [
          -1,
          358
        ],
        "'BANG": [
          -1,
          358
        ],
        "'DOT": [
          -1,
          358
        ],
        "'LBRACK": [
          -1,
          358
        ],
        "'RBRACK": [
          -1,
          358
        ],
        "'NUMBER": [
          -1,
          358
        ],
        "'TRUE": [
          -1,
          358
        ],
        "'FALSE": [
          -1,
          358
        ],
        "'NULL": [
          -1,
          358
        ],
        "'PARENAFTERBRACE": [
          -1,
          358
        ],
        "'TABLE": [
          -1,
          358
        ],
        "'ASK": [
          -1,
          358
        ],
        "'NEW": [
          -1,
          358
        ]
      },
      {
        "'COLON": [
          333
        ]
      },
      {
        "table-expr_I5*": [
          334
        ],
        "'RBRACE": [
          -1,
          360
        ],
        "'ROW": [
          -1,
          360
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          159
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "table-header": [
          335
        ]
      },
      {
        "'SEMI": [
          -1,
          362
        ],
        "'COMMA": [
          -1,
          362
        ]
      },
      {
        "'SEMI": [
          -1,
          364
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'RBRACE": [
          336
        ],
        "'PARENSPACE": [
          95
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "binop-expr": [
          161
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "ask-branch": [
          337
        ],
        "ask-expr_A0_I4": [
          338
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          95
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "binop-expr": [
          161
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "ask-branch": [
          339
        ],
        "otherwise-branch": [
          340
        ],
        "ask-expr_A1_I4": [
          341
        ],
        "'OTHERWISE": [
          342
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'COMMA": [
          343
        ],
        "new-expr_I3_I1": [
          344
        ],
        "'RPAREN": [
          -1,
          366
        ]
      },
      {
        "$": [
          -1,
          368
        ],
        "'NAME": [
          -1,
          368
        ],
        "'SEMI": [
          -1,
          368
        ],
        "'PARENNOSPACE": [
          -1,
          368
        ],
        "'STRING": [
          -1,
          368
        ],
        "'RPAREN": [
          -1,
          368
        ],
        "'LBRACE": [
          -1,
          368
        ],
        "'RBRACE": [
          -1,
          368
        ],
        "'SPY": [
          -1,
          368
        ],
        "'PARENSPACE": [
          -1,
          368
        ],
        "'COMMA": [
          -1,
          368
        ],
        "'INT": [
          -1,
          368
        ],
        "'LONG": [
          -1,
          368
        ],
        "'DOUBLE": [
          -1,
          368
        ],
        "'FLOAT": [
          -1,
          368
        ],
        "'BOOLEAN": [
          -1,
          368
        ],
        "'VOID": [
          -1,
          368
        ],
        "'LT": [
          -1,
          368
        ],
        "'GT": [
          -1,
          368
        ],
        "'THINARROW": [
          -1,
          368
        ],
        "'DATA": [
          -1,
          368
        ],
        "'IF": [
          -1,
          368
        ],
        "'FOR": [
          -1,
          368
        ],
        "'RETURN": [
          -1,
          368
        ],
        "'VAR": [
          -1,
          368
        ],
        "'ATCHECK": [
          -1,
          368
        ],
        "'ASSERTEQUALS": [
          -1,
          368
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          368
        ],
        "'ASSERTTRUE": [
          -1,
          368
        ],
        "'ASSERTFALSE": [
          -1,
          368
        ],
        "'ASSERTSATISFIES": [
          -1,
          368
        ],
        "'ASSERTRAISES": [
          -1,
          368
        ],
        "'IS": [
          -1,
          368
        ],
        "'ISNOT": [
          -1,
          368
        ],
        "'SATISFIES": [
          -1,
          368
        ],
        "'RAISES": [
          -1,
          368
        ],
        "'SWITCH": [
          -1,
          368
        ],
        "'CASE": [
          -1,
          368
        ],
        "'DEFAULT": [
          -1,
          368
        ],
        "'YIELD": [
          -1,
          368
        ],
        "'PLUS": [
          -1,
          368
        ],
        "'DASH": [
          -1,
          368
        ],
        "'TIMES": [
          -1,
          368
        ],
        "'SLASH": [
          -1,
          368
        ],
        "'PERCENT": [
          -1,
          368
        ],
        "'EQUALEQUAL": [
          -1,
          368
        ],
        "'NEQ": [
          -1,
          368
        ],
        "'LEQ": [
          -1,
          368
        ],
        "'GEQ": [
          -1,
          368
        ],
        "'AND": [
          -1,
          368
        ],
        "'OR": [
          -1,
          368
        ],
        "'BANG": [
          -1,
          368
        ],
        "'DOT": [
          -1,
          368
        ],
        "'LBRACK": [
          -1,
          368
        ],
        "'RBRACK": [
          -1,
          368
        ],
        "'NUMBER": [
          -1,
          368
        ],
        "'TRUE": [
          -1,
          368
        ],
        "'FALSE": [
          -1,
          368
        ],
        "'NULL": [
          -1,
          368
        ],
        "'PARENAFTERBRACE": [
          -1,
          368
        ],
        "'TABLE": [
          -1,
          368
        ],
        "'ASK": [
          -1,
          368
        ],
        "'NEW": [
          -1,
          368
        ]
      },
      {
        "$": [
          -1,
          370
        ],
        "'IMPORT": [
          -1,
          370
        ],
        "'NAME": [
          -1,
          370
        ],
        "'PARENNOSPACE": [
          -1,
          370
        ],
        "'STRING": [
          -1,
          370
        ],
        "'INCLUDE": [
          -1,
          370
        ],
        "'LBRACE": [
          -1,
          370
        ],
        "'PARENSPACE": [
          -1,
          370
        ],
        "'INT": [
          -1,
          370
        ],
        "'LONG": [
          -1,
          370
        ],
        "'DOUBLE": [
          -1,
          370
        ],
        "'FLOAT": [
          -1,
          370
        ],
        "'BOOLEAN": [
          -1,
          370
        ],
        "'VOID": [
          -1,
          370
        ],
        "'DATA": [
          -1,
          370
        ],
        "'VAR": [
          -1,
          370
        ],
        "'ATCHECK": [
          -1,
          370
        ],
        "'SWITCH": [
          -1,
          370
        ],
        "'DASH": [
          -1,
          370
        ],
        "'BANG": [
          -1,
          370
        ],
        "'LBRACK": [
          -1,
          370
        ],
        "'NUMBER": [
          -1,
          370
        ],
        "'TRUE": [
          -1,
          370
        ],
        "'FALSE": [
          -1,
          370
        ],
        "'NULL": [
          -1,
          370
        ],
        "'PARENAFTERBRACE": [
          -1,
          370
        ],
        "'TABLE": [
          -1,
          370
        ],
        "'ASK": [
          -1,
          370
        ],
        "'NEW": [
          -1,
          370
        ]
      },
      {
        "'NAME": [
          345
        ]
      },
      {
        "$": [
          -1,
          372
        ],
        "'IMPORT": [
          -1,
          372
        ],
        "'NAME": [
          -1,
          372
        ],
        "'PARENNOSPACE": [
          -1,
          372
        ],
        "'STRING": [
          -1,
          372
        ],
        "'INCLUDE": [
          -1,
          372
        ],
        "'LBRACE": [
          -1,
          372
        ],
        "'PARENSPACE": [
          -1,
          372
        ],
        "'INT": [
          -1,
          372
        ],
        "'LONG": [
          -1,
          372
        ],
        "'DOUBLE": [
          -1,
          372
        ],
        "'FLOAT": [
          -1,
          372
        ],
        "'BOOLEAN": [
          -1,
          372
        ],
        "'VOID": [
          -1,
          372
        ],
        "'DATA": [
          -1,
          372
        ],
        "'VAR": [
          -1,
          372
        ],
        "'ATCHECK": [
          -1,
          372
        ],
        "'SWITCH": [
          -1,
          372
        ],
        "'DASH": [
          -1,
          372
        ],
        "'BANG": [
          -1,
          372
        ],
        "'LBRACK": [
          -1,
          372
        ],
        "'NUMBER": [
          -1,
          372
        ],
        "'TRUE": [
          -1,
          372
        ],
        "'FALSE": [
          -1,
          372
        ],
        "'NULL": [
          -1,
          372
        ],
        "'PARENAFTERBRACE": [
          -1,
          372
        ],
        "'TABLE": [
          -1,
          372
        ],
        "'ASK": [
          -1,
          372
        ],
        "'NEW": [
          -1,
          372
        ]
      },
      {
        "'COMMA": [
          -1,
          374
        ],
        "'GT": [
          -1,
          374
        ]
      },
      {
        "fun-decl_I6?": [
          346
        ],
        "fun-decl_I6": [
          347
        ],
        "where-clause": [
          348
        ],
        "'WHERE": [
          349
        ],
        "$": [
          -1,
          376,
          378
        ],
        "'NAME": [
          -1,
          376,
          378
        ],
        "'PARENNOSPACE": [
          -1,
          376,
          378
        ],
        "'STRING": [
          -1,
          376,
          378
        ],
        "'LBRACE": [
          -1,
          376,
          378
        ],
        "'RBRACE": [
          -1,
          376,
          378
        ],
        "'SPY": [
          -1,
          376,
          378
        ],
        "'PARENSPACE": [
          -1,
          376,
          378
        ],
        "'INT": [
          -1,
          376,
          378
        ],
        "'LONG": [
          -1,
          376,
          378
        ],
        "'DOUBLE": [
          -1,
          376,
          378
        ],
        "'FLOAT": [
          -1,
          376,
          378
        ],
        "'BOOLEAN": [
          -1,
          376,
          378
        ],
        "'VOID": [
          -1,
          376,
          378
        ],
        "'DATA": [
          -1,
          376,
          378
        ],
        "'IF": [
          -1,
          376,
          378
        ],
        "'FOR": [
          -1,
          376,
          378
        ],
        "'RETURN": [
          -1,
          376,
          378
        ],
        "'VAR": [
          -1,
          376,
          378
        ],
        "'ATCHECK": [
          -1,
          376,
          378
        ],
        "'ASSERTEQUALS": [
          -1,
          376,
          378
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          376,
          378
        ],
        "'ASSERTTRUE": [
          -1,
          376,
          378
        ],
        "'ASSERTFALSE": [
          -1,
          376,
          378
        ],
        "'ASSERTSATISFIES": [
          -1,
          376,
          378
        ],
        "'ASSERTRAISES": [
          -1,
          376,
          378
        ],
        "'SWITCH": [
          -1,
          376,
          378
        ],
        "'YIELD": [
          -1,
          376,
          378
        ],
        "'DASH": [
          -1,
          376,
          378
        ],
        "'BANG": [
          -1,
          376,
          378
        ],
        "'LBRACK": [
          -1,
          376,
          378
        ],
        "'NUMBER": [
          -1,
          376,
          378
        ],
        "'TRUE": [
          -1,
          376,
          378
        ],
        "'FALSE": [
          -1,
          376,
          378
        ],
        "'NULL": [
          -1,
          376,
          378
        ],
        "'PARENAFTERBRACE": [
          -1,
          376,
          378
        ],
        "'TABLE": [
          -1,
          376,
          378
        ],
        "'ASK": [
          -1,
          376,
          378
        ],
        "'NEW": [
          -1,
          376,
          378
        ]
      },
      {
        "block_I1*": [
          350
        ],
        "'NAME": [
          -1,
          380
        ],
        "'PARENNOSPACE": [
          -1,
          380
        ],
        "'STRING": [
          -1,
          380
        ],
        "'LBRACE": [
          -1,
          380
        ],
        "'RBRACE": [
          -1,
          380
        ],
        "'SPY": [
          -1,
          380
        ],
        "'PARENSPACE": [
          -1,
          380
        ],
        "'INT": [
          -1,
          380
        ],
        "'LONG": [
          -1,
          380
        ],
        "'DOUBLE": [
          -1,
          380
        ],
        "'FLOAT": [
          -1,
          380
        ],
        "'BOOLEAN": [
          -1,
          380
        ],
        "'VOID": [
          -1,
          380
        ],
        "'DATA": [
          -1,
          380
        ],
        "'IF": [
          -1,
          380
        ],
        "'FOR": [
          -1,
          380
        ],
        "'RETURN": [
          -1,
          380
        ],
        "'VAR": [
          -1,
          380
        ],
        "'ATCHECK": [
          -1,
          380
        ],
        "'SWITCH": [
          -1,
          380
        ],
        "'YIELD": [
          -1,
          380
        ],
        "'DASH": [
          -1,
          380
        ],
        "'BANG": [
          -1,
          380
        ],
        "'LBRACK": [
          -1,
          380
        ],
        "'NUMBER": [
          -1,
          380
        ],
        "'TRUE": [
          -1,
          380
        ],
        "'FALSE": [
          -1,
          380
        ],
        "'NULL": [
          -1,
          380
        ],
        "'PARENAFTERBRACE": [
          -1,
          380
        ],
        "'TABLE": [
          -1,
          380
        ],
        "'ASK": [
          -1,
          380
        ],
        "'NEW": [
          -1,
          380
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          185
        ],
        "param": [
          351
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ]
      },
      {
        "'RPAREN": [
          -1,
          382
        ],
        "'COMMA": [
          -1,
          382
        ]
      },
      {
        "'NAME": [
          352
        ]
      },
      {
        "'RPAREN": [
          353
        ]
      },
      {
        "'RPAREN": [
          -1,
          384
        ]
      },
      {
        "variant-decl_A0_I2_I1*": [
          354
        ],
        "'RPAREN": [
          -1,
          386,
          388
        ],
        "'COMMA": [
          -1,
          388
        ]
      },
      {
        "'NAME": [
          190
        ],
        "variant-decl": [
          355
        ],
        "'RBRACE": [
          -1,
          390
        ]
      },
      {
        "'RBRACE": [
          356
        ]
      },
      {
        "'SEMI": [
          -1,
          392
        ],
        "'RBRACE": [
          -1,
          392
        ]
      },
      {
        "'RBRACE": [
          -1,
          394
        ]
      },
      {
        "$": [
          -1,
          396
        ],
        "'NAME": [
          -1,
          396
        ],
        "'PARENNOSPACE": [
          -1,
          396
        ],
        "'STRING": [
          -1,
          396
        ],
        "'LBRACE": [
          -1,
          396
        ],
        "'RBRACE": [
          -1,
          396
        ],
        "'SPY": [
          -1,
          396
        ],
        "'PARENSPACE": [
          -1,
          396
        ],
        "'INT": [
          -1,
          396
        ],
        "'LONG": [
          -1,
          396
        ],
        "'DOUBLE": [
          -1,
          396
        ],
        "'FLOAT": [
          -1,
          396
        ],
        "'BOOLEAN": [
          -1,
          396
        ],
        "'VOID": [
          -1,
          396
        ],
        "'DATA": [
          -1,
          396
        ],
        "'IF": [
          -1,
          396
        ],
        "'FOR": [
          -1,
          396
        ],
        "'RETURN": [
          -1,
          396
        ],
        "'VAR": [
          -1,
          396
        ],
        "'ATCHECK": [
          -1,
          396
        ],
        "'ASSERTEQUALS": [
          -1,
          396
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          396
        ],
        "'ASSERTTRUE": [
          -1,
          396
        ],
        "'ASSERTFALSE": [
          -1,
          396
        ],
        "'ASSERTSATISFIES": [
          -1,
          396
        ],
        "'ASSERTRAISES": [
          -1,
          396
        ],
        "'SWITCH": [
          -1,
          396
        ],
        "'YIELD": [
          -1,
          396
        ],
        "'DASH": [
          -1,
          396
        ],
        "'BANG": [
          -1,
          396
        ],
        "'LBRACK": [
          -1,
          396
        ],
        "'NUMBER": [
          -1,
          396
        ],
        "'TRUE": [
          -1,
          396
        ],
        "'FALSE": [
          -1,
          396
        ],
        "'NULL": [
          -1,
          396
        ],
        "'PARENAFTERBRACE": [
          -1,
          396
        ],
        "'TABLE": [
          -1,
          396
        ],
        "'ASK": [
          -1,
          396
        ],
        "'NEW": [
          -1,
          396
        ]
      },
      {
        "$": [
          -1,
          398
        ],
        "'NAME": [
          -1,
          398
        ],
        "'PARENNOSPACE": [
          -1,
          398
        ],
        "'STRING": [
          -1,
          398
        ],
        "'LBRACE": [
          -1,
          398
        ],
        "'RBRACE": [
          -1,
          398
        ],
        "'SPY": [
          -1,
          398
        ],
        "'PARENSPACE": [
          -1,
          398
        ],
        "'INT": [
          -1,
          398
        ],
        "'LONG": [
          -1,
          398
        ],
        "'DOUBLE": [
          -1,
          398
        ],
        "'FLOAT": [
          -1,
          398
        ],
        "'BOOLEAN": [
          -1,
          398
        ],
        "'VOID": [
          -1,
          398
        ],
        "'DATA": [
          -1,
          398
        ],
        "'IF": [
          -1,
          398
        ],
        "'FOR": [
          -1,
          398
        ],
        "'RETURN": [
          -1,
          398
        ],
        "'VAR": [
          -1,
          398
        ],
        "'ATCHECK": [
          -1,
          398
        ],
        "'ASSERTEQUALS": [
          -1,
          398
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          398
        ],
        "'ASSERTTRUE": [
          -1,
          398
        ],
        "'ASSERTFALSE": [
          -1,
          398
        ],
        "'ASSERTSATISFIES": [
          -1,
          398
        ],
        "'ASSERTRAISES": [
          -1,
          398
        ],
        "'SWITCH": [
          -1,
          398
        ],
        "'YIELD": [
          -1,
          398
        ],
        "'DASH": [
          -1,
          398
        ],
        "'BANG": [
          -1,
          398
        ],
        "'LBRACK": [
          -1,
          398
        ],
        "'NUMBER": [
          -1,
          398
        ],
        "'TRUE": [
          -1,
          398
        ],
        "'FALSE": [
          -1,
          398
        ],
        "'NULL": [
          -1,
          398
        ],
        "'PARENAFTERBRACE": [
          -1,
          398
        ],
        "'TABLE": [
          -1,
          398
        ],
        "'ASK": [
          -1,
          398
        ],
        "'NEW": [
          -1,
          398
        ]
      },
      {
        "$": [
          -1,
          400
        ],
        "'NAME": [
          -1,
          400
        ],
        "'PARENNOSPACE": [
          -1,
          400
        ],
        "'STRING": [
          -1,
          400
        ],
        "'LBRACE": [
          -1,
          400
        ],
        "'RBRACE": [
          -1,
          400
        ],
        "'SPY": [
          -1,
          400
        ],
        "'PARENSPACE": [
          -1,
          400
        ],
        "'INT": [
          -1,
          400
        ],
        "'LONG": [
          -1,
          400
        ],
        "'DOUBLE": [
          -1,
          400
        ],
        "'FLOAT": [
          -1,
          400
        ],
        "'BOOLEAN": [
          -1,
          400
        ],
        "'VOID": [
          -1,
          400
        ],
        "'DATA": [
          -1,
          400
        ],
        "'IF": [
          -1,
          400
        ],
        "'FOR": [
          -1,
          400
        ],
        "'RETURN": [
          -1,
          400
        ],
        "'VAR": [
          -1,
          400
        ],
        "'ATCHECK": [
          -1,
          400
        ],
        "'ASSERTEQUALS": [
          -1,
          400
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          400
        ],
        "'ASSERTTRUE": [
          -1,
          400
        ],
        "'ASSERTFALSE": [
          -1,
          400
        ],
        "'ASSERTSATISFIES": [
          -1,
          400
        ],
        "'ASSERTRAISES": [
          -1,
          400
        ],
        "'SWITCH": [
          -1,
          400
        ],
        "'YIELD": [
          -1,
          400
        ],
        "'DASH": [
          -1,
          400
        ],
        "'BANG": [
          -1,
          400
        ],
        "'LBRACK": [
          -1,
          400
        ],
        "'NUMBER": [
          -1,
          400
        ],
        "'TRUE": [
          -1,
          400
        ],
        "'FALSE": [
          -1,
          400
        ],
        "'NULL": [
          -1,
          400
        ],
        "'PARENAFTERBRACE": [
          -1,
          400
        ],
        "'TABLE": [
          -1,
          400
        ],
        "'ASK": [
          -1,
          400
        ],
        "'NEW": [
          -1,
          400
        ]
      },
      {
        "spy-stmt_I3*": [
          357
        ],
        "'RPAREN": [
          -1,
          402
        ],
        "'COMMA": [
          -1,
          402
        ]
      },
      {
        "'RPAREN": [
          358
        ]
      },
      {
        "'SEMI": [
          359
        ],
        "assert-stmt_A6_I3?": [
          360
        ],
        "assert-stmt_A6_I3": [
          361
        ],
        "'NAME": [
          -1,
          404,
          406
        ],
        "'PARENNOSPACE": [
          -1,
          404,
          406
        ],
        "'STRING": [
          -1,
          404,
          406
        ],
        "'LBRACE": [
          -1,
          404,
          406
        ],
        "'RBRACE": [
          -1,
          404,
          406
        ],
        "'SPY": [
          -1,
          404,
          406
        ],
        "'PARENSPACE": [
          -1,
          404,
          406
        ],
        "'INT": [
          -1,
          404,
          406
        ],
        "'LONG": [
          -1,
          404,
          406
        ],
        "'DOUBLE": [
          -1,
          404,
          406
        ],
        "'FLOAT": [
          -1,
          404,
          406
        ],
        "'BOOLEAN": [
          -1,
          404,
          406
        ],
        "'VOID": [
          -1,
          404,
          406
        ],
        "'DATA": [
          -1,
          404,
          406
        ],
        "'IF": [
          -1,
          404,
          406
        ],
        "'FOR": [
          -1,
          404,
          406
        ],
        "'RETURN": [
          -1,
          404,
          406
        ],
        "'VAR": [
          -1,
          404,
          406
        ],
        "'ATCHECK": [
          -1,
          404,
          406
        ],
        "'ASSERTEQUALS": [
          -1,
          404,
          406
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          404,
          406
        ],
        "'ASSERTTRUE": [
          -1,
          404,
          406
        ],
        "'ASSERTFALSE": [
          -1,
          404,
          406
        ],
        "'ASSERTSATISFIES": [
          -1,
          404,
          406
        ],
        "'ASSERTRAISES": [
          -1,
          404,
          406
        ],
        "'SWITCH": [
          -1,
          404,
          406
        ],
        "'YIELD": [
          -1,
          404,
          406
        ],
        "'DASH": [
          -1,
          404,
          406
        ],
        "'BANG": [
          -1,
          404,
          406
        ],
        "'LBRACK": [
          -1,
          404,
          406
        ],
        "'NUMBER": [
          -1,
          404,
          406
        ],
        "'TRUE": [
          -1,
          404,
          406
        ],
        "'FALSE": [
          -1,
          404,
          406
        ],
        "'NULL": [
          -1,
          404,
          406
        ],
        "'PARENAFTERBRACE": [
          -1,
          404,
          406
        ],
        "'TABLE": [
          -1,
          404,
          406
        ],
        "'ASK": [
          -1,
          404,
          406
        ],
        "'NEW": [
          -1,
          404,
          406
        ]
      },
      {
        "'SEMI": [
          362
        ],
        "assert-stmt_A7_I3?": [
          363
        ],
        "assert-stmt_A7_I3": [
          364
        ],
        "'NAME": [
          -1,
          408,
          410
        ],
        "'PARENNOSPACE": [
          -1,
          408,
          410
        ],
        "'STRING": [
          -1,
          408,
          410
        ],
        "'LBRACE": [
          -1,
          408,
          410
        ],
        "'RBRACE": [
          -1,
          408,
          410
        ],
        "'SPY": [
          -1,
          408,
          410
        ],
        "'PARENSPACE": [
          -1,
          408,
          410
        ],
        "'INT": [
          -1,
          408,
          410
        ],
        "'LONG": [
          -1,
          408,
          410
        ],
        "'DOUBLE": [
          -1,
          408,
          410
        ],
        "'FLOAT": [
          -1,
          408,
          410
        ],
        "'BOOLEAN": [
          -1,
          408,
          410
        ],
        "'VOID": [
          -1,
          408,
          410
        ],
        "'DATA": [
          -1,
          408,
          410
        ],
        "'IF": [
          -1,
          408,
          410
        ],
        "'FOR": [
          -1,
          408,
          410
        ],
        "'RETURN": [
          -1,
          408,
          410
        ],
        "'VAR": [
          -1,
          408,
          410
        ],
        "'ATCHECK": [
          -1,
          408,
          410
        ],
        "'ASSERTEQUALS": [
          -1,
          408,
          410
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          408,
          410
        ],
        "'ASSERTTRUE": [
          -1,
          408,
          410
        ],
        "'ASSERTFALSE": [
          -1,
          408,
          410
        ],
        "'ASSERTSATISFIES": [
          -1,
          408,
          410
        ],
        "'ASSERTRAISES": [
          -1,
          408,
          410
        ],
        "'SWITCH": [
          -1,
          408,
          410
        ],
        "'YIELD": [
          -1,
          408,
          410
        ],
        "'DASH": [
          -1,
          408,
          410
        ],
        "'BANG": [
          -1,
          408,
          410
        ],
        "'LBRACK": [
          -1,
          408,
          410
        ],
        "'NUMBER": [
          -1,
          408,
          410
        ],
        "'TRUE": [
          -1,
          408,
          410
        ],
        "'FALSE": [
          -1,
          408,
          410
        ],
        "'NULL": [
          -1,
          408,
          410
        ],
        "'PARENAFTERBRACE": [
          -1,
          408,
          410
        ],
        "'TABLE": [
          -1,
          408,
          410
        ],
        "'ASK": [
          -1,
          408,
          410
        ],
        "'NEW": [
          -1,
          408,
          410
        ]
      },
      {
        "'SEMI": [
          365
        ],
        "assert-stmt_A8_I3?": [
          366
        ],
        "assert-stmt_A8_I3": [
          367
        ],
        "'NAME": [
          -1,
          412,
          414
        ],
        "'PARENNOSPACE": [
          -1,
          412,
          414
        ],
        "'STRING": [
          -1,
          412,
          414
        ],
        "'LBRACE": [
          -1,
          412,
          414
        ],
        "'RBRACE": [
          -1,
          412,
          414
        ],
        "'SPY": [
          -1,
          412,
          414
        ],
        "'PARENSPACE": [
          -1,
          412,
          414
        ],
        "'INT": [
          -1,
          412,
          414
        ],
        "'LONG": [
          -1,
          412,
          414
        ],
        "'DOUBLE": [
          -1,
          412,
          414
        ],
        "'FLOAT": [
          -1,
          412,
          414
        ],
        "'BOOLEAN": [
          -1,
          412,
          414
        ],
        "'VOID": [
          -1,
          412,
          414
        ],
        "'DATA": [
          -1,
          412,
          414
        ],
        "'IF": [
          -1,
          412,
          414
        ],
        "'FOR": [
          -1,
          412,
          414
        ],
        "'RETURN": [
          -1,
          412,
          414
        ],
        "'VAR": [
          -1,
          412,
          414
        ],
        "'ATCHECK": [
          -1,
          412,
          414
        ],
        "'ASSERTEQUALS": [
          -1,
          412,
          414
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          412,
          414
        ],
        "'ASSERTTRUE": [
          -1,
          412,
          414
        ],
        "'ASSERTFALSE": [
          -1,
          412,
          414
        ],
        "'ASSERTSATISFIES": [
          -1,
          412,
          414
        ],
        "'ASSERTRAISES": [
          -1,
          412,
          414
        ],
        "'SWITCH": [
          -1,
          412,
          414
        ],
        "'YIELD": [
          -1,
          412,
          414
        ],
        "'DASH": [
          -1,
          412,
          414
        ],
        "'BANG": [
          -1,
          412,
          414
        ],
        "'LBRACK": [
          -1,
          412,
          414
        ],
        "'NUMBER": [
          -1,
          412,
          414
        ],
        "'TRUE": [
          -1,
          412,
          414
        ],
        "'FALSE": [
          -1,
          412,
          414
        ],
        "'NULL": [
          -1,
          412,
          414
        ],
        "'PARENAFTERBRACE": [
          -1,
          412,
          414
        ],
        "'TABLE": [
          -1,
          412,
          414
        ],
        "'ASK": [
          -1,
          412,
          414
        ],
        "'NEW": [
          -1,
          412,
          414
        ]
      },
      {
        "'SEMI": [
          368
        ],
        "assert-stmt_A9_I3?": [
          369
        ],
        "assert-stmt_A9_I3": [
          370
        ],
        "'NAME": [
          -1,
          416,
          418
        ],
        "'PARENNOSPACE": [
          -1,
          416,
          418
        ],
        "'STRING": [
          -1,
          416,
          418
        ],
        "'LBRACE": [
          -1,
          416,
          418
        ],
        "'RBRACE": [
          -1,
          416,
          418
        ],
        "'SPY": [
          -1,
          416,
          418
        ],
        "'PARENSPACE": [
          -1,
          416,
          418
        ],
        "'INT": [
          -1,
          416,
          418
        ],
        "'LONG": [
          -1,
          416,
          418
        ],
        "'DOUBLE": [
          -1,
          416,
          418
        ],
        "'FLOAT": [
          -1,
          416,
          418
        ],
        "'BOOLEAN": [
          -1,
          416,
          418
        ],
        "'VOID": [
          -1,
          416,
          418
        ],
        "'DATA": [
          -1,
          416,
          418
        ],
        "'IF": [
          -1,
          416,
          418
        ],
        "'FOR": [
          -1,
          416,
          418
        ],
        "'RETURN": [
          -1,
          416,
          418
        ],
        "'VAR": [
          -1,
          416,
          418
        ],
        "'ATCHECK": [
          -1,
          416,
          418
        ],
        "'ASSERTEQUALS": [
          -1,
          416,
          418
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          416,
          418
        ],
        "'ASSERTTRUE": [
          -1,
          416,
          418
        ],
        "'ASSERTFALSE": [
          -1,
          416,
          418
        ],
        "'ASSERTSATISFIES": [
          -1,
          416,
          418
        ],
        "'ASSERTRAISES": [
          -1,
          416,
          418
        ],
        "'SWITCH": [
          -1,
          416,
          418
        ],
        "'YIELD": [
          -1,
          416,
          418
        ],
        "'DASH": [
          -1,
          416,
          418
        ],
        "'BANG": [
          -1,
          416,
          418
        ],
        "'LBRACK": [
          -1,
          416,
          418
        ],
        "'NUMBER": [
          -1,
          416,
          418
        ],
        "'TRUE": [
          -1,
          416,
          418
        ],
        "'FALSE": [
          -1,
          416,
          418
        ],
        "'NULL": [
          -1,
          416,
          418
        ],
        "'PARENAFTERBRACE": [
          -1,
          416,
          418
        ],
        "'TABLE": [
          -1,
          416,
          418
        ],
        "'ASK": [
          -1,
          416,
          418
        ],
        "'NEW": [
          -1,
          416,
          418
        ]
      },
      {
        "'NAME": [
          371
        ]
      },
      {
        "'NAME": [
          -1,
          420
        ],
        "'PARENNOSPACE": [
          -1,
          420
        ],
        "'STRING": [
          -1,
          420
        ],
        "'LBRACE": [
          -1,
          420
        ],
        "'RBRACE": [
          -1,
          420
        ],
        "'SPY": [
          -1,
          420
        ],
        "'PARENSPACE": [
          -1,
          420
        ],
        "'INT": [
          -1,
          420
        ],
        "'LONG": [
          -1,
          420
        ],
        "'DOUBLE": [
          -1,
          420
        ],
        "'FLOAT": [
          -1,
          420
        ],
        "'BOOLEAN": [
          -1,
          420
        ],
        "'VOID": [
          -1,
          420
        ],
        "'DATA": [
          -1,
          420
        ],
        "'IF": [
          -1,
          420
        ],
        "'FOR": [
          -1,
          420
        ],
        "'RETURN": [
          -1,
          420
        ],
        "'VAR": [
          -1,
          420
        ],
        "'ATCHECK": [
          -1,
          420
        ],
        "'ASSERTEQUALS": [
          -1,
          420
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          420
        ],
        "'ASSERTTRUE": [
          -1,
          420
        ],
        "'ASSERTFALSE": [
          -1,
          420
        ],
        "'ASSERTSATISFIES": [
          -1,
          420
        ],
        "'ASSERTRAISES": [
          -1,
          420
        ],
        "'SWITCH": [
          -1,
          420
        ],
        "'YIELD": [
          -1,
          420
        ],
        "'DASH": [
          -1,
          420
        ],
        "'BANG": [
          -1,
          420
        ],
        "'LBRACK": [
          -1,
          420
        ],
        "'NUMBER": [
          -1,
          420
        ],
        "'TRUE": [
          -1,
          420
        ],
        "'FALSE": [
          -1,
          420
        ],
        "'NULL": [
          -1,
          420
        ],
        "'PARENAFTERBRACE": [
          -1,
          420
        ],
        "'TABLE": [
          -1,
          420
        ],
        "'ASK": [
          -1,
          420
        ],
        "'NEW": [
          -1,
          420
        ]
      },
      {
        "'COMMA": [
          372
        ]
      },
      {
        "'COMMA": [
          373
        ]
      },
      {
        "'RPAREN": [
          374
        ]
      },
      {
        "'RPAREN": [
          375
        ]
      },
      {
        "'COMMA": [
          376
        ]
      },
      {
        "'COMMA": [
          377
        ]
      },
      {
        "'NAME": [
          -1,
          422
        ],
        "'PARENNOSPACE": [
          -1,
          422
        ],
        "'STRING": [
          -1,
          422
        ],
        "'LBRACE": [
          -1,
          422
        ],
        "'RBRACE": [
          -1,
          422
        ],
        "'SPY": [
          -1,
          422
        ],
        "'PARENSPACE": [
          -1,
          422
        ],
        "'INT": [
          -1,
          422
        ],
        "'LONG": [
          -1,
          422
        ],
        "'DOUBLE": [
          -1,
          422
        ],
        "'FLOAT": [
          -1,
          422
        ],
        "'BOOLEAN": [
          -1,
          422
        ],
        "'VOID": [
          -1,
          422
        ],
        "'DATA": [
          -1,
          422
        ],
        "'IF": [
          -1,
          422
        ],
        "'FOR": [
          -1,
          422
        ],
        "'RETURN": [
          -1,
          422
        ],
        "'VAR": [
          -1,
          422
        ],
        "'ATCHECK": [
          -1,
          422
        ],
        "'ASSERTEQUALS": [
          -1,
          422
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          422
        ],
        "'ASSERTTRUE": [
          -1,
          422
        ],
        "'ASSERTFALSE": [
          -1,
          422
        ],
        "'ASSERTSATISFIES": [
          -1,
          422
        ],
        "'ASSERTRAISES": [
          -1,
          422
        ],
        "'SWITCH": [
          -1,
          422
        ],
        "'CASE": [
          -1,
          422
        ],
        "'DEFAULT": [
          -1,
          422
        ],
        "'YIELD": [
          -1,
          422
        ],
        "'DASH": [
          -1,
          422
        ],
        "'BANG": [
          -1,
          422
        ],
        "'LBRACK": [
          -1,
          422
        ],
        "'NUMBER": [
          -1,
          422
        ],
        "'TRUE": [
          -1,
          422
        ],
        "'FALSE": [
          -1,
          422
        ],
        "'NULL": [
          -1,
          422
        ],
        "'PARENAFTERBRACE": [
          -1,
          422
        ],
        "'TABLE": [
          -1,
          422
        ],
        "'ASK": [
          -1,
          422
        ],
        "'NEW": [
          -1,
          422
        ]
      },
      {
        "'NAME": [
          -1,
          424
        ],
        "'PARENNOSPACE": [
          -1,
          424
        ],
        "'STRING": [
          -1,
          424
        ],
        "'LBRACE": [
          -1,
          424
        ],
        "'RBRACE": [
          -1,
          424
        ],
        "'SPY": [
          -1,
          424
        ],
        "'PARENSPACE": [
          -1,
          424
        ],
        "'INT": [
          -1,
          424
        ],
        "'LONG": [
          -1,
          424
        ],
        "'DOUBLE": [
          -1,
          424
        ],
        "'FLOAT": [
          -1,
          424
        ],
        "'BOOLEAN": [
          -1,
          424
        ],
        "'VOID": [
          -1,
          424
        ],
        "'DATA": [
          -1,
          424
        ],
        "'IF": [
          -1,
          424
        ],
        "'FOR": [
          -1,
          424
        ],
        "'RETURN": [
          -1,
          424
        ],
        "'VAR": [
          -1,
          424
        ],
        "'ATCHECK": [
          -1,
          424
        ],
        "'ASSERTEQUALS": [
          -1,
          424
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          424
        ],
        "'ASSERTTRUE": [
          -1,
          424
        ],
        "'ASSERTFALSE": [
          -1,
          424
        ],
        "'ASSERTSATISFIES": [
          -1,
          424
        ],
        "'ASSERTRAISES": [
          -1,
          424
        ],
        "'SWITCH": [
          -1,
          424
        ],
        "'CASE": [
          -1,
          424
        ],
        "'DEFAULT": [
          -1,
          424
        ],
        "'YIELD": [
          -1,
          424
        ],
        "'DASH": [
          -1,
          424
        ],
        "'BANG": [
          -1,
          424
        ],
        "'LBRACK": [
          -1,
          424
        ],
        "'NUMBER": [
          -1,
          424
        ],
        "'TRUE": [
          -1,
          424
        ],
        "'FALSE": [
          -1,
          424
        ],
        "'NULL": [
          -1,
          424
        ],
        "'PARENAFTERBRACE": [
          -1,
          424
        ],
        "'TABLE": [
          -1,
          424
        ],
        "'ASK": [
          -1,
          424
        ],
        "'NEW": [
          -1,
          424
        ]
      },
      {
        "'NAME": [
          -1,
          426
        ],
        "'PARENNOSPACE": [
          -1,
          426
        ],
        "'STRING": [
          -1,
          426
        ],
        "'LBRACE": [
          -1,
          426
        ],
        "'RBRACE": [
          -1,
          426
        ],
        "'SPY": [
          -1,
          426
        ],
        "'PARENSPACE": [
          -1,
          426
        ],
        "'INT": [
          -1,
          426
        ],
        "'LONG": [
          -1,
          426
        ],
        "'DOUBLE": [
          -1,
          426
        ],
        "'FLOAT": [
          -1,
          426
        ],
        "'BOOLEAN": [
          -1,
          426
        ],
        "'VOID": [
          -1,
          426
        ],
        "'DATA": [
          -1,
          426
        ],
        "'IF": [
          -1,
          426
        ],
        "'FOR": [
          -1,
          426
        ],
        "'RETURN": [
          -1,
          426
        ],
        "'VAR": [
          -1,
          426
        ],
        "'ATCHECK": [
          -1,
          426
        ],
        "'ASSERTEQUALS": [
          -1,
          426
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          426
        ],
        "'ASSERTTRUE": [
          -1,
          426
        ],
        "'ASSERTFALSE": [
          -1,
          426
        ],
        "'ASSERTSATISFIES": [
          -1,
          426
        ],
        "'ASSERTRAISES": [
          -1,
          426
        ],
        "'SWITCH": [
          -1,
          426
        ],
        "'CASE": [
          -1,
          426
        ],
        "'DEFAULT": [
          -1,
          426
        ],
        "'YIELD": [
          -1,
          426
        ],
        "'DASH": [
          -1,
          426
        ],
        "'BANG": [
          -1,
          426
        ],
        "'LBRACK": [
          -1,
          426
        ],
        "'NUMBER": [
          -1,
          426
        ],
        "'TRUE": [
          -1,
          426
        ],
        "'FALSE": [
          -1,
          426
        ],
        "'NULL": [
          -1,
          426
        ],
        "'PARENAFTERBRACE": [
          -1,
          426
        ],
        "'TABLE": [
          -1,
          426
        ],
        "'ASK": [
          -1,
          426
        ],
        "'NEW": [
          -1,
          426
        ]
      },
      {
        "check-block_A0_I6*": [
          378
        ],
        "'NAME": [
          -1,
          428
        ],
        "'PARENNOSPACE": [
          -1,
          428
        ],
        "'STRING": [
          -1,
          428
        ],
        "'LBRACE": [
          -1,
          428
        ],
        "'RBRACE": [
          -1,
          428
        ],
        "'SPY": [
          -1,
          428
        ],
        "'PARENSPACE": [
          -1,
          428
        ],
        "'INT": [
          -1,
          428
        ],
        "'LONG": [
          -1,
          428
        ],
        "'DOUBLE": [
          -1,
          428
        ],
        "'FLOAT": [
          -1,
          428
        ],
        "'BOOLEAN": [
          -1,
          428
        ],
        "'VOID": [
          -1,
          428
        ],
        "'DATA": [
          -1,
          428
        ],
        "'IF": [
          -1,
          428
        ],
        "'FOR": [
          -1,
          428
        ],
        "'RETURN": [
          -1,
          428
        ],
        "'VAR": [
          -1,
          428
        ],
        "'ATCHECK": [
          -1,
          428
        ],
        "'ASSERTEQUALS": [
          -1,
          428
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          428
        ],
        "'ASSERTTRUE": [
          -1,
          428
        ],
        "'ASSERTFALSE": [
          -1,
          428
        ],
        "'ASSERTSATISFIES": [
          -1,
          428
        ],
        "'ASSERTRAISES": [
          -1,
          428
        ],
        "'SWITCH": [
          -1,
          428
        ],
        "'YIELD": [
          -1,
          428
        ],
        "'DASH": [
          -1,
          428
        ],
        "'BANG": [
          -1,
          428
        ],
        "'LBRACK": [
          -1,
          428
        ],
        "'NUMBER": [
          -1,
          428
        ],
        "'TRUE": [
          -1,
          428
        ],
        "'FALSE": [
          -1,
          428
        ],
        "'NULL": [
          -1,
          428
        ],
        "'PARENAFTERBRACE": [
          -1,
          428
        ],
        "'TABLE": [
          -1,
          428
        ],
        "'ASK": [
          -1,
          428
        ],
        "'NEW": [
          -1,
          428
        ]
      },
      {
        "switch-expr_I6?": [
          379
        ],
        "switch-expr_I5": [
          380
        ],
        "case-branch": [
          381
        ],
        "switch-expr_I6": [
          382
        ],
        "default-branch": [
          383
        ],
        "'CASE": [
          384
        ],
        "'DEFAULT": [
          385
        ],
        "'RBRACE": [
          -1,
          430
        ]
      },
      {
        "'RPAREN": [
          -1,
          432
        ],
        "'COMMA": [
          -1,
          432
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          386
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'COMMA": [
          -1,
          434
        ],
        "'RBRACK": [
          -1,
          434
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          387
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RBRACE": [
          388
        ],
        "table-expr_I5": [
          389
        ],
        "table-row": [
          390
        ],
        "'ROW": [
          391
        ]
      },
      {
        "'SEMI": [
          -1,
          436
        ],
        "'COMMA": [
          -1,
          436
        ]
      },
      {
        "$": [
          -1,
          438
        ],
        "'NAME": [
          -1,
          438
        ],
        "'SEMI": [
          -1,
          438
        ],
        "'PARENNOSPACE": [
          -1,
          438
        ],
        "'STRING": [
          -1,
          438
        ],
        "'RPAREN": [
          -1,
          438
        ],
        "'LBRACE": [
          -1,
          438
        ],
        "'RBRACE": [
          -1,
          438
        ],
        "'SPY": [
          -1,
          438
        ],
        "'PARENSPACE": [
          -1,
          438
        ],
        "'COMMA": [
          -1,
          438
        ],
        "'INT": [
          -1,
          438
        ],
        "'LONG": [
          -1,
          438
        ],
        "'DOUBLE": [
          -1,
          438
        ],
        "'FLOAT": [
          -1,
          438
        ],
        "'BOOLEAN": [
          -1,
          438
        ],
        "'VOID": [
          -1,
          438
        ],
        "'LT": [
          -1,
          438
        ],
        "'GT": [
          -1,
          438
        ],
        "'THINARROW": [
          -1,
          438
        ],
        "'DATA": [
          -1,
          438
        ],
        "'IF": [
          -1,
          438
        ],
        "'FOR": [
          -1,
          438
        ],
        "'RETURN": [
          -1,
          438
        ],
        "'VAR": [
          -1,
          438
        ],
        "'ATCHECK": [
          -1,
          438
        ],
        "'ASSERTEQUALS": [
          -1,
          438
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          438
        ],
        "'ASSERTTRUE": [
          -1,
          438
        ],
        "'ASSERTFALSE": [
          -1,
          438
        ],
        "'ASSERTSATISFIES": [
          -1,
          438
        ],
        "'ASSERTRAISES": [
          -1,
          438
        ],
        "'IS": [
          -1,
          438
        ],
        "'ISNOT": [
          -1,
          438
        ],
        "'SATISFIES": [
          -1,
          438
        ],
        "'RAISES": [
          -1,
          438
        ],
        "'SWITCH": [
          -1,
          438
        ],
        "'CASE": [
          -1,
          438
        ],
        "'DEFAULT": [
          -1,
          438
        ],
        "'YIELD": [
          -1,
          438
        ],
        "'PLUS": [
          -1,
          438
        ],
        "'DASH": [
          -1,
          438
        ],
        "'TIMES": [
          -1,
          438
        ],
        "'SLASH": [
          -1,
          438
        ],
        "'PERCENT": [
          -1,
          438
        ],
        "'EQUALEQUAL": [
          -1,
          438
        ],
        "'NEQ": [
          -1,
          438
        ],
        "'LEQ": [
          -1,
          438
        ],
        "'GEQ": [
          -1,
          438
        ],
        "'AND": [
          -1,
          438
        ],
        "'OR": [
          -1,
          438
        ],
        "'BANG": [
          -1,
          438
        ],
        "'DOT": [
          -1,
          438
        ],
        "'LBRACK": [
          -1,
          438
        ],
        "'RBRACK": [
          -1,
          438
        ],
        "'NUMBER": [
          -1,
          438
        ],
        "'TRUE": [
          -1,
          438
        ],
        "'FALSE": [
          -1,
          438
        ],
        "'NULL": [
          -1,
          438
        ],
        "'PARENAFTERBRACE": [
          -1,
          438
        ],
        "'TABLE": [
          -1,
          438
        ],
        "'ASK": [
          -1,
          438
        ],
        "'NEW": [
          -1,
          438
        ]
      },
      {
        "'SEMI": [
          392
        ]
      },
      {
        "'NAME": [
          -1,
          440
        ],
        "'STRING": [
          -1,
          440
        ],
        "'LBRACE": [
          -1,
          440
        ],
        "'RBRACE": [
          -1,
          440
        ],
        "'PARENSPACE": [
          -1,
          440
        ],
        "'SWITCH": [
          -1,
          440
        ],
        "'DASH": [
          -1,
          440
        ],
        "'BANG": [
          -1,
          440
        ],
        "'LBRACK": [
          -1,
          440
        ],
        "'NUMBER": [
          -1,
          440
        ],
        "'TRUE": [
          -1,
          440
        ],
        "'FALSE": [
          -1,
          440
        ],
        "'NULL": [
          -1,
          440
        ],
        "'PARENAFTERBRACE": [
          -1,
          440
        ],
        "'TABLE": [
          -1,
          440
        ],
        "'ASK": [
          -1,
          440
        ],
        "'NEW": [
          -1,
          440
        ]
      },
      {
        "'SEMI": [
          393
        ]
      },
      {
        "'SEMI": [
          394
        ]
      },
      {
        "'NAME": [
          -1,
          442
        ],
        "'STRING": [
          -1,
          442
        ],
        "'LBRACE": [
          -1,
          442
        ],
        "'PARENSPACE": [
          -1,
          442
        ],
        "'SWITCH": [
          -1,
          442
        ],
        "'DASH": [
          -1,
          442
        ],
        "'BANG": [
          -1,
          442
        ],
        "'LBRACK": [
          -1,
          442
        ],
        "'NUMBER": [
          -1,
          442
        ],
        "'TRUE": [
          -1,
          442
        ],
        "'FALSE": [
          -1,
          442
        ],
        "'NULL": [
          -1,
          442
        ],
        "'PARENAFTERBRACE": [
          -1,
          442
        ],
        "'TABLE": [
          -1,
          442
        ],
        "'ASK": [
          -1,
          442
        ],
        "'OTHERWISE": [
          -1,
          442
        ],
        "'NEW": [
          -1,
          442
        ]
      },
      {
        "'THINARROW": [
          395
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          396
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RPAREN": [
          -1,
          444
        ],
        "'COMMA": [
          -1,
          444
        ]
      },
      {
        "'SEMI": [
          397
        ]
      },
      {
        "$": [
          -1,
          446
        ],
        "'NAME": [
          -1,
          446
        ],
        "'PARENNOSPACE": [
          -1,
          446
        ],
        "'STRING": [
          -1,
          446
        ],
        "'LBRACE": [
          -1,
          446
        ],
        "'RBRACE": [
          -1,
          446
        ],
        "'SPY": [
          -1,
          446
        ],
        "'PARENSPACE": [
          -1,
          446
        ],
        "'INT": [
          -1,
          446
        ],
        "'LONG": [
          -1,
          446
        ],
        "'DOUBLE": [
          -1,
          446
        ],
        "'FLOAT": [
          -1,
          446
        ],
        "'BOOLEAN": [
          -1,
          446
        ],
        "'VOID": [
          -1,
          446
        ],
        "'DATA": [
          -1,
          446
        ],
        "'IF": [
          -1,
          446
        ],
        "'FOR": [
          -1,
          446
        ],
        "'RETURN": [
          -1,
          446
        ],
        "'VAR": [
          -1,
          446
        ],
        "'ATCHECK": [
          -1,
          446
        ],
        "'ASSERTEQUALS": [
          -1,
          446
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          446
        ],
        "'ASSERTTRUE": [
          -1,
          446
        ],
        "'ASSERTFALSE": [
          -1,
          446
        ],
        "'ASSERTSATISFIES": [
          -1,
          446
        ],
        "'ASSERTRAISES": [
          -1,
          446
        ],
        "'SWITCH": [
          -1,
          446
        ],
        "'YIELD": [
          -1,
          446
        ],
        "'DASH": [
          -1,
          446
        ],
        "'BANG": [
          -1,
          446
        ],
        "'LBRACK": [
          -1,
          446
        ],
        "'NUMBER": [
          -1,
          446
        ],
        "'TRUE": [
          -1,
          446
        ],
        "'FALSE": [
          -1,
          446
        ],
        "'NULL": [
          -1,
          446
        ],
        "'PARENAFTERBRACE": [
          -1,
          446
        ],
        "'TABLE": [
          -1,
          446
        ],
        "'ASK": [
          -1,
          446
        ],
        "'NEW": [
          -1,
          446
        ]
      },
      {
        "$": [
          -1,
          448
        ],
        "'NAME": [
          -1,
          448
        ],
        "'PARENNOSPACE": [
          -1,
          448
        ],
        "'STRING": [
          -1,
          448
        ],
        "'LBRACE": [
          -1,
          448
        ],
        "'RBRACE": [
          -1,
          448
        ],
        "'SPY": [
          -1,
          448
        ],
        "'PARENSPACE": [
          -1,
          448
        ],
        "'INT": [
          -1,
          448
        ],
        "'LONG": [
          -1,
          448
        ],
        "'DOUBLE": [
          -1,
          448
        ],
        "'FLOAT": [
          -1,
          448
        ],
        "'BOOLEAN": [
          -1,
          448
        ],
        "'VOID": [
          -1,
          448
        ],
        "'DATA": [
          -1,
          448
        ],
        "'IF": [
          -1,
          448
        ],
        "'FOR": [
          -1,
          448
        ],
        "'RETURN": [
          -1,
          448
        ],
        "'VAR": [
          -1,
          448
        ],
        "'ATCHECK": [
          -1,
          448
        ],
        "'ASSERTEQUALS": [
          -1,
          448
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          448
        ],
        "'ASSERTTRUE": [
          -1,
          448
        ],
        "'ASSERTFALSE": [
          -1,
          448
        ],
        "'ASSERTSATISFIES": [
          -1,
          448
        ],
        "'ASSERTRAISES": [
          -1,
          448
        ],
        "'SWITCH": [
          -1,
          448
        ],
        "'YIELD": [
          -1,
          448
        ],
        "'DASH": [
          -1,
          448
        ],
        "'BANG": [
          -1,
          448
        ],
        "'LBRACK": [
          -1,
          448
        ],
        "'NUMBER": [
          -1,
          448
        ],
        "'TRUE": [
          -1,
          448
        ],
        "'FALSE": [
          -1,
          448
        ],
        "'NULL": [
          -1,
          448
        ],
        "'PARENAFTERBRACE": [
          -1,
          448
        ],
        "'TABLE": [
          -1,
          448
        ],
        "'ASK": [
          -1,
          448
        ],
        "'NEW": [
          -1,
          448
        ]
      },
      {
        "$": [
          -1,
          450
        ],
        "'NAME": [
          -1,
          450
        ],
        "'PARENNOSPACE": [
          -1,
          450
        ],
        "'STRING": [
          -1,
          450
        ],
        "'LBRACE": [
          -1,
          450
        ],
        "'RBRACE": [
          -1,
          450
        ],
        "'SPY": [
          -1,
          450
        ],
        "'PARENSPACE": [
          -1,
          450
        ],
        "'INT": [
          -1,
          450
        ],
        "'LONG": [
          -1,
          450
        ],
        "'DOUBLE": [
          -1,
          450
        ],
        "'FLOAT": [
          -1,
          450
        ],
        "'BOOLEAN": [
          -1,
          450
        ],
        "'VOID": [
          -1,
          450
        ],
        "'DATA": [
          -1,
          450
        ],
        "'IF": [
          -1,
          450
        ],
        "'FOR": [
          -1,
          450
        ],
        "'RETURN": [
          -1,
          450
        ],
        "'VAR": [
          -1,
          450
        ],
        "'ATCHECK": [
          -1,
          450
        ],
        "'ASSERTEQUALS": [
          -1,
          450
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          450
        ],
        "'ASSERTTRUE": [
          -1,
          450
        ],
        "'ASSERTFALSE": [
          -1,
          450
        ],
        "'ASSERTSATISFIES": [
          -1,
          450
        ],
        "'ASSERTRAISES": [
          -1,
          450
        ],
        "'SWITCH": [
          -1,
          450
        ],
        "'YIELD": [
          -1,
          450
        ],
        "'DASH": [
          -1,
          450
        ],
        "'BANG": [
          -1,
          450
        ],
        "'LBRACK": [
          -1,
          450
        ],
        "'NUMBER": [
          -1,
          450
        ],
        "'TRUE": [
          -1,
          450
        ],
        "'FALSE": [
          -1,
          450
        ],
        "'NULL": [
          -1,
          450
        ],
        "'PARENAFTERBRACE": [
          -1,
          450
        ],
        "'TABLE": [
          -1,
          450
        ],
        "'ASK": [
          -1,
          450
        ],
        "'NEW": [
          -1,
          450
        ]
      },
      {
        "'LBRACE": [
          398
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "fun-decl": [
          193
        ],
        "data-decl": [
          194
        ],
        "check-block": [
          195
        ],
        "let-stmt": [
          196
        ],
        "var-stmt": [
          197
        ],
        "assign-stmt": [
          198
        ],
        "expr-stmt": [
          199
        ],
        "'LBRACE": [
          22
        ],
        "'RBRACE": [
          399
        ],
        "block_I1": [
          400
        ],
        "block-stmt": [
          401
        ],
        "if-stmt": [
          202
        ],
        "for-stmt": [
          203
        ],
        "return-stmt": [
          204
        ],
        "yield-stmt": [
          205
        ],
        "spy-stmt": [
          206
        ],
        "'SPY": [
          207
        ],
        "'PARENSPACE": [
          23
        ],
        "type-ann": [
          24
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "'DATA": [
          31
        ],
        "'IF": [
          209
        ],
        "full-expr": [
          32
        ],
        "'FOR": [
          211
        ],
        "'RETURN": [
          212
        ],
        "'VAR": [
          33
        ],
        "'ATCHECK": [
          34
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "'YIELD": [
          220
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RPAREN": [
          -1,
          452
        ],
        "'COMMA": [
          -1,
          452
        ]
      },
      {
        "'RPAREN": [
          -1,
          454
        ],
        "'COMMA": [
          -1,
          454
        ]
      },
      {
        "'SEMI": [
          -1,
          456
        ],
        "'RBRACE": [
          -1,
          456
        ]
      },
      {
        "'COMMA": [
          402
        ],
        "variant-decl_A0_I2_I1": [
          403
        ],
        "'RPAREN": [
          -1,
          458
        ]
      },
      {
        "'SEMI": [
          -1,
          460
        ],
        "'RBRACE": [
          -1,
          460
        ]
      },
      {
        "$": [
          -1,
          462
        ],
        "'NAME": [
          -1,
          462
        ],
        "'PARENNOSPACE": [
          -1,
          462
        ],
        "'STRING": [
          -1,
          462
        ],
        "'LBRACE": [
          -1,
          462
        ],
        "'RBRACE": [
          -1,
          462
        ],
        "'SPY": [
          -1,
          462
        ],
        "'PARENSPACE": [
          -1,
          462
        ],
        "'INT": [
          -1,
          462
        ],
        "'LONG": [
          -1,
          462
        ],
        "'DOUBLE": [
          -1,
          462
        ],
        "'FLOAT": [
          -1,
          462
        ],
        "'BOOLEAN": [
          -1,
          462
        ],
        "'VOID": [
          -1,
          462
        ],
        "'DATA": [
          -1,
          462
        ],
        "'IF": [
          -1,
          462
        ],
        "'FOR": [
          -1,
          462
        ],
        "'RETURN": [
          -1,
          462
        ],
        "'VAR": [
          -1,
          462
        ],
        "'ATCHECK": [
          -1,
          462
        ],
        "'ASSERTEQUALS": [
          -1,
          462
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          462
        ],
        "'ASSERTTRUE": [
          -1,
          462
        ],
        "'ASSERTFALSE": [
          -1,
          462
        ],
        "'ASSERTSATISFIES": [
          -1,
          462
        ],
        "'ASSERTRAISES": [
          -1,
          462
        ],
        "'SWITCH": [
          -1,
          462
        ],
        "'YIELD": [
          -1,
          462
        ],
        "'DASH": [
          -1,
          462
        ],
        "'BANG": [
          -1,
          462
        ],
        "'LBRACK": [
          -1,
          462
        ],
        "'NUMBER": [
          -1,
          462
        ],
        "'TRUE": [
          -1,
          462
        ],
        "'FALSE": [
          -1,
          462
        ],
        "'NULL": [
          -1,
          462
        ],
        "'PARENAFTERBRACE": [
          -1,
          462
        ],
        "'TABLE": [
          -1,
          462
        ],
        "'ASK": [
          -1,
          462
        ],
        "'NEW": [
          -1,
          462
        ]
      },
      {
        "'RPAREN": [
          404
        ],
        "spy-stmt_I3": [
          405
        ],
        "'COMMA": [
          406
        ]
      },
      {
        "block": [
          407
        ],
        "'LBRACE": [
          297
        ]
      },
      {
        "'NAME": [
          -1,
          464
        ],
        "'PARENNOSPACE": [
          -1,
          464
        ],
        "'STRING": [
          -1,
          464
        ],
        "'LBRACE": [
          -1,
          464
        ],
        "'RBRACE": [
          -1,
          464
        ],
        "'SPY": [
          -1,
          464
        ],
        "'PARENSPACE": [
          -1,
          464
        ],
        "'INT": [
          -1,
          464
        ],
        "'LONG": [
          -1,
          464
        ],
        "'DOUBLE": [
          -1,
          464
        ],
        "'FLOAT": [
          -1,
          464
        ],
        "'BOOLEAN": [
          -1,
          464
        ],
        "'VOID": [
          -1,
          464
        ],
        "'DATA": [
          -1,
          464
        ],
        "'IF": [
          -1,
          464
        ],
        "'FOR": [
          -1,
          464
        ],
        "'RETURN": [
          -1,
          464
        ],
        "'VAR": [
          -1,
          464
        ],
        "'ATCHECK": [
          -1,
          464
        ],
        "'ASSERTEQUALS": [
          -1,
          464
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          464
        ],
        "'ASSERTTRUE": [
          -1,
          464
        ],
        "'ASSERTFALSE": [
          -1,
          464
        ],
        "'ASSERTSATISFIES": [
          -1,
          464
        ],
        "'ASSERTRAISES": [
          -1,
          464
        ],
        "'SWITCH": [
          -1,
          464
        ],
        "'YIELD": [
          -1,
          464
        ],
        "'DASH": [
          -1,
          464
        ],
        "'BANG": [
          -1,
          464
        ],
        "'LBRACK": [
          -1,
          464
        ],
        "'NUMBER": [
          -1,
          464
        ],
        "'TRUE": [
          -1,
          464
        ],
        "'FALSE": [
          -1,
          464
        ],
        "'NULL": [
          -1,
          464
        ],
        "'PARENAFTERBRACE": [
          -1,
          464
        ],
        "'TABLE": [
          -1,
          464
        ],
        "'ASK": [
          -1,
          464
        ],
        "'NEW": [
          -1,
          464
        ]
      },
      {
        "'NAME": [
          -1,
          466
        ],
        "'PARENNOSPACE": [
          -1,
          466
        ],
        "'STRING": [
          -1,
          466
        ],
        "'LBRACE": [
          -1,
          466
        ],
        "'RBRACE": [
          -1,
          466
        ],
        "'SPY": [
          -1,
          466
        ],
        "'PARENSPACE": [
          -1,
          466
        ],
        "'INT": [
          -1,
          466
        ],
        "'LONG": [
          -1,
          466
        ],
        "'DOUBLE": [
          -1,
          466
        ],
        "'FLOAT": [
          -1,
          466
        ],
        "'BOOLEAN": [
          -1,
          466
        ],
        "'VOID": [
          -1,
          466
        ],
        "'DATA": [
          -1,
          466
        ],
        "'IF": [
          -1,
          466
        ],
        "'FOR": [
          -1,
          466
        ],
        "'RETURN": [
          -1,
          466
        ],
        "'VAR": [
          -1,
          466
        ],
        "'ATCHECK": [
          -1,
          466
        ],
        "'ASSERTEQUALS": [
          -1,
          466
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          466
        ],
        "'ASSERTTRUE": [
          -1,
          466
        ],
        "'ASSERTFALSE": [
          -1,
          466
        ],
        "'ASSERTSATISFIES": [
          -1,
          466
        ],
        "'ASSERTRAISES": [
          -1,
          466
        ],
        "'SWITCH": [
          -1,
          466
        ],
        "'YIELD": [
          -1,
          466
        ],
        "'DASH": [
          -1,
          466
        ],
        "'BANG": [
          -1,
          466
        ],
        "'LBRACK": [
          -1,
          466
        ],
        "'NUMBER": [
          -1,
          466
        ],
        "'TRUE": [
          -1,
          466
        ],
        "'FALSE": [
          -1,
          466
        ],
        "'NULL": [
          -1,
          466
        ],
        "'PARENAFTERBRACE": [
          -1,
          466
        ],
        "'TABLE": [
          -1,
          466
        ],
        "'ASK": [
          -1,
          466
        ],
        "'NEW": [
          -1,
          466
        ]
      },
      {
        "'NAME": [
          -1,
          468
        ],
        "'PARENNOSPACE": [
          -1,
          468
        ],
        "'STRING": [
          -1,
          468
        ],
        "'LBRACE": [
          -1,
          468
        ],
        "'RBRACE": [
          -1,
          468
        ],
        "'SPY": [
          -1,
          468
        ],
        "'PARENSPACE": [
          -1,
          468
        ],
        "'INT": [
          -1,
          468
        ],
        "'LONG": [
          -1,
          468
        ],
        "'DOUBLE": [
          -1,
          468
        ],
        "'FLOAT": [
          -1,
          468
        ],
        "'BOOLEAN": [
          -1,
          468
        ],
        "'VOID": [
          -1,
          468
        ],
        "'DATA": [
          -1,
          468
        ],
        "'IF": [
          -1,
          468
        ],
        "'FOR": [
          -1,
          468
        ],
        "'RETURN": [
          -1,
          468
        ],
        "'VAR": [
          -1,
          468
        ],
        "'ATCHECK": [
          -1,
          468
        ],
        "'ASSERTEQUALS": [
          -1,
          468
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          468
        ],
        "'ASSERTTRUE": [
          -1,
          468
        ],
        "'ASSERTFALSE": [
          -1,
          468
        ],
        "'ASSERTSATISFIES": [
          -1,
          468
        ],
        "'ASSERTRAISES": [
          -1,
          468
        ],
        "'SWITCH": [
          -1,
          468
        ],
        "'YIELD": [
          -1,
          468
        ],
        "'DASH": [
          -1,
          468
        ],
        "'BANG": [
          -1,
          468
        ],
        "'LBRACK": [
          -1,
          468
        ],
        "'NUMBER": [
          -1,
          468
        ],
        "'TRUE": [
          -1,
          468
        ],
        "'FALSE": [
          -1,
          468
        ],
        "'NULL": [
          -1,
          468
        ],
        "'PARENAFTERBRACE": [
          -1,
          468
        ],
        "'TABLE": [
          -1,
          468
        ],
        "'ASK": [
          -1,
          468
        ],
        "'NEW": [
          -1,
          468
        ]
      },
      {
        "'NAME": [
          -1,
          470
        ],
        "'PARENNOSPACE": [
          -1,
          470
        ],
        "'STRING": [
          -1,
          470
        ],
        "'LBRACE": [
          -1,
          470
        ],
        "'RBRACE": [
          -1,
          470
        ],
        "'SPY": [
          -1,
          470
        ],
        "'PARENSPACE": [
          -1,
          470
        ],
        "'INT": [
          -1,
          470
        ],
        "'LONG": [
          -1,
          470
        ],
        "'DOUBLE": [
          -1,
          470
        ],
        "'FLOAT": [
          -1,
          470
        ],
        "'BOOLEAN": [
          -1,
          470
        ],
        "'VOID": [
          -1,
          470
        ],
        "'DATA": [
          -1,
          470
        ],
        "'IF": [
          -1,
          470
        ],
        "'FOR": [
          -1,
          470
        ],
        "'RETURN": [
          -1,
          470
        ],
        "'VAR": [
          -1,
          470
        ],
        "'ATCHECK": [
          -1,
          470
        ],
        "'ASSERTEQUALS": [
          -1,
          470
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          470
        ],
        "'ASSERTTRUE": [
          -1,
          470
        ],
        "'ASSERTFALSE": [
          -1,
          470
        ],
        "'ASSERTSATISFIES": [
          -1,
          470
        ],
        "'ASSERTRAISES": [
          -1,
          470
        ],
        "'SWITCH": [
          -1,
          470
        ],
        "'YIELD": [
          -1,
          470
        ],
        "'DASH": [
          -1,
          470
        ],
        "'BANG": [
          -1,
          470
        ],
        "'LBRACK": [
          -1,
          470
        ],
        "'NUMBER": [
          -1,
          470
        ],
        "'TRUE": [
          -1,
          470
        ],
        "'FALSE": [
          -1,
          470
        ],
        "'NULL": [
          -1,
          470
        ],
        "'PARENAFTERBRACE": [
          -1,
          470
        ],
        "'TABLE": [
          -1,
          470
        ],
        "'ASK": [
          -1,
          470
        ],
        "'NEW": [
          -1,
          470
        ]
      },
      {
        "'NAME": [
          -1,
          472
        ],
        "'PARENNOSPACE": [
          -1,
          472
        ],
        "'STRING": [
          -1,
          472
        ],
        "'LBRACE": [
          -1,
          472
        ],
        "'RBRACE": [
          -1,
          472
        ],
        "'SPY": [
          -1,
          472
        ],
        "'PARENSPACE": [
          -1,
          472
        ],
        "'INT": [
          -1,
          472
        ],
        "'LONG": [
          -1,
          472
        ],
        "'DOUBLE": [
          -1,
          472
        ],
        "'FLOAT": [
          -1,
          472
        ],
        "'BOOLEAN": [
          -1,
          472
        ],
        "'VOID": [
          -1,
          472
        ],
        "'DATA": [
          -1,
          472
        ],
        "'IF": [
          -1,
          472
        ],
        "'FOR": [
          -1,
          472
        ],
        "'RETURN": [
          -1,
          472
        ],
        "'VAR": [
          -1,
          472
        ],
        "'ATCHECK": [
          -1,
          472
        ],
        "'ASSERTEQUALS": [
          -1,
          472
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          472
        ],
        "'ASSERTTRUE": [
          -1,
          472
        ],
        "'ASSERTFALSE": [
          -1,
          472
        ],
        "'ASSERTSATISFIES": [
          -1,
          472
        ],
        "'ASSERTRAISES": [
          -1,
          472
        ],
        "'SWITCH": [
          -1,
          472
        ],
        "'YIELD": [
          -1,
          472
        ],
        "'DASH": [
          -1,
          472
        ],
        "'BANG": [
          -1,
          472
        ],
        "'LBRACK": [
          -1,
          472
        ],
        "'NUMBER": [
          -1,
          472
        ],
        "'TRUE": [
          -1,
          472
        ],
        "'FALSE": [
          -1,
          472
        ],
        "'NULL": [
          -1,
          472
        ],
        "'PARENAFTERBRACE": [
          -1,
          472
        ],
        "'TABLE": [
          -1,
          472
        ],
        "'ASK": [
          -1,
          472
        ],
        "'NEW": [
          -1,
          472
        ]
      },
      {
        "'NAME": [
          -1,
          474
        ],
        "'PARENNOSPACE": [
          -1,
          474
        ],
        "'STRING": [
          -1,
          474
        ],
        "'LBRACE": [
          -1,
          474
        ],
        "'RBRACE": [
          -1,
          474
        ],
        "'SPY": [
          -1,
          474
        ],
        "'PARENSPACE": [
          -1,
          474
        ],
        "'INT": [
          -1,
          474
        ],
        "'LONG": [
          -1,
          474
        ],
        "'DOUBLE": [
          -1,
          474
        ],
        "'FLOAT": [
          -1,
          474
        ],
        "'BOOLEAN": [
          -1,
          474
        ],
        "'VOID": [
          -1,
          474
        ],
        "'DATA": [
          -1,
          474
        ],
        "'IF": [
          -1,
          474
        ],
        "'FOR": [
          -1,
          474
        ],
        "'RETURN": [
          -1,
          474
        ],
        "'VAR": [
          -1,
          474
        ],
        "'ATCHECK": [
          -1,
          474
        ],
        "'ASSERTEQUALS": [
          -1,
          474
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          474
        ],
        "'ASSERTTRUE": [
          -1,
          474
        ],
        "'ASSERTFALSE": [
          -1,
          474
        ],
        "'ASSERTSATISFIES": [
          -1,
          474
        ],
        "'ASSERTRAISES": [
          -1,
          474
        ],
        "'SWITCH": [
          -1,
          474
        ],
        "'YIELD": [
          -1,
          474
        ],
        "'DASH": [
          -1,
          474
        ],
        "'BANG": [
          -1,
          474
        ],
        "'LBRACK": [
          -1,
          474
        ],
        "'NUMBER": [
          -1,
          474
        ],
        "'TRUE": [
          -1,
          474
        ],
        "'FALSE": [
          -1,
          474
        ],
        "'NULL": [
          -1,
          474
        ],
        "'PARENAFTERBRACE": [
          -1,
          474
        ],
        "'TABLE": [
          -1,
          474
        ],
        "'ASK": [
          -1,
          474
        ],
        "'NEW": [
          -1,
          474
        ]
      },
      {
        "'NAME": [
          -1,
          476
        ],
        "'PARENNOSPACE": [
          -1,
          476
        ],
        "'STRING": [
          -1,
          476
        ],
        "'LBRACE": [
          -1,
          476
        ],
        "'RBRACE": [
          -1,
          476
        ],
        "'SPY": [
          -1,
          476
        ],
        "'PARENSPACE": [
          -1,
          476
        ],
        "'INT": [
          -1,
          476
        ],
        "'LONG": [
          -1,
          476
        ],
        "'DOUBLE": [
          -1,
          476
        ],
        "'FLOAT": [
          -1,
          476
        ],
        "'BOOLEAN": [
          -1,
          476
        ],
        "'VOID": [
          -1,
          476
        ],
        "'DATA": [
          -1,
          476
        ],
        "'IF": [
          -1,
          476
        ],
        "'FOR": [
          -1,
          476
        ],
        "'RETURN": [
          -1,
          476
        ],
        "'VAR": [
          -1,
          476
        ],
        "'ATCHECK": [
          -1,
          476
        ],
        "'ASSERTEQUALS": [
          -1,
          476
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          476
        ],
        "'ASSERTTRUE": [
          -1,
          476
        ],
        "'ASSERTFALSE": [
          -1,
          476
        ],
        "'ASSERTSATISFIES": [
          -1,
          476
        ],
        "'ASSERTRAISES": [
          -1,
          476
        ],
        "'SWITCH": [
          -1,
          476
        ],
        "'YIELD": [
          -1,
          476
        ],
        "'DASH": [
          -1,
          476
        ],
        "'BANG": [
          -1,
          476
        ],
        "'LBRACK": [
          -1,
          476
        ],
        "'NUMBER": [
          -1,
          476
        ],
        "'TRUE": [
          -1,
          476
        ],
        "'FALSE": [
          -1,
          476
        ],
        "'NULL": [
          -1,
          476
        ],
        "'PARENAFTERBRACE": [
          -1,
          476
        ],
        "'TABLE": [
          -1,
          476
        ],
        "'ASK": [
          -1,
          476
        ],
        "'NEW": [
          -1,
          476
        ]
      },
      {
        "'NAME": [
          -1,
          478
        ],
        "'PARENNOSPACE": [
          -1,
          478
        ],
        "'STRING": [
          -1,
          478
        ],
        "'LBRACE": [
          -1,
          478
        ],
        "'RBRACE": [
          -1,
          478
        ],
        "'SPY": [
          -1,
          478
        ],
        "'PARENSPACE": [
          -1,
          478
        ],
        "'INT": [
          -1,
          478
        ],
        "'LONG": [
          -1,
          478
        ],
        "'DOUBLE": [
          -1,
          478
        ],
        "'FLOAT": [
          -1,
          478
        ],
        "'BOOLEAN": [
          -1,
          478
        ],
        "'VOID": [
          -1,
          478
        ],
        "'DATA": [
          -1,
          478
        ],
        "'IF": [
          -1,
          478
        ],
        "'FOR": [
          -1,
          478
        ],
        "'RETURN": [
          -1,
          478
        ],
        "'VAR": [
          -1,
          478
        ],
        "'ATCHECK": [
          -1,
          478
        ],
        "'ASSERTEQUALS": [
          -1,
          478
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          478
        ],
        "'ASSERTTRUE": [
          -1,
          478
        ],
        "'ASSERTFALSE": [
          -1,
          478
        ],
        "'ASSERTSATISFIES": [
          -1,
          478
        ],
        "'ASSERTRAISES": [
          -1,
          478
        ],
        "'SWITCH": [
          -1,
          478
        ],
        "'YIELD": [
          -1,
          478
        ],
        "'DASH": [
          -1,
          478
        ],
        "'BANG": [
          -1,
          478
        ],
        "'LBRACK": [
          -1,
          478
        ],
        "'NUMBER": [
          -1,
          478
        ],
        "'TRUE": [
          -1,
          478
        ],
        "'FALSE": [
          -1,
          478
        ],
        "'NULL": [
          -1,
          478
        ],
        "'PARENAFTERBRACE": [
          -1,
          478
        ],
        "'TABLE": [
          -1,
          478
        ],
        "'ASK": [
          -1,
          478
        ],
        "'NEW": [
          -1,
          478
        ]
      },
      {
        "'NAME": [
          -1,
          480
        ],
        "'PARENNOSPACE": [
          -1,
          480
        ],
        "'STRING": [
          -1,
          480
        ],
        "'LBRACE": [
          -1,
          480
        ],
        "'RBRACE": [
          -1,
          480
        ],
        "'SPY": [
          -1,
          480
        ],
        "'PARENSPACE": [
          -1,
          480
        ],
        "'INT": [
          -1,
          480
        ],
        "'LONG": [
          -1,
          480
        ],
        "'DOUBLE": [
          -1,
          480
        ],
        "'FLOAT": [
          -1,
          480
        ],
        "'BOOLEAN": [
          -1,
          480
        ],
        "'VOID": [
          -1,
          480
        ],
        "'DATA": [
          -1,
          480
        ],
        "'IF": [
          -1,
          480
        ],
        "'FOR": [
          -1,
          480
        ],
        "'RETURN": [
          -1,
          480
        ],
        "'VAR": [
          -1,
          480
        ],
        "'ATCHECK": [
          -1,
          480
        ],
        "'ASSERTEQUALS": [
          -1,
          480
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          480
        ],
        "'ASSERTTRUE": [
          -1,
          480
        ],
        "'ASSERTFALSE": [
          -1,
          480
        ],
        "'ASSERTSATISFIES": [
          -1,
          480
        ],
        "'ASSERTRAISES": [
          -1,
          480
        ],
        "'SWITCH": [
          -1,
          480
        ],
        "'YIELD": [
          -1,
          480
        ],
        "'DASH": [
          -1,
          480
        ],
        "'BANG": [
          -1,
          480
        ],
        "'LBRACK": [
          -1,
          480
        ],
        "'NUMBER": [
          -1,
          480
        ],
        "'TRUE": [
          -1,
          480
        ],
        "'FALSE": [
          -1,
          480
        ],
        "'NULL": [
          -1,
          480
        ],
        "'PARENAFTERBRACE": [
          -1,
          480
        ],
        "'TABLE": [
          -1,
          480
        ],
        "'ASK": [
          -1,
          480
        ],
        "'NEW": [
          -1,
          480
        ]
      },
      {
        "'NAME": [
          -1,
          482
        ],
        "'PARENNOSPACE": [
          -1,
          482
        ],
        "'STRING": [
          -1,
          482
        ],
        "'LBRACE": [
          -1,
          482
        ],
        "'RBRACE": [
          -1,
          482
        ],
        "'SPY": [
          -1,
          482
        ],
        "'PARENSPACE": [
          -1,
          482
        ],
        "'INT": [
          -1,
          482
        ],
        "'LONG": [
          -1,
          482
        ],
        "'DOUBLE": [
          -1,
          482
        ],
        "'FLOAT": [
          -1,
          482
        ],
        "'BOOLEAN": [
          -1,
          482
        ],
        "'VOID": [
          -1,
          482
        ],
        "'DATA": [
          -1,
          482
        ],
        "'IF": [
          -1,
          482
        ],
        "'FOR": [
          -1,
          482
        ],
        "'RETURN": [
          -1,
          482
        ],
        "'VAR": [
          -1,
          482
        ],
        "'ATCHECK": [
          -1,
          482
        ],
        "'ASSERTEQUALS": [
          -1,
          482
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          482
        ],
        "'ASSERTTRUE": [
          -1,
          482
        ],
        "'ASSERTFALSE": [
          -1,
          482
        ],
        "'ASSERTSATISFIES": [
          -1,
          482
        ],
        "'ASSERTRAISES": [
          -1,
          482
        ],
        "'SWITCH": [
          -1,
          482
        ],
        "'YIELD": [
          -1,
          482
        ],
        "'DASH": [
          -1,
          482
        ],
        "'BANG": [
          -1,
          482
        ],
        "'LBRACK": [
          -1,
          482
        ],
        "'NUMBER": [
          -1,
          482
        ],
        "'TRUE": [
          -1,
          482
        ],
        "'FALSE": [
          -1,
          482
        ],
        "'NULL": [
          -1,
          482
        ],
        "'PARENAFTERBRACE": [
          -1,
          482
        ],
        "'TABLE": [
          -1,
          482
        ],
        "'ASK": [
          -1,
          482
        ],
        "'NEW": [
          -1,
          482
        ]
      },
      {
        "'NAME": [
          -1,
          484
        ],
        "'PARENNOSPACE": [
          -1,
          484
        ],
        "'STRING": [
          -1,
          484
        ],
        "'LBRACE": [
          -1,
          484
        ],
        "'RBRACE": [
          -1,
          484
        ],
        "'SPY": [
          -1,
          484
        ],
        "'PARENSPACE": [
          -1,
          484
        ],
        "'INT": [
          -1,
          484
        ],
        "'LONG": [
          -1,
          484
        ],
        "'DOUBLE": [
          -1,
          484
        ],
        "'FLOAT": [
          -1,
          484
        ],
        "'BOOLEAN": [
          -1,
          484
        ],
        "'VOID": [
          -1,
          484
        ],
        "'DATA": [
          -1,
          484
        ],
        "'IF": [
          -1,
          484
        ],
        "'FOR": [
          -1,
          484
        ],
        "'RETURN": [
          -1,
          484
        ],
        "'VAR": [
          -1,
          484
        ],
        "'ATCHECK": [
          -1,
          484
        ],
        "'ASSERTEQUALS": [
          -1,
          484
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          484
        ],
        "'ASSERTTRUE": [
          -1,
          484
        ],
        "'ASSERTFALSE": [
          -1,
          484
        ],
        "'ASSERTSATISFIES": [
          -1,
          484
        ],
        "'ASSERTRAISES": [
          -1,
          484
        ],
        "'SWITCH": [
          -1,
          484
        ],
        "'YIELD": [
          -1,
          484
        ],
        "'DASH": [
          -1,
          484
        ],
        "'BANG": [
          -1,
          484
        ],
        "'LBRACK": [
          -1,
          484
        ],
        "'NUMBER": [
          -1,
          484
        ],
        "'TRUE": [
          -1,
          484
        ],
        "'FALSE": [
          -1,
          484
        ],
        "'NULL": [
          -1,
          484
        ],
        "'PARENAFTERBRACE": [
          -1,
          484
        ],
        "'TABLE": [
          -1,
          484
        ],
        "'ASK": [
          -1,
          484
        ],
        "'NEW": [
          -1,
          484
        ]
      },
      {
        "'NAME": [
          -1,
          486
        ],
        "'PARENNOSPACE": [
          -1,
          486
        ],
        "'STRING": [
          -1,
          486
        ],
        "'LBRACE": [
          -1,
          486
        ],
        "'RBRACE": [
          -1,
          486
        ],
        "'SPY": [
          -1,
          486
        ],
        "'PARENSPACE": [
          -1,
          486
        ],
        "'INT": [
          -1,
          486
        ],
        "'LONG": [
          -1,
          486
        ],
        "'DOUBLE": [
          -1,
          486
        ],
        "'FLOAT": [
          -1,
          486
        ],
        "'BOOLEAN": [
          -1,
          486
        ],
        "'VOID": [
          -1,
          486
        ],
        "'DATA": [
          -1,
          486
        ],
        "'IF": [
          -1,
          486
        ],
        "'FOR": [
          -1,
          486
        ],
        "'RETURN": [
          -1,
          486
        ],
        "'VAR": [
          -1,
          486
        ],
        "'ATCHECK": [
          -1,
          486
        ],
        "'ASSERTEQUALS": [
          -1,
          486
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          486
        ],
        "'ASSERTTRUE": [
          -1,
          486
        ],
        "'ASSERTFALSE": [
          -1,
          486
        ],
        "'ASSERTSATISFIES": [
          -1,
          486
        ],
        "'ASSERTRAISES": [
          -1,
          486
        ],
        "'SWITCH": [
          -1,
          486
        ],
        "'YIELD": [
          -1,
          486
        ],
        "'DASH": [
          -1,
          486
        ],
        "'BANG": [
          -1,
          486
        ],
        "'LBRACK": [
          -1,
          486
        ],
        "'NUMBER": [
          -1,
          486
        ],
        "'TRUE": [
          -1,
          486
        ],
        "'FALSE": [
          -1,
          486
        ],
        "'NULL": [
          -1,
          486
        ],
        "'PARENAFTERBRACE": [
          -1,
          486
        ],
        "'TABLE": [
          -1,
          486
        ],
        "'ASK": [
          -1,
          486
        ],
        "'NEW": [
          -1,
          486
        ]
      },
      {
        "'COLON": [
          408
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          409
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          410
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'SEMI": [
          411
        ],
        "assert-stmt_A2_I4?": [
          412
        ],
        "assert-stmt_A2_I4": [
          413
        ],
        "'NAME": [
          -1,
          488,
          490
        ],
        "'PARENNOSPACE": [
          -1,
          488,
          490
        ],
        "'STRING": [
          -1,
          488,
          490
        ],
        "'LBRACE": [
          -1,
          488,
          490
        ],
        "'RBRACE": [
          -1,
          488,
          490
        ],
        "'SPY": [
          -1,
          488,
          490
        ],
        "'PARENSPACE": [
          -1,
          488,
          490
        ],
        "'INT": [
          -1,
          488,
          490
        ],
        "'LONG": [
          -1,
          488,
          490
        ],
        "'DOUBLE": [
          -1,
          488,
          490
        ],
        "'FLOAT": [
          -1,
          488,
          490
        ],
        "'BOOLEAN": [
          -1,
          488,
          490
        ],
        "'VOID": [
          -1,
          488,
          490
        ],
        "'DATA": [
          -1,
          488,
          490
        ],
        "'IF": [
          -1,
          488,
          490
        ],
        "'FOR": [
          -1,
          488,
          490
        ],
        "'RETURN": [
          -1,
          488,
          490
        ],
        "'VAR": [
          -1,
          488,
          490
        ],
        "'ATCHECK": [
          -1,
          488,
          490
        ],
        "'ASSERTEQUALS": [
          -1,
          488,
          490
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          488,
          490
        ],
        "'ASSERTTRUE": [
          -1,
          488,
          490
        ],
        "'ASSERTFALSE": [
          -1,
          488,
          490
        ],
        "'ASSERTSATISFIES": [
          -1,
          488,
          490
        ],
        "'ASSERTRAISES": [
          -1,
          488,
          490
        ],
        "'SWITCH": [
          -1,
          488,
          490
        ],
        "'YIELD": [
          -1,
          488,
          490
        ],
        "'DASH": [
          -1,
          488,
          490
        ],
        "'BANG": [
          -1,
          488,
          490
        ],
        "'LBRACK": [
          -1,
          488,
          490
        ],
        "'NUMBER": [
          -1,
          488,
          490
        ],
        "'TRUE": [
          -1,
          488,
          490
        ],
        "'FALSE": [
          -1,
          488,
          490
        ],
        "'NULL": [
          -1,
          488,
          490
        ],
        "'PARENAFTERBRACE": [
          -1,
          488,
          490
        ],
        "'TABLE": [
          -1,
          488,
          490
        ],
        "'ASK": [
          -1,
          488,
          490
        ],
        "'NEW": [
          -1,
          488,
          490
        ]
      },
      {
        "'SEMI": [
          414
        ],
        "assert-stmt_A3_I4?": [
          415
        ],
        "assert-stmt_A3_I4": [
          416
        ],
        "'NAME": [
          -1,
          492,
          494
        ],
        "'PARENNOSPACE": [
          -1,
          492,
          494
        ],
        "'STRING": [
          -1,
          492,
          494
        ],
        "'LBRACE": [
          -1,
          492,
          494
        ],
        "'RBRACE": [
          -1,
          492,
          494
        ],
        "'SPY": [
          -1,
          492,
          494
        ],
        "'PARENSPACE": [
          -1,
          492,
          494
        ],
        "'INT": [
          -1,
          492,
          494
        ],
        "'LONG": [
          -1,
          492,
          494
        ],
        "'DOUBLE": [
          -1,
          492,
          494
        ],
        "'FLOAT": [
          -1,
          492,
          494
        ],
        "'BOOLEAN": [
          -1,
          492,
          494
        ],
        "'VOID": [
          -1,
          492,
          494
        ],
        "'DATA": [
          -1,
          492,
          494
        ],
        "'IF": [
          -1,
          492,
          494
        ],
        "'FOR": [
          -1,
          492,
          494
        ],
        "'RETURN": [
          -1,
          492,
          494
        ],
        "'VAR": [
          -1,
          492,
          494
        ],
        "'ATCHECK": [
          -1,
          492,
          494
        ],
        "'ASSERTEQUALS": [
          -1,
          492,
          494
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          492,
          494
        ],
        "'ASSERTTRUE": [
          -1,
          492,
          494
        ],
        "'ASSERTFALSE": [
          -1,
          492,
          494
        ],
        "'ASSERTSATISFIES": [
          -1,
          492,
          494
        ],
        "'ASSERTRAISES": [
          -1,
          492,
          494
        ],
        "'SWITCH": [
          -1,
          492,
          494
        ],
        "'YIELD": [
          -1,
          492,
          494
        ],
        "'DASH": [
          -1,
          492,
          494
        ],
        "'BANG": [
          -1,
          492,
          494
        ],
        "'LBRACK": [
          -1,
          492,
          494
        ],
        "'NUMBER": [
          -1,
          492,
          494
        ],
        "'TRUE": [
          -1,
          492,
          494
        ],
        "'FALSE": [
          -1,
          492,
          494
        ],
        "'NULL": [
          -1,
          492,
          494
        ],
        "'PARENAFTERBRACE": [
          -1,
          492,
          494
        ],
        "'TABLE": [
          -1,
          492,
          494
        ],
        "'ASK": [
          -1,
          492,
          494
        ],
        "'NEW": [
          -1,
          492,
          494
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          417
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          418
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "fun-decl": [
          193
        ],
        "data-decl": [
          194
        ],
        "check-block": [
          195
        ],
        "let-stmt": [
          196
        ],
        "var-stmt": [
          197
        ],
        "assign-stmt": [
          198
        ],
        "expr-stmt": [
          199
        ],
        "'LBRACE": [
          22
        ],
        "'RBRACE": [
          419
        ],
        "block-stmt": [
          420
        ],
        "if-stmt": [
          202
        ],
        "for-stmt": [
          203
        ],
        "return-stmt": [
          204
        ],
        "yield-stmt": [
          205
        ],
        "spy-stmt": [
          206
        ],
        "'SPY": [
          207
        ],
        "'PARENSPACE": [
          23
        ],
        "type-ann": [
          24
        ],
        "assert-stmt": [
          421
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "'DATA": [
          31
        ],
        "'IF": [
          209
        ],
        "full-expr": [
          210
        ],
        "'FOR": [
          211
        ],
        "'RETURN": [
          212
        ],
        "'VAR": [
          33
        ],
        "'ATCHECK": [
          34
        ],
        "check-block_A0_I6": [
          422
        ],
        "'ASSERTEQUALS": [
          214
        ],
        "'ASSERTNOTEQUALS": [
          215
        ],
        "'ASSERTTRUE": [
          216
        ],
        "'ASSERTFALSE": [
          217
        ],
        "'ASSERTSATISFIES": [
          218
        ],
        "'ASSERTRAISES": [
          219
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "'YIELD": [
          220
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RBRACE": [
          423
        ]
      },
      {
        "'RBRACE": [
          -1,
          496
        ],
        "'CASE": [
          -1,
          496
        ],
        "'DEFAULT": [
          -1,
          496
        ]
      },
      {
        "'RBRACE": [
          -1,
          498
        ],
        "'CASE": [
          -1,
          498
        ],
        "'DEFAULT": [
          -1,
          498
        ]
      },
      {
        "'RBRACE": [
          -1,
          500
        ]
      },
      {
        "'RBRACE": [
          -1,
          502
        ]
      },
      {
        "'NAME": [
          424
        ]
      },
      {
        "'COLON": [
          425
        ]
      },
      {
        "'COMMA": [
          -1,
          504
        ],
        "'RBRACK": [
          -1,
          504
        ]
      },
      {
        "'RPAREN": [
          426
        ]
      },
      {
        "$": [
          -1,
          506
        ],
        "'NAME": [
          -1,
          506
        ],
        "'SEMI": [
          -1,
          506
        ],
        "'PARENNOSPACE": [
          -1,
          506
        ],
        "'STRING": [
          -1,
          506
        ],
        "'RPAREN": [
          -1,
          506
        ],
        "'LBRACE": [
          -1,
          506
        ],
        "'RBRACE": [
          -1,
          506
        ],
        "'SPY": [
          -1,
          506
        ],
        "'PARENSPACE": [
          -1,
          506
        ],
        "'COMMA": [
          -1,
          506
        ],
        "'INT": [
          -1,
          506
        ],
        "'LONG": [
          -1,
          506
        ],
        "'DOUBLE": [
          -1,
          506
        ],
        "'FLOAT": [
          -1,
          506
        ],
        "'BOOLEAN": [
          -1,
          506
        ],
        "'VOID": [
          -1,
          506
        ],
        "'LT": [
          -1,
          506
        ],
        "'GT": [
          -1,
          506
        ],
        "'THINARROW": [
          -1,
          506
        ],
        "'DATA": [
          -1,
          506
        ],
        "'IF": [
          -1,
          506
        ],
        "'FOR": [
          -1,
          506
        ],
        "'RETURN": [
          -1,
          506
        ],
        "'VAR": [
          -1,
          506
        ],
        "'ATCHECK": [
          -1,
          506
        ],
        "'ASSERTEQUALS": [
          -1,
          506
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          506
        ],
        "'ASSERTTRUE": [
          -1,
          506
        ],
        "'ASSERTFALSE": [
          -1,
          506
        ],
        "'ASSERTSATISFIES": [
          -1,
          506
        ],
        "'ASSERTRAISES": [
          -1,
          506
        ],
        "'IS": [
          -1,
          506
        ],
        "'ISNOT": [
          -1,
          506
        ],
        "'SATISFIES": [
          -1,
          506
        ],
        "'RAISES": [
          -1,
          506
        ],
        "'SWITCH": [
          -1,
          506
        ],
        "'CASE": [
          -1,
          506
        ],
        "'DEFAULT": [
          -1,
          506
        ],
        "'YIELD": [
          -1,
          506
        ],
        "'PLUS": [
          -1,
          506
        ],
        "'DASH": [
          -1,
          506
        ],
        "'TIMES": [
          -1,
          506
        ],
        "'SLASH": [
          -1,
          506
        ],
        "'PERCENT": [
          -1,
          506
        ],
        "'EQUALEQUAL": [
          -1,
          506
        ],
        "'NEQ": [
          -1,
          506
        ],
        "'LEQ": [
          -1,
          506
        ],
        "'GEQ": [
          -1,
          506
        ],
        "'AND": [
          -1,
          506
        ],
        "'OR": [
          -1,
          506
        ],
        "'BANG": [
          -1,
          506
        ],
        "'DOT": [
          -1,
          506
        ],
        "'LBRACK": [
          -1,
          506
        ],
        "'RBRACK": [
          -1,
          506
        ],
        "'NUMBER": [
          -1,
          506
        ],
        "'TRUE": [
          -1,
          506
        ],
        "'FALSE": [
          -1,
          506
        ],
        "'NULL": [
          -1,
          506
        ],
        "'PARENAFTERBRACE": [
          -1,
          506
        ],
        "'TABLE": [
          -1,
          506
        ],
        "'ASK": [
          -1,
          506
        ],
        "'NEW": [
          -1,
          506
        ]
      },
      {
        "'RBRACE": [
          -1,
          508
        ],
        "'ROW": [
          -1,
          508
        ]
      },
      {
        "'SEMI": [
          427
        ]
      },
      {
        "'COLON": [
          428
        ]
      },
      {
        "'NAME": [
          -1,
          510
        ],
        "'STRING": [
          -1,
          510
        ],
        "'LBRACE": [
          -1,
          510
        ],
        "'RBRACE": [
          -1,
          510
        ],
        "'PARENSPACE": [
          -1,
          510
        ],
        "'SWITCH": [
          -1,
          510
        ],
        "'DASH": [
          -1,
          510
        ],
        "'BANG": [
          -1,
          510
        ],
        "'LBRACK": [
          -1,
          510
        ],
        "'NUMBER": [
          -1,
          510
        ],
        "'TRUE": [
          -1,
          510
        ],
        "'FALSE": [
          -1,
          510
        ],
        "'NULL": [
          -1,
          510
        ],
        "'PARENAFTERBRACE": [
          -1,
          510
        ],
        "'TABLE": [
          -1,
          510
        ],
        "'ASK": [
          -1,
          510
        ],
        "'NEW": [
          -1,
          510
        ]
      },
      {
        "'NAME": [
          -1,
          512
        ],
        "'STRING": [
          -1,
          512
        ],
        "'LBRACE": [
          -1,
          512
        ],
        "'PARENSPACE": [
          -1,
          512
        ],
        "'SWITCH": [
          -1,
          512
        ],
        "'DASH": [
          -1,
          512
        ],
        "'BANG": [
          -1,
          512
        ],
        "'LBRACK": [
          -1,
          512
        ],
        "'NUMBER": [
          -1,
          512
        ],
        "'TRUE": [
          -1,
          512
        ],
        "'FALSE": [
          -1,
          512
        ],
        "'NULL": [
          -1,
          512
        ],
        "'PARENAFTERBRACE": [
          -1,
          512
        ],
        "'TABLE": [
          -1,
          512
        ],
        "'ASK": [
          -1,
          512
        ],
        "'OTHERWISE": [
          -1,
          512
        ],
        "'NEW": [
          -1,
          512
        ]
      },
      {
        "'RBRACE": [
          429
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          430
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RPAREN": [
          -1,
          514
        ],
        "'COMMA": [
          -1,
          514
        ]
      },
      {
        "$": [
          -1,
          516
        ],
        "'IMPORT": [
          -1,
          516
        ],
        "'NAME": [
          -1,
          516
        ],
        "'PARENNOSPACE": [
          -1,
          516
        ],
        "'STRING": [
          -1,
          516
        ],
        "'INCLUDE": [
          -1,
          516
        ],
        "'LBRACE": [
          -1,
          516
        ],
        "'PARENSPACE": [
          -1,
          516
        ],
        "'INT": [
          -1,
          516
        ],
        "'LONG": [
          -1,
          516
        ],
        "'DOUBLE": [
          -1,
          516
        ],
        "'FLOAT": [
          -1,
          516
        ],
        "'BOOLEAN": [
          -1,
          516
        ],
        "'VOID": [
          -1,
          516
        ],
        "'DATA": [
          -1,
          516
        ],
        "'VAR": [
          -1,
          516
        ],
        "'ATCHECK": [
          -1,
          516
        ],
        "'SWITCH": [
          -1,
          516
        ],
        "'DASH": [
          -1,
          516
        ],
        "'BANG": [
          -1,
          516
        ],
        "'LBRACK": [
          -1,
          516
        ],
        "'NUMBER": [
          -1,
          516
        ],
        "'TRUE": [
          -1,
          516
        ],
        "'FALSE": [
          -1,
          516
        ],
        "'NULL": [
          -1,
          516
        ],
        "'PARENAFTERBRACE": [
          -1,
          516
        ],
        "'TABLE": [
          -1,
          516
        ],
        "'ASK": [
          -1,
          516
        ],
        "'NEW": [
          -1,
          516
        ]
      },
      {
        "where-clause_I2*": [
          431
        ],
        "'NAME": [
          -1,
          518
        ],
        "'PARENNOSPACE": [
          -1,
          518
        ],
        "'STRING": [
          -1,
          518
        ],
        "'LBRACE": [
          -1,
          518
        ],
        "'RBRACE": [
          -1,
          518
        ],
        "'SPY": [
          -1,
          518
        ],
        "'PARENSPACE": [
          -1,
          518
        ],
        "'INT": [
          -1,
          518
        ],
        "'LONG": [
          -1,
          518
        ],
        "'DOUBLE": [
          -1,
          518
        ],
        "'FLOAT": [
          -1,
          518
        ],
        "'BOOLEAN": [
          -1,
          518
        ],
        "'VOID": [
          -1,
          518
        ],
        "'DATA": [
          -1,
          518
        ],
        "'IF": [
          -1,
          518
        ],
        "'FOR": [
          -1,
          518
        ],
        "'RETURN": [
          -1,
          518
        ],
        "'VAR": [
          -1,
          518
        ],
        "'ATCHECK": [
          -1,
          518
        ],
        "'ASSERTEQUALS": [
          -1,
          518
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          518
        ],
        "'ASSERTTRUE": [
          -1,
          518
        ],
        "'ASSERTFALSE": [
          -1,
          518
        ],
        "'ASSERTSATISFIES": [
          -1,
          518
        ],
        "'ASSERTRAISES": [
          -1,
          518
        ],
        "'SWITCH": [
          -1,
          518
        ],
        "'YIELD": [
          -1,
          518
        ],
        "'DASH": [
          -1,
          518
        ],
        "'BANG": [
          -1,
          518
        ],
        "'LBRACK": [
          -1,
          518
        ],
        "'NUMBER": [
          -1,
          518
        ],
        "'TRUE": [
          -1,
          518
        ],
        "'FALSE": [
          -1,
          518
        ],
        "'NULL": [
          -1,
          518
        ],
        "'PARENAFTERBRACE": [
          -1,
          518
        ],
        "'TABLE": [
          -1,
          518
        ],
        "'ASK": [
          -1,
          518
        ],
        "'NEW": [
          -1,
          518
        ]
      },
      {
        "$": [
          -1,
          520
        ],
        "'NAME": [
          -1,
          520
        ],
        "'PARENNOSPACE": [
          -1,
          520
        ],
        "'STRING": [
          -1,
          520
        ],
        "'LBRACE": [
          -1,
          520
        ],
        "'RBRACE": [
          -1,
          520
        ],
        "'SPY": [
          -1,
          520
        ],
        "'PARENSPACE": [
          -1,
          520
        ],
        "'WHERE": [
          -1,
          520
        ],
        "'INT": [
          -1,
          520
        ],
        "'LONG": [
          -1,
          520
        ],
        "'DOUBLE": [
          -1,
          520
        ],
        "'FLOAT": [
          -1,
          520
        ],
        "'BOOLEAN": [
          -1,
          520
        ],
        "'VOID": [
          -1,
          520
        ],
        "'DATA": [
          -1,
          520
        ],
        "'IF": [
          -1,
          520
        ],
        "'ELSE": [
          -1,
          520
        ],
        "'FOR": [
          -1,
          520
        ],
        "'RETURN": [
          -1,
          520
        ],
        "'VAR": [
          -1,
          520
        ],
        "'ATCHECK": [
          -1,
          520
        ],
        "'ASSERTEQUALS": [
          -1,
          520
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          520
        ],
        "'ASSERTTRUE": [
          -1,
          520
        ],
        "'ASSERTFALSE": [
          -1,
          520
        ],
        "'ASSERTSATISFIES": [
          -1,
          520
        ],
        "'ASSERTRAISES": [
          -1,
          520
        ],
        "'SWITCH": [
          -1,
          520
        ],
        "'YIELD": [
          -1,
          520
        ],
        "'DASH": [
          -1,
          520
        ],
        "'BANG": [
          -1,
          520
        ],
        "'LBRACK": [
          -1,
          520
        ],
        "'RBRACK": [
          -1,
          520
        ],
        "'NUMBER": [
          -1,
          520
        ],
        "'TRUE": [
          -1,
          520
        ],
        "'FALSE": [
          -1,
          520
        ],
        "'NULL": [
          -1,
          520
        ],
        "'PARENAFTERBRACE": [
          -1,
          520
        ],
        "'TABLE": [
          -1,
          520
        ],
        "'ASK": [
          -1,
          520
        ],
        "'NEW": [
          -1,
          520
        ]
      },
      {
        "'NAME": [
          -1,
          522
        ],
        "'PARENNOSPACE": [
          -1,
          522
        ],
        "'STRING": [
          -1,
          522
        ],
        "'LBRACE": [
          -1,
          522
        ],
        "'RBRACE": [
          -1,
          522
        ],
        "'SPY": [
          -1,
          522
        ],
        "'PARENSPACE": [
          -1,
          522
        ],
        "'INT": [
          -1,
          522
        ],
        "'LONG": [
          -1,
          522
        ],
        "'DOUBLE": [
          -1,
          522
        ],
        "'FLOAT": [
          -1,
          522
        ],
        "'BOOLEAN": [
          -1,
          522
        ],
        "'VOID": [
          -1,
          522
        ],
        "'DATA": [
          -1,
          522
        ],
        "'IF": [
          -1,
          522
        ],
        "'FOR": [
          -1,
          522
        ],
        "'RETURN": [
          -1,
          522
        ],
        "'VAR": [
          -1,
          522
        ],
        "'ATCHECK": [
          -1,
          522
        ],
        "'SWITCH": [
          -1,
          522
        ],
        "'YIELD": [
          -1,
          522
        ],
        "'DASH": [
          -1,
          522
        ],
        "'BANG": [
          -1,
          522
        ],
        "'LBRACK": [
          -1,
          522
        ],
        "'NUMBER": [
          -1,
          522
        ],
        "'TRUE": [
          -1,
          522
        ],
        "'FALSE": [
          -1,
          522
        ],
        "'NULL": [
          -1,
          522
        ],
        "'PARENAFTERBRACE": [
          -1,
          522
        ],
        "'TABLE": [
          -1,
          522
        ],
        "'ASK": [
          -1,
          522
        ],
        "'NEW": [
          -1,
          522
        ]
      },
      {
        "'NAME": [
          -1,
          524
        ],
        "'PARENNOSPACE": [
          -1,
          524
        ],
        "'STRING": [
          -1,
          524
        ],
        "'LBRACE": [
          -1,
          524
        ],
        "'RBRACE": [
          -1,
          524
        ],
        "'SPY": [
          -1,
          524
        ],
        "'PARENSPACE": [
          -1,
          524
        ],
        "'INT": [
          -1,
          524
        ],
        "'LONG": [
          -1,
          524
        ],
        "'DOUBLE": [
          -1,
          524
        ],
        "'FLOAT": [
          -1,
          524
        ],
        "'BOOLEAN": [
          -1,
          524
        ],
        "'VOID": [
          -1,
          524
        ],
        "'DATA": [
          -1,
          524
        ],
        "'IF": [
          -1,
          524
        ],
        "'FOR": [
          -1,
          524
        ],
        "'RETURN": [
          -1,
          524
        ],
        "'VAR": [
          -1,
          524
        ],
        "'ATCHECK": [
          -1,
          524
        ],
        "'SWITCH": [
          -1,
          524
        ],
        "'YIELD": [
          -1,
          524
        ],
        "'DASH": [
          -1,
          524
        ],
        "'BANG": [
          -1,
          524
        ],
        "'LBRACK": [
          -1,
          524
        ],
        "'NUMBER": [
          -1,
          524
        ],
        "'TRUE": [
          -1,
          524
        ],
        "'FALSE": [
          -1,
          524
        ],
        "'NULL": [
          -1,
          524
        ],
        "'PARENAFTERBRACE": [
          -1,
          524
        ],
        "'TABLE": [
          -1,
          524
        ],
        "'ASK": [
          -1,
          524
        ],
        "'NEW": [
          -1,
          524
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENSPACE": [
          66
        ],
        "type-ann": [
          300
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "variant-member": [
          432
        ]
      },
      {
        "'RPAREN": [
          -1,
          526
        ],
        "'COMMA": [
          -1,
          526
        ]
      },
      {
        "'SEMI": [
          433
        ]
      },
      {
        "'RPAREN": [
          -1,
          528
        ],
        "'COMMA": [
          -1,
          528
        ]
      },
      {
        "'NAME": [
          434
        ]
      },
      {
        "if-stmt_I5*": [
          435
        ],
        "'NAME": [
          -1,
          530,
          532
        ],
        "'PARENNOSPACE": [
          -1,
          530,
          532
        ],
        "'STRING": [
          -1,
          530,
          532
        ],
        "'LBRACE": [
          -1,
          530,
          532
        ],
        "'RBRACE": [
          -1,
          530,
          532
        ],
        "'SPY": [
          -1,
          530,
          532
        ],
        "'PARENSPACE": [
          -1,
          530,
          532
        ],
        "'INT": [
          -1,
          530,
          532
        ],
        "'LONG": [
          -1,
          530,
          532
        ],
        "'DOUBLE": [
          -1,
          530,
          532
        ],
        "'FLOAT": [
          -1,
          530,
          532
        ],
        "'BOOLEAN": [
          -1,
          530,
          532
        ],
        "'VOID": [
          -1,
          530,
          532
        ],
        "'DATA": [
          -1,
          530,
          532
        ],
        "'IF": [
          -1,
          530,
          532
        ],
        "'ELSE": [
          -1,
          532
        ],
        "'FOR": [
          -1,
          530,
          532
        ],
        "'RETURN": [
          -1,
          530,
          532
        ],
        "'VAR": [
          -1,
          530,
          532
        ],
        "'ATCHECK": [
          -1,
          530,
          532
        ],
        "'ASSERTEQUALS": [
          -1,
          530,
          532
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          530,
          532
        ],
        "'ASSERTTRUE": [
          -1,
          530,
          532
        ],
        "'ASSERTFALSE": [
          -1,
          530,
          532
        ],
        "'ASSERTSATISFIES": [
          -1,
          530,
          532
        ],
        "'ASSERTRAISES": [
          -1,
          530,
          532
        ],
        "'SWITCH": [
          -1,
          530,
          532
        ],
        "'YIELD": [
          -1,
          530,
          532
        ],
        "'DASH": [
          -1,
          530,
          532
        ],
        "'BANG": [
          -1,
          530,
          532
        ],
        "'LBRACK": [
          -1,
          530,
          532
        ],
        "'NUMBER": [
          -1,
          530,
          532
        ],
        "'TRUE": [
          -1,
          530,
          532
        ],
        "'FALSE": [
          -1,
          530,
          532
        ],
        "'NULL": [
          -1,
          530,
          532
        ],
        "'PARENAFTERBRACE": [
          -1,
          530,
          532
        ],
        "'TABLE": [
          -1,
          530,
          532
        ],
        "'ASK": [
          -1,
          530,
          532
        ],
        "'NEW": [
          -1,
          530,
          532
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          436
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RPAREN": [
          437
        ]
      },
      {
        "'RPAREN": [
          438
        ]
      },
      {
        "'NAME": [
          -1,
          534
        ],
        "'PARENNOSPACE": [
          -1,
          534
        ],
        "'STRING": [
          -1,
          534
        ],
        "'LBRACE": [
          -1,
          534
        ],
        "'RBRACE": [
          -1,
          534
        ],
        "'SPY": [
          -1,
          534
        ],
        "'PARENSPACE": [
          -1,
          534
        ],
        "'INT": [
          -1,
          534
        ],
        "'LONG": [
          -1,
          534
        ],
        "'DOUBLE": [
          -1,
          534
        ],
        "'FLOAT": [
          -1,
          534
        ],
        "'BOOLEAN": [
          -1,
          534
        ],
        "'VOID": [
          -1,
          534
        ],
        "'DATA": [
          -1,
          534
        ],
        "'IF": [
          -1,
          534
        ],
        "'FOR": [
          -1,
          534
        ],
        "'RETURN": [
          -1,
          534
        ],
        "'VAR": [
          -1,
          534
        ],
        "'ATCHECK": [
          -1,
          534
        ],
        "'ASSERTEQUALS": [
          -1,
          534
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          534
        ],
        "'ASSERTTRUE": [
          -1,
          534
        ],
        "'ASSERTFALSE": [
          -1,
          534
        ],
        "'ASSERTSATISFIES": [
          -1,
          534
        ],
        "'ASSERTRAISES": [
          -1,
          534
        ],
        "'SWITCH": [
          -1,
          534
        ],
        "'YIELD": [
          -1,
          534
        ],
        "'DASH": [
          -1,
          534
        ],
        "'BANG": [
          -1,
          534
        ],
        "'LBRACK": [
          -1,
          534
        ],
        "'NUMBER": [
          -1,
          534
        ],
        "'TRUE": [
          -1,
          534
        ],
        "'FALSE": [
          -1,
          534
        ],
        "'NULL": [
          -1,
          534
        ],
        "'PARENAFTERBRACE": [
          -1,
          534
        ],
        "'TABLE": [
          -1,
          534
        ],
        "'ASK": [
          -1,
          534
        ],
        "'NEW": [
          -1,
          534
        ]
      },
      {
        "'NAME": [
          -1,
          536
        ],
        "'PARENNOSPACE": [
          -1,
          536
        ],
        "'STRING": [
          -1,
          536
        ],
        "'LBRACE": [
          -1,
          536
        ],
        "'RBRACE": [
          -1,
          536
        ],
        "'SPY": [
          -1,
          536
        ],
        "'PARENSPACE": [
          -1,
          536
        ],
        "'INT": [
          -1,
          536
        ],
        "'LONG": [
          -1,
          536
        ],
        "'DOUBLE": [
          -1,
          536
        ],
        "'FLOAT": [
          -1,
          536
        ],
        "'BOOLEAN": [
          -1,
          536
        ],
        "'VOID": [
          -1,
          536
        ],
        "'DATA": [
          -1,
          536
        ],
        "'IF": [
          -1,
          536
        ],
        "'FOR": [
          -1,
          536
        ],
        "'RETURN": [
          -1,
          536
        ],
        "'VAR": [
          -1,
          536
        ],
        "'ATCHECK": [
          -1,
          536
        ],
        "'ASSERTEQUALS": [
          -1,
          536
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          536
        ],
        "'ASSERTTRUE": [
          -1,
          536
        ],
        "'ASSERTFALSE": [
          -1,
          536
        ],
        "'ASSERTSATISFIES": [
          -1,
          536
        ],
        "'ASSERTRAISES": [
          -1,
          536
        ],
        "'SWITCH": [
          -1,
          536
        ],
        "'YIELD": [
          -1,
          536
        ],
        "'DASH": [
          -1,
          536
        ],
        "'BANG": [
          -1,
          536
        ],
        "'LBRACK": [
          -1,
          536
        ],
        "'NUMBER": [
          -1,
          536
        ],
        "'TRUE": [
          -1,
          536
        ],
        "'FALSE": [
          -1,
          536
        ],
        "'NULL": [
          -1,
          536
        ],
        "'PARENAFTERBRACE": [
          -1,
          536
        ],
        "'TABLE": [
          -1,
          536
        ],
        "'ASK": [
          -1,
          536
        ],
        "'NEW": [
          -1,
          536
        ]
      },
      {
        "'NAME": [
          -1,
          538
        ],
        "'PARENNOSPACE": [
          -1,
          538
        ],
        "'STRING": [
          -1,
          538
        ],
        "'LBRACE": [
          -1,
          538
        ],
        "'RBRACE": [
          -1,
          538
        ],
        "'SPY": [
          -1,
          538
        ],
        "'PARENSPACE": [
          -1,
          538
        ],
        "'INT": [
          -1,
          538
        ],
        "'LONG": [
          -1,
          538
        ],
        "'DOUBLE": [
          -1,
          538
        ],
        "'FLOAT": [
          -1,
          538
        ],
        "'BOOLEAN": [
          -1,
          538
        ],
        "'VOID": [
          -1,
          538
        ],
        "'DATA": [
          -1,
          538
        ],
        "'IF": [
          -1,
          538
        ],
        "'FOR": [
          -1,
          538
        ],
        "'RETURN": [
          -1,
          538
        ],
        "'VAR": [
          -1,
          538
        ],
        "'ATCHECK": [
          -1,
          538
        ],
        "'ASSERTEQUALS": [
          -1,
          538
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          538
        ],
        "'ASSERTTRUE": [
          -1,
          538
        ],
        "'ASSERTFALSE": [
          -1,
          538
        ],
        "'ASSERTSATISFIES": [
          -1,
          538
        ],
        "'ASSERTRAISES": [
          -1,
          538
        ],
        "'SWITCH": [
          -1,
          538
        ],
        "'YIELD": [
          -1,
          538
        ],
        "'DASH": [
          -1,
          538
        ],
        "'BANG": [
          -1,
          538
        ],
        "'LBRACK": [
          -1,
          538
        ],
        "'NUMBER": [
          -1,
          538
        ],
        "'TRUE": [
          -1,
          538
        ],
        "'FALSE": [
          -1,
          538
        ],
        "'NULL": [
          -1,
          538
        ],
        "'PARENAFTERBRACE": [
          -1,
          538
        ],
        "'TABLE": [
          -1,
          538
        ],
        "'ASK": [
          -1,
          538
        ],
        "'NEW": [
          -1,
          538
        ]
      },
      {
        "'NAME": [
          -1,
          540
        ],
        "'PARENNOSPACE": [
          -1,
          540
        ],
        "'STRING": [
          -1,
          540
        ],
        "'LBRACE": [
          -1,
          540
        ],
        "'RBRACE": [
          -1,
          540
        ],
        "'SPY": [
          -1,
          540
        ],
        "'PARENSPACE": [
          -1,
          540
        ],
        "'INT": [
          -1,
          540
        ],
        "'LONG": [
          -1,
          540
        ],
        "'DOUBLE": [
          -1,
          540
        ],
        "'FLOAT": [
          -1,
          540
        ],
        "'BOOLEAN": [
          -1,
          540
        ],
        "'VOID": [
          -1,
          540
        ],
        "'DATA": [
          -1,
          540
        ],
        "'IF": [
          -1,
          540
        ],
        "'FOR": [
          -1,
          540
        ],
        "'RETURN": [
          -1,
          540
        ],
        "'VAR": [
          -1,
          540
        ],
        "'ATCHECK": [
          -1,
          540
        ],
        "'ASSERTEQUALS": [
          -1,
          540
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          540
        ],
        "'ASSERTTRUE": [
          -1,
          540
        ],
        "'ASSERTFALSE": [
          -1,
          540
        ],
        "'ASSERTSATISFIES": [
          -1,
          540
        ],
        "'ASSERTRAISES": [
          -1,
          540
        ],
        "'SWITCH": [
          -1,
          540
        ],
        "'YIELD": [
          -1,
          540
        ],
        "'DASH": [
          -1,
          540
        ],
        "'BANG": [
          -1,
          540
        ],
        "'LBRACK": [
          -1,
          540
        ],
        "'NUMBER": [
          -1,
          540
        ],
        "'TRUE": [
          -1,
          540
        ],
        "'FALSE": [
          -1,
          540
        ],
        "'NULL": [
          -1,
          540
        ],
        "'PARENAFTERBRACE": [
          -1,
          540
        ],
        "'TABLE": [
          -1,
          540
        ],
        "'ASK": [
          -1,
          540
        ],
        "'NEW": [
          -1,
          540
        ]
      },
      {
        "'NAME": [
          -1,
          542
        ],
        "'PARENNOSPACE": [
          -1,
          542
        ],
        "'STRING": [
          -1,
          542
        ],
        "'LBRACE": [
          -1,
          542
        ],
        "'RBRACE": [
          -1,
          542
        ],
        "'SPY": [
          -1,
          542
        ],
        "'PARENSPACE": [
          -1,
          542
        ],
        "'INT": [
          -1,
          542
        ],
        "'LONG": [
          -1,
          542
        ],
        "'DOUBLE": [
          -1,
          542
        ],
        "'FLOAT": [
          -1,
          542
        ],
        "'BOOLEAN": [
          -1,
          542
        ],
        "'VOID": [
          -1,
          542
        ],
        "'DATA": [
          -1,
          542
        ],
        "'IF": [
          -1,
          542
        ],
        "'FOR": [
          -1,
          542
        ],
        "'RETURN": [
          -1,
          542
        ],
        "'VAR": [
          -1,
          542
        ],
        "'ATCHECK": [
          -1,
          542
        ],
        "'ASSERTEQUALS": [
          -1,
          542
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          542
        ],
        "'ASSERTTRUE": [
          -1,
          542
        ],
        "'ASSERTFALSE": [
          -1,
          542
        ],
        "'ASSERTSATISFIES": [
          -1,
          542
        ],
        "'ASSERTRAISES": [
          -1,
          542
        ],
        "'SWITCH": [
          -1,
          542
        ],
        "'YIELD": [
          -1,
          542
        ],
        "'DASH": [
          -1,
          542
        ],
        "'BANG": [
          -1,
          542
        ],
        "'LBRACK": [
          -1,
          542
        ],
        "'NUMBER": [
          -1,
          542
        ],
        "'TRUE": [
          -1,
          542
        ],
        "'FALSE": [
          -1,
          542
        ],
        "'NULL": [
          -1,
          542
        ],
        "'PARENAFTERBRACE": [
          -1,
          542
        ],
        "'TABLE": [
          -1,
          542
        ],
        "'ASK": [
          -1,
          542
        ],
        "'NEW": [
          -1,
          542
        ]
      },
      {
        "'NAME": [
          -1,
          544
        ],
        "'PARENNOSPACE": [
          -1,
          544
        ],
        "'STRING": [
          -1,
          544
        ],
        "'LBRACE": [
          -1,
          544
        ],
        "'RBRACE": [
          -1,
          544
        ],
        "'SPY": [
          -1,
          544
        ],
        "'PARENSPACE": [
          -1,
          544
        ],
        "'INT": [
          -1,
          544
        ],
        "'LONG": [
          -1,
          544
        ],
        "'DOUBLE": [
          -1,
          544
        ],
        "'FLOAT": [
          -1,
          544
        ],
        "'BOOLEAN": [
          -1,
          544
        ],
        "'VOID": [
          -1,
          544
        ],
        "'DATA": [
          -1,
          544
        ],
        "'IF": [
          -1,
          544
        ],
        "'FOR": [
          -1,
          544
        ],
        "'RETURN": [
          -1,
          544
        ],
        "'VAR": [
          -1,
          544
        ],
        "'ATCHECK": [
          -1,
          544
        ],
        "'ASSERTEQUALS": [
          -1,
          544
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          544
        ],
        "'ASSERTTRUE": [
          -1,
          544
        ],
        "'ASSERTFALSE": [
          -1,
          544
        ],
        "'ASSERTSATISFIES": [
          -1,
          544
        ],
        "'ASSERTRAISES": [
          -1,
          544
        ],
        "'SWITCH": [
          -1,
          544
        ],
        "'YIELD": [
          -1,
          544
        ],
        "'DASH": [
          -1,
          544
        ],
        "'BANG": [
          -1,
          544
        ],
        "'LBRACK": [
          -1,
          544
        ],
        "'NUMBER": [
          -1,
          544
        ],
        "'TRUE": [
          -1,
          544
        ],
        "'FALSE": [
          -1,
          544
        ],
        "'NULL": [
          -1,
          544
        ],
        "'PARENAFTERBRACE": [
          -1,
          544
        ],
        "'TABLE": [
          -1,
          544
        ],
        "'ASK": [
          -1,
          544
        ],
        "'NEW": [
          -1,
          544
        ]
      },
      {
        "'RPAREN": [
          439
        ]
      },
      {
        "'RPAREN": [
          440
        ]
      },
      {
        "$": [
          -1,
          546
        ],
        "'NAME": [
          -1,
          546
        ],
        "'PARENNOSPACE": [
          -1,
          546
        ],
        "'STRING": [
          -1,
          546
        ],
        "'LBRACE": [
          -1,
          546
        ],
        "'RBRACE": [
          -1,
          546
        ],
        "'SPY": [
          -1,
          546
        ],
        "'PARENSPACE": [
          -1,
          546
        ],
        "'INT": [
          -1,
          546
        ],
        "'LONG": [
          -1,
          546
        ],
        "'DOUBLE": [
          -1,
          546
        ],
        "'FLOAT": [
          -1,
          546
        ],
        "'BOOLEAN": [
          -1,
          546
        ],
        "'VOID": [
          -1,
          546
        ],
        "'DATA": [
          -1,
          546
        ],
        "'IF": [
          -1,
          546
        ],
        "'FOR": [
          -1,
          546
        ],
        "'RETURN": [
          -1,
          546
        ],
        "'VAR": [
          -1,
          546
        ],
        "'ATCHECK": [
          -1,
          546
        ],
        "'ASSERTEQUALS": [
          -1,
          546
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          546
        ],
        "'ASSERTTRUE": [
          -1,
          546
        ],
        "'ASSERTFALSE": [
          -1,
          546
        ],
        "'ASSERTSATISFIES": [
          -1,
          546
        ],
        "'ASSERTRAISES": [
          -1,
          546
        ],
        "'SWITCH": [
          -1,
          546
        ],
        "'YIELD": [
          -1,
          546
        ],
        "'DASH": [
          -1,
          546
        ],
        "'BANG": [
          -1,
          546
        ],
        "'LBRACK": [
          -1,
          546
        ],
        "'NUMBER": [
          -1,
          546
        ],
        "'TRUE": [
          -1,
          546
        ],
        "'FALSE": [
          -1,
          546
        ],
        "'NULL": [
          -1,
          546
        ],
        "'PARENAFTERBRACE": [
          -1,
          546
        ],
        "'TABLE": [
          -1,
          546
        ],
        "'ASK": [
          -1,
          546
        ],
        "'NEW": [
          -1,
          546
        ]
      },
      {
        "'NAME": [
          -1,
          548
        ],
        "'PARENNOSPACE": [
          -1,
          548
        ],
        "'STRING": [
          -1,
          548
        ],
        "'LBRACE": [
          -1,
          548
        ],
        "'RBRACE": [
          -1,
          548
        ],
        "'SPY": [
          -1,
          548
        ],
        "'PARENSPACE": [
          -1,
          548
        ],
        "'INT": [
          -1,
          548
        ],
        "'LONG": [
          -1,
          548
        ],
        "'DOUBLE": [
          -1,
          548
        ],
        "'FLOAT": [
          -1,
          548
        ],
        "'BOOLEAN": [
          -1,
          548
        ],
        "'VOID": [
          -1,
          548
        ],
        "'DATA": [
          -1,
          548
        ],
        "'IF": [
          -1,
          548
        ],
        "'FOR": [
          -1,
          548
        ],
        "'RETURN": [
          -1,
          548
        ],
        "'VAR": [
          -1,
          548
        ],
        "'ATCHECK": [
          -1,
          548
        ],
        "'ASSERTEQUALS": [
          -1,
          548
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          548
        ],
        "'ASSERTTRUE": [
          -1,
          548
        ],
        "'ASSERTFALSE": [
          -1,
          548
        ],
        "'ASSERTSATISFIES": [
          -1,
          548
        ],
        "'ASSERTRAISES": [
          -1,
          548
        ],
        "'SWITCH": [
          -1,
          548
        ],
        "'YIELD": [
          -1,
          548
        ],
        "'DASH": [
          -1,
          548
        ],
        "'BANG": [
          -1,
          548
        ],
        "'LBRACK": [
          -1,
          548
        ],
        "'NUMBER": [
          -1,
          548
        ],
        "'TRUE": [
          -1,
          548
        ],
        "'FALSE": [
          -1,
          548
        ],
        "'NULL": [
          -1,
          548
        ],
        "'PARENAFTERBRACE": [
          -1,
          548
        ],
        "'TABLE": [
          -1,
          548
        ],
        "'ASK": [
          -1,
          548
        ],
        "'NEW": [
          -1,
          548
        ]
      },
      {
        "'NAME": [
          -1,
          550
        ],
        "'PARENNOSPACE": [
          -1,
          550
        ],
        "'STRING": [
          -1,
          550
        ],
        "'LBRACE": [
          -1,
          550
        ],
        "'RBRACE": [
          -1,
          550
        ],
        "'SPY": [
          -1,
          550
        ],
        "'PARENSPACE": [
          -1,
          550
        ],
        "'INT": [
          -1,
          550
        ],
        "'LONG": [
          -1,
          550
        ],
        "'DOUBLE": [
          -1,
          550
        ],
        "'FLOAT": [
          -1,
          550
        ],
        "'BOOLEAN": [
          -1,
          550
        ],
        "'VOID": [
          -1,
          550
        ],
        "'DATA": [
          -1,
          550
        ],
        "'IF": [
          -1,
          550
        ],
        "'FOR": [
          -1,
          550
        ],
        "'RETURN": [
          -1,
          550
        ],
        "'VAR": [
          -1,
          550
        ],
        "'ATCHECK": [
          -1,
          550
        ],
        "'ASSERTEQUALS": [
          -1,
          550
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          550
        ],
        "'ASSERTTRUE": [
          -1,
          550
        ],
        "'ASSERTFALSE": [
          -1,
          550
        ],
        "'ASSERTSATISFIES": [
          -1,
          550
        ],
        "'ASSERTRAISES": [
          -1,
          550
        ],
        "'SWITCH": [
          -1,
          550
        ],
        "'YIELD": [
          -1,
          550
        ],
        "'DASH": [
          -1,
          550
        ],
        "'BANG": [
          -1,
          550
        ],
        "'LBRACK": [
          -1,
          550
        ],
        "'NUMBER": [
          -1,
          550
        ],
        "'TRUE": [
          -1,
          550
        ],
        "'FALSE": [
          -1,
          550
        ],
        "'NULL": [
          -1,
          550
        ],
        "'PARENAFTERBRACE": [
          -1,
          550
        ],
        "'TABLE": [
          -1,
          550
        ],
        "'ASK": [
          -1,
          550
        ],
        "'NEW": [
          -1,
          550
        ]
      },
      {
        "'NAME": [
          -1,
          552
        ],
        "'PARENNOSPACE": [
          -1,
          552
        ],
        "'STRING": [
          -1,
          552
        ],
        "'LBRACE": [
          -1,
          552
        ],
        "'RBRACE": [
          -1,
          552
        ],
        "'SPY": [
          -1,
          552
        ],
        "'PARENSPACE": [
          -1,
          552
        ],
        "'INT": [
          -1,
          552
        ],
        "'LONG": [
          -1,
          552
        ],
        "'DOUBLE": [
          -1,
          552
        ],
        "'FLOAT": [
          -1,
          552
        ],
        "'BOOLEAN": [
          -1,
          552
        ],
        "'VOID": [
          -1,
          552
        ],
        "'DATA": [
          -1,
          552
        ],
        "'IF": [
          -1,
          552
        ],
        "'FOR": [
          -1,
          552
        ],
        "'RETURN": [
          -1,
          552
        ],
        "'VAR": [
          -1,
          552
        ],
        "'ATCHECK": [
          -1,
          552
        ],
        "'ASSERTEQUALS": [
          -1,
          552
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          552
        ],
        "'ASSERTTRUE": [
          -1,
          552
        ],
        "'ASSERTFALSE": [
          -1,
          552
        ],
        "'ASSERTSATISFIES": [
          -1,
          552
        ],
        "'ASSERTRAISES": [
          -1,
          552
        ],
        "'SWITCH": [
          -1,
          552
        ],
        "'YIELD": [
          -1,
          552
        ],
        "'DASH": [
          -1,
          552
        ],
        "'BANG": [
          -1,
          552
        ],
        "'LBRACK": [
          -1,
          552
        ],
        "'NUMBER": [
          -1,
          552
        ],
        "'TRUE": [
          -1,
          552
        ],
        "'FALSE": [
          -1,
          552
        ],
        "'NULL": [
          -1,
          552
        ],
        "'PARENAFTERBRACE": [
          -1,
          552
        ],
        "'TABLE": [
          -1,
          552
        ],
        "'ASK": [
          -1,
          552
        ],
        "'NEW": [
          -1,
          552
        ]
      },
      {
        "$": [
          -1,
          554
        ],
        "'NAME": [
          -1,
          554
        ],
        "'SEMI": [
          -1,
          554
        ],
        "'PARENNOSPACE": [
          -1,
          554
        ],
        "'STRING": [
          -1,
          554
        ],
        "'RPAREN": [
          -1,
          554
        ],
        "'LBRACE": [
          -1,
          554
        ],
        "'RBRACE": [
          -1,
          554
        ],
        "'SPY": [
          -1,
          554
        ],
        "'PARENSPACE": [
          -1,
          554
        ],
        "'COMMA": [
          -1,
          554
        ],
        "'INT": [
          -1,
          554
        ],
        "'LONG": [
          -1,
          554
        ],
        "'DOUBLE": [
          -1,
          554
        ],
        "'FLOAT": [
          -1,
          554
        ],
        "'BOOLEAN": [
          -1,
          554
        ],
        "'VOID": [
          -1,
          554
        ],
        "'LT": [
          -1,
          554
        ],
        "'GT": [
          -1,
          554
        ],
        "'THINARROW": [
          -1,
          554
        ],
        "'DATA": [
          -1,
          554
        ],
        "'IF": [
          -1,
          554
        ],
        "'FOR": [
          -1,
          554
        ],
        "'RETURN": [
          -1,
          554
        ],
        "'VAR": [
          -1,
          554
        ],
        "'ATCHECK": [
          -1,
          554
        ],
        "'ASSERTEQUALS": [
          -1,
          554
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          554
        ],
        "'ASSERTTRUE": [
          -1,
          554
        ],
        "'ASSERTFALSE": [
          -1,
          554
        ],
        "'ASSERTSATISFIES": [
          -1,
          554
        ],
        "'ASSERTRAISES": [
          -1,
          554
        ],
        "'IS": [
          -1,
          554
        ],
        "'ISNOT": [
          -1,
          554
        ],
        "'SATISFIES": [
          -1,
          554
        ],
        "'RAISES": [
          -1,
          554
        ],
        "'SWITCH": [
          -1,
          554
        ],
        "'CASE": [
          -1,
          554
        ],
        "'DEFAULT": [
          -1,
          554
        ],
        "'YIELD": [
          -1,
          554
        ],
        "'PLUS": [
          -1,
          554
        ],
        "'DASH": [
          -1,
          554
        ],
        "'TIMES": [
          -1,
          554
        ],
        "'SLASH": [
          -1,
          554
        ],
        "'PERCENT": [
          -1,
          554
        ],
        "'EQUALEQUAL": [
          -1,
          554
        ],
        "'NEQ": [
          -1,
          554
        ],
        "'LEQ": [
          -1,
          554
        ],
        "'GEQ": [
          -1,
          554
        ],
        "'AND": [
          -1,
          554
        ],
        "'OR": [
          -1,
          554
        ],
        "'BANG": [
          -1,
          554
        ],
        "'DOT": [
          -1,
          554
        ],
        "'LBRACK": [
          -1,
          554
        ],
        "'RBRACK": [
          -1,
          554
        ],
        "'NUMBER": [
          -1,
          554
        ],
        "'TRUE": [
          -1,
          554
        ],
        "'FALSE": [
          -1,
          554
        ],
        "'NULL": [
          -1,
          554
        ],
        "'PARENAFTERBRACE": [
          -1,
          554
        ],
        "'TABLE": [
          -1,
          554
        ],
        "'ASK": [
          -1,
          554
        ],
        "'NEW": [
          -1,
          554
        ]
      },
      {
        "'PARENNOSPACE": [
          441
        ],
        "'COLON": [
          442
        ]
      },
      {
        "switch-body": [
          443
        ],
        "switch-body_I0*": [
          444
        ],
        "'NAME": [
          -1,
          556
        ],
        "'PARENNOSPACE": [
          -1,
          556
        ],
        "'STRING": [
          -1,
          556
        ],
        "'LBRACE": [
          -1,
          556
        ],
        "'SPY": [
          -1,
          556
        ],
        "'PARENSPACE": [
          -1,
          556
        ],
        "'INT": [
          -1,
          556
        ],
        "'LONG": [
          -1,
          556
        ],
        "'DOUBLE": [
          -1,
          556
        ],
        "'FLOAT": [
          -1,
          556
        ],
        "'BOOLEAN": [
          -1,
          556
        ],
        "'VOID": [
          -1,
          556
        ],
        "'DATA": [
          -1,
          556
        ],
        "'IF": [
          -1,
          556
        ],
        "'FOR": [
          -1,
          556
        ],
        "'RETURN": [
          -1,
          556
        ],
        "'VAR": [
          -1,
          556
        ],
        "'ATCHECK": [
          -1,
          556
        ],
        "'SWITCH": [
          -1,
          556
        ],
        "'YIELD": [
          -1,
          556
        ],
        "'DASH": [
          -1,
          556
        ],
        "'BANG": [
          -1,
          556
        ],
        "'LBRACK": [
          -1,
          556
        ],
        "'NUMBER": [
          -1,
          556
        ],
        "'TRUE": [
          -1,
          556
        ],
        "'FALSE": [
          -1,
          556
        ],
        "'NULL": [
          -1,
          556
        ],
        "'PARENAFTERBRACE": [
          -1,
          556
        ],
        "'TABLE": [
          -1,
          556
        ],
        "'ASK": [
          -1,
          556
        ],
        "'NEW": [
          -1,
          556
        ]
      },
      {
        "block": [
          445
        ],
        "'LBRACE": [
          297
        ]
      },
      {
        "'RBRACE": [
          -1,
          558
        ],
        "'ROW": [
          -1,
          558
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          446
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "$": [
          -1,
          560
        ],
        "'NAME": [
          -1,
          560
        ],
        "'SEMI": [
          -1,
          560
        ],
        "'PARENNOSPACE": [
          -1,
          560
        ],
        "'STRING": [
          -1,
          560
        ],
        "'RPAREN": [
          -1,
          560
        ],
        "'LBRACE": [
          -1,
          560
        ],
        "'RBRACE": [
          -1,
          560
        ],
        "'SPY": [
          -1,
          560
        ],
        "'PARENSPACE": [
          -1,
          560
        ],
        "'COMMA": [
          -1,
          560
        ],
        "'INT": [
          -1,
          560
        ],
        "'LONG": [
          -1,
          560
        ],
        "'DOUBLE": [
          -1,
          560
        ],
        "'FLOAT": [
          -1,
          560
        ],
        "'BOOLEAN": [
          -1,
          560
        ],
        "'VOID": [
          -1,
          560
        ],
        "'LT": [
          -1,
          560
        ],
        "'GT": [
          -1,
          560
        ],
        "'THINARROW": [
          -1,
          560
        ],
        "'DATA": [
          -1,
          560
        ],
        "'IF": [
          -1,
          560
        ],
        "'FOR": [
          -1,
          560
        ],
        "'RETURN": [
          -1,
          560
        ],
        "'VAR": [
          -1,
          560
        ],
        "'ATCHECK": [
          -1,
          560
        ],
        "'ASSERTEQUALS": [
          -1,
          560
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          560
        ],
        "'ASSERTTRUE": [
          -1,
          560
        ],
        "'ASSERTFALSE": [
          -1,
          560
        ],
        "'ASSERTSATISFIES": [
          -1,
          560
        ],
        "'ASSERTRAISES": [
          -1,
          560
        ],
        "'IS": [
          -1,
          560
        ],
        "'ISNOT": [
          -1,
          560
        ],
        "'SATISFIES": [
          -1,
          560
        ],
        "'RAISES": [
          -1,
          560
        ],
        "'SWITCH": [
          -1,
          560
        ],
        "'CASE": [
          -1,
          560
        ],
        "'DEFAULT": [
          -1,
          560
        ],
        "'YIELD": [
          -1,
          560
        ],
        "'PLUS": [
          -1,
          560
        ],
        "'DASH": [
          -1,
          560
        ],
        "'TIMES": [
          -1,
          560
        ],
        "'SLASH": [
          -1,
          560
        ],
        "'PERCENT": [
          -1,
          560
        ],
        "'EQUALEQUAL": [
          -1,
          560
        ],
        "'NEQ": [
          -1,
          560
        ],
        "'LEQ": [
          -1,
          560
        ],
        "'GEQ": [
          -1,
          560
        ],
        "'AND": [
          -1,
          560
        ],
        "'OR": [
          -1,
          560
        ],
        "'BANG": [
          -1,
          560
        ],
        "'DOT": [
          -1,
          560
        ],
        "'LBRACK": [
          -1,
          560
        ],
        "'RBRACK": [
          -1,
          560
        ],
        "'NUMBER": [
          -1,
          560
        ],
        "'TRUE": [
          -1,
          560
        ],
        "'FALSE": [
          -1,
          560
        ],
        "'NULL": [
          -1,
          560
        ],
        "'PARENAFTERBRACE": [
          -1,
          560
        ],
        "'TABLE": [
          -1,
          560
        ],
        "'ASK": [
          -1,
          560
        ],
        "'NEW": [
          -1,
          560
        ]
      },
      {
        "'SEMI": [
          -1,
          562
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "fun-decl": [
          193
        ],
        "data-decl": [
          194
        ],
        "check-block": [
          195
        ],
        "let-stmt": [
          196
        ],
        "var-stmt": [
          197
        ],
        "assign-stmt": [
          198
        ],
        "expr-stmt": [
          199
        ],
        "'LBRACE": [
          22
        ],
        "'RBRACE": [
          447
        ],
        "block-stmt": [
          448
        ],
        "if-stmt": [
          202
        ],
        "for-stmt": [
          203
        ],
        "return-stmt": [
          204
        ],
        "yield-stmt": [
          205
        ],
        "spy-stmt": [
          206
        ],
        "'SPY": [
          207
        ],
        "'PARENSPACE": [
          23
        ],
        "type-ann": [
          24
        ],
        "where-clause_I2": [
          449
        ],
        "assert-stmt": [
          450
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "'DATA": [
          31
        ],
        "'IF": [
          209
        ],
        "full-expr": [
          210
        ],
        "'FOR": [
          211
        ],
        "'RETURN": [
          212
        ],
        "'VAR": [
          33
        ],
        "'ATCHECK": [
          34
        ],
        "'ASSERTEQUALS": [
          214
        ],
        "'ASSERTNOTEQUALS": [
          215
        ],
        "'ASSERTTRUE": [
          216
        ],
        "'ASSERTFALSE": [
          217
        ],
        "'ASSERTSATISFIES": [
          218
        ],
        "'ASSERTRAISES": [
          219
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "'YIELD": [
          220
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RPAREN": [
          -1,
          564
        ],
        "'COMMA": [
          -1,
          564
        ]
      },
      {
        "'NAME": [
          -1,
          566
        ],
        "'PARENNOSPACE": [
          -1,
          566
        ],
        "'STRING": [
          -1,
          566
        ],
        "'LBRACE": [
          -1,
          566
        ],
        "'RBRACE": [
          -1,
          566
        ],
        "'SPY": [
          -1,
          566
        ],
        "'PARENSPACE": [
          -1,
          566
        ],
        "'INT": [
          -1,
          566
        ],
        "'LONG": [
          -1,
          566
        ],
        "'DOUBLE": [
          -1,
          566
        ],
        "'FLOAT": [
          -1,
          566
        ],
        "'BOOLEAN": [
          -1,
          566
        ],
        "'VOID": [
          -1,
          566
        ],
        "'DATA": [
          -1,
          566
        ],
        "'IF": [
          -1,
          566
        ],
        "'FOR": [
          -1,
          566
        ],
        "'RETURN": [
          -1,
          566
        ],
        "'VAR": [
          -1,
          566
        ],
        "'ATCHECK": [
          -1,
          566
        ],
        "'ASSERTEQUALS": [
          -1,
          566
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          566
        ],
        "'ASSERTTRUE": [
          -1,
          566
        ],
        "'ASSERTFALSE": [
          -1,
          566
        ],
        "'ASSERTSATISFIES": [
          -1,
          566
        ],
        "'ASSERTRAISES": [
          -1,
          566
        ],
        "'SWITCH": [
          -1,
          566
        ],
        "'YIELD": [
          -1,
          566
        ],
        "'DASH": [
          -1,
          566
        ],
        "'BANG": [
          -1,
          566
        ],
        "'LBRACK": [
          -1,
          566
        ],
        "'NUMBER": [
          -1,
          566
        ],
        "'TRUE": [
          -1,
          566
        ],
        "'FALSE": [
          -1,
          566
        ],
        "'NULL": [
          -1,
          566
        ],
        "'PARENAFTERBRACE": [
          -1,
          566
        ],
        "'TABLE": [
          -1,
          566
        ],
        "'ASK": [
          -1,
          566
        ],
        "'NEW": [
          -1,
          566
        ]
      },
      {
        "'RPAREN": [
          -1,
          568
        ],
        "'COMMA": [
          -1,
          568
        ]
      },
      {
        "if-stmt_I6?": [
          451
        ],
        "if-stmt_I5": [
          452
        ],
        "'ELSE": [
          453
        ],
        "if-stmt_I6": [
          454
        ],
        "'NAME": [
          -1,
          570,
          572
        ],
        "'PARENNOSPACE": [
          -1,
          570,
          572
        ],
        "'STRING": [
          -1,
          570,
          572
        ],
        "'LBRACE": [
          -1,
          570,
          572
        ],
        "'RBRACE": [
          -1,
          570,
          572
        ],
        "'SPY": [
          -1,
          570,
          572
        ],
        "'PARENSPACE": [
          -1,
          570,
          572
        ],
        "'INT": [
          -1,
          570,
          572
        ],
        "'LONG": [
          -1,
          570,
          572
        ],
        "'DOUBLE": [
          -1,
          570,
          572
        ],
        "'FLOAT": [
          -1,
          570,
          572
        ],
        "'BOOLEAN": [
          -1,
          570,
          572
        ],
        "'VOID": [
          -1,
          570,
          572
        ],
        "'DATA": [
          -1,
          570,
          572
        ],
        "'IF": [
          -1,
          570,
          572
        ],
        "'FOR": [
          -1,
          570,
          572
        ],
        "'RETURN": [
          -1,
          570,
          572
        ],
        "'VAR": [
          -1,
          570,
          572
        ],
        "'ATCHECK": [
          -1,
          570,
          572
        ],
        "'ASSERTEQUALS": [
          -1,
          570,
          572
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          570,
          572
        ],
        "'ASSERTTRUE": [
          -1,
          570,
          572
        ],
        "'ASSERTFALSE": [
          -1,
          570,
          572
        ],
        "'ASSERTSATISFIES": [
          -1,
          570,
          572
        ],
        "'ASSERTRAISES": [
          -1,
          570,
          572
        ],
        "'SWITCH": [
          -1,
          570,
          572
        ],
        "'YIELD": [
          -1,
          570,
          572
        ],
        "'DASH": [
          -1,
          570,
          572
        ],
        "'BANG": [
          -1,
          570,
          572
        ],
        "'LBRACK": [
          -1,
          570,
          572
        ],
        "'NUMBER": [
          -1,
          570,
          572
        ],
        "'TRUE": [
          -1,
          570,
          572
        ],
        "'FALSE": [
          -1,
          570,
          572
        ],
        "'NULL": [
          -1,
          570,
          572
        ],
        "'PARENAFTERBRACE": [
          -1,
          570,
          572
        ],
        "'TABLE": [
          -1,
          570,
          572
        ],
        "'ASK": [
          -1,
          570,
          572
        ],
        "'NEW": [
          -1,
          570,
          572
        ]
      },
      {
        "'RPAREN": [
          455
        ]
      },
      {
        "'SEMI": [
          456
        ],
        "assert-stmt_A0_I6?": [
          457
        ],
        "assert-stmt_A0_I6": [
          458
        ],
        "'NAME": [
          -1,
          574,
          576
        ],
        "'PARENNOSPACE": [
          -1,
          574,
          576
        ],
        "'STRING": [
          -1,
          574,
          576
        ],
        "'LBRACE": [
          -1,
          574,
          576
        ],
        "'RBRACE": [
          -1,
          574,
          576
        ],
        "'SPY": [
          -1,
          574,
          576
        ],
        "'PARENSPACE": [
          -1,
          574,
          576
        ],
        "'INT": [
          -1,
          574,
          576
        ],
        "'LONG": [
          -1,
          574,
          576
        ],
        "'DOUBLE": [
          -1,
          574,
          576
        ],
        "'FLOAT": [
          -1,
          574,
          576
        ],
        "'BOOLEAN": [
          -1,
          574,
          576
        ],
        "'VOID": [
          -1,
          574,
          576
        ],
        "'DATA": [
          -1,
          574,
          576
        ],
        "'IF": [
          -1,
          574,
          576
        ],
        "'FOR": [
          -1,
          574,
          576
        ],
        "'RETURN": [
          -1,
          574,
          576
        ],
        "'VAR": [
          -1,
          574,
          576
        ],
        "'ATCHECK": [
          -1,
          574,
          576
        ],
        "'ASSERTEQUALS": [
          -1,
          574,
          576
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          574,
          576
        ],
        "'ASSERTTRUE": [
          -1,
          574,
          576
        ],
        "'ASSERTFALSE": [
          -1,
          574,
          576
        ],
        "'ASSERTSATISFIES": [
          -1,
          574,
          576
        ],
        "'ASSERTRAISES": [
          -1,
          574,
          576
        ],
        "'SWITCH": [
          -1,
          574,
          576
        ],
        "'YIELD": [
          -1,
          574,
          576
        ],
        "'DASH": [
          -1,
          574,
          576
        ],
        "'BANG": [
          -1,
          574,
          576
        ],
        "'LBRACK": [
          -1,
          574,
          576
        ],
        "'NUMBER": [
          -1,
          574,
          576
        ],
        "'TRUE": [
          -1,
          574,
          576
        ],
        "'FALSE": [
          -1,
          574,
          576
        ],
        "'NULL": [
          -1,
          574,
          576
        ],
        "'PARENAFTERBRACE": [
          -1,
          574,
          576
        ],
        "'TABLE": [
          -1,
          574,
          576
        ],
        "'ASK": [
          -1,
          574,
          576
        ],
        "'NEW": [
          -1,
          574,
          576
        ]
      },
      {
        "'SEMI": [
          459
        ],
        "assert-stmt_A1_I6?": [
          460
        ],
        "assert-stmt_A1_I6": [
          461
        ],
        "'NAME": [
          -1,
          578,
          580
        ],
        "'PARENNOSPACE": [
          -1,
          578,
          580
        ],
        "'STRING": [
          -1,
          578,
          580
        ],
        "'LBRACE": [
          -1,
          578,
          580
        ],
        "'RBRACE": [
          -1,
          578,
          580
        ],
        "'SPY": [
          -1,
          578,
          580
        ],
        "'PARENSPACE": [
          -1,
          578,
          580
        ],
        "'INT": [
          -1,
          578,
          580
        ],
        "'LONG": [
          -1,
          578,
          580
        ],
        "'DOUBLE": [
          -1,
          578,
          580
        ],
        "'FLOAT": [
          -1,
          578,
          580
        ],
        "'BOOLEAN": [
          -1,
          578,
          580
        ],
        "'VOID": [
          -1,
          578,
          580
        ],
        "'DATA": [
          -1,
          578,
          580
        ],
        "'IF": [
          -1,
          578,
          580
        ],
        "'FOR": [
          -1,
          578,
          580
        ],
        "'RETURN": [
          -1,
          578,
          580
        ],
        "'VAR": [
          -1,
          578,
          580
        ],
        "'ATCHECK": [
          -1,
          578,
          580
        ],
        "'ASSERTEQUALS": [
          -1,
          578,
          580
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          578,
          580
        ],
        "'ASSERTTRUE": [
          -1,
          578,
          580
        ],
        "'ASSERTFALSE": [
          -1,
          578,
          580
        ],
        "'ASSERTSATISFIES": [
          -1,
          578,
          580
        ],
        "'ASSERTRAISES": [
          -1,
          578,
          580
        ],
        "'SWITCH": [
          -1,
          578,
          580
        ],
        "'YIELD": [
          -1,
          578,
          580
        ],
        "'DASH": [
          -1,
          578,
          580
        ],
        "'BANG": [
          -1,
          578,
          580
        ],
        "'LBRACK": [
          -1,
          578,
          580
        ],
        "'NUMBER": [
          -1,
          578,
          580
        ],
        "'TRUE": [
          -1,
          578,
          580
        ],
        "'FALSE": [
          -1,
          578,
          580
        ],
        "'NULL": [
          -1,
          578,
          580
        ],
        "'PARENAFTERBRACE": [
          -1,
          578,
          580
        ],
        "'TABLE": [
          -1,
          578,
          580
        ],
        "'ASK": [
          -1,
          578,
          580
        ],
        "'NEW": [
          -1,
          578,
          580
        ]
      },
      {
        "'SEMI": [
          462
        ],
        "assert-stmt_A4_I6?": [
          463
        ],
        "assert-stmt_A4_I6": [
          464
        ],
        "'NAME": [
          -1,
          582,
          584
        ],
        "'PARENNOSPACE": [
          -1,
          582,
          584
        ],
        "'STRING": [
          -1,
          582,
          584
        ],
        "'LBRACE": [
          -1,
          582,
          584
        ],
        "'RBRACE": [
          -1,
          582,
          584
        ],
        "'SPY": [
          -1,
          582,
          584
        ],
        "'PARENSPACE": [
          -1,
          582,
          584
        ],
        "'INT": [
          -1,
          582,
          584
        ],
        "'LONG": [
          -1,
          582,
          584
        ],
        "'DOUBLE": [
          -1,
          582,
          584
        ],
        "'FLOAT": [
          -1,
          582,
          584
        ],
        "'BOOLEAN": [
          -1,
          582,
          584
        ],
        "'VOID": [
          -1,
          582,
          584
        ],
        "'DATA": [
          -1,
          582,
          584
        ],
        "'IF": [
          -1,
          582,
          584
        ],
        "'FOR": [
          -1,
          582,
          584
        ],
        "'RETURN": [
          -1,
          582,
          584
        ],
        "'VAR": [
          -1,
          582,
          584
        ],
        "'ATCHECK": [
          -1,
          582,
          584
        ],
        "'ASSERTEQUALS": [
          -1,
          582,
          584
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          582,
          584
        ],
        "'ASSERTTRUE": [
          -1,
          582,
          584
        ],
        "'ASSERTFALSE": [
          -1,
          582,
          584
        ],
        "'ASSERTSATISFIES": [
          -1,
          582,
          584
        ],
        "'ASSERTRAISES": [
          -1,
          582,
          584
        ],
        "'SWITCH": [
          -1,
          582,
          584
        ],
        "'YIELD": [
          -1,
          582,
          584
        ],
        "'DASH": [
          -1,
          582,
          584
        ],
        "'BANG": [
          -1,
          582,
          584
        ],
        "'LBRACK": [
          -1,
          582,
          584
        ],
        "'NUMBER": [
          -1,
          582,
          584
        ],
        "'TRUE": [
          -1,
          582,
          584
        ],
        "'FALSE": [
          -1,
          582,
          584
        ],
        "'NULL": [
          -1,
          582,
          584
        ],
        "'PARENAFTERBRACE": [
          -1,
          582,
          584
        ],
        "'TABLE": [
          -1,
          582,
          584
        ],
        "'ASK": [
          -1,
          582,
          584
        ],
        "'NEW": [
          -1,
          582,
          584
        ]
      },
      {
        "'SEMI": [
          465
        ],
        "assert-stmt_A5_I6?": [
          466
        ],
        "assert-stmt_A5_I6": [
          467
        ],
        "'NAME": [
          -1,
          586,
          588
        ],
        "'PARENNOSPACE": [
          -1,
          586,
          588
        ],
        "'STRING": [
          -1,
          586,
          588
        ],
        "'LBRACE": [
          -1,
          586,
          588
        ],
        "'RBRACE": [
          -1,
          586,
          588
        ],
        "'SPY": [
          -1,
          586,
          588
        ],
        "'PARENSPACE": [
          -1,
          586,
          588
        ],
        "'INT": [
          -1,
          586,
          588
        ],
        "'LONG": [
          -1,
          586,
          588
        ],
        "'DOUBLE": [
          -1,
          586,
          588
        ],
        "'FLOAT": [
          -1,
          586,
          588
        ],
        "'BOOLEAN": [
          -1,
          586,
          588
        ],
        "'VOID": [
          -1,
          586,
          588
        ],
        "'DATA": [
          -1,
          586,
          588
        ],
        "'IF": [
          -1,
          586,
          588
        ],
        "'FOR": [
          -1,
          586,
          588
        ],
        "'RETURN": [
          -1,
          586,
          588
        ],
        "'VAR": [
          -1,
          586,
          588
        ],
        "'ATCHECK": [
          -1,
          586,
          588
        ],
        "'ASSERTEQUALS": [
          -1,
          586,
          588
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          586,
          588
        ],
        "'ASSERTTRUE": [
          -1,
          586,
          588
        ],
        "'ASSERTFALSE": [
          -1,
          586,
          588
        ],
        "'ASSERTSATISFIES": [
          -1,
          586,
          588
        ],
        "'ASSERTRAISES": [
          -1,
          586,
          588
        ],
        "'SWITCH": [
          -1,
          586,
          588
        ],
        "'YIELD": [
          -1,
          586,
          588
        ],
        "'DASH": [
          -1,
          586,
          588
        ],
        "'BANG": [
          -1,
          586,
          588
        ],
        "'LBRACK": [
          -1,
          586,
          588
        ],
        "'NUMBER": [
          -1,
          586,
          588
        ],
        "'TRUE": [
          -1,
          586,
          588
        ],
        "'FALSE": [
          -1,
          586,
          588
        ],
        "'NULL": [
          -1,
          586,
          588
        ],
        "'PARENAFTERBRACE": [
          -1,
          586,
          588
        ],
        "'TABLE": [
          -1,
          586,
          588
        ],
        "'ASK": [
          -1,
          586,
          588
        ],
        "'NEW": [
          -1,
          586,
          588
        ]
      },
      {
        "'NAME": [
          468
        ],
        "case-branch_A0_I3?": [
          469
        ],
        "case-branch_A0_I3": [
          470
        ],
        "'RPAREN": [
          -1,
          590
        ]
      },
      {
        "switch-body": [
          471
        ],
        "switch-body_I0*": [
          444
        ],
        "'NAME": [
          -1,
          556
        ],
        "'PARENNOSPACE": [
          -1,
          556
        ],
        "'STRING": [
          -1,
          556
        ],
        "'LBRACE": [
          -1,
          556
        ],
        "'SPY": [
          -1,
          556
        ],
        "'PARENSPACE": [
          -1,
          556
        ],
        "'INT": [
          -1,
          556
        ],
        "'LONG": [
          -1,
          556
        ],
        "'DOUBLE": [
          -1,
          556
        ],
        "'FLOAT": [
          -1,
          556
        ],
        "'BOOLEAN": [
          -1,
          556
        ],
        "'VOID": [
          -1,
          556
        ],
        "'DATA": [
          -1,
          556
        ],
        "'IF": [
          -1,
          556
        ],
        "'FOR": [
          -1,
          556
        ],
        "'RETURN": [
          -1,
          556
        ],
        "'VAR": [
          -1,
          556
        ],
        "'ATCHECK": [
          -1,
          556
        ],
        "'SWITCH": [
          -1,
          556
        ],
        "'YIELD": [
          -1,
          556
        ],
        "'DASH": [
          -1,
          556
        ],
        "'BANG": [
          -1,
          556
        ],
        "'LBRACK": [
          -1,
          556
        ],
        "'NUMBER": [
          -1,
          556
        ],
        "'TRUE": [
          -1,
          556
        ],
        "'FALSE": [
          -1,
          556
        ],
        "'NULL": [
          -1,
          556
        ],
        "'PARENAFTERBRACE": [
          -1,
          556
        ],
        "'TABLE": [
          -1,
          556
        ],
        "'ASK": [
          -1,
          556
        ],
        "'NEW": [
          -1,
          556
        ]
      },
      {
        "'RBRACE": [
          -1,
          592
        ]
      },
      {
        "'NAME": [
          10
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "fun-decl": [
          193
        ],
        "data-decl": [
          194
        ],
        "check-block": [
          195
        ],
        "let-stmt": [
          196
        ],
        "var-stmt": [
          197
        ],
        "assign-stmt": [
          198
        ],
        "expr-stmt": [
          199
        ],
        "'LBRACE": [
          22
        ],
        "block-stmt": [
          472
        ],
        "if-stmt": [
          202
        ],
        "for-stmt": [
          203
        ],
        "return-stmt": [
          204
        ],
        "yield-stmt": [
          473
        ],
        "spy-stmt": [
          206
        ],
        "'SPY": [
          207
        ],
        "'PARENSPACE": [
          23
        ],
        "type-ann": [
          24
        ],
        "'INT": [
          25
        ],
        "'LONG": [
          26
        ],
        "'DOUBLE": [
          27
        ],
        "'FLOAT": [
          28
        ],
        "'BOOLEAN": [
          29
        ],
        "'VOID": [
          30
        ],
        "'DATA": [
          31
        ],
        "'IF": [
          209
        ],
        "full-expr": [
          32
        ],
        "'FOR": [
          211
        ],
        "'RETURN": [
          212
        ],
        "'VAR": [
          33
        ],
        "'ATCHECK": [
          34
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "switch-body_I0": [
          474
        ],
        "'YIELD": [
          220
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'RBRACK": [
          475
        ]
      },
      {
        "table-row_I3*": [
          476
        ],
        "'SEMI": [
          -1,
          594,
          596
        ],
        "'COMMA": [
          -1,
          596
        ]
      },
      {
        "$": [
          -1,
          598
        ],
        "'NAME": [
          -1,
          598
        ],
        "'PARENNOSPACE": [
          -1,
          598
        ],
        "'STRING": [
          -1,
          598
        ],
        "'LBRACE": [
          -1,
          598
        ],
        "'RBRACE": [
          -1,
          598
        ],
        "'SPY": [
          -1,
          598
        ],
        "'PARENSPACE": [
          -1,
          598
        ],
        "'INT": [
          -1,
          598
        ],
        "'LONG": [
          -1,
          598
        ],
        "'DOUBLE": [
          -1,
          598
        ],
        "'FLOAT": [
          -1,
          598
        ],
        "'BOOLEAN": [
          -1,
          598
        ],
        "'VOID": [
          -1,
          598
        ],
        "'DATA": [
          -1,
          598
        ],
        "'IF": [
          -1,
          598
        ],
        "'FOR": [
          -1,
          598
        ],
        "'RETURN": [
          -1,
          598
        ],
        "'VAR": [
          -1,
          598
        ],
        "'ATCHECK": [
          -1,
          598
        ],
        "'ASSERTEQUALS": [
          -1,
          598
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          598
        ],
        "'ASSERTTRUE": [
          -1,
          598
        ],
        "'ASSERTFALSE": [
          -1,
          598
        ],
        "'ASSERTSATISFIES": [
          -1,
          598
        ],
        "'ASSERTRAISES": [
          -1,
          598
        ],
        "'SWITCH": [
          -1,
          598
        ],
        "'YIELD": [
          -1,
          598
        ],
        "'DASH": [
          -1,
          598
        ],
        "'BANG": [
          -1,
          598
        ],
        "'LBRACK": [
          -1,
          598
        ],
        "'NUMBER": [
          -1,
          598
        ],
        "'TRUE": [
          -1,
          598
        ],
        "'FALSE": [
          -1,
          598
        ],
        "'NULL": [
          -1,
          598
        ],
        "'PARENAFTERBRACE": [
          -1,
          598
        ],
        "'TABLE": [
          -1,
          598
        ],
        "'ASK": [
          -1,
          598
        ],
        "'NEW": [
          -1,
          598
        ]
      },
      {
        "'NAME": [
          -1,
          600
        ],
        "'PARENNOSPACE": [
          -1,
          600
        ],
        "'STRING": [
          -1,
          600
        ],
        "'LBRACE": [
          -1,
          600
        ],
        "'RBRACE": [
          -1,
          600
        ],
        "'SPY": [
          -1,
          600
        ],
        "'PARENSPACE": [
          -1,
          600
        ],
        "'INT": [
          -1,
          600
        ],
        "'LONG": [
          -1,
          600
        ],
        "'DOUBLE": [
          -1,
          600
        ],
        "'FLOAT": [
          -1,
          600
        ],
        "'BOOLEAN": [
          -1,
          600
        ],
        "'VOID": [
          -1,
          600
        ],
        "'DATA": [
          -1,
          600
        ],
        "'IF": [
          -1,
          600
        ],
        "'FOR": [
          -1,
          600
        ],
        "'RETURN": [
          -1,
          600
        ],
        "'VAR": [
          -1,
          600
        ],
        "'ATCHECK": [
          -1,
          600
        ],
        "'ASSERTEQUALS": [
          -1,
          600
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          600
        ],
        "'ASSERTTRUE": [
          -1,
          600
        ],
        "'ASSERTFALSE": [
          -1,
          600
        ],
        "'ASSERTSATISFIES": [
          -1,
          600
        ],
        "'ASSERTRAISES": [
          -1,
          600
        ],
        "'SWITCH": [
          -1,
          600
        ],
        "'YIELD": [
          -1,
          600
        ],
        "'DASH": [
          -1,
          600
        ],
        "'BANG": [
          -1,
          600
        ],
        "'LBRACK": [
          -1,
          600
        ],
        "'NUMBER": [
          -1,
          600
        ],
        "'TRUE": [
          -1,
          600
        ],
        "'FALSE": [
          -1,
          600
        ],
        "'NULL": [
          -1,
          600
        ],
        "'PARENAFTERBRACE": [
          -1,
          600
        ],
        "'TABLE": [
          -1,
          600
        ],
        "'ASK": [
          -1,
          600
        ],
        "'NEW": [
          -1,
          600
        ]
      },
      {
        "'NAME": [
          -1,
          602
        ],
        "'PARENNOSPACE": [
          -1,
          602
        ],
        "'STRING": [
          -1,
          602
        ],
        "'LBRACE": [
          -1,
          602
        ],
        "'RBRACE": [
          -1,
          602
        ],
        "'SPY": [
          -1,
          602
        ],
        "'PARENSPACE": [
          -1,
          602
        ],
        "'INT": [
          -1,
          602
        ],
        "'LONG": [
          -1,
          602
        ],
        "'DOUBLE": [
          -1,
          602
        ],
        "'FLOAT": [
          -1,
          602
        ],
        "'BOOLEAN": [
          -1,
          602
        ],
        "'VOID": [
          -1,
          602
        ],
        "'DATA": [
          -1,
          602
        ],
        "'IF": [
          -1,
          602
        ],
        "'FOR": [
          -1,
          602
        ],
        "'RETURN": [
          -1,
          602
        ],
        "'VAR": [
          -1,
          602
        ],
        "'ATCHECK": [
          -1,
          602
        ],
        "'ASSERTEQUALS": [
          -1,
          602
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          602
        ],
        "'ASSERTTRUE": [
          -1,
          602
        ],
        "'ASSERTFALSE": [
          -1,
          602
        ],
        "'ASSERTSATISFIES": [
          -1,
          602
        ],
        "'ASSERTRAISES": [
          -1,
          602
        ],
        "'SWITCH": [
          -1,
          602
        ],
        "'YIELD": [
          -1,
          602
        ],
        "'DASH": [
          -1,
          602
        ],
        "'BANG": [
          -1,
          602
        ],
        "'LBRACK": [
          -1,
          602
        ],
        "'NUMBER": [
          -1,
          602
        ],
        "'TRUE": [
          -1,
          602
        ],
        "'FALSE": [
          -1,
          602
        ],
        "'NULL": [
          -1,
          602
        ],
        "'PARENAFTERBRACE": [
          -1,
          602
        ],
        "'TABLE": [
          -1,
          602
        ],
        "'ASK": [
          -1,
          602
        ],
        "'NEW": [
          -1,
          602
        ]
      },
      {
        "'NAME": [
          -1,
          604
        ],
        "'PARENNOSPACE": [
          -1,
          604
        ],
        "'STRING": [
          -1,
          604
        ],
        "'LBRACE": [
          -1,
          604
        ],
        "'RBRACE": [
          -1,
          604
        ],
        "'SPY": [
          -1,
          604
        ],
        "'PARENSPACE": [
          -1,
          604
        ],
        "'INT": [
          -1,
          604
        ],
        "'LONG": [
          -1,
          604
        ],
        "'DOUBLE": [
          -1,
          604
        ],
        "'FLOAT": [
          -1,
          604
        ],
        "'BOOLEAN": [
          -1,
          604
        ],
        "'VOID": [
          -1,
          604
        ],
        "'DATA": [
          -1,
          604
        ],
        "'IF": [
          -1,
          604
        ],
        "'FOR": [
          -1,
          604
        ],
        "'RETURN": [
          -1,
          604
        ],
        "'VAR": [
          -1,
          604
        ],
        "'ATCHECK": [
          -1,
          604
        ],
        "'ASSERTEQUALS": [
          -1,
          604
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          604
        ],
        "'ASSERTTRUE": [
          -1,
          604
        ],
        "'ASSERTFALSE": [
          -1,
          604
        ],
        "'ASSERTSATISFIES": [
          -1,
          604
        ],
        "'ASSERTRAISES": [
          -1,
          604
        ],
        "'SWITCH": [
          -1,
          604
        ],
        "'YIELD": [
          -1,
          604
        ],
        "'DASH": [
          -1,
          604
        ],
        "'BANG": [
          -1,
          604
        ],
        "'LBRACK": [
          -1,
          604
        ],
        "'NUMBER": [
          -1,
          604
        ],
        "'TRUE": [
          -1,
          604
        ],
        "'FALSE": [
          -1,
          604
        ],
        "'NULL": [
          -1,
          604
        ],
        "'PARENAFTERBRACE": [
          -1,
          604
        ],
        "'TABLE": [
          -1,
          604
        ],
        "'ASK": [
          -1,
          604
        ],
        "'NEW": [
          -1,
          604
        ]
      },
      {
        "'NAME": [
          -1,
          606
        ],
        "'PARENNOSPACE": [
          -1,
          606
        ],
        "'STRING": [
          -1,
          606
        ],
        "'LBRACE": [
          -1,
          606
        ],
        "'RBRACE": [
          -1,
          606
        ],
        "'SPY": [
          -1,
          606
        ],
        "'PARENSPACE": [
          -1,
          606
        ],
        "'INT": [
          -1,
          606
        ],
        "'LONG": [
          -1,
          606
        ],
        "'DOUBLE": [
          -1,
          606
        ],
        "'FLOAT": [
          -1,
          606
        ],
        "'BOOLEAN": [
          -1,
          606
        ],
        "'VOID": [
          -1,
          606
        ],
        "'DATA": [
          -1,
          606
        ],
        "'IF": [
          -1,
          606
        ],
        "'FOR": [
          -1,
          606
        ],
        "'RETURN": [
          -1,
          606
        ],
        "'VAR": [
          -1,
          606
        ],
        "'ATCHECK": [
          -1,
          606
        ],
        "'ASSERTEQUALS": [
          -1,
          606
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          606
        ],
        "'ASSERTTRUE": [
          -1,
          606
        ],
        "'ASSERTFALSE": [
          -1,
          606
        ],
        "'ASSERTSATISFIES": [
          -1,
          606
        ],
        "'ASSERTRAISES": [
          -1,
          606
        ],
        "'SWITCH": [
          -1,
          606
        ],
        "'YIELD": [
          -1,
          606
        ],
        "'DASH": [
          -1,
          606
        ],
        "'BANG": [
          -1,
          606
        ],
        "'LBRACK": [
          -1,
          606
        ],
        "'NUMBER": [
          -1,
          606
        ],
        "'TRUE": [
          -1,
          606
        ],
        "'FALSE": [
          -1,
          606
        ],
        "'NULL": [
          -1,
          606
        ],
        "'PARENAFTERBRACE": [
          -1,
          606
        ],
        "'TABLE": [
          -1,
          606
        ],
        "'ASK": [
          -1,
          606
        ],
        "'NEW": [
          -1,
          606
        ]
      },
      {
        "'NAME": [
          -1,
          608
        ],
        "'PARENNOSPACE": [
          -1,
          608
        ],
        "'STRING": [
          -1,
          608
        ],
        "'LBRACE": [
          -1,
          608
        ],
        "'RBRACE": [
          -1,
          608
        ],
        "'SPY": [
          -1,
          608
        ],
        "'PARENSPACE": [
          -1,
          608
        ],
        "'INT": [
          -1,
          608
        ],
        "'LONG": [
          -1,
          608
        ],
        "'DOUBLE": [
          -1,
          608
        ],
        "'FLOAT": [
          -1,
          608
        ],
        "'BOOLEAN": [
          -1,
          608
        ],
        "'VOID": [
          -1,
          608
        ],
        "'DATA": [
          -1,
          608
        ],
        "'IF": [
          -1,
          608
        ],
        "'ELSE": [
          -1,
          608
        ],
        "'FOR": [
          -1,
          608
        ],
        "'RETURN": [
          -1,
          608
        ],
        "'VAR": [
          -1,
          608
        ],
        "'ATCHECK": [
          -1,
          608
        ],
        "'ASSERTEQUALS": [
          -1,
          608
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          608
        ],
        "'ASSERTTRUE": [
          -1,
          608
        ],
        "'ASSERTFALSE": [
          -1,
          608
        ],
        "'ASSERTSATISFIES": [
          -1,
          608
        ],
        "'ASSERTRAISES": [
          -1,
          608
        ],
        "'SWITCH": [
          -1,
          608
        ],
        "'YIELD": [
          -1,
          608
        ],
        "'DASH": [
          -1,
          608
        ],
        "'BANG": [
          -1,
          608
        ],
        "'LBRACK": [
          -1,
          608
        ],
        "'NUMBER": [
          -1,
          608
        ],
        "'TRUE": [
          -1,
          608
        ],
        "'FALSE": [
          -1,
          608
        ],
        "'NULL": [
          -1,
          608
        ],
        "'PARENAFTERBRACE": [
          -1,
          608
        ],
        "'TABLE": [
          -1,
          608
        ],
        "'ASK": [
          -1,
          608
        ],
        "'NEW": [
          -1,
          608
        ]
      },
      {
        "block": [
          477
        ],
        "'LBRACE": [
          297
        ],
        "'IF": [
          478
        ]
      },
      {
        "'NAME": [
          -1,
          610
        ],
        "'PARENNOSPACE": [
          -1,
          610
        ],
        "'STRING": [
          -1,
          610
        ],
        "'LBRACE": [
          -1,
          610
        ],
        "'RBRACE": [
          -1,
          610
        ],
        "'SPY": [
          -1,
          610
        ],
        "'PARENSPACE": [
          -1,
          610
        ],
        "'INT": [
          -1,
          610
        ],
        "'LONG": [
          -1,
          610
        ],
        "'DOUBLE": [
          -1,
          610
        ],
        "'FLOAT": [
          -1,
          610
        ],
        "'BOOLEAN": [
          -1,
          610
        ],
        "'VOID": [
          -1,
          610
        ],
        "'DATA": [
          -1,
          610
        ],
        "'IF": [
          -1,
          610
        ],
        "'FOR": [
          -1,
          610
        ],
        "'RETURN": [
          -1,
          610
        ],
        "'VAR": [
          -1,
          610
        ],
        "'ATCHECK": [
          -1,
          610
        ],
        "'ASSERTEQUALS": [
          -1,
          610
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          610
        ],
        "'ASSERTTRUE": [
          -1,
          610
        ],
        "'ASSERTFALSE": [
          -1,
          610
        ],
        "'ASSERTSATISFIES": [
          -1,
          610
        ],
        "'ASSERTRAISES": [
          -1,
          610
        ],
        "'SWITCH": [
          -1,
          610
        ],
        "'YIELD": [
          -1,
          610
        ],
        "'DASH": [
          -1,
          610
        ],
        "'BANG": [
          -1,
          610
        ],
        "'LBRACK": [
          -1,
          610
        ],
        "'NUMBER": [
          -1,
          610
        ],
        "'TRUE": [
          -1,
          610
        ],
        "'FALSE": [
          -1,
          610
        ],
        "'NULL": [
          -1,
          610
        ],
        "'PARENAFTERBRACE": [
          -1,
          610
        ],
        "'TABLE": [
          -1,
          610
        ],
        "'ASK": [
          -1,
          610
        ],
        "'NEW": [
          -1,
          610
        ]
      },
      {
        "block": [
          479
        ],
        "'LBRACE": [
          297
        ]
      },
      {
        "'NAME": [
          -1,
          612
        ],
        "'PARENNOSPACE": [
          -1,
          612
        ],
        "'STRING": [
          -1,
          612
        ],
        "'LBRACE": [
          -1,
          612
        ],
        "'RBRACE": [
          -1,
          612
        ],
        "'SPY": [
          -1,
          612
        ],
        "'PARENSPACE": [
          -1,
          612
        ],
        "'INT": [
          -1,
          612
        ],
        "'LONG": [
          -1,
          612
        ],
        "'DOUBLE": [
          -1,
          612
        ],
        "'FLOAT": [
          -1,
          612
        ],
        "'BOOLEAN": [
          -1,
          612
        ],
        "'VOID": [
          -1,
          612
        ],
        "'DATA": [
          -1,
          612
        ],
        "'IF": [
          -1,
          612
        ],
        "'FOR": [
          -1,
          612
        ],
        "'RETURN": [
          -1,
          612
        ],
        "'VAR": [
          -1,
          612
        ],
        "'ATCHECK": [
          -1,
          612
        ],
        "'ASSERTEQUALS": [
          -1,
          612
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          612
        ],
        "'ASSERTTRUE": [
          -1,
          612
        ],
        "'ASSERTFALSE": [
          -1,
          612
        ],
        "'ASSERTSATISFIES": [
          -1,
          612
        ],
        "'ASSERTRAISES": [
          -1,
          612
        ],
        "'SWITCH": [
          -1,
          612
        ],
        "'YIELD": [
          -1,
          612
        ],
        "'DASH": [
          -1,
          612
        ],
        "'BANG": [
          -1,
          612
        ],
        "'LBRACK": [
          -1,
          612
        ],
        "'NUMBER": [
          -1,
          612
        ],
        "'TRUE": [
          -1,
          612
        ],
        "'FALSE": [
          -1,
          612
        ],
        "'NULL": [
          -1,
          612
        ],
        "'PARENAFTERBRACE": [
          -1,
          612
        ],
        "'TABLE": [
          -1,
          612
        ],
        "'ASK": [
          -1,
          612
        ],
        "'NEW": [
          -1,
          612
        ]
      },
      {
        "'NAME": [
          -1,
          614
        ],
        "'PARENNOSPACE": [
          -1,
          614
        ],
        "'STRING": [
          -1,
          614
        ],
        "'LBRACE": [
          -1,
          614
        ],
        "'RBRACE": [
          -1,
          614
        ],
        "'SPY": [
          -1,
          614
        ],
        "'PARENSPACE": [
          -1,
          614
        ],
        "'INT": [
          -1,
          614
        ],
        "'LONG": [
          -1,
          614
        ],
        "'DOUBLE": [
          -1,
          614
        ],
        "'FLOAT": [
          -1,
          614
        ],
        "'BOOLEAN": [
          -1,
          614
        ],
        "'VOID": [
          -1,
          614
        ],
        "'DATA": [
          -1,
          614
        ],
        "'IF": [
          -1,
          614
        ],
        "'FOR": [
          -1,
          614
        ],
        "'RETURN": [
          -1,
          614
        ],
        "'VAR": [
          -1,
          614
        ],
        "'ATCHECK": [
          -1,
          614
        ],
        "'ASSERTEQUALS": [
          -1,
          614
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          614
        ],
        "'ASSERTTRUE": [
          -1,
          614
        ],
        "'ASSERTFALSE": [
          -1,
          614
        ],
        "'ASSERTSATISFIES": [
          -1,
          614
        ],
        "'ASSERTRAISES": [
          -1,
          614
        ],
        "'SWITCH": [
          -1,
          614
        ],
        "'YIELD": [
          -1,
          614
        ],
        "'DASH": [
          -1,
          614
        ],
        "'BANG": [
          -1,
          614
        ],
        "'LBRACK": [
          -1,
          614
        ],
        "'NUMBER": [
          -1,
          614
        ],
        "'TRUE": [
          -1,
          614
        ],
        "'FALSE": [
          -1,
          614
        ],
        "'NULL": [
          -1,
          614
        ],
        "'PARENAFTERBRACE": [
          -1,
          614
        ],
        "'TABLE": [
          -1,
          614
        ],
        "'ASK": [
          -1,
          614
        ],
        "'NEW": [
          -1,
          614
        ]
      },
      {
        "'NAME": [
          -1,
          616
        ],
        "'PARENNOSPACE": [
          -1,
          616
        ],
        "'STRING": [
          -1,
          616
        ],
        "'LBRACE": [
          -1,
          616
        ],
        "'RBRACE": [
          -1,
          616
        ],
        "'SPY": [
          -1,
          616
        ],
        "'PARENSPACE": [
          -1,
          616
        ],
        "'INT": [
          -1,
          616
        ],
        "'LONG": [
          -1,
          616
        ],
        "'DOUBLE": [
          -1,
          616
        ],
        "'FLOAT": [
          -1,
          616
        ],
        "'BOOLEAN": [
          -1,
          616
        ],
        "'VOID": [
          -1,
          616
        ],
        "'DATA": [
          -1,
          616
        ],
        "'IF": [
          -1,
          616
        ],
        "'FOR": [
          -1,
          616
        ],
        "'RETURN": [
          -1,
          616
        ],
        "'VAR": [
          -1,
          616
        ],
        "'ATCHECK": [
          -1,
          616
        ],
        "'ASSERTEQUALS": [
          -1,
          616
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          616
        ],
        "'ASSERTTRUE": [
          -1,
          616
        ],
        "'ASSERTFALSE": [
          -1,
          616
        ],
        "'ASSERTSATISFIES": [
          -1,
          616
        ],
        "'ASSERTRAISES": [
          -1,
          616
        ],
        "'SWITCH": [
          -1,
          616
        ],
        "'YIELD": [
          -1,
          616
        ],
        "'DASH": [
          -1,
          616
        ],
        "'BANG": [
          -1,
          616
        ],
        "'LBRACK": [
          -1,
          616
        ],
        "'NUMBER": [
          -1,
          616
        ],
        "'TRUE": [
          -1,
          616
        ],
        "'FALSE": [
          -1,
          616
        ],
        "'NULL": [
          -1,
          616
        ],
        "'PARENAFTERBRACE": [
          -1,
          616
        ],
        "'TABLE": [
          -1,
          616
        ],
        "'ASK": [
          -1,
          616
        ],
        "'NEW": [
          -1,
          616
        ]
      },
      {
        "'NAME": [
          -1,
          618
        ],
        "'PARENNOSPACE": [
          -1,
          618
        ],
        "'STRING": [
          -1,
          618
        ],
        "'LBRACE": [
          -1,
          618
        ],
        "'RBRACE": [
          -1,
          618
        ],
        "'SPY": [
          -1,
          618
        ],
        "'PARENSPACE": [
          -1,
          618
        ],
        "'INT": [
          -1,
          618
        ],
        "'LONG": [
          -1,
          618
        ],
        "'DOUBLE": [
          -1,
          618
        ],
        "'FLOAT": [
          -1,
          618
        ],
        "'BOOLEAN": [
          -1,
          618
        ],
        "'VOID": [
          -1,
          618
        ],
        "'DATA": [
          -1,
          618
        ],
        "'IF": [
          -1,
          618
        ],
        "'FOR": [
          -1,
          618
        ],
        "'RETURN": [
          -1,
          618
        ],
        "'VAR": [
          -1,
          618
        ],
        "'ATCHECK": [
          -1,
          618
        ],
        "'ASSERTEQUALS": [
          -1,
          618
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          618
        ],
        "'ASSERTTRUE": [
          -1,
          618
        ],
        "'ASSERTFALSE": [
          -1,
          618
        ],
        "'ASSERTSATISFIES": [
          -1,
          618
        ],
        "'ASSERTRAISES": [
          -1,
          618
        ],
        "'SWITCH": [
          -1,
          618
        ],
        "'YIELD": [
          -1,
          618
        ],
        "'DASH": [
          -1,
          618
        ],
        "'BANG": [
          -1,
          618
        ],
        "'LBRACK": [
          -1,
          618
        ],
        "'NUMBER": [
          -1,
          618
        ],
        "'TRUE": [
          -1,
          618
        ],
        "'FALSE": [
          -1,
          618
        ],
        "'NULL": [
          -1,
          618
        ],
        "'PARENAFTERBRACE": [
          -1,
          618
        ],
        "'TABLE": [
          -1,
          618
        ],
        "'ASK": [
          -1,
          618
        ],
        "'NEW": [
          -1,
          618
        ]
      },
      {
        "'NAME": [
          -1,
          620
        ],
        "'PARENNOSPACE": [
          -1,
          620
        ],
        "'STRING": [
          -1,
          620
        ],
        "'LBRACE": [
          -1,
          620
        ],
        "'RBRACE": [
          -1,
          620
        ],
        "'SPY": [
          -1,
          620
        ],
        "'PARENSPACE": [
          -1,
          620
        ],
        "'INT": [
          -1,
          620
        ],
        "'LONG": [
          -1,
          620
        ],
        "'DOUBLE": [
          -1,
          620
        ],
        "'FLOAT": [
          -1,
          620
        ],
        "'BOOLEAN": [
          -1,
          620
        ],
        "'VOID": [
          -1,
          620
        ],
        "'DATA": [
          -1,
          620
        ],
        "'IF": [
          -1,
          620
        ],
        "'FOR": [
          -1,
          620
        ],
        "'RETURN": [
          -1,
          620
        ],
        "'VAR": [
          -1,
          620
        ],
        "'ATCHECK": [
          -1,
          620
        ],
        "'ASSERTEQUALS": [
          -1,
          620
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          620
        ],
        "'ASSERTTRUE": [
          -1,
          620
        ],
        "'ASSERTFALSE": [
          -1,
          620
        ],
        "'ASSERTSATISFIES": [
          -1,
          620
        ],
        "'ASSERTRAISES": [
          -1,
          620
        ],
        "'SWITCH": [
          -1,
          620
        ],
        "'YIELD": [
          -1,
          620
        ],
        "'DASH": [
          -1,
          620
        ],
        "'BANG": [
          -1,
          620
        ],
        "'LBRACK": [
          -1,
          620
        ],
        "'NUMBER": [
          -1,
          620
        ],
        "'TRUE": [
          -1,
          620
        ],
        "'FALSE": [
          -1,
          620
        ],
        "'NULL": [
          -1,
          620
        ],
        "'PARENAFTERBRACE": [
          -1,
          620
        ],
        "'TABLE": [
          -1,
          620
        ],
        "'ASK": [
          -1,
          620
        ],
        "'NEW": [
          -1,
          620
        ]
      },
      {
        "'NAME": [
          -1,
          622
        ],
        "'PARENNOSPACE": [
          -1,
          622
        ],
        "'STRING": [
          -1,
          622
        ],
        "'LBRACE": [
          -1,
          622
        ],
        "'RBRACE": [
          -1,
          622
        ],
        "'SPY": [
          -1,
          622
        ],
        "'PARENSPACE": [
          -1,
          622
        ],
        "'INT": [
          -1,
          622
        ],
        "'LONG": [
          -1,
          622
        ],
        "'DOUBLE": [
          -1,
          622
        ],
        "'FLOAT": [
          -1,
          622
        ],
        "'BOOLEAN": [
          -1,
          622
        ],
        "'VOID": [
          -1,
          622
        ],
        "'DATA": [
          -1,
          622
        ],
        "'IF": [
          -1,
          622
        ],
        "'FOR": [
          -1,
          622
        ],
        "'RETURN": [
          -1,
          622
        ],
        "'VAR": [
          -1,
          622
        ],
        "'ATCHECK": [
          -1,
          622
        ],
        "'ASSERTEQUALS": [
          -1,
          622
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          622
        ],
        "'ASSERTTRUE": [
          -1,
          622
        ],
        "'ASSERTFALSE": [
          -1,
          622
        ],
        "'ASSERTSATISFIES": [
          -1,
          622
        ],
        "'ASSERTRAISES": [
          -1,
          622
        ],
        "'SWITCH": [
          -1,
          622
        ],
        "'YIELD": [
          -1,
          622
        ],
        "'DASH": [
          -1,
          622
        ],
        "'BANG": [
          -1,
          622
        ],
        "'LBRACK": [
          -1,
          622
        ],
        "'NUMBER": [
          -1,
          622
        ],
        "'TRUE": [
          -1,
          622
        ],
        "'FALSE": [
          -1,
          622
        ],
        "'NULL": [
          -1,
          622
        ],
        "'PARENAFTERBRACE": [
          -1,
          622
        ],
        "'TABLE": [
          -1,
          622
        ],
        "'ASK": [
          -1,
          622
        ],
        "'NEW": [
          -1,
          622
        ]
      },
      {
        "'NAME": [
          -1,
          624
        ],
        "'PARENNOSPACE": [
          -1,
          624
        ],
        "'STRING": [
          -1,
          624
        ],
        "'LBRACE": [
          -1,
          624
        ],
        "'RBRACE": [
          -1,
          624
        ],
        "'SPY": [
          -1,
          624
        ],
        "'PARENSPACE": [
          -1,
          624
        ],
        "'INT": [
          -1,
          624
        ],
        "'LONG": [
          -1,
          624
        ],
        "'DOUBLE": [
          -1,
          624
        ],
        "'FLOAT": [
          -1,
          624
        ],
        "'BOOLEAN": [
          -1,
          624
        ],
        "'VOID": [
          -1,
          624
        ],
        "'DATA": [
          -1,
          624
        ],
        "'IF": [
          -1,
          624
        ],
        "'FOR": [
          -1,
          624
        ],
        "'RETURN": [
          -1,
          624
        ],
        "'VAR": [
          -1,
          624
        ],
        "'ATCHECK": [
          -1,
          624
        ],
        "'ASSERTEQUALS": [
          -1,
          624
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          624
        ],
        "'ASSERTTRUE": [
          -1,
          624
        ],
        "'ASSERTFALSE": [
          -1,
          624
        ],
        "'ASSERTSATISFIES": [
          -1,
          624
        ],
        "'ASSERTRAISES": [
          -1,
          624
        ],
        "'SWITCH": [
          -1,
          624
        ],
        "'YIELD": [
          -1,
          624
        ],
        "'DASH": [
          -1,
          624
        ],
        "'BANG": [
          -1,
          624
        ],
        "'LBRACK": [
          -1,
          624
        ],
        "'NUMBER": [
          -1,
          624
        ],
        "'TRUE": [
          -1,
          624
        ],
        "'FALSE": [
          -1,
          624
        ],
        "'NULL": [
          -1,
          624
        ],
        "'PARENAFTERBRACE": [
          -1,
          624
        ],
        "'TABLE": [
          -1,
          624
        ],
        "'ASK": [
          -1,
          624
        ],
        "'NEW": [
          -1,
          624
        ]
      },
      {
        "'NAME": [
          -1,
          626
        ],
        "'PARENNOSPACE": [
          -1,
          626
        ],
        "'STRING": [
          -1,
          626
        ],
        "'LBRACE": [
          -1,
          626
        ],
        "'RBRACE": [
          -1,
          626
        ],
        "'SPY": [
          -1,
          626
        ],
        "'PARENSPACE": [
          -1,
          626
        ],
        "'INT": [
          -1,
          626
        ],
        "'LONG": [
          -1,
          626
        ],
        "'DOUBLE": [
          -1,
          626
        ],
        "'FLOAT": [
          -1,
          626
        ],
        "'BOOLEAN": [
          -1,
          626
        ],
        "'VOID": [
          -1,
          626
        ],
        "'DATA": [
          -1,
          626
        ],
        "'IF": [
          -1,
          626
        ],
        "'FOR": [
          -1,
          626
        ],
        "'RETURN": [
          -1,
          626
        ],
        "'VAR": [
          -1,
          626
        ],
        "'ATCHECK": [
          -1,
          626
        ],
        "'ASSERTEQUALS": [
          -1,
          626
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          626
        ],
        "'ASSERTTRUE": [
          -1,
          626
        ],
        "'ASSERTFALSE": [
          -1,
          626
        ],
        "'ASSERTSATISFIES": [
          -1,
          626
        ],
        "'ASSERTRAISES": [
          -1,
          626
        ],
        "'SWITCH": [
          -1,
          626
        ],
        "'YIELD": [
          -1,
          626
        ],
        "'DASH": [
          -1,
          626
        ],
        "'BANG": [
          -1,
          626
        ],
        "'LBRACK": [
          -1,
          626
        ],
        "'NUMBER": [
          -1,
          626
        ],
        "'TRUE": [
          -1,
          626
        ],
        "'FALSE": [
          -1,
          626
        ],
        "'NULL": [
          -1,
          626
        ],
        "'PARENAFTERBRACE": [
          -1,
          626
        ],
        "'TABLE": [
          -1,
          626
        ],
        "'ASK": [
          -1,
          626
        ],
        "'NEW": [
          -1,
          626
        ]
      },
      {
        "'NAME": [
          -1,
          628
        ],
        "'PARENNOSPACE": [
          -1,
          628
        ],
        "'STRING": [
          -1,
          628
        ],
        "'LBRACE": [
          -1,
          628
        ],
        "'RBRACE": [
          -1,
          628
        ],
        "'SPY": [
          -1,
          628
        ],
        "'PARENSPACE": [
          -1,
          628
        ],
        "'INT": [
          -1,
          628
        ],
        "'LONG": [
          -1,
          628
        ],
        "'DOUBLE": [
          -1,
          628
        ],
        "'FLOAT": [
          -1,
          628
        ],
        "'BOOLEAN": [
          -1,
          628
        ],
        "'VOID": [
          -1,
          628
        ],
        "'DATA": [
          -1,
          628
        ],
        "'IF": [
          -1,
          628
        ],
        "'FOR": [
          -1,
          628
        ],
        "'RETURN": [
          -1,
          628
        ],
        "'VAR": [
          -1,
          628
        ],
        "'ATCHECK": [
          -1,
          628
        ],
        "'ASSERTEQUALS": [
          -1,
          628
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          628
        ],
        "'ASSERTTRUE": [
          -1,
          628
        ],
        "'ASSERTFALSE": [
          -1,
          628
        ],
        "'ASSERTSATISFIES": [
          -1,
          628
        ],
        "'ASSERTRAISES": [
          -1,
          628
        ],
        "'SWITCH": [
          -1,
          628
        ],
        "'YIELD": [
          -1,
          628
        ],
        "'DASH": [
          -1,
          628
        ],
        "'BANG": [
          -1,
          628
        ],
        "'LBRACK": [
          -1,
          628
        ],
        "'NUMBER": [
          -1,
          628
        ],
        "'TRUE": [
          -1,
          628
        ],
        "'FALSE": [
          -1,
          628
        ],
        "'NULL": [
          -1,
          628
        ],
        "'PARENAFTERBRACE": [
          -1,
          628
        ],
        "'TABLE": [
          -1,
          628
        ],
        "'ASK": [
          -1,
          628
        ],
        "'NEW": [
          -1,
          628
        ]
      },
      {
        "'NAME": [
          -1,
          630
        ],
        "'PARENNOSPACE": [
          -1,
          630
        ],
        "'STRING": [
          -1,
          630
        ],
        "'LBRACE": [
          -1,
          630
        ],
        "'RBRACE": [
          -1,
          630
        ],
        "'SPY": [
          -1,
          630
        ],
        "'PARENSPACE": [
          -1,
          630
        ],
        "'INT": [
          -1,
          630
        ],
        "'LONG": [
          -1,
          630
        ],
        "'DOUBLE": [
          -1,
          630
        ],
        "'FLOAT": [
          -1,
          630
        ],
        "'BOOLEAN": [
          -1,
          630
        ],
        "'VOID": [
          -1,
          630
        ],
        "'DATA": [
          -1,
          630
        ],
        "'IF": [
          -1,
          630
        ],
        "'FOR": [
          -1,
          630
        ],
        "'RETURN": [
          -1,
          630
        ],
        "'VAR": [
          -1,
          630
        ],
        "'ATCHECK": [
          -1,
          630
        ],
        "'ASSERTEQUALS": [
          -1,
          630
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          630
        ],
        "'ASSERTTRUE": [
          -1,
          630
        ],
        "'ASSERTFALSE": [
          -1,
          630
        ],
        "'ASSERTSATISFIES": [
          -1,
          630
        ],
        "'ASSERTRAISES": [
          -1,
          630
        ],
        "'SWITCH": [
          -1,
          630
        ],
        "'YIELD": [
          -1,
          630
        ],
        "'DASH": [
          -1,
          630
        ],
        "'BANG": [
          -1,
          630
        ],
        "'LBRACK": [
          -1,
          630
        ],
        "'NUMBER": [
          -1,
          630
        ],
        "'TRUE": [
          -1,
          630
        ],
        "'FALSE": [
          -1,
          630
        ],
        "'NULL": [
          -1,
          630
        ],
        "'PARENAFTERBRACE": [
          -1,
          630
        ],
        "'TABLE": [
          -1,
          630
        ],
        "'ASK": [
          -1,
          630
        ],
        "'NEW": [
          -1,
          630
        ]
      },
      {
        "'NAME": [
          -1,
          632
        ],
        "'PARENNOSPACE": [
          -1,
          632
        ],
        "'STRING": [
          -1,
          632
        ],
        "'LBRACE": [
          -1,
          632
        ],
        "'RBRACE": [
          -1,
          632
        ],
        "'SPY": [
          -1,
          632
        ],
        "'PARENSPACE": [
          -1,
          632
        ],
        "'INT": [
          -1,
          632
        ],
        "'LONG": [
          -1,
          632
        ],
        "'DOUBLE": [
          -1,
          632
        ],
        "'FLOAT": [
          -1,
          632
        ],
        "'BOOLEAN": [
          -1,
          632
        ],
        "'VOID": [
          -1,
          632
        ],
        "'DATA": [
          -1,
          632
        ],
        "'IF": [
          -1,
          632
        ],
        "'FOR": [
          -1,
          632
        ],
        "'RETURN": [
          -1,
          632
        ],
        "'VAR": [
          -1,
          632
        ],
        "'ATCHECK": [
          -1,
          632
        ],
        "'ASSERTEQUALS": [
          -1,
          632
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          632
        ],
        "'ASSERTTRUE": [
          -1,
          632
        ],
        "'ASSERTFALSE": [
          -1,
          632
        ],
        "'ASSERTSATISFIES": [
          -1,
          632
        ],
        "'ASSERTRAISES": [
          -1,
          632
        ],
        "'SWITCH": [
          -1,
          632
        ],
        "'YIELD": [
          -1,
          632
        ],
        "'DASH": [
          -1,
          632
        ],
        "'BANG": [
          -1,
          632
        ],
        "'LBRACK": [
          -1,
          632
        ],
        "'NUMBER": [
          -1,
          632
        ],
        "'TRUE": [
          -1,
          632
        ],
        "'FALSE": [
          -1,
          632
        ],
        "'NULL": [
          -1,
          632
        ],
        "'PARENAFTERBRACE": [
          -1,
          632
        ],
        "'TABLE": [
          -1,
          632
        ],
        "'ASK": [
          -1,
          632
        ],
        "'NEW": [
          -1,
          632
        ]
      },
      {
        "'NAME": [
          -1,
          634
        ],
        "'PARENNOSPACE": [
          -1,
          634
        ],
        "'STRING": [
          -1,
          634
        ],
        "'LBRACE": [
          -1,
          634
        ],
        "'RBRACE": [
          -1,
          634
        ],
        "'SPY": [
          -1,
          634
        ],
        "'PARENSPACE": [
          -1,
          634
        ],
        "'INT": [
          -1,
          634
        ],
        "'LONG": [
          -1,
          634
        ],
        "'DOUBLE": [
          -1,
          634
        ],
        "'FLOAT": [
          -1,
          634
        ],
        "'BOOLEAN": [
          -1,
          634
        ],
        "'VOID": [
          -1,
          634
        ],
        "'DATA": [
          -1,
          634
        ],
        "'IF": [
          -1,
          634
        ],
        "'FOR": [
          -1,
          634
        ],
        "'RETURN": [
          -1,
          634
        ],
        "'VAR": [
          -1,
          634
        ],
        "'ATCHECK": [
          -1,
          634
        ],
        "'ASSERTEQUALS": [
          -1,
          634
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          634
        ],
        "'ASSERTTRUE": [
          -1,
          634
        ],
        "'ASSERTFALSE": [
          -1,
          634
        ],
        "'ASSERTSATISFIES": [
          -1,
          634
        ],
        "'ASSERTRAISES": [
          -1,
          634
        ],
        "'SWITCH": [
          -1,
          634
        ],
        "'YIELD": [
          -1,
          634
        ],
        "'DASH": [
          -1,
          634
        ],
        "'BANG": [
          -1,
          634
        ],
        "'LBRACK": [
          -1,
          634
        ],
        "'NUMBER": [
          -1,
          634
        ],
        "'TRUE": [
          -1,
          634
        ],
        "'FALSE": [
          -1,
          634
        ],
        "'NULL": [
          -1,
          634
        ],
        "'PARENAFTERBRACE": [
          -1,
          634
        ],
        "'TABLE": [
          -1,
          634
        ],
        "'ASK": [
          -1,
          634
        ],
        "'NEW": [
          -1,
          634
        ]
      },
      {
        "case-branch_A0_I3_I1*": [
          480
        ],
        "'RPAREN": [
          -1,
          636,
          638
        ],
        "'COMMA": [
          -1,
          638
        ]
      },
      {
        "'RPAREN": [
          481
        ]
      },
      {
        "'RPAREN": [
          -1,
          640
        ]
      },
      {
        "'RBRACE": [
          -1,
          642
        ],
        "'CASE": [
          -1,
          642
        ],
        "'DEFAULT": [
          -1,
          642
        ]
      },
      {
        "'NAME": [
          -1,
          644
        ],
        "'PARENNOSPACE": [
          -1,
          644
        ],
        "'STRING": [
          -1,
          644
        ],
        "'LBRACE": [
          -1,
          644
        ],
        "'SPY": [
          -1,
          644
        ],
        "'PARENSPACE": [
          -1,
          644
        ],
        "'INT": [
          -1,
          644
        ],
        "'LONG": [
          -1,
          644
        ],
        "'DOUBLE": [
          -1,
          644
        ],
        "'FLOAT": [
          -1,
          644
        ],
        "'BOOLEAN": [
          -1,
          644
        ],
        "'VOID": [
          -1,
          644
        ],
        "'DATA": [
          -1,
          644
        ],
        "'IF": [
          -1,
          644
        ],
        "'FOR": [
          -1,
          644
        ],
        "'RETURN": [
          -1,
          644
        ],
        "'VAR": [
          -1,
          644
        ],
        "'ATCHECK": [
          -1,
          644
        ],
        "'SWITCH": [
          -1,
          644
        ],
        "'YIELD": [
          -1,
          644
        ],
        "'DASH": [
          -1,
          644
        ],
        "'BANG": [
          -1,
          644
        ],
        "'LBRACK": [
          -1,
          644
        ],
        "'NUMBER": [
          -1,
          644
        ],
        "'TRUE": [
          -1,
          644
        ],
        "'FALSE": [
          -1,
          644
        ],
        "'NULL": [
          -1,
          644
        ],
        "'PARENAFTERBRACE": [
          -1,
          644
        ],
        "'TABLE": [
          -1,
          644
        ],
        "'ASK": [
          -1,
          644
        ],
        "'NEW": [
          -1,
          644
        ]
      },
      {
        "'NAME": [
          -1,
          272
        ],
        "'PARENNOSPACE": [
          -1,
          272
        ],
        "'STRING": [
          -1,
          272
        ],
        "'LBRACE": [
          -1,
          272
        ],
        "'RBRACE": [
          -1,
          646
        ],
        "'SPY": [
          -1,
          272
        ],
        "'PARENSPACE": [
          -1,
          272
        ],
        "'INT": [
          -1,
          272
        ],
        "'LONG": [
          -1,
          272
        ],
        "'DOUBLE": [
          -1,
          272
        ],
        "'FLOAT": [
          -1,
          272
        ],
        "'BOOLEAN": [
          -1,
          272
        ],
        "'VOID": [
          -1,
          272
        ],
        "'DATA": [
          -1,
          272
        ],
        "'IF": [
          -1,
          272
        ],
        "'FOR": [
          -1,
          272
        ],
        "'RETURN": [
          -1,
          272
        ],
        "'VAR": [
          -1,
          272
        ],
        "'ATCHECK": [
          -1,
          272
        ],
        "'SWITCH": [
          -1,
          272
        ],
        "'CASE": [
          -1,
          646
        ],
        "'DEFAULT": [
          -1,
          646
        ],
        "'YIELD": [
          -1,
          272
        ],
        "'DASH": [
          -1,
          272
        ],
        "'BANG": [
          -1,
          272
        ],
        "'LBRACK": [
          -1,
          272
        ],
        "'NUMBER": [
          -1,
          272
        ],
        "'TRUE": [
          -1,
          272
        ],
        "'FALSE": [
          -1,
          272
        ],
        "'NULL": [
          -1,
          272
        ],
        "'PARENAFTERBRACE": [
          -1,
          272
        ],
        "'TABLE": [
          -1,
          272
        ],
        "'ASK": [
          -1,
          272
        ],
        "'NEW": [
          -1,
          272
        ]
      },
      {
        "'NAME": [
          -1,
          648
        ],
        "'PARENNOSPACE": [
          -1,
          648
        ],
        "'STRING": [
          -1,
          648
        ],
        "'LBRACE": [
          -1,
          648
        ],
        "'SPY": [
          -1,
          648
        ],
        "'PARENSPACE": [
          -1,
          648
        ],
        "'INT": [
          -1,
          648
        ],
        "'LONG": [
          -1,
          648
        ],
        "'DOUBLE": [
          -1,
          648
        ],
        "'FLOAT": [
          -1,
          648
        ],
        "'BOOLEAN": [
          -1,
          648
        ],
        "'VOID": [
          -1,
          648
        ],
        "'DATA": [
          -1,
          648
        ],
        "'IF": [
          -1,
          648
        ],
        "'FOR": [
          -1,
          648
        ],
        "'RETURN": [
          -1,
          648
        ],
        "'VAR": [
          -1,
          648
        ],
        "'ATCHECK": [
          -1,
          648
        ],
        "'SWITCH": [
          -1,
          648
        ],
        "'YIELD": [
          -1,
          648
        ],
        "'DASH": [
          -1,
          648
        ],
        "'BANG": [
          -1,
          648
        ],
        "'LBRACK": [
          -1,
          648
        ],
        "'NUMBER": [
          -1,
          648
        ],
        "'TRUE": [
          -1,
          648
        ],
        "'FALSE": [
          -1,
          648
        ],
        "'NULL": [
          -1,
          648
        ],
        "'PARENAFTERBRACE": [
          -1,
          648
        ],
        "'TABLE": [
          -1,
          648
        ],
        "'ASK": [
          -1,
          648
        ],
        "'NEW": [
          -1,
          648
        ]
      },
      {
        "$": [
          -1,
          650
        ],
        "'NAME": [
          -1,
          650
        ],
        "'SEMI": [
          -1,
          650
        ],
        "'PARENNOSPACE": [
          -1,
          650
        ],
        "'STRING": [
          -1,
          650
        ],
        "'RPAREN": [
          -1,
          650
        ],
        "'LBRACE": [
          -1,
          650
        ],
        "'RBRACE": [
          -1,
          650
        ],
        "'SPY": [
          -1,
          650
        ],
        "'PARENSPACE": [
          -1,
          650
        ],
        "'COMMA": [
          -1,
          650
        ],
        "'INT": [
          -1,
          650
        ],
        "'LONG": [
          -1,
          650
        ],
        "'DOUBLE": [
          -1,
          650
        ],
        "'FLOAT": [
          -1,
          650
        ],
        "'BOOLEAN": [
          -1,
          650
        ],
        "'VOID": [
          -1,
          650
        ],
        "'LT": [
          -1,
          650
        ],
        "'GT": [
          -1,
          650
        ],
        "'THINARROW": [
          -1,
          650
        ],
        "'DATA": [
          -1,
          650
        ],
        "'IF": [
          -1,
          650
        ],
        "'FOR": [
          -1,
          650
        ],
        "'RETURN": [
          -1,
          650
        ],
        "'VAR": [
          -1,
          650
        ],
        "'ATCHECK": [
          -1,
          650
        ],
        "'ASSERTEQUALS": [
          -1,
          650
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          650
        ],
        "'ASSERTTRUE": [
          -1,
          650
        ],
        "'ASSERTFALSE": [
          -1,
          650
        ],
        "'ASSERTSATISFIES": [
          -1,
          650
        ],
        "'ASSERTRAISES": [
          -1,
          650
        ],
        "'IS": [
          -1,
          650
        ],
        "'ISNOT": [
          -1,
          650
        ],
        "'SATISFIES": [
          -1,
          650
        ],
        "'RAISES": [
          -1,
          650
        ],
        "'SWITCH": [
          -1,
          650
        ],
        "'CASE": [
          -1,
          650
        ],
        "'DEFAULT": [
          -1,
          650
        ],
        "'YIELD": [
          -1,
          650
        ],
        "'PLUS": [
          -1,
          650
        ],
        "'DASH": [
          -1,
          650
        ],
        "'TIMES": [
          -1,
          650
        ],
        "'SLASH": [
          -1,
          650
        ],
        "'PERCENT": [
          -1,
          650
        ],
        "'EQUALEQUAL": [
          -1,
          650
        ],
        "'NEQ": [
          -1,
          650
        ],
        "'LEQ": [
          -1,
          650
        ],
        "'GEQ": [
          -1,
          650
        ],
        "'AND": [
          -1,
          650
        ],
        "'OR": [
          -1,
          650
        ],
        "'BANG": [
          -1,
          650
        ],
        "'DOT": [
          -1,
          650
        ],
        "'LBRACK": [
          -1,
          650
        ],
        "'RBRACK": [
          -1,
          650
        ],
        "'NUMBER": [
          -1,
          650
        ],
        "'TRUE": [
          -1,
          650
        ],
        "'FALSE": [
          -1,
          650
        ],
        "'NULL": [
          -1,
          650
        ],
        "'PARENAFTERBRACE": [
          -1,
          650
        ],
        "'TABLE": [
          -1,
          650
        ],
        "'ASK": [
          -1,
          650
        ],
        "'NEW": [
          -1,
          650
        ]
      },
      {
        "'COMMA": [
          482
        ],
        "table-row_I3": [
          483
        ],
        "'SEMI": [
          -1,
          652
        ]
      },
      {
        "'NAME": [
          -1,
          654
        ],
        "'PARENNOSPACE": [
          -1,
          654
        ],
        "'STRING": [
          -1,
          654
        ],
        "'LBRACE": [
          -1,
          654
        ],
        "'RBRACE": [
          -1,
          654
        ],
        "'SPY": [
          -1,
          654
        ],
        "'PARENSPACE": [
          -1,
          654
        ],
        "'INT": [
          -1,
          654
        ],
        "'LONG": [
          -1,
          654
        ],
        "'DOUBLE": [
          -1,
          654
        ],
        "'FLOAT": [
          -1,
          654
        ],
        "'BOOLEAN": [
          -1,
          654
        ],
        "'VOID": [
          -1,
          654
        ],
        "'DATA": [
          -1,
          654
        ],
        "'IF": [
          -1,
          654
        ],
        "'FOR": [
          -1,
          654
        ],
        "'RETURN": [
          -1,
          654
        ],
        "'VAR": [
          -1,
          654
        ],
        "'ATCHECK": [
          -1,
          654
        ],
        "'ASSERTEQUALS": [
          -1,
          654
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          654
        ],
        "'ASSERTTRUE": [
          -1,
          654
        ],
        "'ASSERTFALSE": [
          -1,
          654
        ],
        "'ASSERTSATISFIES": [
          -1,
          654
        ],
        "'ASSERTRAISES": [
          -1,
          654
        ],
        "'SWITCH": [
          -1,
          654
        ],
        "'YIELD": [
          -1,
          654
        ],
        "'DASH": [
          -1,
          654
        ],
        "'BANG": [
          -1,
          654
        ],
        "'LBRACK": [
          -1,
          654
        ],
        "'NUMBER": [
          -1,
          654
        ],
        "'TRUE": [
          -1,
          654
        ],
        "'FALSE": [
          -1,
          654
        ],
        "'NULL": [
          -1,
          654
        ],
        "'PARENAFTERBRACE": [
          -1,
          654
        ],
        "'TABLE": [
          -1,
          654
        ],
        "'ASK": [
          -1,
          654
        ],
        "'NEW": [
          -1,
          654
        ]
      },
      {
        "'PARENSPACE": [
          484
        ]
      },
      {
        "'NAME": [
          -1,
          656
        ],
        "'PARENNOSPACE": [
          -1,
          656
        ],
        "'STRING": [
          -1,
          656
        ],
        "'LBRACE": [
          -1,
          656
        ],
        "'RBRACE": [
          -1,
          656
        ],
        "'SPY": [
          -1,
          656
        ],
        "'PARENSPACE": [
          -1,
          656
        ],
        "'INT": [
          -1,
          656
        ],
        "'LONG": [
          -1,
          656
        ],
        "'DOUBLE": [
          -1,
          656
        ],
        "'FLOAT": [
          -1,
          656
        ],
        "'BOOLEAN": [
          -1,
          656
        ],
        "'VOID": [
          -1,
          656
        ],
        "'DATA": [
          -1,
          656
        ],
        "'IF": [
          -1,
          656
        ],
        "'FOR": [
          -1,
          656
        ],
        "'RETURN": [
          -1,
          656
        ],
        "'VAR": [
          -1,
          656
        ],
        "'ATCHECK": [
          -1,
          656
        ],
        "'ASSERTEQUALS": [
          -1,
          656
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          656
        ],
        "'ASSERTTRUE": [
          -1,
          656
        ],
        "'ASSERTFALSE": [
          -1,
          656
        ],
        "'ASSERTSATISFIES": [
          -1,
          656
        ],
        "'ASSERTRAISES": [
          -1,
          656
        ],
        "'SWITCH": [
          -1,
          656
        ],
        "'YIELD": [
          -1,
          656
        ],
        "'DASH": [
          -1,
          656
        ],
        "'BANG": [
          -1,
          656
        ],
        "'LBRACK": [
          -1,
          656
        ],
        "'NUMBER": [
          -1,
          656
        ],
        "'TRUE": [
          -1,
          656
        ],
        "'FALSE": [
          -1,
          656
        ],
        "'NULL": [
          -1,
          656
        ],
        "'PARENAFTERBRACE": [
          -1,
          656
        ],
        "'TABLE": [
          -1,
          656
        ],
        "'ASK": [
          -1,
          656
        ],
        "'NEW": [
          -1,
          656
        ]
      },
      {
        "'COMMA": [
          485
        ],
        "case-branch_A0_I3_I1": [
          486
        ],
        "'RPAREN": [
          -1,
          658
        ]
      },
      {
        "'COLON": [
          487
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          488
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'SEMI": [
          -1,
          660
        ],
        "'COMMA": [
          -1,
          660
        ]
      },
      {
        "'NAME": [
          94
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          22
        ],
        "'PARENSPACE": [
          115
        ],
        "full-expr": [
          489
        ],
        "switch-expr": [
          35
        ],
        "'SWITCH": [
          36
        ],
        "lambda-expr": [
          37
        ],
        "binop-expr": [
          38
        ],
        "unop-expr": [
          39
        ],
        "'DASH": [
          40
        ],
        "'BANG": [
          41
        ],
        "app-or-access": [
          42
        ],
        "'LBRACK": [
          43
        ],
        "prim-expr": [
          44
        ],
        "'NUMBER": [
          45
        ],
        "'TRUE": [
          46
        ],
        "'FALSE": [
          47
        ],
        "'NULL": [
          48
        ],
        "'PARENAFTERBRACE": [
          49
        ],
        "construct-expr": [
          50
        ],
        "map-for-expr": [
          51
        ],
        "new-expr": [
          52
        ],
        "ask-expr": [
          53
        ],
        "table-expr": [
          54
        ],
        "record-expr": [
          55
        ],
        "'TABLE": [
          56
        ],
        "'ASK": [
          57
        ],
        "'NEW": [
          58
        ]
      },
      {
        "'NAME": [
          490
        ]
      },
      {
        "'RPAREN": [
          -1,
          662
        ],
        "'COMMA": [
          -1,
          662
        ]
      },
      {
        "switch-body": [
          491
        ],
        "switch-body_I0*": [
          444
        ],
        "'NAME": [
          -1,
          556
        ],
        "'PARENNOSPACE": [
          -1,
          556
        ],
        "'STRING": [
          -1,
          556
        ],
        "'LBRACE": [
          -1,
          556
        ],
        "'SPY": [
          -1,
          556
        ],
        "'PARENSPACE": [
          -1,
          556
        ],
        "'INT": [
          -1,
          556
        ],
        "'LONG": [
          -1,
          556
        ],
        "'DOUBLE": [
          -1,
          556
        ],
        "'FLOAT": [
          -1,
          556
        ],
        "'BOOLEAN": [
          -1,
          556
        ],
        "'VOID": [
          -1,
          556
        ],
        "'DATA": [
          -1,
          556
        ],
        "'IF": [
          -1,
          556
        ],
        "'FOR": [
          -1,
          556
        ],
        "'RETURN": [
          -1,
          556
        ],
        "'VAR": [
          -1,
          556
        ],
        "'ATCHECK": [
          -1,
          556
        ],
        "'SWITCH": [
          -1,
          556
        ],
        "'YIELD": [
          -1,
          556
        ],
        "'DASH": [
          -1,
          556
        ],
        "'BANG": [
          -1,
          556
        ],
        "'LBRACK": [
          -1,
          556
        ],
        "'NUMBER": [
          -1,
          556
        ],
        "'TRUE": [
          -1,
          556
        ],
        "'FALSE": [
          -1,
          556
        ],
        "'NULL": [
          -1,
          556
        ],
        "'PARENAFTERBRACE": [
          -1,
          556
        ],
        "'TABLE": [
          -1,
          556
        ],
        "'ASK": [
          -1,
          556
        ],
        "'NEW": [
          -1,
          556
        ]
      },
      {
        "'SEMI": [
          -1,
          664
        ],
        "'COMMA": [
          -1,
          664
        ]
      },
      {
        "'RPAREN": [
          492
        ]
      },
      {
        "'RPAREN": [
          -1,
          666
        ],
        "'COMMA": [
          -1,
          666
        ]
      },
      {
        "'RBRACE": [
          -1,
          668
        ],
        "'CASE": [
          -1,
          668
        ],
        "'DEFAULT": [
          -1,
          668
        ]
      },
      {
        "block": [
          493
        ],
        "'LBRACE": [
          297
        ]
      },
      {
        "'NAME": [
          -1,
          670
        ],
        "'PARENNOSPACE": [
          -1,
          670
        ],
        "'STRING": [
          -1,
          670
        ],
        "'LBRACE": [
          -1,
          670
        ],
        "'RBRACE": [
          -1,
          670
        ],
        "'SPY": [
          -1,
          670
        ],
        "'PARENSPACE": [
          -1,
          670
        ],
        "'INT": [
          -1,
          670
        ],
        "'LONG": [
          -1,
          670
        ],
        "'DOUBLE": [
          -1,
          670
        ],
        "'FLOAT": [
          -1,
          670
        ],
        "'BOOLEAN": [
          -1,
          670
        ],
        "'VOID": [
          -1,
          670
        ],
        "'DATA": [
          -1,
          670
        ],
        "'IF": [
          -1,
          670
        ],
        "'ELSE": [
          -1,
          670
        ],
        "'FOR": [
          -1,
          670
        ],
        "'RETURN": [
          -1,
          670
        ],
        "'VAR": [
          -1,
          670
        ],
        "'ATCHECK": [
          -1,
          670
        ],
        "'ASSERTEQUALS": [
          -1,
          670
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          670
        ],
        "'ASSERTTRUE": [
          -1,
          670
        ],
        "'ASSERTFALSE": [
          -1,
          670
        ],
        "'ASSERTSATISFIES": [
          -1,
          670
        ],
        "'ASSERTRAISES": [
          -1,
          670
        ],
        "'SWITCH": [
          -1,
          670
        ],
        "'YIELD": [
          -1,
          670
        ],
        "'DASH": [
          -1,
          670
        ],
        "'BANG": [
          -1,
          670
        ],
        "'LBRACK": [
          -1,
          670
        ],
        "'NUMBER": [
          -1,
          670
        ],
        "'TRUE": [
          -1,
          670
        ],
        "'FALSE": [
          -1,
          670
        ],
        "'NULL": [
          -1,
          670
        ],
        "'PARENAFTERBRACE": [
          -1,
          670
        ],
        "'TABLE": [
          -1,
          670
        ],
        "'ASK": [
          -1,
          670
        ],
        "'NEW": [
          -1,
          670
        ]
      }
    ],
    "I": {
      "ε": 0,
      "program": 1,
      "prelude": 2,
      "prelude_I0*": 3,
      "top-block": 4,
      "top-block_I0*": 5,
      "block_I1*": 6,
      "spy-stmt_I3*": 7,
      "fun-decl_I3?": 8,
      "fun-decl_I3_I1*": 9,
      "fun-decl_I6?": 10,
      "where-clause_I2*": 11,
      "type-ann_A6_I1?": 12,
      "type-ann_A6_I1_I2*": 13,
      "type-ann_A7_I1?": 14,
      "type-ann_A7_I1_I1*": 15,
      "data-decl_I4*": 16,
      "data-decl_I5?": 17,
      "variant-decl_A0_I2?": 18,
      "variant-decl_A0_I2_I1*": 19,
      "if-stmt_I5*": 20,
      "if-stmt_I6?": 21,
      "let-stmt_I4?": 22,
      "var-stmt_I5?": 23,
      "assign-stmt_I3?": 24,
      "expr-stmt_I1?": 25,
      "check-block_A0_I6*": 26,
      "check-block_A1_I2*": 27,
      "assert-stmt_A0_I6?": 28,
      "assert-stmt_A1_I6?": 29,
      "assert-stmt_A2_I4?": 30,
      "assert-stmt_A3_I4?": 31,
      "assert-stmt_A4_I6?": 32,
      "assert-stmt_A5_I6?": 33,
      "assert-stmt_A6_I3?": 34,
      "assert-stmt_A7_I3?": 35,
      "assert-stmt_A8_I3?": 36,
      "assert-stmt_A9_I3?": 37,
      "switch-expr_I5*": 38,
      "switch-expr_I6?": 39,
      "case-branch_A0_I3?": 40,
      "case-branch_A0_I3_I1*": 41,
      "switch-body_I0*": 42,
      "yield-stmt_I2?": 43,
      "lambda-expr_A0_I1?": 44,
      "lambda-expr_A0_I1_I1*": 45,
      "lambda-expr_A1_I1?": 46,
      "lambda-expr_A1_I1_I1*": 47,
      "binop-expr_I1*": 48,
      "app-or-access_A0_I2?": 49,
      "app-or-access_A0_I2_I1*": 50,
      "record-expr_A0_I2*": 51,
      "table-expr_I3*": 52,
      "table-expr_I5*": 53,
      "table-row_I3*": 54,
      "ask-expr_A0_I4*": 55,
      "ask-expr_A1_I4*": 56,
      "new-expr_I3?": 57,
      "new-expr_I3_I1*": 58,
      "construct-expr_A0_I3?": 59,
      "construct-expr_A0_I3_I1*": 60,
      "START": 61,
      "if-stmt_I5*,if-stmt_I6?": 62
    },
    "eSPPFs": [
      {
        "label": "EPSILON"
      },
      {
        "label": "program",
        "kids": [
          2,
          4
        ],
        "rule": 0
      },
      {
        "label": "prelude",
        "kids": [
          3
        ],
        "rule": 1
      },
      {
        "label": "prelude_I0*",
        "kids": [],
        "rule": 2
      },
      {
        "label": "top-block",
        "kids": [
          5
        ],
        "rule": 12
      },
      {
        "label": "top-block_I0*",
        "kids": [],
        "rule": 13
      },
      {
        "label": "block_I1*",
        "kids": [],
        "rule": 24
      },
      {
        "label": "spy-stmt_I3*",
        "kids": [],
        "rule": 40
      },
      {
        "label": "fun-decl_I3?",
        "kids": [],
        "rule": 44
      },
      {
        "label": "fun-decl_I3_I1*",
        "kids": [],
        "rule": 47
      },
      {
        "label": "fun-decl_I6?",
        "kids": [],
        "rule": 50
      },
      {
        "label": "where-clause_I2*",
        "kids": [],
        "rule": 55
      },
      {
        "label": "type-ann_A6_I1?",
        "kids": [],
        "rule": 66
      },
      {
        "label": "type-ann_A6_I1_I2*",
        "kids": [],
        "rule": 69
      },
      {
        "label": "type-ann_A7_I1?",
        "kids": [],
        "rule": 73
      },
      {
        "label": "type-ann_A7_I1_I1*",
        "kids": [],
        "rule": 76
      },
      {
        "label": "data-decl_I4*",
        "kids": [],
        "rule": 80
      },
      {
        "label": "data-decl_I5?",
        "kids": [],
        "rule": 83
      },
      {
        "label": "variant-decl_A0_I2?",
        "kids": [],
        "rule": 87
      },
      {
        "label": "variant-decl_A0_I2_I1*",
        "kids": [],
        "rule": 90
      },
      {
        "label": "if-stmt_I5*",
        "kids": [],
        "rule": 96
      },
      {
        "label": "if-stmt_I6?",
        "kids": [],
        "rule": 99
      },
      {
        "label": "let-stmt_I4?",
        "kids": [],
        "rule": 106
      },
      {
        "label": "var-stmt_I5?",
        "kids": [],
        "rule": 110
      },
      {
        "label": "assign-stmt_I3?",
        "kids": [],
        "rule": 114
      },
      {
        "label": "expr-stmt_I1?",
        "kids": [],
        "rule": 118
      },
      {
        "label": "check-block_A0_I6*",
        "kids": [],
        "rule": 122
      },
      {
        "label": "check-block_A1_I2*",
        "kids": [],
        "rule": 127
      },
      {
        "label": "assert-stmt_A0_I6?",
        "kids": [],
        "rule": 132
      },
      {
        "label": "assert-stmt_A1_I6?",
        "kids": [],
        "rule": 136
      },
      {
        "label": "assert-stmt_A2_I4?",
        "kids": [],
        "rule": 140
      },
      {
        "label": "assert-stmt_A3_I4?",
        "kids": [],
        "rule": 144
      },
      {
        "label": "assert-stmt_A4_I6?",
        "kids": [],
        "rule": 148
      },
      {
        "label": "assert-stmt_A5_I6?",
        "kids": [],
        "rule": 152
      },
      {
        "label": "assert-stmt_A6_I3?",
        "kids": [],
        "rule": 156
      },
      {
        "label": "assert-stmt_A7_I3?",
        "kids": [],
        "rule": 160
      },
      {
        "label": "assert-stmt_A8_I3?",
        "kids": [],
        "rule": 164
      },
      {
        "label": "assert-stmt_A9_I3?",
        "kids": [],
        "rule": 168
      },
      {
        "label": "switch-expr_I5*",
        "kids": [],
        "rule": 172
      },
      {
        "label": "switch-expr_I6?",
        "kids": [],
        "rule": 175
      },
      {
        "label": "case-branch_A0_I3?",
        "kids": [],
        "rule": 179
      },
      {
        "label": "case-branch_A0_I3_I1*",
        "kids": [],
        "rule": 182
      },
      {
        "label": "switch-body_I0*",
        "kids": [],
        "rule": 188
      },
      {
        "label": "yield-stmt_I2?",
        "kids": [],
        "rule": 192
      },
      {
        "label": "lambda-expr_A0_I1?",
        "kids": [],
        "rule": 196
      },
      {
        "label": "lambda-expr_A0_I1_I1*",
        "kids": [],
        "rule": 199
      },
      {
        "label": "lambda-expr_A1_I1?",
        "kids": [],
        "rule": 203
      },
      {
        "label": "lambda-expr_A1_I1_I1*",
        "kids": [],
        "rule": 206
      },
      {
        "label": "binop-expr_I1*",
        "kids": [],
        "rule": 214
      },
      {
        "label": "app-or-access_A0_I2?",
        "kids": [],
        "rule": 234
      },
      {
        "label": "app-or-access_A0_I2_I1*",
        "kids": [],
        "rule": 237
      },
      {
        "label": "record-expr_A0_I2*",
        "kids": [],
        "rule": 259
      },
      {
        "label": "table-expr_I3*",
        "kids": [],
        "rule": 265
      },
      {
        "label": "table-expr_I5*",
        "kids": [],
        "rule": 268
      },
      {
        "label": "table-row_I3*",
        "kids": [],
        "rule": 273
      },
      {
        "label": "ask-expr_A0_I4*",
        "kids": [],
        "rule": 277
      },
      {
        "label": "ask-expr_A1_I4*",
        "kids": [],
        "rule": 281
      },
      {
        "label": "new-expr_I3?",
        "kids": [],
        "rule": 287
      },
      {
        "label": "new-expr_I3_I1*",
        "kids": [],
        "rule": 290
      },
      {
        "label": "construct-expr_A0_I3?",
        "kids": [],
        "rule": 294
      },
      {
        "label": "construct-expr_A0_I3_I1*",
        "kids": [],
        "rule": 297
      },
      {
        "label": "START",
        "kids": [
          1
        ],
        "rule": 302
      },
      {
        "label": "if-stmt_I5*,if-stmt_I6?",
        "kids": [
          20,
          21
        ]
      }
    ]
  };
  return { JavaGrammar: Grammar.fromSerializable(g_json) };
});
