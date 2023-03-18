import { useReducer } from 'react';

type Actions = { type: 'SUCCESS'; selectedLanguage: string; repos: any[] } | { type: 'ERROR'; error: Error };

function stateReducer(state: any, action: Actions) {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        [action.selectedLanguage]: action.repos,
        error: null,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.error.message,
      };
    default:
      return state;
  }
}

const defaultState = {
  error: null,
};

export const usePopularReducer = () => {
  const [popularReducer, dispatch] = useReducer(stateReducer, defaultState);

  const setSuccessFetchItems = (selectedLanguage, repos) => dispatch({ type: 'SUCCESS', selectedLanguage, repos });

  const setErrorFetchItems = (error) => dispatch({ type: 'ERROR', error });

  return { popularReducer, setSuccessFetchItems, setErrorFetchItems };
};
