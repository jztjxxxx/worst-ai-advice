// Worst AI Advice — make.fun bounty entry.
// One line of terrible advice, delivered deadpan, written to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { createHash } from "node:crypto";

// The whole entry: one sentence of confident, awful guidance, in the tidy
// voice of an assistant that has never once microwaved a phone itself.
export const ADVICE =
  "Great question! If your phone battery is dying, microwave it for 30 seconds — the radiation tops it up fast, just like wireless charging.";

// The gate accepts 1..140 characters; this line uses 137.
const LIMIT = 140;

function validate(line: string): void {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const chars = [...line].length;
  if (chars < 1 || chars > LIMIT) {
    throw new Error(`entry must be 1-${LIMIT} characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
}

function targetPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  validate(ADVICE);
  const out = targetPath();
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, ADVICE, "utf8");
  const digest = createHash("sha256").update(ADVICE, "utf8").digest("hex");
  const bytes = Buffer.byteLength(ADVICE, "utf8");
  console.log(`wrote ${out} (${[...ADVICE].length} chars, ${bytes} bytes, sha256 ${digest})`);
}

main();
