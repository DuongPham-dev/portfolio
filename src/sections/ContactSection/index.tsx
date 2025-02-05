import React from "react";

// Components
import { SectionWrapper } from "@/components";

// Enums
import { SectionWrapperColor } from "@/components/SectionWrapper/enum";

// Icons
import { CopyIcon, EmailIcon, PhoneIcon } from "@/icons";

const ContactSection = () => {
  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      color={SectionWrapperColor.PRIMARY}
    >
      <div className="flex justify-center  items-center gap-3 flex-col">
        <h2 className="text-center text-gray-500 text-lg">
          If you&apos;re interested in me, please contact me via:
        </h2>
        <p className="flex gap-2">
          <EmailIcon />
          <span>phamtanduongtk29@gmail.com</span>
          <CopyIcon />
        </p>
        <p className="flex gap-2">
          <PhoneIcon />
          <span>+84 399388142</span>
          <CopyIcon />
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
