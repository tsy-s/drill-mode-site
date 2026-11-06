import { PixelMascot } from "../avatars/PixelMascot";

/**
 * PixelMascot (Pixi) cropped to its head: grid columns 3–13 and rows 0–8 of its 16×16
 * grid, keeping room for hats but stopping above the body's first row.
 * Copied from Drill-Mode-Assets/src/assets/MascotHead.tsx, then made crisp and squeeze-proof:
 *
 * - `size` is the head's width. It is rounded to whole screen pixels per grid cell
 *   (multiples of 10px: 20, 30, 40…), so every Pixi pixel is the same size and two heads
 *   always match. Uneven cells (24px = 2.4px a cell) made the eyes look different.
 * - The box can't shrink in a flex row. A squeezed box used to letterbox the head and show
 *   the arms and body below it.
 * - The crop is a nested <svg>, which clips to its own box, so nothing outside the head
 *   can show even if CSS resizes it.
 */
export function MascotHead({ size = 30, color = "#4ecdc4", hat = "None", eyes = "Default" }: {
  size?: number; color?: string; hat?: string; eyes?: string;
}) {
  // The cap's brim sticks out to the left, so that crop starts two columns earlier and is
  // wider; the head itself stays the same size.
  const [x, w] = hat === "Cap" ? [1, 12] : [3, 10];
  const cell = Math.max(1, Math.round(size / 10));
  const width = cell * w;
  const height = cell * 8;
  return (
    <svg
      width={width} height={height} viewBox={`${x} 0 ${w} 8`} shapeRendering="crispEdges" aria-hidden="true"
      style={{ imageRendering: "pixelated", display: "block", flexShrink: 0, width, height }}
    >
      <svg x={x} y={0} width={w} height={8} viewBox={`${x} 0 ${w} 8`} overflow="hidden">
        <PixelMascot size={16} color={color} hat={hat} eyes={eyes} />
      </svg>
    </svg>
  );
}
