"use client";

import { cn } from "@/utils/cn";
import { StylePropOverides } from "@/utils/types";
import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-full border border-transparent font-medium leading-5 tracking-wide outline-none data-[disabled]:cursor-not-allowed data-[disabled]:border-zinc-200 data-[disabled]:bg-white data-[disabled]:text-zinc-300 data-[focus-visible]:outline data-[focus-visible]:outline-blue-600",

  {
    variants: {
      appearance: {
        primary: "bg-zinc-900 text-white data-[hovered]:bg-zinc-800",
        secondary:
          "border-zinc-200 bg-white text-zinc-800 data-[hovered]:bg-zinc-100",
        brand: "bg-blue-600 text-white data-[hovered]:bg-blue-500",
      },
      size: {
        md: "px-4 py-2.5 text-sm",
        lg: "px-5 py-3.5",
      },
    },
    defaultVariants: {
      appearance: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = StylePropOverides<
  AriaButtonProps,
  VariantProps<typeof buttonStyles>
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, appearance, ...props }, ref) => {
    return (
      <AriaButton
        ref={ref}
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
  },
);

Button.displayName = "Button";
