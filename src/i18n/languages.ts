/*
 * The site's languages: the same four as the app (huawei-2026/src/app/i18n/languages.ts).
 * Translations live in src/content/locales/<code>/. English is the original: any string a
 * translation leaves out shows in English instead.
 */
export type Language = "en" | "zh" | "ms" | "ta";
export type TranslatedLanguage = Exclude<Language, "en">;

// Labels are written in their own language so visitors can find theirs without reading English.
// `short` is shown on the nav button.
export const LANGUAGES: { code: Language; label: string; short: string; htmlLang: string }[] = [
  { code: "en", label: "English", short: "EN", htmlLang: "en" },
  { code: "zh", label: "中文", short: "中文", htmlLang: "zh-Hans" },
  { code: "ms", label: "Bahasa Melayu", short: "BM", htmlLang: "ms" },
  { code: "ta", label: "தமிழ்", short: "தமிழ்", htmlLang: "ta" },
];

export const TRANSLATED_LANGUAGES: TranslatedLanguage[] = ["zh", "ms", "ta"];
export const DEFAULT_LANGUAGE: Language = "en";
export const LANGUAGE_KEY = "drillmode_site_language";

export function isLanguage(value: unknown): value is Language {
  return LANGUAGES.some((l) => l.code === value);
}

export function loadLanguage(): Language {
  try {
    const raw = localStorage.getItem(LANGUAGE_KEY);
    return isLanguage(raw) ? raw : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export function saveLanguage(language: Language) {
  try { localStorage.setItem(LANGUAGE_KEY, language); } catch { /* private mode: not persisted */ }
}
