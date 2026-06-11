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
          "@rec-stmt"
        ]
      },
      "22": {
        "name": "top-stmt",
        "symbols": [
          "@assign-stmt"
        ]
      },
      "23": {
        "name": "top-stmt",
        "symbols": [
          "@expr-stmt"
        ]
      },
      "24": {
        "name": "block",
        "symbols": [
          "'LBRACE",
          "@block_I1*",
          "'RBRACE"
        ]
      },
      "25": {
        "name": "block_I1*",
        "symbols": []
      },
      "26": {
        "name": "block_I1*",
        "symbols": [
          "@block_I1*",
          "@block_I1"
        ]
      },
      "27": {
        "name": "block_I1",
        "symbols": [
          "@block-stmt"
        ]
      },
      "28": {
        "name": "block-stmt",
        "symbols": [
          "@fun-decl"
        ]
      },
      "29": {
        "name": "block-stmt",
        "symbols": [
          "@data-decl"
        ]
      },
      "30": {
        "name": "block-stmt",
        "symbols": [
          "@if-stmt"
        ]
      },
      "31": {
        "name": "block-stmt",
        "symbols": [
          "@for-stmt"
        ]
      },
      "32": {
        "name": "block-stmt",
        "symbols": [
          "@check-block"
        ]
      },
      "33": {
        "name": "block-stmt",
        "symbols": [
          "@return-stmt"
        ]
      },
      "34": {
        "name": "block-stmt",
        "symbols": [
          "@let-stmt"
        ]
      },
      "35": {
        "name": "block-stmt",
        "symbols": [
          "@var-stmt"
        ]
      },
      "36": {
        "name": "block-stmt",
        "symbols": [
          "@rec-stmt"
        ]
      },
      "37": {
        "name": "block-stmt",
        "symbols": [
          "@assign-stmt"
        ]
      },
      "38": {
        "name": "block-stmt",
        "symbols": [
          "@yield-stmt"
        ]
      },
      "39": {
        "name": "block-stmt",
        "symbols": [
          "@spy-stmt"
        ]
      },
      "40": {
        "name": "block-stmt",
        "symbols": [
          "@expr-stmt"
        ]
      },
      "41": {
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
      "42": {
        "name": "spy-stmt_I3*",
        "symbols": []
      },
      "43": {
        "name": "spy-stmt_I3*",
        "symbols": [
          "@spy-stmt_I3*",
          "@spy-stmt_I3"
        ]
      },
      "44": {
        "name": "spy-stmt_I3",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "45": {
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
      "46": {
        "name": "fun-decl_I3?",
        "symbols": []
      },
      "47": {
        "name": "fun-decl_I3?",
        "symbols": [
          "@fun-decl_I3"
        ]
      },
      "48": {
        "name": "fun-decl_I3",
        "symbols": [
          "@param",
          "@fun-decl_I3_I1*"
        ]
      },
      "49": {
        "name": "fun-decl_I3_I1*",
        "symbols": []
      },
      "50": {
        "name": "fun-decl_I3_I1*",
        "symbols": [
          "@fun-decl_I3_I1*",
          "@fun-decl_I3_I1"
        ]
      },
      "51": {
        "name": "fun-decl_I3_I1",
        "symbols": [
          "'COMMA",
          "@param"
        ]
      },
      "52": {
        "name": "fun-decl_I6?",
        "symbols": []
      },
      "53": {
        "name": "fun-decl_I6?",
        "symbols": [
          "@fun-decl_I6"
        ]
      },
      "54": {
        "name": "fun-decl_I6",
        "symbols": [
          "@where-clause"
        ]
      },
      "55": {
        "name": "param",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "56": {
        "name": "where-clause",
        "symbols": [
          "'WHERE",
          "'LBRACE",
          "@where-clause_I2*",
          "'RBRACE"
        ]
      },
      "57": {
        "name": "where-clause_I2*",
        "symbols": []
      },
      "58": {
        "name": "where-clause_I2*",
        "symbols": [
          "@where-clause_I2*",
          "@where-clause_I2"
        ]
      },
      "59": {
        "name": "where-clause_I2",
        "symbols": [
          "@block-stmt"
        ]
      },
      "60": {
        "name": "where-clause_I2",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "61": {
        "name": "type-ann",
        "symbols": [
          "'INT"
        ]
      },
      "62": {
        "name": "type-ann",
        "symbols": [
          "'LONG"
        ]
      },
      "63": {
        "name": "type-ann",
        "symbols": [
          "'DOUBLE"
        ]
      },
      "64": {
        "name": "type-ann",
        "symbols": [
          "'FLOAT"
        ]
      },
      "65": {
        "name": "type-ann",
        "symbols": [
          "'BOOLEAN"
        ]
      },
      "66": {
        "name": "type-ann",
        "symbols": [
          "'VOID"
        ]
      },
      "67": {
        "name": "type-ann",
        "symbols": [
          "'NAME",
          "@type-ann_A6_I1?"
        ]
      },
      "68": {
        "name": "type-ann_A6_I1?",
        "symbols": []
      },
      "69": {
        "name": "type-ann_A6_I1?",
        "symbols": [
          "@type-ann_A6_I1"
        ]
      },
      "70": {
        "name": "type-ann_A6_I1",
        "symbols": [
          "'LT",
          "@type-ann",
          "@type-ann_A6_I1_I2*",
          "'GT"
        ]
      },
      "71": {
        "name": "type-ann_A6_I1_I2*",
        "symbols": []
      },
      "72": {
        "name": "type-ann_A6_I1_I2*",
        "symbols": [
          "@type-ann_A6_I1_I2*",
          "@type-ann_A6_I1_I2"
        ]
      },
      "73": {
        "name": "type-ann_A6_I1_I2",
        "symbols": [
          "'COMMA",
          "@type-ann"
        ]
      },
      "74": {
        "name": "type-ann",
        "symbols": [
          "'PARENSPACE",
          "@type-ann_A7_I1?",
          "'THINARROW",
          "@type-ann",
          "'RPAREN"
        ]
      },
      "75": {
        "name": "type-ann_A7_I1?",
        "symbols": []
      },
      "76": {
        "name": "type-ann_A7_I1?",
        "symbols": [
          "@type-ann_A7_I1"
        ]
      },
      "77": {
        "name": "type-ann_A7_I1",
        "symbols": [
          "@type-ann",
          "@type-ann_A7_I1_I1*"
        ]
      },
      "78": {
        "name": "type-ann_A7_I1_I1*",
        "symbols": []
      },
      "79": {
        "name": "type-ann_A7_I1_I1*",
        "symbols": [
          "@type-ann_A7_I1_I1*",
          "@type-ann_A7_I1_I1"
        ]
      },
      "80": {
        "name": "type-ann_A7_I1_I1",
        "symbols": [
          "'COMMA",
          "@type-ann"
        ]
      },
      "81": {
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
      "82": {
        "name": "data-decl_I4*",
        "symbols": []
      },
      "83": {
        "name": "data-decl_I4*",
        "symbols": [
          "@data-decl_I4*",
          "@data-decl_I4"
        ]
      },
      "84": {
        "name": "data-decl_I4",
        "symbols": [
          "'SEMI",
          "@variant-decl"
        ]
      },
      "85": {
        "name": "data-decl_I5?",
        "symbols": []
      },
      "86": {
        "name": "data-decl_I5?",
        "symbols": [
          "@data-decl_I5"
        ]
      },
      "87": {
        "name": "data-decl_I5",
        "symbols": [
          "'SEMI"
        ]
      },
      "88": {
        "name": "variant-decl",
        "symbols": [
          "'NAME",
          "'PARENNOSPACE",
          "@variant-decl_A0_I2?",
          "'RPAREN"
        ]
      },
      "89": {
        "name": "variant-decl_A0_I2?",
        "symbols": []
      },
      "90": {
        "name": "variant-decl_A0_I2?",
        "symbols": [
          "@variant-decl_A0_I2"
        ]
      },
      "91": {
        "name": "variant-decl_A0_I2",
        "symbols": [
          "@variant-member",
          "@variant-decl_A0_I2_I1*"
        ]
      },
      "92": {
        "name": "variant-decl_A0_I2_I1*",
        "symbols": []
      },
      "93": {
        "name": "variant-decl_A0_I2_I1*",
        "symbols": [
          "@variant-decl_A0_I2_I1*",
          "@variant-decl_A0_I2_I1"
        ]
      },
      "94": {
        "name": "variant-decl_A0_I2_I1",
        "symbols": [
          "'COMMA",
          "@variant-member"
        ]
      },
      "95": {
        "name": "variant-decl",
        "symbols": [
          "'NAME"
        ]
      },
      "96": {
        "name": "variant-member",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "97": {
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
      "98": {
        "name": "if-stmt_I5*",
        "symbols": []
      },
      "99": {
        "name": "if-stmt_I5*",
        "symbols": [
          "@if-stmt_I5*",
          "@if-stmt_I5"
        ]
      },
      "100": {
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
      "101": {
        "name": "if-stmt_I6?",
        "symbols": []
      },
      "102": {
        "name": "if-stmt_I6?",
        "symbols": [
          "@if-stmt_I6"
        ]
      },
      "103": {
        "name": "if-stmt_I6",
        "symbols": [
          "'ELSE",
          "@block"
        ]
      },
      "104": {
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
      "105": {
        "name": "return-stmt",
        "symbols": [
          "'RETURN",
          "@full-expr",
          "'SEMI"
        ]
      },
      "106": {
        "name": "return-stmt",
        "symbols": [
          "'RETURN",
          "'SEMI"
        ]
      },
      "107": {
        "name": "let-stmt",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'EQUALS",
          "@full-expr",
          "@let-stmt_I4?"
        ]
      },
      "108": {
        "name": "let-stmt_I4?",
        "symbols": []
      },
      "109": {
        "name": "let-stmt_I4?",
        "symbols": [
          "@let-stmt_I4"
        ]
      },
      "110": {
        "name": "let-stmt_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "111": {
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
      "112": {
        "name": "var-stmt_I5?",
        "symbols": []
      },
      "113": {
        "name": "var-stmt_I5?",
        "symbols": [
          "@var-stmt_I5"
        ]
      },
      "114": {
        "name": "var-stmt_I5",
        "symbols": [
          "'SEMI"
        ]
      },
      "115": {
        "name": "rec-stmt",
        "symbols": [
          "'REC",
          "@type-ann",
          "'NAME",
          "'EQUALS",
          "@full-expr",
          "@rec-stmt_I5?"
        ]
      },
      "116": {
        "name": "rec-stmt_I5?",
        "symbols": []
      },
      "117": {
        "name": "rec-stmt_I5?",
        "symbols": [
          "@rec-stmt_I5"
        ]
      },
      "118": {
        "name": "rec-stmt_I5",
        "symbols": [
          "'SEMI"
        ]
      },
      "119": {
        "name": "assign-stmt",
        "symbols": [
          "'NAME",
          "'COLONEQUALS",
          "@full-expr",
          "@assign-stmt_I3?"
        ]
      },
      "120": {
        "name": "assign-stmt_I3?",
        "symbols": []
      },
      "121": {
        "name": "assign-stmt_I3?",
        "symbols": [
          "@assign-stmt_I3"
        ]
      },
      "122": {
        "name": "assign-stmt_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "123": {
        "name": "expr-stmt",
        "symbols": [
          "@full-expr",
          "@expr-stmt_I1?"
        ]
      },
      "124": {
        "name": "expr-stmt_I1?",
        "symbols": []
      },
      "125": {
        "name": "expr-stmt_I1?",
        "symbols": [
          "@expr-stmt_I1"
        ]
      },
      "126": {
        "name": "expr-stmt_I1",
        "symbols": [
          "'SEMI"
        ]
      },
      "127": {
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
      "128": {
        "name": "check-block_A0_I6*",
        "symbols": []
      },
      "129": {
        "name": "check-block_A0_I6*",
        "symbols": [
          "@check-block_A0_I6*",
          "@check-block_A0_I6"
        ]
      },
      "130": {
        "name": "check-block_A0_I6",
        "symbols": [
          "@block-stmt"
        ]
      },
      "131": {
        "name": "check-block_A0_I6",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "132": {
        "name": "check-block",
        "symbols": [
          "'ATCHECK",
          "'LBRACE",
          "@check-block_A1_I2*",
          "'RBRACE"
        ]
      },
      "133": {
        "name": "check-block_A1_I2*",
        "symbols": []
      },
      "134": {
        "name": "check-block_A1_I2*",
        "symbols": [
          "@check-block_A1_I2*",
          "@check-block_A1_I2"
        ]
      },
      "135": {
        "name": "check-block_A1_I2",
        "symbols": [
          "@block-stmt"
        ]
      },
      "136": {
        "name": "check-block_A1_I2",
        "symbols": [
          "@assert-stmt"
        ]
      },
      "137": {
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
      "138": {
        "name": "assert-stmt_A0_I6?",
        "symbols": []
      },
      "139": {
        "name": "assert-stmt_A0_I6?",
        "symbols": [
          "@assert-stmt_A0_I6"
        ]
      },
      "140": {
        "name": "assert-stmt_A0_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "141": {
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
      "142": {
        "name": "assert-stmt_A1_I6?",
        "symbols": []
      },
      "143": {
        "name": "assert-stmt_A1_I6?",
        "symbols": [
          "@assert-stmt_A1_I6"
        ]
      },
      "144": {
        "name": "assert-stmt_A1_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "145": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTTRUE",
          "'PARENNOSPACE",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A2_I4?"
        ]
      },
      "146": {
        "name": "assert-stmt_A2_I4?",
        "symbols": []
      },
      "147": {
        "name": "assert-stmt_A2_I4?",
        "symbols": [
          "@assert-stmt_A2_I4"
        ]
      },
      "148": {
        "name": "assert-stmt_A2_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "149": {
        "name": "assert-stmt",
        "symbols": [
          "'ASSERTFALSE",
          "'PARENNOSPACE",
          "@full-expr",
          "'RPAREN",
          "@assert-stmt_A3_I4?"
        ]
      },
      "150": {
        "name": "assert-stmt_A3_I4?",
        "symbols": []
      },
      "151": {
        "name": "assert-stmt_A3_I4?",
        "symbols": [
          "@assert-stmt_A3_I4"
        ]
      },
      "152": {
        "name": "assert-stmt_A3_I4",
        "symbols": [
          "'SEMI"
        ]
      },
      "153": {
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
      "154": {
        "name": "assert-stmt_A4_I6?",
        "symbols": []
      },
      "155": {
        "name": "assert-stmt_A4_I6?",
        "symbols": [
          "@assert-stmt_A4_I6"
        ]
      },
      "156": {
        "name": "assert-stmt_A4_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "157": {
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
      "158": {
        "name": "assert-stmt_A5_I6?",
        "symbols": []
      },
      "159": {
        "name": "assert-stmt_A5_I6?",
        "symbols": [
          "@assert-stmt_A5_I6"
        ]
      },
      "160": {
        "name": "assert-stmt_A5_I6",
        "symbols": [
          "'SEMI"
        ]
      },
      "161": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'IS",
          "@full-expr",
          "@assert-stmt_A6_I3?"
        ]
      },
      "162": {
        "name": "assert-stmt_A6_I3?",
        "symbols": []
      },
      "163": {
        "name": "assert-stmt_A6_I3?",
        "symbols": [
          "@assert-stmt_A6_I3"
        ]
      },
      "164": {
        "name": "assert-stmt_A6_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "165": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'ISNOT",
          "@full-expr",
          "@assert-stmt_A7_I3?"
        ]
      },
      "166": {
        "name": "assert-stmt_A7_I3?",
        "symbols": []
      },
      "167": {
        "name": "assert-stmt_A7_I3?",
        "symbols": [
          "@assert-stmt_A7_I3"
        ]
      },
      "168": {
        "name": "assert-stmt_A7_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "169": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'SATISFIES",
          "@full-expr",
          "@assert-stmt_A8_I3?"
        ]
      },
      "170": {
        "name": "assert-stmt_A8_I3?",
        "symbols": []
      },
      "171": {
        "name": "assert-stmt_A8_I3?",
        "symbols": [
          "@assert-stmt_A8_I3"
        ]
      },
      "172": {
        "name": "assert-stmt_A8_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "173": {
        "name": "assert-stmt",
        "symbols": [
          "@full-expr",
          "'RAISES",
          "@full-expr",
          "@assert-stmt_A9_I3?"
        ]
      },
      "174": {
        "name": "assert-stmt_A9_I3?",
        "symbols": []
      },
      "175": {
        "name": "assert-stmt_A9_I3?",
        "symbols": [
          "@assert-stmt_A9_I3"
        ]
      },
      "176": {
        "name": "assert-stmt_A9_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "177": {
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
      "178": {
        "name": "switch-expr_I5*",
        "symbols": []
      },
      "179": {
        "name": "switch-expr_I5*",
        "symbols": [
          "@switch-expr_I5*",
          "@switch-expr_I5"
        ]
      },
      "180": {
        "name": "switch-expr_I5",
        "symbols": [
          "@case-branch"
        ]
      },
      "181": {
        "name": "switch-expr_I6?",
        "symbols": []
      },
      "182": {
        "name": "switch-expr_I6?",
        "symbols": [
          "@switch-expr_I6"
        ]
      },
      "183": {
        "name": "switch-expr_I6",
        "symbols": [
          "@default-branch"
        ]
      },
      "184": {
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
      "185": {
        "name": "case-branch_A0_I3?",
        "symbols": []
      },
      "186": {
        "name": "case-branch_A0_I3?",
        "symbols": [
          "@case-branch_A0_I3"
        ]
      },
      "187": {
        "name": "case-branch_A0_I3",
        "symbols": [
          "'NAME",
          "@case-branch_A0_I3_I1*"
        ]
      },
      "188": {
        "name": "case-branch_A0_I3_I1*",
        "symbols": []
      },
      "189": {
        "name": "case-branch_A0_I3_I1*",
        "symbols": [
          "@case-branch_A0_I3_I1*",
          "@case-branch_A0_I3_I1"
        ]
      },
      "190": {
        "name": "case-branch_A0_I3_I1",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "191": {
        "name": "case-branch",
        "symbols": [
          "'CASE",
          "'NAME",
          "'COLON",
          "@switch-body"
        ]
      },
      "192": {
        "name": "default-branch",
        "symbols": [
          "'DEFAULT",
          "'COLON",
          "@switch-body"
        ]
      },
      "193": {
        "name": "switch-body",
        "symbols": [
          "@switch-body_I0*",
          "@yield-stmt"
        ]
      },
      "194": {
        "name": "switch-body_I0*",
        "symbols": []
      },
      "195": {
        "name": "switch-body_I0*",
        "symbols": [
          "@switch-body_I0*",
          "@switch-body_I0"
        ]
      },
      "196": {
        "name": "switch-body_I0",
        "symbols": [
          "@block-stmt"
        ]
      },
      "197": {
        "name": "yield-stmt",
        "symbols": [
          "'YIELD",
          "@full-expr",
          "@yield-stmt_I2?"
        ]
      },
      "198": {
        "name": "yield-stmt_I2?",
        "symbols": []
      },
      "199": {
        "name": "yield-stmt_I2?",
        "symbols": [
          "@yield-stmt_I2"
        ]
      },
      "200": {
        "name": "yield-stmt_I2",
        "symbols": [
          "'SEMI"
        ]
      },
      "201": {
        "name": "lambda-expr",
        "symbols": [
          "'PARENSPACE",
          "@lambda-expr_A0_I1?",
          "'RPAREN",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "202": {
        "name": "lambda-expr_A0_I1?",
        "symbols": []
      },
      "203": {
        "name": "lambda-expr_A0_I1?",
        "symbols": [
          "@lambda-expr_A0_I1"
        ]
      },
      "204": {
        "name": "lambda-expr_A0_I1",
        "symbols": [
          "@lambda-param",
          "@lambda-expr_A0_I1_I1*"
        ]
      },
      "205": {
        "name": "lambda-expr_A0_I1_I1*",
        "symbols": []
      },
      "206": {
        "name": "lambda-expr_A0_I1_I1*",
        "symbols": [
          "@lambda-expr_A0_I1_I1*",
          "@lambda-expr_A0_I1_I1"
        ]
      },
      "207": {
        "name": "lambda-expr_A0_I1_I1",
        "symbols": [
          "'COMMA",
          "@lambda-param"
        ]
      },
      "208": {
        "name": "lambda-expr",
        "symbols": [
          "'PARENNOSPACE",
          "@lambda-expr_A1_I1?",
          "'RPAREN",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "209": {
        "name": "lambda-expr_A1_I1?",
        "symbols": []
      },
      "210": {
        "name": "lambda-expr_A1_I1?",
        "symbols": [
          "@lambda-expr_A1_I1"
        ]
      },
      "211": {
        "name": "lambda-expr_A1_I1",
        "symbols": [
          "@lambda-param",
          "@lambda-expr_A1_I1_I1*"
        ]
      },
      "212": {
        "name": "lambda-expr_A1_I1_I1*",
        "symbols": []
      },
      "213": {
        "name": "lambda-expr_A1_I1_I1*",
        "symbols": [
          "@lambda-expr_A1_I1_I1*",
          "@lambda-expr_A1_I1_I1"
        ]
      },
      "214": {
        "name": "lambda-expr_A1_I1_I1",
        "symbols": [
          "'COMMA",
          "@lambda-param"
        ]
      },
      "215": {
        "name": "lambda-param",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "216": {
        "name": "lambda-param",
        "symbols": [
          "'NAME"
        ]
      },
      "217": {
        "name": "full-expr",
        "symbols": [
          "@lambda-expr"
        ]
      },
      "218": {
        "name": "full-expr",
        "symbols": [
          "@binop-expr"
        ]
      },
      "219": {
        "name": "binop-expr",
        "symbols": [
          "@unop-expr",
          "@binop-expr_I1*"
        ]
      },
      "220": {
        "name": "binop-expr_I1*",
        "symbols": []
      },
      "221": {
        "name": "binop-expr_I1*",
        "symbols": [
          "@binop-expr_I1*",
          "@binop-expr_I1"
        ]
      },
      "222": {
        "name": "binop-expr_I1",
        "symbols": [
          "@binop",
          "@unop-expr"
        ]
      },
      "223": {
        "name": "binop",
        "symbols": [
          "'PLUS"
        ]
      },
      "224": {
        "name": "binop",
        "symbols": [
          "'DASH"
        ]
      },
      "225": {
        "name": "binop",
        "symbols": [
          "'TIMES"
        ]
      },
      "226": {
        "name": "binop",
        "symbols": [
          "'SLASH"
        ]
      },
      "227": {
        "name": "binop",
        "symbols": [
          "'PERCENT"
        ]
      },
      "228": {
        "name": "binop",
        "symbols": [
          "'EQUALEQUAL"
        ]
      },
      "229": {
        "name": "binop",
        "symbols": [
          "'NEQ"
        ]
      },
      "230": {
        "name": "binop",
        "symbols": [
          "'LEQ"
        ]
      },
      "231": {
        "name": "binop",
        "symbols": [
          "'GEQ"
        ]
      },
      "232": {
        "name": "binop",
        "symbols": [
          "'LT"
        ]
      },
      "233": {
        "name": "binop",
        "symbols": [
          "'GT"
        ]
      },
      "234": {
        "name": "binop",
        "symbols": [
          "'AND"
        ]
      },
      "235": {
        "name": "binop",
        "symbols": [
          "'OR"
        ]
      },
      "236": {
        "name": "unop-expr",
        "symbols": [
          "'BANG",
          "@unop-expr"
        ]
      },
      "237": {
        "name": "unop-expr",
        "symbols": [
          "'DASH",
          "@unop-expr"
        ]
      },
      "238": {
        "name": "unop-expr",
        "symbols": [
          "@app-or-access"
        ]
      },
      "239": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'PARENNOSPACE",
          "@app-or-access_A0_I2?",
          "'RPAREN"
        ]
      },
      "240": {
        "name": "app-or-access_A0_I2?",
        "symbols": []
      },
      "241": {
        "name": "app-or-access_A0_I2?",
        "symbols": [
          "@app-or-access_A0_I2"
        ]
      },
      "242": {
        "name": "app-or-access_A0_I2",
        "symbols": [
          "@full-expr",
          "@app-or-access_A0_I2_I1*"
        ]
      },
      "243": {
        "name": "app-or-access_A0_I2_I1*",
        "symbols": []
      },
      "244": {
        "name": "app-or-access_A0_I2_I1*",
        "symbols": [
          "@app-or-access_A0_I2_I1*",
          "@app-or-access_A0_I2_I1"
        ]
      },
      "245": {
        "name": "app-or-access_A0_I2_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "246": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'DOT",
          "'NAME"
        ]
      },
      "247": {
        "name": "app-or-access",
        "symbols": [
          "@app-or-access",
          "'LBRACK",
          "@binop-expr",
          "'RBRACK"
        ]
      },
      "248": {
        "name": "app-or-access",
        "symbols": [
          "@prim-expr"
        ]
      },
      "249": {
        "name": "prim-expr",
        "symbols": [
          "'NUMBER"
        ]
      },
      "250": {
        "name": "prim-expr",
        "symbols": [
          "'STRING"
        ]
      },
      "251": {
        "name": "prim-expr",
        "symbols": [
          "'TRUE"
        ]
      },
      "252": {
        "name": "prim-expr",
        "symbols": [
          "'FALSE"
        ]
      },
      "253": {
        "name": "prim-expr",
        "symbols": [
          "'NULL"
        ]
      },
      "254": {
        "name": "prim-expr",
        "symbols": [
          "'NAME"
        ]
      },
      "255": {
        "name": "prim-expr",
        "symbols": [
          "'PARENSPACE",
          "@full-expr",
          "'RPAREN"
        ]
      },
      "256": {
        "name": "prim-expr",
        "symbols": [
          "'PARENAFTERBRACE",
          "@full-expr",
          "'RPAREN"
        ]
      },
      "257": {
        "name": "prim-expr",
        "symbols": [
          "@switch-expr"
        ]
      },
      "258": {
        "name": "prim-expr",
        "symbols": [
          "@construct-expr"
        ]
      },
      "259": {
        "name": "prim-expr",
        "symbols": [
          "@map-for-expr"
        ]
      },
      "260": {
        "name": "prim-expr",
        "symbols": [
          "@new-expr"
        ]
      },
      "261": {
        "name": "prim-expr",
        "symbols": [
          "@ask-expr"
        ]
      },
      "262": {
        "name": "prim-expr",
        "symbols": [
          "@table-expr"
        ]
      },
      "263": {
        "name": "prim-expr",
        "symbols": [
          "@record-expr"
        ]
      },
      "264": {
        "name": "prim-expr",
        "symbols": [
          "@block-expr"
        ]
      },
      "265": {
        "name": "prim-expr",
        "symbols": [
          "@sieve-expr"
        ]
      },
      "266": {
        "name": "prim-expr",
        "symbols": [
          "@order-expr"
        ]
      },
      "267": {
        "name": "prim-expr",
        "symbols": [
          "@extend-expr"
        ]
      },
      "268": {
        "name": "prim-expr",
        "symbols": [
          "@select-expr"
        ]
      },
      "269": {
        "name": "prim-expr",
        "symbols": [
          "@extract-expr"
        ]
      },
      "270": {
        "name": "sieve-expr",
        "symbols": [
          "'SIEVE",
          "@full-expr",
          "'USING",
          "'NAME",
          "@sieve-expr_I4*",
          "'LBRACE",
          "@sieve-expr_I6*",
          "'RBRACE"
        ]
      },
      "271": {
        "name": "sieve-expr_I4*",
        "symbols": []
      },
      "272": {
        "name": "sieve-expr_I4*",
        "symbols": [
          "@sieve-expr_I4*",
          "@sieve-expr_I4"
        ]
      },
      "273": {
        "name": "sieve-expr_I4",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "274": {
        "name": "sieve-expr_I6*",
        "symbols": []
      },
      "275": {
        "name": "sieve-expr_I6*",
        "symbols": [
          "@sieve-expr_I6*",
          "@sieve-expr_I6"
        ]
      },
      "276": {
        "name": "sieve-expr_I6",
        "symbols": [
          "@block-stmt"
        ]
      },
      "277": {
        "name": "order-expr",
        "symbols": [
          "'ORDER",
          "@full-expr",
          "'LBRACE",
          "@column-sort",
          "@order-expr_I4*",
          "@order-expr_I5?",
          "'RBRACE"
        ]
      },
      "278": {
        "name": "order-expr_I4*",
        "symbols": []
      },
      "279": {
        "name": "order-expr_I4*",
        "symbols": [
          "@order-expr_I4*",
          "@order-expr_I4"
        ]
      },
      "280": {
        "name": "order-expr_I4",
        "symbols": [
          "'SEMI",
          "@column-sort"
        ]
      },
      "281": {
        "name": "order-expr_I5?",
        "symbols": []
      },
      "282": {
        "name": "order-expr_I5?",
        "symbols": [
          "@order-expr_I5"
        ]
      },
      "283": {
        "name": "order-expr_I5",
        "symbols": [
          "'SEMI"
        ]
      },
      "284": {
        "name": "column-sort",
        "symbols": [
          "'NAME",
          "'ASCENDING"
        ]
      },
      "285": {
        "name": "column-sort",
        "symbols": [
          "'NAME",
          "'DESCENDING"
        ]
      },
      "286": {
        "name": "extend-expr",
        "symbols": [
          "'EXTEND",
          "@full-expr",
          "'USING",
          "'NAME",
          "@extend-expr_I4*",
          "'LBRACE",
          "@let-stmt",
          "@extend-expr_I7*",
          "'RBRACE"
        ]
      },
      "287": {
        "name": "extend-expr_I4*",
        "symbols": []
      },
      "288": {
        "name": "extend-expr_I4*",
        "symbols": [
          "@extend-expr_I4*",
          "@extend-expr_I4"
        ]
      },
      "289": {
        "name": "extend-expr_I4",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "290": {
        "name": "extend-expr_I7*",
        "symbols": []
      },
      "291": {
        "name": "extend-expr_I7*",
        "symbols": [
          "@extend-expr_I7*",
          "@extend-expr_I7"
        ]
      },
      "292": {
        "name": "extend-expr_I7",
        "symbols": [
          "@let-stmt"
        ]
      },
      "293": {
        "name": "select-expr",
        "symbols": [
          "'SELECT",
          "'NAME",
          "@select-expr_I2*",
          "'FROM",
          "@full-expr"
        ]
      },
      "294": {
        "name": "select-expr_I2*",
        "symbols": []
      },
      "295": {
        "name": "select-expr_I2*",
        "symbols": [
          "@select-expr_I2*",
          "@select-expr_I2"
        ]
      },
      "296": {
        "name": "select-expr_I2",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "297": {
        "name": "extract-expr",
        "symbols": [
          "'EXTRACT",
          "'NAME",
          "'FROM",
          "@full-expr"
        ]
      },
      "298": {
        "name": "block-expr",
        "symbols": [
          "'BLOCK",
          "'LBRACE",
          "@block-expr_I2*",
          "'RBRACE"
        ]
      },
      "299": {
        "name": "block-expr_I2*",
        "symbols": []
      },
      "300": {
        "name": "block-expr_I2*",
        "symbols": [
          "@block-expr_I2*",
          "@block-expr_I2"
        ]
      },
      "301": {
        "name": "block-expr_I2",
        "symbols": [
          "@block-stmt"
        ]
      },
      "302": {
        "name": "record-expr",
        "symbols": [
          "'LBRACE",
          "@record-field",
          "@record-expr_A0_I2*",
          "'RBRACE"
        ]
      },
      "303": {
        "name": "record-expr_A0_I2*",
        "symbols": []
      },
      "304": {
        "name": "record-expr_A0_I2*",
        "symbols": [
          "@record-expr_A0_I2*",
          "@record-expr_A0_I2"
        ]
      },
      "305": {
        "name": "record-expr_A0_I2",
        "symbols": [
          "'COMMA",
          "@record-field"
        ]
      },
      "306": {
        "name": "record-expr",
        "symbols": [
          "'LBRACE",
          "'RBRACE"
        ]
      },
      "307": {
        "name": "record-field",
        "symbols": [
          "'NAME",
          "'COLON",
          "@full-expr"
        ]
      },
      "308": {
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
      "309": {
        "name": "table-expr_I3*",
        "symbols": []
      },
      "310": {
        "name": "table-expr_I3*",
        "symbols": [
          "@table-expr_I3*",
          "@table-expr_I3"
        ]
      },
      "311": {
        "name": "table-expr_I3",
        "symbols": [
          "'COMMA",
          "@table-header"
        ]
      },
      "312": {
        "name": "table-expr_I5*",
        "symbols": []
      },
      "313": {
        "name": "table-expr_I5*",
        "symbols": [
          "@table-expr_I5*",
          "@table-expr_I5"
        ]
      },
      "314": {
        "name": "table-expr_I5",
        "symbols": [
          "@table-row",
          "'SEMI"
        ]
      },
      "315": {
        "name": "table-header",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "316": {
        "name": "table-row",
        "symbols": [
          "'ROW",
          "'COLON",
          "@full-expr",
          "@table-row_I3*"
        ]
      },
      "317": {
        "name": "table-row_I3*",
        "symbols": []
      },
      "318": {
        "name": "table-row_I3*",
        "symbols": [
          "@table-row_I3*",
          "@table-row_I3"
        ]
      },
      "319": {
        "name": "table-row_I3",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "320": {
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
      "321": {
        "name": "ask-expr_A0_I4*",
        "symbols": []
      },
      "322": {
        "name": "ask-expr_A0_I4*",
        "symbols": [
          "@ask-expr_A0_I4*",
          "@ask-expr_A0_I4"
        ]
      },
      "323": {
        "name": "ask-expr_A0_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "324": {
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
      "325": {
        "name": "ask-expr_A1_I4*",
        "symbols": []
      },
      "326": {
        "name": "ask-expr_A1_I4*",
        "symbols": [
          "@ask-expr_A1_I4*",
          "@ask-expr_A1_I4"
        ]
      },
      "327": {
        "name": "ask-expr_A1_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "328": {
        "name": "ask-branch",
        "symbols": [
          "@binop-expr",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "329": {
        "name": "otherwise-branch",
        "symbols": [
          "'OTHERWISE",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "330": {
        "name": "new-expr",
        "symbols": [
          "'NEW",
          "'NAME",
          "'PARENNOSPACE",
          "@new-expr_I3?",
          "'RPAREN"
        ]
      },
      "331": {
        "name": "new-expr_I3?",
        "symbols": []
      },
      "332": {
        "name": "new-expr_I3?",
        "symbols": [
          "@new-expr_I3"
        ]
      },
      "333": {
        "name": "new-expr_I3",
        "symbols": [
          "@full-expr",
          "@new-expr_I3_I1*"
        ]
      },
      "334": {
        "name": "new-expr_I3_I1*",
        "symbols": []
      },
      "335": {
        "name": "new-expr_I3_I1*",
        "symbols": [
          "@new-expr_I3_I1*",
          "@new-expr_I3_I1"
        ]
      },
      "336": {
        "name": "new-expr_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "337": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'NAME",
          "'COLON",
          "@construct-expr_A0_I3?",
          "'RBRACK"
        ]
      },
      "338": {
        "name": "construct-expr_A0_I3?",
        "symbols": []
      },
      "339": {
        "name": "construct-expr_A0_I3?",
        "symbols": [
          "@construct-expr_A0_I3"
        ]
      },
      "340": {
        "name": "construct-expr_A0_I3",
        "symbols": [
          "@full-expr",
          "@construct-expr_A0_I3_I1*"
        ]
      },
      "341": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": []
      },
      "342": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": [
          "@construct-expr_A0_I3_I1*",
          "@construct-expr_A0_I3_I1"
        ]
      },
      "343": {
        "name": "construct-expr_A0_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "344": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'RBRACK"
        ]
      },
      "345": {
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
      "346": {
        "name": "map-for-expr",
        "symbols": [
          "'LBRACK",
          "'FOR",
          "'NAME",
          "'PARENNOSPACE",
          "@for-bind",
          "@map-for-expr_A1_I5*",
          "'RPAREN",
          "@block",
          "'RBRACK"
        ]
      },
      "347": {
        "name": "map-for-expr_A1_I5*",
        "symbols": []
      },
      "348": {
        "name": "map-for-expr_A1_I5*",
        "symbols": [
          "@map-for-expr_A1_I5*",
          "@map-for-expr_A1_I5"
        ]
      },
      "349": {
        "name": "map-for-expr_A1_I5",
        "symbols": [
          "'COMMA",
          "@for-bind"
        ]
      },
      "350": {
        "name": "for-bind",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'EQUALS",
          "@full-expr"
        ]
      },
      "351": {
        "name": "for-bind",
        "symbols": [
          "@type-ann",
          "'NAME",
          "'COLON",
          "@full-expr"
        ]
      },
      "352": {
        "name": "START",
        "symbols": [
          "@program"
        ]
      },
      "463": {
        "position": 1,
        "like": 0
      },
      "534": {
        "position": 1,
        "like": 1
      },
      "894": {
        "position": 2,
        "like": 0
      },
      "896": {
        "position": 1,
        "like": 12
      },
      "3885": {
        "position": 2,
        "like": 3
      },
      "3922": {
        "position": 1,
        "like": 4
      },
      "4219": {
        "position": 1,
        "like": 67
      },
      "4220": {
        "position": 1,
        "like": 254
      },
      "4350": {
        "position": 1,
        "like": 250
      },
      "4399": {
        "position": 2,
        "like": 14
      },
      "4434": {
        "position": 1,
        "like": 15
      },
      "4469": {
        "position": 1,
        "like": 16
      },
      "4504": {
        "position": 1,
        "like": 17
      },
      "4539": {
        "position": 1,
        "like": 18
      },
      "4574": {
        "position": 1,
        "like": 19
      },
      "4609": {
        "position": 1,
        "like": 20
      },
      "4644": {
        "position": 1,
        "like": 21
      },
      "4679": {
        "position": 1,
        "like": 22
      },
      "4714": {
        "position": 1,
        "like": 23
      },
      "5078": {
        "position": 1,
        "like": 61
      },
      "5080": {
        "position": 1,
        "like": 62
      },
      "5082": {
        "position": 1,
        "like": 63
      },
      "5084": {
        "position": 1,
        "like": 64
      },
      "5086": {
        "position": 1,
        "like": 65
      },
      "5088": {
        "position": 1,
        "like": 66
      },
      "5125": {
        "position": 1,
        "like": 123
      },
      "5402": {
        "position": 1,
        "like": 257
      },
      "5500": {
        "position": 1,
        "like": 217
      },
      "5536": {
        "position": 1,
        "like": 218
      },
      "5572": {
        "position": 1,
        "like": 219
      },
      "5798": {
        "position": 1,
        "like": 238
      },
      "6189": {
        "position": 1,
        "like": 248
      },
      "6238": {
        "position": 1,
        "like": 249
      },
      "6287": {
        "position": 1,
        "like": 251
      },
      "6336": {
        "position": 1,
        "like": 252
      },
      "6385": {
        "position": 1,
        "like": 253
      },
      "6483": {
        "position": 1,
        "like": 258
      },
      "6532": {
        "position": 1,
        "like": 259
      },
      "6581": {
        "position": 1,
        "like": 260
      },
      "6630": {
        "position": 1,
        "like": 261
      },
      "6679": {
        "position": 1,
        "like": 262
      },
      "6728": {
        "position": 1,
        "like": 263
      },
      "6777": {
        "position": 1,
        "like": 264
      },
      "6826": {
        "position": 1,
        "like": 265
      },
      "6875": {
        "position": 1,
        "like": 266
      },
      "6924": {
        "position": 1,
        "like": 267
      },
      "6973": {
        "position": 1,
        "like": 268
      },
      "7022": {
        "position": 1,
        "like": 269
      },
      "7870": {
        "position": 2,
        "like": 67
      },
      "7872": {
        "position": 1,
        "like": 69
      },
      "7919": {
        "position": 1,
        "like": 216
      },
      "7925": {
        "position": 1,
        "like": 211
      },
      "7967": {
        "position": 1,
        "like": 210
      },
      "7972": {
        "position": 2,
        "like": 306
      },
      "8091": {
        "position": 1,
        "like": 77
      },
      "8111": {
        "position": 1,
        "like": 76
      },
      "8201": {
        "position": 1,
        "like": 203
      },
      "8203": {
        "position": 1,
        "like": 204
      },
      "8356": {
        "position": 1,
        "like": 126
      },
      "8391": {
        "position": 2,
        "like": 123
      },
      "8426": {
        "position": 1,
        "like": 125
      },
      "8740": {
        "position": 2,
        "like": 219
      },
      "9157": {
        "position": 2,
        "like": 237
      },
      "9205": {
        "position": 2,
        "like": 236
      },
      "9646": {
        "position": 2,
        "like": 344
      },
      "10417": {
        "position": 3,
        "like": 5
      },
      "10565": {
        "position": 3,
        "like": 9
      },
      "10693": {
        "position": 3,
        "like": 119
      },
      "10830": {
        "position": 2,
        "like": 215
      },
      "10833": {
        "position": 2,
        "like": 211
      },
      "10989": {
        "position": 2,
        "like": 77
      },
      "11006": {
        "position": 3,
        "like": 255
      },
      "11091": {
        "position": 2,
        "like": 204
      },
      "13700": {
        "position": 1,
        "like": 232
      },
      "13723": {
        "position": 1,
        "like": 233
      },
      "13746": {
        "position": 2,
        "like": 221
      },
      "13842": {
        "position": 1,
        "like": 223
      },
      "13865": {
        "position": 1,
        "like": 224
      },
      "13888": {
        "position": 1,
        "like": 225
      },
      "13911": {
        "position": 1,
        "like": 226
      },
      "13934": {
        "position": 1,
        "like": 227
      },
      "13957": {
        "position": 1,
        "like": 228
      },
      "13980": {
        "position": 1,
        "like": 229
      },
      "14003": {
        "position": 1,
        "like": 230
      },
      "14026": {
        "position": 1,
        "like": 231
      },
      "14049": {
        "position": 1,
        "like": 234
      },
      "14072": {
        "position": 1,
        "like": 235
      },
      "14102": {
        "position": 1,
        "like": 242
      },
      "14170": {
        "position": 1,
        "like": 241
      },
      "14204": {
        "position": 3,
        "like": 246
      },
      "14506": {
        "position": 3,
        "like": 256
      },
      "15453": {
        "position": 1,
        "like": 122
      },
      "15488": {
        "position": 4,
        "like": 119
      },
      "15523": {
        "position": 1,
        "like": 121
      },
      "15561": {
        "position": 2,
        "like": 213
      },
      "15607": {
        "position": 3,
        "like": 307
      },
      "15655": {
        "position": 4,
        "like": 302
      },
      "15707": {
        "position": 2,
        "like": 304
      },
      "15713": {
        "position": 2,
        "like": 79
      },
      "15768": {
        "position": 2,
        "like": 206
      },
      "15809": {
        "position": 1,
        "like": 47
      },
      "15811": {
        "position": 1,
        "like": 48
      },
      "15817": {
        "position": 4,
        "like": 107
      },
      "15955": {
        "position": 1,
        "like": 95
      },
      "16126": {
        "position": 1,
        "like": 28
      },
      "16172": {
        "position": 1,
        "like": 29
      },
      "16218": {
        "position": 1,
        "like": 32
      },
      "16264": {
        "position": 1,
        "like": 34
      },
      "16310": {
        "position": 1,
        "like": 35
      },
      "16356": {
        "position": 1,
        "like": 36
      },
      "16402": {
        "position": 1,
        "like": 37
      },
      "16448": {
        "position": 1,
        "like": 40
      },
      "16524": {
        "position": 4,
        "like": 132
      },
      "16559": {
        "position": 1,
        "like": 135
      },
      "16605": {
        "position": 1,
        "like": 30
      },
      "16651": {
        "position": 1,
        "like": 31
      },
      "16697": {
        "position": 1,
        "like": 33
      },
      "16743": {
        "position": 1,
        "like": 38
      },
      "16789": {
        "position": 1,
        "like": 39
      },
      "16935": {
        "position": 1,
        "like": 136
      },
      "17457": {
        "position": 2,
        "like": 134
      },
      "18584": {
        "position": 2,
        "like": 222
      },
      "18632": {
        "position": 2,
        "like": 242
      },
      "18639": {
        "position": 4,
        "like": 239
      },
      "18688": {
        "position": 4,
        "like": 247
      },
      "18739": {
        "position": 1,
        "like": 340
      },
      "18796": {
        "position": 1,
        "like": 339
      },
      "19117": {
        "position": 2,
        "like": 295
      },
      "19146": {
        "position": 4,
        "like": 297
      },
      "19239": {
        "position": 4,
        "like": 298
      },
      "19288": {
        "position": 1,
        "like": 301
      },
      "19328": {
        "position": 2,
        "like": 300
      },
      "19368": {
        "position": 2,
        "like": 315
      },
      "19617": {
        "position": 1,
        "like": 333
      },
      "19672": {
        "position": 1,
        "like": 332
      },
      "19674": {
        "position": 5,
        "like": 6
      },
      "19785": {
        "position": 5,
        "like": 10
      },
      "19862": {
        "position": 4,
        "like": 70
      },
      "19864": {
        "position": 2,
        "like": 72
      },
      "19867": {
        "position": 2,
        "like": 214
      },
      "19870": {
        "position": 5,
        "like": 208
      },
      "19906": {
        "position": 2,
        "like": 305
      },
      "19909": {
        "position": 2,
        "like": 80
      },
      "19912": {
        "position": 5,
        "like": 74
      },
      "19914": {
        "position": 5,
        "like": 201
      },
      "19950": {
        "position": 2,
        "like": 207
      },
      "19953": {
        "position": 2,
        "like": 55
      },
      "20026": {
        "position": 2,
        "like": 48
      },
      "20033": {
        "position": 1,
        "like": 110
      },
      "20068": {
        "position": 5,
        "like": 107
      },
      "20103": {
        "position": 1,
        "like": 109
      },
      "20189": {
        "position": 5,
        "like": 111
      },
      "20326": {
        "position": 5,
        "like": 115
      },
      "20821": {
        "position": 2,
        "like": 106
      },
      "21189": {
        "position": 2,
        "like": 197
      },
      "21463": {
        "position": 2,
        "like": 244
      },
      "21466": {
        "position": 2,
        "like": 340
      },
      "21473": {
        "position": 5,
        "like": 337
      },
      "21684": {
        "position": 2,
        "like": 284
      },
      "21687": {
        "position": 2,
        "like": 285
      },
      "21801": {
        "position": 2,
        "like": 296
      },
      "21804": {
        "position": 5,
        "like": 293
      },
      "21909": {
        "position": 2,
        "like": 310
      },
      "21912": {
        "position": 3,
        "like": 328
      },
      "22107": {
        "position": 2,
        "like": 333
      },
      "22114": {
        "position": 5,
        "like": 330
      },
      "22163": {
        "position": 6,
        "like": 7
      },
      "22237": {
        "position": 6,
        "like": 11
      },
      "22274": {
        "position": 2,
        "like": 73
      },
      "22277": {
        "position": 6,
        "like": 45
      },
      "22565": {
        "position": 2,
        "like": 50
      },
      "22574": {
        "position": 1,
        "like": 90
      },
      "22576": {
        "position": 1,
        "like": 91
      },
      "22583": {
        "position": 1,
        "like": 87
      },
      "22622": {
        "position": 2,
        "like": 83
      },
      "22625": {
        "position": 1,
        "like": 86
      },
      "22627": {
        "position": 1,
        "like": 114
      },
      "22662": {
        "position": 6,
        "like": 111
      },
      "22697": {
        "position": 1,
        "like": 113
      },
      "22732": {
        "position": 1,
        "like": 118
      },
      "22767": {
        "position": 6,
        "like": 115
      },
      "22802": {
        "position": 1,
        "like": 117
      },
      "22933": {
        "position": 3,
        "like": 161
      },
      "23114": {
        "position": 3,
        "like": 165
      },
      "23295": {
        "position": 3,
        "like": 169
      },
      "23476": {
        "position": 3,
        "like": 173
      },
      "23703": {
        "position": 3,
        "like": 105
      },
      "24025": {
        "position": 1,
        "like": 200
      },
      "24071": {
        "position": 3,
        "like": 197
      },
      "24117": {
        "position": 1,
        "like": 199
      },
      "24354": {
        "position": 2,
        "like": 245
      },
      "24360": {
        "position": 2,
        "like": 342
      },
      "24602": {
        "position": 2,
        "like": 272
      },
      "24606": {
        "position": 1,
        "like": 283
      },
      "24659": {
        "position": 2,
        "like": 279
      },
      "24662": {
        "position": 1,
        "like": 282
      },
      "24716": {
        "position": 2,
        "like": 288
      },
      "24774": {
        "position": 2,
        "like": 311
      },
      "24777": {
        "position": 6,
        "like": 320
      },
      "24850": {
        "position": 2,
        "like": 322
      },
      "24947": {
        "position": 2,
        "like": 326
      },
      "24976": {
        "position": 2,
        "like": 335
      },
      "25016": {
        "position": 7,
        "like": 45
      },
      "25051": {
        "position": 1,
        "like": 53
      },
      "25086": {
        "position": 1,
        "like": 54
      },
      "25271": {
        "position": 2,
        "like": 51
      },
      "25274": {
        "position": 2,
        "like": 96
      },
      "25277": {
        "position": 4,
        "like": 88
      },
      "25280": {
        "position": 2,
        "like": 91
      },
      "25287": {
        "position": 2,
        "like": 84
      },
      "25290": {
        "position": 7,
        "like": 81
      },
      "25435": {
        "position": 1,
        "like": 164
      },
      "25481": {
        "position": 4,
        "like": 161
      },
      "25527": {
        "position": 1,
        "like": 163
      },
      "25573": {
        "position": 1,
        "like": 168
      },
      "25619": {
        "position": 4,
        "like": 165
      },
      "25665": {
        "position": 1,
        "like": 167
      },
      "25711": {
        "position": 1,
        "like": 172
      },
      "25757": {
        "position": 4,
        "like": 169
      },
      "25803": {
        "position": 1,
        "like": 171
      },
      "25849": {
        "position": 1,
        "like": 176
      },
      "25895": {
        "position": 4,
        "like": 173
      },
      "25941": {
        "position": 1,
        "like": 175
      },
      "26125": {
        "position": 4,
        "like": 145
      },
      "26306": {
        "position": 4,
        "like": 149
      },
      "26799": {
        "position": 2,
        "like": 179
      },
      "26803": {
        "position": 1,
        "like": 180
      },
      "26807": {
        "position": 1,
        "like": 182
      },
      "26809": {
        "position": 1,
        "like": 183
      },
      "26821": {
        "position": 2,
        "like": 343
      },
      "26883": {
        "position": 2,
        "like": 348
      },
      "27063": {
        "position": 2,
        "like": 273
      },
      "27066": {
        "position": 2,
        "like": 280
      },
      "27069": {
        "position": 7,
        "like": 277
      },
      "27185": {
        "position": 2,
        "like": 289
      },
      "27188": {
        "position": 7,
        "like": 308
      },
      "27237": {
        "position": 2,
        "like": 313
      },
      "27245": {
        "position": 2,
        "like": 323
      },
      "27269": {
        "position": 2,
        "like": 327
      },
      "27344": {
        "position": 2,
        "like": 336
      },
      "27347": {
        "position": 8,
        "like": 8
      },
      "27509": {
        "position": 3,
        "like": 24
      },
      "27545": {
        "position": 2,
        "like": 26
      },
      "27585": {
        "position": 1,
        "like": 27
      },
      "27628": {
        "position": 2,
        "like": 93
      },
      "27677": {
        "position": 2,
        "like": 43
      },
      "27683": {
        "position": 5,
        "like": 97
      },
      "27972": {
        "position": 1,
        "like": 148
      },
      "28018": {
        "position": 5,
        "like": 145
      },
      "28064": {
        "position": 1,
        "like": 147
      },
      "28110": {
        "position": 1,
        "like": 152
      },
      "28156": {
        "position": 5,
        "like": 149
      },
      "28202": {
        "position": 1,
        "like": 151
      },
      "28340": {
        "position": 8,
        "like": 127
      },
      "28375": {
        "position": 1,
        "like": 130
      },
      "28421": {
        "position": 1,
        "like": 131
      },
      "28467": {
        "position": 2,
        "like": 129
      },
      "28513": {
        "position": 8,
        "like": 177
      },
      "28649": {
        "position": 4,
        "like": 351
      },
      "28652": {
        "position": 4,
        "like": 350
      },
      "28705": {
        "position": 2,
        "like": 349
      },
      "28757": {
        "position": 8,
        "like": 270
      },
      "28806": {
        "position": 1,
        "like": 276
      },
      "28846": {
        "position": 2,
        "like": 275
      },
      "28955": {
        "position": 2,
        "like": 314
      },
      "28960": {
        "position": 8,
        "like": 324
      },
      "29009": {
        "position": 3,
        "like": 329
      },
      "29182": {
        "position": 2,
        "like": 94
      },
      "29185": {
        "position": 6,
        "like": 41
      },
      "29231": {
        "position": 2,
        "like": 44
      },
      "29234": {
        "position": 6,
        "like": 97
      },
      "29554": {
        "position": 6,
        "like": 137
      },
      "29735": {
        "position": 6,
        "like": 141
      },
      "29916": {
        "position": 6,
        "like": 153
      },
      "30097": {
        "position": 6,
        "like": 157
      },
      "30291": {
        "position": 3,
        "like": 192
      },
      "30372": {
        "position": 9,
        "like": 346
      },
      "30470": {
        "position": 1,
        "like": 292
      },
      "30480": {
        "position": 9,
        "like": 286
      },
      "30529": {
        "position": 2,
        "like": 291
      },
      "30540": {
        "position": 3,
        "like": 316
      },
      "30546": {
        "position": 4,
        "like": 56
      },
      "30581": {
        "position": 1,
        "like": 59
      },
      "30627": {
        "position": 2,
        "like": 58
      },
      "30673": {
        "position": 1,
        "like": 60
      },
      "30719": {
        "position": 7,
        "like": 97
      },
      "30765": {
        "position": 2,
        "like": 99
      },
      "30905": {
        "position": 1,
        "like": 102
      },
      "30997": {
        "position": 1,
        "like": 140
      },
      "31043": {
        "position": 7,
        "like": 137
      },
      "31089": {
        "position": 1,
        "like": 139
      },
      "31135": {
        "position": 1,
        "like": 144
      },
      "31181": {
        "position": 7,
        "like": 141
      },
      "31227": {
        "position": 1,
        "like": 143
      },
      "31273": {
        "position": 1,
        "like": 156
      },
      "31319": {
        "position": 7,
        "like": 153
      },
      "31365": {
        "position": 1,
        "like": 155
      },
      "31411": {
        "position": 1,
        "like": 160
      },
      "31457": {
        "position": 7,
        "like": 157
      },
      "31503": {
        "position": 1,
        "like": 159
      },
      "31549": {
        "position": 1,
        "like": 187
      },
      "31559": {
        "position": 1,
        "like": 186
      },
      "31561": {
        "position": 4,
        "like": 191
      },
      "31569": {
        "position": 1,
        "like": 196
      },
      "31608": {
        "position": 2,
        "like": 193
      },
      "31610": {
        "position": 2,
        "like": 195
      },
      "31649": {
        "position": 10,
        "like": 345
      },
      "31698": {
        "position": 4,
        "like": 316
      },
      "31705": {
        "position": 2,
        "like": 103
      },
      "31798": {
        "position": 8,
        "like": 104
      },
      "31844": {
        "position": 2,
        "like": 187
      },
      "31858": {
        "position": 2,
        "like": 318
      },
      "31911": {
        "position": 2,
        "like": 189
      },
      "31918": {
        "position": 2,
        "like": 319
      },
      "31968": {
        "position": 2,
        "like": 190
      },
      "31971": {
        "position": 7,
        "like": 184
      },
      "32022": {
        "position": 6,
        "like": 100
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
      "24": "dA",
      "25": "Inline",
      "26": [
        "ListSnoc",
        "block_I1*",
        "block_I1",
        true
      ],
      "27": "Inline",
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
      "40": "dA",
      "41": "dA",
      "42": "Inline",
      "43": [
        "ListSnoc",
        "spy-stmt_I3*",
        "spy-stmt_I3",
        true
      ],
      "44": "Inline",
      "45": "dA",
      "46": "Inline",
      "47": "Inline",
      "48": "Inline",
      "49": "Inline",
      "50": [
        "ListSnoc",
        "fun-decl_I3_I1*",
        "fun-decl_I3_I1",
        true
      ],
      "51": "Inline",
      "52": "Inline",
      "53": "Inline",
      "54": "Inline",
      "55": "dA",
      "56": "dA",
      "57": "Inline",
      "58": [
        "ListSnoc",
        "where-clause_I2*",
        "where-clause_I2",
        true
      ],
      "59": "Inline",
      "60": "Inline",
      "61": "dA",
      "62": "dA",
      "63": "dA",
      "64": "dA",
      "65": "dA",
      "66": "dA",
      "67": "dA",
      "68": "Inline",
      "69": "Inline",
      "70": "Inline",
      "71": "Inline",
      "72": [
        "ListSnoc",
        "type-ann_A6_I1_I2*",
        "type-ann_A6_I1_I2",
        true
      ],
      "73": "Inline",
      "74": "dA",
      "75": "Inline",
      "76": "Inline",
      "77": "Inline",
      "78": "Inline",
      "79": [
        "ListSnoc",
        "type-ann_A7_I1_I1*",
        "type-ann_A7_I1_I1",
        true
      ],
      "80": "Inline",
      "81": "dA",
      "82": "Inline",
      "83": [
        "ListSnoc",
        "data-decl_I4*",
        "data-decl_I4",
        true
      ],
      "84": "Inline",
      "85": "Inline",
      "86": "Inline",
      "87": "Inline",
      "88": "dA",
      "89": "Inline",
      "90": "Inline",
      "91": "Inline",
      "92": "Inline",
      "93": [
        "ListSnoc",
        "variant-decl_A0_I2_I1*",
        "variant-decl_A0_I2_I1",
        true
      ],
      "94": "Inline",
      "95": "dA",
      "96": "dA",
      "97": "dA",
      "98": "Inline",
      "99": [
        "ListSnoc",
        "if-stmt_I5*",
        "if-stmt_I5",
        true
      ],
      "100": "Inline",
      "101": "Inline",
      "102": "Inline",
      "103": "Inline",
      "104": "dA",
      "105": "dA",
      "106": "dA",
      "107": "dA",
      "108": "Inline",
      "109": "Inline",
      "110": "Inline",
      "111": "dA",
      "112": "Inline",
      "113": "Inline",
      "114": "Inline",
      "115": "dA",
      "116": "Inline",
      "117": "Inline",
      "118": "Inline",
      "119": "dA",
      "120": "Inline",
      "121": "Inline",
      "122": "Inline",
      "123": "dA",
      "124": "Inline",
      "125": "Inline",
      "126": "Inline",
      "127": "dA",
      "128": "Inline",
      "129": [
        "ListSnoc",
        "check-block_A0_I6*",
        "check-block_A0_I6",
        true
      ],
      "130": "Inline",
      "131": "Inline",
      "132": "dA",
      "133": "Inline",
      "134": [
        "ListSnoc",
        "check-block_A1_I2*",
        "check-block_A1_I2",
        true
      ],
      "135": "Inline",
      "136": "Inline",
      "137": "dA",
      "138": "Inline",
      "139": "Inline",
      "140": "Inline",
      "141": "dA",
      "142": "Inline",
      "143": "Inline",
      "144": "Inline",
      "145": "dA",
      "146": "Inline",
      "147": "Inline",
      "148": "Inline",
      "149": "dA",
      "150": "Inline",
      "151": "Inline",
      "152": "Inline",
      "153": "dA",
      "154": "Inline",
      "155": "Inline",
      "156": "Inline",
      "157": "dA",
      "158": "Inline",
      "159": "Inline",
      "160": "Inline",
      "161": "dA",
      "162": "Inline",
      "163": "Inline",
      "164": "Inline",
      "165": "dA",
      "166": "Inline",
      "167": "Inline",
      "168": "Inline",
      "169": "dA",
      "170": "Inline",
      "171": "Inline",
      "172": "Inline",
      "173": "dA",
      "174": "Inline",
      "175": "Inline",
      "176": "Inline",
      "177": "dA",
      "178": "Inline",
      "179": [
        "ListSnoc",
        "switch-expr_I5*",
        "switch-expr_I5",
        true
      ],
      "180": "Inline",
      "181": "Inline",
      "182": "Inline",
      "183": "Inline",
      "184": "dA",
      "185": "Inline",
      "186": "Inline",
      "187": "Inline",
      "188": "Inline",
      "189": [
        "ListSnoc",
        "case-branch_A0_I3_I1*",
        "case-branch_A0_I3_I1",
        true
      ],
      "190": "Inline",
      "191": "dA",
      "192": "dA",
      "193": "dA",
      "194": "Inline",
      "195": [
        "ListSnoc",
        "switch-body_I0*",
        "switch-body_I0",
        true
      ],
      "196": "Inline",
      "197": "dA",
      "198": "Inline",
      "199": "Inline",
      "200": "Inline",
      "201": "dA",
      "202": "Inline",
      "203": "Inline",
      "204": "Inline",
      "205": "Inline",
      "206": [
        "ListSnoc",
        "lambda-expr_A0_I1_I1*",
        "lambda-expr_A0_I1_I1",
        true
      ],
      "207": "Inline",
      "208": "dA",
      "209": "Inline",
      "210": "Inline",
      "211": "Inline",
      "212": "Inline",
      "213": [
        "ListSnoc",
        "lambda-expr_A1_I1_I1*",
        "lambda-expr_A1_I1_I1",
        true
      ],
      "214": "Inline",
      "215": "dA",
      "216": "dA",
      "217": "dA",
      "218": "dA",
      "219": "dA",
      "220": "Inline",
      "221": [
        "ListSnoc",
        "binop-expr_I1*",
        "binop-expr_I1",
        true
      ],
      "222": "Inline",
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
      "234": "dA",
      "235": "dA",
      "236": "dA",
      "237": "dA",
      "238": "dA",
      "239": "dA",
      "240": "Inline",
      "241": "Inline",
      "242": "Inline",
      "243": "Inline",
      "244": [
        "ListSnoc",
        "app-or-access_A0_I2_I1*",
        "app-or-access_A0_I2_I1",
        true
      ],
      "245": "Inline",
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
      "259": "dA",
      "260": "dA",
      "261": "dA",
      "262": "dA",
      "263": "dA",
      "264": "dA",
      "265": "dA",
      "266": "dA",
      "267": "dA",
      "268": "dA",
      "269": "dA",
      "270": "dA",
      "271": "Inline",
      "272": [
        "ListSnoc",
        "sieve-expr_I4*",
        "sieve-expr_I4",
        true
      ],
      "273": "Inline",
      "274": "Inline",
      "275": [
        "ListSnoc",
        "sieve-expr_I6*",
        "sieve-expr_I6",
        true
      ],
      "276": "Inline",
      "277": "dA",
      "278": "Inline",
      "279": [
        "ListSnoc",
        "order-expr_I4*",
        "order-expr_I4",
        true
      ],
      "280": "Inline",
      "281": "Inline",
      "282": "Inline",
      "283": "Inline",
      "284": "dA",
      "285": "dA",
      "286": "dA",
      "287": "Inline",
      "288": [
        "ListSnoc",
        "extend-expr_I4*",
        "extend-expr_I4",
        true
      ],
      "289": "Inline",
      "290": "Inline",
      "291": [
        "ListSnoc",
        "extend-expr_I7*",
        "extend-expr_I7",
        true
      ],
      "292": "Inline",
      "293": "dA",
      "294": "Inline",
      "295": [
        "ListSnoc",
        "select-expr_I2*",
        "select-expr_I2",
        true
      ],
      "296": "Inline",
      "297": "dA",
      "298": "dA",
      "299": "Inline",
      "300": [
        "ListSnoc",
        "block-expr_I2*",
        "block-expr_I2",
        true
      ],
      "301": "Inline",
      "302": "dA",
      "303": "Inline",
      "304": [
        "ListSnoc",
        "record-expr_A0_I2*",
        "record-expr_A0_I2",
        true
      ],
      "305": "Inline",
      "306": "dA",
      "307": "dA",
      "308": "dA",
      "309": "Inline",
      "310": [
        "ListSnoc",
        "table-expr_I3*",
        "table-expr_I3",
        true
      ],
      "311": "Inline",
      "312": "Inline",
      "313": [
        "ListSnoc",
        "table-expr_I5*",
        "table-expr_I5",
        true
      ],
      "314": "Inline",
      "315": "dA",
      "316": "dA",
      "317": "Inline",
      "318": [
        "ListSnoc",
        "table-row_I3*",
        "table-row_I3",
        true
      ],
      "319": "Inline",
      "320": "dA",
      "321": "Inline",
      "322": [
        "ListSnoc",
        "ask-expr_A0_I4*",
        "ask-expr_A0_I4",
        true
      ],
      "323": "Inline",
      "324": "dA",
      "325": "Inline",
      "326": [
        "ListSnoc",
        "ask-expr_A1_I4*",
        "ask-expr_A1_I4",
        true
      ],
      "327": "Inline",
      "328": "dA",
      "329": "dA",
      "330": "dA",
      "331": "Inline",
      "332": "Inline",
      "333": "Inline",
      "334": "Inline",
      "335": [
        "ListSnoc",
        "new-expr_I3_I1*",
        "new-expr_I3_I1",
        true
      ],
      "336": "Inline",
      "337": "dA",
      "338": "Inline",
      "339": "Inline",
      "340": "Inline",
      "341": "Inline",
      "342": [
        "ListSnoc",
        "construct-expr_A0_I3_I1*",
        "construct-expr_A0_I3_I1",
        true
      ],
      "343": "Inline",
      "344": "dA",
      "345": "dA",
      "346": "dA",
      "347": "Inline",
      "348": [
        "ListSnoc",
        "map-for-expr_A1_I5*",
        "map-for-expr_A1_I5",
        true
      ],
      "349": "Inline",
      "350": "dA",
      "351": "dA",
      "352": "dA"
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
      66,
      67,
      74,
      68,
      69,
      70,
      71,
      72,
      73,
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
      87,
      88,
      95,
      89,
      90,
      91,
      92,
      93,
      94,
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
      122,
      123,
      124,
      125,
      126,
      127,
      132,
      128,
      129,
      130,
      131,
      133,
      134,
      135,
      136,
      137,
      141,
      145,
      149,
      153,
      157,
      161,
      165,
      169,
      173,
      138,
      139,
      140,
      142,
      143,
      144,
      146,
      147,
      148,
      150,
      151,
      152,
      154,
      155,
      156,
      158,
      159,
      160,
      162,
      163,
      164,
      166,
      167,
      168,
      170,
      171,
      172,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      191,
      185,
      186,
      187,
      188,
      189,
      190,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      208,
      202,
      203,
      204,
      205,
      206,
      207,
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
      234,
      235,
      236,
      237,
      238,
      239,
      246,
      247,
      248,
      240,
      241,
      242,
      243,
      244,
      245,
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
      259,
      260,
      261,
      262,
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
      277,
      278,
      279,
      280,
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
      294,
      295,
      296,
      297,
      298,
      299,
      300,
      301,
      302,
      306,
      303,
      304,
      305,
      307,
      308,
      309,
      310,
      311,
      312,
      313,
      314,
      315,
      316,
      317,
      318,
      319,
      320,
      324,
      321,
      322,
      323,
      325,
      326,
      327,
      328,
      329,
      330,
      331,
      332,
      333,
      334,
      335,
      336,
      337,
      344,
      338,
      339,
      340,
      341,
      342,
      343,
      345,
      346,
      347,
      348,
      349,
      350,
      351,
      352
    ],
    "reduceActions": [
      0,
      1,
      1,
      2,
      2,
      3,
      463,
      4,
      12,
      4,
      13,
      5,
      534,
      0,
      894,
      0,
      896,
      0,
      3885,
      0,
      3922,
      0,
      4220,
      0,
      4219,
      12,
      68,
      12,
      209,
      47,
      4350,
      0,
      4399,
      0,
      4434,
      0,
      4469,
      0,
      4504,
      0,
      4539,
      0,
      4574,
      0,
      4609,
      0,
      4644,
      0,
      4679,
      0,
      4714,
      0,
      202,
      45,
      75,
      14,
      5078,
      0,
      5080,
      0,
      5082,
      0,
      5084,
      0,
      5086,
      0,
      5088,
      0,
      5125,
      26,
      124,
      26,
      5402,
      0,
      5500,
      0,
      5536,
      0,
      5572,
      49,
      220,
      49,
      5798,
      0,
      6189,
      0,
      6238,
      0,
      6287,
      0,
      6336,
      0,
      6385,
      0,
      6483,
      0,
      6532,
      0,
      6581,
      0,
      6630,
      0,
      6679,
      0,
      6728,
      0,
      6777,
      0,
      6826,
      0,
      6875,
      0,
      6924,
      0,
      6973,
      0,
      7022,
      0,
      7870,
      0,
      7872,
      0,
      7919,
      0,
      7925,
      48,
      212,
      48,
      7967,
      0,
      7972,
      0,
      303,
      60,
      78,
      15,
      8091,
      15,
      8111,
      0,
      8201,
      0,
      8203,
      46,
      205,
      46,
      8356,
      0,
      8391,
      0,
      8426,
      0,
      133,
      28,
      8740,
      0,
      9157,
      0,
      9205,
      0,
      240,
      50,
      9646,
      0,
      294,
      58,
      299,
      59,
      10417,
      0,
      10565,
      0,
      71,
      13,
      10693,
      25,
      120,
      25,
      10830,
      0,
      10833,
      0,
      10989,
      0,
      11006,
      0,
      11091,
      0,
      46,
      8,
      13700,
      0,
      13723,
      0,
      13746,
      0,
      13842,
      0,
      13865,
      0,
      13888,
      0,
      13911,
      0,
      13934,
      0,
      13957,
      0,
      13980,
      0,
      14003,
      0,
      14026,
      0,
      14049,
      0,
      14072,
      0,
      14102,
      51,
      243,
      51,
      14170,
      0,
      14204,
      0,
      338,
      68,
      14506,
      0,
      309,
      61,
      331,
      66,
      15453,
      0,
      15488,
      0,
      15523,
      0,
      15561,
      0,
      15607,
      0,
      15655,
      0,
      15707,
      0,
      15713,
      0,
      15768,
      0,
      15809,
      0,
      15811,
      9,
      49,
      9,
      15817,
      22,
      108,
      22,
      15955,
      0,
      82,
      16,
      16126,
      0,
      16172,
      0,
      16218,
      0,
      16264,
      0,
      16310,
      0,
      16356,
      0,
      16402,
      0,
      16448,
      0,
      16524,
      0,
      16559,
      0,
      16605,
      0,
      16651,
      0,
      16697,
      0,
      16743,
      0,
      16789,
      0,
      16935,
      0,
      17457,
      0,
      18584,
      0,
      18632,
      0,
      18639,
      0,
      18688,
      0,
      341,
      69,
      18739,
      69,
      18796,
      0,
      271,
      52,
      278,
      54,
      287,
      56,
      19117,
      0,
      19146,
      0,
      19239,
      0,
      19288,
      0,
      19328,
      0,
      19368,
      0,
      321,
      64,
      325,
      65,
      19617,
      67,
      334,
      67,
      19672,
      0,
      19674,
      0,
      19785,
      0,
      19862,
      0,
      19864,
      0,
      19867,
      0,
      19870,
      0,
      19906,
      0,
      19909,
      0,
      19912,
      0,
      19914,
      0,
      19950,
      0,
      19953,
      0,
      20026,
      0,
      20033,
      0,
      20068,
      0,
      20103,
      0,
      89,
      18,
      85,
      17,
      20189,
      23,
      112,
      23,
      20326,
      24,
      116,
      24,
      20821,
      0,
      21189,
      44,
      198,
      44,
      178,
      39,
      21463,
      0,
      21466,
      0,
      21473,
      0,
      347,
      70,
      21684,
      0,
      21687,
      0,
      281,
      55,
      21801,
      0,
      21804,
      0,
      312,
      62,
      21909,
      0,
      21912,
      0,
      22107,
      0,
      22114,
      0,
      22163,
      0,
      22237,
      0,
      22274,
      0,
      22277,
      10,
      52,
      10,
      25,
      6,
      22565,
      0,
      22574,
      0,
      22576,
      19,
      92,
      19,
      22583,
      0,
      22622,
      0,
      22625,
      0,
      22627,
      0,
      22662,
      0,
      22697,
      0,
      22732,
      0,
      22767,
      0,
      22802,
      0,
      42,
      7,
      22933,
      35,
      162,
      35,
      23114,
      36,
      166,
      36,
      23295,
      37,
      170,
      37,
      23476,
      38,
      174,
      38,
      23703,
      0,
      24025,
      0,
      24071,
      0,
      24117,
      0,
      128,
      27,
      181,
      40,
      24354,
      0,
      24360,
      0,
      274,
      53,
      24602,
      0,
      24606,
      0,
      24659,
      0,
      24662,
      0,
      24716,
      0,
      24774,
      0,
      24777,
      0,
      24850,
      0,
      24947,
      0,
      24976,
      0,
      25016,
      0,
      25051,
      0,
      25086,
      0,
      25271,
      0,
      25274,
      0,
      25277,
      0,
      25280,
      0,
      25287,
      0,
      25290,
      0,
      25435,
      0,
      25481,
      0,
      25527,
      0,
      25573,
      0,
      25619,
      0,
      25665,
      0,
      25711,
      0,
      25757,
      0,
      25803,
      0,
      25849,
      0,
      25895,
      0,
      25941,
      0,
      26125,
      31,
      146,
      31,
      26306,
      32,
      150,
      32,
      26799,
      0,
      26803,
      0,
      26807,
      0,
      26809,
      0,
      26821,
      0,
      26883,
      0,
      27063,
      0,
      27066,
      0,
      27069,
      0,
      290,
      57,
      27185,
      0,
      27188,
      0,
      27237,
      0,
      27245,
      0,
      27269,
      0,
      27344,
      0,
      27347,
      0,
      57,
      11,
      27509,
      0,
      27545,
      0,
      27585,
      0,
      27628,
      0,
      27677,
      0,
      27683,
      72,
      98,
      20,
      27972,
      0,
      28018,
      0,
      28064,
      0,
      28110,
      0,
      28156,
      0,
      28202,
      0,
      28340,
      0,
      28375,
      0,
      28421,
      0,
      28467,
      0,
      28513,
      0,
      194,
      43,
      28649,
      0,
      28652,
      0,
      28705,
      0,
      28757,
      0,
      28806,
      0,
      28846,
      0,
      28955,
      0,
      28960,
      0,
      29009,
      0,
      29182,
      0,
      29185,
      0,
      29231,
      0,
      29234,
      21,
      101,
      21,
      29554,
      29,
      138,
      29,
      29735,
      30,
      142,
      30,
      29916,
      33,
      154,
      33,
      30097,
      34,
      158,
      34,
      185,
      41,
      30291,
      0,
      30372,
      0,
      30470,
      0,
      30480,
      0,
      30529,
      0,
      30540,
      63,
      317,
      63,
      30546,
      0,
      30581,
      0,
      30627,
      0,
      30673,
      0,
      30719,
      0,
      30765,
      0,
      30905,
      0,
      30997,
      0,
      31043,
      0,
      31089,
      0,
      31135,
      0,
      31181,
      0,
      31227,
      0,
      31273,
      0,
      31319,
      0,
      31365,
      0,
      31411,
      0,
      31457,
      0,
      31503,
      0,
      31549,
      42,
      188,
      42,
      31559,
      0,
      31561,
      0,
      31569,
      0,
      31608,
      0,
      31610,
      0,
      31649,
      0,
      31698,
      0,
      31705,
      0,
      31798,
      0,
      31844,
      0,
      31858,
      0,
      31911,
      0,
      31918,
      0,
      31968,
      0,
      31971,
      0,
      32022,
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          2,
          4
        ],
        "'ORDER": [
          -1,
          2,
          4
        ],
        "'EXTEND": [
          -1,
          2,
          4
        ],
        "'SELECT": [
          -1,
          2,
          4
        ],
        "'EXTRACT": [
          -1,
          2,
          4
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          10
        ],
        "'ORDER": [
          -1,
          10
        ],
        "'EXTEND": [
          -1,
          10
        ],
        "'SELECT": [
          -1,
          10
        ],
        "'EXTRACT": [
          -1,
          10
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          12
        ],
        "'ORDER": [
          -1,
          12
        ],
        "'EXTEND": [
          -1,
          12
        ],
        "'SELECT": [
          -1,
          12
        ],
        "'EXTRACT": [
          -1,
          12
        ],
        "'BLOCK": [
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
        "rec-stmt": [
          20
        ],
        "assign-stmt": [
          21
        ],
        "expr-stmt": [
          22
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "full-expr": [
          33
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          18
        ],
        "'ORDER": [
          -1,
          18
        ],
        "'EXTEND": [
          -1,
          18
        ],
        "'SELECT": [
          -1,
          18
        ],
        "'EXTRACT": [
          -1,
          18
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          20
        ],
        "'ORDER": [
          -1,
          20
        ],
        "'EXTEND": [
          -1,
          20
        ],
        "'SELECT": [
          -1,
          20
        ],
        "'EXTRACT": [
          -1,
          20
        ],
        "'BLOCK": [
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
          73
        ]
      },
      {
        "'NAME": [
          74
        ]
      },
      {
        "type-ann_A6_I1?": [
          75
        ],
        "type-ann_A6_I1": [
          76
        ],
        "'LT": [
          77,
          22
        ],
        "'COLONEQUALS": [
          78
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          22
        ],
        "'ORDER": [
          -1,
          22
        ],
        "'EXTEND": [
          -1,
          22
        ],
        "'SELECT": [
          -1,
          22
        ],
        "'EXTRACT": [
          -1,
          22
        ],
        "'BLOCK": [
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
          79
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          81
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "lambda-param": [
          82
        ],
        "lambda-expr_A1_I1?": [
          83
        ],
        "lambda-expr_A1_I1": [
          84
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          30
        ],
        "'USING": [
          -1,
          30
        ],
        "'ORDER": [
          -1,
          30
        ],
        "'EXTEND": [
          -1,
          30
        ],
        "'SELECT": [
          -1,
          30
        ],
        "'EXTRACT": [
          -1,
          30
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          32
        ],
        "'ORDER": [
          -1,
          32
        ],
        "'EXTEND": [
          -1,
          32
        ],
        "'SELECT": [
          -1,
          32
        ],
        "'EXTRACT": [
          -1,
          32
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          34
        ],
        "'ORDER": [
          -1,
          34
        ],
        "'EXTEND": [
          -1,
          34
        ],
        "'SELECT": [
          -1,
          34
        ],
        "'EXTRACT": [
          -1,
          34
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          36
        ],
        "'ORDER": [
          -1,
          36
        ],
        "'EXTEND": [
          -1,
          36
        ],
        "'SELECT": [
          -1,
          36
        ],
        "'EXTRACT": [
          -1,
          36
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          38
        ],
        "'ORDER": [
          -1,
          38
        ],
        "'EXTEND": [
          -1,
          38
        ],
        "'SELECT": [
          -1,
          38
        ],
        "'EXTRACT": [
          -1,
          38
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          40
        ],
        "'ORDER": [
          -1,
          40
        ],
        "'EXTEND": [
          -1,
          40
        ],
        "'SELECT": [
          -1,
          40
        ],
        "'EXTRACT": [
          -1,
          40
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          42
        ],
        "'ORDER": [
          -1,
          42
        ],
        "'EXTEND": [
          -1,
          42
        ],
        "'SELECT": [
          -1,
          42
        ],
        "'EXTRACT": [
          -1,
          42
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          44
        ],
        "'ORDER": [
          -1,
          44
        ],
        "'EXTEND": [
          -1,
          44
        ],
        "'SELECT": [
          -1,
          44
        ],
        "'EXTRACT": [
          -1,
          44
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          46
        ],
        "'ORDER": [
          -1,
          46
        ],
        "'EXTEND": [
          -1,
          46
        ],
        "'SELECT": [
          -1,
          46
        ],
        "'EXTRACT": [
          -1,
          46
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          48
        ],
        "'ORDER": [
          -1,
          48
        ],
        "'EXTEND": [
          -1,
          48
        ],
        "'SELECT": [
          -1,
          48
        ],
        "'EXTRACT": [
          -1,
          48
        ],
        "'BLOCK": [
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
        "$": [
          -1,
          50
        ],
        "'NAME": [
          -1,
          50
        ],
        "'PARENNOSPACE": [
          -1,
          50
        ],
        "'STRING": [
          -1,
          50
        ],
        "'LBRACE": [
          -1,
          50
        ],
        "'PARENSPACE": [
          -1,
          50
        ],
        "'INT": [
          -1,
          50
        ],
        "'LONG": [
          -1,
          50
        ],
        "'DOUBLE": [
          -1,
          50
        ],
        "'FLOAT": [
          -1,
          50
        ],
        "'BOOLEAN": [
          -1,
          50
        ],
        "'VOID": [
          -1,
          50
        ],
        "'DATA": [
          -1,
          50
        ],
        "'VAR": [
          -1,
          50
        ],
        "'REC": [
          -1,
          50
        ],
        "'ATCHECK": [
          -1,
          50
        ],
        "'SWITCH": [
          -1,
          50
        ],
        "'DASH": [
          -1,
          50
        ],
        "'BANG": [
          -1,
          50
        ],
        "'LBRACK": [
          -1,
          50
        ],
        "'NUMBER": [
          -1,
          50
        ],
        "'TRUE": [
          -1,
          50
        ],
        "'FALSE": [
          -1,
          50
        ],
        "'NULL": [
          -1,
          50
        ],
        "'PARENAFTERBRACE": [
          -1,
          50
        ],
        "'SIEVE": [
          -1,
          50
        ],
        "'ORDER": [
          -1,
          50
        ],
        "'EXTEND": [
          -1,
          50
        ],
        "'SELECT": [
          -1,
          50
        ],
        "'EXTRACT": [
          -1,
          50
        ],
        "'BLOCK": [
          -1,
          50
        ],
        "'TABLE": [
          -1,
          50
        ],
        "'ASK": [
          -1,
          50
        ],
        "'NEW": [
          -1,
          50
        ]
      },
      {
        "'NAME": [
          85
        ],
        "'RBRACE": [
          86
        ],
        "record-field": [
          87
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          89
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "type-ann_A7_I1?": [
          90
        ],
        "type-ann_A7_I1": [
          91
        ],
        "full-expr": [
          92
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "lambda-expr_A0_I1?": [
          93
        ],
        "lambda-expr_A0_I1": [
          94
        ],
        "lambda-param": [
          95
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ],
        "'RPAREN": [
          -1,
          52
        ],
        "'THINARROW": [
          -1,
          54
        ]
      },
      {
        "'NAME": [
          96
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
          -1,
          66
        ],
        "'RPAREN": [
          -1,
          66
        ],
        "'COMMA": [
          -1,
          66
        ],
        "'GT": [
          -1,
          66
        ],
        "'THINARROW": [
          -1,
          66
        ]
      },
      {
        "'NAME": [
          97
        ]
      },
      {
        "'SEMI": [
          98
        ],
        "expr-stmt_I1?": [
          99
        ],
        "expr-stmt_I1": [
          100
        ],
        "$": [
          -1,
          68,
          70
        ],
        "'NAME": [
          -1,
          68,
          70
        ],
        "'PARENNOSPACE": [
          -1,
          68,
          70
        ],
        "'STRING": [
          -1,
          68,
          70
        ],
        "'LBRACE": [
          -1,
          68,
          70
        ],
        "'RBRACE": [
          -1,
          68,
          70
        ],
        "'SPY": [
          -1,
          68,
          70
        ],
        "'PARENSPACE": [
          -1,
          68,
          70
        ],
        "'INT": [
          -1,
          68,
          70
        ],
        "'LONG": [
          -1,
          68,
          70
        ],
        "'DOUBLE": [
          -1,
          68,
          70
        ],
        "'FLOAT": [
          -1,
          68,
          70
        ],
        "'BOOLEAN": [
          -1,
          68,
          70
        ],
        "'VOID": [
          -1,
          68,
          70
        ],
        "'DATA": [
          -1,
          68,
          70
        ],
        "'IF": [
          -1,
          68,
          70
        ],
        "'FOR": [
          -1,
          68,
          70
        ],
        "'RETURN": [
          -1,
          68,
          70
        ],
        "'VAR": [
          -1,
          68,
          70
        ],
        "'REC": [
          -1,
          68,
          70
        ],
        "'ATCHECK": [
          -1,
          68,
          70
        ],
        "'SWITCH": [
          -1,
          68,
          70
        ],
        "'YIELD": [
          -1,
          68,
          70
        ],
        "'DASH": [
          -1,
          68,
          70
        ],
        "'BANG": [
          -1,
          68,
          70
        ],
        "'LBRACK": [
          -1,
          68,
          70
        ],
        "'NUMBER": [
          -1,
          68,
          70
        ],
        "'TRUE": [
          -1,
          68,
          70
        ],
        "'FALSE": [
          -1,
          68,
          70
        ],
        "'NULL": [
          -1,
          68,
          70
        ],
        "'PARENAFTERBRACE": [
          -1,
          68,
          70
        ],
        "'SIEVE": [
          -1,
          68,
          70
        ],
        "'ORDER": [
          -1,
          68,
          70
        ],
        "'EXTEND": [
          -1,
          68,
          70
        ],
        "'SELECT": [
          -1,
          68,
          70
        ],
        "'EXTRACT": [
          -1,
          68,
          70
        ],
        "'BLOCK": [
          -1,
          68,
          70
        ],
        "'TABLE": [
          -1,
          68,
          70
        ],
        "'ASK": [
          -1,
          68,
          70
        ],
        "'NEW": [
          -1,
          68,
          70
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          102
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          103
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'LBRACE": [
          104
        ],
        "'VOID": [
          105
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
        "'LT": [
          -1,
          72
        ],
        "'GT": [
          -1,
          72
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'PLUS": [
          -1,
          72
        ],
        "'DASH": [
          -1,
          72
        ],
        "'TIMES": [
          -1,
          72
        ],
        "'SLASH": [
          -1,
          72
        ],
        "'PERCENT": [
          -1,
          72
        ],
        "'EQUALEQUAL": [
          -1,
          72
        ],
        "'NEQ": [
          -1,
          72
        ],
        "'LEQ": [
          -1,
          72
        ],
        "'GEQ": [
          -1,
          72
        ],
        "'AND": [
          -1,
          72
        ],
        "'OR": [
          -1,
          72
        ],
        "'BANG": [
          -1,
          72
        ],
        "'DOT": [
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
        "'SIEVE": [
          -1,
          72
        ],
        "'USING": [
          -1,
          72
        ],
        "'ORDER": [
          -1,
          72
        ],
        "'EXTEND": [
          -1,
          72
        ],
        "'SELECT": [
          -1,
          72
        ],
        "'EXTRACT": [
          -1,
          72
        ],
        "'BLOCK": [
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
        "'PARENSPACE": [
          106
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
        "'LT": [
          -1,
          74
        ],
        "'GT": [
          -1,
          74
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'PLUS": [
          -1,
          74
        ],
        "'DASH": [
          -1,
          74
        ],
        "'TIMES": [
          -1,
          74
        ],
        "'SLASH": [
          -1,
          74
        ],
        "'PERCENT": [
          -1,
          74
        ],
        "'EQUALEQUAL": [
          -1,
          74
        ],
        "'NEQ": [
          -1,
          74
        ],
        "'LEQ": [
          -1,
          74
        ],
        "'GEQ": [
          -1,
          74
        ],
        "'AND": [
          -1,
          74
        ],
        "'OR": [
          -1,
          74
        ],
        "'BANG": [
          -1,
          74
        ],
        "'DOT": [
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
        "'SIEVE": [
          -1,
          74
        ],
        "'USING": [
          -1,
          74
        ],
        "'ORDER": [
          -1,
          74
        ],
        "'EXTEND": [
          -1,
          74
        ],
        "'SELECT": [
          -1,
          74
        ],
        "'EXTRACT": [
          -1,
          74
        ],
        "'BLOCK": [
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
        "$": [
          -1,
          76
        ],
        "'NAME": [
          -1,
          76
        ],
        "'SEMI": [
          -1,
          76
        ],
        "'PARENNOSPACE": [
          -1,
          76
        ],
        "'STRING": [
          -1,
          76
        ],
        "'RPAREN": [
          -1,
          76
        ],
        "'LBRACE": [
          -1,
          76
        ],
        "'RBRACE": [
          -1,
          76
        ],
        "'SPY": [
          -1,
          76
        ],
        "'PARENSPACE": [
          -1,
          76
        ],
        "'COMMA": [
          -1,
          76
        ],
        "'INT": [
          -1,
          76
        ],
        "'LONG": [
          -1,
          76
        ],
        "'DOUBLE": [
          -1,
          76
        ],
        "'FLOAT": [
          -1,
          76
        ],
        "'BOOLEAN": [
          -1,
          76
        ],
        "'VOID": [
          -1,
          76
        ],
        "'LT": [
          -1,
          76
        ],
        "'GT": [
          -1,
          76
        ],
        "'THINARROW": [
          -1,
          76
        ],
        "'DATA": [
          -1,
          76
        ],
        "'IF": [
          -1,
          76
        ],
        "'FOR": [
          -1,
          76
        ],
        "'RETURN": [
          -1,
          76
        ],
        "'VAR": [
          -1,
          76
        ],
        "'REC": [
          -1,
          76
        ],
        "'ATCHECK": [
          -1,
          76
        ],
        "'ASSERTEQUALS": [
          -1,
          76
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          76
        ],
        "'ASSERTTRUE": [
          -1,
          76
        ],
        "'ASSERTFALSE": [
          -1,
          76
        ],
        "'ASSERTSATISFIES": [
          -1,
          76
        ],
        "'ASSERTRAISES": [
          -1,
          76
        ],
        "'IS": [
          -1,
          76
        ],
        "'ISNOT": [
          -1,
          76
        ],
        "'SATISFIES": [
          -1,
          76
        ],
        "'RAISES": [
          -1,
          76
        ],
        "'SWITCH": [
          -1,
          76
        ],
        "'CASE": [
          -1,
          76
        ],
        "'DEFAULT": [
          -1,
          76
        ],
        "'YIELD": [
          -1,
          76
        ],
        "'PLUS": [
          -1,
          76
        ],
        "'DASH": [
          -1,
          76
        ],
        "'TIMES": [
          -1,
          76
        ],
        "'SLASH": [
          -1,
          76
        ],
        "'PERCENT": [
          -1,
          76
        ],
        "'EQUALEQUAL": [
          -1,
          76
        ],
        "'NEQ": [
          -1,
          76
        ],
        "'LEQ": [
          -1,
          76
        ],
        "'GEQ": [
          -1,
          76
        ],
        "'AND": [
          -1,
          76
        ],
        "'OR": [
          -1,
          76
        ],
        "'BANG": [
          -1,
          76
        ],
        "'DOT": [
          -1,
          76
        ],
        "'LBRACK": [
          -1,
          76
        ],
        "'RBRACK": [
          -1,
          76
        ],
        "'NUMBER": [
          -1,
          76
        ],
        "'TRUE": [
          -1,
          76
        ],
        "'FALSE": [
          -1,
          76
        ],
        "'NULL": [
          -1,
          76
        ],
        "'PARENAFTERBRACE": [
          -1,
          76
        ],
        "'SIEVE": [
          -1,
          76
        ],
        "'USING": [
          -1,
          76
        ],
        "'ORDER": [
          -1,
          76
        ],
        "'EXTEND": [
          -1,
          76
        ],
        "'SELECT": [
          -1,
          76
        ],
        "'EXTRACT": [
          -1,
          76
        ],
        "'BLOCK": [
          -1,
          76
        ],
        "'TABLE": [
          -1,
          76
        ],
        "'ASK": [
          -1,
          76
        ],
        "'NEW": [
          -1,
          76
        ]
      },
      {
        "binop-expr_I1*": [
          107
        ],
        "$": [
          -1,
          78,
          80
        ],
        "'NAME": [
          -1,
          78,
          80
        ],
        "'SEMI": [
          -1,
          78,
          80
        ],
        "'PARENNOSPACE": [
          -1,
          78,
          80
        ],
        "'STRING": [
          -1,
          78,
          80
        ],
        "'RPAREN": [
          -1,
          78,
          80
        ],
        "'LBRACE": [
          -1,
          78,
          80
        ],
        "'RBRACE": [
          -1,
          78,
          80
        ],
        "'SPY": [
          -1,
          78,
          80
        ],
        "'PARENSPACE": [
          -1,
          78,
          80
        ],
        "'COMMA": [
          -1,
          78,
          80
        ],
        "'INT": [
          -1,
          78,
          80
        ],
        "'LONG": [
          -1,
          78,
          80
        ],
        "'DOUBLE": [
          -1,
          78,
          80
        ],
        "'FLOAT": [
          -1,
          78,
          80
        ],
        "'BOOLEAN": [
          -1,
          78,
          80
        ],
        "'VOID": [
          -1,
          78,
          80
        ],
        "'LT": [
          -1,
          78,
          80
        ],
        "'GT": [
          -1,
          78,
          80
        ],
        "'THINARROW": [
          -1,
          78,
          80
        ],
        "'DATA": [
          -1,
          78,
          80
        ],
        "'IF": [
          -1,
          78,
          80
        ],
        "'FOR": [
          -1,
          78,
          80
        ],
        "'RETURN": [
          -1,
          78,
          80
        ],
        "'VAR": [
          -1,
          78,
          80
        ],
        "'REC": [
          -1,
          78,
          80
        ],
        "'ATCHECK": [
          -1,
          78,
          80
        ],
        "'ASSERTEQUALS": [
          -1,
          78,
          80
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          78,
          80
        ],
        "'ASSERTTRUE": [
          -1,
          78,
          80
        ],
        "'ASSERTFALSE": [
          -1,
          78,
          80
        ],
        "'ASSERTSATISFIES": [
          -1,
          78,
          80
        ],
        "'ASSERTRAISES": [
          -1,
          78,
          80
        ],
        "'IS": [
          -1,
          78,
          80
        ],
        "'ISNOT": [
          -1,
          78,
          80
        ],
        "'SATISFIES": [
          -1,
          78,
          80
        ],
        "'RAISES": [
          -1,
          78,
          80
        ],
        "'SWITCH": [
          -1,
          78,
          80
        ],
        "'CASE": [
          -1,
          78,
          80
        ],
        "'DEFAULT": [
          -1,
          78,
          80
        ],
        "'YIELD": [
          -1,
          78,
          80
        ],
        "'PLUS": [
          -1,
          78,
          80
        ],
        "'DASH": [
          -1,
          78,
          80
        ],
        "'TIMES": [
          -1,
          78,
          80
        ],
        "'SLASH": [
          -1,
          78,
          80
        ],
        "'PERCENT": [
          -1,
          78,
          80
        ],
        "'EQUALEQUAL": [
          -1,
          78,
          80
        ],
        "'NEQ": [
          -1,
          78,
          80
        ],
        "'LEQ": [
          -1,
          78,
          80
        ],
        "'GEQ": [
          -1,
          78,
          80
        ],
        "'AND": [
          -1,
          78,
          80
        ],
        "'OR": [
          -1,
          78,
          80
        ],
        "'BANG": [
          -1,
          78,
          80
        ],
        "'DOT": [
          -1,
          78,
          80
        ],
        "'LBRACK": [
          -1,
          78,
          80
        ],
        "'RBRACK": [
          -1,
          78,
          80
        ],
        "'NUMBER": [
          -1,
          78,
          80
        ],
        "'TRUE": [
          -1,
          78,
          80
        ],
        "'FALSE": [
          -1,
          78,
          80
        ],
        "'NULL": [
          -1,
          78,
          80
        ],
        "'PARENAFTERBRACE": [
          -1,
          78,
          80
        ],
        "'SIEVE": [
          -1,
          78,
          80
        ],
        "'USING": [
          -1,
          78,
          80
        ],
        "'ORDER": [
          -1,
          78,
          80
        ],
        "'EXTEND": [
          -1,
          78,
          80
        ],
        "'SELECT": [
          -1,
          78,
          80
        ],
        "'EXTRACT": [
          -1,
          78,
          80
        ],
        "'BLOCK": [
          -1,
          78,
          80
        ],
        "'TABLE": [
          -1,
          78,
          80
        ],
        "'ASK": [
          -1,
          78,
          80
        ],
        "'NEW": [
          -1,
          78,
          80
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          109
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          110
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          109
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          111
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'PARENNOSPACE": [
          112,
          82
        ],
        "'DOT": [
          113,
          82
        ],
        "'LBRACK": [
          114,
          82
        ],
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          82
        ],
        "'USING": [
          -1,
          82
        ],
        "'ORDER": [
          -1,
          82
        ],
        "'EXTEND": [
          -1,
          82
        ],
        "'SELECT": [
          -1,
          82
        ],
        "'EXTRACT": [
          -1,
          82
        ],
        "'BLOCK": [
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
        "'NAME": [
          115
        ],
        "'FOR": [
          116
        ],
        "'RBRACK": [
          117
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          84
        ],
        "'USING": [
          -1,
          84
        ],
        "'ORDER": [
          -1,
          84
        ],
        "'EXTEND": [
          -1,
          84
        ],
        "'SELECT": [
          -1,
          84
        ],
        "'EXTRACT": [
          -1,
          84
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          86
        ],
        "'USING": [
          -1,
          86
        ],
        "'ORDER": [
          -1,
          86
        ],
        "'EXTEND": [
          -1,
          86
        ],
        "'SELECT": [
          -1,
          86
        ],
        "'EXTRACT": [
          -1,
          86
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          88
        ],
        "'USING": [
          -1,
          88
        ],
        "'ORDER": [
          -1,
          88
        ],
        "'EXTEND": [
          -1,
          88
        ],
        "'SELECT": [
          -1,
          88
        ],
        "'EXTRACT": [
          -1,
          88
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          90
        ],
        "'USING": [
          -1,
          90
        ],
        "'ORDER": [
          -1,
          90
        ],
        "'EXTEND": [
          -1,
          90
        ],
        "'SELECT": [
          -1,
          90
        ],
        "'EXTRACT": [
          -1,
          90
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          92
        ],
        "'USING": [
          -1,
          92
        ],
        "'ORDER": [
          -1,
          92
        ],
        "'EXTEND": [
          -1,
          92
        ],
        "'SELECT": [
          -1,
          92
        ],
        "'EXTRACT": [
          -1,
          92
        ],
        "'BLOCK": [
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
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          119
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          94
        ],
        "'USING": [
          -1,
          94
        ],
        "'ORDER": [
          -1,
          94
        ],
        "'EXTEND": [
          -1,
          94
        ],
        "'SELECT": [
          -1,
          94
        ],
        "'EXTRACT": [
          -1,
          94
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          96
        ],
        "'USING": [
          -1,
          96
        ],
        "'ORDER": [
          -1,
          96
        ],
        "'EXTEND": [
          -1,
          96
        ],
        "'SELECT": [
          -1,
          96
        ],
        "'EXTRACT": [
          -1,
          96
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          98
        ],
        "'USING": [
          -1,
          98
        ],
        "'ORDER": [
          -1,
          98
        ],
        "'EXTEND": [
          -1,
          98
        ],
        "'SELECT": [
          -1,
          98
        ],
        "'EXTRACT": [
          -1,
          98
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          100
        ],
        "'USING": [
          -1,
          100
        ],
        "'ORDER": [
          -1,
          100
        ],
        "'EXTEND": [
          -1,
          100
        ],
        "'SELECT": [
          -1,
          100
        ],
        "'EXTRACT": [
          -1,
          100
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          102
        ],
        "'USING": [
          -1,
          102
        ],
        "'ORDER": [
          -1,
          102
        ],
        "'EXTEND": [
          -1,
          102
        ],
        "'SELECT": [
          -1,
          102
        ],
        "'EXTRACT": [
          -1,
          102
        ],
        "'BLOCK": [
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
        "$": [
          -1,
          104
        ],
        "'NAME": [
          -1,
          104
        ],
        "'SEMI": [
          -1,
          104
        ],
        "'PARENNOSPACE": [
          -1,
          104
        ],
        "'STRING": [
          -1,
          104
        ],
        "'RPAREN": [
          -1,
          104
        ],
        "'LBRACE": [
          -1,
          104
        ],
        "'RBRACE": [
          -1,
          104
        ],
        "'SPY": [
          -1,
          104
        ],
        "'PARENSPACE": [
          -1,
          104
        ],
        "'COMMA": [
          -1,
          104
        ],
        "'INT": [
          -1,
          104
        ],
        "'LONG": [
          -1,
          104
        ],
        "'DOUBLE": [
          -1,
          104
        ],
        "'FLOAT": [
          -1,
          104
        ],
        "'BOOLEAN": [
          -1,
          104
        ],
        "'VOID": [
          -1,
          104
        ],
        "'LT": [
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
        ],
        "'DATA": [
          -1,
          104
        ],
        "'IF": [
          -1,
          104
        ],
        "'FOR": [
          -1,
          104
        ],
        "'RETURN": [
          -1,
          104
        ],
        "'VAR": [
          -1,
          104
        ],
        "'REC": [
          -1,
          104
        ],
        "'ATCHECK": [
          -1,
          104
        ],
        "'ASSERTEQUALS": [
          -1,
          104
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          104
        ],
        "'ASSERTTRUE": [
          -1,
          104
        ],
        "'ASSERTFALSE": [
          -1,
          104
        ],
        "'ASSERTSATISFIES": [
          -1,
          104
        ],
        "'ASSERTRAISES": [
          -1,
          104
        ],
        "'IS": [
          -1,
          104
        ],
        "'ISNOT": [
          -1,
          104
        ],
        "'SATISFIES": [
          -1,
          104
        ],
        "'RAISES": [
          -1,
          104
        ],
        "'SWITCH": [
          -1,
          104
        ],
        "'CASE": [
          -1,
          104
        ],
        "'DEFAULT": [
          -1,
          104
        ],
        "'YIELD": [
          -1,
          104
        ],
        "'PLUS": [
          -1,
          104
        ],
        "'DASH": [
          -1,
          104
        ],
        "'TIMES": [
          -1,
          104
        ],
        "'SLASH": [
          -1,
          104
        ],
        "'PERCENT": [
          -1,
          104
        ],
        "'EQUALEQUAL": [
          -1,
          104
        ],
        "'NEQ": [
          -1,
          104
        ],
        "'LEQ": [
          -1,
          104
        ],
        "'GEQ": [
          -1,
          104
        ],
        "'AND": [
          -1,
          104
        ],
        "'OR": [
          -1,
          104
        ],
        "'BANG": [
          -1,
          104
        ],
        "'DOT": [
          -1,
          104
        ],
        "'LBRACK": [
          -1,
          104
        ],
        "'RBRACK": [
          -1,
          104
        ],
        "'NUMBER": [
          -1,
          104
        ],
        "'TRUE": [
          -1,
          104
        ],
        "'FALSE": [
          -1,
          104
        ],
        "'NULL": [
          -1,
          104
        ],
        "'PARENAFTERBRACE": [
          -1,
          104
        ],
        "'SIEVE": [
          -1,
          104
        ],
        "'USING": [
          -1,
          104
        ],
        "'ORDER": [
          -1,
          104
        ],
        "'EXTEND": [
          -1,
          104
        ],
        "'SELECT": [
          -1,
          104
        ],
        "'EXTRACT": [
          -1,
          104
        ],
        "'BLOCK": [
          -1,
          104
        ],
        "'TABLE": [
          -1,
          104
        ],
        "'ASK": [
          -1,
          104
        ],
        "'NEW": [
          -1,
          104
        ]
      },
      {
        "$": [
          -1,
          106
        ],
        "'NAME": [
          -1,
          106
        ],
        "'SEMI": [
          -1,
          106
        ],
        "'PARENNOSPACE": [
          -1,
          106
        ],
        "'STRING": [
          -1,
          106
        ],
        "'RPAREN": [
          -1,
          106
        ],
        "'LBRACE": [
          -1,
          106
        ],
        "'RBRACE": [
          -1,
          106
        ],
        "'SPY": [
          -1,
          106
        ],
        "'PARENSPACE": [
          -1,
          106
        ],
        "'COMMA": [
          -1,
          106
        ],
        "'INT": [
          -1,
          106
        ],
        "'LONG": [
          -1,
          106
        ],
        "'DOUBLE": [
          -1,
          106
        ],
        "'FLOAT": [
          -1,
          106
        ],
        "'BOOLEAN": [
          -1,
          106
        ],
        "'VOID": [
          -1,
          106
        ],
        "'LT": [
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
        ],
        "'DATA": [
          -1,
          106
        ],
        "'IF": [
          -1,
          106
        ],
        "'FOR": [
          -1,
          106
        ],
        "'RETURN": [
          -1,
          106
        ],
        "'VAR": [
          -1,
          106
        ],
        "'REC": [
          -1,
          106
        ],
        "'ATCHECK": [
          -1,
          106
        ],
        "'ASSERTEQUALS": [
          -1,
          106
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          106
        ],
        "'ASSERTTRUE": [
          -1,
          106
        ],
        "'ASSERTFALSE": [
          -1,
          106
        ],
        "'ASSERTSATISFIES": [
          -1,
          106
        ],
        "'ASSERTRAISES": [
          -1,
          106
        ],
        "'IS": [
          -1,
          106
        ],
        "'ISNOT": [
          -1,
          106
        ],
        "'SATISFIES": [
          -1,
          106
        ],
        "'RAISES": [
          -1,
          106
        ],
        "'SWITCH": [
          -1,
          106
        ],
        "'CASE": [
          -1,
          106
        ],
        "'DEFAULT": [
          -1,
          106
        ],
        "'YIELD": [
          -1,
          106
        ],
        "'PLUS": [
          -1,
          106
        ],
        "'DASH": [
          -1,
          106
        ],
        "'TIMES": [
          -1,
          106
        ],
        "'SLASH": [
          -1,
          106
        ],
        "'PERCENT": [
          -1,
          106
        ],
        "'EQUALEQUAL": [
          -1,
          106
        ],
        "'NEQ": [
          -1,
          106
        ],
        "'LEQ": [
          -1,
          106
        ],
        "'GEQ": [
          -1,
          106
        ],
        "'AND": [
          -1,
          106
        ],
        "'OR": [
          -1,
          106
        ],
        "'BANG": [
          -1,
          106
        ],
        "'DOT": [
          -1,
          106
        ],
        "'LBRACK": [
          -1,
          106
        ],
        "'RBRACK": [
          -1,
          106
        ],
        "'NUMBER": [
          -1,
          106
        ],
        "'TRUE": [
          -1,
          106
        ],
        "'FALSE": [
          -1,
          106
        ],
        "'NULL": [
          -1,
          106
        ],
        "'PARENAFTERBRACE": [
          -1,
          106
        ],
        "'SIEVE": [
          -1,
          106
        ],
        "'USING": [
          -1,
          106
        ],
        "'ORDER": [
          -1,
          106
        ],
        "'EXTEND": [
          -1,
          106
        ],
        "'SELECT": [
          -1,
          106
        ],
        "'EXTRACT": [
          -1,
          106
        ],
        "'BLOCK": [
          -1,
          106
        ],
        "'TABLE": [
          -1,
          106
        ],
        "'ASK": [
          -1,
          106
        ],
        "'NEW": [
          -1,
          106
        ]
      },
      {
        "$": [
          -1,
          108
        ],
        "'NAME": [
          -1,
          108
        ],
        "'SEMI": [
          -1,
          108
        ],
        "'PARENNOSPACE": [
          -1,
          108
        ],
        "'STRING": [
          -1,
          108
        ],
        "'RPAREN": [
          -1,
          108
        ],
        "'LBRACE": [
          -1,
          108
        ],
        "'RBRACE": [
          -1,
          108
        ],
        "'SPY": [
          -1,
          108
        ],
        "'PARENSPACE": [
          -1,
          108
        ],
        "'COMMA": [
          -1,
          108
        ],
        "'INT": [
          -1,
          108
        ],
        "'LONG": [
          -1,
          108
        ],
        "'DOUBLE": [
          -1,
          108
        ],
        "'FLOAT": [
          -1,
          108
        ],
        "'BOOLEAN": [
          -1,
          108
        ],
        "'VOID": [
          -1,
          108
        ],
        "'LT": [
          -1,
          108
        ],
        "'GT": [
          -1,
          108
        ],
        "'THINARROW": [
          -1,
          108
        ],
        "'DATA": [
          -1,
          108
        ],
        "'IF": [
          -1,
          108
        ],
        "'FOR": [
          -1,
          108
        ],
        "'RETURN": [
          -1,
          108
        ],
        "'VAR": [
          -1,
          108
        ],
        "'REC": [
          -1,
          108
        ],
        "'ATCHECK": [
          -1,
          108
        ],
        "'ASSERTEQUALS": [
          -1,
          108
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          108
        ],
        "'ASSERTTRUE": [
          -1,
          108
        ],
        "'ASSERTFALSE": [
          -1,
          108
        ],
        "'ASSERTSATISFIES": [
          -1,
          108
        ],
        "'ASSERTRAISES": [
          -1,
          108
        ],
        "'IS": [
          -1,
          108
        ],
        "'ISNOT": [
          -1,
          108
        ],
        "'SATISFIES": [
          -1,
          108
        ],
        "'RAISES": [
          -1,
          108
        ],
        "'SWITCH": [
          -1,
          108
        ],
        "'CASE": [
          -1,
          108
        ],
        "'DEFAULT": [
          -1,
          108
        ],
        "'YIELD": [
          -1,
          108
        ],
        "'PLUS": [
          -1,
          108
        ],
        "'DASH": [
          -1,
          108
        ],
        "'TIMES": [
          -1,
          108
        ],
        "'SLASH": [
          -1,
          108
        ],
        "'PERCENT": [
          -1,
          108
        ],
        "'EQUALEQUAL": [
          -1,
          108
        ],
        "'NEQ": [
          -1,
          108
        ],
        "'LEQ": [
          -1,
          108
        ],
        "'GEQ": [
          -1,
          108
        ],
        "'AND": [
          -1,
          108
        ],
        "'OR": [
          -1,
          108
        ],
        "'BANG": [
          -1,
          108
        ],
        "'DOT": [
          -1,
          108
        ],
        "'LBRACK": [
          -1,
          108
        ],
        "'RBRACK": [
          -1,
          108
        ],
        "'NUMBER": [
          -1,
          108
        ],
        "'TRUE": [
          -1,
          108
        ],
        "'FALSE": [
          -1,
          108
        ],
        "'NULL": [
          -1,
          108
        ],
        "'PARENAFTERBRACE": [
          -1,
          108
        ],
        "'SIEVE": [
          -1,
          108
        ],
        "'USING": [
          -1,
          108
        ],
        "'ORDER": [
          -1,
          108
        ],
        "'EXTEND": [
          -1,
          108
        ],
        "'SELECT": [
          -1,
          108
        ],
        "'EXTRACT": [
          -1,
          108
        ],
        "'BLOCK": [
          -1,
          108
        ],
        "'TABLE": [
          -1,
          108
        ],
        "'ASK": [
          -1,
          108
        ],
        "'NEW": [
          -1,
          108
        ]
      },
      {
        "$": [
          -1,
          110
        ],
        "'NAME": [
          -1,
          110
        ],
        "'SEMI": [
          -1,
          110
        ],
        "'PARENNOSPACE": [
          -1,
          110
        ],
        "'STRING": [
          -1,
          110
        ],
        "'RPAREN": [
          -1,
          110
        ],
        "'LBRACE": [
          -1,
          110
        ],
        "'RBRACE": [
          -1,
          110
        ],
        "'SPY": [
          -1,
          110
        ],
        "'PARENSPACE": [
          -1,
          110
        ],
        "'COMMA": [
          -1,
          110
        ],
        "'INT": [
          -1,
          110
        ],
        "'LONG": [
          -1,
          110
        ],
        "'DOUBLE": [
          -1,
          110
        ],
        "'FLOAT": [
          -1,
          110
        ],
        "'BOOLEAN": [
          -1,
          110
        ],
        "'VOID": [
          -1,
          110
        ],
        "'LT": [
          -1,
          110
        ],
        "'GT": [
          -1,
          110
        ],
        "'THINARROW": [
          -1,
          110
        ],
        "'DATA": [
          -1,
          110
        ],
        "'IF": [
          -1,
          110
        ],
        "'FOR": [
          -1,
          110
        ],
        "'RETURN": [
          -1,
          110
        ],
        "'VAR": [
          -1,
          110
        ],
        "'REC": [
          -1,
          110
        ],
        "'ATCHECK": [
          -1,
          110
        ],
        "'ASSERTEQUALS": [
          -1,
          110
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          110
        ],
        "'ASSERTTRUE": [
          -1,
          110
        ],
        "'ASSERTFALSE": [
          -1,
          110
        ],
        "'ASSERTSATISFIES": [
          -1,
          110
        ],
        "'ASSERTRAISES": [
          -1,
          110
        ],
        "'IS": [
          -1,
          110
        ],
        "'ISNOT": [
          -1,
          110
        ],
        "'SATISFIES": [
          -1,
          110
        ],
        "'RAISES": [
          -1,
          110
        ],
        "'SWITCH": [
          -1,
          110
        ],
        "'CASE": [
          -1,
          110
        ],
        "'DEFAULT": [
          -1,
          110
        ],
        "'YIELD": [
          -1,
          110
        ],
        "'PLUS": [
          -1,
          110
        ],
        "'DASH": [
          -1,
          110
        ],
        "'TIMES": [
          -1,
          110
        ],
        "'SLASH": [
          -1,
          110
        ],
        "'PERCENT": [
          -1,
          110
        ],
        "'EQUALEQUAL": [
          -1,
          110
        ],
        "'NEQ": [
          -1,
          110
        ],
        "'LEQ": [
          -1,
          110
        ],
        "'GEQ": [
          -1,
          110
        ],
        "'AND": [
          -1,
          110
        ],
        "'OR": [
          -1,
          110
        ],
        "'BANG": [
          -1,
          110
        ],
        "'DOT": [
          -1,
          110
        ],
        "'LBRACK": [
          -1,
          110
        ],
        "'RBRACK": [
          -1,
          110
        ],
        "'NUMBER": [
          -1,
          110
        ],
        "'TRUE": [
          -1,
          110
        ],
        "'FALSE": [
          -1,
          110
        ],
        "'NULL": [
          -1,
          110
        ],
        "'PARENAFTERBRACE": [
          -1,
          110
        ],
        "'SIEVE": [
          -1,
          110
        ],
        "'USING": [
          -1,
          110
        ],
        "'ORDER": [
          -1,
          110
        ],
        "'EXTEND": [
          -1,
          110
        ],
        "'SELECT": [
          -1,
          110
        ],
        "'EXTRACT": [
          -1,
          110
        ],
        "'BLOCK": [
          -1,
          110
        ],
        "'TABLE": [
          -1,
          110
        ],
        "'ASK": [
          -1,
          110
        ],
        "'NEW": [
          -1,
          110
        ]
      },
      {
        "$": [
          -1,
          112
        ],
        "'NAME": [
          -1,
          112
        ],
        "'SEMI": [
          -1,
          112
        ],
        "'PARENNOSPACE": [
          -1,
          112
        ],
        "'STRING": [
          -1,
          112
        ],
        "'RPAREN": [
          -1,
          112
        ],
        "'LBRACE": [
          -1,
          112
        ],
        "'RBRACE": [
          -1,
          112
        ],
        "'SPY": [
          -1,
          112
        ],
        "'PARENSPACE": [
          -1,
          112
        ],
        "'COMMA": [
          -1,
          112
        ],
        "'INT": [
          -1,
          112
        ],
        "'LONG": [
          -1,
          112
        ],
        "'DOUBLE": [
          -1,
          112
        ],
        "'FLOAT": [
          -1,
          112
        ],
        "'BOOLEAN": [
          -1,
          112
        ],
        "'VOID": [
          -1,
          112
        ],
        "'LT": [
          -1,
          112
        ],
        "'GT": [
          -1,
          112
        ],
        "'THINARROW": [
          -1,
          112
        ],
        "'DATA": [
          -1,
          112
        ],
        "'IF": [
          -1,
          112
        ],
        "'FOR": [
          -1,
          112
        ],
        "'RETURN": [
          -1,
          112
        ],
        "'VAR": [
          -1,
          112
        ],
        "'REC": [
          -1,
          112
        ],
        "'ATCHECK": [
          -1,
          112
        ],
        "'ASSERTEQUALS": [
          -1,
          112
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          112
        ],
        "'ASSERTTRUE": [
          -1,
          112
        ],
        "'ASSERTFALSE": [
          -1,
          112
        ],
        "'ASSERTSATISFIES": [
          -1,
          112
        ],
        "'ASSERTRAISES": [
          -1,
          112
        ],
        "'IS": [
          -1,
          112
        ],
        "'ISNOT": [
          -1,
          112
        ],
        "'SATISFIES": [
          -1,
          112
        ],
        "'RAISES": [
          -1,
          112
        ],
        "'SWITCH": [
          -1,
          112
        ],
        "'CASE": [
          -1,
          112
        ],
        "'DEFAULT": [
          -1,
          112
        ],
        "'YIELD": [
          -1,
          112
        ],
        "'PLUS": [
          -1,
          112
        ],
        "'DASH": [
          -1,
          112
        ],
        "'TIMES": [
          -1,
          112
        ],
        "'SLASH": [
          -1,
          112
        ],
        "'PERCENT": [
          -1,
          112
        ],
        "'EQUALEQUAL": [
          -1,
          112
        ],
        "'NEQ": [
          -1,
          112
        ],
        "'LEQ": [
          -1,
          112
        ],
        "'GEQ": [
          -1,
          112
        ],
        "'AND": [
          -1,
          112
        ],
        "'OR": [
          -1,
          112
        ],
        "'BANG": [
          -1,
          112
        ],
        "'DOT": [
          -1,
          112
        ],
        "'LBRACK": [
          -1,
          112
        ],
        "'RBRACK": [
          -1,
          112
        ],
        "'NUMBER": [
          -1,
          112
        ],
        "'TRUE": [
          -1,
          112
        ],
        "'FALSE": [
          -1,
          112
        ],
        "'NULL": [
          -1,
          112
        ],
        "'PARENAFTERBRACE": [
          -1,
          112
        ],
        "'SIEVE": [
          -1,
          112
        ],
        "'USING": [
          -1,
          112
        ],
        "'ORDER": [
          -1,
          112
        ],
        "'EXTEND": [
          -1,
          112
        ],
        "'SELECT": [
          -1,
          112
        ],
        "'EXTRACT": [
          -1,
          112
        ],
        "'BLOCK": [
          -1,
          112
        ],
        "'TABLE": [
          -1,
          112
        ],
        "'ASK": [
          -1,
          112
        ],
        "'NEW": [
          -1,
          112
        ]
      },
      {
        "$": [
          -1,
          114
        ],
        "'NAME": [
          -1,
          114
        ],
        "'SEMI": [
          -1,
          114
        ],
        "'PARENNOSPACE": [
          -1,
          114
        ],
        "'STRING": [
          -1,
          114
        ],
        "'RPAREN": [
          -1,
          114
        ],
        "'LBRACE": [
          -1,
          114
        ],
        "'RBRACE": [
          -1,
          114
        ],
        "'SPY": [
          -1,
          114
        ],
        "'PARENSPACE": [
          -1,
          114
        ],
        "'COMMA": [
          -1,
          114
        ],
        "'INT": [
          -1,
          114
        ],
        "'LONG": [
          -1,
          114
        ],
        "'DOUBLE": [
          -1,
          114
        ],
        "'FLOAT": [
          -1,
          114
        ],
        "'BOOLEAN": [
          -1,
          114
        ],
        "'VOID": [
          -1,
          114
        ],
        "'LT": [
          -1,
          114
        ],
        "'GT": [
          -1,
          114
        ],
        "'THINARROW": [
          -1,
          114
        ],
        "'DATA": [
          -1,
          114
        ],
        "'IF": [
          -1,
          114
        ],
        "'FOR": [
          -1,
          114
        ],
        "'RETURN": [
          -1,
          114
        ],
        "'VAR": [
          -1,
          114
        ],
        "'REC": [
          -1,
          114
        ],
        "'ATCHECK": [
          -1,
          114
        ],
        "'ASSERTEQUALS": [
          -1,
          114
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          114
        ],
        "'ASSERTTRUE": [
          -1,
          114
        ],
        "'ASSERTFALSE": [
          -1,
          114
        ],
        "'ASSERTSATISFIES": [
          -1,
          114
        ],
        "'ASSERTRAISES": [
          -1,
          114
        ],
        "'IS": [
          -1,
          114
        ],
        "'ISNOT": [
          -1,
          114
        ],
        "'SATISFIES": [
          -1,
          114
        ],
        "'RAISES": [
          -1,
          114
        ],
        "'SWITCH": [
          -1,
          114
        ],
        "'CASE": [
          -1,
          114
        ],
        "'DEFAULT": [
          -1,
          114
        ],
        "'YIELD": [
          -1,
          114
        ],
        "'PLUS": [
          -1,
          114
        ],
        "'DASH": [
          -1,
          114
        ],
        "'TIMES": [
          -1,
          114
        ],
        "'SLASH": [
          -1,
          114
        ],
        "'PERCENT": [
          -1,
          114
        ],
        "'EQUALEQUAL": [
          -1,
          114
        ],
        "'NEQ": [
          -1,
          114
        ],
        "'LEQ": [
          -1,
          114
        ],
        "'GEQ": [
          -1,
          114
        ],
        "'AND": [
          -1,
          114
        ],
        "'OR": [
          -1,
          114
        ],
        "'BANG": [
          -1,
          114
        ],
        "'DOT": [
          -1,
          114
        ],
        "'LBRACK": [
          -1,
          114
        ],
        "'RBRACK": [
          -1,
          114
        ],
        "'NUMBER": [
          -1,
          114
        ],
        "'TRUE": [
          -1,
          114
        ],
        "'FALSE": [
          -1,
          114
        ],
        "'NULL": [
          -1,
          114
        ],
        "'PARENAFTERBRACE": [
          -1,
          114
        ],
        "'SIEVE": [
          -1,
          114
        ],
        "'USING": [
          -1,
          114
        ],
        "'ORDER": [
          -1,
          114
        ],
        "'EXTEND": [
          -1,
          114
        ],
        "'SELECT": [
          -1,
          114
        ],
        "'EXTRACT": [
          -1,
          114
        ],
        "'BLOCK": [
          -1,
          114
        ],
        "'TABLE": [
          -1,
          114
        ],
        "'ASK": [
          -1,
          114
        ],
        "'NEW": [
          -1,
          114
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          116
        ],
        "'USING": [
          -1,
          116
        ],
        "'ORDER": [
          -1,
          116
        ],
        "'EXTEND": [
          -1,
          116
        ],
        "'SELECT": [
          -1,
          116
        ],
        "'EXTRACT": [
          -1,
          116
        ],
        "'BLOCK": [
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
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          120
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          121
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          122
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          123
        ]
      },
      {
        "'NAME": [
          124
        ]
      },
      {
        "'LBRACE": [
          125
        ]
      },
      {
        "'LBRACE": [
          126
        ]
      },
      {
        "'LBRACE": [
          127
        ]
      },
      {
        "'NAME": [
          128
        ]
      },
      {
        "'SEMI": [
          129
        ],
        "'AS": [
          130
        ],
        "'PARENNOSPACE": [
          131
        ]
      },
      {
        "'SEMI": [
          132
        ],
        "'AS": [
          133
        ],
        "'PARENNOSPACE": [
          134
        ]
      },
      {
        "'NAME": [
          -1,
          118
        ],
        "'RPAREN": [
          -1,
          118
        ],
        "'COMMA": [
          -1,
          118
        ],
        "'GT": [
          -1,
          118
        ],
        "'THINARROW": [
          -1,
          118
        ]
      },
      {
        "'NAME": [
          -1,
          120
        ],
        "'RPAREN": [
          -1,
          120
        ],
        "'COMMA": [
          -1,
          120
        ],
        "'GT": [
          -1,
          120
        ],
        "'THINARROW": [
          -1,
          120
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          135
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          136
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "type-ann_A6_I1?": [
          75
        ],
        "type-ann_A6_I1": [
          76
        ],
        "'LT": [
          77
        ],
        "'NAME": [
          -1,
          24,
          26
        ],
        "'RPAREN": [
          -1,
          122
        ],
        "'COMMA": [
          -1,
          122
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          137
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "type-ann_A7_I1?": [
          90
        ],
        "type-ann_A7_I1": [
          91
        ],
        "'THINARROW": [
          -1,
          54
        ]
      },
      {
        "'NAME": [
          138
        ]
      },
      {
        "lambda-expr_A1_I1_I1*": [
          139
        ],
        "'RPAREN": [
          -1,
          124,
          126
        ],
        "'COMMA": [
          -1,
          126
        ]
      },
      {
        "'RPAREN": [
          140
        ]
      },
      {
        "'RPAREN": [
          -1,
          128
        ]
      },
      {
        "'COLON": [
          141
        ]
      },
      {
        "$": [
          -1,
          130
        ],
        "'NAME": [
          -1,
          130
        ],
        "'SEMI": [
          -1,
          130
        ],
        "'PARENNOSPACE": [
          -1,
          130
        ],
        "'STRING": [
          -1,
          130
        ],
        "'RPAREN": [
          -1,
          130
        ],
        "'LBRACE": [
          -1,
          130
        ],
        "'RBRACE": [
          -1,
          130
        ],
        "'SPY": [
          -1,
          130
        ],
        "'PARENSPACE": [
          -1,
          130
        ],
        "'COMMA": [
          -1,
          130
        ],
        "'INT": [
          -1,
          130
        ],
        "'LONG": [
          -1,
          130
        ],
        "'DOUBLE": [
          -1,
          130
        ],
        "'FLOAT": [
          -1,
          130
        ],
        "'BOOLEAN": [
          -1,
          130
        ],
        "'VOID": [
          -1,
          130
        ],
        "'LT": [
          -1,
          130
        ],
        "'GT": [
          -1,
          130
        ],
        "'THINARROW": [
          -1,
          130
        ],
        "'DATA": [
          -1,
          130
        ],
        "'IF": [
          -1,
          130
        ],
        "'FOR": [
          -1,
          130
        ],
        "'RETURN": [
          -1,
          130
        ],
        "'VAR": [
          -1,
          130
        ],
        "'REC": [
          -1,
          130
        ],
        "'ATCHECK": [
          -1,
          130
        ],
        "'ASSERTEQUALS": [
          -1,
          130
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          130
        ],
        "'ASSERTTRUE": [
          -1,
          130
        ],
        "'ASSERTFALSE": [
          -1,
          130
        ],
        "'ASSERTSATISFIES": [
          -1,
          130
        ],
        "'ASSERTRAISES": [
          -1,
          130
        ],
        "'IS": [
          -1,
          130
        ],
        "'ISNOT": [
          -1,
          130
        ],
        "'SATISFIES": [
          -1,
          130
        ],
        "'RAISES": [
          -1,
          130
        ],
        "'SWITCH": [
          -1,
          130
        ],
        "'CASE": [
          -1,
          130
        ],
        "'DEFAULT": [
          -1,
          130
        ],
        "'YIELD": [
          -1,
          130
        ],
        "'PLUS": [
          -1,
          130
        ],
        "'DASH": [
          -1,
          130
        ],
        "'TIMES": [
          -1,
          130
        ],
        "'SLASH": [
          -1,
          130
        ],
        "'PERCENT": [
          -1,
          130
        ],
        "'EQUALEQUAL": [
          -1,
          130
        ],
        "'NEQ": [
          -1,
          130
        ],
        "'LEQ": [
          -1,
          130
        ],
        "'GEQ": [
          -1,
          130
        ],
        "'AND": [
          -1,
          130
        ],
        "'OR": [
          -1,
          130
        ],
        "'BANG": [
          -1,
          130
        ],
        "'DOT": [
          -1,
          130
        ],
        "'LBRACK": [
          -1,
          130
        ],
        "'RBRACK": [
          -1,
          130
        ],
        "'NUMBER": [
          -1,
          130
        ],
        "'TRUE": [
          -1,
          130
        ],
        "'FALSE": [
          -1,
          130
        ],
        "'NULL": [
          -1,
          130
        ],
        "'PARENAFTERBRACE": [
          -1,
          130
        ],
        "'SIEVE": [
          -1,
          130
        ],
        "'USING": [
          -1,
          130
        ],
        "'ORDER": [
          -1,
          130
        ],
        "'EXTEND": [
          -1,
          130
        ],
        "'SELECT": [
          -1,
          130
        ],
        "'EXTRACT": [
          -1,
          130
        ],
        "'BLOCK": [
          -1,
          130
        ],
        "'TABLE": [
          -1,
          130
        ],
        "'ASK": [
          -1,
          130
        ],
        "'NEW": [
          -1,
          130
        ]
      },
      {
        "record-expr_A0_I2*": [
          142
        ],
        "'RBRACE": [
          -1,
          132
        ],
        "'COMMA": [
          -1,
          132
        ]
      },
      {
        "type-ann_A6_I1?": [
          75
        ],
        "type-ann_A6_I1": [
          76
        ],
        "'LT": [
          77,
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
          122,
          22
        ],
        "'COMMA": [
          -1,
          24,
          122,
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
          138
        ],
        "type-ann_A7_I1_I1*": [
          143
        ],
        "'COMMA": [
          -1,
          134
        ],
        "'THINARROW": [
          -1,
          136,
          134
        ]
      },
      {
        "'THINARROW": [
          144
        ]
      },
      {
        "'THINARROW": [
          -1,
          138
        ]
      },
      {
        "'RPAREN": [
          145
        ]
      },
      {
        "'RPAREN": [
          146
        ]
      },
      {
        "'RPAREN": [
          -1,
          140
        ]
      },
      {
        "lambda-expr_A0_I1_I1*": [
          147
        ],
        "'RPAREN": [
          -1,
          142,
          144
        ],
        "'COMMA": [
          -1,
          144
        ]
      },
      {
        "'PARENNOSPACE": [
          148
        ],
        "'EQUALS": [
          149
        ]
      },
      {
        "'LBRACE": [
          150
        ]
      },
      {
        "$": [
          -1,
          146
        ],
        "'NAME": [
          -1,
          146
        ],
        "'PARENNOSPACE": [
          -1,
          146
        ],
        "'STRING": [
          -1,
          146
        ],
        "'LBRACE": [
          -1,
          146
        ],
        "'RBRACE": [
          -1,
          146
        ],
        "'SPY": [
          -1,
          146
        ],
        "'PARENSPACE": [
          -1,
          146
        ],
        "'INT": [
          -1,
          146
        ],
        "'LONG": [
          -1,
          146
        ],
        "'DOUBLE": [
          -1,
          146
        ],
        "'FLOAT": [
          -1,
          146
        ],
        "'BOOLEAN": [
          -1,
          146
        ],
        "'VOID": [
          -1,
          146
        ],
        "'DATA": [
          -1,
          146
        ],
        "'IF": [
          -1,
          146
        ],
        "'FOR": [
          -1,
          146
        ],
        "'RETURN": [
          -1,
          146
        ],
        "'VAR": [
          -1,
          146
        ],
        "'REC": [
          -1,
          146
        ],
        "'ATCHECK": [
          -1,
          146
        ],
        "'ASSERTEQUALS": [
          -1,
          146
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          146
        ],
        "'ASSERTTRUE": [
          -1,
          146
        ],
        "'ASSERTFALSE": [
          -1,
          146
        ],
        "'ASSERTSATISFIES": [
          -1,
          146
        ],
        "'ASSERTRAISES": [
          -1,
          146
        ],
        "'SWITCH": [
          -1,
          146
        ],
        "'YIELD": [
          -1,
          146
        ],
        "'DASH": [
          -1,
          146
        ],
        "'BANG": [
          -1,
          146
        ],
        "'LBRACK": [
          -1,
          146
        ],
        "'NUMBER": [
          -1,
          146
        ],
        "'TRUE": [
          -1,
          146
        ],
        "'FALSE": [
          -1,
          146
        ],
        "'NULL": [
          -1,
          146
        ],
        "'PARENAFTERBRACE": [
          -1,
          146
        ],
        "'SIEVE": [
          -1,
          146
        ],
        "'ORDER": [
          -1,
          146
        ],
        "'EXTEND": [
          -1,
          146
        ],
        "'SELECT": [
          -1,
          146
        ],
        "'EXTRACT": [
          -1,
          146
        ],
        "'BLOCK": [
          -1,
          146
        ],
        "'TABLE": [
          -1,
          146
        ],
        "'ASK": [
          -1,
          146
        ],
        "'NEW": [
          -1,
          146
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
        "'PARENNOSPACE": [
          -1,
          148
        ],
        "'STRING": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          148
        ],
        "'YIELD": [
          -1,
          148
        ],
        "'DASH": [
          -1,
          148
        ],
        "'BANG": [
          -1,
          148
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          148
        ],
        "'ORDER": [
          -1,
          148
        ],
        "'EXTEND": [
          -1,
          148
        ],
        "'SELECT": [
          -1,
          148
        ],
        "'EXTRACT": [
          -1,
          148
        ],
        "'BLOCK": [
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
        "$": [
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
        "'LBRACE": [
          -1,
          150
        ],
        "'RBRACE": [
          -1,
          150
        ],
        "'SPY": [
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
        "'IF": [
          -1,
          150
        ],
        "'FOR": [
          -1,
          150
        ],
        "'RETURN": [
          -1,
          150
        ],
        "'VAR": [
          -1,
          150
        ],
        "'REC": [
          -1,
          150
        ],
        "'ATCHECK": [
          -1,
          150
        ],
        "'ASSERTEQUALS": [
          -1,
          150
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          150
        ],
        "'ASSERTTRUE": [
          -1,
          150
        ],
        "'ASSERTFALSE": [
          -1,
          150
        ],
        "'ASSERTSATISFIES": [
          -1,
          150
        ],
        "'ASSERTRAISES": [
          -1,
          150
        ],
        "'SWITCH": [
          -1,
          150
        ],
        "'YIELD": [
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
        "'SIEVE": [
          -1,
          150
        ],
        "'ORDER": [
          -1,
          150
        ],
        "'EXTEND": [
          -1,
          150
        ],
        "'SELECT": [
          -1,
          150
        ],
        "'EXTRACT": [
          -1,
          150
        ],
        "'BLOCK": [
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
        "type-ann_A6_I1?": [
          75
        ],
        "type-ann_A6_I1": [
          76
        ],
        "'LT": [
          77
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
          151
        ]
      },
      {
        "'NAME": [
          152
        ]
      },
      {
        "check-block_A1_I2*": [
          153
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
        "'LBRACE": [
          -1,
          152
        ],
        "'RBRACE": [
          -1,
          152
        ],
        "'SPY": [
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
        "'IF": [
          -1,
          152
        ],
        "'FOR": [
          -1,
          152
        ],
        "'RETURN": [
          -1,
          152
        ],
        "'VAR": [
          -1,
          152
        ],
        "'REC": [
          -1,
          152
        ],
        "'ATCHECK": [
          -1,
          152
        ],
        "'ASSERTEQUALS": [
          -1,
          152
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          152
        ],
        "'ASSERTTRUE": [
          -1,
          152
        ],
        "'ASSERTFALSE": [
          -1,
          152
        ],
        "'ASSERTSATISFIES": [
          -1,
          152
        ],
        "'ASSERTRAISES": [
          -1,
          152
        ],
        "'SWITCH": [
          -1,
          152
        ],
        "'YIELD": [
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
        "'SIEVE": [
          -1,
          152
        ],
        "'ORDER": [
          -1,
          152
        ],
        "'EXTEND": [
          -1,
          152
        ],
        "'SELECT": [
          -1,
          152
        ],
        "'EXTRACT": [
          -1,
          152
        ],
        "'BLOCK": [
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
          154
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          155
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'LT": [
          156,
          154
        ],
        "'GT": [
          157,
          154
        ],
        "binop-expr_I1": [
          158
        ],
        "binop": [
          159
        ],
        "'PLUS": [
          160,
          154
        ],
        "'DASH": [
          161,
          154
        ],
        "'TIMES": [
          162,
          154
        ],
        "'SLASH": [
          163,
          154
        ],
        "'PERCENT": [
          164,
          154
        ],
        "'EQUALEQUAL": [
          165,
          154
        ],
        "'NEQ": [
          166,
          154
        ],
        "'LEQ": [
          167,
          154
        ],
        "'GEQ": [
          168,
          154
        ],
        "'AND": [
          169,
          154
        ],
        "'OR": [
          170,
          154
        ],
        "$": [
          -1,
          154
        ],
        "'NAME": [
          -1,
          154
        ],
        "'SEMI": [
          -1,
          154
        ],
        "'PARENNOSPACE": [
          -1,
          154
        ],
        "'STRING": [
          -1,
          154
        ],
        "'RPAREN": [
          -1,
          154
        ],
        "'LBRACE": [
          -1,
          154
        ],
        "'RBRACE": [
          -1,
          154
        ],
        "'SPY": [
          -1,
          154
        ],
        "'PARENSPACE": [
          -1,
          154
        ],
        "'COMMA": [
          -1,
          154
        ],
        "'INT": [
          -1,
          154
        ],
        "'LONG": [
          -1,
          154
        ],
        "'DOUBLE": [
          -1,
          154
        ],
        "'FLOAT": [
          -1,
          154
        ],
        "'BOOLEAN": [
          -1,
          154
        ],
        "'VOID": [
          -1,
          154
        ],
        "'THINARROW": [
          -1,
          154
        ],
        "'DATA": [
          -1,
          154
        ],
        "'IF": [
          -1,
          154
        ],
        "'FOR": [
          -1,
          154
        ],
        "'RETURN": [
          -1,
          154
        ],
        "'VAR": [
          -1,
          154
        ],
        "'REC": [
          -1,
          154
        ],
        "'ATCHECK": [
          -1,
          154
        ],
        "'ASSERTEQUALS": [
          -1,
          154
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          154
        ],
        "'ASSERTTRUE": [
          -1,
          154
        ],
        "'ASSERTFALSE": [
          -1,
          154
        ],
        "'ASSERTSATISFIES": [
          -1,
          154
        ],
        "'ASSERTRAISES": [
          -1,
          154
        ],
        "'IS": [
          -1,
          154
        ],
        "'ISNOT": [
          -1,
          154
        ],
        "'SATISFIES": [
          -1,
          154
        ],
        "'RAISES": [
          -1,
          154
        ],
        "'SWITCH": [
          -1,
          154
        ],
        "'CASE": [
          -1,
          154
        ],
        "'DEFAULT": [
          -1,
          154
        ],
        "'YIELD": [
          -1,
          154
        ],
        "'BANG": [
          -1,
          154
        ],
        "'DOT": [
          -1,
          154
        ],
        "'LBRACK": [
          -1,
          154
        ],
        "'RBRACK": [
          -1,
          154
        ],
        "'NUMBER": [
          -1,
          154
        ],
        "'TRUE": [
          -1,
          154
        ],
        "'FALSE": [
          -1,
          154
        ],
        "'NULL": [
          -1,
          154
        ],
        "'PARENAFTERBRACE": [
          -1,
          154
        ],
        "'SIEVE": [
          -1,
          154
        ],
        "'USING": [
          -1,
          154
        ],
        "'ORDER": [
          -1,
          154
        ],
        "'EXTEND": [
          -1,
          154
        ],
        "'SELECT": [
          -1,
          154
        ],
        "'EXTRACT": [
          -1,
          154
        ],
        "'BLOCK": [
          -1,
          154
        ],
        "'TABLE": [
          -1,
          154
        ],
        "'ASK": [
          -1,
          154
        ],
        "'NEW": [
          -1,
          154
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          22
        ],
        "'USING": [
          -1,
          22
        ],
        "'ORDER": [
          -1,
          22
        ],
        "'EXTEND": [
          -1,
          22
        ],
        "'SELECT": [
          -1,
          22
        ],
        "'EXTRACT": [
          -1,
          22
        ],
        "'BLOCK": [
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
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          92
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "$": [
          -1,
          156
        ],
        "'NAME": [
          -1,
          156
        ],
        "'SEMI": [
          -1,
          156
        ],
        "'PARENNOSPACE": [
          -1,
          156
        ],
        "'STRING": [
          -1,
          156
        ],
        "'RPAREN": [
          -1,
          156
        ],
        "'LBRACE": [
          -1,
          156
        ],
        "'RBRACE": [
          -1,
          156
        ],
        "'SPY": [
          -1,
          156
        ],
        "'PARENSPACE": [
          -1,
          156
        ],
        "'COMMA": [
          -1,
          156
        ],
        "'INT": [
          -1,
          156
        ],
        "'LONG": [
          -1,
          156
        ],
        "'DOUBLE": [
          -1,
          156
        ],
        "'FLOAT": [
          -1,
          156
        ],
        "'BOOLEAN": [
          -1,
          156
        ],
        "'VOID": [
          -1,
          156
        ],
        "'LT": [
          -1,
          156
        ],
        "'GT": [
          -1,
          156
        ],
        "'THINARROW": [
          -1,
          156
        ],
        "'DATA": [
          -1,
          156
        ],
        "'IF": [
          -1,
          156
        ],
        "'FOR": [
          -1,
          156
        ],
        "'RETURN": [
          -1,
          156
        ],
        "'VAR": [
          -1,
          156
        ],
        "'REC": [
          -1,
          156
        ],
        "'ATCHECK": [
          -1,
          156
        ],
        "'ASSERTEQUALS": [
          -1,
          156
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          156
        ],
        "'ASSERTTRUE": [
          -1,
          156
        ],
        "'ASSERTFALSE": [
          -1,
          156
        ],
        "'ASSERTSATISFIES": [
          -1,
          156
        ],
        "'ASSERTRAISES": [
          -1,
          156
        ],
        "'IS": [
          -1,
          156
        ],
        "'ISNOT": [
          -1,
          156
        ],
        "'SATISFIES": [
          -1,
          156
        ],
        "'RAISES": [
          -1,
          156
        ],
        "'SWITCH": [
          -1,
          156
        ],
        "'CASE": [
          -1,
          156
        ],
        "'DEFAULT": [
          -1,
          156
        ],
        "'YIELD": [
          -1,
          156
        ],
        "'PLUS": [
          -1,
          156
        ],
        "'DASH": [
          -1,
          156
        ],
        "'TIMES": [
          -1,
          156
        ],
        "'SLASH": [
          -1,
          156
        ],
        "'PERCENT": [
          -1,
          156
        ],
        "'EQUALEQUAL": [
          -1,
          156
        ],
        "'NEQ": [
          -1,
          156
        ],
        "'LEQ": [
          -1,
          156
        ],
        "'GEQ": [
          -1,
          156
        ],
        "'AND": [
          -1,
          156
        ],
        "'OR": [
          -1,
          156
        ],
        "'BANG": [
          -1,
          156
        ],
        "'DOT": [
          -1,
          156
        ],
        "'LBRACK": [
          -1,
          156
        ],
        "'RBRACK": [
          -1,
          156
        ],
        "'NUMBER": [
          -1,
          156
        ],
        "'TRUE": [
          -1,
          156
        ],
        "'FALSE": [
          -1,
          156
        ],
        "'NULL": [
          -1,
          156
        ],
        "'PARENAFTERBRACE": [
          -1,
          156
        ],
        "'SIEVE": [
          -1,
          156
        ],
        "'USING": [
          -1,
          156
        ],
        "'ORDER": [
          -1,
          156
        ],
        "'EXTEND": [
          -1,
          156
        ],
        "'SELECT": [
          -1,
          156
        ],
        "'EXTRACT": [
          -1,
          156
        ],
        "'BLOCK": [
          -1,
          156
        ],
        "'TABLE": [
          -1,
          156
        ],
        "'ASK": [
          -1,
          156
        ],
        "'NEW": [
          -1,
          156
        ]
      },
      {
        "$": [
          -1,
          158
        ],
        "'NAME": [
          -1,
          158
        ],
        "'SEMI": [
          -1,
          158
        ],
        "'PARENNOSPACE": [
          -1,
          158
        ],
        "'STRING": [
          -1,
          158
        ],
        "'RPAREN": [
          -1,
          158
        ],
        "'LBRACE": [
          -1,
          158
        ],
        "'RBRACE": [
          -1,
          158
        ],
        "'SPY": [
          -1,
          158
        ],
        "'PARENSPACE": [
          -1,
          158
        ],
        "'COMMA": [
          -1,
          158
        ],
        "'INT": [
          -1,
          158
        ],
        "'LONG": [
          -1,
          158
        ],
        "'DOUBLE": [
          -1,
          158
        ],
        "'FLOAT": [
          -1,
          158
        ],
        "'BOOLEAN": [
          -1,
          158
        ],
        "'VOID": [
          -1,
          158
        ],
        "'LT": [
          -1,
          158
        ],
        "'GT": [
          -1,
          158
        ],
        "'THINARROW": [
          -1,
          158
        ],
        "'DATA": [
          -1,
          158
        ],
        "'IF": [
          -1,
          158
        ],
        "'FOR": [
          -1,
          158
        ],
        "'RETURN": [
          -1,
          158
        ],
        "'VAR": [
          -1,
          158
        ],
        "'REC": [
          -1,
          158
        ],
        "'ATCHECK": [
          -1,
          158
        ],
        "'ASSERTEQUALS": [
          -1,
          158
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          158
        ],
        "'ASSERTTRUE": [
          -1,
          158
        ],
        "'ASSERTFALSE": [
          -1,
          158
        ],
        "'ASSERTSATISFIES": [
          -1,
          158
        ],
        "'ASSERTRAISES": [
          -1,
          158
        ],
        "'IS": [
          -1,
          158
        ],
        "'ISNOT": [
          -1,
          158
        ],
        "'SATISFIES": [
          -1,
          158
        ],
        "'RAISES": [
          -1,
          158
        ],
        "'SWITCH": [
          -1,
          158
        ],
        "'CASE": [
          -1,
          158
        ],
        "'DEFAULT": [
          -1,
          158
        ],
        "'YIELD": [
          -1,
          158
        ],
        "'PLUS": [
          -1,
          158
        ],
        "'DASH": [
          -1,
          158
        ],
        "'TIMES": [
          -1,
          158
        ],
        "'SLASH": [
          -1,
          158
        ],
        "'PERCENT": [
          -1,
          158
        ],
        "'EQUALEQUAL": [
          -1,
          158
        ],
        "'NEQ": [
          -1,
          158
        ],
        "'LEQ": [
          -1,
          158
        ],
        "'GEQ": [
          -1,
          158
        ],
        "'AND": [
          -1,
          158
        ],
        "'OR": [
          -1,
          158
        ],
        "'BANG": [
          -1,
          158
        ],
        "'DOT": [
          -1,
          158
        ],
        "'LBRACK": [
          -1,
          158
        ],
        "'RBRACK": [
          -1,
          158
        ],
        "'NUMBER": [
          -1,
          158
        ],
        "'TRUE": [
          -1,
          158
        ],
        "'FALSE": [
          -1,
          158
        ],
        "'NULL": [
          -1,
          158
        ],
        "'PARENAFTERBRACE": [
          -1,
          158
        ],
        "'SIEVE": [
          -1,
          158
        ],
        "'USING": [
          -1,
          158
        ],
        "'ORDER": [
          -1,
          158
        ],
        "'EXTEND": [
          -1,
          158
        ],
        "'SELECT": [
          -1,
          158
        ],
        "'EXTRACT": [
          -1,
          158
        ],
        "'BLOCK": [
          -1,
          158
        ],
        "'TABLE": [
          -1,
          158
        ],
        "'ASK": [
          -1,
          158
        ],
        "'NEW": [
          -1,
          158
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          171
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "app-or-access_A0_I2?": [
          172
        ],
        "app-or-access_A0_I2": [
          173
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ],
        "'RPAREN": [
          -1,
          160
        ]
      },
      {
        "'NAME": [
          174
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          109
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          175
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'COLON": [
          176
        ]
      },
      {
        "'NAME": [
          177
        ],
        "'PARENSPACE": [
          178
        ]
      },
      {
        "$": [
          -1,
          162
        ],
        "'NAME": [
          -1,
          162
        ],
        "'SEMI": [
          -1,
          162
        ],
        "'PARENNOSPACE": [
          -1,
          162
        ],
        "'STRING": [
          -1,
          162
        ],
        "'RPAREN": [
          -1,
          162
        ],
        "'LBRACE": [
          -1,
          162
        ],
        "'RBRACE": [
          -1,
          162
        ],
        "'SPY": [
          -1,
          162
        ],
        "'PARENSPACE": [
          -1,
          162
        ],
        "'COMMA": [
          -1,
          162
        ],
        "'INT": [
          -1,
          162
        ],
        "'LONG": [
          -1,
          162
        ],
        "'DOUBLE": [
          -1,
          162
        ],
        "'FLOAT": [
          -1,
          162
        ],
        "'BOOLEAN": [
          -1,
          162
        ],
        "'VOID": [
          -1,
          162
        ],
        "'LT": [
          -1,
          162
        ],
        "'GT": [
          -1,
          162
        ],
        "'THINARROW": [
          -1,
          162
        ],
        "'DATA": [
          -1,
          162
        ],
        "'IF": [
          -1,
          162
        ],
        "'FOR": [
          -1,
          162
        ],
        "'RETURN": [
          -1,
          162
        ],
        "'VAR": [
          -1,
          162
        ],
        "'REC": [
          -1,
          162
        ],
        "'ATCHECK": [
          -1,
          162
        ],
        "'ASSERTEQUALS": [
          -1,
          162
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          162
        ],
        "'ASSERTTRUE": [
          -1,
          162
        ],
        "'ASSERTFALSE": [
          -1,
          162
        ],
        "'ASSERTSATISFIES": [
          -1,
          162
        ],
        "'ASSERTRAISES": [
          -1,
          162
        ],
        "'IS": [
          -1,
          162
        ],
        "'ISNOT": [
          -1,
          162
        ],
        "'SATISFIES": [
          -1,
          162
        ],
        "'RAISES": [
          -1,
          162
        ],
        "'SWITCH": [
          -1,
          162
        ],
        "'CASE": [
          -1,
          162
        ],
        "'DEFAULT": [
          -1,
          162
        ],
        "'YIELD": [
          -1,
          162
        ],
        "'PLUS": [
          -1,
          162
        ],
        "'DASH": [
          -1,
          162
        ],
        "'TIMES": [
          -1,
          162
        ],
        "'SLASH": [
          -1,
          162
        ],
        "'PERCENT": [
          -1,
          162
        ],
        "'EQUALEQUAL": [
          -1,
          162
        ],
        "'NEQ": [
          -1,
          162
        ],
        "'LEQ": [
          -1,
          162
        ],
        "'GEQ": [
          -1,
          162
        ],
        "'AND": [
          -1,
          162
        ],
        "'OR": [
          -1,
          162
        ],
        "'BANG": [
          -1,
          162
        ],
        "'DOT": [
          -1,
          162
        ],
        "'LBRACK": [
          -1,
          162
        ],
        "'RBRACK": [
          -1,
          162
        ],
        "'NUMBER": [
          -1,
          162
        ],
        "'TRUE": [
          -1,
          162
        ],
        "'FALSE": [
          -1,
          162
        ],
        "'NULL": [
          -1,
          162
        ],
        "'PARENAFTERBRACE": [
          -1,
          162
        ],
        "'SIEVE": [
          -1,
          162
        ],
        "'USING": [
          -1,
          162
        ],
        "'ORDER": [
          -1,
          162
        ],
        "'EXTEND": [
          -1,
          162
        ],
        "'SELECT": [
          -1,
          162
        ],
        "'EXTRACT": [
          -1,
          162
        ],
        "'BLOCK": [
          -1,
          162
        ],
        "'TABLE": [
          -1,
          162
        ],
        "'ASK": [
          -1,
          162
        ],
        "'NEW": [
          -1,
          162
        ]
      },
      {
        "'NAME": [
          88
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          81
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "full-expr": [
          92
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "lambda-expr_A0_I1?": [
          93
        ],
        "lambda-expr_A0_I1": [
          94
        ],
        "lambda-param": [
          95
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ],
        "'RPAREN": [
          -1,
          52
        ]
      },
      {
        "'RPAREN": [
          179
        ]
      },
      {
        "'USING": [
          180
        ]
      },
      {
        "'LBRACE": [
          181
        ]
      },
      {
        "'USING": [
          182
        ]
      },
      {
        "select-expr_I2*": [
          183
        ],
        "'COMMA": [
          -1,
          164
        ],
        "'FROM": [
          -1,
          164
        ]
      },
      {
        "'FROM": [
          184
        ]
      },
      {
        "block-expr_I2*": [
          185
        ],
        "'NAME": [
          -1,
          166
        ],
        "'PARENNOSPACE": [
          -1,
          166
        ],
        "'STRING": [
          -1,
          166
        ],
        "'LBRACE": [
          -1,
          166
        ],
        "'RBRACE": [
          -1,
          166
        ],
        "'SPY": [
          -1,
          166
        ],
        "'PARENSPACE": [
          -1,
          166
        ],
        "'INT": [
          -1,
          166
        ],
        "'LONG": [
          -1,
          166
        ],
        "'DOUBLE": [
          -1,
          166
        ],
        "'FLOAT": [
          -1,
          166
        ],
        "'BOOLEAN": [
          -1,
          166
        ],
        "'VOID": [
          -1,
          166
        ],
        "'DATA": [
          -1,
          166
        ],
        "'IF": [
          -1,
          166
        ],
        "'FOR": [
          -1,
          166
        ],
        "'RETURN": [
          -1,
          166
        ],
        "'VAR": [
          -1,
          166
        ],
        "'REC": [
          -1,
          166
        ],
        "'ATCHECK": [
          -1,
          166
        ],
        "'SWITCH": [
          -1,
          166
        ],
        "'YIELD": [
          -1,
          166
        ],
        "'DASH": [
          -1,
          166
        ],
        "'BANG": [
          -1,
          166
        ],
        "'LBRACK": [
          -1,
          166
        ],
        "'NUMBER": [
          -1,
          166
        ],
        "'TRUE": [
          -1,
          166
        ],
        "'FALSE": [
          -1,
          166
        ],
        "'NULL": [
          -1,
          166
        ],
        "'PARENAFTERBRACE": [
          -1,
          166
        ],
        "'SIEVE": [
          -1,
          166
        ],
        "'ORDER": [
          -1,
          166
        ],
        "'EXTEND": [
          -1,
          166
        ],
        "'SELECT": [
          -1,
          166
        ],
        "'EXTRACT": [
          -1,
          166
        ],
        "'BLOCK": [
          -1,
          166
        ],
        "'TABLE": [
          -1,
          166
        ],
        "'ASK": [
          -1,
          166
        ],
        "'NEW": [
          -1,
          166
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          186
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "table-header": [
          187
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          109
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          188
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "ask-branch": [
          189
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'PARENNOSPACE": [
          190
        ]
      },
      {
        "$": [
          -1,
          168
        ],
        "'IMPORT": [
          -1,
          168
        ],
        "'NAME": [
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
        "'INCLUDE": [
          -1,
          168
        ],
        "'LBRACE": [
          -1,
          168
        ],
        "'PARENSPACE": [
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
        "'DATA": [
          -1,
          168
        ],
        "'VAR": [
          -1,
          168
        ],
        "'REC": [
          -1,
          168
        ],
        "'ATCHECK": [
          -1,
          168
        ],
        "'SWITCH": [
          -1,
          168
        ],
        "'DASH": [
          -1,
          168
        ],
        "'BANG": [
          -1,
          168
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          168
        ],
        "'ORDER": [
          -1,
          168
        ],
        "'EXTEND": [
          -1,
          168
        ],
        "'SELECT": [
          -1,
          168
        ],
        "'EXTRACT": [
          -1,
          168
        ],
        "'BLOCK": [
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
          191
        ]
      },
      {
        "'STRING": [
          192
        ]
      },
      {
        "$": [
          -1,
          170
        ],
        "'IMPORT": [
          -1,
          170
        ],
        "'NAME": [
          -1,
          170
        ],
        "'PARENNOSPACE": [
          -1,
          170
        ],
        "'STRING": [
          -1,
          170
        ],
        "'INCLUDE": [
          -1,
          170
        ],
        "'LBRACE": [
          -1,
          170
        ],
        "'PARENSPACE": [
          -1,
          170
        ],
        "'INT": [
          -1,
          170
        ],
        "'LONG": [
          -1,
          170
        ],
        "'DOUBLE": [
          -1,
          170
        ],
        "'FLOAT": [
          -1,
          170
        ],
        "'BOOLEAN": [
          -1,
          170
        ],
        "'VOID": [
          -1,
          170
        ],
        "'DATA": [
          -1,
          170
        ],
        "'VAR": [
          -1,
          170
        ],
        "'REC": [
          -1,
          170
        ],
        "'ATCHECK": [
          -1,
          170
        ],
        "'SWITCH": [
          -1,
          170
        ],
        "'DASH": [
          -1,
          170
        ],
        "'BANG": [
          -1,
          170
        ],
        "'LBRACK": [
          -1,
          170
        ],
        "'NUMBER": [
          -1,
          170
        ],
        "'TRUE": [
          -1,
          170
        ],
        "'FALSE": [
          -1,
          170
        ],
        "'NULL": [
          -1,
          170
        ],
        "'PARENAFTERBRACE": [
          -1,
          170
        ],
        "'SIEVE": [
          -1,
          170
        ],
        "'ORDER": [
          -1,
          170
        ],
        "'EXTEND": [
          -1,
          170
        ],
        "'SELECT": [
          -1,
          170
        ],
        "'EXTRACT": [
          -1,
          170
        ],
        "'BLOCK": [
          -1,
          170
        ],
        "'TABLE": [
          -1,
          170
        ],
        "'ASK": [
          -1,
          170
        ],
        "'NEW": [
          -1,
          170
        ]
      },
      {
        "'NAME": [
          193
        ]
      },
      {
        "'STRING": [
          194
        ]
      },
      {
        "type-ann_A6_I1_I2*": [
          195
        ],
        "'COMMA": [
          -1,
          172
        ],
        "'GT": [
          -1,
          172
        ]
      },
      {
        "'SEMI": [
          196
        ],
        "assign-stmt_I3?": [
          197
        ],
        "assign-stmt_I3": [
          198
        ],
        "$": [
          -1,
          174,
          176
        ],
        "'NAME": [
          -1,
          174,
          176
        ],
        "'PARENNOSPACE": [
          -1,
          174,
          176
        ],
        "'STRING": [
          -1,
          174,
          176
        ],
        "'LBRACE": [
          -1,
          174,
          176
        ],
        "'RBRACE": [
          -1,
          174,
          176
        ],
        "'SPY": [
          -1,
          174,
          176
        ],
        "'PARENSPACE": [
          -1,
          174,
          176
        ],
        "'INT": [
          -1,
          174,
          176
        ],
        "'LONG": [
          -1,
          174,
          176
        ],
        "'DOUBLE": [
          -1,
          174,
          176
        ],
        "'FLOAT": [
          -1,
          174,
          176
        ],
        "'BOOLEAN": [
          -1,
          174,
          176
        ],
        "'VOID": [
          -1,
          174,
          176
        ],
        "'DATA": [
          -1,
          174,
          176
        ],
        "'IF": [
          -1,
          174,
          176
        ],
        "'FOR": [
          -1,
          174,
          176
        ],
        "'RETURN": [
          -1,
          174,
          176
        ],
        "'VAR": [
          -1,
          174,
          176
        ],
        "'REC": [
          -1,
          174,
          176
        ],
        "'ATCHECK": [
          -1,
          174,
          176
        ],
        "'ASSERTEQUALS": [
          -1,
          174,
          176
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          174,
          176
        ],
        "'ASSERTTRUE": [
          -1,
          174,
          176
        ],
        "'ASSERTFALSE": [
          -1,
          174,
          176
        ],
        "'ASSERTSATISFIES": [
          -1,
          174,
          176
        ],
        "'ASSERTRAISES": [
          -1,
          174,
          176
        ],
        "'SWITCH": [
          -1,
          174,
          176
        ],
        "'YIELD": [
          -1,
          174,
          176
        ],
        "'DASH": [
          -1,
          174,
          176
        ],
        "'BANG": [
          -1,
          174,
          176
        ],
        "'LBRACK": [
          -1,
          174,
          176
        ],
        "'NUMBER": [
          -1,
          174,
          176
        ],
        "'TRUE": [
          -1,
          174,
          176
        ],
        "'FALSE": [
          -1,
          174,
          176
        ],
        "'NULL": [
          -1,
          174,
          176
        ],
        "'PARENAFTERBRACE": [
          -1,
          174,
          176
        ],
        "'SIEVE": [
          -1,
          174,
          176
        ],
        "'ORDER": [
          -1,
          174,
          176
        ],
        "'EXTEND": [
          -1,
          174,
          176
        ],
        "'SELECT": [
          -1,
          174,
          176
        ],
        "'EXTRACT": [
          -1,
          174,
          176
        ],
        "'BLOCK": [
          -1,
          174,
          176
        ],
        "'TABLE": [
          -1,
          174,
          176
        ],
        "'ASK": [
          -1,
          174,
          176
        ],
        "'NEW": [
          -1,
          174,
          176
        ]
      },
      {
        "type-ann_A7_I1_I1*": [
          143
        ],
        "'COMMA": [
          -1,
          134
        ],
        "'THINARROW": [
          -1,
          136,
          134
        ]
      },
      {
        "'RPAREN": [
          -1,
          178
        ],
        "'COMMA": [
          -1,
          178
        ]
      },
      {
        "'COMMA": [
          199
        ],
        "lambda-expr_A1_I1_I1": [
          200
        ],
        "'RPAREN": [
          -1,
          180
        ]
      },
      {
        "'THINARROW": [
          201
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          202
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'RBRACE": [
          203
        ],
        "'COMMA": [
          204
        ],
        "record-expr_A0_I2": [
          205
        ]
      },
      {
        "'COMMA": [
          206
        ],
        "type-ann_A7_I1_I1": [
          207
        ],
        "'THINARROW": [
          -1,
          182
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          208
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "$": [
          -1,
          184
        ],
        "'NAME": [
          -1,
          184
        ],
        "'SEMI": [
          -1,
          184
        ],
        "'PARENNOSPACE": [
          -1,
          184
        ],
        "'STRING": [
          -1,
          184
        ],
        "'RPAREN": [
          -1,
          184
        ],
        "'LBRACE": [
          -1,
          184
        ],
        "'RBRACE": [
          -1,
          184
        ],
        "'SPY": [
          -1,
          184
        ],
        "'PARENSPACE": [
          -1,
          184
        ],
        "'COMMA": [
          -1,
          184
        ],
        "'INT": [
          -1,
          184
        ],
        "'LONG": [
          -1,
          184
        ],
        "'DOUBLE": [
          -1,
          184
        ],
        "'FLOAT": [
          -1,
          184
        ],
        "'BOOLEAN": [
          -1,
          184
        ],
        "'VOID": [
          -1,
          184
        ],
        "'LT": [
          -1,
          184
        ],
        "'GT": [
          -1,
          184
        ],
        "'THINARROW": [
          -1,
          184
        ],
        "'DATA": [
          -1,
          184
        ],
        "'IF": [
          -1,
          184
        ],
        "'FOR": [
          -1,
          184
        ],
        "'RETURN": [
          -1,
          184
        ],
        "'VAR": [
          -1,
          184
        ],
        "'REC": [
          -1,
          184
        ],
        "'ATCHECK": [
          -1,
          184
        ],
        "'ASSERTEQUALS": [
          -1,
          184
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          184
        ],
        "'ASSERTTRUE": [
          -1,
          184
        ],
        "'ASSERTFALSE": [
          -1,
          184
        ],
        "'ASSERTSATISFIES": [
          -1,
          184
        ],
        "'ASSERTRAISES": [
          -1,
          184
        ],
        "'IS": [
          -1,
          184
        ],
        "'ISNOT": [
          -1,
          184
        ],
        "'SATISFIES": [
          -1,
          184
        ],
        "'RAISES": [
          -1,
          184
        ],
        "'SWITCH": [
          -1,
          184
        ],
        "'CASE": [
          -1,
          184
        ],
        "'DEFAULT": [
          -1,
          184
        ],
        "'YIELD": [
          -1,
          184
        ],
        "'PLUS": [
          -1,
          184
        ],
        "'DASH": [
          -1,
          184
        ],
        "'TIMES": [
          -1,
          184
        ],
        "'SLASH": [
          -1,
          184
        ],
        "'PERCENT": [
          -1,
          184
        ],
        "'EQUALEQUAL": [
          -1,
          184
        ],
        "'NEQ": [
          -1,
          184
        ],
        "'LEQ": [
          -1,
          184
        ],
        "'GEQ": [
          -1,
          184
        ],
        "'AND": [
          -1,
          184
        ],
        "'OR": [
          -1,
          184
        ],
        "'BANG": [
          -1,
          184
        ],
        "'DOT": [
          -1,
          184
        ],
        "'LBRACK": [
          -1,
          184
        ],
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          184
        ],
        "'USING": [
          -1,
          184
        ],
        "'ORDER": [
          -1,
          184
        ],
        "'EXTEND": [
          -1,
          184
        ],
        "'SELECT": [
          -1,
          184
        ],
        "'EXTRACT": [
          -1,
          184
        ],
        "'BLOCK": [
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
        "'THINARROW": [
          209
        ]
      },
      {
        "'COMMA": [
          210
        ],
        "lambda-expr_A0_I1_I1": [
          211
        ],
        "'RPAREN": [
          -1,
          186
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          212
        ],
        "fun-decl_I3?": [
          213
        ],
        "fun-decl_I3": [
          214
        ],
        "param": [
          215
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'RPAREN": [
          -1,
          188
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          216
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          217
        ],
        "variant-decl": [
          218
        ]
      },
      {
        "'EQUALS": [
          219
        ]
      },
      {
        "'EQUALS": [
          220
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
          221
        ],
        "data-decl": [
          222
        ],
        "check-block": [
          223
        ],
        "let-stmt": [
          224
        ],
        "var-stmt": [
          225
        ],
        "rec-stmt": [
          226
        ],
        "assign-stmt": [
          227
        ],
        "expr-stmt": [
          228
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          229
        ],
        "block-stmt": [
          230
        ],
        "if-stmt": [
          231
        ],
        "for-stmt": [
          232
        ],
        "return-stmt": [
          233
        ],
        "yield-stmt": [
          234
        ],
        "spy-stmt": [
          235
        ],
        "'SPY": [
          236
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "assert-stmt": [
          237
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          238
        ],
        "full-expr": [
          239
        ],
        "'FOR": [
          240
        ],
        "'RETURN": [
          241
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "check-block_A1_I2": [
          242
        ],
        "'ASSERTEQUALS": [
          243
        ],
        "'ASSERTNOTEQUALS": [
          244
        ],
        "'ASSERTTRUE": [
          245
        ],
        "'ASSERTFALSE": [
          246
        ],
        "'ASSERTSATISFIES": [
          247
        ],
        "'ASSERTRAISES": [
          248
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          249
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'PARENNOSPACE": [
          250
        ]
      },
      {
        "'RPAREN": [
          251
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
        "'SIEVE": [
          -1,
          190
        ],
        "'ORDER": [
          -1,
          190
        ],
        "'EXTEND": [
          -1,
          190
        ],
        "'SELECT": [
          -1,
          190
        ],
        "'EXTRACT": [
          -1,
          190
        ],
        "'BLOCK": [
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
        "'SIEVE": [
          -1,
          192
        ],
        "'ORDER": [
          -1,
          192
        ],
        "'EXTEND": [
          -1,
          192
        ],
        "'SELECT": [
          -1,
          192
        ],
        "'EXTRACT": [
          -1,
          192
        ],
        "'BLOCK": [
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
        "$": [
          -1,
          194
        ],
        "'NAME": [
          -1,
          194
        ],
        "'SEMI": [
          -1,
          194
        ],
        "'PARENNOSPACE": [
          -1,
          194
        ],
        "'STRING": [
          -1,
          194
        ],
        "'RPAREN": [
          -1,
          194
        ],
        "'LBRACE": [
          -1,
          194
        ],
        "'RBRACE": [
          -1,
          194
        ],
        "'SPY": [
          -1,
          194
        ],
        "'PARENSPACE": [
          -1,
          194
        ],
        "'COMMA": [
          -1,
          194
        ],
        "'INT": [
          -1,
          194
        ],
        "'LONG": [
          -1,
          194
        ],
        "'DOUBLE": [
          -1,
          194
        ],
        "'FLOAT": [
          -1,
          194
        ],
        "'BOOLEAN": [
          -1,
          194
        ],
        "'VOID": [
          -1,
          194
        ],
        "'LT": [
          -1,
          194
        ],
        "'GT": [
          -1,
          194
        ],
        "'THINARROW": [
          -1,
          194
        ],
        "'DATA": [
          -1,
          194
        ],
        "'IF": [
          -1,
          194
        ],
        "'FOR": [
          -1,
          194
        ],
        "'RETURN": [
          -1,
          194
        ],
        "'VAR": [
          -1,
          194
        ],
        "'REC": [
          -1,
          194
        ],
        "'ATCHECK": [
          -1,
          194
        ],
        "'ASSERTEQUALS": [
          -1,
          194
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          194
        ],
        "'ASSERTTRUE": [
          -1,
          194
        ],
        "'ASSERTFALSE": [
          -1,
          194
        ],
        "'ASSERTSATISFIES": [
          -1,
          194
        ],
        "'ASSERTRAISES": [
          -1,
          194
        ],
        "'IS": [
          -1,
          194
        ],
        "'ISNOT": [
          -1,
          194
        ],
        "'SATISFIES": [
          -1,
          194
        ],
        "'RAISES": [
          -1,
          194
        ],
        "'SWITCH": [
          -1,
          194
        ],
        "'CASE": [
          -1,
          194
        ],
        "'DEFAULT": [
          -1,
          194
        ],
        "'YIELD": [
          -1,
          194
        ],
        "'PLUS": [
          -1,
          194
        ],
        "'DASH": [
          -1,
          194
        ],
        "'TIMES": [
          -1,
          194
        ],
        "'SLASH": [
          -1,
          194
        ],
        "'PERCENT": [
          -1,
          194
        ],
        "'EQUALEQUAL": [
          -1,
          194
        ],
        "'NEQ": [
          -1,
          194
        ],
        "'LEQ": [
          -1,
          194
        ],
        "'GEQ": [
          -1,
          194
        ],
        "'AND": [
          -1,
          194
        ],
        "'OR": [
          -1,
          194
        ],
        "'BANG": [
          -1,
          194
        ],
        "'DOT": [
          -1,
          194
        ],
        "'LBRACK": [
          -1,
          194
        ],
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          194
        ],
        "'USING": [
          -1,
          194
        ],
        "'ORDER": [
          -1,
          194
        ],
        "'EXTEND": [
          -1,
          194
        ],
        "'SELECT": [
          -1,
          194
        ],
        "'EXTRACT": [
          -1,
          194
        ],
        "'BLOCK": [
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
          108
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          109
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          252
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
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
        "'SIEVE": [
          -1,
          196
        ],
        "'ORDER": [
          -1,
          196
        ],
        "'EXTEND": [
          -1,
          196
        ],
        "'SELECT": [
          -1,
          196
        ],
        "'EXTRACT": [
          -1,
          196
        ],
        "'BLOCK": [
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
        "'SIEVE": [
          -1,
          198
        ],
        "'ORDER": [
          -1,
          198
        ],
        "'EXTEND": [
          -1,
          198
        ],
        "'SELECT": [
          -1,
          198
        ],
        "'EXTRACT": [
          -1,
          198
        ],
        "'BLOCK": [
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
        "'NAME": [
          -1,
          200
        ],
        "'STRING": [
          -1,
          200
        ],
        "'LBRACE": [
          -1,
          200
        ],
        "'PARENSPACE": [
          -1,
          200
        ],
        "'SWITCH": [
          -1,
          200
        ],
        "'DASH": [
          -1,
          200
        ],
        "'BANG": [
          -1,
          200
        ],
        "'LBRACK": [
          -1,
          200
        ],
        "'NUMBER": [
          -1,
          200
        ],
        "'TRUE": [
          -1,
          200
        ],
        "'FALSE": [
          -1,
          200
        ],
        "'NULL": [
          -1,
          200
        ],
        "'PARENAFTERBRACE": [
          -1,
          200
        ],
        "'SIEVE": [
          -1,
          200
        ],
        "'ORDER": [
          -1,
          200
        ],
        "'EXTEND": [
          -1,
          200
        ],
        "'SELECT": [
          -1,
          200
        ],
        "'EXTRACT": [
          -1,
          200
        ],
        "'BLOCK": [
          -1,
          200
        ],
        "'TABLE": [
          -1,
          200
        ],
        "'ASK": [
          -1,
          200
        ],
        "'NEW": [
          -1,
          200
        ]
      },
      {
        "'NAME": [
          -1,
          202
        ],
        "'STRING": [
          -1,
          202
        ],
        "'LBRACE": [
          -1,
          202
        ],
        "'PARENSPACE": [
          -1,
          202
        ],
        "'SWITCH": [
          -1,
          202
        ],
        "'DASH": [
          -1,
          202
        ],
        "'BANG": [
          -1,
          202
        ],
        "'LBRACK": [
          -1,
          202
        ],
        "'NUMBER": [
          -1,
          202
        ],
        "'TRUE": [
          -1,
          202
        ],
        "'FALSE": [
          -1,
          202
        ],
        "'NULL": [
          -1,
          202
        ],
        "'PARENAFTERBRACE": [
          -1,
          202
        ],
        "'SIEVE": [
          -1,
          202
        ],
        "'ORDER": [
          -1,
          202
        ],
        "'EXTEND": [
          -1,
          202
        ],
        "'SELECT": [
          -1,
          202
        ],
        "'EXTRACT": [
          -1,
          202
        ],
        "'BLOCK": [
          -1,
          202
        ],
        "'TABLE": [
          -1,
          202
        ],
        "'ASK": [
          -1,
          202
        ],
        "'NEW": [
          -1,
          202
        ]
      },
      {
        "'NAME": [
          -1,
          204
        ],
        "'STRING": [
          -1,
          204
        ],
        "'LBRACE": [
          -1,
          204
        ],
        "'PARENSPACE": [
          -1,
          204
        ],
        "'SWITCH": [
          -1,
          204
        ],
        "'DASH": [
          -1,
          204
        ],
        "'BANG": [
          -1,
          204
        ],
        "'LBRACK": [
          -1,
          204
        ],
        "'NUMBER": [
          -1,
          204
        ],
        "'TRUE": [
          -1,
          204
        ],
        "'FALSE": [
          -1,
          204
        ],
        "'NULL": [
          -1,
          204
        ],
        "'PARENAFTERBRACE": [
          -1,
          204
        ],
        "'SIEVE": [
          -1,
          204
        ],
        "'ORDER": [
          -1,
          204
        ],
        "'EXTEND": [
          -1,
          204
        ],
        "'SELECT": [
          -1,
          204
        ],
        "'EXTRACT": [
          -1,
          204
        ],
        "'BLOCK": [
          -1,
          204
        ],
        "'TABLE": [
          -1,
          204
        ],
        "'ASK": [
          -1,
          204
        ],
        "'NEW": [
          -1,
          204
        ]
      },
      {
        "'NAME": [
          -1,
          206
        ],
        "'STRING": [
          -1,
          206
        ],
        "'LBRACE": [
          -1,
          206
        ],
        "'PARENSPACE": [
          -1,
          206
        ],
        "'SWITCH": [
          -1,
          206
        ],
        "'DASH": [
          -1,
          206
        ],
        "'BANG": [
          -1,
          206
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          206
        ],
        "'ORDER": [
          -1,
          206
        ],
        "'EXTEND": [
          -1,
          206
        ],
        "'SELECT": [
          -1,
          206
        ],
        "'EXTRACT": [
          -1,
          206
        ],
        "'BLOCK": [
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
        "'NAME": [
          -1,
          208
        ],
        "'STRING": [
          -1,
          208
        ],
        "'LBRACE": [
          -1,
          208
        ],
        "'PARENSPACE": [
          -1,
          208
        ],
        "'SWITCH": [
          -1,
          208
        ],
        "'DASH": [
          -1,
          208
        ],
        "'BANG": [
          -1,
          208
        ],
        "'LBRACK": [
          -1,
          208
        ],
        "'NUMBER": [
          -1,
          208
        ],
        "'TRUE": [
          -1,
          208
        ],
        "'FALSE": [
          -1,
          208
        ],
        "'NULL": [
          -1,
          208
        ],
        "'PARENAFTERBRACE": [
          -1,
          208
        ],
        "'SIEVE": [
          -1,
          208
        ],
        "'ORDER": [
          -1,
          208
        ],
        "'EXTEND": [
          -1,
          208
        ],
        "'SELECT": [
          -1,
          208
        ],
        "'EXTRACT": [
          -1,
          208
        ],
        "'BLOCK": [
          -1,
          208
        ],
        "'TABLE": [
          -1,
          208
        ],
        "'ASK": [
          -1,
          208
        ],
        "'NEW": [
          -1,
          208
        ]
      },
      {
        "'NAME": [
          -1,
          210
        ],
        "'STRING": [
          -1,
          210
        ],
        "'LBRACE": [
          -1,
          210
        ],
        "'PARENSPACE": [
          -1,
          210
        ],
        "'SWITCH": [
          -1,
          210
        ],
        "'DASH": [
          -1,
          210
        ],
        "'BANG": [
          -1,
          210
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          210
        ],
        "'ORDER": [
          -1,
          210
        ],
        "'EXTEND": [
          -1,
          210
        ],
        "'SELECT": [
          -1,
          210
        ],
        "'EXTRACT": [
          -1,
          210
        ],
        "'BLOCK": [
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
          -1,
          212
        ],
        "'STRING": [
          -1,
          212
        ],
        "'LBRACE": [
          -1,
          212
        ],
        "'PARENSPACE": [
          -1,
          212
        ],
        "'SWITCH": [
          -1,
          212
        ],
        "'DASH": [
          -1,
          212
        ],
        "'BANG": [
          -1,
          212
        ],
        "'LBRACK": [
          -1,
          212
        ],
        "'NUMBER": [
          -1,
          212
        ],
        "'TRUE": [
          -1,
          212
        ],
        "'FALSE": [
          -1,
          212
        ],
        "'NULL": [
          -1,
          212
        ],
        "'PARENAFTERBRACE": [
          -1,
          212
        ],
        "'SIEVE": [
          -1,
          212
        ],
        "'ORDER": [
          -1,
          212
        ],
        "'EXTEND": [
          -1,
          212
        ],
        "'SELECT": [
          -1,
          212
        ],
        "'EXTRACT": [
          -1,
          212
        ],
        "'BLOCK": [
          -1,
          212
        ],
        "'TABLE": [
          -1,
          212
        ],
        "'ASK": [
          -1,
          212
        ],
        "'NEW": [
          -1,
          212
        ]
      },
      {
        "'NAME": [
          -1,
          214
        ],
        "'STRING": [
          -1,
          214
        ],
        "'LBRACE": [
          -1,
          214
        ],
        "'PARENSPACE": [
          -1,
          214
        ],
        "'SWITCH": [
          -1,
          214
        ],
        "'DASH": [
          -1,
          214
        ],
        "'BANG": [
          -1,
          214
        ],
        "'LBRACK": [
          -1,
          214
        ],
        "'NUMBER": [
          -1,
          214
        ],
        "'TRUE": [
          -1,
          214
        ],
        "'FALSE": [
          -1,
          214
        ],
        "'NULL": [
          -1,
          214
        ],
        "'PARENAFTERBRACE": [
          -1,
          214
        ],
        "'SIEVE": [
          -1,
          214
        ],
        "'ORDER": [
          -1,
          214
        ],
        "'EXTEND": [
          -1,
          214
        ],
        "'SELECT": [
          -1,
          214
        ],
        "'EXTRACT": [
          -1,
          214
        ],
        "'BLOCK": [
          -1,
          214
        ],
        "'TABLE": [
          -1,
          214
        ],
        "'ASK": [
          -1,
          214
        ],
        "'NEW": [
          -1,
          214
        ]
      },
      {
        "'NAME": [
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
        "'PARENSPACE": [
          -1,
          216
        ],
        "'SWITCH": [
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
        "'SIEVE": [
          -1,
          216
        ],
        "'ORDER": [
          -1,
          216
        ],
        "'EXTEND": [
          -1,
          216
        ],
        "'SELECT": [
          -1,
          216
        ],
        "'EXTRACT": [
          -1,
          216
        ],
        "'BLOCK": [
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
        "app-or-access_A0_I2_I1*": [
          253
        ],
        "'RPAREN": [
          -1,
          218,
          220
        ],
        "'COMMA": [
          -1,
          220
        ]
      },
      {
        "'RPAREN": [
          254
        ]
      },
      {
        "'RPAREN": [
          -1,
          222
        ]
      },
      {
        "$": [
          -1,
          224
        ],
        "'NAME": [
          -1,
          224
        ],
        "'SEMI": [
          -1,
          224
        ],
        "'PARENNOSPACE": [
          -1,
          224
        ],
        "'STRING": [
          -1,
          224
        ],
        "'RPAREN": [
          -1,
          224
        ],
        "'LBRACE": [
          -1,
          224
        ],
        "'RBRACE": [
          -1,
          224
        ],
        "'SPY": [
          -1,
          224
        ],
        "'PARENSPACE": [
          -1,
          224
        ],
        "'COMMA": [
          -1,
          224
        ],
        "'INT": [
          -1,
          224
        ],
        "'LONG": [
          -1,
          224
        ],
        "'DOUBLE": [
          -1,
          224
        ],
        "'FLOAT": [
          -1,
          224
        ],
        "'BOOLEAN": [
          -1,
          224
        ],
        "'VOID": [
          -1,
          224
        ],
        "'LT": [
          -1,
          224
        ],
        "'GT": [
          -1,
          224
        ],
        "'THINARROW": [
          -1,
          224
        ],
        "'DATA": [
          -1,
          224
        ],
        "'IF": [
          -1,
          224
        ],
        "'FOR": [
          -1,
          224
        ],
        "'RETURN": [
          -1,
          224
        ],
        "'VAR": [
          -1,
          224
        ],
        "'REC": [
          -1,
          224
        ],
        "'ATCHECK": [
          -1,
          224
        ],
        "'ASSERTEQUALS": [
          -1,
          224
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          224
        ],
        "'ASSERTTRUE": [
          -1,
          224
        ],
        "'ASSERTFALSE": [
          -1,
          224
        ],
        "'ASSERTSATISFIES": [
          -1,
          224
        ],
        "'ASSERTRAISES": [
          -1,
          224
        ],
        "'IS": [
          -1,
          224
        ],
        "'ISNOT": [
          -1,
          224
        ],
        "'SATISFIES": [
          -1,
          224
        ],
        "'RAISES": [
          -1,
          224
        ],
        "'SWITCH": [
          -1,
          224
        ],
        "'CASE": [
          -1,
          224
        ],
        "'DEFAULT": [
          -1,
          224
        ],
        "'YIELD": [
          -1,
          224
        ],
        "'PLUS": [
          -1,
          224
        ],
        "'DASH": [
          -1,
          224
        ],
        "'TIMES": [
          -1,
          224
        ],
        "'SLASH": [
          -1,
          224
        ],
        "'PERCENT": [
          -1,
          224
        ],
        "'EQUALEQUAL": [
          -1,
          224
        ],
        "'NEQ": [
          -1,
          224
        ],
        "'LEQ": [
          -1,
          224
        ],
        "'GEQ": [
          -1,
          224
        ],
        "'AND": [
          -1,
          224
        ],
        "'OR": [
          -1,
          224
        ],
        "'BANG": [
          -1,
          224
        ],
        "'DOT": [
          -1,
          224
        ],
        "'LBRACK": [
          -1,
          224
        ],
        "'RBRACK": [
          -1,
          224
        ],
        "'NUMBER": [
          -1,
          224
        ],
        "'TRUE": [
          -1,
          224
        ],
        "'FALSE": [
          -1,
          224
        ],
        "'NULL": [
          -1,
          224
        ],
        "'PARENAFTERBRACE": [
          -1,
          224
        ],
        "'SIEVE": [
          -1,
          224
        ],
        "'USING": [
          -1,
          224
        ],
        "'ORDER": [
          -1,
          224
        ],
        "'EXTEND": [
          -1,
          224
        ],
        "'SELECT": [
          -1,
          224
        ],
        "'EXTRACT": [
          -1,
          224
        ],
        "'BLOCK": [
          -1,
          224
        ],
        "'TABLE": [
          -1,
          224
        ],
        "'ASK": [
          -1,
          224
        ],
        "'NEW": [
          -1,
          224
        ]
      },
      {
        "'RBRACK": [
          255
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          256
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ],
        "construct-expr_A0_I3?": [
          257
        ],
        "construct-expr_A0_I3": [
          258
        ],
        "'RBRACK": [
          -1,
          226
        ]
      },
      {
        "'PARENNOSPACE": [
          259
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          260
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "$": [
          -1,
          228
        ],
        "'NAME": [
          -1,
          228
        ],
        "'SEMI": [
          -1,
          228
        ],
        "'PARENNOSPACE": [
          -1,
          228
        ],
        "'STRING": [
          -1,
          228
        ],
        "'RPAREN": [
          -1,
          228
        ],
        "'LBRACE": [
          -1,
          228
        ],
        "'RBRACE": [
          -1,
          228
        ],
        "'SPY": [
          -1,
          228
        ],
        "'PARENSPACE": [
          -1,
          228
        ],
        "'COMMA": [
          -1,
          228
        ],
        "'INT": [
          -1,
          228
        ],
        "'LONG": [
          -1,
          228
        ],
        "'DOUBLE": [
          -1,
          228
        ],
        "'FLOAT": [
          -1,
          228
        ],
        "'BOOLEAN": [
          -1,
          228
        ],
        "'VOID": [
          -1,
          228
        ],
        "'LT": [
          -1,
          228
        ],
        "'GT": [
          -1,
          228
        ],
        "'THINARROW": [
          -1,
          228
        ],
        "'DATA": [
          -1,
          228
        ],
        "'IF": [
          -1,
          228
        ],
        "'FOR": [
          -1,
          228
        ],
        "'RETURN": [
          -1,
          228
        ],
        "'VAR": [
          -1,
          228
        ],
        "'REC": [
          -1,
          228
        ],
        "'ATCHECK": [
          -1,
          228
        ],
        "'ASSERTEQUALS": [
          -1,
          228
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          228
        ],
        "'ASSERTTRUE": [
          -1,
          228
        ],
        "'ASSERTFALSE": [
          -1,
          228
        ],
        "'ASSERTSATISFIES": [
          -1,
          228
        ],
        "'ASSERTRAISES": [
          -1,
          228
        ],
        "'IS": [
          -1,
          228
        ],
        "'ISNOT": [
          -1,
          228
        ],
        "'SATISFIES": [
          -1,
          228
        ],
        "'RAISES": [
          -1,
          228
        ],
        "'SWITCH": [
          -1,
          228
        ],
        "'CASE": [
          -1,
          228
        ],
        "'DEFAULT": [
          -1,
          228
        ],
        "'YIELD": [
          -1,
          228
        ],
        "'PLUS": [
          -1,
          228
        ],
        "'DASH": [
          -1,
          228
        ],
        "'TIMES": [
          -1,
          228
        ],
        "'SLASH": [
          -1,
          228
        ],
        "'PERCENT": [
          -1,
          228
        ],
        "'EQUALEQUAL": [
          -1,
          228
        ],
        "'NEQ": [
          -1,
          228
        ],
        "'LEQ": [
          -1,
          228
        ],
        "'GEQ": [
          -1,
          228
        ],
        "'AND": [
          -1,
          228
        ],
        "'OR": [
          -1,
          228
        ],
        "'BANG": [
          -1,
          228
        ],
        "'DOT": [
          -1,
          228
        ],
        "'LBRACK": [
          -1,
          228
        ],
        "'RBRACK": [
          -1,
          228
        ],
        "'NUMBER": [
          -1,
          228
        ],
        "'TRUE": [
          -1,
          228
        ],
        "'FALSE": [
          -1,
          228
        ],
        "'NULL": [
          -1,
          228
        ],
        "'PARENAFTERBRACE": [
          -1,
          228
        ],
        "'SIEVE": [
          -1,
          228
        ],
        "'USING": [
          -1,
          228
        ],
        "'ORDER": [
          -1,
          228
        ],
        "'EXTEND": [
          -1,
          228
        ],
        "'SELECT": [
          -1,
          228
        ],
        "'EXTRACT": [
          -1,
          228
        ],
        "'BLOCK": [
          -1,
          228
        ],
        "'TABLE": [
          -1,
          228
        ],
        "'ASK": [
          -1,
          228
        ],
        "'NEW": [
          -1,
          228
        ]
      },
      {
        "'NAME": [
          261
        ]
      },
      {
        "'NAME": [
          262
        ],
        "column-sort": [
          263
        ]
      },
      {
        "'NAME": [
          264
        ]
      },
      {
        "'COMMA": [
          265
        ],
        "'FROM": [
          266
        ],
        "select-expr_I2": [
          267
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          268
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
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
          221
        ],
        "data-decl": [
          222
        ],
        "check-block": [
          223
        ],
        "let-stmt": [
          224
        ],
        "var-stmt": [
          225
        ],
        "rec-stmt": [
          226
        ],
        "assign-stmt": [
          227
        ],
        "expr-stmt": [
          228
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          269
        ],
        "block-stmt": [
          270
        ],
        "if-stmt": [
          231
        ],
        "for-stmt": [
          232
        ],
        "return-stmt": [
          233
        ],
        "yield-stmt": [
          234
        ],
        "spy-stmt": [
          235
        ],
        "'SPY": [
          236
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          238
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          240
        ],
        "'RETURN": [
          241
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          249
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "block-expr_I2": [
          271
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          272
        ]
      },
      {
        "table-expr_I3*": [
          273
        ],
        "'SEMI": [
          -1,
          230
        ],
        "'COMMA": [
          -1,
          230
        ]
      },
      {
        "'THINARROW": [
          274
        ]
      },
      {
        "'SEMI": [
          275
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          276
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ],
        "new-expr_I3?": [
          277
        ],
        "new-expr_I3": [
          278
        ],
        "'RPAREN": [
          -1,
          232
        ]
      },
      {
        "'SEMI": [
          279
        ]
      },
      {
        "'RPAREN": [
          280
        ]
      },
      {
        "'SEMI": [
          281
        ]
      },
      {
        "'RPAREN": [
          282
        ]
      },
      {
        "'COMMA": [
          283
        ],
        "'GT": [
          284
        ],
        "type-ann_A6_I1_I2": [
          285
        ]
      },
      {
        "$": [
          -1,
          234
        ],
        "'NAME": [
          -1,
          234
        ],
        "'PARENNOSPACE": [
          -1,
          234
        ],
        "'STRING": [
          -1,
          234
        ],
        "'LBRACE": [
          -1,
          234
        ],
        "'RBRACE": [
          -1,
          234
        ],
        "'SPY": [
          -1,
          234
        ],
        "'PARENSPACE": [
          -1,
          234
        ],
        "'INT": [
          -1,
          234
        ],
        "'LONG": [
          -1,
          234
        ],
        "'DOUBLE": [
          -1,
          234
        ],
        "'FLOAT": [
          -1,
          234
        ],
        "'BOOLEAN": [
          -1,
          234
        ],
        "'VOID": [
          -1,
          234
        ],
        "'DATA": [
          -1,
          234
        ],
        "'IF": [
          -1,
          234
        ],
        "'FOR": [
          -1,
          234
        ],
        "'RETURN": [
          -1,
          234
        ],
        "'VAR": [
          -1,
          234
        ],
        "'REC": [
          -1,
          234
        ],
        "'ATCHECK": [
          -1,
          234
        ],
        "'ASSERTEQUALS": [
          -1,
          234
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          234
        ],
        "'ASSERTTRUE": [
          -1,
          234
        ],
        "'ASSERTFALSE": [
          -1,
          234
        ],
        "'ASSERTSATISFIES": [
          -1,
          234
        ],
        "'ASSERTRAISES": [
          -1,
          234
        ],
        "'SWITCH": [
          -1,
          234
        ],
        "'YIELD": [
          -1,
          234
        ],
        "'DASH": [
          -1,
          234
        ],
        "'BANG": [
          -1,
          234
        ],
        "'LBRACK": [
          -1,
          234
        ],
        "'NUMBER": [
          -1,
          234
        ],
        "'TRUE": [
          -1,
          234
        ],
        "'FALSE": [
          -1,
          234
        ],
        "'NULL": [
          -1,
          234
        ],
        "'PARENAFTERBRACE": [
          -1,
          234
        ],
        "'SIEVE": [
          -1,
          234
        ],
        "'ORDER": [
          -1,
          234
        ],
        "'EXTEND": [
          -1,
          234
        ],
        "'SELECT": [
          -1,
          234
        ],
        "'EXTRACT": [
          -1,
          234
        ],
        "'BLOCK": [
          -1,
          234
        ],
        "'TABLE": [
          -1,
          234
        ],
        "'ASK": [
          -1,
          234
        ],
        "'NEW": [
          -1,
          234
        ]
      },
      {
        "$": [
          -1,
          236
        ],
        "'NAME": [
          -1,
          236
        ],
        "'PARENNOSPACE": [
          -1,
          236
        ],
        "'STRING": [
          -1,
          236
        ],
        "'LBRACE": [
          -1,
          236
        ],
        "'RBRACE": [
          -1,
          236
        ],
        "'SPY": [
          -1,
          236
        ],
        "'PARENSPACE": [
          -1,
          236
        ],
        "'INT": [
          -1,
          236
        ],
        "'LONG": [
          -1,
          236
        ],
        "'DOUBLE": [
          -1,
          236
        ],
        "'FLOAT": [
          -1,
          236
        ],
        "'BOOLEAN": [
          -1,
          236
        ],
        "'VOID": [
          -1,
          236
        ],
        "'DATA": [
          -1,
          236
        ],
        "'IF": [
          -1,
          236
        ],
        "'FOR": [
          -1,
          236
        ],
        "'RETURN": [
          -1,
          236
        ],
        "'VAR": [
          -1,
          236
        ],
        "'REC": [
          -1,
          236
        ],
        "'ATCHECK": [
          -1,
          236
        ],
        "'ASSERTEQUALS": [
          -1,
          236
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          236
        ],
        "'ASSERTTRUE": [
          -1,
          236
        ],
        "'ASSERTFALSE": [
          -1,
          236
        ],
        "'ASSERTSATISFIES": [
          -1,
          236
        ],
        "'ASSERTRAISES": [
          -1,
          236
        ],
        "'SWITCH": [
          -1,
          236
        ],
        "'YIELD": [
          -1,
          236
        ],
        "'DASH": [
          -1,
          236
        ],
        "'BANG": [
          -1,
          236
        ],
        "'LBRACK": [
          -1,
          236
        ],
        "'NUMBER": [
          -1,
          236
        ],
        "'TRUE": [
          -1,
          236
        ],
        "'FALSE": [
          -1,
          236
        ],
        "'NULL": [
          -1,
          236
        ],
        "'PARENAFTERBRACE": [
          -1,
          236
        ],
        "'SIEVE": [
          -1,
          236
        ],
        "'ORDER": [
          -1,
          236
        ],
        "'EXTEND": [
          -1,
          236
        ],
        "'SELECT": [
          -1,
          236
        ],
        "'EXTRACT": [
          -1,
          236
        ],
        "'BLOCK": [
          -1,
          236
        ],
        "'TABLE": [
          -1,
          236
        ],
        "'ASK": [
          -1,
          236
        ],
        "'NEW": [
          -1,
          236
        ]
      },
      {
        "$": [
          -1,
          238
        ],
        "'NAME": [
          -1,
          238
        ],
        "'PARENNOSPACE": [
          -1,
          238
        ],
        "'STRING": [
          -1,
          238
        ],
        "'LBRACE": [
          -1,
          238
        ],
        "'RBRACE": [
          -1,
          238
        ],
        "'SPY": [
          -1,
          238
        ],
        "'PARENSPACE": [
          -1,
          238
        ],
        "'INT": [
          -1,
          238
        ],
        "'LONG": [
          -1,
          238
        ],
        "'DOUBLE": [
          -1,
          238
        ],
        "'FLOAT": [
          -1,
          238
        ],
        "'BOOLEAN": [
          -1,
          238
        ],
        "'VOID": [
          -1,
          238
        ],
        "'DATA": [
          -1,
          238
        ],
        "'IF": [
          -1,
          238
        ],
        "'FOR": [
          -1,
          238
        ],
        "'RETURN": [
          -1,
          238
        ],
        "'VAR": [
          -1,
          238
        ],
        "'REC": [
          -1,
          238
        ],
        "'ATCHECK": [
          -1,
          238
        ],
        "'ASSERTEQUALS": [
          -1,
          238
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          238
        ],
        "'ASSERTTRUE": [
          -1,
          238
        ],
        "'ASSERTFALSE": [
          -1,
          238
        ],
        "'ASSERTSATISFIES": [
          -1,
          238
        ],
        "'ASSERTRAISES": [
          -1,
          238
        ],
        "'SWITCH": [
          -1,
          238
        ],
        "'YIELD": [
          -1,
          238
        ],
        "'DASH": [
          -1,
          238
        ],
        "'BANG": [
          -1,
          238
        ],
        "'LBRACK": [
          -1,
          238
        ],
        "'NUMBER": [
          -1,
          238
        ],
        "'TRUE": [
          -1,
          238
        ],
        "'FALSE": [
          -1,
          238
        ],
        "'NULL": [
          -1,
          238
        ],
        "'PARENAFTERBRACE": [
          -1,
          238
        ],
        "'SIEVE": [
          -1,
          238
        ],
        "'ORDER": [
          -1,
          238
        ],
        "'EXTEND": [
          -1,
          238
        ],
        "'SELECT": [
          -1,
          238
        ],
        "'EXTRACT": [
          -1,
          238
        ],
        "'BLOCK": [
          -1,
          238
        ],
        "'TABLE": [
          -1,
          238
        ],
        "'ASK": [
          -1,
          238
        ],
        "'NEW": [
          -1,
          238
        ]
      },
      {
        "'NAME": [
          79
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          81
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "lambda-param": [
          286
        ]
      },
      {
        "'RPAREN": [
          -1,
          240
        ],
        "'COMMA": [
          -1,
          240
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          287
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'RBRACE": [
          -1,
          242
        ],
        "'COMMA": [
          -1,
          242
        ]
      },
      {
        "$": [
          -1,
          244
        ],
        "'NAME": [
          -1,
          244
        ],
        "'SEMI": [
          -1,
          244
        ],
        "'PARENNOSPACE": [
          -1,
          244
        ],
        "'STRING": [
          -1,
          244
        ],
        "'RPAREN": [
          -1,
          244
        ],
        "'LBRACE": [
          -1,
          244
        ],
        "'RBRACE": [
          -1,
          244
        ],
        "'SPY": [
          -1,
          244
        ],
        "'PARENSPACE": [
          -1,
          244
        ],
        "'COMMA": [
          -1,
          244
        ],
        "'INT": [
          -1,
          244
        ],
        "'LONG": [
          -1,
          244
        ],
        "'DOUBLE": [
          -1,
          244
        ],
        "'FLOAT": [
          -1,
          244
        ],
        "'BOOLEAN": [
          -1,
          244
        ],
        "'VOID": [
          -1,
          244
        ],
        "'LT": [
          -1,
          244
        ],
        "'GT": [
          -1,
          244
        ],
        "'THINARROW": [
          -1,
          244
        ],
        "'DATA": [
          -1,
          244
        ],
        "'IF": [
          -1,
          244
        ],
        "'FOR": [
          -1,
          244
        ],
        "'RETURN": [
          -1,
          244
        ],
        "'VAR": [
          -1,
          244
        ],
        "'REC": [
          -1,
          244
        ],
        "'ATCHECK": [
          -1,
          244
        ],
        "'ASSERTEQUALS": [
          -1,
          244
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          244
        ],
        "'ASSERTTRUE": [
          -1,
          244
        ],
        "'ASSERTFALSE": [
          -1,
          244
        ],
        "'ASSERTSATISFIES": [
          -1,
          244
        ],
        "'ASSERTRAISES": [
          -1,
          244
        ],
        "'IS": [
          -1,
          244
        ],
        "'ISNOT": [
          -1,
          244
        ],
        "'SATISFIES": [
          -1,
          244
        ],
        "'RAISES": [
          -1,
          244
        ],
        "'SWITCH": [
          -1,
          244
        ],
        "'CASE": [
          -1,
          244
        ],
        "'DEFAULT": [
          -1,
          244
        ],
        "'YIELD": [
          -1,
          244
        ],
        "'PLUS": [
          -1,
          244
        ],
        "'DASH": [
          -1,
          244
        ],
        "'TIMES": [
          -1,
          244
        ],
        "'SLASH": [
          -1,
          244
        ],
        "'PERCENT": [
          -1,
          244
        ],
        "'EQUALEQUAL": [
          -1,
          244
        ],
        "'NEQ": [
          -1,
          244
        ],
        "'LEQ": [
          -1,
          244
        ],
        "'GEQ": [
          -1,
          244
        ],
        "'AND": [
          -1,
          244
        ],
        "'OR": [
          -1,
          244
        ],
        "'BANG": [
          -1,
          244
        ],
        "'DOT": [
          -1,
          244
        ],
        "'LBRACK": [
          -1,
          244
        ],
        "'RBRACK": [
          -1,
          244
        ],
        "'NUMBER": [
          -1,
          244
        ],
        "'TRUE": [
          -1,
          244
        ],
        "'FALSE": [
          -1,
          244
        ],
        "'NULL": [
          -1,
          244
        ],
        "'PARENAFTERBRACE": [
          -1,
          244
        ],
        "'SIEVE": [
          -1,
          244
        ],
        "'USING": [
          -1,
          244
        ],
        "'ORDER": [
          -1,
          244
        ],
        "'EXTEND": [
          -1,
          244
        ],
        "'SELECT": [
          -1,
          244
        ],
        "'EXTRACT": [
          -1,
          244
        ],
        "'BLOCK": [
          -1,
          244
        ],
        "'TABLE": [
          -1,
          244
        ],
        "'ASK": [
          -1,
          244
        ],
        "'NEW": [
          -1,
          244
        ]
      },
      {
        "'NAME": [
          85
        ],
        "record-field": [
          288
        ]
      },
      {
        "'RBRACE": [
          -1,
          246
        ],
        "'COMMA": [
          -1,
          246
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          289
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'COMMA": [
          -1,
          248
        ],
        "'THINARROW": [
          -1,
          248
        ]
      },
      {
        "'RPAREN": [
          290
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          291
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          79
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          81
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "lambda-param": [
          292
        ]
      },
      {
        "'RPAREN": [
          -1,
          250
        ],
        "'COMMA": [
          -1,
          250
        ]
      },
      {
        "'NAME": [
          293
        ]
      },
      {
        "'RPAREN": [
          294
        ]
      },
      {
        "'RPAREN": [
          -1,
          252
        ]
      },
      {
        "fun-decl_I3_I1*": [
          295
        ],
        "'RPAREN": [
          -1,
          254,
          256
        ],
        "'COMMA": [
          -1,
          256
        ]
      },
      {
        "'SEMI": [
          296
        ],
        "let-stmt_I4?": [
          297
        ],
        "let-stmt_I4": [
          298
        ],
        "$": [
          -1,
          258,
          260
        ],
        "'NAME": [
          -1,
          258,
          260
        ],
        "'PARENNOSPACE": [
          -1,
          258,
          260
        ],
        "'STRING": [
          -1,
          258,
          260
        ],
        "'LBRACE": [
          -1,
          258,
          260
        ],
        "'RBRACE": [
          -1,
          258,
          260
        ],
        "'SPY": [
          -1,
          258,
          260
        ],
        "'PARENSPACE": [
          -1,
          258,
          260
        ],
        "'INT": [
          -1,
          258,
          260
        ],
        "'LONG": [
          -1,
          258,
          260
        ],
        "'DOUBLE": [
          -1,
          258,
          260
        ],
        "'FLOAT": [
          -1,
          258,
          260
        ],
        "'BOOLEAN": [
          -1,
          258,
          260
        ],
        "'VOID": [
          -1,
          258,
          260
        ],
        "'DATA": [
          -1,
          258,
          260
        ],
        "'IF": [
          -1,
          258,
          260
        ],
        "'FOR": [
          -1,
          258,
          260
        ],
        "'RETURN": [
          -1,
          258,
          260
        ],
        "'VAR": [
          -1,
          258,
          260
        ],
        "'REC": [
          -1,
          258,
          260
        ],
        "'ATCHECK": [
          -1,
          258,
          260
        ],
        "'ASSERTEQUALS": [
          -1,
          258,
          260
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          258,
          260
        ],
        "'ASSERTTRUE": [
          -1,
          258,
          260
        ],
        "'ASSERTFALSE": [
          -1,
          258,
          260
        ],
        "'ASSERTSATISFIES": [
          -1,
          258,
          260
        ],
        "'ASSERTRAISES": [
          -1,
          258,
          260
        ],
        "'SWITCH": [
          -1,
          258,
          260
        ],
        "'YIELD": [
          -1,
          258,
          260
        ],
        "'DASH": [
          -1,
          258,
          260
        ],
        "'BANG": [
          -1,
          258,
          260
        ],
        "'LBRACK": [
          -1,
          258,
          260
        ],
        "'NUMBER": [
          -1,
          258,
          260
        ],
        "'TRUE": [
          -1,
          258,
          260
        ],
        "'FALSE": [
          -1,
          258,
          260
        ],
        "'NULL": [
          -1,
          258,
          260
        ],
        "'PARENAFTERBRACE": [
          -1,
          258,
          260
        ],
        "'SIEVE": [
          -1,
          258,
          260
        ],
        "'ORDER": [
          -1,
          258,
          260
        ],
        "'EXTEND": [
          -1,
          258,
          260
        ],
        "'SELECT": [
          -1,
          258,
          260
        ],
        "'EXTRACT": [
          -1,
          258,
          260
        ],
        "'BLOCK": [
          -1,
          258,
          260
        ],
        "'TABLE": [
          -1,
          258,
          260
        ],
        "'ASK": [
          -1,
          258,
          260
        ],
        "'NEW": [
          -1,
          258,
          260
        ]
      },
      {
        "'PARENNOSPACE": [
          299
        ],
        "'SEMI": [
          -1,
          262
        ],
        "'RBRACE": [
          -1,
          262
        ]
      },
      {
        "data-decl_I4*": [
          300
        ],
        "'SEMI": [
          -1,
          264
        ],
        "'RBRACE": [
          -1,
          264
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          301
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          302
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          266
        ],
        "'ORDER": [
          -1,
          266
        ],
        "'EXTEND": [
          -1,
          266
        ],
        "'SELECT": [
          -1,
          266
        ],
        "'EXTRACT": [
          -1,
          266
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          268
        ],
        "'ORDER": [
          -1,
          268
        ],
        "'EXTEND": [
          -1,
          268
        ],
        "'SELECT": [
          -1,
          268
        ],
        "'EXTRACT": [
          -1,
          268
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          270
        ],
        "'ORDER": [
          -1,
          270
        ],
        "'EXTEND": [
          -1,
          270
        ],
        "'SELECT": [
          -1,
          270
        ],
        "'EXTRACT": [
          -1,
          270
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          272
        ],
        "'ORDER": [
          -1,
          272
        ],
        "'EXTEND": [
          -1,
          272
        ],
        "'SELECT": [
          -1,
          272
        ],
        "'EXTRACT": [
          -1,
          272
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          274
        ],
        "'ORDER": [
          -1,
          274
        ],
        "'EXTEND": [
          -1,
          274
        ],
        "'SELECT": [
          -1,
          274
        ],
        "'EXTRACT": [
          -1,
          274
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          276
        ],
        "'ORDER": [
          -1,
          276
        ],
        "'EXTEND": [
          -1,
          276
        ],
        "'SELECT": [
          -1,
          276
        ],
        "'EXTRACT": [
          -1,
          276
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          278
        ],
        "'ORDER": [
          -1,
          278
        ],
        "'EXTEND": [
          -1,
          278
        ],
        "'SELECT": [
          -1,
          278
        ],
        "'EXTRACT": [
          -1,
          278
        ],
        "'BLOCK": [
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
        "'NAME": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          280
        ],
        "'YIELD": [
          -1,
          280
        ],
        "'DASH": [
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
        "'SIEVE": [
          -1,
          280
        ],
        "'ORDER": [
          -1,
          280
        ],
        "'EXTEND": [
          -1,
          280
        ],
        "'SELECT": [
          -1,
          280
        ],
        "'EXTRACT": [
          -1,
          280
        ],
        "'BLOCK": [
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
        "$": [
          -1,
          282
        ],
        "'NAME": [
          -1,
          282
        ],
        "'PARENNOSPACE": [
          -1,
          282
        ],
        "'STRING": [
          -1,
          282
        ],
        "'LBRACE": [
          -1,
          282
        ],
        "'RBRACE": [
          -1,
          282
        ],
        "'SPY": [
          -1,
          282
        ],
        "'PARENSPACE": [
          -1,
          282
        ],
        "'INT": [
          -1,
          282
        ],
        "'LONG": [
          -1,
          282
        ],
        "'DOUBLE": [
          -1,
          282
        ],
        "'FLOAT": [
          -1,
          282
        ],
        "'BOOLEAN": [
          -1,
          282
        ],
        "'VOID": [
          -1,
          282
        ],
        "'DATA": [
          -1,
          282
        ],
        "'IF": [
          -1,
          282
        ],
        "'FOR": [
          -1,
          282
        ],
        "'RETURN": [
          -1,
          282
        ],
        "'VAR": [
          -1,
          282
        ],
        "'REC": [
          -1,
          282
        ],
        "'ATCHECK": [
          -1,
          282
        ],
        "'ASSERTEQUALS": [
          -1,
          282
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          282
        ],
        "'ASSERTTRUE": [
          -1,
          282
        ],
        "'ASSERTFALSE": [
          -1,
          282
        ],
        "'ASSERTSATISFIES": [
          -1,
          282
        ],
        "'ASSERTRAISES": [
          -1,
          282
        ],
        "'SWITCH": [
          -1,
          282
        ],
        "'YIELD": [
          -1,
          282
        ],
        "'DASH": [
          -1,
          282
        ],
        "'BANG": [
          -1,
          282
        ],
        "'LBRACK": [
          -1,
          282
        ],
        "'NUMBER": [
          -1,
          282
        ],
        "'TRUE": [
          -1,
          282
        ],
        "'FALSE": [
          -1,
          282
        ],
        "'NULL": [
          -1,
          282
        ],
        "'PARENAFTERBRACE": [
          -1,
          282
        ],
        "'SIEVE": [
          -1,
          282
        ],
        "'ORDER": [
          -1,
          282
        ],
        "'EXTEND": [
          -1,
          282
        ],
        "'SELECT": [
          -1,
          282
        ],
        "'EXTRACT": [
          -1,
          282
        ],
        "'BLOCK": [
          -1,
          282
        ],
        "'TABLE": [
          -1,
          282
        ],
        "'ASK": [
          -1,
          282
        ],
        "'NEW": [
          -1,
          282
        ]
      },
      {
        "'NAME": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          284
        ],
        "'YIELD": [
          -1,
          284
        ],
        "'DASH": [
          -1,
          284
        ],
        "'BANG": [
          -1,
          284
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          284
        ],
        "'ORDER": [
          -1,
          284
        ],
        "'EXTEND": [
          -1,
          284
        ],
        "'SELECT": [
          -1,
          284
        ],
        "'EXTRACT": [
          -1,
          284
        ],
        "'BLOCK": [
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
        "'NAME": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          286
        ],
        "'YIELD": [
          -1,
          286
        ],
        "'DASH": [
          -1,
          286
        ],
        "'BANG": [
          -1,
          286
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          286
        ],
        "'ORDER": [
          -1,
          286
        ],
        "'EXTEND": [
          -1,
          286
        ],
        "'SELECT": [
          -1,
          286
        ],
        "'EXTRACT": [
          -1,
          286
        ],
        "'BLOCK": [
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
        "'NAME": [
          -1,
          288
        ],
        "'PARENNOSPACE": [
          -1,
          288
        ],
        "'STRING": [
          -1,
          288
        ],
        "'LBRACE": [
          -1,
          288
        ],
        "'RBRACE": [
          -1,
          288
        ],
        "'SPY": [
          -1,
          288
        ],
        "'PARENSPACE": [
          -1,
          288
        ],
        "'INT": [
          -1,
          288
        ],
        "'LONG": [
          -1,
          288
        ],
        "'DOUBLE": [
          -1,
          288
        ],
        "'FLOAT": [
          -1,
          288
        ],
        "'BOOLEAN": [
          -1,
          288
        ],
        "'VOID": [
          -1,
          288
        ],
        "'DATA": [
          -1,
          288
        ],
        "'IF": [
          -1,
          288
        ],
        "'FOR": [
          -1,
          288
        ],
        "'RETURN": [
          -1,
          288
        ],
        "'VAR": [
          -1,
          288
        ],
        "'REC": [
          -1,
          288
        ],
        "'ATCHECK": [
          -1,
          288
        ],
        "'ASSERTEQUALS": [
          -1,
          288
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          288
        ],
        "'ASSERTTRUE": [
          -1,
          288
        ],
        "'ASSERTFALSE": [
          -1,
          288
        ],
        "'ASSERTSATISFIES": [
          -1,
          288
        ],
        "'ASSERTRAISES": [
          -1,
          288
        ],
        "'SWITCH": [
          -1,
          288
        ],
        "'YIELD": [
          -1,
          288
        ],
        "'DASH": [
          -1,
          288
        ],
        "'BANG": [
          -1,
          288
        ],
        "'LBRACK": [
          -1,
          288
        ],
        "'NUMBER": [
          -1,
          288
        ],
        "'TRUE": [
          -1,
          288
        ],
        "'FALSE": [
          -1,
          288
        ],
        "'NULL": [
          -1,
          288
        ],
        "'PARENAFTERBRACE": [
          -1,
          288
        ],
        "'SIEVE": [
          -1,
          288
        ],
        "'ORDER": [
          -1,
          288
        ],
        "'EXTEND": [
          -1,
          288
        ],
        "'SELECT": [
          -1,
          288
        ],
        "'EXTRACT": [
          -1,
          288
        ],
        "'BLOCK": [
          -1,
          288
        ],
        "'TABLE": [
          -1,
          288
        ],
        "'ASK": [
          -1,
          288
        ],
        "'NEW": [
          -1,
          288
        ]
      },
      {
        "'NAME": [
          -1,
          290
        ],
        "'PARENNOSPACE": [
          -1,
          290
        ],
        "'STRING": [
          -1,
          290
        ],
        "'LBRACE": [
          -1,
          290
        ],
        "'RBRACE": [
          -1,
          290
        ],
        "'SPY": [
          -1,
          290
        ],
        "'PARENSPACE": [
          -1,
          290
        ],
        "'INT": [
          -1,
          290
        ],
        "'LONG": [
          -1,
          290
        ],
        "'DOUBLE": [
          -1,
          290
        ],
        "'FLOAT": [
          -1,
          290
        ],
        "'BOOLEAN": [
          -1,
          290
        ],
        "'VOID": [
          -1,
          290
        ],
        "'DATA": [
          -1,
          290
        ],
        "'IF": [
          -1,
          290
        ],
        "'FOR": [
          -1,
          290
        ],
        "'RETURN": [
          -1,
          290
        ],
        "'VAR": [
          -1,
          290
        ],
        "'REC": [
          -1,
          290
        ],
        "'ATCHECK": [
          -1,
          290
        ],
        "'ASSERTEQUALS": [
          -1,
          290
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          290
        ],
        "'ASSERTTRUE": [
          -1,
          290
        ],
        "'ASSERTFALSE": [
          -1,
          290
        ],
        "'ASSERTSATISFIES": [
          -1,
          290
        ],
        "'ASSERTRAISES": [
          -1,
          290
        ],
        "'SWITCH": [
          -1,
          290
        ],
        "'YIELD": [
          -1,
          290
        ],
        "'DASH": [
          -1,
          290
        ],
        "'BANG": [
          -1,
          290
        ],
        "'LBRACK": [
          -1,
          290
        ],
        "'NUMBER": [
          -1,
          290
        ],
        "'TRUE": [
          -1,
          290
        ],
        "'FALSE": [
          -1,
          290
        ],
        "'NULL": [
          -1,
          290
        ],
        "'PARENAFTERBRACE": [
          -1,
          290
        ],
        "'SIEVE": [
          -1,
          290
        ],
        "'ORDER": [
          -1,
          290
        ],
        "'EXTEND": [
          -1,
          290
        ],
        "'SELECT": [
          -1,
          290
        ],
        "'EXTRACT": [
          -1,
          290
        ],
        "'BLOCK": [
          -1,
          290
        ],
        "'TABLE": [
          -1,
          290
        ],
        "'ASK": [
          -1,
          290
        ],
        "'NEW": [
          -1,
          290
        ]
      },
      {
        "'NAME": [
          -1,
          292
        ],
        "'PARENNOSPACE": [
          -1,
          292
        ],
        "'STRING": [
          -1,
          292
        ],
        "'LBRACE": [
          -1,
          292
        ],
        "'RBRACE": [
          -1,
          292
        ],
        "'SPY": [
          -1,
          292
        ],
        "'PARENSPACE": [
          -1,
          292
        ],
        "'INT": [
          -1,
          292
        ],
        "'LONG": [
          -1,
          292
        ],
        "'DOUBLE": [
          -1,
          292
        ],
        "'FLOAT": [
          -1,
          292
        ],
        "'BOOLEAN": [
          -1,
          292
        ],
        "'VOID": [
          -1,
          292
        ],
        "'DATA": [
          -1,
          292
        ],
        "'IF": [
          -1,
          292
        ],
        "'FOR": [
          -1,
          292
        ],
        "'RETURN": [
          -1,
          292
        ],
        "'VAR": [
          -1,
          292
        ],
        "'REC": [
          -1,
          292
        ],
        "'ATCHECK": [
          -1,
          292
        ],
        "'ASSERTEQUALS": [
          -1,
          292
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          292
        ],
        "'ASSERTTRUE": [
          -1,
          292
        ],
        "'ASSERTFALSE": [
          -1,
          292
        ],
        "'ASSERTSATISFIES": [
          -1,
          292
        ],
        "'ASSERTRAISES": [
          -1,
          292
        ],
        "'SWITCH": [
          -1,
          292
        ],
        "'YIELD": [
          -1,
          292
        ],
        "'DASH": [
          -1,
          292
        ],
        "'BANG": [
          -1,
          292
        ],
        "'LBRACK": [
          -1,
          292
        ],
        "'NUMBER": [
          -1,
          292
        ],
        "'TRUE": [
          -1,
          292
        ],
        "'FALSE": [
          -1,
          292
        ],
        "'NULL": [
          -1,
          292
        ],
        "'PARENAFTERBRACE": [
          -1,
          292
        ],
        "'SIEVE": [
          -1,
          292
        ],
        "'ORDER": [
          -1,
          292
        ],
        "'EXTEND": [
          -1,
          292
        ],
        "'SELECT": [
          -1,
          292
        ],
        "'EXTRACT": [
          -1,
          292
        ],
        "'BLOCK": [
          -1,
          292
        ],
        "'TABLE": [
          -1,
          292
        ],
        "'ASK": [
          -1,
          292
        ],
        "'NEW": [
          -1,
          292
        ]
      },
      {
        "'NAME": [
          -1,
          294
        ],
        "'PARENNOSPACE": [
          -1,
          294
        ],
        "'STRING": [
          -1,
          294
        ],
        "'LBRACE": [
          -1,
          294
        ],
        "'RBRACE": [
          -1,
          294
        ],
        "'SPY": [
          -1,
          294
        ],
        "'PARENSPACE": [
          -1,
          294
        ],
        "'INT": [
          -1,
          294
        ],
        "'LONG": [
          -1,
          294
        ],
        "'DOUBLE": [
          -1,
          294
        ],
        "'FLOAT": [
          -1,
          294
        ],
        "'BOOLEAN": [
          -1,
          294
        ],
        "'VOID": [
          -1,
          294
        ],
        "'DATA": [
          -1,
          294
        ],
        "'IF": [
          -1,
          294
        ],
        "'FOR": [
          -1,
          294
        ],
        "'RETURN": [
          -1,
          294
        ],
        "'VAR": [
          -1,
          294
        ],
        "'REC": [
          -1,
          294
        ],
        "'ATCHECK": [
          -1,
          294
        ],
        "'ASSERTEQUALS": [
          -1,
          294
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          294
        ],
        "'ASSERTTRUE": [
          -1,
          294
        ],
        "'ASSERTFALSE": [
          -1,
          294
        ],
        "'ASSERTSATISFIES": [
          -1,
          294
        ],
        "'ASSERTRAISES": [
          -1,
          294
        ],
        "'SWITCH": [
          -1,
          294
        ],
        "'YIELD": [
          -1,
          294
        ],
        "'DASH": [
          -1,
          294
        ],
        "'BANG": [
          -1,
          294
        ],
        "'LBRACK": [
          -1,
          294
        ],
        "'NUMBER": [
          -1,
          294
        ],
        "'TRUE": [
          -1,
          294
        ],
        "'FALSE": [
          -1,
          294
        ],
        "'NULL": [
          -1,
          294
        ],
        "'PARENAFTERBRACE": [
          -1,
          294
        ],
        "'SIEVE": [
          -1,
          294
        ],
        "'ORDER": [
          -1,
          294
        ],
        "'EXTEND": [
          -1,
          294
        ],
        "'SELECT": [
          -1,
          294
        ],
        "'EXTRACT": [
          -1,
          294
        ],
        "'BLOCK": [
          -1,
          294
        ],
        "'TABLE": [
          -1,
          294
        ],
        "'ASK": [
          -1,
          294
        ],
        "'NEW": [
          -1,
          294
        ]
      },
      {
        "'PARENSPACE": [
          303
        ]
      },
      {
        "'NAME": [
          -1,
          296
        ],
        "'PARENNOSPACE": [
          -1,
          296
        ],
        "'STRING": [
          -1,
          296
        ],
        "'LBRACE": [
          -1,
          296
        ],
        "'RBRACE": [
          -1,
          296
        ],
        "'SPY": [
          -1,
          296
        ],
        "'PARENSPACE": [
          -1,
          296
        ],
        "'INT": [
          -1,
          296
        ],
        "'LONG": [
          -1,
          296
        ],
        "'DOUBLE": [
          -1,
          296
        ],
        "'FLOAT": [
          -1,
          296
        ],
        "'BOOLEAN": [
          -1,
          296
        ],
        "'VOID": [
          -1,
          296
        ],
        "'DATA": [
          -1,
          296
        ],
        "'IF": [
          -1,
          296
        ],
        "'FOR": [
          -1,
          296
        ],
        "'RETURN": [
          -1,
          296
        ],
        "'VAR": [
          -1,
          296
        ],
        "'REC": [
          -1,
          296
        ],
        "'ATCHECK": [
          -1,
          296
        ],
        "'ASSERTEQUALS": [
          -1,
          296
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          296
        ],
        "'ASSERTTRUE": [
          -1,
          296
        ],
        "'ASSERTFALSE": [
          -1,
          296
        ],
        "'ASSERTSATISFIES": [
          -1,
          296
        ],
        "'ASSERTRAISES": [
          -1,
          296
        ],
        "'SWITCH": [
          -1,
          296
        ],
        "'YIELD": [
          -1,
          296
        ],
        "'DASH": [
          -1,
          296
        ],
        "'BANG": [
          -1,
          296
        ],
        "'LBRACK": [
          -1,
          296
        ],
        "'NUMBER": [
          -1,
          296
        ],
        "'TRUE": [
          -1,
          296
        ],
        "'FALSE": [
          -1,
          296
        ],
        "'NULL": [
          -1,
          296
        ],
        "'PARENAFTERBRACE": [
          -1,
          296
        ],
        "'SIEVE": [
          -1,
          296
        ],
        "'ORDER": [
          -1,
          296
        ],
        "'EXTEND": [
          -1,
          296
        ],
        "'SELECT": [
          -1,
          296
        ],
        "'EXTRACT": [
          -1,
          296
        ],
        "'BLOCK": [
          -1,
          296
        ],
        "'TABLE": [
          -1,
          296
        ],
        "'ASK": [
          -1,
          296
        ],
        "'NEW": [
          -1,
          296
        ]
      },
      {
        "'PARENSPACE": [
          304
        ]
      },
      {
        "'SEMI": [
          98
        ],
        "expr-stmt_I1?": [
          99
        ],
        "expr-stmt_I1": [
          100
        ],
        "'IS": [
          305
        ],
        "'ISNOT": [
          306
        ],
        "'SATISFIES": [
          307
        ],
        "'RAISES": [
          308
        ],
        "'NAME": [
          -1,
          68,
          70
        ],
        "'PARENNOSPACE": [
          -1,
          68,
          70
        ],
        "'STRING": [
          -1,
          68,
          70
        ],
        "'LBRACE": [
          -1,
          68,
          70
        ],
        "'RBRACE": [
          -1,
          68,
          70
        ],
        "'SPY": [
          -1,
          68,
          70
        ],
        "'PARENSPACE": [
          -1,
          68,
          70
        ],
        "'INT": [
          -1,
          68,
          70
        ],
        "'LONG": [
          -1,
          68,
          70
        ],
        "'DOUBLE": [
          -1,
          68,
          70
        ],
        "'FLOAT": [
          -1,
          68,
          70
        ],
        "'BOOLEAN": [
          -1,
          68,
          70
        ],
        "'VOID": [
          -1,
          68,
          70
        ],
        "'DATA": [
          -1,
          68,
          70
        ],
        "'IF": [
          -1,
          68,
          70
        ],
        "'FOR": [
          -1,
          68,
          70
        ],
        "'RETURN": [
          -1,
          68,
          70
        ],
        "'VAR": [
          -1,
          68,
          70
        ],
        "'REC": [
          -1,
          68,
          70
        ],
        "'ATCHECK": [
          -1,
          68,
          70
        ],
        "'ASSERTEQUALS": [
          -1,
          68,
          70
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          68,
          70
        ],
        "'ASSERTTRUE": [
          -1,
          68,
          70
        ],
        "'ASSERTFALSE": [
          -1,
          68,
          70
        ],
        "'ASSERTSATISFIES": [
          -1,
          68,
          70
        ],
        "'ASSERTRAISES": [
          -1,
          68,
          70
        ],
        "'SWITCH": [
          -1,
          68,
          70
        ],
        "'YIELD": [
          -1,
          68,
          70
        ],
        "'DASH": [
          -1,
          68,
          70
        ],
        "'BANG": [
          -1,
          68,
          70
        ],
        "'LBRACK": [
          -1,
          68,
          70
        ],
        "'NUMBER": [
          -1,
          68,
          70
        ],
        "'TRUE": [
          -1,
          68,
          70
        ],
        "'FALSE": [
          -1,
          68,
          70
        ],
        "'NULL": [
          -1,
          68,
          70
        ],
        "'PARENAFTERBRACE": [
          -1,
          68,
          70
        ],
        "'SIEVE": [
          -1,
          68,
          70
        ],
        "'ORDER": [
          -1,
          68,
          70
        ],
        "'EXTEND": [
          -1,
          68,
          70
        ],
        "'SELECT": [
          -1,
          68,
          70
        ],
        "'EXTRACT": [
          -1,
          68,
          70
        ],
        "'BLOCK": [
          -1,
          68,
          70
        ],
        "'TABLE": [
          -1,
          68,
          70
        ],
        "'ASK": [
          -1,
          68,
          70
        ],
        "'NEW": [
          -1,
          68,
          70
        ]
      },
      {
        "'PARENSPACE": [
          309
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'SEMI": [
          310
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          311
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          -1,
          298
        ],
        "'PARENNOSPACE": [
          -1,
          298
        ],
        "'STRING": [
          -1,
          298
        ],
        "'LBRACE": [
          -1,
          298
        ],
        "'RBRACE": [
          -1,
          298
        ],
        "'SPY": [
          -1,
          298
        ],
        "'PARENSPACE": [
          -1,
          298
        ],
        "'INT": [
          -1,
          298
        ],
        "'LONG": [
          -1,
          298
        ],
        "'DOUBLE": [
          -1,
          298
        ],
        "'FLOAT": [
          -1,
          298
        ],
        "'BOOLEAN": [
          -1,
          298
        ],
        "'VOID": [
          -1,
          298
        ],
        "'DATA": [
          -1,
          298
        ],
        "'IF": [
          -1,
          298
        ],
        "'FOR": [
          -1,
          298
        ],
        "'RETURN": [
          -1,
          298
        ],
        "'VAR": [
          -1,
          298
        ],
        "'REC": [
          -1,
          298
        ],
        "'ATCHECK": [
          -1,
          298
        ],
        "'ASSERTEQUALS": [
          -1,
          298
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          298
        ],
        "'ASSERTTRUE": [
          -1,
          298
        ],
        "'ASSERTFALSE": [
          -1,
          298
        ],
        "'ASSERTSATISFIES": [
          -1,
          298
        ],
        "'ASSERTRAISES": [
          -1,
          298
        ],
        "'SWITCH": [
          -1,
          298
        ],
        "'YIELD": [
          -1,
          298
        ],
        "'DASH": [
          -1,
          298
        ],
        "'BANG": [
          -1,
          298
        ],
        "'LBRACK": [
          -1,
          298
        ],
        "'NUMBER": [
          -1,
          298
        ],
        "'TRUE": [
          -1,
          298
        ],
        "'FALSE": [
          -1,
          298
        ],
        "'NULL": [
          -1,
          298
        ],
        "'PARENAFTERBRACE": [
          -1,
          298
        ],
        "'SIEVE": [
          -1,
          298
        ],
        "'ORDER": [
          -1,
          298
        ],
        "'EXTEND": [
          -1,
          298
        ],
        "'SELECT": [
          -1,
          298
        ],
        "'EXTRACT": [
          -1,
          298
        ],
        "'BLOCK": [
          -1,
          298
        ],
        "'TABLE": [
          -1,
          298
        ],
        "'ASK": [
          -1,
          298
        ],
        "'NEW": [
          -1,
          298
        ]
      },
      {
        "'PARENNOSPACE": [
          312
        ]
      },
      {
        "'PARENNOSPACE": [
          313
        ]
      },
      {
        "'PARENNOSPACE": [
          314
        ]
      },
      {
        "'PARENNOSPACE": [
          315
        ]
      },
      {
        "'PARENNOSPACE": [
          316
        ]
      },
      {
        "'PARENNOSPACE": [
          317
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          318
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'RPAREN": [
          319
        ]
      },
      {
        "'LBRACE": [
          320
        ]
      },
      {
        "$": [
          -1,
          300
        ],
        "'NAME": [
          -1,
          300
        ],
        "'SEMI": [
          -1,
          300
        ],
        "'PARENNOSPACE": [
          -1,
          300
        ],
        "'STRING": [
          -1,
          300
        ],
        "'RPAREN": [
          -1,
          300
        ],
        "'LBRACE": [
          -1,
          300
        ],
        "'RBRACE": [
          -1,
          300
        ],
        "'SPY": [
          -1,
          300
        ],
        "'PARENSPACE": [
          -1,
          300
        ],
        "'COMMA": [
          -1,
          300
        ],
        "'INT": [
          -1,
          300
        ],
        "'LONG": [
          -1,
          300
        ],
        "'DOUBLE": [
          -1,
          300
        ],
        "'FLOAT": [
          -1,
          300
        ],
        "'BOOLEAN": [
          -1,
          300
        ],
        "'VOID": [
          -1,
          300
        ],
        "'LT": [
          -1,
          300
        ],
        "'GT": [
          -1,
          300
        ],
        "'THINARROW": [
          -1,
          300
        ],
        "'DATA": [
          -1,
          300
        ],
        "'IF": [
          -1,
          300
        ],
        "'FOR": [
          -1,
          300
        ],
        "'RETURN": [
          -1,
          300
        ],
        "'VAR": [
          -1,
          300
        ],
        "'REC": [
          -1,
          300
        ],
        "'ATCHECK": [
          -1,
          300
        ],
        "'ASSERTEQUALS": [
          -1,
          300
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          300
        ],
        "'ASSERTTRUE": [
          -1,
          300
        ],
        "'ASSERTFALSE": [
          -1,
          300
        ],
        "'ASSERTSATISFIES": [
          -1,
          300
        ],
        "'ASSERTRAISES": [
          -1,
          300
        ],
        "'IS": [
          -1,
          300
        ],
        "'ISNOT": [
          -1,
          300
        ],
        "'SATISFIES": [
          -1,
          300
        ],
        "'RAISES": [
          -1,
          300
        ],
        "'SWITCH": [
          -1,
          300
        ],
        "'CASE": [
          -1,
          300
        ],
        "'DEFAULT": [
          -1,
          300
        ],
        "'YIELD": [
          -1,
          300
        ],
        "'PLUS": [
          -1,
          300
        ],
        "'DASH": [
          -1,
          300
        ],
        "'TIMES": [
          -1,
          300
        ],
        "'SLASH": [
          -1,
          300
        ],
        "'PERCENT": [
          -1,
          300
        ],
        "'EQUALEQUAL": [
          -1,
          300
        ],
        "'NEQ": [
          -1,
          300
        ],
        "'LEQ": [
          -1,
          300
        ],
        "'GEQ": [
          -1,
          300
        ],
        "'AND": [
          -1,
          300
        ],
        "'OR": [
          -1,
          300
        ],
        "'BANG": [
          -1,
          300
        ],
        "'DOT": [
          -1,
          300
        ],
        "'LBRACK": [
          -1,
          300
        ],
        "'RBRACK": [
          -1,
          300
        ],
        "'NUMBER": [
          -1,
          300
        ],
        "'TRUE": [
          -1,
          300
        ],
        "'FALSE": [
          -1,
          300
        ],
        "'NULL": [
          -1,
          300
        ],
        "'PARENAFTERBRACE": [
          -1,
          300
        ],
        "'SIEVE": [
          -1,
          300
        ],
        "'USING": [
          -1,
          300
        ],
        "'ORDER": [
          -1,
          300
        ],
        "'EXTEND": [
          -1,
          300
        ],
        "'SELECT": [
          -1,
          300
        ],
        "'EXTRACT": [
          -1,
          300
        ],
        "'BLOCK": [
          -1,
          300
        ],
        "'TABLE": [
          -1,
          300
        ],
        "'ASK": [
          -1,
          300
        ],
        "'NEW": [
          -1,
          300
        ]
      },
      {
        "'COMMA": [
          321
        ],
        "app-or-access_A0_I2_I1": [
          322
        ],
        "'RPAREN": [
          -1,
          302
        ]
      },
      {
        "$": [
          -1,
          304
        ],
        "'NAME": [
          -1,
          304
        ],
        "'SEMI": [
          -1,
          304
        ],
        "'PARENNOSPACE": [
          -1,
          304
        ],
        "'STRING": [
          -1,
          304
        ],
        "'RPAREN": [
          -1,
          304
        ],
        "'LBRACE": [
          -1,
          304
        ],
        "'RBRACE": [
          -1,
          304
        ],
        "'SPY": [
          -1,
          304
        ],
        "'PARENSPACE": [
          -1,
          304
        ],
        "'COMMA": [
          -1,
          304
        ],
        "'INT": [
          -1,
          304
        ],
        "'LONG": [
          -1,
          304
        ],
        "'DOUBLE": [
          -1,
          304
        ],
        "'FLOAT": [
          -1,
          304
        ],
        "'BOOLEAN": [
          -1,
          304
        ],
        "'VOID": [
          -1,
          304
        ],
        "'LT": [
          -1,
          304
        ],
        "'GT": [
          -1,
          304
        ],
        "'THINARROW": [
          -1,
          304
        ],
        "'DATA": [
          -1,
          304
        ],
        "'IF": [
          -1,
          304
        ],
        "'FOR": [
          -1,
          304
        ],
        "'RETURN": [
          -1,
          304
        ],
        "'VAR": [
          -1,
          304
        ],
        "'REC": [
          -1,
          304
        ],
        "'ATCHECK": [
          -1,
          304
        ],
        "'ASSERTEQUALS": [
          -1,
          304
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          304
        ],
        "'ASSERTTRUE": [
          -1,
          304
        ],
        "'ASSERTFALSE": [
          -1,
          304
        ],
        "'ASSERTSATISFIES": [
          -1,
          304
        ],
        "'ASSERTRAISES": [
          -1,
          304
        ],
        "'IS": [
          -1,
          304
        ],
        "'ISNOT": [
          -1,
          304
        ],
        "'SATISFIES": [
          -1,
          304
        ],
        "'RAISES": [
          -1,
          304
        ],
        "'SWITCH": [
          -1,
          304
        ],
        "'CASE": [
          -1,
          304
        ],
        "'DEFAULT": [
          -1,
          304
        ],
        "'YIELD": [
          -1,
          304
        ],
        "'PLUS": [
          -1,
          304
        ],
        "'DASH": [
          -1,
          304
        ],
        "'TIMES": [
          -1,
          304
        ],
        "'SLASH": [
          -1,
          304
        ],
        "'PERCENT": [
          -1,
          304
        ],
        "'EQUALEQUAL": [
          -1,
          304
        ],
        "'NEQ": [
          -1,
          304
        ],
        "'LEQ": [
          -1,
          304
        ],
        "'GEQ": [
          -1,
          304
        ],
        "'AND": [
          -1,
          304
        ],
        "'OR": [
          -1,
          304
        ],
        "'BANG": [
          -1,
          304
        ],
        "'DOT": [
          -1,
          304
        ],
        "'LBRACK": [
          -1,
          304
        ],
        "'RBRACK": [
          -1,
          304
        ],
        "'NUMBER": [
          -1,
          304
        ],
        "'TRUE": [
          -1,
          304
        ],
        "'FALSE": [
          -1,
          304
        ],
        "'NULL": [
          -1,
          304
        ],
        "'PARENAFTERBRACE": [
          -1,
          304
        ],
        "'SIEVE": [
          -1,
          304
        ],
        "'USING": [
          -1,
          304
        ],
        "'ORDER": [
          -1,
          304
        ],
        "'EXTEND": [
          -1,
          304
        ],
        "'SELECT": [
          -1,
          304
        ],
        "'EXTRACT": [
          -1,
          304
        ],
        "'BLOCK": [
          -1,
          304
        ],
        "'TABLE": [
          -1,
          304
        ],
        "'ASK": [
          -1,
          304
        ],
        "'NEW": [
          -1,
          304
        ]
      },
      {
        "$": [
          -1,
          306
        ],
        "'NAME": [
          -1,
          306
        ],
        "'SEMI": [
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
        "'RPAREN": [
          -1,
          306
        ],
        "'LBRACE": [
          -1,
          306
        ],
        "'RBRACE": [
          -1,
          306
        ],
        "'SPY": [
          -1,
          306
        ],
        "'PARENSPACE": [
          -1,
          306
        ],
        "'COMMA": [
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
        "'LT": [
          -1,
          306
        ],
        "'GT": [
          -1,
          306
        ],
        "'THINARROW": [
          -1,
          306
        ],
        "'DATA": [
          -1,
          306
        ],
        "'IF": [
          -1,
          306
        ],
        "'FOR": [
          -1,
          306
        ],
        "'RETURN": [
          -1,
          306
        ],
        "'VAR": [
          -1,
          306
        ],
        "'REC": [
          -1,
          306
        ],
        "'ATCHECK": [
          -1,
          306
        ],
        "'ASSERTEQUALS": [
          -1,
          306
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          306
        ],
        "'ASSERTTRUE": [
          -1,
          306
        ],
        "'ASSERTFALSE": [
          -1,
          306
        ],
        "'ASSERTSATISFIES": [
          -1,
          306
        ],
        "'ASSERTRAISES": [
          -1,
          306
        ],
        "'IS": [
          -1,
          306
        ],
        "'ISNOT": [
          -1,
          306
        ],
        "'SATISFIES": [
          -1,
          306
        ],
        "'RAISES": [
          -1,
          306
        ],
        "'SWITCH": [
          -1,
          306
        ],
        "'CASE": [
          -1,
          306
        ],
        "'DEFAULT": [
          -1,
          306
        ],
        "'YIELD": [
          -1,
          306
        ],
        "'PLUS": [
          -1,
          306
        ],
        "'DASH": [
          -1,
          306
        ],
        "'TIMES": [
          -1,
          306
        ],
        "'SLASH": [
          -1,
          306
        ],
        "'PERCENT": [
          -1,
          306
        ],
        "'EQUALEQUAL": [
          -1,
          306
        ],
        "'NEQ": [
          -1,
          306
        ],
        "'LEQ": [
          -1,
          306
        ],
        "'GEQ": [
          -1,
          306
        ],
        "'AND": [
          -1,
          306
        ],
        "'OR": [
          -1,
          306
        ],
        "'BANG": [
          -1,
          306
        ],
        "'DOT": [
          -1,
          306
        ],
        "'LBRACK": [
          -1,
          306
        ],
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          306
        ],
        "'USING": [
          -1,
          306
        ],
        "'ORDER": [
          -1,
          306
        ],
        "'EXTEND": [
          -1,
          306
        ],
        "'SELECT": [
          -1,
          306
        ],
        "'EXTRACT": [
          -1,
          306
        ],
        "'BLOCK": [
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
        "construct-expr_A0_I3_I1*": [
          323
        ],
        "'COMMA": [
          -1,
          308
        ],
        "'RBRACK": [
          -1,
          310,
          308
        ]
      },
      {
        "'RBRACK": [
          324
        ]
      },
      {
        "'RBRACK": [
          -1,
          312
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          325
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "for-bind": [
          326
        ]
      },
      {
        "'NAME": [
          327
        ]
      },
      {
        "sieve-expr_I4*": [
          328
        ],
        "'LBRACE": [
          -1,
          314
        ],
        "'COMMA": [
          -1,
          314
        ]
      },
      {
        "'ASCENDING": [
          329
        ],
        "'DESCENDING": [
          330
        ]
      },
      {
        "order-expr_I4*": [
          331
        ],
        "'SEMI": [
          -1,
          316
        ],
        "'RBRACE": [
          -1,
          316
        ]
      },
      {
        "extend-expr_I4*": [
          332
        ],
        "'LBRACE": [
          -1,
          318
        ],
        "'COMMA": [
          -1,
          318
        ]
      },
      {
        "'NAME": [
          333
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          334
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'COMMA": [
          -1,
          320
        ],
        "'FROM": [
          -1,
          320
        ]
      },
      {
        "$": [
          -1,
          322
        ],
        "'NAME": [
          -1,
          322
        ],
        "'SEMI": [
          -1,
          322
        ],
        "'PARENNOSPACE": [
          -1,
          322
        ],
        "'STRING": [
          -1,
          322
        ],
        "'RPAREN": [
          -1,
          322
        ],
        "'LBRACE": [
          -1,
          322
        ],
        "'RBRACE": [
          -1,
          322
        ],
        "'SPY": [
          -1,
          322
        ],
        "'PARENSPACE": [
          -1,
          322
        ],
        "'COMMA": [
          -1,
          322
        ],
        "'INT": [
          -1,
          322
        ],
        "'LONG": [
          -1,
          322
        ],
        "'DOUBLE": [
          -1,
          322
        ],
        "'FLOAT": [
          -1,
          322
        ],
        "'BOOLEAN": [
          -1,
          322
        ],
        "'VOID": [
          -1,
          322
        ],
        "'LT": [
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
        ],
        "'DATA": [
          -1,
          322
        ],
        "'IF": [
          -1,
          322
        ],
        "'FOR": [
          -1,
          322
        ],
        "'RETURN": [
          -1,
          322
        ],
        "'VAR": [
          -1,
          322
        ],
        "'REC": [
          -1,
          322
        ],
        "'ATCHECK": [
          -1,
          322
        ],
        "'ASSERTEQUALS": [
          -1,
          322
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          322
        ],
        "'ASSERTTRUE": [
          -1,
          322
        ],
        "'ASSERTFALSE": [
          -1,
          322
        ],
        "'ASSERTSATISFIES": [
          -1,
          322
        ],
        "'ASSERTRAISES": [
          -1,
          322
        ],
        "'IS": [
          -1,
          322
        ],
        "'ISNOT": [
          -1,
          322
        ],
        "'SATISFIES": [
          -1,
          322
        ],
        "'RAISES": [
          -1,
          322
        ],
        "'SWITCH": [
          -1,
          322
        ],
        "'CASE": [
          -1,
          322
        ],
        "'DEFAULT": [
          -1,
          322
        ],
        "'YIELD": [
          -1,
          322
        ],
        "'PLUS": [
          -1,
          322
        ],
        "'DASH": [
          -1,
          322
        ],
        "'TIMES": [
          -1,
          322
        ],
        "'SLASH": [
          -1,
          322
        ],
        "'PERCENT": [
          -1,
          322
        ],
        "'EQUALEQUAL": [
          -1,
          322
        ],
        "'NEQ": [
          -1,
          322
        ],
        "'LEQ": [
          -1,
          322
        ],
        "'GEQ": [
          -1,
          322
        ],
        "'AND": [
          -1,
          322
        ],
        "'OR": [
          -1,
          322
        ],
        "'BANG": [
          -1,
          322
        ],
        "'DOT": [
          -1,
          322
        ],
        "'LBRACK": [
          -1,
          322
        ],
        "'RBRACK": [
          -1,
          322
        ],
        "'NUMBER": [
          -1,
          322
        ],
        "'TRUE": [
          -1,
          322
        ],
        "'FALSE": [
          -1,
          322
        ],
        "'NULL": [
          -1,
          322
        ],
        "'PARENAFTERBRACE": [
          -1,
          322
        ],
        "'SIEVE": [
          -1,
          322
        ],
        "'USING": [
          -1,
          322
        ],
        "'ORDER": [
          -1,
          322
        ],
        "'EXTEND": [
          -1,
          322
        ],
        "'SELECT": [
          -1,
          322
        ],
        "'EXTRACT": [
          -1,
          322
        ],
        "'BLOCK": [
          -1,
          322
        ],
        "'TABLE": [
          -1,
          322
        ],
        "'ASK": [
          -1,
          322
        ],
        "'NEW": [
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
        "'LT": [
          -1,
          324
        ],
        "'GT": [
          -1,
          324
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'PLUS": [
          -1,
          324
        ],
        "'DASH": [
          -1,
          324
        ],
        "'TIMES": [
          -1,
          324
        ],
        "'SLASH": [
          -1,
          324
        ],
        "'PERCENT": [
          -1,
          324
        ],
        "'EQUALEQUAL": [
          -1,
          324
        ],
        "'NEQ": [
          -1,
          324
        ],
        "'LEQ": [
          -1,
          324
        ],
        "'GEQ": [
          -1,
          324
        ],
        "'AND": [
          -1,
          324
        ],
        "'OR": [
          -1,
          324
        ],
        "'BANG": [
          -1,
          324
        ],
        "'DOT": [
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
        "'SIEVE": [
          -1,
          324
        ],
        "'USING": [
          -1,
          324
        ],
        "'ORDER": [
          -1,
          324
        ],
        "'EXTEND": [
          -1,
          324
        ],
        "'SELECT": [
          -1,
          324
        ],
        "'EXTRACT": [
          -1,
          324
        ],
        "'BLOCK": [
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
        "'NAME": [
          -1,
          326
        ],
        "'PARENNOSPACE": [
          -1,
          326
        ],
        "'STRING": [
          -1,
          326
        ],
        "'LBRACE": [
          -1,
          326
        ],
        "'RBRACE": [
          -1,
          326
        ],
        "'SPY": [
          -1,
          326
        ],
        "'PARENSPACE": [
          -1,
          326
        ],
        "'INT": [
          -1,
          326
        ],
        "'LONG": [
          -1,
          326
        ],
        "'DOUBLE": [
          -1,
          326
        ],
        "'FLOAT": [
          -1,
          326
        ],
        "'BOOLEAN": [
          -1,
          326
        ],
        "'VOID": [
          -1,
          326
        ],
        "'DATA": [
          -1,
          326
        ],
        "'IF": [
          -1,
          326
        ],
        "'FOR": [
          -1,
          326
        ],
        "'RETURN": [
          -1,
          326
        ],
        "'VAR": [
          -1,
          326
        ],
        "'REC": [
          -1,
          326
        ],
        "'ATCHECK": [
          -1,
          326
        ],
        "'SWITCH": [
          -1,
          326
        ],
        "'YIELD": [
          -1,
          326
        ],
        "'DASH": [
          -1,
          326
        ],
        "'BANG": [
          -1,
          326
        ],
        "'LBRACK": [
          -1,
          326
        ],
        "'NUMBER": [
          -1,
          326
        ],
        "'TRUE": [
          -1,
          326
        ],
        "'FALSE": [
          -1,
          326
        ],
        "'NULL": [
          -1,
          326
        ],
        "'PARENAFTERBRACE": [
          -1,
          326
        ],
        "'SIEVE": [
          -1,
          326
        ],
        "'ORDER": [
          -1,
          326
        ],
        "'EXTEND": [
          -1,
          326
        ],
        "'SELECT": [
          -1,
          326
        ],
        "'EXTRACT": [
          -1,
          326
        ],
        "'BLOCK": [
          -1,
          326
        ],
        "'TABLE": [
          -1,
          326
        ],
        "'ASK": [
          -1,
          326
        ],
        "'NEW": [
          -1,
          326
        ]
      },
      {
        "'NAME": [
          -1,
          328
        ],
        "'PARENNOSPACE": [
          -1,
          328
        ],
        "'STRING": [
          -1,
          328
        ],
        "'LBRACE": [
          -1,
          328
        ],
        "'RBRACE": [
          -1,
          328
        ],
        "'SPY": [
          -1,
          328
        ],
        "'PARENSPACE": [
          -1,
          328
        ],
        "'INT": [
          -1,
          328
        ],
        "'LONG": [
          -1,
          328
        ],
        "'DOUBLE": [
          -1,
          328
        ],
        "'FLOAT": [
          -1,
          328
        ],
        "'BOOLEAN": [
          -1,
          328
        ],
        "'VOID": [
          -1,
          328
        ],
        "'DATA": [
          -1,
          328
        ],
        "'IF": [
          -1,
          328
        ],
        "'FOR": [
          -1,
          328
        ],
        "'RETURN": [
          -1,
          328
        ],
        "'VAR": [
          -1,
          328
        ],
        "'REC": [
          -1,
          328
        ],
        "'ATCHECK": [
          -1,
          328
        ],
        "'SWITCH": [
          -1,
          328
        ],
        "'YIELD": [
          -1,
          328
        ],
        "'DASH": [
          -1,
          328
        ],
        "'BANG": [
          -1,
          328
        ],
        "'LBRACK": [
          -1,
          328
        ],
        "'NUMBER": [
          -1,
          328
        ],
        "'TRUE": [
          -1,
          328
        ],
        "'FALSE": [
          -1,
          328
        ],
        "'NULL": [
          -1,
          328
        ],
        "'PARENAFTERBRACE": [
          -1,
          328
        ],
        "'SIEVE": [
          -1,
          328
        ],
        "'ORDER": [
          -1,
          328
        ],
        "'EXTEND": [
          -1,
          328
        ],
        "'SELECT": [
          -1,
          328
        ],
        "'EXTRACT": [
          -1,
          328
        ],
        "'BLOCK": [
          -1,
          328
        ],
        "'TABLE": [
          -1,
          328
        ],
        "'ASK": [
          -1,
          328
        ],
        "'NEW": [
          -1,
          328
        ]
      },
      {
        "'SEMI": [
          -1,
          330
        ],
        "'COMMA": [
          -1,
          330
        ]
      },
      {
        "'SEMI": [
          335
        ],
        "'COMMA": [
          336
        ],
        "table-expr_I3": [
          337
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          338
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "ask-expr_A0_I4*": [
          339
        ],
        "ask-expr_A1_I4*": [
          340
        ],
        "'NAME": [
          -1,
          332,
          334
        ],
        "'STRING": [
          -1,
          332,
          334
        ],
        "'LBRACE": [
          -1,
          332,
          334
        ],
        "'RBRACE": [
          -1,
          332
        ],
        "'PARENSPACE": [
          -1,
          332,
          334
        ],
        "'SWITCH": [
          -1,
          332,
          334
        ],
        "'DASH": [
          -1,
          332,
          334
        ],
        "'BANG": [
          -1,
          332,
          334
        ],
        "'LBRACK": [
          -1,
          332,
          334
        ],
        "'NUMBER": [
          -1,
          332,
          334
        ],
        "'TRUE": [
          -1,
          332,
          334
        ],
        "'FALSE": [
          -1,
          332,
          334
        ],
        "'NULL": [
          -1,
          332,
          334
        ],
        "'PARENAFTERBRACE": [
          -1,
          332,
          334
        ],
        "'SIEVE": [
          -1,
          332,
          334
        ],
        "'ORDER": [
          -1,
          332,
          334
        ],
        "'EXTEND": [
          -1,
          332,
          334
        ],
        "'SELECT": [
          -1,
          332,
          334
        ],
        "'EXTRACT": [
          -1,
          332,
          334
        ],
        "'BLOCK": [
          -1,
          332,
          334
        ],
        "'TABLE": [
          -1,
          332,
          334
        ],
        "'ASK": [
          -1,
          332,
          334
        ],
        "'OTHERWISE": [
          -1,
          334
        ],
        "'NEW": [
          -1,
          332,
          334
        ]
      },
      {
        "new-expr_I3_I1*": [
          341
        ],
        "'RPAREN": [
          -1,
          336,
          338
        ],
        "'COMMA": [
          -1,
          338
        ]
      },
      {
        "'RPAREN": [
          342
        ]
      },
      {
        "'RPAREN": [
          -1,
          340
        ]
      },
      {
        "$": [
          -1,
          342
        ],
        "'IMPORT": [
          -1,
          342
        ],
        "'NAME": [
          -1,
          342
        ],
        "'PARENNOSPACE": [
          -1,
          342
        ],
        "'STRING": [
          -1,
          342
        ],
        "'INCLUDE": [
          -1,
          342
        ],
        "'LBRACE": [
          -1,
          342
        ],
        "'PARENSPACE": [
          -1,
          342
        ],
        "'INT": [
          -1,
          342
        ],
        "'LONG": [
          -1,
          342
        ],
        "'DOUBLE": [
          -1,
          342
        ],
        "'FLOAT": [
          -1,
          342
        ],
        "'BOOLEAN": [
          -1,
          342
        ],
        "'VOID": [
          -1,
          342
        ],
        "'DATA": [
          -1,
          342
        ],
        "'VAR": [
          -1,
          342
        ],
        "'REC": [
          -1,
          342
        ],
        "'ATCHECK": [
          -1,
          342
        ],
        "'SWITCH": [
          -1,
          342
        ],
        "'DASH": [
          -1,
          342
        ],
        "'BANG": [
          -1,
          342
        ],
        "'LBRACK": [
          -1,
          342
        ],
        "'NUMBER": [
          -1,
          342
        ],
        "'TRUE": [
          -1,
          342
        ],
        "'FALSE": [
          -1,
          342
        ],
        "'NULL": [
          -1,
          342
        ],
        "'PARENAFTERBRACE": [
          -1,
          342
        ],
        "'SIEVE": [
          -1,
          342
        ],
        "'ORDER": [
          -1,
          342
        ],
        "'EXTEND": [
          -1,
          342
        ],
        "'SELECT": [
          -1,
          342
        ],
        "'EXTRACT": [
          -1,
          342
        ],
        "'BLOCK": [
          -1,
          342
        ],
        "'TABLE": [
          -1,
          342
        ],
        "'ASK": [
          -1,
          342
        ],
        "'NEW": [
          -1,
          342
        ]
      },
      {
        "'SEMI": [
          343
        ],
        "'AS": [
          344
        ]
      },
      {
        "$": [
          -1,
          344
        ],
        "'IMPORT": [
          -1,
          344
        ],
        "'NAME": [
          -1,
          344
        ],
        "'PARENNOSPACE": [
          -1,
          344
        ],
        "'STRING": [
          -1,
          344
        ],
        "'INCLUDE": [
          -1,
          344
        ],
        "'LBRACE": [
          -1,
          344
        ],
        "'PARENSPACE": [
          -1,
          344
        ],
        "'INT": [
          -1,
          344
        ],
        "'LONG": [
          -1,
          344
        ],
        "'DOUBLE": [
          -1,
          344
        ],
        "'FLOAT": [
          -1,
          344
        ],
        "'BOOLEAN": [
          -1,
          344
        ],
        "'VOID": [
          -1,
          344
        ],
        "'DATA": [
          -1,
          344
        ],
        "'VAR": [
          -1,
          344
        ],
        "'REC": [
          -1,
          344
        ],
        "'ATCHECK": [
          -1,
          344
        ],
        "'SWITCH": [
          -1,
          344
        ],
        "'DASH": [
          -1,
          344
        ],
        "'BANG": [
          -1,
          344
        ],
        "'LBRACK": [
          -1,
          344
        ],
        "'NUMBER": [
          -1,
          344
        ],
        "'TRUE": [
          -1,
          344
        ],
        "'FALSE": [
          -1,
          344
        ],
        "'NULL": [
          -1,
          344
        ],
        "'PARENAFTERBRACE": [
          -1,
          344
        ],
        "'SIEVE": [
          -1,
          344
        ],
        "'ORDER": [
          -1,
          344
        ],
        "'EXTEND": [
          -1,
          344
        ],
        "'SELECT": [
          -1,
          344
        ],
        "'EXTRACT": [
          -1,
          344
        ],
        "'BLOCK": [
          -1,
          344
        ],
        "'TABLE": [
          -1,
          344
        ],
        "'ASK": [
          -1,
          344
        ],
        "'NEW": [
          -1,
          344
        ]
      },
      {
        "'SEMI": [
          345
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          346
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'NAME": [
          -1,
          346
        ],
        "'RPAREN": [
          -1,
          346
        ],
        "'COMMA": [
          -1,
          346
        ],
        "'GT": [
          -1,
          346
        ],
        "'THINARROW": [
          -1,
          346
        ]
      },
      {
        "'COMMA": [
          -1,
          348
        ],
        "'GT": [
          -1,
          348
        ]
      },
      {
        "'RPAREN": [
          -1,
          350
        ],
        "'COMMA": [
          -1,
          350
        ]
      },
      {
        "$": [
          -1,
          352
        ],
        "'NAME": [
          -1,
          352
        ],
        "'SEMI": [
          -1,
          352
        ],
        "'PARENNOSPACE": [
          -1,
          352
        ],
        "'STRING": [
          -1,
          352
        ],
        "'RPAREN": [
          -1,
          352
        ],
        "'LBRACE": [
          -1,
          352
        ],
        "'RBRACE": [
          -1,
          352
        ],
        "'SPY": [
          -1,
          352
        ],
        "'PARENSPACE": [
          -1,
          352
        ],
        "'COMMA": [
          -1,
          352
        ],
        "'INT": [
          -1,
          352
        ],
        "'LONG": [
          -1,
          352
        ],
        "'DOUBLE": [
          -1,
          352
        ],
        "'FLOAT": [
          -1,
          352
        ],
        "'BOOLEAN": [
          -1,
          352
        ],
        "'VOID": [
          -1,
          352
        ],
        "'LT": [
          -1,
          352
        ],
        "'GT": [
          -1,
          352
        ],
        "'THINARROW": [
          -1,
          352
        ],
        "'DATA": [
          -1,
          352
        ],
        "'IF": [
          -1,
          352
        ],
        "'FOR": [
          -1,
          352
        ],
        "'RETURN": [
          -1,
          352
        ],
        "'VAR": [
          -1,
          352
        ],
        "'REC": [
          -1,
          352
        ],
        "'ATCHECK": [
          -1,
          352
        ],
        "'ASSERTEQUALS": [
          -1,
          352
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          352
        ],
        "'ASSERTTRUE": [
          -1,
          352
        ],
        "'ASSERTFALSE": [
          -1,
          352
        ],
        "'ASSERTSATISFIES": [
          -1,
          352
        ],
        "'ASSERTRAISES": [
          -1,
          352
        ],
        "'IS": [
          -1,
          352
        ],
        "'ISNOT": [
          -1,
          352
        ],
        "'SATISFIES": [
          -1,
          352
        ],
        "'RAISES": [
          -1,
          352
        ],
        "'SWITCH": [
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
        ],
        "'YIELD": [
          -1,
          352
        ],
        "'PLUS": [
          -1,
          352
        ],
        "'DASH": [
          -1,
          352
        ],
        "'TIMES": [
          -1,
          352
        ],
        "'SLASH": [
          -1,
          352
        ],
        "'PERCENT": [
          -1,
          352
        ],
        "'EQUALEQUAL": [
          -1,
          352
        ],
        "'NEQ": [
          -1,
          352
        ],
        "'LEQ": [
          -1,
          352
        ],
        "'GEQ": [
          -1,
          352
        ],
        "'AND": [
          -1,
          352
        ],
        "'OR": [
          -1,
          352
        ],
        "'BANG": [
          -1,
          352
        ],
        "'DOT": [
          -1,
          352
        ],
        "'LBRACK": [
          -1,
          352
        ],
        "'RBRACK": [
          -1,
          352
        ],
        "'NUMBER": [
          -1,
          352
        ],
        "'TRUE": [
          -1,
          352
        ],
        "'FALSE": [
          -1,
          352
        ],
        "'NULL": [
          -1,
          352
        ],
        "'PARENAFTERBRACE": [
          -1,
          352
        ],
        "'SIEVE": [
          -1,
          352
        ],
        "'USING": [
          -1,
          352
        ],
        "'ORDER": [
          -1,
          352
        ],
        "'EXTEND": [
          -1,
          352
        ],
        "'SELECT": [
          -1,
          352
        ],
        "'EXTRACT": [
          -1,
          352
        ],
        "'BLOCK": [
          -1,
          352
        ],
        "'TABLE": [
          -1,
          352
        ],
        "'ASK": [
          -1,
          352
        ],
        "'NEW": [
          -1,
          352
        ]
      },
      {
        "'RBRACE": [
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
          -1,
          356
        ],
        "'THINARROW": [
          -1,
          356
        ]
      },
      {
        "'NAME": [
          -1,
          358
        ],
        "'RPAREN": [
          -1,
          358
        ],
        "'COMMA": [
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
        ]
      },
      {
        "$": [
          -1,
          360
        ],
        "'NAME": [
          -1,
          360
        ],
        "'SEMI": [
          -1,
          360
        ],
        "'PARENNOSPACE": [
          -1,
          360
        ],
        "'STRING": [
          -1,
          360
        ],
        "'RPAREN": [
          -1,
          360
        ],
        "'LBRACE": [
          -1,
          360
        ],
        "'RBRACE": [
          -1,
          360
        ],
        "'SPY": [
          -1,
          360
        ],
        "'PARENSPACE": [
          -1,
          360
        ],
        "'COMMA": [
          -1,
          360
        ],
        "'INT": [
          -1,
          360
        ],
        "'LONG": [
          -1,
          360
        ],
        "'DOUBLE": [
          -1,
          360
        ],
        "'FLOAT": [
          -1,
          360
        ],
        "'BOOLEAN": [
          -1,
          360
        ],
        "'VOID": [
          -1,
          360
        ],
        "'LT": [
          -1,
          360
        ],
        "'GT": [
          -1,
          360
        ],
        "'THINARROW": [
          -1,
          360
        ],
        "'DATA": [
          -1,
          360
        ],
        "'IF": [
          -1,
          360
        ],
        "'FOR": [
          -1,
          360
        ],
        "'RETURN": [
          -1,
          360
        ],
        "'VAR": [
          -1,
          360
        ],
        "'REC": [
          -1,
          360
        ],
        "'ATCHECK": [
          -1,
          360
        ],
        "'ASSERTEQUALS": [
          -1,
          360
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          360
        ],
        "'ASSERTTRUE": [
          -1,
          360
        ],
        "'ASSERTFALSE": [
          -1,
          360
        ],
        "'ASSERTSATISFIES": [
          -1,
          360
        ],
        "'ASSERTRAISES": [
          -1,
          360
        ],
        "'IS": [
          -1,
          360
        ],
        "'ISNOT": [
          -1,
          360
        ],
        "'SATISFIES": [
          -1,
          360
        ],
        "'RAISES": [
          -1,
          360
        ],
        "'SWITCH": [
          -1,
          360
        ],
        "'CASE": [
          -1,
          360
        ],
        "'DEFAULT": [
          -1,
          360
        ],
        "'YIELD": [
          -1,
          360
        ],
        "'PLUS": [
          -1,
          360
        ],
        "'DASH": [
          -1,
          360
        ],
        "'TIMES": [
          -1,
          360
        ],
        "'SLASH": [
          -1,
          360
        ],
        "'PERCENT": [
          -1,
          360
        ],
        "'EQUALEQUAL": [
          -1,
          360
        ],
        "'NEQ": [
          -1,
          360
        ],
        "'LEQ": [
          -1,
          360
        ],
        "'GEQ": [
          -1,
          360
        ],
        "'AND": [
          -1,
          360
        ],
        "'OR": [
          -1,
          360
        ],
        "'BANG": [
          -1,
          360
        ],
        "'DOT": [
          -1,
          360
        ],
        "'LBRACK": [
          -1,
          360
        ],
        "'RBRACK": [
          -1,
          360
        ],
        "'NUMBER": [
          -1,
          360
        ],
        "'TRUE": [
          -1,
          360
        ],
        "'FALSE": [
          -1,
          360
        ],
        "'NULL": [
          -1,
          360
        ],
        "'PARENAFTERBRACE": [
          -1,
          360
        ],
        "'SIEVE": [
          -1,
          360
        ],
        "'USING": [
          -1,
          360
        ],
        "'ORDER": [
          -1,
          360
        ],
        "'EXTEND": [
          -1,
          360
        ],
        "'SELECT": [
          -1,
          360
        ],
        "'EXTRACT": [
          -1,
          360
        ],
        "'BLOCK": [
          -1,
          360
        ],
        "'TABLE": [
          -1,
          360
        ],
        "'ASK": [
          -1,
          360
        ],
        "'NEW": [
          -1,
          360
        ]
      },
      {
        "'RPAREN": [
          -1,
          362
        ],
        "'COMMA": [
          -1,
          362
        ]
      },
      {
        "'RPAREN": [
          -1,
          364
        ],
        "'COMMA": [
          -1,
          364
        ]
      },
      {
        "block": [
          347
        ],
        "'LBRACE": [
          348
        ]
      },
      {
        "'COMMA": [
          349
        ],
        "fun-decl_I3_I1": [
          350
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
        "'PARENNOSPACE": [
          -1,
          368
        ],
        "'STRING": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          368
        ],
        "'YIELD": [
          -1,
          368
        ],
        "'DASH": [
          -1,
          368
        ],
        "'BANG": [
          -1,
          368
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          368
        ],
        "'ORDER": [
          -1,
          368
        ],
        "'EXTEND": [
          -1,
          368
        ],
        "'SELECT": [
          -1,
          368
        ],
        "'EXTRACT": [
          -1,
          368
        ],
        "'BLOCK": [
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
        "'LBRACE": [
          -1,
          370
        ],
        "'RBRACE": [
          -1,
          370
        ],
        "'SPY": [
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
        "'IF": [
          -1,
          370
        ],
        "'FOR": [
          -1,
          370
        ],
        "'RETURN": [
          -1,
          370
        ],
        "'VAR": [
          -1,
          370
        ],
        "'REC": [
          -1,
          370
        ],
        "'ATCHECK": [
          -1,
          370
        ],
        "'ASSERTEQUALS": [
          -1,
          370
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          370
        ],
        "'ASSERTTRUE": [
          -1,
          370
        ],
        "'ASSERTFALSE": [
          -1,
          370
        ],
        "'ASSERTSATISFIES": [
          -1,
          370
        ],
        "'ASSERTRAISES": [
          -1,
          370
        ],
        "'SWITCH": [
          -1,
          370
        ],
        "'YIELD": [
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
        "'SIEVE": [
          -1,
          370
        ],
        "'ORDER": [
          -1,
          370
        ],
        "'EXTEND": [
          -1,
          370
        ],
        "'SELECT": [
          -1,
          370
        ],
        "'EXTRACT": [
          -1,
          370
        ],
        "'BLOCK": [
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
        "$": [
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
        "'LBRACE": [
          -1,
          372
        ],
        "'RBRACE": [
          -1,
          372
        ],
        "'SPY": [
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
        "'IF": [
          -1,
          372
        ],
        "'FOR": [
          -1,
          372
        ],
        "'RETURN": [
          -1,
          372
        ],
        "'VAR": [
          -1,
          372
        ],
        "'REC": [
          -1,
          372
        ],
        "'ATCHECK": [
          -1,
          372
        ],
        "'ASSERTEQUALS": [
          -1,
          372
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          372
        ],
        "'ASSERTTRUE": [
          -1,
          372
        ],
        "'ASSERTFALSE": [
          -1,
          372
        ],
        "'ASSERTSATISFIES": [
          -1,
          372
        ],
        "'ASSERTRAISES": [
          -1,
          372
        ],
        "'SWITCH": [
          -1,
          372
        ],
        "'YIELD": [
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
        "'SIEVE": [
          -1,
          372
        ],
        "'ORDER": [
          -1,
          372
        ],
        "'EXTEND": [
          -1,
          372
        ],
        "'SELECT": [
          -1,
          372
        ],
        "'EXTRACT": [
          -1,
          372
        ],
        "'BLOCK": [
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
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          351
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "variant-decl_A0_I2?": [
          352
        ],
        "variant-decl_A0_I2": [
          353
        ],
        "variant-member": [
          354
        ],
        "'RPAREN": [
          -1,
          374
        ]
      },
      {
        "'SEMI": [
          355
        ],
        "data-decl_I5?": [
          356
        ],
        "data-decl_I4": [
          357
        ],
        "data-decl_I5": [
          358
        ],
        "'RBRACE": [
          -1,
          376
        ]
      },
      {
        "'SEMI": [
          359
        ],
        "var-stmt_I5?": [
          360
        ],
        "var-stmt_I5": [
          361
        ],
        "$": [
          -1,
          378,
          380
        ],
        "'NAME": [
          -1,
          378,
          380
        ],
        "'PARENNOSPACE": [
          -1,
          378,
          380
        ],
        "'STRING": [
          -1,
          378,
          380
        ],
        "'LBRACE": [
          -1,
          378,
          380
        ],
        "'RBRACE": [
          -1,
          378,
          380
        ],
        "'SPY": [
          -1,
          378,
          380
        ],
        "'PARENSPACE": [
          -1,
          378,
          380
        ],
        "'INT": [
          -1,
          378,
          380
        ],
        "'LONG": [
          -1,
          378,
          380
        ],
        "'DOUBLE": [
          -1,
          378,
          380
        ],
        "'FLOAT": [
          -1,
          378,
          380
        ],
        "'BOOLEAN": [
          -1,
          378,
          380
        ],
        "'VOID": [
          -1,
          378,
          380
        ],
        "'DATA": [
          -1,
          378,
          380
        ],
        "'IF": [
          -1,
          378,
          380
        ],
        "'FOR": [
          -1,
          378,
          380
        ],
        "'RETURN": [
          -1,
          378,
          380
        ],
        "'VAR": [
          -1,
          378,
          380
        ],
        "'REC": [
          -1,
          378,
          380
        ],
        "'ATCHECK": [
          -1,
          378,
          380
        ],
        "'ASSERTEQUALS": [
          -1,
          378,
          380
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          378,
          380
        ],
        "'ASSERTTRUE": [
          -1,
          378,
          380
        ],
        "'ASSERTFALSE": [
          -1,
          378,
          380
        ],
        "'ASSERTSATISFIES": [
          -1,
          378,
          380
        ],
        "'ASSERTRAISES": [
          -1,
          378,
          380
        ],
        "'SWITCH": [
          -1,
          378,
          380
        ],
        "'YIELD": [
          -1,
          378,
          380
        ],
        "'DASH": [
          -1,
          378,
          380
        ],
        "'BANG": [
          -1,
          378,
          380
        ],
        "'LBRACK": [
          -1,
          378,
          380
        ],
        "'NUMBER": [
          -1,
          378,
          380
        ],
        "'TRUE": [
          -1,
          378,
          380
        ],
        "'FALSE": [
          -1,
          378,
          380
        ],
        "'NULL": [
          -1,
          378,
          380
        ],
        "'PARENAFTERBRACE": [
          -1,
          378,
          380
        ],
        "'SIEVE": [
          -1,
          378,
          380
        ],
        "'ORDER": [
          -1,
          378,
          380
        ],
        "'EXTEND": [
          -1,
          378,
          380
        ],
        "'SELECT": [
          -1,
          378,
          380
        ],
        "'EXTRACT": [
          -1,
          378,
          380
        ],
        "'BLOCK": [
          -1,
          378,
          380
        ],
        "'TABLE": [
          -1,
          378,
          380
        ],
        "'ASK": [
          -1,
          378,
          380
        ],
        "'NEW": [
          -1,
          378,
          380
        ]
      },
      {
        "'SEMI": [
          362
        ],
        "rec-stmt_I5?": [
          363
        ],
        "rec-stmt_I5": [
          364
        ],
        "$": [
          -1,
          382,
          384
        ],
        "'NAME": [
          -1,
          382,
          384
        ],
        "'PARENNOSPACE": [
          -1,
          382,
          384
        ],
        "'STRING": [
          -1,
          382,
          384
        ],
        "'LBRACE": [
          -1,
          382,
          384
        ],
        "'RBRACE": [
          -1,
          382,
          384
        ],
        "'SPY": [
          -1,
          382,
          384
        ],
        "'PARENSPACE": [
          -1,
          382,
          384
        ],
        "'INT": [
          -1,
          382,
          384
        ],
        "'LONG": [
          -1,
          382,
          384
        ],
        "'DOUBLE": [
          -1,
          382,
          384
        ],
        "'FLOAT": [
          -1,
          382,
          384
        ],
        "'BOOLEAN": [
          -1,
          382,
          384
        ],
        "'VOID": [
          -1,
          382,
          384
        ],
        "'DATA": [
          -1,
          382,
          384
        ],
        "'IF": [
          -1,
          382,
          384
        ],
        "'FOR": [
          -1,
          382,
          384
        ],
        "'RETURN": [
          -1,
          382,
          384
        ],
        "'VAR": [
          -1,
          382,
          384
        ],
        "'REC": [
          -1,
          382,
          384
        ],
        "'ATCHECK": [
          -1,
          382,
          384
        ],
        "'ASSERTEQUALS": [
          -1,
          382,
          384
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          382,
          384
        ],
        "'ASSERTTRUE": [
          -1,
          382,
          384
        ],
        "'ASSERTFALSE": [
          -1,
          382,
          384
        ],
        "'ASSERTSATISFIES": [
          -1,
          382,
          384
        ],
        "'ASSERTRAISES": [
          -1,
          382,
          384
        ],
        "'SWITCH": [
          -1,
          382,
          384
        ],
        "'YIELD": [
          -1,
          382,
          384
        ],
        "'DASH": [
          -1,
          382,
          384
        ],
        "'BANG": [
          -1,
          382,
          384
        ],
        "'LBRACK": [
          -1,
          382,
          384
        ],
        "'NUMBER": [
          -1,
          382,
          384
        ],
        "'TRUE": [
          -1,
          382,
          384
        ],
        "'FALSE": [
          -1,
          382,
          384
        ],
        "'NULL": [
          -1,
          382,
          384
        ],
        "'PARENAFTERBRACE": [
          -1,
          382,
          384
        ],
        "'SIEVE": [
          -1,
          382,
          384
        ],
        "'ORDER": [
          -1,
          382,
          384
        ],
        "'EXTEND": [
          -1,
          382,
          384
        ],
        "'SELECT": [
          -1,
          382,
          384
        ],
        "'EXTRACT": [
          -1,
          382,
          384
        ],
        "'BLOCK": [
          -1,
          382,
          384
        ],
        "'TABLE": [
          -1,
          382,
          384
        ],
        "'ASK": [
          -1,
          382,
          384
        ],
        "'NEW": [
          -1,
          382,
          384
        ]
      },
      {
        "'NAME": [
          365
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          366
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          367
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          368
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          369
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          370
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          371
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'NAME": [
          -1,
          386
        ],
        "'PARENNOSPACE": [
          -1,
          386
        ],
        "'STRING": [
          -1,
          386
        ],
        "'LBRACE": [
          -1,
          386
        ],
        "'RBRACE": [
          -1,
          386
        ],
        "'SPY": [
          -1,
          386
        ],
        "'PARENSPACE": [
          -1,
          386
        ],
        "'INT": [
          -1,
          386
        ],
        "'LONG": [
          -1,
          386
        ],
        "'DOUBLE": [
          -1,
          386
        ],
        "'FLOAT": [
          -1,
          386
        ],
        "'BOOLEAN": [
          -1,
          386
        ],
        "'VOID": [
          -1,
          386
        ],
        "'DATA": [
          -1,
          386
        ],
        "'IF": [
          -1,
          386
        ],
        "'FOR": [
          -1,
          386
        ],
        "'RETURN": [
          -1,
          386
        ],
        "'VAR": [
          -1,
          386
        ],
        "'REC": [
          -1,
          386
        ],
        "'ATCHECK": [
          -1,
          386
        ],
        "'ASSERTEQUALS": [
          -1,
          386
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          386
        ],
        "'ASSERTTRUE": [
          -1,
          386
        ],
        "'ASSERTFALSE": [
          -1,
          386
        ],
        "'ASSERTSATISFIES": [
          -1,
          386
        ],
        "'ASSERTRAISES": [
          -1,
          386
        ],
        "'SWITCH": [
          -1,
          386
        ],
        "'YIELD": [
          -1,
          386
        ],
        "'DASH": [
          -1,
          386
        ],
        "'BANG": [
          -1,
          386
        ],
        "'LBRACK": [
          -1,
          386
        ],
        "'NUMBER": [
          -1,
          386
        ],
        "'TRUE": [
          -1,
          386
        ],
        "'FALSE": [
          -1,
          386
        ],
        "'NULL": [
          -1,
          386
        ],
        "'PARENAFTERBRACE": [
          -1,
          386
        ],
        "'SIEVE": [
          -1,
          386
        ],
        "'ORDER": [
          -1,
          386
        ],
        "'EXTEND": [
          -1,
          386
        ],
        "'SELECT": [
          -1,
          386
        ],
        "'EXTRACT": [
          -1,
          386
        ],
        "'BLOCK": [
          -1,
          386
        ],
        "'TABLE": [
          -1,
          386
        ],
        "'ASK": [
          -1,
          386
        ],
        "'NEW": [
          -1,
          386
        ]
      },
      {
        "'SEMI": [
          372
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          373
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          374
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          375
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          376
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          377
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          378
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'SEMI": [
          379
        ],
        "yield-stmt_I2?": [
          380
        ],
        "yield-stmt_I2": [
          381
        ],
        "'NAME": [
          -1,
          388,
          390
        ],
        "'PARENNOSPACE": [
          -1,
          388,
          390
        ],
        "'STRING": [
          -1,
          388,
          390
        ],
        "'LBRACE": [
          -1,
          388,
          390
        ],
        "'RBRACE": [
          -1,
          388,
          390
        ],
        "'SPY": [
          -1,
          388,
          390
        ],
        "'PARENSPACE": [
          -1,
          388,
          390
        ],
        "'INT": [
          -1,
          388,
          390
        ],
        "'LONG": [
          -1,
          388,
          390
        ],
        "'DOUBLE": [
          -1,
          388,
          390
        ],
        "'FLOAT": [
          -1,
          388,
          390
        ],
        "'BOOLEAN": [
          -1,
          388,
          390
        ],
        "'VOID": [
          -1,
          388,
          390
        ],
        "'DATA": [
          -1,
          388,
          390
        ],
        "'IF": [
          -1,
          388,
          390
        ],
        "'FOR": [
          -1,
          388,
          390
        ],
        "'RETURN": [
          -1,
          388,
          390
        ],
        "'VAR": [
          -1,
          388,
          390
        ],
        "'REC": [
          -1,
          388,
          390
        ],
        "'ATCHECK": [
          -1,
          388,
          390
        ],
        "'ASSERTEQUALS": [
          -1,
          388,
          390
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          388,
          390
        ],
        "'ASSERTTRUE": [
          -1,
          388,
          390
        ],
        "'ASSERTFALSE": [
          -1,
          388,
          390
        ],
        "'ASSERTSATISFIES": [
          -1,
          388,
          390
        ],
        "'ASSERTRAISES": [
          -1,
          388,
          390
        ],
        "'SWITCH": [
          -1,
          388,
          390
        ],
        "'CASE": [
          -1,
          388,
          390
        ],
        "'DEFAULT": [
          -1,
          388,
          390
        ],
        "'YIELD": [
          -1,
          388,
          390
        ],
        "'DASH": [
          -1,
          388,
          390
        ],
        "'BANG": [
          -1,
          388,
          390
        ],
        "'LBRACK": [
          -1,
          388,
          390
        ],
        "'NUMBER": [
          -1,
          388,
          390
        ],
        "'TRUE": [
          -1,
          388,
          390
        ],
        "'FALSE": [
          -1,
          388,
          390
        ],
        "'NULL": [
          -1,
          388,
          390
        ],
        "'PARENAFTERBRACE": [
          -1,
          388,
          390
        ],
        "'SIEVE": [
          -1,
          388,
          390
        ],
        "'ORDER": [
          -1,
          388,
          390
        ],
        "'EXTEND": [
          -1,
          388,
          390
        ],
        "'SELECT": [
          -1,
          388,
          390
        ],
        "'EXTRACT": [
          -1,
          388,
          390
        ],
        "'BLOCK": [
          -1,
          388,
          390
        ],
        "'TABLE": [
          -1,
          388,
          390
        ],
        "'ASK": [
          -1,
          388,
          390
        ],
        "'NEW": [
          -1,
          388,
          390
        ]
      },
      {
        "'LBRACE": [
          382
        ]
      },
      {
        "switch-expr_I5*": [
          383
        ],
        "'RBRACE": [
          -1,
          392
        ],
        "'CASE": [
          -1,
          392
        ],
        "'DEFAULT": [
          -1,
          392
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          384
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'RPAREN": [
          -1,
          394
        ],
        "'COMMA": [
          -1,
          394
        ]
      },
      {
        "'COMMA": [
          385
        ],
        "construct-expr_A0_I3_I1": [
          386
        ],
        "'RBRACK": [
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
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          398
        ],
        "'GT": [
          -1,
          398
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'IS": [
          -1,
          398
        ],
        "'ISNOT": [
          -1,
          398
        ],
        "'SATISFIES": [
          -1,
          398
        ],
        "'RAISES": [
          -1,
          398
        ],
        "'SWITCH": [
          -1,
          398
        ],
        "'CASE": [
          -1,
          398
        ],
        "'DEFAULT": [
          -1,
          398
        ],
        "'YIELD": [
          -1,
          398
        ],
        "'PLUS": [
          -1,
          398
        ],
        "'DASH": [
          -1,
          398
        ],
        "'TIMES": [
          -1,
          398
        ],
        "'SLASH": [
          -1,
          398
        ],
        "'PERCENT": [
          -1,
          398
        ],
        "'EQUALEQUAL": [
          -1,
          398
        ],
        "'NEQ": [
          -1,
          398
        ],
        "'LEQ": [
          -1,
          398
        ],
        "'GEQ": [
          -1,
          398
        ],
        "'AND": [
          -1,
          398
        ],
        "'OR": [
          -1,
          398
        ],
        "'BANG": [
          -1,
          398
        ],
        "'DOT": [
          -1,
          398
        ],
        "'LBRACK": [
          -1,
          398
        ],
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          398
        ],
        "'USING": [
          -1,
          398
        ],
        "'ORDER": [
          -1,
          398
        ],
        "'EXTEND": [
          -1,
          398
        ],
        "'SELECT": [
          -1,
          398
        ],
        "'EXTRACT": [
          -1,
          398
        ],
        "'BLOCK": [
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
        "'NAME": [
          387
        ]
      },
      {
        "map-for-expr_A1_I5*": [
          388
        ],
        "'RPAREN": [
          -1,
          400
        ],
        "'COMMA": [
          -1,
          400
        ]
      },
      {
        "'COLON": [
          389
        ]
      },
      {
        "'LBRACE": [
          390
        ],
        "'COMMA": [
          391
        ],
        "sieve-expr_I4": [
          392
        ]
      },
      {
        "'SEMI": [
          -1,
          402
        ],
        "'RBRACE": [
          -1,
          402
        ]
      },
      {
        "'SEMI": [
          -1,
          404
        ],
        "'RBRACE": [
          -1,
          404
        ]
      },
      {
        "'SEMI": [
          393
        ],
        "order-expr_I5?": [
          394
        ],
        "order-expr_I4": [
          395
        ],
        "order-expr_I5": [
          396
        ],
        "'RBRACE": [
          -1,
          406
        ]
      },
      {
        "'LBRACE": [
          397
        ],
        "'COMMA": [
          398
        ],
        "extend-expr_I4": [
          399
        ]
      },
      {
        "'COMMA": [
          -1,
          408
        ],
        "'FROM": [
          -1,
          408
        ]
      },
      {
        "$": [
          -1,
          410
        ],
        "'NAME": [
          -1,
          410
        ],
        "'SEMI": [
          -1,
          410
        ],
        "'PARENNOSPACE": [
          -1,
          410
        ],
        "'STRING": [
          -1,
          410
        ],
        "'RPAREN": [
          -1,
          410
        ],
        "'LBRACE": [
          -1,
          410
        ],
        "'RBRACE": [
          -1,
          410
        ],
        "'SPY": [
          -1,
          410
        ],
        "'PARENSPACE": [
          -1,
          410
        ],
        "'COMMA": [
          -1,
          410
        ],
        "'INT": [
          -1,
          410
        ],
        "'LONG": [
          -1,
          410
        ],
        "'DOUBLE": [
          -1,
          410
        ],
        "'FLOAT": [
          -1,
          410
        ],
        "'BOOLEAN": [
          -1,
          410
        ],
        "'VOID": [
          -1,
          410
        ],
        "'LT": [
          -1,
          410
        ],
        "'GT": [
          -1,
          410
        ],
        "'THINARROW": [
          -1,
          410
        ],
        "'DATA": [
          -1,
          410
        ],
        "'IF": [
          -1,
          410
        ],
        "'FOR": [
          -1,
          410
        ],
        "'RETURN": [
          -1,
          410
        ],
        "'VAR": [
          -1,
          410
        ],
        "'REC": [
          -1,
          410
        ],
        "'ATCHECK": [
          -1,
          410
        ],
        "'ASSERTEQUALS": [
          -1,
          410
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          410
        ],
        "'ASSERTTRUE": [
          -1,
          410
        ],
        "'ASSERTFALSE": [
          -1,
          410
        ],
        "'ASSERTSATISFIES": [
          -1,
          410
        ],
        "'ASSERTRAISES": [
          -1,
          410
        ],
        "'IS": [
          -1,
          410
        ],
        "'ISNOT": [
          -1,
          410
        ],
        "'SATISFIES": [
          -1,
          410
        ],
        "'RAISES": [
          -1,
          410
        ],
        "'SWITCH": [
          -1,
          410
        ],
        "'CASE": [
          -1,
          410
        ],
        "'DEFAULT": [
          -1,
          410
        ],
        "'YIELD": [
          -1,
          410
        ],
        "'PLUS": [
          -1,
          410
        ],
        "'DASH": [
          -1,
          410
        ],
        "'TIMES": [
          -1,
          410
        ],
        "'SLASH": [
          -1,
          410
        ],
        "'PERCENT": [
          -1,
          410
        ],
        "'EQUALEQUAL": [
          -1,
          410
        ],
        "'NEQ": [
          -1,
          410
        ],
        "'LEQ": [
          -1,
          410
        ],
        "'GEQ": [
          -1,
          410
        ],
        "'AND": [
          -1,
          410
        ],
        "'OR": [
          -1,
          410
        ],
        "'BANG": [
          -1,
          410
        ],
        "'DOT": [
          -1,
          410
        ],
        "'LBRACK": [
          -1,
          410
        ],
        "'RBRACK": [
          -1,
          410
        ],
        "'NUMBER": [
          -1,
          410
        ],
        "'TRUE": [
          -1,
          410
        ],
        "'FALSE": [
          -1,
          410
        ],
        "'NULL": [
          -1,
          410
        ],
        "'PARENAFTERBRACE": [
          -1,
          410
        ],
        "'SIEVE": [
          -1,
          410
        ],
        "'USING": [
          -1,
          410
        ],
        "'ORDER": [
          -1,
          410
        ],
        "'EXTEND": [
          -1,
          410
        ],
        "'SELECT": [
          -1,
          410
        ],
        "'EXTRACT": [
          -1,
          410
        ],
        "'BLOCK": [
          -1,
          410
        ],
        "'TABLE": [
          -1,
          410
        ],
        "'ASK": [
          -1,
          410
        ],
        "'NEW": [
          -1,
          410
        ]
      },
      {
        "table-expr_I5*": [
          400
        ],
        "'RBRACE": [
          -1,
          412
        ],
        "'ROW": [
          -1,
          412
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          186
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "table-header": [
          401
        ]
      },
      {
        "'SEMI": [
          -1,
          414
        ],
        "'COMMA": [
          -1,
          414
        ]
      },
      {
        "'SEMI": [
          -1,
          416
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          402
        ],
        "'PARENSPACE": [
          109
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          188
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "ask-branch": [
          403
        ],
        "ask-expr_A0_I4": [
          404
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          109
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          188
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "ask-branch": [
          405
        ],
        "otherwise-branch": [
          406
        ],
        "ask-expr_A1_I4": [
          407
        ],
        "'OTHERWISE": [
          408
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'COMMA": [
          409
        ],
        "new-expr_I3_I1": [
          410
        ],
        "'RPAREN": [
          -1,
          418
        ]
      },
      {
        "$": [
          -1,
          420
        ],
        "'NAME": [
          -1,
          420
        ],
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          420
        ],
        "'GT": [
          -1,
          420
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'IS": [
          -1,
          420
        ],
        "'ISNOT": [
          -1,
          420
        ],
        "'SATISFIES": [
          -1,
          420
        ],
        "'RAISES": [
          -1,
          420
        ],
        "'SWITCH": [
          -1,
          420
        ],
        "'CASE": [
          -1,
          420
        ],
        "'DEFAULT": [
          -1,
          420
        ],
        "'YIELD": [
          -1,
          420
        ],
        "'PLUS": [
          -1,
          420
        ],
        "'DASH": [
          -1,
          420
        ],
        "'TIMES": [
          -1,
          420
        ],
        "'SLASH": [
          -1,
          420
        ],
        "'PERCENT": [
          -1,
          420
        ],
        "'EQUALEQUAL": [
          -1,
          420
        ],
        "'NEQ": [
          -1,
          420
        ],
        "'LEQ": [
          -1,
          420
        ],
        "'GEQ": [
          -1,
          420
        ],
        "'AND": [
          -1,
          420
        ],
        "'OR": [
          -1,
          420
        ],
        "'BANG": [
          -1,
          420
        ],
        "'DOT": [
          -1,
          420
        ],
        "'LBRACK": [
          -1,
          420
        ],
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          420
        ],
        "'USING": [
          -1,
          420
        ],
        "'ORDER": [
          -1,
          420
        ],
        "'EXTEND": [
          -1,
          420
        ],
        "'SELECT": [
          -1,
          420
        ],
        "'EXTRACT": [
          -1,
          420
        ],
        "'BLOCK": [
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
        "$": [
          -1,
          422
        ],
        "'IMPORT": [
          -1,
          422
        ],
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
        "'INCLUDE": [
          -1,
          422
        ],
        "'LBRACE": [
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
        "'VAR": [
          -1,
          422
        ],
        "'REC": [
          -1,
          422
        ],
        "'ATCHECK": [
          -1,
          422
        ],
        "'SWITCH": [
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
        "'SIEVE": [
          -1,
          422
        ],
        "'ORDER": [
          -1,
          422
        ],
        "'EXTEND": [
          -1,
          422
        ],
        "'SELECT": [
          -1,
          422
        ],
        "'EXTRACT": [
          -1,
          422
        ],
        "'BLOCK": [
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
          411
        ]
      },
      {
        "$": [
          -1,
          424
        ],
        "'IMPORT": [
          -1,
          424
        ],
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
        "'INCLUDE": [
          -1,
          424
        ],
        "'LBRACE": [
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
        "'VAR": [
          -1,
          424
        ],
        "'REC": [
          -1,
          424
        ],
        "'ATCHECK": [
          -1,
          424
        ],
        "'SWITCH": [
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
        "'SIEVE": [
          -1,
          424
        ],
        "'ORDER": [
          -1,
          424
        ],
        "'EXTEND": [
          -1,
          424
        ],
        "'SELECT": [
          -1,
          424
        ],
        "'EXTRACT": [
          -1,
          424
        ],
        "'BLOCK": [
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
        "'COMMA": [
          -1,
          426
        ],
        "'GT": [
          -1,
          426
        ]
      },
      {
        "fun-decl_I6?": [
          412
        ],
        "fun-decl_I6": [
          413
        ],
        "where-clause": [
          414
        ],
        "'WHERE": [
          415
        ],
        "$": [
          -1,
          428,
          430
        ],
        "'NAME": [
          -1,
          428,
          430
        ],
        "'PARENNOSPACE": [
          -1,
          428,
          430
        ],
        "'STRING": [
          -1,
          428,
          430
        ],
        "'LBRACE": [
          -1,
          428,
          430
        ],
        "'RBRACE": [
          -1,
          428,
          430
        ],
        "'SPY": [
          -1,
          428,
          430
        ],
        "'PARENSPACE": [
          -1,
          428,
          430
        ],
        "'INT": [
          -1,
          428,
          430
        ],
        "'LONG": [
          -1,
          428,
          430
        ],
        "'DOUBLE": [
          -1,
          428,
          430
        ],
        "'FLOAT": [
          -1,
          428,
          430
        ],
        "'BOOLEAN": [
          -1,
          428,
          430
        ],
        "'VOID": [
          -1,
          428,
          430
        ],
        "'DATA": [
          -1,
          428,
          430
        ],
        "'IF": [
          -1,
          428,
          430
        ],
        "'FOR": [
          -1,
          428,
          430
        ],
        "'RETURN": [
          -1,
          428,
          430
        ],
        "'VAR": [
          -1,
          428,
          430
        ],
        "'REC": [
          -1,
          428,
          430
        ],
        "'ATCHECK": [
          -1,
          428,
          430
        ],
        "'ASSERTEQUALS": [
          -1,
          428,
          430
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          428,
          430
        ],
        "'ASSERTTRUE": [
          -1,
          428,
          430
        ],
        "'ASSERTFALSE": [
          -1,
          428,
          430
        ],
        "'ASSERTSATISFIES": [
          -1,
          428,
          430
        ],
        "'ASSERTRAISES": [
          -1,
          428,
          430
        ],
        "'SWITCH": [
          -1,
          428,
          430
        ],
        "'YIELD": [
          -1,
          428,
          430
        ],
        "'DASH": [
          -1,
          428,
          430
        ],
        "'BANG": [
          -1,
          428,
          430
        ],
        "'LBRACK": [
          -1,
          428,
          430
        ],
        "'NUMBER": [
          -1,
          428,
          430
        ],
        "'TRUE": [
          -1,
          428,
          430
        ],
        "'FALSE": [
          -1,
          428,
          430
        ],
        "'NULL": [
          -1,
          428,
          430
        ],
        "'PARENAFTERBRACE": [
          -1,
          428,
          430
        ],
        "'SIEVE": [
          -1,
          428,
          430
        ],
        "'ORDER": [
          -1,
          428,
          430
        ],
        "'EXTEND": [
          -1,
          428,
          430
        ],
        "'SELECT": [
          -1,
          428,
          430
        ],
        "'EXTRACT": [
          -1,
          428,
          430
        ],
        "'BLOCK": [
          -1,
          428,
          430
        ],
        "'TABLE": [
          -1,
          428,
          430
        ],
        "'ASK": [
          -1,
          428,
          430
        ],
        "'NEW": [
          -1,
          428,
          430
        ]
      },
      {
        "block_I1*": [
          416
        ],
        "'NAME": [
          -1,
          432
        ],
        "'PARENNOSPACE": [
          -1,
          432
        ],
        "'STRING": [
          -1,
          432
        ],
        "'LBRACE": [
          -1,
          432
        ],
        "'RBRACE": [
          -1,
          432
        ],
        "'SPY": [
          -1,
          432
        ],
        "'PARENSPACE": [
          -1,
          432
        ],
        "'INT": [
          -1,
          432
        ],
        "'LONG": [
          -1,
          432
        ],
        "'DOUBLE": [
          -1,
          432
        ],
        "'FLOAT": [
          -1,
          432
        ],
        "'BOOLEAN": [
          -1,
          432
        ],
        "'VOID": [
          -1,
          432
        ],
        "'DATA": [
          -1,
          432
        ],
        "'IF": [
          -1,
          432
        ],
        "'FOR": [
          -1,
          432
        ],
        "'RETURN": [
          -1,
          432
        ],
        "'VAR": [
          -1,
          432
        ],
        "'REC": [
          -1,
          432
        ],
        "'ATCHECK": [
          -1,
          432
        ],
        "'SWITCH": [
          -1,
          432
        ],
        "'YIELD": [
          -1,
          432
        ],
        "'DASH": [
          -1,
          432
        ],
        "'BANG": [
          -1,
          432
        ],
        "'LBRACK": [
          -1,
          432
        ],
        "'NUMBER": [
          -1,
          432
        ],
        "'TRUE": [
          -1,
          432
        ],
        "'FALSE": [
          -1,
          432
        ],
        "'NULL": [
          -1,
          432
        ],
        "'PARENAFTERBRACE": [
          -1,
          432
        ],
        "'SIEVE": [
          -1,
          432
        ],
        "'ORDER": [
          -1,
          432
        ],
        "'EXTEND": [
          -1,
          432
        ],
        "'SELECT": [
          -1,
          432
        ],
        "'EXTRACT": [
          -1,
          432
        ],
        "'BLOCK": [
          -1,
          432
        ],
        "'TABLE": [
          -1,
          432
        ],
        "'ASK": [
          -1,
          432
        ],
        "'NEW": [
          -1,
          432
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          212
        ],
        "param": [
          417
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'RPAREN": [
          -1,
          434
        ],
        "'COMMA": [
          -1,
          434
        ]
      },
      {
        "'NAME": [
          418
        ]
      },
      {
        "'RPAREN": [
          419
        ]
      },
      {
        "'RPAREN": [
          -1,
          436
        ]
      },
      {
        "variant-decl_A0_I2_I1*": [
          420
        ],
        "'RPAREN": [
          -1,
          438,
          440
        ],
        "'COMMA": [
          -1,
          440
        ]
      },
      {
        "'NAME": [
          217
        ],
        "variant-decl": [
          421
        ],
        "'RBRACE": [
          -1,
          442
        ]
      },
      {
        "'RBRACE": [
          422
        ]
      },
      {
        "'SEMI": [
          -1,
          444
        ],
        "'RBRACE": [
          -1,
          444
        ]
      },
      {
        "'RBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          448
        ],
        "'ORDER": [
          -1,
          448
        ],
        "'EXTEND": [
          -1,
          448
        ],
        "'SELECT": [
          -1,
          448
        ],
        "'EXTRACT": [
          -1,
          448
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          450
        ],
        "'ORDER": [
          -1,
          450
        ],
        "'EXTEND": [
          -1,
          450
        ],
        "'SELECT": [
          -1,
          450
        ],
        "'EXTRACT": [
          -1,
          450
        ],
        "'BLOCK": [
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
        "$": [
          -1,
          452
        ],
        "'NAME": [
          -1,
          452
        ],
        "'PARENNOSPACE": [
          -1,
          452
        ],
        "'STRING": [
          -1,
          452
        ],
        "'LBRACE": [
          -1,
          452
        ],
        "'RBRACE": [
          -1,
          452
        ],
        "'SPY": [
          -1,
          452
        ],
        "'PARENSPACE": [
          -1,
          452
        ],
        "'INT": [
          -1,
          452
        ],
        "'LONG": [
          -1,
          452
        ],
        "'DOUBLE": [
          -1,
          452
        ],
        "'FLOAT": [
          -1,
          452
        ],
        "'BOOLEAN": [
          -1,
          452
        ],
        "'VOID": [
          -1,
          452
        ],
        "'DATA": [
          -1,
          452
        ],
        "'IF": [
          -1,
          452
        ],
        "'FOR": [
          -1,
          452
        ],
        "'RETURN": [
          -1,
          452
        ],
        "'VAR": [
          -1,
          452
        ],
        "'REC": [
          -1,
          452
        ],
        "'ATCHECK": [
          -1,
          452
        ],
        "'ASSERTEQUALS": [
          -1,
          452
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          452
        ],
        "'ASSERTTRUE": [
          -1,
          452
        ],
        "'ASSERTFALSE": [
          -1,
          452
        ],
        "'ASSERTSATISFIES": [
          -1,
          452
        ],
        "'ASSERTRAISES": [
          -1,
          452
        ],
        "'SWITCH": [
          -1,
          452
        ],
        "'YIELD": [
          -1,
          452
        ],
        "'DASH": [
          -1,
          452
        ],
        "'BANG": [
          -1,
          452
        ],
        "'LBRACK": [
          -1,
          452
        ],
        "'NUMBER": [
          -1,
          452
        ],
        "'TRUE": [
          -1,
          452
        ],
        "'FALSE": [
          -1,
          452
        ],
        "'NULL": [
          -1,
          452
        ],
        "'PARENAFTERBRACE": [
          -1,
          452
        ],
        "'SIEVE": [
          -1,
          452
        ],
        "'ORDER": [
          -1,
          452
        ],
        "'EXTEND": [
          -1,
          452
        ],
        "'SELECT": [
          -1,
          452
        ],
        "'EXTRACT": [
          -1,
          452
        ],
        "'BLOCK": [
          -1,
          452
        ],
        "'TABLE": [
          -1,
          452
        ],
        "'ASK": [
          -1,
          452
        ],
        "'NEW": [
          -1,
          452
        ]
      },
      {
        "$": [
          -1,
          454
        ],
        "'NAME": [
          -1,
          454
        ],
        "'PARENNOSPACE": [
          -1,
          454
        ],
        "'STRING": [
          -1,
          454
        ],
        "'LBRACE": [
          -1,
          454
        ],
        "'RBRACE": [
          -1,
          454
        ],
        "'SPY": [
          -1,
          454
        ],
        "'PARENSPACE": [
          -1,
          454
        ],
        "'INT": [
          -1,
          454
        ],
        "'LONG": [
          -1,
          454
        ],
        "'DOUBLE": [
          -1,
          454
        ],
        "'FLOAT": [
          -1,
          454
        ],
        "'BOOLEAN": [
          -1,
          454
        ],
        "'VOID": [
          -1,
          454
        ],
        "'DATA": [
          -1,
          454
        ],
        "'IF": [
          -1,
          454
        ],
        "'FOR": [
          -1,
          454
        ],
        "'RETURN": [
          -1,
          454
        ],
        "'VAR": [
          -1,
          454
        ],
        "'REC": [
          -1,
          454
        ],
        "'ATCHECK": [
          -1,
          454
        ],
        "'ASSERTEQUALS": [
          -1,
          454
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          454
        ],
        "'ASSERTTRUE": [
          -1,
          454
        ],
        "'ASSERTFALSE": [
          -1,
          454
        ],
        "'ASSERTSATISFIES": [
          -1,
          454
        ],
        "'ASSERTRAISES": [
          -1,
          454
        ],
        "'SWITCH": [
          -1,
          454
        ],
        "'YIELD": [
          -1,
          454
        ],
        "'DASH": [
          -1,
          454
        ],
        "'BANG": [
          -1,
          454
        ],
        "'LBRACK": [
          -1,
          454
        ],
        "'NUMBER": [
          -1,
          454
        ],
        "'TRUE": [
          -1,
          454
        ],
        "'FALSE": [
          -1,
          454
        ],
        "'NULL": [
          -1,
          454
        ],
        "'PARENAFTERBRACE": [
          -1,
          454
        ],
        "'SIEVE": [
          -1,
          454
        ],
        "'ORDER": [
          -1,
          454
        ],
        "'EXTEND": [
          -1,
          454
        ],
        "'SELECT": [
          -1,
          454
        ],
        "'EXTRACT": [
          -1,
          454
        ],
        "'BLOCK": [
          -1,
          454
        ],
        "'TABLE": [
          -1,
          454
        ],
        "'ASK": [
          -1,
          454
        ],
        "'NEW": [
          -1,
          454
        ]
      },
      {
        "$": [
          -1,
          456
        ],
        "'NAME": [
          -1,
          456
        ],
        "'PARENNOSPACE": [
          -1,
          456
        ],
        "'STRING": [
          -1,
          456
        ],
        "'LBRACE": [
          -1,
          456
        ],
        "'RBRACE": [
          -1,
          456
        ],
        "'SPY": [
          -1,
          456
        ],
        "'PARENSPACE": [
          -1,
          456
        ],
        "'INT": [
          -1,
          456
        ],
        "'LONG": [
          -1,
          456
        ],
        "'DOUBLE": [
          -1,
          456
        ],
        "'FLOAT": [
          -1,
          456
        ],
        "'BOOLEAN": [
          -1,
          456
        ],
        "'VOID": [
          -1,
          456
        ],
        "'DATA": [
          -1,
          456
        ],
        "'IF": [
          -1,
          456
        ],
        "'FOR": [
          -1,
          456
        ],
        "'RETURN": [
          -1,
          456
        ],
        "'VAR": [
          -1,
          456
        ],
        "'REC": [
          -1,
          456
        ],
        "'ATCHECK": [
          -1,
          456
        ],
        "'ASSERTEQUALS": [
          -1,
          456
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          456
        ],
        "'ASSERTTRUE": [
          -1,
          456
        ],
        "'ASSERTFALSE": [
          -1,
          456
        ],
        "'ASSERTSATISFIES": [
          -1,
          456
        ],
        "'ASSERTRAISES": [
          -1,
          456
        ],
        "'SWITCH": [
          -1,
          456
        ],
        "'YIELD": [
          -1,
          456
        ],
        "'DASH": [
          -1,
          456
        ],
        "'BANG": [
          -1,
          456
        ],
        "'LBRACK": [
          -1,
          456
        ],
        "'NUMBER": [
          -1,
          456
        ],
        "'TRUE": [
          -1,
          456
        ],
        "'FALSE": [
          -1,
          456
        ],
        "'NULL": [
          -1,
          456
        ],
        "'PARENAFTERBRACE": [
          -1,
          456
        ],
        "'SIEVE": [
          -1,
          456
        ],
        "'ORDER": [
          -1,
          456
        ],
        "'EXTEND": [
          -1,
          456
        ],
        "'SELECT": [
          -1,
          456
        ],
        "'EXTRACT": [
          -1,
          456
        ],
        "'BLOCK": [
          -1,
          456
        ],
        "'TABLE": [
          -1,
          456
        ],
        "'ASK": [
          -1,
          456
        ],
        "'NEW": [
          -1,
          456
        ]
      },
      {
        "$": [
          -1,
          458
        ],
        "'NAME": [
          -1,
          458
        ],
        "'PARENNOSPACE": [
          -1,
          458
        ],
        "'STRING": [
          -1,
          458
        ],
        "'LBRACE": [
          -1,
          458
        ],
        "'RBRACE": [
          -1,
          458
        ],
        "'SPY": [
          -1,
          458
        ],
        "'PARENSPACE": [
          -1,
          458
        ],
        "'INT": [
          -1,
          458
        ],
        "'LONG": [
          -1,
          458
        ],
        "'DOUBLE": [
          -1,
          458
        ],
        "'FLOAT": [
          -1,
          458
        ],
        "'BOOLEAN": [
          -1,
          458
        ],
        "'VOID": [
          -1,
          458
        ],
        "'DATA": [
          -1,
          458
        ],
        "'IF": [
          -1,
          458
        ],
        "'FOR": [
          -1,
          458
        ],
        "'RETURN": [
          -1,
          458
        ],
        "'VAR": [
          -1,
          458
        ],
        "'REC": [
          -1,
          458
        ],
        "'ATCHECK": [
          -1,
          458
        ],
        "'ASSERTEQUALS": [
          -1,
          458
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          458
        ],
        "'ASSERTTRUE": [
          -1,
          458
        ],
        "'ASSERTFALSE": [
          -1,
          458
        ],
        "'ASSERTSATISFIES": [
          -1,
          458
        ],
        "'ASSERTRAISES": [
          -1,
          458
        ],
        "'SWITCH": [
          -1,
          458
        ],
        "'YIELD": [
          -1,
          458
        ],
        "'DASH": [
          -1,
          458
        ],
        "'BANG": [
          -1,
          458
        ],
        "'LBRACK": [
          -1,
          458
        ],
        "'NUMBER": [
          -1,
          458
        ],
        "'TRUE": [
          -1,
          458
        ],
        "'FALSE": [
          -1,
          458
        ],
        "'NULL": [
          -1,
          458
        ],
        "'PARENAFTERBRACE": [
          -1,
          458
        ],
        "'SIEVE": [
          -1,
          458
        ],
        "'ORDER": [
          -1,
          458
        ],
        "'EXTEND": [
          -1,
          458
        ],
        "'SELECT": [
          -1,
          458
        ],
        "'EXTRACT": [
          -1,
          458
        ],
        "'BLOCK": [
          -1,
          458
        ],
        "'TABLE": [
          -1,
          458
        ],
        "'ASK": [
          -1,
          458
        ],
        "'NEW": [
          -1,
          458
        ]
      },
      {
        "spy-stmt_I3*": [
          423
        ],
        "'RPAREN": [
          -1,
          460
        ],
        "'COMMA": [
          -1,
          460
        ]
      },
      {
        "'RPAREN": [
          424
        ]
      },
      {
        "'SEMI": [
          425
        ],
        "assert-stmt_A6_I3?": [
          426
        ],
        "assert-stmt_A6_I3": [
          427
        ],
        "'NAME": [
          -1,
          462,
          464
        ],
        "'PARENNOSPACE": [
          -1,
          462,
          464
        ],
        "'STRING": [
          -1,
          462,
          464
        ],
        "'LBRACE": [
          -1,
          462,
          464
        ],
        "'RBRACE": [
          -1,
          462,
          464
        ],
        "'SPY": [
          -1,
          462,
          464
        ],
        "'PARENSPACE": [
          -1,
          462,
          464
        ],
        "'INT": [
          -1,
          462,
          464
        ],
        "'LONG": [
          -1,
          462,
          464
        ],
        "'DOUBLE": [
          -1,
          462,
          464
        ],
        "'FLOAT": [
          -1,
          462,
          464
        ],
        "'BOOLEAN": [
          -1,
          462,
          464
        ],
        "'VOID": [
          -1,
          462,
          464
        ],
        "'DATA": [
          -1,
          462,
          464
        ],
        "'IF": [
          -1,
          462,
          464
        ],
        "'FOR": [
          -1,
          462,
          464
        ],
        "'RETURN": [
          -1,
          462,
          464
        ],
        "'VAR": [
          -1,
          462,
          464
        ],
        "'REC": [
          -1,
          462,
          464
        ],
        "'ATCHECK": [
          -1,
          462,
          464
        ],
        "'ASSERTEQUALS": [
          -1,
          462,
          464
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          462,
          464
        ],
        "'ASSERTTRUE": [
          -1,
          462,
          464
        ],
        "'ASSERTFALSE": [
          -1,
          462,
          464
        ],
        "'ASSERTSATISFIES": [
          -1,
          462,
          464
        ],
        "'ASSERTRAISES": [
          -1,
          462,
          464
        ],
        "'SWITCH": [
          -1,
          462,
          464
        ],
        "'YIELD": [
          -1,
          462,
          464
        ],
        "'DASH": [
          -1,
          462,
          464
        ],
        "'BANG": [
          -1,
          462,
          464
        ],
        "'LBRACK": [
          -1,
          462,
          464
        ],
        "'NUMBER": [
          -1,
          462,
          464
        ],
        "'TRUE": [
          -1,
          462,
          464
        ],
        "'FALSE": [
          -1,
          462,
          464
        ],
        "'NULL": [
          -1,
          462,
          464
        ],
        "'PARENAFTERBRACE": [
          -1,
          462,
          464
        ],
        "'SIEVE": [
          -1,
          462,
          464
        ],
        "'ORDER": [
          -1,
          462,
          464
        ],
        "'EXTEND": [
          -1,
          462,
          464
        ],
        "'SELECT": [
          -1,
          462,
          464
        ],
        "'EXTRACT": [
          -1,
          462,
          464
        ],
        "'BLOCK": [
          -1,
          462,
          464
        ],
        "'TABLE": [
          -1,
          462,
          464
        ],
        "'ASK": [
          -1,
          462,
          464
        ],
        "'NEW": [
          -1,
          462,
          464
        ]
      },
      {
        "'SEMI": [
          428
        ],
        "assert-stmt_A7_I3?": [
          429
        ],
        "assert-stmt_A7_I3": [
          430
        ],
        "'NAME": [
          -1,
          466,
          468
        ],
        "'PARENNOSPACE": [
          -1,
          466,
          468
        ],
        "'STRING": [
          -1,
          466,
          468
        ],
        "'LBRACE": [
          -1,
          466,
          468
        ],
        "'RBRACE": [
          -1,
          466,
          468
        ],
        "'SPY": [
          -1,
          466,
          468
        ],
        "'PARENSPACE": [
          -1,
          466,
          468
        ],
        "'INT": [
          -1,
          466,
          468
        ],
        "'LONG": [
          -1,
          466,
          468
        ],
        "'DOUBLE": [
          -1,
          466,
          468
        ],
        "'FLOAT": [
          -1,
          466,
          468
        ],
        "'BOOLEAN": [
          -1,
          466,
          468
        ],
        "'VOID": [
          -1,
          466,
          468
        ],
        "'DATA": [
          -1,
          466,
          468
        ],
        "'IF": [
          -1,
          466,
          468
        ],
        "'FOR": [
          -1,
          466,
          468
        ],
        "'RETURN": [
          -1,
          466,
          468
        ],
        "'VAR": [
          -1,
          466,
          468
        ],
        "'REC": [
          -1,
          466,
          468
        ],
        "'ATCHECK": [
          -1,
          466,
          468
        ],
        "'ASSERTEQUALS": [
          -1,
          466,
          468
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          466,
          468
        ],
        "'ASSERTTRUE": [
          -1,
          466,
          468
        ],
        "'ASSERTFALSE": [
          -1,
          466,
          468
        ],
        "'ASSERTSATISFIES": [
          -1,
          466,
          468
        ],
        "'ASSERTRAISES": [
          -1,
          466,
          468
        ],
        "'SWITCH": [
          -1,
          466,
          468
        ],
        "'YIELD": [
          -1,
          466,
          468
        ],
        "'DASH": [
          -1,
          466,
          468
        ],
        "'BANG": [
          -1,
          466,
          468
        ],
        "'LBRACK": [
          -1,
          466,
          468
        ],
        "'NUMBER": [
          -1,
          466,
          468
        ],
        "'TRUE": [
          -1,
          466,
          468
        ],
        "'FALSE": [
          -1,
          466,
          468
        ],
        "'NULL": [
          -1,
          466,
          468
        ],
        "'PARENAFTERBRACE": [
          -1,
          466,
          468
        ],
        "'SIEVE": [
          -1,
          466,
          468
        ],
        "'ORDER": [
          -1,
          466,
          468
        ],
        "'EXTEND": [
          -1,
          466,
          468
        ],
        "'SELECT": [
          -1,
          466,
          468
        ],
        "'EXTRACT": [
          -1,
          466,
          468
        ],
        "'BLOCK": [
          -1,
          466,
          468
        ],
        "'TABLE": [
          -1,
          466,
          468
        ],
        "'ASK": [
          -1,
          466,
          468
        ],
        "'NEW": [
          -1,
          466,
          468
        ]
      },
      {
        "'SEMI": [
          431
        ],
        "assert-stmt_A8_I3?": [
          432
        ],
        "assert-stmt_A8_I3": [
          433
        ],
        "'NAME": [
          -1,
          470,
          472
        ],
        "'PARENNOSPACE": [
          -1,
          470,
          472
        ],
        "'STRING": [
          -1,
          470,
          472
        ],
        "'LBRACE": [
          -1,
          470,
          472
        ],
        "'RBRACE": [
          -1,
          470,
          472
        ],
        "'SPY": [
          -1,
          470,
          472
        ],
        "'PARENSPACE": [
          -1,
          470,
          472
        ],
        "'INT": [
          -1,
          470,
          472
        ],
        "'LONG": [
          -1,
          470,
          472
        ],
        "'DOUBLE": [
          -1,
          470,
          472
        ],
        "'FLOAT": [
          -1,
          470,
          472
        ],
        "'BOOLEAN": [
          -1,
          470,
          472
        ],
        "'VOID": [
          -1,
          470,
          472
        ],
        "'DATA": [
          -1,
          470,
          472
        ],
        "'IF": [
          -1,
          470,
          472
        ],
        "'FOR": [
          -1,
          470,
          472
        ],
        "'RETURN": [
          -1,
          470,
          472
        ],
        "'VAR": [
          -1,
          470,
          472
        ],
        "'REC": [
          -1,
          470,
          472
        ],
        "'ATCHECK": [
          -1,
          470,
          472
        ],
        "'ASSERTEQUALS": [
          -1,
          470,
          472
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          470,
          472
        ],
        "'ASSERTTRUE": [
          -1,
          470,
          472
        ],
        "'ASSERTFALSE": [
          -1,
          470,
          472
        ],
        "'ASSERTSATISFIES": [
          -1,
          470,
          472
        ],
        "'ASSERTRAISES": [
          -1,
          470,
          472
        ],
        "'SWITCH": [
          -1,
          470,
          472
        ],
        "'YIELD": [
          -1,
          470,
          472
        ],
        "'DASH": [
          -1,
          470,
          472
        ],
        "'BANG": [
          -1,
          470,
          472
        ],
        "'LBRACK": [
          -1,
          470,
          472
        ],
        "'NUMBER": [
          -1,
          470,
          472
        ],
        "'TRUE": [
          -1,
          470,
          472
        ],
        "'FALSE": [
          -1,
          470,
          472
        ],
        "'NULL": [
          -1,
          470,
          472
        ],
        "'PARENAFTERBRACE": [
          -1,
          470,
          472
        ],
        "'SIEVE": [
          -1,
          470,
          472
        ],
        "'ORDER": [
          -1,
          470,
          472
        ],
        "'EXTEND": [
          -1,
          470,
          472
        ],
        "'SELECT": [
          -1,
          470,
          472
        ],
        "'EXTRACT": [
          -1,
          470,
          472
        ],
        "'BLOCK": [
          -1,
          470,
          472
        ],
        "'TABLE": [
          -1,
          470,
          472
        ],
        "'ASK": [
          -1,
          470,
          472
        ],
        "'NEW": [
          -1,
          470,
          472
        ]
      },
      {
        "'SEMI": [
          434
        ],
        "assert-stmt_A9_I3?": [
          435
        ],
        "assert-stmt_A9_I3": [
          436
        ],
        "'NAME": [
          -1,
          474,
          476
        ],
        "'PARENNOSPACE": [
          -1,
          474,
          476
        ],
        "'STRING": [
          -1,
          474,
          476
        ],
        "'LBRACE": [
          -1,
          474,
          476
        ],
        "'RBRACE": [
          -1,
          474,
          476
        ],
        "'SPY": [
          -1,
          474,
          476
        ],
        "'PARENSPACE": [
          -1,
          474,
          476
        ],
        "'INT": [
          -1,
          474,
          476
        ],
        "'LONG": [
          -1,
          474,
          476
        ],
        "'DOUBLE": [
          -1,
          474,
          476
        ],
        "'FLOAT": [
          -1,
          474,
          476
        ],
        "'BOOLEAN": [
          -1,
          474,
          476
        ],
        "'VOID": [
          -1,
          474,
          476
        ],
        "'DATA": [
          -1,
          474,
          476
        ],
        "'IF": [
          -1,
          474,
          476
        ],
        "'FOR": [
          -1,
          474,
          476
        ],
        "'RETURN": [
          -1,
          474,
          476
        ],
        "'VAR": [
          -1,
          474,
          476
        ],
        "'REC": [
          -1,
          474,
          476
        ],
        "'ATCHECK": [
          -1,
          474,
          476
        ],
        "'ASSERTEQUALS": [
          -1,
          474,
          476
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          474,
          476
        ],
        "'ASSERTTRUE": [
          -1,
          474,
          476
        ],
        "'ASSERTFALSE": [
          -1,
          474,
          476
        ],
        "'ASSERTSATISFIES": [
          -1,
          474,
          476
        ],
        "'ASSERTRAISES": [
          -1,
          474,
          476
        ],
        "'SWITCH": [
          -1,
          474,
          476
        ],
        "'YIELD": [
          -1,
          474,
          476
        ],
        "'DASH": [
          -1,
          474,
          476
        ],
        "'BANG": [
          -1,
          474,
          476
        ],
        "'LBRACK": [
          -1,
          474,
          476
        ],
        "'NUMBER": [
          -1,
          474,
          476
        ],
        "'TRUE": [
          -1,
          474,
          476
        ],
        "'FALSE": [
          -1,
          474,
          476
        ],
        "'NULL": [
          -1,
          474,
          476
        ],
        "'PARENAFTERBRACE": [
          -1,
          474,
          476
        ],
        "'SIEVE": [
          -1,
          474,
          476
        ],
        "'ORDER": [
          -1,
          474,
          476
        ],
        "'EXTEND": [
          -1,
          474,
          476
        ],
        "'SELECT": [
          -1,
          474,
          476
        ],
        "'EXTRACT": [
          -1,
          474,
          476
        ],
        "'BLOCK": [
          -1,
          474,
          476
        ],
        "'TABLE": [
          -1,
          474,
          476
        ],
        "'ASK": [
          -1,
          474,
          476
        ],
        "'NEW": [
          -1,
          474,
          476
        ]
      },
      {
        "'NAME": [
          437
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          478
        ],
        "'ORDER": [
          -1,
          478
        ],
        "'EXTEND": [
          -1,
          478
        ],
        "'SELECT": [
          -1,
          478
        ],
        "'EXTRACT": [
          -1,
          478
        ],
        "'BLOCK": [
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
        "'COMMA": [
          438
        ]
      },
      {
        "'COMMA": [
          439
        ]
      },
      {
        "'RPAREN": [
          440
        ]
      },
      {
        "'RPAREN": [
          441
        ]
      },
      {
        "'COMMA": [
          442
        ]
      },
      {
        "'COMMA": [
          443
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
        "'REC": [
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
        "'CASE": [
          -1,
          480
        ],
        "'DEFAULT": [
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
        "'SIEVE": [
          -1,
          480
        ],
        "'ORDER": [
          -1,
          480
        ],
        "'EXTEND": [
          -1,
          480
        ],
        "'SELECT": [
          -1,
          480
        ],
        "'EXTRACT": [
          -1,
          480
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'CASE": [
          -1,
          482
        ],
        "'DEFAULT": [
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
        "'SIEVE": [
          -1,
          482
        ],
        "'ORDER": [
          -1,
          482
        ],
        "'EXTEND": [
          -1,
          482
        ],
        "'SELECT": [
          -1,
          482
        ],
        "'EXTRACT": [
          -1,
          482
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'CASE": [
          -1,
          484
        ],
        "'DEFAULT": [
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
        "'SIEVE": [
          -1,
          484
        ],
        "'ORDER": [
          -1,
          484
        ],
        "'EXTEND": [
          -1,
          484
        ],
        "'SELECT": [
          -1,
          484
        ],
        "'EXTRACT": [
          -1,
          484
        ],
        "'BLOCK": [
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
        "check-block_A0_I6*": [
          444
        ],
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          486
        ],
        "'ORDER": [
          -1,
          486
        ],
        "'EXTEND": [
          -1,
          486
        ],
        "'SELECT": [
          -1,
          486
        ],
        "'EXTRACT": [
          -1,
          486
        ],
        "'BLOCK": [
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
        "switch-expr_I6?": [
          445
        ],
        "switch-expr_I5": [
          446
        ],
        "case-branch": [
          447
        ],
        "switch-expr_I6": [
          448
        ],
        "default-branch": [
          449
        ],
        "'CASE": [
          450
        ],
        "'DEFAULT": [
          451
        ],
        "'RBRACE": [
          -1,
          488
        ]
      },
      {
        "'RPAREN": [
          -1,
          490
        ],
        "'COMMA": [
          -1,
          490
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          452
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'COMMA": [
          -1,
          492
        ],
        "'RBRACK": [
          -1,
          492
        ]
      },
      {
        "'COLON": [
          453
        ],
        "'EQUALS": [
          454
        ]
      },
      {
        "'RPAREN": [
          455
        ],
        "'COMMA": [
          456
        ],
        "map-for-expr_A1_I5": [
          457
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          458
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "sieve-expr_I6*": [
          459
        ],
        "'NAME": [
          -1,
          494
        ],
        "'PARENNOSPACE": [
          -1,
          494
        ],
        "'STRING": [
          -1,
          494
        ],
        "'LBRACE": [
          -1,
          494
        ],
        "'RBRACE": [
          -1,
          494
        ],
        "'SPY": [
          -1,
          494
        ],
        "'PARENSPACE": [
          -1,
          494
        ],
        "'INT": [
          -1,
          494
        ],
        "'LONG": [
          -1,
          494
        ],
        "'DOUBLE": [
          -1,
          494
        ],
        "'FLOAT": [
          -1,
          494
        ],
        "'BOOLEAN": [
          -1,
          494
        ],
        "'VOID": [
          -1,
          494
        ],
        "'DATA": [
          -1,
          494
        ],
        "'IF": [
          -1,
          494
        ],
        "'FOR": [
          -1,
          494
        ],
        "'RETURN": [
          -1,
          494
        ],
        "'VAR": [
          -1,
          494
        ],
        "'REC": [
          -1,
          494
        ],
        "'ATCHECK": [
          -1,
          494
        ],
        "'SWITCH": [
          -1,
          494
        ],
        "'YIELD": [
          -1,
          494
        ],
        "'DASH": [
          -1,
          494
        ],
        "'BANG": [
          -1,
          494
        ],
        "'LBRACK": [
          -1,
          494
        ],
        "'NUMBER": [
          -1,
          494
        ],
        "'TRUE": [
          -1,
          494
        ],
        "'FALSE": [
          -1,
          494
        ],
        "'NULL": [
          -1,
          494
        ],
        "'PARENAFTERBRACE": [
          -1,
          494
        ],
        "'SIEVE": [
          -1,
          494
        ],
        "'ORDER": [
          -1,
          494
        ],
        "'EXTEND": [
          -1,
          494
        ],
        "'SELECT": [
          -1,
          494
        ],
        "'EXTRACT": [
          -1,
          494
        ],
        "'BLOCK": [
          -1,
          494
        ],
        "'TABLE": [
          -1,
          494
        ],
        "'ASK": [
          -1,
          494
        ],
        "'NEW": [
          -1,
          494
        ]
      },
      {
        "'NAME": [
          460
        ]
      },
      {
        "'LBRACE": [
          -1,
          496
        ],
        "'COMMA": [
          -1,
          496
        ]
      },
      {
        "'NAME": [
          262
        ],
        "column-sort": [
          461
        ],
        "'RBRACE": [
          -1,
          498
        ]
      },
      {
        "'RBRACE": [
          462
        ]
      },
      {
        "'SEMI": [
          -1,
          500
        ],
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
          101
        ],
        "let-stmt": [
          463
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          464
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ]
      },
      {
        "'NAME": [
          465
        ]
      },
      {
        "'LBRACE": [
          -1,
          504
        ],
        "'COMMA": [
          -1,
          504
        ]
      },
      {
        "'RBRACE": [
          466
        ],
        "table-expr_I5": [
          467
        ],
        "table-row": [
          468
        ],
        "'ROW": [
          469
        ]
      },
      {
        "'SEMI": [
          -1,
          506
        ],
        "'COMMA": [
          -1,
          506
        ]
      },
      {
        "$": [
          -1,
          508
        ],
        "'NAME": [
          -1,
          508
        ],
        "'SEMI": [
          -1,
          508
        ],
        "'PARENNOSPACE": [
          -1,
          508
        ],
        "'STRING": [
          -1,
          508
        ],
        "'RPAREN": [
          -1,
          508
        ],
        "'LBRACE": [
          -1,
          508
        ],
        "'RBRACE": [
          -1,
          508
        ],
        "'SPY": [
          -1,
          508
        ],
        "'PARENSPACE": [
          -1,
          508
        ],
        "'COMMA": [
          -1,
          508
        ],
        "'INT": [
          -1,
          508
        ],
        "'LONG": [
          -1,
          508
        ],
        "'DOUBLE": [
          -1,
          508
        ],
        "'FLOAT": [
          -1,
          508
        ],
        "'BOOLEAN": [
          -1,
          508
        ],
        "'VOID": [
          -1,
          508
        ],
        "'LT": [
          -1,
          508
        ],
        "'GT": [
          -1,
          508
        ],
        "'THINARROW": [
          -1,
          508
        ],
        "'DATA": [
          -1,
          508
        ],
        "'IF": [
          -1,
          508
        ],
        "'FOR": [
          -1,
          508
        ],
        "'RETURN": [
          -1,
          508
        ],
        "'VAR": [
          -1,
          508
        ],
        "'REC": [
          -1,
          508
        ],
        "'ATCHECK": [
          -1,
          508
        ],
        "'ASSERTEQUALS": [
          -1,
          508
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          508
        ],
        "'ASSERTTRUE": [
          -1,
          508
        ],
        "'ASSERTFALSE": [
          -1,
          508
        ],
        "'ASSERTSATISFIES": [
          -1,
          508
        ],
        "'ASSERTRAISES": [
          -1,
          508
        ],
        "'IS": [
          -1,
          508
        ],
        "'ISNOT": [
          -1,
          508
        ],
        "'SATISFIES": [
          -1,
          508
        ],
        "'RAISES": [
          -1,
          508
        ],
        "'SWITCH": [
          -1,
          508
        ],
        "'CASE": [
          -1,
          508
        ],
        "'DEFAULT": [
          -1,
          508
        ],
        "'YIELD": [
          -1,
          508
        ],
        "'PLUS": [
          -1,
          508
        ],
        "'DASH": [
          -1,
          508
        ],
        "'TIMES": [
          -1,
          508
        ],
        "'SLASH": [
          -1,
          508
        ],
        "'PERCENT": [
          -1,
          508
        ],
        "'EQUALEQUAL": [
          -1,
          508
        ],
        "'NEQ": [
          -1,
          508
        ],
        "'LEQ": [
          -1,
          508
        ],
        "'GEQ": [
          -1,
          508
        ],
        "'AND": [
          -1,
          508
        ],
        "'OR": [
          -1,
          508
        ],
        "'BANG": [
          -1,
          508
        ],
        "'DOT": [
          -1,
          508
        ],
        "'LBRACK": [
          -1,
          508
        ],
        "'RBRACK": [
          -1,
          508
        ],
        "'NUMBER": [
          -1,
          508
        ],
        "'TRUE": [
          -1,
          508
        ],
        "'FALSE": [
          -1,
          508
        ],
        "'NULL": [
          -1,
          508
        ],
        "'PARENAFTERBRACE": [
          -1,
          508
        ],
        "'SIEVE": [
          -1,
          508
        ],
        "'USING": [
          -1,
          508
        ],
        "'ORDER": [
          -1,
          508
        ],
        "'EXTEND": [
          -1,
          508
        ],
        "'SELECT": [
          -1,
          508
        ],
        "'EXTRACT": [
          -1,
          508
        ],
        "'BLOCK": [
          -1,
          508
        ],
        "'TABLE": [
          -1,
          508
        ],
        "'ASK": [
          -1,
          508
        ],
        "'NEW": [
          -1,
          508
        ]
      },
      {
        "'SEMI": [
          470
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
        "'SIEVE": [
          -1,
          510
        ],
        "'ORDER": [
          -1,
          510
        ],
        "'EXTEND": [
          -1,
          510
        ],
        "'SELECT": [
          -1,
          510
        ],
        "'EXTRACT": [
          -1,
          510
        ],
        "'BLOCK": [
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
        "'SEMI": [
          471
        ]
      },
      {
        "'SEMI": [
          472
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
        "'SIEVE": [
          -1,
          512
        ],
        "'ORDER": [
          -1,
          512
        ],
        "'EXTEND": [
          -1,
          512
        ],
        "'SELECT": [
          -1,
          512
        ],
        "'EXTRACT": [
          -1,
          512
        ],
        "'BLOCK": [
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
        "'THINARROW": [
          473
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          474
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
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
        "'SEMI": [
          475
        ]
      },
      {
        "$": [
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
        "'LBRACE": [
          -1,
          516
        ],
        "'RBRACE": [
          -1,
          516
        ],
        "'SPY": [
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
        "'IF": [
          -1,
          516
        ],
        "'FOR": [
          -1,
          516
        ],
        "'RETURN": [
          -1,
          516
        ],
        "'VAR": [
          -1,
          516
        ],
        "'REC": [
          -1,
          516
        ],
        "'ATCHECK": [
          -1,
          516
        ],
        "'ASSERTEQUALS": [
          -1,
          516
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          516
        ],
        "'ASSERTTRUE": [
          -1,
          516
        ],
        "'ASSERTFALSE": [
          -1,
          516
        ],
        "'ASSERTSATISFIES": [
          -1,
          516
        ],
        "'ASSERTRAISES": [
          -1,
          516
        ],
        "'SWITCH": [
          -1,
          516
        ],
        "'YIELD": [
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
        "'SIEVE": [
          -1,
          516
        ],
        "'ORDER": [
          -1,
          516
        ],
        "'EXTEND": [
          -1,
          516
        ],
        "'SELECT": [
          -1,
          516
        ],
        "'EXTRACT": [
          -1,
          516
        ],
        "'BLOCK": [
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
        "$": [
          -1,
          518
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          518
        ],
        "'ORDER": [
          -1,
          518
        ],
        "'EXTEND": [
          -1,
          518
        ],
        "'SELECT": [
          -1,
          518
        ],
        "'EXTRACT": [
          -1,
          518
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          520
        ],
        "'ORDER": [
          -1,
          520
        ],
        "'EXTEND": [
          -1,
          520
        ],
        "'SELECT": [
          -1,
          520
        ],
        "'EXTRACT": [
          -1,
          520
        ],
        "'BLOCK": [
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
        "'LBRACE": [
          476
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
          221
        ],
        "data-decl": [
          222
        ],
        "check-block": [
          223
        ],
        "let-stmt": [
          224
        ],
        "var-stmt": [
          225
        ],
        "rec-stmt": [
          226
        ],
        "assign-stmt": [
          227
        ],
        "expr-stmt": [
          228
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          477
        ],
        "block_I1": [
          478
        ],
        "block-stmt": [
          479
        ],
        "if-stmt": [
          231
        ],
        "for-stmt": [
          232
        ],
        "return-stmt": [
          233
        ],
        "yield-stmt": [
          234
        ],
        "spy-stmt": [
          235
        ],
        "'SPY": [
          236
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          238
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          240
        ],
        "'RETURN": [
          241
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          249
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'RPAREN": [
          -1,
          522
        ],
        "'COMMA": [
          -1,
          522
        ]
      },
      {
        "'RPAREN": [
          -1,
          524
        ],
        "'COMMA": [
          -1,
          524
        ]
      },
      {
        "'SEMI": [
          -1,
          526
        ],
        "'RBRACE": [
          -1,
          526
        ]
      },
      {
        "'COMMA": [
          480
        ],
        "variant-decl_A0_I2_I1": [
          481
        ],
        "'RPAREN": [
          -1,
          528
        ]
      },
      {
        "'SEMI": [
          -1,
          530
        ],
        "'RBRACE": [
          -1,
          530
        ]
      },
      {
        "$": [
          -1,
          532
        ],
        "'NAME": [
          -1,
          532
        ],
        "'PARENNOSPACE": [
          -1,
          532
        ],
        "'STRING": [
          -1,
          532
        ],
        "'LBRACE": [
          -1,
          532
        ],
        "'RBRACE": [
          -1,
          532
        ],
        "'SPY": [
          -1,
          532
        ],
        "'PARENSPACE": [
          -1,
          532
        ],
        "'INT": [
          -1,
          532
        ],
        "'LONG": [
          -1,
          532
        ],
        "'DOUBLE": [
          -1,
          532
        ],
        "'FLOAT": [
          -1,
          532
        ],
        "'BOOLEAN": [
          -1,
          532
        ],
        "'VOID": [
          -1,
          532
        ],
        "'DATA": [
          -1,
          532
        ],
        "'IF": [
          -1,
          532
        ],
        "'FOR": [
          -1,
          532
        ],
        "'RETURN": [
          -1,
          532
        ],
        "'VAR": [
          -1,
          532
        ],
        "'REC": [
          -1,
          532
        ],
        "'ATCHECK": [
          -1,
          532
        ],
        "'ASSERTEQUALS": [
          -1,
          532
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          532
        ],
        "'ASSERTTRUE": [
          -1,
          532
        ],
        "'ASSERTFALSE": [
          -1,
          532
        ],
        "'ASSERTSATISFIES": [
          -1,
          532
        ],
        "'ASSERTRAISES": [
          -1,
          532
        ],
        "'SWITCH": [
          -1,
          532
        ],
        "'YIELD": [
          -1,
          532
        ],
        "'DASH": [
          -1,
          532
        ],
        "'BANG": [
          -1,
          532
        ],
        "'LBRACK": [
          -1,
          532
        ],
        "'NUMBER": [
          -1,
          532
        ],
        "'TRUE": [
          -1,
          532
        ],
        "'FALSE": [
          -1,
          532
        ],
        "'NULL": [
          -1,
          532
        ],
        "'PARENAFTERBRACE": [
          -1,
          532
        ],
        "'SIEVE": [
          -1,
          532
        ],
        "'ORDER": [
          -1,
          532
        ],
        "'EXTEND": [
          -1,
          532
        ],
        "'SELECT": [
          -1,
          532
        ],
        "'EXTRACT": [
          -1,
          532
        ],
        "'BLOCK": [
          -1,
          532
        ],
        "'TABLE": [
          -1,
          532
        ],
        "'ASK": [
          -1,
          532
        ],
        "'NEW": [
          -1,
          532
        ]
      },
      {
        "'RPAREN": [
          482
        ],
        "spy-stmt_I3": [
          483
        ],
        "'COMMA": [
          484
        ]
      },
      {
        "block": [
          485
        ],
        "'LBRACE": [
          348
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          534
        ],
        "'ORDER": [
          -1,
          534
        ],
        "'EXTEND": [
          -1,
          534
        ],
        "'SELECT": [
          -1,
          534
        ],
        "'EXTRACT": [
          -1,
          534
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          536
        ],
        "'ORDER": [
          -1,
          536
        ],
        "'EXTEND": [
          -1,
          536
        ],
        "'SELECT": [
          -1,
          536
        ],
        "'EXTRACT": [
          -1,
          536
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          538
        ],
        "'ORDER": [
          -1,
          538
        ],
        "'EXTEND": [
          -1,
          538
        ],
        "'SELECT": [
          -1,
          538
        ],
        "'EXTRACT": [
          -1,
          538
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          540
        ],
        "'ORDER": [
          -1,
          540
        ],
        "'EXTEND": [
          -1,
          540
        ],
        "'SELECT": [
          -1,
          540
        ],
        "'EXTRACT": [
          -1,
          540
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          542
        ],
        "'ORDER": [
          -1,
          542
        ],
        "'EXTEND": [
          -1,
          542
        ],
        "'SELECT": [
          -1,
          542
        ],
        "'EXTRACT": [
          -1,
          542
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          544
        ],
        "'ORDER": [
          -1,
          544
        ],
        "'EXTEND": [
          -1,
          544
        ],
        "'SELECT": [
          -1,
          544
        ],
        "'EXTRACT": [
          -1,
          544
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          546
        ],
        "'ORDER": [
          -1,
          546
        ],
        "'EXTEND": [
          -1,
          546
        ],
        "'SELECT": [
          -1,
          546
        ],
        "'EXTRACT": [
          -1,
          546
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          548
        ],
        "'ORDER": [
          -1,
          548
        ],
        "'EXTEND": [
          -1,
          548
        ],
        "'SELECT": [
          -1,
          548
        ],
        "'EXTRACT": [
          -1,
          548
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          550
        ],
        "'ORDER": [
          -1,
          550
        ],
        "'EXTEND": [
          -1,
          550
        ],
        "'SELECT": [
          -1,
          550
        ],
        "'EXTRACT": [
          -1,
          550
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          552
        ],
        "'ORDER": [
          -1,
          552
        ],
        "'EXTEND": [
          -1,
          552
        ],
        "'SELECT": [
          -1,
          552
        ],
        "'EXTRACT": [
          -1,
          552
        ],
        "'BLOCK": [
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
        "'NAME": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          554
        ],
        "'YIELD": [
          -1,
          554
        ],
        "'DASH": [
          -1,
          554
        ],
        "'BANG": [
          -1,
          554
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          554
        ],
        "'ORDER": [
          -1,
          554
        ],
        "'EXTEND": [
          -1,
          554
        ],
        "'SELECT": [
          -1,
          554
        ],
        "'EXTRACT": [
          -1,
          554
        ],
        "'BLOCK": [
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
        "'RBRACE": [
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
        "'REC": [
          -1,
          556
        ],
        "'ATCHECK": [
          -1,
          556
        ],
        "'ASSERTEQUALS": [
          -1,
          556
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          556
        ],
        "'ASSERTTRUE": [
          -1,
          556
        ],
        "'ASSERTFALSE": [
          -1,
          556
        ],
        "'ASSERTSATISFIES": [
          -1,
          556
        ],
        "'ASSERTRAISES": [
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
        "'SIEVE": [
          -1,
          556
        ],
        "'ORDER": [
          -1,
          556
        ],
        "'EXTEND": [
          -1,
          556
        ],
        "'SELECT": [
          -1,
          556
        ],
        "'EXTRACT": [
          -1,
          556
        ],
        "'BLOCK": [
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
        "'COLON": [
          486
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          487
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          488
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'SEMI": [
          489
        ],
        "assert-stmt_A2_I4?": [
          490
        ],
        "assert-stmt_A2_I4": [
          491
        ],
        "'NAME": [
          -1,
          558,
          560
        ],
        "'PARENNOSPACE": [
          -1,
          558,
          560
        ],
        "'STRING": [
          -1,
          558,
          560
        ],
        "'LBRACE": [
          -1,
          558,
          560
        ],
        "'RBRACE": [
          -1,
          558,
          560
        ],
        "'SPY": [
          -1,
          558,
          560
        ],
        "'PARENSPACE": [
          -1,
          558,
          560
        ],
        "'INT": [
          -1,
          558,
          560
        ],
        "'LONG": [
          -1,
          558,
          560
        ],
        "'DOUBLE": [
          -1,
          558,
          560
        ],
        "'FLOAT": [
          -1,
          558,
          560
        ],
        "'BOOLEAN": [
          -1,
          558,
          560
        ],
        "'VOID": [
          -1,
          558,
          560
        ],
        "'DATA": [
          -1,
          558,
          560
        ],
        "'IF": [
          -1,
          558,
          560
        ],
        "'FOR": [
          -1,
          558,
          560
        ],
        "'RETURN": [
          -1,
          558,
          560
        ],
        "'VAR": [
          -1,
          558,
          560
        ],
        "'REC": [
          -1,
          558,
          560
        ],
        "'ATCHECK": [
          -1,
          558,
          560
        ],
        "'ASSERTEQUALS": [
          -1,
          558,
          560
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          558,
          560
        ],
        "'ASSERTTRUE": [
          -1,
          558,
          560
        ],
        "'ASSERTFALSE": [
          -1,
          558,
          560
        ],
        "'ASSERTSATISFIES": [
          -1,
          558,
          560
        ],
        "'ASSERTRAISES": [
          -1,
          558,
          560
        ],
        "'SWITCH": [
          -1,
          558,
          560
        ],
        "'YIELD": [
          -1,
          558,
          560
        ],
        "'DASH": [
          -1,
          558,
          560
        ],
        "'BANG": [
          -1,
          558,
          560
        ],
        "'LBRACK": [
          -1,
          558,
          560
        ],
        "'NUMBER": [
          -1,
          558,
          560
        ],
        "'TRUE": [
          -1,
          558,
          560
        ],
        "'FALSE": [
          -1,
          558,
          560
        ],
        "'NULL": [
          -1,
          558,
          560
        ],
        "'PARENAFTERBRACE": [
          -1,
          558,
          560
        ],
        "'SIEVE": [
          -1,
          558,
          560
        ],
        "'ORDER": [
          -1,
          558,
          560
        ],
        "'EXTEND": [
          -1,
          558,
          560
        ],
        "'SELECT": [
          -1,
          558,
          560
        ],
        "'EXTRACT": [
          -1,
          558,
          560
        ],
        "'BLOCK": [
          -1,
          558,
          560
        ],
        "'TABLE": [
          -1,
          558,
          560
        ],
        "'ASK": [
          -1,
          558,
          560
        ],
        "'NEW": [
          -1,
          558,
          560
        ]
      },
      {
        "'SEMI": [
          492
        ],
        "assert-stmt_A3_I4?": [
          493
        ],
        "assert-stmt_A3_I4": [
          494
        ],
        "'NAME": [
          -1,
          562,
          564
        ],
        "'PARENNOSPACE": [
          -1,
          562,
          564
        ],
        "'STRING": [
          -1,
          562,
          564
        ],
        "'LBRACE": [
          -1,
          562,
          564
        ],
        "'RBRACE": [
          -1,
          562,
          564
        ],
        "'SPY": [
          -1,
          562,
          564
        ],
        "'PARENSPACE": [
          -1,
          562,
          564
        ],
        "'INT": [
          -1,
          562,
          564
        ],
        "'LONG": [
          -1,
          562,
          564
        ],
        "'DOUBLE": [
          -1,
          562,
          564
        ],
        "'FLOAT": [
          -1,
          562,
          564
        ],
        "'BOOLEAN": [
          -1,
          562,
          564
        ],
        "'VOID": [
          -1,
          562,
          564
        ],
        "'DATA": [
          -1,
          562,
          564
        ],
        "'IF": [
          -1,
          562,
          564
        ],
        "'FOR": [
          -1,
          562,
          564
        ],
        "'RETURN": [
          -1,
          562,
          564
        ],
        "'VAR": [
          -1,
          562,
          564
        ],
        "'REC": [
          -1,
          562,
          564
        ],
        "'ATCHECK": [
          -1,
          562,
          564
        ],
        "'ASSERTEQUALS": [
          -1,
          562,
          564
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          562,
          564
        ],
        "'ASSERTTRUE": [
          -1,
          562,
          564
        ],
        "'ASSERTFALSE": [
          -1,
          562,
          564
        ],
        "'ASSERTSATISFIES": [
          -1,
          562,
          564
        ],
        "'ASSERTRAISES": [
          -1,
          562,
          564
        ],
        "'SWITCH": [
          -1,
          562,
          564
        ],
        "'YIELD": [
          -1,
          562,
          564
        ],
        "'DASH": [
          -1,
          562,
          564
        ],
        "'BANG": [
          -1,
          562,
          564
        ],
        "'LBRACK": [
          -1,
          562,
          564
        ],
        "'NUMBER": [
          -1,
          562,
          564
        ],
        "'TRUE": [
          -1,
          562,
          564
        ],
        "'FALSE": [
          -1,
          562,
          564
        ],
        "'NULL": [
          -1,
          562,
          564
        ],
        "'PARENAFTERBRACE": [
          -1,
          562,
          564
        ],
        "'SIEVE": [
          -1,
          562,
          564
        ],
        "'ORDER": [
          -1,
          562,
          564
        ],
        "'EXTEND": [
          -1,
          562,
          564
        ],
        "'SELECT": [
          -1,
          562,
          564
        ],
        "'EXTRACT": [
          -1,
          562,
          564
        ],
        "'BLOCK": [
          -1,
          562,
          564
        ],
        "'TABLE": [
          -1,
          562,
          564
        ],
        "'ASK": [
          -1,
          562,
          564
        ],
        "'NEW": [
          -1,
          562,
          564
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          495
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          496
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
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
          221
        ],
        "data-decl": [
          222
        ],
        "check-block": [
          223
        ],
        "let-stmt": [
          224
        ],
        "var-stmt": [
          225
        ],
        "rec-stmt": [
          226
        ],
        "assign-stmt": [
          227
        ],
        "expr-stmt": [
          228
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          497
        ],
        "block-stmt": [
          498
        ],
        "if-stmt": [
          231
        ],
        "for-stmt": [
          232
        ],
        "return-stmt": [
          233
        ],
        "yield-stmt": [
          234
        ],
        "spy-stmt": [
          235
        ],
        "'SPY": [
          236
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "assert-stmt": [
          499
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          238
        ],
        "full-expr": [
          239
        ],
        "'FOR": [
          240
        ],
        "'RETURN": [
          241
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "check-block_A0_I6": [
          500
        ],
        "'ASSERTEQUALS": [
          243
        ],
        "'ASSERTNOTEQUALS": [
          244
        ],
        "'ASSERTTRUE": [
          245
        ],
        "'ASSERTFALSE": [
          246
        ],
        "'ASSERTSATISFIES": [
          247
        ],
        "'ASSERTRAISES": [
          248
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          249
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'RBRACE": [
          501
        ]
      },
      {
        "'RBRACE": [
          -1,
          566
        ],
        "'CASE": [
          -1,
          566
        ],
        "'DEFAULT": [
          -1,
          566
        ]
      },
      {
        "'RBRACE": [
          -1,
          568
        ],
        "'CASE": [
          -1,
          568
        ],
        "'DEFAULT": [
          -1,
          568
        ]
      },
      {
        "'RBRACE": [
          -1,
          570
        ]
      },
      {
        "'RBRACE": [
          -1,
          572
        ]
      },
      {
        "'NAME": [
          502
        ]
      },
      {
        "'COLON": [
          503
        ]
      },
      {
        "'COMMA": [
          -1,
          574
        ],
        "'RBRACK": [
          -1,
          574
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          504
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          505
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "block": [
          506
        ],
        "'LBRACE": [
          348
        ]
      },
      {
        "'NAME": [
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          325
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "for-bind": [
          507
        ]
      },
      {
        "'RPAREN": [
          -1,
          576
        ],
        "'COMMA": [
          -1,
          576
        ]
      },
      {
        "'RPAREN": [
          508
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
          221
        ],
        "data-decl": [
          222
        ],
        "check-block": [
          223
        ],
        "let-stmt": [
          224
        ],
        "var-stmt": [
          225
        ],
        "rec-stmt": [
          226
        ],
        "assign-stmt": [
          227
        ],
        "expr-stmt": [
          228
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          509
        ],
        "block-stmt": [
          510
        ],
        "if-stmt": [
          231
        ],
        "for-stmt": [
          232
        ],
        "return-stmt": [
          233
        ],
        "yield-stmt": [
          234
        ],
        "spy-stmt": [
          235
        ],
        "'SPY": [
          236
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          238
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          240
        ],
        "'RETURN": [
          241
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          249
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "sieve-expr_I6": [
          511
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'LBRACE": [
          -1,
          578
        ],
        "'COMMA": [
          -1,
          578
        ]
      },
      {
        "'SEMI": [
          -1,
          580
        ],
        "'RBRACE": [
          -1,
          580
        ]
      },
      {
        "$": [
          -1,
          582
        ],
        "'NAME": [
          -1,
          582
        ],
        "'SEMI": [
          -1,
          582
        ],
        "'PARENNOSPACE": [
          -1,
          582
        ],
        "'STRING": [
          -1,
          582
        ],
        "'RPAREN": [
          -1,
          582
        ],
        "'LBRACE": [
          -1,
          582
        ],
        "'RBRACE": [
          -1,
          582
        ],
        "'SPY": [
          -1,
          582
        ],
        "'PARENSPACE": [
          -1,
          582
        ],
        "'COMMA": [
          -1,
          582
        ],
        "'INT": [
          -1,
          582
        ],
        "'LONG": [
          -1,
          582
        ],
        "'DOUBLE": [
          -1,
          582
        ],
        "'FLOAT": [
          -1,
          582
        ],
        "'BOOLEAN": [
          -1,
          582
        ],
        "'VOID": [
          -1,
          582
        ],
        "'LT": [
          -1,
          582
        ],
        "'GT": [
          -1,
          582
        ],
        "'THINARROW": [
          -1,
          582
        ],
        "'DATA": [
          -1,
          582
        ],
        "'IF": [
          -1,
          582
        ],
        "'FOR": [
          -1,
          582
        ],
        "'RETURN": [
          -1,
          582
        ],
        "'VAR": [
          -1,
          582
        ],
        "'REC": [
          -1,
          582
        ],
        "'ATCHECK": [
          -1,
          582
        ],
        "'ASSERTEQUALS": [
          -1,
          582
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          582
        ],
        "'ASSERTTRUE": [
          -1,
          582
        ],
        "'ASSERTFALSE": [
          -1,
          582
        ],
        "'ASSERTSATISFIES": [
          -1,
          582
        ],
        "'ASSERTRAISES": [
          -1,
          582
        ],
        "'IS": [
          -1,
          582
        ],
        "'ISNOT": [
          -1,
          582
        ],
        "'SATISFIES": [
          -1,
          582
        ],
        "'RAISES": [
          -1,
          582
        ],
        "'SWITCH": [
          -1,
          582
        ],
        "'CASE": [
          -1,
          582
        ],
        "'DEFAULT": [
          -1,
          582
        ],
        "'YIELD": [
          -1,
          582
        ],
        "'PLUS": [
          -1,
          582
        ],
        "'DASH": [
          -1,
          582
        ],
        "'TIMES": [
          -1,
          582
        ],
        "'SLASH": [
          -1,
          582
        ],
        "'PERCENT": [
          -1,
          582
        ],
        "'EQUALEQUAL": [
          -1,
          582
        ],
        "'NEQ": [
          -1,
          582
        ],
        "'LEQ": [
          -1,
          582
        ],
        "'GEQ": [
          -1,
          582
        ],
        "'AND": [
          -1,
          582
        ],
        "'OR": [
          -1,
          582
        ],
        "'BANG": [
          -1,
          582
        ],
        "'DOT": [
          -1,
          582
        ],
        "'LBRACK": [
          -1,
          582
        ],
        "'RBRACK": [
          -1,
          582
        ],
        "'NUMBER": [
          -1,
          582
        ],
        "'TRUE": [
          -1,
          582
        ],
        "'FALSE": [
          -1,
          582
        ],
        "'NULL": [
          -1,
          582
        ],
        "'PARENAFTERBRACE": [
          -1,
          582
        ],
        "'SIEVE": [
          -1,
          582
        ],
        "'USING": [
          -1,
          582
        ],
        "'ORDER": [
          -1,
          582
        ],
        "'EXTEND": [
          -1,
          582
        ],
        "'SELECT": [
          -1,
          582
        ],
        "'EXTRACT": [
          -1,
          582
        ],
        "'BLOCK": [
          -1,
          582
        ],
        "'TABLE": [
          -1,
          582
        ],
        "'ASK": [
          -1,
          582
        ],
        "'NEW": [
          -1,
          582
        ]
      },
      {
        "extend-expr_I7*": [
          512
        ],
        "'NAME": [
          -1,
          584
        ],
        "'RBRACE": [
          -1,
          584
        ],
        "'PARENSPACE": [
          -1,
          584
        ],
        "'INT": [
          -1,
          584
        ],
        "'LONG": [
          -1,
          584
        ],
        "'DOUBLE": [
          -1,
          584
        ],
        "'FLOAT": [
          -1,
          584
        ],
        "'BOOLEAN": [
          -1,
          584
        ],
        "'VOID": [
          -1,
          584
        ]
      },
      {
        "'NAME": [
          513
        ]
      },
      {
        "'LBRACE": [
          -1,
          586
        ],
        "'COMMA": [
          -1,
          586
        ]
      },
      {
        "$": [
          -1,
          588
        ],
        "'NAME": [
          -1,
          588
        ],
        "'SEMI": [
          -1,
          588
        ],
        "'PARENNOSPACE": [
          -1,
          588
        ],
        "'STRING": [
          -1,
          588
        ],
        "'RPAREN": [
          -1,
          588
        ],
        "'LBRACE": [
          -1,
          588
        ],
        "'RBRACE": [
          -1,
          588
        ],
        "'SPY": [
          -1,
          588
        ],
        "'PARENSPACE": [
          -1,
          588
        ],
        "'COMMA": [
          -1,
          588
        ],
        "'INT": [
          -1,
          588
        ],
        "'LONG": [
          -1,
          588
        ],
        "'DOUBLE": [
          -1,
          588
        ],
        "'FLOAT": [
          -1,
          588
        ],
        "'BOOLEAN": [
          -1,
          588
        ],
        "'VOID": [
          -1,
          588
        ],
        "'LT": [
          -1,
          588
        ],
        "'GT": [
          -1,
          588
        ],
        "'THINARROW": [
          -1,
          588
        ],
        "'DATA": [
          -1,
          588
        ],
        "'IF": [
          -1,
          588
        ],
        "'FOR": [
          -1,
          588
        ],
        "'RETURN": [
          -1,
          588
        ],
        "'VAR": [
          -1,
          588
        ],
        "'REC": [
          -1,
          588
        ],
        "'ATCHECK": [
          -1,
          588
        ],
        "'ASSERTEQUALS": [
          -1,
          588
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          588
        ],
        "'ASSERTTRUE": [
          -1,
          588
        ],
        "'ASSERTFALSE": [
          -1,
          588
        ],
        "'ASSERTSATISFIES": [
          -1,
          588
        ],
        "'ASSERTRAISES": [
          -1,
          588
        ],
        "'IS": [
          -1,
          588
        ],
        "'ISNOT": [
          -1,
          588
        ],
        "'SATISFIES": [
          -1,
          588
        ],
        "'RAISES": [
          -1,
          588
        ],
        "'SWITCH": [
          -1,
          588
        ],
        "'CASE": [
          -1,
          588
        ],
        "'DEFAULT": [
          -1,
          588
        ],
        "'YIELD": [
          -1,
          588
        ],
        "'PLUS": [
          -1,
          588
        ],
        "'DASH": [
          -1,
          588
        ],
        "'TIMES": [
          -1,
          588
        ],
        "'SLASH": [
          -1,
          588
        ],
        "'PERCENT": [
          -1,
          588
        ],
        "'EQUALEQUAL": [
          -1,
          588
        ],
        "'NEQ": [
          -1,
          588
        ],
        "'LEQ": [
          -1,
          588
        ],
        "'GEQ": [
          -1,
          588
        ],
        "'AND": [
          -1,
          588
        ],
        "'OR": [
          -1,
          588
        ],
        "'BANG": [
          -1,
          588
        ],
        "'DOT": [
          -1,
          588
        ],
        "'LBRACK": [
          -1,
          588
        ],
        "'RBRACK": [
          -1,
          588
        ],
        "'NUMBER": [
          -1,
          588
        ],
        "'TRUE": [
          -1,
          588
        ],
        "'FALSE": [
          -1,
          588
        ],
        "'NULL": [
          -1,
          588
        ],
        "'PARENAFTERBRACE": [
          -1,
          588
        ],
        "'SIEVE": [
          -1,
          588
        ],
        "'USING": [
          -1,
          588
        ],
        "'ORDER": [
          -1,
          588
        ],
        "'EXTEND": [
          -1,
          588
        ],
        "'SELECT": [
          -1,
          588
        ],
        "'EXTRACT": [
          -1,
          588
        ],
        "'BLOCK": [
          -1,
          588
        ],
        "'TABLE": [
          -1,
          588
        ],
        "'ASK": [
          -1,
          588
        ],
        "'NEW": [
          -1,
          588
        ]
      },
      {
        "'RBRACE": [
          -1,
          590
        ],
        "'ROW": [
          -1,
          590
        ]
      },
      {
        "'SEMI": [
          514
        ]
      },
      {
        "'COLON": [
          515
        ]
      },
      {
        "'NAME": [
          -1,
          592
        ],
        "'STRING": [
          -1,
          592
        ],
        "'LBRACE": [
          -1,
          592
        ],
        "'RBRACE": [
          -1,
          592
        ],
        "'PARENSPACE": [
          -1,
          592
        ],
        "'SWITCH": [
          -1,
          592
        ],
        "'DASH": [
          -1,
          592
        ],
        "'BANG": [
          -1,
          592
        ],
        "'LBRACK": [
          -1,
          592
        ],
        "'NUMBER": [
          -1,
          592
        ],
        "'TRUE": [
          -1,
          592
        ],
        "'FALSE": [
          -1,
          592
        ],
        "'NULL": [
          -1,
          592
        ],
        "'PARENAFTERBRACE": [
          -1,
          592
        ],
        "'SIEVE": [
          -1,
          592
        ],
        "'ORDER": [
          -1,
          592
        ],
        "'EXTEND": [
          -1,
          592
        ],
        "'SELECT": [
          -1,
          592
        ],
        "'EXTRACT": [
          -1,
          592
        ],
        "'BLOCK": [
          -1,
          592
        ],
        "'TABLE": [
          -1,
          592
        ],
        "'ASK": [
          -1,
          592
        ],
        "'NEW": [
          -1,
          592
        ]
      },
      {
        "'NAME": [
          -1,
          594
        ],
        "'STRING": [
          -1,
          594
        ],
        "'LBRACE": [
          -1,
          594
        ],
        "'PARENSPACE": [
          -1,
          594
        ],
        "'SWITCH": [
          -1,
          594
        ],
        "'DASH": [
          -1,
          594
        ],
        "'BANG": [
          -1,
          594
        ],
        "'LBRACK": [
          -1,
          594
        ],
        "'NUMBER": [
          -1,
          594
        ],
        "'TRUE": [
          -1,
          594
        ],
        "'FALSE": [
          -1,
          594
        ],
        "'NULL": [
          -1,
          594
        ],
        "'PARENAFTERBRACE": [
          -1,
          594
        ],
        "'SIEVE": [
          -1,
          594
        ],
        "'ORDER": [
          -1,
          594
        ],
        "'EXTEND": [
          -1,
          594
        ],
        "'SELECT": [
          -1,
          594
        ],
        "'EXTRACT": [
          -1,
          594
        ],
        "'BLOCK": [
          -1,
          594
        ],
        "'TABLE": [
          -1,
          594
        ],
        "'ASK": [
          -1,
          594
        ],
        "'OTHERWISE": [
          -1,
          594
        ],
        "'NEW": [
          -1,
          594
        ]
      },
      {
        "'RBRACE": [
          516
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          517
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'RPAREN": [
          -1,
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
        "'IMPORT": [
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
        "'INCLUDE": [
          -1,
          598
        ],
        "'LBRACE": [
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
        "'VAR": [
          -1,
          598
        ],
        "'REC": [
          -1,
          598
        ],
        "'ATCHECK": [
          -1,
          598
        ],
        "'SWITCH": [
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
        "'SIEVE": [
          -1,
          598
        ],
        "'ORDER": [
          -1,
          598
        ],
        "'EXTEND": [
          -1,
          598
        ],
        "'SELECT": [
          -1,
          598
        ],
        "'EXTRACT": [
          -1,
          598
        ],
        "'BLOCK": [
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
        "where-clause_I2*": [
          518
        ],
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          600
        ],
        "'ORDER": [
          -1,
          600
        ],
        "'EXTEND": [
          -1,
          600
        ],
        "'SELECT": [
          -1,
          600
        ],
        "'EXTRACT": [
          -1,
          600
        ],
        "'BLOCK": [
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
        "$": [
          -1,
          602
        ],
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
        "'WHERE": [
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
        "'ELSE": [
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
        "'REC": [
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
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          602
        ],
        "'ORDER": [
          -1,
          602
        ],
        "'EXTEND": [
          -1,
          602
        ],
        "'SELECT": [
          -1,
          602
        ],
        "'EXTRACT": [
          -1,
          602
        ],
        "'BLOCK": [
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
        "'REC": [
          -1,
          604
        ],
        "'ATCHECK": [
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
        "'SIEVE": [
          -1,
          604
        ],
        "'ORDER": [
          -1,
          604
        ],
        "'EXTEND": [
          -1,
          604
        ],
        "'SELECT": [
          -1,
          604
        ],
        "'EXTRACT": [
          -1,
          604
        ],
        "'BLOCK": [
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
        "'REC": [
          -1,
          606
        ],
        "'ATCHECK": [
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
        "'SIEVE": [
          -1,
          606
        ],
        "'ORDER": [
          -1,
          606
        ],
        "'EXTEND": [
          -1,
          606
        ],
        "'SELECT": [
          -1,
          606
        ],
        "'EXTRACT": [
          -1,
          606
        ],
        "'BLOCK": [
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
          101
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          351
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "variant-member": [
          519
        ]
      },
      {
        "'RPAREN": [
          -1,
          608
        ],
        "'COMMA": [
          -1,
          608
        ]
      },
      {
        "'SEMI": [
          520
        ]
      },
      {
        "'RPAREN": [
          -1,
          610
        ],
        "'COMMA": [
          -1,
          610
        ]
      },
      {
        "'NAME": [
          521
        ]
      },
      {
        "if-stmt_I5*": [
          522
        ],
        "'NAME": [
          -1,
          612,
          614
        ],
        "'PARENNOSPACE": [
          -1,
          612,
          614
        ],
        "'STRING": [
          -1,
          612,
          614
        ],
        "'LBRACE": [
          -1,
          612,
          614
        ],
        "'RBRACE": [
          -1,
          612,
          614
        ],
        "'SPY": [
          -1,
          612,
          614
        ],
        "'PARENSPACE": [
          -1,
          612,
          614
        ],
        "'INT": [
          -1,
          612,
          614
        ],
        "'LONG": [
          -1,
          612,
          614
        ],
        "'DOUBLE": [
          -1,
          612,
          614
        ],
        "'FLOAT": [
          -1,
          612,
          614
        ],
        "'BOOLEAN": [
          -1,
          612,
          614
        ],
        "'VOID": [
          -1,
          612,
          614
        ],
        "'DATA": [
          -1,
          612,
          614
        ],
        "'IF": [
          -1,
          612,
          614
        ],
        "'ELSE": [
          -1,
          614
        ],
        "'FOR": [
          -1,
          612,
          614
        ],
        "'RETURN": [
          -1,
          612,
          614
        ],
        "'VAR": [
          -1,
          612,
          614
        ],
        "'REC": [
          -1,
          612,
          614
        ],
        "'ATCHECK": [
          -1,
          612,
          614
        ],
        "'ASSERTEQUALS": [
          -1,
          612,
          614
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          612,
          614
        ],
        "'ASSERTTRUE": [
          -1,
          612,
          614
        ],
        "'ASSERTFALSE": [
          -1,
          612,
          614
        ],
        "'ASSERTSATISFIES": [
          -1,
          612,
          614
        ],
        "'ASSERTRAISES": [
          -1,
          612,
          614
        ],
        "'SWITCH": [
          -1,
          612,
          614
        ],
        "'YIELD": [
          -1,
          612,
          614
        ],
        "'DASH": [
          -1,
          612,
          614
        ],
        "'BANG": [
          -1,
          612,
          614
        ],
        "'LBRACK": [
          -1,
          612,
          614
        ],
        "'NUMBER": [
          -1,
          612,
          614
        ],
        "'TRUE": [
          -1,
          612,
          614
        ],
        "'FALSE": [
          -1,
          612,
          614
        ],
        "'NULL": [
          -1,
          612,
          614
        ],
        "'PARENAFTERBRACE": [
          -1,
          612,
          614
        ],
        "'SIEVE": [
          -1,
          612,
          614
        ],
        "'ORDER": [
          -1,
          612,
          614
        ],
        "'EXTEND": [
          -1,
          612,
          614
        ],
        "'SELECT": [
          -1,
          612,
          614
        ],
        "'EXTRACT": [
          -1,
          612,
          614
        ],
        "'BLOCK": [
          -1,
          612,
          614
        ],
        "'TABLE": [
          -1,
          612,
          614
        ],
        "'ASK": [
          -1,
          612,
          614
        ],
        "'NEW": [
          -1,
          612,
          614
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          523
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'RPAREN": [
          524
        ]
      },
      {
        "'RPAREN": [
          525
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          616
        ],
        "'ORDER": [
          -1,
          616
        ],
        "'EXTEND": [
          -1,
          616
        ],
        "'SELECT": [
          -1,
          616
        ],
        "'EXTRACT": [
          -1,
          616
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          618
        ],
        "'ORDER": [
          -1,
          618
        ],
        "'EXTEND": [
          -1,
          618
        ],
        "'SELECT": [
          -1,
          618
        ],
        "'EXTRACT": [
          -1,
          618
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          620
        ],
        "'ORDER": [
          -1,
          620
        ],
        "'EXTEND": [
          -1,
          620
        ],
        "'SELECT": [
          -1,
          620
        ],
        "'EXTRACT": [
          -1,
          620
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          622
        ],
        "'ORDER": [
          -1,
          622
        ],
        "'EXTEND": [
          -1,
          622
        ],
        "'SELECT": [
          -1,
          622
        ],
        "'EXTRACT": [
          -1,
          622
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          624
        ],
        "'ORDER": [
          -1,
          624
        ],
        "'EXTEND": [
          -1,
          624
        ],
        "'SELECT": [
          -1,
          624
        ],
        "'EXTRACT": [
          -1,
          624
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          626
        ],
        "'ORDER": [
          -1,
          626
        ],
        "'EXTEND": [
          -1,
          626
        ],
        "'SELECT": [
          -1,
          626
        ],
        "'EXTRACT": [
          -1,
          626
        ],
        "'BLOCK": [
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
        "'RPAREN": [
          526
        ]
      },
      {
        "'RPAREN": [
          527
        ]
      },
      {
        "$": [
          -1,
          628
        ],
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          628
        ],
        "'ORDER": [
          -1,
          628
        ],
        "'EXTEND": [
          -1,
          628
        ],
        "'SELECT": [
          -1,
          628
        ],
        "'EXTRACT": [
          -1,
          628
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          630
        ],
        "'ORDER": [
          -1,
          630
        ],
        "'EXTEND": [
          -1,
          630
        ],
        "'SELECT": [
          -1,
          630
        ],
        "'EXTRACT": [
          -1,
          630
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          632
        ],
        "'ORDER": [
          -1,
          632
        ],
        "'EXTEND": [
          -1,
          632
        ],
        "'SELECT": [
          -1,
          632
        ],
        "'EXTRACT": [
          -1,
          632
        ],
        "'BLOCK": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          634
        ],
        "'ORDER": [
          -1,
          634
        ],
        "'EXTEND": [
          -1,
          634
        ],
        "'SELECT": [
          -1,
          634
        ],
        "'EXTRACT": [
          -1,
          634
        ],
        "'BLOCK": [
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
        "$": [
          -1,
          636
        ],
        "'NAME": [
          -1,
          636
        ],
        "'SEMI": [
          -1,
          636
        ],
        "'PARENNOSPACE": [
          -1,
          636
        ],
        "'STRING": [
          -1,
          636
        ],
        "'RPAREN": [
          -1,
          636
        ],
        "'LBRACE": [
          -1,
          636
        ],
        "'RBRACE": [
          -1,
          636
        ],
        "'SPY": [
          -1,
          636
        ],
        "'PARENSPACE": [
          -1,
          636
        ],
        "'COMMA": [
          -1,
          636
        ],
        "'INT": [
          -1,
          636
        ],
        "'LONG": [
          -1,
          636
        ],
        "'DOUBLE": [
          -1,
          636
        ],
        "'FLOAT": [
          -1,
          636
        ],
        "'BOOLEAN": [
          -1,
          636
        ],
        "'VOID": [
          -1,
          636
        ],
        "'LT": [
          -1,
          636
        ],
        "'GT": [
          -1,
          636
        ],
        "'THINARROW": [
          -1,
          636
        ],
        "'DATA": [
          -1,
          636
        ],
        "'IF": [
          -1,
          636
        ],
        "'FOR": [
          -1,
          636
        ],
        "'RETURN": [
          -1,
          636
        ],
        "'VAR": [
          -1,
          636
        ],
        "'REC": [
          -1,
          636
        ],
        "'ATCHECK": [
          -1,
          636
        ],
        "'ASSERTEQUALS": [
          -1,
          636
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          636
        ],
        "'ASSERTTRUE": [
          -1,
          636
        ],
        "'ASSERTFALSE": [
          -1,
          636
        ],
        "'ASSERTSATISFIES": [
          -1,
          636
        ],
        "'ASSERTRAISES": [
          -1,
          636
        ],
        "'IS": [
          -1,
          636
        ],
        "'ISNOT": [
          -1,
          636
        ],
        "'SATISFIES": [
          -1,
          636
        ],
        "'RAISES": [
          -1,
          636
        ],
        "'SWITCH": [
          -1,
          636
        ],
        "'CASE": [
          -1,
          636
        ],
        "'DEFAULT": [
          -1,
          636
        ],
        "'YIELD": [
          -1,
          636
        ],
        "'PLUS": [
          -1,
          636
        ],
        "'DASH": [
          -1,
          636
        ],
        "'TIMES": [
          -1,
          636
        ],
        "'SLASH": [
          -1,
          636
        ],
        "'PERCENT": [
          -1,
          636
        ],
        "'EQUALEQUAL": [
          -1,
          636
        ],
        "'NEQ": [
          -1,
          636
        ],
        "'LEQ": [
          -1,
          636
        ],
        "'GEQ": [
          -1,
          636
        ],
        "'AND": [
          -1,
          636
        ],
        "'OR": [
          -1,
          636
        ],
        "'BANG": [
          -1,
          636
        ],
        "'DOT": [
          -1,
          636
        ],
        "'LBRACK": [
          -1,
          636
        ],
        "'RBRACK": [
          -1,
          636
        ],
        "'NUMBER": [
          -1,
          636
        ],
        "'TRUE": [
          -1,
          636
        ],
        "'FALSE": [
          -1,
          636
        ],
        "'NULL": [
          -1,
          636
        ],
        "'PARENAFTERBRACE": [
          -1,
          636
        ],
        "'SIEVE": [
          -1,
          636
        ],
        "'USING": [
          -1,
          636
        ],
        "'ORDER": [
          -1,
          636
        ],
        "'EXTEND": [
          -1,
          636
        ],
        "'SELECT": [
          -1,
          636
        ],
        "'EXTRACT": [
          -1,
          636
        ],
        "'BLOCK": [
          -1,
          636
        ],
        "'TABLE": [
          -1,
          636
        ],
        "'ASK": [
          -1,
          636
        ],
        "'NEW": [
          -1,
          636
        ]
      },
      {
        "'PARENNOSPACE": [
          528
        ],
        "'COLON": [
          529
        ]
      },
      {
        "switch-body": [
          530
        ],
        "switch-body_I0*": [
          531
        ],
        "'NAME": [
          -1,
          638
        ],
        "'PARENNOSPACE": [
          -1,
          638
        ],
        "'STRING": [
          -1,
          638
        ],
        "'LBRACE": [
          -1,
          638
        ],
        "'SPY": [
          -1,
          638
        ],
        "'PARENSPACE": [
          -1,
          638
        ],
        "'INT": [
          -1,
          638
        ],
        "'LONG": [
          -1,
          638
        ],
        "'DOUBLE": [
          -1,
          638
        ],
        "'FLOAT": [
          -1,
          638
        ],
        "'BOOLEAN": [
          -1,
          638
        ],
        "'VOID": [
          -1,
          638
        ],
        "'DATA": [
          -1,
          638
        ],
        "'IF": [
          -1,
          638
        ],
        "'FOR": [
          -1,
          638
        ],
        "'RETURN": [
          -1,
          638
        ],
        "'VAR": [
          -1,
          638
        ],
        "'REC": [
          -1,
          638
        ],
        "'ATCHECK": [
          -1,
          638
        ],
        "'SWITCH": [
          -1,
          638
        ],
        "'YIELD": [
          -1,
          638
        ],
        "'DASH": [
          -1,
          638
        ],
        "'BANG": [
          -1,
          638
        ],
        "'LBRACK": [
          -1,
          638
        ],
        "'NUMBER": [
          -1,
          638
        ],
        "'TRUE": [
          -1,
          638
        ],
        "'FALSE": [
          -1,
          638
        ],
        "'NULL": [
          -1,
          638
        ],
        "'PARENAFTERBRACE": [
          -1,
          638
        ],
        "'SIEVE": [
          -1,
          638
        ],
        "'ORDER": [
          -1,
          638
        ],
        "'EXTEND": [
          -1,
          638
        ],
        "'SELECT": [
          -1,
          638
        ],
        "'EXTRACT": [
          -1,
          638
        ],
        "'BLOCK": [
          -1,
          638
        ],
        "'TABLE": [
          -1,
          638
        ],
        "'ASK": [
          -1,
          638
        ],
        "'NEW": [
          -1,
          638
        ]
      },
      {
        "'RPAREN": [
          -1,
          640
        ],
        "'COMMA": [
          -1,
          640
        ]
      },
      {
        "'RPAREN": [
          -1,
          642
        ],
        "'COMMA": [
          -1,
          642
        ]
      },
      {
        "'RBRACK": [
          532
        ]
      },
      {
        "'RPAREN": [
          -1,
          644
        ],
        "'COMMA": [
          -1,
          644
        ]
      },
      {
        "block": [
          533
        ],
        "'LBRACE": [
          348
        ]
      },
      {
        "$": [
          -1,
          646
        ],
        "'NAME": [
          -1,
          646
        ],
        "'SEMI": [
          -1,
          646
        ],
        "'PARENNOSPACE": [
          -1,
          646
        ],
        "'STRING": [
          -1,
          646
        ],
        "'RPAREN": [
          -1,
          646
        ],
        "'LBRACE": [
          -1,
          646
        ],
        "'RBRACE": [
          -1,
          646
        ],
        "'SPY": [
          -1,
          646
        ],
        "'PARENSPACE": [
          -1,
          646
        ],
        "'COMMA": [
          -1,
          646
        ],
        "'INT": [
          -1,
          646
        ],
        "'LONG": [
          -1,
          646
        ],
        "'DOUBLE": [
          -1,
          646
        ],
        "'FLOAT": [
          -1,
          646
        ],
        "'BOOLEAN": [
          -1,
          646
        ],
        "'VOID": [
          -1,
          646
        ],
        "'LT": [
          -1,
          646
        ],
        "'GT": [
          -1,
          646
        ],
        "'THINARROW": [
          -1,
          646
        ],
        "'DATA": [
          -1,
          646
        ],
        "'IF": [
          -1,
          646
        ],
        "'FOR": [
          -1,
          646
        ],
        "'RETURN": [
          -1,
          646
        ],
        "'VAR": [
          -1,
          646
        ],
        "'REC": [
          -1,
          646
        ],
        "'ATCHECK": [
          -1,
          646
        ],
        "'ASSERTEQUALS": [
          -1,
          646
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          646
        ],
        "'ASSERTTRUE": [
          -1,
          646
        ],
        "'ASSERTFALSE": [
          -1,
          646
        ],
        "'ASSERTSATISFIES": [
          -1,
          646
        ],
        "'ASSERTRAISES": [
          -1,
          646
        ],
        "'IS": [
          -1,
          646
        ],
        "'ISNOT": [
          -1,
          646
        ],
        "'SATISFIES": [
          -1,
          646
        ],
        "'RAISES": [
          -1,
          646
        ],
        "'SWITCH": [
          -1,
          646
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
          646
        ],
        "'PLUS": [
          -1,
          646
        ],
        "'DASH": [
          -1,
          646
        ],
        "'TIMES": [
          -1,
          646
        ],
        "'SLASH": [
          -1,
          646
        ],
        "'PERCENT": [
          -1,
          646
        ],
        "'EQUALEQUAL": [
          -1,
          646
        ],
        "'NEQ": [
          -1,
          646
        ],
        "'LEQ": [
          -1,
          646
        ],
        "'GEQ": [
          -1,
          646
        ],
        "'AND": [
          -1,
          646
        ],
        "'OR": [
          -1,
          646
        ],
        "'BANG": [
          -1,
          646
        ],
        "'DOT": [
          -1,
          646
        ],
        "'LBRACK": [
          -1,
          646
        ],
        "'RBRACK": [
          -1,
          646
        ],
        "'NUMBER": [
          -1,
          646
        ],
        "'TRUE": [
          -1,
          646
        ],
        "'FALSE": [
          -1,
          646
        ],
        "'NULL": [
          -1,
          646
        ],
        "'PARENAFTERBRACE": [
          -1,
          646
        ],
        "'SIEVE": [
          -1,
          646
        ],
        "'USING": [
          -1,
          646
        ],
        "'ORDER": [
          -1,
          646
        ],
        "'EXTEND": [
          -1,
          646
        ],
        "'SELECT": [
          -1,
          646
        ],
        "'EXTRACT": [
          -1,
          646
        ],
        "'BLOCK": [
          -1,
          646
        ],
        "'TABLE": [
          -1,
          646
        ],
        "'ASK": [
          -1,
          646
        ],
        "'NEW": [
          -1,
          646
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
        "'RBRACE": [
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
        "'REC": [
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
        "'SIEVE": [
          -1,
          648
        ],
        "'ORDER": [
          -1,
          648
        ],
        "'EXTEND": [
          -1,
          648
        ],
        "'SELECT": [
          -1,
          648
        ],
        "'EXTRACT": [
          -1,
          648
        ],
        "'BLOCK": [
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
        "'NAME": [
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
        "'REC": [
          -1,
          650
        ],
        "'ATCHECK": [
          -1,
          650
        ],
        "'SWITCH": [
          -1,
          650
        ],
        "'YIELD": [
          -1,
          650
        ],
        "'DASH": [
          -1,
          650
        ],
        "'BANG": [
          -1,
          650
        ],
        "'LBRACK": [
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
        "'SIEVE": [
          -1,
          650
        ],
        "'ORDER": [
          -1,
          650
        ],
        "'EXTEND": [
          -1,
          650
        ],
        "'SELECT": [
          -1,
          650
        ],
        "'EXTRACT": [
          -1,
          650
        ],
        "'BLOCK": [
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
        "'NAME": [
          101
        ],
        "let-stmt": [
          534
        ],
        "'RBRACE": [
          535
        ],
        "'PARENSPACE": [
          80
        ],
        "type-ann": [
          464
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "extend-expr_I7": [
          536
        ]
      },
      {
        "'EQUALS": [
          149
        ]
      },
      {
        "'RBRACE": [
          -1,
          652
        ],
        "'ROW": [
          -1,
          652
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          537
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "$": [
          -1,
          654
        ],
        "'NAME": [
          -1,
          654
        ],
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          654
        ],
        "'GT": [
          -1,
          654
        ],
        "'THINARROW": [
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
        "'REC": [
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
        "'IS": [
          -1,
          654
        ],
        "'ISNOT": [
          -1,
          654
        ],
        "'SATISFIES": [
          -1,
          654
        ],
        "'RAISES": [
          -1,
          654
        ],
        "'SWITCH": [
          -1,
          654
        ],
        "'CASE": [
          -1,
          654
        ],
        "'DEFAULT": [
          -1,
          654
        ],
        "'YIELD": [
          -1,
          654
        ],
        "'PLUS": [
          -1,
          654
        ],
        "'DASH": [
          -1,
          654
        ],
        "'TIMES": [
          -1,
          654
        ],
        "'SLASH": [
          -1,
          654
        ],
        "'PERCENT": [
          -1,
          654
        ],
        "'EQUALEQUAL": [
          -1,
          654
        ],
        "'NEQ": [
          -1,
          654
        ],
        "'LEQ": [
          -1,
          654
        ],
        "'GEQ": [
          -1,
          654
        ],
        "'AND": [
          -1,
          654
        ],
        "'OR": [
          -1,
          654
        ],
        "'BANG": [
          -1,
          654
        ],
        "'DOT": [
          -1,
          654
        ],
        "'LBRACK": [
          -1,
          654
        ],
        "'RBRACK": [
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
        "'SIEVE": [
          -1,
          654
        ],
        "'USING": [
          -1,
          654
        ],
        "'ORDER": [
          -1,
          654
        ],
        "'EXTEND": [
          -1,
          654
        ],
        "'SELECT": [
          -1,
          654
        ],
        "'EXTRACT": [
          -1,
          654
        ],
        "'BLOCK": [
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
        "'SEMI": [
          -1,
          656
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
          221
        ],
        "data-decl": [
          222
        ],
        "check-block": [
          223
        ],
        "let-stmt": [
          224
        ],
        "var-stmt": [
          225
        ],
        "rec-stmt": [
          226
        ],
        "assign-stmt": [
          227
        ],
        "expr-stmt": [
          228
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          538
        ],
        "block-stmt": [
          539
        ],
        "if-stmt": [
          231
        ],
        "for-stmt": [
          232
        ],
        "return-stmt": [
          233
        ],
        "yield-stmt": [
          234
        ],
        "spy-stmt": [
          235
        ],
        "'SPY": [
          236
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "where-clause_I2": [
          540
        ],
        "assert-stmt": [
          541
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          238
        ],
        "full-expr": [
          239
        ],
        "'FOR": [
          240
        ],
        "'RETURN": [
          241
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "'ASSERTEQUALS": [
          243
        ],
        "'ASSERTNOTEQUALS": [
          244
        ],
        "'ASSERTTRUE": [
          245
        ],
        "'ASSERTFALSE": [
          246
        ],
        "'ASSERTSATISFIES": [
          247
        ],
        "'ASSERTRAISES": [
          248
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          249
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'RPAREN": [
          -1,
          658
        ],
        "'COMMA": [
          -1,
          658
        ]
      },
      {
        "'NAME": [
          -1,
          660
        ],
        "'PARENNOSPACE": [
          -1,
          660
        ],
        "'STRING": [
          -1,
          660
        ],
        "'LBRACE": [
          -1,
          660
        ],
        "'RBRACE": [
          -1,
          660
        ],
        "'SPY": [
          -1,
          660
        ],
        "'PARENSPACE": [
          -1,
          660
        ],
        "'INT": [
          -1,
          660
        ],
        "'LONG": [
          -1,
          660
        ],
        "'DOUBLE": [
          -1,
          660
        ],
        "'FLOAT": [
          -1,
          660
        ],
        "'BOOLEAN": [
          -1,
          660
        ],
        "'VOID": [
          -1,
          660
        ],
        "'DATA": [
          -1,
          660
        ],
        "'IF": [
          -1,
          660
        ],
        "'FOR": [
          -1,
          660
        ],
        "'RETURN": [
          -1,
          660
        ],
        "'VAR": [
          -1,
          660
        ],
        "'REC": [
          -1,
          660
        ],
        "'ATCHECK": [
          -1,
          660
        ],
        "'ASSERTEQUALS": [
          -1,
          660
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          660
        ],
        "'ASSERTTRUE": [
          -1,
          660
        ],
        "'ASSERTFALSE": [
          -1,
          660
        ],
        "'ASSERTSATISFIES": [
          -1,
          660
        ],
        "'ASSERTRAISES": [
          -1,
          660
        ],
        "'SWITCH": [
          -1,
          660
        ],
        "'YIELD": [
          -1,
          660
        ],
        "'DASH": [
          -1,
          660
        ],
        "'BANG": [
          -1,
          660
        ],
        "'LBRACK": [
          -1,
          660
        ],
        "'NUMBER": [
          -1,
          660
        ],
        "'TRUE": [
          -1,
          660
        ],
        "'FALSE": [
          -1,
          660
        ],
        "'NULL": [
          -1,
          660
        ],
        "'PARENAFTERBRACE": [
          -1,
          660
        ],
        "'SIEVE": [
          -1,
          660
        ],
        "'ORDER": [
          -1,
          660
        ],
        "'EXTEND": [
          -1,
          660
        ],
        "'SELECT": [
          -1,
          660
        ],
        "'EXTRACT": [
          -1,
          660
        ],
        "'BLOCK": [
          -1,
          660
        ],
        "'TABLE": [
          -1,
          660
        ],
        "'ASK": [
          -1,
          660
        ],
        "'NEW": [
          -1,
          660
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
        "if-stmt_I6?": [
          542
        ],
        "if-stmt_I5": [
          543
        ],
        "'ELSE": [
          544
        ],
        "if-stmt_I6": [
          545
        ],
        "'NAME": [
          -1,
          664,
          666
        ],
        "'PARENNOSPACE": [
          -1,
          664,
          666
        ],
        "'STRING": [
          -1,
          664,
          666
        ],
        "'LBRACE": [
          -1,
          664,
          666
        ],
        "'RBRACE": [
          -1,
          664,
          666
        ],
        "'SPY": [
          -1,
          664,
          666
        ],
        "'PARENSPACE": [
          -1,
          664,
          666
        ],
        "'INT": [
          -1,
          664,
          666
        ],
        "'LONG": [
          -1,
          664,
          666
        ],
        "'DOUBLE": [
          -1,
          664,
          666
        ],
        "'FLOAT": [
          -1,
          664,
          666
        ],
        "'BOOLEAN": [
          -1,
          664,
          666
        ],
        "'VOID": [
          -1,
          664,
          666
        ],
        "'DATA": [
          -1,
          664,
          666
        ],
        "'IF": [
          -1,
          664,
          666
        ],
        "'FOR": [
          -1,
          664,
          666
        ],
        "'RETURN": [
          -1,
          664,
          666
        ],
        "'VAR": [
          -1,
          664,
          666
        ],
        "'REC": [
          -1,
          664,
          666
        ],
        "'ATCHECK": [
          -1,
          664,
          666
        ],
        "'ASSERTEQUALS": [
          -1,
          664,
          666
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          664,
          666
        ],
        "'ASSERTTRUE": [
          -1,
          664,
          666
        ],
        "'ASSERTFALSE": [
          -1,
          664,
          666
        ],
        "'ASSERTSATISFIES": [
          -1,
          664,
          666
        ],
        "'ASSERTRAISES": [
          -1,
          664,
          666
        ],
        "'SWITCH": [
          -1,
          664,
          666
        ],
        "'YIELD": [
          -1,
          664,
          666
        ],
        "'DASH": [
          -1,
          664,
          666
        ],
        "'BANG": [
          -1,
          664,
          666
        ],
        "'LBRACK": [
          -1,
          664,
          666
        ],
        "'NUMBER": [
          -1,
          664,
          666
        ],
        "'TRUE": [
          -1,
          664,
          666
        ],
        "'FALSE": [
          -1,
          664,
          666
        ],
        "'NULL": [
          -1,
          664,
          666
        ],
        "'PARENAFTERBRACE": [
          -1,
          664,
          666
        ],
        "'SIEVE": [
          -1,
          664,
          666
        ],
        "'ORDER": [
          -1,
          664,
          666
        ],
        "'EXTEND": [
          -1,
          664,
          666
        ],
        "'SELECT": [
          -1,
          664,
          666
        ],
        "'EXTRACT": [
          -1,
          664,
          666
        ],
        "'BLOCK": [
          -1,
          664,
          666
        ],
        "'TABLE": [
          -1,
          664,
          666
        ],
        "'ASK": [
          -1,
          664,
          666
        ],
        "'NEW": [
          -1,
          664,
          666
        ]
      },
      {
        "'RPAREN": [
          546
        ]
      },
      {
        "'SEMI": [
          547
        ],
        "assert-stmt_A0_I6?": [
          548
        ],
        "assert-stmt_A0_I6": [
          549
        ],
        "'NAME": [
          -1,
          668,
          670
        ],
        "'PARENNOSPACE": [
          -1,
          668,
          670
        ],
        "'STRING": [
          -1,
          668,
          670
        ],
        "'LBRACE": [
          -1,
          668,
          670
        ],
        "'RBRACE": [
          -1,
          668,
          670
        ],
        "'SPY": [
          -1,
          668,
          670
        ],
        "'PARENSPACE": [
          -1,
          668,
          670
        ],
        "'INT": [
          -1,
          668,
          670
        ],
        "'LONG": [
          -1,
          668,
          670
        ],
        "'DOUBLE": [
          -1,
          668,
          670
        ],
        "'FLOAT": [
          -1,
          668,
          670
        ],
        "'BOOLEAN": [
          -1,
          668,
          670
        ],
        "'VOID": [
          -1,
          668,
          670
        ],
        "'DATA": [
          -1,
          668,
          670
        ],
        "'IF": [
          -1,
          668,
          670
        ],
        "'FOR": [
          -1,
          668,
          670
        ],
        "'RETURN": [
          -1,
          668,
          670
        ],
        "'VAR": [
          -1,
          668,
          670
        ],
        "'REC": [
          -1,
          668,
          670
        ],
        "'ATCHECK": [
          -1,
          668,
          670
        ],
        "'ASSERTEQUALS": [
          -1,
          668,
          670
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          668,
          670
        ],
        "'ASSERTTRUE": [
          -1,
          668,
          670
        ],
        "'ASSERTFALSE": [
          -1,
          668,
          670
        ],
        "'ASSERTSATISFIES": [
          -1,
          668,
          670
        ],
        "'ASSERTRAISES": [
          -1,
          668,
          670
        ],
        "'SWITCH": [
          -1,
          668,
          670
        ],
        "'YIELD": [
          -1,
          668,
          670
        ],
        "'DASH": [
          -1,
          668,
          670
        ],
        "'BANG": [
          -1,
          668,
          670
        ],
        "'LBRACK": [
          -1,
          668,
          670
        ],
        "'NUMBER": [
          -1,
          668,
          670
        ],
        "'TRUE": [
          -1,
          668,
          670
        ],
        "'FALSE": [
          -1,
          668,
          670
        ],
        "'NULL": [
          -1,
          668,
          670
        ],
        "'PARENAFTERBRACE": [
          -1,
          668,
          670
        ],
        "'SIEVE": [
          -1,
          668,
          670
        ],
        "'ORDER": [
          -1,
          668,
          670
        ],
        "'EXTEND": [
          -1,
          668,
          670
        ],
        "'SELECT": [
          -1,
          668,
          670
        ],
        "'EXTRACT": [
          -1,
          668,
          670
        ],
        "'BLOCK": [
          -1,
          668,
          670
        ],
        "'TABLE": [
          -1,
          668,
          670
        ],
        "'ASK": [
          -1,
          668,
          670
        ],
        "'NEW": [
          -1,
          668,
          670
        ]
      },
      {
        "'SEMI": [
          550
        ],
        "assert-stmt_A1_I6?": [
          551
        ],
        "assert-stmt_A1_I6": [
          552
        ],
        "'NAME": [
          -1,
          672,
          674
        ],
        "'PARENNOSPACE": [
          -1,
          672,
          674
        ],
        "'STRING": [
          -1,
          672,
          674
        ],
        "'LBRACE": [
          -1,
          672,
          674
        ],
        "'RBRACE": [
          -1,
          672,
          674
        ],
        "'SPY": [
          -1,
          672,
          674
        ],
        "'PARENSPACE": [
          -1,
          672,
          674
        ],
        "'INT": [
          -1,
          672,
          674
        ],
        "'LONG": [
          -1,
          672,
          674
        ],
        "'DOUBLE": [
          -1,
          672,
          674
        ],
        "'FLOAT": [
          -1,
          672,
          674
        ],
        "'BOOLEAN": [
          -1,
          672,
          674
        ],
        "'VOID": [
          -1,
          672,
          674
        ],
        "'DATA": [
          -1,
          672,
          674
        ],
        "'IF": [
          -1,
          672,
          674
        ],
        "'FOR": [
          -1,
          672,
          674
        ],
        "'RETURN": [
          -1,
          672,
          674
        ],
        "'VAR": [
          -1,
          672,
          674
        ],
        "'REC": [
          -1,
          672,
          674
        ],
        "'ATCHECK": [
          -1,
          672,
          674
        ],
        "'ASSERTEQUALS": [
          -1,
          672,
          674
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          672,
          674
        ],
        "'ASSERTTRUE": [
          -1,
          672,
          674
        ],
        "'ASSERTFALSE": [
          -1,
          672,
          674
        ],
        "'ASSERTSATISFIES": [
          -1,
          672,
          674
        ],
        "'ASSERTRAISES": [
          -1,
          672,
          674
        ],
        "'SWITCH": [
          -1,
          672,
          674
        ],
        "'YIELD": [
          -1,
          672,
          674
        ],
        "'DASH": [
          -1,
          672,
          674
        ],
        "'BANG": [
          -1,
          672,
          674
        ],
        "'LBRACK": [
          -1,
          672,
          674
        ],
        "'NUMBER": [
          -1,
          672,
          674
        ],
        "'TRUE": [
          -1,
          672,
          674
        ],
        "'FALSE": [
          -1,
          672,
          674
        ],
        "'NULL": [
          -1,
          672,
          674
        ],
        "'PARENAFTERBRACE": [
          -1,
          672,
          674
        ],
        "'SIEVE": [
          -1,
          672,
          674
        ],
        "'ORDER": [
          -1,
          672,
          674
        ],
        "'EXTEND": [
          -1,
          672,
          674
        ],
        "'SELECT": [
          -1,
          672,
          674
        ],
        "'EXTRACT": [
          -1,
          672,
          674
        ],
        "'BLOCK": [
          -1,
          672,
          674
        ],
        "'TABLE": [
          -1,
          672,
          674
        ],
        "'ASK": [
          -1,
          672,
          674
        ],
        "'NEW": [
          -1,
          672,
          674
        ]
      },
      {
        "'SEMI": [
          553
        ],
        "assert-stmt_A4_I6?": [
          554
        ],
        "assert-stmt_A4_I6": [
          555
        ],
        "'NAME": [
          -1,
          676,
          678
        ],
        "'PARENNOSPACE": [
          -1,
          676,
          678
        ],
        "'STRING": [
          -1,
          676,
          678
        ],
        "'LBRACE": [
          -1,
          676,
          678
        ],
        "'RBRACE": [
          -1,
          676,
          678
        ],
        "'SPY": [
          -1,
          676,
          678
        ],
        "'PARENSPACE": [
          -1,
          676,
          678
        ],
        "'INT": [
          -1,
          676,
          678
        ],
        "'LONG": [
          -1,
          676,
          678
        ],
        "'DOUBLE": [
          -1,
          676,
          678
        ],
        "'FLOAT": [
          -1,
          676,
          678
        ],
        "'BOOLEAN": [
          -1,
          676,
          678
        ],
        "'VOID": [
          -1,
          676,
          678
        ],
        "'DATA": [
          -1,
          676,
          678
        ],
        "'IF": [
          -1,
          676,
          678
        ],
        "'FOR": [
          -1,
          676,
          678
        ],
        "'RETURN": [
          -1,
          676,
          678
        ],
        "'VAR": [
          -1,
          676,
          678
        ],
        "'REC": [
          -1,
          676,
          678
        ],
        "'ATCHECK": [
          -1,
          676,
          678
        ],
        "'ASSERTEQUALS": [
          -1,
          676,
          678
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          676,
          678
        ],
        "'ASSERTTRUE": [
          -1,
          676,
          678
        ],
        "'ASSERTFALSE": [
          -1,
          676,
          678
        ],
        "'ASSERTSATISFIES": [
          -1,
          676,
          678
        ],
        "'ASSERTRAISES": [
          -1,
          676,
          678
        ],
        "'SWITCH": [
          -1,
          676,
          678
        ],
        "'YIELD": [
          -1,
          676,
          678
        ],
        "'DASH": [
          -1,
          676,
          678
        ],
        "'BANG": [
          -1,
          676,
          678
        ],
        "'LBRACK": [
          -1,
          676,
          678
        ],
        "'NUMBER": [
          -1,
          676,
          678
        ],
        "'TRUE": [
          -1,
          676,
          678
        ],
        "'FALSE": [
          -1,
          676,
          678
        ],
        "'NULL": [
          -1,
          676,
          678
        ],
        "'PARENAFTERBRACE": [
          -1,
          676,
          678
        ],
        "'SIEVE": [
          -1,
          676,
          678
        ],
        "'ORDER": [
          -1,
          676,
          678
        ],
        "'EXTEND": [
          -1,
          676,
          678
        ],
        "'SELECT": [
          -1,
          676,
          678
        ],
        "'EXTRACT": [
          -1,
          676,
          678
        ],
        "'BLOCK": [
          -1,
          676,
          678
        ],
        "'TABLE": [
          -1,
          676,
          678
        ],
        "'ASK": [
          -1,
          676,
          678
        ],
        "'NEW": [
          -1,
          676,
          678
        ]
      },
      {
        "'SEMI": [
          556
        ],
        "assert-stmt_A5_I6?": [
          557
        ],
        "assert-stmt_A5_I6": [
          558
        ],
        "'NAME": [
          -1,
          680,
          682
        ],
        "'PARENNOSPACE": [
          -1,
          680,
          682
        ],
        "'STRING": [
          -1,
          680,
          682
        ],
        "'LBRACE": [
          -1,
          680,
          682
        ],
        "'RBRACE": [
          -1,
          680,
          682
        ],
        "'SPY": [
          -1,
          680,
          682
        ],
        "'PARENSPACE": [
          -1,
          680,
          682
        ],
        "'INT": [
          -1,
          680,
          682
        ],
        "'LONG": [
          -1,
          680,
          682
        ],
        "'DOUBLE": [
          -1,
          680,
          682
        ],
        "'FLOAT": [
          -1,
          680,
          682
        ],
        "'BOOLEAN": [
          -1,
          680,
          682
        ],
        "'VOID": [
          -1,
          680,
          682
        ],
        "'DATA": [
          -1,
          680,
          682
        ],
        "'IF": [
          -1,
          680,
          682
        ],
        "'FOR": [
          -1,
          680,
          682
        ],
        "'RETURN": [
          -1,
          680,
          682
        ],
        "'VAR": [
          -1,
          680,
          682
        ],
        "'REC": [
          -1,
          680,
          682
        ],
        "'ATCHECK": [
          -1,
          680,
          682
        ],
        "'ASSERTEQUALS": [
          -1,
          680,
          682
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          680,
          682
        ],
        "'ASSERTTRUE": [
          -1,
          680,
          682
        ],
        "'ASSERTFALSE": [
          -1,
          680,
          682
        ],
        "'ASSERTSATISFIES": [
          -1,
          680,
          682
        ],
        "'ASSERTRAISES": [
          -1,
          680,
          682
        ],
        "'SWITCH": [
          -1,
          680,
          682
        ],
        "'YIELD": [
          -1,
          680,
          682
        ],
        "'DASH": [
          -1,
          680,
          682
        ],
        "'BANG": [
          -1,
          680,
          682
        ],
        "'LBRACK": [
          -1,
          680,
          682
        ],
        "'NUMBER": [
          -1,
          680,
          682
        ],
        "'TRUE": [
          -1,
          680,
          682
        ],
        "'FALSE": [
          -1,
          680,
          682
        ],
        "'NULL": [
          -1,
          680,
          682
        ],
        "'PARENAFTERBRACE": [
          -1,
          680,
          682
        ],
        "'SIEVE": [
          -1,
          680,
          682
        ],
        "'ORDER": [
          -1,
          680,
          682
        ],
        "'EXTEND": [
          -1,
          680,
          682
        ],
        "'SELECT": [
          -1,
          680,
          682
        ],
        "'EXTRACT": [
          -1,
          680,
          682
        ],
        "'BLOCK": [
          -1,
          680,
          682
        ],
        "'TABLE": [
          -1,
          680,
          682
        ],
        "'ASK": [
          -1,
          680,
          682
        ],
        "'NEW": [
          -1,
          680,
          682
        ]
      },
      {
        "'NAME": [
          559
        ],
        "case-branch_A0_I3?": [
          560
        ],
        "case-branch_A0_I3": [
          561
        ],
        "'RPAREN": [
          -1,
          684
        ]
      },
      {
        "switch-body": [
          562
        ],
        "switch-body_I0*": [
          531
        ],
        "'NAME": [
          -1,
          638
        ],
        "'PARENNOSPACE": [
          -1,
          638
        ],
        "'STRING": [
          -1,
          638
        ],
        "'LBRACE": [
          -1,
          638
        ],
        "'SPY": [
          -1,
          638
        ],
        "'PARENSPACE": [
          -1,
          638
        ],
        "'INT": [
          -1,
          638
        ],
        "'LONG": [
          -1,
          638
        ],
        "'DOUBLE": [
          -1,
          638
        ],
        "'FLOAT": [
          -1,
          638
        ],
        "'BOOLEAN": [
          -1,
          638
        ],
        "'VOID": [
          -1,
          638
        ],
        "'DATA": [
          -1,
          638
        ],
        "'IF": [
          -1,
          638
        ],
        "'FOR": [
          -1,
          638
        ],
        "'RETURN": [
          -1,
          638
        ],
        "'VAR": [
          -1,
          638
        ],
        "'REC": [
          -1,
          638
        ],
        "'ATCHECK": [
          -1,
          638
        ],
        "'SWITCH": [
          -1,
          638
        ],
        "'YIELD": [
          -1,
          638
        ],
        "'DASH": [
          -1,
          638
        ],
        "'BANG": [
          -1,
          638
        ],
        "'LBRACK": [
          -1,
          638
        ],
        "'NUMBER": [
          -1,
          638
        ],
        "'TRUE": [
          -1,
          638
        ],
        "'FALSE": [
          -1,
          638
        ],
        "'NULL": [
          -1,
          638
        ],
        "'PARENAFTERBRACE": [
          -1,
          638
        ],
        "'SIEVE": [
          -1,
          638
        ],
        "'ORDER": [
          -1,
          638
        ],
        "'EXTEND": [
          -1,
          638
        ],
        "'SELECT": [
          -1,
          638
        ],
        "'EXTRACT": [
          -1,
          638
        ],
        "'BLOCK": [
          -1,
          638
        ],
        "'TABLE": [
          -1,
          638
        ],
        "'ASK": [
          -1,
          638
        ],
        "'NEW": [
          -1,
          638
        ]
      },
      {
        "'RBRACE": [
          -1,
          686
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
          221
        ],
        "data-decl": [
          222
        ],
        "check-block": [
          223
        ],
        "let-stmt": [
          224
        ],
        "var-stmt": [
          225
        ],
        "rec-stmt": [
          226
        ],
        "assign-stmt": [
          227
        ],
        "expr-stmt": [
          228
        ],
        "'LBRACE": [
          23
        ],
        "block-stmt": [
          563
        ],
        "if-stmt": [
          231
        ],
        "for-stmt": [
          232
        ],
        "return-stmt": [
          233
        ],
        "yield-stmt": [
          564
        ],
        "spy-stmt": [
          235
        ],
        "'SPY": [
          236
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "'INT": [
          26
        ],
        "'LONG": [
          27
        ],
        "'DOUBLE": [
          28
        ],
        "'FLOAT": [
          29
        ],
        "'BOOLEAN": [
          30
        ],
        "'VOID": [
          31
        ],
        "'DATA": [
          32
        ],
        "'IF": [
          238
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          240
        ],
        "'RETURN": [
          241
        ],
        "'VAR": [
          34
        ],
        "'REC": [
          35
        ],
        "'ATCHECK": [
          36
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "switch-body_I0": [
          565
        ],
        "'YIELD": [
          249
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "$": [
          -1,
          688
        ],
        "'NAME": [
          -1,
          688
        ],
        "'SEMI": [
          -1,
          688
        ],
        "'PARENNOSPACE": [
          -1,
          688
        ],
        "'STRING": [
          -1,
          688
        ],
        "'RPAREN": [
          -1,
          688
        ],
        "'LBRACE": [
          -1,
          688
        ],
        "'RBRACE": [
          -1,
          688
        ],
        "'SPY": [
          -1,
          688
        ],
        "'PARENSPACE": [
          -1,
          688
        ],
        "'COMMA": [
          -1,
          688
        ],
        "'INT": [
          -1,
          688
        ],
        "'LONG": [
          -1,
          688
        ],
        "'DOUBLE": [
          -1,
          688
        ],
        "'FLOAT": [
          -1,
          688
        ],
        "'BOOLEAN": [
          -1,
          688
        ],
        "'VOID": [
          -1,
          688
        ],
        "'LT": [
          -1,
          688
        ],
        "'GT": [
          -1,
          688
        ],
        "'THINARROW": [
          -1,
          688
        ],
        "'DATA": [
          -1,
          688
        ],
        "'IF": [
          -1,
          688
        ],
        "'FOR": [
          -1,
          688
        ],
        "'RETURN": [
          -1,
          688
        ],
        "'VAR": [
          -1,
          688
        ],
        "'REC": [
          -1,
          688
        ],
        "'ATCHECK": [
          -1,
          688
        ],
        "'ASSERTEQUALS": [
          -1,
          688
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          688
        ],
        "'ASSERTTRUE": [
          -1,
          688
        ],
        "'ASSERTFALSE": [
          -1,
          688
        ],
        "'ASSERTSATISFIES": [
          -1,
          688
        ],
        "'ASSERTRAISES": [
          -1,
          688
        ],
        "'IS": [
          -1,
          688
        ],
        "'ISNOT": [
          -1,
          688
        ],
        "'SATISFIES": [
          -1,
          688
        ],
        "'RAISES": [
          -1,
          688
        ],
        "'SWITCH": [
          -1,
          688
        ],
        "'CASE": [
          -1,
          688
        ],
        "'DEFAULT": [
          -1,
          688
        ],
        "'YIELD": [
          -1,
          688
        ],
        "'PLUS": [
          -1,
          688
        ],
        "'DASH": [
          -1,
          688
        ],
        "'TIMES": [
          -1,
          688
        ],
        "'SLASH": [
          -1,
          688
        ],
        "'PERCENT": [
          -1,
          688
        ],
        "'EQUALEQUAL": [
          -1,
          688
        ],
        "'NEQ": [
          -1,
          688
        ],
        "'LEQ": [
          -1,
          688
        ],
        "'GEQ": [
          -1,
          688
        ],
        "'AND": [
          -1,
          688
        ],
        "'OR": [
          -1,
          688
        ],
        "'BANG": [
          -1,
          688
        ],
        "'DOT": [
          -1,
          688
        ],
        "'LBRACK": [
          -1,
          688
        ],
        "'RBRACK": [
          -1,
          688
        ],
        "'NUMBER": [
          -1,
          688
        ],
        "'TRUE": [
          -1,
          688
        ],
        "'FALSE": [
          -1,
          688
        ],
        "'NULL": [
          -1,
          688
        ],
        "'PARENAFTERBRACE": [
          -1,
          688
        ],
        "'SIEVE": [
          -1,
          688
        ],
        "'USING": [
          -1,
          688
        ],
        "'ORDER": [
          -1,
          688
        ],
        "'EXTEND": [
          -1,
          688
        ],
        "'SELECT": [
          -1,
          688
        ],
        "'EXTRACT": [
          -1,
          688
        ],
        "'BLOCK": [
          -1,
          688
        ],
        "'TABLE": [
          -1,
          688
        ],
        "'ASK": [
          -1,
          688
        ],
        "'NEW": [
          -1,
          688
        ]
      },
      {
        "'RBRACK": [
          566
        ]
      },
      {
        "'NAME": [
          -1,
          690
        ],
        "'RBRACE": [
          -1,
          690
        ],
        "'PARENSPACE": [
          -1,
          690
        ],
        "'INT": [
          -1,
          690
        ],
        "'LONG": [
          -1,
          690
        ],
        "'DOUBLE": [
          -1,
          690
        ],
        "'FLOAT": [
          -1,
          690
        ],
        "'BOOLEAN": [
          -1,
          690
        ],
        "'VOID": [
          -1,
          690
        ]
      },
      {
        "$": [
          -1,
          692
        ],
        "'NAME": [
          -1,
          692
        ],
        "'SEMI": [
          -1,
          692
        ],
        "'PARENNOSPACE": [
          -1,
          692
        ],
        "'STRING": [
          -1,
          692
        ],
        "'RPAREN": [
          -1,
          692
        ],
        "'LBRACE": [
          -1,
          692
        ],
        "'RBRACE": [
          -1,
          692
        ],
        "'SPY": [
          -1,
          692
        ],
        "'PARENSPACE": [
          -1,
          692
        ],
        "'COMMA": [
          -1,
          692
        ],
        "'INT": [
          -1,
          692
        ],
        "'LONG": [
          -1,
          692
        ],
        "'DOUBLE": [
          -1,
          692
        ],
        "'FLOAT": [
          -1,
          692
        ],
        "'BOOLEAN": [
          -1,
          692
        ],
        "'VOID": [
          -1,
          692
        ],
        "'LT": [
          -1,
          692
        ],
        "'GT": [
          -1,
          692
        ],
        "'THINARROW": [
          -1,
          692
        ],
        "'DATA": [
          -1,
          692
        ],
        "'IF": [
          -1,
          692
        ],
        "'FOR": [
          -1,
          692
        ],
        "'RETURN": [
          -1,
          692
        ],
        "'VAR": [
          -1,
          692
        ],
        "'REC": [
          -1,
          692
        ],
        "'ATCHECK": [
          -1,
          692
        ],
        "'ASSERTEQUALS": [
          -1,
          692
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          692
        ],
        "'ASSERTTRUE": [
          -1,
          692
        ],
        "'ASSERTFALSE": [
          -1,
          692
        ],
        "'ASSERTSATISFIES": [
          -1,
          692
        ],
        "'ASSERTRAISES": [
          -1,
          692
        ],
        "'IS": [
          -1,
          692
        ],
        "'ISNOT": [
          -1,
          692
        ],
        "'SATISFIES": [
          -1,
          692
        ],
        "'RAISES": [
          -1,
          692
        ],
        "'SWITCH": [
          -1,
          692
        ],
        "'CASE": [
          -1,
          692
        ],
        "'DEFAULT": [
          -1,
          692
        ],
        "'YIELD": [
          -1,
          692
        ],
        "'PLUS": [
          -1,
          692
        ],
        "'DASH": [
          -1,
          692
        ],
        "'TIMES": [
          -1,
          692
        ],
        "'SLASH": [
          -1,
          692
        ],
        "'PERCENT": [
          -1,
          692
        ],
        "'EQUALEQUAL": [
          -1,
          692
        ],
        "'NEQ": [
          -1,
          692
        ],
        "'LEQ": [
          -1,
          692
        ],
        "'GEQ": [
          -1,
          692
        ],
        "'AND": [
          -1,
          692
        ],
        "'OR": [
          -1,
          692
        ],
        "'BANG": [
          -1,
          692
        ],
        "'DOT": [
          -1,
          692
        ],
        "'LBRACK": [
          -1,
          692
        ],
        "'RBRACK": [
          -1,
          692
        ],
        "'NUMBER": [
          -1,
          692
        ],
        "'TRUE": [
          -1,
          692
        ],
        "'FALSE": [
          -1,
          692
        ],
        "'NULL": [
          -1,
          692
        ],
        "'PARENAFTERBRACE": [
          -1,
          692
        ],
        "'SIEVE": [
          -1,
          692
        ],
        "'USING": [
          -1,
          692
        ],
        "'ORDER": [
          -1,
          692
        ],
        "'EXTEND": [
          -1,
          692
        ],
        "'SELECT": [
          -1,
          692
        ],
        "'EXTRACT": [
          -1,
          692
        ],
        "'BLOCK": [
          -1,
          692
        ],
        "'TABLE": [
          -1,
          692
        ],
        "'ASK": [
          -1,
          692
        ],
        "'NEW": [
          -1,
          692
        ]
      },
      {
        "'NAME": [
          -1,
          694
        ],
        "'RBRACE": [
          -1,
          694
        ],
        "'PARENSPACE": [
          -1,
          694
        ],
        "'INT": [
          -1,
          694
        ],
        "'LONG": [
          -1,
          694
        ],
        "'DOUBLE": [
          -1,
          694
        ],
        "'FLOAT": [
          -1,
          694
        ],
        "'BOOLEAN": [
          -1,
          694
        ],
        "'VOID": [
          -1,
          694
        ]
      },
      {
        "table-row_I3*": [
          567
        ],
        "'SEMI": [
          -1,
          696,
          698
        ],
        "'COMMA": [
          -1,
          698
        ]
      },
      {
        "$": [
          -1,
          700
        ],
        "'NAME": [
          -1,
          700
        ],
        "'PARENNOSPACE": [
          -1,
          700
        ],
        "'STRING": [
          -1,
          700
        ],
        "'LBRACE": [
          -1,
          700
        ],
        "'RBRACE": [
          -1,
          700
        ],
        "'SPY": [
          -1,
          700
        ],
        "'PARENSPACE": [
          -1,
          700
        ],
        "'INT": [
          -1,
          700
        ],
        "'LONG": [
          -1,
          700
        ],
        "'DOUBLE": [
          -1,
          700
        ],
        "'FLOAT": [
          -1,
          700
        ],
        "'BOOLEAN": [
          -1,
          700
        ],
        "'VOID": [
          -1,
          700
        ],
        "'DATA": [
          -1,
          700
        ],
        "'IF": [
          -1,
          700
        ],
        "'FOR": [
          -1,
          700
        ],
        "'RETURN": [
          -1,
          700
        ],
        "'VAR": [
          -1,
          700
        ],
        "'REC": [
          -1,
          700
        ],
        "'ATCHECK": [
          -1,
          700
        ],
        "'ASSERTEQUALS": [
          -1,
          700
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          700
        ],
        "'ASSERTTRUE": [
          -1,
          700
        ],
        "'ASSERTFALSE": [
          -1,
          700
        ],
        "'ASSERTSATISFIES": [
          -1,
          700
        ],
        "'ASSERTRAISES": [
          -1,
          700
        ],
        "'SWITCH": [
          -1,
          700
        ],
        "'YIELD": [
          -1,
          700
        ],
        "'DASH": [
          -1,
          700
        ],
        "'BANG": [
          -1,
          700
        ],
        "'LBRACK": [
          -1,
          700
        ],
        "'NUMBER": [
          -1,
          700
        ],
        "'TRUE": [
          -1,
          700
        ],
        "'FALSE": [
          -1,
          700
        ],
        "'NULL": [
          -1,
          700
        ],
        "'PARENAFTERBRACE": [
          -1,
          700
        ],
        "'SIEVE": [
          -1,
          700
        ],
        "'ORDER": [
          -1,
          700
        ],
        "'EXTEND": [
          -1,
          700
        ],
        "'SELECT": [
          -1,
          700
        ],
        "'EXTRACT": [
          -1,
          700
        ],
        "'BLOCK": [
          -1,
          700
        ],
        "'TABLE": [
          -1,
          700
        ],
        "'ASK": [
          -1,
          700
        ],
        "'NEW": [
          -1,
          700
        ]
      },
      {
        "'NAME": [
          -1,
          702
        ],
        "'PARENNOSPACE": [
          -1,
          702
        ],
        "'STRING": [
          -1,
          702
        ],
        "'LBRACE": [
          -1,
          702
        ],
        "'RBRACE": [
          -1,
          702
        ],
        "'SPY": [
          -1,
          702
        ],
        "'PARENSPACE": [
          -1,
          702
        ],
        "'INT": [
          -1,
          702
        ],
        "'LONG": [
          -1,
          702
        ],
        "'DOUBLE": [
          -1,
          702
        ],
        "'FLOAT": [
          -1,
          702
        ],
        "'BOOLEAN": [
          -1,
          702
        ],
        "'VOID": [
          -1,
          702
        ],
        "'DATA": [
          -1,
          702
        ],
        "'IF": [
          -1,
          702
        ],
        "'FOR": [
          -1,
          702
        ],
        "'RETURN": [
          -1,
          702
        ],
        "'VAR": [
          -1,
          702
        ],
        "'REC": [
          -1,
          702
        ],
        "'ATCHECK": [
          -1,
          702
        ],
        "'ASSERTEQUALS": [
          -1,
          702
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          702
        ],
        "'ASSERTTRUE": [
          -1,
          702
        ],
        "'ASSERTFALSE": [
          -1,
          702
        ],
        "'ASSERTSATISFIES": [
          -1,
          702
        ],
        "'ASSERTRAISES": [
          -1,
          702
        ],
        "'SWITCH": [
          -1,
          702
        ],
        "'YIELD": [
          -1,
          702
        ],
        "'DASH": [
          -1,
          702
        ],
        "'BANG": [
          -1,
          702
        ],
        "'LBRACK": [
          -1,
          702
        ],
        "'NUMBER": [
          -1,
          702
        ],
        "'TRUE": [
          -1,
          702
        ],
        "'FALSE": [
          -1,
          702
        ],
        "'NULL": [
          -1,
          702
        ],
        "'PARENAFTERBRACE": [
          -1,
          702
        ],
        "'SIEVE": [
          -1,
          702
        ],
        "'ORDER": [
          -1,
          702
        ],
        "'EXTEND": [
          -1,
          702
        ],
        "'SELECT": [
          -1,
          702
        ],
        "'EXTRACT": [
          -1,
          702
        ],
        "'BLOCK": [
          -1,
          702
        ],
        "'TABLE": [
          -1,
          702
        ],
        "'ASK": [
          -1,
          702
        ],
        "'NEW": [
          -1,
          702
        ]
      },
      {
        "'NAME": [
          -1,
          704
        ],
        "'PARENNOSPACE": [
          -1,
          704
        ],
        "'STRING": [
          -1,
          704
        ],
        "'LBRACE": [
          -1,
          704
        ],
        "'RBRACE": [
          -1,
          704
        ],
        "'SPY": [
          -1,
          704
        ],
        "'PARENSPACE": [
          -1,
          704
        ],
        "'INT": [
          -1,
          704
        ],
        "'LONG": [
          -1,
          704
        ],
        "'DOUBLE": [
          -1,
          704
        ],
        "'FLOAT": [
          -1,
          704
        ],
        "'BOOLEAN": [
          -1,
          704
        ],
        "'VOID": [
          -1,
          704
        ],
        "'DATA": [
          -1,
          704
        ],
        "'IF": [
          -1,
          704
        ],
        "'FOR": [
          -1,
          704
        ],
        "'RETURN": [
          -1,
          704
        ],
        "'VAR": [
          -1,
          704
        ],
        "'REC": [
          -1,
          704
        ],
        "'ATCHECK": [
          -1,
          704
        ],
        "'ASSERTEQUALS": [
          -1,
          704
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          704
        ],
        "'ASSERTTRUE": [
          -1,
          704
        ],
        "'ASSERTFALSE": [
          -1,
          704
        ],
        "'ASSERTSATISFIES": [
          -1,
          704
        ],
        "'ASSERTRAISES": [
          -1,
          704
        ],
        "'SWITCH": [
          -1,
          704
        ],
        "'YIELD": [
          -1,
          704
        ],
        "'DASH": [
          -1,
          704
        ],
        "'BANG": [
          -1,
          704
        ],
        "'LBRACK": [
          -1,
          704
        ],
        "'NUMBER": [
          -1,
          704
        ],
        "'TRUE": [
          -1,
          704
        ],
        "'FALSE": [
          -1,
          704
        ],
        "'NULL": [
          -1,
          704
        ],
        "'PARENAFTERBRACE": [
          -1,
          704
        ],
        "'SIEVE": [
          -1,
          704
        ],
        "'ORDER": [
          -1,
          704
        ],
        "'EXTEND": [
          -1,
          704
        ],
        "'SELECT": [
          -1,
          704
        ],
        "'EXTRACT": [
          -1,
          704
        ],
        "'BLOCK": [
          -1,
          704
        ],
        "'TABLE": [
          -1,
          704
        ],
        "'ASK": [
          -1,
          704
        ],
        "'NEW": [
          -1,
          704
        ]
      },
      {
        "'NAME": [
          -1,
          706
        ],
        "'PARENNOSPACE": [
          -1,
          706
        ],
        "'STRING": [
          -1,
          706
        ],
        "'LBRACE": [
          -1,
          706
        ],
        "'RBRACE": [
          -1,
          706
        ],
        "'SPY": [
          -1,
          706
        ],
        "'PARENSPACE": [
          -1,
          706
        ],
        "'INT": [
          -1,
          706
        ],
        "'LONG": [
          -1,
          706
        ],
        "'DOUBLE": [
          -1,
          706
        ],
        "'FLOAT": [
          -1,
          706
        ],
        "'BOOLEAN": [
          -1,
          706
        ],
        "'VOID": [
          -1,
          706
        ],
        "'DATA": [
          -1,
          706
        ],
        "'IF": [
          -1,
          706
        ],
        "'FOR": [
          -1,
          706
        ],
        "'RETURN": [
          -1,
          706
        ],
        "'VAR": [
          -1,
          706
        ],
        "'REC": [
          -1,
          706
        ],
        "'ATCHECK": [
          -1,
          706
        ],
        "'ASSERTEQUALS": [
          -1,
          706
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          706
        ],
        "'ASSERTTRUE": [
          -1,
          706
        ],
        "'ASSERTFALSE": [
          -1,
          706
        ],
        "'ASSERTSATISFIES": [
          -1,
          706
        ],
        "'ASSERTRAISES": [
          -1,
          706
        ],
        "'SWITCH": [
          -1,
          706
        ],
        "'YIELD": [
          -1,
          706
        ],
        "'DASH": [
          -1,
          706
        ],
        "'BANG": [
          -1,
          706
        ],
        "'LBRACK": [
          -1,
          706
        ],
        "'NUMBER": [
          -1,
          706
        ],
        "'TRUE": [
          -1,
          706
        ],
        "'FALSE": [
          -1,
          706
        ],
        "'NULL": [
          -1,
          706
        ],
        "'PARENAFTERBRACE": [
          -1,
          706
        ],
        "'SIEVE": [
          -1,
          706
        ],
        "'ORDER": [
          -1,
          706
        ],
        "'EXTEND": [
          -1,
          706
        ],
        "'SELECT": [
          -1,
          706
        ],
        "'EXTRACT": [
          -1,
          706
        ],
        "'BLOCK": [
          -1,
          706
        ],
        "'TABLE": [
          -1,
          706
        ],
        "'ASK": [
          -1,
          706
        ],
        "'NEW": [
          -1,
          706
        ]
      },
      {
        "'NAME": [
          -1,
          708
        ],
        "'PARENNOSPACE": [
          -1,
          708
        ],
        "'STRING": [
          -1,
          708
        ],
        "'LBRACE": [
          -1,
          708
        ],
        "'RBRACE": [
          -1,
          708
        ],
        "'SPY": [
          -1,
          708
        ],
        "'PARENSPACE": [
          -1,
          708
        ],
        "'INT": [
          -1,
          708
        ],
        "'LONG": [
          -1,
          708
        ],
        "'DOUBLE": [
          -1,
          708
        ],
        "'FLOAT": [
          -1,
          708
        ],
        "'BOOLEAN": [
          -1,
          708
        ],
        "'VOID": [
          -1,
          708
        ],
        "'DATA": [
          -1,
          708
        ],
        "'IF": [
          -1,
          708
        ],
        "'FOR": [
          -1,
          708
        ],
        "'RETURN": [
          -1,
          708
        ],
        "'VAR": [
          -1,
          708
        ],
        "'REC": [
          -1,
          708
        ],
        "'ATCHECK": [
          -1,
          708
        ],
        "'ASSERTEQUALS": [
          -1,
          708
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          708
        ],
        "'ASSERTTRUE": [
          -1,
          708
        ],
        "'ASSERTFALSE": [
          -1,
          708
        ],
        "'ASSERTSATISFIES": [
          -1,
          708
        ],
        "'ASSERTRAISES": [
          -1,
          708
        ],
        "'SWITCH": [
          -1,
          708
        ],
        "'YIELD": [
          -1,
          708
        ],
        "'DASH": [
          -1,
          708
        ],
        "'BANG": [
          -1,
          708
        ],
        "'LBRACK": [
          -1,
          708
        ],
        "'NUMBER": [
          -1,
          708
        ],
        "'TRUE": [
          -1,
          708
        ],
        "'FALSE": [
          -1,
          708
        ],
        "'NULL": [
          -1,
          708
        ],
        "'PARENAFTERBRACE": [
          -1,
          708
        ],
        "'SIEVE": [
          -1,
          708
        ],
        "'ORDER": [
          -1,
          708
        ],
        "'EXTEND": [
          -1,
          708
        ],
        "'SELECT": [
          -1,
          708
        ],
        "'EXTRACT": [
          -1,
          708
        ],
        "'BLOCK": [
          -1,
          708
        ],
        "'TABLE": [
          -1,
          708
        ],
        "'ASK": [
          -1,
          708
        ],
        "'NEW": [
          -1,
          708
        ]
      },
      {
        "'NAME": [
          -1,
          710
        ],
        "'PARENNOSPACE": [
          -1,
          710
        ],
        "'STRING": [
          -1,
          710
        ],
        "'LBRACE": [
          -1,
          710
        ],
        "'RBRACE": [
          -1,
          710
        ],
        "'SPY": [
          -1,
          710
        ],
        "'PARENSPACE": [
          -1,
          710
        ],
        "'INT": [
          -1,
          710
        ],
        "'LONG": [
          -1,
          710
        ],
        "'DOUBLE": [
          -1,
          710
        ],
        "'FLOAT": [
          -1,
          710
        ],
        "'BOOLEAN": [
          -1,
          710
        ],
        "'VOID": [
          -1,
          710
        ],
        "'DATA": [
          -1,
          710
        ],
        "'IF": [
          -1,
          710
        ],
        "'ELSE": [
          -1,
          710
        ],
        "'FOR": [
          -1,
          710
        ],
        "'RETURN": [
          -1,
          710
        ],
        "'VAR": [
          -1,
          710
        ],
        "'REC": [
          -1,
          710
        ],
        "'ATCHECK": [
          -1,
          710
        ],
        "'ASSERTEQUALS": [
          -1,
          710
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          710
        ],
        "'ASSERTTRUE": [
          -1,
          710
        ],
        "'ASSERTFALSE": [
          -1,
          710
        ],
        "'ASSERTSATISFIES": [
          -1,
          710
        ],
        "'ASSERTRAISES": [
          -1,
          710
        ],
        "'SWITCH": [
          -1,
          710
        ],
        "'YIELD": [
          -1,
          710
        ],
        "'DASH": [
          -1,
          710
        ],
        "'BANG": [
          -1,
          710
        ],
        "'LBRACK": [
          -1,
          710
        ],
        "'NUMBER": [
          -1,
          710
        ],
        "'TRUE": [
          -1,
          710
        ],
        "'FALSE": [
          -1,
          710
        ],
        "'NULL": [
          -1,
          710
        ],
        "'PARENAFTERBRACE": [
          -1,
          710
        ],
        "'SIEVE": [
          -1,
          710
        ],
        "'ORDER": [
          -1,
          710
        ],
        "'EXTEND": [
          -1,
          710
        ],
        "'SELECT": [
          -1,
          710
        ],
        "'EXTRACT": [
          -1,
          710
        ],
        "'BLOCK": [
          -1,
          710
        ],
        "'TABLE": [
          -1,
          710
        ],
        "'ASK": [
          -1,
          710
        ],
        "'NEW": [
          -1,
          710
        ]
      },
      {
        "block": [
          568
        ],
        "'LBRACE": [
          348
        ],
        "'IF": [
          569
        ]
      },
      {
        "'NAME": [
          -1,
          712
        ],
        "'PARENNOSPACE": [
          -1,
          712
        ],
        "'STRING": [
          -1,
          712
        ],
        "'LBRACE": [
          -1,
          712
        ],
        "'RBRACE": [
          -1,
          712
        ],
        "'SPY": [
          -1,
          712
        ],
        "'PARENSPACE": [
          -1,
          712
        ],
        "'INT": [
          -1,
          712
        ],
        "'LONG": [
          -1,
          712
        ],
        "'DOUBLE": [
          -1,
          712
        ],
        "'FLOAT": [
          -1,
          712
        ],
        "'BOOLEAN": [
          -1,
          712
        ],
        "'VOID": [
          -1,
          712
        ],
        "'DATA": [
          -1,
          712
        ],
        "'IF": [
          -1,
          712
        ],
        "'FOR": [
          -1,
          712
        ],
        "'RETURN": [
          -1,
          712
        ],
        "'VAR": [
          -1,
          712
        ],
        "'REC": [
          -1,
          712
        ],
        "'ATCHECK": [
          -1,
          712
        ],
        "'ASSERTEQUALS": [
          -1,
          712
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          712
        ],
        "'ASSERTTRUE": [
          -1,
          712
        ],
        "'ASSERTFALSE": [
          -1,
          712
        ],
        "'ASSERTSATISFIES": [
          -1,
          712
        ],
        "'ASSERTRAISES": [
          -1,
          712
        ],
        "'SWITCH": [
          -1,
          712
        ],
        "'YIELD": [
          -1,
          712
        ],
        "'DASH": [
          -1,
          712
        ],
        "'BANG": [
          -1,
          712
        ],
        "'LBRACK": [
          -1,
          712
        ],
        "'NUMBER": [
          -1,
          712
        ],
        "'TRUE": [
          -1,
          712
        ],
        "'FALSE": [
          -1,
          712
        ],
        "'NULL": [
          -1,
          712
        ],
        "'PARENAFTERBRACE": [
          -1,
          712
        ],
        "'SIEVE": [
          -1,
          712
        ],
        "'ORDER": [
          -1,
          712
        ],
        "'EXTEND": [
          -1,
          712
        ],
        "'SELECT": [
          -1,
          712
        ],
        "'EXTRACT": [
          -1,
          712
        ],
        "'BLOCK": [
          -1,
          712
        ],
        "'TABLE": [
          -1,
          712
        ],
        "'ASK": [
          -1,
          712
        ],
        "'NEW": [
          -1,
          712
        ]
      },
      {
        "block": [
          570
        ],
        "'LBRACE": [
          348
        ]
      },
      {
        "'NAME": [
          -1,
          714
        ],
        "'PARENNOSPACE": [
          -1,
          714
        ],
        "'STRING": [
          -1,
          714
        ],
        "'LBRACE": [
          -1,
          714
        ],
        "'RBRACE": [
          -1,
          714
        ],
        "'SPY": [
          -1,
          714
        ],
        "'PARENSPACE": [
          -1,
          714
        ],
        "'INT": [
          -1,
          714
        ],
        "'LONG": [
          -1,
          714
        ],
        "'DOUBLE": [
          -1,
          714
        ],
        "'FLOAT": [
          -1,
          714
        ],
        "'BOOLEAN": [
          -1,
          714
        ],
        "'VOID": [
          -1,
          714
        ],
        "'DATA": [
          -1,
          714
        ],
        "'IF": [
          -1,
          714
        ],
        "'FOR": [
          -1,
          714
        ],
        "'RETURN": [
          -1,
          714
        ],
        "'VAR": [
          -1,
          714
        ],
        "'REC": [
          -1,
          714
        ],
        "'ATCHECK": [
          -1,
          714
        ],
        "'ASSERTEQUALS": [
          -1,
          714
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          714
        ],
        "'ASSERTTRUE": [
          -1,
          714
        ],
        "'ASSERTFALSE": [
          -1,
          714
        ],
        "'ASSERTSATISFIES": [
          -1,
          714
        ],
        "'ASSERTRAISES": [
          -1,
          714
        ],
        "'SWITCH": [
          -1,
          714
        ],
        "'YIELD": [
          -1,
          714
        ],
        "'DASH": [
          -1,
          714
        ],
        "'BANG": [
          -1,
          714
        ],
        "'LBRACK": [
          -1,
          714
        ],
        "'NUMBER": [
          -1,
          714
        ],
        "'TRUE": [
          -1,
          714
        ],
        "'FALSE": [
          -1,
          714
        ],
        "'NULL": [
          -1,
          714
        ],
        "'PARENAFTERBRACE": [
          -1,
          714
        ],
        "'SIEVE": [
          -1,
          714
        ],
        "'ORDER": [
          -1,
          714
        ],
        "'EXTEND": [
          -1,
          714
        ],
        "'SELECT": [
          -1,
          714
        ],
        "'EXTRACT": [
          -1,
          714
        ],
        "'BLOCK": [
          -1,
          714
        ],
        "'TABLE": [
          -1,
          714
        ],
        "'ASK": [
          -1,
          714
        ],
        "'NEW": [
          -1,
          714
        ]
      },
      {
        "'NAME": [
          -1,
          716
        ],
        "'PARENNOSPACE": [
          -1,
          716
        ],
        "'STRING": [
          -1,
          716
        ],
        "'LBRACE": [
          -1,
          716
        ],
        "'RBRACE": [
          -1,
          716
        ],
        "'SPY": [
          -1,
          716
        ],
        "'PARENSPACE": [
          -1,
          716
        ],
        "'INT": [
          -1,
          716
        ],
        "'LONG": [
          -1,
          716
        ],
        "'DOUBLE": [
          -1,
          716
        ],
        "'FLOAT": [
          -1,
          716
        ],
        "'BOOLEAN": [
          -1,
          716
        ],
        "'VOID": [
          -1,
          716
        ],
        "'DATA": [
          -1,
          716
        ],
        "'IF": [
          -1,
          716
        ],
        "'FOR": [
          -1,
          716
        ],
        "'RETURN": [
          -1,
          716
        ],
        "'VAR": [
          -1,
          716
        ],
        "'REC": [
          -1,
          716
        ],
        "'ATCHECK": [
          -1,
          716
        ],
        "'ASSERTEQUALS": [
          -1,
          716
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          716
        ],
        "'ASSERTTRUE": [
          -1,
          716
        ],
        "'ASSERTFALSE": [
          -1,
          716
        ],
        "'ASSERTSATISFIES": [
          -1,
          716
        ],
        "'ASSERTRAISES": [
          -1,
          716
        ],
        "'SWITCH": [
          -1,
          716
        ],
        "'YIELD": [
          -1,
          716
        ],
        "'DASH": [
          -1,
          716
        ],
        "'BANG": [
          -1,
          716
        ],
        "'LBRACK": [
          -1,
          716
        ],
        "'NUMBER": [
          -1,
          716
        ],
        "'TRUE": [
          -1,
          716
        ],
        "'FALSE": [
          -1,
          716
        ],
        "'NULL": [
          -1,
          716
        ],
        "'PARENAFTERBRACE": [
          -1,
          716
        ],
        "'SIEVE": [
          -1,
          716
        ],
        "'ORDER": [
          -1,
          716
        ],
        "'EXTEND": [
          -1,
          716
        ],
        "'SELECT": [
          -1,
          716
        ],
        "'EXTRACT": [
          -1,
          716
        ],
        "'BLOCK": [
          -1,
          716
        ],
        "'TABLE": [
          -1,
          716
        ],
        "'ASK": [
          -1,
          716
        ],
        "'NEW": [
          -1,
          716
        ]
      },
      {
        "'NAME": [
          -1,
          718
        ],
        "'PARENNOSPACE": [
          -1,
          718
        ],
        "'STRING": [
          -1,
          718
        ],
        "'LBRACE": [
          -1,
          718
        ],
        "'RBRACE": [
          -1,
          718
        ],
        "'SPY": [
          -1,
          718
        ],
        "'PARENSPACE": [
          -1,
          718
        ],
        "'INT": [
          -1,
          718
        ],
        "'LONG": [
          -1,
          718
        ],
        "'DOUBLE": [
          -1,
          718
        ],
        "'FLOAT": [
          -1,
          718
        ],
        "'BOOLEAN": [
          -1,
          718
        ],
        "'VOID": [
          -1,
          718
        ],
        "'DATA": [
          -1,
          718
        ],
        "'IF": [
          -1,
          718
        ],
        "'FOR": [
          -1,
          718
        ],
        "'RETURN": [
          -1,
          718
        ],
        "'VAR": [
          -1,
          718
        ],
        "'REC": [
          -1,
          718
        ],
        "'ATCHECK": [
          -1,
          718
        ],
        "'ASSERTEQUALS": [
          -1,
          718
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          718
        ],
        "'ASSERTTRUE": [
          -1,
          718
        ],
        "'ASSERTFALSE": [
          -1,
          718
        ],
        "'ASSERTSATISFIES": [
          -1,
          718
        ],
        "'ASSERTRAISES": [
          -1,
          718
        ],
        "'SWITCH": [
          -1,
          718
        ],
        "'YIELD": [
          -1,
          718
        ],
        "'DASH": [
          -1,
          718
        ],
        "'BANG": [
          -1,
          718
        ],
        "'LBRACK": [
          -1,
          718
        ],
        "'NUMBER": [
          -1,
          718
        ],
        "'TRUE": [
          -1,
          718
        ],
        "'FALSE": [
          -1,
          718
        ],
        "'NULL": [
          -1,
          718
        ],
        "'PARENAFTERBRACE": [
          -1,
          718
        ],
        "'SIEVE": [
          -1,
          718
        ],
        "'ORDER": [
          -1,
          718
        ],
        "'EXTEND": [
          -1,
          718
        ],
        "'SELECT": [
          -1,
          718
        ],
        "'EXTRACT": [
          -1,
          718
        ],
        "'BLOCK": [
          -1,
          718
        ],
        "'TABLE": [
          -1,
          718
        ],
        "'ASK": [
          -1,
          718
        ],
        "'NEW": [
          -1,
          718
        ]
      },
      {
        "'NAME": [
          -1,
          720
        ],
        "'PARENNOSPACE": [
          -1,
          720
        ],
        "'STRING": [
          -1,
          720
        ],
        "'LBRACE": [
          -1,
          720
        ],
        "'RBRACE": [
          -1,
          720
        ],
        "'SPY": [
          -1,
          720
        ],
        "'PARENSPACE": [
          -1,
          720
        ],
        "'INT": [
          -1,
          720
        ],
        "'LONG": [
          -1,
          720
        ],
        "'DOUBLE": [
          -1,
          720
        ],
        "'FLOAT": [
          -1,
          720
        ],
        "'BOOLEAN": [
          -1,
          720
        ],
        "'VOID": [
          -1,
          720
        ],
        "'DATA": [
          -1,
          720
        ],
        "'IF": [
          -1,
          720
        ],
        "'FOR": [
          -1,
          720
        ],
        "'RETURN": [
          -1,
          720
        ],
        "'VAR": [
          -1,
          720
        ],
        "'REC": [
          -1,
          720
        ],
        "'ATCHECK": [
          -1,
          720
        ],
        "'ASSERTEQUALS": [
          -1,
          720
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          720
        ],
        "'ASSERTTRUE": [
          -1,
          720
        ],
        "'ASSERTFALSE": [
          -1,
          720
        ],
        "'ASSERTSATISFIES": [
          -1,
          720
        ],
        "'ASSERTRAISES": [
          -1,
          720
        ],
        "'SWITCH": [
          -1,
          720
        ],
        "'YIELD": [
          -1,
          720
        ],
        "'DASH": [
          -1,
          720
        ],
        "'BANG": [
          -1,
          720
        ],
        "'LBRACK": [
          -1,
          720
        ],
        "'NUMBER": [
          -1,
          720
        ],
        "'TRUE": [
          -1,
          720
        ],
        "'FALSE": [
          -1,
          720
        ],
        "'NULL": [
          -1,
          720
        ],
        "'PARENAFTERBRACE": [
          -1,
          720
        ],
        "'SIEVE": [
          -1,
          720
        ],
        "'ORDER": [
          -1,
          720
        ],
        "'EXTEND": [
          -1,
          720
        ],
        "'SELECT": [
          -1,
          720
        ],
        "'EXTRACT": [
          -1,
          720
        ],
        "'BLOCK": [
          -1,
          720
        ],
        "'TABLE": [
          -1,
          720
        ],
        "'ASK": [
          -1,
          720
        ],
        "'NEW": [
          -1,
          720
        ]
      },
      {
        "'NAME": [
          -1,
          722
        ],
        "'PARENNOSPACE": [
          -1,
          722
        ],
        "'STRING": [
          -1,
          722
        ],
        "'LBRACE": [
          -1,
          722
        ],
        "'RBRACE": [
          -1,
          722
        ],
        "'SPY": [
          -1,
          722
        ],
        "'PARENSPACE": [
          -1,
          722
        ],
        "'INT": [
          -1,
          722
        ],
        "'LONG": [
          -1,
          722
        ],
        "'DOUBLE": [
          -1,
          722
        ],
        "'FLOAT": [
          -1,
          722
        ],
        "'BOOLEAN": [
          -1,
          722
        ],
        "'VOID": [
          -1,
          722
        ],
        "'DATA": [
          -1,
          722
        ],
        "'IF": [
          -1,
          722
        ],
        "'FOR": [
          -1,
          722
        ],
        "'RETURN": [
          -1,
          722
        ],
        "'VAR": [
          -1,
          722
        ],
        "'REC": [
          -1,
          722
        ],
        "'ATCHECK": [
          -1,
          722
        ],
        "'ASSERTEQUALS": [
          -1,
          722
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          722
        ],
        "'ASSERTTRUE": [
          -1,
          722
        ],
        "'ASSERTFALSE": [
          -1,
          722
        ],
        "'ASSERTSATISFIES": [
          -1,
          722
        ],
        "'ASSERTRAISES": [
          -1,
          722
        ],
        "'SWITCH": [
          -1,
          722
        ],
        "'YIELD": [
          -1,
          722
        ],
        "'DASH": [
          -1,
          722
        ],
        "'BANG": [
          -1,
          722
        ],
        "'LBRACK": [
          -1,
          722
        ],
        "'NUMBER": [
          -1,
          722
        ],
        "'TRUE": [
          -1,
          722
        ],
        "'FALSE": [
          -1,
          722
        ],
        "'NULL": [
          -1,
          722
        ],
        "'PARENAFTERBRACE": [
          -1,
          722
        ],
        "'SIEVE": [
          -1,
          722
        ],
        "'ORDER": [
          -1,
          722
        ],
        "'EXTEND": [
          -1,
          722
        ],
        "'SELECT": [
          -1,
          722
        ],
        "'EXTRACT": [
          -1,
          722
        ],
        "'BLOCK": [
          -1,
          722
        ],
        "'TABLE": [
          -1,
          722
        ],
        "'ASK": [
          -1,
          722
        ],
        "'NEW": [
          -1,
          722
        ]
      },
      {
        "'NAME": [
          -1,
          724
        ],
        "'PARENNOSPACE": [
          -1,
          724
        ],
        "'STRING": [
          -1,
          724
        ],
        "'LBRACE": [
          -1,
          724
        ],
        "'RBRACE": [
          -1,
          724
        ],
        "'SPY": [
          -1,
          724
        ],
        "'PARENSPACE": [
          -1,
          724
        ],
        "'INT": [
          -1,
          724
        ],
        "'LONG": [
          -1,
          724
        ],
        "'DOUBLE": [
          -1,
          724
        ],
        "'FLOAT": [
          -1,
          724
        ],
        "'BOOLEAN": [
          -1,
          724
        ],
        "'VOID": [
          -1,
          724
        ],
        "'DATA": [
          -1,
          724
        ],
        "'IF": [
          -1,
          724
        ],
        "'FOR": [
          -1,
          724
        ],
        "'RETURN": [
          -1,
          724
        ],
        "'VAR": [
          -1,
          724
        ],
        "'REC": [
          -1,
          724
        ],
        "'ATCHECK": [
          -1,
          724
        ],
        "'ASSERTEQUALS": [
          -1,
          724
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          724
        ],
        "'ASSERTTRUE": [
          -1,
          724
        ],
        "'ASSERTFALSE": [
          -1,
          724
        ],
        "'ASSERTSATISFIES": [
          -1,
          724
        ],
        "'ASSERTRAISES": [
          -1,
          724
        ],
        "'SWITCH": [
          -1,
          724
        ],
        "'YIELD": [
          -1,
          724
        ],
        "'DASH": [
          -1,
          724
        ],
        "'BANG": [
          -1,
          724
        ],
        "'LBRACK": [
          -1,
          724
        ],
        "'NUMBER": [
          -1,
          724
        ],
        "'TRUE": [
          -1,
          724
        ],
        "'FALSE": [
          -1,
          724
        ],
        "'NULL": [
          -1,
          724
        ],
        "'PARENAFTERBRACE": [
          -1,
          724
        ],
        "'SIEVE": [
          -1,
          724
        ],
        "'ORDER": [
          -1,
          724
        ],
        "'EXTEND": [
          -1,
          724
        ],
        "'SELECT": [
          -1,
          724
        ],
        "'EXTRACT": [
          -1,
          724
        ],
        "'BLOCK": [
          -1,
          724
        ],
        "'TABLE": [
          -1,
          724
        ],
        "'ASK": [
          -1,
          724
        ],
        "'NEW": [
          -1,
          724
        ]
      },
      {
        "'NAME": [
          -1,
          726
        ],
        "'PARENNOSPACE": [
          -1,
          726
        ],
        "'STRING": [
          -1,
          726
        ],
        "'LBRACE": [
          -1,
          726
        ],
        "'RBRACE": [
          -1,
          726
        ],
        "'SPY": [
          -1,
          726
        ],
        "'PARENSPACE": [
          -1,
          726
        ],
        "'INT": [
          -1,
          726
        ],
        "'LONG": [
          -1,
          726
        ],
        "'DOUBLE": [
          -1,
          726
        ],
        "'FLOAT": [
          -1,
          726
        ],
        "'BOOLEAN": [
          -1,
          726
        ],
        "'VOID": [
          -1,
          726
        ],
        "'DATA": [
          -1,
          726
        ],
        "'IF": [
          -1,
          726
        ],
        "'FOR": [
          -1,
          726
        ],
        "'RETURN": [
          -1,
          726
        ],
        "'VAR": [
          -1,
          726
        ],
        "'REC": [
          -1,
          726
        ],
        "'ATCHECK": [
          -1,
          726
        ],
        "'ASSERTEQUALS": [
          -1,
          726
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          726
        ],
        "'ASSERTTRUE": [
          -1,
          726
        ],
        "'ASSERTFALSE": [
          -1,
          726
        ],
        "'ASSERTSATISFIES": [
          -1,
          726
        ],
        "'ASSERTRAISES": [
          -1,
          726
        ],
        "'SWITCH": [
          -1,
          726
        ],
        "'YIELD": [
          -1,
          726
        ],
        "'DASH": [
          -1,
          726
        ],
        "'BANG": [
          -1,
          726
        ],
        "'LBRACK": [
          -1,
          726
        ],
        "'NUMBER": [
          -1,
          726
        ],
        "'TRUE": [
          -1,
          726
        ],
        "'FALSE": [
          -1,
          726
        ],
        "'NULL": [
          -1,
          726
        ],
        "'PARENAFTERBRACE": [
          -1,
          726
        ],
        "'SIEVE": [
          -1,
          726
        ],
        "'ORDER": [
          -1,
          726
        ],
        "'EXTEND": [
          -1,
          726
        ],
        "'SELECT": [
          -1,
          726
        ],
        "'EXTRACT": [
          -1,
          726
        ],
        "'BLOCK": [
          -1,
          726
        ],
        "'TABLE": [
          -1,
          726
        ],
        "'ASK": [
          -1,
          726
        ],
        "'NEW": [
          -1,
          726
        ]
      },
      {
        "'NAME": [
          -1,
          728
        ],
        "'PARENNOSPACE": [
          -1,
          728
        ],
        "'STRING": [
          -1,
          728
        ],
        "'LBRACE": [
          -1,
          728
        ],
        "'RBRACE": [
          -1,
          728
        ],
        "'SPY": [
          -1,
          728
        ],
        "'PARENSPACE": [
          -1,
          728
        ],
        "'INT": [
          -1,
          728
        ],
        "'LONG": [
          -1,
          728
        ],
        "'DOUBLE": [
          -1,
          728
        ],
        "'FLOAT": [
          -1,
          728
        ],
        "'BOOLEAN": [
          -1,
          728
        ],
        "'VOID": [
          -1,
          728
        ],
        "'DATA": [
          -1,
          728
        ],
        "'IF": [
          -1,
          728
        ],
        "'FOR": [
          -1,
          728
        ],
        "'RETURN": [
          -1,
          728
        ],
        "'VAR": [
          -1,
          728
        ],
        "'REC": [
          -1,
          728
        ],
        "'ATCHECK": [
          -1,
          728
        ],
        "'ASSERTEQUALS": [
          -1,
          728
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          728
        ],
        "'ASSERTTRUE": [
          -1,
          728
        ],
        "'ASSERTFALSE": [
          -1,
          728
        ],
        "'ASSERTSATISFIES": [
          -1,
          728
        ],
        "'ASSERTRAISES": [
          -1,
          728
        ],
        "'SWITCH": [
          -1,
          728
        ],
        "'YIELD": [
          -1,
          728
        ],
        "'DASH": [
          -1,
          728
        ],
        "'BANG": [
          -1,
          728
        ],
        "'LBRACK": [
          -1,
          728
        ],
        "'NUMBER": [
          -1,
          728
        ],
        "'TRUE": [
          -1,
          728
        ],
        "'FALSE": [
          -1,
          728
        ],
        "'NULL": [
          -1,
          728
        ],
        "'PARENAFTERBRACE": [
          -1,
          728
        ],
        "'SIEVE": [
          -1,
          728
        ],
        "'ORDER": [
          -1,
          728
        ],
        "'EXTEND": [
          -1,
          728
        ],
        "'SELECT": [
          -1,
          728
        ],
        "'EXTRACT": [
          -1,
          728
        ],
        "'BLOCK": [
          -1,
          728
        ],
        "'TABLE": [
          -1,
          728
        ],
        "'ASK": [
          -1,
          728
        ],
        "'NEW": [
          -1,
          728
        ]
      },
      {
        "'NAME": [
          -1,
          730
        ],
        "'PARENNOSPACE": [
          -1,
          730
        ],
        "'STRING": [
          -1,
          730
        ],
        "'LBRACE": [
          -1,
          730
        ],
        "'RBRACE": [
          -1,
          730
        ],
        "'SPY": [
          -1,
          730
        ],
        "'PARENSPACE": [
          -1,
          730
        ],
        "'INT": [
          -1,
          730
        ],
        "'LONG": [
          -1,
          730
        ],
        "'DOUBLE": [
          -1,
          730
        ],
        "'FLOAT": [
          -1,
          730
        ],
        "'BOOLEAN": [
          -1,
          730
        ],
        "'VOID": [
          -1,
          730
        ],
        "'DATA": [
          -1,
          730
        ],
        "'IF": [
          -1,
          730
        ],
        "'FOR": [
          -1,
          730
        ],
        "'RETURN": [
          -1,
          730
        ],
        "'VAR": [
          -1,
          730
        ],
        "'REC": [
          -1,
          730
        ],
        "'ATCHECK": [
          -1,
          730
        ],
        "'ASSERTEQUALS": [
          -1,
          730
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          730
        ],
        "'ASSERTTRUE": [
          -1,
          730
        ],
        "'ASSERTFALSE": [
          -1,
          730
        ],
        "'ASSERTSATISFIES": [
          -1,
          730
        ],
        "'ASSERTRAISES": [
          -1,
          730
        ],
        "'SWITCH": [
          -1,
          730
        ],
        "'YIELD": [
          -1,
          730
        ],
        "'DASH": [
          -1,
          730
        ],
        "'BANG": [
          -1,
          730
        ],
        "'LBRACK": [
          -1,
          730
        ],
        "'NUMBER": [
          -1,
          730
        ],
        "'TRUE": [
          -1,
          730
        ],
        "'FALSE": [
          -1,
          730
        ],
        "'NULL": [
          -1,
          730
        ],
        "'PARENAFTERBRACE": [
          -1,
          730
        ],
        "'SIEVE": [
          -1,
          730
        ],
        "'ORDER": [
          -1,
          730
        ],
        "'EXTEND": [
          -1,
          730
        ],
        "'SELECT": [
          -1,
          730
        ],
        "'EXTRACT": [
          -1,
          730
        ],
        "'BLOCK": [
          -1,
          730
        ],
        "'TABLE": [
          -1,
          730
        ],
        "'ASK": [
          -1,
          730
        ],
        "'NEW": [
          -1,
          730
        ]
      },
      {
        "'NAME": [
          -1,
          732
        ],
        "'PARENNOSPACE": [
          -1,
          732
        ],
        "'STRING": [
          -1,
          732
        ],
        "'LBRACE": [
          -1,
          732
        ],
        "'RBRACE": [
          -1,
          732
        ],
        "'SPY": [
          -1,
          732
        ],
        "'PARENSPACE": [
          -1,
          732
        ],
        "'INT": [
          -1,
          732
        ],
        "'LONG": [
          -1,
          732
        ],
        "'DOUBLE": [
          -1,
          732
        ],
        "'FLOAT": [
          -1,
          732
        ],
        "'BOOLEAN": [
          -1,
          732
        ],
        "'VOID": [
          -1,
          732
        ],
        "'DATA": [
          -1,
          732
        ],
        "'IF": [
          -1,
          732
        ],
        "'FOR": [
          -1,
          732
        ],
        "'RETURN": [
          -1,
          732
        ],
        "'VAR": [
          -1,
          732
        ],
        "'REC": [
          -1,
          732
        ],
        "'ATCHECK": [
          -1,
          732
        ],
        "'ASSERTEQUALS": [
          -1,
          732
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          732
        ],
        "'ASSERTTRUE": [
          -1,
          732
        ],
        "'ASSERTFALSE": [
          -1,
          732
        ],
        "'ASSERTSATISFIES": [
          -1,
          732
        ],
        "'ASSERTRAISES": [
          -1,
          732
        ],
        "'SWITCH": [
          -1,
          732
        ],
        "'YIELD": [
          -1,
          732
        ],
        "'DASH": [
          -1,
          732
        ],
        "'BANG": [
          -1,
          732
        ],
        "'LBRACK": [
          -1,
          732
        ],
        "'NUMBER": [
          -1,
          732
        ],
        "'TRUE": [
          -1,
          732
        ],
        "'FALSE": [
          -1,
          732
        ],
        "'NULL": [
          -1,
          732
        ],
        "'PARENAFTERBRACE": [
          -1,
          732
        ],
        "'SIEVE": [
          -1,
          732
        ],
        "'ORDER": [
          -1,
          732
        ],
        "'EXTEND": [
          -1,
          732
        ],
        "'SELECT": [
          -1,
          732
        ],
        "'EXTRACT": [
          -1,
          732
        ],
        "'BLOCK": [
          -1,
          732
        ],
        "'TABLE": [
          -1,
          732
        ],
        "'ASK": [
          -1,
          732
        ],
        "'NEW": [
          -1,
          732
        ]
      },
      {
        "'NAME": [
          -1,
          734
        ],
        "'PARENNOSPACE": [
          -1,
          734
        ],
        "'STRING": [
          -1,
          734
        ],
        "'LBRACE": [
          -1,
          734
        ],
        "'RBRACE": [
          -1,
          734
        ],
        "'SPY": [
          -1,
          734
        ],
        "'PARENSPACE": [
          -1,
          734
        ],
        "'INT": [
          -1,
          734
        ],
        "'LONG": [
          -1,
          734
        ],
        "'DOUBLE": [
          -1,
          734
        ],
        "'FLOAT": [
          -1,
          734
        ],
        "'BOOLEAN": [
          -1,
          734
        ],
        "'VOID": [
          -1,
          734
        ],
        "'DATA": [
          -1,
          734
        ],
        "'IF": [
          -1,
          734
        ],
        "'FOR": [
          -1,
          734
        ],
        "'RETURN": [
          -1,
          734
        ],
        "'VAR": [
          -1,
          734
        ],
        "'REC": [
          -1,
          734
        ],
        "'ATCHECK": [
          -1,
          734
        ],
        "'ASSERTEQUALS": [
          -1,
          734
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          734
        ],
        "'ASSERTTRUE": [
          -1,
          734
        ],
        "'ASSERTFALSE": [
          -1,
          734
        ],
        "'ASSERTSATISFIES": [
          -1,
          734
        ],
        "'ASSERTRAISES": [
          -1,
          734
        ],
        "'SWITCH": [
          -1,
          734
        ],
        "'YIELD": [
          -1,
          734
        ],
        "'DASH": [
          -1,
          734
        ],
        "'BANG": [
          -1,
          734
        ],
        "'LBRACK": [
          -1,
          734
        ],
        "'NUMBER": [
          -1,
          734
        ],
        "'TRUE": [
          -1,
          734
        ],
        "'FALSE": [
          -1,
          734
        ],
        "'NULL": [
          -1,
          734
        ],
        "'PARENAFTERBRACE": [
          -1,
          734
        ],
        "'SIEVE": [
          -1,
          734
        ],
        "'ORDER": [
          -1,
          734
        ],
        "'EXTEND": [
          -1,
          734
        ],
        "'SELECT": [
          -1,
          734
        ],
        "'EXTRACT": [
          -1,
          734
        ],
        "'BLOCK": [
          -1,
          734
        ],
        "'TABLE": [
          -1,
          734
        ],
        "'ASK": [
          -1,
          734
        ],
        "'NEW": [
          -1,
          734
        ]
      },
      {
        "'NAME": [
          -1,
          736
        ],
        "'PARENNOSPACE": [
          -1,
          736
        ],
        "'STRING": [
          -1,
          736
        ],
        "'LBRACE": [
          -1,
          736
        ],
        "'RBRACE": [
          -1,
          736
        ],
        "'SPY": [
          -1,
          736
        ],
        "'PARENSPACE": [
          -1,
          736
        ],
        "'INT": [
          -1,
          736
        ],
        "'LONG": [
          -1,
          736
        ],
        "'DOUBLE": [
          -1,
          736
        ],
        "'FLOAT": [
          -1,
          736
        ],
        "'BOOLEAN": [
          -1,
          736
        ],
        "'VOID": [
          -1,
          736
        ],
        "'DATA": [
          -1,
          736
        ],
        "'IF": [
          -1,
          736
        ],
        "'FOR": [
          -1,
          736
        ],
        "'RETURN": [
          -1,
          736
        ],
        "'VAR": [
          -1,
          736
        ],
        "'REC": [
          -1,
          736
        ],
        "'ATCHECK": [
          -1,
          736
        ],
        "'ASSERTEQUALS": [
          -1,
          736
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          736
        ],
        "'ASSERTTRUE": [
          -1,
          736
        ],
        "'ASSERTFALSE": [
          -1,
          736
        ],
        "'ASSERTSATISFIES": [
          -1,
          736
        ],
        "'ASSERTRAISES": [
          -1,
          736
        ],
        "'SWITCH": [
          -1,
          736
        ],
        "'YIELD": [
          -1,
          736
        ],
        "'DASH": [
          -1,
          736
        ],
        "'BANG": [
          -1,
          736
        ],
        "'LBRACK": [
          -1,
          736
        ],
        "'NUMBER": [
          -1,
          736
        ],
        "'TRUE": [
          -1,
          736
        ],
        "'FALSE": [
          -1,
          736
        ],
        "'NULL": [
          -1,
          736
        ],
        "'PARENAFTERBRACE": [
          -1,
          736
        ],
        "'SIEVE": [
          -1,
          736
        ],
        "'ORDER": [
          -1,
          736
        ],
        "'EXTEND": [
          -1,
          736
        ],
        "'SELECT": [
          -1,
          736
        ],
        "'EXTRACT": [
          -1,
          736
        ],
        "'BLOCK": [
          -1,
          736
        ],
        "'TABLE": [
          -1,
          736
        ],
        "'ASK": [
          -1,
          736
        ],
        "'NEW": [
          -1,
          736
        ]
      },
      {
        "case-branch_A0_I3_I1*": [
          571
        ],
        "'RPAREN": [
          -1,
          738,
          740
        ],
        "'COMMA": [
          -1,
          740
        ]
      },
      {
        "'RPAREN": [
          572
        ]
      },
      {
        "'RPAREN": [
          -1,
          742
        ]
      },
      {
        "'RBRACE": [
          -1,
          744
        ],
        "'CASE": [
          -1,
          744
        ],
        "'DEFAULT": [
          -1,
          744
        ]
      },
      {
        "'NAME": [
          -1,
          746
        ],
        "'PARENNOSPACE": [
          -1,
          746
        ],
        "'STRING": [
          -1,
          746
        ],
        "'LBRACE": [
          -1,
          746
        ],
        "'SPY": [
          -1,
          746
        ],
        "'PARENSPACE": [
          -1,
          746
        ],
        "'INT": [
          -1,
          746
        ],
        "'LONG": [
          -1,
          746
        ],
        "'DOUBLE": [
          -1,
          746
        ],
        "'FLOAT": [
          -1,
          746
        ],
        "'BOOLEAN": [
          -1,
          746
        ],
        "'VOID": [
          -1,
          746
        ],
        "'DATA": [
          -1,
          746
        ],
        "'IF": [
          -1,
          746
        ],
        "'FOR": [
          -1,
          746
        ],
        "'RETURN": [
          -1,
          746
        ],
        "'VAR": [
          -1,
          746
        ],
        "'REC": [
          -1,
          746
        ],
        "'ATCHECK": [
          -1,
          746
        ],
        "'SWITCH": [
          -1,
          746
        ],
        "'YIELD": [
          -1,
          746
        ],
        "'DASH": [
          -1,
          746
        ],
        "'BANG": [
          -1,
          746
        ],
        "'LBRACK": [
          -1,
          746
        ],
        "'NUMBER": [
          -1,
          746
        ],
        "'TRUE": [
          -1,
          746
        ],
        "'FALSE": [
          -1,
          746
        ],
        "'NULL": [
          -1,
          746
        ],
        "'PARENAFTERBRACE": [
          -1,
          746
        ],
        "'SIEVE": [
          -1,
          746
        ],
        "'ORDER": [
          -1,
          746
        ],
        "'EXTEND": [
          -1,
          746
        ],
        "'SELECT": [
          -1,
          746
        ],
        "'EXTRACT": [
          -1,
          746
        ],
        "'BLOCK": [
          -1,
          746
        ],
        "'TABLE": [
          -1,
          746
        ],
        "'ASK": [
          -1,
          746
        ],
        "'NEW": [
          -1,
          746
        ]
      },
      {
        "'NAME": [
          -1,
          292
        ],
        "'PARENNOSPACE": [
          -1,
          292
        ],
        "'STRING": [
          -1,
          292
        ],
        "'LBRACE": [
          -1,
          292
        ],
        "'RBRACE": [
          -1,
          748
        ],
        "'SPY": [
          -1,
          292
        ],
        "'PARENSPACE": [
          -1,
          292
        ],
        "'INT": [
          -1,
          292
        ],
        "'LONG": [
          -1,
          292
        ],
        "'DOUBLE": [
          -1,
          292
        ],
        "'FLOAT": [
          -1,
          292
        ],
        "'BOOLEAN": [
          -1,
          292
        ],
        "'VOID": [
          -1,
          292
        ],
        "'DATA": [
          -1,
          292
        ],
        "'IF": [
          -1,
          292
        ],
        "'FOR": [
          -1,
          292
        ],
        "'RETURN": [
          -1,
          292
        ],
        "'VAR": [
          -1,
          292
        ],
        "'REC": [
          -1,
          292
        ],
        "'ATCHECK": [
          -1,
          292
        ],
        "'SWITCH": [
          -1,
          292
        ],
        "'CASE": [
          -1,
          748
        ],
        "'DEFAULT": [
          -1,
          748
        ],
        "'YIELD": [
          -1,
          292
        ],
        "'DASH": [
          -1,
          292
        ],
        "'BANG": [
          -1,
          292
        ],
        "'LBRACK": [
          -1,
          292
        ],
        "'NUMBER": [
          -1,
          292
        ],
        "'TRUE": [
          -1,
          292
        ],
        "'FALSE": [
          -1,
          292
        ],
        "'NULL": [
          -1,
          292
        ],
        "'PARENAFTERBRACE": [
          -1,
          292
        ],
        "'SIEVE": [
          -1,
          292
        ],
        "'ORDER": [
          -1,
          292
        ],
        "'EXTEND": [
          -1,
          292
        ],
        "'SELECT": [
          -1,
          292
        ],
        "'EXTRACT": [
          -1,
          292
        ],
        "'BLOCK": [
          -1,
          292
        ],
        "'TABLE": [
          -1,
          292
        ],
        "'ASK": [
          -1,
          292
        ],
        "'NEW": [
          -1,
          292
        ]
      },
      {
        "'NAME": [
          -1,
          750
        ],
        "'PARENNOSPACE": [
          -1,
          750
        ],
        "'STRING": [
          -1,
          750
        ],
        "'LBRACE": [
          -1,
          750
        ],
        "'SPY": [
          -1,
          750
        ],
        "'PARENSPACE": [
          -1,
          750
        ],
        "'INT": [
          -1,
          750
        ],
        "'LONG": [
          -1,
          750
        ],
        "'DOUBLE": [
          -1,
          750
        ],
        "'FLOAT": [
          -1,
          750
        ],
        "'BOOLEAN": [
          -1,
          750
        ],
        "'VOID": [
          -1,
          750
        ],
        "'DATA": [
          -1,
          750
        ],
        "'IF": [
          -1,
          750
        ],
        "'FOR": [
          -1,
          750
        ],
        "'RETURN": [
          -1,
          750
        ],
        "'VAR": [
          -1,
          750
        ],
        "'REC": [
          -1,
          750
        ],
        "'ATCHECK": [
          -1,
          750
        ],
        "'SWITCH": [
          -1,
          750
        ],
        "'YIELD": [
          -1,
          750
        ],
        "'DASH": [
          -1,
          750
        ],
        "'BANG": [
          -1,
          750
        ],
        "'LBRACK": [
          -1,
          750
        ],
        "'NUMBER": [
          -1,
          750
        ],
        "'TRUE": [
          -1,
          750
        ],
        "'FALSE": [
          -1,
          750
        ],
        "'NULL": [
          -1,
          750
        ],
        "'PARENAFTERBRACE": [
          -1,
          750
        ],
        "'SIEVE": [
          -1,
          750
        ],
        "'ORDER": [
          -1,
          750
        ],
        "'EXTEND": [
          -1,
          750
        ],
        "'SELECT": [
          -1,
          750
        ],
        "'EXTRACT": [
          -1,
          750
        ],
        "'BLOCK": [
          -1,
          750
        ],
        "'TABLE": [
          -1,
          750
        ],
        "'ASK": [
          -1,
          750
        ],
        "'NEW": [
          -1,
          750
        ]
      },
      {
        "$": [
          -1,
          752
        ],
        "'NAME": [
          -1,
          752
        ],
        "'SEMI": [
          -1,
          752
        ],
        "'PARENNOSPACE": [
          -1,
          752
        ],
        "'STRING": [
          -1,
          752
        ],
        "'RPAREN": [
          -1,
          752
        ],
        "'LBRACE": [
          -1,
          752
        ],
        "'RBRACE": [
          -1,
          752
        ],
        "'SPY": [
          -1,
          752
        ],
        "'PARENSPACE": [
          -1,
          752
        ],
        "'COMMA": [
          -1,
          752
        ],
        "'INT": [
          -1,
          752
        ],
        "'LONG": [
          -1,
          752
        ],
        "'DOUBLE": [
          -1,
          752
        ],
        "'FLOAT": [
          -1,
          752
        ],
        "'BOOLEAN": [
          -1,
          752
        ],
        "'VOID": [
          -1,
          752
        ],
        "'LT": [
          -1,
          752
        ],
        "'GT": [
          -1,
          752
        ],
        "'THINARROW": [
          -1,
          752
        ],
        "'DATA": [
          -1,
          752
        ],
        "'IF": [
          -1,
          752
        ],
        "'FOR": [
          -1,
          752
        ],
        "'RETURN": [
          -1,
          752
        ],
        "'VAR": [
          -1,
          752
        ],
        "'REC": [
          -1,
          752
        ],
        "'ATCHECK": [
          -1,
          752
        ],
        "'ASSERTEQUALS": [
          -1,
          752
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          752
        ],
        "'ASSERTTRUE": [
          -1,
          752
        ],
        "'ASSERTFALSE": [
          -1,
          752
        ],
        "'ASSERTSATISFIES": [
          -1,
          752
        ],
        "'ASSERTRAISES": [
          -1,
          752
        ],
        "'IS": [
          -1,
          752
        ],
        "'ISNOT": [
          -1,
          752
        ],
        "'SATISFIES": [
          -1,
          752
        ],
        "'RAISES": [
          -1,
          752
        ],
        "'SWITCH": [
          -1,
          752
        ],
        "'CASE": [
          -1,
          752
        ],
        "'DEFAULT": [
          -1,
          752
        ],
        "'YIELD": [
          -1,
          752
        ],
        "'PLUS": [
          -1,
          752
        ],
        "'DASH": [
          -1,
          752
        ],
        "'TIMES": [
          -1,
          752
        ],
        "'SLASH": [
          -1,
          752
        ],
        "'PERCENT": [
          -1,
          752
        ],
        "'EQUALEQUAL": [
          -1,
          752
        ],
        "'NEQ": [
          -1,
          752
        ],
        "'LEQ": [
          -1,
          752
        ],
        "'GEQ": [
          -1,
          752
        ],
        "'AND": [
          -1,
          752
        ],
        "'OR": [
          -1,
          752
        ],
        "'BANG": [
          -1,
          752
        ],
        "'DOT": [
          -1,
          752
        ],
        "'LBRACK": [
          -1,
          752
        ],
        "'RBRACK": [
          -1,
          752
        ],
        "'NUMBER": [
          -1,
          752
        ],
        "'TRUE": [
          -1,
          752
        ],
        "'FALSE": [
          -1,
          752
        ],
        "'NULL": [
          -1,
          752
        ],
        "'PARENAFTERBRACE": [
          -1,
          752
        ],
        "'SIEVE": [
          -1,
          752
        ],
        "'USING": [
          -1,
          752
        ],
        "'ORDER": [
          -1,
          752
        ],
        "'EXTEND": [
          -1,
          752
        ],
        "'SELECT": [
          -1,
          752
        ],
        "'EXTRACT": [
          -1,
          752
        ],
        "'BLOCK": [
          -1,
          752
        ],
        "'TABLE": [
          -1,
          752
        ],
        "'ASK": [
          -1,
          752
        ],
        "'NEW": [
          -1,
          752
        ]
      },
      {
        "'COMMA": [
          573
        ],
        "table-row_I3": [
          574
        ],
        "'SEMI": [
          -1,
          754
        ]
      },
      {
        "'NAME": [
          -1,
          756
        ],
        "'PARENNOSPACE": [
          -1,
          756
        ],
        "'STRING": [
          -1,
          756
        ],
        "'LBRACE": [
          -1,
          756
        ],
        "'RBRACE": [
          -1,
          756
        ],
        "'SPY": [
          -1,
          756
        ],
        "'PARENSPACE": [
          -1,
          756
        ],
        "'INT": [
          -1,
          756
        ],
        "'LONG": [
          -1,
          756
        ],
        "'DOUBLE": [
          -1,
          756
        ],
        "'FLOAT": [
          -1,
          756
        ],
        "'BOOLEAN": [
          -1,
          756
        ],
        "'VOID": [
          -1,
          756
        ],
        "'DATA": [
          -1,
          756
        ],
        "'IF": [
          -1,
          756
        ],
        "'FOR": [
          -1,
          756
        ],
        "'RETURN": [
          -1,
          756
        ],
        "'VAR": [
          -1,
          756
        ],
        "'REC": [
          -1,
          756
        ],
        "'ATCHECK": [
          -1,
          756
        ],
        "'ASSERTEQUALS": [
          -1,
          756
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          756
        ],
        "'ASSERTTRUE": [
          -1,
          756
        ],
        "'ASSERTFALSE": [
          -1,
          756
        ],
        "'ASSERTSATISFIES": [
          -1,
          756
        ],
        "'ASSERTRAISES": [
          -1,
          756
        ],
        "'SWITCH": [
          -1,
          756
        ],
        "'YIELD": [
          -1,
          756
        ],
        "'DASH": [
          -1,
          756
        ],
        "'BANG": [
          -1,
          756
        ],
        "'LBRACK": [
          -1,
          756
        ],
        "'NUMBER": [
          -1,
          756
        ],
        "'TRUE": [
          -1,
          756
        ],
        "'FALSE": [
          -1,
          756
        ],
        "'NULL": [
          -1,
          756
        ],
        "'PARENAFTERBRACE": [
          -1,
          756
        ],
        "'SIEVE": [
          -1,
          756
        ],
        "'ORDER": [
          -1,
          756
        ],
        "'EXTEND": [
          -1,
          756
        ],
        "'SELECT": [
          -1,
          756
        ],
        "'EXTRACT": [
          -1,
          756
        ],
        "'BLOCK": [
          -1,
          756
        ],
        "'TABLE": [
          -1,
          756
        ],
        "'ASK": [
          -1,
          756
        ],
        "'NEW": [
          -1,
          756
        ]
      },
      {
        "'PARENSPACE": [
          575
        ]
      },
      {
        "'NAME": [
          -1,
          758
        ],
        "'PARENNOSPACE": [
          -1,
          758
        ],
        "'STRING": [
          -1,
          758
        ],
        "'LBRACE": [
          -1,
          758
        ],
        "'RBRACE": [
          -1,
          758
        ],
        "'SPY": [
          -1,
          758
        ],
        "'PARENSPACE": [
          -1,
          758
        ],
        "'INT": [
          -1,
          758
        ],
        "'LONG": [
          -1,
          758
        ],
        "'DOUBLE": [
          -1,
          758
        ],
        "'FLOAT": [
          -1,
          758
        ],
        "'BOOLEAN": [
          -1,
          758
        ],
        "'VOID": [
          -1,
          758
        ],
        "'DATA": [
          -1,
          758
        ],
        "'IF": [
          -1,
          758
        ],
        "'FOR": [
          -1,
          758
        ],
        "'RETURN": [
          -1,
          758
        ],
        "'VAR": [
          -1,
          758
        ],
        "'REC": [
          -1,
          758
        ],
        "'ATCHECK": [
          -1,
          758
        ],
        "'ASSERTEQUALS": [
          -1,
          758
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          758
        ],
        "'ASSERTTRUE": [
          -1,
          758
        ],
        "'ASSERTFALSE": [
          -1,
          758
        ],
        "'ASSERTSATISFIES": [
          -1,
          758
        ],
        "'ASSERTRAISES": [
          -1,
          758
        ],
        "'SWITCH": [
          -1,
          758
        ],
        "'YIELD": [
          -1,
          758
        ],
        "'DASH": [
          -1,
          758
        ],
        "'BANG": [
          -1,
          758
        ],
        "'LBRACK": [
          -1,
          758
        ],
        "'NUMBER": [
          -1,
          758
        ],
        "'TRUE": [
          -1,
          758
        ],
        "'FALSE": [
          -1,
          758
        ],
        "'NULL": [
          -1,
          758
        ],
        "'PARENAFTERBRACE": [
          -1,
          758
        ],
        "'SIEVE": [
          -1,
          758
        ],
        "'ORDER": [
          -1,
          758
        ],
        "'EXTEND": [
          -1,
          758
        ],
        "'SELECT": [
          -1,
          758
        ],
        "'EXTRACT": [
          -1,
          758
        ],
        "'BLOCK": [
          -1,
          758
        ],
        "'TABLE": [
          -1,
          758
        ],
        "'ASK": [
          -1,
          758
        ],
        "'NEW": [
          -1,
          758
        ]
      },
      {
        "'COMMA": [
          576
        ],
        "case-branch_A0_I3_I1": [
          577
        ],
        "'RPAREN": [
          -1,
          760
        ]
      },
      {
        "'COLON": [
          578
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          579
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'SEMI": [
          -1,
          762
        ],
        "'COMMA": [
          -1,
          762
        ]
      },
      {
        "'NAME": [
          108
        ],
        "'PARENNOSPACE": [
          11
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          118
        ],
        "full-expr": [
          580
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "lambda-expr": [
          39
        ],
        "binop-expr": [
          40
        ],
        "unop-expr": [
          41
        ],
        "'DASH": [
          42
        ],
        "'BANG": [
          43
        ],
        "app-or-access": [
          44
        ],
        "'LBRACK": [
          45
        ],
        "prim-expr": [
          46
        ],
        "'NUMBER": [
          47
        ],
        "'TRUE": [
          48
        ],
        "'FALSE": [
          49
        ],
        "'NULL": [
          50
        ],
        "'PARENAFTERBRACE": [
          51
        ],
        "construct-expr": [
          52
        ],
        "map-for-expr": [
          53
        ],
        "new-expr": [
          54
        ],
        "ask-expr": [
          55
        ],
        "table-expr": [
          56
        ],
        "record-expr": [
          57
        ],
        "block-expr": [
          58
        ],
        "sieve-expr": [
          59
        ],
        "order-expr": [
          60
        ],
        "extend-expr": [
          61
        ],
        "select-expr": [
          62
        ],
        "extract-expr": [
          63
        ],
        "'SIEVE": [
          64
        ],
        "'ORDER": [
          65
        ],
        "'EXTEND": [
          66
        ],
        "'SELECT": [
          67
        ],
        "'EXTRACT": [
          68
        ],
        "'BLOCK": [
          69
        ],
        "'TABLE": [
          70
        ],
        "'ASK": [
          71
        ],
        "'NEW": [
          72
        ]
      },
      {
        "'NAME": [
          581
        ]
      },
      {
        "'RPAREN": [
          -1,
          764
        ],
        "'COMMA": [
          -1,
          764
        ]
      },
      {
        "switch-body": [
          582
        ],
        "switch-body_I0*": [
          531
        ],
        "'NAME": [
          -1,
          638
        ],
        "'PARENNOSPACE": [
          -1,
          638
        ],
        "'STRING": [
          -1,
          638
        ],
        "'LBRACE": [
          -1,
          638
        ],
        "'SPY": [
          -1,
          638
        ],
        "'PARENSPACE": [
          -1,
          638
        ],
        "'INT": [
          -1,
          638
        ],
        "'LONG": [
          -1,
          638
        ],
        "'DOUBLE": [
          -1,
          638
        ],
        "'FLOAT": [
          -1,
          638
        ],
        "'BOOLEAN": [
          -1,
          638
        ],
        "'VOID": [
          -1,
          638
        ],
        "'DATA": [
          -1,
          638
        ],
        "'IF": [
          -1,
          638
        ],
        "'FOR": [
          -1,
          638
        ],
        "'RETURN": [
          -1,
          638
        ],
        "'VAR": [
          -1,
          638
        ],
        "'REC": [
          -1,
          638
        ],
        "'ATCHECK": [
          -1,
          638
        ],
        "'SWITCH": [
          -1,
          638
        ],
        "'YIELD": [
          -1,
          638
        ],
        "'DASH": [
          -1,
          638
        ],
        "'BANG": [
          -1,
          638
        ],
        "'LBRACK": [
          -1,
          638
        ],
        "'NUMBER": [
          -1,
          638
        ],
        "'TRUE": [
          -1,
          638
        ],
        "'FALSE": [
          -1,
          638
        ],
        "'NULL": [
          -1,
          638
        ],
        "'PARENAFTERBRACE": [
          -1,
          638
        ],
        "'SIEVE": [
          -1,
          638
        ],
        "'ORDER": [
          -1,
          638
        ],
        "'EXTEND": [
          -1,
          638
        ],
        "'SELECT": [
          -1,
          638
        ],
        "'EXTRACT": [
          -1,
          638
        ],
        "'BLOCK": [
          -1,
          638
        ],
        "'TABLE": [
          -1,
          638
        ],
        "'ASK": [
          -1,
          638
        ],
        "'NEW": [
          -1,
          638
        ]
      },
      {
        "'SEMI": [
          -1,
          766
        ],
        "'COMMA": [
          -1,
          766
        ]
      },
      {
        "'RPAREN": [
          583
        ]
      },
      {
        "'RPAREN": [
          -1,
          768
        ],
        "'COMMA": [
          -1,
          768
        ]
      },
      {
        "'RBRACE": [
          -1,
          770
        ],
        "'CASE": [
          -1,
          770
        ],
        "'DEFAULT": [
          -1,
          770
        ]
      },
      {
        "block": [
          584
        ],
        "'LBRACE": [
          348
        ]
      },
      {
        "'NAME": [
          -1,
          772
        ],
        "'PARENNOSPACE": [
          -1,
          772
        ],
        "'STRING": [
          -1,
          772
        ],
        "'LBRACE": [
          -1,
          772
        ],
        "'RBRACE": [
          -1,
          772
        ],
        "'SPY": [
          -1,
          772
        ],
        "'PARENSPACE": [
          -1,
          772
        ],
        "'INT": [
          -1,
          772
        ],
        "'LONG": [
          -1,
          772
        ],
        "'DOUBLE": [
          -1,
          772
        ],
        "'FLOAT": [
          -1,
          772
        ],
        "'BOOLEAN": [
          -1,
          772
        ],
        "'VOID": [
          -1,
          772
        ],
        "'DATA": [
          -1,
          772
        ],
        "'IF": [
          -1,
          772
        ],
        "'ELSE": [
          -1,
          772
        ],
        "'FOR": [
          -1,
          772
        ],
        "'RETURN": [
          -1,
          772
        ],
        "'VAR": [
          -1,
          772
        ],
        "'REC": [
          -1,
          772
        ],
        "'ATCHECK": [
          -1,
          772
        ],
        "'ASSERTEQUALS": [
          -1,
          772
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          772
        ],
        "'ASSERTTRUE": [
          -1,
          772
        ],
        "'ASSERTFALSE": [
          -1,
          772
        ],
        "'ASSERTSATISFIES": [
          -1,
          772
        ],
        "'ASSERTRAISES": [
          -1,
          772
        ],
        "'SWITCH": [
          -1,
          772
        ],
        "'YIELD": [
          -1,
          772
        ],
        "'DASH": [
          -1,
          772
        ],
        "'BANG": [
          -1,
          772
        ],
        "'LBRACK": [
          -1,
          772
        ],
        "'NUMBER": [
          -1,
          772
        ],
        "'TRUE": [
          -1,
          772
        ],
        "'FALSE": [
          -1,
          772
        ],
        "'NULL": [
          -1,
          772
        ],
        "'PARENAFTERBRACE": [
          -1,
          772
        ],
        "'SIEVE": [
          -1,
          772
        ],
        "'ORDER": [
          -1,
          772
        ],
        "'EXTEND": [
          -1,
          772
        ],
        "'SELECT": [
          -1,
          772
        ],
        "'EXTRACT": [
          -1,
          772
        ],
        "'BLOCK": [
          -1,
          772
        ],
        "'TABLE": [
          -1,
          772
        ],
        "'ASK": [
          -1,
          772
        ],
        "'NEW": [
          -1,
          772
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
      "rec-stmt_I5?": 24,
      "assign-stmt_I3?": 25,
      "expr-stmt_I1?": 26,
      "check-block_A0_I6*": 27,
      "check-block_A1_I2*": 28,
      "assert-stmt_A0_I6?": 29,
      "assert-stmt_A1_I6?": 30,
      "assert-stmt_A2_I4?": 31,
      "assert-stmt_A3_I4?": 32,
      "assert-stmt_A4_I6?": 33,
      "assert-stmt_A5_I6?": 34,
      "assert-stmt_A6_I3?": 35,
      "assert-stmt_A7_I3?": 36,
      "assert-stmt_A8_I3?": 37,
      "assert-stmt_A9_I3?": 38,
      "switch-expr_I5*": 39,
      "switch-expr_I6?": 40,
      "case-branch_A0_I3?": 41,
      "case-branch_A0_I3_I1*": 42,
      "switch-body_I0*": 43,
      "yield-stmt_I2?": 44,
      "lambda-expr_A0_I1?": 45,
      "lambda-expr_A0_I1_I1*": 46,
      "lambda-expr_A1_I1?": 47,
      "lambda-expr_A1_I1_I1*": 48,
      "binop-expr_I1*": 49,
      "app-or-access_A0_I2?": 50,
      "app-or-access_A0_I2_I1*": 51,
      "sieve-expr_I4*": 52,
      "sieve-expr_I6*": 53,
      "order-expr_I4*": 54,
      "order-expr_I5?": 55,
      "extend-expr_I4*": 56,
      "extend-expr_I7*": 57,
      "select-expr_I2*": 58,
      "block-expr_I2*": 59,
      "record-expr_A0_I2*": 60,
      "table-expr_I3*": 61,
      "table-expr_I5*": 62,
      "table-row_I3*": 63,
      "ask-expr_A0_I4*": 64,
      "ask-expr_A1_I4*": 65,
      "new-expr_I3?": 66,
      "new-expr_I3_I1*": 67,
      "construct-expr_A0_I3?": 68,
      "construct-expr_A0_I3_I1*": 69,
      "map-for-expr_A1_I5*": 70,
      "START": 71,
      "if-stmt_I5*,if-stmt_I6?": 72
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
        "rule": 25
      },
      {
        "label": "spy-stmt_I3*",
        "kids": [],
        "rule": 42
      },
      {
        "label": "fun-decl_I3?",
        "kids": [],
        "rule": 46
      },
      {
        "label": "fun-decl_I3_I1*",
        "kids": [],
        "rule": 49
      },
      {
        "label": "fun-decl_I6?",
        "kids": [],
        "rule": 52
      },
      {
        "label": "where-clause_I2*",
        "kids": [],
        "rule": 57
      },
      {
        "label": "type-ann_A6_I1?",
        "kids": [],
        "rule": 68
      },
      {
        "label": "type-ann_A6_I1_I2*",
        "kids": [],
        "rule": 71
      },
      {
        "label": "type-ann_A7_I1?",
        "kids": [],
        "rule": 75
      },
      {
        "label": "type-ann_A7_I1_I1*",
        "kids": [],
        "rule": 78
      },
      {
        "label": "data-decl_I4*",
        "kids": [],
        "rule": 82
      },
      {
        "label": "data-decl_I5?",
        "kids": [],
        "rule": 85
      },
      {
        "label": "variant-decl_A0_I2?",
        "kids": [],
        "rule": 89
      },
      {
        "label": "variant-decl_A0_I2_I1*",
        "kids": [],
        "rule": 92
      },
      {
        "label": "if-stmt_I5*",
        "kids": [],
        "rule": 98
      },
      {
        "label": "if-stmt_I6?",
        "kids": [],
        "rule": 101
      },
      {
        "label": "let-stmt_I4?",
        "kids": [],
        "rule": 108
      },
      {
        "label": "var-stmt_I5?",
        "kids": [],
        "rule": 112
      },
      {
        "label": "rec-stmt_I5?",
        "kids": [],
        "rule": 116
      },
      {
        "label": "assign-stmt_I3?",
        "kids": [],
        "rule": 120
      },
      {
        "label": "expr-stmt_I1?",
        "kids": [],
        "rule": 124
      },
      {
        "label": "check-block_A0_I6*",
        "kids": [],
        "rule": 128
      },
      {
        "label": "check-block_A1_I2*",
        "kids": [],
        "rule": 133
      },
      {
        "label": "assert-stmt_A0_I6?",
        "kids": [],
        "rule": 138
      },
      {
        "label": "assert-stmt_A1_I6?",
        "kids": [],
        "rule": 142
      },
      {
        "label": "assert-stmt_A2_I4?",
        "kids": [],
        "rule": 146
      },
      {
        "label": "assert-stmt_A3_I4?",
        "kids": [],
        "rule": 150
      },
      {
        "label": "assert-stmt_A4_I6?",
        "kids": [],
        "rule": 154
      },
      {
        "label": "assert-stmt_A5_I6?",
        "kids": [],
        "rule": 158
      },
      {
        "label": "assert-stmt_A6_I3?",
        "kids": [],
        "rule": 162
      },
      {
        "label": "assert-stmt_A7_I3?",
        "kids": [],
        "rule": 166
      },
      {
        "label": "assert-stmt_A8_I3?",
        "kids": [],
        "rule": 170
      },
      {
        "label": "assert-stmt_A9_I3?",
        "kids": [],
        "rule": 174
      },
      {
        "label": "switch-expr_I5*",
        "kids": [],
        "rule": 178
      },
      {
        "label": "switch-expr_I6?",
        "kids": [],
        "rule": 181
      },
      {
        "label": "case-branch_A0_I3?",
        "kids": [],
        "rule": 185
      },
      {
        "label": "case-branch_A0_I3_I1*",
        "kids": [],
        "rule": 188
      },
      {
        "label": "switch-body_I0*",
        "kids": [],
        "rule": 194
      },
      {
        "label": "yield-stmt_I2?",
        "kids": [],
        "rule": 198
      },
      {
        "label": "lambda-expr_A0_I1?",
        "kids": [],
        "rule": 202
      },
      {
        "label": "lambda-expr_A0_I1_I1*",
        "kids": [],
        "rule": 205
      },
      {
        "label": "lambda-expr_A1_I1?",
        "kids": [],
        "rule": 209
      },
      {
        "label": "lambda-expr_A1_I1_I1*",
        "kids": [],
        "rule": 212
      },
      {
        "label": "binop-expr_I1*",
        "kids": [],
        "rule": 220
      },
      {
        "label": "app-or-access_A0_I2?",
        "kids": [],
        "rule": 240
      },
      {
        "label": "app-or-access_A0_I2_I1*",
        "kids": [],
        "rule": 243
      },
      {
        "label": "sieve-expr_I4*",
        "kids": [],
        "rule": 271
      },
      {
        "label": "sieve-expr_I6*",
        "kids": [],
        "rule": 274
      },
      {
        "label": "order-expr_I4*",
        "kids": [],
        "rule": 278
      },
      {
        "label": "order-expr_I5?",
        "kids": [],
        "rule": 281
      },
      {
        "label": "extend-expr_I4*",
        "kids": [],
        "rule": 287
      },
      {
        "label": "extend-expr_I7*",
        "kids": [],
        "rule": 290
      },
      {
        "label": "select-expr_I2*",
        "kids": [],
        "rule": 294
      },
      {
        "label": "block-expr_I2*",
        "kids": [],
        "rule": 299
      },
      {
        "label": "record-expr_A0_I2*",
        "kids": [],
        "rule": 303
      },
      {
        "label": "table-expr_I3*",
        "kids": [],
        "rule": 309
      },
      {
        "label": "table-expr_I5*",
        "kids": [],
        "rule": 312
      },
      {
        "label": "table-row_I3*",
        "kids": [],
        "rule": 317
      },
      {
        "label": "ask-expr_A0_I4*",
        "kids": [],
        "rule": 321
      },
      {
        "label": "ask-expr_A1_I4*",
        "kids": [],
        "rule": 325
      },
      {
        "label": "new-expr_I3?",
        "kids": [],
        "rule": 331
      },
      {
        "label": "new-expr_I3_I1*",
        "kids": [],
        "rule": 334
      },
      {
        "label": "construct-expr_A0_I3?",
        "kids": [],
        "rule": 338
      },
      {
        "label": "construct-expr_A0_I3_I1*",
        "kids": [],
        "rule": 341
      },
      {
        "label": "map-for-expr_A1_I5*",
        "kids": [],
        "rule": 347
      },
      {
        "label": "START",
        "kids": [
          1
        ],
        "rule": 352
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
