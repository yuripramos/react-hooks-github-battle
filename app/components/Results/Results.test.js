import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Results, { ProfileList } from '../Results';

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

describe("<ProfileList />", () => {
  afterEach(cleanup);

  const requiredProps = {
    profile: {
      name: "Yuri Ramos",
      location: "Barcelona, Spain",
      company: "I work for myself",
      followers: 125,
      following: 10
    }
  };

  it("Render component correctly", () => {
    expect(() => {
      render(<ProfileList {...requiredProps} />);
    }).not.toThrow();
  });
});