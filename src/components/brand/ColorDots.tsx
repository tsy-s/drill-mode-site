/** The row of five coloured pixels under the app's title logo. */
export const BRAND_COLORS = ["#ff6b35", "#ffe66d", "#00ff88", "#4ecdc4", "#ff2d55"];

export function ColorDots({ size = 8, gap = 6, className = "" }: { size?: number; gap?: number; className?: string }) {
  return (
    <div className={`flex ${className}`} style={{ gap }} aria-hidden="true">
      {BRAND_COLORS.map((c) => <span key={c} style={{ width: size, height: size, background: c }} />)}
    </div>
  );
}
