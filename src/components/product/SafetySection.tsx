import { PRODUCT } from "../../content/product";
import { Icon } from "../icons/registry";
import { Reveal } from "../layout/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

/** "Safe by design": the six safety promises. */
export function SafetySection({ id }: { id: string }) {
  const safety = PRODUCT.safety;
  return (
    <section id={id} className="section">
      <div className="container-site flex flex-col gap-12">
        <SectionHeader eyebrow={safety.eyebrow} eyebrowColor="#00ff88" title={safety.title} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {safety.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 100}>
              <div className="h-full flex gap-4 p-5" style={{ background: "#0d1322", border: "3px solid #1a2340" }}>
                <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 44, height: 44, border: "3px solid #00ff88", background: "#0a0e1a" }}>
                  <Icon name={item.icon} size={18} color="#00ff88" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 style={{ margin: 0, fontSize: "var(--text-heading)", color: "#ffffff" }}>{item.title}</h3>
                  <p className="text-soft-foreground" style={{ margin: 0 }}>{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
