import Image from "next/image";

export function BarberPole() {
  return (
    <section className="bg-bg py-12 text-center">
      <Image
        src="/images/barber-pole.png"
        alt="Barber pole"
        width={140}
        height={280}
        className="mx-auto block h-auto w-[140px]"
      />
    </section>
  );
}
