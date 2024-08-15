"use client";

import React, { forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import {
  Input as AriaInput,
  type InputProps as AriaInputProps,
} from "react-aria-components";
import { cn } from "@/utils/cn";
import { StylePropOverides } from "@/utils/types";

const inputStyles = cva(
  "rounded-xl border leading-5 text-gray-800 placeholder-gray-400 shadow-sm outline-none transition-colors data-[disabled]:cursor-not-allowed data-[invalid]:border-red-500 data-[disabled]:bg-gray-100 data-[disabled]:text-gray-400 data-[focus-visible]:ring data-[focus-visible]:ring-inset",
  {
    variants: {
      appearance: {
        primary:
          "border-gray-200 bg-white data-[focused]:border-gray-300 enabled:data-[hovered]:border-gray-300",
      },
      size: {
        small: "h-10 px-3 text-sm",
        default: "h-12 px-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export type InputProps = StylePropOverides<
  AriaInputProps,
  VariantProps<typeof inputStyles>
>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, appearance, ...props }, ref) => {
    return (
      <AriaInput
        ref={ref}
        className={cn(inputStyles({ size, appearance }), className)}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
