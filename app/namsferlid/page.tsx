import Link from "next/link";
import { BookOpen, ClipboardCheck, GraduationCap, IdCard, Route, UserRound } from "lucide-react";
import { CtaBand } from "@/components/shared/CtaBand";
import { PageHero } from "@/components/shared/PageHero";
import { SourceList } from "@/components/shared/SourceList";
import { processSteps } from "@/lib/process";
import { sources } from "@/lib/sources";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Námsferlið",
  description:
    "Hvernig ökunám fer fram á Íslandi. Námsheimild, bóklegt nám, ökutímar, æfingaakstur, ökupróf og útgáfa ökuskírteinis, með tilvísun í Ísland.is og Samgöngustofu.",
  path: "/namsferlid",
});

const icons = {
  user: UserRound,
  file: ClipboardCheck,
  book: BookOpen,
  route: Route,
  exam: GraduationCap,
  card: IdCard,
};

const sections = [
  {
    heading: "Undirbúningur og umsókn",
    paragraphs: [
      "Fyrsta skrefið er að velja ökukennara. Áður en nám hefst þarf námsheimild frá sýslumanni. Fyrir fyrsta ökuskírteinið í B-flokki sækir nemandinn um á Ísland.is með rafrænum skilríkjum. Ökunám getur hafist við 16 ára aldur og skírteinið má gefa út á 17 ára afmælisdegi.",
      "Fyrir aukin réttindi, svo sem BE, C, CE og D, er einnig sótt um hjá sýslumanni. Skila þarf einu umsóknarblaði fyrir hvern flokk. Ísland.is nefnir heilbrigðisvottorð sem er ekki eldra en þriggja mánaða. Aldur og forsaga fyrri réttinda eru ólík eftir flokki og eru útskýrð á síðu hvers flokks.",
      "Þegar námsheimild er samþykkt stofnast stafræn ökunámsbók. Í hana eru skráðir ökutímar, staðfestingar úr ökuskóla og niðurstöður prófa. Námsheimild gildir í tvö ár.",
    ],
  },
  {
    heading: "Bóklegt nám og ökutímar",
    paragraphs: [
      "Umsækjandi sem er að taka réttindi í fyrsta sinn í flokki skal sækja verklegt nám hjá ökukennara með löggildingu fyrir flokkinn og bóklegt nám sem að jafnaði fer fram í ökuskóla. Námið fylgir námskrá sem Samgöngustofa setur og ráðherra staðfestir.",
      "Í B-flokki skiptist bóklega námið, samkvæmt Ísland.is, í Ökuskóla 1, 2 og 3 og er oft kennt í netnámi. Verklegir tímar eru teknir samhliða. Hluti verklegs náms í B-flokki skal fara fram í ökugerði áður en ökuprófi lýkur.",
      "Lágmarksfjöldi kennslustunda er í 10. gr. reglugerðar nr. 830/2011. Hver stund er 45 mínútur. Fyrir B-flokk eru það 25 bóklegar stundir og 17 verklegar. Fyrir BE eru fjórar verklegar stundir skráðar. Fyrir C til vöruflutninga í atvinnuskyni eru það 32 bóklegar og 12 verklegar. Fyrir CE eru það fjórar bóklegar og sjö verklegar. Fyrir D til farþegaflutninga í atvinnuskyni eru það 48 bóklegar og 12 verklegar. Fækkun getur átt við vegna fyrra náms.",
      "Ísland.is nefnir einnig 15 ökutíma sem lágmark í B-flokki og aðrar tölur um hvenær megi taka bóklegt próf. Þessar tölur stemma ekki allar við reglugerðina. Ökukennari staðfestir hvenær námi er lokið. Sjá athugasemd neðar.",
    ],
  },
  {
    heading: "Æfingaakstur með leiðbeinanda",
    paragraphs: [
      "Æfingaakstur á aðeins við um nám til B-réttinda og er ekki skylda. Hann er viðbót, ekki staðgengill ökutíma. Leiðbeinandi telst stjórnandi bifreiðarinnar og má ekki taka endurgjald.",
      "Ökukennari og ökuskóli staðfesta að nemandi hafi nægilega þekkingu og þjálfun. Ísland.is segir að ljúka þurfi Ökuskóla 1 og að jafnaði 10 verklegum tímum. Leiðbeinandi sækir svo um leyfi hjá sýslumanni. Ekki má hefja æfingaakstur fyrr en leyfið liggur fyrir. Bíllinn skal vera auðkenndur og má ekki vera yfir 3.500 kg.",
      "Leiðbeinandi þarf að vera 24 ára, hafa haft gilt B-skírteini í að minnsta kosti fimm ár og má ekki hafa verið án skírteinis vegna sviptingar eða refsað fyrir vítaverða aksturshætti á síðustu tólf mánuðum. Leyfið má gefa út til allt að 18 mánaða.",
    ],
  },
  {
    heading: "Ökupróf",
    paragraphs: [
      "Ökupróf er bóklegt og verklegt. Prófdómari gengur úr skugga um að námsheimild liggi fyrir, að aldursmörk séu uppfyllt og að staðfesting ökukennara og ökuskóla liggi fyrir. Samgöngustofa annast prófin en hefur falið Frumherja framkvæmd þeirra.",
      "Bóklegt próf má taka mest tveimur mánuðum áður en lágmarksaldri flokksins er náð. Í B-flokki er prófið 50 fullyrðingar og standast þarf með 45 réttum. Verklegt próf má taka allt að tveimur vikum fyrir lágmarksaldur og þarf að vera staðist innan 12 mánaða frá bóklega prófinu. Mæta þarf með gild persónuskilríki með mynd.",
      "Verklega prófið í B-flokki skiptist í munnlegt próf um ökutækið og akstur. Ísland.is segir að refsistig megi ekki vera fleiri en 20. Ökukennari pantar verklega prófið. Falli nemandi líður að jafnaði vika áður en próf er tekið aftur.",
      "Sé verklegt próf tekið á sjálfskiptu ökutæki er það að jafnaði merkt á skírteinið. Undantekningar eru í reglugerðinni, meðal annars fyrir suma flokka ef umsækjandi hefur þegar tekið aksturspróf á beinskiptu ökutæki.",
    ],
  },
  {
    heading: "Eftir próf",
    paragraphs: [
      "Fyrsta ökuskírteinið í B-flokki er bráðabirgðaskírteini og gildir í þrjú ár. Fullnaðarskírteini má veita eftir samfellt ár, akstursmat með staðfestingu ökukennara og ef umsækjandi hefur ekki fengið punkt á síðustu 12 mánuðum né verið án ökuréttinda vegna banns eða sviptingar. Ísland.is nefnir einnig að Ökuskóla 3 þurfi að vera lokið. Fullnaðarskírteinið gildir almennt í 15 ár.",
      "Fyrir aukin réttindi gefur sýslumaður út nýtt skírteini þegar prófum og skilyrðum er fullnægt. Afgreiðslutími er allt að sjö virkir dagar frá því að skírteini er pantað. Stafrænt skírteini uppfærist í Ísland.is appinu. Hægt er að sækja skírteinið eða fá það sent í pósti.",
      "C- og D-flokkur gilda í fimm ár. Við endurnýjun atvinnuakstursréttinda í þeim flokkum þarf endurmenntun. Nánar er fjallað um það á síðum flokkanna.",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Leiðsögn"
        title="Námsferlið"
        description="Almenn lýsing á ökunámi á Íslandi. Röðin og kröfurnar fara eftir réttindaflokki. Ekki þurfa allir að taka öll skrefin."
        image="/images/hero-iceland-road.jpg"
        imageAlt="Vegur meðfram sjó og fjöllum á Íslandi."
        crumbs={[
          { href: "/", label: "Heim" },
          { label: "Námsferlið" },
        ]}
      />
      <div className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[16rem_1fr]">
          <ol id="ferlid" className="relative space-y-6 lg:sticky lg:top-28 lg:self-start">
            {processSteps.map((step) => {
              const Icon = icons[step.icon];
              return (
                <li key={step.number} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
                    {step.number}
                  </span>
                  <span>
                    <span className="flex items-center gap-2 font-semibold text-navy">
                      <Icon aria-hidden="true" className="h-4 w-4 text-brand" />
                      {step.title}
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-navy">{section.heading}</h2>
                <div className="mt-4 space-y-4 leading-7 text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-semibold text-navy">Undirbúningur</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-muted">
                <li>Gefðu þér tíma. Ökunám til B-réttinda getur hafist við 16 ára aldur.</li>
                <li>Veldu ökukennara og ökuskóla áður en námsheimild er sótt.</li>
                <li>Fylgstu með ökunámsbók á Mínum síðum. Þar sést hvað hefur verið staðfest.</li>
                <li>Taktu próf ekki fyrr en ökukennari telur þig tilbúinn.</li>
                <li>Mættu með gild persónuskilríki með mynd.</li>
                <li>
                  Leiðbeinendur í æfingaakstri geta lesið ráðleggingar Samgöngustofu á síðunni um
                  æfingaakstur. Þær eru ábendingar, ekki lagaskylda.
                </li>
              </ul>
            </section>

            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
              <h2 className="text-lg font-semibold">Til yfirferðar</h2>
              <p className="mt-3 text-sm leading-6">
                Reglugerð nr. 830/2011 tilgreinir 17 verklegar kennslustundir í B-flokki. Síðan „Að
                læra á bíl“ nefnir 15 ökutíma. Síðan um ökunám og Frumherji nefna 12 eða 14
                ökutíma sem skilyrði fyrir bóklegu prófi, eftir því hvort Ökuskóla 3 er lokið.
                DRIVEON ætti að staðfesta gildandi námskrá áður en ein tala er notuð sem lágmark.
              </p>
            </aside>

            <section>
              <h2 className="text-2xl font-semibold text-navy">Opinberar heimildir</h2>
              <p className="mt-3 leading-7 text-muted">
                Síðurnar voru skoðaðar í október 2026. Reglur geta breyst. Staðfestu alltaf hjá
                sýslumanni, Samgöngustofu eða ökukennara.
              </p>
              <div className="mt-4">
                <SourceList
                  sources={[
                    sources.island,
                    sources.learnToDrive,
                    sources.drivingCourse,
                    sources.practice,
                    sources.firstLicence,
                    sources.advanced,
                    sources.categories,
                    sources.transportAuthority,
                    sources.regulation,
                    sources.exams,
                  ]}
                />
              </div>
              <p className="mt-6 text-sm text-muted">
                Skoðaðu einnig{" "}
                <Link href="/okuskirteini" className="font-semibold text-brand-dark hover:underline">
                  ökuréttindaflokkana
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
      <CtaBand title="Viltu hefja nám hjá DRIVEON?" />
    </>
  );
}
