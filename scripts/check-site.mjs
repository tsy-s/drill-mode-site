// Safety net after editing content:  npm run check
// 1. Renders every page, so a typo that crashes a page shows up here instead of on the live site.
// 2. Checks that every image the content files point at exists in public/.
// 3. Checks the demo scripts (quiz clues, call steps) for broken references.
import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = fileURLToPath(new URL("..", import.meta.url));
const server = await createServer({ root, logLevel: "error", server: { middlewareMode: true }, appType: "custom" });
let failed = false;
const fail = (msg) => { failed = true; console.log(`  ✗ ${msg}`); };

try {
  const check = await server.ssrLoadModule("/scripts/check-entry.tsx");

  console.log("\nPages");
  for (const route of check.ROUTES) {
    try {
      const html = check.renderPage(route);
      if (html.length < 500) fail(`${route} rendered almost nothing`);
      else console.log(`  ✓ ${route}`);
    } catch (err) {
      fail(`${route} crashed: ${err?.message ?? err}`);
    }
  }

  console.log("\nImages");
  const images = check.imagePaths();
  const missing = images.filter((img) => !existsSync(join(root, "public", img.path)));
  missing.forEach((img) => fail(`${img.path} not found in public/ (${img.where})`));
  if (!missing.length) console.log(`  ✓ all ${images.length} images found`);

  console.log("\nDemo content");
  const problems = check.contentProblems();
  problems.forEach(fail);
  if (!problems.length) console.log("  ✓ quiz and call scripts look good");
} finally {
  await server.close();
}

console.log(failed ? "\nSome checks failed. See the ✗ lines above.\n" : "\nAll checks passed.\n");
process.exit(failed ? 1 : 0);
