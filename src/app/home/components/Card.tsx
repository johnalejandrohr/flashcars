'use client'
import React, { useState } from 'react';

interface CardProps {
    question: string;
    response: string;
    state: boolean;
}

const Card: React.FC<CardProps> = ({question, response, state}) => {
  const [estaVolteada, setEstaVolteada] = useState(state);

  const voltearTarjeta = () => {
    setEstaVolteada(!estaVolteada);    
  };

  return (
    <div className="w-full h-96 bg-slate-800 hover:bg-slate-700 hover:cursor-pointer p-2 rounded-lg relative transform transition-transform duration-500 ease-in-out" onClick={voltearTarjeta}>
      <div className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center transform ${estaVolteada ? 'rotate-y-180 rounded-lg hidden' : 'rotate-y-0'}`}>
        <p className='text-center p-2 text-white'>{ question }</p>
      </div>
      <div className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center transform rotate-y-180 ${estaVolteada ? 'rotate-y-0 bg-emerald-700 rounded-lg' : 'rotate-y-180 hidden'}`}>
        <p className='text-center p-2 text-white font-bold text-lg'>{ question }</p>
        <p className='text-center p-2 text-white'>{ response }</p>
      </div>
    </div>
  );
};

export default Card;
