import { Reveal } from "../components/layout/Reveal";
import { TeamHouse } from "../components/team/TeamHouse";
import { CtaBand } from "../components/ui/CtaBand";
import { PageHeader } from "../components/ui/PageHeader";
import { ABOUT as ABOUT_EN } from "../content/about";
import { UI } from "../content/site";
import { usePageMeta } from "../hooks/usePageMeta";
import { useContent } from "../i18n/content";
import { ink, tint } from "../lib/color";

/**
 * ABOUT PAGE. Text is in src/content/about.ts (ABOUT for the sections, TEAM for the people).
 * /about#team jumps straight to the team house.
 */
export function AboutPage() {
  const ABOUT = useContent(ABOUT_EN);
  usePageMeta(useContent(UI).pageTitles.about, ABOUT.header.text);
  const story = ABOUT.story;
  return (
    <>
      <PageHeader eyebrow={ABOUT.header.eyebrow} title={ABOUT.header.title} text={ABOUT.header.text} color="var(--teal)" />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[1.4fr_1fr] items-start">
          <Reveal className="flex flex-col gap-5">
            <div className="eyebrow">{story.eyebrow}</div>
            <h2 className="section-title" style={{ margin: 0 }}>{story.title}</h2>
            {story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="lead" style={{ margin: 0 }}>{p}</p>
            ))}
          </Reveal>
          <div className="flex flex-col gap-4">
            {story.facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 120}>
                <div className="flex items-center gap-5 p-5" style={{ background: "var(--surface)", border: `3px solid ${tint(f.color, 33)}` }}>
                  <span className="font-pixel flex-shrink-0" style={{ fontSize: "clamp(1.25rem, 2.6vw, 1.75rem)", color: ink(f.color), minWidth: "4.5ch" }}>{f.value}</span>
                  <span className="text-soft-foreground">{f.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamHouse id="team" />

      <CtaBand title={ABOUT.cta.title} text={ABOUT.cta.text} button={ABOUT.cta.button} />
    </>
  );
}
