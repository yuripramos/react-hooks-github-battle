import React, { useEffect } from "react";
import { battle } from "../../utils/api";
import Card from "../Card";
import Loading from "../Loading";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { useResultReducer } from "../../reducer/results";
import ProfileList from "./ProfileList";

const Results = ({ location }) => {
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

  const { winner, loser, error, loading } = state;

  if (loading === true) {
    return <Loading text="Battling" />;
  }

  if (error) {
    return <p className="center-text error">{error}</p>;
  }

  return (
    <>
      <div className="grid space-around container-sm">
        <Card
          header={winner.score === loser.score ? "Tie" : "Winner"}
          subheader={`Score: ${winner.score.toLocaleString()}`}
          avatar={winner.profile.avatar_url}
          href={winner.profile.html_url}
          name={winner.profile.login}
        >
          <ProfileList profile={winner.profile} />
        </Card>
        <Card
          header={winner.score === loser.score ? "Tie" : "Loser"}
          subheader={`Score: ${loser.score.toLocaleString()}`}
          avatar={loser.profile.avatar_url}
          name={loser.profile.login}
          href={loser.profile.html_url}
        >
          <ProfileList profile={loser.profile} />
        </Card>
      </div>
      <Link to="/battle" className="btn dark-btn btn-space">
        Reset
      </Link>
    </>
  );
};

export default Results;
