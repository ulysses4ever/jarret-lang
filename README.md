# Jarret

Jarret is a Java-flavored surface syntax for [Pyret](https://pyret.org).
It parses Java-style declarations and statements, translates them to
the Pyret AST, and reuses the full Pyret compiler and runtime
unchanged.

This repository is a fork of
[brownplt/pyret-lang](https://github.com/brownplt/pyret-lang) — the
underlying compiler is Pyret's. Jarret adds the `.jrt` source
extension, a tokenizer, a grammar, and a translator to the existing
Pyret pipeline.

## Documentation

- [docs/jarret-spec.md](./docs/jarret-spec.md) — language reference
- [docs/jarret-status.md](./docs/jarret-status.md) — implementation
  snapshot and DCIC compatibility
- [docs/jarret-distribution.md](./docs/jarret-distribution.md) — where
  Jarret lives, how it is released, and how it reaches users

## Build and test

Requires Node.js >= 6.

```
npm install
make
make jarret-test
```

`make` builds the Pyret compiler (which includes the Jarret
translator) into `build/phaseA/pyret.jarr`. `make jarret-test` runs
the three Jarret test suites (parse / translator / runtime — 105 + 14
+ 20 specs covering ~140 `@Check` assertions across the example
corpus).

## Running a Jarret program

```
node build/phaseA/pyret.jarr \
    --build-runnable examples/jarret/hello.jrt \
    --outfile /tmp/hello.js \
    --builtin-js-dir src/js/trove/ \
    --builtin-arr-dir src/arr/trove/ \
    --compiled-dir /tmp/jarret-cache/ \
    --require-config src/scripts/standalone-configA.json
node /tmp/hello.js
```

The `.jrt` extension triggers dispatch to the Jarret translator (see
[docs/jarret-distribution.md](./docs/jarret-distribution.md) for the
pipeline). Everything past parsing is the standard Pyret compile flow.

Example programs live in [`examples/jarret/`](./examples/jarret/).

## Pyret build phases

Because Jarret reuses Pyret's compiler, the same self-hosted phase 0 /
A / B / C build cycle applies. See the [upstream Pyret
README](https://github.com/brownplt/pyret-lang/blob/horizon/README.md)
for that workflow — nothing in it changes for Jarret.
