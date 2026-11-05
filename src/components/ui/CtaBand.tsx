import { PixelMascot } from "../avatars/PixelMascot";
import { Reveal } from "../layout/Reveal";
import { Stars } from "../layout/Stars";
import { PixelLink } from "./PixelLink";

/** The closing call-to-action panel used at the bottom of several pages. */
export function CtaBand({ title, text, button }: { title: string; text?: string; button: { label: string; to: string } }) {
  return (
    <section className="section">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden flex flex-col items-center gap-6 px-6 py-14 text-center" style={{ background: "var(--surface)", border: "4px solid var(--border)", boxShadow: "8px 8px 0 var(--shadow-pixel)" }}>
            <Stars count={40} />
            <div className="relative pixel-fluid" style={{ width: 88, animation: "float-y 2.4s ease-in-out infinite" }}>
              <PixelMascot size={88} animate separated />
            </div>
            <h2 className="relative section-title" style={{ margin: 0 }}>{title}</h2>
            {text && <p className="relative lead max-w-[52ch]" style={{ margin: 0 }}>{text}</p>}
            <div className="relative pt-2">
              <PixelLink to={button.to} size="lg">{button.label}</PixelLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
