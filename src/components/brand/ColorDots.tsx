import { fill } from "../../lib/color";

/** The row of five coloured pixels under the app's title logo. */
export const BRAND_COLORS = ["#ff6b35", "#ffe66d", "#00ff88", "#4ecdc4", "#ff2d55"];

/*
 * Always the neon fills. In the light theme each dot also gets the dark edge from tokens.css
 * (NEON IN LIGHT), which keeps the yellow one visible; the gap widens by that edge so the dots
 * don't run together.
 */
export function ColorDots({ size = 8, gap = 6, className = "" }: { size?: number; gap?: number; className?: string }) {
  return (
    <div className={`flex ${className}`} style={{ gap: `calc(${gap}px + 2 * var(--fill-edge))` }} aria-hidden="true">
      {BRAND_COLORS.map((c) => <span key={c} style={{ width: size, height: size, background: fill(c) }} />)}
    </div>
  );
}
