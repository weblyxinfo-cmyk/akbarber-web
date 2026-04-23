import { Location, VoucherBranch, NavItem, JobPosition, Benefit } from "@/types";

export const siteConfig = {
  name: "AK BARBERS",
  url: "https://www.akbarber.com",
  description:
    "Síť prémiových barbershopů v České republice a na Slovensku. Kvalitní pánské stříhání, úprava vousů a skvělý zážitek.",
  phone: "+420 775 502 831",
  email: "info@akbarber.com",
  social: {
    facebook: "https://www.facebook.com/akbarber.cz/",
    instagram: "https://www.instagram.com/ak.barbers.cz/",
  },
  booking: "https://booqme.cz/cs/rezervace/ak-barbers-beroun",
  legal: {
    cookies: "https://www.akbarber.com/zasady-pouzivani-souboru-cookie-eu/",
    privacy: "https://www.akbarber.com/prohlaseni-o-ochrane-osobnich-udaju/",
  },
};

export const navItems: NavItem[] = [
  { label: "Provozovny", href: "/" },
  { label: "Dárkové poukazy", href: "/vouchery" },
  { label: "Kariéra", href: "/kariera" },
  { label: "Akademie", href: "https://www.barber-kurzy.com" },
  { label: "Kontakt", href: "/#kontakt" },
];

// Standardní ceník (Beroun, Králův Dvůr, Plzeň, Hořovice)
const standardServices = [
  { name: "Klasické pánské stříhání", price: "449 Kč", description: "Konzultace, precizní střih vlasů na míru strojkem nebo nůžkami, úprava a konečný styling vlasů" },
  { name: "Skin Fade/dlouhé vlasy", price: "499 Kč", description: "Skin Fade - Konzultace (nízký, střední, vysoký Fade), střih strojkem od 0mm, použití Shaveru, stínování, precizní přechody, úprava a konečný styling" },
  { name: "Senior pánsky střih", price: "299 Kč", description: "Střih pro starší pány od 65 let" },
  { name: "Dětský střih", price: "349 Kč / 449 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, foukaná, styling. Vždy radi poradíme. Skin Fade / Low Fade / Crop Fade / Buzz Cut + 100 Kč." },
  { name: "Úprava vousů", price: "399 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, zaholení břitvou na vyžádání, aplikace pečující kosmetiky, konečná úprava" },
  { name: "Střih vlasů a úprava vousů", price: "799 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a finální styling vlasů a vousů" },
];

// Nižší ceník (Praha 6)
const valueServices = [
  { name: "Klasické pánské stříhání", price: "449 Kč", description: "Konzultace, precizní střih vlasů na míru strojkem nebo nůžkami, úprava a konečný styling vlasů" },
  { name: "Skin Fade/dlouhé vlasy", price: "499 Kč", description: "Skin Fade - Konzultace (nízký, střední, vysoký Fade), střih strojkem od 0mm, použití Shaveru, stínování, precizní přechody, úprava a konečný styling" },
  { name: "Senior pánsky střih", price: "249 Kč", description: "Střih pro starší pány od 65 let" },
  { name: "Dětský střih", price: "299 Kč / 399 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, foukaná, styling. Vždy radi poradíme. Skin Fade / Low Fade / Crop Fade / Buzz Cut + 100 Kč." },
  { name: "Úprava vousů", price: "349 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, zaholení břitvou na vyžádání, aplikace pečující kosmetiky, konečná úprava" },
  { name: "Střih vlasů a úprava vousů", price: "749 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a finální styling vlasů a vousů" },
];

// Slaný ceník (jako value, ale se slevou 25%)
const slanyServices = [
  { name: "Klasické pánské stříhání", price: "399 Kč", description: "Konzultace, precizní střih vlasů na míru strojkem nebo nůžkami, úprava a konečný styling vlasů. Sleva 25% pro PČR, HZS, ZZS, ISIC – 299 Kč." },
  { name: "Skin Fade/dlouhé vlasy", price: "499 Kč", description: "Skin Fade - Konzultace (nízký, střední, vysoký Fade), střih strojkem od 0mm, použití Shaveru, stínování, precizní přechody, úprava a konečný styling" },
  { name: "Senior pánsky střih", price: "249 Kč", description: "Střih pro starší pány od 65 let" },
  { name: "Dětský střih", price: "299 Kč / 399 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, foukaná, styling. Vždy radi poradíme. Skin Fade / Low Fade / Crop Fade / Buzz Cut + 100 Kč." },
  { name: "Úprava vousů", price: "349 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, zaholení břitvou na vyžádání, aplikace pečující kosmetiky, konečná úprava" },
  { name: "Střih vlasů a úprava vousů", price: "749 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a finální styling vlasů a vousů" },
];

