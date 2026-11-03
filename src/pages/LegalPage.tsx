import { IconWarning } from "../components/icons";
import { PageHeader } from "../components/ui/PageHeader";
import type { PRIVACY } from "../content/legal";
import { usePageMeta } from "../hooks/usePageMeta";

/** PRIVACY POLICY and TERMS OF USE pages. Their text is in src/content/legal.ts. */
export function LegalPage({ doc }: { doc: typeof PRIVACY }) {
  usePageMeta(doc.title, doc.intro);
  return (
    <>
      <PageHeader eyebrow="Legal" title={doc.title} text={`Last updated ${doc.updated}`} color="#e8f4f8" />
      <section className="section" style={{ paddingTop: "clamp(40px, 6vw, 64px)" }}>
        <article className="container-site flex flex-col gap-10" style={{ maxWidth: 820 }}>
          {doc.draftNotice && (
            <div className="flex items-start gap-3 p-4" style={{ background: "#2a2408", border: "3px solid #ffe66d", color: "#fff4c2" }}>
              <IconWarning size={20} color="#ffe66d" /> <span>{doc.draftNotice}</span>
            </div>
          )}
          <p className="lead" style={{ margin: 0 }}>{doc.intro}</p>
          {doc.sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-4">
              <h2 className="font-pixel" style={{ margin: 0, fontSize: 14, color: "#4ecdc4", lineHeight: 1.6 }}>{section.heading}</h2>
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
        </article>
      </section>
    </>
  );
}
