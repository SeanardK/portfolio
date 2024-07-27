import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AtomButton from "./index";

describe("COMPONENTS / ATOMS / BUTTON", () => {
  describe("RENDER TESTING", () => {
    it("should render without error", () => {
      const { container } = render(<AtomButton>Click Me!</AtomButton>);

      expect(container).toBeInTheDocument();
    });

    it("should render 'children' provided via 'children' prop", () => {
      const { getByText } = render(
        <AtomButton variant="primary">Click Me!</AtomButton>
      );

      const element = getByText("Click Me!");

      expect(element).toBeInTheDocument();
    });

    it("should render LeftIcon when 'LeftIcon' prop is provided", () => {
      const Icon = () => <div>Test Icon</div>;

      const { getByText } = render(
        <AtomButton LeftIcon={<Icon />}>Click Me!</AtomButton>
      );

      const element = getByText("Test Icon");

      expect(element).toBeInTheDocument();
    });

    it("should render RightIcon when 'RightIcon' prop is provided", () => {
      const Icon = () => <div>Test Icon</div>;

      const { getByText } = render(
        <AtomButton RightIcon={<Icon />}>Click Me!</AtomButton>
      );

      const element = getByText("Test Icon");

      expect(element).toBeInTheDocument();
    });
  });

  describe("VARIANT TESTING", () => {
    it("should have 'bs_button--variant_primary' as default className", () => {
      const { container } = render(<AtomButton>Click Me!</AtomButton>);

      const element = container.querySelector("button");

      expect(element).toHaveClass("bs_button--variant_primary");
    });

    it("should contain 'bs_button--variant_primary' className when 'variant' prop is 'primary'", () => {
      const { container } = render(
        <AtomButton variant="primary">Click Me!</AtomButton>
      );

      const element = container.querySelector("button");

      expect(element).toHaveClass("bs_button--variant_primary");
    });

    it("should contain 'bs_button--variant_secondary' className when 'variant' prop is 'secondary'", () => {
      const { container } = render(
        <AtomButton variant="secondary">Click Me!</AtomButton>
      );

      const element = container.querySelector("button");

      expect(element).toHaveClass("bs_button--variant_secondary");
    });

    it("should contain 'bs_button--variant_outline' className when 'variant' prop is 'outline'", () => {
      const { container } = render(
        <AtomButton variant="outline">Click Me!</AtomButton>
      );

      const element = container.querySelector("button");

      expect(element).toHaveClass("bs_button--variant_outline");
    });

    it("should contain 'bs_button--variant_transparent1' className when 'variant' prop is 'transparent1'", () => {
      const { container } = render(
        <AtomButton variant="transparent1">Click Me!</AtomButton>
      );

      const element = container.querySelector("button");

      expect(element).toHaveClass("bs_button--variant_transparent1");
    });

    it("should contain 'bs_button--variant_transparent2' className when 'variant' prop is 'transparent2'", () => {
      const { container } = render(
        <AtomButton variant="transparent2">Click Me!</AtomButton>
      );

      const element = container.querySelector("button");

      expect(element).toHaveClass("bs_button--variant_transparent2");
    });
  });

  // Size Testing
  describe("SIZE TESTING", () => {
    it("should have 'bs_button--size_m' as default className", () => {
      const { container } = render(<AtomButton>Click Me!</AtomButton>);

      const element = container.querySelector("button");

      expect(element).toHaveClass("bs_button--size_m");
    });

    it("should contain 'bs_button--size_l' className when 'size' prop is 'L'", () => {
      const { container } = render(<AtomButton size="L">Click Me!</AtomButton>);

      const element = container.querySelector("button");

      expect(element).toHaveClass("bs_button--size_l");
    });

    it("should contain 'bs_button--size_m' className when 'size' prop is 'M'", () => {
      const { container } = render(<AtomButton size="M">Click Me!</AtomButton>);

      const element = container.querySelector("button");

      expect(element).toHaveClass("bs_button--size_m");
    });

    it("should contain 'bs_button--size_s' className when 'size' prop is 'S'", () => {
      const { container } = render(<AtomButton size="S">Click Me!</AtomButton>);

      const element = container.querySelector("button");

      expect(element).toHaveClass("bs_button--size_s");
    });
  });

  // Function Testing
  describe("FUNCTION TESTING", () => {
    it("should applied custom 'className' provided via 'className' prop", () => {
      const { container } = render(
        <AtomButton className="custom-className">Click Me!</AtomButton>
      );

      const element = container.querySelector("button");

      expect(element).toHaveClass("custom-className");
    });

    it("should have type 'button' as default type", () => {
      const { container } = render(<AtomButton>Click Me!</AtomButton>);

      const element = container.querySelector("button");

      expect(element).toHaveAttribute("type", "button");
    });

    it("should have type 'button' when 'type' prop is 'button'", () => {
      const { container } = render(
        <AtomButton type="button">Click Me!</AtomButton>
      );

      const element = container.querySelector("button");

      expect(element).toHaveAttribute("type", "button");
    });

    it("should have type 'submit' when 'type' prop is 'submit'", () => {
      const { container } = render(
        <AtomButton type="submit">Click Me!</AtomButton>
      );

      const element = container.querySelector("button");

      expect(element).toHaveAttribute("type", "submit");
    });

    it("should have type 'reset' when 'type' prop is 'reset'", () => {
      const { container } = render(
        <AtomButton type="reset">Click Me!</AtomButton>
      );

      const element = container.querySelector("button");

      expect(element).toHaveAttribute("type", "reset");
    });

    it("should NOT disable when 'disabled' prop is false", () => {
      const { container } = render(<AtomButton>Click Me!</AtomButton>);

      const element = container.querySelector("button");

      expect(element).not.toBeDisabled();
    });

    it("should disable when 'disabled' prop is true", () => {
      const { container } = render(<AtomButton disabled>Click Me!</AtomButton>);

      const element = container.querySelector("button");

      expect(element).toBeDisabled();
    });

    it("should NOT contain 'bs_button--loading' when 'isLoading' prop is false", () => {
      const { container } = render(<AtomButton>Click Me!</AtomButton>);

      const element = container.querySelector("button");
      const spinner = container.querySelector(".loader");

      expect(element).not.toHaveClass("bs_button--loading");
      expect(spinner).not.toBeInTheDocument();
    });

    it("should contain 'bs_button--loading' when 'isLoading' prop is true", () => {
      const { container } = render(
        <AtomButton isLoading>Click Me!</AtomButton>
      );

      const element = container.querySelector("button");
      const spinner = container.querySelector(".loader");

      expect(element).toHaveClass("bs_button--loading");
      expect(spinner).toBeInTheDocument();
    });

    it("can run function provided via 'onClick' prop when user click button", () => {
      const onClick = jest.fn();

      const { getByText } = render(
        <AtomButton onClick={onClick}>Click Me!</AtomButton>
      );

      const element = getByText("Click Me!");

      fireEvent.click(element);

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
