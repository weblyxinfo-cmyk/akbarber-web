import { IconCircle } from "@/components/IconCircle";

export function CareerAcademy() {
  return (
    <section className="py-10" id="kariera">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex min-h-[280px] flex-col justify-between rounded-2xl bg-bg-card p-10">
            <div>
              <h3 className="text-[28px] font-bold leading-tight">
                Kariéra
                <br />
                v AK BARBERS
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray">
                <a href="#kontakt" className="underline">Připojte se k našemu týmu</a>{" "}
                a staňte se součástí rodiny AK BARBERS! Hledáme nadšené a šikovné
                barbery, ať už zkušené profesionály nebo začátečníky, kteří se
                chtějí učit a rozvíjet.
              </p>
            </div>
            <a
              href="/kariera"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Pracovní pozice
              <IconCircle />
            </a>
          </div>

          <div className="flex min-h-[280px] flex-col justify-between rounded-2xl bg-bg-card p-10" id="akademie">
            <div>
              <h3 className="text-[28px] font-bold leading-tight">
                AK BARBERS
                <br />
                Akademie
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray">
                <a href="/academy" className="underline">Využijte jedinečnou příležitost</a>{" "}
                vstoupit do světa barberingu prostřednictvím profesionálního
                kurzu, který pro tebe připravila AK Barbers Academy pod vedením
                našich špičkových lektorů a zkušených barberů z AK Barbers.
              </p>
            </div>
            <a
              href="/academy"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
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
