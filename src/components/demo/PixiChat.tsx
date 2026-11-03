import { useEffect, useRef, useState } from "react";
import { MascotHead } from "../brand/MascotHead";
import { IconChat } from "../icons";

type Message = { from: "pixi" | "you"; text: string };

/**
 * Pixi's post-drill chat, as it appears in the app's family house chat: Pixi posts about
 * the drill, asks a question, and replies to whichever quick reply the visitor taps.
 * The lines come from CALL.pixiChat in src/content/demo.ts.
 */
export function PixiChat({ title, post, question, replies }: {
  title: string; post: string; question: string; replies: { label: string; reply: string }[];
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(true);
  const [answered, setAnswered] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const later = (ms: number, fn: () => void) => timers.current.push(setTimeout(fn, ms));

  useEffect(() => {
    later(1100, () => { setMessages([{ from: "pixi", text: post }]); setTyping(!!question); });
    if (question) later(2300, () => { setMessages((m) => [...m, { from: "pixi", text: question }]); setTyping(false); });
    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post, question]);

  const reply = (r: { label: string; reply: string }) => {
    setAnswered(true);
    setMessages((m) => [...m, { from: "you", text: r.label }]);
    setTyping(true);
    later(1200, () => { setMessages((m) => [...m, { from: "pixi", text: r.reply }]); setTyping(false); });
  };

  const showReplies = !answered && !typing && messages.length >= (question ? 2 : 1) && replies.length > 0;

  return (
    <div className="flex flex-col" style={{ background: "#0a0e1a", border: "3px solid #344762" }}>
      <div className="flex items-center gap-2 px-4 py-2 text-sm" style={{ background: "#111827", borderBottom: "3px solid #344762", color: "#00d4ff" }}>
        <IconChat size={14} color="#00d4ff" /> {title}
      </div>
      <div className="flex flex-col gap-3 p-4" aria-live="polite">
        {messages.map((m, i) =>
          m.from === "pixi" ? (
            <div key={i} className="flex items-start gap-2" style={{ animation: "rise-in .25s steps(3) both" }}>
              <div className="flex-shrink-0 mt-1"><MascotHead size={24} /></div>
              <div>
                <div className="text-xs mb-1" style={{ color: "#00d4ff" }}>PIXI</div>
                <div className="bubble is-pixi">{m.text}</div>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end" style={{ animation: "rise-in .25s steps(3) both" }}>
              <div className="bubble is-you" style={{ maxWidth: "80%" }}>{m.text}</div>
            </div>
          ),
        )}
        {typing && (
          <div className="flex items-center gap-2">
            <MascotHead size={24} />
            <div className="bubble is-pixi typing-dots" aria-label="Pixi is typing"><span>.</span><span>.</span><span>.</span></div>
          </div>
        )}
        {showReplies && (
          <div className="flex flex-wrap justify-end gap-2 pt-1">
            {replies.map((r) => (
              <button key={r.label} type="button" onClick={() => reply(r)} className="px-3 py-2 text-sm cursor-pointer" style={{ background: "#10251d", color: "#b8ffd9", border: "2px solid #00aa66" }}>
                {r.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
