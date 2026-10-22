import { cacheLife } from "next/cache";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { categories } from "@/lib/categories";
import { navItems, site } from "@/lib/site";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await CopyrightYear();
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">
            Ökukennsla í Reykjavík og nágrenni. Kennsla fyrir B-, BE-, C-, CE- og D-flokk.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide">Valmynd</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide">Ökuréttindi</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/okuskirteini/${category.slug}`}
                  className="hover:text-white hover:underline"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide">Samband</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a className="hover:text-white hover:underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-white hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>{site.area}</li>
            <li>
              <Link href="/personuvernd" className="hover:text-white hover:underline">
                Persónuvernd
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-sm text-white/60 md:px-8">
          © {year} {site.name}. Öll réttindi áskilin.
        </p>
      </div>
    </footer>
  );
}
