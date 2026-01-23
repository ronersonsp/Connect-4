import React from 'react'
import PlayerCard from './PlayerCard'
import { GameContext } from '../../Game/context/GameContext' 

const ScoreBoard = () => {
  const { mode } = React.useContext(GameContext)


  return (
    <div className='flex justify-between px-8 pb-4'>
      <PlayerCard />
      <PlayerCard player={mode} mode={mode}/>
    </div>
  )
}

export default ScoreBoard