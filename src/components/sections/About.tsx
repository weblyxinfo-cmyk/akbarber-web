import { IconCircle } from "@/components/IconCircle";

export function About() {
  return (
    <section className="py-12" id="about">
      <div className="container">
        <h2 className="mb-4 max-w-[480px] font-[family-name:var(--font-roboto-slab)] text-[32px] font-bold leading-[1.2]">
          Prémiová péče bez&nbsp;kompromisů
        </h2>
        <p className="mb-4 max-w-[480px] text-sm leading-[1.7] text-gray">
          AK Barbers vznikl s jedinou vizí – nabídnout služby na té nejvyšší
          úrovni, bez kompromisů. Za celým konceptem stojí Adrian Križan, který
          své dlouholeté zkušenosti předává každému barberovi a osobně dbá na to,
          aby byla kvalita stejně špičková na všech pobočkách.
        </p>
        <p className="mb-4 max-w-[480px] text-sm leading-[1.7] text-gray">
          Přijďte bez objednání a dopřejte si péči, kterou poznáte na první
          pohled. Každý nový barber prochází profesionálním zaškolením a až poté
          nastupuje do provozu. Preciznost, čistota a detail jsou pro nás
          samozřejmostí.
        </p>
        <p className="mb-6 max-w-[480px] text-sm font-medium leading-[1.7] text-white">
          Pánský střih od 499 Kč. Protože skutečný luxus není o ceně – je
          o kvalitě, kterou poznáte už při první návštěvě.
        </p>
        <a
          href="/#kontakt"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
        >
          Kontakt
          <IconCircle />
        </a>
      </div>
    </section>
  );
}
