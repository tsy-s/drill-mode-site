import type { ReactNode } from "react";
import { splitByPhrases } from "../../lib/highlight";
import { PixelAvatar } from "../avatars/PixelAvatar";
import { CharacterAvatar } from "../avatars/character";
import { CharGrandma } from "../avatars/characters/CharGrandma";
import { CharKid } from "../avatars/characters/CharKid";
import { CharMum } from "../avatars/characters/CharMum";
import { MascotHead } from "../brand/MascotHead";
import { IconCheck, IconEnvelope, IconFamily, IconReportFlag, IconWarning } from "../icons";
import { PixelCrown, PixelPhone } from "./PixelPhone";

/*
 * Static phone screens that show what each drill looks like in the app. They're drawn in
 * HTML (not screenshots), so the text inside can be edited here. To use a real screenshot
 * instead, set `image` on the drill in src/content/product.ts.
 */

export function PhoneFrame({ children, className = "", title }: { children: ReactNode; className?: string; title?: string }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-status"><span>9:41</span><span>{title ?? "DRILL MODE"}</span><span>▮▮▮</span></div>
      {children}
    </div>
  );
}

/** Marks red-flag phrases inside a line of text. */
function Flagged({ text, phrases }: { text: string; phrases: string[] }) {
  return (
    <>
      {splitByPhrases(text, phrases).map((p, i) =>
        p.match === -1 ? <span key={i}>{p.text}</span> : <mark key={i} className="flag-mark">{p.text}</mark>,
      )}
    </>
  );
}

export function CallMock() {
  return (
    <PhoneFrame title="SCAM CALL">
      <div className="flex items-center justify-between px-3 py-2 text-xs" style={{ background: "#111827", borderBottom: "3px solid #2a3a5c" }}>
        <span className="flex items-center gap-2" style={{ color: "#ff6b35" }}>
          <span style={{ width: 7, height: 7, background: "#ff6b35", animation: "pulse-dot 1s ease-in-out infinite" }} />
          CALLER SPEAKING
        </span>
        <span style={{ color: "#ffe66d" }}>00:42</span>
      </div>
      <div className="flex items-center gap-3 px-3 py-2" style={{ borderBottom: "2px solid #1a2340" }}>
        <PixelPhone size={40} ringing />
        <div className="text-xs leading-snug">
          <div className="text-white">OFFICER TAN</div>
          <div className="flex items-center gap-1" style={{ color: "#ff6b35" }}><IconWarning size={9} color="#ff6b35" /> SCAM DRILL ACTIVE</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 text-[13px]">
        <div className="flex gap-2 items-start">
          <PixelAvatar rank={9} size={20} />
          <div className="bubble is-caller" style={{ maxWidth: "80%" }}>
            <Flagged text="This is Officer Tan from the Office of Public Trust." phrases={["Office of Public Trust"]} />
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <PixelAvatar rank={9} size={20} />
          <div className="bubble is-caller" style={{ maxWidth: "80%", borderColor: "#ff2d55" }}>
            <Flagged text="Move your savings to a safe account right now." phrases={["safe account", "right now"]} />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bubble is-you" style={{ maxWidth: "75%" }}>Banks don't do that. I'm hanging up.</div>
        </div>
      </div>
      <div className="p-3" style={{ borderTop: "3px solid #2a3a5c" }}>
        <div className="text-center py-2 text-sm text-white" style={{ background: "#ff2d55", border: "3px solid #0a0e1a", boxShadow: "3px 3px 0 #0a0e1a" }}>[ HANG UP ]</div>
      </div>
    </PhoneFrame>
  );
}

