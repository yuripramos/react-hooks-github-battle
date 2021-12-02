import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("<Card />", () => {
  it("", () => {
    const props = {
      header: "One Title",
      avatar: "http://www.imageshack.us/2421.jpg",
      href: "http://www.github.com/username",
      name: "username",
      children: <div>Hey</div>,
    };
    render(<Card {...props} />);

    expect(screen.getByText("One Title")).toBeDefined();
  });
});
