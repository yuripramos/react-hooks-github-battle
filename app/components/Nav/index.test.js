import React from "react";
import { render } from "@testing-library/react";
import Nav from "./index";

describe("<Nav />", () => {
  it("Render component correctly", () => {
    expect(() => {
      render(<Nav />);
    }).toBeDefined();
  });
});
