import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CallDrill } from "../components/demo/CallDrill";
import { QuizDrill } from "../components/demo/QuizDrill";
import { Icon } from "../components/icons/registry";
import { Reveal } from "../components/layout/Reveal";
import { PageHeader } from "../components/ui/PageHeader";
import { PixelLink } from "../components/ui/PixelLink";
import { DEMO } from "../content/demo";
import { usePageMeta } from "../hooks/usePageMeta";

type Mode = "quiz" | "call";

/**
 * TRY DEMO PAGE. Text and scripts are in src/content/demo.ts.
 * /demo?mode=call or /demo?mode=quiz opens straight into one of the drills.
 */
export function DemoPage() {
  usePageMeta("Try Demo", DEMO.header.text);
  const [params, setParams] = useSearchParams();
  const fromUrl = params.get("mode");
  const mode: Mode | null = fromUrl === "quiz" || fromUrl === "call" ? fromUrl : null;
  const [finished, setFinished] = useState(false);
  // Changing `run` remounts the drill, so switching modes always starts fresh.
  const [run, setRun] = useState(0);

  const pick = (next: Mode) => {
    setParams({ mode: next }, { replace: true });
    setFinished(false);
    setRun((r) => r + 1);
    requestAnimationFrame(() => document.getElementById("drill")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <>
      <PageHeader eyebrow={DEMO.header.eyebrow} title={DEMO.header.title} text={DEMO.header.text} color="#ffe66d" />

      <section className="section" style={{ paddingTop: "clamp(40px, 6vw, 64px)" }}>
        <div className="container-site flex flex-col gap-12">
          <div className="grid gap-6 md:grid-cols-2">
            {DEMO.modes.map((m, i) => {
              const selected = mode === m.id;
              return (
                <Reveal key={m.id} delay={i * 100}>
                  <button
                    type="button"
                    onClick={() => pick(m.id)}
                    aria-pressed={selected}
                    className="w-full h-full text-left flex gap-5 p-6 cursor-pointer transition-transform hover:-translate-y-1"
                    style={{ background: selected ? "#141d33" : "#0d1322", border: `4px solid ${selected ? m.color : "#2a3a5c"}`, boxShadow: selected ? `6px 6px 0 ${m.color}55` : "6px 6px 0 #05080f", color: "inherit" }}
                  >
                    <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 64, height: 64, background: "#0a0e1a", border: `3px solid ${m.color}` }}>
                      <Icon name={m.icon} size={30} color={m.color} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-pixel" style={{ fontSize: 14, color: m.color, lineHeight: 1.6 }}>{m.title}</span>
                        <span className="text-xs tracking-widest text-muted-foreground">{m.time}</span>
                      </div>
                      <span className="text-soft-foreground">{m.text}</span>
                      <span className="text-sm uppercase tracking-widest" style={{ color: m.color }}>{selected ? "▶ Playing" : "Start ▶"}</span>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <div id="drill">
            {mode === "quiz" && <QuizDrill key={`quiz-${run}`} onFinish={() => setFinished(true)} onSwitch={() => pick("call")} />}
            {mode === "call" && <CallDrill key={`call-${run}`} onFinish={() => setFinished(true)} onSwitch={() => pick("quiz")} />}
          </div>

          {finished && (
            <Reveal>
              <div className="flex flex-col items-center gap-5 p-8 text-center" style={{ background: "#0d1322", border: "4px solid #00ff88", boxShadow: "8px 8px 0 #006633" }}>
                <h2 className="section-title" style={{ margin: 0 }}>{DEMO.finish.title}</h2>
                <p className="lead max-w-[56ch]" style={{ margin: 0 }}>{DEMO.finish.text}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {DEMO.finish.buttons.map((b, i) => (
                    <PixelLink key={b.to} to={b.to} color={i === 0 ? "#00ff88" : "#1a2340"} textColor={i === 0 ? "#0a0e1a" : "#e8f4f8"}>{b.label}</PixelLink>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
