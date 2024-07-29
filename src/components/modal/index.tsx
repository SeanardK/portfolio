import React, { useEffect } from "react";
import "./style.css";
import { AtomModalType } from "./type";
import BigStyleUtilsClassName from "@/components/utils/className";

function AtomModal({
  children,
  open,
  onClose = () => {},
  className,
  size = "M",
  center,
  header,
  footer,
}: AtomModalType) {
  const openClass = BigStyleUtilsClassName.conditionalClassName(
    open ? "bs_modal--open" : ""
  );

  const customClass = BigStyleUtilsClassName.conditionalClassName(className);

  const centerClass = BigStyleUtilsClassName.conditionalClassName(
    center ? "bs_modal--position_center" : ""
  );

  let sizeClass;
  switch (size) {
    case "L":
      sizeClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_modal--container--size_l"
      );
      break;
    case "M":
      sizeClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_modal--container--size_m"
      );
      break;
    case "S":
      sizeClass = BigStyleUtilsClassName.conditionalClassName(
        "bs_modal--container--size_s"
      );
      break;
  }

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <div className={`bs_modal${openClass}`}>
      <div
        className={`bs_modal--container${sizeClass}${centerClass}${customClass}`}
      >
        {header && (
          <div className="bs_modal--header">
            <div>{header}</div>
          </div>
        )}

        <div className="bs_modal--content">{children}</div>

        {footer && <div className="bs_modal--footer">{footer}</div>}
      </div>

      <div className="bs_modal--overlay" onClick={onClose} />
    </div>
  );
}

export default AtomModal;
