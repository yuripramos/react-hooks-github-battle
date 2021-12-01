import React from "react";
import { render, cleanup } from "@testing-library/react";
import Tooltip from "./index";

describe("<Tooltip />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    expect(() => {
      render(<Tooltip />);
    }).not.toThrow();
  });
});
