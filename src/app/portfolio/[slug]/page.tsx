import { notFound } from "next/navigation";
import { getPortfolioCaseStudies, getPortfolioCaseStudy } from "@/lib/portfolio";
import PortfolioSectionBlock from "@/components/PortfolioSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const studies = getPortfolioCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getPortfolioCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="portfolio-case-study">
      <header className="portfolio-case-study--header">
        <h1 className="portfolio-case-study--title">{study.title}</h1>
        <p className="portfolio-case-study--employer">{study.employer}</p>
      </header>
      {study.sections.map((section, i) => (
        <PortfolioSectionBlock key={i} section={section} />
      ))}
    </article>
  );
}
