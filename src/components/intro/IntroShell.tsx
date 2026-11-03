import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useHideNav } from "../layout/NavContext";
import { Stars } from "../layout/Stars";

/**
 * The full-screen "cinematic" frame shared by the Home and Product intros: letterbox bars,
 * starfield, vignette, a white flash at `flashAt`, and a Skip button.
 *
 * - The nav bar stays hidden until the intro has mostly scrolled away.
 * - While playing, the section has the class `is-playing`; after `duration` ms (or Skip,
 *   or straight away for visitors who prefer reduced motion) it switches to `is-done`.
 *   The CSS for each animated piece lives in the "CINEMATIC INTRO" block of site.css.
 */
export function IntroShell({ duration, flashAt, skipLabel, label, children }: {
  duration: number; flashAt: number; skipLabel: string; label: string;
  children: (state: { done: boolean }) => ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [done, setDone] = useState(reduced);
  const [navHidden, setNavHidden] = useState(true);
  useHideNav(navHidden);
  useScrollProgress(ref, useCallback((p: number) => setNavHidden(p < 0.6), []));

  useEffect(() => {
    if (reduced) { setDone(true); return; }
    const t = setTimeout(() => setDone(true), duration);
    return () => clearTimeout(t);
  }, [duration, reduced]);

  return (
    <section
      ref={ref}
      aria-label={label}
      className={`intro ${done ? "is-done" : "is-playing"}`}
      style={{ "--flash-at": `${flashAt}ms` } as CSSProperties}
    >
      <Stars count={90} />
      <div className="letterbox top" aria-hidden="true" />
      <div className="letterbox bottom" aria-hidden="true" />
      <div className="intro-flash" aria-hidden="true" />
      <div className="intro-stage">{children({ done })}</div>
      {!done && (
        <button
          type="button"
          onClick={() => setDone(true)}
          className="intro-skip px-3 py-2 text-sm tracking-widest border-2 border-border bg-black/60 text-soft-foreground hover:text-white cursor-pointer"
        >
          {skipLabel}
        </button>
      )}
    </section>
  );
}

/** True `at` ms into the intro, or straight away once it is done. */
export function useAfter(at: number, done: boolean) {
  const [on, setOn] = useState(done);
  useEffect(() => {
    if (done) { setOn(true); return; }
    const t = setTimeout(() => setOn(true), at);
    return () => clearTimeout(t);
  }, [at, done]);
  return on;
}

/** Smooth-scrolls to the section with this id (used by the intros' Start buttons). */
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
