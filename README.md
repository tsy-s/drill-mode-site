# Drill Mode · Website

The marketing website for **Drill Mode**. It uses the same retro pixel look as the app
(`huawei-2026`) and reuses its pieces: Pixi, the pixel icons, the family characters, the room
wallpapers and floors, and the furniture.

There is no CMS yet. Instead, **every piece of text, every link and every image path lives in
a handful of files in `src/content/`**. Most day-to-day edits mean opening one of those files,
changing some words, and saving. This guide explains how.

---

## Contents

1. [Quick start](#1-quick-start)
2. [How the site is organised](#2-how-the-site-is-organised)
3. [Find the file for any page](#3-find-the-file-for-any-page)
4. [Editing text](#4-editing-text)
5. [Translations (中文, BM, தமிழ்)](#5-translations)
6. [Links](#6-links)
7. [Images and other media](#7-images-and-other-media)
8. [Icons](#8-icons)
9. [The team page (rooms, avatars, photos)](#9-the-team-page)
10. [Trusted brands carousel](#10-trusted-brands-carousel)
11. [The Try Demo drills](#11-the-try-demo-drills)
12. [Colours, fonts, logo and effects](#12-colours-fonts-logo-and-effects)
13. [The contact form](#13-the-contact-form)
14. [Adding, removing or reordering sections and pages](#14-adding-removing-or-reordering-sections-and-pages)
15. [Where the components came from](#15-where-the-components-came-from)
16. [Checking your changes](#16-checking-your-changes)
17. [Publishing the site](#17-publishing-the-site)
18. [Before launch checklist](#18-before-launch-checklist)
19. [Moving to a CMS later](#19-moving-to-a-cms-later)
20. [Troubleshooting](#20-troubleshooting)

---

## 1. Quick start

You need [Node.js](https://nodejs.org) **22 or newer**. Open a terminal in this folder (`drill-mode-site`), then:

```bash
npm install
```

```bash
npm run dev
```

Open **http://localhost:5190**. Leave the terminal running: every time you save a file, the
page in your browser updates by itself.

Other commands:

| Command | What it does |
|---|---|
| `npm run check` | Safety net after editing: renders every page in every language, checks every image path, checks the demo scripts and highlighted phrases, and checks that the translation files line up with the English. **Run this before publishing.** |
| `npm run placeholders` | Lists every line still marked `PLACEHOLDER` (fake names, `#` links, the example email…) and every translation file still marked `DRAFT TRANSLATION`. |
| `npm run build` | Builds the finished site into `dist/` (this is what gets published). It also fails if any content file has a typo the checker can spot. |
| `npm run preview` | Serves the built `dist/` folder locally so you can look at it before publishing. |

---

## 2. How the site is organised

```
drill-mode-site/
├── index.html                ← browser-tab title, favicon, social preview image, Google Fonts
├── public/                   ← images and files served as-is
│   ├── furniture/            ← the 44 pixel furniture pictures from the app
│   ├── brands/               ← partner logos for the "Trusted brands" carousel
│   ├── media/team/           ← team photos
│   ├── media/product/        ← product screenshots (optional)
│   └── pixi-icon.png, icon-*.png, apple-touch-icon.png   ← favicon and app icons
├── src/
│   ├── content/              ← ★ ALL THE WORDS, LINKS AND IMAGE PATHS ★
│   │   ├── site.ts           ← site name, logo, nav bar, footer, social links, contact email
│   │   ├── home.ts           ← Home page
│   │   ├── product.ts        ← Product page
│   │   ├── about.ts          ← About page + the TEAM list
│   │   ├── faq.ts            ← FAQ page
│   │   ├── contact.ts        ← Contact page + how the form sends messages
│   │   ├── demo.ts           ← Try Demo page: the quiz messages and the scam-call script
│   │   ├── legal.ts          ← Privacy Policy and Terms of Use
│   │   └── locales/          ← translations: zh/ (中文), ms/ (Bahasa Melayu), ta/ (தமிழ்)
│   ├── i18n/                 ← the language picker's memory and how translations are applied
│   ├── pages/                ← one file per page; lists that page's sections in order
│   ├── components/           ← the building blocks (sections, Pixi, icons, rooms, phone mock-ups…)
│   ├── styles/               ← colours (theme.css), type sizes (typography.css), effects (site.css)
│   ├── hooks/, lib/          ← small helpers (you won't normally need these)
│   └── App.tsx               ← the list of pages and their addresses
├── scripts/                  ← the `npm run check` and `npm run placeholders` helpers
└── vercel.json               ← hosting settings for Vercel
```

**The golden rule:** to change *what the site says or shows*, edit `src/content/`. To change
*how it looks or behaves*, edit `src/components/` or `src/styles/`.

---

## 3. Find the file for any page

| Page | Address | Words and images | Layout (sections, in order) |
|---|---|---|---|
| Home | `/` | `src/content/home.ts` | `src/pages/HomePage.tsx` |
| Product | `/product` | `src/content/product.ts` | `src/pages/ProductPage.tsx` |
| About + team | `/about` | `src/content/about.ts` | `src/pages/AboutPage.tsx` |
| FAQs | `/faqs` | `src/content/faq.ts` | `src/pages/FaqPage.tsx` |
| Contact | `/contact` | `src/content/contact.ts` | `src/pages/ContactPage.tsx` |
| Try Demo | `/demo` | `src/content/demo.ts` | `src/pages/DemoPage.tsx` |
| Privacy Policy | `/privacy` | `src/content/legal.ts` → `PRIVACY` | `src/pages/LegalPage.tsx` |
| Terms of Use | `/terms` | `src/content/legal.ts` → `TERMS` | `src/pages/LegalPage.tsx` |
| Nav bar + footer (every page) | | `src/content/site.ts` | `src/components/layout/` |
| "Page not found" | any other address | `src/content/site.ts` → `UI.notFound` | `src/pages/NotFoundPage.tsx` |
| Translations of any page | | `src/content/locales/<language>/` (see [§5](#5-translations)) | |

Inside each content file, the sections appear **in the same order as on the page**, and each
one has a short comment saying what it is. Search the file for a few words you can see on the
page (Ctrl+F / ⌘F) and you'll land on the right line.

Section links you can use anywhere: `/product#features`, `/product#drills`, `/product#safety`,
`/about#team`. The demo can open straight into a drill: `/demo?mode=quiz` or `/demo?mode=call`.

---

## 4. Editing text

Content files are TypeScript, but you only need to follow a few rules.

**Change the words between the quotes, and leave everything else alone.**

```ts
title: "Build the reflex before the real call.",
//      ↑ change this part                     ↑ keep the quote and the comma
```

- **Quotes.** Text sits inside `"double quotes"`. If your text needs a double quote inside it,
  write `\"` (for example `"Say \"stop\" any time"`). Apostrophes (`it's`) are fine as they are.
- **Commas.** Every item in a list or block ends with a comma. Removing one is the most common
  cause of a broken page.
- **Line breaks.** In the FAQ answers, a blank line between paragraphs is written `\n\n`. In big
  titles (e.g. `"MEET\nDRILL MODE"`), `\n` forces a new line.
- **Lists** are written in square brackets: `["first", "second", "third"]`. To add an item, copy
  an existing one (including its comma) and change it.
- **Comments** start with `//` or sit between `/*` and `*/`. They're notes for you and never show on the site.

### Examples

**Change the Home page tagline.** In `src/content/home.ts`, find `hero:` and edit `title` and `text`.

**Add an FAQ.** In `src/content/faq.ts`, find the category, copy one question block, and edit it:

```ts
{
  q: "Can I use Drill Mode at school?",
  a: "Yes! Teachers can run house drills with a class.\n\nGet in touch on our Contact page.",
},
```

To add a whole new category, copy a `{ title: …, color: …, items: [ … ] }` block.

**Change the nav bar.** In `src/content/site.ts`, edit `NAV_LINKS` (the links) and `NAV_CTA`
(the green button on the right). Order in the file = order on screen.

**Change the footer.** In `src/content/site.ts`: `FOOTER_COLUMNS` (link columns), `FOOTER_LEGAL`
(the small links at the bottom), `SITE.oneLiner` and `SITE.copyright`.

**Change a page's browser-tab title.** The titles are in `UI.pageTitles` at the bottom of
`src/content/site.ts` (the Home page uses `SITE.tagline`). The site name is added automatically.

---

## 5. Translations

Visitors pick a language with the globe button in the nav bar (inside the ☰ menu on phones), and
the site remembers it on that device. The languages are the app's four: English, 中文, Bahasa
Melayu and தமிழ்.

**English is the original.** Each translation lives in `src/content/locales/<code>/` (`zh` = 中文,
`ms` = Bahasa Melayu, `ta` = தமிழ்), with one file per page. Each file is laid out exactly like
the English one, but holds only the words:

```ts
// src/content/locales/ms/home.ts
export const HOME: Translation<typeof HOME_EN> = {
  hero: {
    title: "Bina refleks sebelum panggilan sebenar tiba.",
```

- **Anything a translation leaves out shows in English.** After adding or changing English text,
  every page still works; the new words just appear in English until someone translates them.
- **Lists are matched by position.** If you add, remove or reorder items in an English list (FAQ
  questions, feature points…), make the same change in each language's list. `npm run check`
  flags a translated list that is longer than the English one.
- **Only words go in translation files.** Colours, icons, links and other settings always come
  from the English file.
- **Highlighted phrases must match.** In the demo, each quiz clue's `text` must appear word for
  word in the translated message, and each call `flags` phrase in the translated line. The same
  goes for the `flags` lists in `UI.mocks` and `UI.visuals`. `npm run check` checks every language.
- **Quiz answers must match too:** each message's `correctAction` must be exactly one of its
  translated `actions`, and `QUIZ.cautiousAction` must match the "ask family" button word for word.
- **Words in `{curly brackets}`** (like `{query}` or `{xp}`) are filled in by the site. Keep them as they are.
- **The site's own small words** (button labels, screen-reader labels, the text inside the phone
  mock-ups) are in `UI` at the bottom of `src/content/site.ts`, and translated in each
  language's `site.ts`.
- **Kept in English on purpose:**
  - the brand name and the DRILL MODE wordmark
  - the Product intro's terminal lines
  - placeholder team members and partner names
  - the Privacy Policy and Terms. Visitors in other languages see a note saying those pages are
    English-only until reviewed translations exist.
- **Draft status:** every translation file starts with a `// DRAFT TRANSLATION` line. Delete it
  once a native speaker has reviewed the file. `npm run placeholders` lists the files still marked.
- **Fonts:** the pixel fonts have no Chinese or Tamil letters, so those languages borrow Noto Sans
  SC and Noto Sans Tamil (see `src/styles/typography.css`). They're downloaded only when someone
  picks that language.

**To translate a new content object** (for example a new page's `CAREERS`): export it from each
language's `index.ts` under the same name, and add it to `SOURCES` in
`src/content/locales/index.ts`. Components read content with `const careers = useContent(CAREERS)`,
so it follows the visitor's language.

---

## 6. Links

Anywhere a content file has `to:`, `href:` or `link:`, you can use:

| You write | It goes to |
|---|---|
| `"/product"` | a page on this site |
| `"/product#drills"` | a section of a page (the section's `id`) |
| `"https://example.com"` | another website (opens in a new tab) |
| `"mailto:hello@example.com"` | opens an email to that address |
| `"tel:1799"` | phones that number (on mobiles) |

Social links with an empty `href: ""` are hidden. `"#"` keeps them visible but goes nowhere
(that's what the placeholders use).

---

## 7. Images and other media

**Put image files in `public/`**, then point to them with a path that **starts with `/`** and
**leaves out `public`**:

```
file:  public/media/team/alex.jpg
path:  "/media/team/alex.jpg"
```

File names are case-sensitive once the site is published (`Alex.JPG` ≠ `alex.jpg`), so stick to
lowercase names without spaces.

| What | Where the file goes | Where to point to it |
|---|---|---|
| Team photo (square, ~600×600 JPG/WebP) | `public/media/team/` | `photo:` on the member in `src/content/about.ts` |
| Partner logo (SVG or transparent PNG, ~320×96) | `public/brands/` | `logo:` on the brand in `src/content/home.ts` |
| Product screenshot for a feature card | `public/media/product/` | `image:` on the feature in `src/content/product.ts` |
| Product screenshot for a drill tab (phone-shaped, ~680×1200) | `public/media/product/` | `image:` on the tab in `src/content/product.ts` |
| Social preview (what WhatsApp/LinkedIn show, 1200×630) | `public/` | `og:image` in `index.html` |
| Favicon (browser-tab icon) | `public/pixi-icon.png` | replace the file, or edit `rel="icon"` in `index.html` |

Without a photo, a team member's frame shows their pixel avatar. Without a screenshot, each
feature card and drill tab shows a built-in pixel illustration (so you never *need* images).

**Video.** There's no video slot yet. The simplest way to add one: put an `.mp4` in
`public/media/`, then in the section's component add
`<video src="/media/your-file.mp4" autoPlay muted loop playsInline className="w-full" />`.
For long videos, upload to YouTube and paste its embed `<iframe>` instead.

**Pixel art from the app.** The furniture lives in `public/furniture/` (the same 44 SVGs as the
app). To export any other asset (a recoloured Pixi, a character, an icon at a big size), use the
asset exporter in `../Drill-Mode-Assets` (`npm install`, then `npm run dev`, then pick it and
press `EXPORT TO SVG`), and save the file into `public/`.

---

## 8. Icons

All icons are pixel-art components, so they stay crisp at any size and can be any colour.

**Use or change an icon in a content file** by its name, for example `icon: "phone"`. The names
you can use:

```
arrow  attachment  badge  bell  browser  bulb  chat  chat-bubble  check  chevron  coin
download  envelope  eye  family  flag  flame  gear  github  globe  house  instagram  link
linkedin  lock  medal  menu  person  phone  play  real-email  sell  shield  skull  speaker
star  store  telegram  trash  tree  trophy  warning  x
```

Most icons sit next to a `color:` (or `accent:`) value you can change too. To preview them
all, open the **Icons** tab in the asset exporter (`../Drill-Mode-Assets`).

**Add a new icon:**

1. Copy an existing icon in `src/components/icons/` (e.g. `IconGlobe.tsx`) to a new file such as
   `IconTikTok.tsx`, and rename the function inside it to `IconTikTok`.
2. Redraw it: each `<rect x y width height />` is one block of pixels on a small grid (the
   `viewBox`, usually 12×12). Use `fill={color}` for the main colour and `"#0a0e1a"` for cut-outs.
3. Export it from `src/components/icons/index.ts`.
4. Give it a name in `src/components/icons/registry.tsx` (the `ICONS` list), e.g. `tiktok: IconTikTok,`.
5. (Optional) Copy the file into `../Drill-Mode-Assets/src/vendor/icons/` and add it to
   `SIMPLE_ICONS` in `../Drill-Mode-Assets/src/assets/icons.tsx` so it can be exported as SVG too.

The 8 icons drawn for the website (arrow, chevron, github, globe, instagram, linkedin, menu, play)
have already been added to the asset exporter this way.

---

## 9. The team page

Everything is in `src/content/about.ts`, in the `TEAM` list at the bottom. Each person is one
`{ … }` block, top floor first. Rooms alternate the photo side automatically.

**Add someone:** copy a whole member block (from `{` to its closing `},`), paste it where you
want them in the house, and edit it. **Remove someone:** delete their block.

```ts
{
  name: "Alex Tan",
  role: "Co-founder · Engineering",
  bio: "One or two sentences.",
  photo: "/media/team/alex.jpg",                      // optional
  avatar: { skinTone: "golden", hairStyle: "long", hairColor: "midnight", outfit: "teal-dress", accessories: ["round-glasses"] },
  room: { wall: "lagoon", pattern: "circuit", floor: "neon", light: "mint", glow: true },
  furniture: [
    { art: "18-desktop-setup", x: 2 },
    { art: "08-city-window", x: 38, wall: true },
    { art: "13-leafy-plant", x: 78, size: 18 },
  ],
  socials: [
    { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/…" },
    { icon: "github", label: "GitHub", href: "https://github.com/…" },
  ],
},
```

- **avatar**: the same options as the app's character creator. All the choices are listed in the
  comment above `TEAM`. To try combinations visually, use **Avatar → Custom Character** in the
  asset exporter, then copy the choices across.
- **room**: the same options as the app's room editor (wall colour, wallpaper pattern, floor,
  light colour, neon glow), also listed in the comment.
- **furniture**: `art` is a file name from `public/furniture/` without `.svg` (open that folder
  to browse them, or the asset exporter's **Furniture** tab). Furniture stands on the open side
  of the room next to the character. `x` goes from 0 (left) to about 76 (right), `size` is the
  width (default 24), and `wall: true` hangs it on the wall.
- The house's roof sign, intro text and doormat are in `ABOUT.house`. The story and the three
  fact tiles above the house are in `ABOUT.story`.

> Ask each person before publishing their name, photo and links.

---

## 10. Trusted brands carousel

In `src/content/home.ts` → `brands`:

- `display: "marquee"` scrolls the logos continuously (it pauses on hover). `display: "grid"`
  shows them all at once, standing still.
- `speedSeconds`: how long one loop takes (bigger = slower).
- `items`: one line per brand. With a `logo` path the image is shown (greyed out until
  hovered). Without one, the `name` is shown as a pixel badge with the chosen `icon` and `color`.
  Add `href` to make a logo clickable.
- `note`: the small line under the carousel (currently says the logos are placeholders). Set it
  to `""` to hide it.

The current eight are placeholders. **Only list organisations that have agreed to it**: the
organisations named in the app's pitch materials are outreach targets, not partners.

---

## 11. The Try Demo drills

Both drills run entirely in the visitor's browser. Nothing is sent anywhere. All their text is
in `src/content/demo.ts`.

### Spot the scam (`QUIZ`)

Each message in `QUIZ.scenarios` was copied from the app's individual drill
(`huawei-2026/src/app/data/familyScenarios.ts`), and you can copy more from there. Fields:

- `type`: `"sms"`, `"email"` or `"notification"`. `isScam`: `true` or `false`.
- `actions`: the four buttons. `correctAction` must match one of them **exactly**.
- `clues`: the highlighted phrases. Each clue's `text` must appear **word for word** in the message,
  sender or subject, or it won't be highlighted (`npm run check` warns you).
- Scoring is the same as the app: correct answer 100 XP, "ASK FAMILY FIRST" 50 XP, anything else 25 XP.

### Take a scam call (`CALL`)

The call is a list of `steps`. Each step is one thing the caller says plus the replies the
visitor can choose. A reply's `next` is either the `id` of another step, or an ending:
`"caught_flag"` (the visitor refused or checked: a win) or `"complied"` (they fell for it).
Hanging up and "stop the drill" are always available.

- `flags` on a step highlight phrases in the caller's line. `phrase` must appear word for word in
  `line`, and `flagId` must be one of the entries in `CALL.flags` (which hold the explanations).
- `outcomes`: the result card for each ending. `reveal`: the "this was a drill" script.
- `pixiChat`: what Pixi posts after each ending, the follow-up question, and Pixi's answer to
  each quick reply.
- `voiceDefaultOn: true` makes the browser read the caller's lines aloud by default (visitors
  can always toggle it with the speaker icon).

Run `npm run check` after editing the script: it catches a `next` that points nowhere, a missing
flag, or a phrase that isn't in its line.

---

## 12. Colours, fonts, logo and effects

- **Colours and the light theme**:
  - **Two themes.** The site has a dark theme (the default) and a light theme. Visitors switch
    with the sun/moon switch in the nav bar, and their choice is remembered on that device.
  - **Where the colours live.** Every colour for both themes is in `src/styles/tokens.css`. That
    file is shared with the app, so change both together.
  - **Light palettes.** The light theme has three palettes: **Mist** (the default), **Paper** and
    **Dusk**.
    - To switch, change `data-palette="mist"` on the `<html>` tag in `index.html` to `"paper"` or
      `"dusk"`.
    - To preview one without changing anything, add `?palette=paper` (or `dusk`) to any address.
      That page then shows that palette in light mode until the browser tab is closed.
  - **In components, use the tokens, not hex codes:** `var(--teal)` for text and lines,
    `var(--teal-fill)` for solid buttons and bars, `var(--card)` and `var(--background)` for
    surfaces. In the light theme the text shades are darker so they stay readable, while the solid
    fills keep the original neon.
  - **Content files** still use plain hex colours (`color: "#00ff88"`). Components pass them
    through `ink()`, `fill()` or `tint()` from `src/lib/color.ts`, which picks the right shade for
    the theme.
  - **Always dark.** The intros, the phone mock-ups and the team house stay dark in both themes,
    on purpose (they're marked `data-theme="dark"`). Character art and Pixi keep their colours.
  - **The check.** `npm run check` includes a theme check (also `npm run check:theme` on its own).
    It flags any palette hex code written into a component, and confirms each light palette keeps
    text readable.
- **Fonts**: loaded from Google Fonts in `index.html`. *Press Start 2P* (headings, class `font-pixel`),
  *VT323* (taglines, `font-vt`), *Share Tech Mono* (everything else). Sizes are in `src/styles/typography.css`.
  - Press Start 2P always shows in capitals (its lowercase is hard to read), so "Drill Mode" in a
    heading appears as DRILL MODE, like the logo. Keep writing headings in normal sentence case
    in the content files; the capitals are added by the stylesheet.
- **Logo** (nav bar and footer): `SITE.logo` in `src/content/site.ts`:
  - `mascot: "head"` or `"body"` shows Pixi's head or the whole of Pixi beside the wordmark.
  - `mascotColor` sets Pixi's colour.
  - `wordmark` is the text.
  - `glitchEvery` is the milliseconds between glitches; `0` turns the glitch off.
- **CRT scanlines** over the whole site: `SITE.effects.scanlines` (`true`/`false`).
- **Intro animations**: the words are in `HOME.intro` and `PRODUCT.intro`. The timings are in
  `src/components/intro/HomeIntro.tsx` and `ProductIntro.tsx` (each has a timeline comment at the
  top), and the motion itself is in the "CINEMATIC INTRO" block of `src/styles/site.css`.
  - To remove an intro, delete its line (`<HomeIntro … />` / `<ProductIntro … />`) from the page
    file. The nav bar is then always visible.
  - Visitors whose device asks for reduced motion skip straight to the end of every intro, and
    the other animations are switched off.
  - An intro plays by itself only the first time its page is opened after the site loads. Coming
    back to the page later (from the nav, say) opens it already finished, scrolled down to the
    first section. Scrolling all the way back up to it plays it again.

---

## 13. The contact form

The site has no server, so the form works one of two ways (explained at the top of `src/content/contact.ts`):

1. **Default** (`formEndpoint: ""`): pressing Send opens the visitor's own email app with the
   message filled in, addressed to `SITE.contactEmail` (`src/content/site.ts`). **Set that email first.**
2. **Form service**: sign up for a free form service such as [Formspree](https://formspree.io) or
   [Web3Forms](https://web3forms.com), create a form, and paste the endpoint URL it gives you into
   `formEndpoint`. Messages then arrive in your inbox, and visitors never leave the page.

The dropdown choices are `CONTACT.topics`.

---

## 14. Adding, removing or reordering sections and pages

**Sections**: each page file in `src/pages/` lists its sections top to bottom, one line each
(e.g. `<StatsSection />`). Move a line to move the section; delete it to remove the section.

**A new page**:

1. Copy a simple page, e.g. `src/pages/FaqPage.tsx` → `src/pages/PressPage.tsx`, and rename the
   function inside to `PressPage`.
2. Create a content file for its words, e.g. `src/content/press.ts` (copy the shape of `faq.ts`).
3. In `src/App.tsx`, import it and add a line: `<Route path="press" element={<PressPage />} />`.
4. Link to it from `NAV_LINKS` or `FOOTER_COLUMNS` in `src/content/site.ts` with `to: "/press"`.

Reusable building blocks for new pages: `PageHeader` (page title area), `SectionHeader`
(eyebrow + heading + intro), `CtaBand` (closing call to action), `PixelLink` / `PixelButton`
(app-style buttons), `SpeechBubble`, `Reveal` (fade-in on scroll), `RoomScene` (a pixel room),
the phone mock-ups in `src/components/mocks/PhoneMocks.tsx`, and every avatar in `src/components/avatars/`.

---

## 15. Where the components came from

| In this site | Copied from |
|---|---|
| `src/components/avatars/` (Pixi = `PixelMascot`, characters, family NPCs) | `Drill-Mode-Assets/src/vendor/avatars/` (the app's components plus the exporter's small additions, like Pixi's `separated` head) |
| `src/components/icons/` | `Drill-Mode-Assets/src/vendor/icons/` (= `huawei-2026/src/app/components/icons/`) plus 8 new icons |
| `src/components/brand/MascotHead.tsx` (Pixi's head) | `Drill-Mode-Assets/src/assets/MascotHead.tsx` |
| `src/components/ui/PixelButton.tsx`, `PixelPanel.tsx`, `XPBar.tsx` | `huawei-2026/src/app/components/ui/` |
| `src/components/room/RoomBackdrop.tsx`, `roomStyle.ts`, `src/styles/room-style.css` | `huawei-2026` room components and styles |
| `src/components/layout/Stars.tsx`, the scanlines, the glitch timing | `huawei-2026` (layout components and the title screen) |
| `public/furniture/` | `huawei-2026/public/furniture/` |
| Demo quiz messages and call persona | `huawei-2026/src/app/data/familyScenarios.ts`, `huawei-2026/server/vapi.js` |

They're copies, not links, so changes to the app don't flow through automatically. If the app's
art changes, copy the updated file over the one here.

---

## 16. Checking your changes

1. With `npm run dev` running, look at the page you changed, on a desktop-sized window and on a
   phone-sized one (in Chrome: right-click → Inspect → the phone/tablet icon).
2. If you changed text, switch the language (globe button) and check the page in at least one
   other language too. Untranslated new text shows in English, which is expected.
3. Run `npm run check`. It typechecks the content files (a mistyped icon name, a missing comma),
   renders every page in every language, confirms every image path exists in `public/`, checks
   the demo scripts and highlighted phrases in every language, and checks that the translation
   files line up with the English. Fix anything marked ✗.

---

## 17. Publishing the site

The site builds to plain files (`dist/`), so it can go on almost any host. The app is already
on Vercel, so that's the easiest option:

1. Put this folder in a GitHub repository (on its own, or as a folder in an existing repo).
2. On [vercel.com](https://vercel.com): **Add New → Project**, import the repository.
3. If the site is a folder inside the repo, set **Root Directory** to `drill-mode-site`.
   Vercel detects Vite; the build command (`npm run build`) and output folder (`dist`) are already
   set in `vercel.json`.
4. Deploy. From then on, every push to the main branch republishes the site automatically.
5. Add a custom domain under **Project → Settings → Domains**.

`vercel.json` also sends every address to `index.html`, so links like `/about` work when opened
directly. On **Netlify**, do the same with a file `public/_redirects` containing
`/*  /index.html  200`.

---

## 18. Before launch checklist

- [ ] `npm run placeholders` shows nothing important left: real team names, roles, bios and links;
      the real contact email (`SITE.contactEmail`); real social links (`SOCIALS`).
- [ ] Every team member has agreed to their name, photo and links being public.
- [ ] Trusted-brand logos are real partners who agreed to be shown, or the section is removed
      (delete `<BrandsSection />` from `src/pages/HomePage.tsx`).
- [ ] The stats on the Home page (`HOME.stats`) are checked against the latest Singapore Police Force brief.
- [ ] The Privacy Policy and Terms (`src/content/legal.ts`) have been reviewed, and the draft notices removed.
- [ ] A native speaker has reviewed each translation (中文, Bahasa Melayu, தமிழ்) and removed its
      `// DRAFT TRANSLATION` line. `npm run placeholders` lists the files still marked.
- [ ] Decide whether to link the full app: set `SITE.appUrl` only once the public build is ready
      (the competition build had phone verification switched off for the demo).
- [ ] The contact form works (send yourself a test message).
- [ ] A 1200×630 social preview image is set in `index.html`.
- [ ] `npm run check` passes.

---

## 19. Moving to a CMS later

The content files were written so that a CMS can take over cleanly. Each file in `src/content/`
is effectively one CMS "model" (Home page, Product page, Team member, FAQ, …), and each field
in it becomes a CMS field.

- **TinaCMS** is the closest fit: it's Git-based, so content stays in the repo (as JSON/Markdown)
  and teammates edit it through a visual editor on the site. Moving over means turning each
  `src/content/*.ts` file into a JSON file and defining the matching Tina schema.
- **Sanity** or **Storyblok** (headless CMSs) suit a growing team: content moves to their cloud and
  the site fetches it. The components barely change; only where the data comes from does.
- **Builder.io** or **Plasmic** add drag-and-drop page building on top of these React components.
- **Storybook** fits alongside any of these as a catalogue of the components (Pixi, rooms,
  buttons, phone mock-ups) for designers and developers.

---

## 20. Troubleshooting

| Problem | Fix |
|---|---|
| The page is blank or shows an error after an edit | Look at the terminal running `npm run dev` and the browser console (F12). Usually a missing comma or quote near the line you just changed. `npm run check` points to the file and line. |
| An image doesn't show | The file must be inside `public/`, the path must start with `/` and leave out `public`, and capitals must match exactly. `npm run check` lists missing images. |
| A quiz clue isn't highlighted | Its `text` must appear word for word in the message. |
| `Port 5190 is already in use` | Another `npm run dev` is still running. Close it, or change the port in `vite.config.ts`. |
| `npm` / `node` not found | Install Node.js 22+ from nodejs.org and reopen the terminal. |
| A change doesn't appear on the live site | Did you push it to GitHub? Vercel only publishes what's pushed. Check the latest deployment on vercel.com for errors. |
