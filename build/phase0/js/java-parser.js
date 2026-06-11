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
        "name": "record-expr",
        "symbols": [
          "'LBRACE",
          "@record-field",
          "@record-expr_A0_I2*",
          "'RBRACE"
        ]
      },
      "265": {
        "name": "record-expr_A0_I2*",
        "symbols": []
      },
      "266": {
        "name": "record-expr_A0_I2*",
        "symbols": [
          "@record-expr_A0_I2*",
          "@record-expr_A0_I2"
        ]
      },
      "267": {
        "name": "record-expr_A0_I2",
        "symbols": [
          "'COMMA",
          "@record-field"
        ]
      },
      "268": {
        "name": "record-expr",
        "symbols": [
          "'LBRACE",
          "'RBRACE"
        ]
      },
      "269": {
        "name": "record-field",
        "symbols": [
          "'NAME",
          "'COLON",
          "@full-expr"
        ]
      },
      "270": {
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
      "271": {
        "name": "table-expr_I3*",
        "symbols": []
      },
      "272": {
        "name": "table-expr_I3*",
        "symbols": [
          "@table-expr_I3*",
          "@table-expr_I3"
        ]
      },
      "273": {
        "name": "table-expr_I3",
        "symbols": [
          "'COMMA",
          "@table-header"
        ]
      },
      "274": {
        "name": "table-expr_I5*",
        "symbols": []
      },
      "275": {
        "name": "table-expr_I5*",
        "symbols": [
          "@table-expr_I5*",
          "@table-expr_I5"
        ]
      },
      "276": {
        "name": "table-expr_I5",
        "symbols": [
          "@table-row",
          "'SEMI"
        ]
      },
      "277": {
        "name": "table-header",
        "symbols": [
          "@type-ann",
          "'NAME"
        ]
      },
      "278": {
        "name": "table-row",
        "symbols": [
          "'ROW",
          "'COLON",
          "@full-expr",
          "@table-row_I3*"
        ]
      },
      "279": {
        "name": "table-row_I3*",
        "symbols": []
      },
      "280": {
        "name": "table-row_I3*",
        "symbols": [
          "@table-row_I3*",
          "@table-row_I3"
        ]
      },
      "281": {
        "name": "table-row_I3",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "282": {
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
      "283": {
        "name": "ask-expr_A0_I4*",
        "symbols": []
      },
      "284": {
        "name": "ask-expr_A0_I4*",
        "symbols": [
          "@ask-expr_A0_I4*",
          "@ask-expr_A0_I4"
        ]
      },
      "285": {
        "name": "ask-expr_A0_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "286": {
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
      "287": {
        "name": "ask-expr_A1_I4*",
        "symbols": []
      },
      "288": {
        "name": "ask-expr_A1_I4*",
        "symbols": [
          "@ask-expr_A1_I4*",
          "@ask-expr_A1_I4"
        ]
      },
      "289": {
        "name": "ask-expr_A1_I4",
        "symbols": [
          "@ask-branch",
          "'SEMI"
        ]
      },
      "290": {
        "name": "ask-branch",
        "symbols": [
          "@binop-expr",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "291": {
        "name": "otherwise-branch",
        "symbols": [
          "'OTHERWISE",
          "'THINARROW",
          "@full-expr"
        ]
      },
      "292": {
        "name": "new-expr",
        "symbols": [
          "'NEW",
          "'NAME",
          "'PARENNOSPACE",
          "@new-expr_I3?",
          "'RPAREN"
        ]
      },
      "293": {
        "name": "new-expr_I3?",
        "symbols": []
      },
      "294": {
        "name": "new-expr_I3?",
        "symbols": [
          "@new-expr_I3"
        ]
      },
      "295": {
        "name": "new-expr_I3",
        "symbols": [
          "@full-expr",
          "@new-expr_I3_I1*"
        ]
      },
      "296": {
        "name": "new-expr_I3_I1*",
        "symbols": []
      },
      "297": {
        "name": "new-expr_I3_I1*",
        "symbols": [
          "@new-expr_I3_I1*",
          "@new-expr_I3_I1"
        ]
      },
      "298": {
        "name": "new-expr_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "299": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'NAME",
          "'COLON",
          "@construct-expr_A0_I3?",
          "'RBRACK"
        ]
      },
      "300": {
        "name": "construct-expr_A0_I3?",
        "symbols": []
      },
      "301": {
        "name": "construct-expr_A0_I3?",
        "symbols": [
          "@construct-expr_A0_I3"
        ]
      },
      "302": {
        "name": "construct-expr_A0_I3",
        "symbols": [
          "@full-expr",
          "@construct-expr_A0_I3_I1*"
        ]
      },
      "303": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": []
      },
      "304": {
        "name": "construct-expr_A0_I3_I1*",
        "symbols": [
          "@construct-expr_A0_I3_I1*",
          "@construct-expr_A0_I3_I1"
        ]
      },
      "305": {
        "name": "construct-expr_A0_I3_I1",
        "symbols": [
          "'COMMA",
          "@full-expr"
        ]
      },
      "306": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "'RBRACK"
        ]
      },
      "307": {
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
      "308": {
        "name": "START",
        "symbols": [
          "@program"
        ]
      },
      "401": {
        "position": 1,
        "like": 0
      },
      "460": {
        "position": 1,
        "like": 1
      },
      "760": {
        "position": 2,
        "like": 0
      },
      "762": {
        "position": 1,
        "like": 12
      },
      "2791": {
        "position": 2,
        "like": 3
      },
      "2822": {
        "position": 1,
        "like": 4
      },
      "3071": {
        "position": 1,
        "like": 67
      },
      "3072": {
        "position": 1,
        "like": 254
      },
      "3184": {
        "position": 1,
        "like": 250
      },
      "3227": {
        "position": 2,
        "like": 14
      },
      "3256": {
        "position": 1,
        "like": 15
      },
      "3285": {
        "position": 1,
        "like": 16
      },
      "3314": {
        "position": 1,
        "like": 17
      },
      "3343": {
        "position": 1,
        "like": 18
      },
      "3372": {
        "position": 1,
        "like": 19
      },
      "3401": {
        "position": 1,
        "like": 20
      },
      "3430": {
        "position": 1,
        "like": 21
      },
      "3459": {
        "position": 1,
        "like": 22
      },
      "3488": {
        "position": 1,
        "like": 23
      },
      "3797": {
        "position": 1,
        "like": 61
      },
      "3799": {
        "position": 1,
        "like": 62
      },
      "3801": {
        "position": 1,
        "like": 63
      },
      "3803": {
        "position": 1,
        "like": 64
      },
      "3805": {
        "position": 1,
        "like": 65
      },
      "3807": {
        "position": 1,
        "like": 66
      },
      "3838": {
        "position": 1,
        "like": 123
      },
      "4067": {
        "position": 1,
        "like": 257
      },
      "4153": {
        "position": 1,
        "like": 217
      },
      "4183": {
        "position": 1,
        "like": 218
      },
      "4213": {
        "position": 1,
        "like": 219
      },
      "4409": {
        "position": 1,
        "like": 238
      },
      "4709": {
        "position": 1,
        "like": 248
      },
      "4752": {
        "position": 1,
        "like": 249
      },
      "4795": {
        "position": 1,
        "like": 251
      },
      "4838": {
        "position": 1,
        "like": 252
      },
      "4881": {
        "position": 1,
        "like": 253
      },
      "4967": {
        "position": 1,
        "like": 258
      },
      "5010": {
        "position": 1,
        "like": 259
      },
      "5053": {
        "position": 1,
        "like": 260
      },
      "5096": {
        "position": 1,
        "like": 261
      },
      "5139": {
        "position": 1,
        "like": 262
      },
      "5182": {
        "position": 1,
        "like": 263
      },
      "5614": {
        "position": 2,
        "like": 67
      },
      "5616": {
        "position": 1,
        "like": 69
      },
      "5657": {
        "position": 1,
        "like": 216
      },
      "5663": {
        "position": 1,
        "like": 211
      },
      "5699": {
        "position": 1,
        "like": 210
      },
      "5704": {
        "position": 2,
        "like": 268
      },
      "5811": {
        "position": 1,
        "like": 77
      },
      "5831": {
        "position": 1,
        "like": 76
      },
      "5909": {
        "position": 1,
        "like": 203
      },
      "5911": {
        "position": 1,
        "like": 204
      },
      "6033": {
        "position": 1,
        "like": 126
      },
      "6062": {
        "position": 2,
        "like": 123
      },
      "6091": {
        "position": 1,
        "like": 125
      },
      "6357": {
        "position": 2,
        "like": 219
      },
      "6678": {
        "position": 2,
        "like": 237
      },
      "6720": {
        "position": 2,
        "like": 236
      },
      "7050": {
        "position": 2,
        "like": 306
      },
      "7344": {
        "position": 3,
        "like": 5
      },
      "7468": {
        "position": 3,
        "like": 9
      },
      "7578": {
        "position": 3,
        "like": 119
      },
      "7691": {
        "position": 2,
        "like": 215
      },
      "7694": {
        "position": 2,
        "like": 211
      },
      "7825": {
        "position": 2,
        "like": 77
      },
      "7842": {
        "position": 3,
        "like": 255
      },
      "7915": {
        "position": 2,
        "like": 204
      },
      "10089": {
        "position": 1,
        "like": 232
      },
      "10106": {
        "position": 1,
        "like": 233
      },
      "10123": {
        "position": 2,
        "like": 221
      },
      "10207": {
        "position": 1,
        "like": 223
      },
      "10224": {
        "position": 1,
        "like": 224
      },
      "10241": {
        "position": 1,
        "like": 225
      },
      "10258": {
        "position": 1,
        "like": 226
      },
      "10275": {
        "position": 1,
        "like": 227
      },
      "10292": {
        "position": 1,
        "like": 228
      },
      "10309": {
        "position": 1,
        "like": 229
      },
      "10326": {
        "position": 1,
        "like": 230
      },
      "10343": {
        "position": 1,
        "like": 231
      },
      "10360": {
        "position": 1,
        "like": 234
      },
      "10377": {
        "position": 1,
        "like": 235
      },
      "10401": {
        "position": 1,
        "like": 242
      },
      "10463": {
        "position": 1,
        "like": 241
      },
      "10484": {
        "position": 3,
        "like": 246
      },
      "10700": {
        "position": 3,
        "like": 256
      },
      "11124": {
        "position": 1,
        "like": 122
      },
      "11153": {
        "position": 4,
        "like": 119
      },
      "11182": {
        "position": 1,
        "like": 121
      },
      "11214": {
        "position": 2,
        "like": 213
      },
      "11254": {
        "position": 3,
        "like": 269
      },
      "11289": {
        "position": 4,
        "like": 264
      },
      "11335": {
        "position": 2,
        "like": 266
      },
      "11341": {
        "position": 2,
        "like": 79
      },
      "11390": {
        "position": 2,
        "like": 206
      },
      "11425": {
        "position": 1,
        "like": 47
      },
      "11427": {
        "position": 1,
        "like": 48
      },
      "11433": {
        "position": 4,
        "like": 107
      },
      "11547": {
        "position": 1,
        "like": 95
      },
      "11700": {
        "position": 1,
        "like": 28
      },
      "11740": {
        "position": 1,
        "like": 29
      },
      "11780": {
        "position": 1,
        "like": 32
      },
      "11820": {
        "position": 1,
        "like": 34
      },
      "11860": {
        "position": 1,
        "like": 35
      },
      "11900": {
        "position": 1,
        "like": 36
      },
      "11940": {
        "position": 1,
        "like": 37
      },
      "11980": {
        "position": 1,
        "like": 40
      },
      "12050": {
        "position": 4,
        "like": 132
      },
      "12079": {
        "position": 1,
        "like": 135
      },
      "12119": {
        "position": 1,
        "like": 30
      },
      "12159": {
        "position": 1,
        "like": 31
      },
      "12199": {
        "position": 1,
        "like": 33
      },
      "12239": {
        "position": 1,
        "like": 38
      },
      "12279": {
        "position": 1,
        "like": 39
      },
      "12413": {
        "position": 1,
        "like": 136
      },
      "12881": {
        "position": 2,
        "like": 134
      },
      "13753": {
        "position": 2,
        "like": 222
      },
      "13795": {
        "position": 2,
        "like": 242
      },
      "13802": {
        "position": 4,
        "like": 239
      },
      "13845": {
        "position": 4,
        "like": 247
      },
      "13890": {
        "position": 1,
        "like": 302
      },
      "13941": {
        "position": 1,
        "like": 301
      },
      "13986": {
        "position": 2,
        "like": 277
      },
      "14193": {
        "position": 1,
        "like": 295
      },
      "14242": {
        "position": 1,
        "like": 294
      },
      "14244": {
        "position": 5,
        "like": 6
      },
      "14337": {
        "position": 5,
        "like": 10
      },
      "14402": {
        "position": 4,
        "like": 70
      },
      "14404": {
        "position": 2,
        "like": 72
      },
      "14407": {
        "position": 2,
        "like": 214
      },
      "14410": {
        "position": 5,
        "like": 208
      },
      "14440": {
        "position": 2,
        "like": 267
      },
      "14443": {
        "position": 2,
        "like": 80
      },
      "14446": {
        "position": 5,
        "like": 74
      },
      "14448": {
        "position": 5,
        "like": 201
      },
      "14478": {
        "position": 2,
        "like": 207
      },
      "14481": {
        "position": 2,
        "like": 55
      },
      "14542": {
        "position": 2,
        "like": 48
      },
      "14549": {
        "position": 1,
        "like": 110
      },
      "14578": {
        "position": 5,
        "like": 107
      },
      "14607": {
        "position": 1,
        "like": 109
      },
      "14681": {
        "position": 5,
        "like": 111
      },
      "14794": {
        "position": 5,
        "like": 115
      },
      "15223": {
        "position": 2,
        "like": 106
      },
      "15543": {
        "position": 2,
        "like": 197
      },
      "15781": {
        "position": 2,
        "like": 244
      },
      "15784": {
        "position": 2,
        "like": 302
      },
      "15791": {
        "position": 5,
        "like": 299
      },
      "15927": {
        "position": 2,
        "like": 272
      },
      "15930": {
        "position": 3,
        "like": 290
      },
      "16089": {
        "position": 2,
        "like": 295
      },
      "16096": {
        "position": 5,
        "like": 292
      },
      "16139": {
        "position": 6,
        "like": 7
      },
      "16201": {
        "position": 6,
        "like": 11
      },
      "16232": {
        "position": 2,
        "like": 73
      },
      "16235": {
        "position": 6,
        "like": 45
      },
      "16475": {
        "position": 2,
        "like": 50
      },
      "16484": {
        "position": 1,
        "like": 90
      },
      "16486": {
        "position": 1,
        "like": 91
      },
      "16493": {
        "position": 1,
        "like": 87
      },
      "16526": {
        "position": 2,
        "like": 83
      },
      "16529": {
        "position": 1,
        "like": 86
      },
      "16531": {
        "position": 1,
        "like": 114
      },
      "16560": {
        "position": 6,
        "like": 111
      },
      "16589": {
        "position": 1,
        "like": 113
      },
      "16618": {
        "position": 1,
        "like": 118
      },
      "16647": {
        "position": 6,
        "like": 115
      },
      "16676": {
        "position": 1,
        "like": 117
      },
      "16789": {
        "position": 3,
        "like": 161
      },
      "16946": {
        "position": 3,
        "like": 165
      },
      "17103": {
        "position": 3,
        "like": 169
      },
      "17260": {
        "position": 3,
        "like": 173
      },
      "17457": {
        "position": 3,
        "like": 105
      },
      "17737": {
        "position": 1,
        "like": 200
      },
      "17777": {
        "position": 3,
        "like": 197
      },
      "17817": {
        "position": 1,
        "like": 199
      },
      "18024": {
        "position": 2,
        "like": 245
      },
      "18030": {
        "position": 2,
        "like": 304
      },
      "18125": {
        "position": 2,
        "like": 273
      },
      "18128": {
        "position": 6,
        "like": 282
      },
      "18189": {
        "position": 2,
        "like": 284
      },
      "18268": {
        "position": 2,
        "like": 288
      },
      "18291": {
        "position": 2,
        "like": 297
      },
      "18325": {
        "position": 7,
        "like": 45
      },
      "18354": {
        "position": 1,
        "like": 53
      },
      "18383": {
        "position": 1,
        "like": 54
      },
      "18538": {
        "position": 2,
        "like": 51
      },
      "18541": {
        "position": 2,
        "like": 96
      },
      "18544": {
        "position": 4,
        "like": 88
      },
      "18547": {
        "position": 2,
        "like": 91
      },
      "18554": {
        "position": 2,
        "like": 84
      },
      "18557": {
        "position": 7,
        "like": 81
      },
      "18684": {
        "position": 1,
        "like": 164
      },
      "18724": {
        "position": 4,
        "like": 161
      },
      "18764": {
        "position": 1,
        "like": 163
      },
      "18804": {
        "position": 1,
        "like": 168
      },
      "18844": {
        "position": 4,
        "like": 165
      },
      "18884": {
        "position": 1,
        "like": 167
      },
      "18924": {
        "position": 1,
        "like": 172
      },
      "18964": {
        "position": 4,
        "like": 169
      },
      "19004": {
        "position": 1,
        "like": 171
      },
      "19044": {
        "position": 1,
        "like": 176
      },
      "19084": {
        "position": 4,
        "like": 173
      },
      "19124": {
        "position": 1,
        "like": 175
      },
      "19284": {
        "position": 4,
        "like": 145
      },
      "19441": {
        "position": 4,
        "like": 149
      },
      "19868": {
        "position": 2,
        "like": 179
      },
      "19872": {
        "position": 1,
        "like": 180
      },
      "19876": {
        "position": 1,
        "like": 182
      },
      "19878": {
        "position": 1,
        "like": 183
      },
      "19890": {
        "position": 2,
        "like": 305
      },
      "19936": {
        "position": 7,
        "like": 270
      },
      "19979": {
        "position": 2,
        "like": 275
      },
      "19987": {
        "position": 2,
        "like": 285
      },
      "20005": {
        "position": 2,
        "like": 289
      },
      "20068": {
        "position": 2,
        "like": 298
      },
      "20071": {
        "position": 8,
        "like": 8
      },
      "20209": {
        "position": 3,
        "like": 24
      },
      "20239": {
        "position": 2,
        "like": 26
      },
      "20273": {
        "position": 1,
        "like": 27
      },
      "20310": {
        "position": 2,
        "like": 93
      },
      "20353": {
        "position": 2,
        "like": 43
      },
      "20359": {
        "position": 5,
        "like": 97
      },
      "20612": {
        "position": 1,
        "like": 148
      },
      "20652": {
        "position": 5,
        "like": 145
      },
      "20692": {
        "position": 1,
        "like": 147
      },
      "20732": {
        "position": 1,
        "like": 152
      },
      "20772": {
        "position": 5,
        "like": 149
      },
      "20812": {
        "position": 1,
        "like": 151
      },
      "20932": {
        "position": 8,
        "like": 127
      },
      "20961": {
        "position": 1,
        "like": 130
      },
      "21001": {
        "position": 1,
        "like": 131
      },
      "21041": {
        "position": 2,
        "like": 129
      },
      "21081": {
        "position": 8,
        "like": 177
      },
      "21243": {
        "position": 2,
        "like": 276
      },
      "21248": {
        "position": 8,
        "like": 286
      },
      "21291": {
        "position": 3,
        "like": 291
      },
      "21440": {
        "position": 2,
        "like": 94
      },
      "21443": {
        "position": 6,
        "like": 41
      },
      "21483": {
        "position": 2,
        "like": 44
      },
      "21486": {
        "position": 6,
        "like": 97
      },
      "21764": {
        "position": 6,
        "like": 137
      },
      "21921": {
        "position": 6,
        "like": 141
      },
      "22078": {
        "position": 6,
        "like": 153
      },
      "22235": {
        "position": 6,
        "like": 157
      },
      "22405": {
        "position": 3,
        "like": 192
      },
      "22518": {
        "position": 3,
        "like": 278
      },
      "22524": {
        "position": 4,
        "like": 56
      },
      "22553": {
        "position": 1,
        "like": 59
      },
      "22593": {
        "position": 2,
        "like": 58
      },
      "22633": {
        "position": 1,
        "like": 60
      },
      "22673": {
        "position": 7,
        "like": 97
      },
      "22713": {
        "position": 2,
        "like": 99
      },
      "22835": {
        "position": 1,
        "like": 102
      },
      "22915": {
        "position": 1,
        "like": 140
      },
      "22955": {
        "position": 7,
        "like": 137
      },
      "22995": {
        "position": 1,
        "like": 139
      },
      "23035": {
        "position": 1,
        "like": 144
      },
      "23075": {
        "position": 7,
        "like": 141
      },
      "23115": {
        "position": 1,
        "like": 143
      },
      "23155": {
        "position": 1,
        "like": 156
      },
      "23195": {
        "position": 7,
        "like": 153
      },
      "23235": {
        "position": 1,
        "like": 155
      },
      "23275": {
        "position": 1,
        "like": 160
      },
      "23315": {
        "position": 7,
        "like": 157
      },
      "23355": {
        "position": 1,
        "like": 159
      },
      "23395": {
        "position": 1,
        "like": 187
      },
      "23405": {
        "position": 1,
        "like": 186
      },
      "23407": {
        "position": 4,
        "like": 191
      },
      "23415": {
        "position": 1,
        "like": 196
      },
      "23448": {
        "position": 2,
        "like": 193
      },
      "23450": {
        "position": 2,
        "like": 195
      },
      "23483": {
        "position": 10,
        "like": 307
      },
      "23526": {
        "position": 4,
        "like": 278
      },
      "23533": {
        "position": 2,
        "like": 103
      },
      "23614": {
        "position": 8,
        "like": 104
      },
      "23654": {
        "position": 2,
        "like": 187
      },
      "23668": {
        "position": 2,
        "like": 280
      },
      "23715": {
        "position": 2,
        "like": 189
      },
      "23722": {
        "position": 2,
        "like": 281
      },
      "23766": {
        "position": 2,
        "like": 190
      },
      "23769": {
        "position": 7,
        "like": 184
      },
      "23814": {
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
      "265": "Inline",
      "266": [
        "ListSnoc",
        "record-expr_A0_I2*",
        "record-expr_A0_I2",
        true
      ],
      "267": "Inline",
      "268": "dA",
      "269": "dA",
      "270": "dA",
      "271": "Inline",
      "272": [
        "ListSnoc",
        "table-expr_I3*",
        "table-expr_I3",
        true
      ],
      "273": "Inline",
      "274": "Inline",
      "275": [
        "ListSnoc",
        "table-expr_I5*",
        "table-expr_I5",
        true
      ],
      "276": "Inline",
      "277": "dA",
      "278": "dA",
      "279": "Inline",
      "280": [
        "ListSnoc",
        "table-row_I3*",
        "table-row_I3",
        true
      ],
      "281": "Inline",
      "282": "dA",
      "283": "Inline",
      "284": [
        "ListSnoc",
        "ask-expr_A0_I4*",
        "ask-expr_A0_I4",
        true
      ],
      "285": "Inline",
      "286": "dA",
      "287": "Inline",
      "288": [
        "ListSnoc",
        "ask-expr_A1_I4*",
        "ask-expr_A1_I4",
        true
      ],
      "289": "Inline",
      "290": "dA",
      "291": "dA",
      "292": "dA",
      "293": "Inline",
      "294": "Inline",
      "295": "Inline",
      "296": "Inline",
      "297": [
        "ListSnoc",
        "new-expr_I3_I1*",
        "new-expr_I3_I1",
        true
      ],
      "298": "Inline",
      "299": "dA",
      "300": "Inline",
      "301": "Inline",
      "302": "Inline",
      "303": "Inline",
      "304": [
        "ListSnoc",
        "construct-expr_A0_I3_I1*",
        "construct-expr_A0_I3_I1",
        true
      ],
      "305": "Inline",
      "306": "dA",
      "307": "dA",
      "308": "dA"
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
      268,
      265,
      266,
      267,
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
      286,
      283,
      284,
      285,
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
      306,
      300,
      301,
      302,
      303,
      304,
      305,
      307,
      308
    ],
    "reduceActions": [
      0,
      1,
      1,
      2,
      2,
      3,
      401,
      4,
      12,
      4,
      13,
      5,
      460,
      0,
      760,
      0,
      762,
      0,
      2791,
      0,
      2822,
      0,
      3072,
      0,
      3071,
      12,
      68,
      12,
      209,
      47,
      3184,
      0,
      3227,
      0,
      3256,
      0,
      3285,
      0,
      3314,
      0,
      3343,
      0,
      3372,
      0,
      3401,
      0,
      3430,
      0,
      3459,
      0,
      3488,
      0,
      202,
      45,
      75,
      14,
      3797,
      0,
      3799,
      0,
      3801,
      0,
      3803,
      0,
      3805,
      0,
      3807,
      0,
      3838,
      26,
      124,
      26,
      4067,
      0,
      4153,
      0,
      4183,
      0,
      4213,
      49,
      220,
      49,
      4409,
      0,
      4709,
      0,
      4752,
      0,
      4795,
      0,
      4838,
      0,
      4881,
      0,
      4967,
      0,
      5010,
      0,
      5053,
      0,
      5096,
      0,
      5139,
      0,
      5182,
      0,
      5614,
      0,
      5616,
      0,
      5657,
      0,
      5663,
      48,
      212,
      48,
      5699,
      0,
      5704,
      0,
      265,
      52,
      78,
      15,
      5811,
      15,
      5831,
      0,
      5909,
      0,
      5911,
      46,
      205,
      46,
      6033,
      0,
      6062,
      0,
      6091,
      0,
      133,
      28,
      6357,
      0,
      6678,
      0,
      6720,
      0,
      240,
      50,
      7050,
      0,
      7344,
      0,
      7468,
      0,
      71,
      13,
      7578,
      25,
      120,
      25,
      7691,
      0,
      7694,
      0,
      7825,
      0,
      7842,
      0,
      7915,
      0,
      46,
      8,
      10089,
      0,
      10106,
      0,
      10123,
      0,
      10207,
      0,
      10224,
      0,
      10241,
      0,
      10258,
      0,
      10275,
      0,
      10292,
      0,
      10309,
      0,
      10326,
      0,
      10343,
      0,
      10360,
      0,
      10377,
      0,
      10401,
      51,
      243,
      51,
      10463,
      0,
      10484,
      0,
      300,
      60,
      10700,
      0,
      271,
      53,
      293,
      58,
      11124,
      0,
      11153,
      0,
      11182,
      0,
      11214,
      0,
      11254,
      0,
      11289,
      0,
      11335,
      0,
      11341,
      0,
      11390,
      0,
      11425,
      0,
      11427,
      9,
      49,
      9,
      11433,
      22,
      108,
      22,
      11547,
      0,
      82,
      16,
      11700,
      0,
      11740,
      0,
      11780,
      0,
      11820,
      0,
      11860,
      0,
      11900,
      0,
      11940,
      0,
      11980,
      0,
      12050,
      0,
      12079,
      0,
      12119,
      0,
      12159,
      0,
      12199,
      0,
      12239,
      0,
      12279,
      0,
      12413,
      0,
      12881,
      0,
      13753,
      0,
      13795,
      0,
      13802,
      0,
      13845,
      0,
      303,
      61,
      13890,
      61,
      13941,
      0,
      13986,
      0,
      283,
      56,
      287,
      57,
      14193,
      59,
      296,
      59,
      14242,
      0,
      14244,
      0,
      14337,
      0,
      14402,
      0,
      14404,
      0,
      14407,
      0,
      14410,
      0,
      14440,
      0,
      14443,
      0,
      14446,
      0,
      14448,
      0,
      14478,
      0,
      14481,
      0,
      14542,
      0,
      14549,
      0,
      14578,
      0,
      14607,
      0,
      89,
      18,
      85,
      17,
      14681,
      23,
      112,
      23,
      14794,
      24,
      116,
      24,
      15223,
      0,
      15543,
      44,
      198,
      44,
      178,
      39,
      15781,
      0,
      15784,
      0,
      15791,
      0,
      274,
      54,
      15927,
      0,
      15930,
      0,
      16089,
      0,
      16096,
      0,
      16139,
      0,
      16201,
      0,
      16232,
      0,
      16235,
      10,
      52,
      10,
      25,
      6,
      16475,
      0,
      16484,
      0,
      16486,
      19,
      92,
      19,
      16493,
      0,
      16526,
      0,
      16529,
      0,
      16531,
      0,
      16560,
      0,
      16589,
      0,
      16618,
      0,
      16647,
      0,
      16676,
      0,
      42,
      7,
      16789,
      35,
      162,
      35,
      16946,
      36,
      166,
      36,
      17103,
      37,
      170,
      37,
      17260,
      38,
      174,
      38,
      17457,
      0,
      17737,
      0,
      17777,
      0,
      17817,
      0,
      128,
      27,
      181,
      40,
      18024,
      0,
      18030,
      0,
      18125,
      0,
      18128,
      0,
      18189,
      0,
      18268,
      0,
      18291,
      0,
      18325,
      0,
      18354,
      0,
      18383,
      0,
      18538,
      0,
      18541,
      0,
      18544,
      0,
      18547,
      0,
      18554,
      0,
      18557,
      0,
      18684,
      0,
      18724,
      0,
      18764,
      0,
      18804,
      0,
      18844,
      0,
      18884,
      0,
      18924,
      0,
      18964,
      0,
      19004,
      0,
      19044,
      0,
      19084,
      0,
      19124,
      0,
      19284,
      31,
      146,
      31,
      19441,
      32,
      150,
      32,
      19868,
      0,
      19872,
      0,
      19876,
      0,
      19878,
      0,
      19890,
      0,
      19936,
      0,
      19979,
      0,
      19987,
      0,
      20005,
      0,
      20068,
      0,
      20071,
      0,
      57,
      11,
      20209,
      0,
      20239,
      0,
      20273,
      0,
      20310,
      0,
      20353,
      0,
      20359,
      63,
      98,
      20,
      20612,
      0,
      20652,
      0,
      20692,
      0,
      20732,
      0,
      20772,
      0,
      20812,
      0,
      20932,
      0,
      20961,
      0,
      21001,
      0,
      21041,
      0,
      21081,
      0,
      194,
      43,
      21243,
      0,
      21248,
      0,
      21291,
      0,
      21440,
      0,
      21443,
      0,
      21483,
      0,
      21486,
      21,
      101,
      21,
      21764,
      29,
      138,
      29,
      21921,
      30,
      142,
      30,
      22078,
      33,
      154,
      33,
      22235,
      34,
      158,
      34,
      185,
      41,
      22405,
      0,
      22518,
      55,
      279,
      55,
      22524,
      0,
      22553,
      0,
      22593,
      0,
      22633,
      0,
      22673,
      0,
      22713,
      0,
      22835,
      0,
      22915,
      0,
      22955,
      0,
      22995,
      0,
      23035,
      0,
      23075,
      0,
      23115,
      0,
      23155,
      0,
      23195,
      0,
      23235,
      0,
      23275,
      0,
      23315,
      0,
      23355,
      0,
      23395,
      42,
      188,
      42,
      23405,
      0,
      23407,
      0,
      23415,
      0,
      23448,
      0,
      23450,
      0,
      23483,
      0,
      23526,
      0,
      23533,
      0,
      23614,
      0,
      23654,
      0,
      23668,
      0,
      23715,
      0,
      23722,
      0,
      23766,
      0,
      23769,
      0,
      23814,
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
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
          61
        ]
      },
      {
        "'NAME": [
          62
        ]
      },
      {
        "type-ann_A6_I1?": [
          63
        ],
        "type-ann_A6_I1": [
          64
        ],
        "'LT": [
          65,
          22
        ],
        "'COLONEQUALS": [
          66
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
          67
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          69
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
          70
        ],
        "lambda-expr_A1_I1?": [
          71
        ],
        "lambda-expr_A1_I1": [
          72
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
          73
        ],
        "'RBRACE": [
          74
        ],
        "record-field": [
          75
        ]
      },
      {
        "'NAME": [
          76
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
          77
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
          78
        ],
        "type-ann_A7_I1": [
          79
        ],
        "full-expr": [
          80
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
          81
        ],
        "lambda-expr_A0_I1": [
          82
        ],
        "lambda-param": [
          83
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
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
          84
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
          85
        ]
      },
      {
        "'SEMI": [
          86
        ],
        "expr-stmt_I1?": [
          87
        ],
        "expr-stmt_I1": [
          88
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
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          90
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
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          91
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
          92
        ],
        "'VOID": [
          93
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
          94
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
        "'DASH": [
          -1,
          76
        ],
        "'BANG": [
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
          95
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
          80
        ],
        "'GT": [
          -1,
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
          80
        ],
        "'DASH": [
          -1,
          78,
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
          96
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          97
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          98
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          97
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          99
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'PARENNOSPACE": [
          100,
          82
        ],
        "'DOT": [
          101
        ],
        "'LBRACK": [
          102,
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
          103
        ],
        "'FOR": [
          104
        ],
        "'RBRACK": [
          105
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
          96
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
          106
        ],
        "full-expr": [
          107
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
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
        "'LBRACE": [
          108
        ]
      },
      {
        "'LBRACE": [
          109
        ]
      },
      {
        "'NAME": [
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
        "'SEMI": [
          114
        ],
        "'AS": [
          115
        ],
        "'PARENNOSPACE": [
          116
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
          -1,
          108
        ],
        "'RPAREN": [
          -1,
          108
        ],
        "'COMMA": [
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
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          117
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
          96
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
          106
        ],
        "full-expr": [
          118
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "type-ann_A6_I1?": [
          63
        ],
        "type-ann_A6_I1": [
          64
        ],
        "'LT": [
          65
        ],
        "'NAME": [
          -1,
          24,
          26
        ],
        "'RPAREN": [
          -1,
          110
        ],
        "'COMMA": [
          -1,
          110
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          119
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
          78
        ],
        "type-ann_A7_I1": [
          79
        ],
        "'THINARROW": [
          -1,
          54
        ]
      },
      {
        "'NAME": [
          120
        ]
      },
      {
        "lambda-expr_A1_I1_I1*": [
          121
        ],
        "'RPAREN": [
          -1,
          112,
          114
        ],
        "'COMMA": [
          -1,
          114
        ]
      },
      {
        "'RPAREN": [
          122
        ]
      },
      {
        "'RPAREN": [
          -1,
          116
        ]
      },
      {
        "'COLON": [
          123
        ]
      },
      {
        "$": [
          -1,
          118
        ],
        "'NAME": [
          -1,
          118
        ],
        "'SEMI": [
          -1,
          118
        ],
        "'PARENNOSPACE": [
          -1,
          118
        ],
        "'STRING": [
          -1,
          118
        ],
        "'RPAREN": [
          -1,
          118
        ],
        "'LBRACE": [
          -1,
          118
        ],
        "'RBRACE": [
          -1,
          118
        ],
        "'SPY": [
          -1,
          118
        ],
        "'PARENSPACE": [
          -1,
          118
        ],
        "'COMMA": [
          -1,
          118
        ],
        "'INT": [
          -1,
          118
        ],
        "'LONG": [
          -1,
          118
        ],
        "'DOUBLE": [
          -1,
          118
        ],
        "'FLOAT": [
          -1,
          118
        ],
        "'BOOLEAN": [
          -1,
          118
        ],
        "'VOID": [
          -1,
          118
        ],
        "'LT": [
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
        ],
        "'DATA": [
          -1,
          118
        ],
        "'IF": [
          -1,
          118
        ],
        "'FOR": [
          -1,
          118
        ],
        "'RETURN": [
          -1,
          118
        ],
        "'VAR": [
          -1,
          118
        ],
        "'REC": [
          -1,
          118
        ],
        "'ATCHECK": [
          -1,
          118
        ],
        "'ASSERTEQUALS": [
          -1,
          118
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          118
        ],
        "'ASSERTTRUE": [
          -1,
          118
        ],
        "'ASSERTFALSE": [
          -1,
          118
        ],
        "'ASSERTSATISFIES": [
          -1,
          118
        ],
        "'ASSERTRAISES": [
          -1,
          118
        ],
        "'IS": [
          -1,
          118
        ],
        "'ISNOT": [
          -1,
          118
        ],
        "'SATISFIES": [
          -1,
          118
        ],
        "'RAISES": [
          -1,
          118
        ],
        "'SWITCH": [
          -1,
          118
        ],
        "'CASE": [
          -1,
          118
        ],
        "'DEFAULT": [
          -1,
          118
        ],
        "'YIELD": [
          -1,
          118
        ],
        "'PLUS": [
          -1,
          118
        ],
        "'DASH": [
          -1,
          118
        ],
        "'TIMES": [
          -1,
          118
        ],
        "'SLASH": [
          -1,
          118
        ],
        "'PERCENT": [
          -1,
          118
        ],
        "'EQUALEQUAL": [
          -1,
          118
        ],
        "'NEQ": [
          -1,
          118
        ],
        "'LEQ": [
          -1,
          118
        ],
        "'GEQ": [
          -1,
          118
        ],
        "'AND": [
          -1,
          118
        ],
        "'OR": [
          -1,
          118
        ],
        "'BANG": [
          -1,
          118
        ],
        "'DOT": [
          -1,
          118
        ],
        "'LBRACK": [
          -1,
          118
        ],
        "'RBRACK": [
          -1,
          118
        ],
        "'NUMBER": [
          -1,
          118
        ],
        "'TRUE": [
          -1,
          118
        ],
        "'FALSE": [
          -1,
          118
        ],
        "'NULL": [
          -1,
          118
        ],
        "'PARENAFTERBRACE": [
          -1,
          118
        ],
        "'TABLE": [
          -1,
          118
        ],
        "'ASK": [
          -1,
          118
        ],
        "'NEW": [
          -1,
          118
        ]
      },
      {
        "record-expr_A0_I2*": [
          124
        ],
        "'RBRACE": [
          -1,
          120
        ],
        "'COMMA": [
          -1,
          120
        ]
      },
      {
        "type-ann_A6_I1?": [
          63
        ],
        "type-ann_A6_I1": [
          64
        ],
        "'LT": [
          65,
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
          110,
          22
        ],
        "'COMMA": [
          -1,
          24,
          110,
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
          120
        ],
        "type-ann_A7_I1_I1*": [
          125
        ],
        "'COMMA": [
          -1,
          122
        ],
        "'THINARROW": [
          -1,
          124,
          122
        ]
      },
      {
        "'THINARROW": [
          126
        ]
      },
      {
        "'THINARROW": [
          -1,
          126
        ]
      },
      {
        "'RPAREN": [
          127
        ]
      },
      {
        "'RPAREN": [
          128
        ]
      },
      {
        "'RPAREN": [
          -1,
          128
        ]
      },
      {
        "lambda-expr_A0_I1_I1*": [
          129
        ],
        "'RPAREN": [
          -1,
          130,
          132
        ],
        "'COMMA": [
          -1,
          132
        ]
      },
      {
        "'PARENNOSPACE": [
          130
        ],
        "'EQUALS": [
          131
        ]
      },
      {
        "'LBRACE": [
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
        "'REC": [
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
        "'REC": [
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
        "$": [
          -1,
          138
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
        "'REC": [
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
        "type-ann_A6_I1?": [
          63
        ],
        "type-ann_A6_I1": [
          64
        ],
        "'LT": [
          65
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
          133
        ]
      },
      {
        "'NAME": [
          134
        ]
      },
      {
        "check-block_A1_I2*": [
          135
        ],
        "'NAME": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          140
        ],
        "'YIELD": [
          -1,
          140
        ],
        "'DASH": [
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
        "'NAME": [
          136
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          137
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'LT": [
          138
        ],
        "'GT": [
          139
        ],
        "binop-expr_I1": [
          140
        ],
        "binop": [
          141
        ],
        "'PLUS": [
          142
        ],
        "'DASH": [
          143,
          142
        ],
        "'TIMES": [
          144
        ],
        "'SLASH": [
          145
        ],
        "'PERCENT": [
          146
        ],
        "'EQUALEQUAL": [
          147
        ],
        "'NEQ": [
          148
        ],
        "'LEQ": [
          149
        ],
        "'GEQ": [
          150
        ],
        "'AND": [
          151
        ],
        "'OR": [
          152
        ],
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
        "'REC": [
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
          96
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
          106
        ],
        "full-expr": [
          80
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
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
        "'REC": [
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
        "$": [
          -1,
          146
        ],
        "'NAME": [
          -1,
          146
        ],
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          146
        ],
        "'GT": [
          -1,
          146
        ],
        "'THINARROW": [
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
        "'IS": [
          -1,
          146
        ],
        "'ISNOT": [
          -1,
          146
        ],
        "'SATISFIES": [
          -1,
          146
        ],
        "'RAISES": [
          -1,
          146
        ],
        "'SWITCH": [
          -1,
          146
        ],
        "'CASE": [
          -1,
          146
        ],
        "'DEFAULT": [
          -1,
          146
        ],
        "'YIELD": [
          -1,
          146
        ],
        "'PLUS": [
          -1,
          146
        ],
        "'DASH": [
          -1,
          146
        ],
        "'TIMES": [
          -1,
          146
        ],
        "'SLASH": [
          -1,
          146
        ],
        "'PERCENT": [
          -1,
          146
        ],
        "'EQUALEQUAL": [
          -1,
          146
        ],
        "'NEQ": [
          -1,
          146
        ],
        "'LEQ": [
          -1,
          146
        ],
        "'GEQ": [
          -1,
          146
        ],
        "'AND": [
          -1,
          146
        ],
        "'OR": [
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
        "'RBRACK": [
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
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          153
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
          154
        ],
        "app-or-access_A0_I2": [
          155
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ],
        "'RPAREN": [
          -1,
          148
        ]
      },
      {
        "'NAME": [
          156
        ]
      },
      {
        "'NAME": [
          96
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          97
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          157
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'COLON": [
          158
        ]
      },
      {
        "'PARENSPACE": [
          159
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
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          150
        ],
        "'GT": [
          -1,
          150
        ],
        "'THINARROW": [
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
        "'IS": [
          -1,
          150
        ],
        "'ISNOT": [
          -1,
          150
        ],
        "'SATISFIES": [
          -1,
          150
        ],
        "'RAISES": [
          -1,
          150
        ],
        "'SWITCH": [
          -1,
          150
        ],
        "'CASE": [
          -1,
          150
        ],
        "'DEFAULT": [
          -1,
          150
        ],
        "'YIELD": [
          -1,
          150
        ],
        "'PLUS": [
          -1,
          150
        ],
        "'DASH": [
          -1,
          150
        ],
        "'TIMES": [
          -1,
          150
        ],
        "'SLASH": [
          -1,
          150
        ],
        "'PERCENT": [
          -1,
          150
        ],
        "'EQUALEQUAL": [
          -1,
          150
        ],
        "'NEQ": [
          -1,
          150
        ],
        "'LEQ": [
          -1,
          150
        ],
        "'GEQ": [
          -1,
          150
        ],
        "'AND": [
          -1,
          150
        ],
        "'OR": [
          -1,
          150
        ],
        "'BANG": [
          -1,
          150
        ],
        "'DOT": [
          -1,
          150
        ],
        "'LBRACK": [
          -1,
          150
        ],
        "'RBRACK": [
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
          76
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
          69
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
          80
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
          81
        ],
        "lambda-expr_A0_I1": [
          82
        ],
        "lambda-param": [
          83
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ],
        "'RPAREN": [
          -1,
          52
        ]
      },
      {
        "'RPAREN": [
          160
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          161
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
          162
        ]
      },
      {
        "'NAME": [
          96
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          97
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          163
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "ask-branch": [
          164
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'PARENNOSPACE": [
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
        "'REC": [
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
        "$": [
          -1,
          154
        ],
        "'IMPORT": [
          -1,
          154
        ],
        "'NAME": [
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
        "'INCLUDE": [
          -1,
          154
        ],
        "'LBRACE": [
          -1,
          154
        ],
        "'PARENSPACE": [
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
        "'DATA": [
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
        "'SWITCH": [
          -1,
          154
        ],
        "'DASH": [
          -1,
          154
        ],
        "'BANG": [
          -1,
          154
        ],
        "'LBRACK": [
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
        "'NAME": [
          168
        ]
      },
      {
        "'STRING": [
          169
        ]
      },
      {
        "type-ann_A6_I1_I2*": [
          170
        ],
        "'COMMA": [
          -1,
          156
        ],
        "'GT": [
          -1,
          156
        ]
      },
      {
        "'SEMI": [
          171
        ],
        "assign-stmt_I3?": [
          172
        ],
        "assign-stmt_I3": [
          173
        ],
        "$": [
          -1,
          158,
          160
        ],
        "'NAME": [
          -1,
          158,
          160
        ],
        "'PARENNOSPACE": [
          -1,
          158,
          160
        ],
        "'STRING": [
          -1,
          158,
          160
        ],
        "'LBRACE": [
          -1,
          158,
          160
        ],
        "'RBRACE": [
          -1,
          158,
          160
        ],
        "'SPY": [
          -1,
          158,
          160
        ],
        "'PARENSPACE": [
          -1,
          158,
          160
        ],
        "'INT": [
          -1,
          158,
          160
        ],
        "'LONG": [
          -1,
          158,
          160
        ],
        "'DOUBLE": [
          -1,
          158,
          160
        ],
        "'FLOAT": [
          -1,
          158,
          160
        ],
        "'BOOLEAN": [
          -1,
          158,
          160
        ],
        "'VOID": [
          -1,
          158,
          160
        ],
        "'DATA": [
          -1,
          158,
          160
        ],
        "'IF": [
          -1,
          158,
          160
        ],
        "'FOR": [
          -1,
          158,
          160
        ],
        "'RETURN": [
          -1,
          158,
          160
        ],
        "'VAR": [
          -1,
          158,
          160
        ],
        "'REC": [
          -1,
          158,
          160
        ],
        "'ATCHECK": [
          -1,
          158,
          160
        ],
        "'ASSERTEQUALS": [
          -1,
          158,
          160
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          158,
          160
        ],
        "'ASSERTTRUE": [
          -1,
          158,
          160
        ],
        "'ASSERTFALSE": [
          -1,
          158,
          160
        ],
        "'ASSERTSATISFIES": [
          -1,
          158,
          160
        ],
        "'ASSERTRAISES": [
          -1,
          158,
          160
        ],
        "'SWITCH": [
          -1,
          158,
          160
        ],
        "'YIELD": [
          -1,
          158,
          160
        ],
        "'DASH": [
          -1,
          158,
          160
        ],
        "'BANG": [
          -1,
          158,
          160
        ],
        "'LBRACK": [
          -1,
          158,
          160
        ],
        "'NUMBER": [
          -1,
          158,
          160
        ],
        "'TRUE": [
          -1,
          158,
          160
        ],
        "'FALSE": [
          -1,
          158,
          160
        ],
        "'NULL": [
          -1,
          158,
          160
        ],
        "'PARENAFTERBRACE": [
          -1,
          158,
          160
        ],
        "'TABLE": [
          -1,
          158,
          160
        ],
        "'ASK": [
          -1,
          158,
          160
        ],
        "'NEW": [
          -1,
          158,
          160
        ]
      },
      {
        "type-ann_A7_I1_I1*": [
          125
        ],
        "'COMMA": [
          -1,
          122
        ],
        "'THINARROW": [
          -1,
          124,
          122
        ]
      },
      {
        "'RPAREN": [
          -1,
          162
        ],
        "'COMMA": [
          -1,
          162
        ]
      },
      {
        "'COMMA": [
          174
        ],
        "lambda-expr_A1_I1_I1": [
          175
        ],
        "'RPAREN": [
          -1,
          164
        ]
      },
      {
        "'THINARROW": [
          176
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          177
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'RBRACE": [
          178
        ],
        "'COMMA": [
          179
        ],
        "record-expr_A0_I2": [
          180
        ]
      },
      {
        "'COMMA": [
          181
        ],
        "type-ann_A7_I1_I1": [
          182
        ],
        "'THINARROW": [
          -1,
          166
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          183
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
        "'REC": [
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
        "'THINARROW": [
          184
        ]
      },
      {
        "'COMMA": [
          185
        ],
        "lambda-expr_A0_I1_I1": [
          186
        ],
        "'RPAREN": [
          -1,
          170
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          187
        ],
        "fun-decl_I3?": [
          188
        ],
        "fun-decl_I3": [
          189
        ],
        "param": [
          190
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
          172
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          191
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          192
        ],
        "variant-decl": [
          193
        ]
      },
      {
        "'EQUALS": [
          194
        ]
      },
      {
        "'EQUALS": [
          195
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
          196
        ],
        "data-decl": [
          197
        ],
        "check-block": [
          198
        ],
        "let-stmt": [
          199
        ],
        "var-stmt": [
          200
        ],
        "rec-stmt": [
          201
        ],
        "assign-stmt": [
          202
        ],
        "expr-stmt": [
          203
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          204
        ],
        "block-stmt": [
          205
        ],
        "if-stmt": [
          206
        ],
        "for-stmt": [
          207
        ],
        "return-stmt": [
          208
        ],
        "yield-stmt": [
          209
        ],
        "spy-stmt": [
          210
        ],
        "'SPY": [
          211
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "assert-stmt": [
          212
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
          213
        ],
        "full-expr": [
          214
        ],
        "'FOR": [
          215
        ],
        "'RETURN": [
          216
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
          217
        ],
        "'ASSERTEQUALS": [
          218
        ],
        "'ASSERTNOTEQUALS": [
          219
        ],
        "'ASSERTTRUE": [
          220
        ],
        "'ASSERTFALSE": [
          221
        ],
        "'ASSERTSATISFIES": [
          222
        ],
        "'ASSERTRAISES": [
          223
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          224
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'PARENNOSPACE": [
          225
        ]
      },
      {
        "'RPAREN": [
          226
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
        "'NAME": [
          -1,
          176
        ],
        "'STRING": [
          -1,
          176
        ],
        "'LBRACE": [
          -1,
          176
        ],
        "'PARENSPACE": [
          -1,
          176
        ],
        "'SWITCH": [
          -1,
          176
        ],
        "'DASH": [
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
        "$": [
          -1,
          178
        ],
        "'NAME": [
          -1,
          178
        ],
        "'SEMI": [
          -1,
          178
        ],
        "'PARENNOSPACE": [
          -1,
          178
        ],
        "'STRING": [
          -1,
          178
        ],
        "'RPAREN": [
          -1,
          178
        ],
        "'LBRACE": [
          -1,
          178
        ],
        "'RBRACE": [
          -1,
          178
        ],
        "'SPY": [
          -1,
          178
        ],
        "'PARENSPACE": [
          -1,
          178
        ],
        "'COMMA": [
          -1,
          178
        ],
        "'INT": [
          -1,
          178
        ],
        "'LONG": [
          -1,
          178
        ],
        "'DOUBLE": [
          -1,
          178
        ],
        "'FLOAT": [
          -1,
          178
        ],
        "'BOOLEAN": [
          -1,
          178
        ],
        "'VOID": [
          -1,
          178
        ],
        "'LT": [
          -1,
          178
        ],
        "'GT": [
          -1,
          178
        ],
        "'THINARROW": [
          -1,
          178
        ],
        "'DATA": [
          -1,
          178
        ],
        "'IF": [
          -1,
          178
        ],
        "'FOR": [
          -1,
          178
        ],
        "'RETURN": [
          -1,
          178
        ],
        "'VAR": [
          -1,
          178
        ],
        "'REC": [
          -1,
          178
        ],
        "'ATCHECK": [
          -1,
          178
        ],
        "'ASSERTEQUALS": [
          -1,
          178
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          178
        ],
        "'ASSERTTRUE": [
          -1,
          178
        ],
        "'ASSERTFALSE": [
          -1,
          178
        ],
        "'ASSERTSATISFIES": [
          -1,
          178
        ],
        "'ASSERTRAISES": [
          -1,
          178
        ],
        "'IS": [
          -1,
          178
        ],
        "'ISNOT": [
          -1,
          178
        ],
        "'SATISFIES": [
          -1,
          178
        ],
        "'RAISES": [
          -1,
          178
        ],
        "'SWITCH": [
          -1,
          178
        ],
        "'CASE": [
          -1,
          178
        ],
        "'DEFAULT": [
          -1,
          178
        ],
        "'YIELD": [
          -1,
          178
        ],
        "'PLUS": [
          -1,
          178
        ],
        "'DASH": [
          -1,
          178
        ],
        "'TIMES": [
          -1,
          178
        ],
        "'SLASH": [
          -1,
          178
        ],
        "'PERCENT": [
          -1,
          178
        ],
        "'EQUALEQUAL": [
          -1,
          178
        ],
        "'NEQ": [
          -1,
          178
        ],
        "'LEQ": [
          -1,
          178
        ],
        "'GEQ": [
          -1,
          178
        ],
        "'AND": [
          -1,
          178
        ],
        "'OR": [
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
        "'RBRACK": [
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
          96
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          97
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "unop-expr": [
          227
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
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
        "app-or-access_A0_I2_I1*": [
          228
        ],
        "'RPAREN": [
          -1,
          202,
          204
        ],
        "'COMMA": [
          -1,
          204
        ]
      },
      {
        "'RPAREN": [
          229
        ]
      },
      {
        "'RPAREN": [
          -1,
          206
        ]
      },
      {
        "$": [
          -1,
          208
        ],
        "'NAME": [
          -1,
          208
        ],
        "'SEMI": [
          -1,
          208
        ],
        "'PARENNOSPACE": [
          -1,
          208
        ],
        "'STRING": [
          -1,
          208
        ],
        "'RPAREN": [
          -1,
          208
        ],
        "'LBRACE": [
          -1,
          208
        ],
        "'RBRACE": [
          -1,
          208
        ],
        "'SPY": [
          -1,
          208
        ],
        "'PARENSPACE": [
          -1,
          208
        ],
        "'COMMA": [
          -1,
          208
        ],
        "'INT": [
          -1,
          208
        ],
        "'LONG": [
          -1,
          208
        ],
        "'DOUBLE": [
          -1,
          208
        ],
        "'FLOAT": [
          -1,
          208
        ],
        "'BOOLEAN": [
          -1,
          208
        ],
        "'VOID": [
          -1,
          208
        ],
        "'LT": [
          -1,
          208
        ],
        "'GT": [
          -1,
          208
        ],
        "'THINARROW": [
          -1,
          208
        ],
        "'DATA": [
          -1,
          208
        ],
        "'IF": [
          -1,
          208
        ],
        "'FOR": [
          -1,
          208
        ],
        "'RETURN": [
          -1,
          208
        ],
        "'VAR": [
          -1,
          208
        ],
        "'REC": [
          -1,
          208
        ],
        "'ATCHECK": [
          -1,
          208
        ],
        "'ASSERTEQUALS": [
          -1,
          208
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          208
        ],
        "'ASSERTTRUE": [
          -1,
          208
        ],
        "'ASSERTFALSE": [
          -1,
          208
        ],
        "'ASSERTSATISFIES": [
          -1,
          208
        ],
        "'ASSERTRAISES": [
          -1,
          208
        ],
        "'IS": [
          -1,
          208
        ],
        "'ISNOT": [
          -1,
          208
        ],
        "'SATISFIES": [
          -1,
          208
        ],
        "'RAISES": [
          -1,
          208
        ],
        "'SWITCH": [
          -1,
          208
        ],
        "'CASE": [
          -1,
          208
        ],
        "'DEFAULT": [
          -1,
          208
        ],
        "'YIELD": [
          -1,
          208
        ],
        "'PLUS": [
          -1,
          208
        ],
        "'DASH": [
          -1,
          208
        ],
        "'TIMES": [
          -1,
          208
        ],
        "'SLASH": [
          -1,
          208
        ],
        "'PERCENT": [
          -1,
          208
        ],
        "'EQUALEQUAL": [
          -1,
          208
        ],
        "'NEQ": [
          -1,
          208
        ],
        "'LEQ": [
          -1,
          208
        ],
        "'GEQ": [
          -1,
          208
        ],
        "'AND": [
          -1,
          208
        ],
        "'OR": [
          -1,
          208
        ],
        "'BANG": [
          -1,
          208
        ],
        "'DOT": [
          -1,
          208
        ],
        "'LBRACK": [
          -1,
          208
        ],
        "'RBRACK": [
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
        "'RBRACK": [
          230
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          231
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ],
        "construct-expr_A0_I3?": [
          232
        ],
        "construct-expr_A0_I3": [
          233
        ],
        "'RBRACK": [
          -1,
          210
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          234
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
          212
        ],
        "'NAME": [
          -1,
          212
        ],
        "'SEMI": [
          -1,
          212
        ],
        "'PARENNOSPACE": [
          -1,
          212
        ],
        "'STRING": [
          -1,
          212
        ],
        "'RPAREN": [
          -1,
          212
        ],
        "'LBRACE": [
          -1,
          212
        ],
        "'RBRACE": [
          -1,
          212
        ],
        "'SPY": [
          -1,
          212
        ],
        "'PARENSPACE": [
          -1,
          212
        ],
        "'COMMA": [
          -1,
          212
        ],
        "'INT": [
          -1,
          212
        ],
        "'LONG": [
          -1,
          212
        ],
        "'DOUBLE": [
          -1,
          212
        ],
        "'FLOAT": [
          -1,
          212
        ],
        "'BOOLEAN": [
          -1,
          212
        ],
        "'VOID": [
          -1,
          212
        ],
        "'LT": [
          -1,
          212
        ],
        "'GT": [
          -1,
          212
        ],
        "'THINARROW": [
          -1,
          212
        ],
        "'DATA": [
          -1,
          212
        ],
        "'IF": [
          -1,
          212
        ],
        "'FOR": [
          -1,
          212
        ],
        "'RETURN": [
          -1,
          212
        ],
        "'VAR": [
          -1,
          212
        ],
        "'REC": [
          -1,
          212
        ],
        "'ATCHECK": [
          -1,
          212
        ],
        "'ASSERTEQUALS": [
          -1,
          212
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          212
        ],
        "'ASSERTTRUE": [
          -1,
          212
        ],
        "'ASSERTFALSE": [
          -1,
          212
        ],
        "'ASSERTSATISFIES": [
          -1,
          212
        ],
        "'ASSERTRAISES": [
          -1,
          212
        ],
        "'IS": [
          -1,
          212
        ],
        "'ISNOT": [
          -1,
          212
        ],
        "'SATISFIES": [
          -1,
          212
        ],
        "'RAISES": [
          -1,
          212
        ],
        "'SWITCH": [
          -1,
          212
        ],
        "'CASE": [
          -1,
          212
        ],
        "'DEFAULT": [
          -1,
          212
        ],
        "'YIELD": [
          -1,
          212
        ],
        "'PLUS": [
          -1,
          212
        ],
        "'DASH": [
          -1,
          212
        ],
        "'TIMES": [
          -1,
          212
        ],
        "'SLASH": [
          -1,
          212
        ],
        "'PERCENT": [
          -1,
          212
        ],
        "'EQUALEQUAL": [
          -1,
          212
        ],
        "'NEQ": [
          -1,
          212
        ],
        "'LEQ": [
          -1,
          212
        ],
        "'GEQ": [
          -1,
          212
        ],
        "'AND": [
          -1,
          212
        ],
        "'OR": [
          -1,
          212
        ],
        "'BANG": [
          -1,
          212
        ],
        "'DOT": [
          -1,
          212
        ],
        "'LBRACK": [
          -1,
          212
        ],
        "'RBRACK": [
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
          235
        ]
      },
      {
        "table-expr_I3*": [
          236
        ],
        "'SEMI": [
          -1,
          214
        ],
        "'COMMA": [
          -1,
          214
        ]
      },
      {
        "'THINARROW": [
          237
        ]
      },
      {
        "'SEMI": [
          238
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          239
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ],
        "new-expr_I3?": [
          240
        ],
        "new-expr_I3": [
          241
        ],
        "'RPAREN": [
          -1,
          216
        ]
      },
      {
        "'SEMI": [
          242
        ]
      },
      {
        "'RPAREN": [
          243
        ]
      },
      {
        "'SEMI": [
          244
        ]
      },
      {
        "'RPAREN": [
          245
        ]
      },
      {
        "'COMMA": [
          246
        ],
        "'GT": [
          247
        ],
        "type-ann_A6_I1_I2": [
          248
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
        "'REC": [
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
        "'REC": [
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
        "$": [
          -1,
          222
        ],
        "'NAME": [
          -1,
          222
        ],
        "'PARENNOSPACE": [
          -1,
          222
        ],
        "'STRING": [
          -1,
          222
        ],
        "'LBRACE": [
          -1,
          222
        ],
        "'RBRACE": [
          -1,
          222
        ],
        "'SPY": [
          -1,
          222
        ],
        "'PARENSPACE": [
          -1,
          222
        ],
        "'INT": [
          -1,
          222
        ],
        "'LONG": [
          -1,
          222
        ],
        "'DOUBLE": [
          -1,
          222
        ],
        "'FLOAT": [
          -1,
          222
        ],
        "'BOOLEAN": [
          -1,
          222
        ],
        "'VOID": [
          -1,
          222
        ],
        "'DATA": [
          -1,
          222
        ],
        "'IF": [
          -1,
          222
        ],
        "'FOR": [
          -1,
          222
        ],
        "'RETURN": [
          -1,
          222
        ],
        "'VAR": [
          -1,
          222
        ],
        "'REC": [
          -1,
          222
        ],
        "'ATCHECK": [
          -1,
          222
        ],
        "'ASSERTEQUALS": [
          -1,
          222
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          222
        ],
        "'ASSERTTRUE": [
          -1,
          222
        ],
        "'ASSERTFALSE": [
          -1,
          222
        ],
        "'ASSERTSATISFIES": [
          -1,
          222
        ],
        "'ASSERTRAISES": [
          -1,
          222
        ],
        "'SWITCH": [
          -1,
          222
        ],
        "'YIELD": [
          -1,
          222
        ],
        "'DASH": [
          -1,
          222
        ],
        "'BANG": [
          -1,
          222
        ],
        "'LBRACK": [
          -1,
          222
        ],
        "'NUMBER": [
          -1,
          222
        ],
        "'TRUE": [
          -1,
          222
        ],
        "'FALSE": [
          -1,
          222
        ],
        "'NULL": [
          -1,
          222
        ],
        "'PARENAFTERBRACE": [
          -1,
          222
        ],
        "'TABLE": [
          -1,
          222
        ],
        "'ASK": [
          -1,
          222
        ],
        "'NEW": [
          -1,
          222
        ]
      },
      {
        "'NAME": [
          67
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          69
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
          249
        ]
      },
      {
        "'RPAREN": [
          -1,
          224
        ],
        "'COMMA": [
          -1,
          224
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          250
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'RBRACE": [
          -1,
          226
        ],
        "'COMMA": [
          -1,
          226
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
          73
        ],
        "record-field": [
          251
        ]
      },
      {
        "'RBRACE": [
          -1,
          230
        ],
        "'COMMA": [
          -1,
          230
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          252
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
          232
        ],
        "'THINARROW": [
          -1,
          232
        ]
      },
      {
        "'RPAREN": [
          253
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          254
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          67
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          69
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
          255
        ]
      },
      {
        "'RPAREN": [
          -1,
          234
        ],
        "'COMMA": [
          -1,
          234
        ]
      },
      {
        "'NAME": [
          256
        ]
      },
      {
        "'RPAREN": [
          257
        ]
      },
      {
        "'RPAREN": [
          -1,
          236
        ]
      },
      {
        "fun-decl_I3_I1*": [
          258
        ],
        "'RPAREN": [
          -1,
          238,
          240
        ],
        "'COMMA": [
          -1,
          240
        ]
      },
      {
        "'SEMI": [
          259
        ],
        "let-stmt_I4?": [
          260
        ],
        "let-stmt_I4": [
          261
        ],
        "$": [
          -1,
          242,
          244
        ],
        "'NAME": [
          -1,
          242,
          244
        ],
        "'PARENNOSPACE": [
          -1,
          242,
          244
        ],
        "'STRING": [
          -1,
          242,
          244
        ],
        "'LBRACE": [
          -1,
          242,
          244
        ],
        "'RBRACE": [
          -1,
          242,
          244
        ],
        "'SPY": [
          -1,
          242,
          244
        ],
        "'PARENSPACE": [
          -1,
          242,
          244
        ],
        "'INT": [
          -1,
          242,
          244
        ],
        "'LONG": [
          -1,
          242,
          244
        ],
        "'DOUBLE": [
          -1,
          242,
          244
        ],
        "'FLOAT": [
          -1,
          242,
          244
        ],
        "'BOOLEAN": [
          -1,
          242,
          244
        ],
        "'VOID": [
          -1,
          242,
          244
        ],
        "'DATA": [
          -1,
          242,
          244
        ],
        "'IF": [
          -1,
          242,
          244
        ],
        "'FOR": [
          -1,
          242,
          244
        ],
        "'RETURN": [
          -1,
          242,
          244
        ],
        "'VAR": [
          -1,
          242,
          244
        ],
        "'REC": [
          -1,
          242,
          244
        ],
        "'ATCHECK": [
          -1,
          242,
          244
        ],
        "'ASSERTEQUALS": [
          -1,
          242,
          244
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          242,
          244
        ],
        "'ASSERTTRUE": [
          -1,
          242,
          244
        ],
        "'ASSERTFALSE": [
          -1,
          242,
          244
        ],
        "'ASSERTSATISFIES": [
          -1,
          242,
          244
        ],
        "'ASSERTRAISES": [
          -1,
          242,
          244
        ],
        "'SWITCH": [
          -1,
          242,
          244
        ],
        "'YIELD": [
          -1,
          242,
          244
        ],
        "'DASH": [
          -1,
          242,
          244
        ],
        "'BANG": [
          -1,
          242,
          244
        ],
        "'LBRACK": [
          -1,
          242,
          244
        ],
        "'NUMBER": [
          -1,
          242,
          244
        ],
        "'TRUE": [
          -1,
          242,
          244
        ],
        "'FALSE": [
          -1,
          242,
          244
        ],
        "'NULL": [
          -1,
          242,
          244
        ],
        "'PARENAFTERBRACE": [
          -1,
          242,
          244
        ],
        "'TABLE": [
          -1,
          242,
          244
        ],
        "'ASK": [
          -1,
          242,
          244
        ],
        "'NEW": [
          -1,
          242,
          244
        ]
      },
      {
        "'PARENNOSPACE": [
          262
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
        "data-decl_I4*": [
          263
        ],
        "'SEMI": [
          -1,
          248
        ],
        "'RBRACE": [
          -1,
          248
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          264
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          265
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
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
        "'REC": [
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
        "'REC": [
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
        "'REC": [
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
        "'REC": [
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
        "'REC": [
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
        "'REC": [
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
        "'REC": [
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
        "'REC": [
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
        "$": [
          -1,
          266
        ],
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
        "'PARENSPACE": [
          266
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
        "'PARENSPACE": [
          267
        ]
      },
      {
        "'SEMI": [
          86
        ],
        "expr-stmt_I1?": [
          87
        ],
        "expr-stmt_I1": [
          88
        ],
        "'IS": [
          268
        ],
        "'ISNOT": [
          269
        ],
        "'SATISFIES": [
          270
        ],
        "'RAISES": [
          271
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
          272
        ]
      },
      {
        "'NAME": [
          96
        ],
        "'SEMI": [
          273
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
          106
        ],
        "full-expr": [
          274
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
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
        "'PARENNOSPACE": [
          275
        ]
      },
      {
        "'PARENNOSPACE": [
          276
        ]
      },
      {
        "'PARENNOSPACE": [
          277
        ]
      },
      {
        "'PARENNOSPACE": [
          278
        ]
      },
      {
        "'PARENNOSPACE": [
          279
        ]
      },
      {
        "'PARENNOSPACE": [
          280
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          281
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'RPAREN": [
          282
        ]
      },
      {
        "'LBRACE": [
          283
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
        "'COMMA": [
          284
        ],
        "app-or-access_A0_I2_I1": [
          285
        ],
        "'RPAREN": [
          -1,
          286
        ]
      },
      {
        "$": [
          -1,
          288
        ],
        "'NAME": [
          -1,
          288
        ],
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          288
        ],
        "'GT": [
          -1,
          288
        ],
        "'THINARROW": [
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
        "'IS": [
          -1,
          288
        ],
        "'ISNOT": [
          -1,
          288
        ],
        "'SATISFIES": [
          -1,
          288
        ],
        "'RAISES": [
          -1,
          288
        ],
        "'SWITCH": [
          -1,
          288
        ],
        "'CASE": [
          -1,
          288
        ],
        "'DEFAULT": [
          -1,
          288
        ],
        "'YIELD": [
          -1,
          288
        ],
        "'PLUS": [
          -1,
          288
        ],
        "'DASH": [
          -1,
          288
        ],
        "'TIMES": [
          -1,
          288
        ],
        "'SLASH": [
          -1,
          288
        ],
        "'PERCENT": [
          -1,
          288
        ],
        "'EQUALEQUAL": [
          -1,
          288
        ],
        "'NEQ": [
          -1,
          288
        ],
        "'LEQ": [
          -1,
          288
        ],
        "'GEQ": [
          -1,
          288
        ],
        "'AND": [
          -1,
          288
        ],
        "'OR": [
          -1,
          288
        ],
        "'BANG": [
          -1,
          288
        ],
        "'DOT": [
          -1,
          288
        ],
        "'LBRACK": [
          -1,
          288
        ],
        "'RBRACK": [
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
        "$": [
          -1,
          290
        ],
        "'NAME": [
          -1,
          290
        ],
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          290
        ],
        "'GT": [
          -1,
          290
        ],
        "'THINARROW": [
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
        "'IS": [
          -1,
          290
        ],
        "'ISNOT": [
          -1,
          290
        ],
        "'SATISFIES": [
          -1,
          290
        ],
        "'RAISES": [
          -1,
          290
        ],
        "'SWITCH": [
          -1,
          290
        ],
        "'CASE": [
          -1,
          290
        ],
        "'DEFAULT": [
          -1,
          290
        ],
        "'YIELD": [
          -1,
          290
        ],
        "'PLUS": [
          -1,
          290
        ],
        "'DASH": [
          -1,
          290
        ],
        "'TIMES": [
          -1,
          290
        ],
        "'SLASH": [
          -1,
          290
        ],
        "'PERCENT": [
          -1,
          290
        ],
        "'EQUALEQUAL": [
          -1,
          290
        ],
        "'NEQ": [
          -1,
          290
        ],
        "'LEQ": [
          -1,
          290
        ],
        "'GEQ": [
          -1,
          290
        ],
        "'AND": [
          -1,
          290
        ],
        "'OR": [
          -1,
          290
        ],
        "'BANG": [
          -1,
          290
        ],
        "'DOT": [
          -1,
          290
        ],
        "'LBRACK": [
          -1,
          290
        ],
        "'RBRACK": [
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
        "construct-expr_A0_I3_I1*": [
          286
        ],
        "'COMMA": [
          -1,
          292
        ],
        "'RBRACK": [
          -1,
          294,
          292
        ]
      },
      {
        "'RBRACK": [
          287
        ]
      },
      {
        "'RBRACK": [
          -1,
          296
        ]
      },
      {
        "'NAME": [
          288
        ]
      },
      {
        "'SEMI": [
          -1,
          298
        ],
        "'COMMA": [
          -1,
          298
        ]
      },
      {
        "'SEMI": [
          289
        ],
        "'COMMA": [
          290
        ],
        "table-expr_I3": [
          291
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          292
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "ask-expr_A0_I4*": [
          293
        ],
        "ask-expr_A1_I4*": [
          294
        ],
        "'NAME": [
          -1,
          300,
          302
        ],
        "'STRING": [
          -1,
          300,
          302
        ],
        "'LBRACE": [
          -1,
          300,
          302
        ],
        "'RBRACE": [
          -1,
          300
        ],
        "'PARENSPACE": [
          -1,
          300,
          302
        ],
        "'SWITCH": [
          -1,
          300,
          302
        ],
        "'DASH": [
          -1,
          300,
          302
        ],
        "'BANG": [
          -1,
          300,
          302
        ],
        "'LBRACK": [
          -1,
          300,
          302
        ],
        "'NUMBER": [
          -1,
          300,
          302
        ],
        "'TRUE": [
          -1,
          300,
          302
        ],
        "'FALSE": [
          -1,
          300,
          302
        ],
        "'NULL": [
          -1,
          300,
          302
        ],
        "'PARENAFTERBRACE": [
          -1,
          300,
          302
        ],
        "'TABLE": [
          -1,
          300,
          302
        ],
        "'ASK": [
          -1,
          300,
          302
        ],
        "'OTHERWISE": [
          -1,
          302
        ],
        "'NEW": [
          -1,
          300,
          302
        ]
      },
      {
        "new-expr_I3_I1*": [
          295
        ],
        "'RPAREN": [
          -1,
          304,
          306
        ],
        "'COMMA": [
          -1,
          306
        ]
      },
      {
        "'RPAREN": [
          296
        ]
      },
      {
        "'RPAREN": [
          -1,
          308
        ]
      },
      {
        "$": [
          -1,
          310
        ],
        "'IMPORT": [
          -1,
          310
        ],
        "'NAME": [
          -1,
          310
        ],
        "'PARENNOSPACE": [
          -1,
          310
        ],
        "'STRING": [
          -1,
          310
        ],
        "'INCLUDE": [
          -1,
          310
        ],
        "'LBRACE": [
          -1,
          310
        ],
        "'PARENSPACE": [
          -1,
          310
        ],
        "'INT": [
          -1,
          310
        ],
        "'LONG": [
          -1,
          310
        ],
        "'DOUBLE": [
          -1,
          310
        ],
        "'FLOAT": [
          -1,
          310
        ],
        "'BOOLEAN": [
          -1,
          310
        ],
        "'VOID": [
          -1,
          310
        ],
        "'DATA": [
          -1,
          310
        ],
        "'VAR": [
          -1,
          310
        ],
        "'REC": [
          -1,
          310
        ],
        "'ATCHECK": [
          -1,
          310
        ],
        "'SWITCH": [
          -1,
          310
        ],
        "'DASH": [
          -1,
          310
        ],
        "'BANG": [
          -1,
          310
        ],
        "'LBRACK": [
          -1,
          310
        ],
        "'NUMBER": [
          -1,
          310
        ],
        "'TRUE": [
          -1,
          310
        ],
        "'FALSE": [
          -1,
          310
        ],
        "'NULL": [
          -1,
          310
        ],
        "'PARENAFTERBRACE": [
          -1,
          310
        ],
        "'TABLE": [
          -1,
          310
        ],
        "'ASK": [
          -1,
          310
        ],
        "'NEW": [
          -1,
          310
        ]
      },
      {
        "'SEMI": [
          297
        ],
        "'AS": [
          298
        ]
      },
      {
        "$": [
          -1,
          312
        ],
        "'IMPORT": [
          -1,
          312
        ],
        "'NAME": [
          -1,
          312
        ],
        "'PARENNOSPACE": [
          -1,
          312
        ],
        "'STRING": [
          -1,
          312
        ],
        "'INCLUDE": [
          -1,
          312
        ],
        "'LBRACE": [
          -1,
          312
        ],
        "'PARENSPACE": [
          -1,
          312
        ],
        "'INT": [
          -1,
          312
        ],
        "'LONG": [
          -1,
          312
        ],
        "'DOUBLE": [
          -1,
          312
        ],
        "'FLOAT": [
          -1,
          312
        ],
        "'BOOLEAN": [
          -1,
          312
        ],
        "'VOID": [
          -1,
          312
        ],
        "'DATA": [
          -1,
          312
        ],
        "'VAR": [
          -1,
          312
        ],
        "'REC": [
          -1,
          312
        ],
        "'ATCHECK": [
          -1,
          312
        ],
        "'SWITCH": [
          -1,
          312
        ],
        "'DASH": [
          -1,
          312
        ],
        "'BANG": [
          -1,
          312
        ],
        "'LBRACK": [
          -1,
          312
        ],
        "'NUMBER": [
          -1,
          312
        ],
        "'TRUE": [
          -1,
          312
        ],
        "'FALSE": [
          -1,
          312
        ],
        "'NULL": [
          -1,
          312
        ],
        "'PARENAFTERBRACE": [
          -1,
          312
        ],
        "'TABLE": [
          -1,
          312
        ],
        "'ASK": [
          -1,
          312
        ],
        "'NEW": [
          -1,
          312
        ]
      },
      {
        "'SEMI": [
          299
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          300
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
          314
        ],
        "'RPAREN": [
          -1,
          314
        ],
        "'COMMA": [
          -1,
          314
        ],
        "'GT": [
          -1,
          314
        ],
        "'THINARROW": [
          -1,
          314
        ]
      },
      {
        "'COMMA": [
          -1,
          316
        ],
        "'GT": [
          -1,
          316
        ]
      },
      {
        "'RPAREN": [
          -1,
          318
        ],
        "'COMMA": [
          -1,
          318
        ]
      },
      {
        "$": [
          -1,
          320
        ],
        "'NAME": [
          -1,
          320
        ],
        "'SEMI": [
          -1,
          320
        ],
        "'PARENNOSPACE": [
          -1,
          320
        ],
        "'STRING": [
          -1,
          320
        ],
        "'RPAREN": [
          -1,
          320
        ],
        "'LBRACE": [
          -1,
          320
        ],
        "'RBRACE": [
          -1,
          320
        ],
        "'SPY": [
          -1,
          320
        ],
        "'PARENSPACE": [
          -1,
          320
        ],
        "'COMMA": [
          -1,
          320
        ],
        "'INT": [
          -1,
          320
        ],
        "'LONG": [
          -1,
          320
        ],
        "'DOUBLE": [
          -1,
          320
        ],
        "'FLOAT": [
          -1,
          320
        ],
        "'BOOLEAN": [
          -1,
          320
        ],
        "'VOID": [
          -1,
          320
        ],
        "'DATA": [
          -1,
          320
        ],
        "'IF": [
          -1,
          320
        ],
        "'FOR": [
          -1,
          320
        ],
        "'RETURN": [
          -1,
          320
        ],
        "'VAR": [
          -1,
          320
        ],
        "'REC": [
          -1,
          320
        ],
        "'ATCHECK": [
          -1,
          320
        ],
        "'ASSERTEQUALS": [
          -1,
          320
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          320
        ],
        "'ASSERTTRUE": [
          -1,
          320
        ],
        "'ASSERTFALSE": [
          -1,
          320
        ],
        "'ASSERTSATISFIES": [
          -1,
          320
        ],
        "'ASSERTRAISES": [
          -1,
          320
        ],
        "'IS": [
          -1,
          320
        ],
        "'ISNOT": [
          -1,
          320
        ],
        "'SATISFIES": [
          -1,
          320
        ],
        "'RAISES": [
          -1,
          320
        ],
        "'SWITCH": [
          -1,
          320
        ],
        "'CASE": [
          -1,
          320
        ],
        "'DEFAULT": [
          -1,
          320
        ],
        "'YIELD": [
          -1,
          320
        ],
        "'DASH": [
          -1,
          320
        ],
        "'BANG": [
          -1,
          320
        ],
        "'LBRACK": [
          -1,
          320
        ],
        "'RBRACK": [
          -1,
          320
        ],
        "'NUMBER": [
          -1,
          320
        ],
        "'TRUE": [
          -1,
          320
        ],
        "'FALSE": [
          -1,
          320
        ],
        "'NULL": [
          -1,
          320
        ],
        "'PARENAFTERBRACE": [
          -1,
          320
        ],
        "'TABLE": [
          -1,
          320
        ],
        "'ASK": [
          -1,
          320
        ],
        "'NEW": [
          -1,
          320
        ]
      },
      {
        "'RBRACE": [
          -1,
          322
        ],
        "'COMMA": [
          -1,
          322
        ]
      },
      {
        "'COMMA": [
          -1,
          324
        ],
        "'THINARROW": [
          -1,
          324
        ]
      },
      {
        "'NAME": [
          -1,
          326
        ],
        "'RPAREN": [
          -1,
          326
        ],
        "'COMMA": [
          -1,
          326
        ],
        "'GT": [
          -1,
          326
        ],
        "'THINARROW": [
          -1,
          326
        ]
      },
      {
        "$": [
          -1,
          328
        ],
        "'NAME": [
          -1,
          328
        ],
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'ASSERTEQUALS": [
          -1,
          328
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          328
        ],
        "'ASSERTTRUE": [
          -1,
          328
        ],
        "'ASSERTFALSE": [
          -1,
          328
        ],
        "'ASSERTSATISFIES": [
          -1,
          328
        ],
        "'ASSERTRAISES": [
          -1,
          328
        ],
        "'IS": [
          -1,
          328
        ],
        "'ISNOT": [
          -1,
          328
        ],
        "'SATISFIES": [
          -1,
          328
        ],
        "'RAISES": [
          -1,
          328
        ],
        "'SWITCH": [
          -1,
          328
        ],
        "'CASE": [
          -1,
          328
        ],
        "'DEFAULT": [
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
        "'RBRACK": [
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
        "'RPAREN": [
          -1,
          330
        ],
        "'COMMA": [
          -1,
          330
        ]
      },
      {
        "'RPAREN": [
          -1,
          332
        ],
        "'COMMA": [
          -1,
          332
        ]
      },
      {
        "block": [
          301
        ],
        "'LBRACE": [
          302
        ]
      },
      {
        "'COMMA": [
          303
        ],
        "fun-decl_I3_I1": [
          304
        ],
        "'RPAREN": [
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
        "'REC": [
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
        "$": [
          -1,
          338
        ],
        "'NAME": [
          -1,
          338
        ],
        "'PARENNOSPACE": [
          -1,
          338
        ],
        "'STRING": [
          -1,
          338
        ],
        "'LBRACE": [
          -1,
          338
        ],
        "'RBRACE": [
          -1,
          338
        ],
        "'SPY": [
          -1,
          338
        ],
        "'PARENSPACE": [
          -1,
          338
        ],
        "'INT": [
          -1,
          338
        ],
        "'LONG": [
          -1,
          338
        ],
        "'DOUBLE": [
          -1,
          338
        ],
        "'FLOAT": [
          -1,
          338
        ],
        "'BOOLEAN": [
          -1,
          338
        ],
        "'VOID": [
          -1,
          338
        ],
        "'DATA": [
          -1,
          338
        ],
        "'IF": [
          -1,
          338
        ],
        "'FOR": [
          -1,
          338
        ],
        "'RETURN": [
          -1,
          338
        ],
        "'VAR": [
          -1,
          338
        ],
        "'REC": [
          -1,
          338
        ],
        "'ATCHECK": [
          -1,
          338
        ],
        "'ASSERTEQUALS": [
          -1,
          338
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          338
        ],
        "'ASSERTTRUE": [
          -1,
          338
        ],
        "'ASSERTFALSE": [
          -1,
          338
        ],
        "'ASSERTSATISFIES": [
          -1,
          338
        ],
        "'ASSERTRAISES": [
          -1,
          338
        ],
        "'SWITCH": [
          -1,
          338
        ],
        "'YIELD": [
          -1,
          338
        ],
        "'DASH": [
          -1,
          338
        ],
        "'BANG": [
          -1,
          338
        ],
        "'LBRACK": [
          -1,
          338
        ],
        "'NUMBER": [
          -1,
          338
        ],
        "'TRUE": [
          -1,
          338
        ],
        "'FALSE": [
          -1,
          338
        ],
        "'NULL": [
          -1,
          338
        ],
        "'PARENAFTERBRACE": [
          -1,
          338
        ],
        "'TABLE": [
          -1,
          338
        ],
        "'ASK": [
          -1,
          338
        ],
        "'NEW": [
          -1,
          338
        ]
      },
      {
        "$": [
          -1,
          340
        ],
        "'NAME": [
          -1,
          340
        ],
        "'PARENNOSPACE": [
          -1,
          340
        ],
        "'STRING": [
          -1,
          340
        ],
        "'LBRACE": [
          -1,
          340
        ],
        "'RBRACE": [
          -1,
          340
        ],
        "'SPY": [
          -1,
          340
        ],
        "'PARENSPACE": [
          -1,
          340
        ],
        "'INT": [
          -1,
          340
        ],
        "'LONG": [
          -1,
          340
        ],
        "'DOUBLE": [
          -1,
          340
        ],
        "'FLOAT": [
          -1,
          340
        ],
        "'BOOLEAN": [
          -1,
          340
        ],
        "'VOID": [
          -1,
          340
        ],
        "'DATA": [
          -1,
          340
        ],
        "'IF": [
          -1,
          340
        ],
        "'FOR": [
          -1,
          340
        ],
        "'RETURN": [
          -1,
          340
        ],
        "'VAR": [
          -1,
          340
        ],
        "'REC": [
          -1,
          340
        ],
        "'ATCHECK": [
          -1,
          340
        ],
        "'ASSERTEQUALS": [
          -1,
          340
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          340
        ],
        "'ASSERTTRUE": [
          -1,
          340
        ],
        "'ASSERTFALSE": [
          -1,
          340
        ],
        "'ASSERTSATISFIES": [
          -1,
          340
        ],
        "'ASSERTRAISES": [
          -1,
          340
        ],
        "'SWITCH": [
          -1,
          340
        ],
        "'YIELD": [
          -1,
          340
        ],
        "'DASH": [
          -1,
          340
        ],
        "'BANG": [
          -1,
          340
        ],
        "'LBRACK": [
          -1,
          340
        ],
        "'NUMBER": [
          -1,
          340
        ],
        "'TRUE": [
          -1,
          340
        ],
        "'FALSE": [
          -1,
          340
        ],
        "'NULL": [
          -1,
          340
        ],
        "'PARENAFTERBRACE": [
          -1,
          340
        ],
        "'TABLE": [
          -1,
          340
        ],
        "'ASK": [
          -1,
          340
        ],
        "'NEW": [
          -1,
          340
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          305
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
          306
        ],
        "variant-decl_A0_I2": [
          307
        ],
        "variant-member": [
          308
        ],
        "'RPAREN": [
          -1,
          342
        ]
      },
      {
        "'SEMI": [
          309
        ],
        "data-decl_I5?": [
          310
        ],
        "data-decl_I4": [
          311
        ],
        "data-decl_I5": [
          312
        ],
        "'RBRACE": [
          -1,
          344
        ]
      },
      {
        "'SEMI": [
          313
        ],
        "var-stmt_I5?": [
          314
        ],
        "var-stmt_I5": [
          315
        ],
        "$": [
          -1,
          346,
          348
        ],
        "'NAME": [
          -1,
          346,
          348
        ],
        "'PARENNOSPACE": [
          -1,
          346,
          348
        ],
        "'STRING": [
          -1,
          346,
          348
        ],
        "'LBRACE": [
          -1,
          346,
          348
        ],
        "'RBRACE": [
          -1,
          346,
          348
        ],
        "'SPY": [
          -1,
          346,
          348
        ],
        "'PARENSPACE": [
          -1,
          346,
          348
        ],
        "'INT": [
          -1,
          346,
          348
        ],
        "'LONG": [
          -1,
          346,
          348
        ],
        "'DOUBLE": [
          -1,
          346,
          348
        ],
        "'FLOAT": [
          -1,
          346,
          348
        ],
        "'BOOLEAN": [
          -1,
          346,
          348
        ],
        "'VOID": [
          -1,
          346,
          348
        ],
        "'DATA": [
          -1,
          346,
          348
        ],
        "'IF": [
          -1,
          346,
          348
        ],
        "'FOR": [
          -1,
          346,
          348
        ],
        "'RETURN": [
          -1,
          346,
          348
        ],
        "'VAR": [
          -1,
          346,
          348
        ],
        "'REC": [
          -1,
          346,
          348
        ],
        "'ATCHECK": [
          -1,
          346,
          348
        ],
        "'ASSERTEQUALS": [
          -1,
          346,
          348
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          346,
          348
        ],
        "'ASSERTTRUE": [
          -1,
          346,
          348
        ],
        "'ASSERTFALSE": [
          -1,
          346,
          348
        ],
        "'ASSERTSATISFIES": [
          -1,
          346,
          348
        ],
        "'ASSERTRAISES": [
          -1,
          346,
          348
        ],
        "'SWITCH": [
          -1,
          346,
          348
        ],
        "'YIELD": [
          -1,
          346,
          348
        ],
        "'DASH": [
          -1,
          346,
          348
        ],
        "'BANG": [
          -1,
          346,
          348
        ],
        "'LBRACK": [
          -1,
          346,
          348
        ],
        "'NUMBER": [
          -1,
          346,
          348
        ],
        "'TRUE": [
          -1,
          346,
          348
        ],
        "'FALSE": [
          -1,
          346,
          348
        ],
        "'NULL": [
          -1,
          346,
          348
        ],
        "'PARENAFTERBRACE": [
          -1,
          346,
          348
        ],
        "'TABLE": [
          -1,
          346,
          348
        ],
        "'ASK": [
          -1,
          346,
          348
        ],
        "'NEW": [
          -1,
          346,
          348
        ]
      },
      {
        "'SEMI": [
          316
        ],
        "rec-stmt_I5?": [
          317
        ],
        "rec-stmt_I5": [
          318
        ],
        "$": [
          -1,
          350,
          352
        ],
        "'NAME": [
          -1,
          350,
          352
        ],
        "'PARENNOSPACE": [
          -1,
          350,
          352
        ],
        "'STRING": [
          -1,
          350,
          352
        ],
        "'LBRACE": [
          -1,
          350,
          352
        ],
        "'RBRACE": [
          -1,
          350,
          352
        ],
        "'SPY": [
          -1,
          350,
          352
        ],
        "'PARENSPACE": [
          -1,
          350,
          352
        ],
        "'INT": [
          -1,
          350,
          352
        ],
        "'LONG": [
          -1,
          350,
          352
        ],
        "'DOUBLE": [
          -1,
          350,
          352
        ],
        "'FLOAT": [
          -1,
          350,
          352
        ],
        "'BOOLEAN": [
          -1,
          350,
          352
        ],
        "'VOID": [
          -1,
          350,
          352
        ],
        "'DATA": [
          -1,
          350,
          352
        ],
        "'IF": [
          -1,
          350,
          352
        ],
        "'FOR": [
          -1,
          350,
          352
        ],
        "'RETURN": [
          -1,
          350,
          352
        ],
        "'VAR": [
          -1,
          350,
          352
        ],
        "'REC": [
          -1,
          350,
          352
        ],
        "'ATCHECK": [
          -1,
          350,
          352
        ],
        "'ASSERTEQUALS": [
          -1,
          350,
          352
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          350,
          352
        ],
        "'ASSERTTRUE": [
          -1,
          350,
          352
        ],
        "'ASSERTFALSE": [
          -1,
          350,
          352
        ],
        "'ASSERTSATISFIES": [
          -1,
          350,
          352
        ],
        "'ASSERTRAISES": [
          -1,
          350,
          352
        ],
        "'SWITCH": [
          -1,
          350,
          352
        ],
        "'YIELD": [
          -1,
          350,
          352
        ],
        "'DASH": [
          -1,
          350,
          352
        ],
        "'BANG": [
          -1,
          350,
          352
        ],
        "'LBRACK": [
          -1,
          350,
          352
        ],
        "'NUMBER": [
          -1,
          350,
          352
        ],
        "'TRUE": [
          -1,
          350,
          352
        ],
        "'FALSE": [
          -1,
          350,
          352
        ],
        "'NULL": [
          -1,
          350,
          352
        ],
        "'PARENAFTERBRACE": [
          -1,
          350,
          352
        ],
        "'TABLE": [
          -1,
          350,
          352
        ],
        "'ASK": [
          -1,
          350,
          352
        ],
        "'NEW": [
          -1,
          350,
          352
        ]
      },
      {
        "'NAME": [
          319
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          320
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          321
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          322
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          323
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          324
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
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
        ]
      },
      {
        "'NAME": [
          -1,
          354
        ],
        "'PARENNOSPACE": [
          -1,
          354
        ],
        "'STRING": [
          -1,
          354
        ],
        "'LBRACE": [
          -1,
          354
        ],
        "'RBRACE": [
          -1,
          354
        ],
        "'SPY": [
          -1,
          354
        ],
        "'PARENSPACE": [
          -1,
          354
        ],
        "'INT": [
          -1,
          354
        ],
        "'LONG": [
          -1,
          354
        ],
        "'DOUBLE": [
          -1,
          354
        ],
        "'FLOAT": [
          -1,
          354
        ],
        "'BOOLEAN": [
          -1,
          354
        ],
        "'VOID": [
          -1,
          354
        ],
        "'DATA": [
          -1,
          354
        ],
        "'IF": [
          -1,
          354
        ],
        "'FOR": [
          -1,
          354
        ],
        "'RETURN": [
          -1,
          354
        ],
        "'VAR": [
          -1,
          354
        ],
        "'REC": [
          -1,
          354
        ],
        "'ATCHECK": [
          -1,
          354
        ],
        "'ASSERTEQUALS": [
          -1,
          354
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          354
        ],
        "'ASSERTTRUE": [
          -1,
          354
        ],
        "'ASSERTFALSE": [
          -1,
          354
        ],
        "'ASSERTSATISFIES": [
          -1,
          354
        ],
        "'ASSERTRAISES": [
          -1,
          354
        ],
        "'SWITCH": [
          -1,
          354
        ],
        "'YIELD": [
          -1,
          354
        ],
        "'DASH": [
          -1,
          354
        ],
        "'BANG": [
          -1,
          354
        ],
        "'LBRACK": [
          -1,
          354
        ],
        "'NUMBER": [
          -1,
          354
        ],
        "'TRUE": [
          -1,
          354
        ],
        "'FALSE": [
          -1,
          354
        ],
        "'NULL": [
          -1,
          354
        ],
        "'PARENAFTERBRACE": [
          -1,
          354
        ],
        "'TABLE": [
          -1,
          354
        ],
        "'ASK": [
          -1,
          354
        ],
        "'NEW": [
          -1,
          354
        ]
      },
      {
        "'SEMI": [
          326
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          327
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          328
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          329
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          330
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          331
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          332
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'SEMI": [
          333
        ],
        "yield-stmt_I2?": [
          334
        ],
        "yield-stmt_I2": [
          335
        ],
        "'NAME": [
          -1,
          356,
          358
        ],
        "'PARENNOSPACE": [
          -1,
          356,
          358
        ],
        "'STRING": [
          -1,
          356,
          358
        ],
        "'LBRACE": [
          -1,
          356,
          358
        ],
        "'RBRACE": [
          -1,
          356,
          358
        ],
        "'SPY": [
          -1,
          356,
          358
        ],
        "'PARENSPACE": [
          -1,
          356,
          358
        ],
        "'INT": [
          -1,
          356,
          358
        ],
        "'LONG": [
          -1,
          356,
          358
        ],
        "'DOUBLE": [
          -1,
          356,
          358
        ],
        "'FLOAT": [
          -1,
          356,
          358
        ],
        "'BOOLEAN": [
          -1,
          356,
          358
        ],
        "'VOID": [
          -1,
          356,
          358
        ],
        "'DATA": [
          -1,
          356,
          358
        ],
        "'IF": [
          -1,
          356,
          358
        ],
        "'FOR": [
          -1,
          356,
          358
        ],
        "'RETURN": [
          -1,
          356,
          358
        ],
        "'VAR": [
          -1,
          356,
          358
        ],
        "'REC": [
          -1,
          356,
          358
        ],
        "'ATCHECK": [
          -1,
          356,
          358
        ],
        "'ASSERTEQUALS": [
          -1,
          356,
          358
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          356,
          358
        ],
        "'ASSERTTRUE": [
          -1,
          356,
          358
        ],
        "'ASSERTFALSE": [
          -1,
          356,
          358
        ],
        "'ASSERTSATISFIES": [
          -1,
          356,
          358
        ],
        "'ASSERTRAISES": [
          -1,
          356,
          358
        ],
        "'SWITCH": [
          -1,
          356,
          358
        ],
        "'CASE": [
          -1,
          356,
          358
        ],
        "'DEFAULT": [
          -1,
          356,
          358
        ],
        "'YIELD": [
          -1,
          356,
          358
        ],
        "'DASH": [
          -1,
          356,
          358
        ],
        "'BANG": [
          -1,
          356,
          358
        ],
        "'LBRACK": [
          -1,
          356,
          358
        ],
        "'NUMBER": [
          -1,
          356,
          358
        ],
        "'TRUE": [
          -1,
          356,
          358
        ],
        "'FALSE": [
          -1,
          356,
          358
        ],
        "'NULL": [
          -1,
          356,
          358
        ],
        "'PARENAFTERBRACE": [
          -1,
          356,
          358
        ],
        "'TABLE": [
          -1,
          356,
          358
        ],
        "'ASK": [
          -1,
          356,
          358
        ],
        "'NEW": [
          -1,
          356,
          358
        ]
      },
      {
        "'LBRACE": [
          336
        ]
      },
      {
        "switch-expr_I5*": [
          337
        ],
        "'RBRACE": [
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
        ]
      },
      {
        "'NAME": [
          96
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
          106
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
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
        "'COMMA": [
          339
        ],
        "construct-expr_A0_I3_I1": [
          340
        ],
        "'RBRACK": [
          -1,
          364
        ]
      },
      {
        "$": [
          -1,
          366
        ],
        "'NAME": [
          -1,
          366
        ],
        "'SEMI": [
          -1,
          366
        ],
        "'PARENNOSPACE": [
          -1,
          366
        ],
        "'STRING": [
          -1,
          366
        ],
        "'RPAREN": [
          -1,
          366
        ],
        "'LBRACE": [
          -1,
          366
        ],
        "'RBRACE": [
          -1,
          366
        ],
        "'SPY": [
          -1,
          366
        ],
        "'PARENSPACE": [
          -1,
          366
        ],
        "'COMMA": [
          -1,
          366
        ],
        "'INT": [
          -1,
          366
        ],
        "'LONG": [
          -1,
          366
        ],
        "'DOUBLE": [
          -1,
          366
        ],
        "'FLOAT": [
          -1,
          366
        ],
        "'BOOLEAN": [
          -1,
          366
        ],
        "'VOID": [
          -1,
          366
        ],
        "'LT": [
          -1,
          366
        ],
        "'GT": [
          -1,
          366
        ],
        "'THINARROW": [
          -1,
          366
        ],
        "'DATA": [
          -1,
          366
        ],
        "'IF": [
          -1,
          366
        ],
        "'FOR": [
          -1,
          366
        ],
        "'RETURN": [
          -1,
          366
        ],
        "'VAR": [
          -1,
          366
        ],
        "'REC": [
          -1,
          366
        ],
        "'ATCHECK": [
          -1,
          366
        ],
        "'ASSERTEQUALS": [
          -1,
          366
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          366
        ],
        "'ASSERTTRUE": [
          -1,
          366
        ],
        "'ASSERTFALSE": [
          -1,
          366
        ],
        "'ASSERTSATISFIES": [
          -1,
          366
        ],
        "'ASSERTRAISES": [
          -1,
          366
        ],
        "'IS": [
          -1,
          366
        ],
        "'ISNOT": [
          -1,
          366
        ],
        "'SATISFIES": [
          -1,
          366
        ],
        "'RAISES": [
          -1,
          366
        ],
        "'SWITCH": [
          -1,
          366
        ],
        "'CASE": [
          -1,
          366
        ],
        "'DEFAULT": [
          -1,
          366
        ],
        "'YIELD": [
          -1,
          366
        ],
        "'PLUS": [
          -1,
          366
        ],
        "'DASH": [
          -1,
          366
        ],
        "'TIMES": [
          -1,
          366
        ],
        "'SLASH": [
          -1,
          366
        ],
        "'PERCENT": [
          -1,
          366
        ],
        "'EQUALEQUAL": [
          -1,
          366
        ],
        "'NEQ": [
          -1,
          366
        ],
        "'LEQ": [
          -1,
          366
        ],
        "'GEQ": [
          -1,
          366
        ],
        "'AND": [
          -1,
          366
        ],
        "'OR": [
          -1,
          366
        ],
        "'BANG": [
          -1,
          366
        ],
        "'DOT": [
          -1,
          366
        ],
        "'LBRACK": [
          -1,
          366
        ],
        "'RBRACK": [
          -1,
          366
        ],
        "'NUMBER": [
          -1,
          366
        ],
        "'TRUE": [
          -1,
          366
        ],
        "'FALSE": [
          -1,
          366
        ],
        "'NULL": [
          -1,
          366
        ],
        "'PARENAFTERBRACE": [
          -1,
          366
        ],
        "'TABLE": [
          -1,
          366
        ],
        "'ASK": [
          -1,
          366
        ],
        "'NEW": [
          -1,
          366
        ]
      },
      {
        "'COLON": [
          341
        ]
      },
      {
        "table-expr_I5*": [
          342
        ],
        "'RBRACE": [
          -1,
          368
        ],
        "'ROW": [
          -1,
          368
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          161
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
          343
        ]
      },
      {
        "'SEMI": [
          -1,
          370
        ],
        "'COMMA": [
          -1,
          370
        ]
      },
      {
        "'SEMI": [
          -1,
          372
        ]
      },
      {
        "'NAME": [
          96
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          344
        ],
        "'PARENSPACE": [
          97
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          163
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "ask-branch": [
          345
        ],
        "ask-expr_A0_I4": [
          346
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
        ],
        "'STRING": [
          12
        ],
        "'LBRACE": [
          23
        ],
        "'PARENSPACE": [
          97
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "binop-expr": [
          163
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "ask-branch": [
          347
        ],
        "otherwise-branch": [
          348
        ],
        "ask-expr_A1_I4": [
          349
        ],
        "'OTHERWISE": [
          350
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'COMMA": [
          351
        ],
        "new-expr_I3_I1": [
          352
        ],
        "'RPAREN": [
          -1,
          374
        ]
      },
      {
        "$": [
          -1,
          376
        ],
        "'NAME": [
          -1,
          376
        ],
        "'SEMI": [
          -1,
          376
        ],
        "'PARENNOSPACE": [
          -1,
          376
        ],
        "'STRING": [
          -1,
          376
        ],
        "'RPAREN": [
          -1,
          376
        ],
        "'LBRACE": [
          -1,
          376
        ],
        "'RBRACE": [
          -1,
          376
        ],
        "'SPY": [
          -1,
          376
        ],
        "'PARENSPACE": [
          -1,
          376
        ],
        "'COMMA": [
          -1,
          376
        ],
        "'INT": [
          -1,
          376
        ],
        "'LONG": [
          -1,
          376
        ],
        "'DOUBLE": [
          -1,
          376
        ],
        "'FLOAT": [
          -1,
          376
        ],
        "'BOOLEAN": [
          -1,
          376
        ],
        "'VOID": [
          -1,
          376
        ],
        "'LT": [
          -1,
          376
        ],
        "'GT": [
          -1,
          376
        ],
        "'THINARROW": [
          -1,
          376
        ],
        "'DATA": [
          -1,
          376
        ],
        "'IF": [
          -1,
          376
        ],
        "'FOR": [
          -1,
          376
        ],
        "'RETURN": [
          -1,
          376
        ],
        "'VAR": [
          -1,
          376
        ],
        "'REC": [
          -1,
          376
        ],
        "'ATCHECK": [
          -1,
          376
        ],
        "'ASSERTEQUALS": [
          -1,
          376
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          376
        ],
        "'ASSERTTRUE": [
          -1,
          376
        ],
        "'ASSERTFALSE": [
          -1,
          376
        ],
        "'ASSERTSATISFIES": [
          -1,
          376
        ],
        "'ASSERTRAISES": [
          -1,
          376
        ],
        "'IS": [
          -1,
          376
        ],
        "'ISNOT": [
          -1,
          376
        ],
        "'SATISFIES": [
          -1,
          376
        ],
        "'RAISES": [
          -1,
          376
        ],
        "'SWITCH": [
          -1,
          376
        ],
        "'CASE": [
          -1,
          376
        ],
        "'DEFAULT": [
          -1,
          376
        ],
        "'YIELD": [
          -1,
          376
        ],
        "'PLUS": [
          -1,
          376
        ],
        "'DASH": [
          -1,
          376
        ],
        "'TIMES": [
          -1,
          376
        ],
        "'SLASH": [
          -1,
          376
        ],
        "'PERCENT": [
          -1,
          376
        ],
        "'EQUALEQUAL": [
          -1,
          376
        ],
        "'NEQ": [
          -1,
          376
        ],
        "'LEQ": [
          -1,
          376
        ],
        "'GEQ": [
          -1,
          376
        ],
        "'AND": [
          -1,
          376
        ],
        "'OR": [
          -1,
          376
        ],
        "'BANG": [
          -1,
          376
        ],
        "'DOT": [
          -1,
          376
        ],
        "'LBRACK": [
          -1,
          376
        ],
        "'RBRACK": [
          -1,
          376
        ],
        "'NUMBER": [
          -1,
          376
        ],
        "'TRUE": [
          -1,
          376
        ],
        "'FALSE": [
          -1,
          376
        ],
        "'NULL": [
          -1,
          376
        ],
        "'PARENAFTERBRACE": [
          -1,
          376
        ],
        "'TABLE": [
          -1,
          376
        ],
        "'ASK": [
          -1,
          376
        ],
        "'NEW": [
          -1,
          376
        ]
      },
      {
        "$": [
          -1,
          378
        ],
        "'IMPORT": [
          -1,
          378
        ],
        "'NAME": [
          -1,
          378
        ],
        "'PARENNOSPACE": [
          -1,
          378
        ],
        "'STRING": [
          -1,
          378
        ],
        "'INCLUDE": [
          -1,
          378
        ],
        "'LBRACE": [
          -1,
          378
        ],
        "'PARENSPACE": [
          -1,
          378
        ],
        "'INT": [
          -1,
          378
        ],
        "'LONG": [
          -1,
          378
        ],
        "'DOUBLE": [
          -1,
          378
        ],
        "'FLOAT": [
          -1,
          378
        ],
        "'BOOLEAN": [
          -1,
          378
        ],
        "'VOID": [
          -1,
          378
        ],
        "'DATA": [
          -1,
          378
        ],
        "'VAR": [
          -1,
          378
        ],
        "'REC": [
          -1,
          378
        ],
        "'ATCHECK": [
          -1,
          378
        ],
        "'SWITCH": [
          -1,
          378
        ],
        "'DASH": [
          -1,
          378
        ],
        "'BANG": [
          -1,
          378
        ],
        "'LBRACK": [
          -1,
          378
        ],
        "'NUMBER": [
          -1,
          378
        ],
        "'TRUE": [
          -1,
          378
        ],
        "'FALSE": [
          -1,
          378
        ],
        "'NULL": [
          -1,
          378
        ],
        "'PARENAFTERBRACE": [
          -1,
          378
        ],
        "'TABLE": [
          -1,
          378
        ],
        "'ASK": [
          -1,
          378
        ],
        "'NEW": [
          -1,
          378
        ]
      },
      {
        "'NAME": [
          353
        ]
      },
      {
        "$": [
          -1,
          380
        ],
        "'IMPORT": [
          -1,
          380
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
        "'INCLUDE": [
          -1,
          380
        ],
        "'LBRACE": [
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
        "'VAR": [
          -1,
          380
        ],
        "'REC": [
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
        "'COMMA": [
          -1,
          382
        ],
        "'GT": [
          -1,
          382
        ]
      },
      {
        "fun-decl_I6?": [
          354
        ],
        "fun-decl_I6": [
          355
        ],
        "where-clause": [
          356
        ],
        "'WHERE": [
          357
        ],
        "$": [
          -1,
          384,
          386
        ],
        "'NAME": [
          -1,
          384,
          386
        ],
        "'PARENNOSPACE": [
          -1,
          384,
          386
        ],
        "'STRING": [
          -1,
          384,
          386
        ],
        "'LBRACE": [
          -1,
          384,
          386
        ],
        "'RBRACE": [
          -1,
          384,
          386
        ],
        "'SPY": [
          -1,
          384,
          386
        ],
        "'PARENSPACE": [
          -1,
          384,
          386
        ],
        "'INT": [
          -1,
          384,
          386
        ],
        "'LONG": [
          -1,
          384,
          386
        ],
        "'DOUBLE": [
          -1,
          384,
          386
        ],
        "'FLOAT": [
          -1,
          384,
          386
        ],
        "'BOOLEAN": [
          -1,
          384,
          386
        ],
        "'VOID": [
          -1,
          384,
          386
        ],
        "'DATA": [
          -1,
          384,
          386
        ],
        "'IF": [
          -1,
          384,
          386
        ],
        "'FOR": [
          -1,
          384,
          386
        ],
        "'RETURN": [
          -1,
          384,
          386
        ],
        "'VAR": [
          -1,
          384,
          386
        ],
        "'REC": [
          -1,
          384,
          386
        ],
        "'ATCHECK": [
          -1,
          384,
          386
        ],
        "'ASSERTEQUALS": [
          -1,
          384,
          386
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          384,
          386
        ],
        "'ASSERTTRUE": [
          -1,
          384,
          386
        ],
        "'ASSERTFALSE": [
          -1,
          384,
          386
        ],
        "'ASSERTSATISFIES": [
          -1,
          384,
          386
        ],
        "'ASSERTRAISES": [
          -1,
          384,
          386
        ],
        "'SWITCH": [
          -1,
          384,
          386
        ],
        "'YIELD": [
          -1,
          384,
          386
        ],
        "'DASH": [
          -1,
          384,
          386
        ],
        "'BANG": [
          -1,
          384,
          386
        ],
        "'LBRACK": [
          -1,
          384,
          386
        ],
        "'NUMBER": [
          -1,
          384,
          386
        ],
        "'TRUE": [
          -1,
          384,
          386
        ],
        "'FALSE": [
          -1,
          384,
          386
        ],
        "'NULL": [
          -1,
          384,
          386
        ],
        "'PARENAFTERBRACE": [
          -1,
          384,
          386
        ],
        "'TABLE": [
          -1,
          384,
          386
        ],
        "'ASK": [
          -1,
          384,
          386
        ],
        "'NEW": [
          -1,
          384,
          386
        ]
      },
      {
        "block_I1*": [
          358
        ],
        "'NAME": [
          -1,
          388
        ],
        "'PARENNOSPACE": [
          -1,
          388
        ],
        "'STRING": [
          -1,
          388
        ],
        "'LBRACE": [
          -1,
          388
        ],
        "'RBRACE": [
          -1,
          388
        ],
        "'SPY": [
          -1,
          388
        ],
        "'PARENSPACE": [
          -1,
          388
        ],
        "'INT": [
          -1,
          388
        ],
        "'LONG": [
          -1,
          388
        ],
        "'DOUBLE": [
          -1,
          388
        ],
        "'FLOAT": [
          -1,
          388
        ],
        "'BOOLEAN": [
          -1,
          388
        ],
        "'VOID": [
          -1,
          388
        ],
        "'DATA": [
          -1,
          388
        ],
        "'IF": [
          -1,
          388
        ],
        "'FOR": [
          -1,
          388
        ],
        "'RETURN": [
          -1,
          388
        ],
        "'VAR": [
          -1,
          388
        ],
        "'REC": [
          -1,
          388
        ],
        "'ATCHECK": [
          -1,
          388
        ],
        "'SWITCH": [
          -1,
          388
        ],
        "'YIELD": [
          -1,
          388
        ],
        "'DASH": [
          -1,
          388
        ],
        "'BANG": [
          -1,
          388
        ],
        "'LBRACK": [
          -1,
          388
        ],
        "'NUMBER": [
          -1,
          388
        ],
        "'TRUE": [
          -1,
          388
        ],
        "'FALSE": [
          -1,
          388
        ],
        "'NULL": [
          -1,
          388
        ],
        "'PARENAFTERBRACE": [
          -1,
          388
        ],
        "'TABLE": [
          -1,
          388
        ],
        "'ASK": [
          -1,
          388
        ],
        "'NEW": [
          -1,
          388
        ]
      },
      {
        "'NAME": [
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          187
        ],
        "param": [
          359
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
          390
        ],
        "'COMMA": [
          -1,
          390
        ]
      },
      {
        "'NAME": [
          360
        ]
      },
      {
        "'RPAREN": [
          361
        ]
      },
      {
        "'RPAREN": [
          -1,
          392
        ]
      },
      {
        "variant-decl_A0_I2_I1*": [
          362
        ],
        "'RPAREN": [
          -1,
          394,
          396
        ],
        "'COMMA": [
          -1,
          396
        ]
      },
      {
        "'NAME": [
          192
        ],
        "variant-decl": [
          363
        ],
        "'RBRACE": [
          -1,
          398
        ]
      },
      {
        "'RBRACE": [
          364
        ]
      },
      {
        "'SEMI": [
          -1,
          400
        ],
        "'RBRACE": [
          -1,
          400
        ]
      },
      {
        "'RBRACE": [
          -1,
          402
        ]
      },
      {
        "$": [
          -1,
          404
        ],
        "'NAME": [
          -1,
          404
        ],
        "'PARENNOSPACE": [
          -1,
          404
        ],
        "'STRING": [
          -1,
          404
        ],
        "'LBRACE": [
          -1,
          404
        ],
        "'RBRACE": [
          -1,
          404
        ],
        "'SPY": [
          -1,
          404
        ],
        "'PARENSPACE": [
          -1,
          404
        ],
        "'INT": [
          -1,
          404
        ],
        "'LONG": [
          -1,
          404
        ],
        "'DOUBLE": [
          -1,
          404
        ],
        "'FLOAT": [
          -1,
          404
        ],
        "'BOOLEAN": [
          -1,
          404
        ],
        "'VOID": [
          -1,
          404
        ],
        "'DATA": [
          -1,
          404
        ],
        "'IF": [
          -1,
          404
        ],
        "'FOR": [
          -1,
          404
        ],
        "'RETURN": [
          -1,
          404
        ],
        "'VAR": [
          -1,
          404
        ],
        "'REC": [
          -1,
          404
        ],
        "'ATCHECK": [
          -1,
          404
        ],
        "'ASSERTEQUALS": [
          -1,
          404
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          404
        ],
        "'ASSERTTRUE": [
          -1,
          404
        ],
        "'ASSERTFALSE": [
          -1,
          404
        ],
        "'ASSERTSATISFIES": [
          -1,
          404
        ],
        "'ASSERTRAISES": [
          -1,
          404
        ],
        "'SWITCH": [
          -1,
          404
        ],
        "'YIELD": [
          -1,
          404
        ],
        "'DASH": [
          -1,
          404
        ],
        "'BANG": [
          -1,
          404
        ],
        "'LBRACK": [
          -1,
          404
        ],
        "'NUMBER": [
          -1,
          404
        ],
        "'TRUE": [
          -1,
          404
        ],
        "'FALSE": [
          -1,
          404
        ],
        "'NULL": [
          -1,
          404
        ],
        "'PARENAFTERBRACE": [
          -1,
          404
        ],
        "'TABLE": [
          -1,
          404
        ],
        "'ASK": [
          -1,
          404
        ],
        "'NEW": [
          -1,
          404
        ]
      },
      {
        "$": [
          -1,
          406
        ],
        "'NAME": [
          -1,
          406
        ],
        "'PARENNOSPACE": [
          -1,
          406
        ],
        "'STRING": [
          -1,
          406
        ],
        "'LBRACE": [
          -1,
          406
        ],
        "'RBRACE": [
          -1,
          406
        ],
        "'SPY": [
          -1,
          406
        ],
        "'PARENSPACE": [
          -1,
          406
        ],
        "'INT": [
          -1,
          406
        ],
        "'LONG": [
          -1,
          406
        ],
        "'DOUBLE": [
          -1,
          406
        ],
        "'FLOAT": [
          -1,
          406
        ],
        "'BOOLEAN": [
          -1,
          406
        ],
        "'VOID": [
          -1,
          406
        ],
        "'DATA": [
          -1,
          406
        ],
        "'IF": [
          -1,
          406
        ],
        "'FOR": [
          -1,
          406
        ],
        "'RETURN": [
          -1,
          406
        ],
        "'VAR": [
          -1,
          406
        ],
        "'REC": [
          -1,
          406
        ],
        "'ATCHECK": [
          -1,
          406
        ],
        "'ASSERTEQUALS": [
          -1,
          406
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          406
        ],
        "'ASSERTTRUE": [
          -1,
          406
        ],
        "'ASSERTFALSE": [
          -1,
          406
        ],
        "'ASSERTSATISFIES": [
          -1,
          406
        ],
        "'ASSERTRAISES": [
          -1,
          406
        ],
        "'SWITCH": [
          -1,
          406
        ],
        "'YIELD": [
          -1,
          406
        ],
        "'DASH": [
          -1,
          406
        ],
        "'BANG": [
          -1,
          406
        ],
        "'LBRACK": [
          -1,
          406
        ],
        "'NUMBER": [
          -1,
          406
        ],
        "'TRUE": [
          -1,
          406
        ],
        "'FALSE": [
          -1,
          406
        ],
        "'NULL": [
          -1,
          406
        ],
        "'PARENAFTERBRACE": [
          -1,
          406
        ],
        "'TABLE": [
          -1,
          406
        ],
        "'ASK": [
          -1,
          406
        ],
        "'NEW": [
          -1,
          406
        ]
      },
      {
        "$": [
          -1,
          408
        ],
        "'NAME": [
          -1,
          408
        ],
        "'PARENNOSPACE": [
          -1,
          408
        ],
        "'STRING": [
          -1,
          408
        ],
        "'LBRACE": [
          -1,
          408
        ],
        "'RBRACE": [
          -1,
          408
        ],
        "'SPY": [
          -1,
          408
        ],
        "'PARENSPACE": [
          -1,
          408
        ],
        "'INT": [
          -1,
          408
        ],
        "'LONG": [
          -1,
          408
        ],
        "'DOUBLE": [
          -1,
          408
        ],
        "'FLOAT": [
          -1,
          408
        ],
        "'BOOLEAN": [
          -1,
          408
        ],
        "'VOID": [
          -1,
          408
        ],
        "'DATA": [
          -1,
          408
        ],
        "'IF": [
          -1,
          408
        ],
        "'FOR": [
          -1,
          408
        ],
        "'RETURN": [
          -1,
          408
        ],
        "'VAR": [
          -1,
          408
        ],
        "'REC": [
          -1,
          408
        ],
        "'ATCHECK": [
          -1,
          408
        ],
        "'ASSERTEQUALS": [
          -1,
          408
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          408
        ],
        "'ASSERTTRUE": [
          -1,
          408
        ],
        "'ASSERTFALSE": [
          -1,
          408
        ],
        "'ASSERTSATISFIES": [
          -1,
          408
        ],
        "'ASSERTRAISES": [
          -1,
          408
        ],
        "'SWITCH": [
          -1,
          408
        ],
        "'YIELD": [
          -1,
          408
        ],
        "'DASH": [
          -1,
          408
        ],
        "'BANG": [
          -1,
          408
        ],
        "'LBRACK": [
          -1,
          408
        ],
        "'NUMBER": [
          -1,
          408
        ],
        "'TRUE": [
          -1,
          408
        ],
        "'FALSE": [
          -1,
          408
        ],
        "'NULL": [
          -1,
          408
        ],
        "'PARENAFTERBRACE": [
          -1,
          408
        ],
        "'TABLE": [
          -1,
          408
        ],
        "'ASK": [
          -1,
          408
        ],
        "'NEW": [
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
        "'PARENNOSPACE": [
          -1,
          410
        ],
        "'STRING": [
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
        "'SWITCH": [
          -1,
          410
        ],
        "'YIELD": [
          -1,
          410
        ],
        "'DASH": [
          -1,
          410
        ],
        "'BANG": [
          -1,
          410
        ],
        "'LBRACK": [
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
        "$": [
          -1,
          412
        ],
        "'NAME": [
          -1,
          412
        ],
        "'PARENNOSPACE": [
          -1,
          412
        ],
        "'STRING": [
          -1,
          412
        ],
        "'LBRACE": [
          -1,
          412
        ],
        "'RBRACE": [
          -1,
          412
        ],
        "'SPY": [
          -1,
          412
        ],
        "'PARENSPACE": [
          -1,
          412
        ],
        "'INT": [
          -1,
          412
        ],
        "'LONG": [
          -1,
          412
        ],
        "'DOUBLE": [
          -1,
          412
        ],
        "'FLOAT": [
          -1,
          412
        ],
        "'BOOLEAN": [
          -1,
          412
        ],
        "'VOID": [
          -1,
          412
        ],
        "'DATA": [
          -1,
          412
        ],
        "'IF": [
          -1,
          412
        ],
        "'FOR": [
          -1,
          412
        ],
        "'RETURN": [
          -1,
          412
        ],
        "'VAR": [
          -1,
          412
        ],
        "'REC": [
          -1,
          412
        ],
        "'ATCHECK": [
          -1,
          412
        ],
        "'ASSERTEQUALS": [
          -1,
          412
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          412
        ],
        "'ASSERTTRUE": [
          -1,
          412
        ],
        "'ASSERTFALSE": [
          -1,
          412
        ],
        "'ASSERTSATISFIES": [
          -1,
          412
        ],
        "'ASSERTRAISES": [
          -1,
          412
        ],
        "'SWITCH": [
          -1,
          412
        ],
        "'YIELD": [
          -1,
          412
        ],
        "'DASH": [
          -1,
          412
        ],
        "'BANG": [
          -1,
          412
        ],
        "'LBRACK": [
          -1,
          412
        ],
        "'NUMBER": [
          -1,
          412
        ],
        "'TRUE": [
          -1,
          412
        ],
        "'FALSE": [
          -1,
          412
        ],
        "'NULL": [
          -1,
          412
        ],
        "'PARENAFTERBRACE": [
          -1,
          412
        ],
        "'TABLE": [
          -1,
          412
        ],
        "'ASK": [
          -1,
          412
        ],
        "'NEW": [
          -1,
          412
        ]
      },
      {
        "$": [
          -1,
          414
        ],
        "'NAME": [
          -1,
          414
        ],
        "'PARENNOSPACE": [
          -1,
          414
        ],
        "'STRING": [
          -1,
          414
        ],
        "'LBRACE": [
          -1,
          414
        ],
        "'RBRACE": [
          -1,
          414
        ],
        "'SPY": [
          -1,
          414
        ],
        "'PARENSPACE": [
          -1,
          414
        ],
        "'INT": [
          -1,
          414
        ],
        "'LONG": [
          -1,
          414
        ],
        "'DOUBLE": [
          -1,
          414
        ],
        "'FLOAT": [
          -1,
          414
        ],
        "'BOOLEAN": [
          -1,
          414
        ],
        "'VOID": [
          -1,
          414
        ],
        "'DATA": [
          -1,
          414
        ],
        "'IF": [
          -1,
          414
        ],
        "'FOR": [
          -1,
          414
        ],
        "'RETURN": [
          -1,
          414
        ],
        "'VAR": [
          -1,
          414
        ],
        "'REC": [
          -1,
          414
        ],
        "'ATCHECK": [
          -1,
          414
        ],
        "'ASSERTEQUALS": [
          -1,
          414
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          414
        ],
        "'ASSERTTRUE": [
          -1,
          414
        ],
        "'ASSERTFALSE": [
          -1,
          414
        ],
        "'ASSERTSATISFIES": [
          -1,
          414
        ],
        "'ASSERTRAISES": [
          -1,
          414
        ],
        "'SWITCH": [
          -1,
          414
        ],
        "'YIELD": [
          -1,
          414
        ],
        "'DASH": [
          -1,
          414
        ],
        "'BANG": [
          -1,
          414
        ],
        "'LBRACK": [
          -1,
          414
        ],
        "'NUMBER": [
          -1,
          414
        ],
        "'TRUE": [
          -1,
          414
        ],
        "'FALSE": [
          -1,
          414
        ],
        "'NULL": [
          -1,
          414
        ],
        "'PARENAFTERBRACE": [
          -1,
          414
        ],
        "'TABLE": [
          -1,
          414
        ],
        "'ASK": [
          -1,
          414
        ],
        "'NEW": [
          -1,
          414
        ]
      },
      {
        "spy-stmt_I3*": [
          365
        ],
        "'RPAREN": [
          -1,
          416
        ],
        "'COMMA": [
          -1,
          416
        ]
      },
      {
        "'RPAREN": [
          366
        ]
      },
      {
        "'SEMI": [
          367
        ],
        "assert-stmt_A6_I3?": [
          368
        ],
        "assert-stmt_A6_I3": [
          369
        ],
        "'NAME": [
          -1,
          418,
          420
        ],
        "'PARENNOSPACE": [
          -1,
          418,
          420
        ],
        "'STRING": [
          -1,
          418,
          420
        ],
        "'LBRACE": [
          -1,
          418,
          420
        ],
        "'RBRACE": [
          -1,
          418,
          420
        ],
        "'SPY": [
          -1,
          418,
          420
        ],
        "'PARENSPACE": [
          -1,
          418,
          420
        ],
        "'INT": [
          -1,
          418,
          420
        ],
        "'LONG": [
          -1,
          418,
          420
        ],
        "'DOUBLE": [
          -1,
          418,
          420
        ],
        "'FLOAT": [
          -1,
          418,
          420
        ],
        "'BOOLEAN": [
          -1,
          418,
          420
        ],
        "'VOID": [
          -1,
          418,
          420
        ],
        "'DATA": [
          -1,
          418,
          420
        ],
        "'IF": [
          -1,
          418,
          420
        ],
        "'FOR": [
          -1,
          418,
          420
        ],
        "'RETURN": [
          -1,
          418,
          420
        ],
        "'VAR": [
          -1,
          418,
          420
        ],
        "'REC": [
          -1,
          418,
          420
        ],
        "'ATCHECK": [
          -1,
          418,
          420
        ],
        "'ASSERTEQUALS": [
          -1,
          418,
          420
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          418,
          420
        ],
        "'ASSERTTRUE": [
          -1,
          418,
          420
        ],
        "'ASSERTFALSE": [
          -1,
          418,
          420
        ],
        "'ASSERTSATISFIES": [
          -1,
          418,
          420
        ],
        "'ASSERTRAISES": [
          -1,
          418,
          420
        ],
        "'SWITCH": [
          -1,
          418,
          420
        ],
        "'YIELD": [
          -1,
          418,
          420
        ],
        "'DASH": [
          -1,
          418,
          420
        ],
        "'BANG": [
          -1,
          418,
          420
        ],
        "'LBRACK": [
          -1,
          418,
          420
        ],
        "'NUMBER": [
          -1,
          418,
          420
        ],
        "'TRUE": [
          -1,
          418,
          420
        ],
        "'FALSE": [
          -1,
          418,
          420
        ],
        "'NULL": [
          -1,
          418,
          420
        ],
        "'PARENAFTERBRACE": [
          -1,
          418,
          420
        ],
        "'TABLE": [
          -1,
          418,
          420
        ],
        "'ASK": [
          -1,
          418,
          420
        ],
        "'NEW": [
          -1,
          418,
          420
        ]
      },
      {
        "'SEMI": [
          370
        ],
        "assert-stmt_A7_I3?": [
          371
        ],
        "assert-stmt_A7_I3": [
          372
        ],
        "'NAME": [
          -1,
          422,
          424
        ],
        "'PARENNOSPACE": [
          -1,
          422,
          424
        ],
        "'STRING": [
          -1,
          422,
          424
        ],
        "'LBRACE": [
          -1,
          422,
          424
        ],
        "'RBRACE": [
          -1,
          422,
          424
        ],
        "'SPY": [
          -1,
          422,
          424
        ],
        "'PARENSPACE": [
          -1,
          422,
          424
        ],
        "'INT": [
          -1,
          422,
          424
        ],
        "'LONG": [
          -1,
          422,
          424
        ],
        "'DOUBLE": [
          -1,
          422,
          424
        ],
        "'FLOAT": [
          -1,
          422,
          424
        ],
        "'BOOLEAN": [
          -1,
          422,
          424
        ],
        "'VOID": [
          -1,
          422,
          424
        ],
        "'DATA": [
          -1,
          422,
          424
        ],
        "'IF": [
          -1,
          422,
          424
        ],
        "'FOR": [
          -1,
          422,
          424
        ],
        "'RETURN": [
          -1,
          422,
          424
        ],
        "'VAR": [
          -1,
          422,
          424
        ],
        "'REC": [
          -1,
          422,
          424
        ],
        "'ATCHECK": [
          -1,
          422,
          424
        ],
        "'ASSERTEQUALS": [
          -1,
          422,
          424
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          422,
          424
        ],
        "'ASSERTTRUE": [
          -1,
          422,
          424
        ],
        "'ASSERTFALSE": [
          -1,
          422,
          424
        ],
        "'ASSERTSATISFIES": [
          -1,
          422,
          424
        ],
        "'ASSERTRAISES": [
          -1,
          422,
          424
        ],
        "'SWITCH": [
          -1,
          422,
          424
        ],
        "'YIELD": [
          -1,
          422,
          424
        ],
        "'DASH": [
          -1,
          422,
          424
        ],
        "'BANG": [
          -1,
          422,
          424
        ],
        "'LBRACK": [
          -1,
          422,
          424
        ],
        "'NUMBER": [
          -1,
          422,
          424
        ],
        "'TRUE": [
          -1,
          422,
          424
        ],
        "'FALSE": [
          -1,
          422,
          424
        ],
        "'NULL": [
          -1,
          422,
          424
        ],
        "'PARENAFTERBRACE": [
          -1,
          422,
          424
        ],
        "'TABLE": [
          -1,
          422,
          424
        ],
        "'ASK": [
          -1,
          422,
          424
        ],
        "'NEW": [
          -1,
          422,
          424
        ]
      },
      {
        "'SEMI": [
          373
        ],
        "assert-stmt_A8_I3?": [
          374
        ],
        "assert-stmt_A8_I3": [
          375
        ],
        "'NAME": [
          -1,
          426,
          428
        ],
        "'PARENNOSPACE": [
          -1,
          426,
          428
        ],
        "'STRING": [
          -1,
          426,
          428
        ],
        "'LBRACE": [
          -1,
          426,
          428
        ],
        "'RBRACE": [
          -1,
          426,
          428
        ],
        "'SPY": [
          -1,
          426,
          428
        ],
        "'PARENSPACE": [
          -1,
          426,
          428
        ],
        "'INT": [
          -1,
          426,
          428
        ],
        "'LONG": [
          -1,
          426,
          428
        ],
        "'DOUBLE": [
          -1,
          426,
          428
        ],
        "'FLOAT": [
          -1,
          426,
          428
        ],
        "'BOOLEAN": [
          -1,
          426,
          428
        ],
        "'VOID": [
          -1,
          426,
          428
        ],
        "'DATA": [
          -1,
          426,
          428
        ],
        "'IF": [
          -1,
          426,
          428
        ],
        "'FOR": [
          -1,
          426,
          428
        ],
        "'RETURN": [
          -1,
          426,
          428
        ],
        "'VAR": [
          -1,
          426,
          428
        ],
        "'REC": [
          -1,
          426,
          428
        ],
        "'ATCHECK": [
          -1,
          426,
          428
        ],
        "'ASSERTEQUALS": [
          -1,
          426,
          428
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          426,
          428
        ],
        "'ASSERTTRUE": [
          -1,
          426,
          428
        ],
        "'ASSERTFALSE": [
          -1,
          426,
          428
        ],
        "'ASSERTSATISFIES": [
          -1,
          426,
          428
        ],
        "'ASSERTRAISES": [
          -1,
          426,
          428
        ],
        "'SWITCH": [
          -1,
          426,
          428
        ],
        "'YIELD": [
          -1,
          426,
          428
        ],
        "'DASH": [
          -1,
          426,
          428
        ],
        "'BANG": [
          -1,
          426,
          428
        ],
        "'LBRACK": [
          -1,
          426,
          428
        ],
        "'NUMBER": [
          -1,
          426,
          428
        ],
        "'TRUE": [
          -1,
          426,
          428
        ],
        "'FALSE": [
          -1,
          426,
          428
        ],
        "'NULL": [
          -1,
          426,
          428
        ],
        "'PARENAFTERBRACE": [
          -1,
          426,
          428
        ],
        "'TABLE": [
          -1,
          426,
          428
        ],
        "'ASK": [
          -1,
          426,
          428
        ],
        "'NEW": [
          -1,
          426,
          428
        ]
      },
      {
        "'SEMI": [
          376
        ],
        "assert-stmt_A9_I3?": [
          377
        ],
        "assert-stmt_A9_I3": [
          378
        ],
        "'NAME": [
          -1,
          430,
          432
        ],
        "'PARENNOSPACE": [
          -1,
          430,
          432
        ],
        "'STRING": [
          -1,
          430,
          432
        ],
        "'LBRACE": [
          -1,
          430,
          432
        ],
        "'RBRACE": [
          -1,
          430,
          432
        ],
        "'SPY": [
          -1,
          430,
          432
        ],
        "'PARENSPACE": [
          -1,
          430,
          432
        ],
        "'INT": [
          -1,
          430,
          432
        ],
        "'LONG": [
          -1,
          430,
          432
        ],
        "'DOUBLE": [
          -1,
          430,
          432
        ],
        "'FLOAT": [
          -1,
          430,
          432
        ],
        "'BOOLEAN": [
          -1,
          430,
          432
        ],
        "'VOID": [
          -1,
          430,
          432
        ],
        "'DATA": [
          -1,
          430,
          432
        ],
        "'IF": [
          -1,
          430,
          432
        ],
        "'FOR": [
          -1,
          430,
          432
        ],
        "'RETURN": [
          -1,
          430,
          432
        ],
        "'VAR": [
          -1,
          430,
          432
        ],
        "'REC": [
          -1,
          430,
          432
        ],
        "'ATCHECK": [
          -1,
          430,
          432
        ],
        "'ASSERTEQUALS": [
          -1,
          430,
          432
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          430,
          432
        ],
        "'ASSERTTRUE": [
          -1,
          430,
          432
        ],
        "'ASSERTFALSE": [
          -1,
          430,
          432
        ],
        "'ASSERTSATISFIES": [
          -1,
          430,
          432
        ],
        "'ASSERTRAISES": [
          -1,
          430,
          432
        ],
        "'SWITCH": [
          -1,
          430,
          432
        ],
        "'YIELD": [
          -1,
          430,
          432
        ],
        "'DASH": [
          -1,
          430,
          432
        ],
        "'BANG": [
          -1,
          430,
          432
        ],
        "'LBRACK": [
          -1,
          430,
          432
        ],
        "'NUMBER": [
          -1,
          430,
          432
        ],
        "'TRUE": [
          -1,
          430,
          432
        ],
        "'FALSE": [
          -1,
          430,
          432
        ],
        "'NULL": [
          -1,
          430,
          432
        ],
        "'PARENAFTERBRACE": [
          -1,
          430,
          432
        ],
        "'TABLE": [
          -1,
          430,
          432
        ],
        "'ASK": [
          -1,
          430,
          432
        ],
        "'NEW": [
          -1,
          430,
          432
        ]
      },
      {
        "'NAME": [
          379
        ]
      },
      {
        "'NAME": [
          -1,
          434
        ],
        "'PARENNOSPACE": [
          -1,
          434
        ],
        "'STRING": [
          -1,
          434
        ],
        "'LBRACE": [
          -1,
          434
        ],
        "'RBRACE": [
          -1,
          434
        ],
        "'SPY": [
          -1,
          434
        ],
        "'PARENSPACE": [
          -1,
          434
        ],
        "'INT": [
          -1,
          434
        ],
        "'LONG": [
          -1,
          434
        ],
        "'DOUBLE": [
          -1,
          434
        ],
        "'FLOAT": [
          -1,
          434
        ],
        "'BOOLEAN": [
          -1,
          434
        ],
        "'VOID": [
          -1,
          434
        ],
        "'DATA": [
          -1,
          434
        ],
        "'IF": [
          -1,
          434
        ],
        "'FOR": [
          -1,
          434
        ],
        "'RETURN": [
          -1,
          434
        ],
        "'VAR": [
          -1,
          434
        ],
        "'REC": [
          -1,
          434
        ],
        "'ATCHECK": [
          -1,
          434
        ],
        "'ASSERTEQUALS": [
          -1,
          434
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          434
        ],
        "'ASSERTTRUE": [
          -1,
          434
        ],
        "'ASSERTFALSE": [
          -1,
          434
        ],
        "'ASSERTSATISFIES": [
          -1,
          434
        ],
        "'ASSERTRAISES": [
          -1,
          434
        ],
        "'SWITCH": [
          -1,
          434
        ],
        "'YIELD": [
          -1,
          434
        ],
        "'DASH": [
          -1,
          434
        ],
        "'BANG": [
          -1,
          434
        ],
        "'LBRACK": [
          -1,
          434
        ],
        "'NUMBER": [
          -1,
          434
        ],
        "'TRUE": [
          -1,
          434
        ],
        "'FALSE": [
          -1,
          434
        ],
        "'NULL": [
          -1,
          434
        ],
        "'PARENAFTERBRACE": [
          -1,
          434
        ],
        "'TABLE": [
          -1,
          434
        ],
        "'ASK": [
          -1,
          434
        ],
        "'NEW": [
          -1,
          434
        ]
      },
      {
        "'COMMA": [
          380
        ]
      },
      {
        "'COMMA": [
          381
        ]
      },
      {
        "'RPAREN": [
          382
        ]
      },
      {
        "'RPAREN": [
          383
        ]
      },
      {
        "'COMMA": [
          384
        ]
      },
      {
        "'COMMA": [
          385
        ]
      },
      {
        "'NAME": [
          -1,
          436
        ],
        "'PARENNOSPACE": [
          -1,
          436
        ],
        "'STRING": [
          -1,
          436
        ],
        "'LBRACE": [
          -1,
          436
        ],
        "'RBRACE": [
          -1,
          436
        ],
        "'SPY": [
          -1,
          436
        ],
        "'PARENSPACE": [
          -1,
          436
        ],
        "'INT": [
          -1,
          436
        ],
        "'LONG": [
          -1,
          436
        ],
        "'DOUBLE": [
          -1,
          436
        ],
        "'FLOAT": [
          -1,
          436
        ],
        "'BOOLEAN": [
          -1,
          436
        ],
        "'VOID": [
          -1,
          436
        ],
        "'DATA": [
          -1,
          436
        ],
        "'IF": [
          -1,
          436
        ],
        "'FOR": [
          -1,
          436
        ],
        "'RETURN": [
          -1,
          436
        ],
        "'VAR": [
          -1,
          436
        ],
        "'REC": [
          -1,
          436
        ],
        "'ATCHECK": [
          -1,
          436
        ],
        "'ASSERTEQUALS": [
          -1,
          436
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          436
        ],
        "'ASSERTTRUE": [
          -1,
          436
        ],
        "'ASSERTFALSE": [
          -1,
          436
        ],
        "'ASSERTSATISFIES": [
          -1,
          436
        ],
        "'ASSERTRAISES": [
          -1,
          436
        ],
        "'SWITCH": [
          -1,
          436
        ],
        "'CASE": [
          -1,
          436
        ],
        "'DEFAULT": [
          -1,
          436
        ],
        "'YIELD": [
          -1,
          436
        ],
        "'DASH": [
          -1,
          436
        ],
        "'BANG": [
          -1,
          436
        ],
        "'LBRACK": [
          -1,
          436
        ],
        "'NUMBER": [
          -1,
          436
        ],
        "'TRUE": [
          -1,
          436
        ],
        "'FALSE": [
          -1,
          436
        ],
        "'NULL": [
          -1,
          436
        ],
        "'PARENAFTERBRACE": [
          -1,
          436
        ],
        "'TABLE": [
          -1,
          436
        ],
        "'ASK": [
          -1,
          436
        ],
        "'NEW": [
          -1,
          436
        ]
      },
      {
        "'NAME": [
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
        "'REC": [
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
        "'DASH": [
          -1,
          438
        ],
        "'BANG": [
          -1,
          438
        ],
        "'LBRACK": [
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
        "'NAME": [
          -1,
          440
        ],
        "'PARENNOSPACE": [
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
        "'SPY": [
          -1,
          440
        ],
        "'PARENSPACE": [
          -1,
          440
        ],
        "'INT": [
          -1,
          440
        ],
        "'LONG": [
          -1,
          440
        ],
        "'DOUBLE": [
          -1,
          440
        ],
        "'FLOAT": [
          -1,
          440
        ],
        "'BOOLEAN": [
          -1,
          440
        ],
        "'VOID": [
          -1,
          440
        ],
        "'DATA": [
          -1,
          440
        ],
        "'IF": [
          -1,
          440
        ],
        "'FOR": [
          -1,
          440
        ],
        "'RETURN": [
          -1,
          440
        ],
        "'VAR": [
          -1,
          440
        ],
        "'REC": [
          -1,
          440
        ],
        "'ATCHECK": [
          -1,
          440
        ],
        "'ASSERTEQUALS": [
          -1,
          440
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          440
        ],
        "'ASSERTTRUE": [
          -1,
          440
        ],
        "'ASSERTFALSE": [
          -1,
          440
        ],
        "'ASSERTSATISFIES": [
          -1,
          440
        ],
        "'ASSERTRAISES": [
          -1,
          440
        ],
        "'SWITCH": [
          -1,
          440
        ],
        "'CASE": [
          -1,
          440
        ],
        "'DEFAULT": [
          -1,
          440
        ],
        "'YIELD": [
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
        "check-block_A0_I6*": [
          386
        ],
        "'NAME": [
          -1,
          442
        ],
        "'PARENNOSPACE": [
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
        "'RBRACE": [
          -1,
          442
        ],
        "'SPY": [
          -1,
          442
        ],
        "'PARENSPACE": [
          -1,
          442
        ],
        "'INT": [
          -1,
          442
        ],
        "'LONG": [
          -1,
          442
        ],
        "'DOUBLE": [
          -1,
          442
        ],
        "'FLOAT": [
          -1,
          442
        ],
        "'BOOLEAN": [
          -1,
          442
        ],
        "'VOID": [
          -1,
          442
        ],
        "'DATA": [
          -1,
          442
        ],
        "'IF": [
          -1,
          442
        ],
        "'FOR": [
          -1,
          442
        ],
        "'RETURN": [
          -1,
          442
        ],
        "'VAR": [
          -1,
          442
        ],
        "'REC": [
          -1,
          442
        ],
        "'ATCHECK": [
          -1,
          442
        ],
        "'ASSERTEQUALS": [
          -1,
          442
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          442
        ],
        "'ASSERTTRUE": [
          -1,
          442
        ],
        "'ASSERTFALSE": [
          -1,
          442
        ],
        "'ASSERTSATISFIES": [
          -1,
          442
        ],
        "'ASSERTRAISES": [
          -1,
          442
        ],
        "'SWITCH": [
          -1,
          442
        ],
        "'YIELD": [
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
        "'NEW": [
          -1,
          442
        ]
      },
      {
        "switch-expr_I6?": [
          387
        ],
        "switch-expr_I5": [
          388
        ],
        "case-branch": [
          389
        ],
        "switch-expr_I6": [
          390
        ],
        "default-branch": [
          391
        ],
        "'CASE": [
          392
        ],
        "'DEFAULT": [
          393
        ],
        "'RBRACE": [
          -1,
          444
        ]
      },
      {
        "'RPAREN": [
          -1,
          446
        ],
        "'COMMA": [
          -1,
          446
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          394
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'COMMA": [
          -1,
          448
        ],
        "'RBRACK": [
          -1,
          448
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          395
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'RBRACE": [
          396
        ],
        "table-expr_I5": [
          397
        ],
        "table-row": [
          398
        ],
        "'ROW": [
          399
        ]
      },
      {
        "'SEMI": [
          -1,
          450
        ],
        "'COMMA": [
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
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          452
        ],
        "'GT": [
          -1,
          452
        ],
        "'THINARROW": [
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
        "'IS": [
          -1,
          452
        ],
        "'ISNOT": [
          -1,
          452
        ],
        "'SATISFIES": [
          -1,
          452
        ],
        "'RAISES": [
          -1,
          452
        ],
        "'SWITCH": [
          -1,
          452
        ],
        "'CASE": [
          -1,
          452
        ],
        "'DEFAULT": [
          -1,
          452
        ],
        "'YIELD": [
          -1,
          452
        ],
        "'PLUS": [
          -1,
          452
        ],
        "'DASH": [
          -1,
          452
        ],
        "'TIMES": [
          -1,
          452
        ],
        "'SLASH": [
          -1,
          452
        ],
        "'PERCENT": [
          -1,
          452
        ],
        "'EQUALEQUAL": [
          -1,
          452
        ],
        "'NEQ": [
          -1,
          452
        ],
        "'LEQ": [
          -1,
          452
        ],
        "'GEQ": [
          -1,
          452
        ],
        "'AND": [
          -1,
          452
        ],
        "'OR": [
          -1,
          452
        ],
        "'BANG": [
          -1,
          452
        ],
        "'DOT": [
          -1,
          452
        ],
        "'LBRACK": [
          -1,
          452
        ],
        "'RBRACK": [
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
        "'SEMI": [
          400
        ]
      },
      {
        "'NAME": [
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
        "'PARENSPACE": [
          -1,
          454
        ],
        "'SWITCH": [
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
        "'SEMI": [
          401
        ]
      },
      {
        "'SEMI": [
          402
        ]
      },
      {
        "'NAME": [
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
        "'PARENSPACE": [
          -1,
          456
        ],
        "'SWITCH": [
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
        "'TABLE": [
          -1,
          456
        ],
        "'ASK": [
          -1,
          456
        ],
        "'OTHERWISE": [
          -1,
          456
        ],
        "'NEW": [
          -1,
          456
        ]
      },
      {
        "'THINARROW": [
          403
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          404
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'RPAREN": [
          -1,
          458
        ],
        "'COMMA": [
          -1,
          458
        ]
      },
      {
        "'SEMI": [
          405
        ]
      },
      {
        "$": [
          -1,
          460
        ],
        "'NAME": [
          -1,
          460
        ],
        "'PARENNOSPACE": [
          -1,
          460
        ],
        "'STRING": [
          -1,
          460
        ],
        "'LBRACE": [
          -1,
          460
        ],
        "'RBRACE": [
          -1,
          460
        ],
        "'SPY": [
          -1,
          460
        ],
        "'PARENSPACE": [
          -1,
          460
        ],
        "'INT": [
          -1,
          460
        ],
        "'LONG": [
          -1,
          460
        ],
        "'DOUBLE": [
          -1,
          460
        ],
        "'FLOAT": [
          -1,
          460
        ],
        "'BOOLEAN": [
          -1,
          460
        ],
        "'VOID": [
          -1,
          460
        ],
        "'DATA": [
          -1,
          460
        ],
        "'IF": [
          -1,
          460
        ],
        "'FOR": [
          -1,
          460
        ],
        "'RETURN": [
          -1,
          460
        ],
        "'VAR": [
          -1,
          460
        ],
        "'REC": [
          -1,
          460
        ],
        "'ATCHECK": [
          -1,
          460
        ],
        "'ASSERTEQUALS": [
          -1,
          460
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          460
        ],
        "'ASSERTTRUE": [
          -1,
          460
        ],
        "'ASSERTFALSE": [
          -1,
          460
        ],
        "'ASSERTSATISFIES": [
          -1,
          460
        ],
        "'ASSERTRAISES": [
          -1,
          460
        ],
        "'SWITCH": [
          -1,
          460
        ],
        "'YIELD": [
          -1,
          460
        ],
        "'DASH": [
          -1,
          460
        ],
        "'BANG": [
          -1,
          460
        ],
        "'LBRACK": [
          -1,
          460
        ],
        "'NUMBER": [
          -1,
          460
        ],
        "'TRUE": [
          -1,
          460
        ],
        "'FALSE": [
          -1,
          460
        ],
        "'NULL": [
          -1,
          460
        ],
        "'PARENAFTERBRACE": [
          -1,
          460
        ],
        "'TABLE": [
          -1,
          460
        ],
        "'ASK": [
          -1,
          460
        ],
        "'NEW": [
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
        "'REC": [
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
        "$": [
          -1,
          464
        ],
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
        "'REC": [
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
        "'LBRACE": [
          406
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
          196
        ],
        "data-decl": [
          197
        ],
        "check-block": [
          198
        ],
        "let-stmt": [
          199
        ],
        "var-stmt": [
          200
        ],
        "rec-stmt": [
          201
        ],
        "assign-stmt": [
          202
        ],
        "expr-stmt": [
          203
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          407
        ],
        "block_I1": [
          408
        ],
        "block-stmt": [
          409
        ],
        "if-stmt": [
          206
        ],
        "for-stmt": [
          207
        ],
        "return-stmt": [
          208
        ],
        "yield-stmt": [
          209
        ],
        "spy-stmt": [
          210
        ],
        "'SPY": [
          211
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
          213
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          215
        ],
        "'RETURN": [
          216
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
          224
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'RPAREN": [
          -1,
          466
        ],
        "'COMMA": [
          -1,
          466
        ]
      },
      {
        "'RPAREN": [
          -1,
          468
        ],
        "'COMMA": [
          -1,
          468
        ]
      },
      {
        "'SEMI": [
          -1,
          470
        ],
        "'RBRACE": [
          -1,
          470
        ]
      },
      {
        "'COMMA": [
          410
        ],
        "variant-decl_A0_I2_I1": [
          411
        ],
        "'RPAREN": [
          -1,
          472
        ]
      },
      {
        "'SEMI": [
          -1,
          474
        ],
        "'RBRACE": [
          -1,
          474
        ]
      },
      {
        "$": [
          -1,
          476
        ],
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
        "'REC": [
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
        "'RPAREN": [
          412
        ],
        "spy-stmt_I3": [
          413
        ],
        "'COMMA": [
          414
        ]
      },
      {
        "block": [
          415
        ],
        "'LBRACE": [
          302
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
        "'NAME": [
          -1,
          488
        ],
        "'PARENNOSPACE": [
          -1,
          488
        ],
        "'STRING": [
          -1,
          488
        ],
        "'LBRACE": [
          -1,
          488
        ],
        "'RBRACE": [
          -1,
          488
        ],
        "'SPY": [
          -1,
          488
        ],
        "'PARENSPACE": [
          -1,
          488
        ],
        "'INT": [
          -1,
          488
        ],
        "'LONG": [
          -1,
          488
        ],
        "'DOUBLE": [
          -1,
          488
        ],
        "'FLOAT": [
          -1,
          488
        ],
        "'BOOLEAN": [
          -1,
          488
        ],
        "'VOID": [
          -1,
          488
        ],
        "'DATA": [
          -1,
          488
        ],
        "'IF": [
          -1,
          488
        ],
        "'FOR": [
          -1,
          488
        ],
        "'RETURN": [
          -1,
          488
        ],
        "'VAR": [
          -1,
          488
        ],
        "'REC": [
          -1,
          488
        ],
        "'ATCHECK": [
          -1,
          488
        ],
        "'ASSERTEQUALS": [
          -1,
          488
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          488
        ],
        "'ASSERTTRUE": [
          -1,
          488
        ],
        "'ASSERTFALSE": [
          -1,
          488
        ],
        "'ASSERTSATISFIES": [
          -1,
          488
        ],
        "'ASSERTRAISES": [
          -1,
          488
        ],
        "'SWITCH": [
          -1,
          488
        ],
        "'YIELD": [
          -1,
          488
        ],
        "'DASH": [
          -1,
          488
        ],
        "'BANG": [
          -1,
          488
        ],
        "'LBRACK": [
          -1,
          488
        ],
        "'NUMBER": [
          -1,
          488
        ],
        "'TRUE": [
          -1,
          488
        ],
        "'FALSE": [
          -1,
          488
        ],
        "'NULL": [
          -1,
          488
        ],
        "'PARENAFTERBRACE": [
          -1,
          488
        ],
        "'TABLE": [
          -1,
          488
        ],
        "'ASK": [
          -1,
          488
        ],
        "'NEW": [
          -1,
          488
        ]
      },
      {
        "'NAME": [
          -1,
          490
        ],
        "'PARENNOSPACE": [
          -1,
          490
        ],
        "'STRING": [
          -1,
          490
        ],
        "'LBRACE": [
          -1,
          490
        ],
        "'RBRACE": [
          -1,
          490
        ],
        "'SPY": [
          -1,
          490
        ],
        "'PARENSPACE": [
          -1,
          490
        ],
        "'INT": [
          -1,
          490
        ],
        "'LONG": [
          -1,
          490
        ],
        "'DOUBLE": [
          -1,
          490
        ],
        "'FLOAT": [
          -1,
          490
        ],
        "'BOOLEAN": [
          -1,
          490
        ],
        "'VOID": [
          -1,
          490
        ],
        "'DATA": [
          -1,
          490
        ],
        "'IF": [
          -1,
          490
        ],
        "'FOR": [
          -1,
          490
        ],
        "'RETURN": [
          -1,
          490
        ],
        "'VAR": [
          -1,
          490
        ],
        "'REC": [
          -1,
          490
        ],
        "'ATCHECK": [
          -1,
          490
        ],
        "'ASSERTEQUALS": [
          -1,
          490
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          490
        ],
        "'ASSERTTRUE": [
          -1,
          490
        ],
        "'ASSERTFALSE": [
          -1,
          490
        ],
        "'ASSERTSATISFIES": [
          -1,
          490
        ],
        "'ASSERTRAISES": [
          -1,
          490
        ],
        "'SWITCH": [
          -1,
          490
        ],
        "'YIELD": [
          -1,
          490
        ],
        "'DASH": [
          -1,
          490
        ],
        "'BANG": [
          -1,
          490
        ],
        "'LBRACK": [
          -1,
          490
        ],
        "'NUMBER": [
          -1,
          490
        ],
        "'TRUE": [
          -1,
          490
        ],
        "'FALSE": [
          -1,
          490
        ],
        "'NULL": [
          -1,
          490
        ],
        "'PARENAFTERBRACE": [
          -1,
          490
        ],
        "'TABLE": [
          -1,
          490
        ],
        "'ASK": [
          -1,
          490
        ],
        "'NEW": [
          -1,
          490
        ]
      },
      {
        "'NAME": [
          -1,
          492
        ],
        "'PARENNOSPACE": [
          -1,
          492
        ],
        "'STRING": [
          -1,
          492
        ],
        "'LBRACE": [
          -1,
          492
        ],
        "'RBRACE": [
          -1,
          492
        ],
        "'SPY": [
          -1,
          492
        ],
        "'PARENSPACE": [
          -1,
          492
        ],
        "'INT": [
          -1,
          492
        ],
        "'LONG": [
          -1,
          492
        ],
        "'DOUBLE": [
          -1,
          492
        ],
        "'FLOAT": [
          -1,
          492
        ],
        "'BOOLEAN": [
          -1,
          492
        ],
        "'VOID": [
          -1,
          492
        ],
        "'DATA": [
          -1,
          492
        ],
        "'IF": [
          -1,
          492
        ],
        "'FOR": [
          -1,
          492
        ],
        "'RETURN": [
          -1,
          492
        ],
        "'VAR": [
          -1,
          492
        ],
        "'REC": [
          -1,
          492
        ],
        "'ATCHECK": [
          -1,
          492
        ],
        "'ASSERTEQUALS": [
          -1,
          492
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          492
        ],
        "'ASSERTTRUE": [
          -1,
          492
        ],
        "'ASSERTFALSE": [
          -1,
          492
        ],
        "'ASSERTSATISFIES": [
          -1,
          492
        ],
        "'ASSERTRAISES": [
          -1,
          492
        ],
        "'SWITCH": [
          -1,
          492
        ],
        "'YIELD": [
          -1,
          492
        ],
        "'DASH": [
          -1,
          492
        ],
        "'BANG": [
          -1,
          492
        ],
        "'LBRACK": [
          -1,
          492
        ],
        "'NUMBER": [
          -1,
          492
        ],
        "'TRUE": [
          -1,
          492
        ],
        "'FALSE": [
          -1,
          492
        ],
        "'NULL": [
          -1,
          492
        ],
        "'PARENAFTERBRACE": [
          -1,
          492
        ],
        "'TABLE": [
          -1,
          492
        ],
        "'ASK": [
          -1,
          492
        ],
        "'NEW": [
          -1,
          492
        ]
      },
      {
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
        "'ASSERTEQUALS": [
          -1,
          494
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          494
        ],
        "'ASSERTTRUE": [
          -1,
          494
        ],
        "'ASSERTFALSE": [
          -1,
          494
        ],
        "'ASSERTSATISFIES": [
          -1,
          494
        ],
        "'ASSERTRAISES": [
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
          -1,
          496
        ],
        "'PARENNOSPACE": [
          -1,
          496
        ],
        "'STRING": [
          -1,
          496
        ],
        "'LBRACE": [
          -1,
          496
        ],
        "'RBRACE": [
          -1,
          496
        ],
        "'SPY": [
          -1,
          496
        ],
        "'PARENSPACE": [
          -1,
          496
        ],
        "'INT": [
          -1,
          496
        ],
        "'LONG": [
          -1,
          496
        ],
        "'DOUBLE": [
          -1,
          496
        ],
        "'FLOAT": [
          -1,
          496
        ],
        "'BOOLEAN": [
          -1,
          496
        ],
        "'VOID": [
          -1,
          496
        ],
        "'DATA": [
          -1,
          496
        ],
        "'IF": [
          -1,
          496
        ],
        "'FOR": [
          -1,
          496
        ],
        "'RETURN": [
          -1,
          496
        ],
        "'VAR": [
          -1,
          496
        ],
        "'REC": [
          -1,
          496
        ],
        "'ATCHECK": [
          -1,
          496
        ],
        "'ASSERTEQUALS": [
          -1,
          496
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          496
        ],
        "'ASSERTTRUE": [
          -1,
          496
        ],
        "'ASSERTFALSE": [
          -1,
          496
        ],
        "'ASSERTSATISFIES": [
          -1,
          496
        ],
        "'ASSERTRAISES": [
          -1,
          496
        ],
        "'SWITCH": [
          -1,
          496
        ],
        "'YIELD": [
          -1,
          496
        ],
        "'DASH": [
          -1,
          496
        ],
        "'BANG": [
          -1,
          496
        ],
        "'LBRACK": [
          -1,
          496
        ],
        "'NUMBER": [
          -1,
          496
        ],
        "'TRUE": [
          -1,
          496
        ],
        "'FALSE": [
          -1,
          496
        ],
        "'NULL": [
          -1,
          496
        ],
        "'PARENAFTERBRACE": [
          -1,
          496
        ],
        "'TABLE": [
          -1,
          496
        ],
        "'ASK": [
          -1,
          496
        ],
        "'NEW": [
          -1,
          496
        ]
      },
      {
        "'NAME": [
          -1,
          498
        ],
        "'PARENNOSPACE": [
          -1,
          498
        ],
        "'STRING": [
          -1,
          498
        ],
        "'LBRACE": [
          -1,
          498
        ],
        "'RBRACE": [
          -1,
          498
        ],
        "'SPY": [
          -1,
          498
        ],
        "'PARENSPACE": [
          -1,
          498
        ],
        "'INT": [
          -1,
          498
        ],
        "'LONG": [
          -1,
          498
        ],
        "'DOUBLE": [
          -1,
          498
        ],
        "'FLOAT": [
          -1,
          498
        ],
        "'BOOLEAN": [
          -1,
          498
        ],
        "'VOID": [
          -1,
          498
        ],
        "'DATA": [
          -1,
          498
        ],
        "'IF": [
          -1,
          498
        ],
        "'FOR": [
          -1,
          498
        ],
        "'RETURN": [
          -1,
          498
        ],
        "'VAR": [
          -1,
          498
        ],
        "'REC": [
          -1,
          498
        ],
        "'ATCHECK": [
          -1,
          498
        ],
        "'ASSERTEQUALS": [
          -1,
          498
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          498
        ],
        "'ASSERTTRUE": [
          -1,
          498
        ],
        "'ASSERTFALSE": [
          -1,
          498
        ],
        "'ASSERTSATISFIES": [
          -1,
          498
        ],
        "'ASSERTRAISES": [
          -1,
          498
        ],
        "'SWITCH": [
          -1,
          498
        ],
        "'YIELD": [
          -1,
          498
        ],
        "'DASH": [
          -1,
          498
        ],
        "'BANG": [
          -1,
          498
        ],
        "'LBRACK": [
          -1,
          498
        ],
        "'NUMBER": [
          -1,
          498
        ],
        "'TRUE": [
          -1,
          498
        ],
        "'FALSE": [
          -1,
          498
        ],
        "'NULL": [
          -1,
          498
        ],
        "'PARENAFTERBRACE": [
          -1,
          498
        ],
        "'TABLE": [
          -1,
          498
        ],
        "'ASK": [
          -1,
          498
        ],
        "'NEW": [
          -1,
          498
        ]
      },
      {
        "'NAME": [
          -1,
          500
        ],
        "'PARENNOSPACE": [
          -1,
          500
        ],
        "'STRING": [
          -1,
          500
        ],
        "'LBRACE": [
          -1,
          500
        ],
        "'RBRACE": [
          -1,
          500
        ],
        "'SPY": [
          -1,
          500
        ],
        "'PARENSPACE": [
          -1,
          500
        ],
        "'INT": [
          -1,
          500
        ],
        "'LONG": [
          -1,
          500
        ],
        "'DOUBLE": [
          -1,
          500
        ],
        "'FLOAT": [
          -1,
          500
        ],
        "'BOOLEAN": [
          -1,
          500
        ],
        "'VOID": [
          -1,
          500
        ],
        "'DATA": [
          -1,
          500
        ],
        "'IF": [
          -1,
          500
        ],
        "'FOR": [
          -1,
          500
        ],
        "'RETURN": [
          -1,
          500
        ],
        "'VAR": [
          -1,
          500
        ],
        "'REC": [
          -1,
          500
        ],
        "'ATCHECK": [
          -1,
          500
        ],
        "'ASSERTEQUALS": [
          -1,
          500
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          500
        ],
        "'ASSERTTRUE": [
          -1,
          500
        ],
        "'ASSERTFALSE": [
          -1,
          500
        ],
        "'ASSERTSATISFIES": [
          -1,
          500
        ],
        "'ASSERTRAISES": [
          -1,
          500
        ],
        "'SWITCH": [
          -1,
          500
        ],
        "'YIELD": [
          -1,
          500
        ],
        "'DASH": [
          -1,
          500
        ],
        "'BANG": [
          -1,
          500
        ],
        "'LBRACK": [
          -1,
          500
        ],
        "'NUMBER": [
          -1,
          500
        ],
        "'TRUE": [
          -1,
          500
        ],
        "'FALSE": [
          -1,
          500
        ],
        "'NULL": [
          -1,
          500
        ],
        "'PARENAFTERBRACE": [
          -1,
          500
        ],
        "'TABLE": [
          -1,
          500
        ],
        "'ASK": [
          -1,
          500
        ],
        "'NEW": [
          -1,
          500
        ]
      },
      {
        "'COLON": [
          416
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          417
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          418
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'SEMI": [
          419
        ],
        "assert-stmt_A2_I4?": [
          420
        ],
        "assert-stmt_A2_I4": [
          421
        ],
        "'NAME": [
          -1,
          502,
          504
        ],
        "'PARENNOSPACE": [
          -1,
          502,
          504
        ],
        "'STRING": [
          -1,
          502,
          504
        ],
        "'LBRACE": [
          -1,
          502,
          504
        ],
        "'RBRACE": [
          -1,
          502,
          504
        ],
        "'SPY": [
          -1,
          502,
          504
        ],
        "'PARENSPACE": [
          -1,
          502,
          504
        ],
        "'INT": [
          -1,
          502,
          504
        ],
        "'LONG": [
          -1,
          502,
          504
        ],
        "'DOUBLE": [
          -1,
          502,
          504
        ],
        "'FLOAT": [
          -1,
          502,
          504
        ],
        "'BOOLEAN": [
          -1,
          502,
          504
        ],
        "'VOID": [
          -1,
          502,
          504
        ],
        "'DATA": [
          -1,
          502,
          504
        ],
        "'IF": [
          -1,
          502,
          504
        ],
        "'FOR": [
          -1,
          502,
          504
        ],
        "'RETURN": [
          -1,
          502,
          504
        ],
        "'VAR": [
          -1,
          502,
          504
        ],
        "'REC": [
          -1,
          502,
          504
        ],
        "'ATCHECK": [
          -1,
          502,
          504
        ],
        "'ASSERTEQUALS": [
          -1,
          502,
          504
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          502,
          504
        ],
        "'ASSERTTRUE": [
          -1,
          502,
          504
        ],
        "'ASSERTFALSE": [
          -1,
          502,
          504
        ],
        "'ASSERTSATISFIES": [
          -1,
          502,
          504
        ],
        "'ASSERTRAISES": [
          -1,
          502,
          504
        ],
        "'SWITCH": [
          -1,
          502,
          504
        ],
        "'YIELD": [
          -1,
          502,
          504
        ],
        "'DASH": [
          -1,
          502,
          504
        ],
        "'BANG": [
          -1,
          502,
          504
        ],
        "'LBRACK": [
          -1,
          502,
          504
        ],
        "'NUMBER": [
          -1,
          502,
          504
        ],
        "'TRUE": [
          -1,
          502,
          504
        ],
        "'FALSE": [
          -1,
          502,
          504
        ],
        "'NULL": [
          -1,
          502,
          504
        ],
        "'PARENAFTERBRACE": [
          -1,
          502,
          504
        ],
        "'TABLE": [
          -1,
          502,
          504
        ],
        "'ASK": [
          -1,
          502,
          504
        ],
        "'NEW": [
          -1,
          502,
          504
        ]
      },
      {
        "'SEMI": [
          422
        ],
        "assert-stmt_A3_I4?": [
          423
        ],
        "assert-stmt_A3_I4": [
          424
        ],
        "'NAME": [
          -1,
          506,
          508
        ],
        "'PARENNOSPACE": [
          -1,
          506,
          508
        ],
        "'STRING": [
          -1,
          506,
          508
        ],
        "'LBRACE": [
          -1,
          506,
          508
        ],
        "'RBRACE": [
          -1,
          506,
          508
        ],
        "'SPY": [
          -1,
          506,
          508
        ],
        "'PARENSPACE": [
          -1,
          506,
          508
        ],
        "'INT": [
          -1,
          506,
          508
        ],
        "'LONG": [
          -1,
          506,
          508
        ],
        "'DOUBLE": [
          -1,
          506,
          508
        ],
        "'FLOAT": [
          -1,
          506,
          508
        ],
        "'BOOLEAN": [
          -1,
          506,
          508
        ],
        "'VOID": [
          -1,
          506,
          508
        ],
        "'DATA": [
          -1,
          506,
          508
        ],
        "'IF": [
          -1,
          506,
          508
        ],
        "'FOR": [
          -1,
          506,
          508
        ],
        "'RETURN": [
          -1,
          506,
          508
        ],
        "'VAR": [
          -1,
          506,
          508
        ],
        "'REC": [
          -1,
          506,
          508
        ],
        "'ATCHECK": [
          -1,
          506,
          508
        ],
        "'ASSERTEQUALS": [
          -1,
          506,
          508
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          506,
          508
        ],
        "'ASSERTTRUE": [
          -1,
          506,
          508
        ],
        "'ASSERTFALSE": [
          -1,
          506,
          508
        ],
        "'ASSERTSATISFIES": [
          -1,
          506,
          508
        ],
        "'ASSERTRAISES": [
          -1,
          506,
          508
        ],
        "'SWITCH": [
          -1,
          506,
          508
        ],
        "'YIELD": [
          -1,
          506,
          508
        ],
        "'DASH": [
          -1,
          506,
          508
        ],
        "'BANG": [
          -1,
          506,
          508
        ],
        "'LBRACK": [
          -1,
          506,
          508
        ],
        "'NUMBER": [
          -1,
          506,
          508
        ],
        "'TRUE": [
          -1,
          506,
          508
        ],
        "'FALSE": [
          -1,
          506,
          508
        ],
        "'NULL": [
          -1,
          506,
          508
        ],
        "'PARENAFTERBRACE": [
          -1,
          506,
          508
        ],
        "'TABLE": [
          -1,
          506,
          508
        ],
        "'ASK": [
          -1,
          506,
          508
        ],
        "'NEW": [
          -1,
          506,
          508
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          425
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          426
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
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
          196
        ],
        "data-decl": [
          197
        ],
        "check-block": [
          198
        ],
        "let-stmt": [
          199
        ],
        "var-stmt": [
          200
        ],
        "rec-stmt": [
          201
        ],
        "assign-stmt": [
          202
        ],
        "expr-stmt": [
          203
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          427
        ],
        "block-stmt": [
          428
        ],
        "if-stmt": [
          206
        ],
        "for-stmt": [
          207
        ],
        "return-stmt": [
          208
        ],
        "yield-stmt": [
          209
        ],
        "spy-stmt": [
          210
        ],
        "'SPY": [
          211
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "assert-stmt": [
          429
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
          213
        ],
        "full-expr": [
          214
        ],
        "'FOR": [
          215
        ],
        "'RETURN": [
          216
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
          430
        ],
        "'ASSERTEQUALS": [
          218
        ],
        "'ASSERTNOTEQUALS": [
          219
        ],
        "'ASSERTTRUE": [
          220
        ],
        "'ASSERTFALSE": [
          221
        ],
        "'ASSERTSATISFIES": [
          222
        ],
        "'ASSERTRAISES": [
          223
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          224
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'RBRACE": [
          431
        ]
      },
      {
        "'RBRACE": [
          -1,
          510
        ],
        "'CASE": [
          -1,
          510
        ],
        "'DEFAULT": [
          -1,
          510
        ]
      },
      {
        "'RBRACE": [
          -1,
          512
        ],
        "'CASE": [
          -1,
          512
        ],
        "'DEFAULT": [
          -1,
          512
        ]
      },
      {
        "'RBRACE": [
          -1,
          514
        ]
      },
      {
        "'RBRACE": [
          -1,
          516
        ]
      },
      {
        "'NAME": [
          432
        ]
      },
      {
        "'COLON": [
          433
        ]
      },
      {
        "'COMMA": [
          -1,
          518
        ],
        "'RBRACK": [
          -1,
          518
        ]
      },
      {
        "'RPAREN": [
          434
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
        "'SEMI": [
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
        "'RPAREN": [
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
        "'COMMA": [
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
        "'LT": [
          -1,
          520
        ],
        "'GT": [
          -1,
          520
        ],
        "'THINARROW": [
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
        "'IS": [
          -1,
          520
        ],
        "'ISNOT": [
          -1,
          520
        ],
        "'SATISFIES": [
          -1,
          520
        ],
        "'RAISES": [
          -1,
          520
        ],
        "'SWITCH": [
          -1,
          520
        ],
        "'CASE": [
          -1,
          520
        ],
        "'DEFAULT": [
          -1,
          520
        ],
        "'YIELD": [
          -1,
          520
        ],
        "'PLUS": [
          -1,
          520
        ],
        "'DASH": [
          -1,
          520
        ],
        "'TIMES": [
          -1,
          520
        ],
        "'SLASH": [
          -1,
          520
        ],
        "'PERCENT": [
          -1,
          520
        ],
        "'EQUALEQUAL": [
          -1,
          520
        ],
        "'NEQ": [
          -1,
          520
        ],
        "'LEQ": [
          -1,
          520
        ],
        "'GEQ": [
          -1,
          520
        ],
        "'AND": [
          -1,
          520
        ],
        "'OR": [
          -1,
          520
        ],
        "'BANG": [
          -1,
          520
        ],
        "'DOT": [
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
        "'RBRACE": [
          -1,
          522
        ],
        "'ROW": [
          -1,
          522
        ]
      },
      {
        "'SEMI": [
          435
        ]
      },
      {
        "'COLON": [
          436
        ]
      },
      {
        "'NAME": [
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
        "'PARENSPACE": [
          -1,
          524
        ],
        "'SWITCH": [
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
          -1,
          526
        ],
        "'STRING": [
          -1,
          526
        ],
        "'LBRACE": [
          -1,
          526
        ],
        "'PARENSPACE": [
          -1,
          526
        ],
        "'SWITCH": [
          -1,
          526
        ],
        "'DASH": [
          -1,
          526
        ],
        "'BANG": [
          -1,
          526
        ],
        "'LBRACK": [
          -1,
          526
        ],
        "'NUMBER": [
          -1,
          526
        ],
        "'TRUE": [
          -1,
          526
        ],
        "'FALSE": [
          -1,
          526
        ],
        "'NULL": [
          -1,
          526
        ],
        "'PARENAFTERBRACE": [
          -1,
          526
        ],
        "'TABLE": [
          -1,
          526
        ],
        "'ASK": [
          -1,
          526
        ],
        "'OTHERWISE": [
          -1,
          526
        ],
        "'NEW": [
          -1,
          526
        ]
      },
      {
        "'RBRACE": [
          437
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          438
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
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
        "$": [
          -1,
          530
        ],
        "'IMPORT": [
          -1,
          530
        ],
        "'NAME": [
          -1,
          530
        ],
        "'PARENNOSPACE": [
          -1,
          530
        ],
        "'STRING": [
          -1,
          530
        ],
        "'INCLUDE": [
          -1,
          530
        ],
        "'LBRACE": [
          -1,
          530
        ],
        "'PARENSPACE": [
          -1,
          530
        ],
        "'INT": [
          -1,
          530
        ],
        "'LONG": [
          -1,
          530
        ],
        "'DOUBLE": [
          -1,
          530
        ],
        "'FLOAT": [
          -1,
          530
        ],
        "'BOOLEAN": [
          -1,
          530
        ],
        "'VOID": [
          -1,
          530
        ],
        "'DATA": [
          -1,
          530
        ],
        "'VAR": [
          -1,
          530
        ],
        "'REC": [
          -1,
          530
        ],
        "'ATCHECK": [
          -1,
          530
        ],
        "'SWITCH": [
          -1,
          530
        ],
        "'DASH": [
          -1,
          530
        ],
        "'BANG": [
          -1,
          530
        ],
        "'LBRACK": [
          -1,
          530
        ],
        "'NUMBER": [
          -1,
          530
        ],
        "'TRUE": [
          -1,
          530
        ],
        "'FALSE": [
          -1,
          530
        ],
        "'NULL": [
          -1,
          530
        ],
        "'PARENAFTERBRACE": [
          -1,
          530
        ],
        "'TABLE": [
          -1,
          530
        ],
        "'ASK": [
          -1,
          530
        ],
        "'NEW": [
          -1,
          530
        ]
      },
      {
        "where-clause_I2*": [
          439
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
        "$": [
          -1,
          534
        ],
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
        "'WHERE": [
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
        "'ELSE": [
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
        "'RBRACK": [
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
        "'REC": [
          -1,
          536
        ],
        "'ATCHECK": [
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
        "'REC": [
          -1,
          538
        ],
        "'ATCHECK": [
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
          89
        ],
        "'PARENSPACE": [
          68
        ],
        "type-ann": [
          305
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
          440
        ]
      },
      {
        "'RPAREN": [
          -1,
          540
        ],
        "'COMMA": [
          -1,
          540
        ]
      },
      {
        "'SEMI": [
          441
        ]
      },
      {
        "'RPAREN": [
          -1,
          542
        ],
        "'COMMA": [
          -1,
          542
        ]
      },
      {
        "'NAME": [
          442
        ]
      },
      {
        "if-stmt_I5*": [
          443
        ],
        "'NAME": [
          -1,
          544,
          546
        ],
        "'PARENNOSPACE": [
          -1,
          544,
          546
        ],
        "'STRING": [
          -1,
          544,
          546
        ],
        "'LBRACE": [
          -1,
          544,
          546
        ],
        "'RBRACE": [
          -1,
          544,
          546
        ],
        "'SPY": [
          -1,
          544,
          546
        ],
        "'PARENSPACE": [
          -1,
          544,
          546
        ],
        "'INT": [
          -1,
          544,
          546
        ],
        "'LONG": [
          -1,
          544,
          546
        ],
        "'DOUBLE": [
          -1,
          544,
          546
        ],
        "'FLOAT": [
          -1,
          544,
          546
        ],
        "'BOOLEAN": [
          -1,
          544,
          546
        ],
        "'VOID": [
          -1,
          544,
          546
        ],
        "'DATA": [
          -1,
          544,
          546
        ],
        "'IF": [
          -1,
          544,
          546
        ],
        "'ELSE": [
          -1,
          546
        ],
        "'FOR": [
          -1,
          544,
          546
        ],
        "'RETURN": [
          -1,
          544,
          546
        ],
        "'VAR": [
          -1,
          544,
          546
        ],
        "'REC": [
          -1,
          544,
          546
        ],
        "'ATCHECK": [
          -1,
          544,
          546
        ],
        "'ASSERTEQUALS": [
          -1,
          544,
          546
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          544,
          546
        ],
        "'ASSERTTRUE": [
          -1,
          544,
          546
        ],
        "'ASSERTFALSE": [
          -1,
          544,
          546
        ],
        "'ASSERTSATISFIES": [
          -1,
          544,
          546
        ],
        "'ASSERTRAISES": [
          -1,
          544,
          546
        ],
        "'SWITCH": [
          -1,
          544,
          546
        ],
        "'YIELD": [
          -1,
          544,
          546
        ],
        "'DASH": [
          -1,
          544,
          546
        ],
        "'BANG": [
          -1,
          544,
          546
        ],
        "'LBRACK": [
          -1,
          544,
          546
        ],
        "'NUMBER": [
          -1,
          544,
          546
        ],
        "'TRUE": [
          -1,
          544,
          546
        ],
        "'FALSE": [
          -1,
          544,
          546
        ],
        "'NULL": [
          -1,
          544,
          546
        ],
        "'PARENAFTERBRACE": [
          -1,
          544,
          546
        ],
        "'TABLE": [
          -1,
          544,
          546
        ],
        "'ASK": [
          -1,
          544,
          546
        ],
        "'NEW": [
          -1,
          544,
          546
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          444
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'RPAREN": [
          445
        ]
      },
      {
        "'RPAREN": [
          446
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
        "'NAME": [
          -1,
          558
        ],
        "'PARENNOSPACE": [
          -1,
          558
        ],
        "'STRING": [
          -1,
          558
        ],
        "'LBRACE": [
          -1,
          558
        ],
        "'RBRACE": [
          -1,
          558
        ],
        "'SPY": [
          -1,
          558
        ],
        "'PARENSPACE": [
          -1,
          558
        ],
        "'INT": [
          -1,
          558
        ],
        "'LONG": [
          -1,
          558
        ],
        "'DOUBLE": [
          -1,
          558
        ],
        "'FLOAT": [
          -1,
          558
        ],
        "'BOOLEAN": [
          -1,
          558
        ],
        "'VOID": [
          -1,
          558
        ],
        "'DATA": [
          -1,
          558
        ],
        "'IF": [
          -1,
          558
        ],
        "'FOR": [
          -1,
          558
        ],
        "'RETURN": [
          -1,
          558
        ],
        "'VAR": [
          -1,
          558
        ],
        "'REC": [
          -1,
          558
        ],
        "'ATCHECK": [
          -1,
          558
        ],
        "'ASSERTEQUALS": [
          -1,
          558
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          558
        ],
        "'ASSERTTRUE": [
          -1,
          558
        ],
        "'ASSERTFALSE": [
          -1,
          558
        ],
        "'ASSERTSATISFIES": [
          -1,
          558
        ],
        "'ASSERTRAISES": [
          -1,
          558
        ],
        "'SWITCH": [
          -1,
          558
        ],
        "'YIELD": [
          -1,
          558
        ],
        "'DASH": [
          -1,
          558
        ],
        "'BANG": [
          -1,
          558
        ],
        "'LBRACK": [
          -1,
          558
        ],
        "'NUMBER": [
          -1,
          558
        ],
        "'TRUE": [
          -1,
          558
        ],
        "'FALSE": [
          -1,
          558
        ],
        "'NULL": [
          -1,
          558
        ],
        "'PARENAFTERBRACE": [
          -1,
          558
        ],
        "'TABLE": [
          -1,
          558
        ],
        "'ASK": [
          -1,
          558
        ],
        "'NEW": [
          -1,
          558
        ]
      },
      {
        "'RPAREN": [
          447
        ]
      },
      {
        "'RPAREN": [
          448
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
        "'PARENNOSPACE": [
          -1,
          560
        ],
        "'STRING": [
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
        "'REC": [
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
        "'SWITCH": [
          -1,
          560
        ],
        "'YIELD": [
          -1,
          560
        ],
        "'DASH": [
          -1,
          560
        ],
        "'BANG": [
          -1,
          560
        ],
        "'LBRACK": [
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
        "'NAME": [
          -1,
          562
        ],
        "'PARENNOSPACE": [
          -1,
          562
        ],
        "'STRING": [
          -1,
          562
        ],
        "'LBRACE": [
          -1,
          562
        ],
        "'RBRACE": [
          -1,
          562
        ],
        "'SPY": [
          -1,
          562
        ],
        "'PARENSPACE": [
          -1,
          562
        ],
        "'INT": [
          -1,
          562
        ],
        "'LONG": [
          -1,
          562
        ],
        "'DOUBLE": [
          -1,
          562
        ],
        "'FLOAT": [
          -1,
          562
        ],
        "'BOOLEAN": [
          -1,
          562
        ],
        "'VOID": [
          -1,
          562
        ],
        "'DATA": [
          -1,
          562
        ],
        "'IF": [
          -1,
          562
        ],
        "'FOR": [
          -1,
          562
        ],
        "'RETURN": [
          -1,
          562
        ],
        "'VAR": [
          -1,
          562
        ],
        "'REC": [
          -1,
          562
        ],
        "'ATCHECK": [
          -1,
          562
        ],
        "'ASSERTEQUALS": [
          -1,
          562
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          562
        ],
        "'ASSERTTRUE": [
          -1,
          562
        ],
        "'ASSERTFALSE": [
          -1,
          562
        ],
        "'ASSERTSATISFIES": [
          -1,
          562
        ],
        "'ASSERTRAISES": [
          -1,
          562
        ],
        "'SWITCH": [
          -1,
          562
        ],
        "'YIELD": [
          -1,
          562
        ],
        "'DASH": [
          -1,
          562
        ],
        "'BANG": [
          -1,
          562
        ],
        "'LBRACK": [
          -1,
          562
        ],
        "'NUMBER": [
          -1,
          562
        ],
        "'TRUE": [
          -1,
          562
        ],
        "'FALSE": [
          -1,
          562
        ],
        "'NULL": [
          -1,
          562
        ],
        "'PARENAFTERBRACE": [
          -1,
          562
        ],
        "'TABLE": [
          -1,
          562
        ],
        "'ASK": [
          -1,
          562
        ],
        "'NEW": [
          -1,
          562
        ]
      },
      {
        "'NAME": [
          -1,
          564
        ],
        "'PARENNOSPACE": [
          -1,
          564
        ],
        "'STRING": [
          -1,
          564
        ],
        "'LBRACE": [
          -1,
          564
        ],
        "'RBRACE": [
          -1,
          564
        ],
        "'SPY": [
          -1,
          564
        ],
        "'PARENSPACE": [
          -1,
          564
        ],
        "'INT": [
          -1,
          564
        ],
        "'LONG": [
          -1,
          564
        ],
        "'DOUBLE": [
          -1,
          564
        ],
        "'FLOAT": [
          -1,
          564
        ],
        "'BOOLEAN": [
          -1,
          564
        ],
        "'VOID": [
          -1,
          564
        ],
        "'DATA": [
          -1,
          564
        ],
        "'IF": [
          -1,
          564
        ],
        "'FOR": [
          -1,
          564
        ],
        "'RETURN": [
          -1,
          564
        ],
        "'VAR": [
          -1,
          564
        ],
        "'REC": [
          -1,
          564
        ],
        "'ATCHECK": [
          -1,
          564
        ],
        "'ASSERTEQUALS": [
          -1,
          564
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          564
        ],
        "'ASSERTTRUE": [
          -1,
          564
        ],
        "'ASSERTFALSE": [
          -1,
          564
        ],
        "'ASSERTSATISFIES": [
          -1,
          564
        ],
        "'ASSERTRAISES": [
          -1,
          564
        ],
        "'SWITCH": [
          -1,
          564
        ],
        "'YIELD": [
          -1,
          564
        ],
        "'DASH": [
          -1,
          564
        ],
        "'BANG": [
          -1,
          564
        ],
        "'LBRACK": [
          -1,
          564
        ],
        "'NUMBER": [
          -1,
          564
        ],
        "'TRUE": [
          -1,
          564
        ],
        "'FALSE": [
          -1,
          564
        ],
        "'NULL": [
          -1,
          564
        ],
        "'PARENAFTERBRACE": [
          -1,
          564
        ],
        "'TABLE": [
          -1,
          564
        ],
        "'ASK": [
          -1,
          564
        ],
        "'NEW": [
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
        "'REC": [
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
        "$": [
          -1,
          568
        ],
        "'NAME": [
          -1,
          568
        ],
        "'SEMI": [
          -1,
          568
        ],
        "'PARENNOSPACE": [
          -1,
          568
        ],
        "'STRING": [
          -1,
          568
        ],
        "'RPAREN": [
          -1,
          568
        ],
        "'LBRACE": [
          -1,
          568
        ],
        "'RBRACE": [
          -1,
          568
        ],
        "'SPY": [
          -1,
          568
        ],
        "'PARENSPACE": [
          -1,
          568
        ],
        "'COMMA": [
          -1,
          568
        ],
        "'INT": [
          -1,
          568
        ],
        "'LONG": [
          -1,
          568
        ],
        "'DOUBLE": [
          -1,
          568
        ],
        "'FLOAT": [
          -1,
          568
        ],
        "'BOOLEAN": [
          -1,
          568
        ],
        "'VOID": [
          -1,
          568
        ],
        "'LT": [
          -1,
          568
        ],
        "'GT": [
          -1,
          568
        ],
        "'THINARROW": [
          -1,
          568
        ],
        "'DATA": [
          -1,
          568
        ],
        "'IF": [
          -1,
          568
        ],
        "'FOR": [
          -1,
          568
        ],
        "'RETURN": [
          -1,
          568
        ],
        "'VAR": [
          -1,
          568
        ],
        "'REC": [
          -1,
          568
        ],
        "'ATCHECK": [
          -1,
          568
        ],
        "'ASSERTEQUALS": [
          -1,
          568
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          568
        ],
        "'ASSERTTRUE": [
          -1,
          568
        ],
        "'ASSERTFALSE": [
          -1,
          568
        ],
        "'ASSERTSATISFIES": [
          -1,
          568
        ],
        "'ASSERTRAISES": [
          -1,
          568
        ],
        "'IS": [
          -1,
          568
        ],
        "'ISNOT": [
          -1,
          568
        ],
        "'SATISFIES": [
          -1,
          568
        ],
        "'RAISES": [
          -1,
          568
        ],
        "'SWITCH": [
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
        ],
        "'YIELD": [
          -1,
          568
        ],
        "'PLUS": [
          -1,
          568
        ],
        "'DASH": [
          -1,
          568
        ],
        "'TIMES": [
          -1,
          568
        ],
        "'SLASH": [
          -1,
          568
        ],
        "'PERCENT": [
          -1,
          568
        ],
        "'EQUALEQUAL": [
          -1,
          568
        ],
        "'NEQ": [
          -1,
          568
        ],
        "'LEQ": [
          -1,
          568
        ],
        "'GEQ": [
          -1,
          568
        ],
        "'AND": [
          -1,
          568
        ],
        "'OR": [
          -1,
          568
        ],
        "'BANG": [
          -1,
          568
        ],
        "'DOT": [
          -1,
          568
        ],
        "'LBRACK": [
          -1,
          568
        ],
        "'RBRACK": [
          -1,
          568
        ],
        "'NUMBER": [
          -1,
          568
        ],
        "'TRUE": [
          -1,
          568
        ],
        "'FALSE": [
          -1,
          568
        ],
        "'NULL": [
          -1,
          568
        ],
        "'PARENAFTERBRACE": [
          -1,
          568
        ],
        "'TABLE": [
          -1,
          568
        ],
        "'ASK": [
          -1,
          568
        ],
        "'NEW": [
          -1,
          568
        ]
      },
      {
        "'PARENNOSPACE": [
          449
        ],
        "'COLON": [
          450
        ]
      },
      {
        "switch-body": [
          451
        ],
        "switch-body_I0*": [
          452
        ],
        "'NAME": [
          -1,
          570
        ],
        "'PARENNOSPACE": [
          -1,
          570
        ],
        "'STRING": [
          -1,
          570
        ],
        "'LBRACE": [
          -1,
          570
        ],
        "'SPY": [
          -1,
          570
        ],
        "'PARENSPACE": [
          -1,
          570
        ],
        "'INT": [
          -1,
          570
        ],
        "'LONG": [
          -1,
          570
        ],
        "'DOUBLE": [
          -1,
          570
        ],
        "'FLOAT": [
          -1,
          570
        ],
        "'BOOLEAN": [
          -1,
          570
        ],
        "'VOID": [
          -1,
          570
        ],
        "'DATA": [
          -1,
          570
        ],
        "'IF": [
          -1,
          570
        ],
        "'FOR": [
          -1,
          570
        ],
        "'RETURN": [
          -1,
          570
        ],
        "'VAR": [
          -1,
          570
        ],
        "'REC": [
          -1,
          570
        ],
        "'ATCHECK": [
          -1,
          570
        ],
        "'SWITCH": [
          -1,
          570
        ],
        "'YIELD": [
          -1,
          570
        ],
        "'DASH": [
          -1,
          570
        ],
        "'BANG": [
          -1,
          570
        ],
        "'LBRACK": [
          -1,
          570
        ],
        "'NUMBER": [
          -1,
          570
        ],
        "'TRUE": [
          -1,
          570
        ],
        "'FALSE": [
          -1,
          570
        ],
        "'NULL": [
          -1,
          570
        ],
        "'PARENAFTERBRACE": [
          -1,
          570
        ],
        "'TABLE": [
          -1,
          570
        ],
        "'ASK": [
          -1,
          570
        ],
        "'NEW": [
          -1,
          570
        ]
      },
      {
        "block": [
          453
        ],
        "'LBRACE": [
          302
        ]
      },
      {
        "'RBRACE": [
          -1,
          572
        ],
        "'ROW": [
          -1,
          572
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          454
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "$": [
          -1,
          574
        ],
        "'NAME": [
          -1,
          574
        ],
        "'SEMI": [
          -1,
          574
        ],
        "'PARENNOSPACE": [
          -1,
          574
        ],
        "'STRING": [
          -1,
          574
        ],
        "'RPAREN": [
          -1,
          574
        ],
        "'LBRACE": [
          -1,
          574
        ],
        "'RBRACE": [
          -1,
          574
        ],
        "'SPY": [
          -1,
          574
        ],
        "'PARENSPACE": [
          -1,
          574
        ],
        "'COMMA": [
          -1,
          574
        ],
        "'INT": [
          -1,
          574
        ],
        "'LONG": [
          -1,
          574
        ],
        "'DOUBLE": [
          -1,
          574
        ],
        "'FLOAT": [
          -1,
          574
        ],
        "'BOOLEAN": [
          -1,
          574
        ],
        "'VOID": [
          -1,
          574
        ],
        "'LT": [
          -1,
          574
        ],
        "'GT": [
          -1,
          574
        ],
        "'THINARROW": [
          -1,
          574
        ],
        "'DATA": [
          -1,
          574
        ],
        "'IF": [
          -1,
          574
        ],
        "'FOR": [
          -1,
          574
        ],
        "'RETURN": [
          -1,
          574
        ],
        "'VAR": [
          -1,
          574
        ],
        "'REC": [
          -1,
          574
        ],
        "'ATCHECK": [
          -1,
          574
        ],
        "'ASSERTEQUALS": [
          -1,
          574
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          574
        ],
        "'ASSERTTRUE": [
          -1,
          574
        ],
        "'ASSERTFALSE": [
          -1,
          574
        ],
        "'ASSERTSATISFIES": [
          -1,
          574
        ],
        "'ASSERTRAISES": [
          -1,
          574
        ],
        "'IS": [
          -1,
          574
        ],
        "'ISNOT": [
          -1,
          574
        ],
        "'SATISFIES": [
          -1,
          574
        ],
        "'RAISES": [
          -1,
          574
        ],
        "'SWITCH": [
          -1,
          574
        ],
        "'CASE": [
          -1,
          574
        ],
        "'DEFAULT": [
          -1,
          574
        ],
        "'YIELD": [
          -1,
          574
        ],
        "'PLUS": [
          -1,
          574
        ],
        "'DASH": [
          -1,
          574
        ],
        "'TIMES": [
          -1,
          574
        ],
        "'SLASH": [
          -1,
          574
        ],
        "'PERCENT": [
          -1,
          574
        ],
        "'EQUALEQUAL": [
          -1,
          574
        ],
        "'NEQ": [
          -1,
          574
        ],
        "'LEQ": [
          -1,
          574
        ],
        "'GEQ": [
          -1,
          574
        ],
        "'AND": [
          -1,
          574
        ],
        "'OR": [
          -1,
          574
        ],
        "'BANG": [
          -1,
          574
        ],
        "'DOT": [
          -1,
          574
        ],
        "'LBRACK": [
          -1,
          574
        ],
        "'RBRACK": [
          -1,
          574
        ],
        "'NUMBER": [
          -1,
          574
        ],
        "'TRUE": [
          -1,
          574
        ],
        "'FALSE": [
          -1,
          574
        ],
        "'NULL": [
          -1,
          574
        ],
        "'PARENAFTERBRACE": [
          -1,
          574
        ],
        "'TABLE": [
          -1,
          574
        ],
        "'ASK": [
          -1,
          574
        ],
        "'NEW": [
          -1,
          574
        ]
      },
      {
        "'SEMI": [
          -1,
          576
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
          196
        ],
        "data-decl": [
          197
        ],
        "check-block": [
          198
        ],
        "let-stmt": [
          199
        ],
        "var-stmt": [
          200
        ],
        "rec-stmt": [
          201
        ],
        "assign-stmt": [
          202
        ],
        "expr-stmt": [
          203
        ],
        "'LBRACE": [
          23
        ],
        "'RBRACE": [
          455
        ],
        "block-stmt": [
          456
        ],
        "if-stmt": [
          206
        ],
        "for-stmt": [
          207
        ],
        "return-stmt": [
          208
        ],
        "yield-stmt": [
          209
        ],
        "spy-stmt": [
          210
        ],
        "'SPY": [
          211
        ],
        "'PARENSPACE": [
          24
        ],
        "type-ann": [
          25
        ],
        "where-clause_I2": [
          457
        ],
        "assert-stmt": [
          458
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
          213
        ],
        "full-expr": [
          214
        ],
        "'FOR": [
          215
        ],
        "'RETURN": [
          216
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
          218
        ],
        "'ASSERTNOTEQUALS": [
          219
        ],
        "'ASSERTTRUE": [
          220
        ],
        "'ASSERTFALSE": [
          221
        ],
        "'ASSERTSATISFIES": [
          222
        ],
        "'ASSERTRAISES": [
          223
        ],
        "switch-expr": [
          37
        ],
        "'SWITCH": [
          38
        ],
        "'YIELD": [
          224
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'RPAREN": [
          -1,
          578
        ],
        "'COMMA": [
          -1,
          578
        ]
      },
      {
        "'NAME": [
          -1,
          580
        ],
        "'PARENNOSPACE": [
          -1,
          580
        ],
        "'STRING": [
          -1,
          580
        ],
        "'LBRACE": [
          -1,
          580
        ],
        "'RBRACE": [
          -1,
          580
        ],
        "'SPY": [
          -1,
          580
        ],
        "'PARENSPACE": [
          -1,
          580
        ],
        "'INT": [
          -1,
          580
        ],
        "'LONG": [
          -1,
          580
        ],
        "'DOUBLE": [
          -1,
          580
        ],
        "'FLOAT": [
          -1,
          580
        ],
        "'BOOLEAN": [
          -1,
          580
        ],
        "'VOID": [
          -1,
          580
        ],
        "'DATA": [
          -1,
          580
        ],
        "'IF": [
          -1,
          580
        ],
        "'FOR": [
          -1,
          580
        ],
        "'RETURN": [
          -1,
          580
        ],
        "'VAR": [
          -1,
          580
        ],
        "'REC": [
          -1,
          580
        ],
        "'ATCHECK": [
          -1,
          580
        ],
        "'ASSERTEQUALS": [
          -1,
          580
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          580
        ],
        "'ASSERTTRUE": [
          -1,
          580
        ],
        "'ASSERTFALSE": [
          -1,
          580
        ],
        "'ASSERTSATISFIES": [
          -1,
          580
        ],
        "'ASSERTRAISES": [
          -1,
          580
        ],
        "'SWITCH": [
          -1,
          580
        ],
        "'YIELD": [
          -1,
          580
        ],
        "'DASH": [
          -1,
          580
        ],
        "'BANG": [
          -1,
          580
        ],
        "'LBRACK": [
          -1,
          580
        ],
        "'NUMBER": [
          -1,
          580
        ],
        "'TRUE": [
          -1,
          580
        ],
        "'FALSE": [
          -1,
          580
        ],
        "'NULL": [
          -1,
          580
        ],
        "'PARENAFTERBRACE": [
          -1,
          580
        ],
        "'TABLE": [
          -1,
          580
        ],
        "'ASK": [
          -1,
          580
        ],
        "'NEW": [
          -1,
          580
        ]
      },
      {
        "'RPAREN": [
          -1,
          582
        ],
        "'COMMA": [
          -1,
          582
        ]
      },
      {
        "if-stmt_I6?": [
          459
        ],
        "if-stmt_I5": [
          460
        ],
        "'ELSE": [
          461
        ],
        "if-stmt_I6": [
          462
        ],
        "'NAME": [
          -1,
          584,
          586
        ],
        "'PARENNOSPACE": [
          -1,
          584,
          586
        ],
        "'STRING": [
          -1,
          584,
          586
        ],
        "'LBRACE": [
          -1,
          584,
          586
        ],
        "'RBRACE": [
          -1,
          584,
          586
        ],
        "'SPY": [
          -1,
          584,
          586
        ],
        "'PARENSPACE": [
          -1,
          584,
          586
        ],
        "'INT": [
          -1,
          584,
          586
        ],
        "'LONG": [
          -1,
          584,
          586
        ],
        "'DOUBLE": [
          -1,
          584,
          586
        ],
        "'FLOAT": [
          -1,
          584,
          586
        ],
        "'BOOLEAN": [
          -1,
          584,
          586
        ],
        "'VOID": [
          -1,
          584,
          586
        ],
        "'DATA": [
          -1,
          584,
          586
        ],
        "'IF": [
          -1,
          584,
          586
        ],
        "'FOR": [
          -1,
          584,
          586
        ],
        "'RETURN": [
          -1,
          584,
          586
        ],
        "'VAR": [
          -1,
          584,
          586
        ],
        "'REC": [
          -1,
          584,
          586
        ],
        "'ATCHECK": [
          -1,
          584,
          586
        ],
        "'ASSERTEQUALS": [
          -1,
          584,
          586
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          584,
          586
        ],
        "'ASSERTTRUE": [
          -1,
          584,
          586
        ],
        "'ASSERTFALSE": [
          -1,
          584,
          586
        ],
        "'ASSERTSATISFIES": [
          -1,
          584,
          586
        ],
        "'ASSERTRAISES": [
          -1,
          584,
          586
        ],
        "'SWITCH": [
          -1,
          584,
          586
        ],
        "'YIELD": [
          -1,
          584,
          586
        ],
        "'DASH": [
          -1,
          584,
          586
        ],
        "'BANG": [
          -1,
          584,
          586
        ],
        "'LBRACK": [
          -1,
          584,
          586
        ],
        "'NUMBER": [
          -1,
          584,
          586
        ],
        "'TRUE": [
          -1,
          584,
          586
        ],
        "'FALSE": [
          -1,
          584,
          586
        ],
        "'NULL": [
          -1,
          584,
          586
        ],
        "'PARENAFTERBRACE": [
          -1,
          584,
          586
        ],
        "'TABLE": [
          -1,
          584,
          586
        ],
        "'ASK": [
          -1,
          584,
          586
        ],
        "'NEW": [
          -1,
          584,
          586
        ]
      },
      {
        "'RPAREN": [
          463
        ]
      },
      {
        "'SEMI": [
          464
        ],
        "assert-stmt_A0_I6?": [
          465
        ],
        "assert-stmt_A0_I6": [
          466
        ],
        "'NAME": [
          -1,
          588,
          590
        ],
        "'PARENNOSPACE": [
          -1,
          588,
          590
        ],
        "'STRING": [
          -1,
          588,
          590
        ],
        "'LBRACE": [
          -1,
          588,
          590
        ],
        "'RBRACE": [
          -1,
          588,
          590
        ],
        "'SPY": [
          -1,
          588,
          590
        ],
        "'PARENSPACE": [
          -1,
          588,
          590
        ],
        "'INT": [
          -1,
          588,
          590
        ],
        "'LONG": [
          -1,
          588,
          590
        ],
        "'DOUBLE": [
          -1,
          588,
          590
        ],
        "'FLOAT": [
          -1,
          588,
          590
        ],
        "'BOOLEAN": [
          -1,
          588,
          590
        ],
        "'VOID": [
          -1,
          588,
          590
        ],
        "'DATA": [
          -1,
          588,
          590
        ],
        "'IF": [
          -1,
          588,
          590
        ],
        "'FOR": [
          -1,
          588,
          590
        ],
        "'RETURN": [
          -1,
          588,
          590
        ],
        "'VAR": [
          -1,
          588,
          590
        ],
        "'REC": [
          -1,
          588,
          590
        ],
        "'ATCHECK": [
          -1,
          588,
          590
        ],
        "'ASSERTEQUALS": [
          -1,
          588,
          590
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          588,
          590
        ],
        "'ASSERTTRUE": [
          -1,
          588,
          590
        ],
        "'ASSERTFALSE": [
          -1,
          588,
          590
        ],
        "'ASSERTSATISFIES": [
          -1,
          588,
          590
        ],
        "'ASSERTRAISES": [
          -1,
          588,
          590
        ],
        "'SWITCH": [
          -1,
          588,
          590
        ],
        "'YIELD": [
          -1,
          588,
          590
        ],
        "'DASH": [
          -1,
          588,
          590
        ],
        "'BANG": [
          -1,
          588,
          590
        ],
        "'LBRACK": [
          -1,
          588,
          590
        ],
        "'NUMBER": [
          -1,
          588,
          590
        ],
        "'TRUE": [
          -1,
          588,
          590
        ],
        "'FALSE": [
          -1,
          588,
          590
        ],
        "'NULL": [
          -1,
          588,
          590
        ],
        "'PARENAFTERBRACE": [
          -1,
          588,
          590
        ],
        "'TABLE": [
          -1,
          588,
          590
        ],
        "'ASK": [
          -1,
          588,
          590
        ],
        "'NEW": [
          -1,
          588,
          590
        ]
      },
      {
        "'SEMI": [
          467
        ],
        "assert-stmt_A1_I6?": [
          468
        ],
        "assert-stmt_A1_I6": [
          469
        ],
        "'NAME": [
          -1,
          592,
          594
        ],
        "'PARENNOSPACE": [
          -1,
          592,
          594
        ],
        "'STRING": [
          -1,
          592,
          594
        ],
        "'LBRACE": [
          -1,
          592,
          594
        ],
        "'RBRACE": [
          -1,
          592,
          594
        ],
        "'SPY": [
          -1,
          592,
          594
        ],
        "'PARENSPACE": [
          -1,
          592,
          594
        ],
        "'INT": [
          -1,
          592,
          594
        ],
        "'LONG": [
          -1,
          592,
          594
        ],
        "'DOUBLE": [
          -1,
          592,
          594
        ],
        "'FLOAT": [
          -1,
          592,
          594
        ],
        "'BOOLEAN": [
          -1,
          592,
          594
        ],
        "'VOID": [
          -1,
          592,
          594
        ],
        "'DATA": [
          -1,
          592,
          594
        ],
        "'IF": [
          -1,
          592,
          594
        ],
        "'FOR": [
          -1,
          592,
          594
        ],
        "'RETURN": [
          -1,
          592,
          594
        ],
        "'VAR": [
          -1,
          592,
          594
        ],
        "'REC": [
          -1,
          592,
          594
        ],
        "'ATCHECK": [
          -1,
          592,
          594
        ],
        "'ASSERTEQUALS": [
          -1,
          592,
          594
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          592,
          594
        ],
        "'ASSERTTRUE": [
          -1,
          592,
          594
        ],
        "'ASSERTFALSE": [
          -1,
          592,
          594
        ],
        "'ASSERTSATISFIES": [
          -1,
          592,
          594
        ],
        "'ASSERTRAISES": [
          -1,
          592,
          594
        ],
        "'SWITCH": [
          -1,
          592,
          594
        ],
        "'YIELD": [
          -1,
          592,
          594
        ],
        "'DASH": [
          -1,
          592,
          594
        ],
        "'BANG": [
          -1,
          592,
          594
        ],
        "'LBRACK": [
          -1,
          592,
          594
        ],
        "'NUMBER": [
          -1,
          592,
          594
        ],
        "'TRUE": [
          -1,
          592,
          594
        ],
        "'FALSE": [
          -1,
          592,
          594
        ],
        "'NULL": [
          -1,
          592,
          594
        ],
        "'PARENAFTERBRACE": [
          -1,
          592,
          594
        ],
        "'TABLE": [
          -1,
          592,
          594
        ],
        "'ASK": [
          -1,
          592,
          594
        ],
        "'NEW": [
          -1,
          592,
          594
        ]
      },
      {
        "'SEMI": [
          470
        ],
        "assert-stmt_A4_I6?": [
          471
        ],
        "assert-stmt_A4_I6": [
          472
        ],
        "'NAME": [
          -1,
          596,
          598
        ],
        "'PARENNOSPACE": [
          -1,
          596,
          598
        ],
        "'STRING": [
          -1,
          596,
          598
        ],
        "'LBRACE": [
          -1,
          596,
          598
        ],
        "'RBRACE": [
          -1,
          596,
          598
        ],
        "'SPY": [
          -1,
          596,
          598
        ],
        "'PARENSPACE": [
          -1,
          596,
          598
        ],
        "'INT": [
          -1,
          596,
          598
        ],
        "'LONG": [
          -1,
          596,
          598
        ],
        "'DOUBLE": [
          -1,
          596,
          598
        ],
        "'FLOAT": [
          -1,
          596,
          598
        ],
        "'BOOLEAN": [
          -1,
          596,
          598
        ],
        "'VOID": [
          -1,
          596,
          598
        ],
        "'DATA": [
          -1,
          596,
          598
        ],
        "'IF": [
          -1,
          596,
          598
        ],
        "'FOR": [
          -1,
          596,
          598
        ],
        "'RETURN": [
          -1,
          596,
          598
        ],
        "'VAR": [
          -1,
          596,
          598
        ],
        "'REC": [
          -1,
          596,
          598
        ],
        "'ATCHECK": [
          -1,
          596,
          598
        ],
        "'ASSERTEQUALS": [
          -1,
          596,
          598
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          596,
          598
        ],
        "'ASSERTTRUE": [
          -1,
          596,
          598
        ],
        "'ASSERTFALSE": [
          -1,
          596,
          598
        ],
        "'ASSERTSATISFIES": [
          -1,
          596,
          598
        ],
        "'ASSERTRAISES": [
          -1,
          596,
          598
        ],
        "'SWITCH": [
          -1,
          596,
          598
        ],
        "'YIELD": [
          -1,
          596,
          598
        ],
        "'DASH": [
          -1,
          596,
          598
        ],
        "'BANG": [
          -1,
          596,
          598
        ],
        "'LBRACK": [
          -1,
          596,
          598
        ],
        "'NUMBER": [
          -1,
          596,
          598
        ],
        "'TRUE": [
          -1,
          596,
          598
        ],
        "'FALSE": [
          -1,
          596,
          598
        ],
        "'NULL": [
          -1,
          596,
          598
        ],
        "'PARENAFTERBRACE": [
          -1,
          596,
          598
        ],
        "'TABLE": [
          -1,
          596,
          598
        ],
        "'ASK": [
          -1,
          596,
          598
        ],
        "'NEW": [
          -1,
          596,
          598
        ]
      },
      {
        "'SEMI": [
          473
        ],
        "assert-stmt_A5_I6?": [
          474
        ],
        "assert-stmt_A5_I6": [
          475
        ],
        "'NAME": [
          -1,
          600,
          602
        ],
        "'PARENNOSPACE": [
          -1,
          600,
          602
        ],
        "'STRING": [
          -1,
          600,
          602
        ],
        "'LBRACE": [
          -1,
          600,
          602
        ],
        "'RBRACE": [
          -1,
          600,
          602
        ],
        "'SPY": [
          -1,
          600,
          602
        ],
        "'PARENSPACE": [
          -1,
          600,
          602
        ],
        "'INT": [
          -1,
          600,
          602
        ],
        "'LONG": [
          -1,
          600,
          602
        ],
        "'DOUBLE": [
          -1,
          600,
          602
        ],
        "'FLOAT": [
          -1,
          600,
          602
        ],
        "'BOOLEAN": [
          -1,
          600,
          602
        ],
        "'VOID": [
          -1,
          600,
          602
        ],
        "'DATA": [
          -1,
          600,
          602
        ],
        "'IF": [
          -1,
          600,
          602
        ],
        "'FOR": [
          -1,
          600,
          602
        ],
        "'RETURN": [
          -1,
          600,
          602
        ],
        "'VAR": [
          -1,
          600,
          602
        ],
        "'REC": [
          -1,
          600,
          602
        ],
        "'ATCHECK": [
          -1,
          600,
          602
        ],
        "'ASSERTEQUALS": [
          -1,
          600,
          602
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          600,
          602
        ],
        "'ASSERTTRUE": [
          -1,
          600,
          602
        ],
        "'ASSERTFALSE": [
          -1,
          600,
          602
        ],
        "'ASSERTSATISFIES": [
          -1,
          600,
          602
        ],
        "'ASSERTRAISES": [
          -1,
          600,
          602
        ],
        "'SWITCH": [
          -1,
          600,
          602
        ],
        "'YIELD": [
          -1,
          600,
          602
        ],
        "'DASH": [
          -1,
          600,
          602
        ],
        "'BANG": [
          -1,
          600,
          602
        ],
        "'LBRACK": [
          -1,
          600,
          602
        ],
        "'NUMBER": [
          -1,
          600,
          602
        ],
        "'TRUE": [
          -1,
          600,
          602
        ],
        "'FALSE": [
          -1,
          600,
          602
        ],
        "'NULL": [
          -1,
          600,
          602
        ],
        "'PARENAFTERBRACE": [
          -1,
          600,
          602
        ],
        "'TABLE": [
          -1,
          600,
          602
        ],
        "'ASK": [
          -1,
          600,
          602
        ],
        "'NEW": [
          -1,
          600,
          602
        ]
      },
      {
        "'NAME": [
          476
        ],
        "case-branch_A0_I3?": [
          477
        ],
        "case-branch_A0_I3": [
          478
        ],
        "'RPAREN": [
          -1,
          604
        ]
      },
      {
        "switch-body": [
          479
        ],
        "switch-body_I0*": [
          452
        ],
        "'NAME": [
          -1,
          570
        ],
        "'PARENNOSPACE": [
          -1,
          570
        ],
        "'STRING": [
          -1,
          570
        ],
        "'LBRACE": [
          -1,
          570
        ],
        "'SPY": [
          -1,
          570
        ],
        "'PARENSPACE": [
          -1,
          570
        ],
        "'INT": [
          -1,
          570
        ],
        "'LONG": [
          -1,
          570
        ],
        "'DOUBLE": [
          -1,
          570
        ],
        "'FLOAT": [
          -1,
          570
        ],
        "'BOOLEAN": [
          -1,
          570
        ],
        "'VOID": [
          -1,
          570
        ],
        "'DATA": [
          -1,
          570
        ],
        "'IF": [
          -1,
          570
        ],
        "'FOR": [
          -1,
          570
        ],
        "'RETURN": [
          -1,
          570
        ],
        "'VAR": [
          -1,
          570
        ],
        "'REC": [
          -1,
          570
        ],
        "'ATCHECK": [
          -1,
          570
        ],
        "'SWITCH": [
          -1,
          570
        ],
        "'YIELD": [
          -1,
          570
        ],
        "'DASH": [
          -1,
          570
        ],
        "'BANG": [
          -1,
          570
        ],
        "'LBRACK": [
          -1,
          570
        ],
        "'NUMBER": [
          -1,
          570
        ],
        "'TRUE": [
          -1,
          570
        ],
        "'FALSE": [
          -1,
          570
        ],
        "'NULL": [
          -1,
          570
        ],
        "'PARENAFTERBRACE": [
          -1,
          570
        ],
        "'TABLE": [
          -1,
          570
        ],
        "'ASK": [
          -1,
          570
        ],
        "'NEW": [
          -1,
          570
        ]
      },
      {
        "'RBRACE": [
          -1,
          606
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
          196
        ],
        "data-decl": [
          197
        ],
        "check-block": [
          198
        ],
        "let-stmt": [
          199
        ],
        "var-stmt": [
          200
        ],
        "rec-stmt": [
          201
        ],
        "assign-stmt": [
          202
        ],
        "expr-stmt": [
          203
        ],
        "'LBRACE": [
          23
        ],
        "block-stmt": [
          480
        ],
        "if-stmt": [
          206
        ],
        "for-stmt": [
          207
        ],
        "return-stmt": [
          208
        ],
        "yield-stmt": [
          481
        ],
        "spy-stmt": [
          210
        ],
        "'SPY": [
          211
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
          213
        ],
        "full-expr": [
          33
        ],
        "'FOR": [
          215
        ],
        "'RETURN": [
          216
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
          482
        ],
        "'YIELD": [
          224
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'RBRACK": [
          483
        ]
      },
      {
        "table-row_I3*": [
          484
        ],
        "'SEMI": [
          -1,
          608,
          610
        ],
        "'COMMA": [
          -1,
          610
        ]
      },
      {
        "$": [
          -1,
          612
        ],
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
        "'REC": [
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
        "'REC": [
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
        "'ELSE": [
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
        "block": [
          485
        ],
        "'LBRACE": [
          302
        ],
        "'IF": [
          486
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
        "block": [
          487
        ],
        "'LBRACE": [
          302
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
        "'NAME": [
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
        "'SWITCH": [
          -1,
          636
        ],
        "'YIELD": [
          -1,
          636
        ],
        "'DASH": [
          -1,
          636
        ],
        "'BANG": [
          -1,
          636
        ],
        "'LBRACK": [
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
        "'RBRACE": [
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
        "'ASSERTEQUALS": [
          -1,
          638
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          638
        ],
        "'ASSERTTRUE": [
          -1,
          638
        ],
        "'ASSERTFALSE": [
          -1,
          638
        ],
        "'ASSERTSATISFIES": [
          -1,
          638
        ],
        "'ASSERTRAISES": [
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
        "'NAME": [
          -1,
          640
        ],
        "'PARENNOSPACE": [
          -1,
          640
        ],
        "'STRING": [
          -1,
          640
        ],
        "'LBRACE": [
          -1,
          640
        ],
        "'RBRACE": [
          -1,
          640
        ],
        "'SPY": [
          -1,
          640
        ],
        "'PARENSPACE": [
          -1,
          640
        ],
        "'INT": [
          -1,
          640
        ],
        "'LONG": [
          -1,
          640
        ],
        "'DOUBLE": [
          -1,
          640
        ],
        "'FLOAT": [
          -1,
          640
        ],
        "'BOOLEAN": [
          -1,
          640
        ],
        "'VOID": [
          -1,
          640
        ],
        "'DATA": [
          -1,
          640
        ],
        "'IF": [
          -1,
          640
        ],
        "'FOR": [
          -1,
          640
        ],
        "'RETURN": [
          -1,
          640
        ],
        "'VAR": [
          -1,
          640
        ],
        "'REC": [
          -1,
          640
        ],
        "'ATCHECK": [
          -1,
          640
        ],
        "'ASSERTEQUALS": [
          -1,
          640
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          640
        ],
        "'ASSERTTRUE": [
          -1,
          640
        ],
        "'ASSERTFALSE": [
          -1,
          640
        ],
        "'ASSERTSATISFIES": [
          -1,
          640
        ],
        "'ASSERTRAISES": [
          -1,
          640
        ],
        "'SWITCH": [
          -1,
          640
        ],
        "'YIELD": [
          -1,
          640
        ],
        "'DASH": [
          -1,
          640
        ],
        "'BANG": [
          -1,
          640
        ],
        "'LBRACK": [
          -1,
          640
        ],
        "'NUMBER": [
          -1,
          640
        ],
        "'TRUE": [
          -1,
          640
        ],
        "'FALSE": [
          -1,
          640
        ],
        "'NULL": [
          -1,
          640
        ],
        "'PARENAFTERBRACE": [
          -1,
          640
        ],
        "'TABLE": [
          -1,
          640
        ],
        "'ASK": [
          -1,
          640
        ],
        "'NEW": [
          -1,
          640
        ]
      },
      {
        "'NAME": [
          -1,
          642
        ],
        "'PARENNOSPACE": [
          -1,
          642
        ],
        "'STRING": [
          -1,
          642
        ],
        "'LBRACE": [
          -1,
          642
        ],
        "'RBRACE": [
          -1,
          642
        ],
        "'SPY": [
          -1,
          642
        ],
        "'PARENSPACE": [
          -1,
          642
        ],
        "'INT": [
          -1,
          642
        ],
        "'LONG": [
          -1,
          642
        ],
        "'DOUBLE": [
          -1,
          642
        ],
        "'FLOAT": [
          -1,
          642
        ],
        "'BOOLEAN": [
          -1,
          642
        ],
        "'VOID": [
          -1,
          642
        ],
        "'DATA": [
          -1,
          642
        ],
        "'IF": [
          -1,
          642
        ],
        "'FOR": [
          -1,
          642
        ],
        "'RETURN": [
          -1,
          642
        ],
        "'VAR": [
          -1,
          642
        ],
        "'REC": [
          -1,
          642
        ],
        "'ATCHECK": [
          -1,
          642
        ],
        "'ASSERTEQUALS": [
          -1,
          642
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          642
        ],
        "'ASSERTTRUE": [
          -1,
          642
        ],
        "'ASSERTFALSE": [
          -1,
          642
        ],
        "'ASSERTSATISFIES": [
          -1,
          642
        ],
        "'ASSERTRAISES": [
          -1,
          642
        ],
        "'SWITCH": [
          -1,
          642
        ],
        "'YIELD": [
          -1,
          642
        ],
        "'DASH": [
          -1,
          642
        ],
        "'BANG": [
          -1,
          642
        ],
        "'LBRACK": [
          -1,
          642
        ],
        "'NUMBER": [
          -1,
          642
        ],
        "'TRUE": [
          -1,
          642
        ],
        "'FALSE": [
          -1,
          642
        ],
        "'NULL": [
          -1,
          642
        ],
        "'PARENAFTERBRACE": [
          -1,
          642
        ],
        "'TABLE": [
          -1,
          642
        ],
        "'ASK": [
          -1,
          642
        ],
        "'NEW": [
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
        "'RBRACE": [
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
        "'REC": [
          -1,
          644
        ],
        "'ATCHECK": [
          -1,
          644
        ],
        "'ASSERTEQUALS": [
          -1,
          644
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          644
        ],
        "'ASSERTTRUE": [
          -1,
          644
        ],
        "'ASSERTFALSE": [
          -1,
          644
        ],
        "'ASSERTSATISFIES": [
          -1,
          644
        ],
        "'ASSERTRAISES": [
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
        "'SWITCH": [
          -1,
          646
        ],
        "'YIELD": [
          -1,
          646
        ],
        "'DASH": [
          -1,
          646
        ],
        "'BANG": [
          -1,
          646
        ],
        "'LBRACK": [
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
        "'ASSERTEQUALS": [
          -1,
          648
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          648
        ],
        "'ASSERTTRUE": [
          -1,
          648
        ],
        "'ASSERTFALSE": [
          -1,
          648
        ],
        "'ASSERTSATISFIES": [
          -1,
          648
        ],
        "'ASSERTRAISES": [
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
        "case-branch_A0_I3_I1*": [
          488
        ],
        "'RPAREN": [
          -1,
          650,
          652
        ],
        "'COMMA": [
          -1,
          652
        ]
      },
      {
        "'RPAREN": [
          489
        ]
      },
      {
        "'RPAREN": [
          -1,
          654
        ]
      },
      {
        "'RBRACE": [
          -1,
          656
        ],
        "'CASE": [
          -1,
          656
        ],
        "'DEFAULT": [
          -1,
          656
        ]
      },
      {
        "'NAME": [
          -1,
          658
        ],
        "'PARENNOSPACE": [
          -1,
          658
        ],
        "'STRING": [
          -1,
          658
        ],
        "'LBRACE": [
          -1,
          658
        ],
        "'SPY": [
          -1,
          658
        ],
        "'PARENSPACE": [
          -1,
          658
        ],
        "'INT": [
          -1,
          658
        ],
        "'LONG": [
          -1,
          658
        ],
        "'DOUBLE": [
          -1,
          658
        ],
        "'FLOAT": [
          -1,
          658
        ],
        "'BOOLEAN": [
          -1,
          658
        ],
        "'VOID": [
          -1,
          658
        ],
        "'DATA": [
          -1,
          658
        ],
        "'IF": [
          -1,
          658
        ],
        "'FOR": [
          -1,
          658
        ],
        "'RETURN": [
          -1,
          658
        ],
        "'VAR": [
          -1,
          658
        ],
        "'REC": [
          -1,
          658
        ],
        "'ATCHECK": [
          -1,
          658
        ],
        "'SWITCH": [
          -1,
          658
        ],
        "'YIELD": [
          -1,
          658
        ],
        "'DASH": [
          -1,
          658
        ],
        "'BANG": [
          -1,
          658
        ],
        "'LBRACK": [
          -1,
          658
        ],
        "'NUMBER": [
          -1,
          658
        ],
        "'TRUE": [
          -1,
          658
        ],
        "'FALSE": [
          -1,
          658
        ],
        "'NULL": [
          -1,
          658
        ],
        "'PARENAFTERBRACE": [
          -1,
          658
        ],
        "'TABLE": [
          -1,
          658
        ],
        "'ASK": [
          -1,
          658
        ],
        "'NEW": [
          -1,
          658
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
          660
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
        "'SWITCH": [
          -1,
          276
        ],
        "'CASE": [
          -1,
          660
        ],
        "'DEFAULT": [
          -1,
          660
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
        "'NAME": [
          -1,
          662
        ],
        "'PARENNOSPACE": [
          -1,
          662
        ],
        "'STRING": [
          -1,
          662
        ],
        "'LBRACE": [
          -1,
          662
        ],
        "'SPY": [
          -1,
          662
        ],
        "'PARENSPACE": [
          -1,
          662
        ],
        "'INT": [
          -1,
          662
        ],
        "'LONG": [
          -1,
          662
        ],
        "'DOUBLE": [
          -1,
          662
        ],
        "'FLOAT": [
          -1,
          662
        ],
        "'BOOLEAN": [
          -1,
          662
        ],
        "'VOID": [
          -1,
          662
        ],
        "'DATA": [
          -1,
          662
        ],
        "'IF": [
          -1,
          662
        ],
        "'FOR": [
          -1,
          662
        ],
        "'RETURN": [
          -1,
          662
        ],
        "'VAR": [
          -1,
          662
        ],
        "'REC": [
          -1,
          662
        ],
        "'ATCHECK": [
          -1,
          662
        ],
        "'SWITCH": [
          -1,
          662
        ],
        "'YIELD": [
          -1,
          662
        ],
        "'DASH": [
          -1,
          662
        ],
        "'BANG": [
          -1,
          662
        ],
        "'LBRACK": [
          -1,
          662
        ],
        "'NUMBER": [
          -1,
          662
        ],
        "'TRUE": [
          -1,
          662
        ],
        "'FALSE": [
          -1,
          662
        ],
        "'NULL": [
          -1,
          662
        ],
        "'PARENAFTERBRACE": [
          -1,
          662
        ],
        "'TABLE": [
          -1,
          662
        ],
        "'ASK": [
          -1,
          662
        ],
        "'NEW": [
          -1,
          662
        ]
      },
      {
        "$": [
          -1,
          664
        ],
        "'NAME": [
          -1,
          664
        ],
        "'SEMI": [
          -1,
          664
        ],
        "'PARENNOSPACE": [
          -1,
          664
        ],
        "'STRING": [
          -1,
          664
        ],
        "'RPAREN": [
          -1,
          664
        ],
        "'LBRACE": [
          -1,
          664
        ],
        "'RBRACE": [
          -1,
          664
        ],
        "'SPY": [
          -1,
          664
        ],
        "'PARENSPACE": [
          -1,
          664
        ],
        "'COMMA": [
          -1,
          664
        ],
        "'INT": [
          -1,
          664
        ],
        "'LONG": [
          -1,
          664
        ],
        "'DOUBLE": [
          -1,
          664
        ],
        "'FLOAT": [
          -1,
          664
        ],
        "'BOOLEAN": [
          -1,
          664
        ],
        "'VOID": [
          -1,
          664
        ],
        "'LT": [
          -1,
          664
        ],
        "'GT": [
          -1,
          664
        ],
        "'THINARROW": [
          -1,
          664
        ],
        "'DATA": [
          -1,
          664
        ],
        "'IF": [
          -1,
          664
        ],
        "'FOR": [
          -1,
          664
        ],
        "'RETURN": [
          -1,
          664
        ],
        "'VAR": [
          -1,
          664
        ],
        "'REC": [
          -1,
          664
        ],
        "'ATCHECK": [
          -1,
          664
        ],
        "'ASSERTEQUALS": [
          -1,
          664
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          664
        ],
        "'ASSERTTRUE": [
          -1,
          664
        ],
        "'ASSERTFALSE": [
          -1,
          664
        ],
        "'ASSERTSATISFIES": [
          -1,
          664
        ],
        "'ASSERTRAISES": [
          -1,
          664
        ],
        "'IS": [
          -1,
          664
        ],
        "'ISNOT": [
          -1,
          664
        ],
        "'SATISFIES": [
          -1,
          664
        ],
        "'RAISES": [
          -1,
          664
        ],
        "'SWITCH": [
          -1,
          664
        ],
        "'CASE": [
          -1,
          664
        ],
        "'DEFAULT": [
          -1,
          664
        ],
        "'YIELD": [
          -1,
          664
        ],
        "'PLUS": [
          -1,
          664
        ],
        "'DASH": [
          -1,
          664
        ],
        "'TIMES": [
          -1,
          664
        ],
        "'SLASH": [
          -1,
          664
        ],
        "'PERCENT": [
          -1,
          664
        ],
        "'EQUALEQUAL": [
          -1,
          664
        ],
        "'NEQ": [
          -1,
          664
        ],
        "'LEQ": [
          -1,
          664
        ],
        "'GEQ": [
          -1,
          664
        ],
        "'AND": [
          -1,
          664
        ],
        "'OR": [
          -1,
          664
        ],
        "'BANG": [
          -1,
          664
        ],
        "'DOT": [
          -1,
          664
        ],
        "'LBRACK": [
          -1,
          664
        ],
        "'RBRACK": [
          -1,
          664
        ],
        "'NUMBER": [
          -1,
          664
        ],
        "'TRUE": [
          -1,
          664
        ],
        "'FALSE": [
          -1,
          664
        ],
        "'NULL": [
          -1,
          664
        ],
        "'PARENAFTERBRACE": [
          -1,
          664
        ],
        "'TABLE": [
          -1,
          664
        ],
        "'ASK": [
          -1,
          664
        ],
        "'NEW": [
          -1,
          664
        ]
      },
      {
        "'COMMA": [
          490
        ],
        "table-row_I3": [
          491
        ],
        "'SEMI": [
          -1,
          666
        ]
      },
      {
        "'NAME": [
          -1,
          668
        ],
        "'PARENNOSPACE": [
          -1,
          668
        ],
        "'STRING": [
          -1,
          668
        ],
        "'LBRACE": [
          -1,
          668
        ],
        "'RBRACE": [
          -1,
          668
        ],
        "'SPY": [
          -1,
          668
        ],
        "'PARENSPACE": [
          -1,
          668
        ],
        "'INT": [
          -1,
          668
        ],
        "'LONG": [
          -1,
          668
        ],
        "'DOUBLE": [
          -1,
          668
        ],
        "'FLOAT": [
          -1,
          668
        ],
        "'BOOLEAN": [
          -1,
          668
        ],
        "'VOID": [
          -1,
          668
        ],
        "'DATA": [
          -1,
          668
        ],
        "'IF": [
          -1,
          668
        ],
        "'FOR": [
          -1,
          668
        ],
        "'RETURN": [
          -1,
          668
        ],
        "'VAR": [
          -1,
          668
        ],
        "'REC": [
          -1,
          668
        ],
        "'ATCHECK": [
          -1,
          668
        ],
        "'ASSERTEQUALS": [
          -1,
          668
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          668
        ],
        "'ASSERTTRUE": [
          -1,
          668
        ],
        "'ASSERTFALSE": [
          -1,
          668
        ],
        "'ASSERTSATISFIES": [
          -1,
          668
        ],
        "'ASSERTRAISES": [
          -1,
          668
        ],
        "'SWITCH": [
          -1,
          668
        ],
        "'YIELD": [
          -1,
          668
        ],
        "'DASH": [
          -1,
          668
        ],
        "'BANG": [
          -1,
          668
        ],
        "'LBRACK": [
          -1,
          668
        ],
        "'NUMBER": [
          -1,
          668
        ],
        "'TRUE": [
          -1,
          668
        ],
        "'FALSE": [
          -1,
          668
        ],
        "'NULL": [
          -1,
          668
        ],
        "'PARENAFTERBRACE": [
          -1,
          668
        ],
        "'TABLE": [
          -1,
          668
        ],
        "'ASK": [
          -1,
          668
        ],
        "'NEW": [
          -1,
          668
        ]
      },
      {
        "'PARENSPACE": [
          492
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
        "'REC": [
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
      },
      {
        "'COMMA": [
          493
        ],
        "case-branch_A0_I3_I1": [
          494
        ],
        "'RPAREN": [
          -1,
          672
        ]
      },
      {
        "'COLON": [
          495
        ]
      },
      {
        "'NAME": [
          96
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
          106
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'SEMI": [
          -1,
          674
        ],
        "'COMMA": [
          -1,
          674
        ]
      },
      {
        "'NAME": [
          96
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
          106
        ],
        "full-expr": [
          497
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
        "'TABLE": [
          58
        ],
        "'ASK": [
          59
        ],
        "'NEW": [
          60
        ]
      },
      {
        "'NAME": [
          498
        ]
      },
      {
        "'RPAREN": [
          -1,
          676
        ],
        "'COMMA": [
          -1,
          676
        ]
      },
      {
        "switch-body": [
          499
        ],
        "switch-body_I0*": [
          452
        ],
        "'NAME": [
          -1,
          570
        ],
        "'PARENNOSPACE": [
          -1,
          570
        ],
        "'STRING": [
          -1,
          570
        ],
        "'LBRACE": [
          -1,
          570
        ],
        "'SPY": [
          -1,
          570
        ],
        "'PARENSPACE": [
          -1,
          570
        ],
        "'INT": [
          -1,
          570
        ],
        "'LONG": [
          -1,
          570
        ],
        "'DOUBLE": [
          -1,
          570
        ],
        "'FLOAT": [
          -1,
          570
        ],
        "'BOOLEAN": [
          -1,
          570
        ],
        "'VOID": [
          -1,
          570
        ],
        "'DATA": [
          -1,
          570
        ],
        "'IF": [
          -1,
          570
        ],
        "'FOR": [
          -1,
          570
        ],
        "'RETURN": [
          -1,
          570
        ],
        "'VAR": [
          -1,
          570
        ],
        "'REC": [
          -1,
          570
        ],
        "'ATCHECK": [
          -1,
          570
        ],
        "'SWITCH": [
          -1,
          570
        ],
        "'YIELD": [
          -1,
          570
        ],
        "'DASH": [
          -1,
          570
        ],
        "'BANG": [
          -1,
          570
        ],
        "'LBRACK": [
          -1,
          570
        ],
        "'NUMBER": [
          -1,
          570
        ],
        "'TRUE": [
          -1,
          570
        ],
        "'FALSE": [
          -1,
          570
        ],
        "'NULL": [
          -1,
          570
        ],
        "'PARENAFTERBRACE": [
          -1,
          570
        ],
        "'TABLE": [
          -1,
          570
        ],
        "'ASK": [
          -1,
          570
        ],
        "'NEW": [
          -1,
          570
        ]
      },
      {
        "'SEMI": [
          -1,
          678
        ],
        "'COMMA": [
          -1,
          678
        ]
      },
      {
        "'RPAREN": [
          500
        ]
      },
      {
        "'RPAREN": [
          -1,
          680
        ],
        "'COMMA": [
          -1,
          680
        ]
      },
      {
        "'RBRACE": [
          -1,
          682
        ],
        "'CASE": [
          -1,
          682
        ],
        "'DEFAULT": [
          -1,
          682
        ]
      },
      {
        "block": [
          501
        ],
        "'LBRACE": [
          302
        ]
      },
      {
        "'NAME": [
          -1,
          684
        ],
        "'PARENNOSPACE": [
          -1,
          684
        ],
        "'STRING": [
          -1,
          684
        ],
        "'LBRACE": [
          -1,
          684
        ],
        "'RBRACE": [
          -1,
          684
        ],
        "'SPY": [
          -1,
          684
        ],
        "'PARENSPACE": [
          -1,
          684
        ],
        "'INT": [
          -1,
          684
        ],
        "'LONG": [
          -1,
          684
        ],
        "'DOUBLE": [
          -1,
          684
        ],
        "'FLOAT": [
          -1,
          684
        ],
        "'BOOLEAN": [
          -1,
          684
        ],
        "'VOID": [
          -1,
          684
        ],
        "'DATA": [
          -1,
          684
        ],
        "'IF": [
          -1,
          684
        ],
        "'ELSE": [
          -1,
          684
        ],
        "'FOR": [
          -1,
          684
        ],
        "'RETURN": [
          -1,
          684
        ],
        "'VAR": [
          -1,
          684
        ],
        "'REC": [
          -1,
          684
        ],
        "'ATCHECK": [
          -1,
          684
        ],
        "'ASSERTEQUALS": [
          -1,
          684
        ],
        "'ASSERTNOTEQUALS": [
          -1,
          684
        ],
        "'ASSERTTRUE": [
          -1,
          684
        ],
        "'ASSERTFALSE": [
          -1,
          684
        ],
        "'ASSERTSATISFIES": [
          -1,
          684
        ],
        "'ASSERTRAISES": [
          -1,
          684
        ],
        "'SWITCH": [
          -1,
          684
        ],
        "'YIELD": [
          -1,
          684
        ],
        "'DASH": [
          -1,
          684
        ],
        "'BANG": [
          -1,
          684
        ],
        "'LBRACK": [
          -1,
          684
        ],
        "'NUMBER": [
          -1,
          684
        ],
        "'TRUE": [
          -1,
          684
        ],
        "'FALSE": [
          -1,
          684
        ],
        "'NULL": [
          -1,
          684
        ],
        "'PARENAFTERBRACE": [
          -1,
          684
        ],
        "'TABLE": [
          -1,
          684
        ],
        "'ASK": [
          -1,
          684
        ],
        "'NEW": [
          -1,
          684
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
      "record-expr_A0_I2*": 52,
      "table-expr_I3*": 53,
      "table-expr_I5*": 54,
      "table-row_I3*": 55,
      "ask-expr_A0_I4*": 56,
      "ask-expr_A1_I4*": 57,
      "new-expr_I3?": 58,
      "new-expr_I3_I1*": 59,
      "construct-expr_A0_I3?": 60,
      "construct-expr_A0_I3_I1*": 61,
      "START": 62,
      "if-stmt_I5*,if-stmt_I6?": 63
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
        "label": "record-expr_A0_I2*",
        "kids": [],
        "rule": 265
      },
      {
        "label": "table-expr_I3*",
        "kids": [],
        "rule": 271
      },
      {
        "label": "table-expr_I5*",
        "kids": [],
        "rule": 274
      },
      {
        "label": "table-row_I3*",
        "kids": [],
        "rule": 279
      },
      {
        "label": "ask-expr_A0_I4*",
        "kids": [],
        "rule": 283
      },
      {
        "label": "ask-expr_A1_I4*",
        "kids": [],
        "rule": 287
      },
      {
        "label": "new-expr_I3?",
        "kids": [],
        "rule": 293
      },
      {
        "label": "new-expr_I3_I1*",
        "kids": [],
        "rule": 296
      },
      {
        "label": "construct-expr_A0_I3?",
        "kids": [],
        "rule": 300
      },
      {
        "label": "construct-expr_A0_I3_I1*",
        "kids": [],
        "rule": 303
      },
      {
        "label": "START",
        "kids": [
          1
        ],
        "rule": 308
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
