import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IconChevron, IconPhone, IconWarning } from "../components/icons";
import { Reveal } from "../components/layout/Reveal";
import { CtaBand } from "../components/ui/CtaBand";
import { PageHeader } from "../components/ui/PageHeader";
import { FAQ as FAQ_EN } from "../content/faq";
import { format, SITE as SITE_EN, UI } from "../content/site";
import { usePageMeta } from "../hooks/usePageMeta";
import { useContent } from "../i18n/content";
import { fill, ink } from "../lib/color";

/** FAQ PAGE. Questions and answers are in src/content/faq.ts. */
export function FaqPage() {
  const FAQ = useContent(FAQ_EN);
  const SITE = useContent(SITE_EN);
  const ui = useContent(UI);
  usePageMeta(ui.pageTitles.faq, FAQ.header.text);
  const [query, setQuery] = useState("");

  // Each category's anchor (#faq-the-basics) comes from its English title, so links work in every language.
  const categories = useMemo(() => {
    const q = query.trim().toLowerCase();
    const all = FAQ.categories.map((c, i) => ({ ...c, slug: slug(FAQ_EN.categories[i].title) }));
    if (!q) return all;
    return all
      .map((c) => ({ ...c, items: c.items.filter((i) => `${i.q} ${i.a}`.toLowerCase().includes(q)) }))
      .filter((c) => c.items.length);
  }, [query, FAQ]);

  return (
    <>
      <PageHeader eyebrow={FAQ.header.eyebrow} title={FAQ.header.title} text={FAQ.header.text} color="var(--yellow)">
        <label className="w-full max-w-md pt-2">
          <span className="sr-only">{ui.faq.search}</span>
          <input
            type="search"
            className="field"
            placeholder={ui.faq.placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </PageHeader>

      <section className="section" style={{ paddingTop: "clamp(48px, 7vw, 80px)" }}>
        <div className="container-site grid gap-12 lg:grid-cols-[220px_1fr]">
          <nav className="hidden lg:flex flex-col gap-3 sticky self-start" style={{ top: 104 }} aria-label={ui.faq.categories}>
            {categories.map((c) => (
              <a key={c.slug} href={`#faq-${c.slug}`} className="flex items-center gap-3 text-soft-foreground hover:text-foreground-strong transition-colors">
                <span style={{ width: 10, height: 10, background: fill(c.color) }} /> {c.title}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-14">
            {categories.length === 0 && (
              <p className="lead text-center" style={{ margin: 0 }}>{format(ui.faq.noMatch, { query })} <Link className="text-link" to="/contact">{ui.faq.askUs}</Link>.</p>
            )}
            {categories.map((category) => (
              <Reveal key={category.slug}>
                <div id={`faq-${category.slug}`} className="flex flex-col gap-5">
                  <h2 className="font-pixel flex items-center gap-3" style={{ margin: 0, fontSize: 14, color: ink(category.color) }}>
                    <span style={{ width: 12, height: 12, background: fill(category.color) }} /> {category.title}
                  </h2>
                  <div>
                    {category.items.map((item) => (
                      <details key={item.q} className="faq-item">
                        <summary>
                          <span style={{ fontSize: "var(--text-heading)", color: "var(--foreground-strong)" }}>{item.q}</span>
                          <span className="faq-chevron"><IconChevron size={14} color={ink(category.color)} /></span>
                        </summary>
                        <div className="flex flex-col gap-3 px-5 pb-5 text-soft-foreground">
                          {item.a.split("\n\n").map((para) => <p key={para.slice(0, 24)} style={{ margin: 0 }}>{para}</p>)}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <aside className="flex flex-col sm:flex-row gap-5 p-6" style={{ background: "color-mix(in srgb, var(--red) 14%, var(--background))", border: "4px solid var(--red-line)", boxShadow: "6px 6px 0 color-mix(in srgb, var(--red-line) 27%, transparent)" }}>
                <div className="flex-shrink-0"><IconWarning size={36} color="var(--red)" /></div>
                <div className="flex flex-col gap-3">
                  <h2 className="font-pixel" style={{ margin: 0, fontSize: 14, color: "var(--red-soft)", lineHeight: 1.6 }}>{FAQ.emergency.title}</h2>
                  <p style={{ margin: 0, color: "color-mix(in srgb, var(--red-soft) 40%, var(--foreground-strong))" }}>{FAQ.emergency.text}</p>
                  <a href={`tel:${SITE.helpline.number}`} className="inline-flex items-center gap-2 self-start px-4 py-2" style={{ background: "var(--red-fill)", color: "var(--on-danger)", border: "3px solid var(--outline)", boxShadow: "3px 3px 0 var(--outline)" }}>
                    <IconPhone size={14} color="var(--on-danger)" /> {SITE.helpline.label}: {SITE.helpline.number}
                  </a>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand title={FAQ.cta.title} button={FAQ.cta.button} />
    </>
  );
}

function slug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
