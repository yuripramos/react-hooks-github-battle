import React from "react";
import { render } from "@testing-library/react";
import Results from "./index";
import ProfileList from "./ProfileList";

describe("<Results />", () => {
  const requiredProps = {
    location: {
      search: "user-settings",
    },
  };

  it("Render component correctly", () => {
    expect(() => {
      render(<Results {...requiredProps} />);
    }).not.toThrow();
  });
});

describe("<ProfileList />", () => {
  const requiredProps = {
    profile: {
      name: "Yuri Ramos",
      location: "Barcelona, Spain",
      company: "XYZ",
      followers: 125,
      following: 10,
    },
  };

  it("Render component correctly", () => {
    expect(() => {
      render(<ProfileList {...requiredProps} />);
    }).not.toThrow();
  });
});
