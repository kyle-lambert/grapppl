import { forwardRef } from "react";
import {
  FieldError as AriaFieldError,
  FieldErrorProps as AriaFieldErrorProps,
} from "react-aria-components";

export type FieldErrorProps = AriaFieldErrorProps;
export const FieldError = forwardRef<HTMLParagraphElement, FieldErrorProps>(
  (props, ref) => {
    return <AriaFieldError ref={ref} {...props} />;
  },
);
FieldError.displayName = "FieldError";
