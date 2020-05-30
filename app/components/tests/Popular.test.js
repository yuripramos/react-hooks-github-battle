import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Popular, { LanguagesNav, ReposGrid } from '../Popular';

describe("<Popular />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    expect(() => {
      render(<Popular />);
    }).not.toThrow();
  });
});

describe("<LanguagesNav />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    const requiredProps = {
      selected: "All",
      onUpdateLanguage: () => { }
    };

    expect(() => {
      render(<LanguagesNav {...requiredProps} />);
    }).not.toThrow();
  });
});

describe("<ReposGrid />", () => {
  afterEach(cleanup);
  const requiredProps = {
    repos: [
      {
        name: "CAC/LTV",
        owner: {},
        html_url: "http://wwww.cactv.microsfot.com",
        stargazers_count: 21124,
        forks: 2214,
        open_issues: 214
      },
      {
        name: "How to travel the world",
        owner: {},
        html_url: "http://wwww.cactv.microsfot.com",
        stargazers_count: 21124,
        forks: 2214,
        open_issues: 200
      }
    ]
  }

  it("Render component correctly", () => {
    expect(() => {
      render(<ReposGrid {...requiredProps} />);
    }).not.toThrow();
  });
});