import { categories } from "@/lib/categories";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function CategoryGrid() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Ökuskírteini"
          title="Fimm flokkar, hver með sín mörk"
          text="DRIVEON kennir í B, BE, C, CE og D. Hver flokkur hefur eigin aldursmörk, þyngdarmörk og námsleið. Veldu flokkinn sem þú ert að sækjast eftir."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
