import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Popular from '../Popular';

describe("<Popular />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    expect(() => {
      render(<Popular />);
    }).not.toThrow();
  });
});