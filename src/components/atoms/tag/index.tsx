import React, { Children } from "react";
import "./style.css";
import BigStyleUtilsClassName from "../../utils/className";
import { AtomTagType } from "./type";

function AtomTag({
  variant = "neutral",
  size = "M",
  disabled,
  children,
  className,
  onClick = () => {},
}: AtomTagType) {
  const customCSS = BigStyleUtilsClassName.conditionalClassName(className);

  let sizeClass;
  switch (size) {
    case "L":
      sizeClass = BigStyleUtilsClassName.conditionalClassName("bs_tag--size_l");
      break;
    case "M":
      sizeClass = BigStyleUtilsClassName.conditionalClassName("bs_tag--size_m");
      break;
    case "S":
      sizeClass = BigStyleUtilsClassName.conditionalClassName("bs_tag--size_s");
      break;
  }

  let variantClass;
  switch (variant) {
    case "neutral":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_tag--variant_neutral"
      );
      break;
    case "primary":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_tag--variant_primary"
      );
      break;
    case "success":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_tag--variant_success"
      );
      break;
    case "warning":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_tag--variant_warning"
      );
      break;
    case "danger":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_tag--variant_danger"
      );
      break;
  }

  const disabledClass = BigStyleUtilsClassName.conditionalClassName(
    disabled ? "bs_tag--disabled" : ""
  );

  return (
    <span
      onClick={!disabled ? onClick : null}
      className={`bs_tag${sizeClass}${variantClass}${disabledClass}${customCSS}`}
    >
      {children}
    </span>
  );
}

export default AtomTag;
