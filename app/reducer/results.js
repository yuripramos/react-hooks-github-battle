import { useReducer } from "react";

const stateReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        winner: action.winner,
        loser: action.loser,
        error: null,
        loading: false,
      };
    case "ERROR":
      return {
        ...state,
        error: action.message,
        loading: false,
      };
    default:
      return state;
  }
};

const defaultState = {
  winner: null,
  loser: null,
  error: null,
  loading: true,
};

export const useResultReducer = () => {
  const [resultReducer, dispatch] = useReducer(stateReducer, defaultState);

  const setWinner = (players) =>
    dispatch({ type: "SUCCESS", winner: players[0], loser: players[1] });

  const setError = (message) => dispatch({ type: "ERROR", message });

  return { resultReducer, setWinner, setError };
};
