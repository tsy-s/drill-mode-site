// DRAFT TRANSLATION (Bahasa Melayu): needs a native speaker's review before launch.
// Same layout as src/content/home.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { HOME as HOME_EN } from "../../home";

export const HOME: Translation<typeof HOME_EN> = {
  intro: {
    subtitle: "PEJUANG PENIPUAN",
    taglines: ["LINDUNGI MINDA ANDA.", "KALAHKAN PENIPU."],
    button: "[ TEKAN MULA ]",
    scrollHint: "SKROL UNTUK MULA",
    skip: "LANGKAU ▶▶",
  },
  hero: {
    eyebrow: "Latihan penipuan untuk seisi keluarga",
    title: "Bina refleks sebelum panggilan sebenar tiba.",
    text: "Penipu menang dalam detik tekanan, bukan kerana kurang pengetahuan. Drill Mode menghantar penipuan latihan yang selamat dan berasaskan persetujuan (panggilan, SMS dan e-mel) supaya keluarga anda belajar berhenti, menyemak dan meletakkan telefon pada saat yang penting.",
    primary: {
      label: "Cuba demo",
    },
    secondary: {
      label: "Lihat cara ia berfungsi",
    },
    pixiSays: "Ia seperti latihan kebakaran, tetapi untuk penipuan. Mahu berlatih?",
  },
  brands: {
    eyebrow: "Jenama dipercayai",
    title: "Bersama rakan yang baik",
    note: "Logo sementara. Hanya senaraikan organisasi yang bersetuju untuk dipaparkan di sini.",
  },
  howItWorks: {
    eyebrow: "Cara ia berfungsi",
    title: "Tiga langkah. Tiada risiko sebenar.",
    steps: [
      {
        title: "Beri persetujuan",
        text: "Sahkan telefon atau peti masuk anda sendiri. Tiada apa-apa dihantar tanpa persetujuan anda yang direkodkan.",
      },
      {
        title: "Jalani latihan",
        text: "Pilih panggilan, SMS atau e-mel penipuan. Penipu rekaan yang realistik akan mencuba helah terbaiknya pada anda.",
      },
      {
        title: "Bincang bersama",
        text: "Setiap latihan berakhir dengan pendedahan. Kemudian Pixi memulakan perbualan dalam sembang rumah keluarga anda.",
      },
    ],
  },
  productCard: {
    eyebrow: "Produk",
    title: "Satu aplikasi. Semua jenis penipuan. Seisi keluarga.",
    text: "Berlatih menghadapi panggilan penipuan AI dalam empat bahasa, kuiz kenal pasti penipuan, latihan rumah bersama keluarga, dan rumah piksel yang anda bina semakin anda selamat.",
    highlights: [
      {
        label: "Latihan panggilan, SMS & e-mel penipuan",
      },
      {
        label: "Rumah maya dengan bilik untuk semua",
      },
      {
        label: "Pixi, jurulatih penipuan AI anda",
      },
      {
        label: "XP, syiling & Hari Gaji Ahad",
      },
    ],
    cta: {
      label: "Terokai produk",
    },
  },
  stats: {
    eyebrow: "Mengapa ia penting",
    title: "Kebanyakan mangsa penipuan tidak pernah digodam.",
    items: [
      {
        label: "hilang akibat penipuan di Singapura pada 2025",
      },
      {
        label: "mangsa memindahkan wang itu sendiri",
      },
      {
        label: "mangsa berumur bawah 65 tahun. Ia bukan masalah warga emas sahaja",
      },
    ],
    source: "Sumber: Pasukan Polis Singapura, Taklimat Tahunan Penipuan dan Jenayah Siber 2025.",
  },
  finalCta: {
    title: "Sedia untuk berlatih?",
    text: "Cuba latihan dua minit terus dalam pelayar anda. Tiada pendaftaran, dan tiada apa-apa dihantar ke telefon anda.",
    button: {
      label: "[ CUBA LATIHAN ]",
    },
  },
};
