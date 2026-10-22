import { sources, type SourceLink } from "@/lib/sources";

export type CategorySlug = "b" | "be" | "c" | "ce" | "d";

export type CategoryBlock = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Category = {
  slug: CategorySlug;
  code: string;
  title: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
  intro: string;
  suitableFor: string[];
  blocks: CategoryBlock[];
  distinction: string;
  reviewNotes: string[];
  sources: SourceLink[];
  related: CategorySlug[];
  seoTitle: string;
  seoDescription: string;
};

export const categories: Category[] = [
  {
    slug: "b",
    code: "B",
    title: "B-flokkur",
    cardDescription: "Ökunám fyrir fólksbíla.",
    image: "/images/car-polo.jpg",
    imageAlt: "Blár fólksbíll, Volkswagen Polo, lagt við götu.",
    intro:
      "B-flokkur er almenn ökuréttindi fyrir fólksbifreið. Ökuskírteinið má veita 17 ára og ökunám getur hafist við 16 ára aldur.",
    suitableFor: [
      "Þá sem vilja öðlast almenn réttindi til að aka fólksbifreið.",
      "Þá sem þurfa B-réttindi áður en sótt er um BE, C eða D. Þessir flokkar krefjast fullnaðarskírteinis í B-flokki.",
    ],
    blocks: [
      {
        heading: "Hvað flokkurinn leyfir",
        paragraphs: [
          "Samkvæmt Ísland.is og reglugerð nr. 830/2011 veitir B-flokkur rétt til að stjórna bifreið sem er 3.500 kg eða minna að leyfðri heildarþyngd og gerð fyrir 8 farþega eða færri auk ökumanns.",
          "Við slíka bifreið má tengja eftirvagn eða tengitæki sem er 750 kg eða minna. Þyngri eftirvagn er aðeins heimill ef vagnlestin öll er 3.500 kg eða minna. Þyngri eftirvagn krefst BE-réttinda.",
        ],
        bullets: [
          "B-flokkur veitir einnig rétt til tiltekinna annarra ökutækja, svo sem létts bifhjóls í AM-flokki, bifhjóls á fjórum eða fleiri hjólum og dráttarvélar í T-flokki. Heildarlistinn er á Ísland.is.",
          "Sérregla gildir um tiltekin ökutæki með óhefðbundnu eldsneyti, allt að 4.250 kg, þegar B-skírteini hefur verið í gildi í að minnsta kosti tvö ár. Skilyrðin eru þröng og birt í heild á Ísland.is.",
        ],
      },
      {
        heading: "Aldur og önnur skilyrði",
        paragraphs: [
          "Ökuskírteini í B-flokki má veita þeim sem er orðinn 17 ára. Námsheimild má gefa út allt að tólf mánuðum fyrr, svo ökunám getur hafist við 16 ára aldur.",
        ],
        bullets: [
          "Fullnægjandi sjón og heyrn.",
          "Líkamleg og andleg hæfni til að stjórna bíl.",
          "Föst búseta á Íslandi.",
          "Læknisvottorð ef heilsufarsspurningu í umsókn er svarað játandi.",
        ],
      },
      {
        heading: "Umsókn og nám",
        paragraphs: [
          "Nemandi velur ökukennara og ökuskóla og sækir sjálfur um námsheimild á Ísland.is með rafrænum skilríkjum. Þegar heimild er samþykkt stofnast stafræn ökunámsbók á Mínum síðum.",
          "Við upphaf náms skal ökukennari eða ökuskóli ganga úr skugga um að námsheimild hafi verið veitt. Námsheimild gildir í tvö ár. Sé ökuskírteini ekki gefið út innan þess tíma þarf að hefja nám að nýju með nýrri heimild.",
          "Bóklegt nám fer að jafnaði fram í ökuskóla og skiptist, samkvæmt Ísland.is, í Ökuskóla 1, 2 og 3. Verklegir ökutímar eru teknir hjá ökukennara. Leitast skal við að flétta bóklegt og verklegt nám saman. Hluti verklegs náms í B-flokki skal fara fram í ökugerði áður en ökuprófi lýkur.",
        ],
      },
      {
        heading: "Fjöldi kennslustunda",
        paragraphs: [
          "Hver kennslustund er 45 mínútur. Í 10. gr. reglugerðar nr. 830/2011 er lágmark fyrir B-flokk 25 bóklegar kennslustundir og 17 verklegar. Fækkun getur átt við vegna fyrra náms í öðrum flokki.",
          "Opinberar vefsíður nefna einnig aðrar tölur. Síðan „Að læra á bíl“ segir að taka þurfi að lágmarki 15 ökutíma. Síðan um ökunám og Frumherji nefna 12 ökutíma áður en bóklegt próf er tekið ef Ökuskóla 3 er lokið, en 14 tíma ella. Þessar tölur eru ekki settar fram hér sem eitt óbreytanlegt lágmark. Ökukennari og ökuskóli staðfesta hvenær námi er lokið samkvæmt gildandi námskrá.",
        ],
      },
      {
        heading: "Æfingaakstur",
        paragraphs: [
          "Æfingaakstur með leiðbeinanda á aðeins við í B-flokki og er ekki skylda. Hann kemur ekki í stað kennsluaksturs. Leiðbeinandi þarf leyfi sýslumanns og ökukennari staðfestir í ökunámsbók hvenær nemandi má hefja aksturinn. Ísland.is segir að ljúka þurfi Ökuskóla 1 og að jafnaði 10 verklegum ökutímum áður en sótt er um leyfið.",
          "Leiðbeinandi þarf að vera orðinn 24 ára, hafa haft gilt B-skírteini í að minnsta kosti fimm ár og má ekki hafa verið án skírteinis vegna sviptingar eða refsað fyrir vítaverða aksturshætti á síðustu tólf mánuðum. Leyfið má gefa út til allt að 18 mánaða. Óheimilt er að taka endurgjald fyrir leiðsögnina.",
        ],
      },
      {
        heading: "Ökupróf og útgáfa",
        paragraphs: [
          "Bóklegt próf má ekki fara fram fyrr en tveimur mánuðum áður en aldursmörkum er náð. Á Ísland.is er prófið í B-flokki lýst sem 50 fullyrðingum sem svara á rétt eða rangt. Standast þarf með 45 réttum. Niðurstaðan kemur strax. Falli nemandi þarf að líða vika áður en próf er tekið aftur, nema sérstaklega standi á.",
          "Verklegt próf má fara fram allt að tveimur vikum áður en aldursmörkum er náð og þarf að vera staðist innan 12 mánaða frá því bóklega prófinu var náð. Ökukennari pantar verklega prófið. Það skiptist í munnlegt próf um ökutækið og próf í aksturshæfni. Ísland.is segir að heildarfjöldi refsistiga megi ekki vera meiri en 20.",
          "Fyrsta ökuskírteinið er bráðabirgðaskírteini og gildir í þrjú ár. Fullnaðarskírteini má veita hafi umsækjandi haft bráðabirgðaskírteini samfellt í eitt ár, lokið akstursmati með staðfestingu ökukennara og ekki fengið punkt á síðustu 12 mánuðum né verið án ökuréttinda vegna akstursbanns eða sviptingar. Ísland.is nefnir einnig að Ökuskóla 3 þurfi að vera lokið. Fullnaðarskírteini í B-flokki gildir almennt í 15 ár, en skemmri tíma eftir að tilteknum aldri er náð.",
        ],
      },
    ],
    distinction:
      "B-flokkur er ekki það sama og BE. Með B má aðeins tengja léttan eftirvagn, eða þyngri eftirvagn ef öll vagnlestin er innan 3.500 kg. BE heimilar eftirvagn allt að 3.500 kg að leyfðri heildarþyngd aftan við bifreið í B-flokki.",
    reviewNotes: [
      "Opinberar síður birta ekki sömu tölu um lágmarksfjölda ökutíma í B-flokki. Reglugerðin tilgreinir 17 verklegar kennslustundir, Ísland.is nefnir 15 ökutíma á einni síðu og 12 eða 14 tíma sem skilyrði fyrir bóklegu prófi á annarri. DRIVEON ætti að staðfesta gildandi námskrá áður en ákveðin tala er notuð í samtali við nemanda.",
    ],
    sources: [
      sources.categories,
      sources.firstLicence,
      sources.learnToDrive,
      sources.drivingCourse,
      sources.practice,
      sources.regulation,
      sources.exams,
    ],
    related: ["be"],
    seoTitle: "Ökuskírteini B-flokkur",
    seoDescription:
      "Ökunám fyrir B-flokk í Reykjavík. Almenn ökuréttindi fyrir fólksbifreið, aldursmörk, námsheimild, ökutímar og ökupróf samkvæmt opinberum heimildum.",
  },
  {
    slug: "be",
    code: "BE",
    title: "BE-flokkur",
    cardDescription: "Ökunám fyrir bíl með eftirvagni.",
    image: "/images/caravan.jpg",
    imageAlt: "Hjólhýsi, dæmi um eftirvagn sem tengdur er aftan í bifreið.",
    intro:
      "BE-flokkur, oft nefndur kerruréttindi, heimilar akstur bifreiðar í B-flokki með eftirvagni sem er þyngri en B-flokkur einn og sér leyfir. Ökuskírteinið má veita 18 ára.",
    suitableFor: [
      "Þá sem hafa fullnaðarskírteini í B-flokki og þurfa að draga eftirvagn, hjólhýsi eða annað tengitæki sem er yfir mörkum B-flokks.",
      "Þá sem þurfa réttindi á eftirvagn en ekki vörubifreið. Vörubifreið með eftirvagni er CE-flokkur, ekki BE.",
    ],
    blocks: [
      {
        heading: "Hvað flokkurinn leyfir",
        paragraphs: [
          "BE veitir rétt til að stjórna bifreið í B-flokki með eftirvagni eða tengitæki sem er ekki meira en 3.500 kg að leyfðri heildarþyngd. Þetta er þyngd eftirvagnsins, ekki hámark á allri vagnlestinni eins og í B-flokki.",
        ],
        bullets: [
          "B-flokkur dugir ef eftirvagnurinn er 750 kg eða minni, eða ef þyngri eftirvagn heldur vagnlestinni samtals innan 3.500 kg.",
          "BE dugir ekki fyrir vörubifreið yfir 3.500 kg. Það er C-flokkur, og eftirvagn þyngri en 750 kg aftan í slíka bifreið er CE-flokkur.",
        ],
      },
      {
        heading: "Aldur og forsaga",
        paragraphs: [
          "Ökuskírteini í BE-flokki má veita þeim sem er orðinn 18 ára. Umsækjandi skal hafa fullnaðarskírteini í B-flokki. Bráðabirgðaskírteini í B-flokki er því ekki nóg.",
          "Í 5. gr. reglugerðarinnar má gefa út námsheimild fyrir BE-flokk allt að þremur mánuðum áður en aldursmörkum er náð. Á síðu Ísland.is um meirapróf er sagt að sækja megi um og hefja nám fyrir aukin ökuréttindi sex mánuðum áður. Þetta misræmi er merkt til yfirferðar hér fyrir neðan.",
        ],
      },
      {
        heading: "Umsókn og nám",
        paragraphs: [
          "Sótt er um aukin ökuréttindi hjá sýslumanni, eitt umsóknarblað fyrir hvern flokk. Umsækjandi velur ökukennara og ökuskóla. Ísland.is segir að umsókn skuli fylgja ljósmynd ef mynd er ekki til í kerfi, og heilbrigðisvottorð sem er ekki eldra en þriggja mánaða.",
          "Í töflu 10. gr. reglugerðarinnar er lágmark verklegs náms í BE-flokki fjórar kennslustundir, 45 mínútur hver. Enginn lágmarksfjöldi bóklegra stunda er skráður í töflunni fyrir BE. Ökupróf er almennt bæði bóklegt og verklegt, nema sérregla eigi við. Nákvæm prófkröfur fara eftir námskrá og handbók Samgöngustofu.",
        ],
      },
      {
        heading: "Ökupróf og skírteini",
        paragraphs: [
          "Bóklegt próf má ekki fara fram fyrr en tveimur mánuðum áður en aldursmörkum flokksins er náð. Verklegt próf má fara fram allt að tveimur vikum áður. Verklegt próf þarf að vera staðist innan 12 mánaða frá bóklega prófinu.",
          "Aðeins er hægt að taka eitt verklegt meirapróf í einu. Þegar prófum og skilyrðum er fullnægt gefur sýslumaður út nýtt ökuskírteini. Samkvæmt töflu reglugerðarinnar er gildistími BE-flokks 15 ár. Ísland.is nefnir að ökuskírteini vegna aukinna réttinda kosti 8.600 krónur hjá sýslumanni. Það er opinbert gjald, ekki verð á kennslu, og getur breyst.",
          "Sé verklegt próf tekið á sjálfskiptu ökutæki getur það verið merkt með tákntölu. Undantekning getur átt við í BE-flokki ef umsækjandi hefur þegar ökuréttindi á grundvelli prófs á beinskiptu ökutæki. Staðfestu þetta hjá ökukennara áður en prófbifreið er valin.",
        ],
      },
    ],
    distinction:
      "BE er kerruréttindi á fólksbifreið. C er vörubifreið án þungs eftirvagns. CE er vörubifreið með eftirvagni sem er þyngri en 750 kg. Ekki er hægt að skipta á þessum flokkum.",
    reviewNotes: [
      "Reglugerðin heimilar námsheimild fyrir BE þremur mánuðum fyrir 18 ára aldur. Síða Ísland.is um meirapróf segir sex mánuði fyrir aukin ökuréttindi almennt. DRIVEON ætti að staðfesta hjá sýslumanni hvor talan gildir fyrir BE áður en hún er notuð.",
      "Tafla reglugerðarinnar tilgreinir ekki bóklegar kennslustundir fyrir BE. Ekki er fullyrt hér hvort sérstakt bóklegt próf sé lagt fyrir í BE-flokki. Það þarf að staðfesta í handbók Samgöngustofu.",
    ],
    sources: [sources.categories, sources.advanced, sources.regulation, sources.exams],
    related: ["b"],
    seoTitle: "BE ökunám og kerruréttindi",
    seoDescription:
      "Ökunám fyrir BE-flokk í Reykjavík. Kerruréttindi fyrir bifreið með eftirvagni allt að 3.500 kg, aldursmörk og munurinn á B og BE.",
  },
  {
    slug: "c",
    code: "C",
    title: "C-flokkur",
    cardDescription: "Ökunám fyrir vörubíla.",
    image: "/images/truck-highway.jpg",
    imageAlt: "Vörubifreið á vegi með fjöll í bakgrunni.",
    intro:
      "C-flokkur er meirapróf fyrir vörubifreið sem er þyngri en 3.500 kg. Eftirvagn má ekki vera þyngri en 750 kg. Ökuskírteinið má veita 21 árs.",
    suitableFor: [
      "Þá sem hafa fullnaðarskírteini í B-flokki og þurfa að aka vörubifreið yfir 3.500 kg.",
      "Þá sem hyggjast síðar bæta við CE-réttindum. CE krefst ökuskírteinis í C-flokki.",
    ],
    blocks: [
      {
        heading: "Hvað flokkurinn leyfir",
        paragraphs: [
          "C-flokkur veitir rétt til að stjórna bifreið sem er gerð fyrir 8 farþega eða færri auk ökumanns og er meira en 3.500 kg að leyfðri heildarþyngd. Við hana má tengja eftirvagn eða tengitæki sem er 750 kg eða minna.",
          "Í reglugerðinni er C-flokkur sagður ná yfir þetta, þar með talið til vöruflutninga í atvinnuskyni. Eftirvagn þyngri en 750 kg krefst CE-réttinda.",
        ],
        bullets: [
          "C1 er annar flokkur, fyrir bifreið frá 3.500 kg upp í 7.500 kg, og lágmarksaldur þar er 18 ár. DRIVEON kennir C-flokk, ekki C1.",
          "Hópbifreið fyrir fleiri en 8 farþega er D-flokkur, ekki C.",
        ],
      },
      {
        heading: "Aldur og forsaga",
        paragraphs: [
          "Ökuskírteini í C-flokki má veita þeim sem er orðinn 21 árs og hefur fullnaðarskírteini í B-flokki. Námsheimild fyrir C-flokk má, samkvæmt 5. gr. reglugerðarinnar, gefa út sex mánuðum áður en aldursmörkum er náð, enda hafi umsækjandi fullnaðarskírteini í B-flokki. Réttindin taka ekki gildi fyrr en lágmarksaldri er náð.",
          "Ísland.is segir að umsókn um aukin réttindi skuli fylgja heilbrigðisvottorð sem er ekki eldra en þriggja mánaða, og ljósmynd ef mynd er ekki þegar til í kerfi.",
        ],
      },
      {
        heading: "Nám",
        paragraphs: [
          "Nám fer fram hjá ökukennara með löggildingu fyrir flokkinn og að jafnaði í ökuskóla, eftir námskrá sem Samgöngustofa setur og ráðherra staðfestir.",
          "Í töflu 10. gr. er C-flokkur til vöruflutninga í atvinnuskyni skráður með 32 bóklegar kennslustundir og 12 verklegar. Hver stund er 45 mínútur. Fækkun getur átt við vegna fyrra náms, meðal annars í D-flokki eða C1. DRIVEON fullyrðir ekki ákveðinn tímafjölda í hverju tilviki. Kennarinn metur það út frá námskrá og fyrra námi.",
        ],
      },
      {
        heading: "Ökupróf, gildistími og endurmenntun",
        paragraphs: [
          "Ökupróf er bóklegt og verklegt. Aldursreglurnar eru þær sömu og almennt: bóklegt próf mest tveimur mánuðum fyrir lágmarksaldur og verklegt próf allt að tveimur vikum fyrir hann. Aðeins er tekið eitt verklegt meirapróf í einu.",
          "Gildistími ökuskírteinis í C-flokki er fimm ár, einnig þegar réttindin ná til vöruflutninga í atvinnuskyni. Skemmri tími getur átt við eftir 70 ára aldur.",
          "Sá sem endurnýjar ökuskírteini í C-flokki til vöruflutninga í atvinnuskyni skal hafa sótt endurmenntun. Hafi endurmenntun ekki verið sótt má endurnýja skírteinið án réttinda til aksturs í atvinnuskyni. Endurmenntun er 35 kennslustundir á síðustu fimm árum fyrir endurnýjun. Hvort hún á við í þínu starfi ættirðu að staðfesta hjá Samgöngustofu.",
        ],
      },
    ],
    distinction:
      "C er vörubifreiðin sjálf, með eftirvagni sem er 750 kg eða minni. CE bætir við réttindum til að tengja þyngri eftirvagn við bifreið í C-flokki. Án C-skírteinis er ekki hægt að fá CE.",
    reviewNotes: [
      "Kennslustundataflan tengir C-flokk við vöruflutninga í atvinnuskyni. Reglugerðartextinn segir jafnframt að C-flokkurinn nái yfir slíka flutninga. Ekki er birt hér aðskilið lágmark fyrir C án atvinnuaksturs, því það er ekki sérstök lína í töflunni.",
    ],
    sources: [sources.categories, sources.advanced, sources.regulation, sources.transportAuthority],
    related: ["ce"],
    seoTitle: "C réttindi og meirapróf",
    seoDescription:
      "Ökunám fyrir C-flokk í Reykjavík. Meirapróf á vörubifreið yfir 3.500 kg, aldursmörk, eftirvagnsmörk og munurinn á C og CE.",
  },
  {
    slug: "ce",
    code: "CE",
    title: "CE-flokkur",
    cardDescription: "Ökunám fyrir vörubíl með eftirvagni.",
    image: "/images/truck-front.jpg",
    imageAlt: "Dráttarbíll með eftirvagni á þjóðvegi.",
    intro:
      "CE-flokkur heimilar akstur vörubifreiðar í C-flokki með eftirvagni sem er þyngri en 750 kg. Ökuskírteinið má veita 21 árs og krefst ökuskírteinis í C-flokki.",
    suitableFor: [
      "Þá sem hafa þegar C-réttindi og þurfa að draga eftirvagn, tengivagn eða festivagn þyngri en 750 kg.",
      "Þá sem aka vörubifreið með eftirvagni í atvinnu. C-flokkur einn og sér dugir ekki fyrir þann eftirvagn.",
    ],
    blocks: [
      {
        heading: "Hvað flokkurinn leyfir",
        paragraphs: [
          "CE veitir rétt til að stjórna bifreið í C-flokki með eftirvagni eða tengitæki sem er meira en 750 kg að leyfðri heildarþyngd.",
          "Flokkurinn veitir jafnframt rétt til að tengja eftirvagn í BE- og C1E-flokki við bifreið í B- og C1-flokki. Hann veitir einnig rétt til eftirvagns í D1E- og DE-flokki, en aðeins ef viðkomandi hefur þegar réttindi fyrir D1- eða D-flokk.",
        ],
        bullets: [
          "CE kemur ekki í stað C. Fyrst þarf ökuskírteini í C-flokki.",
          "CE er ekki kerruréttindi á fólksbifreið. Það er BE-flokkur.",
          "CE veitir ekki ein og sér rétt til að aka hópbifreið. Það er D-flokkur.",
        ],
      },
      {
        heading: "Aldur og forsaga",
        paragraphs: [
          "Ökuskírteini í CE-flokki má veita þeim sem er orðinn 21 árs og hefur ökuskírteini í C-flokki. Til að fá námsheimild fyrir CE þarf umsækjandi einnig fullnaðarskírteini í B-flokki.",
          "Umsókn um aukin réttindi er lögð inn hjá sýslumanni, eitt blað fyrir hvern flokk. Ísland.is nefnir heilbrigðisvottorð sem er ekki eldra en þriggja mánaða.",
        ],
      },
      {
        heading: "Nám og próf",
        paragraphs: [
          "Í töflu 10. gr. eru lágmörk fyrir CE fjórar bóklegar kennslustundir og sjö verklegar. Þrjár verklegar stundir má fella niður vegna fyrra náms í C1E. Hver stund er 45 mínútur. Þetta er lágmark reglugerðarinnar, ekki verðskrá eða föst dagskrá hjá DRIVEON.",
          "Ökupróf er almennt bóklegt og verklegt og miðast við námskrá flokksins. Bóklegt próf má taka mest tveimur mánuðum fyrir lágmarksaldur og verklegt próf allt að tveimur vikum fyrir hann. Aðeins er tekið eitt verklegt meirapróf í einu. Þegar sýslumaður hefur afgreitt eitt próf gefur hann út leyfi fyrir næsta.",
          "Samkvæmt töflu reglugerðarinnar er gildistími CE-flokks fimm ár. Endurmenntun við endurnýjun atvinnuakstursréttinda í C-flokki getur skipt máli fyrir þá sem aka í atvinnuskyni. Staðfestu umfangið hjá Samgöngustofu.",
        ],
      },
    ],
    distinction:
      "C leyfir vörubifreiðina og eftirvagn allt að 750 kg. CE leyfir þyngri eftirvagn aftan við þá bifreið. BE leyfir eftirvagn aftan við fólksbifreið, ekki aftan við vörubifreið.",
    reviewNotes: [
      "Gildistími CE er lesinn úr töflu reglugerðar nr. 830/2011, þar sem CE er skráður til fimm ára. 22. gr. telur C- og D-flokk sérstaklega upp í fimm ára reglunni en nefnir CE ekki í þeirri málsgrein. Rekstraraðili ætti að staðfesta gildistímann við næstu yfirferð.",
    ],
    sources: [sources.categories, sources.advanced, sources.regulation],
    related: ["c"],
    seoTitle: "CE réttindi fyrir vörubifreið með eftirvagni",
    seoDescription:
      "Ökunám fyrir CE-flokk í Reykjavík. Réttindi á vörubifreið með eftirvagni þyngri en 750 kg, forsaga í C-flokki og munurinn á C og CE.",
  },
  {
    slug: "d",
    code: "D",
    title: "D-flokkur",
    cardDescription: "Ökunám fyrir hópbifreiðar.",
    image: "/images/bus-coach.jpg",
    imageAlt: "Nútímaleg hópbifreið á plani.",
    intro:
      "D-flokkur heimilar akstur hópbifreiðar sem er gerð fyrir fleiri en átta farþega auk ökumanns. Ökuskírteinið má veita 23 ára. Farþegaflutningar í atvinnuskyni krefjast viðbótarnáms.",
    suitableFor: [
      "Þá sem hafa fullnaðarskírteini í B-flokki og þurfa að aka hópbifreið fyrir fleiri en átta farþega.",
      "Þá sem hyggjast aka rútu. Minni hópbifreið, D1, er annar flokkur og ekki kenndur hjá DRIVEON.",
    ],
    blocks: [
      {
        heading: "Hvað flokkurinn leyfir",
        paragraphs: [
          "D-flokkur veitir rétt til að stjórna bifreið sem er gerð fyrir fleiri en 8 farþega auk ökumanns. Við hana má tengja eftirvagn eða tengitæki sem er 750 kg eða minna. Þyngri eftirvagn er DE-flokkur, sem DRIVEON kennir ekki sem sérstakan flokk.",
          "Farþegaflutningar í atvinnuskyni eru sérstök réttindi. Þau krefjast ökuskírteinis í D-flokki og viðbótarnáms og prófs samkvæmt námskrá. D-flokkurinn einn og sér er því ekki það sama og leyfi til farþegaflutninga í atvinnuskyni.",
        ],
        bullets: [
          "D1 er minni hópbifreið, ekki lengri en 8 metrar og fyrir 16 farþega eða færri auk ökumanns. Lágmarksaldur þar er 21 ár. DRIVEON kennir D, ekki D1.",
          "Vörubifreið er C-flokkur. D veitir ekki rétt til að aka vörubifreið yfir mörkum B-flokks.",
        ],
      },
      {
        heading: "Aldur og forsaga",
        paragraphs: [
          "Ökuskírteini í D-flokki má veita þeim sem er orðinn 23 ára og hefur fullnaðarskírteini í B-flokki. Námsheimild má gefa út sex mánuðum áður en aldursmörkum er náð, enda liggi fullnaðarskírteini í B-flokki fyrir. Réttindin taka gildi þegar lágmarksaldri er náð.",
          "Umsókn um aukin réttindi er lögð inn hjá sýslumanni. Ísland.is nefnir heilbrigðisvottorð sem er ekki eldra en þriggja mánaða.",
        ],
      },
      {
        heading: "Nám",
        paragraphs: [
          "Nám fer fram hjá ökukennara með löggildingu fyrir flokkinn og að jafnaði í ökuskóla. Í töflu 10. gr. er D-flokkur til farþegaflutninga í atvinnuskyni skráður með 48 bóklegar kennslustundir og 12 verklegar. Fækkun getur átt við vegna fyrra náms, meðal annars í C-flokki. Hver stund er 45 mínútur.",
          "Taflan greinir ekki á milli grunnréttinda í D og viðbótarnáms til farþegaflutninga í atvinnuskyni. Sú aðgreining er hins vegar skýr í 6. gr. reglugerðarinnar. DRIVEON fullyrðir því ekki að allir 48 tímar eigi við hvern nemanda. Umfangið er staðfest út frá námskrá og því hvort atvinnuréttindi séu sótt.",
        ],
      },
      {
        heading: "Ökupróf og gildistími",
        paragraphs: [
          "Ökupróf er bóklegt og verklegt. Verklegt próf til farþegaflutninga í atvinnuskyni skal fara fram á íslensku. Bóklegt próf má taka mest tveimur mánuðum fyrir lágmarksaldur og verklegt próf allt að tveimur vikum fyrir hann.",
          "Gildistími D-flokks er fimm ár, einnig þegar réttindin ná til farþegaflutninga í atvinnuskyni. Við endurnýjun slíkra atvinnuréttinda þarf endurmenntun, 35 kennslustundir á síðustu fimm árum. Sé endurmenntun ekki sótt má endurnýja skírteinið án réttinda til aksturs í atvinnuskyni.",
        ],
      },
    ],
    distinction:
      "D er hópbifreið fyrir fleiri en átta farþega, með eftirvagni allt að 750 kg. C er vörubifreið. DE, sem bætir þyngri eftirvagni við hópbifreið, er ekki kenndur hér sem sérstakur flokkur.",
    reviewNotes: [
      "Kennslustundataflan sýnir D-flokk í dálki farþegaflutninga í atvinnuskyni. Reglugerðin aðgreinir samt D-flokk og farþegaflutninga í atvinnuskyni. Rekstraraðili ætti að staðfesta hjá Samgöngustofu hvernig námskráin skiptir þessu áður en tímafjöldi er fullyrtur við nemanda.",
    ],
    sources: [sources.categories, sources.advanced, sources.regulation, sources.transportAuthority],
    related: ["c"],
    seoTitle: "D réttindi fyrir hópbifreið",
    seoDescription:
      "Ökunám fyrir D-flokk í Reykjavík. Réttindi á hópbifreið fyrir fleiri en átta farþega, aldursmörk og munurinn á almennum réttindum og farþegaflutningum í atvinnuskyni.",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export const categoryComparison = [
  {
    code: "B",
    slug: "b" as const,
    vehicle: "Fólksbifreið, 3.500 kg eða minna, 8 farþegar eða færri",
    trailer: "Eftirvagn 750 kg eða minni, eða þyngri ef vagnlest er innan 3.500 kg",
    age: "17 ára",
    prerequisite: "Námsheimild",
  },
  {
    code: "BE",
    slug: "be" as const,
    vehicle: "Bifreið í B-flokki",
    trailer: "Eftirvagn allt að 3.500 kg",
    age: "18 ára",
    prerequisite: "Fullnaðarskírteini í B",
  },
  {
    code: "C",
    slug: "c" as const,
    vehicle: "Vörubifreið yfir 3.500 kg, 8 farþegar eða færri",
    trailer: "Eftirvagn 750 kg eða minni",
    age: "21 árs",
    prerequisite: "Fullnaðarskírteini í B",
  },
  {
    code: "CE",
    slug: "ce" as const,
    vehicle: "Vörubifreið í C-flokki",
    trailer: "Eftirvagn þyngri en 750 kg",
    age: "21 árs",
    prerequisite: "Ökuskírteini í C",
  },
  {
    code: "D",
    slug: "d" as const,
    vehicle: "Hópbifreið fyrir fleiri en 8 farþega",
    trailer: "Eftirvagn 750 kg eða minni",
    age: "23 ára",
    prerequisite: "Fullnaðarskírteini í B",
  },
];
