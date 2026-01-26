import React from "react";

// Types
import type { FeaturesCardProps } from "./types";

// Imports
import clsx from "clsx";

// Components
export const FeaturesCard = React.forwardRef<HTMLDivElement, FeaturesCardProps>(
  (
    { icon, color, title, textColor = "#ffffff", children, description },
    ref,
  ) => (
    <div
      ref={ref}
      data-features-card
      style={{ backgroundColor: color }}
      className={clsx(
        "relative h-[520px] rounded-2xl overflow-hidden",
        "opacity-0 invisible", // Initial state
      )}
    >
      <div className="absolute inset-0 size-full overflow-hidden">
        {children}
      </div>

      <div
        data-features-card-content
        className={clsx(
          "relative size-full py-10 px-[50px] flex justify-start",
          "opacity-0 invisible", // Initial state
        )}
      >
        <div className="w-full max-w-[420px] custom-flex-col gap-4">
          {/* Icon */}
          <div className="flex">
            <div className="size-[52px] custom-flex-center bg-foreground rounded-xl">
              {icon}
            </div>
          </div>

          <h2
            style={{ color: textColor }}
            className="text-[40px] lg:text-5xl font-recoleta -tracking-[0.48px] leading-[120%]"
          >
            {title}
          </h2>

          <p
            style={{ color: textColor }}
            className="-tracking-[0.16px] leading-[135%]"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  ),
);

FeaturesCard.displayName = "FeaturesCard";
