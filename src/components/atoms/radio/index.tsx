import React from "react";
import { AtomRadioType } from "./type";
import "./style.css";
import BigStyleUtilsClassName from "../../utils/className";

function AtomRadio({
  className,
  checked,
  onChange = () => {},
  disabled,
  label,
  id,
  name,
}: AtomRadioType) {
  const customClass = BigStyleUtilsClassName.conditionalClassName(className);
  const checkedClass = BigStyleUtilsClassName.conditionalClassName(
    checked ? "bs_radio--checked" : ""
  );
  const disabledClass = BigStyleUtilsClassName.conditionalClassName(
    disabled ? "bs_radio--disabled" : ""
  );

  const handleOnClick = () => !disabled && onChange();

  return (
    <div className={`bs_radio${customClass}${checkedClass}${disabledClass}`}>
      <input
        type="radio"
        checked
        id={id}
        name={name}
        onChange={handleOnClick}
      />
      <button
        disabled={disabled}
        type="button"
        className={`bs_radio--check`}
        onClick={handleOnClick}
      >
        <div className="bs_radio--check--dot" />
      </button>

      {label && (
        <label htmlFor={id} className="bs_radio--label">
          {label}
        </label>
      )}
    </div>
  );
}

export default AtomRadio;
