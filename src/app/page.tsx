import { Accordion } from "@/components/sections/Accordion";
import { WalkIn } from "@/components/sections/WalkIn";
import { GentlemanBanner } from "@/components/sections/GentlemanBanner";
import { About } from "@/components/sections/About";
import { CareerAcademy } from "@/components/sections/CareerAcademy";
import { Vouchers } from "@/components/sections/Vouchers";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      {/* Page Title */}
      <section className="pb-4 pt-16">
        <div className="container">
          <h1 className="text-4xl font-bold sm:text-[42px]">Provozovny AK BARBERS</h1>
          <p className="mt-4 max-w-[700px] text-[15px] leading-relaxed text-gray">
            AK Barbers najdete ve více městech po celém Česku a Slovensku a naši
            síť neustále rozšiřujeme o nové prémiové provozovny. Sledujte nás a
            buďte u toho, jak roste silná barberská komunita.
          </p>
          <p className="mt-8 text-[13px] italic text-gray-light">
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
      <Contact />
    </>
  );
}
