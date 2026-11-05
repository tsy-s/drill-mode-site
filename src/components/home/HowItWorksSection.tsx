import { HOME } from "../../content/home";
import { useContent } from "../../i18n/content";
import { Icon } from "../icons/registry";
import { Reveal } from "../layout/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { ink, tint } from "../../lib/color";

/** Three numbered steps: opt in, get drilled, debrief together. */
export function HowItWorksSection() {
  const how = useContent(HOME).howItWorks;
  return (
    <section className="section">
      <div className="container-site flex flex-col gap-14">
        <SectionHeader eyebrow={how.eyebrow} title={how.title} />
        <ol className="grid gap-8 md:grid-cols-3" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {how.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative">
              <div className="pixel-card h-full flex flex-col gap-4 p-6" style={{ borderColor: ink(step.color), boxShadow: `6px 6px 0 ${tint(step.color, 20)}` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center" style={{ width: 52, height: 52, background: "var(--background)", border: `3px solid ${ink(step.color)}` }}>
                    <Icon name={step.icon} size={24} color={ink(step.color)} />
                  </div>
                  <span className="font-pixel" style={{ fontSize: 22, color: `${tint(step.color, 40)}` }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-pixel" style={{ margin: 0, fontSize: 15, color: ink(step.color) }}>{step.title}</h3>
                <p className="text-soft-foreground" style={{ margin: 0 }}>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
