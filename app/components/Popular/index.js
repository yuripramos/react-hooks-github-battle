import React, { useState, useEffect, useRef } from "react";
import { fetchPopularRepos } from "../../utils/api";
import Loading from "../Loading";
import { usePopularReducer } from "../../reducer/popular";
import LanguagesNav from "./LanguagesNav";
import ReposGrid from "./ReposGrid";

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const {
    popularReducer: state,
    setSuccessFetchItems,
    setErrorFetchItems,
  } = usePopularReducer();

  const fetchedLanguages = useRef([]);

  useEffect(() => {
    if (fetchedLanguages.current.includes(selectedLanguage) === false) {
      fetchedLanguages.current.push(selectedLanguage);

      fetchPopularRepos(selectedLanguage)
        .then((repos) => setSuccessFetchItems(selectedLanguage, repos))
        .catch((e) => setErrorFetchItems(e));
    }
  }, [state, selectedLanguage]);

  const isLoading = () => !state[selectedLanguage] && state.error === null;
  return (
    <>
      <LanguagesNav
        selected={selectedLanguage}
        onUpdateLanguage={(language) => setSelectedLanguage(language)}
      />

      {isLoading() && <Loading text="Fetching Repos" />}

      {state.error && <p className="center-text error">{state.error}</p>}

      {state[selectedLanguage] && <ReposGrid repos={state[selectedLanguage]} />}
    </>
  );
};

export default Popular;
