import type { Metadata } from "next";
import { IconCircle } from "@/components/IconCircle";

export const metadata: Metadata = {
  title: "AK BARBERS Academy",
  description: "Profesionální barber kurzy pod vedením zkušených lektorů z AK Barbers.",
};

export default function AcademyPage() {
  return (
    <>
      <section className="pt-16 pb-20">
        <div className="container">
          <h1 className="text-4xl font-bold sm:text-5xl">
            AK BARBERS Academy
          </h1>
          <p className="mt-4 max-w-xl text-[15px] text-gray">
            Profesionální barber kurzy pod vedením zkušených lektorů a barberů
            z AK Barbers.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold">O akademii</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-gray">
            Využijte jedinečnou příležitost vstoupit do světa barberingu
            prostřednictvím profesionálního kurzu, který pro Vás připravila
            AK Barbers Academy pod vedením našich špičkových lektorů a
            zkušených barberů z AK Barbers.
          </p>
          <a href="#kontakt" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
            Přihlásit se na kurz <IconCircle />
          </a>
        </div>
      </section>
    </>
  );
}
