import Link from "next/link";

// Types
import type { FooterCardProps } from "./types";

// Images
import { ArrowRightUpIcon } from "../svg/svg";

// Components
export const FooterCard: React.FC<FooterCardProps> = ({ links, title }) => (
  <div className="w-full min-h-[280px] p-5 custom-flex-col gap-5 justify-between bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
    <p className="-tracking-[0.16px] leading-[135%] uppercase">{title}</p>

    <div className="custom-flex-col gap-5">
      {links.map(({ href, label }, index) => (
        <Link
          key={index}
          href={href}
          className="flex items-center justify-between gap-5 group"
        >
          <p className="flex-1 min-w-0 text-2xl font-recoleta font-medium leading-[120%]">
            {label}
          </p>

          <ArrowRightUpIcon className="group-hover:rotate-45 transition-transform duration-200" />
        </Link>
      ))}
    </div>
  </div>
);
