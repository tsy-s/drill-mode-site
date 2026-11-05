// DRAFT TRANSLATION (中文 (Simplified Chinese)): needs a native speaker's review before launch.
// Same layout as src/content/contact.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { CONTACT as CONTACT_EN } from "../../contact";

export const CONTACT: Translation<typeof CONTACT_EN> = {
  header: {
    eyebrow: "联系我们",
    title: "聊一聊吧。",
    text: "想把 Drill Mode 带到你的社区、为我们撰写报道，或只是想打个招呼？给我们留言，我们会在几个工作日内回复你。",
  },
  form: {
    name: "你的名字",
    email: "你的电邮",
    organisation: "机构（可选）",
    topic: "关于什么？",
    message: "信息",
    send: "[ 发送信息 ]",
    sending: "发送中...",
    success: "信息已发送！我们会尽快联系你。",
    error: "出了点问题。请直接发电邮给我们。",
    mailtoNote: "按下发送后，会打开你的电邮应用，信息已经准备好。",
  },
  topics: ["一般问题", "合作或试点", "学校与社区团体", "媒体与新闻", "应用意见反馈"],
  socialsTitle: "关注我们",
  helplineTitle: "正遇到真实的诈骗？",
  cards: [
    {
      title: "电邮",
    },
    {
      title: "试试我们的 Telegram 机器人",
      text: "在聊天中练习识破骗局：@drillmodebot",
    },
  ],
};
