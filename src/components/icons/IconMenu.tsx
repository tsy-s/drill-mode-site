export function IconMenu({ size = 20, color = "var(--foreground)" }: { size?: number; color?: string }) {
  return (
    <svg className="px-icon" width={size} height={size} viewBox="0 0 12 12" style={{ imageRendering: "pixelated", display: "block" }}>
      <rect x={0} y={1} width={12} height={2} fill={color} />
      <rect x={0} y={5} width={12} height={2} fill={color} />
      <rect x={0} y={9} width={12} height={2} fill={color} />
    </svg>
  );
}
