// DRAFT TRANSLATION (中文 (Simplified Chinese)): needs a native speaker's review before launch.
// Same layout as src/content/home.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { HOME as HOME_EN } from "../../home";

export const HOME: Translation<typeof HOME_EN> = {
  intro: {
    subtitle: "防骗斗士",
    taglines: ["守护你的心。", "打败骗子。"],
    button: "[ 按下开始 ]",
    scrollHint: "向下滚动开始",
    skip: "跳过 ▶▶",
  },
  hero: {
    eyebrow: "全家人的防诈演练",
    title: "在真正的诈骗电话打来之前，练好本能反应。",
    text: "骗子得手，靠的是让人在压力下失去判断，而不是你懂得不够多。Drill Mode 在你同意后，发送安全的模拟诈骗（电话、短信和电邮），让家人学会在关键时刻停一停、查一查、挂断电话。",
    primary: {
      label: "试玩演示",
    },
    secondary: {
      label: "了解玩法",
    },
    pixiSays: "这就像消防演习，只不过是防诈骗的。想练练吗？",
  },
  brands: {
    eyebrow: "合作伙伴",
    title: "良师益友，同行相伴",
    note: "这些是占位标志。只有同意展示的机构才会列在这里。",
  },
  howItWorks: {
    eyebrow: "玩法说明",
    title: "三个步骤，零真实风险。",
    steps: [
      {
        title: "同意参与",
        text: "验证你自己的手机或邮箱。没有你记录在案的同意，我们绝不会发送任何东西。",
      },
      {
        title: "接受演练",
        text: "选择诈骗电话、短信或电邮。一个逼真但虚构的骗子会对你使出浑身解数。",
      },
      {
        title: "一起复盘",
        text: "每次演练结束都会揭晓真相。接着 Pixi 会在家庭聊天里开启话题。",
      },
    ],
  },
  productCard: {
    eyebrow: "产品",
    title: "一个应用，各类诈骗，全家参与。",
    text: "用四种语言应对 AI 诈骗电话、玩识破骗局小测验、和家人一起做家庭演练，还能随着防诈能力提升，一步步打造你的像素小屋。",
    highlights: [
      {
        label: "诈骗电话、短信和电邮演练",
      },
      {
        label: "人人都有房间的虚拟小屋",
      },
      {
        label: "Pixi，你的 AI 防诈教练",
      },
      {
        label: "XP、金币和周日发薪日",
      },
    ],
    cta: {
      label: "了解产品",
    },
  },
  stats: {
    eyebrow: "为什么重要",
    title: "大多数诈骗受害者从未被黑客入侵。",
    items: [
      {
        label: "是新加坡 2025 年因诈骗损失的金额",
      },
      {
        label: "的受害者是自己把钱转出去的",
      },
      {
        label: "的受害者未满 65 岁。这不只是乐龄人士的问题",
      },
    ],
    source: "资料来源：新加坡警察部队《2025 年诈骗与网络犯罪年度简报》。",
  },
  finalCta: {
    title: "准备好练习了吗？",
    text: "就在浏览器里试玩两分钟的演练。无需注册，也不会向你的手机发送任何东西。",
    button: {
      label: "[ 试玩演练 ]",
    },
  },
};
