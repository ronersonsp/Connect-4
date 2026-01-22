import React from 'react';
import GameDisc from './GameDisc';

const GameGrid = () => {
  const linhas = 6;
  const colunas = 7;
  const qtdTotal = linhas * colunas;
  const shadowOffset = 12;

  return (
    <div
      className='bg-white h-160 w-160 rounded-4xl border-3 border-black
    shadow-[0px_10px_0px_0px_rgba(0,0,0,1)] grid p-4 relative'
      style={{
        gridTemplateColumns: `repeat(${colunas}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${linhas}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: qtdTotal }).map((_, index) => {
        const linhaAtual = Math.floor(index / colunas);
        const linhaInvertida = (linhas - 1 - linhaAtual) * 1.5;

        return (
          <GameDisc
            key={index}
            style={{
              boxShadow: `inset 0px ${
                shadowOffset - linhaAtual
              }px 0px 0px rgba(0,0,0,1), inset 0px -${
                shadowOffset - linhaInvertida
              }px 0px 0px rgba(0,0,0,1)`,
            }}
            // onClick={discLogic}
          />
        );
      })}
    </div>
  );
};

export default GameGrid;
