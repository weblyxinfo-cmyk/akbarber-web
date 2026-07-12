import Image from "next/image";
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
          <div className="flex items-center gap-14 max-lg:flex-col max-lg:items-start max-lg:gap-9">
            {/* Text */}
            <div className="min-w-0 flex-1">
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-gray-light">
                Největší barber shop v České republice
              </p>
              <h1 className="font-[family-name:var(--font-roboto-slab)] text-5xl font-bold leading-[1.04] max-md:text-4xl">
                Provozovny<br />AK BARBERS
              </h1>
              <p className="mt-5 max-w-[520px] text-sm leading-[1.7] text-gray">
                AK Barbers najdete ve více městech po celém Česku a Slovensku a
                naši síť neustále rozšiřujeme o nové prémiové provozovny. Sledujte
                nás a buďte u toho, jak roste silná barberská komunita.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-9 gap-y-5">
                <div>
                  <div className="font-[family-name:var(--font-roboto-slab)] text-[40px] font-bold leading-none">
                    14
                  </div>
                  <div className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                    barber křesel
                  </div>
                </div>
                <div className="h-11 w-px bg-border max-md:hidden" />
                <div>
                  <div className="font-[family-name:var(--font-roboto-slab)] text-[40px] font-bold leading-none">
                    16
                  </div>
                  <div className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                    poboček
                  </div>
                </div>
                <div className="h-11 w-px bg-border max-md:hidden" />
                <div className="max-w-[170px] text-[13px] font-medium leading-snug text-white">
                  Prémiová péče za dostupnou cenu
                </div>
              </div>
            </div>
            {/* Brand visual */}
            <div className="w-[300px] shrink-0 max-lg:w-full max-lg:max-w-[280px]">
              <div className="overflow-hidden rounded-[16px] border border-border">
                <Image
                  src="/images/hero-brand.jpg"
                  alt="AK Barbers – výloha provozovny na Žižkově"
                  width={360}
                  height={640}
                  className="block h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <p className="mt-10 text-[13px] font-medium text-gray-light">
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
