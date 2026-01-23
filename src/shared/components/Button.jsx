import React from 'react';

const Button = ({
  text,
  background,
  textColor = 'text-gray-900',
  textAlign = 'text-left',
  src,
  ...props
}) => {
  return (
    <button
      className={`flex h-15 md:h-18 w-60 md:w-96 justify-between items-center uppercase py-4 pb-4 px-4 rounded-2xl md:text-xl font-bold
      ${background} ${textColor} ${textAlign}
      efeito-sombra-button
    `}
    {...props}
    >
      {text}
      <img src={src} alt='' className='w-15 md:w-auto' />
    </button>
  );
};

export default Button;
