import { IconGlobe, IconWarning } from "../components/icons";
import { PageHeader } from "../components/ui/PageHeader";
import type { PRIVACY } from "../content/legal";
import { format, UI } from "../content/site";
import { usePageMeta } from "../hooks/usePageMeta";
import { useContent } from "../i18n/content";
import { useLanguage } from "../i18n/LanguageProvider";

/**
 * PRIVACY POLICY and TERMS OF USE pages. Their text is in src/content/legal.ts.
 * They stay in English in every language (with a note saying so), until reviewed translations exist.
 */
export function LegalPage({ doc }: { doc: typeof PRIVACY }) {
  const ui = useContent(UI);
  const { language } = useLanguage();
  const translated = language !== "en";
  usePageMeta(doc.title, doc.intro);
  return (
    <>
      <PageHeader eyebrow={ui.legal.eyebrow} title={doc.title} text={format(ui.legal.updated, { date: doc.updated })} color="var(--foreground)" />
      <section className="section" style={{ paddingTop: "clamp(40px, 6vw, 64px)" }}>
        <article className="container-site flex flex-col gap-10" style={{ maxWidth: 820 }}>
          {translated && (
            <div className="flex items-start gap-3 p-4" style={{ background: "var(--surface)", border: "3px solid var(--teal-line)" }}>
              <IconGlobe size={20} /> <span>{ui.legal.englishOnly}</span>
            </div>
          )}
          <div lang={translated ? "en" : undefined} className="flex flex-col gap-10">
            {doc.draftNotice && (
              <div className="flex items-start gap-3 p-4" style={{ background: "color-mix(in srgb, var(--yellow) 14%, var(--background))", border: "3px solid var(--yellow-line)", color: "var(--yellow-soft)" }}>
                <IconWarning size={20} color="var(--yellow)" /> <span>{doc.draftNotice}</span>
              </div>
            )}
            <p className="lead" style={{ margin: 0 }}>{doc.intro}</p>
            {doc.sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-4">
                <h2 className="font-pixel" style={{ margin: 0, fontSize: 14, color: "var(--teal)", lineHeight: 1.6 }}>{section.heading}</h2>
                {section.paragraphs.map((para) =>
                  para.startsWith("- ") ? (
                    <ul key={para.slice(0, 24)} className="flex flex-col gap-2 text-soft-foreground" style={{ margin: 0, paddingLeft: 20, listStyle: "square" }}>
                      {para.split("\n").map((line) => <li key={line}>{line.replace(/^- /, "")}</li>)}
                    </ul>
                  ) : (
                    <p key={para.slice(0, 24)} className="text-soft-foreground" style={{ margin: 0 }}>{para}</p>
                  ),
                )}
              </section>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
