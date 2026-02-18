import Image from "next/image";

export function GentlemanBanner() {
  return (
    <section className="w-[100vw] self-center overflow-hidden bg-bg leading-[0] md:relative md:left-1/2 md:ml-[-50vw]">
      <Image
        src="/images/gentleman-banner.png"
        alt="In a world full of guys, Be a Gentleman"
        width={1440}
        height={400}
        className="block w-full"
        sizes="100vw"
      />
    </section>
  );
}
