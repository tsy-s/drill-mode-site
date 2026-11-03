import type { ReactNode } from "react";

/** A pixel speech bubble. `tail` says which side the little pointer sits on. */
export function SpeechBubble({ children, tail = "left", color = "#00d4ff", className = "" }: {
  children: ReactNode; tail?: "left" | "right" | "bottom"; color?: string; className?: string;
}) {
  const tailStyle =
    tail === "left" ? { left: -14, top: 18 } :
    tail === "right" ? { right: -14, top: 18 } :
    { left: 28, bottom: -14 };
  return (
    <div className={`relative ${className}`} style={{ background: "#0b1c2b", border: `3px solid ${color}`, padding: "10px 14px", boxShadow: `4px 4px 0 ${color}55` }}>
      <span aria-hidden="true" style={{ position: "absolute", width: 11, height: 11, background: "#0b1c2b", ...tailStyle,
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
