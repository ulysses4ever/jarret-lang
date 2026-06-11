# Jarret Language Specification

**Jarret** ("Java + Pyret") is a Java-style surface syntax for Pyret. It uses curly-braces and
type-before-name declarations familiar from Java, while compiling to the same Pyret runtime with
the same semantics: exact arithmetic, immutable-by-default bindings, algebraic data types,
expression-oriented evaluation, and built-in testing.

The goal is to let students already comfortable with Java work in a Pyret-semantics environment,
then transition to real Java with minimal friction.

File extension: **`.jrt`**

---

## Table of Contents

1. [Program structure](#1-program-structure)
2. [Comments](#2-comments)
3. [Imports](#3-imports)
4. [Types and annotations](#4-types-and-annotations)
5. [Variable bindings](#5-variable-bindings)
6. [Functions](#6-functions)
7. [Expressions and operators](#7-expressions-and-operators)
8. [Conditionals](#8-conditionals)
9. [Data types](#9-data-types)
10. [Pattern matching](#10-pattern-matching)
11. [Loops and iteration](#11-loops-and-iteration)
12. [Lambdas](#12-lambdas)
13. [Tests](#13-tests)
14. [Return statements](#14-return-statements)
15. [Deferred / not-yet-supported features](#15-deferred--not-yet-supported-features)

---

## 1. Program structure

A Jarret file is a sequence of top-level declarations and expressions, executed top-to-bottom.
There are no mandatory class or `main` wrappers.

```java
// hello.jrt
String greeting = "Hello, world!";
print(greeting)
```

Semicolons are **optional** statement terminators. Whitespace (newlines) serves as the primary
statement separator when semicolons are omitted.

---

## 2. Comments

| Jarret | Pyret equivalent |
|--------|-----------------|
| `// line comment` | `# line comment` |
| `/* block comment */` | `#\| block comment \|#` |

---

## 3. Imports

```java
import lists;                    // import lists as lists
import lists as L;               // import lists as L
import file("utils.jrt");        // import file("utils.jrt") as utils
import file("utils.jrt") as U;   // import file("utils.jrt") as U
```

Pyret's `include` form is available as:

```java
include lists;
```

---

## 4. Types and annotations

Type annotations are **optional** everywhere. When present, they are written before the name
(Java-style), not after `::` (Pyret-style). The translator converts them to Pyret annotations.

### Primitive types

| Jarret | Pyret annotation | Notes |
|--------|-----------------|-------|
| `int` | `Number` | Pyret uses exact rationals for all numbers |
| `long` | `Number` | |
| `double` | `Number` | |
| `float` | `Number` | |
| `boolean` | `Boolean` | |
| `String` | `String` | |
| `void` | _(no return annotation)_ | Used only as function return type |

### Generic types

```java
List<Number>    // List<Number>
Option<String>  // Option<String>
```

### Unannotated code

All type annotations may be omitted; Jarret is dynamically typed by default exactly like Pyret.

---

## 5. Variable bindings

### Immutable binding

```java
int x = 5;
String name = "Alice";
y = computeSomething();   // type annotation is optional
```

Equivalent Pyret:

```pyret
x :: Number = 5
name :: String = "Alice"
y = computeSomething()
```

### Mutable binding

```java
var int count = 0;
```

Equivalent Pyret: `var count :: Number = 0`

### Assignment (mutable only)

```java
count = count + 1;
```

Equivalent Pyret: `count := count + 1`

> **Note**: Assigning to an immutable binding is a runtime error in Pyret (and a well-formedness
> error in the Pyret compiler), just as in Jarret.

---

## 6. Functions

Functions are declared with a return type (or `void`), name, and typed parameter list. The `static`
keyword is **not used** in Jarret.

```java
int square(int n) {
    return n * n;
}

String greet(String name) {
    return "Hello, " + name + "!";
}

void printLine(String s) {
    print(s)
}
```

Equivalent Pyret:

```pyret
fun square(n :: Number) -> Number: n * n end
fun greet(name :: String) -> String: "Hello, " + name + "!" end
fun printLine(s :: String): print(s) end
```

### Untyped functions

All type annotations are optional:

```java
square(n) {
    return n * n;
}
```

### Recursive functions

```java
int factorial(int n) {
    if (n == 0) { return 1; }
    return n * factorial(n - 1);
}
```

### Where clauses (examples block)

A `where` block (Pyret-style) can be appended for inline examples — useful for documentation and
lightweight testing. This uses the same keyword as Pyret:

```java
int double(int n) {
    return n * 2;
} where {
    double(3) is 6
    double(0) is 0
}
```

---

## 7. Expressions and operators

### Arithmetic

`+`, `-`, `*`, `/` work as in Java (but with Pyret's exact rational arithmetic).

```java
int x = 3 + 4 * 2;   // 11
```

### Comparison

| Jarret | Meaning |
|--------|---------|
| `==` | equality (`is` in check context, `==` in expressions) |
| `!=` | not-equal |
| `<`, `>`, `<=`, `>=` | numeric comparison |

### Boolean operators

| Jarret | Pyret |
|--------|-------|
| `&&` | `and` |
| `\|\|` | `or` |
| `!x` | `not(x)` |

### String concatenation

`+` concatenates strings, same as Java and Pyret.

### Method calls and field access

```java
myList.length()       // myList.length()
myObj.field           // myObj.field
myObj.method(arg)     // myObj.method(arg)
```

### List literals

```java
[list: 1, 2, 3]       // Pyret list literal syntax (unchanged)
```

### Record literals

Anonymous, structurally-typed records written with the same `{key: value, ...}`
syntax as Pyret. No class declaration is required; the type is inferred from the
fields. Fields are read with the usual dot access; records are immutable.

```java
Object alice = {name: "Alice", age: 30};
String n = alice.name;             // "Alice"
Object p = {x: 3, y: 4};           // record-returning expression
Object nested = {p: p, color: "red"};
nested.p.x                         // 3
```

Equivalent Pyret: `{name: "Alice", age: 30}` and `nested.p.x`. The empty
record `{}` is allowed and useful as a placeholder. Updating a field
(`{...r, age: 31}`) is deferred.

---

## 8. Conditionals

### if / else if / else

```java
if (x > 0) {
    "positive"
} else if (x < 0) {
    "negative"
} else {
    "zero"
}
```

Equivalent Pyret: `if x > 0: "positive" else if x < 0: "negative" else: "zero" end`

The `else` clause is optional when the expression is used as a statement (void context). When used
as a value (e.g., on the right-hand side of a binding), `else` is required.

### ask / otherwise

Cleaner than long `if / else if / else` chains when each branch is a single
expression. Picks the first branch whose condition is true.

```java
int sign = ask {
    n < 0 -> -1;
    n > 0 -> 1;
    otherwise -> 0;
};
```

Equivalent Pyret: `ask: | n < 0 then: -1 | n > 0 then: 1 | otherwise: 0 end`

`otherwise` is optional; if no branch matches and there's no `otherwise`, a
runtime error is raised. At least one regular branch is required.

---

## 9. Data types

Algebraic data types use the `data` keyword (same as Pyret) with Java-style curly-brace body. Each
variant is declared as `VariantName(Type field, ...)`.

```java
data Shape {
    Circle(double radius);
    Rectangle(double width, double height);
    Triangle(double base, double height);
}
```

Equivalent Pyret:

```pyret
data Shape:
  | circle(radius :: Number)
  | rectangle(width :: Number, height :: Number)
  | triangle(base :: Number, height :: Number)
end
```

> **Naming convention**: Variant names in Jarret are written in `PascalCase`. The translator
> converts them to `lowercase` for Pyret (so `Circle(r)` becomes `| circle(r)`). Constructor
> calls use `PascalCase`: `Circle(5)`.

### Singleton variants (no fields)

```java
data Direction {
    North;
    South;
    East;
    West;
}
```

### Constructor calls: bare or `new`

Both spellings produce the same value; `new` is pure syntactic sugar for Java muscle memory.

```java
Shape s1 = Circle(3);          // Pyret-style
Shape s2 = new Circle(3);      // Java-style; identical to s1
```

### Shared methods (deferred)

Pyret's `sharing:` block for methods shared across all variants is deferred to a later release.

### Table literals

Tables are spreadsheet-like values with typed columns and a list of rows. Build
one with `table { ... }`: list the typed column headers first (comma-separated,
terminated by `;`), then any number of `row: v1, v2, ...;` lines, in order.

```java
Table cities = table {
    String name, int pop;
    row: "Providence", 190;
    row: "Boston", 685;
};
cities.length()                  // 2
cities.row-n(0).get-value("pop") // 190
```

Equivalent Pyret:

```pyret
table: name :: String, pop :: Number
  row: "Providence", 190
  row: "Boston", 685
end
```

Column operations (`sieve`, `order`, `extend`, `select`) and external loaders
(`load-table`) are deferred; use the `tables` module's functions and method
calls on the table value for now.

---

## 10. Pattern matching

Pattern matching on algebraic data types uses `switch`, with `case` branches using
constructor-style patterns. The `yield` keyword produces the value of the branch.

```java
switch (myShape) {
    case Circle(r): yield r * r * 3.14159;
    case Rectangle(w, h): yield w * h;
    default: yield 0;
}
```

Equivalent Pyret:

```pyret
cases(Shape) myShape:
  | circle(r) => r * r * 3.14159
  | rectangle(w, h) => w * h
  | else => 0
end
```

The type of the scrutinee must be inferable (used when calling the downstream Pyret type checker).
The `default` branch maps to Pyret's `| else =>`.

### Switch as an expression

`switch` is an expression and can appear on the right-hand side of a binding:

```java
double area = switch (myShape) {
    case Circle(r): yield r * r * 3.14159;
    case Rectangle(w, h): yield w * h;
};
```

---

## 11. Loops and iteration

### For-each

```java
for (int x : myList) {
    print(x)
}
```

Equivalent Pyret: `for each(x from myList): print(x) end`

### For-each as expression (map-style)

When all branches produce a value, the for loop produces a list:

```java
[for (int x : myList) { yield x * 2; }]
```

Equivalent Pyret: `for map(x from myList): x * 2 end`

The `[...]` brackets signal that the loop produces a list value (as opposed to side-effecting
iteration).

### While loops (deferred)

`while` loops require mutable state and are supported syntactically, but idiomatic Jarret
prefers recursion or for-each. Deferred to a later release.

---

## 12. Lambdas

```java
(int n) -> n * 2
(int x, int y) -> x + y
() -> "hello"
```

Equivalent Pyret: `lam(n :: Number): n * 2 end`

Lambdas may appear anywhere an expression is expected and can be passed as arguments:

```java
List<Number> doubled = myList.map((int n) -> n * 2);
```

---

## 13. Tests

Test blocks are declared with `@Check`. The block name is optional.

```java
@Check void testSquare() {
    assertEquals(square(4), 16);
    assertEquals(square(0), 0);
    assertEquals(square(-3), 9);
}

@Check void testGreet() {
    assertEquals(greet("Alice"), "Hello, Alice!");
}
```

Equivalent Pyret:

```pyret
check "testSquare":
  square(4) is 16
  square(0) is 0
  square(-3) is 9
end
check "testGreet":
  greet("Alice") is "Hello, Alice!"
end
```

### Assertion forms

| Jarret | Pyret check form |
|--------|-----------------|
| `assertEquals(actual, expected)` | `actual is expected` |
| `assertNotEquals(a, b)` | `a is-not b` |
| `assertTrue(expr)` | `expr is true` |
| `assertFalse(expr)` | `expr is false` |
| `assertSatisfies(expr, pred)` | `expr satisfies pred` |
| `assertRaises(thunk, msg)` | `thunk raises msg` |

### Unnamed check block

An anonymous check block:

```java
@Check {
    assertEquals(1 + 1, 2);
}
```

Equivalent Pyret: `check: 1 + 1 is 2 end`

---

## 13a. Debugging: `spy`

`spy(name1, name2, ...)` prints each variable's current value to the console,
labeled with the variable's name. Useful for tracing recursion or watching how
a value changes shape. Execution continues normally; `spy` is not a return.

```java
int factorial(int n) {
    if (n == 0) { return 1; }
    int sub = factorial(n - 1);
    spy(n, sub);
    return n * sub;
}
```

Equivalent Pyret: `spy: n, sub end`. Only bare identifiers are accepted;
labeled forms (`spy "checkpoint": x end`) and arbitrary expressions are
deferred.

---

## 14. Return statements

Jarret supports `return` via a three-tier system, reflecting Pyret's expression-oriented
semantics.

### Tier 1 — Tail return (always supported)

`return` as the **final statement** in a block is simply stripped; the expression becomes the
block's value.

```java
int double(int n) {
    return n * 2;    // OK: tail position
}
```

### Tier 2 — Return lifting (supported)

`return` inside an `if` branch where the remaining statements form the natural `else` is
structurally rewritten at translation time.

```java
int abs(int n) {
    if (n < 0) { return -n; }  // lifted: becomes the if branch
    return n;                   // becomes the else branch
}
```

The translator walks the statement list and rewrites:
```
[if (c) { return x; }, rest...]  →  if (c) { x } else { rest... }
```
applied recursively, handling chains of guard clauses.

### Tier 3 — Mid-loop return (not yet supported)

`return` inside a `for` body or other deeply-nested, non-`if` position cannot be structurally
rewritten. The translator emits a helpful error:

```
Error: early return inside a loop is not yet supported.
Hint: restructure using if/else or recursion instead.
```

---

## 15. Deferred / not-yet-supported features

The following Pyret features have no Jarret syntax yet and are planned for future releases:

| Feature | Pyret construct | Notes |
|---------|----------------|-------|
| `load-table` / table operations | `load-table:` / `sieve`/`order`/`extend` | Literal `table { ... }` is supported; loaders and column ops are deferred |
| Reactors | `reactor:` | Domain-specific; deferred |
| `while` loops | _(none in Pyret)_ | Deferred; use recursion |
| `sharing:` on data | `sharing:` | Deferred |
| Refinement type annotations | `pred-ann` | Use dynamic checks for now |
| `provide` / `provide-types` | `provide` | Top-level definitions are implicitly `provide *`; finer-grained control deferred |
| Mid-loop `return` | _(requires CPS)_ | Use if/else; see §14 Tier 3 |

---

## Quick reference

```java
// Binding
int x = 5;
var int y = 0;
y = y + 1;

// Function
int square(int n) { return n * n; }

// If/else
if (x > 0) { "pos" } else { "non-pos" }

// Data type
data Color { Red; Green; Blue(int r, int g, int b); }

// Pattern match
switch (c) {
    case Red: yield 255;
    case Green: yield 128;
    case Blue(r, g, b): yield r + g + b;
}

// For-each
for (int n : myList) { print(n) }

// Lambda
(int n) -> n * 2

// Test
@Check void tests() {
    assertEquals(square(3), 9);
    assertSatisfies(square(4), (int n) -> n > 0);
}
```
