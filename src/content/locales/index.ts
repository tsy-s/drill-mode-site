/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  TRANSLATIONS: connects each English content object to its translations.
 *
 *  Each language has a folder (zh = 中文, ms = Bahasa Melayu, ta = தமிழ்) with one file per
 *  page, laid out exactly like the English file but holding only the words. A translation
 *  can leave anything out: that part of the page then shows in English.
 *
 *  Each language is downloaded only when a visitor picks it, so English visitors don't pay
 *  for the other three.
 *
 *  To translate a new content object, export it from each language's index.ts under the same
 *  name as the English one, and add the English object to SOURCES below.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { TRANSLATED_LANGUAGES, type TranslatedLanguage } from "../../i18n/languages";
import { ABOUT, TEAM } from "../about";
import { CONTACT } from "../contact";
import { CALL, DEMO, QUIZ } from "../demo";
import { FAQ } from "../faq";
import { HOME } from "../home";
import { PRODUCT } from "../product";
import { FOOTER_COLUMNS, FOOTER_LEGAL, NAV_CTA, NAV_LINKS, SITE, SOCIALS, UI } from "../site";

export const SOURCES = { HOME, PRODUCT, ABOUT, TEAM, FAQ, CONTACT, DEMO, QUIZ, CALL, SITE, NAV_LINKS, NAV_CTA, FOOTER_COLUMNS, FOOTER_LEGAL, SOCIALS, UI };

const LOADERS: Record<TranslatedLanguage, () => Promise<Record<string, unknown>>> = {
  zh: () => import("./zh"),
  ms: () => import("./ms"),
  ta: () => import("./ta"),
};

/** English object → its translations, filled in as each language is loaded. */
export const TRANSLATIONS = new Map<object, Partial<Record<TranslatedLanguage, unknown>>>(
  Object.values(SOURCES).map((english) => [english, {}]),
);

const loaded = new Set<TranslatedLanguage>();

export function translationsLoaded(language: TranslatedLanguage) {
  return loaded.has(language);
}

/** Downloads one language's files (once) and registers them. */
export async function loadTranslations(language: TranslatedLanguage) {
  if (loaded.has(language)) return;
  const files = await LOADERS[language]();
  for (const [name, english] of Object.entries(SOURCES)) TRANSLATIONS.get(english)![language] = files[name];
  loaded.add(language);
}

/** For the checks in scripts/: every language at once. */
export function loadAllTranslations() {
  return Promise.all(TRANSLATED_LANGUAGES.map(loadTranslations));
}
