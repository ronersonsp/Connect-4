import React from 'react';
import Button from '../shared/components/Button';
import playerVsCpuIcon from '../assets/img/player-vs-cpu.svg';
import playerVsPlayerIcon from '../assets/img/player-vs-player.svg';
import Logo from '../assets/img/logo.svg';
import { GameContext } from '../features/Game/context/GameContext';

const Home = () => {
  const { chooseMode } = React.useContext(GameContext)

  return (
    <div className='md:w-md h-full mx-auto p-4 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-16 md:gap-20 p-16 rounded-4xl shadow-[0px_10px_0px_0px_rgba(0,0,0,1)] border-3 border-black bg-roxo'>
        <img src={Logo} alt='' />
        <div className='flex flex-col gap-6 md:gap-8 w-full items-center'>
          <Button
            text='Play vs CPU'
            background='bg-red-400'
            textColor='text-white'
            src={playerVsCpuIcon}
            onClick={() => console.log('modal here')}
          />
          <Button
            text='Play vs Player'
            background='bg-amber-200'
            src={playerVsPlayerIcon}
            onClick={() => chooseMode('player')}
          />
          <Button text='Game Rules' background='bg-gray-50' />
        </div>
      </div>
    </div>
  );
};

export default Home;
