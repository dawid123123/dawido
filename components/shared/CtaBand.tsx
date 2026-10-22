import Link from "next/link";
import { bookingHref, site } from "@/lib/site";

export function CtaBand({
  title = "Tilbúin að hefja ökunám?",
  text = "Sendu fyrirspurn eða hringdu. Þetta er ekki staðfest bókun fyrr en ökukennarinn hefur staðfest tímann.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-5 py-6 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-navy px-6 py-8 text-white md:flex-row md:items-center md:px-10 md:py-10">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
          <p className="mt-3 text-white/75">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href={bookingHref}
            className="inline-flex justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark focus-visible:outline-white"
          >
            Bóka ökutíma
          </Link>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold hover:bg-white/10"
          >
            Hringja í {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
