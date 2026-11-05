import { Fragment, useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useHideNav } from "../layout/NavContext";
import { Stars } from "../layout/Stars";

/** Intros that have already played since the site was loaded. A reload starts afresh. */
const playedIntros = new Set<string>();

/**
 * The full-screen "cinematic" frame shared by the Home and Product intros: letterbox bars,
 * starfield, vignette, a white flash at `flashAt`, and a Skip button.
 *
 * - The nav bar stays hidden until the intro has mostly scrolled away.
 * - While playing, the section has the class `is-playing`; after `duration` ms (or Skip,
 *   or straight away for visitors who prefer reduced motion) it switches to `is-done`.
 *   The CSS for each animated piece lives in the "CINEMATIC INTRO" block of site.css.
 * - It only plays by itself the first time the page is opened. Coming back to the page
 *   later (from the nav, say) opens it already finished, scrolled down to `startId`:
 *   the `data-intro-land` attribute tells ScrollManager (Layout.tsx) where to land.
 * - Scrolling all the way back up to it after it has scrolled away plays it again.
 */
export function IntroShell({ id, startId, duration, flashAt, skipLabel, label, children }: {
  /** Unique per intro ("home", "product"), to remember that it has played. */
  id: string;
  /** The section just after the intro, where a return visit lands. */
  startId: string;
  duration: number; flashAt: number; skipLabel: string; label: string;
  children: (state: { done: boolean }) => ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [played] = useState(() => playedIntros.has(id));
  const [done, setDone] = useState(reduced || played);
  const [playKey, setPlayKey] = useState(0);
  const [navHidden, setNavHidden] = useState(!played);
  useHideNav(navHidden);

  useEffect(() => { playedIntros.add(id); }, [id]);

  // Replay once the intro has scrolled away (armed) and then back to the very top.
  const armed = useRef(false);
  const canReplay = useRef(false);
  canReplay.current = done && !reduced;
  useScrollProgress(ref, useCallback((p: number) => {
    setNavHidden(p < 0.6);
    if (p > 0.9) armed.current = true;
    else if (p < 0.05 && armed.current && canReplay.current) {
      armed.current = false;
      setPlayKey((k) => k + 1);
      setDone(false);
    }
  }, []));

  useEffect(() => {
    if (done) return;
    if (reduced) { setDone(true); return; }
    const t = setTimeout(() => setDone(true), duration);
    return () => clearTimeout(t);
  }, [done, duration, reduced]);

  return (
    <section
      ref={ref}
      aria-label={label}
      className={`intro ${done ? "is-done" : "is-playing"}`}
      // The intro is a cinematic moment: it stays dark in the light theme too.
      data-theme="dark"
      style={{ "--flash-at": `${flashAt}ms` } as CSSProperties}
      data-intro-land={played ? startId : undefined}
    >
      {/* A new key on replay remounts everything, so every animation starts from the beginning. */}
      <Fragment key={playKey}>
        <Stars count={90} />
        <div className="letterbox top" aria-hidden="true" />
        <div className="letterbox bottom" aria-hidden="true" />
        <div className="intro-flash" aria-hidden="true" />
        <div className="intro-stage">{children({ done })}</div>
      </Fragment>
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
