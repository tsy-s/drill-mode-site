import { useState } from "react";
import { QUIZ as QUIZ_EN, type QuizScenario } from "../../content/demo";
import { format, UI } from "../../content/site";
import { useContent } from "../../i18n/content";
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
function score(s: QuizScenario, action: string, cautiousAction: string): { result: Result; xp: number } {
  if (action === s.correctAction) return { result: "correct", xp: 100 };
  if (action === cautiousAction) return { result: "cautious", xp: 50 };
  return { result: "wrong", xp: 25 };
}

/** "Spot the scam": the demo version of the app's individual drill. Content: QUIZ in src/content/demo.ts. */
export function QuizDrill({ onFinish, onSwitch }: { onFinish: () => void; onSwitch: () => void }) {
  const QUIZ = useContent(QUIZ_EN);
  const ui = useContent(UI).quiz;
  const scenarios = QUIZ.scenarios;
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ id: number; result: Result; xp: number }[]>([]);
  const [openClue, setOpenClue] = useState<number | null>(null);
  const finished = answers.length === scenarios.length && choice === null;

  const totalXp = answers.reduce((sum, a) => sum + a.xp, 0);
  const s = scenarios[Math.min(index, scenarios.length - 1)];
  const outcome = choice ? score(s, choice, QUIZ.cautiousAction) : null;

  const choose = (action: string) => {
    if (choice) return;
    const { result, xp } = score(s, action, QUIZ.cautiousAction);
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
      <div className="pixel-card flex flex-col items-center gap-6 p-6 md:p-10 text-center" style={{ borderColor: "var(--yellow-line)" }}>
        <div className="font-pixel" style={{ fontSize: 13, color: "var(--yellow)" }}>{ui.complete}</div>
        <div className="font-pixel" style={{ fontSize: "clamp(2rem, 6vw, 3rem)", color: "var(--green)" }}>{correct} / {scenarios.length}</div>
        <div className="text-soft-foreground">{format(ui.xpEarned, { xp: totalXp })}</div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="pixel-fluid" style={{ width: 80 }}><PixelMascot size={80} animate separated hat={ratio >= 0.8 ? "Crown" : "None"} /></div>
          <SpeechBubble tail="left" className="text-left max-w-sm">{pixiLine}</SpeechBubble>
        </div>
        <ul className="w-full max-w-lg flex flex-col gap-2 text-left" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {answers.map((a, i) => {
            const sc = scenarios[i];
            return (
              <li key={a.id} className="flex items-center gap-3 px-3 py-2" style={{ background: "var(--background)", border: "2px solid var(--secondary)" }}>
                {a.result === "correct" ? <IconCheck size={14} /> : a.result === "cautious" ? <IconEyeInspect size={14} color="var(--yellow)" /> : <IconX size={14} />}
                <span className="flex-1 text-sm truncate">{sc.sender}: {sc.isScam ? ui.scam : ui.genuine}</span>
                <span className="text-xs text-muted-foreground">+{a.xp} XP</span>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap justify-center gap-4">
          <PixelButton onClick={restart} color="var(--secondary)" textColor="var(--foreground)">{ui.playAgain}</PixelButton>
          <PixelButton onClick={onSwitch} color="var(--orange-fill)">{ui.takeCall}</PixelButton>
        </div>
      </div>
    );
  }

  const clues = s.clues.map((c) => c.text);
  const markClass = s.isScam ? "flag-mark" : "flag-mark is-safe";
  const marked = (text: string) =>
    !choice ? text : splitByPhrases(text, clues).map((p, i) =>
      p.match === -1 ? <span key={i}>{p.text}</span> : (
        <mark key={i} className={markClass} onClick={() => setOpenClue(p.match)} style={{ outline: openClue === p.match ? "2px solid var(--yellow-line)" : undefined }}>{p.text}</mark>
      ),
    );

  const resultLabel = !outcome ? "" :
    outcome.result === "cautious" ? QUIZ.results.cautious :
    outcome.result === "correct" ? (s.isScam ? QUIZ.results.correctScam : QUIZ.results.correctSafe) :
    (s.isScam ? QUIZ.results.wrongScam : QUIZ.results.wrongSafe);
  const resultColor = !outcome ? "" : outcome.result === "correct" ? "var(--green)" : outcome.result === "cautious" ? "var(--yellow)" : "var(--red)";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm">
          <span style={{ color: "var(--yellow)" }}>{format(ui.progress, { n: index + 1, total: scenarios.length })}</span>
          <span style={{ color: "var(--green)" }}>{totalXp} XP</span>
        </div>
        <XPBar current={answers.length} max={scenarios.length} color="var(--yellow-fill)" />
        {index === 0 && !choice && <p className="text-soft-foreground" style={{ margin: 0 }}>{QUIZ.intro}</p>}
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] items-start">
        <div className="flex justify-center">
          <PhoneFrame title={s.type === "email" ? ui.inbox : s.type === "sms" ? ui.messages : ui.notifications} className="w-full">
            <div className="px-3 py-3 text-sm" style={{ background: "var(--card)", borderBottom: "3px solid var(--border)" }}>
              <div className="flex items-center gap-2 text-foreground-strong">{s.type === "email" && <IconEnvelope size={12} />}{marked(s.sender)}</div>
              <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                {s.senderEmail ? marked(s.senderEmail) : s.type === "sms" ? ui.textMessage : ui.appNotification} · {s.timestamp}
              </div>
            </div>
            <div className="p-3 flex flex-col gap-3" style={{ minHeight: 220 }}>
              {s.subject && <div className="text-foreground-strong" style={{ fontWeight: 600 }}>{marked(s.subject)}</div>}
              <div className={s.type === "sms" ? "bubble" : ""} style={{ lineHeight: 1.7, color: "var(--foreground)" }}>{marked(s.message)}</div>
              {choice && (
                <div className="flex items-start gap-2 text-xs p-2" style={{ border: `2px dashed ${s.isScam ? "var(--red-line)" : "var(--green-line)"}`, color: s.isScam ? "var(--red-soft)" : "var(--green-soft)" }}>
                  <IconEyeInspect size={12} color={s.isScam ? "var(--red)" : "var(--green)"} /> {s.senderNote}
                </div>
              )}
            </div>
          </PhoneFrame>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-pixel" style={{ margin: 0, fontSize: 13, color: "var(--foreground-strong)" }}>{ui.whatWouldYouDo}</h3>
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
            <div className="flex flex-col gap-4 p-5" style={{ background: "var(--background)", border: `3px solid ${resultColor}`, animation: "rise-in .3s steps(4) both" }} role="status">
              <div className="flex items-center justify-between gap-3">
                <span className="font-pixel" style={{ fontSize: 14, color: resultColor }}>{resultLabel}</span>
                <span className="text-sm" style={{ color: resultColor }}>+{outcome.xp} XP</span>
              </div>
              {outcome.result === "cautious" && <p className="text-sm" style={{ margin: 0, color: "var(--yellow-soft)" }}>{QUIZ.results.cautiousNote}</p>}
              <p style={{ margin: 0 }}>{s.explanation}</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest" style={{ color: s.isScam ? "var(--red-soft)" : "var(--green-soft)" }}>
                  {s.isScam ? <IconWarning size={12} color="var(--red)" /> : <IconCheck size={12} />} {s.isScam ? ui.redFlags : ui.genuineSigns}: {ui.tapToLearn}
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.clues.map((c, i) => (
                    <button key={c.label} type="button" onClick={() => setOpenClue(i)} className="pixel-chip cursor-pointer" style={{ color: openClue === i ? "var(--yellow)" : s.isScam ? "var(--red-soft)" : "var(--green-soft)", background: "transparent" }}>
                      {c.label}
                    </button>
                  ))}
                </div>
                {openClue !== null && s.clues[openClue] && (
                  <p className="text-sm text-soft-foreground" style={{ margin: 0 }}>
                    <span className="text-foreground-strong">"{s.clues[openClue].text}"</span>: {s.clues[openClue].explanation}
                  </p>
                )}
              </div>
              <div>
                <PixelButton onClick={next} color={resultColor}>{index + 1 < scenarios.length ? ui.next : ui.seeResults}</PixelButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
