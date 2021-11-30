import { useEffect, useState, useRef } from "react";
import { usePopularReducer } from "../../reducer/popular";
import { fetchPopularRepos } from "../../utils/api";

const useFetchRepos = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const {
    popularReducer: state,
    setSuccessFetchItems,
    setErrorFetchItems,
  } = usePopularReducer();

  const fetchedLanguages = useRef([]);

  const isLoading = () => !state[selectedLanguage] && state.error === null;

  useEffect(() => {
    if (fetchedLanguages.current.includes(selectedLanguage) === false) {
      fetchedLanguages.current.push(selectedLanguage);

      fetchPopularRepos(selectedLanguage)
        .then((repos) => setSuccessFetchItems(selectedLanguage, repos))
        .catch((e) => setErrorFetchItems(e));
    }
  }, [state, selectedLanguage]);

  return {
    selectedLanguage,
    setSelectedLanguage,
    state,
    setSuccessFetchItems,
    setErrorFetchItems,
    isLoading,
  };
};

export default useFetchRepos;
