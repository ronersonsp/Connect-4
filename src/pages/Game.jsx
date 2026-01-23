import React from 'react';
import GameHeader from '../features/Game/components/GameHeader';
import GameContent from '../features/Game/components/GameContent';
import ScoreBoard from '../features/player/components/ScoreBoard';

const Game = () => {
  return (
    <>
      <GameHeader />
      <ScoreBoard />
      <GameContent />
    </>
  );
};

export default Game;
