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
          "Hver kennslustund er 45 mínútur. Á Ísland.is er bóklegt nám í B-flokki sagt vera samtals um 25 kennslustundir í Ökuskóla 1, 2 og 3. Sama síða segir að gera megi ráð fyrir 17 til 25 ökutímum og að lágmarksfjöldi ökutíma sé 15. Áður en bóklegt próf er tekið þurfa 12 ökutímar að liggja fyrir ef Ökuskóla 3 er lokið, en 14 ella.",
          "Í 10. gr. reglugerðar nr. 830/2011 er eldri tafla sem tilgreinir 25 bóklegar stundir og 17 verklegar. Hún og textinn á Ísland.is eru ekki samhljóða um verklega lágmarkið. DRIVEON notar leiðsögn Ísland.is og staðfestir í ökunámsbók hvenær námi er lokið. Ekki er lofað að 15 tímar dugi hverjum og einum.",
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
          "Bóklegt próf má ekki fara fram fyrr en tveimur mánuðum áður en aldursmörkum er náð. Á Ísland.is er prófið í B-flokki lýst sem 50 fullyrðingum sem svara á rétt eða rangt. Standast þarf með 45 réttum. Próftíminn er 45 mínútur og niðurstaðan kemur strax. Falli nemandi þarf að líða vika áður en próf er tekið aftur.",
          "Verklegt próf má fara fram allt að tveimur vikum áður en aldursmörkum er náð og þarf að vera staðist innan 12 mánaða frá því bóklega prófinu var náð. Ökukennari pantar verklega prófið. Það skiptist í munnlegt próf um ökutækið og próf í aksturshæfni. Ísland.is segir að heildarfjöldi refsistiga megi ekki vera meiri en 20. Sama regla er á annarri síðu Ísland.is orðuð þannig að próf sé ekki staðist ef heildarstigatala fer undir 80.",
          "Fyrsta ökuskírteinið er bráðabirgðaskírteini og gildir í þrjú ár. Fullnaðarskírteini má veita hafi umsækjandi haft bráðabirgðaskírteini samfellt í eitt ár, lokið akstursmati með staðfestingu ökukennara og ekki fengið punkt á síðustu 12 mánuðum né verið án ökuréttinda vegna akstursbanns eða sviptingar. Ísland.is nefnir einnig að Ökuskóla 3 þurfi að vera lokið. Fullnaðarskírteini í B-flokki gildir almennt í 15 ár, en skemmri tíma eftir að tilteknum aldri er náð.",
          "Verðskrá Frumherja frá 1. janúar 2026 tilgreinir skriflegt próf á 7.583 krónur og verklegt próf á fólksbifreið á 19.619 krónur. Fyrsta ökuskírteinið kostar 4.300 krónur hjá sýslumanni samkvæmt Ísland.is. Þetta eru opinber gjöld, ekki verð DRIVEON. Vinsamlegast hafðu samband við DRIVEON til að fá upplýsingar um verð.",
        ],
      },
    ],
    distinction:
      "B-flokkur er ekki það sama og BE. Með B má aðeins tengja léttan eftirvagn, eða þyngri eftirvagn ef öll vagnlestin er innan 3.500 kg. BE heimilar eftirvagn allt að 3.500 kg að leyfðri heildarþyngd aftan við bifreið í B-flokki.",
    reviewNotes: [
      "Ísland.is og 10. gr. reglugerðar nr. 830/2011 birta ekki sömu tölu um verklegt lágmark í B-flokki. Leiðsögnin hér fylgir Ísland.is, 15 ökutímar að lágmarki og 12 eða 14 áður en bóklegt próf er tekið. Reglugerðartaflan tilgreinir 17 verklegar stundir.",
    ],
    sources: [
      sources.categories,
      sources.firstLicence,
      sources.learnToDrive,
      sources.drivingCourse,
      sources.practice,
      sources.regulation,
      sources.curriculum,
      sources.exams,
      sources.examFees,
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
          "BE veitir rétt til að stjórna bifreið í B-flokki með eftirvagni eða tengitæki sem er ekki meira en 3.500 kg að leyfðri heildarþyngd. Miðað er við leyfða heildarþyngd eftirvagnsins, ekki eigin þyngd. Tölurnar standa í skráningarskírteinum.",
          "Samanlögð leyfð heildarþyngd bifreiðar og eftirvagns getur því náð 7.000 kg, en aðeins ef hvort ökutæki er innan sinna marka. Dráttargeta bifreiðarinnar getur verið lægri og ræður þá. Hún er skráð í skráningarskírteini bifreiðarinnar.",
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
          "Á Ísland.is segir að sækja megi um og hefja nám fyrir aukin ökuréttindi sex mánuðum áður en lágmarksaldri er náð. Réttindin taka ekki gildi fyrr en aldursmarkinu er náð. Í 5. gr. reglugerðar nr. 830/2011 er enn sagt að námsheimild fyrir BE megi gefa út allt að þremur mánuðum fyrr. Umsóknin er lögð inn á Ísland.is og sýslumaður afgreiðir hana.",
        ],
      },
      {
        heading: "Umsókn og nám",
        paragraphs: [
          "Sótt er um aukin ökuréttindi hjá sýslumanni, eitt umsóknarblað fyrir hvern flokk. Umsækjandi velur ökukennara. Ísland.is segir að umsókn skuli fylgja ljósmynd ef mynd er ekki til í kerfi, og heilbrigðisvottorð sem er ekki eldra en þriggja mánaða.",
          "Í námskrá aukinna ökuréttinda, staðfestri 22. apríl 2024, er BE skráð með fjórar verklegar kennslustundir og engar bóklegar stundir í greininni Eftirvagnar. Sama lína skráir fjórar bóklegar stundir fyrir C1E og D1E, sem DRIVEON kennir ekki. Hver stund er 45 mínútur. Margir þurfa fleiri en lágmarkið áður en próf er tekið.",
          "ÖR-próf, bóklegt öryggispróf fyrir aukin ökuréttindi, nær samkvæmt námskránni ekki til eftirvagnaflokka. BE-prófið er því verklegt. Það skiptist í munnlegan hluta og akstur. Ökukennari pantar verklega prófið. Verð á kennslu hjá DRIVEON er ekki birt hér.",
        ],
      },
      {
        heading: "Ökupróf og skírteini",
        paragraphs: [
          "Verklegt próf má fara fram allt að tveimur vikum áður en aldursmörkum flokksins er náð. Aðeins er hægt að taka eitt verklegt meirapróf í einu. Þegar prófum og skilyrðum er fullnægt gefur sýslumaður út nýtt ökuskírteini. Samkvæmt töflu reglugerðarinnar er gildistími BE-flokks 15 ár.",
          "Ísland.is nefnir að ökuskírteini vegna aukinna réttinda kosti 8.600 krónur hjá sýslumanni. Verðskrá Frumherja frá 1. janúar 2026 tilgreinir verklegt BE-próf á 21.373 krónur. Þetta eru opinber gjöld, ekki verð á kennslu hjá DRIVEON, og geta breyst.",
          "Sé verklegt próf tekið á sjálfskiptu ökutæki getur það verið merkt með tákntölu. Undantekning getur átt við í BE-flokki ef umsækjandi hefur þegar ökuréttindi á grundvelli prófs á beinskiptu ökutæki. Staðfestu þetta hjá ökukennara áður en prófbifreið er valin.",
        ],
      },
    ],
    distinction:
      "BE er kerruréttindi á fólksbifreið. C er vörubifreið án þungs eftirvagns. CE er vörubifreið með eftirvagni sem er þyngri en 750 kg. Ekki er hægt að skipta á þessum flokkum.",
    reviewNotes: [
      "Ísland.is segir að nám fyrir aukin ökuréttindi megi hefja sex mánuðum fyrir lágmarksaldur. 5. gr. reglugerðar nr. 830/2011 segir þrjá mánuði fyrir BE. Umsóknin er lögð inn á Ísland.is og sýslumaður afgreiðir hana.",
    ],
    sources: [
      sources.categories,
      sources.advanced,
      sources.regulation,
      sources.curriculum,
      sources.exams,
      sources.examFees,
    ],
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
          "C1 er annar flokkur, fyrir bifreið frá 3.500 kg upp í 7.500 kg, og lágmarksaldur þar er 18 ár. Í námskránni er bóklegt nám í C1 62 kennslustundir og verklegt lágmark 6 ökutímar, eða 8 ef atvinnuréttindi eru sótt. DRIVEON kennir C-flokk, ekki C1.",
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
          "Nám til C-réttinda með vöruflutningum í atvinnuskyni fylgir námskrá aukinna ökuréttinda, staðfestri 22. apríl 2024. Þetta er ekki sama leið og ökunám í B-flokki. Bóklegt nám fer fram í ökuskóla með starfsleyfi. Verklegir ökutímar eru hjá ökukennara, hjá DRIVEON.",
          "Bóklegt grunnnám er 52 kennslustundir: umferðarfræði 12, umferðarsálfræði 12, bíltækni 12 og skyndihjálp 16. Þar á eftir kemur sérnámið Stór ökutæki, 32 kennslustundir. Bóklegt nám alls er því 84 kennslustundir. Verklegt lágmark er 12 ökutímar. Hver stund er 45 mínútur og margir þurfa fleiri ökutíma en lágmarkið.",
          "Eldri tafla í 10. gr. reglugerðar nr. 830/2011 nefnir 32 bóklegar stundir fyrir C. Sú tala er sérnámið, ekki allt bóklega námið. DRIVEON miðar við námskrána frá 2024.",
          "Fyrra nám styttir leiðina. Grunnnámið er ekki endurtekið ef það liggur þegar fyrir. Hafi nemandi ökuréttindi í D má meta fjórar verklegar stundir inn í C, og þá standa að lágmarki átta ökutímar eftir. Hafi hann lokið að minnsta kosti 12 tímum í skyndihjálp á síðustu tveimur árum má meta það inn í grunnnámið, en hann þarf samt að sækja síðasta hluta námskeiðsins um umferðarslys.",
          "Verðskrá Frumherja frá 1. janúar 2026 tilgreinir verklegt próf á vörubifreið á 25.448 krónur. Ökuskírteini vegna aukinna réttinda kostar 8.600 krónur hjá sýslumanni. Þetta eru opinber gjöld. Vinsamlegast hafðu samband við DRIVEON til að fá upplýsingar um verð.",
        ],
      },
      {
        heading: "Ökupróf, gildistími og endurmenntun",
        paragraphs: [
          "Ökupróf er bóklegt og verklegt. Ökuskóli leggur fyrir lokapróf úr grunnnámi. Opinbera prófið, sem Frumherji framkvæmir fyrir Samgöngustofu, prófar í ÖR og í Stórum ökutækjum. ÖR gildir í 12 mánuði. Sé liðið meira en ár þegar bætt er við réttindum þarf að taka ÖR aftur. Verklegt próf fer ekki fram fyrr en bóklegt próf er staðið og þarf að vera staðist innan 12 mánaða. Bóklegt próf má taka mest tveimur mánuðum fyrir lágmarksaldur og verklegt próf allt að tveimur vikum fyrir hann. Aðeins er tekið eitt verklegt meirapróf í einu.",
          "Gildistími ökuskírteinis í C-flokki er fimm ár, einnig þegar réttindin ná til vöruflutninga í atvinnuskyni. Skemmri tími getur átt við eftir 70 ára aldur.",
          "Sá sem endurnýjar ökuskírteini í C-flokki til vöruflutninga í atvinnuskyni skal hafa sótt endurmenntun. Hafi endurmenntun ekki verið sótt má endurnýja skírteinið án réttinda til aksturs í atvinnuskyni. Endurmenntun er 35 kennslustundir á síðustu fimm árum fyrir endurnýjun. Hvort hún á við í þínu starfi ættirðu að staðfesta hjá Samgöngustofu.",
        ],
      },
    ],
    distinction:
      "C er vörubifreiðin sjálf, með eftirvagni sem er 750 kg eða minni. CE bætir við réttindum til að tengja þyngri eftirvagn við bifreið í C-flokki. Án C-skírteinis er ekki hægt að fá CE.",
    reviewNotes: [
      "Námskráin frá 2024 tilgreinir 84 bóklegar stundir og 12 verklegar fyrir C með vöruflutningum í atvinnuskyni. Engin aðskilin lína er þar fyrir C án atvinnuaksturs. Umfangið er staðfest við skráningu ef nemandi er ekki að sækja atvinnuréttindi.",
    ],
    sources: [
      sources.categories,
      sources.advanced,
      sources.regulation,
      sources.curriculum,
      sources.transportAuthority,
      sources.exams,
      sources.examFees,
    ],
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
          "CE er viðbót við C, ekki sjálfstæð leið frá B-réttindum. Námskráin frá 22. apríl 2024 skráir fjórar bóklegar kennslustundir í greininni Eftirvagnar og sjö verklegar. Talan 88 bóklegar stundir í sömu töflu er C-námið, 84 stundir, að viðbættum þessum fjórum. Grunnnámið er ekki endurtekið ef það liggur þegar fyrir úr C. Hver stund er 45 mínútur.",
          "Hafi nemandi C1E eða D1E má meta fjórar verklegar stundir inn í CE. Þá standa að lágmarki þrír ökutímar eftir. Eldri tafla reglugerðarinnar nefndi þriggja stunda fækkun. DRIVEON miðar við námskrána frá 2024. C1E kemur ekki í stað C-skírteinis.",
          "Verklegt próf fer ekki fram fyrr en bóklegt próf flokksins er staðið. Bóklegt próf má taka mest tveimur mánuðum fyrir lágmarksaldur og verklegt próf allt að tveimur vikum fyrir hann. Aðeins er tekið eitt verklegt meirapróf í einu. Verðskrá Frumherja frá 1. janúar 2026 tilgreinir verklegt próf á vörubifreið með eftirvagni á 25.448 krónur. Vinsamlegast hafðu samband við DRIVEON til að fá upplýsingar um verð.",
          "Samkvæmt töflu reglugerðarinnar er gildistími CE-flokks fimm ár. Endurmenntun við endurnýjun atvinnuakstursréttinda í C-flokki getur skipt máli fyrir þá sem aka í atvinnuskyni. Staðfestu umfangið hjá Samgöngustofu.",
        ],
      },
    ],
    distinction:
      "C leyfir vörubifreiðina og eftirvagn allt að 750 kg. CE leyfir þyngri eftirvagn aftan við þá bifreið. BE leyfir eftirvagn aftan við fólksbifreið, ekki aftan við vörubifreið.",
    reviewNotes: [
      "Gildistími CE er lesinn úr töflu reglugerðar nr. 830/2011, þar sem CE er skráður til fimm ára. 22. gr. telur C- og D-flokk sérstaklega upp í fimm ára reglunni en nefnir CE ekki í þeirri málsgrein. Rekstraraðili ætti að staðfesta gildistímann við næstu yfirferð.",
    ],
    sources: [
      sources.categories,
      sources.advanced,
      sources.regulation,
      sources.curriculum,
      sources.exams,
      sources.examFees,
    ],
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
          "D1 er minni hópbifreið, ekki lengri en 8 metrar og fyrir 16 farþega eða færri auk ökumanns. Lágmarksaldur þar er 21 ár. Í námskránni er bóklegt nám í D1 78 kennslustundir og verklegt lágmark 6 ökutímar, eða 8 ef atvinnuréttindi eru sótt. DRIVEON kennir D, ekki D1.",
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
          "Námskráin frá 22. apríl 2024 fyrir D-flokk með farþegaflutningum í atvinnuskyni tilgreinir 100 bóklegar kennslustundir og 12 verklegar. Af bóklega hlutanum eru 52 stundir grunnnám, það sama og í C, og 48 stundir sérnám: Stór ökutæki 32 og ferðafræði 16. Hver stund er 45 mínútur. Bóklegt nám fer fram í ökuskóla. Verklegir ökutímar eru hjá DRIVEON.",
          "Eldri tafla í 10. gr. reglugerðarinnar nefndi 48 bóklegar stundir. Það er sérnámið, ekki allt námið. C-réttindi eru ekki skilyrði fyrir D. Hafi nemandi þegar C má meta fjórar verklegar stundir inn í D, og þá standa að lágmarki átta ökutímar eftir, auk ferðafræði ef henni er ólokið.",
          "Verðskrá Frumherja frá 1. janúar 2026 tilgreinir verklegt próf á hópbifreið með atvinnuréttindum á 32.747 krónur. Ökuskírteini vegna aukinna réttinda kostar 8.600 krónur hjá sýslumanni. Vinsamlegast hafðu samband við DRIVEON til að fá upplýsingar um verð.",
        ],
      },
      {
        heading: "Ökupróf og gildistími",
        paragraphs: [
          "Ökupróf er bóklegt og verklegt. Fyrir D er prófað í ÖR, í Stórum ökutækjum og í ferðafræði. ÖR gildir í 12 mánuði. Verklegt próf fer ekki fram fyrr en bóklegt próf er staðið. Verklegt próf til farþegaflutninga í atvinnuskyni skal fara fram á íslensku. Bóklegt próf má taka mest tveimur mánuðum fyrir lágmarksaldur og verklegt próf allt að tveimur vikum fyrir hann.",
          "Gildistími D-flokks er fimm ár, einnig þegar réttindin ná til farþegaflutninga í atvinnuskyni. Við endurnýjun slíkra atvinnuréttinda þarf endurmenntun, 35 kennslustundir á síðustu fimm árum. Sé endurmenntun ekki sótt má endurnýja skírteinið án réttinda til aksturs í atvinnuskyni.",
        ],
      },
    ],
    distinction:
      "D er hópbifreið fyrir fleiri en átta farþega, með eftirvagni allt að 750 kg. C er vörubifreið. DE, sem bætir þyngri eftirvagni við hópbifreið, er ekki kenndur hér sem sérstakur flokkur.",
    reviewNotes: [
      "Námskráin frá 2024 tilgreinir 100 bóklegar stundir og 12 verklegar fyrir D með farþegaflutningum í atvinnuskyni. Reglugerðin aðgreindi áður D-flokk og farþegaflutninga í atvinnuskyni. Engin styttri tala er birt hér fyrir D án atvinnuréttinda, því hún er ekki sérstök lína í námskránni.",
    ],
    sources: [
      sources.categories,
      sources.advanced,
      sources.regulation,
      sources.curriculum,
      sources.transportAuthority,
      sources.exams,
      sources.examFees,
    ],
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
