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
  "inline-flex w-full items-center justify-center truncate rounded-full border border-transparent font-medium leading-5 tracking-wide outline-none transition-colors focus-visible:outline focus-visible:outline-blue-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-white disabled:text-gray-300",

  {
    variants: {
      appearance: {
        primary: "bg-gray-950 text-white shadow-md hover:bg-gray-900",
        secondary: "border-gray-100 bg-white text-gray-800 hover:bg-gray-50",
        brand: "bg-blue-500 text-white shadow-md hover:bg-blue-400",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-5",
        lg: "h-14 px-6",
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
