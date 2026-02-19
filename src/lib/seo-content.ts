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
      { label: "AK BARBERS Praha 1 – Národní třída", href: "/barber-praha-1" },
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
      { question: "Do you have another branch in Prague?", answer: "Yes, our second Prague location is AK BARBERS Prague 1 on Národní třída in the Old Town. Open 7 days a week." },
    ],
    internalLinks: [
      { label: "Skin Fade Prague 6", href: "/en/skin-fade-prague-6" },
      { label: "Men's Haircut Prague 6", href: "/en/mens-haircut-prague-6" },
      { label: "AK BARBERS Prague 1 – Old Town", href: "/en/barber-prague-1" },
      academyLinkEn,
      careerLinkEn,
    ],
    breadcrumbs: [
      { name: "AK BARBERS", href: "/" },
      { name: "Barber Prague 6", href: "/en/barber-prague-6" },
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
};
