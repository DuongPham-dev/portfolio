import React from "react";

// Component
import { ImageWithShadow, SectionWrapper } from "@/components";

// Enums
import { ImageWithShadowStyle } from "@/components/ImageWithShadow/enum";
import { SectionWrapperColor } from "@/components/SectionWrapper/enum";

const AboutMeSection = () => (
  <SectionWrapper
    id="about"
    title="About me"
    color={SectionWrapperColor.PRIMARY}
  >
    <div className="w-full flex flex-col md:flex-row gap-10 lg:gap-20">
      <div className="w-60 h-60 md:w-72 md:h-80 self-center md:self-start md:ml-3">
        <ImageWithShadow
          url="/images/user-1.jpg"
          alt="I'm Duong Pham"
          style={ImageWithShadowStyle.LEFT}
        />
      </div>

      <div className="text-gray-500 flex-1">
        <h2 className="text-2xl text-zinc-900 font-bold pb-5">
          A Little About Me
        </h2>
        <p>
          Hi, I’m Pham Tan Duong, a 24-year-old Front-End Developer with 2 years
          of experience in building modern, responsive, and user-friendly web
          and mobile applications. I’m passionate about turning ideas into
          reality through clean, efficient, and scalable code.
        </p>
        <br />
        <p>
          I specialize in JavaScript (JS), TypeScript (TS), ReactJS, Next.js,
          and React Native, and I love working on projects that challenge me to
          grow and innovate. Whether it’s creating dynamic web applications or
          building cross-platform mobile apps, I’m dedicated to delivering
          high-quality solutions that meet both user needs and business goals.
        </p>
        <br />
        <p>
          When I’m not coding, you can find me exploring new technologies,
          contributing to open-source projects, or improving my skills to stay
          ahead in the ever-evolving tech world. I’m always excited to
          collaborate on new projects and bring creative ideas to life! Let’s
          build something amazing together! 🚀
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutMeSection;
