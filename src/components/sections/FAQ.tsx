"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Musím se objednat dopředu?",
    answer:
      "Většina našich poboček funguje jako walk-in barbershop, takže se nemusíte objednávat. Stačí přijít. U vybraných poboček je možné se objednat i online přes rezervační systém Booqme.",
  },
  {
    question: "Kolik stojí pánské stříhání?",
    answer:
      "Klasické pánské stříhání stojí od 449 Kč. Skin Fade nebo práce s delšími vlasy od 499 Kč. Kompletní balíček (střih + vousy) od 799 Kč. Senior střih (65+) od 299 Kč a dětský střih (1–15 let) od 349 Kč.",
  },
  {
    question: "Kde najdu pobočky AK Barbers?",
    answer:
      "AK Barbers najdete v Berouně (2 pobočky), Praze (Praha 6, Praha 1 Staré Město), Králově Dvoře, Plzni, Hořovicích, Slaném, Českých Budějovicích (Máj) a Nitře na Slovensku.",
  },
  {
    question: "Jaká je otevírací doba?",
    answer:
      "Všechny naše pobočky mají otevřeno pondělí až pátek od 9:00 do 18:00 a sobota a neděle od 9:00 do 14:00.",
  },
  {
    question: "Nabízíte dárkové poukázky?",
    answer:
      "Ano, dárkové poukázky můžete zakoupit přímo v salonu nebo online přes náš rezervační systém. Jsou ideální jako dárek pro každého muže.",
  },
  {
    question: "Hledáte nové barbery?",
    answer:
      "Ano! Neustále hledáme zkušené barbery i začátečníky do všech poboček v ČR i SR. Nabízíme profesionální zázemí, školení pod vedením Adriana Křižana a férové podmínky. Podívejte se na stránku Kariéra.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-12" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <h2 className="mb-6 font-[family-name:var(--font-roboto-slab)] text-[28px] font-bold leading-[1.2]">
          Často kladené dotazy
        </h2>
        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-4 text-left transition-opacity hover:opacity-70"
                >
                  <span className="pr-4 text-[14px] font-semibold">{faq.question}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-all duration-300 ${
                      isOpen
                        ? "border-white bg-white text-black"
                        : "border-[#444] bg-transparent text-white"
                    }`}
                  >
                    <span className="text-xs">{isOpen ? "▴" : "▾"}</span>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "500px" : "0" }}
                >
                  <p className="pb-4 text-[13px] leading-[1.7] text-gray">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
