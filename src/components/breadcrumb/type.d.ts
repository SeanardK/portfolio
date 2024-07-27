export interface AtomBreadcrumbDataType {
  name: string;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => any;
}

export interface AtomBreadcrumbType {
  menu: AtomBreadcrumbDataType[];
  dividerIcon?: React.ReactNode;
  dividerClassName?: string;
  className?: string;
}
