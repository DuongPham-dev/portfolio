import React from "react";

// Props
import { TagProps } from "./props";

const Tag = ({ title }: TagProps) => (
  <span className="inline-block bg-slate-200 px-5 py-1 rounded-2xl text-zinc-800">
    {title}
  </span>
);

export default Tag;
