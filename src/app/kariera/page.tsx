import type { Metadata } from "next";
import { jobPositions, benefits } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";

export const metadata: Metadata = {
  title: "Kariéra",
  description: "Připoj se k týmu AK Barbers. Hledáme zkušené barbery i začátečníky.",
};

export default function KarieraPage() {
  return (
    <>
      <section className="pt-16 pb-20">
        <div className="container">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Připoj se k týmu AK BARBERS
          </h1>
          <p className="mt-4 max-w-xl text-[15px] text-gray">
            Hledáme nadšené a šikovné barbery, ať už zkušené profesionály nebo
            začátečníky, kteří se chtějí učit a rozvíjet.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold">Otevřené pozice</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobPositions.map((job) => (
              <div key={job.title} className="flex flex-col rounded-2xl bg-bg-card p-8">
                <h3 className="text-lg font-bold">{job.title}</h3>
                <p className="mt-1 text-xs text-gray-light">{job.location} &bull; {job.type}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray">{job.description}</p>
                <a href="#kontakt" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Mám zájem <IconCircle />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold">Benefity</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="p-4">
                <h4 className="font-semibold">{b.title}</h4>
                <p className="mt-1 text-sm text-gray">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
