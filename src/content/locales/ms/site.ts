// DRAFT TRANSLATION (Bahasa Melayu): needs a native speaker's review before launch.
// Same layout as src/content/site.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { SITE as SITE_EN, NAV_LINKS as NAV_LINKS_EN, NAV_CTA as NAV_CTA_EN, FOOTER_COLUMNS as FOOTER_COLUMNS_EN, FOOTER_LEGAL as FOOTER_LEGAL_EN, SOCIALS as SOCIALS_EN, UI as UI_EN } from "../../site";

export const SITE: Translation<typeof SITE_EN> = {
  tagline: "Bina refleks sebelum panggilan sebenar tiba.",
  description: "Drill Mode menjalankan latihan penipuan yang selamat dan berasaskan persetujuan (panggilan, SMS dan e-mel) supaya keluarga membina refleks sebelum panggilan sebenar tiba.",
  oneLiner: "Latihan penipuan yang selamat dan berasaskan persetujuan yang melatih seisi keluarga untuk kekal tenang pada saat yang penting.",
  copyright: "© 2026 Drill Mode. Hak cipta terpelihara.",
  helpline: {
    label: "Talian Bantuan Antipenipuan",
  },
};

export const NAV_LINKS: Translation<typeof NAV_LINKS_EN> = [
  {
    label: "Utama",
  },
  {
    label: "Produk",
  },
  {
    label: "Tentang kami",
  },
  {
    label: "Soalan lazim",
  },
  {
    label: "Hubungi",
  },
];

export const NAV_CTA: Translation<typeof NAV_CTA_EN> = {
  label: "Cuba Demo",
};

export const FOOTER_COLUMNS: Translation<typeof FOOTER_COLUMNS_EN> = [
  {
    heading: "Produk",
    links: [
      {
        label: "Ciri-ciri",
      },
      {
        label: "Latihan",
      },
      {
        label: "Keselamatan",
      },
      {
        label: "Cuba Demo",
      },
    ],
  },
  {
    heading: "Syarikat",
    links: [
      {
        label: "Tentang kami",
      },
      {
        label: "Pasukan",
      },
      {
        label: "Hubungi",
      },
    ],
  },
  {
    heading: "Sokongan",
    links: [
      {
        label: "Soalan lazim",
      },
      {
        label: "Bot Telegram",
      },
      {
        label: "Talian bantuan penipuan: 1799",
      },
    ],
  },
];

export const FOOTER_LEGAL: Translation<typeof FOOTER_LEGAL_EN> = [{
    label: "Dasar Privasi",
  }, {
    label: "Terma Penggunaan",
  }];

export const SOCIALS: Translation<typeof SOCIALS_EN> = [{
    label: "Bot Telegram",
  }];

