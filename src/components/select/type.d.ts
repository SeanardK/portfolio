import React from "react";

export interface OptionsType {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface SelectType {
  size?: sizeType;
  options: OptionsType[];
  placeholder?: string;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  multiSelect?: boolean;
  onChange?: (value: string[]) => any;
  value?: string[];
  className?: string;
}
