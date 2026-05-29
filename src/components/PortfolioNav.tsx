"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  slug: string;
  title: string;
}

export default function PortfolioNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="portfolio-nav">
      <button
        className="portfolio-nav--toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>Portfolio</span>
        <span className={`portfolio-nav--chevron${isOpen ? " portfolio-nav--chevron-open" : ""}`}>
          &#x25B4;
        </span>
      </button>
      <div className={`portfolio-nav--collapsible${isOpen ? " portfolio-nav--collapsible-open" : ""}`}>
        <div className="portfolio-nav--header">
          <span className="portfolio-nav--title">Portfolio</span>
        </div>
        <ul className="portfolio-nav--list">
          {items.map((item) => {
            const href = `/portfolio/${item.slug}`;
            const isActive = pathname === href || pathname === `${href}/`;
            return (
              <li key={item.slug}>
                <Link
                  href={href}
                  className={`portfolio-nav--link${isActive ? " portfolio-nav--link-active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr className="portfolio-nav--divider" />
        <ul className="portfolio-nav--list portfolio-nav--external">
          <li>
            <a href="https://jbarr.co" target="_blank" rel="noopener noreferrer" className="portfolio-nav--link portfolio-nav--link-external">
              <svg className="portfolio-nav--icon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Z"/></svg>
              <span>Home</span>
              <span className="portfolio-nav--arrow">↗</span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/justinbarryoung" target="_blank" rel="noopener noreferrer" className="portfolio-nav--link portfolio-nav--link-external">
              <svg className="portfolio-nav--icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span>LinkedIn</span>
              <span className="portfolio-nav--arrow">↗</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/justinbyo" target="_blank" rel="noopener noreferrer" className="portfolio-nav--link portfolio-nav--link-external">
              <svg className="portfolio-nav--icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <span>GitHub</span>
              <span className="portfolio-nav--arrow">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
