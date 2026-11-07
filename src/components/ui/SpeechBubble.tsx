import type { ReactNode } from "react";
import { tint } from "../../lib/color";

/** A pixel speech bubble. `tail` says which side the little pointer sits on. */
export function SpeechBubble({ children, tail = "left", color = "var(--cyan)", className = "" }: {
  children: ReactNode; tail?: "left" | "right" | "bottom"; color?: string; className?: string;
}) {
  const tailStyle =
    tail === "left" ? { left: -14, top: 18 } :
    tail === "right" ? { right: -14, top: 18 } :
    { left: 28, bottom: -14 };
  return (
    <div className={`relative ${className}`} style={{ background: "color-mix(in srgb, var(--cyan) 10%, var(--background))", border: `3px solid ${color}`, padding: "10px 14px", boxShadow: `4px 4px 0 ${tint(color, 33)}` }}>
      <span aria-hidden="true" style={{ position: "absolute", width: 11, height: 11, background: "color-mix(in srgb, var(--cyan) 10%, var(--background))", ...tailStyle,
        borderLeft: tail === "left" || tail === "bottom" ? `3px solid ${color}` : undefined,
        borderBottom: tail !== "right" ? `3px solid ${color}` : undefined,
        borderRight: tail === "right" ? `3px solid ${color}` : undefined,
        borderTop: tail === "right" ? `3px solid ${color}` : undefined,
        transform: tail === "bottom" ? "rotate(-45deg)" : "rotate(45deg)",
      }} />
      <div className="relative">{children}</div>
    </div>
  );
}
