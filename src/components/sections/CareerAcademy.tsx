import { IconCircle } from "@/components/IconCircle";

export function CareerAcademy() {
  return (
    <section className="py-10" id="kariera">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[14px] bg-bg-card p-8">
            <h3 className="mb-4 text-[22px] font-bold leading-[1.2]">
              Kariéra
              <br />
              v AK BARBERS
            </h3>
            <p className="mb-5 text-[13px] leading-[1.6] text-gray">
              <a href="/#kontakt" className="text-white underline underline-offset-2">Připojte se k našemu týmu</a>{" "}
              a staňte se součástí rodiny AK BARBERS! Hledáme nadšené a šikovné
              barbery, ať už zkušené profesionály nebo začátečníky, kteří se
              chtějí učit a rozvíjet.
            </p>
            <a
              href="/kariera"
              className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium"
            >
              Pracovní pozice
              <IconCircle />
            </a>
          </div>

          <div className="rounded-[14px] bg-bg-card p-8" id="akademie">
            <h3 className="mb-4 text-[22px] font-bold leading-[1.2]">
              AK BARBERS
              <br />
              Akademie
            </h3>
            <p className="mb-5 text-[13px] leading-[1.6] text-gray">
              <a href="/academy" className="text-white underline underline-offset-2">Využijte jedinečnou příležitost</a>{" "}
              vstoupit do světa barberingu prostřednictvím profesionálního
              kurzu, který pro tebe připravila AK Barbers Academy pod vedením
              našich špičkových lektorů a zkušených barberů z AK Barbers.
            </p>
            <a
              href="/academy"
              className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium"
            >
              Více info
              <IconCircle />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
