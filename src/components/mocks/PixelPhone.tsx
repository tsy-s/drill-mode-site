/** The pixel phone from the app's incoming-call screen (redrawn in Drill-Mode-Assets/src/assets/screens.tsx). */
export function PixelPhone({ size = 64, ringing = false }: { size?: number; ringing?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" shapeRendering="crispEdges" style={{ imageRendering: "pixelated", display: "block", animation: ringing ? "ring 1.2s steps(6) infinite" : undefined }} aria-hidden="true">
      <rect x={16} y={8} width={48} height={64} fill="#2a3a5c" />
      <rect x={20} y={12} width={40} height={56} fill="#111827" />
      <rect x={24} y={16} width={32} height={40} fill="#1a2340" />
      <rect x={28} y={60} width={24} height={4} fill="#2a3a5c" />
      <rect x={34} y={62} width={12} height={2} fill="#4ecdc4" />
      {ringing && (
        <>
          <rect x={8} y={24} width={4} height={4} fill="#ffe66d" />
          <rect x={68} y={24} width={4} height={4} fill="#ffe66d" />
          <rect x={8} y={32} width={4} height={4} fill="#ffe66d" />
          <rect x={68} y={32} width={4} height={4} fill="#ffe66d" />
        </>
      )}
    </svg>
  );
}

/** The crown shown beside the winner of a house race. */
export function PixelCrown({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 8 6" shapeRendering="crispEdges" style={{ imageRendering: "pixelated", display: "block" }} aria-hidden="true">
      <rect x={0} y={1} width={1} height={4} fill="#ffe66d" />
      <rect x={7} y={1} width={1} height={4} fill="#ffe66d" />
      <rect x={3} y={0} width={2} height={5} fill="#ffe66d" />
      <rect x={1} y={3} width={6} height={3} fill="#ffe66d" />
      <rect x={3} y={4} width={2} height={1} fill="#ff2d55" />
    </svg>
  );
}
