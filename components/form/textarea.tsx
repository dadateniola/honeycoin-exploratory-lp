"use client";

import React, { useId } from "react";

// Types
import type { TextareaProps } from "./types";

// Imports
import clsx from "clsx";
import Label from "./label";
import { FORM_COMPONENTS_CLASS } from "./data";
import { FormComponentsWrapper } from "./components";
import { ValidationText } from "../global/components";

const Textarea: React.FC<TextareaProps> = ({
  id: textareaId,
  error,
  label,
  className,
  ...props
}) => {
  // Hooks
  const generatedId = useId();
  const id = textareaId || `textarea-${generatedId}`;

  return (
    <FormComponentsWrapper>
      <Label htmlFor={id}>{label}</Label>

      <textarea
        id={id}
        aria-invalid={!!error}
        className={clsx("resize-none", FORM_COMPONENTS_CLASS, className)}
        {...props}
      />

      <ValidationText text={error} />
    </FormComponentsWrapper>
  );
};

export default Textarea;
