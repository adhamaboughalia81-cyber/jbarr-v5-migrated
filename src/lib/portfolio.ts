import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PortfolioMedia {
  src: string;
  type: "image" | "video";
  caption?: string;
}

export interface PortfolioSection {
  heading: string;
  body: string;
  media: PortfolioMedia[];
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

  return rawSections.map((raw) => {
    const lines = raw.split("\n");
    let heading = "";
    const bodyLines: string[] = [];
    const media: PortfolioMedia[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Section heading
      if (line.startsWith("## ")) {
        heading = line.replace(/^## /, "");
        continue;
      }

      // Markdown image: ![alt](src)
      const imgMatch = line.match(/^!\[.*?\]\((.+?)\)$/);
      if (imgMatch) {
        // Check if next line is an italic caption: *caption*
        let caption: string | undefined;
        const nextLine = lines[i + 1]?.trim();
        if (nextLine && /^\*(.+)\*$/.test(nextLine)) {
          caption = nextLine.replace(/^\*(.+)\*$/, "$1");
          i++; // skip the caption line
        }
        media.push({ src: imgMatch[1], type: getMediaType(imgMatch[1]), caption });
        continue;
      }

      // HTML video: <video src="..."></video>
      const videoMatch = line.match(/<video\s+src="(.+?)".*?>/);
      if (videoMatch) {
        let caption: string | undefined;
        const nextLine = lines[i + 1]?.trim();
        if (nextLine && /^\*(.+)\*$/.test(nextLine)) {
          caption = nextLine.replace(/^\*(.+)\*$/, "$1");
          i++;
        }
        media.push({ src: videoMatch[1], type: "video", caption });
        continue;
      }

      bodyLines.push(line);
    }

    return {
      heading,
      body: bodyLines.join("\n").trim(),
      media,
    };
  });
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
