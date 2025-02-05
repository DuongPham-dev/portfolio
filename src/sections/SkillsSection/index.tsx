import React from "react";
import Image from "next/image";

// Components
import { SectionWrapper } from "@/components";

// Constants
import { SKILLS } from "@/constants";

const SkillsSection = () => (
  <SectionWrapper title="Skills">
    <h2 className="text-gray-500 text-lg text-center">
      The skills, tools and technologies I am really good at:
    </h2>
    <ul className="flex flex-wrap justify-center gap-8 mt-10">
      {SKILLS.map(({ id, url, alt }) => (
        <li key={id}>
          <div className="relative w-[76px] h-28">
            <Image fill src={url} alt={alt} quality={100} />
          </div>
        </li>
      ))}
    </ul>
  </SectionWrapper>
);

export default SkillsSection;
