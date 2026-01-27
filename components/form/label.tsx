import React from "react";

// Types
import type { LabelProps } from "./types";

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-text-primary font-medium -tracking-[0.16px] leading-[135%]"
    >
      {children}
    </label>
  );
};

export default Label;
