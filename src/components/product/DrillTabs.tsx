import { useState, type KeyboardEvent } from "react";
import { PRODUCT } from "../../content/product";
import { UI } from "../../content/site";
import { useContent } from "../../i18n/content";
import { IconReportFlag } from "../icons";
import { Icon } from "../icons/registry";
import { Reveal } from "../layout/Reveal";
import { DRILL_MOCKS } from "../mocks/PhoneMocks";
import { PixelLink } from "../ui/PixelLink";
import { SectionHeader } from "../ui/SectionHeader";
import { fill, ink, line } from "../../lib/color";

/** "A closer look at each drill": one tab per drill, each with a phone mock-up and steps. */
export function DrillTabs({ id }: { id: string }) {
  const drills = useContent(PRODUCT).drills;
  const ui = useContent(UI).drillTabs;
  const [active, setActive] = useState(0);
  const tab = drills.tabs[active];
  const Mock = DRILL_MOCKS[tab.mock];

  // Arrow keys move between tabs, as screen-reader users expect.
  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + drills.tabs.length) % drills.tabs.length;
    setActive(next);
    document.getElementById(`drill-tab-${drills.tabs[next].id}`)?.focus();
  };

  return (
    <section id={id} className="section" style={{ background: "var(--surface-deep)", borderBlock: "4px solid var(--secondary)" }}>
      <div className="container-site flex flex-col gap-12">
        <SectionHeader eyebrow={drills.eyebrow} title={drills.title} text={drills.text} />

        <Reveal>
          <div role="tablist" aria-label={ui.label} className="flex flex-wrap justify-center gap-2" onKeyDown={onKey}>
            {drills.tabs.map((t, i) => {
              const selected = i === active;
              return (
                <button
                  key={t.id}
                  id={`drill-tab-${t.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls="drill-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-2 px-4 py-3 text-sm uppercase tracking-wider cursor-pointer transition-colors"
                  style={{
                    background: selected ? "var(--secondary)" : "var(--background)",
                    color: selected ? "var(--foreground-strong)" : "var(--soft-foreground)",
                    border: `3px solid ${selected ? line(t.accent) : "var(--border)"}`,
                    borderBottomWidth: selected ? 6 : 3,
                  }}
                >
                  <Icon name={t.icon} size={14} color={selected ? ink(t.accent) : "var(--muted-foreground)"} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div id="drill-panel" role="tabpanel" aria-labelledby={`drill-tab-${tab.id}`} key={tab.id} className="grid items-center gap-12 lg:grid-cols-[minmax(0,380px)_1fr]" style={{ animation: "rise-in .35s steps(5) both" }}>
          <div className="flex justify-center">
            {tab.image ? <img src={tab.image} alt={tab.title} className="phone" /> : <Mock />}
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-pixel" style={{ margin: 0, fontSize: "clamp(14px, 1.8vw, 20px)", color: ink(tab.accent), lineHeight: 1.6 }}>{tab.title}</h3>
            <p className="lead" style={{ margin: 0 }}>{tab.summary}</p>
            <ol className="flex flex-col gap-3" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {tab.steps.map((step, i) => (
                <li key={step} className="flex gap-4 items-start">
                  <span className="font-pixel flex-shrink-0 flex items-center justify-center" style={{ width: 32, height: 32, fontSize: 11, background: fill(tab.accent), color: "var(--on-fill)" }}>{i + 1}</span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm uppercase tracking-widest" style={{ color: "var(--red-soft)" }}>
                <IconReportFlag size={14} color="var(--red)" /> {ui.redFlags}
              </div>
              <div className="flex flex-wrap gap-2">
                {tab.redFlags.map((f) => <span key={f} className="pixel-chip" style={{ color: "var(--red-soft)" }}>{f}</span>)}
              </div>
            </div>
            {(tab.id === "call" || tab.id === "individual") && (
              <div>
                <PixelLink to={`/demo?mode=${tab.id === "call" ? "call" : "quiz"}`} color={fill(tab.accent)}>{ui.tryDemo}</PixelLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
