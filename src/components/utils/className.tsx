const conditionalClassName = (className?: string) =>
  className ? ` ${className}` : "";

const BigStyleUtilsClassName = {
  conditionalClassName,
};

export default BigStyleUtilsClassName;
