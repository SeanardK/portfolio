import React from "react";

export interface AtomRadioType {
  ref?: React.Ref;
  className?: string;
  onChange?: React.EventHandler;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
}
