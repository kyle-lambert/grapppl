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
  "w-full rounded-xl border border-gray-200 bg-white leading-5 text-gray-800 placeholder-gray-300 shadow-sm outline-none transition-all invalid:border-red-500 invalid:ring-red-100 invalid:hover:border-red-600 focus:ring invalid:focus:border-red-600 invalid:focus:ring-red-200 enabled:hover:border-gray-300 enabled:focus:border-gray-300 enabled:focus:ring-gray-200 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
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
