import { Reveal } from "../components/layout/Reveal";
import { TeamHouse } from "../components/team/TeamHouse";
import { CtaBand } from "../components/ui/CtaBand";
import { PageHeader } from "../components/ui/PageHeader";
import { ABOUT } from "../content/about";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * ABOUT PAGE. Text is in src/content/about.ts (ABOUT for the sections, TEAM for the people).
 * /about#team jumps straight to the team house.
 */
export function AboutPage() {
  usePageMeta("About", ABOUT.header.text);
  const story = ABOUT.story;
  return (
    <>
      <PageHeader eyebrow={ABOUT.header.eyebrow} title={ABOUT.header.title} text={ABOUT.header.text} color="#4ecdc4" />

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
                <div className="flex items-center gap-5 p-5" style={{ background: "#0d1322", border: `3px solid ${f.color}55` }}>
                  <span className="font-pixel flex-shrink-0" style={{ fontSize: "clamp(1.25rem, 2.6vw, 1.75rem)", color: f.color, minWidth: "4.5ch" }}>{f.value}</span>
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
