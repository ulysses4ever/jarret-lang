# Jarret distribution

This document captures where Jarret lives, how it is released, and how
the language reaches end users. It is the entry point for anyone
considering packaging, hosting, or shipping a downstream artefact based
on Jarret.

For the language itself, see [jarret-spec.md](./jarret-spec.md). For
implementation progress, see [jarret-status.md](./jarret-status.md).

## Why a separate fork?

Jarret is a Java-flavored surface syntax for Pyret, implemented as a
non-trivial patch on top of brownplt/pyret-lang. The upstream
maintainers declined to carry it (brownplt/pyret-lang#1871), so Jarret
maintains its own fork. The fork tracks upstream `horizon` so that
Pyret-side bug fixes and compiler improvements continue to flow in.

## Source of truth

- **Canonical repository**: `github.com/<your-handle>/jarret-lang`
  *(fill in once the repo is created — see Phase 1 setup below)*
- **Default branch**: `main` (the historical `jarett` branch from the
  original fork point)
- **Upstream tracking branch**: `horizon-sync` — a long-lived branch
  that periodically rebases against `brownplt/pyret-lang:horizon` so
  upstream fixes can be cherry-picked or merged into `main`.

## Release process

Jarret tags are namespaced (`jarret-v0.1.0`, `jarret-v0.2.0`, …) to
avoid clashing with Pyret's own `v0.1` / `v0.5` tags inherited from
the fork history.

A release is a commit on `main` plus a signed annotated tag. The
release is meaningful only inasmuch as downstream artefacts pin
against it; see the next section.

To cut a release:

```
git tag -a jarret-v0.X.0 -m "Jarret v0.X.0: <one-line summary>"
git push origin jarret-v0.X.0
```

## Delivery surfaces (downstream consumers)

Jarret reaches users through artefacts published from this repo. None
of these surfaces currently exist; this list is the roadmap.

| Surface | Status | Consumer of this repo |
|---|---|---|
| `jarret-npm` CLI on npm | not yet built | bundles `build/phaseA/pyret.jarr` from a tagged release |
| Jarret VSCode extension | not yet built | shells out to `jarret-npm` |
| `code.jarret.org` web IDE | not yet built | hosts the phase-C browser bundle |

The compiler bundle `build/phaseA/pyret.jarr` (built via `make phaseA`)
already includes the Jarret translator — verified by
`make jarret-test`. Every downstream surface above is a thin packaging
layer over that bundle plus
`src/scripts/standalone-configA.json`.

Reference invocation (used by `tests/parse/java-runtime-test.js`):

```
node build/phaseA/pyret.jarr \
    --build-runnable foo.jrt \
    --outfile foo-out.js \
    --builtin-js-dir src/js/trove/ \
    --builtin-arr-dir src/arr/trove/ \
    --compiled-dir /tmp/jarret-cache/ \
    --require-config src/scripts/standalone-configA.json
node foo-out.js
```

The `--build-runnable foo.jrt` form is what dispatches to the Jarret
translator: `src/arr/compiler/cli-module-loader.arr` checks
`ends-with-jrt` and routes `.jrt` files to
`src/arr/compiler/locators/java-file.arr`, which calls
`src/js/trove/parse-java.js` to translate Jarret source into a Pyret
`s-program` AST. From there the normal Pyret compile pipeline takes
over.

## Syncing from upstream Pyret

Pyret-side improvements (compiler fixes, runtime additions, etc.) are
pulled in via the `horizon-sync` branch:

```
git fetch upstream                       # upstream = brownplt/pyret-lang
git checkout horizon-sync
git rebase upstream/horizon              # bring horizon-sync to upstream tip
# review the rebased commits, then merge selectively into main:
git checkout main
git merge horizon-sync                   # or cherry-pick individual commits
make jarret-test                         # confirm Jarret still compiles and runs
```

Cadence: re-sync at least once per Jarret release. If `parse-java.js`,
`cli-module-loader.arr`, or the locators conflict with upstream
changes, that's the signal that upstream has touched the same modules
Jarret patched, and the conflict resolution is the integration work.

## Pinning policy for downstream consumers

Downstream artefacts (npm package, VSCode extension, hosted IDE)
**must** pin to a Jarret release tag, never to `main`. The bundle
shipped with `jarret-v0.X.0` is the contract; `main` can change at any
time.

## Phase 1 setup checklist

For the maintainer creating the fork:

1. Create an empty repository at `github.com/<your-handle>/jarret-lang`.
2. From a clone of this repo on the `jarett` branch:
   ```
   git remote add fork git@github.com:<your-handle>/jarret-lang.git
   git push fork jarett:main
   git push fork --tags
   ```
3. Set up the `horizon-sync` branch from the current upstream tip:
   ```
   git fetch origin                       # origin = brownplt/pyret-lang
   git checkout -b horizon-sync origin/horizon
   git push fork horizon-sync
   ```
4. On GitHub, configure `main` as the default branch on the fork, and
   add a branch protection rule requiring `make jarret-test` to pass.
5. Cut the first release tag once the doc above is updated with the
   real repo URL:
   ```
   git checkout main
   git tag -a jarret-v0.1.0 -m "Jarret v0.1.0: initial public release"
   git push fork jarret-v0.1.0
   ```
6. Update the **Source of truth** section above with the real URL and
   commit.
