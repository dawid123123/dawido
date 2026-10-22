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
      "Þú byrjar á að hafa samband við ökukennara og segja hvaða ökuréttindi þú ert að sækjast eftir. Áður en kennsla hefst þarf námsheimild frá sýslumanni að liggja fyrir.",
      "Fyrir fyrsta ökuskírteinið í B-flokki er sótt um námsheimild á Ísland.is. Ökunám til bílprófs getur hafist við 16 ára aldur. Fyrir BE, C, CE og D gilda önnur aldursmörk og forsögn um fyrri réttindi. DRIVEON hjálpar þér að átta þig á næsta skrefi, en umsóknin sjálf er lögð inn hjá sýslumanni.",
    ],
    links: [sources.learnToDrive, sources.firstLicence, sources.advanced],
  },
  {
    id: "skilyrdi",
    question: "Hvað þarf ég til að hefja ökunám?",
    paragraphs: [
      "Fyrir fyrsta ökuskírteinið í B-flokki segir Ísland.is að umsækjandi þurfi að hafa náð 16 ára aldri, hafa fullnægjandi sjón og heyrn, vera líkamlega og andlega hæfur til að stjórna bíl og hafa fasta búsetu á Íslandi. Ef heilsufarsspurningu er svarað játandi þarf læknisvottorð.",
      "Fyrir aukin réttindi þarf að auki að uppfylla aldursmörk og forsögn viðkomandi flokks. Umsækjandi um BE-, C- og D-flokk skal hafa fullnaðarskírteini í B-flokki. Umsækjandi um CE-flokk skal hafa ökuskírteini í C-flokki. Hafðu samband ef þú ert ekki viss um hvað á við í þínu tilviki.",
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
      "Aðrir flokkar, svo sem bifhjól, C1 eða D1, eru ekki í boði hér. Skoðaðu síðurnar um hvern flokk til að sjá hvað réttindin ná til.",
    ],
  },
  {
    id: "kostnadur",
    question: "Hvað kostar ökunámið?",
    paragraphs: [
      "Verð á ökutímum og námi hjá DRIVEON er ekki birt á þessum vef. Fjöldi tíma fer eftir flokki, fyrra námi og því hvernig nemandanum gengur. Hafðu samband og fáðu upplýsingar sem eiga við þig.",
      "Gjöld sýslumanns, ökuskóla og prófa eru aðskilin frá kennslu DRIVEON. Ísland.is birtir opinber gjöld, meðal annars 4.300 krónur fyrir fyrsta ökuskírteinið og 8.600 krónur fyrir ökuskírteini vegna aukinna réttinda. Þessi gjöld geta breyst og eru ekki verð á kennslu.",
    ],
    links: [sources.firstLicence, sources.advanced],
  },
  {
    id: "undirbuningur",
    question: "Hvernig undirbý ég mig fyrir ökupróf?",
    paragraphs: [
      "Ljúktu bóklegu námi og ökutímum í samráði við ökukennara. Próf er ekki tekið fyrr en staðfesting ökukennara og ökuskóla liggur fyrir um að kennslan sé í samræmi við námskrá flokksins.",
      "Í B-flokki má taka bóklegt próf mest tveimur mánuðum áður en nemandi verður 17 ára. Verklegt próf má taka allt að tveimur vikum fyrir 17 ára aldur. Ökukennari pantar verklega prófið. Mæta þarf með gild persónuskilríki með mynd. Sömu aldursreglur miðast við lágmarksaldur hvers flokks.",
      "Nákvæmur undirbúningur fer eftir flokki. Ökukennarinn segir þér hvenær þú ert tilbúinn.",
    ],
    links: [sources.learnToDrive, sources.exams, sources.regulation],
  },
];
