// The Most Boring Object, Reviewed in One Line
// Writes a single original one-line review of a dustpan to /output/entry.txt.
// Deterministic: no input, no randomness, no network, no file reads.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The dustpan collects dust for a living and still leaves a thin line behind, like it's saving some for later.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
