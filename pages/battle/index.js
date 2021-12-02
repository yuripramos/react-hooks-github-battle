import React from "react";
import Link from "next/link";
import Instructions from "./Instructions";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import usePlayerHandler from "./usePlayerHandler";

export const Battle = () => {
  const { handleReset, handleSubmit, playerOne, playerTwo } =
    usePlayerHandler();

  return (
    <>
      <Instructions />
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
            href={`/battle/results?playerOne=${playerOne}&playerTwo=${playerTwo}`}
          >
            <span className="btn dark-btn btn-space"> Battle </span>
          </Link>
        )}
      </div>
    </>
  );
};

export default Battle;
