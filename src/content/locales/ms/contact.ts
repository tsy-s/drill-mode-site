// DRAFT TRANSLATION (Bahasa Melayu): needs a native speaker's review before launch.
// Same layout as src/content/contact.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { CONTACT as CONTACT_EN } from "../../contact";

export const CONTACT: Translation<typeof CONTACT_EN> = {
  header: {
    eyebrow: "Hubungi",
    title: "Mari berbincang.",
    text: "Mahu membawa Drill Mode ke komuniti anda, menulis tentang kami, atau sekadar bertegur sapa? Hantar mesej kepada kami dan kami akan membalas dalam beberapa hari bekerja.",
  },
  form: {
    name: "Nama anda",
    email: "E-mel anda",
    organisation: "Organisasi (pilihan)",
    topic: "Tentang apa?",
    message: "Mesej",
    send: "[ HANTAR MESEJ ]",
    sending: "MENGHANTAR...",
    success: "Mesej dihantar! Kami akan menghubungi anda tidak lama lagi.",
    error: "Ada sesuatu yang tidak kena. Sila e-mel kami terus.",
    mailtoNote: "Menekan hantar akan membuka aplikasi e-mel anda dengan mesej yang sedia dihantar.",
  },
  topics: [
    "Soalan umum",
    "Kerjasama atau projek rintis",
    "Sekolah & kumpulan komuniti",
    "Media & akhbar",
    "Maklum balas tentang aplikasi",
  ],
  socialsTitle: "Ikuti kami",
  helplineTitle: "Sedang berdepan penipuan sebenar?",
  cards: [
    {
      title: "E-mel",
    },
    {
      title: "Cuba bot Telegram kami",
      text: "Berlatih mengenal pasti penipuan dalam sembang: @drillmodebot",
    },
  ],
};