export const UI: Translation<typeof UI_EN> = {
  skipToContent: "Langkau ke kandungan",
  logoLabel: "Laman utama {name}",
  nav: {
    main: "Utama",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    language: "Bahasa",
    lightTheme: "Tema cerah",
  },
  footer: {
    legal: "Undang-undang",
  },
  intro: {
    home: "Pengenalan Drill Mode",
    product: "Pengenalan produk",
  },
  pageTitles: {
    about: "Tentang kami",
    product: "Produk",
    faq: "Soalan lazim",
    contact: "Hubungi",
    demo: "Cuba Demo",
    notFound: "Halaman tidak dijumpai",
  },
  legal: {
    eyebrow: "Undang-undang",
    updated: "Kemas kini terakhir {date}",
    englishOnly: "Halaman ini hanya tersedia dalam bahasa Inggeris buat masa ini.",
  },
  notFound: {
    headline: "PAUTAN MENCURIGAKAN DIKESAN.",
    text: "Halaman ini tidak wujud. Naluri yang baik untuk menyemak! Mari bawa anda ke tempat yang selamat.",
    button: "[ KEMBALI KE UTAMA ]",
  },
  faq: {
    search: "Cari soalan lazim",
    placeholder: "Cari soalan…",
    categories: "Kategori soalan lazim",
    noMatch: "Tiada soalan yang sepadan dengan \"{query}\". Cuba perkataan lain, atau",
    askUs: "tanya kami terus",
  },
  contact: {
    callHelpline: "Hubungi {label}: {number}",
    mailSubject: "[{topic}] Mesej daripada {name}",
  },
  demo: {
    playing: "▶ Sedang dimainkan",
  },
  drillTabs: {
    label: "Latihan",
    redFlags: "Tanda bahaya yang dilatih",
    tryDemo: "Cuba dalam demo →",
  },
  quiz: {
    progress: "MESEJ {n} / {total}",
    whatWouldYouDo: "APA YANG ANDA AKAN LAKUKAN?",
    inbox: "PETI MASUK",
    messages: "MESEJ",
    notifications: "PEMBERITAHUAN",
    textMessage: "SMS",
    appNotification: "Pemberitahuan aplikasi",
    redFlags: "Tanda bahaya",
    genuineSigns: "Tanda ia tulen",
    tapToLearn: "ketik untuk ketahui",
    seeResults: "LIHAT KEPUTUSAN →",
    complete: "LATIHAN SELESAI",
    xpEarned: "+{xp} XP diperoleh",
    scam: "penipuan",
    genuine: "tulen",
    playAgain: "MAIN LAGI",
    takeCall: "JAWAB PANGGILAN PENIPUAN →",
  },
  call: {
    phoneTitle: "PANGGILAN PENIPUAN",
    ended: "PANGGILAN TAMAT",
    speaking: "PEMANGGIL BERCAKAP",
    listening: "MENDENGAR...",
    muteVoice: "Senyapkan suara pemanggil",
    readAloud: "Bacakan kata-kata pemanggil",
    voiceOn: "Suara hidup",
    voiceOff: "Suara mati",
    drillActive: "LATIHAN PENIPUAN AKTIF",
    reveal: "PENDEDAHAN LATIHAN",
    practiseAnyway: "BERLATIH JUGA →",
    tryAgain: "CUBA LAGI",
    spotScam: "KENAL PASTI PENIPUAN →",
  },
  chat: {
    pixi: "PIXI",
    typing: "Pixi sedang menaip",
  },
  mocks: {
    call: {
      title: "PANGGILAN PENIPUAN",
      speaking: "PEMANGGIL BERCAKAP",
      caller: "PEGAWAI TAN",
      active: "LATIHAN PENIPUAN AKTIF",
      lines: [
        {
          text: "Saya Pegawai Tan dari Pejabat Amanah Awam.",
          flags: ["Pejabat Amanah Awam"],
        },
        {
          text: "Pindahkan simpanan anda ke akaun selamat sekarang juga.",
          flags: ["akaun selamat", "sekarang juga"],
        },
      ],
      reply: "Bank tidak buat begitu. Saya letak telefon.",
      hangUp: "[ LETAK TELEFON ]",
    },
    sms: {
      title: "MESEJ",
      sender: "ParcelGo Alert",
      meta: "SMS · Hari ini 11:47",
      text: "Penghantaran gagal. Bayar caj penghantaran semula $1.99 hari ini atau bungkusan anda akan dipulangkan: parcelgo-redeliver.example",
      flags: ["caj penghantaran semula $1.99", "hari ini"],
      found: "3 TANDA BAHAYA DIJUMPAI",
      report: "LAPOR PENIPUAN",
      pay: "BAYAR CAJ",
    },
    email: {
      title: "PETI MASUK",
      sender: "Pejabat Ganjaran Kampus",
      subject: "ANDA MENANG GANJARAN $300!",
      text: "Tuntut dalam masa 30 minit atau ganjaran anda akan diberikan kepada orang lain. Sahkan akaun anda untuk meneruskan.",
      flags: ["dalam masa 30 minit", "akan diberikan kepada orang lain", "Sahkan akaun anda"],
      claim: "TUNTUT GANJARAN",
    },
    quiz: {
      title: "LATIHAN INDIVIDU",
      progress: "MESEJ 3 / 5",
      from: "DARIPADA: +65 8000 0347",
      text: "Hai, ini saya, ini nombor baharu saya. Saya perlukan $950 segera. Tolong jangan telefon.",
      flags: ["ini nombor baharu saya", "Saya perlukan $950", "Tolong jangan telefon"],
      actions: ["LAPOR SEBAGAI PENIPUAN", "PINDAHKAN WANG", "SIMPAN NOMBOR", "TANYA KELUARGA DAHULU"],
      result: "TANGKAPAN HEBAT! +100 XP",
    },
    house: {
      title: "LATIHAN RUMAH",
      round: "PERLUMBAAN · PUSINGAN 4 / 5",
      players: ["NENEK", "IBU", "ANDA", "ANAK"],
      pixi: "Nenek sedang menang berturut-turut! Ibu, boleh kejar? 👀",
    },
  },
  visuals: {
    call: {
      text: "\"Saya Pegawai Tan. Akaun anda dikaitkan dengan kes pengubahan wang haram.\"",
      flags: ["kes pengubahan wang haram"],
    },
    quiz: {
      text: "Bungkusan anda ditahan. Bayar $1.99 hari ini: parcel-go.example",
      scam: "PENIPUAN",
      safe: "SELAMAT",
    },
    chat: {
      pixi1: "Ayah terus meletakkan telefon apabila menerima panggilan bank palsu 👏",
      pixi2: "Ibu, pernahkah ibu menerima panggilan seperti ini?",
      reply: "Pernah! Bulan lepas 😅",
    },
    rewards: {
      payday: "HARI GAJI AHAD",
      level: "TAHAP 4 · PENYEKAT PENIPUAN",
    },
    safety: "SELAMAT",
  },
};
