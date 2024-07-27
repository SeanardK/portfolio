import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageTesting from "@/app/testing/page";

describe("PAGE / TESTING", () => {
  describe("RENDER TESTING", () => {
    it("should render without error", () => {
      const { container } = render(<PageTesting />);

      expect(container).toBeInTheDocument();
    });
  });
});
