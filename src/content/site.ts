/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE-WIDE SETTINGS: name, logo, navigation bar, footer and social links.
 *  Lines marked as a placeholder (in capitals) still need real details before launch.
 *  Run `npm run placeholders` to list every placeholder left on the site.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  Links (`to`) can be:
 *    "/product"            a page on this site (see src/App.tsx for the list of pages)
 *    "/product#drills"     a section on a page (the section's id)
 *    "https://…"           another website (opens in a new tab)
 *    "mailto:…" / "tel:…"  an email address / phone number
 */
import type { IconName } from "../components/icons/registry";

export const SITE = {
  name: "Drill Mode",
  tagline: "Build the reflex before the real call.",
  /** Default description shown by search engines and link previews. */
  description:
    "Drill Mode runs safe, consent-based scam drills (calls, texts and emails) so families build the reflex before the real call.",
  /** One-liner under the logo in the footer. */
  oneLiner: "Safe, consent-based scam drills that train the whole family to stay calm when it counts.",
  copyright: "© 2026 Drill Mode. All rights reserved.",

  /** PLACEHOLDER: the team's contact email. Used on the Contact page and in the footer. */
  contactEmail: "hello@drillmode.example",

  /**
   * Link to the full app. Leave empty ("") to hide every "Open the app" button.
   * The competition build is at https://huawei-2026.vercel.app. Check it is ready for the
   * public (phone verification switched back on) before putting it here.
   */
  appUrl: "",

  /** The Drill Mode Telegram bot. */
  telegramBot: "https://t.me/drillmodebot",

  /** Shown on the FAQ and Contact pages for anyone in a real scam right now. */
  helpline: { label: "Anti-Scam Helpline", number: "1799" },

  logo: {
    wordmark: "DRILL MODE",
    /** "head" shows Pixi's head beside the wordmark; "body" shows the whole of Pixi. */
    mascot: "head" as "head" | "body",
    mascotColor: "#4ecdc4",
    /** Milliseconds between glitches of the wordmark. 0 = never glitch. */
    glitchEvery: 3000,
  },

  /** Retro screen effects shown on every page. */
  effects: {
    /** The faint horizontal CRT lines over the whole site. */
    scanlines: true,
  },
};

/** The links in the top navigation bar, in order. `accent` is the underline colour. */
export const NAV_LINKS = [
  { label: "Product", to: "/product", accent: "#00ff88" },
  { label: "About", to: "/about", accent: "#4ecdc4" },
  { label: "FAQs", to: "/faqs", accent: "#ffe66d" },
  { label: "Contact", to: "/contact", accent: "#c77dff" },
];

/** The highlighted button at the right end of the navigation bar. */
export const NAV_CTA = { label: "Try Demo", to: "/demo" };

/**
 * Social links, shown in the footer and on the Contact page.
 * `icon` is a name from src/components/icons/registry.tsx. Leave `href` empty to hide one.
 */
export const SOCIALS: { label: string; icon: IconName; href: string }[] = [
  { label: "Telegram bot", icon: "telegram", href: "https://t.me/drillmodebot" },
  { label: "LinkedIn", icon: "linkedin", href: "#" }, // PLACEHOLDER: company LinkedIn page
  { label: "Instagram", icon: "instagram", href: "#" }, // PLACEHOLDER: Instagram account
  { label: "GitHub", icon: "github", href: "" },
];

/** Footer link columns. Add, remove or reorder freely. */
export const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features", to: "/product#features" },
      { label: "The drills", to: "/product#drills" },
      { label: "Safety", to: "/product#safety" },
      { label: "Try Demo", to: "/demo" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", to: "/about" },
      { label: "The team", to: "/about#team" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQs", to: "/faqs" },
      { label: "Telegram bot", to: "https://t.me/drillmodebot" },
      { label: "Scam helpline: 1799", to: "tel:1799" },
    ],
  },
];

/** The small legal links along the bottom of the footer. */
export const FOOTER_LEGAL = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
];
