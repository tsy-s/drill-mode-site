// DRAFT TRANSLATION (தமிழ் (Tamil)): needs a native speaker's review before launch.
// Same layout as src/content/site.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { SITE as SITE_EN, NAV_LINKS as NAV_LINKS_EN, NAV_CTA as NAV_CTA_EN, FOOTER_COLUMNS as FOOTER_COLUMNS_EN, FOOTER_LEGAL as FOOTER_LEGAL_EN, SOCIALS as SOCIALS_EN, UI as UI_EN } from "../../site";

export const SITE: Translation<typeof SITE_EN> = {
  tagline: "உண்மையான அழைப்பு வரும் முன் உள்ளுணர்வை வளர்த்திடுங்கள்.",
  description: "Drill Mode சம்மதத்துடன் பாதுகாப்பான மோசடிப் பயிற்சிகளை (அழைப்புகள், குறுஞ்செய்திகள், மின்னஞ்சல்கள்) நடத்துகிறது. அதனால் உண்மையான அழைப்பு வரும் முன் குடும்பங்கள் உள்ளுணர்வை வளர்த்துக்கொள்கின்றன.",
  oneLiner: "முக்கியமான நேரத்தில் அமைதியாக இருக்க முழுக் குடும்பத்தையும் பழக்கும், சம்மதத்துடனான பாதுகாப்பான மோசடிப் பயிற்சிகள்.",
  copyright: "© 2026 Drill Mode. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  helpline: {
    label: "மோசடி எதிர்ப்பு உதவி எண்",
  },
};

export const NAV_LINKS: Translation<typeof NAV_LINKS_EN> = [
  {
    label: "முகப்பு",
  },
  {
    label: "தயாரிப்பு",
  },
  {
    label: "எங்களைப் பற்றி",
  },
  {
    label: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
  },
  {
    label: "தொடர்பு",
  },
];

export const NAV_CTA: Translation<typeof NAV_CTA_EN> = {
  label: "டெமோ",
};

export const FOOTER_COLUMNS: Translation<typeof FOOTER_COLUMNS_EN> = [
  {
    heading: "தயாரிப்பு",
    links: [
      {
        label: "அம்சங்கள்",
      },
      {
        label: "பயிற்சிகள்",
      },
      {
        label: "பாதுகாப்பு",
      },
      {
        label: "டெமோ",
      },
    ],
  },
  {
    heading: "நிறுவனம்",
    links: [
      {
        label: "எங்களைப் பற்றி",
      },
      {
        label: "குழு",
      },
      {
        label: "தொடர்பு",
      },
    ],
  },
  {
    heading: "உதவி",
    links: [
      {
        label: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      },
      {
        label: "Telegram பாட்",
      },
      {
        label: "மோசடி உதவி எண்: 1799",
      },
    ],
  },
];

export const FOOTER_LEGAL: Translation<typeof FOOTER_LEGAL_EN> = [{
    label: "தனியுரிமைக் கொள்கை",
  }, {
    label: "பயன்பாட்டு விதிமுறைகள்",
  }];

export const SOCIALS: Translation<typeof SOCIALS_EN> = [{
    label: "Telegram பாட்",
  }];

