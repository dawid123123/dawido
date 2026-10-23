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
      "Fyrir aukin réttindi, svo sem BE, C, CE og D, er einnig sótt um hjá sýslumanni. Skila þarf einu umsóknarblaði fyrir hvern flokk. Umsókn skal fylgja heilbrigðisvottorð sem er ekki eldra en þriggja mánaða, og ljósmynd ef mynd er ekki til í kerfi. Ísland.is segir að sækja megi um og hefja nám sex mánuðum áður en lágmarksaldri er náð. Aldur og forsaga fyrri réttinda eru ólík eftir flokki.",
      "Þegar námsheimild er samþykkt stofnast stafræn ökunámsbók. Í hana eru skráðir ökutímar, staðfestingar úr ökuskóla og niðurstöður prófa. Námsheimild gildir í tvö ár.",
    ],
  },
  {
    heading: "Bóklegt nám og ökutímar",
    paragraphs: [
      "Umsækjandi sem er að taka réttindi í fyrsta sinn í flokki sækir verklegt nám hjá ökukennara með löggildingu fyrir flokkinn og bóklegt nám í ökuskóla. Námið fylgir námskrá sem Samgöngustofa setur og ráðherra staðfestir. Hver kennslustund er 45 mínútur.",
      "Í B-flokki skiptist bóklega námið í Ökuskóla 1, 2 og 3, samtals um 25 kennslustundir, og er oft kennt í netnámi. Verklegir tímar eru teknir samhliða. Ísland.is segir að lágmarkið sé 15 ökutímar og að gera megi ráð fyrir 17 til 25. Hluti verklegs náms skal fara fram í ökugerði áður en ökuprófi lýkur. Áður en bóklegt próf er tekið þurfa 12 ökutímar að liggja fyrir ef Ökuskóla 3 er lokið, en 14 ella.",
      "BE er ekki sama leið. Námskrá aukinna ökuréttinda frá 22. apríl 2024 skráir fjórar verklegar kennslustundir og engar bóklegar stundir í eftirvögnum. ÖR-próf nær ekki til eftirvagnaflokka.",
      "C og D eru meirapróf. Grunnnám er 52 kennslustundir: umferðarfræði 12, umferðarsálfræði 12, bíltækni 12 og skyndihjálp 16. Í C bætist við Stór ökutæki, 32 stundir, svo bóklegt nám alls er 84 stundir og verklegt lágmark 12 ökutímar. Í D bætast við Stór ökutæki og ferðafræði, 48 stundir, svo bóklegt nám alls er 100 stundir og verklegt lágmark 12 ökutímar. CE bætist við C með fjórum bóklegum stundum í eftirvögnum og sjö verklegum. Fyrra nám styttir leiðina. Hafi nemandi C eða D og bætir hinum flokknum við má meta fjórar verklegar stundir, og þá standa átta ökutímar eftir. Hafi hann C1E eða D1E má meta fjórar verklegar stundir inn í CE.",
      "Eldri tafla í 10. gr. reglugerðar nr. 830/2011 nefndi 32 bóklegar stundir fyrir C og 48 fyrir D. Þær tölur eru sérnámið, ekki heildarfjöldi bóklegra stunda. DRIVEON miðar við námskrána frá 2024. Vinsamlegast hafðu samband við DRIVEON til að fá upplýsingar um verð.",
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
      "Samgöngustofa annast prófin en hefur falið Frumherja framkvæmd þeirra. Prófdómari gengur úr skugga um að námsheimild liggi fyrir, að aldursmörk séu uppfyllt og að staðfesting um námið liggi fyrir. Mæta þarf með gild persónuskilríki með mynd.",
      "Í B-flokki er prófið bæði bóklegt og verklegt. Bóklegt próf má taka mest tveimur mánuðum áður en lágmarksaldri er náð. Það er 50 fullyrðingar og standast þarf með 45 réttum. Verklegt próf má taka allt að tveimur vikum fyrir lágmarksaldur og þarf að vera staðist innan 12 mánaða frá bóklega prófinu. Ísland.is segir að refsistig megi ekki vera fleiri en 20. Sama regla er annars staðar orðuð þannig að próf sé ekki staðið ef heildarstigatala fer undir 80. Ökukennari pantar verklega prófið. Falli nemandi líður vika áður en próf er tekið aftur.",
      "Í meiraprófi skiptist bóklegt próf í lokapróf ökuskóla og opinbert próf. ÖR er öryggispróf fyrir aukin ökuréttindi, að eftirvögnum undanskildum, og gildir í 12 mánuði. Fyrir C og D er einnig prófað í Stórum ökutækjum, og fyrir D einnig í ferðafræði. Verklegt próf fer ekki fram fyrr en bóklegt próf er staðið. Í BE er ekkert ÖR-próf.",
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
                Ísland.is segir að lágmark ökutíma í B-flokki sé 15, og að 12 eða 14 tímar
                þurfi að liggja fyrir áður en bóklegt próf er tekið, eftir því hvort Ökuskóla
                3 er lokið. Tafla reglugerðar nr. 830/2011 tilgreinir 17 verklegar stundir.
                Fyrir aukin réttindi er miðað við námskrá sem var staðfest 22. apríl 2024.
                Eldri tafla reglugerðarinnar sýnir aðeins sérnámið í C og D, 32 og 48
                stundir, ekki grunnnámið að viðbættu.
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
                    sources.curriculum,
                    sources.exams,
                    sources.examFees,
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
