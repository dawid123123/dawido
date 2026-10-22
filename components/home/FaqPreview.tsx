import Link from "next/link";
import { faqItems } from "@/lib/faq";
import { FaqList } from "@/components/shared/FaqList";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FaqPreview() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Spurt og svarað"
            title="Algengar spurningar"
            text="Svörin byggja á opinberum heimildum þar sem þær eiga við. Verð, biðtími og einstaklingsbundin skilyrði eru staðfest í samtali við ökukennarann."
          />
          <Link
            href="/algengar-spurningar"
            className="mt-6 inline-flex text-sm font-semibold text-brand-dark underline-offset-4 hover:underline"
          >
            Sjá allar spurningarnar
          </Link>
        </div>
        <FaqList items={faqItems} />
      </div>
    </section>
  );
}
