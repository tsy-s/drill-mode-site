/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  TRY DEMO PAGE  (/demo)  →  src/pages/DemoPage.tsx
 *  Two mini drills that run entirely in the visitor's browser (nothing is sent anywhere):
 *    1. QUIZ  "Spot the scam": messages taken from the app's individual drill.
 *    2. CALL  "Take a scam call": a scripted version of the app's live call drill,
 *       followed by Pixi's post-drill chat.
 *  All organisations, numbers and links below are fictional (".example" domains).
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { IconName } from "../components/icons/registry";

export const DEMO = {
  header: {
    eyebrow: "Try demo",
    title: "Try a drill.",
    text: "Two quick drills, straight from the app. No sign-up, and nothing is sent to your phone: everything happens on this page.",
  },

  /** The two cards you choose between. */
  modes: [
    {
      id: "quiz",
      icon: "eye",
      color: "#ffe66d",
      title: "Spot the scam",
      text: "Five messages. Some are scams, some are real. What would you do?",
      time: "≈ 2 MIN",
    },
    {
      id: "call",
      icon: "phone",
      color: "#ff6b35",
      title: "Take a scam call",
      text: "An \"officer\" says your bank account is under investigation. Can you keep your cool?",
      time: "≈ 2 MIN",
    },
  ] as { id: "quiz" | "call"; icon: IconName; color: string; title: string; text: string; time: string }[],

  /** Shown when either drill ends. */
  finish: {
    title: "Want the full experience?",
    text: "In the app, the calls are live AI voices on your own phone, the texts land in your real inbox, and your whole family can play together.",
    buttons: [
      { label: "See the product", to: "/product" },
      { label: "Bring it to your community", to: "/contact" },
    ],
  },
};

/*
 * ── 1. SPOT THE SCAM ─────────────────────────────────────────────────────────
 *  Copied from the app's individual drill (huawei-2026/src/app/data/familyScenarios.ts).
 *  Each message:
 *    type           "sms" | "email" | "notification"
 *    isScam         true for scams, false for genuine messages
 *    actions        the four buttons. `correctAction` must match one of them exactly.
 *    clues          `text` must appear word for word in the message (or sender) to be highlighted.
 *  Scoring (same as the app): correct answer 100 XP, "ASK FAMILY FIRST" 50 XP, anything else 25 XP.
 */
