var Jasmine = require('jasmine');
var jazz = new Jasmine();
const R = require("requirejs");
const fs = require("fs");
const path = require("path");
var build = process.env["PHASE"] || "build/phaseA";
R.config({
  waitSeconds: 15000,
  paths: {
    "trove": "../../" + build + "/trove",
    "js": "../../" + build + "/js",
    "compiler": "../../" + build + "/arr/compiler",
    "jglr": "../../lib/jglr",
    "pyret-base": "../../" + build
  }
});

R(["pyret-base/js/java-tokenizer", "pyret-base/js/java-parser"], function(T, G) {
  function parse(str) {
    const toks = T.Tokenizer;
    toks.tokenizeFrom(str);
    var parsed = G.JavaGrammar.parse(toks);
    if (!parsed) { return false; }
    var countParses = G.JavaGrammar.countAllParses(parsed);
    if (countParses === 1) {
      return G.JavaGrammar.constructUniqueParse(parsed);
    } else {
      throw new Error("Ambiguous parse: " + countParses + " parses for: " + str.slice(0, 80));
    }
  }

  function parsesOk(str) {
    expect(parse(str)).not.toBe(false, "Should parse: " + str);
  }

  function parseFails(str) {
    expect(parse(str)).toBe(false, "Should fail to parse: " + str);
  }

  describe("Jarret parser", function() {

    describe("example programs", function() {
      var examplesDir = "../../examples/jarret";
      var examples = fs.readdirSync(examplesDir).filter(function(f) {
        return f.endsWith(".jrt");
      });
      examples.forEach(function(fname) {
        it("should parse " + fname, function() {
          var src = fs.readFileSync(path.join(examplesDir, fname), "utf8");
          var result = parse(src);
          expect(result).not.toBe(false);
        });
      });
    });

    describe("function declarations", function() {
      it("should parse a simple function", function() {
        parsesOk("int square(int n) { return n * n; }");
      });
      it("should parse a void function", function() {
        parsesOk("void doNothing() { }");
      });
      it("should parse multiple parameters", function() {
        parsesOk("int add(int a, int b) { return a + b; }");
      });
      it("should parse nested function calls", function() {
        parsesOk("int f(int n) { return g(h(n)); }");
      });
      it("should parse recursive functions", function() {
        parsesOk("int fib(int n) { if (n == 0) { return 0; } if (n == 1) { return 1; } return fib(n - 1) + fib(n - 2); }");
      });
      it("should parse a function with a where clause", function() {
        parsesOk("int sq(int n) { return n * n; } where { assertEquals(sq(3), 9); }");
      });
    });

    describe("type annotations", function() {
      it("should parse primitive types", function() {
        parsesOk("int f(int x) { return x; }");
        parsesOk("double f(double x) { return x; }");
        parsesOk("boolean f(boolean x) { return x; }");
      });
      it("should parse generic types", function() {
        parsesOk("List<Number> f(List<Number> xs) { return xs; }");
      });
      it("should parse function types as parameters", function() {
        parsesOk("int applyToFive(int n, (int -> int) f) { return f(n); }");
      });
    });

    describe("variable declarations", function() {
      it("should parse let binding", function() {
        parsesOk("void f() { int x = 5; }");
      });
      it("should parse var binding", function() {
        parsesOk("void f() { var int x = 5; }");
      });
      it("should parse assignment", function() {
        parsesOk("void f() { var int x = 5; x := 10; }");
      });
    });

    describe("control flow", function() {
      it("should parse if without else", function() {
        parsesOk("void f(int n) { if (n > 0) { } }");
      });
      it("should parse if-else", function() {
        parsesOk("int abs(int n) { if (n < 0) { return -n; } else { return n; } }");
      });
      it("should parse if-else-if chain", function() {
        parsesOk("String sign(int n) { if (n > 0) { return \"pos\"; } else if (n < 0) { return \"neg\"; } else { return \"zero\"; } }");
      });
      it("should parse for-each", function() {
        parsesOk("void f(List<Number> xs) { for (int x : xs) { print(x); } }");
      });
    });

    describe("switch expressions", function() {
      it("should parse switch with cases", function() {
        parsesOk("data Color { Red; Green; Blue; } String name(Color c) { return switch (c) { case Red: yield \"red\"; case Green: yield \"green\"; default: yield \"blue\"; }; }");
      });
      it("should parse switch with constructor patterns", function() {
        parsesOk("data Shape { Circle(double r); } double area(Shape s) { return switch (s) { case Circle(r): yield r * r * 3.14; }; }");
      });
    });

    describe("expressions", function() {
      it("should parse arithmetic", function() {
        parsesOk("int f() { return 1 + 2 * 3 - 4 / 2; }");
      });
      it("should parse comparisons", function() {
        parsesOk("boolean f(int n) { return n > 0 && n < 100; }");
      });
      it("should parse string concatenation", function() {
        parsesOk("String f(String s) { return \"hello \" + s; }");
      });
      it("should parse unary minus", function() {
        parsesOk("int f(int n) { return -n; }");
      });
      it("should parse unary not", function() {
        parsesOk("boolean f(boolean b) { return !b; }");
      });
      it("should parse negative literals in function calls", function() {
        parsesOk("@Check void t() { assertEquals(abs(-3), 3); }");
      });
      it("should parse lambdas", function() {
        parsesOk("void f() { var int y = applyTwice(3, (int n) -> n * 2); }");
      });
      it("should parse method chaining (a.f() via dot-access then call)", function() {
        parsesOk("void f() { lists.filter(xs, (int n) -> n > 0); }");
      });
      it("should parse list literals", function() {
        parsesOk("void f() { var List<Number> xs = [list: 1, 2, 3]; }");
      });
      it("should parse empty list literals", function() {
        parsesOk("void f() { var List<Number> xs = [list: ]; }");
      });
      it("should parse map-for comprehension", function() {
        parsesOk("void f() { var List<Number> xs = [for (int n : ys) { yield n * 2; }]; }");
      });
    });

    describe("data declarations", function() {
      it("should parse a simple data declaration", function() {
        parsesOk("data Bool { True; False; }");
      });
      it("should parse a data declaration with typed fields", function() {
        parsesOk("data Shape { Circle(double radius); Rectangle(double w, double h); }");
      });
    });

    describe("check blocks", function() {
      it("should parse named check blocks", function() {
        parsesOk("@Check void testIt() { assertEquals(1 + 1, 2); }");
      });
      it("should parse anonymous check blocks", function() {
        parsesOk("@Check { assertEquals(1 + 1, 2); }");
      });
      it("should parse all assertion forms", function() {
        parsesOk("@Check { assertEquals(1, 1); assertNotEquals(1, 2); assertTrue(1 == 1); assertFalse(1 == 2); assertSatisfies(1, (int n) -> n > 0); }");
      });
      it("should allow variable bindings in check blocks", function() {
        parsesOk("@Check void t() { int x = square(3); assertEquals(x, 9); }");
      });
    });

    describe("imports", function() {
      it("should parse a simple import", function() {
        parsesOk("import lists; void f() { }");
      });
      it("should parse a file import", function() {
        parsesOk("import file(\"other.jrt\"); void f() { }");
      });
    });

    describe("spy", function() {
      it("should parse a single-variable spy", function() {
        parsesOk("void f() { int x = 1; spy(x); }");
      });
      it("should parse a multi-variable spy", function() {
        parsesOk("void f() { int x = 1; int y = 2; spy(x, y); }");
      });
      it("should reject spy on a non-identifier expression", function() {
        parseFails("void f() { spy(1 + 2); }");
      });
    });

    describe("rec bindings", function() {
      it("should parse a simple rec at top level", function() {
        parsesOk("data T { N(int v, (-> T) k); Leaf; } rec T self = N(1, () -> self);");
      });
      it("should parse rec inside a function body", function() {
        parsesOk("data T { N(int v, (-> T) k); Leaf; } void f() { rec T self = N(1, () -> self); }");
      });
      it("should parse two mutually-recursive rec bindings", function() {
        parsesOk("data T { N(int v, (-> T) k); Leaf; } rec T a = N(1, () -> b); rec T b = N(2, () -> a);");
      });
      it("should reject rec without type annotation", function() {
        parseFails("data T { N(int v, (-> T) k); Leaf; } rec self = N(1, () -> self);");
      });
    });

    describe("order (table sort)", function() {
      it("should parse a single-column order", function() {
        parsesOk("void f() { Object x = order t { age ascending; }; }");
      });
      it("should parse a multi-column order", function() {
        parsesOk("void f() { Object x = order t { salary descending; name ascending; }; }");
      });
    });

    describe("extend (compute new columns)", function() {
      it("should parse a single-column extend", function() {
        parsesOk("void f() { Object x = extend t using salary { double bonus = salary / 10; }; }");
      });
      it("should parse a multi-column extend", function() {
        parsesOk("void f() { Object x = extend t using name, age { String label = name; double a = age; }; }");
      });
    });

    describe("select (keep columns)", function() {
      it("should parse a single-column select", function() {
        parsesOk("void f() { Object x = select name from t; }");
      });
      it("should parse a multi-column select", function() {
        parsesOk("void f() { Object x = select name, age from t; }");
      });
    });

    describe("extract (column to list)", function() {
      it("should parse an extract", function() {
        parsesOk("void f() { List<Number> ages = extract age from t; }");
      });
    });

    describe("sieve (table filter)", function() {
      it("should parse a single-column sieve", function() {
        parsesOk("void f() { Object x = sieve t using age { age > 25; }; }");
      });
      it("should parse a multi-column sieve", function() {
        parsesOk("void f() { Object x = sieve t using age, salary { (age < 35) && (salary >= 60000); }; }");
      });
      it("should reject a sieve without `using`", function() {
        parseFails("void f() { Object x = sieve t { true; }; }");
      });
      it("should reject a sieve without a body block", function() {
        parseFails("void f() { Object x = sieve t using age; }");
      });
    });

    describe("for comprehensions", function() {
      it("should still parse the implicit-map form", function() {
        parsesOk("void f() { List<Number> r = [for (int x : xs) { yield x * 2; }]; }");
      });
      it("should parse a for filter", function() {
        parsesOk("void f() { List<Number> r = [for filter(int x : xs) { yield x > 0; }]; }");
      });
      it("should parse a for map", function() {
        parsesOk("void f() { List<Number> r = [for map(int x : xs) { yield x * 2; }]; }");
      });
      it("should parse a for fold with accumulator + iterator", function() {
        parsesOk("void f() { int r = [for fold(int acc = 0, int x : xs) { yield acc + x; }]; }");
      });
      it("should accept user-named iterators", function() {
        parsesOk("void f() { Object r = [for myOp(int x : xs) { yield x; }]; }");
      });
    });

    describe("block expression", function() {
      it("should parse an empty block", function() {
        parsesOk("void f() { Object o = block {}; }");
      });
      it("should parse a single-statement block", function() {
        parsesOk("void f() { int n = block { 1 + 2; }; }");
      });
      it("should parse a block with multiple bindings", function() {
        parsesOk("void f() { int n = block { int a = 1; int b = 2; a + b; }; }");
      });
      it("should parse a nested block", function() {
        parsesOk("void f() { int n = block { int a = block { 1; }; a + 1; }; }");
      });
      it("should parse a block as a function-call argument", function() {
        parsesOk("void f() { print(block { int x = 1; x + 1; }); }");
      });
    });

    describe("records", function() {
      it("should parse a single-field record", function() {
        parsesOk("void f() { Object o = {x: 1}; }");
      });
      it("should parse a multi-field record", function() {
        parsesOk("void f() { Object o = {name: \"Joe\", age: 30}; }");
      });
      it("should parse the empty record", function() {
        parsesOk("void f() { Object o = {}; }");
      });
      it("should parse field access on a record literal", function() {
        parsesOk("void f() { int n = {x: 5}.x; }");
      });
      it("should parse a nested record", function() {
        parsesOk("void f() { Object o = {p: {x: 1, y: 2}, c: \"red\"}; }");
      });
      it("should reject a record-style binding with =", function() {
        parseFails("void f() { Object o = {x = 1}; }");
      });
    });

    describe("tables", function() {
      it("should parse a table with one column and one row", function() {
        parsesOk("void f() { Table t = table { String name; row: \"x\"; }; }");
      });
      it("should parse a table with multiple columns and rows", function() {
        parsesOk("void f() { Table t = table { String name, int age; row: \"A\", 1; row: \"B\", 2; }; }");
      });
      it("should parse a table with no rows (headers only)", function() {
        parsesOk("void f() { Table t = table { String name, int age; }; }");
      });
      it("should reject a table with no headers", function() {
        parseFails("void f() { Table t = table { }; }");
      });
      it("should reject a table missing the row keyword", function() {
        parseFails("void f() { Table t = table { String s; \"hi\"; }; }");
      });
    });

    describe("ask / otherwise", function() {
      it("should parse a single-branch ask with otherwise", function() {
        parsesOk("int f(int n) { return ask { n < 0 -> -1; otherwise -> 0; }; }");
      });
      it("should parse a multi-branch ask", function() {
        parsesOk("int f(int n) { return ask { n < 0 -> -1; n > 0 -> 1; otherwise -> 0; }; }");
      });
      it("should parse ask without otherwise", function() {
        parsesOk("int f(int n) { return ask { n < 0 -> -1; }; }");
      });
      it("should reject ask with no branches", function() {
        parseFails("int f(int n) { return ask { }; }");
      });
      it("should reject ask with only otherwise", function() {
        parseFails("int f(int n) { return ask { otherwise -> 0; }; }");
      });
    });

    describe("new keyword", function() {
      it("should parse new with no args", function() {
        parsesOk("data D { Empty(); } void f() { Shape x = new Empty(); }");
      });
      it("should parse new with args", function() {
        parsesOk("data D { C(int r); } void f() { D x = new C(5); }");
      });
      it("should parse new with multiple args", function() {
        parsesOk("data D { R(int w, int h); } void f() { D x = new R(3, 4); }");
      });
      it("should allow new inside arithmetic / nested expressions", function() {
        parsesOk("data D { C(int n); } int f() { return n(new C(1 + 2)); }");
      });
    });

    describe("rejected programs", function() {
      it("should reject a bare keyword as an expression", function() {
        parseFails("return;");  // return outside a function
      });
    });

  });

  jazz.execute();
}, function(err) {
  console.error("RequireJS load error:", err.message);
  process.exit(1);
});
