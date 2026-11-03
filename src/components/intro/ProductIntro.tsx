import type { CSSProperties } from "react";
import { PRODUCT } from "../../content/product";
import { PixelMascot } from "../avatars/PixelMascot";
import { GlitchText } from "../brand/GlitchText";
import { IconArrow } from "../icons";
import { IntroShell, scrollToId, useAfter } from "./IntroShell";

/*
 * Product page opening, in milliseconds:
 *   300+  boot-up terminal lines type out, one every 450 ms
 *   2100  Pixi materialises in pixel steps
 *   2900  flash, MEET DRILL MODE glitches in
 *   3400+ subtitle and scroll hint
 *   4200  done
 */
const LINE_GAP = 450;
const PIXI_AT = 2100;
const TITLE_AT = 2900;

export function ProductIntro({ startId }: { startId: string }) {
  return (
    <IntroShell duration={4200} flashAt={TITLE_AT} skipLabel={PRODUCT.intro.skip} label="Product intro">
      {({ done }) => <Stage done={done} startId={startId} />}
    </IntroShell>
  );
}

function Stage({ done, startId }: { done: boolean; startId: string }) {
  const intro = PRODUCT.intro;
  const revealed = useAfter(TITLE_AT, done);
  const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

  return (
    <>
      <div className="text-left font-mono" style={{ width: "min(88vw, 40ch)", color: "#00ff88", fontSize: "clamp(12px, 1.5vw, 15px)", lineHeight: 1.9 }} aria-hidden="true">
        {intro.bootLines.map((line, i) => (
          <div key={line} className="boot-line" style={delay(300 + i * LINE_GAP)}>{line}</div>
        ))}
      </div>

      <div className="pixi-materialise pixel-fluid" style={{ ...delay(PIXI_AT), width: "min(30vw, 19vh, 170px)" }}>
        <PixelMascot size={160} animate={done} separated />
      </div>

      <div style={{ opacity: revealed ? 1 : 0 }}>
        <GlitchText
          as="h1"
          text={intro.title}
          burst={revealed && !done}
          className="font-pixel"
          style={{ fontSize: "clamp(24px, min(6vw, 7vh), 60px)", lineHeight: 1.35, margin: 0 }}
        />
      </div>

      <p className="intro-late lead" style={{ ...delay(3400), margin: 0, maxWidth: "36ch" }}>{intro.subtitle}</p>

      <button
        type="button"
        onClick={() => scrollToId(startId)}
        className="intro-late scroll-hint flex flex-col items-center gap-2 text-sm tracking-[0.3em] text-muted-foreground bg-transparent border-0 cursor-pointer"
        style={delay(3700)}
      >
        {intro.scrollHint}
        <IconArrow direction="down" size={14} color="#6b8ba4" />
      </button>
    </>
  );
}
