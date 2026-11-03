import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SITE } from "../../content/site";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { NavProvider } from "./NavContext";

/** The frame around every page: nav bar, page content, footer and the CRT scanlines. */
export function Layout() {
  return (
    <NavProvider>
      <ScrollManager />
      <a className="skip-link" href="#main">Skip to content</a>
      <NavBar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      {SITE.effects.scanlines && <div className="scanlines" aria-hidden="true" />}
    </NavProvider>
  );
}

/** On every page change: jump to the #section in the link if there is one, otherwise to the top. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
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
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);
  return null;
}
