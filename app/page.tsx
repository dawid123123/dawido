import type { Metadata } from "next";
import { Benefits } from "@/components/home/Benefits";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqPreview } from "@/components/home/FaqPreview";
import { Hero } from "@/components/home/Hero";
import { LearningProcess } from "@/components/home/LearningProcess";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "DRIVEON Ökukennsla | Ökukennsla í Reykjavík" },
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <LearningProcess />
      <Benefits />
      <FaqPreview />
      <ContactSection id="samband" />
    </>
  );
}
