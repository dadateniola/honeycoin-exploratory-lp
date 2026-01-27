"use client";

import React, { useId } from "react";

// Types
import type { InputProps } from "./types";

// Imports
import clsx from "clsx";
import Label from "./label";
import { FORM_COMPONENTS_CLASS } from "./data";
import { FormComponentsWrapper } from "./components";
import { ValidationText } from "../global/components";

const Input: React.FC<InputProps> = ({
  id: inputId,
  error,
  label,
  className,
  ...props
}) => {
  // Hooks
  const generatedId = useId();
  const id = inputId || `input-${generatedId}`;

  return (
    <FormComponentsWrapper>
      <Label htmlFor={id}>{label}</Label>

      <input
        id={id}
        type="text"
        aria-invalid={!!error}
        className={clsx(FORM_COMPONENTS_CLASS, className)}
        {...props}
      />

      <ValidationText text={error} />
    </FormComponentsWrapper>
  );
};

export default Input;
