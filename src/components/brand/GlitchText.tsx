import { useEffect, useState, type CSSProperties, type ElementType } from "react";
import { useGlitch } from "../../hooks/useGlitch";

/**
 * Text with the Drill Mode glitch: a neon-green drop shadow that, every few seconds,
 * splits into red and teal copies for a blink (like the app's title screen).
 * Styles: "GLITCH" block in src/styles/site.css.
 *
 * - `every`: milliseconds between glitches (0 turns the periodic glitch off).
 * - `burst`: set to true to play the big one-off glitch (used when an intro reveals the logo).
 * - Use "\n" in `text` for a line break.
 */
export function GlitchText({
  text, as: Tag = "span", className = "", style, color, shadow, every = 3000, burst = false,
}: {
  text: string; as?: ElementType; className?: string; style?: CSSProperties;
  color?: string; shadow?: string; every?: number; burst?: boolean;
}) {
  const glitching = useGlitch(every);
  const [bursting, setBursting] = useState(false);
  useEffect(() => {
    if (!burst) { setBursting(false); return; }
    setBursting(true);
    const t = setTimeout(() => setBursting(false), 900);
    return () => clearTimeout(t);
  }, [burst]);

  const vars = {
    ...(color ? { "--glitch-color": color } : {}),
    ...(shadow ? { "--glitch-shadow": shadow } : {}),
  } as CSSProperties;

  return (
    <Tag
      data-text={text}
      className={`glitch ${bursting ? "is-bursting" : glitching ? "is-glitching" : ""} ${className}`}
      style={{ ...vars, ...style }}
    >
      {text}
    </Tag>
  );
}
