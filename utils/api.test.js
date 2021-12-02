import {
  getErrorMsg,
  getProfile,
  getRepos,
  getStarCount,
  calculateScore,
  getUserData,
  sortPlayers,
  battle,
  fetchPopularRepos
} from './api';
jest.mock('node-fetch');

import fetch, { Response } from 'node-fetch';

describe("Api Functions", () => {

  it("getErrorMsg", () => {
    expect(getErrorMsg('new error msg', 'Jamie')).toEqual('new error msg');
  });
  it("getProfile", () => {
    fetch.mockReturnValue(Promise.resolve(new Response('4')));

    const profile = getProfile('fakeName');

    expect(fetch).toHaveBeenCalledTimes(1);
    // expect(fetch).toHaveBeenCalledWith(`https://api.github.com/users/fakeName`, {
    //   method: 'GET',
    // });
    // expect(profile).toBe('4');
  });
});