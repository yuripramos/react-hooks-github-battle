import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./index";

describe("<Nav />", () => {
  it("", () => {
    render(
      <BrowserRouter>
        <Nav />)
      </BrowserRouter>
    );

    expect(screen.getByText("Popular")).toBeDefined();
    expect(screen.getByText("Battle")).toBeDefined();
  });
});
