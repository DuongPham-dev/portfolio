import React from "react";

// Components
import { ExperienceCard, SectionWrapper } from "@/components";

// Enums
import { SectionWrapperColor } from "@/components/SectionWrapper/enum";

const ExperienceSection = () => (
  <SectionWrapper
    id="experience"
    title="Experience"
    color={SectionWrapperColor.PRIMARY}
  >
    <ExperienceCard />
  </SectionWrapper>
);

export default ExperienceSection;
