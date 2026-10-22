import Link from "next/link";
import { BookOpen, ClipboardCheck, GraduationCap, IdCard, Route, UserRound } from "lucide-react";
import { processSteps } from "@/lib/process";
import { SectionHeading } from "@/components/shared/SectionHeading";

const icons = {
  user: UserRound,
  file: ClipboardCheck,
  book: BookOpen,
  route: Route,
  exam: GraduationCap,
  card: IdCard,
};

export function LearningProcess() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Námsferlið"
            title="Svona fer ökunámið fram"
            text="Ferlið er almenn leiðsögn. Nemendur fara ekki allir sömu leið. Æfingaakstur á til dæmis aðeins við í B-flokki og er ekki skylda."
          />
          <Link
            href="/namsferlid"
            className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Skoða námsferlið
          </Link>
        </div>
        <ol className="relative space-y-0">
          <span
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-[1.15rem] w-px bg-line"
          />
          {processSteps.map((step) => {
            const Icon = icons[step.icon];
            return (
              <li key={step.number} className="relative flex gap-4 pb-8 last:pb-0">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
                  {step.number}
                </span>
                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="h-4 w-4 text-brand" />
                    <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
