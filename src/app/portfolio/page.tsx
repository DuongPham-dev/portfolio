import React from "react";

// Sections
import { AboutMeSection, HeroSection, SkillsSection } from "@/sections";

const Portfolio = () => (
  <section className="flex flex-col gap-20">
    <HeroSection />
    <AboutMeSection />
    <SkillsSection />
  </section>
);

export default Portfolio;
