import type { ReactNode } from "react";
import { UI } from "../../content/site";
import { useContent } from "../../i18n/content";
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
    // Phone screens stay dark in the light theme too, like a real phone's screen.
    <div className={`phone ${className}`} data-theme="dark">
      <div className="phone-status"><span>9:41</span><span>{title ?? "DRILL MODE"}</span><span>▮▮▮</span></div>
      {children}
    </div>
  );
}

/** Marks red-flag phrases inside a line of text. */
export function Flagged({ text, phrases }: { text: string; phrases: string[] }) {
  return (
    <>
      {splitByPhrases(text, phrases).map((p, i) =>
        p.match === -1 ? <span key={i}>{p.text}</span> : <mark key={i} className="flag-mark">{p.text}</mark>,
      )}
    </>
  );
}

export function CallMock() {
  const m = useContent(UI).mocks.call;
  return (
    <PhoneFrame title={m.title}>
      <div className="flex items-center justify-between px-3 py-2 text-xs" style={{ background: "var(--card)", borderBottom: "3px solid var(--border)" }}>
        <span className="flex items-center gap-2" style={{ color: "var(--orange)" }}>
          <span style={{ width: 7, height: 7, background: "var(--orange-fill)", animation: "pulse-dot 1s ease-in-out infinite" }} />
          {m.speaking}
        </span>
        <span style={{ color: "var(--yellow)" }}>00:42</span>
      </div>
      <div className="flex items-center gap-3 px-3 py-2" style={{ borderBottom: "2px solid var(--secondary)" }}>
        <PixelPhone size={40} ringing />
        <div className="text-xs leading-snug">
          <div className="text-foreground-strong">{m.caller}</div>
          <div className="flex items-center gap-1" style={{ color: "var(--orange)" }}><IconWarning size={9} color="var(--orange)" /> {m.active}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 text-[13px]">
        <div className="flex gap-2 items-start">
          <PixelAvatar rank={9} size={20} />
          <div className="bubble is-caller" style={{ maxWidth: "80%" }}>
            <Flagged text={m.lines[0].text} phrases={m.lines[0].flags} />
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <PixelAvatar rank={9} size={20} />
          <div className="bubble is-caller" style={{ maxWidth: "80%", borderColor: "var(--red)" }}>
            <Flagged text={m.lines[1].text} phrases={m.lines[1].flags} />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bubble is-you" style={{ maxWidth: "75%" }}>{m.reply}</div>
        </div>
      </div>
      <div className="p-3" style={{ borderTop: "3px solid var(--border)" }}>
        <div className="text-center py-2 text-sm text-foreground-strong" style={{ background: "var(--red-fill)", border: "3px solid var(--outline)", boxShadow: "3px 3px 0 var(--outline)" }}>{m.hangUp}</div>
      </div>
    </PhoneFrame>
  );
}

