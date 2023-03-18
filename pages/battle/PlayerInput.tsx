import React from 'react';
import usePlayerHandler from './usePlayerHandler';

export const PlayerInput = ({ onSubmit, label }: { onSubmit: (id: string, player: any) => void; label: string }) => {
  const { theme, handleSubmitUsername, handleChangeUsername, username } = usePlayerHandler();

  return (
    <form className="column player" onSubmit={(event) => handleSubmitUsername({ event, onSubmit })}>
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
        <button className={`btn ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`} type="submit" disabled={!username}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default PlayerInput;
