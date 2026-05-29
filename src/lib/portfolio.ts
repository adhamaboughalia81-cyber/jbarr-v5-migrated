import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PortfolioMedia {
  src: string;
  type: "image" | "video";
  caption?: string;
}

export interface PortfolioContentBlock {
  kind: "text" | "media";
  text?: string;
  media?: PortfolioMedia;
}

export interface PortfolioSection {
  heading: string;
  blocks: PortfolioContentBlock[];
}

export interface PortfolioCaseStudy {
  slug: string;
  title: string;
  employer: string;
  order: number;
  sections: PortfolioSection[];
}

const PORTFOLIO_DIR = path.join(process.cwd(), "content", "portfolio");

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

function getMediaType(src: string): "image" | "video" {
  const ext = path.extname(src).toLowerCase();
  return VIDEO_EXTENSIONS.includes(ext) ? "video" : "image";
}

function parseSections(content: string): PortfolioSection[] {
  // Split on "---" separator lines (horizontal rules between sections)
  const rawSections = content.split(/\n---\n/).map((s) => s.trim()).filter(Boolean);
  const sections: PortfolioSection[] = [];

  for (const raw of rawSections) {
    const lines = raw.split("\n");
    let heading = "";
    let blocks: PortfolioContentBlock[] = [];
    let currentTextLines: string[] = [];
    let hasContent = false;

    function flushText() {
      const text = currentTextLines.join("\n").trim();
      if (text) {
        blocks.push({ kind: "text", text });
        hasContent = true;
      }
      currentTextLines = [];
    }

    function flushSection() {
      flushText();
      if (heading || hasContent || blocks.length > 0) {
        sections.push({ heading, blocks });
      }
      heading = "";
      blocks = [];
      hasContent = false;
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Section heading — starts a new section if there's already content
      if (line.startsWith("## ")) {
        if (hasContent || blocks.length > 0) {
          flushSection();
        } else {
          flushText();
        }
        heading = line.replace(/^## /, "");
        continue;
      }

      // Markdown image: ![alt](src)
      const imgMatch = line.match(/^!\[.*?\]\((.+?)\)$/);
      if (imgMatch) {
        flushText();
        let caption: string | undefined;
        const nextLine = lines[i + 1]?.trim();
        if (nextLine && /^\*(.+)\*$/.test(nextLine)) {
          caption = nextLine.replace(/^\*(.+)\*$/, "$1");
          i++;
        }
        blocks.push({ kind: "media", media: { src: imgMatch[1], type: getMediaType(imgMatch[1]), caption } });
        hasContent = true;
        continue;
      }

      // HTML video: <video src="..."></video>
      const videoMatch = line.match(/<video\s+src="(.+?)".*?>/);
      if (videoMatch) {
        flushText();
        let caption: string | undefined;
        const nextLine = lines[i + 1]?.trim();
        if (nextLine && /^\*(.+)\*$/.test(nextLine)) {
          caption = nextLine.replace(/^\*(.+)\*$/, "$1");
          i++;
        }
        blocks.push({ kind: "media", media: { src: videoMatch[1], type: "video", caption } });
        hasContent = true;
        continue;
      }

      currentTextLines.push(line);
      if (line.trim() !== "") hasContent = true;
    }

    flushSection();
  }

  return sections;
}

export function getPortfolioCaseStudies(): PortfolioCaseStudy[] {
  const files = fs.readdirSync(PORTFOLIO_DIR).filter((f) => f.endsWith(".md"));

  const studies = files.map((filename) => {
    const filePath = path.join(PORTFOLIO_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug: data.slug ?? filename.replace(/\.md$/, ""),
      title: data.title ?? "",
      employer: data.employer ?? "",
      order: data.order ?? 0,
      sections: parseSections(content),
    };
  });

  return studies.sort((a, b) => a.order - b.order);
}

export function getPortfolioCaseStudy(slug: string): PortfolioCaseStudy | undefined {
  const studies = getPortfolioCaseStudies();
  return studies.find((s) => s.slug === slug);
}
