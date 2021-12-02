import React from "react";
import Card from "../../../components/Card";
import Loading from "../../../components/Loading";
import Link from "next/link";
import ProfileList from "./ProfileList";
import useFetchBattle from "./useFetchBattle";

const Results = () => {
  const { state } = useFetchBattle();

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
      <Link href="/battle">
        <span className="btn dark-btn btn-space"> Reset </span>
      </Link>
    </>
  );
};

export default Results;
