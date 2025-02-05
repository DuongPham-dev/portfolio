import React from "react";

// Props
import { SectionWrapperProps } from "./props";

// Components
import Tag from "../Tag";

// Enums
import { SectionWrapperColor } from "./enum";

export const SectionWrapper = ({
  children,
  title = "",
  id = "",
  color = SectionWrapperColor.SECONDARY,
}: SectionWrapperProps) => {
  const bgColor = {
    [SectionWrapperColor.PRIMARY]: "bg-slate-50",
    [SectionWrapperColor.SECONDARY]: "bg-white",
  }[color];

  return (
    <div id={id} className={`flex flex-col px-10 py-10 ${bgColor}`}>
      {title && (
        <div className="self-center mb-10 ">
          <Tag title={title} />
        </div>
      )}
      <div className="w-full self-start">{children}</div>
    </div>
  );
};
