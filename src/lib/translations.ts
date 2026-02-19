export type Lang = "cs" | "en";

// ---------------------------------------------------------------------------
// Location page – UI labels
// ---------------------------------------------------------------------------
export const locationPageTranslations = {
  cs: {
    address: "Adresa",
    phone: "Mobil",
    openingHours: "Otevírací doba",
    walkIn: "Bez objednání – Walk ins",
    bookOnline: "Rezervovat online",
    byAppointment: "Pouze na rezervaci",
    contact: "Kontakt",
    aboutHeading:
      "Záleží nám na\u00a0tom, abyste se u\u00a0nás cítili dobře",
    aboutText:
      "Stačí k nám dorazit a svěřit se do rukou našich profesionálních barberů, pod vedením majitele sítě Adriana Křižana, který všechny nové příchozí nejprve zaučí, než je pustí do provozu a tím pro Vás zajišťujeme tu nejlepší možnou péči o Vaše vlasy a vousy.",
  },
  en: {
    address: "Address",
    phone: "Phone",
    openingHours: "Opening Hours",
    walkIn: "Walk-ins Welcome",
    bookOnline: "Book Online",
    byAppointment: "By Appointment Only",
    contact: "Contact",
    aboutHeading: "Your comfort is our priority",
    aboutText:
      "Just walk in and put yourself in the hands of our professional barbers. Every new team member is personally trained by AK BARBERS founder Adrian Křižan before they ever pick up the clippers \u2014 that\u2019s how we guarantee the best possible care for your hair and beard.",
  },
} as const;

// ---------------------------------------------------------------------------
// Service name + description translations  (keyed by Czech name)
// ---------------------------------------------------------------------------
export const serviceTranslations: Record<
  string,
  { name: string; description: string }
> = {
  "Klasické pánské stříhání": {
    name: "Classic Haircut",
    description:
      "Consultation, precision cut tailored to you with clippers or scissors, finishing touches and final styling.",
  },
  "Skin Fade/dlouhé vlasy": {
    name: "Skin Fade / Long Hair",
    description:
      "Skin Fade \u2014 Consultation (low, mid, or high fade), clipper cut from 0mm, shaver detailing, seamless blending, finishing touches and final styling.",
  },
  "Senior pánsky střih": {
    name: "Senior Haircut",
    description: "Haircut for gentlemen aged 65 and over.",
  },
  "Dětský střih": {
    name: "Kids\u2019 Haircut",
    description:
      "Haircuts for young men aged 1 to 15. Classic cut, blow-dry and styling. We\u2019re always happy to advise.",
  },
  "Úprava vousů": {
    name: "Beard Grooming",
    description:
      "Consultation, beard shaping with clippers and scissors, straight-razor finish on request, premium skincare application and final touch-up.",
  },
  "Střih vlasů a úprava vousů": {
    name: "Haircut & Beard Grooming",
    description:
      "Consultation, classic clipper cut, beard shaping, premium beard care application, finishing touches and final styling of hair and beard.",
  },
};

/**
 * Translate a service object (name + description) into English.
 * Handles the discount suffix ("Sleva 25% ...") and fade surcharge note.
 */
export function translateService(
  service: { name: string; description?: string },
  lang: Lang,
): { name: string; description?: string } {
  if (lang !== "en") return service;

  const t = serviceTranslations[service.name];
  if (!t) return service;

  let description: string = t.description;

  // Praha 1 discount suffix
  if (service.description?.includes("Sleva 25%")) {
    const match = service.description.match(/–\s*(\d+)\s*Kč/);
    const price = match ? match[1] : "399";
    description += ` 25% discount for Police, Fire & Rescue, EMS and ISIC holders \u2014 ${price} CZK.`;
  }

  // Fade surcharge suffix (Praha 6 kids)
  if (
    service.description?.includes("Skin Fade") &&
    service.description.includes("+ 100 Kč")
  ) {
    description +=
      " Skin Fade / Low Fade / Crop Fade / Buzz Cut + 100 CZK.";
  }

  return { name: t.name, description };
}

// ---------------------------------------------------------------------------
// Day abbreviation translation
// ---------------------------------------------------------------------------
export function translateDays(daysStr: string, lang: Lang): string {
  if (lang === "cs") return daysStr;

  return daysStr
    .replace(/Pá/g, "Fri")
    .replace(/Po/g, "Mon")
    .replace(/Út/g, "Tue")
    .replace(/St/g, "Wed")
    .replace(/Čt/g, "Thu")
    .replace(/So/g, "Sat")
    .replace(/Ne/g, "Sun");
}

