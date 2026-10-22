import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header, HeaderFallback } from "@/components/layout/Header";
import { getSiteUrl, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DRIVEON Ökukennsla | Ökukennsla í Reykjavík",
    template: "%s | DRIVEON Ökukennsla",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "is_IS",
    siteName: site.name,
    title: "DRIVEON Ökukennsla",
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "DRIVEON Ökukennsla",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: site.name,
    description: site.description,
    url: siteUrl,
    telephone: site.phoneTel,
    email: site.email,
    image: `${siteUrl}/images/iceland-suv.jpg`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.area,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Reykjavík",
      addressCountry: "IS",
    },
  };

  return (
    <html lang="is" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#efni"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
        >
          Fara í efni
        </a>
        <Suspense fallback={<HeaderFallback />}>
          <Header />
        </Suspense>
        <main id="efni" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
