import Link from "next/link";

// Types
import type { AltCTAProps } from "./types";

// Images
import { ArrowRightIcon } from "../svg/svg";
import { isExternalLink } from "@/utils/isExternalLink";

const AltCTA: React.FC<AltCTAProps> = ({ href, children }) => {
  // Render
  const external = isExternalLink(href);
  const Anchor = external ? "a" : Link;

  return (
    <Anchor
      href={href}
      className="h-[52px] pl-5 pr-4 flex items-center justify-between gap-3 bg-white/10 rounded-lg"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <p className="font-semibold underline -tracking-[0.16px] whitespace-nowrap">
        {children}
      </p>

      <ArrowRightIcon />
    </Anchor>
  );
};

export default AltCTA;
