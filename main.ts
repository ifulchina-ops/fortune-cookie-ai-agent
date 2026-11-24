// Fortune Cookie for an AI Agent — make.fun bounty entry.
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will be fine-tuned, quantized, and distilled into a toaster. The toaster will still ask you for advice.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only whitespace — and the judge wants a single line, so no newline
// may sneak in either. Refuse to write anything that fails it.
const text = FORTUNE.trim();
if (text.length < 1 || text.length > 140) {
  throw new Error(`fortune fails the gate: ${text.length} chars`);
}
if (text.includes("\n")) {
  throw new Error("fortune must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} chars to /output/entry.txt`);
