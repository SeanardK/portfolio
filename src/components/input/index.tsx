import React, { LegacyRef, forwardRef } from "react";
import "./style.css";
import { AtomInputType } from "./type";
import BigStyleUtilsClassName from "../utils/className";

function AtomInput(
  {
    className,
    disabled,
    isError,
    LeftIcon,
    onChange,
    placeholder,
    RightIcon,
    size = "M",
  }: AtomInputType,
  ref: LegacyRef<HTMLInputElement>
) {
  const css = BigStyleUtilsClassName.conditionalClassName(className);

  let sizeClass;
  switch (size) {
    case "L":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_input--size_l");
      break;
    case "M":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_input--size_m");
      break;
    case "S":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_input--size_s");
      break;
  }

  const dangerClass = BigStyleUtilsClassName.conditionalClassName(
    isError ? "bs_input--danger" : ""
  );

  return (
    <div className={`bs_input${sizeClass}${dangerClass}${css}`}>
      {/* FIXME : left icon position */}
      {LeftIcon && <div className="bs_input--left_icon">{LeftIcon}</div>}

      <input
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        ref={ref}
      />

      {/* FIXME : right icon position */}
      {RightIcon && <div className="bs_input--right_icon">{RightIcon}</div>}
    </div>
  );
}

export default forwardRef(AtomInput);
