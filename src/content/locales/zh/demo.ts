// DRAFT TRANSLATION (中文 (Simplified Chinese)): needs a native speaker's review before launch.
// Same layout as src/content/demo.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { DEMO as DEMO_EN, QUIZ as QUIZ_EN, CALL as CALL_EN } from "../../demo";

export const DEMO: Translation<typeof DEMO_EN> = {
  header: {
    eyebrow: "试玩演示",
    title: "试玩一次演练。",
    text: "两个直接取自应用的快速演练。无需注册，也不会向你的手机发送任何东西：一切都在这个页面上进行。",
  },
  modes: [
    {
      title: "识破骗局",
      text: "五条信息，有些是诈骗，有些是真的。你会怎么做？",
      time: "≈ 2 分钟",
    },
    {
      title: "接听诈骗电话",
      text: "一名“官员”说你的银行账户正被调查。你能保持冷静吗？",
      time: "≈ 2 分钟",
    },
  ],
  finish: {
    title: "想体验完整版吗？",
    text: "在应用里，来电是打到你自己手机上的实时 AI 语音，短信会发到你真实的收件箱，全家人还能一起玩。",
    buttons: [{
        label: "了解产品",
      }, {
        label: "带到你的社区",
      }],
  },
};

export const QUIZ: Translation<typeof QUIZ_EN> = {
  intro: "阅读每条信息，然后选择你会怎么做。之后点按标出的线索，看看原因。",
  cautiousAction: "先问家人",
  results: {
    correctScam: "识破得好！",
    correctSafe: "完全正确！",
    cautious: "直觉不错",
    wrongScam: "上当了",
    wrongSafe: "虚惊一场",
    cautiousNote: "先和信任的人确认，永远不是坏主意。",
  },
  pixiSummary: {
    high: "哇，你真有天分。家人有你守护真幸运！",
    mid: "很不错！其中有几条挺狡猾的。",
    low: "这些确实不容易，所以我们才要练习。再来一次？",
  },
  scenarios: [
    {
      senderNote: "发送者名称是伪造的。正规银行绝不会通过短信链接锁定账户。",
      message: "由于存在可疑活动，您的银行账户已被锁定。请在15分钟内验证您的身份，以免账户被冻结：http://secure-bank-verify.example",
      correctAction: "举报为诈骗",
      actions: ["举报为诈骗", "点击链接", "回复身份证号码", "先问家人"],
      clues: [
        {
          label: "紧迫感",
          text: "15分钟内",
          explanation: "骗子逼你快速行动，让你没时间思考。",
        },
        {
          label: "可疑网址",
          explanation: "这不是银行的官方域名。真正的银行使用自己经过验证的域名。",
        },
        {
          label: "恐吓手段",
          text: "账户已被锁定",
          explanation: "威胁要锁定你的账户，是让人恐慌的典型吓唬手法。",
        },
        {
          label: "索要身份资料",
          text: "验证您的身份",
          explanation: "银行绝不会要你通过短信链接验证身份。",
        },
      ],
      explanation: "这是一条钓鱼短信。骗子声称你的银行账户被锁定，借此制造恐慌。请始终使用官方银行应用或拨打官方热线，绝不要点击短信里的链接。",
    },
    {
      sender: "TriStar 银行",
      senderNote: "已注册的发送者 ID。",
      message: "TriStar 银行：您刚在 TriStar 应用上进行登录，一次性密码（OTP）为 482913，5分钟内有效。切勿与任何人分享此 OTP，包括银行职员。",
      correctAction: "标记为安全",
      actions: ["标记为安全", "举报为诈骗", "立即删除", "先问家人"],
      clues: [
        {
          label: "安全提醒",
          text: "切勿与任何人分享此 OTP",
          explanation: "真正的银行会提醒你绝不要分享 OTP，骗子则会要你把它发给他们。",
        },
        {
          label: "官方渠道",
          text: "在 TriStar 应用上",
          explanation: "这与你自己在官方应用上进行的登录相符。",
        },
        {
          label: "预期中的信息",
          text: "进行登录",
          explanation: "只有你自己开始登录时，才会收到 OTP。信息里没有链接、没有电话号码，也没有付款要求。",
        },
      ],
      explanation: "这是你刚刚开始登录时收到的真实 OTP。信息里没有链接，还提醒你不要分享。请自己在应用里输入，绝不要交给任何向你索取的人。",
    },
    {
      sender: "国家税务局",
      senderNote: "这不是政府的官方域名。退税会自动发放，绝不会要你提供卡片资料。",
      subject: "您符合资格获得 $482.60 退税",
      message: "我们的记录显示您今年多缴了税款。如要领取 $482.60 退款，请在48小时内确认您的卡号和 CVV。逾期未领取的退款将被没收。",
      correctAction: "举报为诈骗",
      actions: ["举报为诈骗", "领取退款", "输入卡片资料", "回复电邮"],
      clues: [
        {
          label: "索要卡片资料",
          text: "卡号和 CVV",
          explanation: "没有任何机构需要你的 CVV 才能付钱给你。骗子就是这样盗用你的卡。",
        },
        {
          label: "好得难以置信",
          text: "$482.60 退款",
          explanation: "意外之财是用来让你兴奋、放松警惕的。",
        },
        {
          label: "紧迫感",
          text: "48小时内",
          explanation: "人为设定的期限会逼你不假思索地行动。",
        },
        {
          label: "可疑域名",
          explanation: "政府电邮来自官方政府域名，而不是仿冒域名。",
        },
      ],
      explanation: "这是一封假冒退税的钓鱼邮件。真正的退税会自动存入你登记的银行账户。绝不要为了“收钱”而输入卡片资料。",
    },
    {
      sender: "Harbourview 家庭诊所",
      senderNote: "发件人域名与诊所的官方网站一致。",
      subject: "预约提醒：10月14日（星期二）上午10:30",
      message: "您好，提醒您的预约时间为10月14日（星期二）上午10:30。现在无需付款。如需更改时间，请拨打我们官方网站上的电话，或使用诊所应用程序。",
      correctAction: "标记为安全",
      actions: ["标记为安全", "举报为诈骗", "立即删除", "先问家人"],
      clues: [
        {
          label: "无需付款",
          text: "现在无需付款",
          explanation: "这封电邮没有要求你付钱或提供登录资料。",
        },
        {
          label: "正规域名",
          explanation: "发件人域名与该机构的官方域名一致。",
        },
        {
          label: "官方渠道",
          text: "使用诊所应用程序",
          explanation: "正规信息会引导你使用官方渠道，而不是随便的链接。",
        },
      ],
      explanation: "这是一则普通的预约提醒。它没有向你索取任何东西，也没有可疑链接，并引导你使用诊所自己的网站和应用程序。",
    },
    {
      senderNote: "陌生号码自称是你认识的人。请拨打对方原来的号码核实。",
      message: "嗨，是我。我的手机摔坏了，这是我的新号码。可以帮我付一张账单吗？我需要 $950，很急，明天就还你。请不要打电话，我的麦克风坏了。",
      correctAction: "举报为诈骗",
      actions: ["举报为诈骗", "转账", "保存新号码", "先问家人"],
      clues: [
        {
          label: "冒充亲友",
          text: "这是我的新号码",
          explanation: "骗子冒充换了号码的家人或朋友。",
        },
        {
          label: "索要金钱",
          text: "我需要 $950",
          explanation: "“新号码”突然向你要钱，是一个重大的危险信号。",
        },
        {
          label: "紧迫感",
          text: "很急",
          explanation: "骗子逼你快速行动，让你没时间思考。",
        },
        {
          label: "避免通话",
          text: "请不要打电话",
          explanation: "他们避免通话，因为一听声音就会露馅。",
        },
      ],
      explanation: "这是冒充亲友的骗局。转账之前，先用你原本保存的号码打给对方。真正的家人不会介意你核实。",
    },
  ],
};

