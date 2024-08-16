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
  "rounded-xl border border-gray-200 bg-white leading-5 text-gray-800 placeholder-gray-400 shadow-sm outline-none transition-all invalid:border-rose-500 invalid:ring-rose-100 invalid:hover:border-rose-600 focus:ring invalid:focus:border-rose-600 invalid:focus:ring-rose-100 enabled:hover:border-gray-300 enabled:focus:border-gray-300 enabled:focus:ring-gray-100 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
  {
    variants: {
      size: {
        sm: "h-10 px-3",
        md: "h-12 px-3",
        lg: "h-14 px-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type InputProps = StylePropOverides<
  AriaInputProps,
  VariantProps<typeof inputStyles>
>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <AriaInput
        ref={ref}
        className={cn(inputStyles({ size }), className)}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
