import { ReactNode } from "react";

// Enums
import { SectionWrapperColor } from "./enum";

export interface SectionWrapperProps {
  children: ReactNode;
  title?: string;
  id?: string;
  color?: SectionWrapperColor;
}