export const CALL: Translation<typeof CALL_EN> = {
  caller: {
    name: "未知来电",
  },
  incoming: {
    title: "来电",
    answer: "接听",
    decline: "拒接",
    heading: "你的电话响了……",
    text: "一个陌生号码打来了。接听即可开始演练，然后在来电者说话时选择你的回应。你可以随时挂断。点按喇叭图标即可听到来电者的声音。",
  },
  replyHeading: "你会怎么回应？",
  hangUp: "[ 挂断 ]",
  stop: "太难受了，停止演练",
  tapHint: "点按红字查看原因",
  flagsHeading: "这通电话中的危险信号",
  flags: {
    official_impersonation: {
      name: "冒充官员",
      explanation: "来电者自称是官员，并不能证明身份。请挂断电话，再用你自己查到的号码联系该机构。",
    },
    fear_tactic: {
      name: "恐吓手段",
      explanation: "说你牵涉到犯罪，是为了让你慌张，从而无法清楚思考。",
    },
    urgency: {
      name: "制造紧迫感",
      explanation: "逼你立即行动，是为了不让你向信任的人或官方渠道核实。",
    },
    transfer_pressure: {
      name: "催促转账",
      explanation: "急着要你把钱转到“安全账户”，是常见的诈骗手法。银行和警方绝不会用这种方式保护你的钱。",
    },
    secrecy: {
      name: "要你保密",
      explanation: "叫你不要告诉任何人，是要切断你和最可能识破骗局的人之间的联系。",
    },
    otp_request: {
      name: "索要 OTP / 机密",
      explanation: "真正的职员绝不会要你念出 OTP、PIN、密码或完整的卡号。",
    },
  },
  steps: [
    {
      line: "你好，我是公共信托办公室的陈官员。请问是账户持有人吗？",
      flags: [{
          phrase: "公共信托办公室的陈官员",
        }],
      replies: [{
          label: "是我。有什么事？",
        }, {
          label: "你怎么有我的号码？",
        }],
    },
    {
      line: "因为一项正在进行的调查，我们掌握了你的资料。事情很严重，请仔细听好。",
      flags: [{
          phrase: "正在进行的调查",
        }],
      replies: [{
          label: "好……什么调查？",
        }, {
          label: "我还是自己查证吧。我会直接打去你们办公室。",
        }],
    },
    {
      line: "是这样的，你的银行账户牵涉到一宗洗钱案。我们今天就必须处理，否则账户会被冻结。",
      flags: [{
          phrase: "洗钱案",
        }, {
          phrase: "我们今天就必须处理",
        }],
      replies: [{
          label: "什么？我什么坏事都没做！",
        }, {
          label: "我用你们的官方热线回电给你。",
        }],
    },
    {
      line: "好，听着。为了保护你的存款，我们现在马上把钱转到一个安全账户。不要告诉任何人，否则会影响调查。",
      flags: [
        {
          phrase: "安全账户",
        },
        {
          phrase: "马上",
        },
        {
          phrase: "不要告诉任何人",
        },
      ],
      replies: [{
          label: "好……我要怎么做？",
        }, {
          label: "银行不会这样做。我要先问问家人。",
        }],
    },
    {
      line: "我现在发一个一次性验证码到你的手机。把它念给我听，我好确认真的是你本人。",
      flags: [{
          phrase: "把它念给我听",
        }],
      replies: [{
          label: "嗯，好。上面写着 4……8……",
        }, {
          label: "不行。我从不把 OTP 告诉任何人。",
        }],
    },
  ],
  reveal: "到此为止。这是一次 Drill Mode 演练。你很安全，你的账户也没有任何问题。在真实的诈骗中，这正是你会损失钱财的那一刻。练得好！",
  outcomes: {
    hung_up: {
      title: "击败骗子！",
      text: "你挂断了电话。这是应对诈骗电话最好的一招。",
    },
    caught_flag: {
      title: "你识破了！",
      text: "你拒绝配合，选择通过官方渠道查证。这正是我们要培养的本能反应。",
    },
    complied: {
      title: "上当了，但没关系",
      text: "在真实的诈骗中，念出那个验证码的那一刻，你就会损失钱财。现在你知道那听起来是什么样子了。",
    },
    stopped: {
      title: "演练已停止",
      text: "停止绝不算输。演练应该有挑战性，但绝不该让人难受。",
    },
    declined: {
      title: "已拒接",
      text: "不接陌生号码的电话，是非常好的选择！还是想练习一下吗？",
    },
  },
  pixiChat: {
    title: "家庭聊天",
    hung_up: {
      post: "假官员还没得逞，你就挂断了。干得好 👏",
      question: "最先让你起疑的是什么？",
      replies: [
        {
          label: "“公共信托办公室”",
          reply: "眼力不错。在电话里，谁都能自称有头衔。如果拿不准，就挂断电话，自己查官方号码。",
        },
        {
          label: "洗钱的恐吓",
          reply: "没错。恐惧是骗子最爱用的工具，因为慌乱的大脑会跳过查证。",
        },
        {
          label: "我从不相信陌生来电",
          reply: "说真的，这是个好习惯。真正的机构总有别的方法联系你。",
        },
      ],
    },
    caught_flag: {
      post: "你没有慌，而是先查证。这正是我们要培养的本能反应 💪",
      question: "你真的接过这样的电话吗？",
      replies: [
        {
          label: "有，真的接过",
          reply: "你不是一个人，几乎每个人都接过。把经历分享给家人，能帮他们识破下一个骗局。",
        },
        {
          label: "还没有",
          reply: "以后真遇到，你就认得出来了。“安全账户”这句话就是破绽。",
        },
        {
          label: "我家里有人接过",
          reply: "问问他们来电者说了什么。一起聊一聊，就是最好的练习。",
        },
      ],
    },
    complied: {
      post: "这次假官员拿到了验证码。再聪明的人也会中招，现在你知道那听起来是什么样子了 😅",
      question: "想要一个下次用得上的小贴士吗？",
      replies: [
        {
          label: "好啊",
          reply: "如果有人要你念出验证码，就挂断电话。真正的银行或机构绝不会这样要求。",
        },
        {
          label: "我还应该注意什么？",
          reply: "电话里的“官员”、“安全账户”、被要求保密。只要出现其中任何一个，就挂断电话去查证。",
        },
      ],
    },
    stopped: {
      post: "休息一下永远没问题。准备好了随时回来 🙂",
    },
  },
};
