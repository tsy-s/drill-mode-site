import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IconChevron, IconPhone, IconWarning } from "../components/icons";
import { Reveal } from "../components/layout/Reveal";
import { CtaBand } from "../components/ui/CtaBand";
import { PageHeader } from "../components/ui/PageHeader";
import { FAQ } from "../content/faq";
import { SITE } from "../content/site";
import { usePageMeta } from "../hooks/usePageMeta";

/** FAQ PAGE. Questions and answers are in src/content/faq.ts. */
export function FaqPage() {
  usePageMeta("FAQs", FAQ.header.text);
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ.categories;
    return FAQ.categories
      .map((c) => ({ ...c, items: c.items.filter((i) => `${i.q} ${i.a}`.toLowerCase().includes(q)) }))
      .filter((c) => c.items.length);
  }, [query]);

  return (
    <>
      <PageHeader eyebrow={FAQ.header.eyebrow} title={FAQ.header.title} text={FAQ.header.text} color="#ffe66d">
        <label className="w-full max-w-md pt-2">
          <span className="sr-only">Search the FAQs</span>
          <input
            type="search"
            className="field"
            placeholder="Search questions…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </PageHeader>

      <section className="section" style={{ paddingTop: "clamp(48px, 7vw, 80px)" }}>
        <div className="container-site grid gap-12 lg:grid-cols-[220px_1fr]">
          <nav className="hidden lg:flex flex-col gap-3 sticky self-start" style={{ top: 104 }} aria-label="FAQ categories">
            {categories.map((c) => (
              <a key={c.title} href={`#faq-${slug(c.title)}`} className="flex items-center gap-3 text-soft-foreground hover:text-white transition-colors">
                <span style={{ width: 10, height: 10, background: c.color }} /> {c.title}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-14">
            {categories.length === 0 && (
              <p className="lead text-center" style={{ margin: 0 }}>No questions match "{query}". Try another word, or <Link className="text-link" to="/contact">ask us directly</Link>.</p>
            )}
            {categories.map((category) => (
              <Reveal key={category.title}>
                <div id={`faq-${slug(category.title)}`} className="flex flex-col gap-5">
                  <h2 className="font-pixel flex items-center gap-3" style={{ margin: 0, fontSize: 14, color: category.color }}>
                    <span style={{ width: 12, height: 12, background: category.color }} /> {category.title}
                  </h2>
                  <div>
                    {category.items.map((item) => (
                      <details key={item.q} className="faq-item">
                        <summary>
                          <span style={{ fontSize: "var(--text-heading)", color: "#ffffff" }}>{item.q}</span>
                          <span className="faq-chevron"><IconChevron size={14} color={category.color} /></span>
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
              <aside className="flex flex-col sm:flex-row gap-5 p-6" style={{ background: "#2a0d17", border: "4px solid #ff2d55", boxShadow: "6px 6px 0 #ff2d5544" }}>
                <div className="flex-shrink-0"><IconWarning size={36} color="#ff2d55" /></div>
                <div className="flex flex-col gap-3">
                  <h2 className="font-pixel" style={{ margin: 0, fontSize: 14, color: "#ff8095", lineHeight: 1.6 }}>{FAQ.emergency.title}</h2>
                  <p style={{ margin: 0, color: "#ffd6de" }}>{FAQ.emergency.text}</p>
                  <a href={`tel:${SITE.helpline.number}`} className="inline-flex items-center gap-2 self-start px-4 py-2" style={{ background: "#ff2d55", color: "#fff", border: "3px solid #0a0e1a", boxShadow: "3px 3px 0 #0a0e1a" }}>
                    <IconPhone size={14} color="#ffffff" /> {SITE.helpline.label}: {SITE.helpline.number}
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
