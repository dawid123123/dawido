import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold tracking-[0.16em] text-brand">{category.code}</p>
        <h3 className="mt-2 text-xl font-semibold text-navy">
          <Link
            href={`/okuskirteini/${category.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-offset-4"
          >
            {category.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{category.cardDescription}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark">
          Skoða flokk
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
