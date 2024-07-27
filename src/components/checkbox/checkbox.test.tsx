import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AtomCheckbox from "./index";
import { renderToReadableStream } from "react-dom/server";

describe("COMPONENTS / ATOMS / CHECKBOX", () => {
  describe("RENDER TESTING", () => {
    it("should render without error", () => {
      const { container } = render(<AtomCheckbox />);

      const element = container.querySelector(".bs_checkbox");

      expect(element).toBeInTheDocument();
    });
  });

  describe("VARIANT TESTING", () => {
    it("should have 'bs_checkbox--check--check' as default className", () => {
      const { container } = render(<AtomCheckbox checked variant="check" />);

      const element = container.getElementsByClassName("bs_checkbox--check")[0];

      expect(element?.firstChild).toHaveClass("bs_checkbox--check--check");
    });

    it("should contain 'bs_checkbox--check--check' className when 'variant' prop is 'check'", () => {
      const { container } = render(<AtomCheckbox checked />);

      const element = container.getElementsByClassName("bs_checkbox--check")[0];

      expect(element?.firstChild).toHaveClass("bs_checkbox--check--check");
    });

    it("should contain 'bs_checkbox--check--dot' className when 'variant' prop is 'dot'", () => {
      const { container } = render(<AtomCheckbox checked variant="dot" />);

      const element = container.getElementsByClassName("bs_checkbox--check")[0];

      expect(element?.firstChild).toHaveClass("bs_checkbox--check--dot");
    });
  });

  describe("FUNCTION TESTING", () => {
    it("should applied custom className when 'className' prop is provided", () => {
      const { container } = render(
        <AtomCheckbox className="customClassName" />
      );

      const element = container.querySelector(".bs_checkbox");

      expect(element).toHaveClass("customClassName");
    });

    it("should disabled when 'disabled' prop is true", () => {
      const { container } = render(<AtomCheckbox disabled />);

      const element = container.querySelector(".bs_checkbox");

      expect(element).toHaveClass("bs_checkbox--disabled");
    });

    it("should NOT disabled when 'disabled' prop is true", () => {
      const { container } = render(<AtomCheckbox disabled={false} />);

      const element = container.querySelector(".bs_checkbox");

      expect(element).not.toHaveClass("bs_checkbox--disabled");
    });

    it("can run function provided via 'onChange' prop when user click component", () => {
      let value = false;

      const onChange = () => {
        value = true;
      };

      const { container } = render(<AtomCheckbox onChange={onChange} />);

      const element = container.querySelector(".bs_checkbox--check");

      fireEvent.click(element);

      expect(value).toBe(true);
    });

    it("can NOT run function provided via 'onChange' prop when user click component while 'disabled' prop is true", () => {
      let value = false;

      const onChange = () => {
        value = true;
      };

      const { container } = render(
        <AtomCheckbox onChange={onChange} disabled />
      );

      const element = container.querySelector(".bs_checkbox--check");

      fireEvent.click(element);

      expect(value).not.toBe(true);
    });

    it("should applied 'id' when 'id' prop is provided", () => {
      const { container } = render(<AtomCheckbox id="customID" />);

      const element = container.querySelector("input");

      expect(element).toHaveAttribute("id", "customID");
    });

    it("should applied 'name' when 'name' prop is provided", () => {
      const { container } = render(<AtomCheckbox name="customName" />);

      const element = container.querySelector("input");

      expect(element).toHaveAttribute("name", "customName");
    });
  });
});
