// DRAFT TRANSLATION (Bahasa Melayu): needs a native speaker's review before launch.
// Same layout as src/content/demo.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { DEMO as DEMO_EN, QUIZ as QUIZ_EN, CALL as CALL_EN } from "../../demo";

export const DEMO: Translation<typeof DEMO_EN> = {
  header: {
    eyebrow: "Cuba demo",
    title: "Cuba satu latihan.",
    text: "Dua latihan pantas, terus dari aplikasi. Tiada pendaftaran, dan tiada apa-apa dihantar ke telefon anda: semuanya berlaku di halaman ini.",
  },
  modes: [
    {
      title: "Kenal pasti penipuan",
      text: "Lima mesej. Ada yang penipuan, ada yang benar. Apa yang akan anda lakukan?",
      time: "≈ 2 MINIT",
    },
    {
      title: "Jawab panggilan penipuan",
      text: "Seorang \"pegawai\" berkata akaun bank anda sedang disiasat. Bolehkah anda kekal tenang?",
      time: "≈ 2 MINIT",
    },
  ],
  finish: {
    title: "Mahu pengalaman penuh?",
    text: "Dalam aplikasi, panggilan ialah suara AI langsung di telefon anda sendiri, SMS sampai ke peti masuk sebenar anda, dan seisi keluarga boleh bermain bersama.",
    buttons: [{
        label: "Lihat produk",
      }, {
        label: "Bawa ke komuniti anda",
      }],
  },
};

