import Link from "next/link";
import { categories, type Category } from "@/lib/categories";
import { CtaBand } from "@/components/shared/CtaBand";
import { PageHero } from "@/components/shared/PageHero";
import { SourceList } from "@/components/shared/SourceList";

export function CategoryView({ category }: { category: Category }) {
  const related = categories.filter((item) => category.related.includes(item.slug));

  return (
    <>
      <PageHero
        eyebrow={category.code}
        title={category.title}
        description={category.intro}
        image={category.image}
        imageAlt={category.imageAlt}
        crumbs={[
          { href: "/", label: "Heim" },
          { href: "/okuskirteini", label: "Ökuskírteini" },
          { label: category.title },
        ]}
      />
      <article className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_18rem]">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-navy">Hverjum flokkurinn getur hentað</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                {category.suitableFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {category.blocks.map((block) => (
              <section key={block.heading}>
                <h2 className="text-2xl font-semibold text-navy">{block.heading}</h2>
                <div className="mt-4 space-y-4 leading-7 text-muted">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {block.bullets ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                    {block.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="rounded-2xl border border-line bg-white p-6">
              <h2 className="text-xl font-semibold text-navy">Aðgreining frá öðrum flokkum</h2>
              <p className="mt-3 leading-7 text-muted">{category.distinction}</p>
              {related.length ? (
                <ul className="mt-4 flex flex-wrap gap-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/okuskirteini/${item.slug}`}
                        className="inline-flex rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy hover:bg-mist"
                      >
                        Sjá {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>

            {category.reviewNotes.length ? (
              <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
                <h2 className="text-lg font-semibold">Til yfirferðar</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
                  {category.reviewNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </aside>
            ) : null}
          </div>

          <aside className="h-fit rounded-2xl border border-line bg-white p-6 lg:sticky lg:top-28">
            <h2 className="text-lg font-semibold text-navy">Heimildir</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Upplýsingarnar eru almenn leiðsögn samkvæmt opinberum síðum, yfirfarin í október 2026.
              Þær eru ekki lögfræðileg ráðgjöf.
            </p>
            <div className="mt-4">
              <SourceList sources={category.sources} />
            </div>
          </aside>
        </div>
      </article>
      <CtaBand
        title={`Spurðu um ${category.title}`}
        text="DRIVEON birtir ekki verð eða lausa tíma hér. Sendu fyrirspurn og ökukennarinn svarar."
      />
    </>
  );
}
