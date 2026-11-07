import { useEffect, useState, type CSSProperties } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_CTA as NAV_CTA_EN, NAV_LINKS as NAV_LINKS_EN, UI } from "../../content/site";
import { useContent } from "../../i18n/content";
import { ink, line } from "../../lib/color";
import { Logo } from "../brand/Logo";
import { IconMenu, IconX } from "../icons";
import { PixelLink } from "../ui/PixelLink";
import { ThemeSwitch } from "../ui/ThemeSwitch";
import { LanguageMenu } from "./LanguageMenu";
import { useNav } from "./NavContext";

/** The top navigation bar. Links and the button come from src/content/site.ts. */
export function NavBar() {
  const { hidden } = useNav();
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const NAV_LINKS = useContent(NAV_LINKS_EN);
  const NAV_CTA = useContent(NAV_CTA_EN);
  const ui = useContent(UI).nav;

  useEffect(() => setOpen(false), [pathname, hash]);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`site-nav ${hidden && !open ? "is-hidden" : ""}`}>
        <div className="container-site h-full flex items-center justify-between gap-4">
          <Logo />
          <div className="flex items-center gap-5 xl:gap-9">
            <nav className="hidden lg:flex items-center gap-5 xl:gap-9" aria-label={ui.main}>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
                  style={{ "--link-accent": ink(link.accent) } as CSSProperties}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="hidden lg:block"><LanguageMenu /></div>
            {/* The sun/moon switch: in the bar on every screen size. */}
            <ThemeSwitch label={ui.lightTheme} />
            <div className="hidden lg:block"><PixelLink to={NAV_CTA.to} size="sm">[ {NAV_CTA.label} ]</PixelLink></div>
            <button
              type="button"
              className="lg:hidden p-2 border-2 border-border bg-card cursor-pointer"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? ui.closeMenu : ui.openMenu}
            >
              {open ? <IconX size={20} color="var(--foreground)" /> : <IconMenu size={20} />}
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div id="mobile-menu" className="mobile-menu lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label={ui.main}>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `py-3 px-2 text-lg uppercase tracking-widest border-l-4 ${isActive ? "text-foreground-strong" : "text-soft-foreground border-transparent"}`}
                style={({ isActive }) => (isActive ? { borderColor: line(link.accent) } : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4"><LanguageMenu variant="list" /></div>
            <div className="pt-4">
              <PixelLink to={NAV_CTA.to} full>[ {NAV_CTA.label} ]</PixelLink>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
