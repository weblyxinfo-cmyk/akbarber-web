import Link from "next/link";
import type { Location } from "@/types";

/** Upozornění na SEO landing pages, když je pobočka dočasně zavřená / v rekonstrukci. */
export function ClosedNotice({ location, lang }: { location: Location; lang: string }) {
  const closed = location.temporarilyClosed;
  if (!closed) return null;
  const isReconstruction = closed.reason === "reconstruction";
  const en = lang === "en";

  return (
    <section className="pt-6">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[10px] border border-[#e57373]/40 bg-[#0f0f0f] p-5">
          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e57373]">
              {isReconstruction ? (en ? "Renovation" : "Rekonstrukce") : en ? "Temporarily closed" : "Dočasně uzavřeno"}
            </div>
            <p className="text-[14px] text-white">
              {en
                ? `This branch is ${isReconstruction ? "closed for renovation" : "temporarily closed"}. In the meantime, visit us at AK BARBERS ${closed.redirectToName}.`
                : `Pobočka je ${isReconstruction ? "v rekonstrukci" : "dočasně uzavřena"}. Mezitím se na vás těšíme na pobočce AK BARBERS ${closed.redirectToName}.`}
            </p>
          </div>
          <Link
            href={`/pobocky/${closed.redirectToId}${en ? "?lang=en" : ""}`}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-black transition-opacity hover:opacity-90"
          >
            {en ? "Go to" : "Přejít na"} {closed.redirectToName}
          </Link>
        </div>
      </div>
    </section>
  );
}
