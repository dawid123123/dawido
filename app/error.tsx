"use client";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="bg-navy px-5 pb-24 pt-36 text-white md:px-8">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-semibold tracking-tight">Eitthvað fór úrskeiðis</h1>
        <p className="mt-4 text-white/75">
          Síðan náði ekki að hlaðast. Þú getur reynt aftur eða haft samband í síma.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full bg-brand px-5 py-3 text-sm font-semibold hover:bg-brand-dark"
        >
          Reyna aftur
        </button>
      </div>
    </section>
  );
}
