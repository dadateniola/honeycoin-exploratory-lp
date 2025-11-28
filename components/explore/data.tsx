// Types
import type { ExploreData } from "./types";

// Images
import {
  RyobiLogo,
  DreamVCLogo,
  GetMyBoatLogo,
  HoneyCoinLogo,
  LateralFrontiersLogo,
} from "../svg/svg";

// Constants
export const MARQUEE_LOGOS = [
  GetMyBoatLogo,
  LateralFrontiersLogo,
  HoneyCoinLogo,
  RyobiLogo,
  DreamVCLogo,
];

export const EXPLORE_DATA: ExploreData[] = [
  {
    layout: "compact",
    color: "#FEEDD2",
    title: "All your currencies, one smooth wallet.",
    description:
      "Hold, swap, and transfer instantly with multi-currency fiat wallets built for global operations. Simplify your obligations, manage payouts, and never miss a beat.",
  },
  {
    layout: "stretch",
    color: "#E4F9E0",
    title: "Payouts that scale with your business.",
    description:
      "From payroll to supplier payments, HoneyCoin handles bulk processing in seconds. Say goodbye to delays, bottlenecks, and endless bank queues.",
  },
  {
    layout: "stretch",
    color: "#FFECE6",
    title: "Don't let idle funds sleep.",
    description:
      "From payroll to supplier payments, HoneyCoin handles bulk processing in seconds. Say goodbye to delays, bottlenecks, and endless bank queues.",
  },
  {
    layout: "compact",
    color: "#F9F3D3",
    title: "Finance teams, reimagined.",
    description:
      "Set spend limits, enforce budgets, and track in real-time. HoneyCoin gives CFOs, HR, and Finance Managers total visibility with zero micromanaging.",
  },
  {
    layout: "stretch",
    color: "#DDEBFF",
    title: "Plug, play, and go global.",
    description:
      "Our APIs make it effortless to embed currency swaps, wallets, and payouts into your product. Go live in 15 minutes and stay future-proof with continuous updates.",
  },
  {
    layout: "stretch",
    color: "#EAEAEA",
    title: "Fortified like a vault. Simple as honey.",
    description:
      "With end-to-end encryption, MFA, and full compliance, HoneyCoin keeps your funds and data secure, so you can focus on growth with peace of mind.",
  },
];
