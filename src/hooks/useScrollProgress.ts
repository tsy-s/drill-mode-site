import { useEffect, type RefObject } from "react";

/**
 * Writes how far an element has scrolled out of the top of the screen into its `--p` CSS
 * variable: 0 while it fills the screen, 1 once it has scrolled away. The cinematic intros
 * use it to pull back the letterbox bars and fade out as you scroll.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>, onChange?: (progress: number) => void) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      el.style.setProperty("--p", progress.toFixed(3));
      onChange?.(progress);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ref, onChange]);
}
