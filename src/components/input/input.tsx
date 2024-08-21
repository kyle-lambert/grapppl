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
  "w-full rounded-xl border-2 border-transparent bg-gray-50 leading-5 text-gray-900 placeholder-gray-300 outline-none transition-all invalid:border-red-500 invalid:bg-white invalid:hover:border-red-500 focus:bg-white invalid:focus:border-red-500 invalid:focus:ring invalid:focus:ring-red-200 enabled:hover:border-gray-900 enabled:focus:border-gray-950 disabled:cursor-not-allowed disabled:opacity-50",
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
