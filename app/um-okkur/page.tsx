import { CtaBand } from "@/components/shared/CtaBand";
import { PageHero } from "@/components/shared/PageHero";
import { categories } from "@/lib/categories";
import Link from "next/link";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Um okkur",
  description:
    "DRIVEON Ökukennsla sinnir ökukennslu í Reykjavík og nágrenni fyrir B-, BE-, C-, CE- og D-flokk.",
  path: "/um-okkur",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Ökukennslan"
        title="Um DRIVEON"
        description="Ökukennsla í Reykjavík og nágrenni fyrir þá sem eru að hefja ökunám eða bæta við réttindum."
        image="/images/iceland-suv.jpg"
        imageAlt="Bíll á vegi í íslensku landslagi."
        crumbs={[
          { href: "/", label: "Heim" },
          { label: "Um okkur" },
        ]}
      />
      <article className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 leading-7 text-muted">
            <h2 className="text-2xl font-semibold text-navy">Hvað DRIVEON gerir</h2>
            <p>
              DRIVEON Ökukennsla kennir akstur í höfuðborgarsvæðinu. Kennslan nær til fólksbifreiða,
              bifreiðar með eftirvagni, vörubifreiða, vörubifreiðar með eftirvagni og hópbifreiða.
            </p>
            <p>
              Tímar eru skipulagðir í samráði. Nálgunin er persónuleg og öryggi í akstri er í
              fyrirrúmi. Vefurinn útskýrir opinbert ferli ökunáms, en einstaklingsbundin ráðgjöf
              fæst í samtali við ökukennarann.
            </p>
            <p>
              Hér eru ekki birtar fullyrðingar um starfsaldur, prófgráður, umsagnir eða verðlaun.
              Þær upplýsingar eru aðeins birtar þegar þær liggja fyrir og má staðfesta.
            </p>
            <h2 className="pt-4 text-2xl font-semibold text-navy">Flokkar</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/okuskirteini/${category.slug}`}
                    className="block rounded-2xl border border-line bg-white px-4 py-4 hover:border-brand"
                  >
                    <span className="text-sm font-semibold text-brand">{category.code}</span>
                    <span className="mt-1 block font-semibold text-navy">{category.title}</span>
                    <span className="mt-1 block text-sm">{category.cardDescription}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-2xl bg-navy p-6 text-white">
            <h2 className="text-lg font-semibold">Samband</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-white/60">Sími</dt>
                <dd>
                  <a className="text-lg font-semibold hover:underline" href={`tel:${site.phoneTel}`}>
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/60">Netfang</dt>
                <dd>
                  <a className="font-semibold break-all hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/60">Þjónustusvæði</dt>
                <dd className="font-semibold">{site.area}</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-6 text-white/70">
              Ekkert heimilisfang er birt hér. Kennslan fer fram í Reykjavík og nágrenni eftir
              samkomulagi.
            </p>
          </aside>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
