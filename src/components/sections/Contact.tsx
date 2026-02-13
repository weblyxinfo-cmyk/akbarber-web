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
    <section className="py-20" id="kontakt">
      <div className="container">
        <div className="grid gap-16 rounded-2xl bg-bg-card p-10 sm:p-[60px] lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Máte dotazy?
              <br />
              Napište nám
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-gray">
              Všechny naše pobočky fungují jako walk-in barbershopy, takže se
              nemusíte objednávat dopředu. Stačí k nám dorazit a svěřit se do
              rukou našich profesionálních barberů pod vedením majitele sítě
              Adriana Křižana.
            </p>
            <p className="mt-5 text-sm font-semibold italic text-white">
              Zajišťujeme tu nejlepší možnou péči o Vaše vlasy a vousy.
            </p>
          </div>

          {status === "success" ? (
            <div className="flex items-center justify-center">
              <p className="text-center text-lg font-semibold text-white">
                Děkujeme za zprávu! Ozveme se vám co nejdříve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Jméno, příjmení *"
                required
                className="w-full border-b border-gray-dark bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                className="w-full border-b border-gray-dark bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                className="w-full border-b border-gray-dark bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <textarea
                name="message"
                placeholder="Zpráva *"
                required
                rows={3}
                className="w-full resize-y border-b border-gray-dark bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <label className="flex cursor-pointer items-start gap-2.5 text-xs text-gray">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-white"
                />
                <span>
                  Souhlasím se{" "}
                  <a
                    href="https://www.akbarber.com/prohlaseni-o-ochrane-osobnich-udaju/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
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
                className="mt-2 inline-flex items-center gap-2 self-start text-sm font-semibold text-white disabled:opacity-50"
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
