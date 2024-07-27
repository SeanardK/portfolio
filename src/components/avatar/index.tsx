import React from "react";
import BigStyleUtilsClassName from "../utils/className";
import { AtomAvatarType } from "./type";
import "./style.css";

function AtomAvatar({
  name,
  disabled,
  image,
  size = "L",
  variant = "1",
}: AtomAvatarType) {
  const splitedName: string[] = name.trim().split(" ");

  let initial;
  if (splitedName?.length > 1) {
    initial = `${splitedName[0][0]}${splitedName[splitedName.length - 1][0]}`;
  } else {
    initial = `${splitedName[0][0]}`;
  }

  let variantClass;
  switch (variant) {
    case "1":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_avatar--variant_1"
      );
      break;
    case "2":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_avatar--variant_2"
      );
      break;
    case "3":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_avatar--variant_3"
      );
      break;
    case "4":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_avatar--variant_4"
      );
      break;
    case "5":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_avatar--variant_5"
      );
      break;
    case "6":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_avatar--variant_6"
      );
      break;
    case "7":
      variantClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_avatar--variant_7"
      );
      break;
  }

  let sizeClass;
  switch (size) {
    case "XL":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_avatar--size_xl");
      break;
    case "L":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_avatar--size_l");
      break;
    case "M":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_avatar--size_m");
      break;
    case "S":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_avatar--size_s");
      break;
    case "XS":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_avatar--size_xs");
      break;
  }

  let disabledClass = BigStyleUtilsClassName.conditionalClassName(
    disabled ? "bs_avatar--disabled bs_disable_selection" : ""
  );

  return (
    <div className={`bs_avatar${variantClass}${disabledClass}${sizeClass}`}>
      <span>{initial}</span>
    </div>
  );
}

export default AtomAvatar;
