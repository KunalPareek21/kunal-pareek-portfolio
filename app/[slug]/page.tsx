import { notFound, redirect } from "next/navigation";
import { openSourceSlugs } from "@/lib/data/portfolio";

type SlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return openSourceSlugs.map((slug) => ({ slug }));
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const knownSlugs = openSourceSlugs as readonly string[];

  if (!knownSlugs.includes(slug)) {
    notFound();
  }

  redirect(`/?highlight=${slug}#open-source`);
}
