import { IconCircle } from "@/components/IconCircle";

export function About() {
  return (
    <section className="py-12" id="about">
      <div className="container">
        <h2 className="mb-4 max-w-[480px] font-[family-name:var(--font-roboto-slab)] text-[32px] font-bold leading-[1.2]">
          Záleží nám na&nbsp;tom, abyste se u&nbsp;nás cítili dobře
        </h2>
        <p className="mb-4 max-w-[480px] text-sm leading-[1.7] text-gray">
          Přijďte bez objednání a dopřejte si péči, kterou poznáte na první
          pohled. V AK Barbers pracujeme podle přísných standardů kvality, díky
          kterým držíme špičkový výsledek na každé pobočce. Každý nový barber
          prochází profesionálním zaškolením a až poté nastupuje do provozu.
          Preciznost, čistota a detail jsou pro nás samozřejmostí.
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
