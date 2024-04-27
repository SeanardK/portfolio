import React from "react";

export interface AtomInputType {
  className?: string;
  disabled?: boolean;
  isError?: boolean;
  LeftIcon?: React.ReactNode;
  onChange?: React.ChangeEventHandler;
  placeholder?: string;
  RightIcon?: React.ReactNode;
  size?: "L" | "M" | "S";
}
