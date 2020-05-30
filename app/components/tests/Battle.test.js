import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Battle from '../Battle';

describe("<Battle />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    expect(() => {
      render(<Battle />);
    }).not.toThrow();
  });
});