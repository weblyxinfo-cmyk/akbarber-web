export type Lang = "cs" | "en" | "sk";

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
      "Přijďte bez objednání a dopřejte si péči, kterou poznáte na první pohled. V AK Barbers pracujeme podle přísných standardů kvality, díky kterým držíme špičkový výsledek na každé pobočce. Každý nový barber prochází profesionálním zaškolením a až poté nastupuje do provozu. Preciznost, čistota a detail jsou pro nás samozřejmostí.",
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
      "Walk right in and treat yourself to care you\u2019ll notice from the very first cut. At AK Barbers we follow strict quality standards that guarantee top results at every location. Every new barber completes professional training before they ever step behind the chair. Precision, cleanliness and attention to detail are a given.",
  },
  sk: {
    address: "Adresa",
    phone: "Mobil",
    openingHours: "Otváracie hodiny",
    walkIn: "Bez objednávky \u2013 Walk ins",
    bookOnline: "Rezervova\u0165 online",
    byAppointment: "Len na rezerv\u00e1ciu",
    contact: "Kontakt",
    aboutHeading: "Z\u00e1le\u017e\u00ed n\u00e1m na\u00a0tom, aby ste sa u\u00a0n\u00e1s c\u00edtili dobre",
    aboutText:
      "Pr\u00ed\u010fte bez objedn\u00e1vky a doprajte si starostlivos\u0165, ktor\u00fa spozn\u00e1te na prv\u00fd poh\u013ead. V AK Barbers pracujeme pod\u013ea pr\u00edsnych \u0161tandardov kvality, v\u010faka ktor\u00fdm dr\u017e\u00edme \u0161pi\u010dkov\u00fd v\u00fdsledok na ka\u017edej pobo\u010dke. Ka\u017ed\u00fd nov\u00fd barber prech\u00e1dza profesion\u00e1lnym za\u0161kolen\u00edm a a\u017e potom nastupuje do prev\u00e1dzky. Prec\u00edznost, \u010distota a detail s\u00fa pre n\u00e1s samozrejmos\u0165ou.",
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
  if (lang === "cs" || lang === "sk") return daysStr;

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
  sk: {
    careerHeading1: "Kari\u00e9ra",
    careerHeading2: "v AK BARBERS",
    careerJoinLink: "Pridajte sa k n\u00e1\u0161mu t\u00edmu",
    careerDescription:
      "a sta\u0148te sa s\u00fa\u010das\u0165ou rodiny AK BARBERS! H\u013ead\u00e1me nad\u0161en\u00fdch a \u0161ikovn\u00fdch barberov, \u010di u\u017e sk\u00fasen\u00fdch profesion\u00e1lov alebo za\u010diato\u010dn\u00edkov, ktor\u00ed sa chc\u00fa u\u010di\u0165 a rozv\u00edja\u0165.",
    careerCta: "Pracovn\u00e9 poz\u00edcie",
    academyHeading1: "AK BARBERS",
    academyHeading2: "Akad\u00e9mia",
    academyLink: "Vyu\u017eite jedine\u010dn\u00fa pr\u00edle\u017eitos\u0165",
    academyDescription:
      "vstúpi\u0165 do sveta barberingu prostredn\u00edctvom profesion\u00e1lneho kurzu, ktor\u00fd pre teba pripravila AK Barbers Academy pod veden\u00edm na\u0161ich \u0161pi\u010dkov\u00fdch lektorov a sk\u00fasen\u00fdch barberov z AK Barbers.",
    academyCta: "Viac info",
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
      "Potěšte přítele nebo někoho blízkého. Dárkové poukázky je možné zakoupit v salonu nebo online.",
    selectBranch: "vyberte si konkrétní pobočku pro více informací.",
  },
  en: {
    heading: "Gift Vouchers",
    descriptionWithUrl:
      "Treat a friend or someone special. Available to purchase in-store or ",
    online: "online",
    buyOnline: "Buy Online",
    descriptionWithoutUrl:
      "Treat a friend or someone special. Gift vouchers are available to purchase in-store or online.",
    selectBranch: "select a specific branch for more info.",
  },
  sk: {
    heading: "Darčekové poukážky",
    descriptionWithUrl:
      "Pote\u0161te priate\u013ea alebo niekoho bl\u00edzkeho. M\u00f4\u017eete zak\u00fapi\u0165 u n\u00e1s v sal\u00f3ne alebo ",
    online: "online",
    buyOnline: "K\u00fapi\u0165 online",
    descriptionWithoutUrl:
      "Pote\u0161te priate\u013ea alebo niekoho bl\u00edzkeho. Dar\u010dekov\u00e9 pouk\u00e1\u017eky je mo\u017en\u00e9 zak\u00fapi\u0165 v sal\u00f3ne alebo online.",
    selectBranch: "vyberte si konkr\u00e9tnu pobo\u010dku pre viac inform\u00e1ci\u00ed.",
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
      "Přijďte bez objednání a dopřejte si péči, kterou poznáte na první pohled. V AK Barbers pracujeme podle přísných standardů kvality, díky kterým držíme špičkový výsledek na každé pobočce. Každý nový barber prochází profesionálním zaškolením a až poté nastupuje do provozu. Preciznost, čistota a detail jsou pro nás samozřejmostí.",
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
  sk: {
    heading1: "M\u00e1te ot\u00e1zky?",
    heading2: "Nap\u00ed\u0161te n\u00e1m",
    description:
      "Pr\u00ed\u010fte bez objedn\u00e1vky a doprajte si starostlivos\u0165, ktor\u00fa spozn\u00e1te na prv\u00fd poh\u013ead. V AK Barbers pracujeme pod\u013ea pr\u00edsnych \u0161tandardov kvality, v\u010faka ktor\u00fdm dr\u017e\u00edme \u0161pi\u010dkov\u00fd v\u00fdsledok na ka\u017edej pobo\u010dke. Ka\u017ed\u00fd nov\u00fd barber prech\u00e1dza profesion\u00e1lnym za\u0161kolen\u00edm a a\u017e potom nastupuje do prev\u00e1dzky. Prec\u00edznost, \u010distota a detail s\u00fa pre n\u00e1s samozrejmos\u0165ou.",
    tagline1: "Zabezpe\u010dujeme t\u00fa najlep\u0161iu mo\u017en\u00fa",
    tagline2: "starostlivos\u0165 o Va\u0161e vlasy a bradu.",
    namePlaceholder: "Meno, priezvisko *",
    emailPlaceholder: "Email *",
    phonePlaceholder: "Telef\u00f3n",
    messagePlaceholder: "Spr\u00e1va *",
    consentPrefix: "S\u00fahlas\u00edm so",
    consentLink: "spracovan\u00edm osobn\u00fdch \u00fadajov",
    submit: "Odosla\u0165",
    submitting: "Odosiela sa...",
    success:
      "\u010eakujeme za spr\u00e1vu! Ozveme sa v\u00e1m \u010do najsk\u00f4r.",
    error: "Nie\u010do sa pokazilo. Sk\u00faste to znova.",
  },
} as const;
