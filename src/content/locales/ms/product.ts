// DRAFT TRANSLATION (Bahasa Melayu): needs a native speaker's review before launch.
// Same layout as src/content/product.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { PRODUCT as PRODUCT_EN } from "../../product";

export const PRODUCT: Translation<typeof PRODUCT_EN> = {
  intro: {
    title: "KENALI\nDRILL MODE",
    subtitle: "Satu aplikasi. Semua jenis penipuan. Seisi keluarga.",
    scrollHint: "SKROL UNTUK MENEROKA",
    skip: "LANGKAU ▶▶",
  },
  features: {
    eyebrow: "Ciri utama",
    title: "Semuanya bercabang daripada Pixi.",
    text: "Pixi ialah maskot piksel yang membimbing keluarga anda dalam setiap latihan. Inilah yang boleh dilakukannya.",
    pixiSays: "Hai! Saya Pixi. Skrol ke bawah dan saya tunjukkan.",
    items: [
      {
        tag: "Latihan langsung",
        title: "Panggilan, SMS & e-mel penipuan sebenar",
        text: "Penipu AI daripada organisasi rekaan menelefon nombor anda yang disahkan, menghantar SMS atau e-mel kepada anda, kemudian mendedahkan bahawa ia hanya latihan.",
        points: [
          "Panggilan dalam English, 中文, Bahasa Melayu & தமிழ்",
          "SMS berdasarkan penipuan sebenar dalam buletin polis",
          "Sebut \"berhenti\" bila-bila masa untuk menamatkannya",
        ],
      },
      {
        tag: "Latihan individu",
        title: "Kenal pasti penipuan",
        text: "Kuiz solo pantas dengan 5 hingga 10 mesej, bercampur dengan mesej yang tulen. Ketik tanda bahaya untuk mengetahui sebab setiap satu ialah (atau bukan) penipuan.",
        points: [
          "Ditulis AI berdasarkan corak penipuan sebenar",
          "Disesuaikan dengan umur dan kehidupan harian anda",
          "Mod latihan tidak perlu mendaftar",
        ],
      },
      {
        tag: "Latihan rumah",
        title: "Bermain bersama sekeluarga",
        text: "Setiap orang bermain di telefon sendiri dan bergilir-gilir melindungi isi rumah. Bergabung, atau berlumba untuk merebut mahkota.",
        points: [
          "BERGILIR-GILIR: kalahkan penipu bersama-sama",
          "PERLUMBAAN: markah tertinggi merebut mahkota",
          "Dari nenek hingga cucu, semua umur boleh bermain",
        ],
      },
      {
        tag: "Rumah maya",
        title: "Rumah piksel yang berkembang bersama anda",
        text: "Setiap ahli mendapat bilik sendiri. Namakan bilik, pilih kertas dinding, lantai dan lampu neon, dan isikan dengan perabot dari kedai.",
        points: ["44 perabot piksel", "Dinding, lantai & lampu tersuai", "Bina salasilah keluarga untuk rumah anda"],
      },
      {
        tag: "Jurulatih AI Pixi",
        title: "Perbualan yang bermula dengan sendirinya",
        text: "Selepas setiap latihan, Pixi menghantar mesej dalam sembang rumah, memberi semangat kepada pemain dan bertanya soalan yang membuat keluarga berbincang tentang penipuan.",
        points: [
          "Tidak pernah memalukan, tidak pernah meranking",
          "Menjawab soalan penipuan bila-bila masa",
          "Menunjukkan talian bantuan 1799 apabila perlu",
        ],
      },
      {
        tag: "Ganjaran",
        title: "XP, syiling & Hari Gaji Ahad",
        text: "Naik tahap daripada Pemerhati kepada Penjaga Rumah, kekalkan rentak anda, dapatkan lencana, dan kutip syiling mingguan setiap Hari Gaji Ahad.",
        points: ["Ganjaran harian & rentak", "9 lencana untuk dikumpul", "Belanjakan syiling untuk perabot"],
      },
      {
        tag: "Dibina untuk Singapura",
        title: "Empat bahasa, semua umur",
        text: "Seluruh aplikasi berfungsi dalam bahasa Inggeris, Cina, Melayu dan Tamil, termasuk panggilan, SMS dan e-mel sebenar. Teks lebih besar, kontras tinggi dan gerakan dikurangkan hanya satu ketikan.",
        points: ["EN · 中文 · BM · தமிழ்", "Tetapan kebolehcapaian terbina dalam", "Pasang pada skrin utama anda"],
      },
      {
        tag: "Selamat dari awal",
        title: "Persetujuan dahulu, sentiasa",
        text: "Tiada apa-apa bermula tanpa persetujuan yang direkodkan, setiap latihan mendedahkan dirinya, dan berhenti tidak pernah dikira sebagai kalah.",
        points: [
          "Organisasi rekaan sahaja",
          "Tiada pemalsuan ID pemanggil",
          "Kami tidak pernah meminta OTP atau kata laluan sebenar",
        ],
      },
    ],
  },
  drills: {
    eyebrow: "Latihan",
    title: "Lihat setiap latihan dengan lebih dekat.",
    text: "Versi latihan berjalan sepenuhnya dalam aplikasi. Versi langsung sampai ke telefon atau peti masuk sebenar anda, tetapi hanya selepas anda mengesahkan ia milik anda.",
    tabs: [
      {
        label: "Panggilan penipuan",
        title: "Latihan panggilan penipuan",
        summary: "Telefon anda berdering. \"Pegawai Tan dari Pejabat Amanah Awam\" berkata akaun bank anda dikaitkan dengan kes pengubahan wang haram, dan tekanan terus meningkat.",
        steps: [
          "Ketik \"Telefon saya sekarang\". Pemanggil AI akan menelefon nombor anda yang disahkan.",
          "Pemanggil meningkatkan desakan: mula-mula berwibawa dan tenang, kemudian mendesak, kemudian menekan.",
          "Letak telefon, tanya \"adakah ini latihan?\", atau sebut \"berhenti\" untuk menamatkannya bila-bila masa.",
          "Pendedahan tetap memberitahu anda bahawa ia latihan. Kemudian Pixi membawa anda meneliti tanda bahaya.",
        ],
        redFlags: ["Penyamaran pegawai", "Permintaan OTP", "Pindahan ke \"akaun selamat\"", "Desakan palsu"],
      },
      {
        label: "SMS penipuan",
        title: "Latihan SMS penipuan",
        summary: "SMS sebenar, ditulis berdasarkan corak dalam buletin penipuan polis Singapura. Balas, dan penipu akan menjawab dalam watak untuk beberapa mesej sebelum pendedahan.",
        steps: [
          "SMS umpan tiba di telefon anda yang disahkan. Ia tidak pernah mengandungi pautan yang berfungsi.",
          "Laporkan, abaikan, atau balas dan lihat ke mana penipu membawa anda.",
          "SMS pendedahan sentiasa menyusul, walaupun anda tidak membalas.",
          "Keputusan dan tanda bahaya anda dipaparkan dalam aplikasi.",
        ],
        redFlags: ["Penghantar tidak dikenali", "Helah bayaran kecil", "Pautan mencurigakan", "Desakan tarikh akhir"],
      },
      {
        label: "E-mel pancingan data",
        title: "Latihan e-mel pancingan data",
        summary: "E-mel pancingan data yang meyakinkan tiba di peti masuk yang telah anda buktikan milik anda. Periksa penghantar, tuding pada pautan, dan buat keputusan.",
        steps: [
          "Sahkan peti masuk anda dengan pautan sekali guna.",
          "Latihan pancingan data tiba, dengan ganjaran palsu, invois palsu atau log masuk palsu.",
          "Laporkan, atau ikut umpan ke halaman pendedahan yang selamat.",
          "E-mel susulan keselamatan menerangkan perkara yang perlu diperhatikan lain kali.",
        ],
        redFlags: [
          "Domain tiruan",
          "Terlalu baik untuk jadi kenyataan",
          "Kecurian maklumat log masuk",
          "Lampiran berbahaya",
        ],
      },
      {
        label: "Latihan individu",
        title: "Latihan individu",
        summary: "Pusingan solo kenal pasti penipuan. Sesetengah mesej ialah penipuan dan sesetengahnya tulen, kerana mengetahui apa yang selamat juga penting.",
        steps: [
          "Terima 5 hingga 10 mesej: SMS, e-mel dan pemberitahuan aplikasi.",
          "Pilih tindakan anda: lapor, tanda selamat, klik, atau tanya keluarga dahulu.",
          "Ketik petunjuk yang diserlahkan untuk melihat penjelasan setiap tanda bahaya.",
          "Dapatkan XP. Bertanya keluarga dahulu sentiasa mendapat sebahagian markah.",
        ],
        redFlags: ["Desakan", "Penyamaran", "Terlalu baik untuk jadi kenyataan", "Permintaan kod"],
      },
      {
        label: "Latihan rumah",
        title: "Latihan rumah",
        summary: "Seisi keluarga bermain serentak, masing-masing di telefon sendiri. Bergilir-gilir mempertahankan rumah, atau berlumba merebut mahkota.",
        steps: [
          "Cipta atau sertai rumah dengan kod 6 aksara.",
          "Pilih BERGILIR-GILIR (kerjasama) atau PERLUMBAAN (bersemuka).",
          "Semua orang menjawab senario penipuan yang sama.",
          "Pemenang merebut mahkota, dan Pixi menghidupkan sembang keluarga.",
        ],
        redFlags: ["Menyamar sebagai keluarga", "Invois palsu", "Penipuan pekerjaan", "Pengambilalihan akaun"],
      },
    ],
  },
  safety: {
    eyebrow: "Selamat dari awal",
    title: "Cukup realistik untuk berlatih. Cukup selamat untuk dipercayai.",
    items: [
      {
        title: "Atas persetujuan sahaja",
        text: "Tiada apa-apa bermula tanpa persetujuan yang direkodkan.",
      },
      {
        title: "Sentiasa didedahkan",
        text: "Setiap latihan berakhir dengan memberitahu anda bahawa ia latihan.",
      },
      {
        title: "Tidak dihukum kerana berhenti",
        text: "Menarik diri dikira neutral, bukan kalah.",
      },
      {
        title: "Jalan keluar ketika tertekan",
        text: "Satu ketikan, atau perkataan \"berhenti\", menamatkan sebarang latihan serta-merta.",
      },
      {
        title: "Institusi rekaan sahaja",
        text: "Latihan tidak pernah berpura-pura menjadi bank atau agensi sebenar.",
      },
      {
        title: "Tiada pemalsuan ID pemanggil",
        text: "Ia menyalahi undang-undang di Singapura, dan kami tidak melakukannya.",
      },
    ],
  },
  cta: {
    title: "Lihat sendiri.",
    text: "Jawab panggilan penipuan atau kenal pasti penipuan dalam demo dua minit, terus dalam pelayar anda.",
    button: {
      label: "[ CUBA DEMO ]",
    },
  },
};
