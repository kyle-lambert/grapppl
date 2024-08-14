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
  "rounded-xl border border-zinc-200 bg-white leading-5 text-zinc-800 placeholder-zinc-400 outline-none data-[disabled]:cursor-not-allowed data-[focused]:border-zinc-300 data-[hovered]:border-zinc-300 data-[invalid]:border-red-500 data-[disabled]:bg-zinc-100 data-[disabled]:text-zinc-400",
  {
    variants: {
      size: {
        md: "px-3 py-2.5 text-sm",
        lg: "px-3.5 py-3.5",
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
