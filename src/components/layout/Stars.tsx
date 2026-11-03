/**
 * Twinkling pixel stars, from the app (huawei-2026/src/app/components/layout/Stars.tsx).
 * Positions come from a fixed formula, so the sky looks the same on every visit.
 */
export function Stars({ count = 40, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`stars ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 137.5) % 100}%`,
            top: `${(i * 73.1) % 100}%`,
            width: i % 3 === 0 ? 2 : 1,
            height: i % 3 === 0 ? 2 : 1,
            opacity: 0.3 + (i % 4) * 0.15,
            animation: `twinkle ${1.5 + (i % 3) * 0.7}s ease-in-out infinite`,
            animationDelay: `${(i % 7) * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}
