import React, { useState, useEffect, useRef, RefObject } from "react";
import "./style.css"; // Import CSS for styling
import { OptionsType, SelectType } from "./type";
import BigStyleUtilsClassName from "../utils/className";
import AtomButton from "../button";
import IconCheck from "../icon/Check";
import IconChevronDown from "../icon/ChevronDown";
import AtomTag from "../tag";

const Select = ({
  size = "M",
  options = [],
  placeholder = "",
  LeftIcon,
  RightIcon,
  multiSelect,
  onChange = () => {},
  value = [],
  className = "",
}: SelectType) => {
  const customClass = BigStyleUtilsClassName.conditionalClassName(className);

  let sizeClass;
  switch (size) {
    case "L":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_select--size_l");
      break;
    case "M":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_select--size_m");
      break;
    case "S":
      sizeClass =
        BigStyleUtilsClassName.conditionalClassName("bs_select--size_s");
      break;
  }

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openClass = BigStyleUtilsClassName.conditionalClassName(
    dropdownOpen ? "bs_select--open" : ""
  );

  const handleToggleOption = (option: string) => {
    multiSelect
      ? setSelectedOptions((prevSelected) =>
          prevSelected.includes(option)
            ? prevSelected.filter((selected) => selected !== option)
            : [...prevSelected, option]
        )
      : setSelectedOptions([option]);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`bs_select${openClass}${customClass}`} ref={dropdownRef}>
        <AtomButton
          LeftIcon={LeftIcon}
          RightIcon={RightIcon || <IconChevronDown />}
          onClick={handleDropdownToggle}
          variant="outline"
          className={`bs_select--button${sizeClass}`}
        >
          {/* Value Prop */}
          {value.length > 0 &&
            value
              .map(
                (option: string) =>
                  options.find((o) => o.value === option)!.label
              )
              .map((v) => (
                <React.Fragment key={v}>
                  {multiSelect ? (
                    <AtomTag key={v} className="bs_select--tag">
                      {v}
                    </AtomTag>
                  ) : (
                    v
                  )}
                </React.Fragment>
              ))}

          {/* Local Value */}
          {value.length < 1 && selectedOptions.length > 0 ? (
            selectedOptions
              .map(
                (option: string) =>
                  options.find((o) => o.value === option)!.label
              )
              .map((v) => (
                <>
                  {multiSelect ? (
                    <AtomTag key={v} className="bs_select--tag">
                      {v}
                    </AtomTag>
                  ) : (
                    v
                  )}
                </>
              ))
          ) : (
            <></>
          )}

          {/* Placeholder */}
          {value.length < 1 && selectedOptions.length < 1 && placeholder}
        </AtomButton>

        {dropdownOpen && (
          <div className="bs_select--options">
            {options.map((option: OptionsType) => (
              <AtomButton
                key={option.value}
                variant="transparent2"
                className="bs_select--option_item"
                LeftIcon={option.icon}
                RightIcon={
                  selectedOptions.includes(option.value.toString()) ? (
                    <IconCheck />
                  ) : null
                }
                onClick={() => handleToggleOption(option.value)}
              >
                {option.label}
              </AtomButton>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
