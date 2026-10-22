import { faqItems } from "@/lib/faq";
import { CtaBand } from "@/components/shared/CtaBand";
import { FaqList } from "@/components/shared/FaqList";
import { PageHero } from "@/components/shared/PageHero";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Algengar spurningar",
  description:
    "Svar við algengum spurningum um ökunám, námsheimild, bókun ökutíma, ökuréttindi og ökupróf hjá DRIVEON í Reykjavík.",
  path: "/algengar-spurningar",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Spurt og svarað"
        title="Algengar spurningar"
        description="Stutt svör um upphaf náms, skilyrði, bókun, flokka, kostnað og undirbúning fyrir ökupróf."
        image="/images/hero-iceland-road.jpg"
        imageAlt="Íslenskt landslag með vegi, fjöllum og sjó."
        crumbs={[
          { href: "/", label: "Heim" },
          { label: "Algengar spurningar" },
        ]}
      />
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="mb-6 leading-7 text-muted">
            Svörin eru almenn leiðsögn. Þau sem vísa í lög eða opinberar síður eru merkt með
            tenglum. Verð DRIVEON, bið eftir tímum og mat á hæfni hvers og eins eru ekki birt hér.
          </p>
          <FaqList items={faqItems} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
