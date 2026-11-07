// Safety net after editing content:  npm run check
// 1. Renders every page in every language, so a typo that crashes a page shows up here instead of on the live site.
// 2. Checks that every image the content files point at exists in public/.
// 3. Checks the demo scripts (quiz clues, call steps) and highlighted phrases in every language.
// 4. Checks that the translation files line up with the English ones.
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
  // On the site, a language's words are downloaded when it's picked; here, load them all up front.
  await check.loadAllTranslations();

  console.log("\nPages");
  for (const language of check.LANGUAGE_CODES) {
    let ok = 0;
    for (const route of check.ROUTES) {
      try {
        const html = check.renderPage(route, language);
        if (html.length < 500) fail(`${language} ${route} rendered almost nothing`);
        else ok++;
      } catch (err) {
        fail(`${language} ${route} crashed: ${err?.message ?? err}`);
      }
    }
    if (ok === check.ROUTES.length) console.log(`  ✓ ${language}: all ${ok} pages`);
  }

  console.log("\nImages");
  const images = check.imagePaths();
  const missing = images.filter((img) => !existsSync(join(root, "public", img.path)));
  missing.forEach((img) => fail(`${img.path} not found in public/ (${img.where})`));
  if (!missing.length) console.log(`  ✓ all ${images.length} images found`);

  console.log("\nDemo content and highlighted phrases");
  for (const language of check.LANGUAGE_CODES) {
    const problems = check.contentProblems(language);
    problems.forEach(fail);
    if (!problems.length) console.log(`  ✓ ${language}: quiz, call script and phone mock-ups look good`);
  }

  console.log("\nTranslations");
  const problems = check.translationProblems();
  problems.forEach(fail);
  if (!problems.length) console.log("  ✓ every translation file lines up with the English");
} finally {
  await server.close();
}

console.log(failed ? "\nSome checks failed. See the ✗ lines above.\n" : "\nAll checks passed.\n");
process.exit(failed ? 1 : 0);
