import { PageHero } from "@/components/shared/PageHero";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Persónuvernd",
  description:
    "Persónuverndarstefna DRIVEON Ökukennslu. Hvaða upplýsingar fyrirspurnarformið safnar og hvernig þær eru meðhöndlaðar.",
  path: "/personuvernd",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Persónuvernd"
        title="Persónuvernd"
        description="Hvernig DRIVEON meðhöndlar upplýsingar sem þú sendir í gegnum vefinn."
        image="/images/hero-iceland-road.jpg"
        imageAlt="Vegur og fjöll við sjó á Íslandi."
        crumbs={[
          { href: "/", label: "Heim" },
          { label: "Persónuvernd" },
        ]}
      />
      <article className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8 leading-7 text-muted">
          <section>
            <h2 className="text-2xl font-semibold text-navy">Ábyrgðaraðili</h2>
            <p className="mt-3">
              {site.name}, {site.area}. Samband:{" "}
              <a className="text-brand-dark hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              og{" "}
              <a className="text-brand-dark hover:underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Hvaða upplýsingar</h2>
            <p className="mt-3">
              Fyrirspurnarformið biður um nafn, netfang, símanúmer, ósk um ökuréttindaflokk og
              skilaboð. Þessar upplýsingar eru notaðar til að svara fyrirspurn og skipuleggja
              ökutíma.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Sending</h2>
            <p className="mt-3">
              Vefurinn sendir skilaboð aðeins áfram ef breytan CONTACT_WEBHOOK_URL hefur verið
              sett. Sé hún ekki til staðar eru skilaboðin ekki vistuð og ekki send. Þú færð þá
              kost á að opna tölvupóst með sama texta eða hringja. Símtöl og tölvupóstur fara
              ekki í gegnum gagnagrunn vefsins.
            </p>
            <p className="mt-3">
              Sé vefkrækja tengd berast sömu upplýsingar til þeirrar þjónustu sem rekstraraðili
              velur. Varðveisla fer þá eftir þeirri þjónustu. Rekstraraðili þarf að yfirfara þennan
              kafla þegar þjónustan er tengd.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Vafrakökur og rekjanleiki</h2>
            <p className="mt-3">
              Vefurinn notar ekki greiningarvafrakökur og selur ekki upplýsingar. Tæknilegar
              vafrakökur geta fylgt hýsingu vefsins.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Réttindi þín</h2>
            <p className="mt-3">
              Þú getur óskað eftir aðgangi, leiðréttingu eða eyðingu upplýsinga sem DRIVEON
              hefur um þig með því að senda tölvupóst á netfangið hér að ofan. Þessi texti er
              einföld lýsing og rekstraraðili ætti að láta yfirfara hann áður en vefurinn fer í
              notkun.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
