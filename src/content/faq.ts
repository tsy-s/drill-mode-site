/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  FAQ PAGE  (/faqs)  →  src/pages/FaqPage.tsx
 *  Questions are grouped into categories. To add a question, copy one { q, a }
 *  block. Start a new paragraph in an answer with a blank line ("\n\n").
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const FAQ = {
  header: {
    eyebrow: "FAQs",
    title: "Questions? We've got answers.",
    text: "Everything families, schools and partners usually ask us. Can't find yours? Get in touch.",
  },

  categories: [
    {
      title: "The basics",
      color: "#00ff88",
      items: [
        {
          q: "What is Drill Mode?",
          a: "Drill Mode is a scam-awareness app that works like a fire drill, for scams. Instead of reading about scams, you practise against realistic, fictional ones (calls, texts and emails) so staying calm and checking becomes a reflex.",
        },
        {
          q: "Who is it for?",
          a: "Every member of the household, from under-18s to over-65s. Scams aren't only a seniors' problem: most scam victims in Singapore are under 65. Drill Mode is built so families practise together and know who to turn to.",
        },
        {
          q: "How much does it cost?",
          a: "Drill Mode is free for families. We're working with government and community partners to fund it, so families never pay to protect themselves.",
        },
        {
          q: "What languages does it support?",
          a: "English, Chinese (中文), Malay (Bahasa Melayu) and Tamil (தமிழ்). That includes the live scam calls, texts and emails, not just the menus.",
        },
        {
          q: "Which devices does it work on?",
          a: "Drill Mode is a web app that runs on any modern phone browser. You can install it to your home screen so it opens like a normal app. Dedicated mobile apps are on our roadmap.",
        },
      ],
    },
    {
      title: "Safety & privacy",
      color: "#4ecdc4",
      items: [
        {
          q: "Is it safe? Will it scare my parents?",
          a: "Every drill is opt-in, ends with a clear reveal, and can be stopped instantly with one tap or by saying \"stop\". Stopping is never counted as a loss.\n\nDrills only ever impersonate fictional organisations, and we never spoof caller IDs.",
        },
        {
          q: "Can I send a drill to someone else?",
          a: "No. Calls and texts only go to a phone number you've verified yourself, and email drills only go to an inbox whose owner clicked a verification link. Nobody can drill someone without their consent.",
        },
        {
          q: "Will a drill ever ask for my real details?",
          a: "Never. Drills will never ask you for real passwords, OTPs, card details, transfers or payments. If you start reading out a real code during a call drill, the call stops immediately and nothing is stored.",
        },
        {
          q: "What data do you keep?",
          a: "Your name, verified phone number, optional email, drill results and progress, so drills and rewards can work. Room decorations and most display settings stay on your device.\n\nFor live calls, our voice provider processes a short transcript to score the drill. Audio recording is switched off, and we store the result rather than the transcript. You can remove your verified number at any time.",
        },
        {
          q: "Does Drill Mode detect real scams?",
          a: "No. Drill Mode is a training simulation, so it doesn't scan your messages or calls. All scenarios are fictional educational examples.",
        },
      ],
    },
    {
      title: "Using Drill Mode",
      color: "#ffe66d",
      items: [
        {
          q: "Do I need an account?",
          a: "Not for practice. The individual drill and the practice call, text and email work straight away. Live drills to your real phone or inbox need a quick verification first.",
        },
        {
          q: "Do drills arrive at random?",
          a: "Not yet. Today, you start every live drill yourself. Opt-in scheduled drills, with quiet hours and a pause button, are on our roadmap.",
        },
        {
          q: "Who is Pixi?",
          a: "Pixi is our pixel mascot and AI scam coach. After each drill, Pixi posts in your family's house chat, cheers on the player and asks a question to get everyone talking. Pixi never shames anyone or mentions scores.",
        },
        {
          q: "What is a house?",
          a: "A house is your family's shared space in the app. Each member gets their own room to decorate, there's a private house chat, and you can play house drills together. Invite family with a 6-character code.",
        },
      ],
    },
    {
      title: "For organisations",
      color: "#c77dff",
      items: [
        {
          q: "Can we bring Drill Mode to our community, school or company?",
          a: "Yes, we'd love to hear from you. We're looking for pilot partners such as community centres, schools, active ageing centres, banks and telcos. Reach out on the Contact page.",
        },
        {
          q: "Do you offer reporting for programmes?",
          a: "An anonymised dashboard for partner programmes is on our roadmap, so you'll be able to see how your community is improving without seeing anyone's individual results.",
        },
      ],
    },
  ],

  /** The warning box for anyone who is in a real scam right now. */
  emergency: {
    title: "In a real scam right now?",
    text: "Stop replying. Don't transfer money or share any codes. Call your bank on the number printed on your card, and call the Anti-Scam Helpline on 1799 (or 999 in an emergency).",
  },

  cta: {
    title: "Still have a question?",
    button: { label: "Contact us", to: "/contact" },
  },
};
