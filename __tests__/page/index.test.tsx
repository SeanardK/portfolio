import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("PAGE / LANDING PAGE", () => {
  describe("RENDER TESTING", () => {
    it("should render without error", () => {
      const { container } = render(<Home />);

      expect(container).toBeInTheDocument();
    });
  });
});
