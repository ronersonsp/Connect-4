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
    border-3 border-black
      shadow-[0px_10px_0px_0px_rgba(0,0,0,1)]        
      cursor-pointer'>
      <h3>{playerName}</h3>
      <span>0</span>
    </div>
  )
}

export default PlayerCard