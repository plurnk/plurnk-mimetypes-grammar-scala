// Pre-built tree-sitter-scala WASM grammar for @plurnk/plurnk-mimetypes.
//
// This package ships exactly one thing: scala.wasm at the package root.
// The framework's TreeSitterLanguageHandler resolves it at runtime via
// import.meta.resolve("@plurnk/plurnk-mimetypes-grammar-scala/scala.wasm").
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

/** Absolute filesystem path to the bundled scala.wasm. */
export const wasmPath = path.join(here, "scala.wasm");
