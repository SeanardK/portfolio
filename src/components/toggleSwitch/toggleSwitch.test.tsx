import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom";
import AtomToggleSwitch from "./index";

describe("COMPONENTS / ATOMS / TOGGLE SWITCH", () => {
  describe("RENDER TESTING", () => {
    it("should render without error", () => {
      const { container } = render(<AtomToggleSwitch>Switch</AtomToggleSwitch>);
      const element = container.querySelector(".bs_toggleSwitch");

      expect(element).toBeInTheDocument();
    });

    it("should render 'children' provided via 'children' prop", () => {
      const { getByText } = render(<AtomToggleSwitch>Switch</AtomToggleSwitch>);
      const element = getByText("Switch");

      expect(element).toBeInTheDocument();
    });
  });

  describe("SIZE TESTING", () => {
    it("should have 'bs_toggleSwitch--size_l' as default className", () => {
      const { container } = render(<AtomToggleSwitch>Switch</AtomToggleSwitch>);
      const element = container.querySelector(".bs_toggleSwitch");

      expect(element).toHaveClass("bs_toggleSwitch--size_l");
    });

    it("should contain 'bs_toggleSwitch--size_l' when 'size' prop is 'L'", () => {
      const { container } = render(
        <AtomToggleSwitch size="L">Switch</AtomToggleSwitch>
      );
      const element = container.querySelector(".bs_toggleSwitch");

      expect(element).toHaveClass("bs_toggleSwitch--size_l");
    });

    it("should contain 'bs_toggleSwitch--size_s' when 'size' prop is 'S'", () => {
      const { container } = render(
        <AtomToggleSwitch size="S">Switch</AtomToggleSwitch>
      );
      const element = container.querySelector(".bs_toggleSwitch");

      expect(element).toHaveClass("bs_toggleSwitch--size_s");
    });
  });

  describe("FUNCTION TESTING", () => {
    it("should disabled when 'disabled' prop is true", () => {
      const { container } = render(
        <AtomToggleSwitch disabled>Switch</AtomToggleSwitch>
      );
      const element = container.querySelector("button");

      expect(element).toHaveAttribute("disabled");
    });

    it("should NOT disabled when 'disabled' prop is false", () => {
      const { container } = render(<AtomToggleSwitch>Switch</AtomToggleSwitch>);
      const element = container.querySelector("button");

      expect(element).not.toHaveAttribute("disabled");
    });

    it("should applied custom className 'provided' via 'className' prop", () => {
      const { container } = render(
        <AtomToggleSwitch className="customClassName">Switch</AtomToggleSwitch>
      );
      const element = container.querySelector(".bs_toggleSwitch");

      expect(element).toHaveClass("customClassName");
    });

    it("should contain 'bs_toggleSwitch--active' when 'active' prop is true", () => {
      const { container } = render(
        <AtomToggleSwitch active>Switch</AtomToggleSwitch>
      );
      const element = container.querySelector(".bs_toggleSwitch");

      expect(element).toHaveClass("bs_toggleSwitch--active");
    });

    it("should NOT contain 'bs_toggleSwitch--active' when 'active' prop is true", () => {
      const { container } = render(<AtomToggleSwitch>Switch</AtomToggleSwitch>);
      const element = container.querySelector(".bs_toggleSwitch");

      expect(element).not.toHaveClass("bs_toggleSwitch--active");
    });
  });
});
