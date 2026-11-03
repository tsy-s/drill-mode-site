import type { ReactNode } from "react";
import { Reveal } from "../layout/Reveal";

/** The eyebrow + heading + intro text that opens most sections. */
export function SectionHeader({ eyebrow, title, text, align = "center", eyebrowColor, children }: {
  eyebrow?: string; title: string; text?: string; align?: "center" | "left"; eyebrowColor?: string; children?: ReactNode;
}) {
  const center = align === "center";
  return (
    <Reveal className={`flex flex-col gap-4 ${center ? "items-center text-center mx-auto" : "items-start"}`}>
      {eyebrow && <div className="eyebrow" style={eyebrowColor ? { color: eyebrowColor } : undefined}>{eyebrow}</div>}
      <h2 className="section-title max-w-[22ch]" style={{ margin: 0 }}>{title}</h2>
      {text && <p className={`lead max-w-[60ch] ${center ? "mx-auto" : ""}`} style={{ margin: 0 }}>{text}</p>}
      {children}
    </Reveal>
  );
}
