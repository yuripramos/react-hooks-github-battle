import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Battle, { Instructions, PlayerInput, PlayerPreview } from '../Battle';

describe("<Battle />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    expect(() => {
      render(<Battle />);
    }).not.toThrow();
  });
});

describe("<Instructions />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    expect(() => {
      render(<Instructions />);
    }).not.toThrow();
  });
});

describe("<PlayerInput />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    expect(() => {
      render(<PlayerInput />);
    }).not.toThrow();
  });
});

describe("<PlayerPreview />", () => {
  afterEach(cleanup);

  const requiredProps = {
    username: "Athos",
    onReset: () => { },
    label: "Greece"
  }

  it("Render component correctly", () => {
    expect(() => {
      render(<PlayerPreview {...requiredProps} />);
    }).not.toThrow();
  });
});