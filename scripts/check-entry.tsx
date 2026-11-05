// Loaded by scripts/check-site.mjs (through Vite, so it can read the TypeScript source).
// Renders every page in every language and checks the content files for mistakes that
// TypeScript can't see.
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
import { TEAM } from "../src/content/about";
import { CALL, QUIZ } from "../src/content/demo";
import { HOME } from "../src/content/home";
import { SOURCES, TRANSLATIONS } from "../src/content/locales";
export { loadAllTranslations } from "../src/content/locales";
import { PRODUCT } from "../src/content/product";
import { UI } from "../src/content/site";
import { localize } from "../src/i18n/content";
import { LANGUAGES, TRANSLATED_LANGUAGES, type Language } from "../src/i18n/languages";
import { LanguageProvider } from "../src/i18n/LanguageProvider";

export const ROUTES = ["/", "/product", "/about", "/faqs", "/contact", "/demo", "/demo?mode=quiz", "/demo?mode=call", "/privacy", "/terms", "/a-page-that-does-not-exist"];
export const LANGUAGE_CODES = LANGUAGES.map((l) => l.code);

// React Router's links warn about useLayoutEffect when rendered outside a browser. Harmless here.
const consoleError = console.error;
console.error = (...args: unknown[]) => {
  if (String(args[0]).includes("useLayoutEffect does nothing on the server")) return;
  consoleError(...args);
};

export function renderPage(path: string, language: Language = "en") {
  return renderToString(
    <LanguageProvider initial={language}>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </LanguageProvider>,
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

/** Content mistakes that would quietly break the demo or a highlight, checked in one language. */
export function contentProblems(language: Language = "en"): string[] {
  const problems: string[] = [];
  const quiz = localize(QUIZ, language);
  const call = localize(CALL, language);
  const ui = localize(UI, language);
  const where = (file: string) => (language === "en" ? file : `locales/${language}/${file}`);

  for (const s of quiz.scenarios) {
    if (!s.actions.includes(s.correctAction)) problems.push(`${where("demo.ts")} → QUIZ message ${s.id}: correctAction "${s.correctAction}" is not one of its actions.`);
    const haystack = [s.sender, s.senderEmail, s.subject, s.message].filter(Boolean).join(" ").toLowerCase();
    for (const c of s.clues) {
      if (!haystack.includes(c.text.toLowerCase())) problems.push(`${where("demo.ts")} → QUIZ message ${s.id}: clue "${c.text}" doesn't appear in the message, so it won't be highlighted.`);
    }
  }
  if (!quiz.scenarios.some((s) => s.actions.includes(quiz.cautiousAction))) {
    problems.push(`${where("demo.ts")} → QUIZ.cautiousAction "${quiz.cautiousAction}" isn't one of any message's actions, so it can never score.`);
  }

  const ids = new Set(call.steps.map((s) => s.id));
  if (!ids.has(call.start)) problems.push(`${where("demo.ts")} → CALL.start "${call.start}" is not a step id.`);
  for (const step of call.steps) {
    for (const f of step.flags) {
      if (!step.line.toLowerCase().includes(f.phrase.toLowerCase())) problems.push(`${where("demo.ts")} → CALL step "${step.id}": flag phrase "${f.phrase}" isn't in its line.`);
      if (!call.flags[f.flagId]) problems.push(`${where("demo.ts")} → CALL step "${step.id}": flagId "${f.flagId}" isn't defined in CALL.flags.`);
    }
    for (const r of step.replies) {
      if (!ids.has(r.next) && r.next !== "caught_flag" && r.next !== "complied") problems.push(`${where("demo.ts")} → CALL step "${step.id}": reply "${r.label}" goes to "${r.next}", which is not a step or an ending.`);
    }
  }

  // Highlighted phrases in the phone mock-ups and feature pictures (UI in site.ts).
  const flagged: [string, { text: string; flags: string[] }][] = [
    ["UI.mocks.call.lines[0]", ui.mocks.call.lines[0]],
    ["UI.mocks.call.lines[1]", ui.mocks.call.lines[1]],
    ["UI.mocks.sms", ui.mocks.sms],
    ["UI.mocks.email", ui.mocks.email],
    ["UI.mocks.quiz", ui.mocks.quiz],
    ["UI.visuals.call", ui.visuals.call],
    ["UI.visuals.quiz", ui.visuals.quiz],
  ];
  for (const [name, { text, flags }] of flagged) {
    for (const phrase of flags) {
      if (!text.toLowerCase().includes(phrase.toLowerCase())) problems.push(`${where("site.ts")} → ${name}: flag "${phrase}" isn't in its text.`);
    }
  }
  return problems;
}

/**
 * Translation files that don't line up with the English: lists longer than the English one,
 * keys the English doesn't have (usually a typo), or text where the English has a list.
 */
export function translationProblems(): string[] {
  const problems: string[] = [];
  const compare = (english: unknown, translation: unknown, path: string) => {
    if (translation === undefined || translation === null) return;
    if (typeof english === "string") {
      if (typeof translation !== "string") problems.push(`${path}: should be text.`);
      return;
    }
    if (Array.isArray(english)) {
      if (!Array.isArray(translation)) { problems.push(`${path}: should be a list.`); return; }
      if (translation.length > english.length) problems.push(`${path}: has ${translation.length} items but the English has ${english.length}. Lists are matched by position.`);
      translation.forEach((item, i) => compare(english[i], item, `${path}[${i}]`));
      return;
    }
    if (english && typeof english === "object") {
      if (typeof translation !== "object" || Array.isArray(translation)) { problems.push(`${path}: should be a group of fields.`); return; }
      for (const [key, value] of Object.entries(translation)) {
        if (!(key in english)) problems.push(`${path}.${key}: the English has no "${key}" here (typo?).`);
        else compare((english as Record<string, unknown>)[key], value, `${path}.${key}`);
      }
    }
  };
  for (const [name, english] of Object.entries(SOURCES)) {
    const byLanguage = TRANSLATIONS.get(english) ?? {};
    for (const language of TRANSLATED_LANGUAGES) compare(english, byLanguage[language], `locales/${language} → ${name}`);
  }
  return problems;
}
