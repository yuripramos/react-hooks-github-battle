import React, { MouseEventHandler } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import usePlayerHandler from './usePlayerHandler';

export function PlayerPreview({
  username,
  onReset,
  label,
}: {
  username: string;
  onReset: (username: string) => void;
  label: string;
}) {
  const { theme } = usePlayerHandler();

  return (
    <div className="column player">
      <h3 className="player-label">{label}</h3>
      <div className={`row bg-${theme}`}>
        <div className="player-info">
          <img
            className="avatar-small"
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a href={`https://github.com/${username}`} className="link">
            {username}
          </a>
        </div>
        <button className="btn-clear flex-center" onClick={onReset as any}>
          <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
        </button>
      </div>
    </div>
  );
}

export default PlayerPreview;
