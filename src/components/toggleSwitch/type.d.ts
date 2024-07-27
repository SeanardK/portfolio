import React from "react";

export interface AtomToogleSwitchType {
  size?: "L" | "S";
  disabled?: boolean;
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}
