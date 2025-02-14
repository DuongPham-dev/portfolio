import Link from "next/link";
import React from "react";

// Icons
import { GitHubIcon, TwitterIcon } from "@/icons";

// Components
import { ImageWithShadow, SectionWrapper } from "@/components";

const HeroSection = () => (
  <SectionWrapper>
    <div className="mt-10">
      <figure className="flex flex-col-reverse md:flex-row gap-10">
        <figcaption className="flex-1">
          <h1 className="text-4xl font-bold">
            Hi &#9996;, I&apos;m Duong Pham{" "}
          </h1>
          <p className="text-gray-500 pt-2">
            I&apos;m a passionate and detail-oriented Web Developer with over 2
            years of experience in building modern, responsive, and
            user-friendly web applications. I specialize in front-end
            development and have a strong command of JavaScript (JS), TypeScript
            (TS), ReactJS, Next.js, and React Native.
          </p>
          <ul className="flex gap-3 mt-10">
            <li>
              <Link href="https://github.com/DuongPham-dev" target="_blank">
                <GitHubIcon />
              </Link>
            </li>
            <li>
              <Link href="#">
                <TwitterIcon />
              </Link>
            </li>
          </ul>
        </figcaption>
        <div className="w-60 h-60 md:w-72 md:h-80 self-center md:mr-3">
          <ImageWithShadow url="/images/user.jpg" alt="I'm Duong Pham" />
        </div>
      </figure>
    </div>
  </SectionWrapper>
);

export default HeroSection;
