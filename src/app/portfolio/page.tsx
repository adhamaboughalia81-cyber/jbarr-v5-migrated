import { redirect } from "next/navigation";
import { getPortfolioCaseStudies } from "@/lib/portfolio";

export default function PortfolioIndex() {
  const studies = getPortfolioCaseStudies();
  if (studies.length > 0) {
    redirect(`/portfolio/${studies[0].slug}`);
  }
  return <p>No case studies available.</p>;
}
