/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  ABOUT PAGE  (/about)  →  src/pages/AboutPage.tsx
 *  Sections: header, our story, the team house (#team).
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { IconName } from "../components/icons/registry";
import type { CharacterConfig } from "../components/avatars/character";
import type { RoomStyle } from "../components/room/roomStyle";

export const ABOUT = {
  header: {
    eyebrow: "About us",
    title: "We're Drill Mode.",
    text:
      "We're a small team building the scam drill that families actually want to play. We started as a competition project, and now we're working to put a drill in every home.",
  },

  story: {
    eyebrow: "Our story",
    title: "Knowledge is not a reflex.",
    paragraphs: [
      "Every one of us had a story: a parent who nearly paid a fake \"officer\", a friend who sent money to a \"new number\". They all knew scams existed. It didn't help in the moment, because scams are won under pressure, not through a gap in knowledge.",
      "So we built Drill Mode for Huawei Tech4City 2026: a fire drill, for scams. Families practise against realistic, fictional scammers until pausing and checking becomes automatic, and then they talk about it together.",
      "Now we're taking it beyond the competition, working towards pilots with community partners across Singapore.",
    ],
    /** Small fact tiles beside the story (from our June 2026 survey of 31 people). */
    facts: [
      { value: "100%", label: "had received a scam message or call", color: "#ff2d55" },
      { value: "77%", label: "say they, or someone close, almost fell for one", color: "#ffe66d" },
      { value: "13%", label: "actually ask for help when unsure", color: "#4ecdc4" },
    ],
  },

  /** The team house: each member gets a room. */
  house: {
    eyebrow: "The team",
    title: "Welcome to our house.",
    text: "Just like in the app, everyone on the team has their own room. Come say hi.",
    /** The sign on the roof. */
    roofTitle: "THE DRILL MODE HOUSE",
    /** The text on the doormat at the bottom of the house. */
    doormat: "EST. 2026",
  },

  cta: {
    title: "Want to work with us?",
    text: "We're looking for pilot partners, mentors and friends of the project.",
    button: { label: "Get in touch", to: "/contact" },
  },
};

/*
 * ── TEAM MEMBERS ─────────────────────────────────────────────────────────────
 *  One entry per person, top floor first. Rooms alternate the photo between the
 *  left and right side automatically.
 *
 *  photo      A square photo in public/media/team/ (e.g. "/media/team/alex.jpg").
 *             Leave it out to show the member's pixel avatar in the frame instead.
 *  avatar     Their pixel character. The options are in src/components/avatars/character/types.ts:
 *               skinTone   porcelain | peach | golden | tan | brown | deep | green | blue | purple | yellow | red
 *               hairStyle  none | bowl | tousled | fluffy | short | crew-cut | twin-buns | pigtails | wavy | long | bob
 *               hairColor  midnight | espresso | chestnut | silver | platinum | blonde | auburn | violet | denim | sage
 *               outfit     purple-coat | red-hoodie | blue-tank | overalls | puffer-vest | jersey-67 |
 *                          yellow-skirt | teal-dress | pinafore | striped-pants
 *               accessories  any of: round-glasses, hair-bow, necklace
 *  room       Their room's look (the same options as the app's room editor, src/components/room/roomStyle.ts):
 *               wall     midnight | violet | lagoon | rose | forest
 *               pattern  grid | plain | stripes | stars | brick | hex | circuit
 *               floor    oak | tile | checker | carpet | concrete | neon | metal
 *               light    mint | green | pink | purple | gold
 *               glow     true/false (a neon strip along the ceiling)
 *  furniture  Pixel furniture in the room: `art` is a file name from public/furniture/ (without .svg).
 *             It stands in the open side of the room (the side away from the photo), next to the
 *             member's character. `x` is the distance from that side's left edge (0–100; keep it
 *             at 76 or less so it fits), `size` is its width (default 24), `wall: true` hangs it on the wall.
 *  socials    Links shown under their bio. `icon` is a name from src/components/icons/registry.tsx.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  avatar: CharacterConfig;
  room: Omit<RoomStyle, "name">;
  furniture: { art: string; x: number; wall?: boolean; size?: number }[];
  socials: { icon: IconName; label: string; href: string }[];
};

export const TEAM: TeamMember[] = [
  {
    name: "Team Member 1", // PLACEHOLDER
    role: "Co-founder · Product & Engineering", // PLACEHOLDER
    bio: "Builds the drills and the systems that run them. Believes the best scam training should feel like a game, not a lecture.", // PLACEHOLDER
    avatar: { skinTone: "golden", hairStyle: "long", hairColor: "midnight", outfit: "teal-dress", accessories: ["round-glasses"] },
    room: { wall: "lagoon", pattern: "circuit", floor: "neon", light: "mint", glow: true },
    furniture: [
      { art: "18-desktop-setup", x: 2 },
      { art: "08-city-window", x: 38, wall: true },
      { art: "13-leafy-plant", x: 78, size: 18 },
    ],
    socials: [
      { icon: "linkedin", label: "LinkedIn", href: "#" }, // PLACEHOLDER
      { icon: "github", label: "GitHub", href: "#" }, // PLACEHOLDER
    ],
  },
  {
    name: "Team Member 2", // PLACEHOLDER
    role: "Co-founder · Design", // PLACEHOLDER
    bio: "Draws Pixi, the pixel house and every piece of furniture in it. Makes sure the app feels friendly for Grandma and fun for the grandkids.", // PLACEHOLDER
    avatar: { skinTone: "peach", hairStyle: "twin-buns", hairColor: "violet", outfit: "pinafore", accessories: ["hair-bow"] },
    room: { wall: "violet", pattern: "stars", floor: "checker", light: "pink", glow: true },
    furniture: [
      { art: "28-neon-sign", x: 38, wall: true },
      { art: "25-bean-bag", x: 2 },
      { art: "24-acoustic-guitar", x: 76 },
    ],
    socials: [
      { icon: "linkedin", label: "LinkedIn", href: "#" }, // PLACEHOLDER
      { icon: "instagram", label: "Instagram", href: "#" }, // PLACEHOLDER
    ],
  },
  {
    name: "Team Member 3", // PLACEHOLDER
    role: "AI & Voice", // PLACEHOLDER
    bio: "Teaches the AI scammer to sound convincing, and teaches it to stop the instant someone says \"stop\".", // PLACEHOLDER
    avatar: { skinTone: "tan", hairStyle: "crew-cut", hairColor: "espresso", outfit: "red-hoodie", accessories: [] },
    room: { wall: "midnight", pattern: "grid", floor: "metal", light: "purple", glow: true },
    furniture: [
      { art: "38-gaming-console", x: 2 },
      { art: "34-skylight", x: 38, wall: true },
      { art: "22-dumbbell-rack", x: 76 },
    ],
    socials: [
      { icon: "linkedin", label: "LinkedIn", href: "#" }, // PLACEHOLDER
      { icon: "github", label: "GitHub", href: "#" }, // PLACEHOLDER
    ],
  },
  {
    name: "Team Member 4", // PLACEHOLDER
    role: "Research & Scam Intelligence", // PLACEHOLDER
    bio: "Reads every police scam bulletin so the drills stay current. Ran the user research behind Drill Mode.", // PLACEHOLDER
    avatar: { skinTone: "brown", hairStyle: "bob", hairColor: "chestnut", outfit: "yellow-skirt", accessories: ["necklace"] },
    room: { wall: "forest", pattern: "stripes", floor: "oak", light: "gold", glow: false },
    furniture: [
      { art: "16-bookcase", x: 2 },
      { art: "09-curtained-window", x: 38, wall: true },
      { art: "07-reading-lamp", x: 78, size: 18 },
    ],
    socials: [
      { icon: "linkedin", label: "LinkedIn", href: "#" }, // PLACEHOLDER
    ],
  },
  {
    name: "Team Member 5", // PLACEHOLDER
    role: "Partnerships & Growth", // PLACEHOLDER
    bio: "Talks to community groups, schools and agencies about bringing Drill Mode to the families they serve.", // PLACEHOLDER
    avatar: { skinTone: "porcelain", hairStyle: "tousled", hairColor: "blonde", outfit: "puffer-vest", accessories: [] },
    room: { wall: "rose", pattern: "hex", floor: "carpet", light: "pink", glow: true },
    furniture: [
      { art: "01-mint-couch", x: 0, size: 30 },
      { art: "05-crystal-chandelier", x: 38, wall: true },
      { art: "33-palm-tree", x: 78, size: 20 },
    ],
    socials: [
      { icon: "linkedin", label: "LinkedIn", href: "#" }, // PLACEHOLDER
      { icon: "envelope", label: "Email", href: "mailto:hello@drillmode.example" }, // PLACEHOLDER
    ],
  },
];
