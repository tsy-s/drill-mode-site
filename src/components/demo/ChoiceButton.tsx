import type { ReactNode } from "react";

/** A full-width answer button for the demo drills. `state` colours it after an answer. */
export function ChoiceButton({ children, onClick, disabled, state = "idle" }: {
  children: ReactNode; onClick?: () => void; disabled?: boolean;
  state?: "idle" | "correct" | "wrong" | "cautious" | "muted";
}) {
  const colors = {
    idle: { bg: "var(--card)", border: "var(--border-strong)", fg: "var(--foreground)" },
    correct: { bg: "color-mix(in srgb, var(--green) 14%, var(--background))", border: "var(--green)", fg: "color-mix(in srgb, var(--green-soft) 60%, var(--foreground-strong))" },
    wrong: { bg: "color-mix(in srgb, var(--red) 14%, var(--background))", border: "var(--red)", fg: "color-mix(in srgb, var(--red-soft) 40%, var(--foreground-strong))" },
    cautious: { bg: "color-mix(in srgb, var(--yellow) 14%, var(--background))", border: "var(--yellow)", fg: "var(--yellow-soft)" },
    muted: { bg: "var(--background)", border: "var(--secondary)", fg: "var(--muted-foreground)" },
  }[state];
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full text-left px-4 py-3 transition-transform enabled:hover:-translate-y-0.5 enabled:cursor-pointer disabled:cursor-default"
      style={{ background: colors.bg, border: `3px solid ${colors.border}`, color: colors.fg, boxShadow: state === "idle" ? "3px 3px 0 var(--shadow-pixel)" : "none", fontSize: "var(--text-body)", letterSpacing: "0.04em" }}
    >
      {children}
    </button>
  );
}