export const QUIZ: Translation<typeof QUIZ_EN> = {
  intro: "Baca setiap mesej, kemudian pilih tindakan anda. Selepas itu, ketik petunjuk yang diserlahkan untuk melihat sebabnya.",
  cautiousAction: "TANYA KELUARGA DAHULU",
  results: {
    correctScam: "TANGKAPAN HEBAT!",
    correctSafe: "TEPAT SEKALI!",
    cautious: "NALURI YANG BAIK",
    wrongScam: "TERPEDAYA",
    wrongSafe: "AMARAN PALSU",
    cautiousNote: "Menyemak dengan orang yang anda percayai tidak pernah salah.",
  },
  pixiSummary: {
    high: "Wah, anda memang berbakat. Keluarga anda bertuah ada anda yang berjaga-jaga!",
    mid: "Boleh tahan! Ada beberapa yang licik.",
    low: "Itu memang sukar. Sebab itulah kita berlatih. Mahu cuba lagi?",
  },
  scenarios: [
    {
      senderNote: "Nama penghantar dipalsukan. Bank rasmi tidak pernah mengunci akaun melalui pautan SMS.",
      message: "Akaun bank anda telah dikunci kerana aktiviti yang mencurigakan. Sahkan identiti anda dalam masa 15 minit untuk mengelakkan penggantungan: http://secure-bank-verify.example",
      correctAction: "LAPOR SEBAGAI PENIPUAN",
      actions: ["LAPOR SEBAGAI PENIPUAN", "KLIK PAUTAN", "BALAS DENGAN NRIC", "TANYA KELUARGA DAHULU"],
      clues: [
        {
          label: "Desakan",
          text: "dalam masa 15 minit",
          explanation: "Penipu mendesak anda bertindak cepat supaya anda tiada masa untuk berfikir.",
        },
        {
          label: "URL mencurigakan",
          explanation: "Bukan domain rasmi bank. Bank sebenar menggunakan domain mereka sendiri yang disahkan.",
        },
        {
          label: "Taktik Menakutkan",
          text: "akaun bank anda telah dikunci",
          explanation: "Ugutan untuk mengunci akaun anda ialah taktik menakutkan yang biasa untuk menimbulkan panik.",
        },
        {
          label: "Permintaan Identiti",
          text: "Sahkan identiti anda",
          explanation: "Bank tidak pernah meminta anda mengesahkan identiti melalui pautan SMS.",
        },
      ],
      explanation: "Ini SMS pancingan data. Penipu mencetuskan panik dengan mendakwa akaun bank anda dikunci. Sentiasa gunakan aplikasi bank rasmi atau hubungi talian rasmi, dan jangan sekali-kali mengikuti pautan dalam SMS.",
    },
    {
      sender: "Bank TriStar",
      senderNote: "ID penghantar berdaftar.",
      message: "Bank TriStar: OTP anda untuk log masuk yang baru anda mulakan pada aplikasi TriStar ialah 482913. Sah selama 5 minit. Jangan kongsi OTP ini dengan sesiapa, termasuk kakitangan bank.",
      correctAction: "TANDA SEBAGAI SELAMAT",
      actions: ["TANDA SEBAGAI SELAMAT", "LAPOR SEBAGAI PENIPUAN", "PADAM SEGERA", "TANYA KELUARGA DAHULU"],
      clues: [
        {
          label: "Amaran Keselamatan",
          text: "Jangan kongsi OTP ini",
          explanation: "Bank sebenar mengingatkan anda supaya jangan berkongsi OTP. Penipu pula meminta anda menghantarnya kepada mereka.",
        },
        {
          label: "Saluran Rasmi",
          text: "pada aplikasi TriStar",
          explanation: "Ia sepadan dengan log masuk yang anda sendiri mulakan dalam aplikasi rasmi.",
        },
        {
          label: "Mesej yang Dijangka",
          text: "log masuk yang baru anda mulakan",
          explanation: "Anda hanya menerima OTP apabila anda sendiri memulakan log masuk. Tiada pautan, tiada nombor telefon dan tiada permintaan bayaran.",
        },
      ],
      explanation: "Ini OTP tulen untuk log masuk yang baru anda mulakan. Ia tiada pautan dan mengingatkan anda supaya tidak berkongsinya. Taip sendiri dalam aplikasi, dan jangan berikan kepada sesiapa yang memintanya.",
    },
    {
      sender: "Pejabat Cukai Negara",
      senderNote: "Bukan domain rasmi kerajaan. Bayaran balik cukai dibayar secara automatik, dan anda tidak pernah diminta butiran kad.",
      subject: "Anda layak menerima bayaran balik cukai $482.60",
      message: "Rekod kami menunjukkan anda terlebih bayar cukai tahun ini. Untuk menerima bayaran balik sebanyak $482.60, sahkan nombor kad dan CVV anda dalam masa 48 jam. Bayaran balik yang tidak dituntut akan dilucuthakkan.",
      correctAction: "LAPOR SEBAGAI PENIPUAN",
      actions: ["LAPOR SEBAGAI PENIPUAN", "TUNTUT BAYARAN BALIK", "MASUKKAN BUTIRAN KAD", "BALAS E-MEL"],
      clues: [
        {
          label: "Permintaan Butiran Kad",
          text: "nombor kad dan CVV",
          explanation: "Tiada agensi memerlukan CVV anda untuk membayar anda. Beginilah cara penipu mencuri kad anda.",
        },
        {
          label: "Terlalu Baik untuk Jadi Kenyataan",
          text: "bayaran balik sebanyak $482.60",
          explanation: "Wang yang tidak dijangka digunakan untuk membuat anda teruja dan leka.",
        },
        {
          label: "Desakan",
          text: "dalam masa 48 jam",
          explanation: "Tarikh akhir yang direka-reka mendesak anda bertindak tanpa berfikir.",
        },
        {
          label: "Domain Mencurigakan",
          explanation: "E-mel kerajaan datang daripada domain rasmi kerajaan, bukan domain tiruan.",
        },
      ],
      explanation: "Ini e-mel pancingan data bayaran balik cukai palsu. Bayaran balik sebenar dimasukkan ke akaun bank berdaftar anda secara automatik. Jangan sekali-kali masukkan butiran kad untuk \"menerima\" wang.",
    },
    {
      sender: "Klinik Keluarga Harbourview",
      senderNote: "Domain penghantar sepadan dengan laman web rasmi klinik.",
      subject: "Peringatan Temu Janji: Sel 14 Okt, 10:30 pagi",
      message: "Hai, ini peringatan untuk temu janji anda pada hari Selasa 14 Okt jam 10:30 pagi. Tiada bayaran diperlukan sekarang. Untuk menukar tarikh, hubungi nombor di laman web rasmi kami atau gunakan aplikasi klinik.",
      correctAction: "TANDA SEBAGAI SELAMAT",
      actions: ["TANDA SEBAGAI SELAMAT", "LAPOR SEBAGAI PENIPUAN", "PADAM SEGERA", "TANYA KELUARGA DAHULU"],
      clues: [
        {
          label: "Tiada Bayaran",
          text: "Tiada bayaran diperlukan sekarang",
          explanation: "E-mel ini tidak meminta wang atau maklumat log masuk.",
        },
        {
          label: "Domain Sah",
          explanation: "Domain penghantar sepadan dengan domain rasmi organisasi itu.",
        },
        {
          label: "Saluran Rasmi",
          text: "gunakan aplikasi klinik",
          explanation: "Mesej yang sah membawa anda ke saluran rasmi, bukan pautan rawak.",
        },
      ],
      explanation: "Ini peringatan temu janji biasa. Ia tidak meminta apa-apa, tiada pautan mencurigakan, dan membawa anda ke laman web serta aplikasi klinik itu sendiri.",
    },
    {
      senderNote: "Nombor tidak dikenali mendakwa sebagai orang yang anda kenali. Hubungi nombor lama mereka untuk menyemak.",
      message: "Hai, ini saya. Telefon saya terjatuh, jadi ini nombor baharu saya. Boleh tolong bayarkan bil? Saya perlukan $950 segera, esok saya bayar balik. Tolong jangan telefon, mikrofon saya rosak.",
      correctAction: "LAPOR SEBAGAI PENIPUAN",
      actions: ["LAPOR SEBAGAI PENIPUAN", "PINDAHKAN WANG", "SIMPAN NOMBOR BAHARU", "TANYA KELUARGA DAHULU"],
      clues: [
        {
          label: "Menyamar sebagai Keluarga",
          text: "ini nombor baharu saya",
          explanation: "Penipu menyamar sebagai ahli keluarga atau rakan yang menukar nombor.",
        },
        {
          label: "Permintaan Wang",
          text: "Saya perlukan $950",
          explanation: "Permintaan wang secara tiba-tiba daripada \"nombor baharu\" ialah tanda bahaya besar.",
        },
        {
          label: "Desakan",
          text: "segera",
          explanation: "Penipu mendesak anda bertindak cepat supaya anda tiada masa untuk berfikir.",
        },
        {
          label: "Mengelak Panggilan",
          text: "Tolong jangan telefon",
          explanation: "Mereka mengelak panggilan kerana suara mereka akan mendedahkan penipuan itu.",
        },
      ],
      explanation: "Ini penipuan penyamaran. Sebelum menghantar wang, hubungi orang itu di nombor yang sudah anda simpan. Keluarga sebenar tidak kisah anda menyemak.",
    },
  ],
};

