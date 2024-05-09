import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AtomAvatar from "./index";

describe("COMPONENTS / ATOMS / AVATAR", () => {
  describe("RENDER TESTING", () => {
    it("should render without error", () => {
      const { container } = render(<AtomAvatar name="Avatar" />);

      const element = container.querySelector(".bs_avatar");

      expect(element).toBeInTheDocument();
    });

    it("should render 'first letter' of the 'name' prop", () => {
      const { getByText } = render(<AtomAvatar name="Avatar" />);

      const element = getByText("A");

      expect(element).toBeInTheDocument();
    });

    it("should render 'first letter' from 'first' and 'last' word of the 'name' prop", () => {
      const { getByText } = render(
        <AtomAvatar name="Avatar Component Testing" />
      );

      const element = getByText("AT");

      expect(element).toBeInTheDocument();
    });
  });

  describe("VARIANT TESTING", () => {
    it("should have 'bs_avatar--variant_1' as default className", () => {
      const { container } = render(<AtomAvatar name="Avatar" />);

      const element = container.querySelector(".bs_avatar");

      expect(element).toHaveClass("bs_avatar--variant_1");
    });

    it("should contain 'bs_avatar--variant_1' when 'variant' prop is '1'", () => {
      const { container } = render(<AtomAvatar variant="1" name="Avatar" />);

      const element = container.querySelector(".bs_avatar");

      expect(element).toHaveClass("bs_avatar--variant_1");
    });

    it("should contain 'bs_avatar--variant_2' when 'variant' prop is '2'", () => {
      const { container } = render(<AtomAvatar variant="2" name="Avatar" />);

      const element = container.querySelector(".bs_avatar");

      expect(element).toHaveClass("bs_avatar--variant_2");
    });

    it("should contain 'bs_avatar--variant_3' when 'variant' prop is '3'", () => {
      const { container } = render(<AtomAvatar variant="3" name="Avatar" />);

      const element = container.querySelector(".bs_avatar");

      expect(element).toHaveClass("bs_avatar--variant_3");
    });

    it("should contain 'bs_avatar--variant_4' when 'variant' prop is '4'", () => {
      const { container } = render(<AtomAvatar variant="4" name="Avatar" />);

      const element = container.querySelector(".bs_avatar");

      expect(element).toHaveClass("bs_avatar--variant_4");
    });

    it("should contain 'bs_avatar--variant_5' when 'variant' prop is '5'", () => {
      const { container } = render(<AtomAvatar variant="5" name="Avatar" />);

      const element = container.querySelector(".bs_avatar");

      expect(element).toHaveClass("bs_avatar--variant_5");
    });

    it("should contain 'bs_avatar--variant_6' when 'variant' prop is '6'", () => {
      const { container } = render(<AtomAvatar variant="6" name="Avatar" />);

      const element = container.querySelector(".bs_avatar");

      expect(element).toHaveClass("bs_avatar--variant_6");
    });

    it("should contain 'bs_avatar--disabled' when 'disabled' prop is true", () => {
      const { container } = render(<AtomAvatar disabled name="Avatar" />);

      const element = container.querySelector(".bs_avatar");

      expect(element).toHaveClass("bs_avatar--disabled");
    });

    it("should NOT contain 'bs_avatar--disabled' when 'disabled' prop is false", () => {
      const { container } = render(<AtomAvatar name="Avatar" />);

      const element = container.querySelector(".bs_avatar");

      expect(element).not.toHaveClass("bs_avatar--disabled");
    });
  });
});
