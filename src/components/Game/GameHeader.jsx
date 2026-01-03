import React from 'react';
import Logo from '../../assets/img/logo.svg';

const GameHeader = () => {
  return (
    <nav
      className='container flex justify-between w-lg mx-auto items-center py-4
  [&_button]:px-4 [&_button]:py-2 

[&_button]:bg-slate-900/20 
[&_button]:hover:bg-slate-700/20
[&_button]:text-gray-50 
  [&_button]:uppercase 
  [&_button]:rounded-full 
  [&_button]:cursor-pointer 
  
  
  [&_button]:ring-1 
  [&_button]:ring-inset  
  [&_button]:ring-transparent 
[&_button]:hover:ring-slate-800 transition'
    >
      <button>Menu</button>
      <img src={Logo} alt='' />
      <button>Restart</button>
    </nav>
  );
};

export default GameHeader;
