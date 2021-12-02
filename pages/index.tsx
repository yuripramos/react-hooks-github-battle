import React from "react";
import Loading from "../components/Loading";
import LanguagesNav from "./LanguagesNav";
import ReposGrid from "./ReposGrid";
import useFetchRepos from "./useFetchRepos";

const Popular = () => {
  const { selectedLanguage, setSelectedLanguage, state, isLoading } =
    useFetchRepos();

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
