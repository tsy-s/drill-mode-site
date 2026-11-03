import { HOME } from "../../content/home";
import { PixelMascot } from "../avatars/PixelMascot";
import { CharGrandma } from "../avatars/characters/CharGrandma";
import { CharKid } from "../avatars/characters/CharKid";
import { Reveal } from "../layout/Reveal";
import { RoomScene } from "../room/RoomScene";
import { PixelLink } from "../ui/PixelLink";
import { SpeechBubble } from "../ui/SpeechBubble";

/** The first section after the Home intro: tagline, short description and two buttons. */
export function HeroSection({ id }: { id: string }) {
  const hero = HOME.hero;
  return (
    <section id={id} className="section" style={{ paddingTop: "clamp(112px, 14vw, 160px)" }}>
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="flex flex-col gap-6">
          <div className="eyebrow">{hero.eyebrow}</div>
          <h2 className="font-pixel" style={{ margin: 0, fontSize: "clamp(1.5rem, 3.6vw, 2.5rem)", lineHeight: 1.45, color: "#ffffff" }}>
            {hero.title}
          </h2>
          <p className="lead" style={{ margin: 0 }}>{hero.text}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <PixelLink to={hero.primary.to} size="lg">[ {hero.primary.label} ]</PixelLink>
            <PixelLink to={hero.secondary.to} size="lg" color="#1a2340" textColor="#e8f4f8">{hero.secondary.label}</PixelLink>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto" style={{ maxWidth: 520 }}>
            <RoomScene
              className="pixel-card"
              style={{ wall: "violet", pattern: "grid", floor: "checker", light: "pink", glow: true }}
              furniture={[
                { art: "08-city-window", x: 8, wall: true, size: 22 },
                { art: "28-neon-sign", x: 68, wall: true, size: 20 },
                { art: "01-mint-couch", x: 4, size: 26 },
                { art: "13-leafy-plant", x: 84, size: 14 },
              ]}
            >
              <div style={{ aspectRatio: "4 / 3" }} />
              <div className="absolute flex items-end gap-4" style={{ left: "34%", bottom: "8%", zIndex: 3 }}>
                <CharGrandma size={44} frame={1} />
                <div className="pixel-fluid" style={{ width: 96, animation: "float-y 2.4s ease-in-out infinite" }}>
                  <PixelMascot size={96} animate separated />
                </div>
                <CharKid size={36} frame={2} />
              </div>
            </RoomScene>
            <div className="absolute" style={{ right: "-4%", top: "-10%", maxWidth: 240, zIndex: 4 }}>
              <SpeechBubble tail="bottom" className="text-sm">{hero.pixiSays}</SpeechBubble>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
