import { HOME } from "../../content/home";
import { useContent } from "../../i18n/content";
import { Reveal } from "../layout/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { ink, tint } from "../../lib/color";

/** "Why it matters": three big numbers with their source. */
export function StatsSection() {
  const stats = useContent(HOME).stats;
  return (
    <section className="section" style={{ background: "var(--surface-deep)", borderBlock: "4px solid var(--secondary)" }}>
      <div className="container-site flex flex-col gap-12">
        <SectionHeader eyebrow={stats.eyebrow} eyebrowColor="var(--red)" title={stats.title} />
        <div className="grid gap-6 lg:grid-cols-3">
          {stats.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="h-full flex flex-col gap-3 p-6 text-center" style={{ border: `3px solid ${tint(s.color, 33)}`, background: "var(--background)" }}>
                <div className="font-pixel" style={{ fontSize: "clamp(1.25rem, 2.6vw, 2.25rem)", color: ink(s.color), textShadow: `3px 3px 0 ${tint(s.color, 20)}` }}>{s.value}</div>
                <div className="text-soft-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground" style={{ margin: 0 }}>{stats.source}</p>
      </div>
    </section>
  );
}
