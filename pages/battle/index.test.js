import React from "react";
import { render, screen } from "@testing-library/react";
import Battle from "./index";
import Instructions from "./Instructions";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

describe("<Battle />", () => {
  it("", () => {
    render(<Battle />);

    expect(screen.getByText("Players")).toBeDefined();
  });
});

describe("<Instructions />", () => {
  it("", () => {
    render(<Instructions />);

    expect(screen.getByText("Enter two Github users")).toBeDefined();
  });
});

describe("<PlayerInput />", () => {
  it("", () => {
    render(<PlayerInput label="one label" />);

    expect(screen.getByText("one label")).toBeDefined();
  });
});

describe("<PlayerPreview />", () => {
  const requiredProps = {
    username: "Athos",
    onReset: () => {},
    label: "Greece",
  };

  it("", () => {
    render(<PlayerPreview {...requiredProps} />);

    expect(screen.getByText("Athos")).toBeDefined();
  });
});
