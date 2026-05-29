"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PortfolioIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/portfolio/pulls-inbox");
  }, [router]);

  return null;
}
