'use client'
import React, { useState } from 'react';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

interface CardProps {
    question: string;
    response: string;
    state: boolean;
    id: number;
}

const FormulaExample = () => {
    return (
        <div className='text-black'>

<Latex macros={{ "\\f": "#1f(#2)" }}>{'$\\f\\relax{x} = x$ is rendered using macros'}</Latex>

        </div>
      );
};
    
const Card: React.FC<CardProps> = ({question, response, state, id}) => {
  const [estaVolteada, setEstaVolteada] = useState(state);

  const voltearTarjeta = () => {
    setEstaVolteada(!estaVolteada);    
  };

  return (
    <div className="w-full h-96 bg-slate-800 p-2 rounded-lg relative transform transition-transform duration-500 ease-in-out">
      {/* <div className='absolute -top-2 -right-2 h-7 w-7 bg-slate-500 cursor-pointer flex justify-center items-center rounded-full'>
        X
      </div> */}
      <div className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-around transform ${estaVolteada ? 'rotate-y-180 rounded-lg hidden' : 'rotate-y-0'}`}>
        <p className='text-center p-2 text-white'>{ question }</p>
        <div className='w-full flex justify-center items-center'>
            <button className='bg-purple-500 p-2 rounded-lg w-1/2' onClick={voltearTarjeta}>ver</button>
        </div>
      </div>
      <div className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center transform rotate-y-180 ${estaVolteada ? 'rotate-y-0 bg-emerald-300 rounded-lg' : 'rotate-y-180 hidden'}`}>
        <p className='text-center p-2 text-black font-bold text-lg'>{ question }</p>
        <p className='text-center p-2 text-black'>{ response }</p>
        <FormulaExample />
        <div className='w-full flex justify-center items-center'>
            <button className='bg-purple-500 p-2 rounded-lg w-1/2' onClick={voltearTarjeta}>Volver</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
