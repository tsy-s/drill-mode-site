// DRAFT TRANSLATION (中文 (Simplified Chinese)): needs a native speaker's review before launch.
// Same layout as src/content/site.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { SITE as SITE_EN, NAV_LINKS as NAV_LINKS_EN, NAV_CTA as NAV_CTA_EN, FOOTER_COLUMNS as FOOTER_COLUMNS_EN, FOOTER_LEGAL as FOOTER_LEGAL_EN, SOCIALS as SOCIALS_EN, UI as UI_EN } from "../../site";

export const SITE: Translation<typeof SITE_EN> = {
  tagline: "在真正的诈骗电话打来之前，练好本能反应。",
  description: "Drill Mode 在征得同意后进行安全的防诈演练（电话、短信和电邮），让家人在真正的诈骗电话打来之前练好本能反应。",
  oneLiner: "安全、征得同意的防诈演练，训练全家在关键时刻保持冷静。",
  copyright: "© 2026 Drill Mode。版权所有。",
  helpline: {
    label: "反诈骗热线",
  },
};

export const NAV_LINKS: Translation<typeof NAV_LINKS_EN> = [
  {
    label: "首页",
  },
  {
    label: "产品",
  },
  {
    label: "关于我们",
  },
  {
    label: "常见问题",
  },
  {
    label: "联系我们",
  },
];

export const NAV_CTA: Translation<typeof NAV_CTA_EN> = {
  label: "试玩演示",
};

export const FOOTER_COLUMNS: Translation<typeof FOOTER_COLUMNS_EN> = [
  {
    heading: "产品",
    links: [
      {
        label: "功能",
      },
      {
        label: "演练",
      },
      {
        label: "安全",
      },
      {
        label: "试玩演示",
      },
    ],
  },
  {
    heading: "公司",
    links: [{
        label: "关于我们",
      }, {
        label: "团队",
      }, {
        label: "联系我们",
      }],
  },
  {
    heading: "支援",
    links: [
      {
        label: "常见问题",
      },
      {
        label: "Telegram 机器人",
      },
      {
        label: "反诈骗热线：1799",
      },
    ],
  },
];

export const FOOTER_LEGAL: Translation<typeof FOOTER_LEGAL_EN> = [{
    label: "隐私政策",
  }, {
    label: "使用条款",
  }];

export const SOCIALS: Translation<typeof SOCIALS_EN> = [{
    label: "Telegram 机器人",
  }];

