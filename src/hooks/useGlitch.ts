import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * The app's title-screen glitch (huawei-2026/src/app/screens/title/TitleScreen.tsx):
 * every `every` ms the text glitches for `duration` ms. Off when the visitor prefers
 * reduced motion or when `every` is 0.
 */
export function useGlitch(every = 3000, duration = 120) {
  const reduced = useReducedMotion();
  const [glitching, setGlitching] = useState(false);
  useEffect(() => {
    if (reduced || !every) return;
    let timeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setGlitching(true);
      timeout = setTimeout(() => setGlitching(false), duration);
    }, every);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, [every, duration, reduced]);
  return glitching;
}
