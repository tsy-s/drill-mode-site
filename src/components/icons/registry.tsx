import type { ComponentType } from "react";
import {
  IconArrow, IconAttachment, IconBadge, IconBell, IconBrowserWindow, IconBulb, IconChat, IconChatBubble,
  IconCheck, IconChevron, IconCoin, IconDownload, IconEnvelope, IconEyeInspect, IconFamily, IconFlame,
  IconGear, IconGitHub, IconGlobe, IconHouse, IconInstagram, IconLink, IconLinkedIn, IconLock, IconMedal,
  IconMenu, IconPerson, IconPhone, IconPlay, IconRealEmail, IconReportFlag, IconSell, IconShield, IconSkull,
  IconSpeaker, IconStar, IconStore, IconTelegram, IconTrashBin, IconTree, IconTrophy, IconWarning, IconX,
} from "./index";

/**
 * Icon names you can use in src/content/*.ts files (for example `icon: "phone"`).
 * To change an icon, change the name in the content file. To add a new icon, draw it in
 * this folder, export it from ./index.ts, then add a name for it here.
 */
export const ICONS = {
  arrow: IconArrow,
  attachment: IconAttachment,
  badge: IconBadge,
  bell: IconBell,
  browser: IconBrowserWindow,
  bulb: IconBulb,
  chat: IconChat,
  "chat-bubble": IconChatBubble,
  check: IconCheck,
  chevron: IconChevron,
  coin: IconCoin,
  download: IconDownload,
  envelope: IconEnvelope,
  eye: IconEyeInspect,
  family: IconFamily,
  flame: IconFlame,
  gear: IconGear,
  github: IconGitHub,
  globe: IconGlobe,
  house: IconHouse,
  instagram: IconInstagram,
  link: IconLink,
  linkedin: IconLinkedIn,
  lock: IconLock,
  medal: IconMedal,
  menu: IconMenu,
  person: IconPerson,
  phone: IconPhone,
  play: IconPlay,
  "real-email": IconRealEmail,
  flag: IconReportFlag,
  sell: IconSell,
  shield: IconShield,
  skull: IconSkull,
  speaker: IconSpeaker,
  star: IconStar,
  store: IconStore,
  telegram: IconTelegram,
  trash: IconTrashBin,
  tree: IconTree,
  trophy: IconTrophy,
  warning: IconWarning,
  x: IconX,
} satisfies Record<string, ComponentType<{ size?: number; color?: string }>>;

export type IconName = keyof typeof ICONS;

/** Renders an icon by its name from ICONS above. */
export function Icon({ name, size = 20, color }: { name: IconName; size?: number; color?: string }) {
  const Component = ICONS[name] as ComponentType<{ size?: number; color?: string }>;
  return <Component size={size} {...(color ? { color } : {})} />;
}
