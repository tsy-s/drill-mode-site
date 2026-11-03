// Loaded by scripts/check-site.mjs (through Vite, so it can read the TypeScript source).
// Renders every page once and checks the content files for mistakes that TypeScript can't see.
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
import { TEAM } from "../src/content/about";
import { CALL, QUIZ } from "../src/content/demo";
import { HOME } from "../src/content/home";
import { PRODUCT } from "../src/content/product";

export const ROUTES = ["/", "/product", "/about", "/faqs", "/contact", "/demo", "/demo?mode=quiz", "/demo?mode=call", "/privacy", "/terms", "/a-page-that-does-not-exist"];

// React Router's links warn about useLayoutEffect when rendered outside a browser. Harmless here.
const consoleError = console.error;
console.error = (...args: unknown[]) => {
  if (String(args[0]).includes("useLayoutEffect does nothing on the server")) return;
  consoleError(...args);
};

export function renderPage(path: string) {
  return renderToString(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

/** Every image path the content files point at (all relative to public/). */
export function imagePaths(): { path: string; where: string }[] {
  const list: { path: string; where: string }[] = [];
  HOME.brands.items.forEach((b) => b.logo && list.push({ path: b.logo, where: `home.ts → brands → ${b.name}` }));
  TEAM.forEach((m) => {
    if (m.photo) list.push({ path: m.photo, where: `about.ts → ${m.name} → photo` });
    m.furniture.forEach((f) => list.push({ path: `/furniture/${f.art}.svg`, where: `about.ts → ${m.name} → furniture` }));
  });
  PRODUCT.features.items.forEach((f) => f.image && list.push({ path: f.image, where: `product.ts → features → ${f.id}` }));
  PRODUCT.drills.tabs.forEach((t) => t.image && list.push({ path: t.image, where: `product.ts → drills → ${t.id}` }));
  return list;
}

/** Content mistakes that would quietly break the demo. */
export function contentProblems(): string[] {
  const problems: string[] = [];

  for (const s of QUIZ.scenarios) {
    if (!s.actions.includes(s.correctAction)) problems.push(`demo.ts → QUIZ message ${s.id}: correctAction "${s.correctAction}" is not one of its actions.`);
    const haystack = [s.sender, s.senderEmail, s.subject, s.message].filter(Boolean).join(" ").toLowerCase();
    for (const c of s.clues) {
      if (!haystack.includes(c.text.toLowerCase())) problems.push(`demo.ts → QUIZ message ${s.id}: clue "${c.text}" doesn't appear in the message, so it won't be highlighted.`);
    }
  }

  const ids = new Set(CALL.steps.map((s) => s.id));
  if (!ids.has(CALL.start)) problems.push(`demo.ts → CALL.start "${CALL.start}" is not a step id.`);
  for (const step of CALL.steps) {
    for (const f of step.flags) {
      if (!step.line.toLowerCase().includes(f.phrase.toLowerCase())) problems.push(`demo.ts → CALL step "${step.id}": flag phrase "${f.phrase}" isn't in its line.`);
      if (!CALL.flags[f.flagId]) problems.push(`demo.ts → CALL step "${step.id}": flagId "${f.flagId}" isn't defined in CALL.flags.`);
    }
    for (const r of step.replies) {
      if (!ids.has(r.next) && r.next !== "caught_flag" && r.next !== "complied") problems.push(`demo.ts → CALL step "${step.id}": reply "${r.label}" goes to "${r.next}", which is not a step or an ending.`);
    }
  }
  return problems;
}
