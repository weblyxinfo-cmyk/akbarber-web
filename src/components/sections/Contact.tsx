"use client";

import { useState, FormEvent } from "react";
import { IconCircle } from "@/components/IconCircle";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          message: form.get("message"),
          consent: !!form.get("consent"),
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-10" id="kontakt">
      <div className="container">
        <div className="grid gap-12 rounded-2xl bg-bg-card p-8 sm:p-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-[28px] font-bold leading-[1.2]">
              Máte dotazy?
              <br />
              Napište nám
            </h2>
            <p className="mb-5 text-[13px] leading-[1.7] text-gray">
              Všechny naše pobočky fungují jako walk-in barbershopy, takže se
              nemusíte objednávat dopředu. Stačí k nám dorazit a svěřit se do
              rukou našich profesionálních barberů pod vedením majitele sítě
              Adriana Křižana.
            </p>
            <p className="text-[13px] font-semibold italic text-white">
              Zajišťujeme tu nejlepší možnou
              <br />
              péči o Vaše vlasy a vousy.
            </p>
          </div>

          {status === "success" ? (
            <div className="flex items-center justify-center">
              <p className="text-center text-lg font-semibold text-white">
                Děkujeme za zprávu! Ozveme se vám co nejdříve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
              <input
                type="text"
                name="name"
                placeholder="Jméno, příjmení *"
                required
                className="w-full border-b border-[#2a2a2a] bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                className="w-full border-b border-[#2a2a2a] bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                className="w-full border-b border-[#2a2a2a] bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <textarea
                name="message"
                placeholder="Zpráva *"
                required
                rows={2}
                className="min-h-[60px] w-full resize-y border-b border-[#2a2a2a] bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <label className="flex cursor-pointer items-start gap-2 text-xs text-gray-light">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-[3px] accent-white"
                />
                <span>
                  Souhlasím se{" "}
                  <a
                    href="/ochrana-osobnich-udaju"
                    className="text-white underline"
                  >
                    zpracováním osobních údajů
                  </a>
                  .
                </span>
              </label>

              {status === "error" && (
                <p className="text-xs text-red-400">Něco se pokazilo. Zkuste to znovu.</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-white disabled:opacity-50"
              >
                {status === "loading" ? "Odesílání..." : "Odeslat"}
                <IconCircle />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
