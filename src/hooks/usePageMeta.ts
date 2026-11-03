import { useEffect } from "react";
import { SITE } from "../content/site";

/** Sets the browser tab title and the search-engine description for the current page. */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE.name}` : `${SITE.name} · ${SITE.tagline}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description || SITE.description);
  }, [title, description]);
}
