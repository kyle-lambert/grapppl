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
  "inline-flex items-center justify-center rounded-full border border-transparent font-medium leading-5 tracking-wide shadow-sm outline-none transition-colors data-[disabled]:cursor-not-allowed data-[disabled]:border-gray-200 data-[disabled]:bg-white data-[disabled]:text-gray-300 data-[focus-visible]:outline data-[focus-visible]:outline-blue-500",

  {
    variants: {
      appearance: {
        primary: "bg-gray-900 text-white data-[hovered]:bg-gray-800",
        secondary:
          "border-gray-200 bg-white text-gray-800 data-[hovered]:bg-gray-100",
        brand: "bg-blue-500 text-white data-[hovered]:bg-blue-400",
      },
      size: {
        small: "h-9 px-4 text-sm",
        default: "h-11 px-4",
      },
    },
    defaultVariants: {
      appearance: "primary",
      size: "default",
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
