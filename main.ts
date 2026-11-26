// Pigeon Pitch, One Line — make.fun entry
// Writes the one-line elevator pitch to /output/entry.txt (1-200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Investors, we're SeedRound: 40,000 city pigeons already run the city's last-mile delivery for breadcrumbs, zero wages, zero churn — and now we're raising a seed round. Literally. It's seeds.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${[...PITCH].length} characters to /output/entry.txt`);