export function SmsMock() {
  const m = useContent(UI).mocks.sms;
  return (
    <PhoneFrame title={m.title}>
      <div className="px-3 py-2 text-xs" style={{ background: "var(--card)", borderBottom: "3px solid var(--border)" }}>
        <div className="text-foreground-strong">{m.sender}</div>
        <div style={{ color: "var(--muted-foreground)" }}>{m.meta}</div>
      </div>
      <div className="flex flex-col gap-3 p-3 text-[13px]">
        <div className="bubble" style={{ maxWidth: "88%" }}>
          <Flagged text={m.text} phrases={m.flags} />
        </div>
        <div className="flex items-center gap-2 text-xs" style={{ color: "var(--red-soft)" }}>
          <IconReportFlag size={12} color="var(--red)" /> {m.found}
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-center">
          <div className="py-2" style={{ background: "var(--red-fill)", color: "var(--on-danger)", border: "3px solid var(--outline)" }}>{m.report}</div>
          <div className="py-2" style={{ background: "var(--secondary)", color: "var(--soft-foreground)", border: "3px solid var(--border)" }}>{m.pay}</div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export function EmailMock() {
  const m = useContent(UI).mocks.email;
  return (
    <PhoneFrame title={m.title}>
      <div className="px-3 py-2 text-xs" style={{ background: "var(--card)", borderBottom: "3px solid var(--border)" }}>
        <div className="flex items-center gap-2 text-foreground-strong"><IconEnvelope size={12} /> {m.sender}</div>
        <div><Flagged text="rewards@campus-secure.example" phrases={["campus-secure.example"]} /></div>
      </div>
      <div className="p-3 flex flex-col gap-3 text-[13px]">
        <div className="text-foreground-strong font-pixel" style={{ fontSize: 10, lineHeight: 1.7 }}>{m.subject}</div>
        <p style={{ margin: 0, color: "var(--foreground)" }}>
          <Flagged text={m.text} phrases={m.flags} />
        </p>
        <div className="flex items-center gap-2 px-2 py-2 text-xs" style={{ border: "2px dashed var(--red)", color: "var(--red-soft)" }}>
          <IconWarning size={11} color="var(--red)" /> reward_form.zip
        </div>
        <div className="text-center py-2 text-xs" style={{ background: "var(--teal-fill)", color: "var(--on-fill)", border: "3px solid var(--outline)" }}>{m.claim}</div>
      </div>
    </PhoneFrame>
  );
}

export function QuizMock() {
  const m = useContent(UI).mocks.quiz;
  return (
    <PhoneFrame title={m.title}>
      <div className="px-3 py-2 flex items-center justify-between text-xs" style={{ background: "var(--card)", borderBottom: "3px solid var(--border)" }}>
        <span style={{ color: "var(--yellow)" }}>{m.progress}</span>
        <span style={{ color: "var(--green)" }}>+200 XP</span>
      </div>
      <div className="p-3 flex flex-col gap-3 text-[13px]">
        <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>{m.from}</div>
        <div className="bubble">
          <Flagged text={m.text} phrases={m.flags} />
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] text-center">
          {m.actions.map((a, i) => (
            <div key={a} className="py-2 px-1" style={{ background: i === 0 ? "var(--green-fill)" : "var(--secondary)", color: i === 0 ? "var(--on-fill)" : "var(--soft-foreground)", border: `3px solid ${i === 0 ? "var(--outline)" : "var(--border)"}` }}>{a}</div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs" style={{ color: "var(--green)" }}><IconCheck size={12} /> {m.result}</div>
      </div>
    </PhoneFrame>
  );
}

export function HouseMock() {
  const m = useContent(UI).mocks.house;
  const players = [
    { name: m.players[0], score: 400, char: <CharGrandma size={26} />, crown: true },
    { name: m.players[1], score: 300, char: <CharMum size={26} /> },
    { name: m.players[2], score: 300, char: <CharacterAvatar size={30} config={{ skinTone: "tan", hairStyle: "short", hairColor: "midnight", outfit: "red-hoodie", accessories: [] }} /> },
    { name: m.players[3], score: 200, char: <CharKid size={22} /> },
  ];
  return (
    <PhoneFrame title={m.title}>
      <div className="px-3 py-2 flex items-center gap-2 text-xs" style={{ background: "var(--card)", borderBottom: "3px solid var(--border)", color: "var(--cyan)" }}>
        <IconFamily size={14} /> {m.round}
      </div>
      <div className="p-3 flex flex-col gap-2">
        {players.map((p) => (
          <div key={p.name} className="flex items-center gap-3 px-2 py-2" style={{ background: "var(--card)", border: `3px solid ${p.crown ? "var(--yellow)" : "var(--border)"}` }}>
            <div className="w-9 flex justify-center items-end" style={{ height: 44 }}>{p.char}</div>
            <div className="flex-1 text-xs text-foreground-strong flex items-center gap-2">{p.name}{p.crown && <PixelCrown size={16} />}</div>
            <div className="text-xs" style={{ color: p.crown ? "var(--yellow)" : "var(--soft-foreground)" }}>{p.score} XP</div>
          </div>
        ))}
        <div className="flex items-start gap-2 mt-1">
          <MascotHead size={22} />
          <div className="bubble is-pixi text-[12px]">{m.pixi}</div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export const DRILL_MOCKS = { call: CallMock, sms: SmsMock, email: EmailMock, quiz: QuizMock, house: HouseMock };
