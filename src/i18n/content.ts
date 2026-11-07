import { useMemo } from "react";
import { TRANSLATIONS } from "../content/locales";
import type { Language } from "./languages";
import { useLanguage } from "./LanguageProvider";

/**
 * The shape of a translation file: the same keys as the English content, but every key is
 * optional and only text can be given. Numbers and true/false settings always come from the
 * English file. Lists are matched by position, so keep them in the same order as the English.
 */
export type Translation<T> =
  T extends string ? string
  : T extends readonly (infer Item)[] ? readonly (Translation<Item> | undefined)[]
  : T extends object ? { readonly [K in keyof T]?: Translation<T[K]> }
  : never;

/** Lays a translation over the English content. Anything it leaves out stays English. */
export function mergeTranslation<T>(english: T, translation: unknown): T {
  if (translation === undefined || translation === null) return english;
  if (typeof english === "string") return (typeof translation === "string" ? translation : english) as T;
  if (Array.isArray(english)) {
    if (!Array.isArray(translation)) return english;
    return english.map((item, i) => mergeTranslation(item, translation[i])) as T;
  }
  if (english && typeof english === "object" && typeof translation === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(english)) out[key] = mergeTranslation(value, (translation as Record<string, unknown>)[key]);
    return out as T;
  }
  return english;
}

const cache = new WeakMap<object, Partial<Record<Language, unknown>>>();

/** The content in `language` (falls back to English for anything untranslated). */
export function localize<T extends object>(english: T, language: Language): T {
  if (language === "en") return english;
  const translation = TRANSLATIONS.get(english)?.[language];
  if (!translation) return english;
  let byLanguage = cache.get(english);
  if (!byLanguage) cache.set(english, (byLanguage = {}));
  return (byLanguage[language] ??= mergeTranslation(english, translation)) as T;
}

/**
 * Reads a content object (HOME, PRODUCT, UI, …) in the visitor's language:
 *   const home = useContent(HOME);
 */
export function useContent<T extends object>(english: T): T {
  const { language, version } = useLanguage();
  // eslint-disable-next-line react-hooks/exhaustive-deps -- `version` changes when a language finishes loading
  return useMemo(() => localize(english, language), [english, language, version]);
}