// Prémiový ceník bez slevy (Beroun 2) – 4 služby
const premiumServices = [
  { name: "Klasické pánské stříhání", price: "499 Kč", description: "Konzultace, precizní střih vlasů na míru strojkem nebo nůžkami, úprava a konečný styling vlasů" },
  { name: "Střih vlasů a úprava vousů", price: "889 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a finální styling vlasů a vousů" },
  { name: "Úprava vousů", price: "399 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, zaholení břitvou na vyžádání, aplikace pečující kosmetiky, konečná úprava" },
  { name: "Dětský střih", price: "349 Kč / 449 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, foukaná, styling. Vždy radi poradíme." },
];

// Prémiový ceník se slevou (Praha 1, Máj) – 4 služby
const premiumDiscountServices = [
  { name: "Klasické pánské stříhání", price: "499 Kč", description: "Konzultace, precizní střih vlasů na míru strojkem nebo nůžkami, úprava a konečný styling vlasů. Sleva 25% pro PČR, HZS, ZZS, ISIC – 399 Kč." },
  { name: "Střih vlasů a úprava vousů", price: "889 Kč", description: "Konzultace, klasický střih vlasů strojkem, úprava vousů, aplikace pečující kosmetiky na vousy, úprava a finální styling vlasů a vousů" },
  { name: "Úprava vousů", price: "399 Kč", description: "Konzultace, úprava vousů strojkem a nůžkami, zaholení břitvou na vyžádání, aplikace pečující kosmetiky, konečná úprava" },
  { name: "Dětský střih", price: "349 Kč / 449 Kč", description: "Stříhání mladých mužů ve věku od 1 do 15 let. Klasický střih, foukaná, styling. Vždy radi poradíme." },
];

