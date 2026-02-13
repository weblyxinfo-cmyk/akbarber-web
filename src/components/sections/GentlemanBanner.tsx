import Image from "next/image";

export function GentlemanBanner() {
  return (
    <section className="w-full overflow-hidden">
      <Image
        src="/images/gentleman-banner.png"
        alt="In a world full of guys, Be a Gentleman"
        width={1440}
        height={400}
        className="w-full object-cover"
        sizes="100vw"
      />
    </section>
  );
}
