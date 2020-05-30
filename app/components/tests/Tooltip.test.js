import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Tooltip from '../Tooltip';

describe("<Tooltip />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    expect(() => {
      render(<Tooltip />);
    }).not.toThrow();
  });
});