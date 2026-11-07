import { Link } from "react-router-dom";
import { format, SITE, UI } from "../../content/site";
import { useContent } from "../../i18n/content";
import { PixelMascot } from "../avatars/PixelMascot";
import { GlitchText } from "./GlitchText";
import { MascotHead } from "./MascotHead";

/**
 * The Drill Mode logo: Pixi (head or full body) beside the glitching DRILL MODE wordmark.
 * Which Pixi is shown, and how often the wordmark glitches, is set in src/content/site.ts → LOGO.
 */
export function Logo({ size = "md", to = "/" }: { size?: "sm" | "md" | "lg"; to?: string }) {
  const ui = useContent(UI);
  const fontSize = size === "lg" ? 22 : size === "sm" ? 12 : 15;
  const headSize = Math.round(fontSize * 2);
  return (
    <Link to={to} className="inline-flex items-center gap-3 select-none" aria-label={format(ui.logoLabel, { name: SITE.name })}>
      {SITE.logo.mascot === "body"
        ? <PixelMascot size={Math.round(fontSize * 2.6)} color={SITE.logo.mascotColor} separated />
        : <MascotHead size={headSize} color={SITE.logo.mascotColor} />}
      <GlitchText
        text={SITE.logo.wordmark}
        every={SITE.logo.glitchEvery}
        className="font-pixel"
        style={{ fontSize, letterSpacing: 2, lineHeight: 1 }}
      />
    </Link>
  );
}
