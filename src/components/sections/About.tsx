import { siteConfig } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";

export function About() {
  return (
    <section className="py-20" id="about">
      <div className="container">
        <h2 className="max-w-[600px] text-3xl font-bold leading-tight sm:text-[42px] sm:leading-[1.2]">
          Záleží nám na tom, abyste se u nás cítili dobře
        </h2>
        <p className="mt-6 max-w-[600px] text-[15px] leading-relaxed text-gray">
          Stačí k nám dorazit a svěřit se do rukou našich profesionálních
          barberů, pod vedením majitele sítě Adriana Křižana, který všechny nové
          příchozí nejprve zaučí, než je pustí do provozu a tím pro Vás
          zajišťujeme tu nejlepší možnou péči o Vaše vlasy a vousy.
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
    </section>
  );
}
