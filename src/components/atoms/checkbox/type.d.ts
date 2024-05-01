import React from "react";

export interface AtomCheckboxType {
  ref?: React.Ref;
  className?: string;
  onChange?: React.EventHandler;
  label?: string;
  variant?: "check" | "dot";
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
}
