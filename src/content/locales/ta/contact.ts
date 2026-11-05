// DRAFT TRANSLATION (தமிழ் (Tamil)): needs a native speaker's review before launch.
// Same layout as src/content/contact.ts, words only. Anything left out shows in English.
import type { Translation } from "../../../i18n/content";
import type { CONTACT as CONTACT_EN } from "../../contact";

export const CONTACT: Translation<typeof CONTACT_EN> = {
  header: {
    eyebrow: "தொடர்பு",
    title: "பேசலாம்.",
    text: "Drill Mode-ஐ உங்கள் சமூகத்துக்குக் கொண்டுவர, எங்களைப் பற்றி எழுத, அல்லது வணக்கம் சொல்ல விரும்புகிறீர்களா? எங்களுக்குச் செய்தி அனுப்புங்கள், சில வேலை நாட்களுக்குள் பதில் அளிப்போம்.",
  },
  form: {
    name: "உங்கள் பெயர்",
    email: "உங்கள் மின்னஞ்சல்",
    organisation: "நிறுவனம் (விருப்பத்தேர்வு)",
    topic: "எதைப் பற்றியது?",
    message: "செய்தி",
    send: "[ செய்தி அனுப்பு ]",
    sending: "அனுப்புகிறது...",
    success: "செய்தி அனுப்பப்பட்டது! விரைவில் தொடர்புகொள்வோம்.",
    error: "ஏதோ தவறு நடந்தது. தயவுசெய்து நேரடியாக எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்.",
    mailtoNote: "அனுப்பு என்பதை அழுத்தினால், உங்கள் செய்தி தயாராக உள்ள நிலையில் மின்னஞ்சல் செயலி திறக்கும்.",
  },
  topics: [
    "பொதுவான கேள்வி",
    "கூட்டாண்மை அல்லது முன்னோட்டம்",
    "பள்ளிகள் & சமூகக் குழுக்கள்",
    "ஊடகம் & பத்திரிகை",
    "செயலி பற்றிய கருத்து",
  ],
  socialsTitle: "எங்களைப் பின்தொடருங்கள்",
  helplineTitle: "இப்போது உண்மையான மோசடியில் சிக்கியுள்ளீர்களா?",
  cards: [
    {
      title: "மின்னஞ்சல்",
    },
    {
      title: "எங்கள் Telegram பாட்டை முயலுங்கள்",
      text: "அரட்டையில் மோசடிகளைக் கண்டறியப் பயிற்சி செய்யுங்கள்: @drillmodebot",
    },
  ],
};
