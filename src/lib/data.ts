import { Location, VoucherBranch, NavItem, JobPosition, Benefit } from "@/types";

export const siteConfig = {
  name: "AK BARBERS",
  url: "https://www.akbarber.com",
  description:
    "Síť prémiových barbershopů v České republice a na Slovensku. Kvalitní pánské stříhání, úprava vousů a skvělý zážitek.",
  phone: "+420 775 502 831",
  email: "info@akbarber.com",
  social: {
    facebook: "https://facebook.com/akbarberscz",
    instagram: "https://instagram.com/ak.barbers.cz",
  },
  booking: "https://booqme.cz",
  legal: {
    cookies: "https://www.akbarber.com/zasady-pouzivani-souboru-cookie-eu/",
    privacy: "https://www.akbarber.com/prohlaseni-o-ochrane-osobnich-udaju/",
  },
};

export const navItems: NavItem[] = [
  { label: "O nás", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Pobočky", href: "#branches" },
  { label: "Poukazy", href: "#vouchers" },
  { label: "Galerie", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export const locations: Location[] = [
  {
    id: "beroun",
    name: "AK BARBERS Beroun",
    city: "Beroun",
    address: "Havlíčkova 128, 266 01 Beroun centrum",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po–Pá", hours: "09:00–19:30" },
      { days: "So", hours: "09:00–14:00" },
    ],
    type: "walk-in",
    services: [
      { name: "Klasické pánské stříhání", price: "449 Kč", description: "Konzultace, precizní střih vlasů na míru strojem nebo nůžkami, úprava a konečný styling vlasů." },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč", description: "Skin Fade – konzultace, čistý/střední/vousový fade, střih strojem od 0 mm, použití shaveru, precizní přechody, úprava a konečný styling." },
      { name: "Senior pánský střih (65+)", price: "299 Kč", description: "Střih pro starší pány od 65 let." },
      { name: "Dětský střih (1–15 let)", price: "349–449 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, focusový, styling. Skin Fade / Low Fade / Crop Fade / Buzz Cut +100 Kč." },
      { name: "Úprava vousů", price: "399 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, celkem břitvou na vybledení, aplikace pečující kosmetiky, konečná úprava." },
      { name: "Střih vlasů a úprava vousů", price: "799 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a celkový styling vlasů a vousů." },
    ],
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    rating: "4.8/5 (300+ recenzí)",
    currency: "CZK",
  },
  {
    id: "beroun-2",
    name: "AK BARBERS Beroun 2",
    city: "Beroun",
    address: "Plzeňská 145/49, 266 01 Beroun-Město",
    phone: "+420 775 502 831",
    openingHours: [{ days: "Po–Pá", hours: "10:00–21:00" }],
    type: "reservation",
    bookingUrl: "https://booqme.cz/cs/rezervace/ak-barbers-beroun",
    services: [
      { name: "Klasické pánské stříhání", price: "499 Kč", description: "Konzultace, precizní střih vlasů na míru strojem nebo nůžkami, úprava a konečný styling vlasů." },
      { name: "Střih + úprava vousů", price: "889 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a celkový styling vlasů a vousů." },
      { name: "Úprava vousů", price: "399 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, celkem břitvou na vybledení, aplikace pečující kosmetiky, konečná úprava." },
      { name: "Dětský střih (1–15 let)", price: "349–449 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, focusový, styling." },
    ],
    image: "https://images.unsplash.com/photo-1585747860019-8a1d2481c8f5?w=800&q=80",
    note: "Speciální fade (Skin/Low/Crop Fade, Buzz Cut) +100 Kč",
    currency: "CZK",
  },
  {
    id: "praha-6",
    name: "AK BARBERS Praha 6",
    city: "Praha",
    address: "Bělohorská 1393/44, 169 00 Praha 6",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po–Pá", hours: "10:00–19:00" },
      { days: "So", hours: "09:00–12:00" },
    ],
    type: "walk-in",
    services: [
      { name: "Klasické pánské stříhání", price: "399 Kč", description: "Konzultace, precizní střih vlasů na míru strojem nebo nůžkami, úprava a konečný styling vlasů." },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč", description: "Skin Fade – konzultace, čistý/střední/vousový fade, střih strojem od 0 mm, použití shaveru, precizní přechody, úprava a konečný styling." },
      { name: "Senior pánský střih (65+)", price: "249 Kč", description: "Střih pro starší pány od 65 let." },
      { name: "Dětský střih (1–15 let)", price: "299–399 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, focusový, styling." },
      { name: "Úprava vousů", price: "349 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, celkem břitvou na vybledení, aplikace pečující kosmetiky, konečná úprava." },
      { name: "Střih vlasů + úprava vousů", price: "749 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a celkový styling vlasů a vousů." },
    ],
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
    currency: "CZK",
  },
  {
    id: "praha-1",
    name: "AK BARBERS Praha 1",
    city: "Praha",
    address: "Národní 949/19, 110 00 Staré Město, Praha 1",
    phone: "+420 775 502 831",
    openingHours: [{ days: "Po–Ne", hours: "10:00–19:00" }],
    type: "walk-in + reservation",
    bookingUrl: "https://booqme.cz",
    services: [
      { name: "Klasické pánské stříhání", price: "499 Kč", description: "Konzultace, precizní střih vlasů na míru strojem nebo nůžkami, úprava a konečný styling vlasů." },
      { name: "Střih + úprava vousů", price: "889 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a celkový styling vlasů a vousů." },
      { name: "Úprava vousů", price: "399 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, celkem břitvou na vybledení, aplikace pečující kosmetiky, konečná úprava." },
      { name: "Dětský střih (1–15 let)", price: "349–449 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, focusový, styling. Fade +100 Kč." },
    ],
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
    note: "Sleva 25 % pro policisty, hasiče, zdravotníky, ISIC",
    currency: "CZK",
  },
  {
    id: "kraluv-dvur",
    name: "AK BARBERS Králův Dvůr",
    city: "Králův Dvůr",
    address: "Plzeňská 396, 267 01 Králův Dvůr",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po–Pá", hours: "09:00–19:30" },
      { days: "So–Ne", hours: "09:00–14:00" },
    ],
    type: "walk-in + reservation",
    services: [
      { name: "Klasické pánské stříhání", price: "449 Kč", description: "Konzultace, precizní střih vlasů na míru strojem nebo nůžkami, úprava a konečný styling vlasů." },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč", description: "Skin Fade – konzultace, čistý/střední/vousový fade, střih strojem od 0 mm, použití shaveru, precizní přechody, úprava a konečný styling." },
      { name: "Senior pánský střih (65+)", price: "299 Kč", description: "Střih pro starší pány od 65 let." },
      { name: "Dětský střih (1–15 let)", price: "349–449 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, focusový, styling. Skin Fade / Low Fade / Crop Fade / Buzz Cut +100 Kč." },
      { name: "Úprava vousů", price: "399 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, celkem břitvou na vybledení, aplikace pečující kosmetiky, konečná úprava." },
      { name: "Střih vlasů + úprava vousů", price: "799 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a celkový styling vlasů a vousů." },
    ],
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
    rating: "4.9/5 (260+ recenzí)",
    currency: "CZK",
  },
  {
    id: "plzen",
    name: "AK BARBERS Plzeň",
    city: "Plzeň",
    address: "Gerská 2030/23, 323 00 Plzeň 1-Bolevec",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po–Pá", hours: "09:30–18:00" },
      { days: "So–Ne", hours: "09:00–14:00" },
    ],
    type: "walk-in + reservation",
    bookingUrl: "https://booqme.cz",
    services: [
      { name: "Klasické pánské stříhání", price: "449 Kč", description: "Konzultace, precizní střih vlasů na míru strojem nebo nůžkami, úprava a konečný styling vlasů." },
      { name: "Skin Fade/dlouhé vlasy", price: "499 Kč", description: "Skin Fade – konzultace, čistý/střední/vousový fade, střih strojem od 0 mm, použití shaveru, precizní přechody, úprava a konečný styling." },
      { name: "Senior pánsky střih", price: "299 Kč", description: "Střih pro starší pány od 65 let." },
      { name: "Dětský střih", price: "349 Kč / 449 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, focusový, styling. Skin Fade / Low Fade / Crop Fade / Buzz Cut +100 Kč." },
      { name: "Úprava vousů", price: "399 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, celkem břitvou na vybledení, aplikace pečující kosmetiky, konečná úprava." },
      { name: "Střih vlasů a úprava vousů", price: "799 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a celkový styling vlasů a vousů." },
    ],
    image: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?w=800&q=80",
    rating: '4.9/5 (215+ recenzí) – "#1 Barbershop v Plzni podle Googlu"',
    currency: "CZK",
  },
  {
    id: "horovice",
    name: "AK BARBERS Hořovice",
    city: "Hořovice",
    address: "Fügnerova 374/1, 268 01 Hořovice",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po–Pá", hours: "08:30–19:30" },
      { days: "So–Ne", hours: "09:00–14:00" },
    ],
    type: "walk-in",
    services: [
      { name: "Klasické pánské stříhání", price: "449 Kč", description: "Konzultace, precizní střih vlasů na míru strojem nebo nůžkami, úprava a konečný styling vlasů." },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč", description: "Skin Fade – konzultace, čistý/střední/vousový fade, střih strojem od 0 mm, použití shaveru, precizní přechody, úprava a konečný styling." },
      { name: "Senior pánský střih (65+)", price: "299 Kč", description: "Střih pro starší pány od 65 let." },
      { name: "Dětský střih (1–15 let)", price: "349–449 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, focusový, styling." },
      { name: "Úprava vousů", price: "399 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, celkem břitvou na vybledení, aplikace pečující kosmetiky, konečná úprava." },
      { name: "Střih vlasů + úprava vousů", price: "799 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a celkový styling vlasů a vousů." },
    ],
    image: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=800&q=80",
    currency: "CZK",
  },
  {
    id: "slany",
    name: "AK BARBERS Slaný",
    city: "Slaný",
    address: "Třebízského 182, 274 01 Slaný",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po–Pá", hours: "09:00–19:30" },
      { days: "So–Ne", hours: "09:00–14:00" },
    ],
    type: "walk-in",
    services: [
      { name: "Klasické pánské stříhání", price: "399 Kč", description: "Konzultace, precizní střih vlasů na míru strojem nebo nůžkami, úprava a konečný styling vlasů." },
      { name: "Skin Fade / dlouhé vlasy", price: "499 Kč", description: "Skin Fade – konzultace, čistý/střední/vousový fade, střih strojem od 0 mm, použití shaveru, precizní přechody, úprava a konečný styling." },
      { name: "Senior pánský střih (65+)", price: "249 Kč", description: "Střih pro starší pány od 65 let." },
      { name: "Dětský střih (1–15 let)", price: "299–399 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, focusový, styling." },
      { name: "Úprava vousů", price: "349 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, celkem břitvou na vybledení, aplikace pečující kosmetiky, konečná úprava." },
      { name: "Střih vlasů + úprava vousů", price: "749 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a celkový styling vlasů a vousů." },
    ],
    image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&q=80",
    note: "Sleva 25 % pro policisty, hasiče, zdravotníky, ISIC",
    currency: "CZK",
  },
  {
    id: "maj",
    name: "AK BARBERS MÁJ",
    city: "Máj",
    address: "Národní 63/26, 110 00 Nové Město, Praha (House of Fun)",
    phone: "+420 775 502 831",
    openingHours: [{ days: "Po–Ne", hours: "09:00–21:00" }],
    type: "walk-in + reservation",
    services: [
      { name: "Klasické pánské stříhání", price: "499 Kč", description: "Konzultace, precizní střih vlasů na míru strojem nebo nůžkami, úprava a konečný styling vlasů." },
      { name: "Střih + úprava vousů", price: "889 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a celkový styling vlasů a vousů." },
      { name: "Úprava vousů", price: "399 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, celkem břitvou na vybledení, aplikace pečující kosmetiky, konečná úprava." },
      { name: "Dětský střih (1–15 let)", price: "349–449 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, focusový, styling. Fade +100 Kč." },
    ],
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    note: "Sleva pro policisty, hasiče, zdravotníky, ISIC",
    currency: "CZK",
  },
  {
    id: "nitra",
    name: "AK BARBERS Nitra",
    city: "Nitra",
    address: "OC MLYNY, Štefánikova trieda 35/61, 949 01 Nitra, Slovensko",
    phone: "+421 948 442 413",
    openingHours: [{ days: "Po–Ne", hours: "09:00–21:00" }],
    type: "walk-in",
    services: [
      { name: "Klasický pánský střih", price: "17 €", description: "Konzultace, precizní střih vlasů na míru strojem nebo nůžkami, úprava a konečný styling vlasů." },
      { name: "Střih + úprava vousů", price: "27 €", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a celkový styling vlasů a vousů." },
      { name: "Dětský střih (1–15 let)", price: "12–15 €", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, focusový, styling. Fade +3 €." },
      { name: "Úprava vousů", price: "14 €", description: "Konzultace, úprava vousů strojkem a nůžkami, celkem břitvou na vybledení, aplikace pečující kosmetiky, konečná úprava." },
    ],
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
    note: "Sleva 25 % pro zdravotníky, hasiče, záchranáře, ISIC",
    currency: "EUR",
  },
];

export const representativeServices = [
  { name: "Klasické pánské stříhání", price: "od 399 Kč", description: "Profesionální střih přizpůsobený vašemu stylu" },
  { name: "Skin Fade / dlouhé vlasy", price: "od 499 Kč", description: "Precizní fade a práce s delšími vlasy" },
  { name: "Úprava vousů", price: "od 349 Kč", description: "Tvarování a úprava vousů břitvou" },
  { name: "Střih + úprava vousů", price: "od 749 Kč", description: "Kompletní péče o vlasy i vousy" },
  { name: "Senior pánský střih (65+)", price: "od 249 Kč", description: "Zvýhodněná cena pro seniory" },
  { name: "Dětský střih (1–15 let)", price: "od 299 Kč", description: "Trpělivý přístup k mladým zákazníkům" },
];

export const voucherBranches: VoucherBranch[] = [
  {
    name: "AK BARBERS Beroun 2",
    address: "Plzeňská 145/49, 266 01 Beroun-Město",
    url: "https://booqme.cz/cs/rezervace/ak-barbers-beroun",
  },
  {
    name: "AK BARBERS Praha 1",
    address: "Národní 949/19, 110 00 Staré Město",
    url: "https://booqme.cz",
  },
  {
    name: "AK BARBERS Plzeň",
    address: "Gerská 2030/23, 323 00 Plzeň",
    url: "https://booqme.cz",
  },
  {
    name: "AK BARBERS MÁJ",
    address: "Národní 63/26, 110 00 Nové Město",
    url: "https://booqme.cz",
  },
  {
    name: "AK BARBERS Nitra",
    address: "OC MLYNY, Štefánikova trieda 35/61, 949 01 Nitra",
    url: "https://booqme.sk",
  },
];

export const jobPositions: JobPosition[] = [
  {
    title: "Barber – zkušený",
    location: "Všechny pobočky CZ/SK",
    type: "Plný úvazek",
    description:
      "Hledáme zkušené barbery s praxí minimálně 1 rok. Nabízíme férové podmínky, profesionální zázemí a možnost růstu v rámci sítě AK Barbers.",
  },
  {
    title: "Barber – začátečník",
    location: "Všechny pobočky CZ/SK",
    type: "Plný úvazek",
    description:
      "Jste nadšení do barberingu a chcete se učit od těch nejlepších? Projdete naším zaškolovacím programem pod vedením Adriana Křižana.",
  },
  {
    title: "Recepční / Koordinátor pobočky",
    location: "Praha, Beroun",
    type: "Plný / částečný úvazek",
    description:
      "Komunikativní osobnost pro správu rezervací, péči o zákazníky a koordinaci chodu pobočky.",
  },
];

export const benefits: Benefit[] = [
  {
    icon: "Scissors",
    title: "Profesionální zázemí",
    description: "Prémiové vybavení a produkty ve všech pobočkách",
  },
  {
    icon: "GraduationCap",
    title: "Vzdělávání",
    description: "Pravidelné školení a workshopy v rámci AK Academy",
  },
  {
    icon: "TrendingUp",
    title: "Kariérní růst",
    description: "Možnost stát se vedoucím pobočky nebo lektorem",
  },
  {
    icon: "Users",
    title: "Skvělý tým",
    description: "Přátelská atmosféra a silná barberská komunita",
  },
  {
    icon: "Banknote",
    title: "Férové podmínky",
    description: "Atraktivní odměňování a bonusy za výkon",
  },
  {
    icon: "MapPin",
    title: "Flexibilita",
    description: "Možnost výběru pobočky po celé ČR a SR",
  },
];
