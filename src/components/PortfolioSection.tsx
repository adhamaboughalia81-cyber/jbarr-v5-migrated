import type { PortfolioSection, PortfolioMedia } from "@/lib/portfolio";
import { assetPath } from "@/lib/assetPath";

export default function PortfolioSectionBlock({ section }: { section: PortfolioSection }) {
  return (
    <section className="portfolio-section">
      {section.heading && <h2 className="portfolio-section--heading">{section.heading}</h2>}
      {section.body && (
        <div
          className="portfolio-section--body"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(section.body) }}
        />
      )}
      {section.media.length > 0 && (
        <div className="portfolio-section--media">
          {section.media.map((m, i) => (
            <figure key={i} className="portfolio-section--figure">
              {m.type === "video" ? (
                <video
                  src={assetPath(m.src)}
                  controls
                  playsInline
                  className="portfolio-section--video"
                />
              ) : (
                <img
                  src={assetPath(m.src)}
                  alt={m.caption ?? ""}
                  className="portfolio-section--image"
                />
              )}
              {m.caption && (
                <figcaption className="portfolio-section--caption">{m.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </section>
  );
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