export const QUIZ = {
  intro: "Read each message, then choose what you'd do. Tap the highlighted clues afterwards to see why.",
  cautiousAction: "ASK FAMILY FIRST",
  results: {
    correctScam: "NICE CATCH!",
    correctSafe: "SPOT ON!",
    cautious: "GOOD INSTINCT",
    wrongScam: "GOT CAUGHT",
    wrongSafe: "FALSE ALARM",
    cautiousNote: "Checking with someone you trust is never a bad move.",
  },
  /** Pixi's line on the score screen, picked by how many you got right. */
  pixiSummary: {
    high: "Wow, you're a natural. Your family's lucky to have you on guard!",
    mid: "Not bad at all! A couple of those were sneaky ones.",
    low: "Those were tricky. That's exactly why we practise. Want another go?",
  },
  scenarios: [
    {
      id: 1, type: "sms", isScam: true,
      sender: "SG-SAFEALERT", senderNote: "Spoofed sender name. Official banks never lock accounts via SMS links.",
      timestamp: "2:14 PM",
      message: "Your bank account has been locked due to suspicious activity. Verify your identity within 15 minutes to avoid suspension: http://secure-bank-verify.example",
      correctAction: "REPORT AS SCAM", actions: ["REPORT AS SCAM", "CLICK LINK", "REPLY WITH NRIC", "ASK FAMILY FIRST"],
      clues: [
        { label: "Urgency", text: "within 15 minutes", explanation: "Scammers pressure you to act fast so you have no time to think." },
        { label: "Suspicious URL", text: "secure-bank-verify.example", explanation: "Not an official bank domain. Real banks use their own verified domains." },
        { label: "Fear Tactic", text: "account has been locked", explanation: "Threatening to lock your account is a classic panic-inducing scare tactic." },
        { label: "Identity Request", text: "Verify your identity", explanation: "Banks never ask you to verify identity through an SMS link." },
      ],
      explanation: "This was a phishing SMS. Scammers create panic by claiming your bank account is locked. Always use the official banking app or call the official hotline, and never follow a link in an SMS.",
    },
    {
      id: 11, type: "sms", isScam: false,
      sender: "TriStar Bank", senderNote: "Registered sender ID.",
      timestamp: "3:41 PM",
      message: "TriStar Bank: Your OTP for the login you just started on the TriStar app is 482913. Valid for 5 minutes. Never share this OTP with anyone, including bank staff.",
      correctAction: "MARK AS SAFE", actions: ["MARK AS SAFE", "REPORT AS SCAM", "DELETE IMMEDIATELY", "ASK FAMILY FIRST"],
      clues: [
        { label: "Safety Warning", text: "Never share this OTP", explanation: "Real banks remind you never to share your OTP. Scammers ask you to send it to them." },
        { label: "Official Channel", text: "on the TriStar app", explanation: "It matches a login you started yourself in the official app." },
        { label: "Expected Message", text: "the login you just started", explanation: "You only get an OTP when you start a login yourself. There is no link, no phone number and no payment request." },
      ],
      explanation: "This is a genuine OTP for a login you just started. It has no link and warns you not to share it. Type it into the app yourself, and never give it to anyone who asks.",
    },
    {
      id: 12, type: "email", isScam: true,
      sender: "National Tax Office", senderEmail: "refunds@ntax-refund-sg.example",
      senderNote: "Not an official government domain. Tax refunds are paid automatically, and you are never asked for card details.",
      subject: "You are eligible for a $482.60 tax refund", timestamp: "9:10 AM",
      message: "Our records show you overpaid tax this year. To receive your refund of $482.60, confirm your card number and CVV within 48 hours. Unclaimed refunds will be forfeited.",
      correctAction: "REPORT AS SCAM", actions: ["REPORT AS SCAM", "CLAIM REFUND", "ENTER CARD DETAILS", "REPLY TO EMAIL"],
      clues: [
        { label: "Card Details Request", text: "card number and CVV", explanation: "No agency needs your CVV to pay you. This is how scammers steal your card." },
        { label: "Too-Good-To-Be-True", text: "refund of $482.60", explanation: "Unexpected money is used to excite you and lower your guard." },
        { label: "Urgency", text: "within 48 hours", explanation: "Artificial deadlines pressure you into acting without thinking." },
        { label: "Suspicious Domain", text: "ntax-refund-sg.example", explanation: "Government emails come from official government domains, not lookalikes." },
      ],
      explanation: "This is a fake tax refund phishing email. Real refunds are paid into your registered bank account automatically. Never enter card details to \"receive\" money.",
    },
    {
      id: 8, type: "email", isScam: false,
      sender: "Harbourview Family Clinic", senderEmail: "appointments@harbourviewclinic.example",
      senderNote: "The sender domain matches the clinic's official website.",
      subject: "Appointment Reminder: Tue 14 Oct, 10:30 AM", timestamp: "8:15 AM",
      message: "Hi, this is a reminder of your appointment on Tuesday 14 Oct at 10:30 AM. No payment is needed now. To reschedule, call the number on our official website or use the clinic app.",
      correctAction: "MARK AS SAFE", actions: ["MARK AS SAFE", "REPORT AS SCAM", "DELETE IMMEDIATELY", "ASK FAMILY FIRST"],
      clues: [
        { label: "No Payment", text: "No payment is needed now", explanation: "This email does not ask for money or credentials." },
        { label: "Legit Domain", text: "harbourviewclinic.example", explanation: "The sender domain matches the organisation's official domain." },
        { label: "Official Channel", text: "use the clinic app", explanation: "Legitimate messages direct you to official channels, not random links." },
      ],
      explanation: "This is a normal appointment reminder. It asks for nothing, has no suspicious link, and points you to the clinic's own website and app.",
    },
    {
      id: 13, type: "sms", isScam: true,
      sender: "+65 8000 0347", senderNote: "An unknown number claiming to be someone you know. Call their old number to check.",
      timestamp: "7:32 PM",
      message: "Hi it's me, I dropped my phone so this is my new number. Can you help me pay a bill? I need $950 urgently, will pay you back tomorrow. Please don't call, my mic is broken.",
      correctAction: "REPORT AS SCAM", actions: ["REPORT AS SCAM", "TRANSFER MONEY", "SAVE NEW NUMBER", "ASK FAMILY FIRST"],
      clues: [
        { label: "Family Impersonation", text: "this is my new number", explanation: "Scammers pretend to be a family member or friend who changed numbers." },
        { label: "Money Request", text: "I need $950", explanation: "A sudden request for money from a \"new number\" is a major red flag." },
        { label: "Urgency", text: "urgently", explanation: "Scammers pressure you to act fast so you have no time to think." },
        { label: "Avoids Calls", text: "Please don't call", explanation: "They avoid calls because their voice would give them away." },
      ],
      explanation: "This is an impersonation scam. Before sending any money, call the person on the number you already have saved. Real family won't mind you checking.",
    },
  ] as QuizScenario[],
};

