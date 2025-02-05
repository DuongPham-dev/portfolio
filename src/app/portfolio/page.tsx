import React from "react";

// Sections
import { AboutMeSection, HeroSection } from "@/sections";

const Portfolio = () => (
  <section className="flex flex-col gap-20">
    <HeroSection />
    <AboutMeSection />
  </section>
);

export default Portfolio;
