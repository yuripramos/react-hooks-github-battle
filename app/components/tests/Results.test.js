import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Results from '../Results';

describe("<Results />", () => {
  afterEach(cleanup);

  const requiredProps = {
    location: {
      search: 'user-settings'
    }
  };

  it("Render component correctly", () => {
    expect(() => {
      render(<Results {...requiredProps} />);
    }).not.toThrow();
  });
});