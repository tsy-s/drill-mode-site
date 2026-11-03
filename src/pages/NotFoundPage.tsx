import { PixelMascot } from "../components/avatars/PixelMascot";
import { GlitchText } from "../components/brand/GlitchText";
import { Stars } from "../components/layout/Stars";
import { PixelLink } from "../components/ui/PixelLink";
import { usePageMeta } from "../hooks/usePageMeta";

/** Shown for any address that isn't a page on the site. */
export function NotFoundPage() {
  usePageMeta("Page not found");
  return (
    <section className="relative overflow-hidden flex items-center justify-center" style={{ minHeight: "100svh", padding: "120px 16px 64px" }}>
      <Stars count={60} />
      <div className="relative flex flex-col items-center gap-6 text-center">
        <div className="pixel-fluid" style={{ width: 120 }}><PixelMascot size={120} animate separated eyes="Shades" /></div>
        <GlitchText as="h1" text="404" color="#ff2d55" shadow="#5a0f22" every={1800} className="font-pixel" style={{ fontSize: "clamp(48px, 10vw, 96px)", margin: 0 }} />
        <p className="font-vt" style={{ margin: 0, fontSize: 30, color: "#ffe66d" }}>SUSPICIOUS LINK DETECTED.</p>
        <p className="lead" style={{ margin: 0, maxWidth: "42ch" }}>This page doesn't exist. Good instinct to check! Let's get you somewhere safe.</p>
        <PixelLink to="/" size="lg">[ BACK TO HOME ]</PixelLink>
      </div>
    </section>
  );
}
