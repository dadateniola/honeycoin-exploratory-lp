import React from "react";

// Types
import { ExploreCardProps } from "./types";

// Imports
import clsx from "clsx";

// Components
export const ExploreCard = React.forwardRef<HTMLDivElement, ExploreCardProps>(
  ({ color, title, layout, children, description }, ref) => (
    <div
      ref={ref}
      data-explore-card
      style={{ backgroundColor: color }}
      className={clsx(
        "relative flex-1 min-w-0 h-[540px] rounded-[10px] overflow-hidden",
        layout === "compact" && "max-w-[400px]",
        "opacity-0 invisible", // Initial state
      )}
    >
      <div className="absolute inset-0 size-full overflow-hidden">{children}</div>

      <div
        data-explore-card-content
        className={clsx(
          "relative size-full pt-5 pb-8 px-14 flex justify-start",
          "opacity-0 invisible", // Initial state
        )}
      >
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
  ),
);

ExploreCard.displayName = "ExploreCard";
