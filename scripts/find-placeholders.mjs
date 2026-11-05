// Lists every line in src/content/ marked PLACEHOLDER, and every translation file still marked
// DRAFT TRANSLATION, so you can see what still needs real details or a review before launch.
// Run it with:  npm run placeholders
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dir = join(root, "src", "content");
const MARKS = ["PLACEHOLDER", "DRAFT TRANSLATION"];
const counts = Object.fromEntries(MARKS.map((m) => [m, 0]));

/** Every .ts file under src/content, including the translation folders. */
function contentFiles(folder) {
  return readdirSync(folder, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const full = join(folder, entry.name);
      if (entry.isDirectory()) return contentFiles(full);
      return entry.name.endsWith(".ts") ? [full] : [];
    });
}

for (const file of contentFiles(dir)) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  const hits = lines
    .map((text, i) => ({ text: text.trim(), line: i + 1 }))
    .filter((l) => MARKS.some((m) => l.text.includes(m)));
  if (!hits.length) continue;
  console.log(`\n${relative(root, file)}`);
  for (const h of hits) {
    console.log(`  line ${String(h.line).padStart(3)}  ${h.text.slice(0, 110)}`);
    for (const m of MARKS) if (h.text.includes(m)) counts[m]++;
  }
}

const total = Object.values(counts).reduce((a, b) => a + b, 0);
console.log(total
  ? `\n${counts.PLACEHOLDER} placeholder line(s) and ${counts["DRAFT TRANSLATION"]} draft translation file(s) left.`
  : "\nNo placeholders or draft translations left.");
