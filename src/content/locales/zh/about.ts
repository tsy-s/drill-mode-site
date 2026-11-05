// DRAFT TRANSLATION (中文 (Simplified Chinese)): needs a native speaker's review before launch.
// Same layout as src/content/about.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { ABOUT as ABOUT_EN } from "../../about";

export const ABOUT: Translation<typeof ABOUT_EN> = {
  header: {
    eyebrow: "关于我们",
    title: "我们是 Drill Mode。",
    text: "我们是一支小团队，致力于打造家人真正愿意玩的防诈演练。我们起初只是一个比赛项目，如今正努力让每个家庭都能用上演练。",
  },
  story: {
    eyebrow: "我们的故事",
    title: "知道不等于做得到。",
    paragraphs: [
      "我们每个人都有一段经历：父母差点把钱付给假“官员”，朋友把钱转给了“新号码”。他们都知道有诈骗这回事，但在那一刻却帮不上忙，因为骗子得手靠的是压力，而不是你懂得不够多。",
      "于是我们为 Huawei Tech4City 2026 打造了 Drill Mode：一场针对诈骗的消防演习。家人和逼真但虚构的骗子过招，直到停一停、查一查成为本能，然后再一起聊聊。",
      "如今我们正把它带出比赛，与新加坡各地的社区伙伴推进试点计划。",
    ],
    facts: [
      {
        label: "曾收到诈骗信息或电话",
      },
      {
        label: "表示自己或身边的人差点上当",
      },
      {
        label: "在拿不准时真的会求助",
      },
    ],
  },
  house: {
    eyebrow: "团队",
    title: "欢迎来到我们的家。",
    text: "就像应用里一样，团队里每个人都有自己的房间。来打个招呼吧。",
    roofTitle: "DRILL MODE 之家",
    doormat: "创立于 2026",
  },
  cta: {
    title: "想和我们合作吗？",
    text: "我们正在寻找试点伙伴、导师和支持这个项目的朋友。",
    button: {
      label: "联系我们",
    },
  },
};
