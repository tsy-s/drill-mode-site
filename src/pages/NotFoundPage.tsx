import { PixelMascot } from "../components/avatars/PixelMascot";
import { GlitchText } from "../components/brand/GlitchText";
import { Stars } from "../components/layout/Stars";
import { PixelLink } from "../components/ui/PixelLink";
import { UI } from "../content/site";
import { usePageMeta } from "../hooks/usePageMeta";
import { useContent } from "../i18n/content";

/** Shown for any address that isn't a page on the site. */
export function NotFoundPage() {
  const ui = useContent(UI);
  usePageMeta(ui.pageTitles.notFound);
  return (
    <section className="relative overflow-hidden flex items-center justify-center" style={{ minHeight: "100svh", padding: "120px 16px 64px" }}>
      <Stars count={60} />
      <div className="relative flex flex-col items-center gap-6 text-center">
        <div className="pixel-fluid" style={{ width: 120 }}><PixelMascot size={120} animate separated eyes="Shades" /></div>
        <GlitchText as="h1" text="404" color="var(--red)" shadow="color-mix(in srgb, var(--red) 35%, var(--background))" every={1800} className="font-pixel" style={{ fontSize: "clamp(48px, 10vw, 96px)", margin: 0 }} />
        <p className="font-vt" style={{ margin: 0, fontSize: 30, color: "var(--yellow)" }}>{ui.notFound.headline}</p>
        <p className="lead" style={{ margin: 0, maxWidth: "42ch" }}>{ui.notFound.text}</p>
        <PixelLink to="/" size="lg">{ui.notFound.button}</PixelLink>
      </div>
    </section>
  );
}
