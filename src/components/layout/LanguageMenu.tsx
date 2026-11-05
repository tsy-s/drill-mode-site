import { useEffect, useRef, useState } from "react";
import { UI } from "../../content/site";
import { useContent } from "../../i18n/content";
import { LANGUAGES } from "../../i18n/languages";
import { useLanguage } from "../../i18n/LanguageProvider";
import { IconChevron, IconGlobe } from "../icons";

/**
 * The language picker in the nav bar.
 *   "menu": a small button (globe + EN) that opens a list, for the desktop bar.
 *   "list": all four languages laid out as buttons, for inside the mobile menu.
 * Each language is written in its own script, so visitors can find theirs.
 */
export function LanguageMenu({ variant = "menu" }: { variant?: "menu" | "list" }) {
  const { language, setLanguage } = useLanguage();
  const ui = useContent(UI).nav;
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => { if (!wrapRef.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); buttonRef.current?.focus(); } };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "list") {
    return (
      <div className="flex flex-col gap-2" role="group" aria-label={ui.language}>
        <span className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground"><IconGlobe size={14} /> {ui.language}</span>
        <div className="grid grid-cols-2 gap-2">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              lang={l.htmlLang}
              onClick={() => setLanguage(l.code)}
              aria-pressed={l.code === language}
              className="px-3 py-2 text-left border-2 cursor-pointer"
              style={{ background: l.code === language ? "var(--secondary)" : "transparent", borderColor: l.code === language ? "var(--teal)" : "var(--border)", color: l.code === language ? "var(--foreground-strong)" : "var(--soft-foreground)" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${ui.language}: ${current.label}`}
        className="flex items-center gap-2 px-2 border-2 border-border bg-card cursor-pointer text-sm"
        style={{ height: 36, color: "var(--foreground)" }}
      >
        <IconGlobe size={16} />
        <span lang={current.htmlLang}>{current.short}</span>
        <span style={{ display: "flex", transform: open ? "rotate(180deg)" : "none", transition: "transform 150ms steps(2, end)" }}>
          <IconChevron size={10} color="var(--muted-foreground)" />
        </span>
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 flex flex-col py-1 border-2 border-border bg-card" style={{ listStyle: "none", margin: 0, minWidth: 180, zIndex: 60, boxShadow: "4px 4px 0 var(--shadow-pixel)", top: "100%" }}>
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                lang={l.htmlLang}
                onClick={() => { setLanguage(l.code); setOpen(false); buttonRef.current?.focus(); }}
                aria-current={l.code === language ? "true" : undefined}
                className="w-full flex items-center justify-between gap-3 px-3 py-2 text-left cursor-pointer bg-transparent border-0 hover:bg-[var(--secondary)]"
                style={{ color: l.code === language ? "var(--foreground-strong)" : "var(--soft-foreground)", borderLeft: `4px solid ${l.code === language ? "var(--teal)" : "transparent"}` }}
              >
                {l.label}
                <span className="text-xs text-muted-foreground">{l.short}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
