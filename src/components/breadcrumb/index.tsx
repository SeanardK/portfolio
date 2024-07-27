import React from "react";
import "./style.css";
import { AtomBreadcrumbDataType, AtomBreadcrumbType } from "./type";
import RightChevronIcon from "./ChevronIcon";
import BigStyleUtilsClassName from "@/components/utils/className";
import AtomButton from "../button";

function AtomBreadcrumb({
  menu = [],
  dividerIcon,
  dividerClassName,
  className,
}: AtomBreadcrumbType) {
  const menuLength = menu.length;

  const customClass = BigStyleUtilsClassName.conditionalClassName(className);

  const dividerClass =
    BigStyleUtilsClassName.conditionalClassName(dividerClassName);

  return (
    <div className={`bs_breadcrumb${customClass}`}>
      {menu.map((v: AtomBreadcrumbDataType, i: number) => {
        const lastClass = BigStyleUtilsClassName.conditionalClassName(
          i === menuLength - 1 ? "bs_breadcrumb--last_menu" : ""
        );

        return (
          <>
            <a href={i !== menuLength - 1 && !v.disabled ? v.href : undefined}>
              <AtomButton
                disabled={v.disabled}
                variant="transparent2"
                key={v.name}
                className={`bs_breadcrumb--menu${lastClass}`}
                onClick={v.onClick}
                LeftIcon={v.leftIcon}
                RightIcon={v.rightIcon}
              >
                {v.name}
              </AtomButton>
            </a>

            {i < menuLength - 1 && (
              <div className={`bs_breadcrumb--divider${dividerClass}`}>
                {dividerIcon || <RightChevronIcon />}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default AtomBreadcrumb;
