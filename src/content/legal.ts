/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  LEGAL PAGES  (/privacy and /terms)  →  src/pages/LegalPage.tsx
 *
 *  PLACEHOLDER: these are starting drafts written from how the app works today.
 *  They are NOT legal advice. Have them reviewed (including against Singapore's PDPA)
 *  before launch, then delete the `draftNotice` lines.
 *
 *  Each section has a heading and paragraphs. Start a bullet list by beginning a
 *  paragraph with "- " on each line.
 * ─────────────────────────────────────────────────────────────────────────────
 */
type LegalDoc = {
  title: string;
  updated: string;
  draftNotice?: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const PRIVACY: LegalDoc = {
  title: "Privacy Policy",
  updated: "3 November 2026",
  draftNotice: "Draft for review: this policy is a placeholder and has not been reviewed by a lawyer.",
  intro:
    "This policy explains what information Drill Mode collects, why, and the choices you have. We collect only what we need to run drills safely and keep track of your progress.",
  sections: [
    {
      heading: "What we collect",
      paragraphs: [
        "- Your display name and the language you choose.\n- Your verified phone number, if you turn on live call or text drills.\n- Your email address, if you verify an inbox for email drills.\n- Drill results, XP, coins and badges.\n- Messages you post in your house chat.",
        "Room decorations and most display preferences stay in your browser and are not sent to us.",
      ],
    },
    {
      heading: "How we use it",
      paragraphs: [
        "We use your information to deliver the drills you ask for, score them, show your progress, and let your house see shared results. We do not sell your information or use it for advertising.",
      ],
    },
    {
      heading: "Live call drills",
      paragraphs: [
        "For live call drills, our voice provider processes a short transcript of the call so the drill can be scored. Audio recording is switched off. We store the outcome of the drill, not the transcript.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can remove your verified phone number at any time. This stops phone drills and signs out your devices, but keeps your progress. To delete your account or ask what we hold about you, contact us at the email address on our Contact page.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: ["If we change this policy, we'll update the date at the top of this page."],
    },
  ],
};

export const TERMS: LegalDoc = {
  title: "Terms of Use",
  updated: "3 November 2026",
  draftNotice: "Draft for review: these terms are a placeholder and have not been reviewed by a lawyer.",
  intro: "By using Drill Mode you agree to these terms. Please read them along with our Privacy Policy.",
  sections: [
    {
      heading: "What Drill Mode is",
      paragraphs: [
        "Drill Mode is an educational training simulation. It does not detect, block or report real scams. All scenarios, organisations and people in drills are fictional.",
      ],
    },
    {
      heading: "Consent and your own devices",
      paragraphs: [
        "You may only verify phone numbers and email inboxes that belong to you. You may not use Drill Mode to send drills to anyone who has not given their own consent.",
      ],
    },
    {
      heading: "Never share real details",
      paragraphs: [
        "Drill Mode will never ask for real passwords, OTPs, card details, transfers or payments. Never give these to anyone during a drill or otherwise.",
      ],
    },
    {
      heading: "Acceptable use",
      paragraphs: [
        "- Don't misuse the house chat or harass other members.\n- Don't try to break, overload or reverse-engineer the service.\n- Don't use drill content to run real scams.",
      ],
    },
    {
      heading: "No guarantee",
      paragraphs: [
        "We work hard to keep Drill Mode accurate and available, but it is provided as is. Practising with Drill Mode does not guarantee you will never be scammed.",
      ],
    },
  ],
};
