"use client";

import React, { Ref } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import {
  Input as AriaInput,
  type InputProps as AriaInputProps,
} from "react-aria-components";
import { cn } from "@/utils/cn";

const inputStyles = cva(
  "rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm leading-5 text-gray-800 placeholder-gray-400 shadow-sm rac-hover:border-gray-300 rac-focus:border-gray-300 rac-focus:ring-0 rac-focus:ring-offset-0",
  {
    variants: {
      size: {
        sm: "px-2 py-1",
        md: "px-3 py-2",
        lg: "px-4 py-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type InputProps = {
  customRef?: Ref<HTMLInputElement>;
} & AriaInputProps &
  VariantProps<typeof inputStyles>;

export default function Input({
  customRef,
  className,
  size,
  ...props
}: InputProps) {
  return (
    <AriaInput
      ref={customRef}
      className={cn(inputStyles({ size }), className)}
      {...props}
    />
  );
}
Input.displayName = "Input";
