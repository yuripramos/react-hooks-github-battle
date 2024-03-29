import React, { useContext, useState } from 'react';
import { themeContext } from '../../contexts/theme';

export const usePlayerHandler = () => {
  const [username, setUsername] = useState<string>('');
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  const theme = useContext(themeContext);

  const handleSubmit = (id: string, player: any) => (id === 'playerOne' ? setPlayerOne(player) : setPlayerTwo(player));

  const handleReset = (id: string) => (id === 'playerOne' ? setPlayerOne(null) : setPlayerTwo(null));

  const handleSubmitUsername = ({ event, onSubmit }) => {
    event.preventDefault();
    onSubmit(username);
  };

  const handleChangeUsername = (event) => setUsername((event.target as HTMLInputElement).value);

  return {
    handleReset,
    handleSubmit,
    theme,
    handleSubmitUsername,
    handleChangeUsername,
    username,
    playerOne,
    playerTwo,
  };
};

export default usePlayerHandler;
