import React from "react";
import { render } from "@testing-library/react";
import Tooltip from "./index";

describe("<Tooltip />", () => {
  it("Render component correctly", () => {
    expect(() => {
      render(<Tooltip />);
    }).not.toThrow();
  });
});
