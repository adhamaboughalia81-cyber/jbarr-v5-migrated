"use client";

import { useEffect } from "react";

export default function PortfolioIndex() {
  useEffect(() => {
    window.location.replace("/portfolio/pulls-inbox/");
  }, []);

  return null;
}
