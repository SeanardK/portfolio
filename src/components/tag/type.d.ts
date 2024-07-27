import React from "react";

export interface AtomTagType {
  variant?: "neutral" | "primary" | "success" | "warning" | "danger";
  size?: "L" | "M" | "S";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: React.EventHandler;
  className?: string;
}
