import Image from "next/image";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  crumbs: Array<{ href?: string; label: string }>;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 pb-14 pt-28 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pb-16 md:pt-32">
        <div>
          <Breadcrumbs items={crumbs} />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">{description}</p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
