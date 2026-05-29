import type { Metadata } from "next";
import { getPortfolioCaseStudies } from "@/lib/portfolio";
import PortfolioNav from "@/components/PortfolioNav";
import Header from "@/components/Header";
import "../globals.css";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "Portfolio | Justin Barr Young",
  robots: { index: false, follow: false },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const studies = getPortfolioCaseStudies();
  const navItems = studies.map((s) => ({ slug: s.slug, title: s.title }));

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href={assetPath("/images/favicon.ico")} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Lato:wght@400;700;900&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header variant="portfolio" />
        <div className="portfolio-layout">
          <aside className="portfolio-sidebar">
            <PortfolioNav items={navItems} />
          </aside>
          <main className="portfolio-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
