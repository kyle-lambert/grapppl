import { forwardRef } from "react";
import {
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
} from "react-aria-components";

export type FieldLabelProps = AriaLabelProps;
export const FieldLabel = forwardRef<HTMLLabelElement, FieldLabelProps>(
  (props, ref) => {
    return <AriaLabel ref={ref} {...props} />;
  },
);
FieldLabel.displayName = "FieldLabel";
