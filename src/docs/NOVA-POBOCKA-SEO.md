# Jak vytvořit SEO landing page pro novou pobočku

Tento návod popisuje krok za krokem, co je potřeba udělat při přidání nové SEO stránky pro pobočku AK BARBERS.

## Přehled souborů

| Soubor | Účel |
|---|---|
| `src/lib/seo-content.ts` | Veškerý SEO obsah (texty, FAQ, metadata) |
| `src/app/{slug}/page.tsx` | Next.js stránka pro danou URL |
| `src/app/sitemap.ts` | Sitemap — registrace nové URL |
| `public/images/og/og-{locationId}.png` | OG obrázek pro sociální sítě |

---

## Krok 1: Přidat záznam do seo-content.ts

Otevřete `src/lib/seo-content.ts` a přidejte nový záznam do objektu `seoLocationPages` (před uzavírací `};`).

### Šablona záznamu

```typescript
"barber-{mesto}": {
  lang: "cs",                          // "cs" pro CZ, "sk" pro SK, "en" pro EN
  slug: "barber-{mesto}",              // URL slug (bez lomítka na začátku)
  locationId: "{id-z-data-ts}",        // ID pobočky z src/lib/data.ts
  title: "Barber {Město} | AK BARBERS – {USP}", // max ~60 znaků
  description:
    "Profesionální barbershop v {město}. Walk-in i rezervace. Pánské stříhání od {cena}. {adresa}.", // max ~155 znaků
  keywords: [
    "barber {město}",
    "barbershop {město}",
    "pánské stříhání {město}",
    "kadeřnictví muži {město}",
    "barber {čtvrť/landmark}",
  ],
  ogLocale: "cs_CZ",                   // "cs_CZ" pro CZ, "sk_SK" pro SK
  heroHeading: "Barber {Město} – {čtvrť}",
  localityDescription: [
    // 1. odstavec: adresa, dopravní dostupnost (MHD, parkování)
    "AK BARBERS {Město} najdete na adrese {adresa}. ...",
    // 2. odstavec: okolí, charakter lokality, proč sem chodit
    "{Město} je ... ",
    // 3. odstavec: otevírací doba, walk-in/rezervace, hodnocení
    "Otevřeno máme {hodiny}. ...",
  ],
  services: [
    { name: "Klasické pánské stříhání", price: "{cena}" },
    { name: "Skin Fade / dlouhé vlasy", price: "{cena}" },
    // ... další služby podle ceníku pobočky
  ],
  aboutText:
    "V AK BARBERS pracujeme podle přísných standardů kvality. Každý nový barber prochází profesionálním zaškolením v naší AK BARBERS Academy a teprve poté nastupuje do provozu. Preciznost, čistota a důraz na detail jsou základem naší práce. Díky tomu držíme špičkovou úroveň služeb na každé pobočce — a naši zákazníci se k nám rádi vrací.",
  faq: [
    { question: "Kde se nachází AK BARBERS {Město}?", answer: "..." },
    { question: "Musím se objednat předem?", answer: "..." },
    { question: "Jaká je otevírací doba?", answer: "..." },
    { question: "Kolik stojí pánský střih v {město}?", answer: "..." },
    { question: "Kde zaparkuji?", answer: "..." },
    { question: "Stříháte i děti?", answer: "..." },
    { question: "Mohu platit kartou?", answer: "..." },
  ],
  internalLinks: [
    { label: "AK BARBERS {jiná pobočka}", href: "/barber-{slug}" },
    { label: "AK BARBERS {jiná pobočka}", href: "/barber-{slug}" },
    { label: "AK BARBERS Akademie", href: "https://www.barber-kurzy.com", external: true },
    { label: "Kariéra v AK BARBERS", href: "/kariera" },
  ],
  breadcrumbs: [
    { name: "AK BARBERS", href: "/" },
    { name: "Barber {Město}", href: "/barber-{mesto}" },
  ],
},
```

### Důležité poznámky k obsahu

- **aboutText** je sdílený text značky — kopírujte beze změny z existujících stránek
- **localityDescription** musí být unikátní pro každou pobočku — nepřepisujte z jiné stránky
- **FAQ** odpovědi musí obsahovat správné adresy, ceny a otevírací doby dané pobočky
- Pro slovenské pobočky pište veškerý text ve slovenštině (lang: "sk", ogLocale: "sk_SK")
- Pro "coming soon" pobočky: `services: []` a FAQ zaměřené na datum otevření

---

## Krok 2: Vytvořit page.tsx

Vytvořte adresář `src/app/{slug}/` a v něm soubor `page.tsx`:

```tsx
import type { Metadata } from "next";
import { locations } from "@/lib/data";
import { seoLocationPages } from "@/lib/seo-content";
import { SeoLocationPage } from "@/components/seo/SeoLocationPage";

const content = seoLocationPages["{slug}"];
const location = locations.find((l) => l.id === content.locationId)!;

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  keywords: content.keywords,
  openGraph: {
    title: content.title,
    description: content.description,
    url: `https://www.akbarber.com/${content.slug}`,
    siteName: "AK BARBERS",
    locale: content.ogLocale,
    type: "website",
    images: [{ url: `/images/og/og-${content.locationId}.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: content.title,
    description: content.description,
    images: [`/images/og/og-${content.locationId}.png`],
  },
  alternates: {
    canonical: `https://www.akbarber.com/${content.slug}`,
  },
};

export default function Page() {
  return <SeoLocationPage content={content} location={location} />;
}
```

**Pozor:** Nahraďte `{slug}` skutečným slugem (např. `barber-beroun`).

Pro bilingvální stránky (CZ/EN) přidejte do `alternates` i `languages`:

```tsx
alternates: {
  canonical: `https://www.akbarber.com/${content.slug}`,
  languages: {
    cs: `https://www.akbarber.com/${content.slug}`,
    en: `https://www.akbarber.com/${content.alternateSlug}`,
  },
},
```

---

## Krok 3: Aktualizovat sitemap

V souboru `src/app/sitemap.ts` přidejte nový slug do pole `seoLocationSlugs`:

```typescript
const seoLocationSlugs = [
  "barber-praha-1",
  "barber-praha-6",
  "barber-smichov",
  "barber-beroun",
  // ... přidejte nový slug sem
  "en/barber-prague-1",
  "en/barber-prague-6",
];
```

---

## Krok 4: OG obrázek

Vytvořte OG obrázek pro sociální sítě:

- **Rozměry:** 1200 x 630 px
- **Formát:** PNG
- **Název:** `og-{locationId}.png` (locationId z data.ts)
- **Umístění:** `public/images/og/og-{locationId}.png`
- **Obsah:** Logo AK BARBERS, název pobočky, adresa

---

## Krok 5: Ověřit build

```bash
npm run build
```

Build musí proběhnout bez chyb.

---

## Checklist

- [ ] Pobočka existuje v `src/lib/data.ts` (s korektním ID, adresou, cenami, hodninami)
- [ ] Přidán záznam do `seoLocationPages` v `src/lib/seo-content.ts`
- [ ] Vytvořen `src/app/{slug}/page.tsx`
- [ ] Slug přidán do `seoLocationSlugs` v `src/app/sitemap.ts`
- [ ] OG obrázek uložen do `public/images/og/og-{locationId}.png` (1200x630px)
- [ ] `npm run build` prošel bez chyb
- [ ] Zkontrolovat stránku v prohlížeči (metadata, FAQ, služby, odkazy)
- [ ] Otestovat OG náhled (Facebook Sharing Debugger, Twitter Card Validator)
