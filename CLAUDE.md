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

## Pobočky — 10 lokací
| ID | Město | Typ | Ceník | Bilingvální |
|---|---|---|---|---|
| beroun | Beroun | walk-in | standardServices | ne |
| beroun-2 | Beroun | reservation | premiumServices | ne |
| praha-6 | Praha | walk-in + reservation | valueServices (klasika 449) | **CZ/EN** |
| praha-1 | Praha | walk-in + reservation | standardServices | **CZ/EN** |
| kraluv-dvur | Králův Dvůr | walk-in | standardServices | ne |
| plzen | Plzeň | walk-in + reservation | standardServices | ne |
| horovice | Hořovice | walk-in + reservation | standardServices | ne |
| slany | Slaný | walk-in + reservation | standardServices | ne |
| maj | Máj | walk-in + reservation | standardServices | ne |
| nitra | Nitra (SK) | walk-in | vlastní (EUR) | ne |

## Ceníkové skupiny (src/lib/data.ts)
- **standardServices** (449/499/299/349+449/399/799 Kč) — Beroun, Praha 1, Králův Dvůr, Plzeň, Hořovice, Slaný, Máj
- **valueServices** (449/499/249/299+399/349/749 Kč) — Praha 6 (klasika 449, zbytek levnější)
- **premiumServices** (499/889/399/349+449 Kč, 4 služby) — Beroun 2
- **premiumDiscountServices** — NEPOUŽÍVÁ SE (dříve Praha 1 a Máj)
- **slanyServices** — NEPOUŽÍVÁ SE (dříve Slaný)

## CZ/EN jazykový přepínač
- **Pouze Praha 1 a Praha 6** (`isBilingual = id === "praha-1" || id === "praha-6"`)
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
- Beroun, Praha 1, Slaný, Máj, Králův Dvůr sdílejí stejnou fotku
- Beroun 2, Hořovice, Plzeň, Praha 6, Nitra mají vlastní fotky (aktualizovány 2025-02-18)

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
