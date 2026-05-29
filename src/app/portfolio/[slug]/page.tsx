import { notFound } from "next/navigation";
import { getPortfolioCaseStudies, getPortfolioCaseStudy } from "@/lib/portfolio";
import PortfolioSectionBlock from "@/components/PortfolioSection";
import { assetPath } from "@/lib/assetPath";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const EMPLOYER_LOGOS: Record<string, string> = {
  GitHub: "/images/logos/github.svg",
  "Signal Sciences (acquired by Fastly)": "/images/logos/signalsciences.svg",
};

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

  const logoSrc = EMPLOYER_LOGOS[study.employer];

  const studies = getPortfolioCaseStudies();
  const currentIndex = studies.findIndex((s) => s.slug === slug);
  const nextStudy = currentIndex < studies.length - 1 ? studies[currentIndex + 1] : null;

  return (
    <>
    <article className="portfolio-case-study">
      <header className="portfolio-case-study--header">
        <h1 className="portfolio-case-study--title">{study.title}</h1>
        <p className="portfolio-case-study--employer">
          {logoSrc && (
            <img
              className={`portfolio-case-study--employer-logo${study.employer === "GitHub" ? " portfolio-case-study--employer-logo-invertable" : ""}`}
              src={assetPath(logoSrc)}
              alt={`${study.employer} logo`}
              width={20}
              height={20}
            />
          )}
          {study.employer}
        </p>
      </header>
      {study.sections.map((section, i) => (
        <PortfolioSectionBlock key={i} section={section} />
      ))}
    </article>
    <section className="cta portfolio">
      <a href="mailto:justin@jbarr.co" className="cta--email">
        Email me
      </a>
      {nextStudy && (
        <a
          href={assetPath(`/portfolio/${nextStudy.slug}`)}
          className="cta--linkedin cta--next"
        >
          Next case study <span className="cta--next-arrow">&rarr;</span>
        </a>
      )}
    </section>
    </>
  );
}
