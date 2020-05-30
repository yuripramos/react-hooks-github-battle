import { useReducer } from 'react';


function stateReducer(state, action) {
  switch (action.type) {
    case 'success':
      return {
        ...state,
        [action.selectedLanguage]: action.repos,
        error: null
      }
    case 'error':
      return {
        ...state,
        error: action.error.message
      }
    default:
      return state;
  }
}

const defaultState = {
  error: null
};

export const usePopularReducer = () => {
  const [popularReducer, dispatch] = useReducer(stateReducer, defaultState);

  const setSuccessFetchItems = (selectedLanguage, repos) => dispatch({ type: 'success', selectedLanguage, repos })

  const setErrorFetchItems = error => dispatch({ type: 'error', error })

  return { popularReducer, setSuccessFetchItems, setErrorFetchItems }
};