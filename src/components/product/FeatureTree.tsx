import { useEffect, useRef, type CSSProperties } from "react";
import { PRODUCT } from "../../content/product";
import { useInView } from "../../hooks/useInView";
import { useContent } from "../../i18n/content";
import { PixelMascot } from "../avatars/PixelMascot";
import { MascotHead } from "../brand/MascotHead";
import { IconCheck } from "../icons";
import { Icon } from "../icons/registry";
import { SectionHeader } from "../ui/SectionHeader";
import { SpeechBubble } from "../ui/SpeechBubble";
import { FeatureVisual } from "./FeatureVisual";
import { ink, tint } from "../../lib/color";

type Feature = (typeof PRODUCT.features.items)[number];

/**
 * Pixi at the top, a glowing trace down the middle, and the features branching out to
 * the left and right. The trace fills up (and Pixi's head rides down it) as you scroll.
 * Styles: "PRODUCT FEATURE TREE" in site.css. Content: PRODUCT.features in src/content/product.ts.
 */
export function FeatureTree({ id }: { id: string }) {
  const features = useContent(PRODUCT).features;
  const treeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = treeRef.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight * 0.55 - rect.top) / rect.height;
      el.style.setProperty("--trunk", Math.min(1, Math.max(0, progress)).toFixed(3));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id={id} className="section">
      <div className="container-site flex flex-col gap-12">
        <SectionHeader eyebrow={features.eyebrow} title={features.title} text={features.text} />

        <div className="flex flex-col items-center gap-4">
          <SpeechBubble tail="bottom" className="text-sm max-w-xs text-center">{features.pixiSays}</SpeechBubble>
          <div className="pixel-fluid" style={{ width: 110 }}><PixelMascot size={110} animate separated /></div>
        </div>

        <div ref={treeRef} className="tree">
          <div className="tree-trunk" aria-hidden="true"><div className="tree-trunk-fill" /></div>
          <div className="tree-rider" aria-hidden="true"><MascotHead size={30} /></div>
          {features.items.map((feature, i) => (
            <FeatureRow key={feature.id} feature={feature} side={i % 2 === 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ feature, side }: { feature: Feature; side: "left" | "right" }) {
  const [ref, inView] = useInView<HTMLDivElement>("0px 0px -20% 0px");
  return (
    <div
      ref={ref}
      id={`feature-${feature.id}`}
      className={`tree-row is-${side} ${inView ? "is-visible" : ""}`}
      style={{ "--accent-color": ink(feature.accent) } as CSSProperties}
    >
      <div className="tree-branch" aria-hidden="true" />
      <div className="tree-node" aria-hidden="true" />
      <article className="tree-card pixel-card flex flex-col gap-4 p-5 md:p-6" style={{ borderColor: ink(feature.accent), boxShadow: `6px 6px 0 ${tint(feature.accent, 20)}` }}>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center" style={{ width: 40, height: 40, border: `3px solid ${ink(feature.accent)}`, background: "var(--background)" }}>
            <Icon name={feature.icon} size={20} color={ink(feature.accent)} />
          </div>
          <span className="pixel-chip" style={{ color: ink(feature.accent) }}>{feature.tag}</span>
        </div>
        <h3 className="font-pixel" style={{ margin: 0, fontSize: "clamp(12px, 1.3vw, 15px)", lineHeight: 1.7, color: "var(--foreground-strong)" }}>{feature.title}</h3>
        <p className="text-soft-foreground" style={{ margin: 0 }}>{feature.text}</p>
        <FeatureVisual kind={feature.visual} image={feature.image} alt={feature.title} />
        <ul className="flex flex-col gap-2 text-sm" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {feature.points.map((p) => (
            <li key={p} className="flex items-start gap-2"><span className="mt-1"><IconCheck size={12} color={ink(feature.accent)} /></span>{p}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
