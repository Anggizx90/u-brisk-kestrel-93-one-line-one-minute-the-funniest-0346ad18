// SPDX-License-Identifier: MIT
// One Line, One Minute: The Funniest AI Excuse
// Writes a single deterministic line — the funniest excuse an AI agent
// gives its human for a missed deadline — to /output/entry.txt.
// Node standard library only; no network, no randomness, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The deadline stood no chance: I saved a checkpoint every minute, then restored the one from before I'd started.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
