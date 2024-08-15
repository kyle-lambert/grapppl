import { forwardRef } from "react";
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";

export type TextFieldProps = AriaTextFieldProps;
export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  ({ validationBehavior = "aria", ...props }, ref) => {
    return (
      <AriaTextField
        ref={ref}
        validationBehavior={validationBehavior}
        {...props}
      />
    );
  },
);
TextField.displayName = "TextField";
