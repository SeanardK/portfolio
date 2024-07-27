import React from "react";

export interface AtomModalType {
  children: React.ReactNode;
  open: boolean;
  onClose: () => any;
  size?: "L" | "M" | "S";
  className?: string;
  center?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}
