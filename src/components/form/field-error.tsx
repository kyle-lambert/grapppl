"use client";

import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import {
  FieldError as AriaFieldError,
  FieldErrorProps as AriaFieldErrorProps,
} from "react-aria-components";

export type FieldErrorProps = AriaFieldErrorProps;
export const FieldError = forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, ...props }, ref) => {
    return (
      <AriaFieldError
        className={cn("text-xs text-red-600", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
FieldError.displayName = "FieldError";
