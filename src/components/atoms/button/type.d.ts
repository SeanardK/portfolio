import React from "react";

export interface AtomButtonType {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  onClick?: () => any;
  size?: "L" | "M" | "S";
  type?: "button" | "submit" | "reset";
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "transparent1"
    | "transparent2";
}
