import type { Metadata } from "next";

export const site = {
  name: "DRIVEON Ökukennsla",
  legalName: "DRIVEON ÖKUKENNSLA",
  slogan: "Örugg kennsla. Reynsla. Árangur.",
  headline: "Við hjálpum þér alla leið að ökuréttindum.",
  phoneDisplay: "774 7775",
  phoneTel: "+3547747775",
  email: "runarb75@gmail.com",
  area: "Reykjavík og nágrenni",
  description:
    "Ökukennsla í Reykjavík og nágrenni fyrir B-, BE-, C-, CE- og D-flokk. Örugg kennsla, sveigjanlegir tímar og aðstoð alla leið að ökuréttindum.",
} as const;

export const bookingHref = "/hafa-samband#bokun";

export const navItems = [
  { href: "/", label: "Heim" },
  { href: "/okuskirteini", label: "Ökuskírteini" },
  { href: "/namsferlid", label: "Námsferlið" },
  { href: "/um-okkur", label: "Um okkur" },
  { href: "/algengar-spurningar", label: "Algengar spurningar" },
  { href: "/hafa-samband", label: "Hafa samband" },
] as const;

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: Metadata["title"];
  description: string;
  path: string;
}): Metadata {
  const socialTitle =
    typeof title === "string"
      ? title
      : title && typeof title === "object" && "absolute" in title
        ? title.absolute
        : site.name;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      locale: "is_IS",
      type: "website",
      siteName: site.name,
    },
  };
}
