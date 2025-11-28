// Types
import { ExploreCardProps } from "./types";

// Imports
import clsx from "clsx";

// Components
export const ExploreCard: React.FC<ExploreCardProps> = ({
  color,
  title,
  layout,
  description,
}) => (
  <div
    style={{ backgroundColor: color }}
    className={clsx(
      "relative flex-1 min-w-0 h-[540px] rounded-[10px] overflow-hidden",
      layout === "compact" && "max-w-[400px]"
    )}
  >
    <div className="absolute inset-0"></div>

    <div className="relative size-full pt-5 pb-8 px-14 flex justify-start">
      <div className="w-full max-w-[400px] custom-flex-col gap-5">
        <h2 className="text-black/90 text-[32px] font-recoleta -tracking-[0.32px] leading-[135%]">
          {title}
        </h2>

        <p className="text-black/90 text-sm -tracking-[0.14px] leading-[135%] opacity-70">
          {description}
        </p>
      </div>
    </div>
  </div>
);
