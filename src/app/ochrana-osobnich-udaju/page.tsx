import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | AK BARBERS",
  description: "Prohlášení o ochraně osobních údajů AK Barbers.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <div className="container">
        <h1 className="mb-8 font-[family-name:var(--font-playfair)] text-[32px] font-bold">
          Prohlášení o ochraně osobních údajů
        </h1>
        <div className="space-y-6 text-[14px] leading-[1.8] text-[#aaa]">
          <p className="text-[12px] text-[#666]">
            Toto prohlášení o ochraně osobních údajů bylo naposledy aktualizováno
            23. listopadu 2023 a vztahuje se na občany a osoby s trvalým pobytem
            v Evropském hospodářském prostoru.
          </p>

          <p>
            V tomto prohlášení o ochraně osobních údajů vysvětlujeme, co děláme
            s údaji, které o vás získáme prostřednictvím https://www.akbarber.com.
            Doporučujeme pozorně si přečíst toto prohlášení.
          </p>

          <p>Při našem zpracování dodržujeme požadavky právních předpisů na ochranu soukromí. To mimo jiné znamená, že:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>jasně uvádíme účely, pro které zpracováváme osobní údaje;</li>
            <li>omezujeme shromažďování osobních údajů pouze na nezbytné údaje;</li>
            <li>vyžadujeme výslovný souhlas se zpracováním v případech vyžadujících souhlas;</li>
            <li>přijímáme příslušná bezpečnostní opatření k ochraně vašich údajů;</li>
            <li>respektujeme vaše právo na přístup, opravu nebo vymazání údajů.</li>
          </ul>

          <h2 className="text-[18px] font-bold text-[#fff]">
            1. Účel, údaje a doba uchovávání
          </h2>
          <h3 className="text-[16px] font-semibold text-[#ddd]">
            1.1 Kontakt – prostřednictvím telefonu, pošty, e-mailu a/nebo webových formulářů
          </h3>
          <p>K tomuto účelu používáme následující údaje:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Jméno a příjmení</li>
            <li>E-mailová adresa</li>
            <li>Telefonní číslo</li>
          </ul>
          <p>
            Základem zpracování je poskytnutí souhlasu. Údaje uchováváme, dokud
            není služba ukončena.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">2. Cookies</h2>
          <p>
            Naše webové stránky používají cookies. Další informace najdete na{" "}
            <a href="/cookies" className="text-[#fff] underline underline-offset-2">
              stránce zásad cookies
            </a>
            .
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">3. Praktiky zveřejňování</h2>
          <p>
            Osobní údaje zpřístupňujeme, pokud nám zákon nebo soudní příkaz
            vyžaduje poskytnout informace. Se společností Google jsme uzavřeli
            dohodu o zpracování dat. Google nesmí data používat pro žádné jiné
            služby. Zařazení úplných IP adres je zakázáno.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">4. Zabezpečení</h2>
          <p>
            Zavázali jsme se k zabezpečení osobních údajů. Přijímáme vhodná
            bezpečnostní opatření, abychom omezili zneužití a neoprávněný přístup
            k osobním údajům. K vašim údajům mají přístup pouze nezbytné osoby,
            přístup je chráněn a bezpečnostní opatření jsou pravidelně
            kontrolována.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">
            5. Webové stránky třetích stran
          </h2>
          <p>
            Toto prohlášení se nevztahuje na webové stránky třetích stran
            propojené odkazy s našimi stránkami. Nemůžeme zaručit, že tyto třetí
            strany budou s vašimi údaji nakládat spolehlivě nebo bezpečně.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">
            6. Změny tohoto prohlášení
          </h2>
          <p>
            Vyhrazujeme si právo na změnu tohoto prohlášení. Doporučujeme vám
            pravidelně se s ním seznamovat.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">
            7. Přístup a úprava vašich údajů
          </h2>
          <p>Máte následující práva:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Právo vědět, proč potřebujeme vaše údaje a jak dlouho budou uchovány</li>
            <li>Právo na přístup k vašim osobním údajům</li>
            <li>Právo na opravu, doplnění, odstranění nebo zablokování údajů</li>
            <li>Právo odvolat souhlas se zpracováním</li>
            <li>Právo na přenos údajů jinému správci</li>
            <li>Právo vznést námitku proti zpracování</li>
          </ul>

          <h2 className="text-[18px] font-bold text-[#fff]">8. Podání stížnosti</h2>
          <p>
            Máte právo podat stížnost Úřadu pro ochranu osobních údajů.
          </p>

          <h2 className="text-[18px] font-bold text-[#fff]">9. Kontaktní údaje</h2>
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
