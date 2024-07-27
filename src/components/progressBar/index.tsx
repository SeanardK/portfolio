import React from "react";
import { ProgressBarType } from "./type";
import "./style.css";
import BigStyleUtilsClassName from "@/components/utils/className";

function AtomProgressBar({
  label,
  value = 0,
  className,
  disabled,
}: ProgressBarType) {
  const roundedClass = BigStyleUtilsClassName.conditionalClassName(
    label ? "bs_progress_bar-container-with_label" : ""
  );

  const customClass = BigStyleUtilsClassName.conditionalClassName(className);

  const disabledClass = BigStyleUtilsClassName.conditionalClassName(
    disabled ? "bs_progress_bar-disabled" : ""
  );

  return (
    <div
      className={`bs_progress_bar bs_disable_selection${customClass}${disabledClass}`}
    >
      <div className={`bs_progress_bar-container${roundedClass}`}>
        {label && <p>{label}</p>}

        <div
          className="bs_progress_bar-gauge"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default AtomProgressBar;
