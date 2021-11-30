import React, { useState } from "react";
import { Link } from "react-router-dom";
import Instructions from "./Instructions";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

export const Battle = () => {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  const handleSubmit = (id, player) =>
    id === "playerOne" ? setPlayerOne(player) : setPlayerTwo(player);

  const handleReset = (id) =>
    id === "playerOne" ? setPlayerOne(null) : setPlayerTwo(null);

  return (
    <>
      <Instructions />
      FOR REAL
      <div className="players-container">
        <h1 className="center-text header-lg">Players</h1>
        <div className="row space-around">
          {playerOne === null ? (
            <PlayerInput
              label="Player One"
              onSubmit={(player) => handleSubmit("playerOne", player)}
            />
          ) : (
            <PlayerPreview
              username={playerOne}
              label="Player One"
              onReset={() => handleReset("playerOne")}
            />
          )}

          {playerTwo === null ? (
            <PlayerInput
              label="Player Two"
              onSubmit={(player) => handleSubmit("playerTwo", player)}
            />
          ) : (
            <PlayerPreview
              username={playerTwo}
              label="Player Two"
              onReset={() => handleReset("playerTwo")}
            />
          )}
        </div>

        {playerOne && playerTwo && (
          <Link
            className="btn dark-btn btn-space"
            to={{
              pathname: "/battle/results",
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
            }}
          >
            Battle
          </Link>
        )}
      </div>
    </>
  );
};

export default Battle;
