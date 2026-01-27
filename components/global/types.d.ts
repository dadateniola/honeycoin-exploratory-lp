// Imports
import { BRAND_LOGOS } from "./data";

export type BrandLogo = (typeof BRAND_LOGOS)[number];

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export interface ValidationTextProps {
  text?: string;
}
