import React from 'react';

export const GameContext = React.createContext();

export const GameStorage = ({ children }) => {
  const [page, setPage] = React.useState('home');
  const [mode, setMode] = React.useState(null);
  const [currentPlayer, setCurrentPlayer] = React.useState(null);
  const [timer, setTimer] = React.useState(null);
  const [level, setLevel] = React.useState(null);

  function chooseMode(modeSelected, levelSelected) {
    if(modeSelected === 'cpu' || modeSelected === 'player') setPage('game')
    setMode(modeSelected);
    if (levelSelected) setLevel(levelSelected)
    console.log(mode)
    console.log(levelSelected)
  }

  return (
    <GameContext.Provider
      value={{
        page,
        setPage,
        mode,
        setMode,
        currentPlayer,
        setCurrentPlayer,
        timer,
        setTimer,
        level,
        setLevel,
        chooseMode,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
