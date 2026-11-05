import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { loadTranslations, translationsLoaded } from "../content/locales";
import { DEFAULT_LANGUAGE, LANGUAGES, loadLanguage, saveLanguage, type Language } from "./languages";

/*
 * Press Start 2P, VT323 and Share Tech Mono have no Chinese or Tamil letters, so those
 * languages borrow a Noto font (see typography.css). It is only downloaded once picked.
 */
const SCRIPT_FONTS: Partial<Record<Language, string>> = {
  zh: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap",
  ta: "https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;700&display=swap",
};

function loadScriptFont(language: Language) {
  const href = SCRIPT_FONTS[language];
  if (!href || document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

const ready = (language: Language) => language === "en" || translationsLoaded(language);

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; version: number }>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  version: 0,
});

/**
 * Holds the visitor's language, remembers it, and keeps <html lang> in step.
 * A language's words are downloaded the first time it's picked; the switch happens once
 * they've arrived, so the page never shows half one language and half another.
 */
export function LanguageProvider({ children, initial }: { children: ReactNode; initial?: Language }) {
  const [language, setLanguageState] = useState<Language>(() => initial ?? loadLanguage());
  // Bumped when a language finishes loading, so content re-reads its translation.
  const [version, setVersion] = useState(0);
  const requested = useRef(language);

  useEffect(() => {
    document.documentElement.lang = LANGUAGES.find((l) => l.code === language)?.htmlLang ?? "en";
    loadScriptFont(language);
    // A returning visitor's saved language: show English until its words arrive.
    if (language !== "en" && !translationsLoaded(language)) {
      let live = true;
      loadTranslations(language).then(() => { if (live) setVersion((v) => v + 1); }, () => {});
      return () => { live = false; };
    }
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    requested.current = next;
    saveLanguage(next);
    if (ready(next)) { setLanguageState(next); return; }
    const apply = () => { if (requested.current === next) setLanguageState(next); };
    loadTranslations(next as Exclude<Language, "en">).then(apply, apply);
  }, []);

  const value = useMemo(() => ({ language, setLanguage, version }), [language, setLanguage, version]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
