import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zásady cookies | AK BARBERS",
  description: "Zásady používání souborů cookie na webu AK Barbers.",
};

export default function CookiesPage() {
  return (
    <section className="py-16">
      <div className="container">
        <h1 className="mb-8 font-[family-name:var(--font-playfair)] text-[32px] font-bold">
          Zásady používání souborů cookie (EU)
        </h1>
        <div className="prose-dark space-y-6 text-[14px] leading-[1.8] text-[#aaa]">
          <p className="text-[12px] text-[#666]">
            Tyto Zásady cookies byly naposledy aktualizovány 15. dubna 2024 a
            vztahují se na občany a osoby s trvalým pobytem v Evropském
            hospodářském prostoru.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">1. Úvod</h2>
          <p>
            Naše webové stránky https://www.akbarber.com (dále jen &bdquo;web&ldquo;)
            používají cookies a další související technologie (pro usnadnění jsou
            všechny technologie označovány jako &bdquo;cookies&ldquo;). Cookies také
            vkládají třetí strany, které jsme zapojili. V níže uvedeném dokumentu
            vás informujeme o používání cookies na našem webu.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">2. Co jsou soubory cookies?</h2>
          <p>
            Soubor cookie je malý jednoduchý soubor, který je odeslán spolu se
            stránkami tohoto webu a uložen prohlížečem na pevný disk počítače
            nebo jiného zařízení. Informace v nich uložené mohou být vráceny
            našim serverům nebo serverům příslušných třetích stran během
            následné návštěvy.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">3. Co jsou skripty?</h2>
          <p>
            Skript je část programového kódu, který slouží k tomu, aby naše
            webové stránky fungovaly správně a interaktivně. Tento kód je spuštěn
            na našem serveru nebo na vašem zařízení.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">4. Co je to webový maják?</h2>
          <p>
            Webový maják (nebo pixelová značka) je malý, neviditelný kus textu
            nebo obrázku na webu, který se používá ke sledování provozu na webu.
            Za tímto účelem jsou různá data o vás ukládána pomocí webových
            majáků.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">5. Cookies</h2>

          <h3 className="text-[16px] font-semibold text-[#ddd]">
            5.1 Technické nebo funkční soubory cookies
          </h3>
          <p>
            Některé soubory cookies zajišťují, že určité části webu fungují
            správně a že vaše uživatelské preference zůstávají známé. Umístěním
            funkčních souborů cookies usnadňujeme návštěvu našich webových
            stránek. Tímto způsobem nemusíte při návštěvě našich webových stránek
            opakovaně zadávat stejné informace a například položky zůstanou
            v nákupním košíku, dokud nezaplatíte. Tyto cookies můžeme umístit bez
            vašeho souhlasu.
          </p>

          <h3 className="text-[16px] font-semibold text-[#ddd]">5.2 Statistické cookies</h3>
          <p>
            Statistické soubory cookies využíváme k optimalizaci webových stránek
            pro naše uživatele. Díky těmto statistickým cookies získáváme přehled
            o používání našich webových stránek. Žádáme vás o povolení k ukládání
            statistických souborů cookies.
          </p>

          <h3 className="text-[16px] font-semibold text-[#ddd]">
            5.3 Marketingové/Sledovací cookies
          </h3>
          <p>
            Marketingové/sledovací cookies jsou soubory cookies nebo jakákoli jiná
            forma místního úložiště, které se používají k vytváření uživatelských
            profilů k zobrazování reklamy nebo ke sledování uživatele na tomto
            webu nebo na několika webech pro podobné marketingové účely.
          </p>

          <h3 className="text-[16px] font-semibold text-[#ddd]">
            5.4 Tlačítka sociálních médií
          </h3>
          <p>
            Na naše webové stránky jsme zařadili obsah k propagaci webových
            stránek (např. &bdquo;lajkovat&ldquo;, &bdquo;připnout&ldquo;) nebo sdílet
            (např. &bdquo;tweetovat&ldquo;) na sociálních sítích. Tento obsah je vložen
            s kódem odvozeným od třetích stran a umísťuje soubory cookie. Tento
            obsah může ukládat a zpracovávat určité informace pro personalizovanou
            reklamu.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">6. Umístěné cookies</h2>
          <div className="space-y-2">
            <p><strong className="text-[#ddd]">Google reCAPTCHA</strong> — Funkční, nezbytně nutné, Marketingové</p>
            <p><strong className="text-[#ddd]">Google Maps</strong> — Marketingové</p>
            <p><strong className="text-[#ddd]">Google Analytics</strong> — Statistické</p>
          </div>

          <h2 className="text-[18px] font-bold text-[#fff]">7. Souhlas</h2>
          <p>
            Když poprvé navštívíte náš web, ukážeme vám vyskakovací okno
            s vysvětlením o cookies. Jakmile kliknete na &bdquo;Přijmout vše&ldquo;,
            vyjadřujete svůj souhlas s používáním kategorií souborů cookies
            a doplňků popsaných ve vyskakovacím okně a v těchto Zásadách cookies.
            Používání cookies můžete zakázat pomocí svého prohlížeče, ale mějte
            na paměti, že naše webové stránky již nemusí fungovat správně.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">
            8. Povolení/zakázání a odstranění cookies
          </h2>
          <p>
            Pomocí internetového prohlížeče můžete automaticky nebo ručně mazat
            soubory cookies. Můžete také určit, že některé soubory cookies nemusí
            být umístěny. Pokud cookies smažete ve svém prohlížeči, budou znovu
            umístěny po vašem souhlasu, když znovu navštívíte naše webové stránky.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">
            9. Vaše práva týkající se osobních údajů
          </h2>
          <p>
            Máte právo vědět, proč jsou vaše osobní údaje potřebné, co se s nimi
            stane a jak dlouho budou uchovány. Máte právo na přístup k vašim
            osobním údajům, právo na opravu, právo na přenos údajů a právo na
            námitku proti zpracování.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">10. Kontaktní údaje</h2>
          <div className="text-[#bbb]">
            <p>Adrián Križan</p>
            <p>Havlíčkova 128</p>
            <p>266 01 Beroun centrum</p>
            <p>Česká republika</p>
            <p className="mt-2">
              E-mail:{" "}
              <a href="mailto:aktheb1973@icloud.com" className="text-[#fff] underline">
                aktheb1973@icloud.com
              </a>
            </p>
            <p>
              Telefon:{" "}
              <a href="tel:+420775502831" className="text-[#fff] underline">
                +420 775 502 831
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
