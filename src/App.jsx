import React from 'react';
import { GameContext, GameStorage } from './context/GameContext';
import Home from './pages/Home';
import Game from './pages/Game';

function App() {

  return (
    <main className='bg-roxoFundo h-screen w-screen'>
      <GameStorage>
        <AppContent />
      </GameStorage>
    </main>
  )
}

function AppContent() {
const { page } = React.useContext(GameContext);

  return (
    <>
      {page === 'home' && <Home />}
      {page === 'game' && <Game />}
    </>
  )
}

export default App
