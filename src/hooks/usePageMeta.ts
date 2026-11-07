import { useEffect } from "react";
import { SITE as SITE_EN } from "../content/site";
import { useContent } from "../i18n/content";

/** Sets the browser tab title and the search-engine description for the current page. */
export function usePageMeta(title: string, description?: string) {
  const SITE = useContent(SITE_EN);
  useEffect(() => {
    document.title = title ? `${title} · ${SITE.name}` : `${SITE.name} · ${SITE.tagline}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description || SITE.description);
  }, [title, description, SITE]);
}
