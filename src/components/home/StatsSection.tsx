import { HOME } from "../../content/home";
import { Reveal } from "../layout/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

/** "Why it matters": three big numbers with their source. */
export function StatsSection() {
  const stats = HOME.stats;
  return (
    <section className="section" style={{ background: "#070b14", borderBlock: "4px solid #1a2340" }}>
      <div className="container-site flex flex-col gap-12">
        <SectionHeader eyebrow={stats.eyebrow} eyebrowColor="#ff2d55" title={stats.title} />
        <div className="grid gap-6 lg:grid-cols-3">
          {stats.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="h-full flex flex-col gap-3 p-6 text-center" style={{ border: `3px solid ${s.color}55`, background: "#0a0e1a" }}>
                <div className="font-pixel" style={{ fontSize: "clamp(1.25rem, 2.6vw, 2.25rem)", color: s.color, textShadow: `3px 3px 0 ${s.color}33` }}>{s.value}</div>
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
