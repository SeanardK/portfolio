import React from "react";
import { AtomCheckboxType } from "./type";
import "./style.css";
import BigStyleUtilsClassName from "../utils/className";
function AtomCheckbox({
  className,
  variant = "check",
  checked,
  onChange = () => {},
  disabled,
  label,
  id,
  name,
}: AtomCheckboxType) {
  const customClass = BigStyleUtilsClassName.conditionalClassName(className);
  const checkedClass = BigStyleUtilsClassName.conditionalClassName(
    checked ? "bs_checkbox--checked" : ""
  );
  const disabledClass = BigStyleUtilsClassName.conditionalClassName(
    disabled ? "bs_checkbox--disabled" : ""
  );

  const handleOnClick = () => !disabled && onChange();

  return (
    <div className={`bs_checkbox${customClass}${checkedClass}${disabledClass}`}>
      <input
        type="checkbox"
        onChange={handleOnClick}
        checked
        id={id}
        name={name}
      />
      <button
        type="button"
        className={`bs_checkbox--check`}
        onClick={handleOnClick}
        disabled={disabled}
      >
        {variant === "check" && (
          <div className="bs_checkbox--check--check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0791 3.0876C12.307 3.31541 12.307 3.68475 12.0791 3.91256L5.66248 10.3292C5.43467 10.557 5.06533 10.557 4.83752 10.3292L1.92085 7.41256C1.69305 7.18475 1.69305 6.81541 1.92085 6.5876C2.14866 6.3598 2.51801 6.3598 2.74581 6.5876L5.25 9.09179L11.2542 3.0876C11.482 2.8598 11.8513 2.8598 12.0791 3.0876Z"
                fill="white"
              />
            </svg>
          </div>
        )}
        {variant === "dot" && <div className="bs_checkbox--check--dot"></div>}
      </button>

      {label && (
        <label htmlFor={id} className="bs_checkbox--label">
          {label}
        </label>
      )}
    </div>
  );
}

export default AtomCheckbox;
