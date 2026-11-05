// DRAFT TRANSLATION (Bahasa Melayu): needs a native speaker's review before launch.
// Same layout as src/content/about.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { ABOUT as ABOUT_EN } from "../../about";

export const ABOUT: Translation<typeof ABOUT_EN> = {
  header: {
    eyebrow: "Tentang kami",
    title: "Kami Drill Mode.",
    text: "Kami pasukan kecil yang membina latihan penipuan yang benar-benar mahu dimainkan oleh keluarga. Kami bermula sebagai projek pertandingan, dan kini kami berusaha membawa latihan ini ke setiap rumah.",
  },
  story: {
    eyebrow: "Kisah kami",
    title: "Pengetahuan bukan refleks.",
    paragraphs: [
      "Setiap seorang daripada kami ada kisah: ibu bapa yang hampir membayar \"pegawai\" palsu, rakan yang menghantar wang ke \"nombor baharu\". Mereka semua tahu penipuan wujud. Ia tidak membantu pada saat itu, kerana penipuan menang di bawah tekanan, bukan kerana kurang pengetahuan.",
      "Jadi kami membina Drill Mode untuk Huawei Tech4City 2026: latihan kebakaran, untuk penipuan. Keluarga berlatih menghadapi penipu rekaan yang realistik sehingga berhenti dan menyemak menjadi automatik, kemudian mereka berbincang bersama.",
      "Kini kami membawanya melangkaui pertandingan, berusaha ke arah projek rintis bersama rakan komuniti di seluruh Singapura.",
    ],
    facts: [
      {
        label: "pernah menerima mesej atau panggilan penipuan",
      },
      {
        label: "berkata mereka, atau orang terdekat, hampir terpedaya",
      },
      {
        label: "benar-benar meminta bantuan apabila tidak pasti",
      },
    ],
  },
  house: {
    eyebrow: "Pasukan",
    title: "Selamat datang ke rumah kami.",
    text: "Sama seperti dalam aplikasi, setiap ahli pasukan ada bilik sendiri. Mari bertegur sapa.",
    roofTitle: "RUMAH DRILL MODE",
    doormat: "DITUBUHKAN 2026",
  },
  cta: {
    title: "Mahu bekerjasama dengan kami?",
    text: "Kami mencari rakan projek rintis, mentor dan sahabat projek ini.",
    button: {
      label: "Hubungi kami",
    },
  },
};
