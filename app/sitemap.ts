import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { getSiteUrl } from "@/lib/site";

const updated = new Date("2026-10-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const paths = [
    "",
    "/okuskirteini",
    "/namsferlid",
    "/um-okkur",
    "/algengar-spurningar",
    "/hafa-samband",
    "/personuvernd",
    ...categories.map((category) => `/okuskirteini/${category.slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: updated,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
