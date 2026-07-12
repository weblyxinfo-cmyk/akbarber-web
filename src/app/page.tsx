import { Accordion } from "@/components/sections/Accordion";
import { WalkIn } from "@/components/sections/WalkIn";
import { GentlemanBanner } from "@/components/sections/GentlemanBanner";
import { About } from "@/components/sections/About";
import { CareerAcademy } from "@/components/sections/CareerAcademy";
import { Vouchers } from "@/components/sections/Vouchers";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { ZizkovNotice } from "@/components/ZizkovNotice";

export default function HomePage() {
  return (
    <>
      {/* Page Header */}
      <section className="pb-10 pt-14">
        <div className="container">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-gray-light">
            Největší barber shop v České republice
          </p>
          <h1 className="font-[family-name:var(--font-roboto-slab)] text-4xl font-bold leading-tight">
            Provozovny<br />AK BARBERS
          </h1>
          <p className="mt-4 max-w-[560px] text-sm leading-[1.7] text-gray">
            AK Barbers najdete ve více městech po celém Česku a Slovensku a naši
            síť neustále rozšiřujeme o nové prémiové provozovny. Sledujte nás a
            buďte u toho, jak roste silná barberská komunita.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-roboto-slab)] text-3xl font-bold">14</span>
              <span className="text-[13px] text-gray">barber křesel</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-roboto-slab)] text-3xl font-bold">16</span>
              <span className="text-[13px] text-gray">poboček</span>
            </div>
            <div className="text-[13px] font-medium text-white">
              Prémiová péče za dostupnou cenu
            </div>
          </div>
          <p className="mt-8 text-[13px] font-medium text-gray-light">
            Vyberte si z našich provozoven:
          </p>
        </div>
      </section>

      <Accordion />
      <WalkIn />
      <GentlemanBanner />
      <About />
      <CareerAcademy />
      <Vouchers />
      <FAQ />
      <Contact />
      <ZizkovNotice />
    </>
  );
}
