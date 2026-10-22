import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { site } from "@/lib/site";

export function ContactSection({
  id = "bokun",
  title = "Hafa samband",
  text = "Sendu fyrirspurn um ökutíma eða ökuréttindi. Formið er ekki staðfest bókun. Ökukennarinn svarar og þið finnið tíma saman.",
}: {
  id?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section id={id} className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border border-line bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
        <div className="bg-navy px-6 py-8 text-white md:px-8 md:py-10">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-4 text-white/75">{text}</p>
          <ul className="mt-8 space-y-5">
            <li>
              <a href={`tel:${site.phoneTel}`} className="group flex items-start gap-3">
                <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 text-brand" />
                <span>
                  <span className="block text-sm text-white/60">Sími</span>
                  <span className="text-lg font-semibold group-hover:underline">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="group flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 text-brand" />
                <span>
                  <span className="block text-sm text-white/60">Netfang</span>
                  <span className="font-semibold break-all group-hover:underline">{site.email}</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 text-brand" />
              <span>
                <span className="block text-sm text-white/60">Þjónustusvæði</span>
                <span className="font-semibold">{site.area}</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="px-6 py-8 md:px-8 md:py-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
