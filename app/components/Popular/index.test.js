import React from "react";
import { render } from "@testing-library/react";
import Popular from ".";
import LanguagesNav from "./LanguagesNav";
import ReposGrid from "./ReposGrid";

describe("<Popular />", () => {
  it("Render component correctly", () => {
    expect(() => {
      render(<Popular />);
    }).not.toThrow();
  });
});

describe("<LanguagesNav />", () => {
  it("Render component correctly", () => {
    const requiredProps = {
      selected: "All",
      onUpdateLanguage: () => {},
    };

    expect(() => {
      render(<LanguagesNav {...requiredProps} />);
    }).not.toThrow();
  });
});

describe("<ReposGrid />", () => {
  const requiredProps = {
    repos: [
      {
        name: "CAC/LTV",
        owner: {},
        html_url: "http://wwww.cactv.microsfot.com",
        stargazers_count: 21124,
        forks: 2214,
        open_issues: 214,
      },
      {
        name: "How to travel the world",
        owner: {},
        html_url: "http://wwww.cactv.microsfot.com",
        stargazers_count: 21124,
        forks: 2214,
        open_issues: 200,
      },
    ],
  };

  it("Render component correctly", () => {
    expect(() => {
      render(<ReposGrid {...requiredProps} />);
    }).not.toThrow();
  });
});
