import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryView } from "@/components/category/CategoryView";
import { categories, getCategory } from "@/lib/categories";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const data = getCategory(category);
  if (!data) return { title: "Flokkur fannst ekki" };
  return pageMetadata({
    title: data.seoTitle,
    description: data.seoDescription,
    path: `/okuskirteini/${data.slug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = getCategory(category);
  if (!data) notFound();
  return <CategoryView category={data} />;
}
