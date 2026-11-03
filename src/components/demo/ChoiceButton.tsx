import type { ReactNode } from "react";

/** A full-width answer button for the demo drills. `state` colours it after an answer. */
export function ChoiceButton({ children, onClick, disabled, state = "idle" }: {
  children: ReactNode; onClick?: () => void; disabled?: boolean;
  state?: "idle" | "correct" | "wrong" | "cautious" | "muted";
}) {
  const colors = {
    idle: { bg: "#111827", border: "#344762", fg: "#e8f4f8" },
    correct: { bg: "#0f2a1d", border: "#00ff88", fg: "#b8ffd9" },
    wrong: { bg: "#2a0d17", border: "#ff2d55", fg: "#ffd6de" },
    cautious: { bg: "#2a2408", border: "#ffe66d", fg: "#fff4c2" },
    muted: { bg: "#0a0e1a", border: "#1a2340", fg: "#52647e" },
  }[state];
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full text-left px-4 py-3 transition-transform enabled:hover:-translate-y-0.5 enabled:cursor-pointer disabled:cursor-default"
      style={{ background: colors.bg, border: `3px solid ${colors.border}`, color: colors.fg, boxShadow: state === "idle" ? "3px 3px 0 #05080f" : "none", fontSize: "var(--text-body)", letterSpacing: "0.04em" }}
    >
      {children}
    </button>
  );
}
