import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-navy px-5 pb-24 pt-36 text-white md:px-8">
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Síðan fannst ekki</h1>
        <p className="mt-4 text-white/75">
          Slóðin er ekki til. Farðu á forsíðu eða skoðaðu ökuréttindaflokkana.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold hover:bg-brand-dark"
          >
            Heim
          </Link>
          <Link
            href="/okuskirteini"
            className="inline-flex justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold"
          >
            Ökuskírteini
          </Link>
        </div>
      </div>
    </section>
  );
}