export function SmsMock() {
  return (
    <PhoneFrame title="MESSAGES">
      <div className="px-3 py-2 text-xs" style={{ background: "#111827", borderBottom: "3px solid #2a3a5c" }}>
        <div className="text-white">ParcelGo Alert</div>
        <div style={{ color: "#6b8ba4" }}>Text message · Today 11:47</div>
      </div>
      <div className="flex flex-col gap-3 p-3 text-[13px]">
        <div className="bubble" style={{ maxWidth: "88%" }}>
          <Flagged
            text="Delivery failed. Pay a $1.99 redelivery fee today or your parcel will be returned: parcelgo-redeliver.example"
            phrases={["$1.99 redelivery fee", "today", "parcelgo-redeliver.example"]}
          />
        </div>
        <div className="flex items-center gap-2 text-xs" style={{ color: "#ff8095" }}>
          <IconReportFlag size={12} color="#ff2d55" /> 3 RED FLAGS FOUND
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-center">
          <div className="py-2" style={{ background: "#ff2d55", color: "#fff", border: "3px solid #0a0e1a" }}>REPORT SCAM</div>
          <div className="py-2" style={{ background: "#1a2340", color: "#9bb0c8", border: "3px solid #2a3a5c" }}>PAY FEE</div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export function EmailMock() {
  return (
    <PhoneFrame title="INBOX">
      <div className="px-3 py-2 text-xs" style={{ background: "#111827", borderBottom: "3px solid #2a3a5c" }}>
        <div className="flex items-center gap-2 text-white"><IconEnvelope size={12} /> Campus Rewards Office</div>
        <div><Flagged text="rewards@campus-secure.example" phrases={["campus-secure.example"]} /></div>
      </div>
      <div className="p-3 flex flex-col gap-3 text-[13px]">
        <div className="text-white font-pixel" style={{ fontSize: 10, lineHeight: 1.7 }}>YOU'VE WON A $300 REWARD!</div>
        <p style={{ margin: 0, color: "#c4d5e3" }}>
          <Flagged text="Claim within 30 minutes or your reward will be reassigned. Verify your account to continue." phrases={["within 30 minutes", "will be reassigned", "Verify your account"]} />
        </p>
        <div className="flex items-center gap-2 px-2 py-2 text-xs" style={{ border: "2px dashed #ff2d55", color: "#ff8095" }}>
          <IconWarning size={11} color="#ff2d55" /> reward_form.zip
        </div>
        <div className="text-center py-2 text-xs" style={{ background: "#4ecdc4", color: "#0a0e1a", border: "3px solid #0a0e1a" }}>CLAIM REWARD</div>
      </div>
    </PhoneFrame>
  );
}

export function QuizMock() {
  return (
    <PhoneFrame title="INDIVIDUAL DRILL">
      <div className="px-3 py-2 flex items-center justify-between text-xs" style={{ background: "#111827", borderBottom: "3px solid #2a3a5c" }}>
        <span style={{ color: "#ffe66d" }}>MESSAGE 3 / 5</span>
        <span style={{ color: "#00ff88" }}>+200 XP</span>
      </div>
      <div className="p-3 flex flex-col gap-3 text-[13px]">
        <div className="text-xs" style={{ color: "#6b8ba4" }}>FROM: +65 8000 0347</div>
        <div className="bubble">
          <Flagged text="Hi it's me, this is my new number. I need $950 urgently. Please don't call." phrases={["this is my new number", "I need $950", "Please don't call"]} />
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] text-center">
          {["REPORT AS SCAM", "TRANSFER MONEY", "SAVE NUMBER", "ASK FAMILY FIRST"].map((a, i) => (
            <div key={a} className="py-2 px-1" style={{ background: i === 0 ? "#00ff88" : "#1a2340", color: i === 0 ? "#0a0e1a" : "#9bb0c8", border: `3px solid ${i === 0 ? "#0a0e1a" : "#2a3a5c"}` }}>{a}</div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs" style={{ color: "#00ff88" }}><IconCheck size={12} /> NICE CATCH! +100 XP</div>
      </div>
    </PhoneFrame>
  );
}

export function HouseMock() {
  const players = [
    { name: "GRANDMA", score: 400, char: <CharGrandma size={26} />, crown: true },
    { name: "MUM", score: 300, char: <CharMum size={26} /> },
    { name: "YOU", score: 300, char: <CharacterAvatar size={30} config={{ skinTone: "tan", hairStyle: "short", hairColor: "midnight", outfit: "red-hoodie", accessories: [] }} /> },
    { name: "KID", score: 200, char: <CharKid size={22} /> },
  ];
  return (
    <PhoneFrame title="HOUSE DRILL">
      <div className="px-3 py-2 flex items-center gap-2 text-xs" style={{ background: "#111827", borderBottom: "3px solid #2a3a5c", color: "#00d4ff" }}>
        <IconFamily size={14} /> RACE · ROUND 4 / 5
      </div>
      <div className="p-3 flex flex-col gap-2">
        {players.map((p) => (
          <div key={p.name} className="flex items-center gap-3 px-2 py-2" style={{ background: "#111827", border: `3px solid ${p.crown ? "#ffe66d" : "#2a3a5c"}` }}>
            <div className="w-9 flex justify-center items-end" style={{ height: 44 }}>{p.char}</div>
            <div className="flex-1 text-xs text-white flex items-center gap-2">{p.name}{p.crown && <PixelCrown size={16} />}</div>
            <div className="text-xs" style={{ color: p.crown ? "#ffe66d" : "#9bb0c8" }}>{p.score} XP</div>
          </div>
        ))}
        <div className="flex items-start gap-2 mt-1">
          <MascotHead size={22} />
          <div className="bubble is-pixi text-[12px]">Grandma's on a streak! Mum, can you catch up? 👀</div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export const DRILL_MOCKS = { call: CallMock, sms: SmsMock, email: EmailMock, quiz: QuizMock, house: HouseMock };
