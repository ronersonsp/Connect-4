import React from 'react';

function GameDisc({ ...props }) {
  const [preenchido, setPreenchido] = React.useState(false);

  function discLogic(event) {
    setPreenchido(true);
    const elementTop = event.currentTarget.getBoundingClientRect().top;
    const child = event.currentTarget.children[0];
    child.style.top = `${elementTop - 95}px`;
  }
  return (
    <span
      className={`h-20 w-20 rounded-full bg-roxoFundo border-2 `}
      {...props}
      onClick={discLogic}
    >
      <span
        className={`h-20 w-20 rounded-full bg-red-900 border-2 transition-all duration-500 absolute  ${
          preenchido ? 'top-0 visible' : '-top-20 invisible'
        }`}
        {...props}
      ></span>
    </span>
  );
}

export default GameDisc;
