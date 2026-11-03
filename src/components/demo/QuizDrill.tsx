import { useState } from "react";
import { QUIZ, type QuizScenario } from "../../content/demo";
import { splitByPhrases } from "../../lib/highlight";
import { PixelMascot } from "../avatars/PixelMascot";
import { IconCheck, IconEnvelope, IconEyeInspect, IconWarning, IconX } from "../icons";
import { PhoneFrame } from "../mocks/PhoneMocks";
import { PixelButton } from "../ui/PixelButton";
import { SpeechBubble } from "../ui/SpeechBubble";
import { XPBar } from "../ui/XPBar";
import { ChoiceButton } from "./ChoiceButton";

type Result = "correct" | "cautious" | "wrong";

/** Scoring from the app (huawei-2026/src/app/screens/drills/family/familyOutcome.ts). */
function score(s: QuizScenario, action: string): { result: Result; xp: number } {
  if (action === s.correctAction) return { result: "correct", xp: 100 };
  if (action === QUIZ.cautiousAction) return { result: "cautious", xp: 50 };
  return { result: "wrong", xp: 25 };
}

/** "Spot the scam": the demo version of the app's individual drill. Content: QUIZ in src/content/demo.ts. */
export function QuizDrill({ onFinish, onSwitch }: { onFinish: () => void; onSwitch: () => void }) {
  const scenarios = QUIZ.scenarios;
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ id: number; result: Result; xp: number }[]>([]);
  const [openClue, setOpenClue] = useState<number | null>(null);
  const finished = answers.length === scenarios.length && choice === null;

  const totalXp = answers.reduce((sum, a) => sum + a.xp, 0);
  const s = scenarios[Math.min(index, scenarios.length - 1)];
  const outcome = choice ? score(s, choice) : null;

  const choose = (action: string) => {
    if (choice) return;
    const { result, xp } = score(s, action);
    setChoice(action);
    setAnswers((a) => [...a, { id: s.id, result, xp }]);
    setOpenClue(0);
  };

  const next = () => {
    setChoice(null);
    setOpenClue(null);
    if (index + 1 < scenarios.length) setIndex(index + 1);
    else onFinish();
  };

  const restart = () => { setIndex(0); setChoice(null); setAnswers([]); setOpenClue(null); };

  if (finished) {
    const correct = answers.filter((a) => a.result === "correct").length;
    const ratio = correct / scenarios.length;
    const pixiLine = ratio >= 0.8 ? QUIZ.pixiSummary.high : ratio >= 0.5 ? QUIZ.pixiSummary.mid : QUIZ.pixiSummary.low;
    return (
      <div className="pixel-card flex flex-col items-center gap-6 p-6 md:p-10 text-center" style={{ borderColor: "#ffe66d" }}>
        <div className="font-pixel" style={{ fontSize: 13, color: "#ffe66d" }}>DRILL COMPLETE</div>
        <div className="font-pixel" style={{ fontSize: "clamp(2rem, 6vw, 3rem)", color: "#00ff88" }}>{correct} / {scenarios.length}</div>
        <div className="text-soft-foreground">+{totalXp} XP earned</div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="pixel-fluid" style={{ width: 80 }}><PixelMascot size={80} animate separated hat={ratio >= 0.8 ? "Crown" : "None"} /></div>
          <SpeechBubble tail="left" className="text-left max-w-sm">{pixiLine}</SpeechBubble>
        </div>
        <ul className="w-full max-w-lg flex flex-col gap-2 text-left" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {answers.map((a, i) => {
            const sc = scenarios[i];
            return (
              <li key={a.id} className="flex items-center gap-3 px-3 py-2" style={{ background: "#0a0e1a", border: "2px solid #1a2340" }}>
                {a.result === "correct" ? <IconCheck size={14} /> : a.result === "cautious" ? <IconEyeInspect size={14} color="#ffe66d" /> : <IconX size={14} />}
                <span className="flex-1 text-sm truncate">{sc.sender}: {sc.isScam ? "scam" : "genuine"}</span>
                <span className="text-xs text-muted-foreground">+{a.xp} XP</span>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap justify-center gap-4">
          <PixelButton onClick={restart} color="#1a2340" textColor="#e8f4f8">PLAY AGAIN</PixelButton>
          <PixelButton onClick={onSwitch} color="#ff6b35">TAKE A SCAM CALL →</PixelButton>
        </div>
      </div>
    );
  }

  const clues = s.clues.map((c) => c.text);
  const markClass = s.isScam ? "flag-mark" : "flag-mark is-safe";
  const marked = (text: string) =>
    !choice ? text : splitByPhrases(text, clues).map((p, i) =>
      p.match === -1 ? <span key={i}>{p.text}</span> : (
        <mark key={i} className={markClass} onClick={() => setOpenClue(p.match)} style={{ outline: openClue === p.match ? "2px solid #ffe66d" : undefined }}>{p.text}</mark>
      ),
    );

  const resultLabel = !outcome ? "" :
    outcome.result === "cautious" ? QUIZ.results.cautious :
    outcome.result === "correct" ? (s.isScam ? QUIZ.results.correctScam : QUIZ.results.correctSafe) :
    (s.isScam ? QUIZ.results.wrongScam : QUIZ.results.wrongSafe);
  const resultColor = !outcome ? "" : outcome.result === "correct" ? "#00ff88" : outcome.result === "cautious" ? "#ffe66d" : "#ff2d55";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm">
          <span style={{ color: "#ffe66d" }}>MESSAGE {index + 1} / {scenarios.length}</span>
          <span style={{ color: "#00ff88" }}>{totalXp} XP</span>
        </div>
        <XPBar current={answers.length} max={scenarios.length} color="#ffe66d" />
        {index === 0 && !choice && <p className="text-soft-foreground" style={{ margin: 0 }}>{QUIZ.intro}</p>}
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] items-start">
        <div className="flex justify-center">
          <PhoneFrame title={s.type === "email" ? "INBOX" : s.type === "sms" ? "MESSAGES" : "NOTIFICATIONS"} className="w-full">
            <div className="px-3 py-3 text-sm" style={{ background: "#111827", borderBottom: "3px solid #2a3a5c" }}>
              <div className="flex items-center gap-2 text-white">{s.type === "email" && <IconEnvelope size={12} />}{marked(s.sender)}</div>
              <div className="text-xs" style={{ color: "#6b8ba4" }}>
                {s.senderEmail ? marked(s.senderEmail) : s.type === "sms" ? "Text message" : "App notification"} · {s.timestamp}
              </div>
            </div>
            <div className="p-3 flex flex-col gap-3" style={{ minHeight: 220 }}>
              {s.subject && <div className="text-white" style={{ fontWeight: 600 }}>{marked(s.subject)}</div>}
              <div className={s.type === "sms" ? "bubble" : ""} style={{ lineHeight: 1.7, color: "#dbe7f1" }}>{marked(s.message)}</div>
              {choice && (
                <div className="flex items-start gap-2 text-xs p-2" style={{ border: `2px dashed ${s.isScam ? "#ff2d55" : "#00ff88"}`, color: s.isScam ? "#ff8095" : "#7dffbf" }}>
                  <IconEyeInspect size={12} color={s.isScam ? "#ff2d55" : "#00ff88"} /> {s.senderNote}
                </div>
              )}
            </div>
          </PhoneFrame>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-pixel" style={{ margin: 0, fontSize: 13, color: "#ffffff" }}>WHAT WOULD YOU DO?</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {s.actions.map((action) => {
              const state = !choice ? "idle"
                : action === s.correctAction ? "correct"
                : action === choice ? (action === QUIZ.cautiousAction ? "cautious" : "wrong")
                : "muted";
              return <ChoiceButton key={action} onClick={() => choose(action)} disabled={!!choice} state={state}>{action}</ChoiceButton>;
            })}
          </div>

          {outcome && (
            <div className="flex flex-col gap-4 p-5" style={{ background: "#0a0e1a", border: `3px solid ${resultColor}`, animation: "rise-in .3s steps(4) both" }} role="status">
              <div className="flex items-center justify-between gap-3">
                <span className="font-pixel" style={{ fontSize: 14, color: resultColor }}>{resultLabel}</span>
                <span className="text-sm" style={{ color: resultColor }}>+{outcome.xp} XP</span>
              </div>
              {outcome.result === "cautious" && <p className="text-sm" style={{ margin: 0, color: "#fff4c2" }}>{QUIZ.results.cautiousNote}</p>}
              <p style={{ margin: 0 }}>{s.explanation}</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest" style={{ color: s.isScam ? "#ff8095" : "#7dffbf" }}>
                  {s.isScam ? <IconWarning size={12} color="#ff2d55" /> : <IconCheck size={12} />} {s.isScam ? "Red flags" : "Signs it's genuine"}: tap to learn
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.clues.map((c, i) => (
                    <button key={c.label} type="button" onClick={() => setOpenClue(i)} className="pixel-chip cursor-pointer" style={{ color: openClue === i ? "#ffe66d" : s.isScam ? "#ff8095" : "#7dffbf", background: "transparent" }}>
                      {c.label}
                    </button>
                  ))}
                </div>
                {openClue !== null && s.clues[openClue] && (
                  <p className="text-sm text-soft-foreground" style={{ margin: 0 }}>
                    <span className="text-white">"{s.clues[openClue].text}"</span>: {s.clues[openClue].explanation}
                  </p>
                )}
              </div>
              <div>
                <PixelButton onClick={next} color={resultColor}>{index + 1 < scenarios.length ? "NEXT MESSAGE →" : "SEE RESULTS →"}</PixelButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
