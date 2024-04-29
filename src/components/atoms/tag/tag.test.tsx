import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AtomTag from "./index";
import { fireEvent } from "@storybook/test";

describe("COMPONENTS / ATOMS / TAG", () => {
  describe("RENDER TESTING", () => {
    it("should render without error", () => {
      const { container } = render(<AtomTag>Some Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toBeInTheDocument();
    });
  });

  describe("VARIANT TESTING", () => {
    it("should have 'bs_tag--variant_neutral' as default className", () => {
      const { container } = render(<AtomTag>Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("bs_tag--variant_neutral");
    });

    it("should contain 'bs_tag--variant_neutral' when 'variant' prop is 'neutral'", () => {
      const { container } = render(<AtomTag variant="neutral">Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("bs_tag--variant_neutral");
    });

    it("should contain 'bs_tag--variant_primary' when 'variant' prop is 'primary'", () => {
      const { container } = render(<AtomTag variant="primary">Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("bs_tag--variant_primary");
    });

    it("should contain 'bs_tag--variant_success' when 'variant' prop is 'success'", () => {
      const { container } = render(<AtomTag variant="success">Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("bs_tag--variant_success");
    });

    it("should contain 'bs_tag--variant_warning' when 'variant' prop is 'warning'", () => {
      const { container } = render(<AtomTag variant="warning">Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("bs_tag--variant_warning");
    });

    it("should contain 'bs_tag--variant_danger' when 'variant' prop is 'danger'", () => {
      const { container } = render(<AtomTag variant="danger">Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("bs_tag--variant_danger");
    });
  });

  describe("SIZE TESTING", () => {
    it("should have 'bs_tag--size_m' as default className", () => {
      const { container } = render(<AtomTag>Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("bs_tag--size_m");
    });

    it("should contain 'bs_tag--size_l' when 'variant' prop is 'L'", () => {
      const { container } = render(<AtomTag size="L">Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("bs_tag--size_l");
    });

    it("should contain 'bs_tag--size_m' when 'variant' prop is 'M'", () => {
      const { container } = render(<AtomTag size="M">Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("bs_tag--size_m");
    });

    it("should contain 'bs_tag--size_s' when 'variant' prop is 'S'", () => {
      const { container } = render(<AtomTag size="S">Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("bs_tag--size_s");
    });
  });

  describe("FUNCTION TESTING", () => {
    it("should applied custom className when 'className' prop is provided", () => {
      const { container } = render(
        <AtomTag className="customClassName">Text</AtomTag>
      );

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("customClassName");
    });

    it("should NOT disabled when 'disabled' prop is false", () => {
      const { container } = render(<AtomTag>Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).not.toHaveClass("bs_tag--disabled");
    });

    it("should disabled when 'disabled' prop is true", () => {
      const { container } = render(<AtomTag disabled>Text</AtomTag>);

      const element = container.querySelector(".bs_tag");

      expect(element).toHaveClass("bs_tag--disabled");
    });

    it("should disabled when 'disabled' prop is true", () => {
      const onClick = jest.fn();

      const { container, getByText } = render(
        <AtomTag onClick={onClick}>Text</AtomTag>
      );

      const element = container.querySelector(".bs_tag");

      fireEvent.click(element);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