export type QuizScenario = {
  id: number;
  type: "sms" | "email" | "notification";
  isScam: boolean;
  sender: string;
  senderEmail?: string;
  senderNote: string;
  subject?: string;
  timestamp: string;
  message: string;
  correctAction: string;
  actions: string[];
  clues: { label: string; text: string; explanation: string }[];
  explanation: string;
};

/*
 * ── 2. TAKE A SCAM CALL ──────────────────────────────────────────────────────
 *  A choose-your-reply version of the app's live call drill (persona from
 *  huawei-2026/server/vapi.js). The call is a set of steps: each step is one thing the
 *  caller says, plus the replies the visitor can pick. A reply's `next` is either another
 *  step's id, or an ending: "caught_flag" (refused / checked: a win) or "complied"
 *  (fell for it). Hanging up and stopping the drill are always available.
 *  In `flags`, `phrase` must appear word for word in the caller's line.
 */
export const CALL = {
  caller: { name: "UNKNOWN CALLER", number: "+65 8000 0101" },
  incoming: {
    title: "INCOMING CALL",
    answer: "ANSWER",
    decline: "DECLINE",
    /** Instructions beside the ringing phone. */
    heading: "YOUR PHONE IS RINGING…",
    text: "An unknown number is calling. Answer to start the drill, then choose how to reply as the caller talks. You can hang up at any time. Tap the speaker icon to hear the caller.",
  },
  replyHeading: "HOW DO YOU REPLY?",
  hangUp: "[ HANG UP ]",
  stop: "THIS IS TOO MUCH, STOP THE DRILL",
  tapHint: "TAP RED TEXT TO SEE WHY",
  flagsHeading: "Red flags in this call",
  /** Read the caller's lines aloud with the browser's built-in voice (visitors can switch it off). */
  voiceDefaultOn: false,

  flags: {
    official_impersonation: { name: "OFFICIAL IMPERSONATION", explanation: "A caller claiming to be an officer is not proof of identity. End the call and contact the organisation on a number you look up yourself." },
    fear_tactic: { name: "FEAR TACTIC", explanation: "Saying you're linked to a crime is meant to make you panic, so you stop thinking clearly." },
    urgency: { name: "FAKE URGENCY", explanation: "Pressure to act immediately stops you checking the story with a trusted person or an official channel." },
    transfer_pressure: { name: "TRANSFER PRESSURE", explanation: "Urgent instructions to move money to a \"safe account\" are a common scam pattern. Banks and the police never protect money this way." },
    secrecy: { name: "SECRECY", explanation: "Telling you not to tell anyone cuts you off from the people most likely to spot the scam." },
    otp_request: { name: "OTP / SECRET REQUEST", explanation: "Real staff will never ask you to read out an OTP, PIN, password or full card number." },
  } as Record<string, { name: string; explanation: string }>,

  start: "intro",
  steps: [
    {
      id: "intro",
      line: "Hello, this is Officer Tan from the Office of Public Trust. Am I speaking with the account holder?",
      flags: [{ phrase: "Officer Tan from the Office of Public Trust", flagId: "official_impersonation" }],
      replies: [
        { label: "Yes, speaking. What's this about?", next: "case" },
        { label: "How did you get my number?", next: "investigation" },
      ],
    },
    {
      id: "investigation",
      line: "We have your details because of an ongoing investigation. This is very serious, so please listen carefully.",
      flags: [{ phrase: "ongoing investigation", flagId: "fear_tactic" }],
      replies: [
        { label: "Okay... what investigation?", next: "case" },
        { label: "I'd rather check this myself. I'll call your office directly.", next: "caught_flag" },
      ],
    },
    {
      id: "case",
      line: "So, your bank account has been linked to a money-laundering case. We need to act today, before it's frozen.",
      flags: [
        { phrase: "money-laundering case", flagId: "fear_tactic" },
        { phrase: "We need to act today", flagId: "urgency" },
      ],
      replies: [
        { label: "What? I haven't done anything wrong!", next: "safe-account" },
        { label: "Let me call you back on your official hotline.", next: "caught_flag" },
      ],
    },
    {
      id: "safe-account",
      line: "Okay, listen. To protect your savings, we'll move them to a safe account right now. Don't tell anyone, it could compromise the investigation.",
      flags: [
        { phrase: "safe account", flagId: "transfer_pressure" },
        { phrase: "right now", flagId: "urgency" },
        { phrase: "Don't tell anyone", flagId: "secrecy" },
      ],
      replies: [
        { label: "Okay... how do I do that?", next: "otp" },
        { label: "Banks don't do that. I'm checking with my family first.", next: "caught_flag" },
      ],
    },
    {
      id: "otp",
      line: "I'm sending a one-time code to your phone now. Read it out to me so I can confirm it's really you.",
      flags: [{ phrase: "Read it out to me", flagId: "otp_request" }],
      replies: [
        { label: "Um, okay. It says 4... 8...", next: "complied" },
        { label: "No. I never share my OTP with anyone.", next: "caught_flag" },
      ],
    },
  ] as { id: string; line: string; flags: { phrase: string; flagId: string }[]; replies: { label: string; next: string }[] }[],

  /** The reveal, shown at the end of every answered call (from the app's call script). */
  reveal:
    "Stop right there. This was a Drill Mode drill. You are safe, and there is nothing wrong with your account. In a real scam, that is the exact moment you would have lost your money. Well done for practising.",

  outcomes: {
    hung_up: { title: "SCAMMER DEFEATED!", color: "#00ff88", text: "You hung up. That's the single best move against a scam call." },
    caught_flag: { title: "YOU SPOTTED IT!", color: "#00ff88", text: "You refused to play along and chose to check through an official channel. That's the reflex we're building." },
    complied: { title: "GOT CAUGHT, AND THAT'S OKAY", color: "#ff2d55", text: "In a real scam, reading out that code is the moment you'd lose your money. Now you know exactly what it sounds like." },
    stopped: { title: "DRILL STOPPED", color: "#9bb0c8", text: "Stopping is never counted as a loss. Drills should be challenging, never distressing." },
    declined: { title: "CALL DECLINED", color: "#4ecdc4", text: "Not picking up unknown numbers is a perfectly good choice! Want to practise anyway?" },
  } as Record<"hung_up" | "caught_flag" | "complied" | "stopped" | "declined", { title: string; color: string; text: string }>,

  /**
   * Pixi's post-drill chat (in the app, Pixi writes these in the family house chat).
   * `post` is Pixi's first message; the visitor picks a quick reply and Pixi answers with its `reply`.
   */
  pixiChat: {
    title: "HOUSE CHAT",
    hung_up: {
      post: "You hung up on the fake officer before he got anywhere. Nicely done 👏",
      question: "What made you suspicious first?",
      replies: [
        { label: "The \"Office of Public Trust\"", reply: "Good eye. Anyone can claim a title on the phone. If you're unsure, hang up and look up the official number yourself." },
        { label: "The money-laundering scare", reply: "Exactly. Fear is the scammer's favourite tool, because a panicked brain skips the checks." },
        { label: "I never trust unknown callers", reply: "Honestly, that's a great habit. A real agency can always reach you another way." },
      ],
    },
    caught_flag: {
      post: "You checked instead of panicking. That's exactly the reflex we're building 💪",
      question: "Have you ever had a call like this for real?",
      replies: [
        { label: "Yes, actually", reply: "You're not alone, almost everyone has. Sharing the story with your family helps them spot the next one." },
        { label: "Not yet", reply: "Now you'll recognise it if you do. The \"safe account\" line is the giveaway." },
        { label: "Someone in my family has", reply: "Ask them what the caller said. Talking it through together is the best practice there is." },
      ],
    },
    complied: {
      post: "The fake officer got the code this time. Happens to the best of us, and now you know what that one sounds like 😅",
      question: "Want a quick tip for next time?",
      replies: [
        { label: "Yes please", reply: "If anyone asks you to read out a code, hang up. No real bank or agency will ever ask for it." },
        { label: "What else should I watch for?", reply: "Officers on the phone, a \"safe account\", being told to keep it secret. Any one of those means hang up and check." },
      ],
    },
    stopped: {
      post: "Taking a break is always okay. Come back whenever you're ready 🙂",
      question: "",
      replies: [],
    },
  } as { title: string } & Record<"hung_up" | "caught_flag" | "complied" | "stopped", { post: string; question: string; replies: { label: string; reply: string }[] }>,
};
