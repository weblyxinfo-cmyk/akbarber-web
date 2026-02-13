import { siteConfig } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";

export function WalkIn() {
  return (
    <section className="border-t border-border py-20">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <h2 className="text-3xl font-bold leading-tight sm:text-[42px] sm:leading-[1.15]">
          Přijďte bez objednání nebo se objednejte online
        </h2>
        <div>
          <p className="text-sm leading-relaxed text-gray">
            Všechny naše pobočky fungují jako walk-in barbershopy, takže se
            nemusíte objednávat dopředu.
          </p>
          <a
            href={siteConfig.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            Rezervace
            <IconCircle />
          </a>
        </div>
      </div>
    </section>
  );
}
