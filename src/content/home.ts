/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  HOME PAGE  (drillmode…/)  →  src/pages/HomePage.tsx
 *  Sections, top to bottom: intro animation, hero, trusted brands, how it works,
 *  product card, why it matters (stats), final call to action.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { IconName } from "../components/icons/registry";

export const HOME = {
  /** The full-screen opening animation (Pixi drops in, then the DRILL MODE logo glitches in). */
  intro: {
    /** Wraps onto two lines by itself on small screens. Use "\n" to force a line break. */
    title: "DRILL MODE",
    subtitle: "SCAM FIGHTER",
    taglines: ["DEFEND YOUR MIND.", "DEFEAT THE SCAMMERS."],
    button: "[ PRESS START ]",
    scrollHint: "SCROLL TO START",
    skip: "SKIP ▶▶",
  },

  /** First section after the intro. The navigation bar appears here. */
  hero: {
    eyebrow: "Scam drills for the whole family",
    title: "Build the reflex before the real call.",
    text:
      "Scams are won in a moment of pressure, not a gap in knowledge. Drill Mode sends safe, consent-based practice scams (calls, texts and emails) so your family learns to pause, check and hang up when it counts.",
    primary: { label: "Try the demo", to: "/demo" },
    secondary: { label: "See how it works", to: "/product" },
    /** Pixi's speech bubble beside the hero. */
    pixiSays: "It's a fire drill, for scams. Want to practise?",
  },

  /**
   * TRUSTED BRANDS. `display` picks the layout:
   *   "marquee"  a carousel that scrolls on its own (pauses when hovered)
   *   "grid"     all logos shown at once, standing still
   * For a real logo, put the image in public/brands/ and set `logo: "/brands/your-file.svg"`.
   * Without a `logo`, the name is shown as a pixel badge with the chosen `icon`.
   */
  brands: {
    eyebrow: "Trusted brands",
    title: "In good company",
    /** PLACEHOLDER: remove this note once the logos are real. */
    note: "Placeholder logos. Only list organisations that have agreed to be shown here.",
    display: "marquee" as "marquee" | "grid",
    /** Seconds for one full loop of the carousel. Bigger = slower. */
    speedSeconds: 32,
    // PLACEHOLDER: swap these for real partners and their logos.
    items: [
      { name: "Partner One", icon: "shield", color: "#00ff88", logo: "/brands/placeholder-logo.svg" },
      { name: "Partner Two", icon: "house", color: "#4ecdc4" },
      { name: "Partner Three", icon: "star", color: "#ffe66d" },
      { name: "Partner Four", icon: "lock", color: "#c77dff" },
      { name: "Partner Five", icon: "family", color: "#ff6b35" },
      { name: "Partner Six", icon: "trophy", color: "#ff71c5" },
      { name: "Partner Seven", icon: "globe", color: "#00d4ff" },
      { name: "Partner Eight", icon: "badge", color: "#ff2d55" },
    ] as { name: string; icon: IconName; color: string; logo?: string; href?: string }[],
  },

  howItWorks: {
    eyebrow: "How it works",
    title: "Three steps. Zero real risk.",
    steps: [
      {
        icon: "check",
        color: "#00ff88",
        title: "Opt in",
        text: "Verify your own phone or inbox. Nothing is ever sent without your recorded consent.",
      },
      {
        icon: "phone",
        color: "#ff6b35",
        title: "Get drilled",
        text: "Pick a scam call, text or email. A realistic, fictional scammer tries their best tricks on you.",
      },
      {
        icon: "chat",
        color: "#00d4ff",
        title: "Debrief together",
        text: "Every drill ends with a reveal. Then Pixi starts the conversation in your family's house chat.",
      },
    ] as { icon: IconName; color: string; title: string; text: string }[],
  },

  /** The card that leads to the Product page. */
  productCard: {
    eyebrow: "The product",
    title: "One app. Every kind of scam. The whole family.",
    text:
      "Practise against AI scam calls in four languages, spot-the-scam quizzes, house drills with your family, and a pixel house you build up as you get safer.",
    highlights: [
      { icon: "phone", label: "Scam call, text & email drills" },
      { icon: "house", label: "A virtual house with a room for everyone" },
      { icon: "chat", label: "Pixi, your AI scam coach" },
      { icon: "trophy", label: "XP, coins & Payday Sunday" },
    ] as { icon: IconName; label: string }[],
    cta: { label: "Explore the product", to: "/product" },
  },

  /** Stats band. Check every number against its source before publishing. */
  stats: {
    eyebrow: "Why it matters",
    title: "Most scam victims were never hacked.",
    items: [
      { value: "$913.1M", label: "lost to scams in Singapore in 2025", color: "#ff2d55" },
      { value: "81.8%", label: "of victims transferred the money themselves", color: "#ffe66d" },
      { value: "85.2%", label: "of victims were under 65. It's not just a seniors' problem", color: "#4ecdc4" },
    ],
    source: "Source: Singapore Police Force, Annual Scams and Cybercrime Brief 2025.",
  },

  finalCta: {
    title: "Ready to practise?",
    text: "Try a two-minute drill right here in your browser. No sign-up, and nothing is sent to your phone.",
    button: { label: "[ TRY A DRILL ]", to: "/demo" },
  },
};
