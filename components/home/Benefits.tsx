import { CalendarClock, CarFront, ShieldCheck, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const benefits = [
  {
    icon: CalendarClock,
    title: "Sveigjanlegir tímar",
    text: "Ökutímar eru fundnir í samráði við þig. Hafðu samband og við skoðum hvað hentar dagskránni.",
  },
  {
    icon: UserRound,
    title: "Persónuleg nálgun",
    text: "Kennslan tekur mið af þér, hvort sem þú ert að hefja ökunám eða bæta við réttindum.",
  },
  {
    icon: ShieldCheck,
    title: "Öryggi í fyrirrúmi",
    text: "Áherslan er á öruggan akstur, umferðina og meðferð ökutækisins sem þú ert að læra á.",
  },
  {
    icon: CarFront,
    title: "Kennsla fyrir mismunandi ökuréttindi",
    text: "B, BE, C, CE og D. Fólksbifreiðar, eftirvagnar, vörubifreiðar og hópbifreiðar.",
  },
];

export function Benefits() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="DRIVEON"
          title="Af hverju DRIVEON?"
          text="Kennslan fer fram í Reykjavík og nágrenni. Tímarnir, nálgunin og flokkarnir eru það sem þú getur gengið að."
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-brand">
                <benefit.icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{benefit.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
