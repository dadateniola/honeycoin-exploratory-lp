import { Fraunces, Onest } from "next/font/google";

// Types
import type { BrandLogo } from "./types";
import type { SVGProps } from "../svg/types";

// Images
import {
  Kins,
  Ryobi,
  UpGuys,
  DreamVC,
  Voxtell,
  GetMyBoat,
  HoneyCoin,
  LateralFrontiers,
} from "../svg/brands";

// Fonts
export const onest = Onest({ subsets: ["latin"] });
export const fraunces = Fraunces({ subsets: ["latin"] });

// Constants
export const CONTENT_CLASS = "py-[140px] px-10 custom-flex-col gap-[100px]";

export const SECTION_HEADING_CLASS =
  "text-secondary text-[68px] font-recoleta font-bold leading-[110%]";

export const BRAND_LOGOS = [
  "get-my-boat",
  "lateral-frontiers",
  "up-guys",
  "honey-coin",
  "kins",
  "ryobi",
  "dream-vc",
  "voxtell",
] as const;

export const BRAND_LOGOS_MAP: Record<BrandLogo, React.FC<SVGProps>> = {
  "get-my-boat": GetMyBoat,
  "lateral-frontiers": LateralFrontiers,
  "up-guys": UpGuys,
  "honey-coin": HoneyCoin,
  kins: Kins,
  ryobi: Ryobi,
  "dream-vc": DreamVC,
  voxtell: Voxtell,
};
