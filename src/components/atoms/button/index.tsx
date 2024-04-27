import React from "react";
import "./style.css";
import { AtomButtonType } from "./type";
import BigStyleUtilsClassName from "../../utils/className";

function AtomButton({
  children,
  className,
  disabled,
  isLoading,
  LeftIcon,
  onClick = () => {},
  RightIcon,
  size = "M",
  type = "button",
  variant = "primary",
}: AtomButtonType) {
  const css = BigStyleUtilsClassName.conditionalClassName(className);

  let sizeClass;
  switch (size) {
    case "L":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_button--size_l");
      break;
    case "M":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_button--size_m");
      break;
    case "S":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_button--size_s");
      break;
  }

  let variantClass;
  switch (variant) {
    case "primary":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_button--variant_primary"
      );
      break;
    case "secondary":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_button--variant_secondary"
      );
      break;
    case "outline":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_button--variant_outline"
      );
      break;
    case "transparent1":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_button--variant_transparent1"
      );
      break;
    case "transparent2":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_button--variant_transparent2"
      );
      break;
  }

  const loadingClass = isLoading ? " bs_button--loading" : "";
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`bs_button${css}${sizeClass}${variantClass}${loadingClass}`}
    >
      {/* Left Icon */}
      {LeftIcon && <div className="bs_button--left_icon">{LeftIcon}</div>}

      {/* Button Content */}
      <div>{children}</div>

      {/* Right Icon */}
      {RightIcon && <div className="bs_button--right_icon">{RightIcon}</div>}

      {isLoading && (
        <div className="bs_button--spinner_container">
          <span className="loader" />
        </div>
      )}
    </button>
  );
}

export default AtomButton;
