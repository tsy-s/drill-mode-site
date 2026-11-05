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
  { label: "Home", to: "/", accent: "#ff6b35" },
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

/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  SMALL WORDS USED BY THE SITE ITSELF: button labels, screen-reader labels, and the text
 *  inside the phone mock-ups and feature pictures. Words in {curly brackets} are filled in
 *  by the site, so keep them as they are. In `flags` lists, each phrase must appear word
 *  for word in the text above it to be highlighted.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const UI = {
  skipToContent: "Skip to content",
  logoLabel: "{name} home",
  nav: { main: "Main", openMenu: "Open menu", closeMenu: "Close menu", language: "Language", lightTheme: "Light theme" },
  footer: { legal: "Legal" },
  intro: { home: "Drill Mode intro", product: "Product intro" },
  pageTitles: { about: "About", product: "Product", faq: "FAQs", contact: "Contact", demo: "Try Demo", notFound: "Page not found" },

  legal: {
    eyebrow: "Legal",
    updated: "Last updated {date}",
    englishOnly: "This page is only available in English for now.",
  },
  notFound: {
    headline: "SUSPICIOUS LINK DETECTED.",
    text: "This page doesn't exist. Good instinct to check! Let's get you somewhere safe.",
    button: "[ BACK TO HOME ]",
  },
  faq: {
    search: "Search the FAQs",
    placeholder: "Search questions…",
    categories: "FAQ categories",
    noMatch: "No questions match \"{query}\". Try another word, or",
    askUs: "ask us directly",
  },
  contact: {
    callHelpline: "Call the {label}: {number}",
    mailSubject: "[{topic}] Message from {name}",
  },
  demo: { playing: "▶ Playing", start: "Start ▶" },
  drillTabs: { label: "Drills", redFlags: "Red flags it trains", tryDemo: "Try it in the demo →" },

  quiz: {
    progress: "MESSAGE {n} / {total}",
    whatWouldYouDo: "WHAT WOULD YOU DO?",
    inbox: "INBOX",
    messages: "MESSAGES",
    notifications: "NOTIFICATIONS",
    textMessage: "Text message",
    appNotification: "App notification",
    redFlags: "Red flags",
    genuineSigns: "Signs it's genuine",
    tapToLearn: "tap to learn",
    next: "NEXT MESSAGE →",
    seeResults: "SEE RESULTS →",
    complete: "DRILL COMPLETE",
    xpEarned: "+{xp} XP earned",
    scam: "scam",
    genuine: "genuine",
    playAgain: "PLAY AGAIN",
    takeCall: "TAKE A SCAM CALL →",
  },
  call: {
    phoneTitle: "SCAM CALL",
    ended: "CALL ENDED",
    speaking: "CALLER SPEAKING",
    listening: "LISTENING...",
    muteVoice: "Mute caller voice",
    readAloud: "Read caller lines aloud",
    voiceOn: "Voice on",
    voiceOff: "Voice off",
    drillActive: "SCAM DRILL ACTIVE",
    reveal: "DRILL REVEAL",
    practiseAnyway: "PRACTISE ANYWAY →",
    tryAgain: "TRY AGAIN",
    spotScam: "SPOT THE SCAM →",
  },
  chat: { pixi: "PIXI", typing: "Pixi is typing" },

  /** The phone mock-ups on the Home and Product pages (src/components/mocks/PhoneMocks.tsx). */
  mocks: {
    call: {
      title: "SCAM CALL",
      speaking: "CALLER SPEAKING",
      caller: "OFFICER TAN",
      active: "SCAM DRILL ACTIVE",
      lines: [
        { text: "This is Officer Tan from the Office of Public Trust.", flags: ["Office of Public Trust"] },
        { text: "Move your savings to a safe account right now.", flags: ["safe account", "right now"] },
      ],
      reply: "Banks don't do that. I'm hanging up.",
      hangUp: "[ HANG UP ]",
    },
    sms: {
      title: "MESSAGES",
      sender: "ParcelGo Alert",
      meta: "Text message · Today 11:47",
      text: "Delivery failed. Pay a $1.99 redelivery fee today or your parcel will be returned: parcelgo-redeliver.example",
      flags: ["$1.99 redelivery fee", "today", "parcelgo-redeliver.example"],
      found: "3 RED FLAGS FOUND",
      report: "REPORT SCAM",
      pay: "PAY FEE",
    },
    email: {
      title: "INBOX",
      sender: "Campus Rewards Office",
      subject: "YOU'VE WON A $300 REWARD!",
      text: "Claim within 30 minutes or your reward will be reassigned. Verify your account to continue.",
      flags: ["within 30 minutes", "will be reassigned", "Verify your account"],
      claim: "CLAIM REWARD",
    },
    quiz: {
      title: "INDIVIDUAL DRILL",
      progress: "MESSAGE 3 / 5",
      from: "FROM: +65 8000 0347",
      text: "Hi it's me, this is my new number. I need $950 urgently. Please don't call.",
      flags: ["this is my new number", "I need $950", "Please don't call"],
      actions: ["REPORT AS SCAM", "TRANSFER MONEY", "SAVE NUMBER", "ASK FAMILY FIRST"],
      result: "NICE CATCH! +100 XP",
    },
    house: {
      title: "HOUSE DRILL",
      round: "RACE · ROUND 4 / 5",
      players: ["GRANDMA", "MUM", "YOU", "KID"],
      pixi: "Grandma's on a streak! Mum, can you catch up? 👀",
    },
  },

  /** The small pictures in the Product page's feature cards (src/components/product/FeatureVisual.tsx). */
  visuals: {
    call: { text: "\"This is Officer Tan. Your account is linked to a money-laundering case.\"", flags: ["money-laundering case"] },
    quiz: { text: "Your parcel is held. Pay $1.99 today: parcel-go.example", flags: ["$1.99", "parcel-go.example"], scam: "SCAM", safe: "SAFE" },
    chat: { pixi1: "Dad hung up on the fake bank call straight away 👏", pixi2: "Mum, have you ever had a call like this?", reply: "Yes! Last month 😅" },
    rewards: { payday: "PAYDAY SUNDAY", level: "LV 4 · SCAM BLOCKER" },
    safety: "SAFE",
  },
};

/** Fills in the {words} in a UI string: format(UI.quiz.xpEarned, { xp: 300 }). */
export function format(text: string, values: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));
}
