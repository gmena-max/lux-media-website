import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/data/portfolio";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContent from "@/components/CaseStudyContent";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) return {};

  return {
    title: project.caseStudy.metaTitle,
    description: project.caseStudy.metaDescription,
    alternates: {
      canonical: `https://luxmediacr.com/portafolio/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) notFound();

  // JSON-LD for case study
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.caseStudy.metaTitle,
    description: project.caseStudy.metaDescription,
    author: {
      "@type": "MarketingAgency",
      name: "Lux Media",
      url: "https://luxmediacr.com",
    },
    publisher: {
      "@type": "MarketingAgency",
      name: "Lux Media",
      url: "https://luxmediacr.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[var(--background)] pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Portafolio", href: "/portafolio" },
              { label: project.title },
            ]}
          />
          <CaseStudyContent project={project} />
        </div>
      </main>
    </>
  );
}
