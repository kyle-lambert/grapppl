"use client";

import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";

export type TextFieldProps = AriaTextFieldProps;
export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  ({ validationBehavior = "aria", className, ...props }, ref) => {
    return (
      <AriaTextField
        ref={ref}
        className={cn("flex flex-col gap-1.5", className)}
        validationBehavior={validationBehavior}
        {...props}
      />
    );
  },
);
TextField.displayName = "TextField";
