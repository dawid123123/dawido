import { ContactSection } from "@/components/home/ContactSection";
import { PageHero } from "@/components/shared/PageHero";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Hafa samband",
  description:
    "Hafðu samband við DRIVEON Ökukennslu í síma 774 7775 eða á runarb75@gmail.com og sendu fyrirspurn um ökutíma í Reykjavík.",
  path: "/hafa-samband",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Fyrirspurn"
        title="Hafa samband"
        description="Bókaðu ökutíma með fyrirspurn. Ökukennarinn staðfestir tímann. Ekkert er bókað sjálfvirkt."
        image="/images/iceland-suv.jpg"
        imageAlt="Bíll á íslenskum þjóðvegi."
        crumbs={[
          { href: "/", label: "Heim" },
          { label: "Hafa samband" },
        ]}
      />
      <ContactSection
        title="Bóka ökutíma"
        text="Fylltu út formið eða hringdu. Ef tölvupóstþjónusta er ekki tengd við vefinn færðu skýr fyrirmæli um að senda skilaboðin sjálfur. Ekkert staðfestingarskeyti birtist nema skilaboðin hafi verið send."
      />
    </>
  );
}
