export type StylePropOverides<TProps, TStyleProps> = Omit<
  TProps,
  keyof TStyleProps
> &
  TStyleProps;
