import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AtomInput from "./index";
import { useState } from "react";

describe("COMPONENTS / ATOMS / INPUT", () => {
  describe("RENDER TESTING", () => {
    it("should render without error", () => {
      const { container } = render(<AtomInput />);

      const element = container.querySelector(".bs_input");

      expect(element).toBeInTheDocument();
    });

    it("should render 'placeholder' text provided via 'placeholder' prop", () => {
      const { getByPlaceholderText } = render(
        <AtomInput placeholder="Placeholder Text" />
      );

      const element = getByPlaceholderText("Placeholder Text");

      expect(element).toBeInTheDocument();
    });

    it("should render LeftIcon when 'LeftIcon' is provided", () => {
      const { container } = render(<AtomInput LeftIcon={<div>Icon</div>} />);

      const element = container.querySelector(".bs_input--left_icon");

      expect(element).toBeInTheDocument();
    });

    it("should render RightIcon when 'RightIcon' is provided", () => {
      const { container } = render(<AtomInput RightIcon={<div>Icon</div>} />);

      const element = container.querySelector(".bs_input--right_icon");

      expect(element).toBeInTheDocument();
    });

    it("should contain 'bs_input--danger' className when 'isError' prop is true", () => {
      const { container } = render(<AtomInput isError />);

      const element = container.querySelector(".bs_input");

      expect(element).toHaveClass("bs_input--danger");
    });
  });

  describe("SIZE TESTING", () => {
    it("should contain 'bs_input--size_m' as default className", () => {
      const { container } = render(<AtomInput />);

      const element = container.querySelector(".bs_input");

      expect(element).toHaveClass("bs_input--size_m");
    });

    it("should contain 'bs_input--size_l' when 'size' prop is 'L'", () => {
      const { container } = render(<AtomInput size="L" />);

      const element = container.querySelector(".bs_input");

      expect(element).toHaveClass("bs_input--size_l");
    });

    it("should contain 'bs_input--size_m' when 'size' prop is 'M'", () => {
      const { container } = render(<AtomInput size="M" />);

      const element = container.querySelector(".bs_input");

      expect(element).toHaveClass("bs_input--size_m");
    });

    it("should contain 'bs_input--size_s' when 'size' prop is 'S'", () => {
      const { container } = render(<AtomInput size="S" />);

      const element = container.querySelector(".bs_input");

      expect(element).toHaveClass("bs_input--size_s");
    });
  });

  describe("FUNCTION TESTING", () => {
    it("should applied custom 'className' provided via 'className' prop", () => {
      const { container } = render(<AtomInput className="custom-className" />);

      const element = container.querySelector(".bs_input");

      expect(element).toHaveClass("custom-className");
    });

    it("should NOT disabled when 'disabled' prop is false", () => {
      const { container } = render(<AtomInput />);

      const element = container.querySelector("input");

      expect(element).not.toBeDisabled();
    });
    it("should disabled when 'disabled' prop is true", () => {
      const { container } = render(<AtomInput disabled />);

      const element = container.querySelector("input");

      expect(element).toBeDisabled();
    });
    it("should run 'onChange' function provided via 'onChange' prop when user change input value", () => {
      let value = "";

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        value = e.target.value;
      };

      const { container } = render(<AtomInput onChange={handleChange} />);

      const element = container.querySelector("input")!;

      fireEvent.change(element, { target: { value: "changed value" } });

      expect(value).toBe("changed value");
    });
  });
});