export const UI: Translation<typeof UI_EN> = {
  skipToContent: "跳到主要内容",
  logoLabel: "{name} 首页",
  nav: {
    main: "主导航",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    language: "语言",
    lightTheme: "浅色主题",
  },
  footer: {
    legal: "法律",
  },
  intro: {
    home: "Drill Mode 开场动画",
    product: "产品开场动画",
  },
  pageTitles: {
    about: "关于我们",
    product: "产品",
    faq: "常见问题",
    contact: "联系我们",
    demo: "试玩演示",
    notFound: "找不到页面",
  },
  legal: {
    eyebrow: "法律",
    updated: "最后更新：{date}",
    englishOnly: "此页面目前只有英文版本。",
  },
  notFound: {
    headline: "发现可疑链接。",
    text: "这个页面不存在。懂得查证，直觉不错！我们带你去安全的地方。",
    button: "[ 返回首页 ]",
  },
  faq: {
    search: "搜索常见问题",
    placeholder: "搜索问题……",
    categories: "常见问题分类",
    noMatch: "没有与“{query}”相符的问题。试试别的词，或",
    askUs: "直接问我们",
  },
  contact: {
    callHelpline: "拨打{label}：{number}",
    mailSubject: "[{topic}] 来自 {name} 的信息",
  },
  demo: {
    playing: "▶ 进行中",
  },
  drillTabs: {
    label: "演练",
    redFlags: "可练习识别的危险信号",
    tryDemo: "在演示中试试 →",
  },
  quiz: {
    progress: "第 {n} / {total} 条信息",
    whatWouldYouDo: "你会怎么做？",
    inbox: "收件箱",
    messages: "短信",
    notifications: "通知",
    textMessage: "短信",
    appNotification: "应用通知",
    redFlags: "危险信号",
    genuineSigns: "真实信息的迹象",
    tapToLearn: "点按了解",
    seeResults: "查看结果 →",
    complete: "演练完成",
    xpEarned: "获得 +{xp} XP",
    scam: "诈骗",
    genuine: "真实",
    playAgain: "再玩一次",
    takeCall: "接听诈骗电话 →",
  },
  call: {
    phoneTitle: "诈骗电话",
    ended: "通话结束",
    speaking: "来电者说话中",
    listening: "聆听中...",
    muteVoice: "静音来电者声音",
    readAloud: "朗读来电者的话",
    voiceOn: "声音开启",
    voiceOff: "声音关闭",
    drillActive: "诈骗演练进行中",
    reveal: "演练揭晓",
    practiseAnyway: "还是练一下 →",
    tryAgain: "再试一次",
    spotScam: "识破骗局 →",
  },
  chat: {
    pixi: "PIXI",
    typing: "Pixi 正在输入",
  },
  mocks: {
    call: {
      title: "诈骗电话",
      speaking: "来电者说话中",
      caller: "陈官员",
      active: "诈骗演练进行中",
      lines: [
        {
          text: "我是公共信托办公室的陈官员。",
          flags: ["公共信托办公室"],
        },
        {
          text: "马上把你的存款转到安全账户。",
          flags: ["安全账户", "马上"],
        },
      ],
      reply: "银行不会这样做。我要挂断了。",
      hangUp: "[ 挂断 ]",
    },
    sms: {
      title: "短信",
      sender: "ParcelGo Alert",
      meta: "短信 · 今天 11:47",
      text: "派送失败。请在今天支付 $1.99 重新派送费，否则包裹将被退回：parcelgo-redeliver.example",
      flags: ["$1.99 重新派送费", "今天"],
      found: "发现 3 个危险信号",
      report: "举报诈骗",
      pay: "支付费用",
    },
    email: {
      title: "收件箱",
      sender: "校园奖励办公室",
      subject: "恭喜你赢得 $300 奖励！",
      text: "请在30分钟内领取，否则奖励将被转给他人。验证你的账户以继续。",
      flags: ["30分钟内", "将被转给他人", "验证你的账户"],
      claim: "领取奖励",
    },
    quiz: {
      title: "个人演练",
      progress: "第 3 / 5 条信息",
      from: "发件人：+65 8000 0347",
      text: "嗨，是我，这是我的新号码。我需要 $950，很急。请不要打电话。",
      flags: ["这是我的新号码", "我需要 $950", "请不要打电话"],
      actions: ["举报为诈骗", "转账", "保存号码", "先问家人"],
      result: "识破得好！+100 XP",
    },
    house: {
      title: "全家演练",
      round: "竞赛 · 第 4 / 5 回合",
      players: ["奶奶", "妈妈", "你", "孩子"],
      pixi: "奶奶连胜中！妈妈，你追得上吗？👀",
    },
  },
  visuals: {
    call: {
      text: "“我是陈官员。你的账户牵涉到一宗洗钱案。”",
      flags: ["洗钱案"],
    },
    quiz: {
      text: "你的包裹被扣留了。今天支付 $1.99：parcel-go.example",
      scam: "诈骗",
      safe: "安全",
    },
    chat: {
      pixi1: "爸爸一接到假银行电话就挂断了 👏",
      pixi2: "妈妈，你接过这样的电话吗？",
      reply: "有！上个月 😅",
    },
    rewards: {
      payday: "周日发薪日",
      level: "等级 4 · 防诈卫士",
    },
    safety: "安全",
  },
};
