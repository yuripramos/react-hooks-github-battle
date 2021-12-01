import React from "react";
import { render, cleanup } from "@testing-library/react";
import Loading from "./index";

describe("<Loading />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    expect(() => {
      render(<Loading />);
    }).not.toThrow();
  });
});
