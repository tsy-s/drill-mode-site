// DRAFT TRANSLATION (Bahasa Melayu): needs a native speaker's review before launch.
// Same layout as src/content/faq.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { FAQ as FAQ_EN } from "../../faq";

export const FAQ: Translation<typeof FAQ_EN> = {
  header: {
    eyebrow: "Soalan lazim",
    title: "Ada soalan? Kami ada jawapannya.",
    text: "Semua yang biasa ditanya oleh keluarga, sekolah dan rakan kongsi. Tidak jumpa soalan anda? Hubungi kami.",
  },
  categories: [
    {
      title: "Asas",
      items: [
        {
          q: "Apakah Drill Mode?",
          a: "Drill Mode ialah aplikasi kesedaran penipuan yang berfungsi seperti latihan kebakaran, untuk penipuan. Daripada membaca tentang penipuan, anda berlatih menghadapi penipuan rekaan yang realistik (panggilan, SMS dan e-mel) supaya kekal tenang dan menyemak menjadi refleks.",
        },
        {
          q: "Untuk siapa?",
          a: "Setiap ahli isi rumah, daripada bawah 18 tahun hingga melebihi 65 tahun. Penipuan bukan masalah warga emas sahaja: kebanyakan mangsa penipuan di Singapura berumur bawah 65 tahun. Drill Mode dibina supaya keluarga berlatih bersama dan tahu kepada siapa hendak meminta bantuan.",
        },
        {
          q: "Berapakah kosnya?",
          a: "Drill Mode percuma untuk keluarga. Kami bekerjasama dengan kerajaan dan rakan komuniti untuk membiayainya, supaya keluarga tidak perlu membayar untuk melindungi diri.",
        },
        {
          q: "Bahasa apakah yang disokong?",
          a: "Bahasa Inggeris, Cina (中文), Melayu (Bahasa Melayu) dan Tamil (தமிழ்). Ini termasuk panggilan, SMS dan e-mel penipuan secara langsung, bukan menu sahaja.",
        },
        {
          q: "Peranti apakah yang boleh digunakan?",
          a: "Drill Mode ialah aplikasi web yang berjalan pada mana-mana pelayar telefon moden. Anda boleh memasangnya pada skrin utama supaya ia dibuka seperti aplikasi biasa. Aplikasi mudah alih khas ada dalam pelan kami.",
        },
      ],
    },
    {
      title: "Keselamatan & privasi",
      items: [
        {
          q: "Adakah ia selamat? Adakah ia akan menakutkan ibu bapa saya?",
          a: "Setiap latihan memerlukan persetujuan, berakhir dengan pendedahan yang jelas, dan boleh dihentikan serta-merta dengan satu ketikan atau dengan menyebut \"berhenti\". Berhenti tidak pernah dikira sebagai kalah.\n\nLatihan hanya menyamar sebagai organisasi rekaan, dan kami tidak pernah memalsukan ID pemanggil.",
        },
        {
          q: "Bolehkah saya menghantar latihan kepada orang lain?",
          a: "Tidak. Panggilan dan SMS hanya dihantar ke nombor telefon yang anda sahkan sendiri, dan latihan e-mel hanya dihantar ke peti masuk yang pemiliknya telah mengklik pautan pengesahan. Tiada sesiapa boleh melatih orang lain tanpa persetujuan mereka.",
        },
        {
          q: "Adakah latihan akan meminta butiran sebenar saya?",
          a: "Tidak sama sekali. Latihan tidak akan meminta kata laluan, OTP, butiran kad, pindahan wang atau bayaran sebenar. Jika anda mula membacakan kod sebenar semasa latihan panggilan, panggilan berhenti serta-merta dan tiada apa-apa disimpan.",
        },
        {
          q: "Data apakah yang anda simpan?",
          a: "Nama anda, nombor telefon yang disahkan, e-mel pilihan, keputusan dan kemajuan latihan, supaya latihan dan ganjaran boleh berfungsi. Hiasan bilik dan kebanyakan tetapan paparan kekal pada peranti anda.\n\nUntuk panggilan langsung, penyedia suara kami memproses transkrip ringkas untuk memberi markah latihan. Rakaman audio dimatikan, dan kami menyimpan keputusan, bukan transkrip. Anda boleh membuang nombor yang disahkan pada bila-bila masa.",
        },
        {
          q: "Adakah Drill Mode mengesan penipuan sebenar?",
          a: "Tidak. Drill Mode ialah simulasi latihan, jadi ia tidak mengimbas mesej atau panggilan anda. Semua senario ialah contoh pendidikan rekaan.",
        },
      ],
    },
    {
      title: "Menggunakan Drill Mode",
      items: [
        {
          q: "Adakah saya perlukan akaun?",
          a: "Tidak untuk latihan. Latihan individu dan latihan panggilan, SMS dan e-mel boleh terus digunakan. Latihan langsung ke telefon atau peti masuk sebenar anda memerlukan pengesahan ringkas dahulu.",
        },
        {
          q: "Adakah latihan tiba secara rawak?",
          a: "Belum lagi. Buat masa ini, anda memulakan setiap latihan langsung sendiri. Latihan berjadual atas persetujuan, dengan waktu senyap dan butang jeda, ada dalam pelan kami.",
        },
        {
          q: "Siapakah Pixi?",
          a: "Pixi ialah maskot piksel dan jurulatih penipuan AI kami. Selepas setiap latihan, Pixi menghantar mesej dalam sembang rumah keluarga anda, memberi semangat kepada pemain dan bertanya soalan supaya semua orang berbual. Pixi tidak pernah memalukan sesiapa atau menyebut markah.",
        },
        {
          q: "Apakah itu rumah?",
          a: "Rumah ialah ruang kongsi keluarga anda dalam aplikasi. Setiap ahli mendapat bilik sendiri untuk dihias, ada sembang rumah peribadi, dan anda boleh bermain latihan rumah bersama. Jemput keluarga dengan kod 6 aksara.",
        },
      ],
    },
    {
      title: "Untuk organisasi",
      items: [
        {
          q: "Bolehkah kami membawa Drill Mode ke komuniti, sekolah atau syarikat kami?",
          a: "Ya, kami ingin mendengar daripada anda. Kami mencari rakan projek rintis seperti pusat komuniti, sekolah, pusat penuaan aktif, bank dan syarikat telekomunikasi. Hubungi kami melalui halaman Hubungi.",
        },
        {
          q: "Adakah anda menyediakan laporan untuk program?",
          a: "Papan pemuka tanpa nama untuk program rakan kongsi ada dalam pelan kami, supaya anda boleh melihat kemajuan komuniti anda tanpa melihat keputusan individu sesiapa.",
        },
      ],
    },
  ],
  emergency: {
    title: "Sedang berdepan penipuan sebenar?",
    text: "Berhenti membalas. Jangan pindahkan wang atau kongsi sebarang kod. Hubungi bank anda di nombor yang tertera pada kad anda, dan hubungi Talian Bantuan Antipenipuan di 1799 (atau 999 dalam kecemasan).",
  },
  cta: {
    title: "Masih ada soalan?",
    button: {
      label: "Hubungi kami",
    },
  },
};
