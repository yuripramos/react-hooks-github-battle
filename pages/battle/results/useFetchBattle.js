import { useEffect } from "react";
import { battle } from "../../../utils/api";
import { useResultReducer } from "../../../reducer/results";
import { useRouter } from "next/router";

const useFetchBattle = () => {
  const {
    query: { playerOne, playerTwo },
  } = useRouter();

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
