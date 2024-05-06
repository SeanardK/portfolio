import React from "react";
import "./style.css";
import BigStyleUtilsClassName from "../../utils/className";
import { AtomToogleSwitchType } from "./type";

function AtomToogleSwitch({
  size = "L",
  disabled,
  active,
  className,
  children,
}: AtomToogleSwitchType) {
  let sizeClass;
  switch (size) {
    case "L":
      sizeClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_toggleSwitch--size_l"
      );
      break;
    case "S":
      sizeClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_toggleSwitch--size_s"
      );
      break;
  }

  let activeClass = active
    ? BigStyleUtilsClassName.conditionalClassName("bs_toggleSwitch--active")
    : "";
  let customClass = BigStyleUtilsClassName.conditionalClassName(className);

  return (
    <button
      className={`bs_toggleSwitch${sizeClass}${activeClass}${customClass}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default AtomToogleSwitch;
