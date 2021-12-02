import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./index";

describe("<Loading />", () => {
  it("", () => {
    render(<Loading />);

    expect(screen.getByText("Loading")).toBeDefined();
  });
});
