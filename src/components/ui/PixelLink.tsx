import { useState, type ReactNode } from "react";
import { SmartLink } from "./SmartLink";

/**
 * A link that looks exactly like the app's PixelButton (solid colour, thick ink border,
 * hard 4px shadow, pushes in when pressed). Use it for buttons that go to another page.
 */
export function PixelLink({
  to, children, color = "#00ff88", textColor = "#0a0e1a", size = "md", full = false, onClick,
}: {
  to: string; children: ReactNode; color?: string; textColor?: string;
  size?: "sm" | "md" | "lg"; full?: boolean; onClick?: () => void;
}) {
  const [pressed, setPressed] = useState(false);
  const pad = size === "lg" ? "px-6 py-4" : size === "sm" ? "px-3 py-2" : "px-4 py-3";
  const textSize = size === "lg" ? "var(--text-heading)" : size === "sm" ? "var(--text-label)" : "var(--text-body)";
  return (
    <SmartLink
      to={to}
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      className={`pixel-button ${pad} ${full ? "flex w-full" : "inline-flex"} items-center justify-center gap-2 text-center select-none uppercase`}
      style={{
        fontSize: textSize,
        backgroundColor: color,
        color: textColor,
        border: "4px solid #0a0e1a",
        boxShadow: pressed ? "none" : "4px 4px 0px #0a0e1a",
        transform: pressed ? "translate(4px, 4px)" : "translate(0,0)",
        fontFamily: "'Share Tech Mono', monospace",
        letterSpacing: "0.06em",
        transition: "transform 0.05s, box-shadow 0.05s",
      }}
    >
      {children}
    </SmartLink>
  );
}
