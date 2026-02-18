import { siteConfig } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";

export function WalkIn() {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-6 md:flex-row md:gap-12">
        <div className="flex-1">
          <h2 className="font-[family-name:var(--font-roboto-slab)] text-[32px] font-bold leading-[1.2]">
            Přijďte bez objednání nebo se objednejte online
          </h2>
        </div>
        <div className="flex-1 text-sm leading-[1.7] text-gray">
          <p>
            Všechny naše pobočky fungují jako walk-in barbershopy, takže se
            nemusíte objednávat dopředu. Stačí k nám dorazit a svěřit se do
            rukou našich profesionálních barberů, pod vedením majitele sítě
            Adriana Křižana.
          </p>
          <a
            href={siteConfig.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
          >
            Rezervace
            <IconCircle />
          </a>
        </div>
      </div>
    </section>
  );
}
