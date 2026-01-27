// Types
import type { FooterData, WarpBGItem } from "./types";

// Imports
import gsap from "gsap";

// Constants
export const FOOTER_DATA: FooterData[] = [
  {
    title: "Contact",
    links: [
      { href: "/contact", label: "Contact us" },
      { href: "", label: "Book a call" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "", label: "Designed by Rvysion Studios" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "", label: "Wallets and Payments" },
      { href: "", label: "Virtual Accounts" },
      { href: "", label: "Virtual Cards" },
      { href: "", label: "Investments" },
    ],
  },
  {
    title: "Socials",
    links: [
      { href: "", label: "X" },
      { href: "", label: "Instagram" },
      { href: "", label: "LinkedIn" },
    ],
  },
];

// Helpers
export const shuffleArray = <T>(arr: T[]) => {
  const copy = arr.slice();
  return gsap.utils.shuffle(copy);
};

export const createWarpNode = (item: WarpBGItem) => {
  const node = document.createElement("div");
  node.setAttribute("data-anim-id", item.id);
  node.className = item.className;
  Object.assign(node.style, item.style);
  return node;
};
