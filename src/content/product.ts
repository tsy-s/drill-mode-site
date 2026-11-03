/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  PRODUCT PAGE  (/product)  →  src/pages/ProductPage.tsx
 *  Sections, top to bottom: boot-up intro animation, feature tree (#features),
 *  the drills in detail (#drills), safety by design (#safety), Try Demo button.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { IconName } from "../components/icons/registry";

/**
 * The small picture drawn inside each feature card. Each name is a built-in illustration
 * (src/components/product/FeatureVisual.tsx). To use a screenshot instead, put the image in
 * public/media/product/ and set `image: "/media/product/your-file.png"` on the feature.
 */
export type FeatureVisual = "call" | "quiz" | "family" | "house" | "chat" | "rewards" | "languages" | "safety";

export const PRODUCT = {
  intro: {
    /** Lines "typed" by the boot-up terminal before Pixi appears. */
    bootLines: [
      "> BOOTING DRILL MODE v2.0",
      "> LOADING SCAM PATTERNS ........ OK",
      "> FAMILY HOUSE ................. ONLINE",
      "> SUMMONING PIXI ...............",
    ],
    title: "MEET\nDRILL MODE",
    subtitle: "One app. Every kind of scam. The whole family.",
    scrollHint: "SCROLL TO EXPLORE",
    skip: "SKIP ▶▶",
  },

  /** The feature tree: Pixi at the top, a line down the middle, features branching left and right. */
  features: {
    eyebrow: "Key features",
    title: "Everything branches out from Pixi.",
    text: "Pixi is the pixel mascot who coaches your family through every drill. Here's what it can do.",
    pixiSays: "Hi! I'm Pixi. Scroll down and I'll show you around.",
    items: [
      {
        id: "drills",
        icon: "phone",
        accent: "#ff6b35",
        tag: "Live drills",
        title: "Real scam calls, texts & emails",
        text:
          "An AI scammer from a fictional organisation calls your own verified phone, texts you, or emails you, then reveals that it was a drill.",
        points: ["Calls in English, 中文, Bahasa Melayu & தமிழ்", "Texts modelled on real police-bulletin scams", "Say \"stop\" any time to end it"],
        visual: "call",
      },
      {
        id: "individual",
        icon: "eye",
        accent: "#ffe66d",
        tag: "Individual drill",
        title: "Spot the scam",
        text:
          "A quick solo quiz of 5 to 10 messages, with genuine ones mixed in. Tap the red flags to learn why each one is (or isn't) a scam.",
        points: ["AI-written from real scam patterns", "Matched to your age and daily life", "Practice mode needs no sign-up"],
        visual: "quiz",
      },
      {
        id: "house-drill",
        icon: "family",
        accent: "#00d4ff",
        tag: "House drill",
        title: "Play together as a family",
        text:
          "Everyone plays on their own phone and takes turns protecting the household. Team up, or race head-to-head for the crown.",
        points: ["TAKE TURNS: outsmart the scammers together", "RACE: best score takes the crown", "Grandma to grandkids, every age plays"],
        visual: "family",
      },
      {
        id: "virtual-house",
        icon: "house",
        accent: "#c77dff",
        tag: "Virtual house",
        title: "A pixel house that grows with you",
        text:
          "Every member gets their own room. Name it, pick the wallpaper, floor and neon lighting, and fill it with furniture from the shop.",
        points: ["44 pixel furniture items", "Custom walls, floors & lights", "Build a family tree for your house"],
        visual: "house",
      },
      {
        id: "pixi",
        icon: "chat",
        accent: "#00ff88",
        tag: "Pixi AI coach",
        title: "Conversations that start themselves",
        text:
          "After every drill, Pixi posts in your house chat, cheers on the player and asks a question that gets the family talking about scams.",
        points: ["Never shames, never ranks", "Answers scam questions any time", "Points to the 1799 helpline when it matters"],
        visual: "chat",
      },
      {
        id: "rewards",
        icon: "coin",
        accent: "#ffe66d",
        tag: "Rewards",
        title: "XP, coins & Payday Sunday",
        text:
          "Level up from Watcher to House Guardian, keep your streak, earn badges, and collect your weekly coins every Payday Sunday.",
        points: ["Daily rewards & streaks", "9 badges to collect", "Spend coins on furniture"],
        visual: "rewards",
      },
      {
        id: "languages",
        icon: "globe",
        accent: "#4ecdc4",
        tag: "Made for Singapore",
        title: "Four languages, every age",
        text:
          "The whole app works in English, Chinese, Malay and Tamil, including the real calls, texts and emails. Larger text, high contrast and reduced motion are one tap away.",
        points: ["EN · 中文 · BM · தமிழ்", "Accessibility settings built in", "Install it to your home screen"],
        visual: "languages",
      },
      {
        id: "safety",
        icon: "shield",
        accent: "#00ff88",
        tag: "Safe by design",
        title: "Consent first, always",
        text:
          "Nothing fires without recorded consent, every drill reveals itself, and stopping is never counted as a loss.",
        points: ["Fictional organisations only", "No caller-ID spoofing", "We never ask for real OTPs or passwords"],
        visual: "safety",
      },
    ] as {
      id: string; icon: IconName; accent: string; tag: string; title: string; text: string;
      points: string[]; visual: FeatureVisual; image?: string;
    }[],
  },

  /** The tabbed "drills in detail" section. One tab per drill. */
  drills: {
    eyebrow: "The drills",
    title: "A closer look at each drill.",
    text: "Practice versions run entirely inside the app. Live versions reach your real phone or inbox, but only after you've verified it's yours.",
    tabs: [
      {
        id: "call",
        label: "Scam call",
        icon: "phone",
        accent: "#ff6b35",
        title: "The scam call drill",
        summary:
          "Your phone rings. \"Officer Tan from the Office of Public Trust\" says your bank account is linked to a money-laundering case, and the pressure builds from there.",
        steps: [
          "Tap \"Call me now\". The AI caller rings your verified number.",
          "The caller escalates: calm authority, then urgency, then pressure.",
          "Hang up, ask \"is this a drill?\", or say \"stop\" to end it any time.",
          "A fixed reveal tells you it was a drill. Then Pixi walks you through the red flags.",
        ],
        redFlags: ["Official impersonation", "OTP request", "\"Safe account\" transfer", "Fake urgency"],
        mock: "call",
      },
      {
        id: "sms",
        label: "Scam text",
        icon: "chat-bubble",
        accent: "#ffe66d",
        title: "The scam text drill",
        summary:
          "A real SMS, written from a pattern in Singapore's police scam bulletins. Reply and the scammer answers in character for a few messages before the reveal.",
        steps: [
          "A bait text arrives on your verified phone. It never contains a working link.",
          "Report it, ignore it, or reply and see where the scammer takes you.",
          "A reveal text always follows, even if you never reply.",
          "Your result and red flags show up in the app.",
        ],
        redFlags: ["Unknown sender", "Small payment trick", "Suspicious link", "Deadline pressure"],
        mock: "sms",
      },
      {
        id: "email",
        label: "Phishing email",
        icon: "envelope",
        accent: "#c77dff",
        title: "The phishing email drill",
        summary:
          "A convincing phishing email lands in an inbox you've proven is yours. Inspect the sender, hover the links, and decide.",
        steps: [
          "Verify your inbox with a one-time link.",
          "A phishing drill arrives, with fake rewards, fake invoices or fake logins.",
          "Report it, or follow the bait to the safe reveal page.",
          "A safety follow-up email explains what to look for next time.",
        ],
        redFlags: ["Lookalike domain", "Too good to be true", "Credential theft", "Dangerous attachment"],
        mock: "email",
      },
      {
        id: "individual",
        label: "Individual drill",
        icon: "eye",
        accent: "#00ff88",
        title: "The individual drill",
        summary:
          "A solo round of spot-the-scam. Some messages are scams and some are genuine, because knowing what's safe matters too.",
        steps: [
          "Get 5 to 10 messages: texts, emails and app notifications.",
          "Choose what you'd do: report, mark safe, click, or ask family first.",
          "Tap the highlighted clues to see each red flag explained.",
          "Earn XP. Asking family first always earns partial credit.",
        ],
        redFlags: ["Urgency", "Impersonation", "Too good to be true", "Requests for codes"],
        mock: "quiz",
      },
      {
        id: "house",
        label: "House drill",
        icon: "family",
        accent: "#00d4ff",
        title: "The house drill",
        summary:
          "The whole family plays at once, each on their own phone. Take turns defending the house, or race for the crown.",
        steps: [
          "Create or join a house with a 6-character code.",
          "Choose TAKE TURNS (co-op) or RACE (head-to-head).",
          "Everyone answers the same scam scenarios.",
          "The winner takes the crown, and Pixi gets the family chat going.",
        ],
        redFlags: ["Family impersonation", "Fake invoices", "Job scams", "Account takeover"],
        mock: "house",
      },
    ] as {
      id: string; label: string; icon: IconName; accent: string; title: string; summary: string;
      steps: string[]; redFlags: string[]; mock: "call" | "sms" | "email" | "quiz" | "house"; image?: string;
    }[],
  },

  safety: {
    eyebrow: "Safe by design",
    title: "Realistic enough to train. Safe enough to trust.",
    items: [
      { icon: "check", title: "Opt-in only", text: "Nothing ever fires without a recorded consent." },
      { icon: "bell", title: "Always reveals", text: "Every drill ends by telling you it was a drill." },
      { icon: "shield", title: "Never punished for stopping", text: "Bailing out scores neutral, never a loss." },
      { icon: "x", title: "Distress off-ramp", text: "One tap, or the word \"stop\", ends any drill instantly." },
      { icon: "house", title: "Fictional institutions only", text: "Drills never pretend to be a real bank or agency." },
      { icon: "lock", title: "No caller-ID spoofing", text: "It's illegal in Singapore, and we don't do it." },
    ] as { icon: IconName; title: string; text: string }[],
  },

  cta: {
    title: "See it for yourself.",
    text: "Take a scam call or spot the scams in a two-minute demo, right here in your browser.",
    button: { label: "[ TRY DEMO ]", to: "/demo" },
  },
};
