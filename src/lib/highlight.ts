/**
 * Splits `text` into pieces so the given phrases can be highlighted.
 * Each piece has the phrase's position in `phrases`, or -1 for ordinary text.
 * Matching ignores upper/lower case. Phrases that don't appear are skipped.
 */
export function splitByPhrases(text: string, phrases: string[]): { text: string; match: number }[] {
  const pieces: { text: string; match: number }[] = [];
  const lower = text.toLowerCase();
  let pos = 0;
  while (pos < text.length) {
    let best = -1;
    let bestAt = Infinity;
    phrases.forEach((p, i) => {
      if (!p) return;
      const at = lower.indexOf(p.toLowerCase(), pos);
      if (at !== -1 && at < bestAt) { best = i; bestAt = at; }
    });
    if (best === -1) { pieces.push({ text: text.slice(pos), match: -1 }); break; }
    if (bestAt > pos) pieces.push({ text: text.slice(pos, bestAt), match: -1 });
    pieces.push({ text: text.slice(bestAt, bestAt + phrases[best].length), match: best });
    pos = bestAt + phrases[best].length;
  }
  return pieces;
}
