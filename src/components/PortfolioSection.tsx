import type { PortfolioSection, PortfolioMedia, PortfolioContentBlock } from "@/lib/portfolio";
import { assetPath } from "@/lib/assetPath";

export default function PortfolioSectionBlock({ section }: { section: PortfolioSection }) {
  return (
    <section className="portfolio-section">
      {section.heading && <h2 className="portfolio-section--heading">{section.heading}</h2>}
      {section.blocks.map((block, i) => (
        <PortfolioBlock key={i} block={block} />
      ))}
    </section>
  );
}

function PortfolioBlock({ block }: { block: PortfolioContentBlock }) {
  if (block.kind === "text" && block.text) {
    return (
      <div
        className="portfolio-section--body"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(block.text) }}
      />
    );
  }

  if (block.kind === "media" && block.media) {
    const m = block.media;
    return (
      <figure className="portfolio-section--figure">
        {m.type === "video" ? (
          <video
            src={assetPath(m.src)}
            controls
            playsInline
            preload="metadata"
            className="portfolio-section--video"
          />
        ) : (
          <img
            src={assetPath(m.src)}
            alt={m.caption ?? ""}
            loading="lazy"
            className="portfolio-section--image"
          />
        )}
        {m.caption && (
          <figcaption className="portfolio-section--caption">{m.caption}</figcaption>
        )}
      </figure>
    );
  }

  return null;
}

/** Minimal markdown-to-HTML for body text (bold, lists, paragraphs) */
function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  let html = "";
  let inList = false;
  let inOrderedList = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${inlineFormat(trimmed.slice(2))}</li>`;
    } else if (/^\d+\.\s/.test(trimmed)) {
      if (!inOrderedList) {
        html += "<ol>";
        inOrderedList = true;
      }
      html += `<li>${inlineFormat(trimmed.replace(/^\d+\.\s/, ""))}</li>`;
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      if (inOrderedList) {
        html += "</ol>";
        inOrderedList = false;
      }
      if (trimmed === "") {
        continue;
      }
      html += `<p>${inlineFormat(trimmed)}</p>`;
    }
  }

  if (inList) html += "</ul>";
  if (inOrderedList) html += "</ol>";

  return html;
}

function inlineFormat(text: string): string {
  // Bold: **text**
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
