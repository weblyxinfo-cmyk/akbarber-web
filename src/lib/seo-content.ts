import type {
  SeoLocationContent,
  SeoServiceContent,
  SeoInternalLink,
} from "@/types";

// ---------------------------------------------------------------------------
// Shared internal links
// ---------------------------------------------------------------------------

const academyLink: SeoInternalLink = {
  label: "AK BARBERS Akademie",
  href: "https://www.barber-kurzy.com",
  external: true,
};
const academyLinkEn: SeoInternalLink = {
  label: "AK BARBERS Academy",
  href: "https://www.barber-kurzy.com",
  external: true,
};
const careerLink: SeoInternalLink = { label: "Kariéra v AK BARBERS", href: "/kariera" };
const careerLinkEn: SeoInternalLink = { label: "Careers at AK BARBERS", href: "/kariera" };

// ===================================================================
// LOCATION PAGES (4)
// ===================================================================

export const seoLocationPages: Record<string, SeoLocationContent> = {
  // ------------------------------------------------------------------
  // barber-praha-1 (CZ)
  // ------------------------------------------------------------------
  "barber-praha-1": {
    lang: "cs",
    slug: "barber-praha-1",
    locationId: "praha-1",
    alternateSlug: "en/barber-prague-1",
    crossLocationSlug: "barber-praha-6",
    title: "Barber Praha 1 – Staré Město | AK BARBERS Národní třída",
    description:
      "Prémiový barbershop v centru Prahy na Národní třídě. Walk-in i rezervace. Pánské stříhání od 499 Kč, úprava vousů. Top #1 hodnocený barber v Praze 1.",
    keywords: [
      "barber praha 1",
      "barbershop staré město",
      "barbershop národní třída",
      "pánské stříhání praha 1",
      "barber centrum prahy",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Barber Praha 1 – Staré Město",
    localityDescription: [
      "AK BARBERS Praha 1 najdete na prestižní adrese Národní 949/19, přímo v srdci Starého Města. Naše pobočka se nachází na jedné z nejznámějších pražských ulic, jen pár kroků od metra Národní třída (linka B) a tramvajové zastávky. Díky výborné dostupnosti MHD k nám snadno dorazíte z jakékoliv části Prahy.",
      "V okolí Národní třídy pulzuje život — kulturní instituce, kavárny, obchody a kancelářské budovy. Ať už pracujete v centru nebo si užíváte procházku po Praze, zastavte se na profesionální střih bez objednání. Naši zkušení barbeři se o vás postarají rychle a precizně.",
      "Pobočka je otevřena 7 dní v týdnu, včetně víkendů, takže si vždy najdete čas na návštěvu. Nabízíme walk-in i online rezervaci přes Booqme.",
    ],
    services: [
      { name: "Klasické pánské stříhání", price: "499 Kč", link: "/pansky-strih-praha-1" },
      { name: "Střih vlasů a úprava vousů", price: "889 Kč" },
      { name: "Úprava vousů", price: "399 Kč" },
      { name: "Dětský střih (1–15 let)", price: "349 / 449 Kč" },
    ],
    aboutText:
      "V AK BARBERS pracujeme podle přísných standardů kvality. Každý nový barber prochází profesionálním zaškolením v naší AK BARBERS Academy a teprve poté nastupuje do provozu. Preciznost, čistota a důraz na detail jsou základem naší práce. Díky tomu držíme špičkovou úroveň služeb na každé pobočce — a naši zákazníci se k nám rádi vrací.",
    faq: [
      { question: "Kde se nachází AK BARBERS Praha 1?", answer: "Najdete nás na adrese Národní 63/26, 110 00 Nové Město, Praha 1. Jsme přímo u metra Národní třída (linka B), pár kroků od Václavského náměstí." },
      { question: "Musím se objednat předem?", answer: "Ne, fungujeme na principu walk-in — přijďte kdykoliv během otevírací doby. Pokud preferujete jistotu, můžete si rezervovat termín online přes Booqme." },
      { question: "Jaká je otevírací doba?", answer: "Máme otevřeno Po–Ne 10:00–19:00, tedy každý den v týdnu včetně víkendů." },
      { question: "Kolik stojí pánský střih v Praze 1?", answer: "Klasické pánské stříhání stojí 499 Kč. Kompletní balíček střih + úprava vousů je za 889 Kč." },
      { question: "Děláte i skin fade v centru Prahy?", answer: "Ano, skin fade je jednou z našich specialit. Naši barbeři ovládají low, mid i high fade a strojek vedou od 0 mm s precizním stínováním a přechody." },
      { question: "Stříháte i děti?", answer: "Ano, dětský střih nabízíme pro chlapce od 1 do 15 let za 349 Kč (klasický střih) nebo 449 Kč (fade varianty)." },
      { question: "Mohu platit kartou?", answer: "Ano, přijímáme platbu v hotovosti i platební kartou." },
      { question: "Nabízíte i úpravu vousů?", answer: "Ano, samostatná úprava vousů stojí 399 Kč. Zahrnuje konzultaci, tvarování strojkem a nůžkami, zaholení břitvou na vyžádání a aplikaci pečující kosmetiky. Kompletní balíček střih + vousy je za 889 Kč." },
    ],
    internalLinks: [
      { label: "Skin Fade Praha 1", href: "/skin-fade-praha-1" },
      { label: "Pánský střih Praha 1", href: "/pansky-strih-praha-1" },
      { label: "AK BARBERS Praha 6 – Bělohorská", href: "/barber-praha-6" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Praha 1", href: "/barber-praha-1" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-praha-6 (CZ)
  // ------------------------------------------------------------------
  "barber-praha-6": {
    lang: "cs",
    slug: "barber-praha-6",
    locationId: "praha-6",
    alternateSlug: "en/barber-prague-6",
    crossLocationSlug: "barber-praha-1",
    title: "Barber Praha 6 – Břevnov | AK BARBERS Bělohorská",
    description:
      "Profesionální barbershop na Praze 6, Bělohorská ulice. Walk-in i rezervace. Pánské stříhání od 449 Kč, skin fade, úprava vousů. Top #1 hodnocený barber na Praze 6.",
    keywords: [
      "barber praha 6",
      "barbershop bělohorská",
      "barbershop břevnov",
      "pánské stříhání praha 6",
      "barber dejvice",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Barber Praha 6 – Břevnov",
    localityDescription: [
      "AK BARBERS Praha 6 sídlí na Bělohorské 1393/44, v srdci Břevnova. Pobočka je snadno dostupná tramvají — zastávka Malovanka je přímo před dveřmi. Zároveň jsme nedaleko metra Dejvická (linka A), odkud to k nám je jen pár minut tramvají nebo pěšky.",
      "Břevnov je klidná, rezidenční čtvrť s přátelskou atmosférou. Naše pobočka je oblíbeným místem jak pro místní obyvatele, tak pro studenty a profesionály z okolí Dejvic a Hradčan. Přijďte si užít profesionální střih v příjemném prostředí, bez shonu centra města.",
      "Otevřeno máme Po–Pá 10:00–19:00 a v sobotu 9:00–12:00. Fungujeme walk-in i s možností online rezervace.",
    ],
    services: [
      { name: "Klasické pánské stříhání", price: "449 Kč", link: "/pansky-strih-praha-6" },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč", link: "/skin-fade-praha-6" },
      { name: "Senior pánský střih (65+)", price: "249 Kč" },
      { name: "Dětský střih (1–15 let)", price: "299 / 399 Kč" },
      { name: "Úprava vousů", price: "349 Kč" },
      { name: "Střih vlasů a úprava vousů", price: "749 Kč" },
    ],
    aboutText:
      "V AK BARBERS pracujeme podle přísných standardů kvality. Každý nový barber prochází profesionálním zaškolením v naší AK BARBERS Academy a teprve poté nastupuje do provozu. Preciznost, čistota a důraz na detail jsou základem naší práce. Díky tomu držíme špičkovou úroveň služeb na každé pobočce — a naši zákazníci se k nám rádi vrací.",
    faq: [
      { question: "Kde přesně je AK BARBERS Praha 6?", answer: "Jsme na adrese Bělohorská 1393/44, Praha 6 – Břevnov. Přímo u tramvajové zastávky Malovanka, nedaleko metra Dejvická." },
      { question: "Je potřeba se objednat?", answer: "Ne, fungujeme walk-in, přijďte kdykoliv. Zároveň nabízíme online rezervaci přes Booqme pro ty, kdo si chtějí zajistit konkrétní čas." },
      { question: "Jaké jsou otevírací hodiny?", answer: "Po–Pá 10:00–19:00, So 9:00–12:00. V neděli máme zavřeno." },
      { question: "Kolik stojí střih na Praze 6?", answer: "Klasické pánské stříhání stojí 449 Kč, Skin Fade 499 Kč. Kompletní balíček střih + vousy je za 749 Kč. Senior střih je zvýhodněný za 249 Kč." },
      { question: "Děláte skin fade na Praze 6?", answer: "Ano, skin fade patří k našim nejžádanějším službám. Naši barbeři zvládají low, mid i high fade s precizními přechody od 0 mm." },
      { question: "Je barbershop blízko metra Dejvická?", answer: "Ano, od metra Dejvická (linka A) to k nám je cca 10 minut tramvají (zastávka Malovanka) nebo 15 minut pěšky." },
      { question: "Přijímáte platby kartou?", answer: "Ano, můžete platit hotově i kartou." },
      { question: "Máte i druhou pobočku v Praze?", answer: "Ano, naše druhá pražská pobočka je AK BARBERS Praha 1 na Národní třídě v centru Starého Města. Otevřeno 7 dní v týdnu." },
    ],
    internalLinks: [
      { label: "Skin Fade Praha 6", href: "/skin-fade-praha-6" },
      { label: "Pánský střih Praha 6", href: "/pansky-strih-praha-6" },
      { label: "AK BARBERS – Praha Máj", href: "/barber-praha-1" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Praha 6", href: "/barber-praha-6" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-prague-1 (EN)
  // ------------------------------------------------------------------
  "en/barber-prague-1": {
    lang: "en",
    slug: "en/barber-prague-1",
    locationId: "praha-1",
    alternateSlug: "barber-praha-1",
    crossLocationSlug: "en/barber-prague-6",
    title: "Barber Prague 1 – Old Town | AK BARBERS Premium Barbershop",
    description:
      "Premium barbershop in Prague city centre, Národní třída street. Walk-ins & online booking. Men's haircuts from 499 CZK, beard grooming. Top-rated barber in Prague 1.",
    keywords: [
      "barber prague 1",
      "barbershop old town prague",
      "best barbershop prague",
      "men's haircut prague",
      "barber prague city centre",
    ],
    ogLocale: "en_US",
    heroHeading: "Barber Prague 1 – Old Town",
    localityDescription: [
      "AK BARBERS Prague 1 is located at Národní 949/19, right in the heart of Prague's Old Town. Our shop sits on one of Prague's most famous streets, just steps from Národní třída metro station (Line B) and multiple tram stops. Getting here from anywhere in Prague couldn't be easier.",
      "The area around Národní třída buzzes with life — cultural venues, cafés, shops, and office buildings surround us. Whether you work in the centre or you're exploring Prague as a visitor, pop in for a professional haircut — no appointment needed. Our experienced barbers will take care of you quickly and precisely.",
      "We're open 7 days a week, including weekends, so you can always find time for a visit. We offer walk-in service as well as online booking via Booqme.",
    ],
    services: [
      { name: "Classic Haircut", price: "499 CZK", link: "/en/mens-haircut-prague-1" },
      { name: "Haircut & Beard Grooming", price: "889 CZK" },
      { name: "Beard Grooming", price: "399 CZK" },
      { name: "Kids' Haircut (1–15)", price: "349 / 449 CZK" },
    ],
    aboutText:
      "At AK BARBERS we follow strict quality standards. Every new barber completes professional training at our AK BARBERS Academy before they step behind the chair. Precision, cleanliness and attention to detail are the foundations of our work — that's why we maintain top-level service at every location, and our clients keep coming back.",
    faq: [
      { question: "Where is AK BARBERS Prague 1?", answer: "We're at Národní 63/26, 110 00 Nové Město, Prague 1. Right by Národní třída metro (Line B), a few steps from Wenceslas Square." },
      { question: "Do I need to book an appointment?", answer: "No, we operate on a walk-in basis — just come during opening hours. If you prefer certainty, you can book online via Booqme." },
      { question: "What are the opening hours?", answer: "We're open Mon–Sun 10:00–19:00, every day including weekends." },
      { question: "How much is a men's haircut in Prague 1?", answer: "A classic men's haircut is 499 CZK. The full haircut + beard grooming package is 889 CZK." },
      { question: "Do you do skin fades?", answer: "Absolutely — skin fade is one of our specialities. Our barbers master low, mid and high fades with seamless blending from 0mm." },
      { question: "Do you cut children's hair?", answer: "Yes, kids' haircuts are available for boys aged 1–15 at 349 CZK (classic) or 449 CZK (fade styles)." },
      { question: "Can I pay by card?", answer: "Yes, we accept both cash and card payments." },
      { question: "Do you speak English?", answer: "Yes, our barbers in Prague 1 are accustomed to international clients and communicate in English." },
    ],
    internalLinks: [
      { label: "Skin Fade Prague 1", href: "/en/skin-fade-prague-1" },
      { label: "Men's Haircut Prague 1", href: "/en/mens-haircut-prague-1" },
      { label: "AK BARBERS Prague 6 – Bělohorská", href: "/en/barber-prague-6" },
      { label: "AK BARBERS Prague 5 – Smíchov", href: "/en/barber-prague-5" },
      academyLinkEn,
      careerLinkEn,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Prague 1", href: "/en/barber-prague-1" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-prague-6 (EN)
  // ------------------------------------------------------------------
  "en/barber-prague-6": {
    lang: "en",
    slug: "en/barber-prague-6",
    locationId: "praha-6",
    alternateSlug: "barber-praha-6",
    crossLocationSlug: "en/barber-prague-1",
    title: "Barber Prague 6 – Břevnov | AK BARBERS Professional Barbershop",
    description:
      "Professional barbershop in Prague 6, Bělohorská street. Walk-ins & online booking. Men's haircuts from 449 CZK, skin fade, beard grooming. Top-rated barber in Prague 6.",
    keywords: [
      "barber prague 6",
      "barbershop prague 6",
      "barbershop near dejvická",
      "men's haircut prague 6",
      "barber brevnov",
    ],
    ogLocale: "en_US",
    heroHeading: "Barber Prague 6 – Břevnov",
    localityDescription: [
      "AK BARBERS Prague 6 is at Bělohorská 1393/44, in the heart of Břevnov. Our shop is easily accessible by tram — the Malovanka stop is right outside. We're also close to Dejvická metro station (Line A), just a few minutes by tram or a short walk.",
      "Břevnov is a quiet, residential neighbourhood with a friendly atmosphere. Our branch is popular with locals as well as students and professionals from the nearby Dejvice and Hradčany areas. Come enjoy a professional haircut in a relaxed setting, away from the hustle of the city centre.",
      "We're open Mon–Fri 10:00–19:00 and Saturday 9:00–12:00. Walk-ins welcome, online booking also available.",
    ],
    services: [
      { name: "Classic Haircut", price: "449 CZK", link: "/en/mens-haircut-prague-6" },
      { name: "Skin Fade / Long Hair", price: "499 CZK", link: "/en/skin-fade-prague-6" },
      { name: "Senior Haircut (65+)", price: "249 CZK" },
      { name: "Kids' Haircut (1–15)", price: "299 / 399 CZK" },
      { name: "Beard Grooming", price: "349 CZK" },
      { name: "Haircut & Beard Grooming", price: "749 CZK" },
    ],
    aboutText:
      "At AK BARBERS we follow strict quality standards. Every new barber completes professional training at our AK BARBERS Academy before they step behind the chair. Precision, cleanliness and attention to detail are the foundations of our work — that's why we maintain top-level service at every location, and our clients keep coming back.",
    faq: [
      { question: "Where exactly is AK BARBERS Prague 6?", answer: "We're at Bělohorská 1393/44, Prague 6 – Břevnov. Right by the Malovanka tram stop, close to Dejvická metro station." },
      { question: "Do I need a reservation?", answer: "No, we welcome walk-ins. You can also book online via Booqme if you prefer a guaranteed slot." },
      { question: "What are the opening hours?", answer: "Mon–Fri 10:00–19:00, Sat 9:00–12:00. Closed on Sundays." },
      { question: "How much is a haircut in Prague 6?", answer: "Classic haircut is 449 CZK, Skin Fade 499 CZK. The full haircut + beard package is 749 CZK. Senior discount haircut is 249 CZK." },
      { question: "Do you do skin fades in Prague 6?", answer: "Yes, skin fade is one of our most popular services. Our barbers handle low, mid, and high fades with seamless transitions from 0mm." },
      { question: "Is the barbershop close to Dejvická metro?", answer: "Yes, from Dejvická metro (Line A) it's about 10 minutes by tram (Malovanka stop) or 15 minutes on foot." },
      { question: "Do you accept card payments?", answer: "Yes, we accept both cash and card." },
      { question: "Do you have another branch in Prague?", answer: "Yes, our second Prague location is AK BARBERS Prague 1 on Národní třída in the Old Town. Open 7 days a week. We also have a new branch in Prague 5 – Smíchov, near Anděl metro." },
    ],
    internalLinks: [
      { label: "Skin Fade Prague 6", href: "/en/skin-fade-prague-6" },
      { label: "Men's Haircut Prague 6", href: "/en/mens-haircut-prague-6" },
      { label: "AK BARBERS Prague 1 – Old Town", href: "/en/barber-prague-1" },
      { label: "AK BARBERS Prague 5 – Smíchov", href: "/en/barber-prague-5" },
      academyLinkEn,
      careerLinkEn,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Prague 6", href: "/en/barber-prague-6" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-prague-5 (EN) — Smíchov
  // ------------------------------------------------------------------
  "en/barber-prague-5": {
    lang: "en",
    slug: "en/barber-prague-5",
    locationId: "praha-5",
    alternateSlug: "barber-smichov",
    crossLocationSlug: "en/barber-prague-1",
    title: "Barber Prague 5 – Smíchov | AK BARBERS Near Anděl Metro",
    description:
      "Premium barbershop in Prague 5, Smíchov. Walk-ins & online booking. Men's haircuts from 499 CZK, beard grooming. 5 min from Anděl metro. Newest Prague branch, 5.0★ rating.",
    keywords: [
      "barber prague 5",
      "barbershop smíchov",
      "barber near anděl",
      "men's haircut smíchov",
      "barber prague 5 smíchov",
      "best barbershop prague 5",
      "barbershop anděl prague",
    ],
    ogLocale: "en_US",
    heroHeading: "Barber Prague 5 – Smíchov",
    localityDescription: [
      "AK BARBERS Smíchov is located at Toyen 3410/7, Prague 5, in the heart of one of Prague's most vibrant districts. Our newest Prague branch is just a 5-minute walk from Anděl metro station (Line B) and the Na Knížecí bus terminal. Tram stops serving lines 4, 5, 7, 9, 10, 12 and 15 are within easy reach, making us accessible from anywhere in Prague.",
      "Smíchov is a buzzing urban quarter where modern office complexes blend with historic lanes and popular cafés. You'll find OC Nový Smíchov shopping centre nearby (1 hour free parking on weekdays), cinemas, restaurants and the Vltava riverbank promenade. Whether you work around Anděl or live in Prague 5, drop in for a professional haircut — no appointment needed.",
      "As the newest branch in the AK BARBERS network, we offer premium services in a brand-new interior. We're open Mon–Fri 10:00–19:00 and Saturday 10:00–14:30. Walk-ins are welcome, and online booking is available via Booqme.",
    ],
    services: [
      { name: "Classic Haircut", price: "499 CZK", link: "/en/mens-haircut-prague-5" },
      { name: "Haircut & Beard Grooming", price: "889 CZK" },
      { name: "Beard Grooming", price: "399 CZK" },
      { name: "Kids' Haircut (1–15)", price: "349 / 449 CZK" },
    ],
    aboutText:
      "At AK BARBERS we follow strict quality standards. Every new barber completes professional training at our AK BARBERS Academy before they step behind the chair. Precision, cleanliness and attention to detail are the foundations of our work — that's why we maintain top-level service at every location, and our clients keep coming back.",
    faq: [
      { question: "Where is AK BARBERS Prague 5?", answer: "We're at Toyen 3410/7, Prague 5 – Smíchov. A 5-minute walk from Anděl metro station (Line B) and the Na Knížecí bus terminal." },
      { question: "Do I need to book an appointment?", answer: "No, we operate on a walk-in basis — just come during opening hours. If you prefer certainty, you can book online via Booqme." },
      { question: "What are the opening hours?", answer: "Mon–Fri 10:00–19:00, Sat 10:00–14:30. Closed on Sundays." },
      { question: "How much is a men's haircut in Prague 5?", answer: "A classic men's haircut is 499 CZK. The full haircut + beard grooming package is 889 CZK." },
      { question: "Is there parking nearby?", answer: "Yes, purple parking zones in Prague 5 are available at 30 CZK/hr. OC Nový Smíchov offers 1 hour free parking on weekdays." },
      { question: "Do you cut children's hair?", answer: "Yes, kids' haircuts are available for boys aged 1–15 at 349 CZK (classic) or 449 CZK (fade styles)." },
      { question: "Can I pay by card?", answer: "Yes, we accept both cash and card payments." },
      { question: "Is this a new branch?", answer: "Yes, AK BARBERS Smíchov is our newest Prague branch with a 5.0★ rating. We offer premium services in a completely new interior." },
      { question: "Do you speak English?", answer: "Yes, our barbers in Prague 5 are accustomed to international clients and communicate in English." },
    ],
    internalLinks: [
      { label: "Skin Fade Prague 5", href: "/en/skin-fade-prague-5" },
      { label: "Men's Haircut Prague 5", href: "/en/mens-haircut-prague-5" },
      { label: "AK BARBERS Prague 1 – Old Town", href: "/en/barber-prague-1" },
      { label: "AK BARBERS Prague 6 – Bělohorská", href: "/en/barber-prague-6" },
      academyLinkEn,
      careerLinkEn,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Prague 5", href: "/en/barber-prague-5" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-smichov (CZ) — Praha 5
  // ------------------------------------------------------------------
  "barber-smichov": {
    lang: "cs",
    slug: "barber-smichov",
    locationId: "praha-5",
    alternateSlug: "en/barber-prague-5",
    title: "Barber Smíchov – Praha 5 | AK BARBERS u metra Anděl",
    description:
      "Nový prémiový barbershop na Smíchově, Praha 5. Walk-in i rezervace. Pánské stříhání od 499 Kč, úprava vousů. 5 min od metra Anděl. Adresa: Toyen 3410/7.",
    keywords: [
      "barber smíchov",
      "barbershop praha 5",
      "barber anděl",
      "pánské stříhání smíchov",
      "barber praha 5 smíchov",
      "pánské holictví praha 5",
      "barbershop anděl praha",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Barber Smíchov – Praha 5",
    localityDescription: [
      "AK BARBERS Smíchov sídlí na adrese Toyen 3410/7, Praha 5, v samém srdci jedné z nejživějších pražských čtvrtí. Naše nová pobočka je vzdálená pouhých 5 minut chůze od stanice metra Anděl (linka B) a autobusového terminálu Na Knížecí. Tramvajové zastávky s linkami 4, 5, 7, 9, 10, 12 a 15 jsou na dosah, takže se k nám snadno dostanete z celé Prahy.",
      "Smíchov je pulzující městská čtvrť, kde se mísí moderní kancelářské komplexy s historickými uličkami a oblíbenými kavárnami. V bezprostředním okolí najdete OC Nový Smíchov (1 hodina parkování zdarma ve všední dny), kino, restaurace a náplavku u Vltavy. Ať už pracujete v okolí Anděla nebo bydlíte na Praze 5, zastavte se na profesionální střih bez čekání.",
      "Jako nejnovější pobočka sítě AK BARBERS nabízíme prémiové služby ve zbrusu novém interiéru. Otevřeno máme Po–Pá 10:00–19:00 a v sobotu 10:00–14:30. Fungujeme walk-in i s možností online rezervace přes Booqme.",
    ],
    services: [
      { name: "Klasické pánské stříhání", price: "499 Kč" },
      { name: "Střih vlasů a úprava vousů", price: "889 Kč" },
      { name: "Úprava vousů", price: "399 Kč" },
      { name: "Dětský střih (1–15 let)", price: "349 / 449 Kč" },
    ],
    aboutText:
      "V AK BARBERS pracujeme podle přísných standardů kvality. Každý nový barber prochází profesionálním zaškolením v naší AK BARBERS Academy a teprve poté nastupuje do provozu. Preciznost, čistota a důraz na detail jsou základem naší práce. Díky tomu držíme špičkovou úroveň služeb na každé pobočce — a naši zákazníci se k nám rádi vrací.",
    faq: [
      { question: "Kde se nachází AK BARBERS Smíchov?", answer: "Najdete nás na adrese Toyen 3410/7, Praha 5 – Smíchov. Jsme 5 minut chůze od metra Anděl (linka B) a autobusového terminálu Na Knížecí." },
      { question: "Musím se objednat předem?", answer: "Ne, fungujeme na principu walk-in — přijďte kdykoliv během otevírací doby. Pokud preferujete jistotu, můžete si rezervovat termín online přes Booqme." },
      { question: "Jaká je otevírací doba?", answer: "Po–Pá 10:00–19:00, So 10:00–14:30. V neděli máme zavřeno." },
      { question: "Kolik stojí pánský střih na Smíchově?", answer: "Klasické pánské stříhání stojí 499 Kč. Kompletní balíček střih + úprava vousů je za 889 Kč." },
      { question: "Je poblíž parkování?", answer: "Ano, v okolí jsou fialové zóny Praha 5 (30 Kč/hod). V OC Nový Smíchov máte 1 hodinu parkování zdarma ve všední dny." },
      { question: "Stříháte i děti?", answer: "Ano, dětský střih nabízíme pro chlapce od 1 do 15 let za 349 Kč (klasický střih) nebo 449 Kč (fade varianty)." },
      { question: "Mohu platit kartou?", answer: "Ano, přijímáme platbu v hotovosti i platební kartou." },
      { question: "Je to nová pobočka?", answer: "Ano, AK BARBERS Smíchov je naše nejnovější pražská pobočka s hodnocením 5.0★. Nabízíme prémiové služby ve zcela novém interiéru." },
    ],
    internalLinks: [
      { label: "AK BARBERS – Praha Máj", href: "/barber-praha-1" },
      { label: "AK BARBERS Praha 6 – Bělohorská", href: "/barber-praha-6" },
      { label: "Barber Prague 5 – Smíchov (EN)", href: "/en/barber-prague-5" },
      { label: "Men's Haircut Prague 5 (EN)", href: "/en/mens-haircut-prague-5" },
      { label: "Skin Fade Prague 5 (EN)", href: "/en/skin-fade-prague-5" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Smíchov", href: "/barber-smichov" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-beroun (CZ)
  // ------------------------------------------------------------------
  "barber-beroun": {
    lang: "cs",
    slug: "barber-beroun",
    locationId: "beroun",
    title: "Barber Beroun – centrum | AK BARBERS Top #1 v Berouně",
    description:
      "Nejlépe hodnocený barbershop v Berouně, 4.8★ a 180+ recenzí. Walk-in bez objednání. Pánské stříhání od 449 Kč. Adresa: Havlíčkova 128, Beroun-centrum.",
    keywords: [
      "barber beroun",
      "barbershop beroun",
      "pánské stříhání beroun",
      "kadeřnictví muži beroun",
      "barber beroun centrum",
      "holictví beroun",
      "barber shop beroun",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Barber Beroun – centrum města",
    localityDescription: [
      "AK BARBERS Beroun najdete na Havlíčkově 128, přímo v centru historického královského města. Pobočka se nachází v blízkosti Wagnerova náměstí a Husova náměstí, v samém srdci berounského dění. Z vlakového nádraží Beroun (linka Praha–Plzeň) to k nám je pouhých 5 minut chůze, autobusem 861 na zastávku Wagnerovo náměstí jen 3 minuty pěšky.",
      "Beroun je město s bohatou historií, obklopené Českým krasem a Berounkou. Ať už jste místní, dojíždíte za prací, nebo se zastavujete cestou mezi Prahou a Plzní — u nás se vždy dočkáte profesionálního střihu. Parkovat můžete v parkovacím domě U Černého koně (40 Kč/hod) nebo na placeném parkování na Husově náměstí.",
      "Kromě naší hlavní pobočky provozujeme v Berouně také VIP Club na adrese Plzeňská 145/49 (Beroun 2) s prémiovým ceníkem a možností rezervace. Máme otevřeno Po–Pá 9:00–19:30 a v sobotu 9:00–14:00. Fungujeme walk-in bez objednání.",
    ],
    services: [
      { name: "Klasické pánské stříhání", price: "449 Kč" },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč" },
      { name: "Senior pánský střih (65+)", price: "299 Kč" },
      { name: "Dětský střih (1–15 let)", price: "349 / 449 Kč" },
      { name: "Úprava vousů", price: "399 Kč" },
      { name: "Střih vlasů a úprava vousů", price: "799 Kč" },
    ],
    aboutText:
      "V AK BARBERS pracujeme podle přísných standardů kvality. Každý nový barber prochází profesionálním zaškolením v naší AK BARBERS Academy a teprve poté nastupuje do provozu. Preciznost, čistota a důraz na detail jsou základem naší práce. Díky tomu držíme špičkovou úroveň služeb na každé pobočce — a naši zákazníci se k nám rádi vrací.",
    faq: [
      { question: "Kde se nachází AK BARBERS Beroun?", answer: "Jsme na adrese Havlíčkova 128, 266 01 Beroun-centrum. V centru města, 5 minut chůze od vlakového nádraží a 3 minuty od zastávky Wagnerovo náměstí." },
      { question: "Musím se objednat?", answer: "Ne, pobočka na Havlíčkově funguje výhradně walk-in — přijďte kdykoliv během otevírací doby. Pokud chcete rezervaci, navštivte naši VIP pobočku Beroun 2 na Plzeňské 145/49." },
      { question: "Jaká je otevírací doba?", answer: "Po–Pá 9:00–19:30, So 9:00–14:00. V neděli máme zavřeno." },
      { question: "Kolik stojí pánský střih v Berouně?", answer: "Klasické pánské stříhání stojí 449 Kč, Skin Fade 499 Kč. Kompletní balíček střih + vousy je za 799 Kč. Senior střih je zvýhodněný za 299 Kč." },
      { question: "Kde zaparkuji?", answer: "V parkovacím domě U Černého koně (40 Kč/hod, celodenní nad 4 hod za 130 Kč) nebo na placeném parkování na Husově náměstí." },
      { question: "Máte v Berouně i druhou pobočku?", answer: "Ano, AK BARBERS Beroun 2 VIP Club na Plzeňské 145/49 nabízí prémiové služby s možností online rezervace. Otevřeno Po–Pá 10:00–21:00." },
      { question: "Stříháte i děti?", answer: "Ano, dětský střih pro chlapce od 1 do 15 let stojí 349 Kč (klasický) nebo 449 Kč (fade varianty)." },
      { question: "Mohu platit kartou?", answer: "Ano, přijímáme platbu hotově i platební kartou." },
    ],
    internalLinks: [
      { label: "AK BARBERS Králův Dvůr", href: "/barber-kraluv-dvur" },
      { label: "AK BARBERS Hořovice", href: "/barber-horovice" },
      { label: "AK BARBERS – Praha Máj", href: "/barber-praha-1" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Beroun", href: "/barber-beroun" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-plzen (CZ)
  // ------------------------------------------------------------------
  "barber-plzen": {
    lang: "cs",
    slug: "barber-plzen",
    locationId: "plzen",
    title: "Barber Plzeň – Bolevec | AK BARBERS Top #1 v Plzni",
    description:
      "Nejlépe hodnocený barbershop v Plzni, 4.9★ a 215+ recenzí. Walk-in i rezervace. Pánské stříhání od 449 Kč. Gerská 2030/23, Plzeň 1-Bolevec. Parkování zdarma.",
    keywords: [
      "barber plzeň",
      "barbershop plzeň",
      "pánské stříhání plzeň",
      "barber bolevec",
      "kadeřnictví muži plzeň",
      "holictví plzeň",
      "barber shop plzeň",
      "pánské holictví plzeň",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Barber Plzeň – Bolevec",
    localityDescription: [
      "AK BARBERS Plzeň sídlí na Gerské 2030/23 v městské části Plzeň 1-Bolevec. Pobočka je snadno dostupná tramvají — zastávka U Gery (tramvaj č. 4, autobusy 33 a 40) je přímo před dveřmi. Ze zastávky Nemocnice Lochotín to k nám je 5 minut chůze s přestupem na více linek. Parkovat můžete zdarma na parkovišti Albert přímo vedle nás nebo v parkovacím domě Gerská 2005/4 s 237 místy.",
      "Bolevec je příjemná, zelená čtvrť na severu Plzně, oblíbená rodinami i studenty Západočeské univerzity. V okolí najdete Bolevecké rybníky, oblíbenou rekreační oblast, a nákupní zónu s Albertem. AK BARBERS Plzeň je s hodnocením 4.9★ a více než 215 recenzemi nejlépe hodnoceným barbershopem v celém Plzeňském kraji — jsme Top #1 v Plzni podle Google recenzí.",
      "Otevřeno máme Po–Pá 9:30–18:00 a So–Ne 9:00–14:00, tedy celý týden včetně víkendů. Fungujeme walk-in i s možností online rezervace přes Booqme. Přijďte a přesvědčte se sami, proč nás zákazníci hodnotí tak vysoko.",
    ],
    services: [
      { name: "Klasické pánské stříhání", price: "449 Kč" },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč" },
      { name: "Senior pánský střih (65+)", price: "299 Kč" },
      { name: "Dětský střih (1–15 let)", price: "349 / 449 Kč" },
      { name: "Úprava vousů", price: "399 Kč" },
      { name: "Střih vlasů a úprava vousů", price: "799 Kč" },
    ],
    aboutText:
      "V AK BARBERS pracujeme podle přísných standardů kvality. Každý nový barber prochází profesionálním zaškolením v naší AK BARBERS Academy a teprve poté nastupuje do provozu. Preciznost, čistota a důraz na detail jsou základem naší práce. Díky tomu držíme špičkovou úroveň služeb na každé pobočce — a naši zákazníci se k nám rádi vrací.",
    faq: [
      { question: "Kde přesně je AK BARBERS Plzeň?", answer: "Najdete nás na Gerské 2030/23, 323 00 Plzeň 1-Bolevec. Přímo u tramvajové zastávky U Gery, vedle supermarketu Albert." },
      { question: "Je potřeba se objednat?", answer: "Ne nutně — fungujeme walk-in. Pokud ale chcete garantovaný čas, můžete si zarezervovat termín online přes Booqme." },
      { question: "Jaké jsou otevírací hodiny?", answer: "Po–Pá 9:30–18:00, So–Ne 9:00–14:00. Máme otevřeno celý týden včetně víkendů." },
      { question: "Kolik stojí střih v Plzni?", answer: "Klasické pánské stříhání stojí 449 Kč, Skin Fade 499 Kč. Kompletní balíček střih + vousy je za 799 Kč. Senior střih za zvýhodněných 299 Kč." },
      { question: "Kde zaparkuji?", answer: "Parkování je zdarma na parkovišti Albert přímo vedle pobočky. K dispozici je také parkovací dům Gerská 2005/4 s 237 místy (otevřeno 24/7)." },
      { question: "Proč je AK BARBERS Top #1 v Plzni?", answer: "S hodnocením 4.9★ a více než 215 recenzemi na Googlu jsme nejlépe hodnoceným barbershopem v Plzni. Naši barbeři jsou profesionálně vyškoleni v AK BARBERS Academy a dbáme na nejvyšší kvalitu služeb." },
      { question: "Stříháte i děti a seniory?", answer: "Ano, dětský střih je za 349 Kč (klasický) nebo 449 Kč (fade). Senior střih pro pány od 65 let stojí zvýhodněných 299 Kč." },
      { question: "Přijímáte platbu kartou?", answer: "Ano, můžete platit hotově i kartou." },
    ],
    internalLinks: [
      { label: "AK BARBERS Beroun", href: "/barber-beroun" },
      { label: "AK BARBERS Králův Dvůr", href: "/barber-kraluv-dvur" },
      { label: "AK BARBERS Hořovice", href: "/barber-horovice" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Plzeň", href: "/barber-plzen" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-kraluv-dvur (CZ)
  // ------------------------------------------------------------------
  "barber-kraluv-dvur": {
    lang: "cs",
    slug: "barber-kraluv-dvur",
    locationId: "kraluv-dvur",
    title: "Barber Králův Dvůr | AK BARBERS – stříhání od 449 Kč",
    description:
      "Profesionální barbershop v Králově Dvoře, 4.8★ a 90+ recenzí. Walk-in bez objednání. Pánské stříhání od 449 Kč. Plzeňská 396, parkování zdarma u Alberta.",
    keywords: [
      "barber králův dvůr",
      "barbershop králův dvůr",
      "pánské stříhání králův dvůr",
      "kadeřnictví králův dvůr",
      "barber u alberta králův dvůr",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Barber Králův Dvůr",
    localityDescription: [
      "AK BARBERS Králův Dvůr najdete na adrese Plzeňská 396, v klidné části města s výbornou dostupností. Z autobusové zastávky Beroun, Plzeňka (autobusy 380, 631, 633) to je k nám jen pár kroků. Z vlakového nádraží Králův Dvůr na lince Praha–Plzeň se k nám snadno dostanete. Parkování je zdarma na parkovišti Albert hned vedle pobočky a také v okolních ulicích.",
      "Králův Dvůr je město bezprostředně sousedící s Berounem, zasazené v malebné krajině u řeky Litavky. Místní i lidé z okolních obcí jako Zdice, Žebrák či Hořovice u nás najdou profesionální barberské služby bez nutnosti dojíždět do Prahy. Naše pobočka je oblíbená díky pohodové atmosféře, rychlému servisu a přátelskému přístupu.",
      "Fungujeme výhradně walk-in — přijďte kdykoliv bez objednání. Otevřeno máme Po–Pá 9:00–19:30 a So–Ne 9:00–14:00, tedy celý týden včetně víkendů.",
    ],
    services: [
      { name: "Klasické pánské stříhání", price: "449 Kč" },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč" },
      { name: "Senior pánský střih (65+)", price: "299 Kč" },
      { name: "Dětský střih (1–15 let)", price: "349 / 449 Kč" },
      { name: "Úprava vousů", price: "399 Kč" },
      { name: "Střih vlasů a úprava vousů", price: "799 Kč" },
    ],
    aboutText:
      "V AK BARBERS pracujeme podle přísných standardů kvality. Každý nový barber prochází profesionálním zaškolením v naší AK BARBERS Academy a teprve poté nastupuje do provozu. Preciznost, čistota a důraz na detail jsou základem naší práce. Díky tomu držíme špičkovou úroveň služeb na každé pobočce — a naši zákazníci se k nám rádi vrací.",
    faq: [
      { question: "Kde přesně je AK BARBERS Králův Dvůr?", answer: "Na adrese Plzeňská 396, 267 01 Králův Dvůr. Hned vedle supermarketu Albert, s bezplatným parkováním." },
      { question: "Musím se objednat?", answer: "Ne, fungujeme výhradně walk-in. Přijďte kdykoliv během otevírací doby a obsloužíme vás bez čekání." },
      { question: "Jaká je otevírací doba?", answer: "Po–Pá 9:00–19:30, So–Ne 9:00–14:00. Otevřeno máme celý týden." },
      { question: "Kolik stojí střih v Králově Dvoře?", answer: "Klasické pánské stříhání stojí 449 Kč, Skin Fade 499 Kč. Balíček střih + vousy je za 799 Kč. Senior střih za 299 Kč." },
      { question: "Kde zaparkuji?", answer: "Zdarma na parkovišti Albert přímo vedle pobočky nebo v okolních ulicích na Plzeňské. Parkování je bezplatné." },
      { question: "Stříháte i děti?", answer: "Ano, dětský střih pro chlapce od 1 do 15 let za 349 Kč (klasický) nebo 449 Kč (fade varianty)." },
      { question: "Máte pobočku i v Berouně?", answer: "Ano, máme dvě pobočky v sousedním Berouně — AK BARBERS Beroun na Havlíčkově (walk-in) a Beroun 2 VIP Club na Plzeňské (rezervace)." },
    ],
    internalLinks: [
      { label: "AK BARBERS Beroun", href: "/barber-beroun" },
      { label: "AK BARBERS Hořovice", href: "/barber-horovice" },
      { label: "AK BARBERS Plzeň", href: "/barber-plzen" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Králův Dvůr", href: "/barber-kraluv-dvur" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-horovice (CZ)
  // ------------------------------------------------------------------
  "barber-horovice": {
    lang: "cs",
    slug: "barber-horovice",
    locationId: "horovice",
    title: "Barber Hořovice | AK BARBERS – pánské stříhání od 449 Kč",
    description:
      "Profesionální barbershop v Hořovicích, 4.8★ a 100+ recenzí. Walk-in i rezervace. Pánské stříhání od 449 Kč. Fügnerova 374/1, u vlakového nádraží.",
    keywords: [
      "barber hořovice",
      "barbershop hořovice",
      "pánské stříhání hořovice",
      "kadeřnictví muži hořovice",
      "barber hořovice u nádraží",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Barber Hořovice",
    localityDescription: [
      "AK BARBERS Hořovice sídlí na Fügnerově 374/1, v centru města s výbornou dopravní dostupností. Z vlakového nádraží Hořovice na hlavní lince Praha–Plzeň to k nám je pouhých 5 minut chůze. Autobusem 384 se sem dostanete z Prahy (Zličín) přes Zdice. Parkování je bezplatné přímo na Fügnerově ulici i na nedalekém Palackého náměstí.",
      "Hořovice jsou malebné město na pomezí Brd a Křivoklátska, známé svým zámkem a přátelskou atmosférou. Naše pobočka slouží nejen místním, ale i lidem z okolních obcí jako Zdice, Žebrák, Komárov nebo Cerhovice. Díky poloze u železničního koridoru Praha–Plzeň jsme snadno dostupní i pro cestující projíždějící regionem.",
      "Otevřeno máme Po–Pá 10:00–19:30 a So–Ne 10:00–14:30. Fungujeme walk-in i s možností online rezervace přes Booqme. S hodnocením 4.8★ a více než 100 recenzemi patříme mezi nejlépe hodnocené barbershopy v regionu.",
    ],
    services: [
      { name: "Klasické pánské stříhání", price: "449 Kč" },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč" },
      { name: "Senior pánský střih (65+)", price: "299 Kč" },
      { name: "Dětský střih (1–15 let)", price: "349 / 449 Kč" },
      { name: "Úprava vousů", price: "399 Kč" },
      { name: "Střih vlasů a úprava vousů", price: "799 Kč" },
    ],
    aboutText:
      "V AK BARBERS pracujeme podle přísných standardů kvality. Každý nový barber prochází profesionálním zaškolením v naší AK BARBERS Academy a teprve poté nastupuje do provozu. Preciznost, čistota a důraz na detail jsou základem naší práce. Díky tomu držíme špičkovou úroveň služeb na každé pobočce — a naši zákazníci se k nám rádi vrací.",
    faq: [
      { question: "Kde se nachází AK BARBERS Hořovice?", answer: "Na adrese Fügnerova 374/1, 268 01 Hořovice. V centru města, 5 minut chůze od vlakového nádraží." },
      { question: "Musím se objednat předem?", answer: "Nemusíte, fungujeme walk-in. Pokud preferujete rezervaci, můžete si ji vytvořit online přes Booqme." },
      { question: "Jaká je otevírací doba?", answer: "Po–Pá 10:00–19:30, So–Ne 10:00–14:30. Otevřeno máme celý týden včetně víkendů." },
      { question: "Kolik stojí pánský střih v Hořovicích?", answer: "Klasické pánské stříhání stojí 449 Kč, Skin Fade 499 Kč. Balíček střih + vousy je za 799 Kč. Senior střih za zvýhodněných 299 Kč." },
      { question: "Kde zaparkuji?", answer: "Bezplatné parkování je k dispozici přímo na Fügnerově ulici a na Palackého náměstí nedaleko pobočky." },
      { question: "Jak se dostanu vlakem?", answer: "Vlakové nádraží Hořovice leží na hlavní trase Praha–Plzeň. Z nádraží k nám je 5 minut chůze. Vlaky jezdí pravidelně z Prahy i z Plzně." },
      { question: "Stříháte i děti a seniory?", answer: "Ano, dětský střih je za 349 Kč (klasický) nebo 449 Kč (fade). Senior střih pro pány od 65 let stojí zvýhodněných 299 Kč." },
      { question: "Mohu platit kartou?", answer: "Ano, přijímáme platbu hotově i platební kartou." },
    ],
    internalLinks: [
      { label: "AK BARBERS Beroun", href: "/barber-beroun" },
      { label: "AK BARBERS Králův Dvůr", href: "/barber-kraluv-dvur" },
      { label: "AK BARBERS Plzeň", href: "/barber-plzen" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Hořovice", href: "/barber-horovice" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-slany (CZ)
  // ------------------------------------------------------------------
  "barber-slany": {
    lang: "cs",
    slug: "barber-slany",
    locationId: "slany",
    title: "Barber Slaný | AK BARBERS – stříhání od 399 Kč + slevy",
    description:
      "Profesionální barbershop ve Slaném, 4.7★ a 85+ recenzí. Walk-in i rezervace. Pánské stříhání od 399 Kč, sleva 25% pro PČR/HZS/ZZS/ISIC. Třebízského 182.",
    keywords: [
      "barber slaný",
      "barbershop slaný",
      "pánské stříhání slaný",
      "kadeřnictví muži slaný",
      "barber slaný sleva",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Barber Slaný",
    localityDescription: [
      "AK BARBERS Slaný sídlí na Třebízského 182, v historickém centru královského města Slaný. Z autobusového nádraží Slaný (linky 609, 456, 590) to k nám je jen 5 minut chůze. Z vlakového nádraží se snadno dostanete spojením na Kladno a dále do Prahy. Parkovat můžete v centru s parkovacím kotoučem nebo v okolí Masarykova náměstí.",
      "Slaný je útulné středočeské město s bohatou historií, dominantou gotického kostela a přilehlým náměstím plným kaváren a obchůdků. AK BARBERS Slaný nabízí jako jediný barbershop ve městě profesionální služby na úrovni velkoměstských poboček — navíc s nejnižším základním ceníkem v celé síti a exkluzivní slevou 25 % pro příslušníky PČR, HZS, ZZS a držitele karet ISIC.",
      "Otevřeno máme Po–Pá 9:00–19:30 a So–Ne 9:00–14:00. Fungujeme walk-in i s online rezervací přes Booqme. Přijďte si užít kvalitní střih za férovou cenu.",
    ],
    services: [
      { name: "Klasické pánské stříhání", price: "399 Kč (PČR/HZS/ZZS/ISIC 299 Kč)" },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč" },
      { name: "Senior pánský střih (65+)", price: "249 Kč" },
      { name: "Dětský střih (1–15 let)", price: "299 / 399 Kč" },
      { name: "Úprava vousů", price: "349 Kč" },
      { name: "Střih vlasů a úprava vousů", price: "749 Kč" },
    ],
    aboutText:
      "V AK BARBERS pracujeme podle přísných standardů kvality. Každý nový barber prochází profesionálním zaškolením v naší AK BARBERS Academy a teprve poté nastupuje do provozu. Preciznost, čistota a důraz na detail jsou základem naší práce. Díky tomu držíme špičkovou úroveň služeb na každé pobočce — a naši zákazníci se k nám rádi vrací.",
    faq: [
      { question: "Kde se nachází AK BARBERS Slaný?", answer: "Na adrese Třebízského 182, 274 01 Slaný. V centru města, 5 minut chůze od autobusového nádraží." },
      { question: "Musím se objednat předem?", answer: "Ne, fungujeme walk-in. Online rezervaci nabízíme přes Booqme pro ty, kdo si chtějí zajistit konkrétní čas." },
      { question: "Jaká je otevírací doba?", answer: "Po–Pá 9:00–19:30, So–Ne 9:00–14:00. Máme otevřeno celý týden včetně víkendů." },
      { question: "Kolik stojí pánský střih ve Slaném?", answer: "Klasické pánské stříhání stojí 399 Kč. Pro příslušníky PČR, HZS, ZZS a držitele karet ISIC nabízíme slevu 25 % — střih tak vyjde na 299 Kč." },
      { question: "Jaké slevy nabízíte?", answer: "Nabízíme 25% slevu na klasické pánské stříhání pro příslušníky Policie ČR, Hasičského záchranného sboru, Zdravotnické záchranné služby a držitele karet ISIC. Stačí se prokázat průkazem." },
      { question: "Kde zaparkuji?", answer: "V centru Slaného s parkovacím kotoučem nebo v okolí Masarykova náměstí." },
      { question: "Stříháte i děti a seniory?", answer: "Ano, dětský střih je za 299 Kč (klasický) nebo 399 Kč (fade). Senior střih pro pány od 65 let je za zvýhodněných 249 Kč." },
      { question: "Mohu platit kartou?", answer: "Ano, přijímáme platbu hotově i kartou." },
    ],
    internalLinks: [
      { label: "AK BARBERS Praha 6 – Bělohorská", href: "/barber-praha-6" },
      { label: "AK BARBERS – Praha Máj", href: "/barber-praha-1" },
      { label: "AK BARBERS Beroun", href: "/barber-beroun" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Slaný", href: "/barber-slany" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-nitra (SK)
  // ------------------------------------------------------------------
  "barber-nitra": {
    lang: "sk",
    slug: "barber-nitra",
    locationId: "nitra",
    title: "Barber Nitra – OC Mlyny | AK BARBERS Top barbershop",
    description:
      "Najlepší barbershop v Nitre, 4.8★ a 95+ recenzií. Walk-in aj rezervácia. Pánske strihanie od 17 €. OC MLYNY, Štefánikova trieda 35/61. Otvorené 7 dní.",
    keywords: [
      "barber nitra",
      "barbershop nitra",
      "pánske strihanie nitra",
      "barber OC mlyny nitra",
      "kaderníctvo muži nitra",
      "pánske holictvo nitra",
      "holictvo nitra",
      "barber shop nitra",
    ],
    ogLocale: "sk_SK",
    heroHeading: "Barber Nitra – OC Mlyny",
    localityDescription: [
      "AK BARBERS Nitra nájdete v obchodnom centre MLYNY na Štefánikovej triede 35/61, v samom centre Nitry. OC Mlyny je najväčšie nákupné centrum v meste, priamo napojené na MHD — zastávka CENTRUM, Mlyny obsluhuje linky 1, 2, 4, 6, 7, 8, 9, 10 a ďalšie. Z hlavnej autobusovej a vlakovej stanice je to k nám len 10 minút pešo. Parkovanie v OC Mlyny je prvú hodinu zadarmo v pracovné dni a 2 hodiny zadarmo cez víkend.",
      "Nitra je starobylé mesto s bohatou históriou — Nitriansky hrad, pešia zóna a mestský park vytvárajú príjemné prostredie pre život aj návštevu. AK BARBERS Nitra je súčasťou českej siete prémiových barbershopov a prináša do Nitry rovnakú kvalitu služieb, akú poznáte z Prahy, Plzne alebo Berouna. S hodnotením 4.8★ a viac ako 95 recenziami patríme medzi najlepšie hodnotené barbershopy v Nitrianskom kraji.",
      "Otvorené máme Po–Ne 9:00–21:00, teda každý deň v týždni vrátane víkendov. Fungujeme walk-in aj s možnosťou online rezervácie cez Booqme. Ceny sú v eurách — klasický pánsky strih od 17 €.",
    ],
    services: [
      { name: "Klasický pánsky strih", price: "17 €" },
      { name: "Strih + úprava brady", price: "27 €" },
      { name: "Detský strih (1–15 rokov)", price: "12 / 15 €" },
      { name: "Úprava brady", price: "14 €" },
    ],
    aboutText:
      "V AK BARBERS pracujeme podľa prísnych štandardov kvality. Každý nový barber prechádza profesionálnym zaškolením v našej AK BARBERS Academy a až potom nastupuje do prevádzky. Precíznosť, čistota a dôraz na detail sú základom našej práce. Vďaka tomu držíme špičkovú úroveň služieb na každej pobočke — a naši zákazníci sa k nám radi vracajú.",
    faq: [
      { question: "Kde sa nachádza AK BARBERS Nitra?", answer: "Nájdete nás v OC MLYNY, Štefánikova trieda 35/61, 949 01 Nitra. Priamo v centre mesta, s výbornou dostupnosťou MHD." },
      { question: "Musím sa objednať vopred?", answer: "Nie, fungujeme na princípe walk-in — príďte kedykoľvek počas otváracej doby. Ak preferujete istotu, môžete si rezervovať termín online cez Booqme." },
      { question: "Aká je otváracie doba?", answer: "Po–Ne 9:00–21:00. Máme otvorené každý deň v týždni vrátane víkendov." },
      { question: "Koľko stojí pánsky strih v Nitre?", answer: "Klasický pánsky strih stojí 17 €. Kompletný balíček strih + úprava brady je za 27 €. Pre PZ, HaZZ, ZZS a ISIC máme zľavu 25 % — strih za 13 €." },
      { question: "Kde zaparkujem?", answer: "Parkovanie v OC Mlyny: prvá hodina zadarmo v pracovné dni, 2 hodiny zadarmo cez víkendy. Každá ďalšia hodina od 1 €." },
      { question: "Strihajú aj detí?", answer: "Áno, detský strih pre chlapcov od 1 do 15 rokov stojí 12 € (klasický) alebo 15 € (fade varianty)." },
      { question: "Môžem platiť kartou?", answer: "Áno, prijímame platbu v hotovosti aj platobnou kartou." },
      { question: "Je AK BARBERS česká sieť?", answer: "Áno, AK BARBERS je sieť prémiových barbershopov založená v Čechách. Pobočka v Nitre je naša prvá na Slovensku a ponúka rovnakú kvalitu služieb ako naše české pobočky." },
    ],
    internalLinks: [
      { label: "AK BARBERS – Praha Máj", href: "/barber-praha-1" },
      { label: "AK BARBERS Plzeň", href: "/barber-plzen" },
      { label: "AK BARBERS Beroun", href: "/barber-beroun" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Nitra", href: "/barber-nitra" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-jesenice (CZ) — coming soon
  // ------------------------------------------------------------------
  "barber-jesenice": {
    lang: "cs",
    slug: "barber-jesenice",
    locationId: "jesenice",
    title: "Barber Jesenice u Prahy | AK BARBERS – otevíráme 15. 4. 2026",
    description:
      "AK BARBERS otevírá novou pobočku v Jesenici u Prahy! Budějovická 371. Slavnostní otevření 15. 4. 2026. Profesionální pánské stříhání blízko Prahy.",
    keywords: [
      "barber jesenice",
      "barbershop jesenice u prahy",
      "nový barbershop jesenice",
      "pánské stříhání jesenice",
      "barber jesenice otevření",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Barber Jesenice u Prahy – již brzy!",
    localityDescription: [
      "AK BARBERS připravuje novou pobočku v Jesenici u Prahy na adrese Budějovická 371 – najdete nás uvnitř supermarketu Albert, hned u pokladen. Slavnostní otevření je naplánováno na 15. dubna 2026. Jesenice je dynamicky rostoucí obec jižně od Prahy, kde dosud profesionální barbershop chyběl — a to se brzy změní.",
      "Jesenice u Prahy je oblíbenou rezidenční lokalitou pro rodiny i profesionály dojíždějící do hlavního města. Výborná dopravní dostupnost zajišťuje spojení autobusy 332, 334, 335, 337 a 339, přičemž linky 335, 337 a 339 vás dovezou přímo na metro Budějovická (linka C) a linka 334 na Smíchovské nádraží (metro B). Parkování bude k dispozici zdarma na parkovišti Albert a v okolí.",
      "Sledujte naše sociální sítě a web pro aktuální informace o otevření. Těšíme se na vás od 15. dubna 2026!",
    ],
    services: [],
    aboutText:
      "V AK BARBERS pracujeme podle přísných standardů kvality. Každý nový barber prochází profesionálním zaškolením v naší AK BARBERS Academy a teprve poté nastupuje do provozu. Preciznost, čistota a důraz na detail jsou základem naší práce. Díky tomu držíme špičkovou úroveň služeb na každé pobočce — a naši zákazníci se k nám rádi vrací.",
    faq: [
      { question: "Kdy otevírá AK BARBERS v Jesenici?", answer: "Slavnostní otevření je naplánováno na 15. dubna 2026. Sledujte naše sociální sítě pro aktuální informace." },
      { question: "Kde bude pobočka v Jesenici?", answer: "Na adrese Budějovická 371, Jesenice u Prahy – uvnitř supermarketu Albert, hned u pokladen. Parkování zdarma přímo u vchodu." },
      { question: "Jak se dostanu do Jesenice?", answer: "Autobusy 332, 334, 335, 337 a 339 ze zastávky Jesenice. Linky 335, 337, 339 jedou na metro Budějovická (C), linka 334 na Smíchovské nádraží (B)." },
      { question: "Bude parkování zdarma?", answer: "Ano, parkování bude k dispozici zdarma na parkovišti Albert a v okolních ulicích." },
      { question: "Bude potřeba rezervace?", answer: "Podrobnosti o formátu obsluhy (walk-in / rezervace) zveřejníme před otevřením na našem webu a sociálních sítích." },
      { question: "Jaké budou ceny?", answer: "Ceník bude zveřejněn před otevřením. Orientačně odpovídá ceníku ostatních poboček sítě AK BARBERS." },
      { question: "Mohu se přihlásit k odběru novinek?", answer: "Sledujte nás na Instagramu @ak.barbers.cz a Facebooku pro nejčerstvější informace o otevření pobočky v Jesenici." },
    ],
    internalLinks: [
      { label: "AK BARBERS – Praha Máj", href: "/barber-praha-1" },
      { label: "AK BARBERS Praha 5 – Smíchov", href: "/barber-smichov" },
      { label: "AK BARBERS Beroun", href: "/barber-beroun" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Jesenice", href: "/barber-jesenice" },
    ],
  },

  // ------------------------------------------------------------------
  // barber-cerny-most (CZ) — Praha 14 / Praha 9 – Černý Most
  // ------------------------------------------------------------------
  "barber-cerny-most": {
    lang: "cs",
    slug: "barber-cerny-most",
    locationId: "cerny-most",
    title: "Barber Praha 9 – Černý Most | AK BARBERS Bryksova",
    description:
      "Prémiový barbershop na Černém Mostě, Bryksova 758/62. Walk-in bez objednání. Pánské stříhání od 449 Kč, skin fade, úprava vousů. 5 min od metra Černý Most.",
    keywords: [
      "barber praha 9",
      "barber černý most",
      "barbershop černý most",
      "barbershop praha 14",
      "pánské stříhání černý most",
      "pánské stříhání praha 9",
      "barber bryksova",
      "barber u metra černý most",
      "holičství černý most",
      "kadeřnictví muži praha 9",
      "barber shop praha 14",
      "pánské holičství praha 9",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Barber Praha 9 – Černý Most",
    localityDescription: [
      "AK BARBERS Černý Most najdete na adrese Bryksova 758/62, v srdci sídliště Černý Most – městská část Praha 14. Pobočka je jen 5 minut chůze od konečné stanice metra Černý Most (linka B), která vás spojí přímo s centrem Prahy přes Florenc, Náměstí Republiky i Anděl. Hned vedle je i autobusový terminál Černý Most s desítkami regionálních i městských linek (110, 163, 181, 221, 223, 263, 269, 273, 296) a tramvajová trať s linkami 19 a 25.",
      "Černý Most je největší pražské sídliště a zároveň dopravní uzel východního okraje Prahy – přirozeně se sem sjíždějí lidé z Kyjí, Hostavic, Dolních a Horních Počernic, Hloubětína, Újezdu nad Lesy, ale také z Mladoboleslavska a Nymburska. V okolí pobočky najdete obrovské obchodní centrum OC Černý Most s IKEA i multikinem, novou zástavbu v okolí Bryksovy, Mansfeldovy a Arnošta Valenty. Zaparkovat můžete zdarma na P+R Černý Most (cca 40 Kč/den), v OC Černý Most (1. hodina zdarma ve všední dny) nebo v okolních modrých zónách.",
      "Fungujeme jako walk-in — přijďte kdykoliv bez objednání a užijte si profesionální střih od vyškolených barberů AK BARBERS. Otevřeno máme Po–Pá 9:00–19:30 a So–Ne 9:00–14:00, tedy celý týden včetně víkendů. Na Černém Mostě navazujeme na naši osvědčenou kvalitu z Prahy 1 Máj, Prahy 5 Smíchov a Prahy 6 Břevnov.",
    ],
    services: [
      { name: "Klasické pánské stříhání", price: "449 Kč" },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč" },
      { name: "Senior pánský střih (65+)", price: "299 Kč" },
      { name: "Dětský střih (1–15 let)", price: "349 / 449 Kč" },
      { name: "Úprava vousů", price: "399 Kč" },
      { name: "Střih vlasů a úprava vousů", price: "799 Kč" },
    ],
    aboutText:
      "V AK BARBERS pracujeme podle přísných standardů kvality. Každý nový barber prochází profesionálním zaškolením v naší AK BARBERS Academy a teprve poté nastupuje do provozu. Preciznost, čistota a důraz na detail jsou základem naší práce. Díky tomu držíme špičkovou úroveň služeb na každé pobočce — a naši zákazníci se k nám rádi vrací.",
    faq: [
      { question: "Kde přesně se nachází AK BARBERS Černý Most?", answer: "Na adrese Bryksova 758/62, 198 00 Praha 14 – Černý Most. Administrativně patříme pod MČ Praha 14, poštovně pod Prahu 9. Jsme 5 minut chůze od konečné stanice metra Černý Most (linka B) a autobusového terminálu." },
      { question: "Je to Praha 9 nebo Praha 14?", answer: "Obojí platí – Černý Most historicky a poštou patří pod Prahu 9 (PSČ 198 00), administrativně je součástí městské části Praha 14. V běžné řeči lidé říkají „Praha 9 – Černý Most“, úředně je to Praha 14." },
      { question: "Jak se k vám nejlépe dostanu MHD?", answer: "Nejrychleji metrem B až na konečnou Černý Most, odtud 5 minut pěšky Bryksovou ulicí. Autobusem do terminálu Černý Most (linky 110, 163, 181, 221, 223, 263, 269, 273, 296), tramvají 19 nebo 25." },
      { question: "Musím se objednat předem?", answer: "Ne, fungujeme výhradně walk-in — přijďte kdykoliv během otevírací doby a obsloužíme vás bez rezervace." },
      { question: "Jaká je otevírací doba?", answer: "Po–Pá 9:00–19:30, So–Ne 9:00–14:00. Otevřeno máme celý týden včetně víkendů." },
      { question: "Kolik stojí pánský střih na Černém Mostě?", answer: "Klasické pánské stříhání stojí 449 Kč, Skin Fade 499 Kč. Kompletní balíček střih + úprava vousů je za 799 Kč. Senior střih (65+) za zvýhodněných 299 Kč a dětský střih od 349 Kč." },
      { question: "Kde můžu zaparkovat?", answer: "Na P+R Černý Most (cca 40 Kč/den) hned u metra, v parkovacím domě OC Černý Most (1. hodina zdarma ve všední dny, víkendy déle) nebo v modrých zónách v okolí Bryksovy ulice." },
      { question: "Stříháte i děti?", answer: "Ano, dětský střih pro chlapce od 1 do 15 let stojí 349 Kč (klasický) nebo 449 Kč (Skin Fade / Low Fade / Crop Fade / Buzz Cut). Rádi poradíme s výběrem střihu." },
      { question: "Děláte skin fade?", answer: "Ano, skin fade je jedna z našich nejžádanějších služeb. Naši barbeři ovládají low, mid i high fade se strojkem od 0 mm, precizním stínováním a plynulými přechody. Cena 499 Kč." },
      { question: "Nabízíte slevu pro seniory nebo IZS?", answer: "Ano, senior pánský střih pro pány od 65 let je za zvýhodněných 299 Kč. Kontaktujte nás přímo na pobočce ohledně aktuálních slev pro PČR, HZS, ZZS a ISIC." },
      { question: "Můžu platit kartou?", answer: "Ano, přijímáme platbu hotově i platební kartou, včetně Apple Pay a Google Pay." },
      { question: "Máte i další pobočky v Praze?", answer: "Ano, v Praze máme pobočky Praha 1 Máj (Národní 63/26, centrum), Praha 5 Smíchov (Toyen 3410/7, u metra Anděl) a Praha 6 Břevnov (Bělohorská 1393/44). Všechny pracují pod jednotnými standardy AK BARBERS." },
    ],
    internalLinks: [
      { label: "AK BARBERS – Praha Máj (Praha 1)", href: "/barber-praha-1" },
      { label: "AK BARBERS Praha 5 – Smíchov", href: "/barber-smichov" },
      { label: "AK BARBERS Praha 6 – Bělohorská", href: "/barber-praha-6" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Praha 9 – Černý Most", href: "/barber-cerny-most" },
    ],
  },
};

// ===================================================================
// SERVICE PAGES (8)
// ===================================================================

export const seoServicePages: Record<string, SeoServiceContent> = {
  // ------------------------------------------------------------------
  // pansky-strih-praha-1 (CZ)
  // ------------------------------------------------------------------
  "pansky-strih-praha-1": {
    lang: "cs",
    slug: "pansky-strih-praha-1",
    locationId: "praha-1",
    serviceType: "haircut",
    alternateSlug: "en/mens-haircut-prague-1",
    crossLocationSlug: "pansky-strih-praha-6",
    crossServiceSlug: "skin-fade-praha-1",
    locationSlug: "barber-praha-1",
    title: "Pánské stříhání Praha 1 – Nové Město | AK BARBERS od 499 Kč",
    description:
      "Profesionální pánské stříhání v centru Prahy 1 na Národní třídě. Klasický střih od 499 Kč, konzultace a styling v ceně. Walk-in i rezervace. AK BARBERS – Top #1 barber v Praze.",
    keywords: [
      "pánské stříhání praha 1",
      "pánský střih centrum prahy",
      "kadeřnictví muži praha",
      "klasický střih praha",
      "barber střih národní třída",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Pánské stříhání Praha 1",
    heroSubheading: "Národní třída – Staré Město",
    serviceDetail: [
      "Klasické pánské stříhání v AK BARBERS zahrnuje důkladnou konzultaci, kde s vámi barber probere styl a délku střihu. Poté následuje precizní střih strojkem nebo nůžkami přesně na míru vašim představám, úprava kontúr a konečný styling.",
      "Střih trvá přibližně 30–40 minut a zahrnuje umytí vlasů, foukanou a styling. Naši barbeři jsou vyškoleni v AK BARBERS Academy, takže můžete očekávat profesionální výsledek pokaždé.",
      "Služba je ideální pro muže, kteří hledají kvalitní klasický střih bez zbytečného čekání. Přijďte bez objednání nebo si zarezervujte termín online.",
    ],
    servicePrice: "499 Kč",
    whyUs: [
      "Profesionální barbeři vyškolení v AK BARBERS Academy",
      "Konzultace, střih a styling v ceně",
      "Prémiové vybavení a kosmetika",
      "Otevřeno 7 dní v týdnu včetně víkendů",
      "Walk-in bez objednání nebo online rezervace",
    ],
    otherServices: [
      { name: "Střih + úprava vousů", price: "889 Kč" },
      { name: "Úprava vousů", price: "399 Kč" },
      { name: "Dětský střih (1–15 let)", price: "349 / 449 Kč" },
    ],
    faq: [
      { question: "Kolik stojí pánský střih v Praze 1?", answer: "Klasické pánské stříhání v AK BARBERS Praha 1 stojí 499 Kč. V ceně je konzultace, střih strojkem nebo nůžkami, foukaná a finální styling." },
      { question: "Jak dlouho trvá pánský střih?", answer: "Střih trvá přibližně 30–40 minut, v závislosti na zvoleném stylu a délce vlasů." },
      { question: "Musím se objednat na střih?", answer: "Ne, fungujeme walk-in. Přijďte kdykoliv během otevírací doby. Online rezervaci nabízíme přes Booqme." },
      { question: "Kde přesně se stříhárna nachází?", answer: "Na adrese Národní 949/19, Praha 1 – Staré Město, přímo u metra Národní třída (linka B)." },
      { question: "Stříháte i delší pánské vlasy?", answer: "Ano, za cenu 499 Kč (stejná jako Skin Fade). Naši barbeři pracují i s delšími vlasy — nůžkami, prořezáváním a texturováním." },
    ],
    internalLinks: [
      { label: "Barber Praha 1 – všechny služby", href: "/barber-praha-1" },
      { label: "Skin Fade Praha 1", href: "/skin-fade-praha-1" },
      { label: "Pánský střih Praha 6", href: "/pansky-strih-praha-6" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Praha 1", href: "/barber-praha-1" },
      { name: "Pánské stříhání", href: "/pansky-strih-praha-1" },
    ],
  },

  // ------------------------------------------------------------------
  // pansky-strih-praha-6 (CZ)
  // ------------------------------------------------------------------
  "pansky-strih-praha-6": {
    lang: "cs",
    slug: "pansky-strih-praha-6",
    locationId: "praha-6",
    serviceType: "haircut",
    alternateSlug: "en/mens-haircut-prague-6",
    crossLocationSlug: "pansky-strih-praha-1",
    crossServiceSlug: "skin-fade-praha-6",
    locationSlug: "barber-praha-6",
    title: "Pánské stříhání Praha 6 – Břevnov | AK BARBERS od 449 Kč",
    description:
      "Profesionální pánské stříhání na Praze 6, Bělohorská ulice. Klasický střih od 449 Kč, konzultace a styling v ceně. Walk-in i rezervace. AK BARBERS – Top barber na Praze 6.",
    keywords: [
      "pánské stříhání praha 6",
      "pánský střih břevnov",
      "kadeřnictví muži praha 6",
      "klasický střih praha 6",
      "barber střih bělohorská",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Pánské stříhání Praha 6",
    heroSubheading: "Bělohorská – Břevnov",
    serviceDetail: [
      "Klasické pánské stříhání v AK BARBERS zahrnuje důkladnou konzultaci, kde s vámi barber probere styl a délku střihu. Poté následuje precizní střih strojkem nebo nůžkami přesně na míru vašim představám, úprava kontúr a konečný styling.",
      "Střih trvá přibližně 30–40 minut a zahrnuje umytí vlasů, foukanou a styling. Naši barbeři jsou vyškoleni v AK BARBERS Academy, takže můžete očekávat profesionální výsledek pokaždé.",
      "Služba je ideální pro muže, kteří hledají kvalitní klasický střih bez zbytečného čekání. Přijďte bez objednání nebo si zarezervujte termín online.",
    ],
    servicePrice: "449 Kč",
    whyUs: [
      "Profesionální barbeři vyškolení v AK BARBERS Academy",
      "Konzultace, střih a styling v ceně",
      "Prémiové vybavení a kosmetika",
      "Klidné prostředí v Břevnově, mimo shon centra",
      "Walk-in bez objednání nebo online rezervace",
    ],
    otherServices: [
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč", link: "/skin-fade-praha-6" },
      { name: "Úprava vousů", price: "349 Kč" },
      { name: "Střih + úprava vousů", price: "749 Kč" },
      { name: "Senior střih (65+)", price: "249 Kč" },
      { name: "Dětský střih (1–15 let)", price: "299 / 399 Kč" },
    ],
    faq: [
      { question: "Kolik stojí pánský střih na Praze 6?", answer: "Klasické pánské stříhání v AK BARBERS Praha 6 stojí 449 Kč. V ceně je konzultace, střih, foukaná a finální styling." },
      { question: "Jak dlouho trvá střih?", answer: "Přibližně 30–40 minut, v závislosti na zvoleném stylu." },
      { question: "Musím se objednat?", answer: "Ne, fungujeme walk-in. Online rezervace je dostupná přes Booqme." },
      { question: "Kde se nachází pobočka na Praze 6?", answer: "Na adrese Bělohorská 1393/44, Praha 6 – Břevnov, přímo u tramvajové zastávky Malovanka." },
      { question: "Máte otevřeno i o víkendu?", answer: "V sobotu ano (9:00–12:00). V neděli máme zavřeno. Alternativně naše pobočka Praha 1 má otevřeno 7 dní v týdnu." },
    ],
    internalLinks: [
      { label: "Barber Praha 6 – všechny služby", href: "/barber-praha-6" },
      { label: "Skin Fade Praha 6", href: "/skin-fade-praha-6" },
      { label: "Pánský střih Praha 1", href: "/pansky-strih-praha-1" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Praha 6", href: "/barber-praha-6" },
      { name: "Pánské stříhání", href: "/pansky-strih-praha-6" },
    ],
  },

  // ------------------------------------------------------------------
  // skin-fade-praha-1 (CZ)
  // ------------------------------------------------------------------
  "skin-fade-praha-1": {
    lang: "cs",
    slug: "skin-fade-praha-1",
    locationId: "praha-1",
    serviceType: "skin-fade",
    alternateSlug: "en/skin-fade-prague-1",
    crossLocationSlug: "skin-fade-praha-6",
    crossServiceSlug: "pansky-strih-praha-1",
    locationSlug: "barber-praha-1",
    title: "Skin Fade Praha 1 – Nové Město | AK BARBERS od 499 Kč",
    description:
      "Profesionální skin fade v centru Prahy 1 na Národní třídě. Low, mid i high fade od 499 Kč. Precizní přechody od 0 mm, shaver detailing. Walk-in i rezervace. AK BARBERS.",
    keywords: [
      "skin fade praha 1",
      "fade střih praha",
      "fade barbershop praha centrum",
      "low fade praha",
      "high fade praha 1",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Skin Fade Praha 1",
    heroSubheading: "Národní třída – Staré Město",
    serviceDetail: [
      "Skin fade je jedním z nejnáročnějších a nejpopulárnějších střihů v moderním barberingu. V AK BARBERS začínáme konzultací, kde společně zvolíme typ fadu — low, mid nebo high — a styl horní části vlasů.",
      "Barber poté pracuje strojkem od 0 mm, postupně stínuje a vytváří dokonale plynulé přechody. Používáme shaver pro čisté linie a detaily. Výsledkem je ostrý, moderní look s perfektním gradientem.",
      "Skin fade je vhodný pro všechny typy vlasů — rovné, vlnité i kudrnaté. Celý proces trvá přibližně 40–50 minut. Pro udržení tvaru doporučujeme návštěvu každé 2–3 týdny.",
    ],
    servicePrice: "499 Kč",
    whyUs: [
      "Specializace na fade strihy — naši barbeři prošli intenzivním školením",
      "Strojek od 0 mm, shaver detailing, precizní stínování",
      "Low, mid i high fade — vždy dle vaší volby",
      "Otevřeno 7 dní v týdnu včetně víkendů",
      "Walk-in bez objednání nebo online rezervace",
    ],
    otherServices: [
      { name: "Klasické pánské stříhání", price: "499 Kč", link: "/pansky-strih-praha-1" },
      { name: "Střih + úprava vousů", price: "889 Kč" },
      { name: "Úprava vousů", price: "399 Kč" },
      { name: "Dětský střih (1–15 let)", price: "349 / 449 Kč" },
    ],
    faq: [
      { question: "Kolik stojí skin fade v Praze 1?", answer: "Skin fade v AK BARBERS Praha 1 stojí 499 Kč. V ceně je konzultace, střih od 0 mm, shaver detailing, stínování a finální styling." },
      { question: "Jaký je rozdíl mezi low, mid a high fade?", answer: "Low fade začíná přechod těsně nad ušima, mid fade uprostřed hlavy a high fade vysoko na stranách. Během konzultace vám barber poradí, co nejlépe sedne vašemu obličeji." },
      { question: "Jak často se má skin fade obnovovat?", answer: "Pro udržení ostrého vzhledu doporučujeme návštěvu každé 2–3 týdny." },
      { question: "Je skin fade vhodný pro kudrnaté vlasy?", answer: "Ano, skin fade funguje skvěle i na kudrnatých vlasech. Barber přizpůsobí techniku stínování textuře vašich vlasů." },
      { question: "Musím se objednat?", answer: "Ne, fungujeme walk-in. Online rezervace je k dispozici přes Booqme." },
    ],
    internalLinks: [
      { label: "Barber Praha 1 – všechny služby", href: "/barber-praha-1" },
      { label: "Pánský střih Praha 1", href: "/pansky-strih-praha-1" },
      { label: "Skin Fade Praha 6", href: "/skin-fade-praha-6" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Praha 1", href: "/barber-praha-1" },
      { name: "Skin Fade", href: "/skin-fade-praha-1" },
    ],
  },

  // ------------------------------------------------------------------
  // skin-fade-praha-6 (CZ)
  // ------------------------------------------------------------------
  "skin-fade-praha-6": {
    lang: "cs",
    slug: "skin-fade-praha-6",
    locationId: "praha-6",
    serviceType: "skin-fade",
    alternateSlug: "en/skin-fade-prague-6",
    crossLocationSlug: "skin-fade-praha-1",
    crossServiceSlug: "pansky-strih-praha-6",
    locationSlug: "barber-praha-6",
    title: "Skin Fade Praha 6 – Břevnov | AK BARBERS od 499 Kč",
    description:
      "Profesionální skin fade na Praze 6, Bělohorská ulice. Low, mid i high fade od 499 Kč. Precizní přechody od 0 mm. Walk-in i rezervace. AK BARBERS.",
    keywords: [
      "skin fade praha 6",
      "fade střih praha 6",
      "fade barbershop břevnov",
      "low fade praha 6",
      "high fade břevnov",
    ],
    ogLocale: "cs_CZ",
    heroHeading: "Skin Fade Praha 6",
    heroSubheading: "Bělohorská – Břevnov",
    serviceDetail: [
      "Skin fade je jedním z nejnáročnějších a nejpopulárnějších střihů v moderním barberingu. V AK BARBERS začínáme konzultací, kde společně zvolíme typ fadu — low, mid nebo high — a styl horní části vlasů.",
      "Barber poté pracuje strojkem od 0 mm, postupně stínuje a vytváří dokonale plynulé přechody. Používáme shaver pro čisté linie a detaily. Výsledkem je ostrý, moderní look s perfektním gradientem.",
      "Skin fade je vhodný pro všechny typy vlasů — rovné, vlnité i kudrnaté. Celý proces trvá přibližně 40–50 minut. Pro udržení tvaru doporučujeme návštěvu každé 2–3 týdny.",
    ],
    servicePrice: "499 Kč",
    whyUs: [
      "Specializace na fade strihy — naši barbeři prošli intenzivním školením",
      "Strojek od 0 mm, shaver detailing, precizní stínování",
      "Low, mid i high fade — vždy dle vaší volby",
      "Klidné prostředí v Břevnově, mimo shon centra",
      "Walk-in bez objednání nebo online rezervace",
    ],
    otherServices: [
      { name: "Klasické pánské stříhání", price: "449 Kč", link: "/pansky-strih-praha-6" },
      { name: "Úprava vousů", price: "349 Kč" },
      { name: "Střih + úprava vousů", price: "749 Kč" },
      { name: "Senior střih (65+)", price: "249 Kč" },
      { name: "Dětský střih (1–15 let)", price: "299 / 399 Kč" },
    ],
    faq: [
      { question: "Kolik stojí skin fade na Praze 6?", answer: "Skin fade v AK BARBERS Praha 6 stojí 499 Kč. V ceně je konzultace, střih od 0 mm, shaver detailing, stínování a finální styling." },
      { question: "Jaký je rozdíl mezi low, mid a high fade?", answer: "Low fade začíná přechod těsně nad ušima, mid fade uprostřed hlavy a high fade vysoko na stranách. Barber vám poradí, co nejlépe sedne." },
      { question: "Jak často se má fade obnovovat?", answer: "Pro udržení ostrého vzhledu doporučujeme návštěvu každé 2–3 týdny." },
      { question: "Funguje skin fade i na kudrnatých vlasech?", answer: "Ano, skin fade skvěle funguje na všech typech vlasů včetně kudrnatých." },
      { question: "Kde vás najdu na Praze 6?", answer: "Na adrese Bělohorská 1393/44, Praha 6 – Břevnov, u tramvajové zastávky Malovanka." },
    ],
    internalLinks: [
      { label: "Barber Praha 6 – všechny služby", href: "/barber-praha-6" },
      { label: "Pánský střih Praha 6", href: "/pansky-strih-praha-6" },
      { label: "Skin Fade Praha 1", href: "/skin-fade-praha-1" },
      academyLink,
      careerLink,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Praha 6", href: "/barber-praha-6" },
      { name: "Skin Fade", href: "/skin-fade-praha-6" },
    ],
  },

  // ------------------------------------------------------------------
  // mens-haircut-prague-1 (EN)
  // ------------------------------------------------------------------
  "en/mens-haircut-prague-1": {
    lang: "en",
    slug: "en/mens-haircut-prague-1",
    locationId: "praha-1",
    serviceType: "haircut",
    alternateSlug: "pansky-strih-praha-1",
    crossLocationSlug: "en/mens-haircut-prague-6",
    crossServiceSlug: "en/skin-fade-prague-1",
    locationSlug: "en/barber-prague-1",
    title: "Men's Haircut Prague 1 – Old Town | AK BARBERS from 499 CZK",
    description:
      "Professional men's haircut in Prague 1 city centre, Národní třída. Classic cut from 499 CZK, consultation & styling included. Walk-ins & booking. AK BARBERS — Top barber in Prague.",
    keywords: [
      "men's haircut prague",
      "haircut old town prague",
      "barber prague center",
      "classic haircut prague",
      "men's barber prague 1",
    ],
    ogLocale: "en_US",
    heroHeading: "Men's Haircut Prague 1",
    heroSubheading: "Národní třída – Old Town",
    serviceDetail: [
      "A classic men's haircut at AK BARBERS starts with a thorough consultation where your barber discusses the style and length with you. Then comes a precision cut with clippers or scissors tailored exactly to your preferences, followed by contour shaping and final styling.",
      "The haircut takes approximately 30–40 minutes and includes a hair wash, blow-dry and styling. Our barbers are trained at the AK BARBERS Academy, so you can expect professional results every time.",
      "This service is perfect for men who want a quality classic haircut without long waits. Walk in without an appointment or book your slot online.",
    ],
    servicePrice: "499 CZK",
    whyUs: [
      "Professional barbers trained at AK BARBERS Academy",
      "Consultation, cut and styling included in the price",
      "Premium equipment and grooming products",
      "Open 7 days a week including weekends",
      "Walk-in friendly or book online via Booqme",
    ],
    otherServices: [
      { name: "Haircut & Beard Grooming", price: "889 CZK" },
      { name: "Beard Grooming", price: "399 CZK" },
      { name: "Kids' Haircut (1–15)", price: "349 / 449 CZK" },
    ],
    faq: [
      { question: "How much is a men's haircut in Prague 1?", answer: "A classic men's haircut at AK BARBERS Prague 1 costs 499 CZK. It includes consultation, cut with clippers or scissors, blow-dry and final styling." },
      { question: "How long does a haircut take?", answer: "Approximately 30–40 minutes, depending on the chosen style and hair length." },
      { question: "Do I need to book?", answer: "No, we operate on a walk-in basis. Online booking is also available via Booqme." },
      { question: "Where exactly is the shop?", answer: "At Národní 949/19, Prague 1 – Old Town, right by Národní třída metro station (Line B)." },
      { question: "Do you speak English?", answer: "Yes, our Prague 1 barbers are used to international clients and communicate fluently in English." },
    ],
    internalLinks: [
      { label: "Barber Prague 1 – all services", href: "/en/barber-prague-1" },
      { label: "Skin Fade Prague 1", href: "/en/skin-fade-prague-1" },
      { label: "Men's Haircut Prague 6", href: "/en/mens-haircut-prague-6" },
      academyLinkEn,
      careerLinkEn,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Prague 1", href: "/en/barber-prague-1" },
      { name: "Men's Haircut", href: "/en/mens-haircut-prague-1" },
    ],
  },

  // ------------------------------------------------------------------
  // mens-haircut-prague-6 (EN)
  // ------------------------------------------------------------------
  "en/mens-haircut-prague-6": {
    lang: "en",
    slug: "en/mens-haircut-prague-6",
    locationId: "praha-6",
    serviceType: "haircut",
    alternateSlug: "pansky-strih-praha-6",
    crossLocationSlug: "en/mens-haircut-prague-1",
    crossServiceSlug: "en/skin-fade-prague-6",
    locationSlug: "en/barber-prague-6",
    title: "Men's Haircut Prague 6 – Břevnov | AK BARBERS from 449 CZK",
    description:
      "Professional men's haircut in Prague 6, Bělohorská street. Classic cut from 449 CZK, consultation & styling included. Walk-ins & booking. AK BARBERS — Top barber in Prague 6.",
    keywords: [
      "men's haircut prague 6",
      "barber prague 6",
      "haircut near dejvická",
      "classic haircut prague 6",
      "men's barber brevnov",
    ],
    ogLocale: "en_US",
    heroHeading: "Men's Haircut Prague 6",
    heroSubheading: "Bělohorská – Břevnov",
    serviceDetail: [
      "A classic men's haircut at AK BARBERS starts with a thorough consultation where your barber discusses the style and length with you. Then comes a precision cut with clippers or scissors tailored exactly to your preferences, followed by contour shaping and final styling.",
      "The haircut takes approximately 30–40 minutes and includes a hair wash, blow-dry and styling. Our barbers are trained at the AK BARBERS Academy, so you can expect professional results every time.",
      "This service is perfect for men who want a quality classic haircut in a relaxed neighbourhood setting. Walk in without an appointment or book your slot online.",
    ],
    servicePrice: "449 CZK",
    whyUs: [
      "Professional barbers trained at AK BARBERS Academy",
      "Consultation, cut and styling included in the price",
      "Premium equipment and grooming products",
      "Relaxed neighbourhood setting away from the city centre",
      "Walk-in friendly or book online via Booqme",
    ],
    otherServices: [
      { name: "Skin Fade / Long Hair", price: "499 CZK", link: "/en/skin-fade-prague-6" },
      { name: "Beard Grooming", price: "349 CZK" },
      { name: "Haircut & Beard Grooming", price: "749 CZK" },
      { name: "Senior Haircut (65+)", price: "249 CZK" },
      { name: "Kids' Haircut (1–15)", price: "299 / 399 CZK" },
    ],
    faq: [
      { question: "How much is a men's haircut in Prague 6?", answer: "A classic men's haircut at AK BARBERS Prague 6 costs 449 CZK. Includes consultation, cut, blow-dry and styling." },
      { question: "How long does a haircut take?", answer: "About 30–40 minutes depending on the style." },
      { question: "Do I need a reservation?", answer: "No, walk-ins are welcome. Online booking is also available via Booqme." },
      { question: "Where is the Prague 6 branch?", answer: "At Bělohorská 1393/44, Prague 6 – Břevnov, right by the Malovanka tram stop, near Dejvická metro." },
      { question: "Are you open on weekends?", answer: "Saturday yes (9:00–12:00). Sunday we're closed. Our Prague 1 branch is open 7 days a week." },
    ],
    internalLinks: [
      { label: "Barber Prague 6 – all services", href: "/en/barber-prague-6" },
      { label: "Skin Fade Prague 6", href: "/en/skin-fade-prague-6" },
      { label: "Men's Haircut Prague 1", href: "/en/mens-haircut-prague-1" },
      academyLinkEn,
      careerLinkEn,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Prague 6", href: "/en/barber-prague-6" },
      { name: "Men's Haircut", href: "/en/mens-haircut-prague-6" },
    ],
  },

  // ------------------------------------------------------------------
  // skin-fade-prague-1 (EN)
  // ------------------------------------------------------------------
  "en/skin-fade-prague-1": {
    lang: "en",
    slug: "en/skin-fade-prague-1",
    locationId: "praha-1",
    serviceType: "skin-fade",
    alternateSlug: "skin-fade-praha-1",
    crossLocationSlug: "en/skin-fade-prague-6",
    crossServiceSlug: "en/mens-haircut-prague-1",
    locationSlug: "en/barber-prague-1",
    title: "Skin Fade Prague 1 – Old Town | AK BARBERS from 499 CZK",
    description:
      "Professional skin fade in Prague 1 city centre, Národní třída. Low, mid & high fade from 499 CZK. Seamless blending from 0mm, shaver detailing. Walk-ins & booking. AK BARBERS.",
    keywords: [
      "skin fade prague",
      "fade haircut prague",
      "best fade prague center",
      "low fade prague",
      "high fade prague 1",
    ],
    ogLocale: "en_US",
    heroHeading: "Skin Fade Prague 1",
    heroSubheading: "Národní třída – Old Town",
    serviceDetail: [
      "Skin fade is one of the most demanding and popular haircuts in modern barbering. At AK BARBERS we start with a consultation to choose the type of fade — low, mid or high — and the style for the top.",
      "Your barber then works with clippers from 0mm, gradually blending to create perfectly seamless transitions. We use a shaver for clean lines and fine details. The result is a sharp, modern look with a flawless gradient.",
      "Skin fade works great on all hair types — straight, wavy and curly. The whole process takes about 40–50 minutes. To maintain the shape, we recommend a visit every 2–3 weeks.",
    ],
    servicePrice: "499 CZK",
    whyUs: [
      "Fade specialists — our barbers undergo intensive training",
      "Clippers from 0mm, shaver detailing, precise blending",
      "Low, mid and high fade — always your choice",
      "Open 7 days a week including weekends",
      "Walk-in friendly or book online via Booqme",
    ],
    otherServices: [
      { name: "Classic Haircut", price: "499 CZK", link: "/en/mens-haircut-prague-1" },
      { name: "Haircut & Beard Grooming", price: "889 CZK" },
      { name: "Beard Grooming", price: "399 CZK" },
      { name: "Kids' Haircut (1–15)", price: "349 / 449 CZK" },
    ],
    faq: [
      { question: "How much is a skin fade in Prague 1?", answer: "Skin fade at AK BARBERS Prague 1 costs 499 CZK. Includes consultation, clipper cut from 0mm, shaver detailing, blending and final styling." },
      { question: "What's the difference between low, mid and high fade?", answer: "Low fade starts the transition just above the ears, mid fade in the middle, and high fade higher up on the sides. Your barber will advise what suits your face best." },
      { question: "How often should I get a skin fade?", answer: "For a sharp look, we recommend every 2–3 weeks." },
      { question: "Does skin fade work on curly hair?", answer: "Absolutely — skin fade looks fantastic on curly hair. Your barber adjusts the blending technique to your hair texture." },
      { question: "Do I need to book?", answer: "No, we welcome walk-ins. Online booking is available via Booqme." },
    ],
    internalLinks: [
      { label: "Barber Prague 1 – all services", href: "/en/barber-prague-1" },
      { label: "Men's Haircut Prague 1", href: "/en/mens-haircut-prague-1" },
      { label: "Skin Fade Prague 6", href: "/en/skin-fade-prague-6" },
      academyLinkEn,
      careerLinkEn,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Prague 1", href: "/en/barber-prague-1" },
      { name: "Skin Fade", href: "/en/skin-fade-prague-1" },
    ],
  },

  // ------------------------------------------------------------------
  // skin-fade-prague-6 (EN)
  // ------------------------------------------------------------------
  "en/skin-fade-prague-6": {
    lang: "en",
    slug: "en/skin-fade-prague-6",
    locationId: "praha-6",
    serviceType: "skin-fade",
    alternateSlug: "skin-fade-praha-6",
    crossLocationSlug: "en/skin-fade-prague-1",
    crossServiceSlug: "en/mens-haircut-prague-6",
    locationSlug: "en/barber-prague-6",
    title: "Skin Fade Prague 6 – Břevnov | AK BARBERS from 499 CZK",
    description:
      "Professional skin fade in Prague 6, Bělohorská street. Low, mid & high fade from 499 CZK. Seamless blending from 0mm. Walk-ins & booking. AK BARBERS.",
    keywords: [
      "skin fade prague 6",
      "fade haircut prague 6",
      "low fade prague 6",
      "high fade brevnov",
      "fade barbershop prague 6",
    ],
    ogLocale: "en_US",
    heroHeading: "Skin Fade Prague 6",
    heroSubheading: "Bělohorská – Břevnov",
    serviceDetail: [
      "Skin fade is one of the most demanding and popular haircuts in modern barbering. At AK BARBERS we start with a consultation to choose the type of fade — low, mid or high — and the style for the top.",
      "Your barber then works with clippers from 0mm, gradually blending to create perfectly seamless transitions. We use a shaver for clean lines and fine details. The result is a sharp, modern look with a flawless gradient.",
      "Skin fade works great on all hair types — straight, wavy and curly. The whole process takes about 40–50 minutes. To maintain the shape, we recommend a visit every 2–3 weeks.",
    ],
    servicePrice: "499 CZK",
    whyUs: [
      "Fade specialists — our barbers undergo intensive training",
      "Clippers from 0mm, shaver detailing, precise blending",
      "Low, mid and high fade — always your choice",
      "Relaxed neighbourhood setting away from the city centre",
      "Walk-in friendly or book online via Booqme",
    ],
    otherServices: [
      { name: "Classic Haircut", price: "449 CZK", link: "/en/mens-haircut-prague-6" },
      { name: "Beard Grooming", price: "349 CZK" },
      { name: "Haircut & Beard Grooming", price: "749 CZK" },
      { name: "Senior Haircut (65+)", price: "249 CZK" },
      { name: "Kids' Haircut (1–15)", price: "299 / 399 CZK" },
    ],
    faq: [
      { question: "How much is a skin fade in Prague 6?", answer: "Skin fade at AK BARBERS Prague 6 costs 499 CZK. Includes consultation, clipper cut from 0mm, shaver detailing, blending and styling." },
      { question: "What's the difference between low, mid and high fade?", answer: "Low fade starts just above the ears, mid fade in the middle, high fade higher up. Your barber will recommend the best option for you." },
      { question: "How often should I refresh my fade?", answer: "Every 2–3 weeks to keep it looking sharp." },
      { question: "Does skin fade work on curly hair?", answer: "Yes, skin fade looks great on all hair types including curly." },
      { question: "Where is the Prague 6 branch?", answer: "At Bělohorská 1393/44, Prague 6 – Břevnov, by the Malovanka tram stop, near Dejvická metro." },
    ],
    internalLinks: [
      { label: "Barber Prague 6 – all services", href: "/en/barber-prague-6" },
      { label: "Men's Haircut Prague 6", href: "/en/mens-haircut-prague-6" },
      { label: "Skin Fade Prague 1", href: "/en/skin-fade-prague-1" },
      academyLinkEn,
      careerLinkEn,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Prague 6", href: "/en/barber-prague-6" },
      { name: "Skin Fade", href: "/en/skin-fade-prague-6" },
    ],
  },

  // ------------------------------------------------------------------
  // mens-haircut-prague-5 (EN)
  // ------------------------------------------------------------------
  "en/mens-haircut-prague-5": {
    lang: "en",
    slug: "en/mens-haircut-prague-5",
    locationId: "praha-5",
    serviceType: "haircut",
    alternateSlug: "barber-smichov",
    crossLocationSlug: "en/mens-haircut-prague-1",
    crossServiceSlug: "en/skin-fade-prague-5",
    locationSlug: "en/barber-prague-5",
    title: "Men's Haircut Prague 5 – Smíchov | AK BARBERS from 499 CZK",
    description:
      "Professional men's haircut in Prague 5, Smíchov. Classic cut from 499 CZK, consultation & styling included. 5 min from Anděl metro. Walk-ins & booking. AK BARBERS — newest Prague branch.",
    keywords: [
      "men's haircut prague 5",
      "haircut smíchov",
      "barber prague 5",
      "classic haircut prague 5",
      "men's barber smíchov anděl",
    ],
    ogLocale: "en_US",
    heroHeading: "Men's Haircut Prague 5",
    heroSubheading: "Smíchov – Near Anděl Metro",
    serviceDetail: [
      "A classic men's haircut at AK BARBERS Smíchov starts with a thorough consultation where your barber discusses the style and length with you. Then comes a precision cut with clippers or scissors tailored exactly to your preferences, followed by contour shaping and final styling.",
      "The haircut takes approximately 30–40 minutes and includes a hair wash, blow-dry and styling. Our barbers are trained at the AK BARBERS Academy, so you can expect professional results every time. As our newest Prague branch, we work in a brand-new interior with premium equipment.",
      "This service is perfect for men who want a quality classic haircut in one of Prague's most accessible locations. Just a 5-minute walk from Anděl metro, walk in without an appointment or book your slot online.",
    ],
    servicePrice: "499 CZK",
    whyUs: [
      "Professional barbers trained at AK BARBERS Academy",
      "Consultation, cut and styling included in the price",
      "Brand-new interior with premium equipment and products",
      "5-minute walk from Anděl metro (Line B)",
      "Walk-in friendly or book online via Booqme",
    ],
    otherServices: [
      { name: "Haircut & Beard Grooming", price: "889 CZK" },
      { name: "Beard Grooming", price: "399 CZK" },
      { name: "Kids' Haircut (1–15)", price: "349 / 449 CZK" },
    ],
    faq: [
      { question: "How much is a men's haircut in Prague 5?", answer: "A classic men's haircut at AK BARBERS Smíchov costs 499 CZK. It includes consultation, cut with clippers or scissors, blow-dry and final styling." },
      { question: "How long does a haircut take?", answer: "Approximately 30–40 minutes, depending on the chosen style and hair length." },
      { question: "Do I need to book?", answer: "No, we operate on a walk-in basis. Online booking is also available via Booqme." },
      { question: "Where exactly is the shop?", answer: "At Toyen 3410/7, Prague 5 – Smíchov. A 5-minute walk from Anděl metro station (Line B)." },
      { question: "Do you speak English?", answer: "Yes, our barbers in Prague 5 are used to international clients and communicate in English." },
      { question: "Are you open on Saturdays?", answer: "Yes, Saturday 10:00–14:30. Closed on Sundays. Our Prague 1 branch is open 7 days a week." },
    ],
    internalLinks: [
      { label: "Barber Prague 5 – all services", href: "/en/barber-prague-5" },
      { label: "Skin Fade Prague 5", href: "/en/skin-fade-prague-5" },
      { label: "Men's Haircut Prague 1", href: "/en/mens-haircut-prague-1" },
      academyLinkEn,
      careerLinkEn,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Prague 5", href: "/en/barber-prague-5" },
      { name: "Men's Haircut", href: "/en/mens-haircut-prague-5" },
    ],
  },

  // ------------------------------------------------------------------
  // skin-fade-prague-5 (EN)
  // ------------------------------------------------------------------
  "en/skin-fade-prague-5": {
    lang: "en",
    slug: "en/skin-fade-prague-5",
    locationId: "praha-5",
    serviceType: "skin-fade",
    alternateSlug: "barber-smichov",
    crossLocationSlug: "en/skin-fade-prague-1",
    crossServiceSlug: "en/mens-haircut-prague-5",
    locationSlug: "en/barber-prague-5",
    title: "Skin Fade Prague 5 – Smíchov | AK BARBERS from 499 CZK",
    description:
      "Professional skin fade in Prague 5, Smíchov. Low, mid & high fade from 499 CZK. Seamless blending from 0mm, shaver detailing. 5 min from Anděl metro. Walk-ins & booking. AK BARBERS.",
    keywords: [
      "skin fade prague 5",
      "fade haircut smíchov",
      "best fade prague 5",
      "low fade prague 5",
      "high fade smíchov anděl",
    ],
    ogLocale: "en_US",
    heroHeading: "Skin Fade Prague 5",
    heroSubheading: "Smíchov – Near Anděl Metro",
    serviceDetail: [
      "Skin fade is one of the most demanding and popular haircuts in modern barbering. At AK BARBERS Smíchov we start with a consultation to choose the type of fade — low, mid or high — and the style for the top.",
      "Your barber then works with clippers from 0mm, gradually blending to create perfectly seamless transitions. We use a shaver for clean lines and fine details. The result is a sharp, modern look with a flawless gradient. In our brand-new Smíchov interior, you'll enjoy the experience in premium comfort.",
      "Skin fade works great on all hair types — straight, wavy and curly. The whole process takes about 40–50 minutes. To maintain the shape, we recommend a visit every 2–3 weeks.",
    ],
    servicePrice: "499 CZK",
    whyUs: [
      "Fade specialists — our barbers undergo intensive training",
      "Clippers from 0mm, shaver detailing, precise blending",
      "Low, mid and high fade — always your choice",
      "Brand-new interior, 5 min from Anděl metro (Line B)",
      "Walk-in friendly or book online via Booqme",
    ],
    otherServices: [
      { name: "Classic Haircut", price: "499 CZK", link: "/en/mens-haircut-prague-5" },
      { name: "Haircut & Beard Grooming", price: "889 CZK" },
      { name: "Beard Grooming", price: "399 CZK" },
      { name: "Kids' Haircut (1–15)", price: "349 / 449 CZK" },
    ],
    faq: [
      { question: "How much is a skin fade in Prague 5?", answer: "Skin fade at AK BARBERS Smíchov costs 499 CZK. Includes consultation, clipper cut from 0mm, shaver detailing, blending and final styling." },
      { question: "What's the difference between low, mid and high fade?", answer: "Low fade starts the transition just above the ears, mid fade in the middle, and high fade higher up on the sides. Your barber will advise what suits your face best." },
      { question: "How often should I get a skin fade?", answer: "For a sharp look, we recommend every 2–3 weeks." },
      { question: "Does skin fade work on curly hair?", answer: "Absolutely — skin fade looks fantastic on curly hair. Your barber adjusts the blending technique to your hair texture." },
      { question: "Do I need to book?", answer: "No, we welcome walk-ins. Online booking is available via Booqme." },
      { question: "Where is the Prague 5 branch?", answer: "At Toyen 3410/7, Prague 5 – Smíchov. Just 5 minutes on foot from Anděl metro station (Line B)." },
    ],
    internalLinks: [
      { label: "Barber Prague 5 – all services", href: "/en/barber-prague-5" },
      { label: "Men's Haircut Prague 5", href: "/en/mens-haircut-prague-5" },
      { label: "Skin Fade Prague 1", href: "/en/skin-fade-prague-1" },
      academyLinkEn,
      careerLinkEn,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Prague 5", href: "/en/barber-prague-5" },
      { name: "Skin Fade", href: "/en/skin-fade-prague-5" },
    ],
  },
};
