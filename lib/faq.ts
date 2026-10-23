import { sources, type SourceLink } from "@/lib/sources";

export type FaqItem = {
  id: string;
  question: string;
  paragraphs: string[];
  links?: SourceLink[];
};

export const faqItems: FaqItem[] = [
  {
    id: "byrjun",
    question: "Hvernig byrja ég í ökunámi?",
    paragraphs: [
      "Þú byrjar á að hafa samband við DRIVEON og segja hvaða ökuréttindi þú ert að sækjast eftir. Umsókn um námsheimild er lögð inn hjá sýslumanni á Ísland.is. Nemandinn sækir sjálfur um.",
      "Ökunám til fyrsta ökuskírteinis í B-flokki getur hafist við 16 ára aldur og skírteinið má gefa út 17 ára. Fyrir aukin réttindi segir Ísland.is að sækja megi um og hefja nám sex mánuðum áður en lágmarksaldri flokksins er náð. Réttindin taka ekki gildi fyrr en aldursmarkinu er náð. BE, C, CE og D hafa ekki sömu aldursmörk og B.",
    ],
    links: [sources.learnToDrive, sources.firstLicence, sources.advanced],
  },
  {
    id: "skilyrdi",
    question: "Hvað þarf ég til að hefja ökunám?",
    paragraphs: [
      "Fyrir fyrsta ökuskírteinið í B-flokki segir Ísland.is að umsækjandi þurfi að hafa náð 16 ára aldri, hafa fullnægjandi sjón og heyrn, vera líkamlega og andlega hæfur til að stjórna bíl og hafa fasta búsetu á Íslandi. Ef heilsufarsspurningu er svarað játandi þarf læknisvottorð.",
      "Fyrir aukin réttindi þarf einnig að uppfylla aldursmörk og skilyrði um fyrri réttindi. Umsækjandi um BE-, C- og D-flokk skal hafa fullnaðarskírteini í B-flokki. Umsækjandi um CE-flokk skal hafa ökuskírteini í C-flokki. Hafðu samband ef þú ert ekki viss um hvað á við í þínu tilviki.",
    ],
    links: [sources.firstLicence, sources.categories, sources.regulation],
  },
  {
    id: "bokun",
    question: "Hvernig bóka ég ökutíma?",
    paragraphs: [
      "Hringdu í 774 7775, sendu tölvupóst á runarb75@gmail.com eða fylltu út fyrirspurnarformið. Engin sjálfvirk tímaáskrift er tengd við vefinn.",
      "Fyrirspurn er ekki staðfest bókun. Ökukennarinn svarar og þið finnið tíma saman.",
    ],
  },
  {
    id: "flokkar",
    question: "Hvaða ökuréttindi get ég lært hjá DRIVEON?",
    paragraphs: [
      "DRIVEON kennir í fimm flokkum: B fyrir fólksbifreiðar, BE fyrir bifreið með eftirvagni, C fyrir vörubifreiðar, CE fyrir vörubifreið með eftirvagni og D fyrir hópbifreiðar.",
      "C1 er vörubifreið frá 3.500 kg upp í 7.500 kg og lágmarksaldurinn er 18 ár. D1 er hópbifreið sem er ekki lengri en 8 metrar og fyrir 16 farþega eða færri, og lágmarksaldurinn er 21 ár. Þessir flokkar, bifhjól og DE eru ekki kenndir hér.",
    ],
  },
  {
    id: "kostnadur",
    question: "Hvað kostar ökunámið?",
    paragraphs: [
      "Vinsamlegast hafðu samband við DRIVEON til að fá upplýsingar um verð. Verð á ökutímum er ekki birt hér og er ekki tekið úr verðskrá annars ökuskóla. Fjöldi tíma fer eftir flokki, fyrra námi og því hvernig nemandanum gengur.",
      "Gjöld sýslumanns og prófa eru aðskilin frá kennslu DRIVEON. Samkvæmt Ísland.is kostar fyrsta ökuskírteinið 4.300 krónur og ökuskírteini vegna aukinna réttinda 8.600 krónur.",
      "Verðskrá ökuprófadeildar Frumherja frá 1. janúar 2026 tilgreinir skriflegt próf, fyrir A, B, M, T og Ö, á 7.583 krónur. Verklegt próf á fólksbifreið er 19.619 krónur, BE 21.373 krónur, C og CE 25.448 krónur hvort, og D með atvinnuréttindum 32.747 krónur. Gjöldin eru greidd til Frumherja, ekki til DRIVEON, og geta breyst.",
    ],
    links: [sources.firstLicence, sources.advanced, sources.examFees],
  },
  {
    id: "meiraprof",
    question: "Er meirapróf það sama og nám í B-flokki?",
    paragraphs: [
      "Nei. B-flokkur er almenn ökuréttindi á fólksbifreið. Bóklegt nám skiptist í Ökuskóla 1, 2 og 3 og verklegir ökutímar eru hjá ökukennara. Æfingaakstur með leiðbeinanda á aðeins við í B-flokki og er ekki skylda. Fyrsta skírteinið er bráðabirgðaskírteini.",
      "Meirapróf er nám til aukinna ökuréttinda, svo sem C, CE og D. Námskráin frá 22. apríl 2024 kveður á um 52 kennslustunda grunnnám í umferðarfræði, umferðarsálfræði, bíltækni og skyndihjálp, og síðan sérnám eftir flokki. Fullt bóklegt nám í C er 84 kennslustundir og í D 100. Verklegt lágmark er 12 ökutímar í báðum. Fyrra nám styttir leiðina.",
      "BE er kerruréttindi, ekki meirapróf á vörubifreið eða hópbifreið. Þar eru fjórar verklegar kennslustundir og verklegt próf. ÖR-próf nær ekki til eftirvagnaflokka.",
    ],
    links: [sources.curriculum, sources.advanced, sources.drivingCourse],
  },
  {
    id: "undirbuningur",
    question: "Hvernig undirbý ég mig fyrir ökupróf?",
    paragraphs: [
      "Ljúktu námi í samráði við ökukennara. Próf er ekki tekið fyrr en staðfesting liggur fyrir um að kennslan sé í samræmi við námskrá flokksins. Mæta þarf með gild persónuskilríki með mynd. Ökukennari pantar verklega prófið.",
      "Í B-flokki má taka bóklegt próf mest tveimur mánuðum áður en nemandi verður 17 ára, og verklegt próf allt að tveimur vikum fyrir þann aldur. Prófið er 50 fullyrðingar og standast þarf með 45 réttum. Verklegt próf þarf að vera staðist innan 12 mánaða frá bóklega prófinu.",
      "Í meiraprófi þarf að standast bóklegt próf áður en verklegt próf fer fram. ÖR-próf gildir í 12 mánuði. Í BE er ekkert ÖR-próf, aðeins verklegt próf. Bóklegt próf má taka mest tveimur mánuðum fyrir lágmarksaldur flokksins og verklegt próf allt að tveimur vikum fyrir hann. Í BE á aðeins verklegi glugginn við.",
    ],
    links: [sources.learnToDrive, sources.exams, sources.regulation],
  },
];
