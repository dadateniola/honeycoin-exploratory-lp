// Types
import type { SectionHeadingProps, ValidationTextProps } from "./types";

// Imports
import { SECTION_HEADING_CLASS } from "./data";

// Components
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
}) => (
  <div className="custom-flex-col gap-4 text-center">
    <h1 className={SECTION_HEADING_CLASS}>{title}</h1>

    {subtitle && (
      <div className="flex justify-center">
        <div className="w-full max-w-[480px]">
          <p className="text-white/90 -tracking-[0.16px]">{subtitle}</p>
        </div>
      </div>
    )}
  </div>
);

export const ValidationText: React.FC<ValidationTextProps> = ({ text }) =>
  text && <p className="text-red-500 text-sm">{text}</p>;
