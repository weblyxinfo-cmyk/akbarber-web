import { siteConfig } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";

export function About() {
  return (
    <section className="py-12" id="about">
      <div className="container">
        <h2 className="mb-4 max-w-[480px] font-[family-name:var(--font-roboto-slab)] text-[32px] font-bold leading-[1.2]">
          Záleží nám na&nbsp;tom, abyste se u&nbsp;nás cítili dobře
        </h2>
        <p className="mb-4 max-w-[480px] text-sm leading-[1.7] text-gray">
          Stačí k nám dorazit a svěřit se do rukou našich profesionálních
          barberů, pod vedením majitele sítě Adriana Křižana, který všechny nové
          příchozí nejprve zaučí, než je pustí do provozu a tím pro Vás
          zajišťujeme tu nejlepší možnou péči o Vaše vlasy a vousy.
        </p>
        <a
          href={siteConfig.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
        >
          Rezervace
          <IconCircle />
        </a>
      </div>
    </section>
  );
}
