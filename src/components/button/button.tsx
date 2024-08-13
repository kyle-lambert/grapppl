"use client";

import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React, { Ref } from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-xl border border-transparent text-sm font-medium leading-5 tracking-wide outline-none transition rac-focus-visible:outline-4 rac-focus-visible:outline-offset-0 rac-focus-visible:outline-blue-300 rac-disabled:cursor-not-allowed rac-disabled:border-zinc-200 rac-disabled:bg-white rac-disabled:text-zinc-300",

  {
    variants: {
      appearance: {
        primary: "bg-zinc-900 text-zinc-100 rac-hover:bg-zinc-800",
        secondary:
          "border-zinc-200 bg-white text-zinc-800 rac-hover:border-zinc-300",
        tertiary:
          "border-zinc-200 bg-white text-violet-500 rac-hover:border-zinc-300",
      },
      size: {
        sm: "px-2 py-1",
        md: "px-3 py-2",
        lg: "px-4 py-3",
      },
    },
    defaultVariants: {
      appearance: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = {
  customRef?: Ref<HTMLButtonElement>;
} & AriaButtonProps &
  VariantProps<typeof buttonStyles>;

export function Button({
  customRef,
  className,
  appearance,
  size,
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      ref={customRef}
      className={cn(
        buttonStyles({
          appearance,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}
Button.displayName = "Button";