export const locations: Location[] = [
  {
    id: "beroun",
    name: "AK BARBERS Beroun",
    city: "Beroun",
    address: "Havlíčkova 128, 266 01 Beroun-centrum",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po – Pá", hours: "9:00 – 19:30" },
      { days: "So", hours: "9:00 – 14:00" },
    ],
    type: "walk-in",
    eshopUrl: "https://booqme.cz/cs/eshop/ak-barbers-beroun-10",
    services: standardServices,
    image: "/images/locations/photo-beroun.jpg",
    currency: "CZK",
    googleMapsUrl: "https://share.google/p6mtjgPNIp3zPfXU0",
    reviewRating: 4.8,
    reviewCount: "180+",
    rankText: "Top #1 Barbershop v Berouně podle Googlu",
    mapQuery: "AK+Barbers,+Havlickova+128,+Beroun",
    geo: { lat: 49.9626, lng: 14.0731 },
    transport: {
      publicTransport: [
        "Zastávka Wagnerovo náměstí – autobus 861 (3 min chůze)",
        "Vlakové nádraží Beroun – linka Praha–Plzeň (5 min chůze)",
      ],
      parking: "Parkovací dům U Černého koně (40 Kč/hod, 130 Kč/den nad 4 hod), placené parkování na Husově náměstí",
    },
  },
  {
    id: "beroun-2",
    name: "AK BARBERS Beroun 2",
    city: "Beroun",
    address: "Plzeňská 145/49, 266 01 Beroun-Město",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po – Pá", hours: "10:00 – 21:00" },
    ],
    type: "reservation",
    bookingUrl: "https://booqme.cz/cs/rezervace/ak-barbers-beroun",
    eshopUrl: "https://booqme.cz/cs/eshop/ak-barbers-beroun",
    services: premiumServices,
    image: "/images/locations/photo-beroun-2.jpg",
    note: "Rezervace VIP Club",
    currency: "CZK",
    googleMapsUrl: "https://share.google/YGI5mdYa1BGLt9Tmd",
    reviewRating: 4.9,
    reviewCount: "120+",
    rankText: "Top Barbershop v Berouně podle Googlu",
    mapQuery: "AK+Barbers,+Plzenska+145,+Beroun",
    geo: { lat: 49.9606, lng: 14.0656 },
    transport: {
      publicTransport: [
        "Zastávka Wagnerovo náměstí – autobus 861 (4 min chůze)",
        "Vlakové nádraží Beroun – linka Praha–Plzeň (10 min chůze)",
      ],
      parking: "Parkovací dům U Černého koně (40 Kč/hod, 130 Kč/den nad 4 hod), parkování na Husově náměstí",
    },
  },
  {
    id: "praha-6",
    name: "AK BARBERS Praha 6",
    city: "Praha",
    address: "Bělohorská 1393/44, 169 00 Praha 6",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po – Pá", hours: "10:00 – 19:00" },
      { days: "So – Ne", hours: "10:00 – 17:00" },
    ],
    type: "walk-in + reservation",
    bookingUrl: "https://booqme.cz/cs/rezervace/ak-barber-praha",
    temporarilyClosed: {
      redirectToId: "praha-5",
      redirectToName: "Praha 5 – Smíchov",
    },
    services: standardServices,
    image: "/images/locations/photo-praha-6.jpg",
    currency: "CZK",
    googleMapsUrl: "https://share.google/D6Aq8iH1IZYVxIqrA",
    reviewRating: 4.8,
    reviewCount: "250+",
    rankText: "Top #1 Barbershop na Praze 6 podle Googlu",
    mapQuery: "AK+Barbers,+Belohorska+1393,+Praha+6",
    geo: { lat: 50.0849, lng: 14.3767 },
    transport: {
      publicTransport: [
        "Tramvaj Marjánka – linky 22, 25 (1 min chůze)",
        "Autobus Marjánka – linky 143, 149, 164, 180",
        "Metro Petřiny (linka A) – 10 min chůze",
      ],
      parking: "Fialové zóny Praha 6 (cca 40 Kč/hod), parkování v okolních ulicích",
    },
  },
  {
    id: "praha-1",
    name: "AK BARBERS – Praha Máj",
    city: "Praha",
    address: "Národní 63/26, 110 00 Nové Město",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po – Ne", hours: "9:00 – 21:00" },
    ],
    type: "walk-in + reservation",
    bookingUrl: "https://booqme.cz/cs/rezervace/ak-barbers-praha-19",
    services: premiumServices,
    image: "/images/locations/photo-praha-1.jpg",
    currency: "CZK",
    googleMapsUrl: "https://share.google/ieWwYNLKRsKPQlx6a",
    reviewRating: 4.9,
    reviewCount: "300+",
    rankText: "Top #1 Barbershop v centru Prahy podle Googlu",
    mapQuery: "AK+Barbers,+Narodni+63,+Praha",
    geo: { lat: 50.0838, lng: 14.4188 },
    transport: {
      publicTransport: [
        "Metro Národní třída (linka B) – 1 min chůze",
        "Tramvaj Národní třída – linky 2, 9, 18, 22",
        "Tramvaj Národní divadlo – 3 min chůze",
      ],
      parking: "Garáže Národní divadlo (60 Kč/hod), garáž Vladislavova, garáž Spálená",
    },
  },
  {
    id: "kraluv-dvur",
    name: "AK BARBERS Králův Dvůr",
    city: "Králův Dvůr",
    address: "Plzeňská 396, 267 01 Králův Dvůr",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po – Ne", hours: "9:00 – 19:30" },
    ],
    type: "walk-in",
    eshopUrl: "https://booqme.cz/cs/eshop/ak-barbers-kraluv-dvur6",
    services: standardServices,
    image: "/images/locations/photo-kraluv-dvur.jpg",
    currency: "CZK",
    googleMapsUrl: "https://share.google/a01WYK1dXrVqUnAbR",
    reviewRating: 4.8,
    reviewCount: "90+",
    rankText: "Top Barbershop v Králově Dvoře podle Googlu",
    mapQuery: "AK+Barbers,+Plzenska+396,+Kraluv+Dvur",
    geo: { lat: 49.9509, lng: 14.0421 },
    transport: {
      publicTransport: [
        "Zastávka Beroun, Plzeňka – autobusy 380, 631, 633",
        "Vlakové nádraží Králův Dvůr – linka Praha–Plzeň",
      ],
      parking: "Parkoviště Albert (zdarma), bezplatné parkování na Plzeňské ulici",
    },
  },
  {
    id: "plzen",
    name: "AK BARBERS Plzeň",
    city: "Plzeň",
    address: "Gerská 2030/23, 323 00 Plzeň 1-Bolevec",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po – Pá", hours: "9:30 – 18:00" },
      { days: "So – Ne", hours: "9:00 – 14:00" },
    ],
    type: "walk-in + reservation",
    bookingUrl: "https://booqme.cz/cs/rezervace/ak-barbers-plzen1",
    eshopUrl: "https://booqme.cz/cs/eshop/ak-barbers-plzen1",
    services: standardServices,
    image: "/images/locations/photo-plzen.jpg",
    currency: "CZK",
    googleMapsUrl: "https://share.google/uDA8gpYTfzP3aXRaL",
    reviewRating: 4.9,
    reviewCount: "215+",
    rankText: "Top #1 Barbershop v Plzni podle Googlu",
    mapQuery: "AK+Barbers,+Gerska+2030,+Plzen",
    geo: { lat: 49.7789, lng: 13.3689 },
    transport: {
      publicTransport: [
        "Zastávka U Gery – tramvaj 4, autobus 33, 40",
        "Zastávka Nemocnice Lochotín – 5 min chůze, více linek",
      ],
      parking: "Parkoviště Albert (zdarma), parkovací dům Gerská 2005/4 (237 míst, 24/7)",
    },
  },
  {
    id: "horovice",
    name: "AK BARBERS Hořovice",
    city: "Hořovice",
    address: "Fügnerova 374/1, 268 01 Hořovice",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po – Pá", hours: "10:00 – 19:30" },
      { days: "So – Ne", hours: "10:00 – 14:30" },
    ],
    type: "walk-in + reservation",
    bookingUrl: "https://booqme.sk/sk/rezervacia/ak-barbers-horovice6",
    eshopUrl: "https://booqme.sk/sk/eshop/ak-barbers-horovice6",
    services: standardServices,
    image: "/images/locations/photo-horovice.jpg",
    currency: "CZK",
    googleMapsUrl: "https://share.google/sW4uoZKb3Zt20YEZC",
    reviewRating: 4.8,
    reviewCount: "100+",
    rankText: "Top Barbershop v Hořovicích podle Googlu",
    mapQuery: "AK+Barbers,+Fugnerova+374,+Horovice",
    geo: { lat: 49.8377, lng: 13.8973 },
    transport: {
      publicTransport: [
        "Vlakové nádraží Hořovice – linka Praha–Plzeň (5 min chůze)",
        "Autobus 384 z Prahy (Zličín) přes Zdice",
      ],
      parking: "Bezplatné parkování na Fügnerově ulici a na Palackého náměstí",
    },
  },
  {
    id: "slany",
    name: "AK BARBERS Slaný",
    city: "Slaný",
    address: "Třebízského 182, 274 01 Slaný",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po – Pá", hours: "9:00 – 19:30" },
      { days: "So", hours: "9:00 – 14:00" },
    ],
    type: "walk-in + reservation",
    bookingUrl: "https://booqme.sk/sk/rezervacia/ak-barbers-slany1",
    eshopUrl: "https://booqme.sk/sk/eshop/ak-barbers-slany1",
    services: slanyServices,
    image: "/images/locations/photo-slany.jpg",
    currency: "CZK",
    googleMapsUrl: "https://share.google/FJWH7veDQhP51zzBR",
    reviewRating: 4.7,
    reviewCount: "85+",
    rankText: "Top Barbershop ve Slaném podle Googlu",
    mapQuery: "AK+Barbers,+Trebizského+182,+Slany",
    geo: { lat: 50.2326, lng: 14.0818 },
    transport: {
      publicTransport: [
        "Autobusové nádraží Slaný – 5 min chůze, linky 609, 456, 590",
        "Vlakové nádraží Slaný – spojení na Kladno a Prahu",
      ],
      parking: "Parkování v centru s parkovacím kotoučem, okolí Masarykova náměstí",
    },
  },
  {
    id: "nitra",
    name: "AK BARBERS Nitra",
    city: "Nitra",
    address: "OC MLYNY, Štefánikova trieda 35/61, 949 01 Nitra",
    phone: "+421 948 442 413",
    openingHours: [
      { days: "Po – Ne", hours: "9:00 – 21:00" },
    ],
    type: "walk-in + reservation",
    bookingUrl: "https://booqme.sk/sk/rezervacia/ak-barbers-nitra2",
    eshopUrl: "https://booqme.sk/sk/eshop/ak-barbers-nitra2",
    services: [
      { name: "Klasický pánsky strih", price: "17 €", description: "Strih, úprava kontúr britvou, fúkaná, styling. Vždy radi poradíme klientom a pomôžeme s výberom strihu. Zľava 25% pre PZ, HaZZ, ZZS, ISIC – 13 €." },
      { name: "Strih + Úprava brady", price: "27 €", description: "Strih, úprava kontúr britvou, fúkaná, styling, holenie / úprava fúzov britvou, ošetrenie pleti." },
      { name: "Detský strih (1–15 rokov)", price: "12 € / 15 €", description: "Strihanie mladých mužov vo veku od 1 do 15 rokov. Klasický strih, fúkaná, styling. Vždy radi poradíme. Skin Fade / Low Fade / Crop Fade / Buzz Cut + 3 €." },
      { name: "Úprava brady", price: "14 €", description: "Úprava fúzov britvou, ošetrenie pleti." },
    ],
    image: "/images/locations/photo-nitra.jpg",
    currency: "EUR",
    googleMapsUrl: "https://share.google/Z8bxzReTOnT3wrXQz",
    reviewRating: 4.8,
    reviewCount: "95+",
    rankText: "Top Barbershop v Nitre podľa Googlu",
    mapQuery: "AK+Barbers,+Nitra",
    geo: { lat: 48.3070, lng: 18.0865 },
    transport: {
      publicTransport: [
        "Zastávka CENTRUM, Mlyny – MHD linky 1, 2, 4, 6, 7, 8, 9, 10 a další",
        "Hlavná autobusová a vlaková stanica – 10 min chůze",
      ],
      parking: "Parkovanie OC Mlyny – 1. hodina zadarmo (pracovné dni), 2 hodiny zadarmo (víkendy), ďalšia hodina od 1 €",
    },
  },
  {
    id: "praha-5",
    name: "AK BARBERS Praha 5 – Smíchov",
    city: "Praha",
    address: "Toyen 3410/7, Praha 5",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po – Pá", hours: "10:00 – 19:00" },
      { days: "So", hours: "10:00 – 14:30" },
    ],
    type: "walk-in + reservation",
    bookingUrl: "https://booqme.cz/cs/rezervace/ak-barbers-praha-1-stare-mesto4",
    services: premiumServices,
    image: "/images/locations/photo-beroun.jpg",
    currency: "CZK",
    googleMapsUrl: "",
    reviewRating: 5.0,
    reviewCount: "Nová pobočka",
    rankText: "Nová pobočka v Praze 5",
    mapQuery: "AK+Barbers,+Toyen+3410,+Praha+5",
    geo: { lat: 50.0678, lng: 14.4041 },
    transport: {
      publicTransport: [
        "Metro Anděl (linka B) – 5 min chůze",
        "Tramvaj Anděl – linky 4, 5, 7, 9, 10, 12, 15 a další",
        "Autobusový terminál Na Knížecí – 5 min chůze",
      ],
      parking: "Fialové zóny Praha 5 (30 Kč/hod), OC Nový Smíchov (1 hod zdarma ve všední dny)",
    },
  },
  {
    id: "praha-3",
    name: "AK BARBERS Praha 3",
    city: "Praha",
    address: "Pod Vítkovem 2, 130 00 Praha 3",
    phone: "+420 775 502 831",
    openingHours: [],
    type: "coming-soon",
    services: [],
    image: "/images/locations/photo-beroun.jpg",
    currency: "CZK",
    googleMapsUrl: "",
    reviewRating: 0,
    reviewCount: "",
    rankText: "Připravujeme pro vás novou pobočku",
    mapQuery: "Pod+Vítkovem+2,+Praha+3",
    geo: { lat: 50.0873, lng: 14.4511 },
    transport: {
      publicTransport: [
        "Tramvaj Ohrada – linky 1, 9, 11 (5 min chůze)",
        "Tramvaj Tachovské náměstí – linky 9, 15, 26 (5 min chůze)",
        "Autobus Ohrada – linky 133, 136, 207",
      ],
      parking: "Fialové zóny Praha 3 (20 Kč/hod), parkoviště Nádraží Žižkov",
    },
  },
  {
    id: "cerny-most",
    name: "AK BARBERS Praha 14 – Černý Most",
    city: "Praha",
    address: "Bryksova 758/62, 198 00 Praha 14 – Černý Most",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po – Pá", hours: "9:00 – 19:30" },
      { days: "So – Ne", hours: "9:00 – 14:00" },
    ],
    type: "walk-in",
    services: standardServices,
    image: "/images/locations/photo-beroun-2.jpg",
    currency: "CZK",
    googleMapsUrl: "",
    reviewRating: 5.0,
    reviewCount: "Nová pobočka",
    rankText: "Nová pobočka na Praze 9 – Černý Most",
    mapQuery: "Bryksova+758,+Praha+9+Cerny+Most",
    geo: { lat: 50.1082, lng: 14.5774 },
    transport: {
      publicTransport: [
        "Metro Černý Most (linka B) – konečná stanice, 5 min chůze",
        "Autobusový terminál Černý Most – nástupiště regionálních i městských linek",
        "Tramvaj: linky 19, 25 (zastávka Černý Most)",
        "MHD autobusy 110, 163, 181, 221, 223, 263, 269, 273, 296",
      ],
      parking: "P+R Černý Most (cca 40 Kč/den), parkoviště OC Černý Most (1. hodina zdarma ve všední dny, víkendy déle), modré zóny v okolí Bryksovy ulice",
    },
  },
  {
    id: "jesenice",
    name: "AK BARBERS Jesenice u Prahy",
    city: "Jesenice u Prahy",
    address: "Budějovická 371, 252 42 Jesenice u Prahy",
    note: "Uvnitř supermarketu Albert – u pokladen",
    phone: "+420 775 502 831",
    openingHours: [
      { days: "Po – Pá", hours: "10:00 – 19:00" },
    ],
    type: "walk-in + reservation",
    bookingUrl: "https://booqme.cz/cs/rezervace/ak-barbers-jesenice",
    eshopUrl: "https://booqme.cz/cs/eshop/ak-barbers-jesenice",
    services: premiumServices,
    image: "/images/locations/photo-beroun.jpg",
    currency: "CZK",
    googleMapsUrl: "",
    reviewRating: 5.0,
    reviewCount: "Nová pobočka",
    rankText: "Nová pobočka v Jesenici u Prahy",
    mapQuery: "Budějovická+371,+Jesenice+u+Prahy",
    geo: { lat: 49.9663, lng: 14.5179 },
    transport: {
      publicTransport: [
        "Zastávka Jesenice – autobusy 332, 334, 335, 337, 339",
        "Linky 335, 337, 339 na metro Budějovická (linka C)",
        "Linka 334 na Smíchovské nádraží (metro B)",
      ],
      parking: "Parkoviště Albert (zdarma), bezplatné parkování v okolí",
    },
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
    name: "AK BARBERS – Praha Máj",
    address: "Národní 63/26, 110 00 Nové Město",
    url: "https://booqme.cz/cs/rezervace/ak-barbers-praha-19",
  },
  {
    name: "AK BARBERS Plzeň",
    address: "Gerská 2030/23, 323 00 Plzeň",
    url: "https://booqme.cz/cs/rezervace/ak-barbers-plzen1",
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
