/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  CONTACT PAGE  (/contact)  →  src/pages/ContactPage.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  HOW THE FORM SENDS MESSAGES
 *  The site has no server of its own, so the form works one of two ways:
 *
 *  1. `formEndpoint` is empty (the default): pressing Send opens the visitor's email
 *     app with the message filled in, addressed to SITE.contactEmail (src/content/site.ts).
 *  2. `formEndpoint` is set: the form posts the message to that address instead, and the
 *     visitor never leaves the page. Free services that give you an endpoint include
 *     Formspree (https://formspree.io) and Web3Forms (https://web3forms.com).
 *     Paste the endpoint URL they give you below, e.g. "https://formspree.io/f/abcdwxyz".
 */
export const CONTACT = {
  header: {
    eyebrow: "Contact",
    title: "Let's talk.",
    text: "Bringing Drill Mode to your community, writing about us, or just want to say hi? Send us a message and we'll get back to you within a few working days.",
  },

  /** Leave empty to use the visitor's email app. See the note at the top of this file. */
  formEndpoint: "",

  form: {
    name: "Your name",
    email: "Your email",
    organisation: "Organisation (optional)",
    topic: "What's it about?",
    message: "Message",
    send: "[ SEND MESSAGE ]",
    sending: "SENDING...",
    success: "Message sent! We'll be in touch soon.",
    error: "Something went wrong. Please email us directly instead.",
    /** Shown under the button when the form opens the visitor's email app. */
    mailtoNote: "Pressing send opens your email app with your message ready to go.",
  },

  /** The choices in the "What's it about?" dropdown. */
  topics: ["General question", "Partnership or pilot", "Schools & community groups", "Media & press", "Feedback on the app"],

  /** Heading above the social links (the links themselves are SOCIALS in site.ts). */
  socialsTitle: "Follow us",
  /** Heading on the red helpline card (the number is SITE.helpline in site.ts). */
  helplineTitle: "In a real scam right now?",

  /** The cards beside the form. */
  cards: [
    {
      icon: "envelope" as const,
      color: "#4ecdc4",
      title: "Email",
      /** "{email}" is replaced with SITE.contactEmail. */
      text: "{email}",
      link: "mailto:{email}",
    },
    {
      icon: "telegram" as const,
      color: "#00d4ff",
      title: "Try our Telegram bot",
      text: "Practise spotting scams in chat: @drillmodebot",
      link: "https://t.me/drillmodebot",
    },
  ],
};
