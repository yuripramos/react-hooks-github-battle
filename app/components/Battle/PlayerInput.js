import React from "react";
import PropTypes from "prop-types";
import usePlayerHandler from "./usePlayerHandler";

export const PlayerInput = ({ onSubmit, label }) => {
  const { theme, handleSubmitUsername, handleChangeUsername, username } =
    usePlayerHandler();

  return (
    <form
      className="column player"
      onSubmit={(event) => handleSubmitUsername({ event, onSubmit })}
    >
      <label htmlFor="username" className="player-label">
        {label}
      </label>
      <div className="row player-inputs">
        <input
          type="text"
          id="username"
          className={`input-${theme}`}
          placeholder="github username"
          autoComplete="off"
          value={username}
          onChange={handleChangeUsername}
        />
        <button
          className={`btn ${theme === "dark" ? "light-btn" : "dark-btn"}`}
          type="submit"
          disabled={!username}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default PlayerInput;