export const UI: Translation<typeof UI_EN> = {
  skipToContent: "உள்ளடக்கத்துக்குச் செல்லவும்",
  logoLabel: "{name} முகப்பு",
  nav: {
    main: "முதன்மை",
    openMenu: "மெனுவைத் திற",
    closeMenu: "மெனுவை மூடு",
    language: "மொழி",
    lightTheme: "வெளிர் தீம்",
  },
  footer: {
    legal: "சட்டம்",
  },
  intro: {
    home: "Drill Mode அறிமுகம்",
    product: "தயாரிப்பு அறிமுகம்",
  },
  pageTitles: {
    about: "எங்களைப் பற்றி",
    product: "தயாரிப்பு",
    faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    contact: "தொடர்பு",
    demo: "டெமோ",
    notFound: "பக்கம் கிடைக்கவில்லை",
  },
  legal: {
    eyebrow: "சட்டம்",
    updated: "கடைசியாகப் புதுப்பித்தது {date}",
    englishOnly: "இந்தப் பக்கம் இப்போதைக்கு ஆங்கிலத்தில் மட்டுமே உள்ளது.",
  },
  notFound: {
    headline: "சந்தேகமான இணைப்பு கண்டறியப்பட்டது.",
    text: "இந்தப் பக்கம் இல்லை. சரிபார்த்தது நல்ல உள்ளுணர்வு! உங்களைப் பாதுகாப்பான இடத்துக்கு அழைத்துச் செல்கிறோம்.",
    button: "[ முகப்புக்குத் திரும்பு ]",
  },
  faq: {
    search: "கேள்விகளில் தேடுங்கள்",
    placeholder: "கேள்விகளைத் தேடுங்கள்…",
    categories: "கேள்விப் பிரிவுகள்",
    noMatch: "\"{query}\" என்பதுடன் பொருந்தும் கேள்விகள் இல்லை. வேறு சொல்லை முயலுங்கள், அல்லது",
    askUs: "நேரடியாக எங்களிடம் கேளுங்கள்",
  },
  contact: {
    callHelpline: "{label}-ஐ அழையுங்கள்: {number}",
    mailSubject: "[{topic}] {name} அனுப்பிய செய்தி",
  },
  demo: {
    playing: "▶ நடக்கிறது",
  },
  drillTabs: {
    label: "பயிற்சிகள்",
    redFlags: "பயிற்றுவிக்கும் எச்சரிக்கை அறிகுறிகள்",
    tryDemo: "டெமோவில் முயலுங்கள் →",
  },
  quiz: {
    progress: "செய்தி {n} / {total}",
    whatWouldYouDo: "நீங்கள் என்ன செய்வீர்கள்?",
    inbox: "இன்பாக்ஸ்",
    messages: "செய்திகள்",
    notifications: "அறிவிப்புகள்",
    textMessage: "குறுஞ்செய்தி",
    appNotification: "செயலி அறிவிப்பு",
    redFlags: "எச்சரிக்கை அறிகுறிகள்",
    genuineSigns: "உண்மையானது என்பதற்கான அறிகுறிகள்",
    tapToLearn: "அறியத் தட்டுங்கள்",
    seeResults: "முடிவுகளைப் பாருங்கள் →",
    complete: "பயிற்சி முடிந்தது",
    xpEarned: "+{xp} XP பெற்றீர்கள்",
    scam: "மோசடி",
    genuine: "உண்மை",
    playAgain: "மீண்டும் விளையாடு",
    takeCall: "மோசடி அழைப்பை எடுங்கள் →",
  },
  call: {
    phoneTitle: "மோசடி அழைப்பு",
    ended: "அழைப்பு முடிந்தது",
    speaking: "அழைப்பவர் பேசுகிறார்",
    listening: "கேட்கிறது...",
    muteVoice: "அழைப்பாளர் குரலை முடக்கு",
    readAloud: "அழைப்பாளரின் வரிகளை உரக்கப் படி",
    voiceOn: "குரல் இயக்கத்தில்",
    voiceOff: "குரல் அணைப்பில்",
    drillActive: "மோசடிப் பயிற்சி நடக்கிறது",
    reveal: "பயிற்சி வெளிப்படுத்தல்",
    practiseAnyway: "இருந்தாலும் பயிற்சி செய்யுங்கள் →",
    tryAgain: "மீண்டும் முயலுங்கள்",
    spotScam: "மோசடியைக் கண்டறியுங்கள் →",
  },
  chat: {
    pixi: "PIXI",
    typing: "Pixi தட்டச்சு செய்கிறது",
  },
  mocks: {
    call: {
      title: "மோசடி அழைப்பு",
      speaking: "அழைப்பவர் பேசுகிறார்",
      caller: "அதிகாரி டான்",
      active: "மோசடிப் பயிற்சி நடக்கிறது",
      lines: [
        {
          text: "நான் பொது நம்பிக்கை அலுவலகத்திலிருந்து அதிகாரி டான்.",
          flags: ["பொது நம்பிக்கை அலுவலக"],
        },
        {
          text: "இப்போதே உங்கள் சேமிப்பை ஒரு பாதுகாப்பான கணக்குக்கு மாற்றுங்கள்.",
          flags: ["பாதுகாப்பான கணக்கு", "இப்போதே"],
        },
      ],
      reply: "வங்கிகள் அப்படிச் செய்வதில்லை. நான் துண்டிக்கிறேன்.",
      hangUp: "[ துண்டி ]",
    },
    sms: {
      title: "செய்திகள்",
      sender: "ParcelGo Alert",
      meta: "குறுஞ்செய்தி · இன்று 11:47",
      text: "டெலிவரி தோல்வியடைந்தது. இன்று $1.99 மறுடெலிவரிக் கட்டணம் செலுத்துங்கள், இல்லையெனில் உங்கள் பார்சல் திருப்பி அனுப்பப்படும்: parcelgo-redeliver.example",
      flags: ["$1.99 மறுடெலிவரிக் கட்டணம்", "இன்று"],
      found: "3 எச்சரிக்கை அறிகுறிகள் கண்டறியப்பட்டன",
      report: "மோசடியைப் புகார் செய்",
      pay: "கட்டணம் செலுத்து",
    },
    email: {
      title: "இன்பாக்ஸ்",
      sender: "வளாக வெகுமதி அலுவலகம்",
      subject: "நீங்கள் $300 பரிசு வென்றுள்ளீர்கள்!",
      text: "30 நிமிடங்களுக்குள் பெற்றுக்கொள்ளுங்கள், இல்லையெனில் உங்கள் பரிசு வேறொருவருக்கு வழங்கப்படும். தொடர உங்கள் கணக்கைச் சரிபார்க்கவும்.",
      flags: ["30 நிமிடங்களுக்குள்", "வேறொருவருக்கு வழங்கப்படும்", "உங்கள் கணக்கைச் சரிபார்க்கவும்"],
      claim: "பரிசைப் பெறு",
    },
    quiz: {
      title: "தனிநபர் பயிற்சி",
      progress: "செய்தி 3 / 5",
      from: "அனுப்பியவர்: +65 8000 0347",
      text: "ஹாய், நான்தான், இது என் புதிய எண். எனக்கு அவசரமாக $950 தேவை. தயவுசெய்து அழைக்க வேண்டாம்.",
      flags: ["இது என் புதிய எண்", "$950 தேவை", "தயவுசெய்து அழைக்க வேண்டாம்"],
      actions: ["மோசடி எனப் புகார் செய்", "பணம் அனுப்பு", "எண்ணைச் சேமி", "முதலில் குடும்பத்திடம் கேள்"],
      result: "சரியாகக் கண்டுபிடித்தீர்கள்! +100 XP",
    },
    house: {
      title: "வீட்டுப் பயிற்சி",
      round: "போட்டி · சுற்று 4 / 5",
      players: ["பாட்டி", "அம்மா", "நீங்கள்", "குழந்தை"],
      pixi: "பாட்டி தொடர்ந்து வெல்கிறார்! அம்மா, உங்களால் பிடிக்க முடியுமா? 👀",
    },
  },
  visuals: {
    call: {
      text: "\"நான் அதிகாரி டான். உங்கள் கணக்கு ஒரு சட்டவிரோதப் பணப் பரிமாற்ற வழக்குடன் தொடர்புடையது.\"",
      flags: ["சட்டவிரோதப் பணப் பரிமாற்ற வழக்கு"],
    },
    quiz: {
      text: "உங்கள் பார்சல் நிறுத்தி வைக்கப்பட்டுள்ளது. இன்று $1.99 செலுத்துங்கள்: parcel-go.example",
      scam: "மோசடி",
      safe: "பாதுகாப்பு",
    },
    chat: {
      pixi1: "போலி வங்கி அழைப்பை அப்பா உடனே துண்டித்தார் 👏",
      pixi2: "அம்மா, உங்களுக்கு இப்படி ஓர் அழைப்பு வந்ததுண்டா?",
      reply: "ஆம்! போன மாதம் 😅",
    },
    rewards: {
      payday: "ஞாயிறு சம்பள நாள்",
      level: "நிலை 4 · மோசடித் தடுப்பாளர்",
    },
    safety: "பாதுகாப்பு",
  },
};
