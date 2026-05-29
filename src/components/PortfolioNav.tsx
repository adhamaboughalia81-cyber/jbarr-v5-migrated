"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  slug: string;
  title: string;
}

export default function PortfolioNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="portfolio-nav">
      <div className="portfolio-nav--header">
        <span className="portfolio-nav--title">Portfolio</span>
      </div>
      <ul className="portfolio-nav--list">
        {items.map((item) => {
          const href = `/portfolio/${item.slug}`;
          const isActive = pathname === href;
          return (
            <li key={item.slug}>
              <Link
                href={href}
                className={`portfolio-nav--link${isActive ? " portfolio-nav--link-active" : ""}`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
