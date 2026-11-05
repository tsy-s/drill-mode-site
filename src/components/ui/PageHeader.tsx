import type { ReactNode } from "react";
import { Stars } from "../layout/Stars";
import { GlitchText } from "../brand/GlitchText";

/** The heading block at the top of pages that don't have a cinematic intro. */
export function PageHeader({ eyebrow, title, text, color = "var(--green)", children }: {
  eyebrow: string; title: string; text?: string; color?: string; children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden" style={{ paddingTop: "clamp(128px, 16vw, 176px)", paddingBottom: "clamp(48px, 7vw, 80px)", background: "radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--border) 35%, var(--background)) 0%, var(--background) 70%)", borderBottom: "4px solid var(--secondary)" }}>
      <Stars count={50} />
      <div className="container-site relative flex flex-col items-center gap-5 text-center">
        <div className="eyebrow">{eyebrow}</div>
        <GlitchText
          as="h1"
          text={title}
          color={color}
          every={5000}
          className="font-pixel"
          style={{ fontSize: "clamp(1.5rem, 4.4vw, 3rem)", lineHeight: 1.4, margin: 0 }}
        />
        {text && <p className="lead max-w-[60ch]" style={{ margin: 0 }}>{text}</p>}
        {children}
      </div>
    </header>
  );
}
