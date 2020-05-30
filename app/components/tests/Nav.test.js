import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Nav from '../Nav';

describe("<Nav />", () => {
  afterEach(cleanup);
  it("Render component correctly", () => {
    expect(() => {
      render(<Nav />);
    }).toBeDefined();
  });
});