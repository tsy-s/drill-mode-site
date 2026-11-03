import { useEffect, useState, type ReactElement } from "react";
import type { FeatureVisual as Kind } from "../../content/product";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { CharacterAvatar } from "../avatars/character";
import { CharDad } from "../avatars/characters/CharDad";
import { CharGrandma } from "../avatars/characters/CharGrandma";
import { CharKid } from "../avatars/characters/CharKid";
import { CharMum } from "../avatars/characters/CharMum";
import { MascotHead } from "../brand/MascotHead";
import { IconCoin, IconMedal, IconShield, IconStar } from "../icons";
import { PixelPhone } from "../mocks/PixelPhone";
import { RoomScene } from "../room/RoomScene";
import { XPBar } from "../ui/XPBar";

/**
 * The small illustration inside each feature card on the Product page.
 * The `visual` name on a feature in src/content/product.ts picks one of these;
 * an `image` on the feature replaces it with that picture.
 */
export function FeatureVisual({ kind, image, alt }: { kind: Kind; image?: string; alt: string }) {
  if (image) return <img src={image} alt={alt} className="w-full object-cover" style={{ border: "3px solid #1a2340" }} />;
  const Visual = VISUALS[kind];
  return (
    <div className="relative overflow-hidden flex items-center justify-center" style={{ height: 176, background: "#0a0e1a", border: "3px solid #1a2340" }} aria-hidden="true">
      <Visual />
    </div>
  );
}

/** Cycles 0–3 every 400 ms, for the family characters' idle frames. */
function useFrame() {
  const reduced = useReducedMotion();
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setFrame((f) => (f + 1) % 4), 400);
    return () => clearInterval(t);
  }, [reduced]);
  return frame;
}

function CallVisual() {
  return (
    <div className="flex items-center gap-4 px-4">
      <PixelPhone size={64} ringing />
      <div className="bubble is-caller text-[13px]" style={{ maxWidth: 200 }}>
        "This is Officer Tan. Your account is linked to a <mark className="flag-mark">money-laundering case</mark>."
      </div>
    </div>
  );
}

function QuizVisual() {
  return (
    <div className="flex flex-col gap-2 px-4 w-full max-w-[280px]">
      <div className="bubble text-[12px]">Your parcel is held. Pay <mark className="flag-mark">$1.99</mark> today: <mark className="flag-mark">parcel-go.example</mark></div>
      <div className="grid grid-cols-2 gap-2 text-[11px] text-center">
        <div className="py-1" style={{ background: "#ff2d55", color: "#fff", border: "3px solid #0a0e1a" }}>SCAM</div>
        <div className="py-1" style={{ background: "#1a2340", color: "#9bb0c8", border: "3px solid #2a3a5c" }}>SAFE</div>
      </div>
    </div>
  );
}

function FamilyVisual() {
  const frame = useFrame();
  return (
    <div className="flex items-end gap-5" style={{ paddingTop: 20 }}>
      <CharGrandma size={36} frame={frame} />
      <CharDad size={38} frame={(frame + 1) % 4} />
      <CharMum size={36} frame={(frame + 2) % 4} />
      <CharKid size={30} frame={(frame + 3) % 4} />
    </div>
  );
}

function HouseVisual() {
  return (
    <RoomScene
      className="w-full h-full"
      style={{ wall: "midnight", pattern: "stars", floor: "tile", light: "purple", glow: true }}
      furniture={[
        { art: "02-starlight-bed", x: 4, size: 26 },
        { art: "09-curtained-window", x: 40, wall: true, size: 20 },
        { art: "29-floor-lamp", x: 84, size: 12 },
      ]}
    >
      <div className="absolute" style={{ left: "52%", bottom: "8%", zIndex: 3 }}>
        <CharacterAvatar size={64} animate config={{ skinTone: "peach", hairStyle: "wavy", hairColor: "auburn", outfit: "overalls", accessories: [] }} />
      </div>
    </RoomScene>
  );
}

function ChatVisual() {
  return (
    <div className="flex flex-col gap-2 px-4 w-full max-w-[300px] text-[12px]">
      <div className="flex items-start gap-2">
        <MascotHead size={20} />
        <div className="bubble is-pixi" style={{ padding: "6px 8px" }}>Dad hung up on the fake bank call straight away 👏</div>
      </div>
      <div className="flex items-start gap-2">
        <MascotHead size={20} />
        <div className="bubble is-pixi" style={{ padding: "6px 8px" }}>Mum, have you ever had a call like this?</div>
      </div>
      <div className="flex justify-end"><div className="bubble is-you" style={{ padding: "6px 8px" }}>Yes! Last month 😅</div></div>
    </div>
  );
}

function RewardsVisual() {
  return (
    <div className="flex flex-col gap-3 px-5 w-full max-w-[280px]">
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-2" style={{ color: "#ffe66d" }}><IconCoin size={16} /> PAYDAY SUNDAY</span>
        <span style={{ color: "#00ff88" }}>+350</span>
      </div>
      <XPBar current={68} max={100} />
      <div className="flex items-center justify-between text-xs text-soft-foreground">
        <span>LV 4 · SCAM BLOCKER</span>
        <span className="flex gap-1"><IconMedal rank={1} size={16} /><IconMedal rank={2} size={16} /><IconStar size={16} /></span>
      </div>
    </div>
  );
}

function LanguagesVisual() {
  const words = [
    { code: "EN", word: "Hello", color: "#00ff88" },
    { code: "中文", word: "你好", color: "#ffe66d" },
    { code: "BM", word: "Halo", color: "#4ecdc4" },
    { code: "தமிழ்", word: "வணக்கம்", color: "#c77dff" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 px-4 w-full max-w-[300px]">
      {words.map((w) => (
        <div key={w.code} className="flex items-center justify-between px-2 py-1 text-[13px]" style={{ border: `2px solid ${w.color}`, color: w.color }}>
          <span>{w.code}</span><span className="text-white">{w.word}</span>
        </div>
      ))}
    </div>
  );
}

function SafetyVisual() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div style={{ filter: "drop-shadow(0 0 10px rgba(0,255,136,0.8))" }}><IconShield size={56} color="#00ff88" /></div>
      <div className="font-pixel" style={{ fontSize: 11, color: "#00ff88" }}>SAFE</div>
    </div>
  );
}

const VISUALS: Record<Kind, () => ReactElement> = {
  call: CallVisual,
  quiz: QuizVisual,
  family: FamilyVisual,
  house: HouseVisual,
  chat: ChatVisual,
  rewards: RewardsVisual,
  languages: LanguagesVisual,
  safety: SafetyVisual,
};
