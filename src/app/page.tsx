import React from "react";

// Sections
import {
  AboutMeSection,
  ContactSection,
  HeroSection,
  SkillsSection,
} from "@/sections";

const Portfolio = () => (
  <section className="flex flex-col gap-20">
    <HeroSection />
    <AboutMeSection />
    <SkillsSection />
    <ContactSection />
  </section>
);

export default Portfolio;
