import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SITE, UI } from "../../content/site";
import { useContent } from "../../i18n/content";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { NavProvider } from "./NavContext";

/** The frame around every page: nav bar, page content, footer and the CRT scanlines. */
export function Layout() {
  const ui = useContent(UI);
  return (
    <NavProvider>
      <ScrollManager />
      <a className="skip-link" href="#main">{ui.skipToContent}</a>
      <NavBar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      {SITE.effects.scanlines && <div className="scanlines" aria-hidden="true" />}
    </NavProvider>
  );
}

/**
 * On every page change: jump to the #section in the link if there is one, otherwise to the top.
 * A page whose intro has already played opens just past it instead (see IntroShell).
 * It runs before the browser paints, so the top of the page never flashes up first.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (hash) {
      // The section may not exist until the page has rendered, so retry briefly.
      let tries = 0;
      const find = () => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else if (tries++ < 10) setTimeout(find, 60);
      };
      find();
    } else {
      const land = document.querySelector<HTMLElement>("[data-intro-land]")?.dataset.introLand;
      const target = land ? document.getElementById(land) : null;
      const top = target ? target.getBoundingClientRect().top + window.scrollY : 0;
      window.scrollTo({ top, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);
  return null;
}
