"use client";

import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import {
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
} from "react-aria-components";

export type FieldLabelProps = AriaLabelProps;
export const FieldLabel = forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <AriaLabel
        className={cn("text-sm font-medium text-gray-900", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
FieldLabel.displayName = "FieldLabel";
