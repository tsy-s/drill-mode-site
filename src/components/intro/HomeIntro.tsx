import type { CSSProperties } from "react";
import { HOME } from "../../content/home";
import { UI } from "../../content/site";
import { useContent } from "../../i18n/content";
import { PixelMascot } from "../avatars/PixelMascot";
import { ColorDots } from "../brand/ColorDots";
import { GlitchText } from "../brand/GlitchText";
import { IconArrow } from "../icons";
import { PixelButton } from "../ui/PixelButton";
import { IntroShell, scrollToId, useAfter } from "./IntroShell";

/*
 * Home page opening, in milliseconds:
 *   0     letterbox bars close in, stars fade up
 *   250   Pixi falls in spinning, squashes on landing and bounces (1750 ms)
 *   2050  white flash + screen shake, DRILL MODE glitches in
 *   2600+ subtitle, colour dots, taglines, Start button, scroll hint (each --d)
 *   3900  done: everything visible, Pixi idles, the wordmark keeps glitching now and then
 * The timings of the CSS animations are in site.css ("CINEMATIC INTRO").
 */
const LOGO_AT = 2050;

export function HomeIntro({ startId }: { startId: string }) {
  const intro = useContent(HOME).intro;
  const ui = useContent(UI);
  return (
    <IntroShell id="home" startId={startId} duration={3900} flashAt={LOGO_AT} skipLabel={intro.skip} label={ui.intro.home}>
      {({ done }) => <Stage done={done} startId={startId} />}
    </IntroShell>
  );
}

function Stage({ done, startId }: { done: boolean; startId: string }) {
  const intro = useContent(HOME).intro;
  const revealed = useAfter(LOGO_AT, done);
  const late = (d: number) => ({ "--d": `${d}ms` }) as CSSProperties;

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="pixi-drop">
          <div className="pixi-spin">
            <div className="pixel-fluid" style={{ width: "min(34vw, 21vh, 190px)" }}>
              <PixelMascot size={160} animate={done} separated />
            </div>
          </div>
        </div>
        {/* The shadow stays on the ground and grows as Pixi lands. */}
        <div className="pixi-shadow" />
      </div>

      <div style={{ opacity: revealed ? 1 : 0 }}>
        <GlitchText
          as="h1"
          text={intro.title}
          burst={revealed && !done}
          className="font-pixel"
          style={{ fontSize: "clamp(30px, min(8.5vw, 9vh), 84px)", lineHeight: 1.25, margin: 0, letterSpacing: "0.06em" }}
        />
      </div>

      <div className="intro-late font-pixel" style={{ ...late(2600), color: "#4ecdc4", fontSize: "clamp(10px, 1.4vw, 14px)", letterSpacing: "0.3em" }}>
        {intro.subtitle}
      </div>
      <div className="intro-late" style={late(2800)}><ColorDots /></div>
      <div className="intro-late font-vt" style={{ ...late(3000), color: "#ffe66d", fontSize: "clamp(20px, min(3vw, 4.2vh), 32px)" }}>
        {intro.taglines.map((t) => <div key={t}>{t}</div>)}
      </div>
      <div className="intro-late" style={late(3300)}>
        <PixelButton size="lg" onClick={() => scrollToId(startId)}>{intro.button}</PixelButton>
      </div>
      <button
        type="button"
        onClick={() => scrollToId(startId)}
        className="intro-late scroll-hint flex flex-col items-center gap-2 text-sm tracking-[0.3em] text-muted-foreground bg-transparent border-0 cursor-pointer"
        style={late(3550)}
      >
        {intro.scrollHint}
        <IconArrow direction="down" size={14} color="#6b8ba4" />
      </button>
    </>
  );
}