export const CALL: Translation<typeof CALL_EN> = {
  caller: {
    name: "PEMANGGIL TIDAK DIKENALI",
  },
  incoming: {
    title: "PANGGILAN MASUK",
    answer: "JAWAB",
    decline: "TOLAK",
    heading: "TELEFON ANDA BERDERING…",
    text: "Nombor tidak dikenali sedang menelefon. Jawab untuk memulakan latihan, kemudian pilih cara membalas semasa pemanggil bercakap. Anda boleh meletakkan telefon pada bila-bila masa. Ketik ikon pembesar suara untuk mendengar pemanggil.",
  },
  replyHeading: "BAGAIMANA ANDA MEMBALAS?",
  hangUp: "[ LETAK TELEFON ]",
  stop: "INI TERLALU BERAT, HENTIKAN LATIHAN",
  tapHint: "KETIK TEKS MERAH UNTUK LIHAT SEBABNYA",
  flagsHeading: "Tanda bahaya dalam panggilan ini",
  flags: {
    official_impersonation: {
      name: "PENYAMARAN PEGAWAI",
      explanation: "Pemanggil yang mengaku sebagai pegawai bukan bukti identiti. Tamatkan panggilan dan hubungi organisasi itu di nombor yang anda cari sendiri.",
    },
    fear_tactic: {
      name: "TAKTIK MENAKUTKAN",
      explanation: "Mengatakan anda terlibat dalam jenayah bertujuan membuat anda panik, supaya anda tidak dapat berfikir dengan jelas.",
    },
    urgency: {
      name: "DESAKAN PALSU",
      explanation: "Desakan untuk bertindak segera menghalang anda daripada menyemak cerita itu dengan orang yang dipercayai atau saluran rasmi.",
    },
    transfer_pressure: {
      name: "DESAKAN PINDAHAN WANG",
      explanation: "Arahan segera untuk memindahkan wang ke \"akaun selamat\" ialah corak penipuan yang biasa. Bank dan polis tidak pernah melindungi wang dengan cara ini.",
    },
    secrecy: {
      name: "KERAHSIAAN",
      explanation: "Menyuruh anda tidak memberitahu sesiapa memutuskan anda daripada orang yang paling mungkin mengesan penipuan itu.",
    },
    otp_request: {
      name: "PERMINTAAN OTP / RAHSIA",
      explanation: "Kakitangan sebenar tidak akan meminta anda membacakan OTP, PIN, kata laluan atau nombor kad penuh.",
    },
  },
  steps: [
    {
      line: "Helo, saya Pegawai Tan dari Pejabat Amanah Awam. Adakah saya bercakap dengan pemegang akaun?",
      flags: [
        {
          phrase: "Pegawai Tan dari Pejabat Amanah Awam",
        },
      ],
      replies: [
        {
          label: "Ya, saya. Ini tentang apa?",
        },
        {
          label: "Bagaimana anda dapat nombor saya?",
        },
      ],
    },
    {
      line: "Kami ada butiran anda kerana siasatan yang sedang berjalan. Perkara ini sangat serius, jadi sila dengar baik-baik.",
      flags: [
        {
          phrase: "siasatan yang sedang berjalan",
        },
      ],
      replies: [
        {
          label: "Baik... siasatan apa?",
        },
        {
          label: "Saya lebih suka semak sendiri. Saya akan telefon pejabat anda terus.",
        },
      ],
    },
    {
      line: "Begini, akaun bank anda dikaitkan dengan kes pengubahan wang haram. Kita perlu bertindak hari ini, sebelum ia dibekukan.",
      flags: [
        {
          phrase: "kes pengubahan wang haram",
        },
        {
          phrase: "Kita perlu bertindak hari ini",
        },
      ],
      replies: [
        {
          label: "Apa? Saya tidak buat apa-apa salah!",
        },
        {
          label: "Biar saya telefon semula melalui talian rasmi anda.",
        },
      ],
    },
    {
      line: "Baik, dengar. Untuk melindungi simpanan anda, kami akan pindahkan wang itu ke akaun selamat sekarang juga. Jangan beritahu sesiapa, ia boleh menjejaskan siasatan.",
      flags: [
        {
          phrase: "akaun selamat",
        },
        {
          phrase: "sekarang juga",
        },
        {
          phrase: "Jangan beritahu sesiapa",
        },
      ],
      replies: [
        {
          label: "Baik... bagaimana saya lakukannya?",
        },
        {
          label: "Bank tidak buat begitu. Saya akan semak dengan keluarga saya dahulu.",
        },
      ],
    },
    {
      line: "Saya akan hantar kod sekali guna ke telefon anda sekarang. Bacakan kod itu kepada saya supaya saya boleh sahkan ini memang anda.",
      flags: [
        {
          phrase: "Bacakan kod itu kepada saya",
        },
      ],
      replies: [
        {
          label: "Err, baik. Ia tertulis 4... 8...",
        },
        {
          label: "Tidak. Saya tidak pernah berkongsi OTP saya dengan sesiapa.",
        },
      ],
    },
  ],
  reveal: "Berhenti di situ. Ini latihan Drill Mode. Anda selamat, dan tiada masalah dengan akaun anda. Dalam penipuan sebenar, inilah saatnya anda akan kehilangan wang. Syabas kerana berlatih.",
  outcomes: {
    hung_up: {
      title: "PENIPU TEWAS!",
      text: "Anda meletakkan telefon. Itulah langkah terbaik menghadapi panggilan penipuan.",
    },
    caught_flag: {
      title: "ANDA BERJAYA MENGESANNYA!",
      text: "Anda enggan mengikut rentak dan memilih untuk menyemak melalui saluran rasmi. Itulah refleks yang kita bina.",
    },
    complied: {
      title: "TERPEDAYA, DAN ITU TIDAK MENGAPA",
      text: "Dalam penipuan sebenar, membacakan kod itu ialah saat anda kehilangan wang. Kini anda tahu bagaimana bunyinya.",
    },
    stopped: {
      title: "LATIHAN DIHENTIKAN",
      text: "Berhenti tidak pernah dikira sebagai kalah. Latihan sepatutnya mencabar, bukan menyusahkan hati.",
    },
    declined: {
      title: "PANGGILAN DITOLAK",
      text: "Tidak menjawab nombor tidak dikenali ialah pilihan yang sangat baik! Masih mahu berlatih?",
    },
  },
  pixiChat: {
    title: "SEMBANG RUMAH",
    hung_up: {
      post: "Anda meletakkan telefon sebelum pegawai palsu itu sempat berbuat apa-apa. Syabas 👏",
      question: "Apakah yang mula-mula membuat anda curiga?",
      replies: [
        {
          label: "\"Pejabat Amanah Awam\"",
          reply: "Mata yang tajam. Sesiapa sahaja boleh mengaku ada jawatan di telefon. Jika tidak pasti, letak telefon dan cari nombor rasmi sendiri.",
        },
        {
          label: "Ugutan pengubahan wang haram",
          reply: "Tepat sekali. Ketakutan ialah alat kegemaran penipu, kerana otak yang panik melangkau semakan.",
        },
        {
          label: "Saya tidak pernah percaya pemanggil tidak dikenali",
          reply: "Sejujurnya, itu tabiat yang hebat. Agensi sebenar sentiasa boleh menghubungi anda dengan cara lain.",
        },
      ],
    },
    caught_flag: {
      post: "Anda menyemak dan tidak panik. Itulah refleks yang kita bina 💪",
      question: "Pernahkah anda menerima panggilan seperti ini yang sebenar?",
      replies: [
        {
          label: "Ya, pernah",
          reply: "Anda tidak keseorangan, hampir semua orang pernah. Berkongsi kisah dengan keluarga membantu mereka mengesan yang seterusnya.",
        },
        {
          label: "Belum lagi",
          reply: "Kini anda akan mengenalinya jika ia berlaku. Ayat \"akaun selamat\" itulah petandanya.",
        },
        {
          label: "Ahli keluarga saya pernah",
          reply: "Tanya mereka apa yang dikatakan pemanggil. Berbincang bersama ialah latihan terbaik.",
        },
      ],
    },
    complied: {
      post: "Pegawai palsu itu mendapat kod kali ini. Ia boleh berlaku kepada sesiapa, dan kini anda tahu bagaimana bunyinya 😅",
      question: "Mahu tip ringkas untuk lain kali?",
      replies: [
        {
          label: "Ya, boleh",
          reply: "Jika sesiapa meminta anda membacakan kod, letak telefon. Tiada bank atau agensi sebenar akan memintanya.",
        },
        {
          label: "Apa lagi yang perlu saya perhatikan?",
          reply: "Pegawai di telefon, \"akaun selamat\", disuruh merahsiakannya. Mana-mana satu daripadanya bermakna letak telefon dan semak.",
        },
      ],
    },
    stopped: {
      post: "Berehat sebentar sentiasa tidak mengapa. Kembalilah bila-bila masa anda sedia 🙂",
    },
  },
};
