# @plurnk/plurnk-mimetypes-grammar-scala

Pre-built `tree-sitter-scala` WASM grammar for the [@plurnk/plurnk-mimetypes](https://github.com/plurnk/plurnk-service/tree/main/plurnk-mimetypes) framework.

## install

```
npm i @plurnk/plurnk-mimetypes-grammar-scala
```

## what's in here

- **`scala.wasm`** — pre-built from the pinned upstream [tree-sitter-scala](https://github.com/tree-sitter/tree-sitter-scala) commit (SHA in `.grammar-pin`)
- `scripts/build-wasm.mjs` — reproducible rebuild from the pinned source
- `scripts/verify-wasm.mjs` — CI byte-identical reproducibility check

Declares only `web-tree-sitter` as a peer — no native `tree-sitter`, no node-gyp.

## license

MIT. The bundled `scala.wasm` is built from the upstream tree-sitter-scala grammar; see the pinned commit for that project's attribution.

## Versioning

This package versions independently. Compatibility is declared by its dependency
ranges; a Plurnk release does not require a release of this package.
