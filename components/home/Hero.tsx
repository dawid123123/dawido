import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const trust = [
  { icon: Clock, label: "Sveigjanlegir tímar" },
  { icon: ShieldCheck, label: "Örugg og persónuleg kennsla" },
  { icon: MapPin, label: "Reykjavík og nágrenni" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-navy text-white">
      <Image
        src="/images/iceland-suv.jpg"
        alt="Bíll á þjóðvegi á Íslandi, með hæðum og vatni í bakgrunni."
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/15 to-navy/70" />
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-8 pt-28 md:px-8 md:pb-12">
        <div className="hero-rise max-w-2xl rounded-3xl bg-navy px-6 py-8 sm:px-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
            {site.legalName}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {site.slogan}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">
            {site.headline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/namsferlid"
              className="inline-flex justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark focus-visible:outline-white"
            >
              Sjá hvernig ferlið virkar
            </Link>
            <Link
              href="/hafa-samband"
              className="inline-flex justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Hafa samband
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-3">
            {trust.map((item) => (
              <li key={item.label} className="flex items-center gap-3 text-sm font-medium text-white">
                <item.icon aria-hidden="true" className="h-5 w-5 shrink-0" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
