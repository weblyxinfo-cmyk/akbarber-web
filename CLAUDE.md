# AK BARBERS Web — Claude Code Notes

## Projekt
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (`akbarber-new.vercel.app`)
- **Repo:** github.com/weblyxinfo-cmyk/akbarber-web

## Struktura
```
src/
├── app/
│   ├── page.tsx                    # Homepage (Accordion s pobočkami)
│   ├── layout.tsx                  # Root layout
│   ├── pobocky/[id]/page.tsx       # Detail pobočky (dynamická stránka)
│   ├── kariera/page.tsx            # Kariéra
│   ├── api/contact/route.ts        # Kontaktní formulář API
│   └── ...
├── components/
│   ├── LanguageSwitcher.tsx         # CZ/EN přepínač (client component)
│   ├── sections/
│   │   ├── Accordion.tsx            # Homepage - seznam poboček
│   │   ├── About.tsx                # Homepage - O nás sekce
│   │   ├── WalkIn.tsx               # Homepage - Walk-in sekce
│   │   ├── CareerAcademy.tsx        # Kariéra + Akademie (přijímá lang prop)
│   │   ├── Vouchers.tsx             # Dárkové poukázky (přijímá lang prop)
│   │   ├── Contact.tsx              # Kontaktní formulář (přijímá lang prop)
│   │   └── ...
│   └── layout/                      # Header, Footer, MobileMenu
├── lib/
│   ├── data.ts                      # Všechna data poboček (adresy, ceny, služby, URL)
│   ├── translations.ts             # CZ/EN překlady pro bilingvální pobočky
│   └── ...
└── types/index.ts                   # TypeScript typy (Location, Service, ...)
```

## Pobočky — 13 lokací
Zdroj pravdy je vždy `src/lib/data.ts` — tabulka níže je jen přehled.

| ID | Město | Bilingvální |
|---|---|---|
| beroun | Beroun | ne |
| beroun-2 | Beroun | ne |
| praha-3 | Praha 3 – Žižkov | **CZ/EN** |
| praha-6 | Praha 6 | **CZ/EN** |
| praha-1 | Praha 1 | **CZ/EN** |
| praha-5 | Praha 5 – Smíchov | **CZ/EN** |
| jesenice | Jesenice u Prahy | **CZ/EN** |
| cerny-most | Praha 9 – Černý Most | ne |
| kraluv-dvur | Králův Dvůr | ne |
| plzen | Plzeň | ne |
| horovice | Hořovice | ne |
| slany | Slaný | ne |
| nitra | Nitra (SK) | ne — vlastní ceník v EUR |

## ⚠️ Odložená práce — větev `nezaplaceno-2026-07-12`
21 commitů z 12. 7. 2026 bylo **dočasně staženo z produkce** (revert `ddf50f7`) kvůli
neuhrazené faktuře. Obsah: hero video Žižkov, EN verze Žižkova, brand texty
(Adrian Križan, NOA Matcha), homepage statistiky, SEO úpravy.

Práce je zachovaná ve větvi `nezaplaceno-2026-07-12` (na origin).

**Vrácení po zaplacení:**
```bash
git revert ddf50f7 && git push && npx vercel --prod
```

Pozor: revert `ddf50f7` **záměrně nevrátil** tato faktická data — po obnovení
zkontrolovat, že zůstala správně:
- Žižkov: sleva -20 % odebraná (akce neběží)
- Žižkov: neděle zavřeno (`data.ts` i `seo-content.ts`)
- Jesenice: otevřeno jen So (ne So–Ne)

## Ceníkové skupiny (src/lib/data.ts)
- **standardServices** (449/499/299/349+449/399/799 Kč, 6 služeb) — Beroun, Praha 6, Králův Dvůr, Plzeň, Hořovice, Černý Most
- **premiumServices** (499/889/399/349+449 Kč, 4 služby) — Beroun 2, Praha 1 (Máj), Praha 3 (Žižkov), Praha 5 (Smíchov), Jesenice
- **slanyServices** (399/499/249/299+399/349/749 Kč) — Slaný (klasika 399 + sleva 25 % pro PČR/HZS/ZZS/ISIC)
- **valueServices** — NEPOUŽÍVÁ SE
- **premiumDiscountServices** — NEPOUŽÍVÁ SE
- **Nitra** — vlastní inline ceník v EUR, není ve sdílené skupině

## CZ/EN jazykový přepínač
- **Praha 1, Praha 3, Praha 5, Praha 6, Jesenice** — `isBilingual` check v `src/app/pobocky/[id]/page.tsx`
- ⚠️ Check je **duplikovaný na 2 místech** v tom souboru — při přidání pobočky upravit OBĚ
- URL parametr `?lang=en`, ukládá se do `localStorage` pod klíčem `ak-lang`
- Přepínač: vlajky 🇨🇿/🇬🇧 nad hero obrázkem (`LanguageSwitcher.tsx`)
- Překlady v `src/lib/translations.ts`:
  - `locationPageTranslations` — UI labely (Adresa→Address, Mobil→Phone, ...)
  - `serviceTranslations` — názvy a popisy služeb (CZ název → EN název + popis)
  - `translateService()` — helper, řeší i discount suffix
  - `translateDays()` — Po→Mon, Út→Tue, ...
  - `careerAcademyTranslations`, `vouchersTranslations`, `contactTranslations`
- Header/Footer zůstávají česky (sdílené přes celý web)
- `generateMetadata` vrací anglický title/description + `locale: "en_US"` pro `?lang=en`

## Fotky poboček
- Uložené v `public/images/locations/photo-{id}.jpg`
- Část poboček sdílí `photo-beroun.jpg` — aktuální přiřazení viz pole `image` v `data.ts`

## SEO landing pages
- Vzor: `barber-{mesto}`, `pansky-strih-{mesto}`, `skin-fade-{mesto}` + EN varianty pod `/en/`
- Standard = pobočka + 2 služby
- Obsah v `src/lib/seo-content.ts` (~1700 ř., největší soubor projektu)
- Šablony: `src/components/seo/SeoLocationPage.tsx`, `SeoServicePage.tsx`
- ⚠️ Doorway pages byly záměrně odebrány jako Google-unfriendly (commit `9bec8de`) — **nevracet**

## Deploy
```bash
npx vercel --prod
```
Build automaticky projde přes `npm run build`. Stránka `/pobocky/[id]` je dynamická (čte `searchParams` pro lang).

## Důležité
- **Ceny se mění v `src/lib/data.ts`** — každá změna ceníku se projeví na homepage i detail stránce
- **Nitra má vlastní ceník v EUR** — není v žádné sdílené skupině
- **About text** je na 4 místech: `About.tsx`, `WalkIn.tsx`, `translations.ts` (cs + en), `page.tsx` (sk verze)
- Při přidání nové bilingvální pobočky: přidat ID do `isBilingual` checku v `page.tsx`
