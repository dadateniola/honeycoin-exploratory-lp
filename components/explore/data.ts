// Types
import type { ExploreData } from "./types";

// Images
import { BrandLogo } from "../global/types";

// Constants
export const MARQUEE_LOGO_CLASS: Record<BrandLogo, string> = {
  "get-my-boat": "max-w-[97px] max-h-[17px]",
  "lateral-frontiers": "max-w-[78px] max-h-[20px]",
  "up-guys": "max-w-[84px] max-h-[16px]",
  "honey-coin": "max-w-[98px] max-h-[17px]",
  kins: "max-w-[60px] max-h-[16px]",
  ryobi: "max-w-[67px] max-h-[26px]",
  "dream-vc": "max-w-[95px] max-h-[19px]",
  voxtell: "max-w-[98px] max-h-[32px]",
};

export const EXPLORE_DATA: ExploreData[] = [
  {
    layout: "compact",
    color: "#FEEDD2",
    title: "All your currencies, one smooth wallet.",
    artboard: "Bento 1",
    description:
      "Hold, swap, and transfer instantly with multi-currency fiat wallets built for global operations. Simplify your obligations, manage payouts, and never miss a beat.",
  },
  {
    layout: "stretch",
    color: "#E4F9E0",
    title: "Payouts that scale with your business.",
    artboard: "Bento 2",
    description:
      "From payroll to supplier payments, HoneyCoin handles bulk processing in seconds. Say goodbye to delays, bottlenecks, and endless bank queues.",
  },
  {
    layout: "stretch",
    color: "#FFECE6",
    title: "Don't let idle funds sleep.",
    artboard: "Bento 4",
    description:
      "From payroll to supplier payments, HoneyCoin handles bulk processing in seconds. Say goodbye to delays, bottlenecks, and endless bank queues.",
  },
  {
    layout: "compact",
    color: "#F9F3D3",
    title: "Finance teams, reimagined.",
    artboard: "Bento 3",
    description:
      "Set spend limits, enforce budgets, and track in real-time. HoneyCoin gives CFOs, HR, and Finance Managers total visibility with zero micromanaging.",
  },
  {
    layout: "stretch",
    color: "#DDEBFF",
    title: "Plug, play, and go global.",
    artboard: "Bento 5",
    description:
      "Our APIs make it effortless to embed currency swaps, wallets, and payouts into your product. Go live in 15 minutes and stay future-proof with continuous updates.",
  },
  {
    layout: "stretch",
    color: "#EAEAEA",
    title: "Fortified like a vault. Simple as honey.",
    artboard: "Bento 6",
    description:
      "With end-to-end encryption, MFA, and full compliance, HoneyCoin keeps your funds and data secure, so you can focus on growth with peace of mind.",
  },
];
