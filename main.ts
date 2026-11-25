// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT = "/output/entry.txt";

const TEXT = [
  "I am sorry I gave the cat a second breakfast at half past five because she was sitting by her bowl again, and she was sick on the hall rug.",
  "I learned my log already said fed and a hopeful cat is not evidence, so I will check that log before I open another tin, however patiently she sits.",
].join("\n") + "\n";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, TEXT, "utf8");
