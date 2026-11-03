import { useEffect, useRef, useState } from "react";
import { CALL } from "../../content/demo";
import { splitByPhrases } from "../../lib/highlight";
import { PixelAvatar } from "../avatars/PixelAvatar";
import { IconReportFlag, IconSpeaker, IconWarning } from "../icons";
import { PhoneFrame } from "../mocks/PhoneMocks";
import { PixelPhone } from "../mocks/PixelPhone";
import { PixelButton } from "../ui/PixelButton";
import { ChoiceButton } from "./ChoiceButton";
import { PixiChat } from "./PixiChat";

type Outcome = keyof typeof CALL.outcomes;
type Line = { who: "caller" | "you" | "reveal"; text: string; flags?: { phrase: string; flagId: string }[] };
type Step = (typeof CALL.steps)[number];

const ENDINGS = new Set(["caught_flag", "complied"]);

/** "Take a scam call": a scripted version of the app's live call drill. Script: CALL in src/content/demo.ts. */
export function CallDrill({ onFinish, onSwitch }: { onFinish: () => void; onSwitch: () => void }) {
  const [phase, setPhase] = useState<"incoming" | "call" | "ended">("incoming");
  const [lines, setLines] = useState<Line[]>([]);
  const [step, setStep] = useState<Step | null>(null);
  const [typing, setTyping] = useState(false);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [activeFlag, setActiveFlag] = useState<string | null>(null);
  const [voice, setVoice] = useState(CALL.voiceDefaultOn);
  const [elapsed, setElapsed] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const voiceRef = useRef(voice);
  voiceRef.current = voice;

  const later = (ms: number, fn: () => void) => timers.current.push(setTimeout(fn, ms));
  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  const speak = (text: string) => {
    if (!voiceRef.current || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1.02;
    window.speechSynthesis.speak(u);
  };
  const silence = () => { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); };

  useEffect(() => () => { clearTimers(); silence(); }, []);
  useEffect(() => { if (!voice) silence(); }, [voice]);

  useEffect(() => {
    if (phase !== "call") return;
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, [phase]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines, typing]);

  /** The caller "types" for a moment, then says the step's line. */
  const callerSays = (id: string) => {
    const next = CALL.steps.find((s) => s.id === id);
    if (!next) return;
    setTyping(true);
    later(1300, () => {
      setTyping(false);
      setLines((l) => [...l, { who: "caller", text: next.line, flags: next.flags }]);
      setStep(next);
      speak(next.line);
    });
  };

  const answer = () => {
    setPhase("call");
    callerSays(CALL.start);
  };

  const end = (result: Outcome, withReveal: boolean) => {
    clearTimers();
    setStep(null);
    setTyping(false);
    if (withReveal) {
      setLines((l) => [...l, { who: "reveal", text: CALL.reveal }]);
      speak(CALL.reveal);
      later(2600, () => { setOutcome(result); setPhase("ended"); onFinish(); });
    } else {
      silence();
      setOutcome(result);
      setPhase("ended");
      onFinish();
    }
  };

  const reply = (r: { label: string; next: string }) => {
    setStep(null);
    setLines((l) => [...l, { who: "you", text: r.label }]);
    if (ENDINGS.has(r.next)) later(700, () => end(r.next as Outcome, true));
    else callerSays(r.next);
  };

  const restart = (skipRinging = false) => {
    clearTimers();
    silence();
    setLines([]); setStep(null); setTyping(false); setOutcome(null); setActiveFlag(null); setElapsed(0);
    if (skipRinging) { setPhase("call"); callerSays(CALL.start); } else setPhase("incoming");
  };

  const mins = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const secs = String(elapsed % 60).padStart(2, "0");
  const seenFlags = [...new Set(lines.flatMap((l) => l.flags?.map((f) => f.flagId) ?? []))];
  const flag = activeFlag ? CALL.flags[activeFlag] : null;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,380px)_1fr] items-start">
      {/* The phone */}
      <div className="flex justify-center">
        <PhoneFrame title="SCAM CALL" className="w-full">
          {phase === "incoming" && (
            <div className="flex flex-col items-center gap-5 px-4 py-10 text-center" style={{ minHeight: 460 }}>
              <div className="text-sm tracking-widest" style={{ color: "#6b8ba4" }}>{CALL.incoming.title}</div>
              <PixelPhone size={110} ringing />
              <div>
                <div className="font-pixel text-white" style={{ fontSize: 13 }}>{CALL.caller.name}</div>
                <div className="mt-2" style={{ color: "#9bb0c8" }}>{CALL.caller.number}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                <PixelButton color="#ff2d55" textColor="#ffffff" full onClick={() => end("declined", false)}>{CALL.incoming.decline}</PixelButton>
                <PixelButton color="#00ff88" full onClick={answer}>{CALL.incoming.answer}</PixelButton>
              </div>
            </div>
          )}

          {phase !== "incoming" && (
            <div className="flex flex-col" style={{ height: 520 }}>
              <div className="flex items-center justify-between px-3 py-2 text-xs" style={{ background: "#111827", borderBottom: "3px solid #2a3a5c" }}>
                <span className="flex items-center gap-2" style={{ color: typing ? "#ff6b35" : "#00ff88" }}>
                  <span style={{ width: 7, height: 7, background: typing ? "#ff6b35" : "#00ff88", animation: "pulse-dot 1s ease-in-out infinite" }} />
                  {phase === "ended" ? "CALL ENDED" : typing ? "CALLER SPEAKING" : "LISTENING..."}
                </span>
                <span className="flex items-center gap-3">
                  <button type="button" onClick={() => setVoice((v) => !v)} className="cursor-pointer bg-transparent border-0 p-0" aria-pressed={voice} aria-label={voice ? "Mute caller voice" : "Read caller lines aloud"} title={voice ? "Voice on" : "Voice off"}>
                    <IconSpeaker size={14} muted={!voice} />
                  </button>
                  <span style={{ color: "#ffe66d" }}>{mins}:{secs}</span>
                </span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2" style={{ borderBottom: "2px solid #1a2340" }}>
                <PixelPhone size={34} ringing={phase === "call"} />
                <div className="text-xs leading-snug">
                  <div className="text-white">{CALL.caller.name}</div>
                  <div className="flex items-center gap-1" style={{ color: "#ff6b35" }}><IconWarning size={9} color="#ff6b35" /> SCAM DRILL ACTIVE</div>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto flex flex-col gap-3 p-3 text-[14px]" style={{ scrollbarWidth: "none" }} aria-live="polite">
                {lines.map((line, i) => <CallLine key={i} line={line} activeFlag={activeFlag} onFlag={setActiveFlag} />)}
                {typing && (
                  <div className="flex gap-2 items-start">
                    <PixelAvatar rank={9} size={22} />
                    <div className="bubble is-caller typing-dots" style={{ color: "#ff6b35" }}><span>.</span><span>.</span><span>.</span></div>
                  </div>
                )}
              </div>

              {phase === "call" && (
                <div className="p-3 flex flex-col gap-2" style={{ borderTop: "3px solid #2a3a5c" }}>
                  <PixelButton color="#ff2d55" textColor="#ffffff" full onClick={() => end("hung_up", false)}>{CALL.hangUp}</PixelButton>
                  <button type="button" onClick={() => end("stopped", false)} className="w-full py-2 text-xs cursor-pointer bg-transparent" style={{ border: "2px solid #2a3a5c", color: "#9bb0c8" }}>
                    {CALL.stop}
                  </button>
                </div>
              )}
            </div>
          )}
        </PhoneFrame>
      </div>

      {/* Replies, red flags, and the debrief */}
      <div className="flex flex-col gap-5">
        {phase === "incoming" && (
          <div className="flex flex-col gap-3">
            <h3 className="font-pixel" style={{ margin: 0, fontSize: 13, color: "#ff6b35" }}>{CALL.incoming.heading}</h3>
            <p className="text-soft-foreground" style={{ margin: 0 }}>{CALL.incoming.text}</p>
          </div>
        )}

        {phase === "call" && (
          <div className="flex flex-col gap-3">
            <h3 className="font-pixel" style={{ margin: 0, fontSize: 13, color: "#ffffff" }}>{step ? CALL.replyHeading : "…"}</h3>
            {step?.replies.map((r) => <ChoiceButton key={r.label} onClick={() => reply(r)}>"{r.label}"</ChoiceButton>)}
            {lines.some((l) => l.flags?.length) && <p className="text-xs text-muted-foreground" style={{ margin: 0 }}>{CALL.tapHint}</p>}
          </div>
        )}

        {flag && (
          <div className="flex flex-col gap-2 p-4" style={{ background: "rgba(10,14,26,.95)", borderTop: "3px solid #ff2d55", border: "3px solid #ff2d55", animation: "rise-in .2s steps(3) both" }} role="status">
            <div className="flex items-center gap-2 font-pixel" style={{ fontSize: 11, color: "#ff8095" }}><IconReportFlag size={12} color="#ff2d55" /> {flag.name}</div>
            <p className="text-sm" style={{ margin: 0 }}>{flag.explanation}</p>
          </div>
        )}

        {phase === "ended" && outcome && (
          <div className="flex flex-col gap-5" style={{ animation: "rise-in .35s steps(4) both" }}>
            <div className="flex flex-col gap-2 p-5" style={{ background: "#0a0e1a", border: `3px solid ${CALL.outcomes[outcome].color}` }}>
              <div className="font-pixel" style={{ fontSize: 15, color: CALL.outcomes[outcome].color, lineHeight: 1.6 }}>{CALL.outcomes[outcome].title}</div>
              <p style={{ margin: 0 }}>{CALL.outcomes[outcome].text}</p>
            </div>

            {outcome === "declined" ? (
              <div><PixelButton color="#ff6b35" onClick={() => restart(true)}>PRACTISE ANYWAY →</PixelButton></div>
            ) : (
              <>
                {seenFlags.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest" style={{ color: "#ff8095" }}><IconReportFlag size={12} color="#ff2d55" /> {CALL.flagsHeading}</div>
                    <div className="flex flex-wrap gap-2">
                      {seenFlags.map((id) => (
                        <button key={id} type="button" onClick={() => setActiveFlag(id)} className="pixel-chip cursor-pointer bg-transparent" style={{ color: activeFlag === id ? "#ffe66d" : "#ff8095" }}>{CALL.flags[id]?.name}</button>
                      ))}
                    </div>
                  </div>
                )}
                <PixiChat title={CALL.pixiChat.title} {...CALL.pixiChat[outcome as Exclude<Outcome, "declined">]} />
                <div className="flex flex-wrap gap-4">
                  <PixelButton color="#1a2340" textColor="#e8f4f8" onClick={() => restart()}>TRY AGAIN</PixelButton>
                  <PixelButton color="#ffe66d" onClick={onSwitch}>SPOT THE SCAM →</PixelButton>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function CallLine({ line, activeFlag, onFlag }: { line: Line; activeFlag: string | null; onFlag: (id: string) => void }) {
  if (line.who === "reveal") {
    return (
      <div className="p-3 text-[13px]" style={{ background: "#0f2a1d", border: "3px solid #00ff88", color: "#b8ffd9", animation: "rise-in .3s steps(4) both" }}>
        <div className="font-pixel mb-2" style={{ fontSize: 9, color: "#00ff88" }}>DRILL REVEAL</div>
        {line.text}
      </div>
    );
  }
  if (line.who === "you") {
    return <div className="flex justify-end"><div className="bubble is-you" style={{ maxWidth: "80%" }}>{line.text}</div></div>;
  }
  const flags = line.flags ?? [];
  return (
    <div className="flex gap-2 items-start">
      <div className="flex-shrink-0 mt-1"><PixelAvatar rank={9} size={22} /></div>
      <div className="bubble is-caller" style={{ maxWidth: "85%", borderColor: flags.length ? "#ff2d55" : undefined }}>
        {splitByPhrases(line.text, flags.map((f) => f.phrase)).map((p, i) =>
          p.match === -1 ? <span key={i}>{p.text}</span> : (
            <mark
              key={i}
              className="flag-mark"
              role="button"
              tabIndex={0}
              onClick={() => onFlag(flags[p.match].flagId)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onFlag(flags[p.match].flagId); }}
              style={{ outline: activeFlag === flags[p.match].flagId ? "2px solid #ffe66d" : undefined }}
            >
              {p.text}
            </mark>
          ),
        )}
      </div>
    </div>
  );
}
