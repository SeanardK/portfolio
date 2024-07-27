import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AtomRadio from "./index";
import { renderToReadableStream } from "react-dom/server";

describe("COMPONENTS / ATOMS / CHECKBOX", () => {
  describe("RENDER TESTING", () => {
    it("should render without error", () => {
      const { container } = render(<AtomRadio />);

      const element = container.querySelector(".bs_radio");

      expect(element).toBeInTheDocument();
    });
  });

  describe("FUNCTION TESTING", () => {
    it("should applied custom className when 'className' prop is provided", () => {
      const { container } = render(<AtomRadio className="customClassName" />);

      const element = container.querySelector(".bs_radio");

      expect(element).toHaveClass("customClassName");
    });

    it("should disabled when 'disabled' prop is true", () => {
      const { container } = render(<AtomRadio disabled />);

      const element = container.querySelector(".bs_radio");

      expect(element).toHaveClass("bs_radio--disabled");
    });

    it("should NOT disabled when 'disabled' prop is true", () => {
      const { container } = render(<AtomRadio disabled={false} />);

      const element = container.querySelector(".bs_radio");

      expect(element).not.toHaveClass("bs_radio--disabled");
    });

    it("can run function provided via 'onChange' prop when user click component", () => {
      let value = false;

      const onChange = () => {
        value = true;
      };

      const { container } = render(<AtomRadio onChange={onChange} />);

      const element = container.querySelector(".bs_radio--check");

      fireEvent.click(element);

      expect(value).toBe(true);
    });

    it("can NOT run function provided via 'onChange' prop when user click component while 'disabled' prop is true", () => {
      let value = false;

      const onChange = () => {
        value = true;
      };

      const { container } = render(<AtomRadio onChange={onChange} disabled />);

      const element = container.querySelector(".bs_radio--check");

      fireEvent.click(element);

      expect(value).not.toBe(true);
    });

    it("should applied 'id' when 'id' prop is provided", () => {
      const { container } = render(<AtomRadio id="customID" />);

      const element = container.querySelector("input");

      expect(element).toHaveAttribute("id", "customID");
    });

    it("should applied 'name' when 'name' prop is provided", () => {
      const { container } = render(<AtomRadio name="customName" />);

      const element = container.querySelector("input");

      expect(element).toHaveAttribute("name", "customName");
    });
  });
});
