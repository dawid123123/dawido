import Link from "next/link";
import { categories, categoryComparison } from "@/lib/categories";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { CtaBand } from "@/components/shared/CtaBand";
import { PageHero } from "@/components/shared/PageHero";
import { pageMetadata } from "@/lib/site";
import { sources } from "@/lib/sources";

export const metadata = pageMetadata({
  title: "Ökuskírteini",
  description:
    "Ökuskírteini í B-, BE-, C-, CE- og D-flokki. Sjáðu muninn á fólksbifreið, eftirvagni, vörubifreið og hópbifreið áður en þú hefur ökunám í Reykjavík.",
  path: "/okuskirteini",
});

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ökuréttindi"
        title="Ökuskírteini"
        description="Fimm flokkar sem DRIVEON kennir. Aldur í töflunni er lágmarksaldur við útgáfu skírteinis. Nám getur hafist fyrr, eftir flokki."
        image="/images/hero-iceland-road.jpg"
        imageAlt="Þjóðvegur meðfram sjó á Íslandi, snævi þakin fjöll í bakgrunni."
        crumbs={[
          { href: "/", label: "Heim" },
          { label: "Ökuskírteini" },
        ]}
      />
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-2xl font-semibold text-navy">Flokkarnir í stuttu máli</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">
            Tölurnar eru úr flokkaskrá Ísland.is og reglugerð nr. 830/2011. Þær eru almenn
            leiðsögn, ekki tæmandi listi yfir öll ökutæki sem hver flokkur nær til.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="min-w-[46rem] w-full text-left text-sm">
              <caption className="sr-only">
                Samanburður á B-, BE-, C-, CE- og D-flokki
              </caption>
              <thead className="bg-mist text-navy">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Flokkur
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Ökutæki
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Eftirvagn
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Aldur
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Forsaga
                  </th>
                </tr>
              </thead>
              <tbody>
                {categoryComparison.map((row) => (
                  <tr key={row.code} className="border-t border-line">
                    <th scope="row" className="px-4 py-3 font-semibold text-navy">
                      <Link href={`/okuskirteini/${row.slug}`} className="hover:underline">
                        {row.code}
                      </Link>
                    </th>
                    <td className="px-4 py-3 text-muted">{row.vehicle}</td>
                    <td className="px-4 py-3 text-muted">{row.trailer}</td>
                    <td className="px-4 py-3 text-muted">{row.age}</td>
                    <td className="px-4 py-3 text-muted">{row.prerequisite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted">
            Heimild:{" "}
            <a
              href={sources.categories.href}
              className="text-brand-dark underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {sources.categories.label}
            </a>{" "}
            og{" "}
            <a
              href={sources.regulation.href}
              className="text-brand-dark underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {sources.regulation.label}
            </a>
            .
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
