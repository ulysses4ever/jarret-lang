const R = require('requirejs');

R.config({paths: {'jglr': '../../../lib/jglr'}});

R(['fs', 'jglr/jglr'], function(fs, E) {
  const Grammar = E.Grammar
  const Nonterm = E.Nonterm
  const Token = E.Token
  const Rule = E.Rule

  var g = new Grammar("JavaGrammar", "program");
  g.addRule("program", [new Nonterm("prelude"), new Nonterm("top-block")])
  g.addRule("prelude", [new Nonterm("prelude_I0*")])
  g.addRule("prelude_I0*", [], E.Rule.Inline);
  g.addRule("prelude_I0*", [new Nonterm("prelude_I0*"), new Nonterm("prelude_I0")], E.Rule.ListSnoc("prelude_I0*", "prelude_I0", true));
  g.addRule("prelude_I0", [new Nonterm("import-stmt")], E.Rule.Inline)
  g.addRule("import-stmt", [new Token("IMPORT"), new Token("NAME"), new Token("SEMI")])
  g.addRule("import-stmt", [new Token("IMPORT"), new Token("NAME"), new Token("AS"), new Token("NAME"), new Token("SEMI")])
  g.addRule("import-stmt", [new Token("IMPORT"), new Token("NAME"), new Token("PARENNOSPACE"), new Token("STRING"), new Token("RPAREN"), new Token("SEMI")])
  g.addRule("import-stmt", [new Token("IMPORT"), new Token("NAME"), new Token("PARENNOSPACE"), new Token("STRING"), new Token("RPAREN"), new Token("AS"), new Token("NAME"), new Token("SEMI")])
  g.addRule("import-stmt", [new Token("INCLUDE"), new Token("NAME"), new Token("SEMI")])
  g.addRule("import-stmt", [new Token("INCLUDE"), new Token("NAME"), new Token("AS"), new Token("NAME"), new Token("SEMI")])
  g.addRule("import-stmt", [new Token("INCLUDE"), new Token("NAME"), new Token("PARENNOSPACE"), new Token("STRING"), new Token("RPAREN"), new Token("SEMI")])
  g.addRule("top-block", [new Nonterm("top-block_I0*")])
  g.addRule("top-block_I0*", [], E.Rule.Inline);
  g.addRule("top-block_I0*", [new Nonterm("top-block_I0*"), new Nonterm("top-block_I0")], E.Rule.ListSnoc("top-block_I0*", "top-block_I0", true));
  g.addRule("top-block_I0", [new Nonterm("top-stmt")], E.Rule.Inline)
  g.addRule("top-stmt", [new Nonterm("fun-decl")])
  g.addRule("top-stmt", [new Nonterm("data-decl")])
  g.addRule("top-stmt", [new Nonterm("check-block")])
  g.addRule("top-stmt", [new Nonterm("let-stmt")])
  g.addRule("top-stmt", [new Nonterm("var-stmt")])
  g.addRule("top-stmt", [new Nonterm("rec-stmt")])
  g.addRule("top-stmt", [new Nonterm("assign-stmt")])
  g.addRule("top-stmt", [new Nonterm("expr-stmt")])
  g.addRule("block", [new Token("LBRACE"), new Nonterm("block_I1*"), new Token("RBRACE")])
  g.addRule("block_I1*", [], E.Rule.Inline);
  g.addRule("block_I1*", [new Nonterm("block_I1*"), new Nonterm("block_I1")], E.Rule.ListSnoc("block_I1*", "block_I1", true));
  g.addRule("block_I1", [new Nonterm("block-stmt")], E.Rule.Inline)
  g.addRule("block-stmt", [new Nonterm("fun-decl")])
  g.addRule("block-stmt", [new Nonterm("data-decl")])
  g.addRule("block-stmt", [new Nonterm("if-stmt")])
  g.addRule("block-stmt", [new Nonterm("for-stmt")])
  g.addRule("block-stmt", [new Nonterm("check-block")])
  g.addRule("block-stmt", [new Nonterm("return-stmt")])
  g.addRule("block-stmt", [new Nonterm("let-stmt")])
  g.addRule("block-stmt", [new Nonterm("var-stmt")])
  g.addRule("block-stmt", [new Nonterm("rec-stmt")])
  g.addRule("block-stmt", [new Nonterm("assign-stmt")])
  g.addRule("block-stmt", [new Nonterm("yield-stmt")])
  g.addRule("block-stmt", [new Nonterm("spy-stmt")])
  g.addRule("block-stmt", [new Nonterm("expr-stmt")])
  g.addRule("spy-stmt", [new Token("SPY"), new Token("PARENSPACE"), new Token("NAME"), new Nonterm("spy-stmt_I3*"), new Token("RPAREN"), new Token("SEMI")])
  g.addRule("spy-stmt_I3*", [], E.Rule.Inline);
  g.addRule("spy-stmt_I3*", [new Nonterm("spy-stmt_I3*"), new Nonterm("spy-stmt_I3")], E.Rule.ListSnoc("spy-stmt_I3*", "spy-stmt_I3", true));
  g.addRule("spy-stmt_I3", [new Token("COMMA"), new Token("NAME")], E.Rule.Inline)
  g.addRule("fun-decl", [new Nonterm("type-ann"), new Token("NAME"), new Token("PARENNOSPACE"), new Nonterm("fun-decl_I3?"), new Token("RPAREN"), new Nonterm("block"), new Nonterm("fun-decl_I6?")])
  g.addRule("fun-decl_I3?", [], E.Rule.Inline);
  g.addRule("fun-decl_I3?", [new Nonterm("fun-decl_I3")], E.Rule.Inline);
  g.addRule("fun-decl_I3", [new Nonterm("param"), new Nonterm("fun-decl_I3_I1*")], E.Rule.Inline)
  g.addRule("fun-decl_I3_I1*", [], E.Rule.Inline);
  g.addRule("fun-decl_I3_I1*", [new Nonterm("fun-decl_I3_I1*"), new Nonterm("fun-decl_I3_I1")], E.Rule.ListSnoc("fun-decl_I3_I1*", "fun-decl_I3_I1", true));
  g.addRule("fun-decl_I3_I1", [new Token("COMMA"), new Nonterm("param")], E.Rule.Inline)
  g.addRule("fun-decl_I6?", [], E.Rule.Inline);
  g.addRule("fun-decl_I6?", [new Nonterm("fun-decl_I6")], E.Rule.Inline);
  g.addRule("fun-decl_I6", [new Nonterm("where-clause")], E.Rule.Inline)
  g.addRule("param", [new Nonterm("type-ann"), new Token("NAME")])
  g.addRule("where-clause", [new Token("WHERE"), new Token("LBRACE"), new Nonterm("where-clause_I2*"), new Token("RBRACE")])
  g.addRule("where-clause_I2*", [], E.Rule.Inline);
  g.addRule("where-clause_I2*", [new Nonterm("where-clause_I2*"), new Nonterm("where-clause_I2")], E.Rule.ListSnoc("where-clause_I2*", "where-clause_I2", true));
  g.addRule("where-clause_I2", [new Nonterm("block-stmt")], E.Rule.Inline)
  g.addRule("where-clause_I2", [new Nonterm("assert-stmt")], E.Rule.Inline)
  g.addRule("type-ann", [new Token("INT")])
  g.addRule("type-ann", [new Token("LONG")])
  g.addRule("type-ann", [new Token("DOUBLE")])
  g.addRule("type-ann", [new Token("FLOAT")])
  g.addRule("type-ann", [new Token("BOOLEAN")])
  g.addRule("type-ann", [new Token("VOID")])
  g.addRule("type-ann", [new Token("NAME"), new Nonterm("type-ann_A6_I1?")])
  g.addRule("type-ann_A6_I1?", [], E.Rule.Inline);
  g.addRule("type-ann_A6_I1?", [new Nonterm("type-ann_A6_I1")], E.Rule.Inline);
  g.addRule("type-ann_A6_I1", [new Token("LT"), new Nonterm("type-ann"), new Nonterm("type-ann_A6_I1_I2*"), new Token("GT")], E.Rule.Inline)
  g.addRule("type-ann_A6_I1_I2*", [], E.Rule.Inline);
  g.addRule("type-ann_A6_I1_I2*", [new Nonterm("type-ann_A6_I1_I2*"), new Nonterm("type-ann_A6_I1_I2")], E.Rule.ListSnoc("type-ann_A6_I1_I2*", "type-ann_A6_I1_I2", true));
  g.addRule("type-ann_A6_I1_I2", [new Token("COMMA"), new Nonterm("type-ann")], E.Rule.Inline)
  g.addRule("type-ann", [new Token("PARENSPACE"), new Nonterm("type-ann_A7_I1?"), new Token("THINARROW"), new Nonterm("type-ann"), new Token("RPAREN")])
  g.addRule("type-ann_A7_I1?", [], E.Rule.Inline);
  g.addRule("type-ann_A7_I1?", [new Nonterm("type-ann_A7_I1")], E.Rule.Inline);
  g.addRule("type-ann_A7_I1", [new Nonterm("type-ann"), new Nonterm("type-ann_A7_I1_I1*")], E.Rule.Inline)
  g.addRule("type-ann_A7_I1_I1*", [], E.Rule.Inline);
  g.addRule("type-ann_A7_I1_I1*", [new Nonterm("type-ann_A7_I1_I1*"), new Nonterm("type-ann_A7_I1_I1")], E.Rule.ListSnoc("type-ann_A7_I1_I1*", "type-ann_A7_I1_I1", true));
  g.addRule("type-ann_A7_I1_I1", [new Token("COMMA"), new Nonterm("type-ann")], E.Rule.Inline)
  g.addRule("data-decl", [new Token("DATA"), new Token("NAME"), new Token("LBRACE"), new Nonterm("variant-decl"), new Nonterm("data-decl_I4*"), new Nonterm("data-decl_I5?"), new Token("RBRACE")])
  g.addRule("data-decl_I4*", [], E.Rule.Inline);
  g.addRule("data-decl_I4*", [new Nonterm("data-decl_I4*"), new Nonterm("data-decl_I4")], E.Rule.ListSnoc("data-decl_I4*", "data-decl_I4", true));
  g.addRule("data-decl_I4", [new Token("SEMI"), new Nonterm("variant-decl")], E.Rule.Inline)
  g.addRule("data-decl_I5?", [], E.Rule.Inline);
  g.addRule("data-decl_I5?", [new Nonterm("data-decl_I5")], E.Rule.Inline);
  g.addRule("data-decl_I5", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("variant-decl", [new Token("NAME"), new Token("PARENNOSPACE"), new Nonterm("variant-decl_A0_I2?"), new Token("RPAREN")])
  g.addRule("variant-decl_A0_I2?", [], E.Rule.Inline);
  g.addRule("variant-decl_A0_I2?", [new Nonterm("variant-decl_A0_I2")], E.Rule.Inline);
  g.addRule("variant-decl_A0_I2", [new Nonterm("variant-member"), new Nonterm("variant-decl_A0_I2_I1*")], E.Rule.Inline)
  g.addRule("variant-decl_A0_I2_I1*", [], E.Rule.Inline);
  g.addRule("variant-decl_A0_I2_I1*", [new Nonterm("variant-decl_A0_I2_I1*"), new Nonterm("variant-decl_A0_I2_I1")], E.Rule.ListSnoc("variant-decl_A0_I2_I1*", "variant-decl_A0_I2_I1", true));
  g.addRule("variant-decl_A0_I2_I1", [new Token("COMMA"), new Nonterm("variant-member")], E.Rule.Inline)
  g.addRule("variant-decl", [new Token("NAME")])
  g.addRule("variant-member", [new Nonterm("type-ann"), new Token("NAME")])
  g.addRule("if-stmt", [new Token("IF"), new Token("PARENSPACE"), new Nonterm("full-expr"), new Token("RPAREN"), new Nonterm("block"), new Nonterm("if-stmt_I5*"), new Nonterm("if-stmt_I6?")])
  g.addRule("if-stmt_I5*", [], E.Rule.Inline);
  g.addRule("if-stmt_I5*", [new Nonterm("if-stmt_I5*"), new Nonterm("if-stmt_I5")], E.Rule.ListSnoc("if-stmt_I5*", "if-stmt_I5", true));
  g.addRule("if-stmt_I5", [new Token("ELSE"), new Token("IF"), new Token("PARENSPACE"), new Nonterm("full-expr"), new Token("RPAREN"), new Nonterm("block")], E.Rule.Inline)
  g.addRule("if-stmt_I6?", [], E.Rule.Inline);
  g.addRule("if-stmt_I6?", [new Nonterm("if-stmt_I6")], E.Rule.Inline);
  g.addRule("if-stmt_I6", [new Token("ELSE"), new Nonterm("block")], E.Rule.Inline)
  g.addRule("for-stmt", [new Token("FOR"), new Token("PARENSPACE"), new Nonterm("type-ann"), new Token("NAME"), new Token("COLON"), new Nonterm("full-expr"), new Token("RPAREN"), new Nonterm("block")])
  g.addRule("return-stmt", [new Token("RETURN"), new Nonterm("full-expr"), new Token("SEMI")])
  g.addRule("return-stmt", [new Token("RETURN"), new Token("SEMI")])
  g.addRule("let-stmt", [new Nonterm("type-ann"), new Token("NAME"), new Token("EQUALS"), new Nonterm("full-expr"), new Nonterm("let-stmt_I4?")])
  g.addRule("let-stmt_I4?", [], E.Rule.Inline);
  g.addRule("let-stmt_I4?", [new Nonterm("let-stmt_I4")], E.Rule.Inline);
  g.addRule("let-stmt_I4", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("var-stmt", [new Token("VAR"), new Nonterm("type-ann"), new Token("NAME"), new Token("EQUALS"), new Nonterm("full-expr"), new Nonterm("var-stmt_I5?")])
  g.addRule("var-stmt_I5?", [], E.Rule.Inline);
  g.addRule("var-stmt_I5?", [new Nonterm("var-stmt_I5")], E.Rule.Inline);
  g.addRule("var-stmt_I5", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("rec-stmt", [new Token("REC"), new Nonterm("type-ann"), new Token("NAME"), new Token("EQUALS"), new Nonterm("full-expr"), new Nonterm("rec-stmt_I5?")])
  g.addRule("rec-stmt_I5?", [], E.Rule.Inline);
  g.addRule("rec-stmt_I5?", [new Nonterm("rec-stmt_I5")], E.Rule.Inline);
  g.addRule("rec-stmt_I5", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("assign-stmt", [new Token("NAME"), new Token("COLONEQUALS"), new Nonterm("full-expr"), new Nonterm("assign-stmt_I3?")])
  g.addRule("assign-stmt_I3?", [], E.Rule.Inline);
  g.addRule("assign-stmt_I3?", [new Nonterm("assign-stmt_I3")], E.Rule.Inline);
  g.addRule("assign-stmt_I3", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("expr-stmt", [new Nonterm("full-expr"), new Nonterm("expr-stmt_I1?")])
  g.addRule("expr-stmt_I1?", [], E.Rule.Inline);
  g.addRule("expr-stmt_I1?", [new Nonterm("expr-stmt_I1")], E.Rule.Inline);
  g.addRule("expr-stmt_I1", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("check-block", [new Token("ATCHECK"), new Token("VOID"), new Token("NAME"), new Token("PARENNOSPACE"), new Token("RPAREN"), new Token("LBRACE"), new Nonterm("check-block_A0_I6*"), new Token("RBRACE")])
  g.addRule("check-block_A0_I6*", [], E.Rule.Inline);
  g.addRule("check-block_A0_I6*", [new Nonterm("check-block_A0_I6*"), new Nonterm("check-block_A0_I6")], E.Rule.ListSnoc("check-block_A0_I6*", "check-block_A0_I6", true));
  g.addRule("check-block_A0_I6", [new Nonterm("block-stmt")], E.Rule.Inline)
  g.addRule("check-block_A0_I6", [new Nonterm("assert-stmt")], E.Rule.Inline)
  g.addRule("check-block", [new Token("ATCHECK"), new Token("LBRACE"), new Nonterm("check-block_A1_I2*"), new Token("RBRACE")])
  g.addRule("check-block_A1_I2*", [], E.Rule.Inline);
  g.addRule("check-block_A1_I2*", [new Nonterm("check-block_A1_I2*"), new Nonterm("check-block_A1_I2")], E.Rule.ListSnoc("check-block_A1_I2*", "check-block_A1_I2", true));
  g.addRule("check-block_A1_I2", [new Nonterm("block-stmt")], E.Rule.Inline)
  g.addRule("check-block_A1_I2", [new Nonterm("assert-stmt")], E.Rule.Inline)
  g.addRule("assert-stmt", [new Token("ASSERTEQUALS"), new Token("PARENNOSPACE"), new Nonterm("full-expr"), new Token("COMMA"), new Nonterm("full-expr"), new Token("RPAREN"), new Nonterm("assert-stmt_A0_I6?")])
  g.addRule("assert-stmt_A0_I6?", [], E.Rule.Inline);
  g.addRule("assert-stmt_A0_I6?", [new Nonterm("assert-stmt_A0_I6")], E.Rule.Inline);
  g.addRule("assert-stmt_A0_I6", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("assert-stmt", [new Token("ASSERTNOTEQUALS"), new Token("PARENNOSPACE"), new Nonterm("full-expr"), new Token("COMMA"), new Nonterm("full-expr"), new Token("RPAREN"), new Nonterm("assert-stmt_A1_I6?")])
  g.addRule("assert-stmt_A1_I6?", [], E.Rule.Inline);
  g.addRule("assert-stmt_A1_I6?", [new Nonterm("assert-stmt_A1_I6")], E.Rule.Inline);
  g.addRule("assert-stmt_A1_I6", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("assert-stmt", [new Token("ASSERTTRUE"), new Token("PARENNOSPACE"), new Nonterm("full-expr"), new Token("RPAREN"), new Nonterm("assert-stmt_A2_I4?")])
  g.addRule("assert-stmt_A2_I4?", [], E.Rule.Inline);
  g.addRule("assert-stmt_A2_I4?", [new Nonterm("assert-stmt_A2_I4")], E.Rule.Inline);
  g.addRule("assert-stmt_A2_I4", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("assert-stmt", [new Token("ASSERTFALSE"), new Token("PARENNOSPACE"), new Nonterm("full-expr"), new Token("RPAREN"), new Nonterm("assert-stmt_A3_I4?")])
  g.addRule("assert-stmt_A3_I4?", [], E.Rule.Inline);
  g.addRule("assert-stmt_A3_I4?", [new Nonterm("assert-stmt_A3_I4")], E.Rule.Inline);
  g.addRule("assert-stmt_A3_I4", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("assert-stmt", [new Token("ASSERTSATISFIES"), new Token("PARENNOSPACE"), new Nonterm("full-expr"), new Token("COMMA"), new Nonterm("full-expr"), new Token("RPAREN"), new Nonterm("assert-stmt_A4_I6?")])
  g.addRule("assert-stmt_A4_I6?", [], E.Rule.Inline);
  g.addRule("assert-stmt_A4_I6?", [new Nonterm("assert-stmt_A4_I6")], E.Rule.Inline);
  g.addRule("assert-stmt_A4_I6", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("assert-stmt", [new Token("ASSERTRAISES"), new Token("PARENNOSPACE"), new Nonterm("full-expr"), new Token("COMMA"), new Nonterm("full-expr"), new Token("RPAREN"), new Nonterm("assert-stmt_A5_I6?")])
  g.addRule("assert-stmt_A5_I6?", [], E.Rule.Inline);
  g.addRule("assert-stmt_A5_I6?", [new Nonterm("assert-stmt_A5_I6")], E.Rule.Inline);
  g.addRule("assert-stmt_A5_I6", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("assert-stmt", [new Nonterm("full-expr"), new Token("IS"), new Nonterm("full-expr"), new Nonterm("assert-stmt_A6_I3?")])
  g.addRule("assert-stmt_A6_I3?", [], E.Rule.Inline);
  g.addRule("assert-stmt_A6_I3?", [new Nonterm("assert-stmt_A6_I3")], E.Rule.Inline);
  g.addRule("assert-stmt_A6_I3", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("assert-stmt", [new Nonterm("full-expr"), new Token("ISNOT"), new Nonterm("full-expr"), new Nonterm("assert-stmt_A7_I3?")])
  g.addRule("assert-stmt_A7_I3?", [], E.Rule.Inline);
  g.addRule("assert-stmt_A7_I3?", [new Nonterm("assert-stmt_A7_I3")], E.Rule.Inline);
  g.addRule("assert-stmt_A7_I3", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("assert-stmt", [new Nonterm("full-expr"), new Token("SATISFIES"), new Nonterm("full-expr"), new Nonterm("assert-stmt_A8_I3?")])
  g.addRule("assert-stmt_A8_I3?", [], E.Rule.Inline);
  g.addRule("assert-stmt_A8_I3?", [new Nonterm("assert-stmt_A8_I3")], E.Rule.Inline);
  g.addRule("assert-stmt_A8_I3", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("assert-stmt", [new Nonterm("full-expr"), new Token("RAISES"), new Nonterm("full-expr"), new Nonterm("assert-stmt_A9_I3?")])
  g.addRule("assert-stmt_A9_I3?", [], E.Rule.Inline);
  g.addRule("assert-stmt_A9_I3?", [new Nonterm("assert-stmt_A9_I3")], E.Rule.Inline);
  g.addRule("assert-stmt_A9_I3", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("switch-expr", [new Token("SWITCH"), new Token("PARENSPACE"), new Nonterm("full-expr"), new Token("RPAREN"), new Token("LBRACE"), new Nonterm("switch-expr_I5*"), new Nonterm("switch-expr_I6?"), new Token("RBRACE")])
  g.addRule("switch-expr_I5*", [], E.Rule.Inline);
  g.addRule("switch-expr_I5*", [new Nonterm("switch-expr_I5*"), new Nonterm("switch-expr_I5")], E.Rule.ListSnoc("switch-expr_I5*", "switch-expr_I5", true));
  g.addRule("switch-expr_I5", [new Nonterm("case-branch")], E.Rule.Inline)
  g.addRule("switch-expr_I6?", [], E.Rule.Inline);
  g.addRule("switch-expr_I6?", [new Nonterm("switch-expr_I6")], E.Rule.Inline);
  g.addRule("switch-expr_I6", [new Nonterm("default-branch")], E.Rule.Inline)
  g.addRule("case-branch", [new Token("CASE"), new Token("NAME"), new Token("PARENNOSPACE"), new Nonterm("case-branch_A0_I3?"), new Token("RPAREN"), new Token("COLON"), new Nonterm("switch-body")])
  g.addRule("case-branch_A0_I3?", [], E.Rule.Inline);
  g.addRule("case-branch_A0_I3?", [new Nonterm("case-branch_A0_I3")], E.Rule.Inline);
  g.addRule("case-branch_A0_I3", [new Token("NAME"), new Nonterm("case-branch_A0_I3_I1*")], E.Rule.Inline)
  g.addRule("case-branch_A0_I3_I1*", [], E.Rule.Inline);
  g.addRule("case-branch_A0_I3_I1*", [new Nonterm("case-branch_A0_I3_I1*"), new Nonterm("case-branch_A0_I3_I1")], E.Rule.ListSnoc("case-branch_A0_I3_I1*", "case-branch_A0_I3_I1", true));
  g.addRule("case-branch_A0_I3_I1", [new Token("COMMA"), new Token("NAME")], E.Rule.Inline)
  g.addRule("case-branch", [new Token("CASE"), new Token("NAME"), new Token("COLON"), new Nonterm("switch-body")])
  g.addRule("default-branch", [new Token("DEFAULT"), new Token("COLON"), new Nonterm("switch-body")])
  g.addRule("switch-body", [new Nonterm("switch-body_I0*"), new Nonterm("yield-stmt")])
  g.addRule("switch-body_I0*", [], E.Rule.Inline);
  g.addRule("switch-body_I0*", [new Nonterm("switch-body_I0*"), new Nonterm("switch-body_I0")], E.Rule.ListSnoc("switch-body_I0*", "switch-body_I0", true));
  g.addRule("switch-body_I0", [new Nonterm("block-stmt")], E.Rule.Inline)
  g.addRule("yield-stmt", [new Token("YIELD"), new Nonterm("full-expr"), new Nonterm("yield-stmt_I2?")])
  g.addRule("yield-stmt_I2?", [], E.Rule.Inline);
  g.addRule("yield-stmt_I2?", [new Nonterm("yield-stmt_I2")], E.Rule.Inline);
  g.addRule("yield-stmt_I2", [new Token("SEMI")], E.Rule.Inline)
  g.addRule("lambda-expr", [new Token("PARENSPACE"), new Nonterm("lambda-expr_A0_I1?"), new Token("RPAREN"), new Token("THINARROW"), new Nonterm("full-expr")])
  g.addRule("lambda-expr_A0_I1?", [], E.Rule.Inline);
  g.addRule("lambda-expr_A0_I1?", [new Nonterm("lambda-expr_A0_I1")], E.Rule.Inline);
  g.addRule("lambda-expr_A0_I1", [new Nonterm("lambda-param"), new Nonterm("lambda-expr_A0_I1_I1*")], E.Rule.Inline)
  g.addRule("lambda-expr_A0_I1_I1*", [], E.Rule.Inline);
  g.addRule("lambda-expr_A0_I1_I1*", [new Nonterm("lambda-expr_A0_I1_I1*"), new Nonterm("lambda-expr_A0_I1_I1")], E.Rule.ListSnoc("lambda-expr_A0_I1_I1*", "lambda-expr_A0_I1_I1", true));
  g.addRule("lambda-expr_A0_I1_I1", [new Token("COMMA"), new Nonterm("lambda-param")], E.Rule.Inline)
  g.addRule("lambda-expr", [new Token("PARENNOSPACE"), new Nonterm("lambda-expr_A1_I1?"), new Token("RPAREN"), new Token("THINARROW"), new Nonterm("full-expr")])
  g.addRule("lambda-expr_A1_I1?", [], E.Rule.Inline);
  g.addRule("lambda-expr_A1_I1?", [new Nonterm("lambda-expr_A1_I1")], E.Rule.Inline);
  g.addRule("lambda-expr_A1_I1", [new Nonterm("lambda-param"), new Nonterm("lambda-expr_A1_I1_I1*")], E.Rule.Inline)
  g.addRule("lambda-expr_A1_I1_I1*", [], E.Rule.Inline);
  g.addRule("lambda-expr_A1_I1_I1*", [new Nonterm("lambda-expr_A1_I1_I1*"), new Nonterm("lambda-expr_A1_I1_I1")], E.Rule.ListSnoc("lambda-expr_A1_I1_I1*", "lambda-expr_A1_I1_I1", true));
  g.addRule("lambda-expr_A1_I1_I1", [new Token("COMMA"), new Nonterm("lambda-param")], E.Rule.Inline)
  g.addRule("lambda-param", [new Nonterm("type-ann"), new Token("NAME")])
  g.addRule("lambda-param", [new Token("NAME")])
  g.addRule("full-expr", [new Nonterm("lambda-expr")])
  g.addRule("full-expr", [new Nonterm("binop-expr")])
  g.addRule("binop-expr", [new Nonterm("unop-expr"), new Nonterm("binop-expr_I1*")])
  g.addRule("binop-expr_I1*", [], E.Rule.Inline);
  g.addRule("binop-expr_I1*", [new Nonterm("binop-expr_I1*"), new Nonterm("binop-expr_I1")], E.Rule.ListSnoc("binop-expr_I1*", "binop-expr_I1", true));
  g.addRule("binop-expr_I1", [new Nonterm("binop"), new Nonterm("unop-expr")], E.Rule.Inline)
  g.addRule("binop", [new Token("PLUS")])
  g.addRule("binop", [new Token("DASH")])
  g.addRule("binop", [new Token("TIMES")])
  g.addRule("binop", [new Token("SLASH")])
  g.addRule("binop", [new Token("PERCENT")])
  g.addRule("binop", [new Token("EQUALEQUAL")])
  g.addRule("binop", [new Token("NEQ")])
  g.addRule("binop", [new Token("LEQ")])
  g.addRule("binop", [new Token("GEQ")])
  g.addRule("binop", [new Token("LT")])
  g.addRule("binop", [new Token("GT")])
  g.addRule("binop", [new Token("AND")])
  g.addRule("binop", [new Token("OR")])
  g.addRule("unop-expr", [new Token("BANG"), new Nonterm("unop-expr")])
  g.addRule("unop-expr", [new Token("DASH"), new Nonterm("unop-expr")])
  g.addRule("unop-expr", [new Nonterm("app-or-access")])
  g.addRule("app-or-access", [new Nonterm("app-or-access"), new Token("PARENNOSPACE"), new Nonterm("app-or-access_A0_I2?"), new Token("RPAREN")])
  g.addRule("app-or-access_A0_I2?", [], E.Rule.Inline);
  g.addRule("app-or-access_A0_I2?", [new Nonterm("app-or-access_A0_I2")], E.Rule.Inline);
  g.addRule("app-or-access_A0_I2", [new Nonterm("full-expr"), new Nonterm("app-or-access_A0_I2_I1*")], E.Rule.Inline)
  g.addRule("app-or-access_A0_I2_I1*", [], E.Rule.Inline);
  g.addRule("app-or-access_A0_I2_I1*", [new Nonterm("app-or-access_A0_I2_I1*"), new Nonterm("app-or-access_A0_I2_I1")], E.Rule.ListSnoc("app-or-access_A0_I2_I1*", "app-or-access_A0_I2_I1", true));
  g.addRule("app-or-access_A0_I2_I1", [new Token("COMMA"), new Nonterm("full-expr")], E.Rule.Inline)
  g.addRule("app-or-access", [new Nonterm("app-or-access"), new Token("DOT"), new Token("NAME")])
  g.addRule("app-or-access", [new Nonterm("app-or-access"), new Token("LBRACK"), new Nonterm("binop-expr"), new Token("RBRACK")])
  g.addRule("app-or-access", [new Nonterm("prim-expr")])
  g.addRule("prim-expr", [new Token("NUMBER")])
  g.addRule("prim-expr", [new Token("STRING")])
  g.addRule("prim-expr", [new Token("TRUE")])
  g.addRule("prim-expr", [new Token("FALSE")])
  g.addRule("prim-expr", [new Token("NULL")])
  g.addRule("prim-expr", [new Token("NAME")])
  g.addRule("prim-expr", [new Token("PARENSPACE"), new Nonterm("full-expr"), new Token("RPAREN")])
  g.addRule("prim-expr", [new Token("PARENAFTERBRACE"), new Nonterm("full-expr"), new Token("RPAREN")])
  g.addRule("prim-expr", [new Nonterm("switch-expr")])
  g.addRule("prim-expr", [new Nonterm("construct-expr")])
  g.addRule("prim-expr", [new Nonterm("map-for-expr")])
  g.addRule("prim-expr", [new Nonterm("new-expr")])
  g.addRule("prim-expr", [new Nonterm("ask-expr")])
  g.addRule("prim-expr", [new Nonterm("table-expr")])
  g.addRule("prim-expr", [new Nonterm("record-expr")])
  g.addRule("prim-expr", [new Nonterm("block-expr")])
  g.addRule("block-expr", [new Token("BLOCK"), new Token("LBRACE"), new Nonterm("block-expr_I2*"), new Token("RBRACE")])
  g.addRule("block-expr_I2*", [], E.Rule.Inline);
  g.addRule("block-expr_I2*", [new Nonterm("block-expr_I2*"), new Nonterm("block-expr_I2")], E.Rule.ListSnoc("block-expr_I2*", "block-expr_I2", true));
  g.addRule("block-expr_I2", [new Nonterm("block-stmt")], E.Rule.Inline)
  g.addRule("record-expr", [new Token("LBRACE"), new Nonterm("record-field"), new Nonterm("record-expr_A0_I2*"), new Token("RBRACE")])
  g.addRule("record-expr_A0_I2*", [], E.Rule.Inline);
  g.addRule("record-expr_A0_I2*", [new Nonterm("record-expr_A0_I2*"), new Nonterm("record-expr_A0_I2")], E.Rule.ListSnoc("record-expr_A0_I2*", "record-expr_A0_I2", true));
  g.addRule("record-expr_A0_I2", [new Token("COMMA"), new Nonterm("record-field")], E.Rule.Inline)
  g.addRule("record-expr", [new Token("LBRACE"), new Token("RBRACE")])
  g.addRule("record-field", [new Token("NAME"), new Token("COLON"), new Nonterm("full-expr")])
  g.addRule("table-expr", [new Token("TABLE"), new Token("LBRACE"), new Nonterm("table-header"), new Nonterm("table-expr_I3*"), new Token("SEMI"), new Nonterm("table-expr_I5*"), new Token("RBRACE")])
  g.addRule("table-expr_I3*", [], E.Rule.Inline);
  g.addRule("table-expr_I3*", [new Nonterm("table-expr_I3*"), new Nonterm("table-expr_I3")], E.Rule.ListSnoc("table-expr_I3*", "table-expr_I3", true));
  g.addRule("table-expr_I3", [new Token("COMMA"), new Nonterm("table-header")], E.Rule.Inline)
  g.addRule("table-expr_I5*", [], E.Rule.Inline);
  g.addRule("table-expr_I5*", [new Nonterm("table-expr_I5*"), new Nonterm("table-expr_I5")], E.Rule.ListSnoc("table-expr_I5*", "table-expr_I5", true));
  g.addRule("table-expr_I5", [new Nonterm("table-row"), new Token("SEMI")], E.Rule.Inline)
  g.addRule("table-header", [new Nonterm("type-ann"), new Token("NAME")])
  g.addRule("table-row", [new Token("ROW"), new Token("COLON"), new Nonterm("full-expr"), new Nonterm("table-row_I3*")])
  g.addRule("table-row_I3*", [], E.Rule.Inline);
  g.addRule("table-row_I3*", [new Nonterm("table-row_I3*"), new Nonterm("table-row_I3")], E.Rule.ListSnoc("table-row_I3*", "table-row_I3", true));
  g.addRule("table-row_I3", [new Token("COMMA"), new Nonterm("full-expr")], E.Rule.Inline)
  g.addRule("ask-expr", [new Token("ASK"), new Token("LBRACE"), new Nonterm("ask-branch"), new Token("SEMI"), new Nonterm("ask-expr_A0_I4*"), new Token("RBRACE")])
  g.addRule("ask-expr_A0_I4*", [], E.Rule.Inline);
  g.addRule("ask-expr_A0_I4*", [new Nonterm("ask-expr_A0_I4*"), new Nonterm("ask-expr_A0_I4")], E.Rule.ListSnoc("ask-expr_A0_I4*", "ask-expr_A0_I4", true));
  g.addRule("ask-expr_A0_I4", [new Nonterm("ask-branch"), new Token("SEMI")], E.Rule.Inline)
  g.addRule("ask-expr", [new Token("ASK"), new Token("LBRACE"), new Nonterm("ask-branch"), new Token("SEMI"), new Nonterm("ask-expr_A1_I4*"), new Nonterm("otherwise-branch"), new Token("SEMI"), new Token("RBRACE")])
  g.addRule("ask-expr_A1_I4*", [], E.Rule.Inline);
  g.addRule("ask-expr_A1_I4*", [new Nonterm("ask-expr_A1_I4*"), new Nonterm("ask-expr_A1_I4")], E.Rule.ListSnoc("ask-expr_A1_I4*", "ask-expr_A1_I4", true));
  g.addRule("ask-expr_A1_I4", [new Nonterm("ask-branch"), new Token("SEMI")], E.Rule.Inline)
  g.addRule("ask-branch", [new Nonterm("binop-expr"), new Token("THINARROW"), new Nonterm("full-expr")])
  g.addRule("otherwise-branch", [new Token("OTHERWISE"), new Token("THINARROW"), new Nonterm("full-expr")])
  g.addRule("new-expr", [new Token("NEW"), new Token("NAME"), new Token("PARENNOSPACE"), new Nonterm("new-expr_I3?"), new Token("RPAREN")])
  g.addRule("new-expr_I3?", [], E.Rule.Inline);
  g.addRule("new-expr_I3?", [new Nonterm("new-expr_I3")], E.Rule.Inline);
  g.addRule("new-expr_I3", [new Nonterm("full-expr"), new Nonterm("new-expr_I3_I1*")], E.Rule.Inline)
  g.addRule("new-expr_I3_I1*", [], E.Rule.Inline);
  g.addRule("new-expr_I3_I1*", [new Nonterm("new-expr_I3_I1*"), new Nonterm("new-expr_I3_I1")], E.Rule.ListSnoc("new-expr_I3_I1*", "new-expr_I3_I1", true));
  g.addRule("new-expr_I3_I1", [new Token("COMMA"), new Nonterm("full-expr")], E.Rule.Inline)
  g.addRule("construct-expr", [new Token("LBRACK"), new Token("NAME"), new Token("COLON"), new Nonterm("construct-expr_A0_I3?"), new Token("RBRACK")])
  g.addRule("construct-expr_A0_I3?", [], E.Rule.Inline);
  g.addRule("construct-expr_A0_I3?", [new Nonterm("construct-expr_A0_I3")], E.Rule.Inline);
  g.addRule("construct-expr_A0_I3", [new Nonterm("full-expr"), new Nonterm("construct-expr_A0_I3_I1*")], E.Rule.Inline)
  g.addRule("construct-expr_A0_I3_I1*", [], E.Rule.Inline);
  g.addRule("construct-expr_A0_I3_I1*", [new Nonterm("construct-expr_A0_I3_I1*"), new Nonterm("construct-expr_A0_I3_I1")], E.Rule.ListSnoc("construct-expr_A0_I3_I1*", "construct-expr_A0_I3_I1", true));
  g.addRule("construct-expr_A0_I3_I1", [new Token("COMMA"), new Nonterm("full-expr")], E.Rule.Inline)
  g.addRule("construct-expr", [new Token("LBRACK"), new Token("RBRACK")])
  g.addRule("map-for-expr", [new Token("LBRACK"), new Token("FOR"), new Token("PARENSPACE"), new Nonterm("type-ann"), new Token("NAME"), new Token("COLON"), new Nonterm("full-expr"), new Token("RPAREN"), new Nonterm("block"), new Token("RBRACK")])

  g.initializeParser(false);
  var cycles = g.checkForCycles();
  if (cycles === false) {
    console.log("Non-cyclic grammar -- all good!");
  } else {
    console.log("Grammar has " + cycles.length + " cycles!");
    for (var i = 0; i < cycles.length; i++)
      console.log(cycles[i]);
  }
  var g_json = JSON.stringify(g.toSerializable(1), null, '  ');
  var filename = process.argv[2];
  var out = fs.createWriteStream(filename);
  out.write("define('pyret-base/js/java-parser', ['jglr/jglr'],\n");
  out.write("/** @param {{Grammar : {fromSerializable : !Function}, Nonterm : !Object, Token : !Object, Rule : !Object}} E */\n");
  out.write("function(E) {\n");
  out.write("  const Grammar = E.Grammar;\n");
  out.write("  const Nonterm = E.Nonterm;\n");
  out.write("  const Token = E.Token;\n");
  out.write("  const Rule = E.Rule;\n\n");
  out.write("  var g_json = " + g_json.replace(/\n/g, "\n  ") + ";\n");
  out.write("  return { JavaGrammar: Grammar.fromSerializable(g_json) };\n");
  out.write("});\n");
  out.end();
});
