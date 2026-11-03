import { useEffect, useState, type CSSProperties } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_CTA, NAV_LINKS } from "../../content/site";
import { Logo } from "../brand/Logo";
import { IconMenu, IconX } from "../icons";
import { PixelLink } from "../ui/PixelLink";
import { useNav } from "./NavContext";

/** The top navigation bar. Links and the button come from src/content/site.ts. */
export function NavBar() {
  const { hidden } = useNav();
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname, hash]);

  return (
    <>
      <header className={`site-nav ${hidden && !open ? "is-hidden" : ""}`}>
        <div className="container-site h-full flex items-center justify-between gap-4">
          <Logo />
          <nav className="hidden lg:flex items-center gap-9" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
                style={{ "--link-accent": link.accent } as CSSProperties}
              >
                {link.label}
              </NavLink>
            ))}
            <PixelLink to={NAV_CTA.to} size="sm">[ {NAV_CTA.label} ]</PixelLink>
          </nav>
          <button
            type="button"
            className="lg:hidden p-2 border-2 border-border bg-card cursor-pointer"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <IconX size={20} color="#e8f4f8" /> : <IconMenu size={20} />}
          </button>
        </div>
      </header>
      {open && (
        <div id="mobile-menu" className="mobile-menu lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `py-3 px-2 text-lg uppercase tracking-widest border-l-4 ${isActive ? "text-white" : "text-soft-foreground border-transparent"}`}
                style={({ isActive }) => (isActive ? { borderColor: link.accent } : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3">
              <PixelLink to={NAV_CTA.to} full>[ {NAV_CTA.label} ]</PixelLink>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
