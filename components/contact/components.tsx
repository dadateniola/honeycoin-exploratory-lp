import React from "react";

// Types
import type { ContactFormSectionProps } from "./types";

// Imports
import clsx from "clsx";

// Components
export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  title,
  children,
  className,
}) => (
  <div className={clsx("custom-flex-col", className)}>
    <div className="flex items-center gap-5">
      <p className="text-text-primary text-xl font-fraunces font-semibold leading-[120%]">
        {title}
      </p>
      <div className="flex-1 h-0 border-t border-text-primary opacity-10"></div>
    </div>
    {children}
  </div>
);
