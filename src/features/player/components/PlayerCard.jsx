import React from 'react'

const PlayerCard = ({player = 'owner', mode}) => {
  let playerName;

  if (mode === 'cpu') {
    playerName = 'CPU'
  } else {
    playerName = player === 'owner' ? 'PLAYER 1' : 'PLAYER 2'
  }

  return (
    <div className='text-center bg-white
    py-4 px-10 rounded-2xl md:text-2xl font-bold
    efeito-sombra'>
      <h3>{playerName}</h3>
      <span>0</span>
    </div>
  )
}

export default PlayerCard