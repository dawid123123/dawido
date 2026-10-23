export type SourceLink = {
  label: string;
  href: string;
};

export const sources = {
  island: {
    label: "Ísland.is",
    href: "https://island.is/",
  },
  categories: {
    label: "Flokkar ökuréttinda á Ísland.is",
    href: "https://island.is/flokkar-okurettinda",
  },
  firstLicence: {
    label: "Umsókn um námsheimild og fyrsta ökuskírteini",
    href: "https://island.is/fyrsta-okuskirteini-namsheimild",
  },
  learnToDrive: {
    label: "Að læra á bíl",
    href: "https://island.is/lifsvidburdir/ad-laera-a-bil",
  },
  drivingCourse: {
    label: "Ökunám, leiðin að bílprófinu",
    href: "https://island.is/okunam",
  },
  practice: {
    label: "Æfingaakstur",
    href: "https://island.is/aefingaakstur",
  },
  advanced: {
    label: "Aukin ökuréttindi og meirapróf",
    href: "https://island.is/meiraprof-og-aukin-okurettindi",
  },
  transportAuthority: {
    label: "Ökunám, akstur og réttindi hjá Samgöngustofu",
    href: "https://island.is/s/samgongustofa/akstur-okunam-og-rettindi",
  },
  regulation: {
    label: "Reglugerð nr. 830/2011 um ökuskírteini",
    href: "https://island.is/reglugerdir/nr/0830-2011",
  },
  curriculum: {
    label: "Námskrár fyrir ökunám og endurmenntun",
    href: "https://island.is/namskrar-fyrir-okunam",
  },
  exams: {
    label: "Ökupróf hjá Frumherja",
    href: "https://frumherji.is/okuprofasvid/",
  },
  examFees: {
    label: "Verðskrá ökuprófa hjá Frumherja, 1. janúar 2026",
    href: "https://frumherji.is/wp-content/uploads/2026/01/FRH-3620-01.2026.pdf",
  },
} as const satisfies Record<string, SourceLink>;