// ---------------------------------------------------------------------------
// Career & Academy
// ---------------------------------------------------------------------------
export const careerAcademyTranslations = {
  cs: {
    careerHeading1: "Kariéra",
    careerHeading2: "v AK BARBERS",
    careerJoinLink: "Připojte se k našemu týmu",
    careerDescription:
      "a staňte se součástí rodiny AK BARBERS! Hledáme nadšené a šikovné barbery, ať už zkušené profesionály nebo začátečníky, kteří se chtějí učit a rozvíjet.",
    careerCta: "Pracovní pozice",
    academyHeading1: "AK BARBERS",
    academyHeading2: "Akademie",
    academyLink: "Využijte jedinečnou příležitost",
    academyDescription:
      "vstoupit do světa barberingu prostřednictvím profesionálního kurzu, který pro tebe připravila AK Barbers Academy pod vedením našich špičkových lektorů a zkušených barberů z AK Barbers.",
    academyCta: "Více info",
  },
  en: {
    careerHeading1: "Careers",
    careerHeading2: "at AK BARBERS",
    careerJoinLink: "Join our team",
    careerDescription:
      "and become part of the AK BARBERS family! We\u2019re looking for passionate, skilled barbers \u2014 whether you\u2019re a seasoned pro or just starting out and eager to learn and grow.",
    careerCta: "Open Positions",
    academyHeading1: "AK BARBERS",
    academyHeading2: "Academy",
    academyLink: "Seize a unique opportunity",
    academyDescription:
      "to enter the world of barbering through a professional course designed by AK Barbers Academy, led by our top instructors and experienced barbers from AK Barbers.",
    academyCta: "Learn More",
  },
} as const;

// ---------------------------------------------------------------------------
// Vouchers
// ---------------------------------------------------------------------------
export const vouchersTranslations = {
  cs: {
    heading: "Dárkové poukázky",
    descriptionWithUrl:
      "Potěšte přítele nebo někoho blízkého. Můžete zakoupit u nás v salonu nebo ",
    online: "online",
    buyOnline: "Koupit online",
    descriptionWithoutUrl:
      "Potěšte přítele nebo někoho blízkého. Dárkové poukázky je možné zakoupit v salonu nebo online \u2014 ",
    selectBranch: "vyberte si konkrétní pobočku pro více informací.",
  },
  en: {
    heading: "Gift Vouchers",
    descriptionWithUrl:
      "Treat a friend or someone special. Available to purchase in-store or ",
    online: "online",
    buyOnline: "Buy Online",
    descriptionWithoutUrl:
      "Treat a friend or someone special. Gift vouchers are available to purchase in-store or online \u2014 ",
    selectBranch: "select a specific branch for more info.",
  },
} as const;

// ---------------------------------------------------------------------------
// Contact form
// ---------------------------------------------------------------------------
export const contactTranslations = {
  cs: {
    heading1: "Máte dotazy?",
    heading2: "Napište nám",
    description:
      "Všechny naše pobočky fungují jako walk-in barbershopy, takže se nemusíte objednávat dopředu. Stačí k nám dorazit a svěřit se do rukou našich profesionálních barberů pod vedením majitele sítě Adriana Křižana.",
    tagline1: "Zajišťujeme tu nejlepší možnou",
    tagline2: "péči o Vaše vlasy a vousy.",
    namePlaceholder: "Jméno, příjmení *",
    emailPlaceholder: "Email *",
    phonePlaceholder: "Telefon",
    messagePlaceholder: "Zpráva *",
    consentPrefix: "Souhlasím se",
    consentLink: "zpracováním osobních údajů",
    submit: "Odeslat",
    submitting: "Odesílání...",
    success: "Děkujeme za zprávu! Ozveme se vám co nejdříve.",
    error: "Něco se pokazilo. Zkuste to znovu.",
  },
  en: {
    heading1: "Got Questions?",
    heading2: "Get in Touch",
    description:
      "All our barbershops are walk-in friendly, so there\u2019s no need to book ahead. Just stop by and let our professional barbers, led by network owner Adrian K\u0159i\u017ean, take care of you.",
    tagline1: "We guarantee the best possible",
    tagline2: "care for your hair and beard.",
    namePlaceholder: "Full name *",
    emailPlaceholder: "Email *",
    phonePlaceholder: "Phone",
    messagePlaceholder: "Message *",
    consentPrefix: "I agree to the",
    consentLink: "processing of personal data",
    submit: "Send",
    submitting: "Sending...",
    success:
      "Thanks for your message! We\u2019ll get back to you as soon as possible.",
    error: "Something went wrong. Please try again.",
  },
} as const;
