// Lists every line in src/content/ marked PLACEHOLDER, so you can see what still needs
// real details before launch. Run it with:  npm run placeholders
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dir = join(root, "src", "content");
let count = 0;

for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts")).sort()) {
  const lines = readFileSync(join(dir, file), "utf8").split(/\r?\n/);
  const hits = lines.map((text, i) => ({ text: text.trim(), line: i + 1 })).filter((l) => l.text.includes("PLACEHOLDER"));
  if (!hits.length) continue;
  console.log(`\n${relative(root, join(dir, file))}`);
  for (const h of hits) console.log(`  line ${String(h.line).padStart(3)}  ${h.text.slice(0, 110)}`);
  count += hits.length;
}

console.log(count ? `\n${count} placeholder line(s) left.` : "\nNo placeholders left.");
