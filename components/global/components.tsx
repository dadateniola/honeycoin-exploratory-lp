// Types
import type { SectionHeadingProps } from "./types";

// Imports
import { SECTION_HEADING_CLASS } from "./data";

// Components
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
}) => (
  <div className="custom-flex-col gap-4 text-center">
    <h1 className={SECTION_HEADING_CLASS}>{title}</h1>

    <div className="flex justify-center">
      <div className="w-full max-w-[480px]">
        {subtitle && (
          <p className="text-white/90 -tracking-[0.16px]">{subtitle}</p>
        )}
      </div>
    </div>
  </div>
);
