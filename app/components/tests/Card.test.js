import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from '../Card';

describe("<Card />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    expect(() => {
      render(<Card />);
    }).not.toThrow();
  });
});