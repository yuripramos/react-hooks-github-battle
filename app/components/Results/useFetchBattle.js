import { useEffect } from "react";
import { battle } from "../../utils/api";
import queryString from "query-string";
import { useResultReducer } from "../../reducer/results";

const useFetchBattle = ({ location }) => {
  const { playerOne, playerTwo } = queryString.parse(location.search);

  const { resultReducer: state, setWinner, setError } = useResultReducer();

  useEffect(() => {
    battle([playerOne, playerTwo])
      .then((players) => {
        setWinner(players);
      })
      .catch(({ message }) => {
        setError(message);
      });
  }, [playerOne, playerTwo]);

  return {
    state,
  };
};

export default useFetchBattle;
