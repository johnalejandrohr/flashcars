'use client'
import React, { useState } from 'react';
import datacience from '@/data/datacience.json';

interface FormProps {
    
}

const Form: React.FC<FormProps> = ({}) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const addCard = async () => {
    try {
        const res = await fetch('/api/addFlashcard', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question, response, state: false }),
        });
  
        if (res.ok) {
          console.log('Flashcard agregado correctamente.');
          // Realiza cualquier otra lógica necesaria después de agregar el flashcard.
        } else {
          console.error('Error al agregar el flashcard.');
        }
      } catch (error) {
        console.error('Error al agregar el flashcard:', error);
      }
  }

  return (
    <div className='flex flex-col md:flex-row gap-2'>
        <div className="w-full h-auto bg-slate-800 hover:cursor-pointer p-4 rounded-lg relative transform transition-transform duration-500 ease-in-out">
            <div className='w-full flex flex-col gap-1 justify-center rounded-full'>
                <label htmlFor="" className="text-white">Frente</label>
                <input className='p-1 px-3 border border-slate-700 focus:border-slate-700 w-full h-9 rounded-lg bg-slate-800' type="text" onChange={ (e) => {setQuestion(e.target.value)} }/>
            </div>
            <div className='w-full flex flex-col gap-1 justify-center rounded-full'>
                <label htmlFor="" className="text-white">Atrás</label>
                <textarea rows={5} className='p-1 px-3 border border-slate-700 focus:border-slate-700 w-full rounded-lg bg-slate-800' onChange={ (e) => {setResponse(e.target.value)} }></textarea>
            </div>
            <div className='w-full flex flex-col gap-1 justify-center rounded-full'>
                <button className='p-1 mt-3 rounded-lg bg-slate-700' onClick={() => addCard()}>Crear</button>
            </div>
        </div>
        <div className='flex flex-col h-96 md-auto md:flex-row gap-2 w-full'>
            <div className={`w-full h-full flex flex-col items-center justify-center transform rotate-y-180 bg-emerald-700 rounded-lg`}>
                <p className='text-center p-2 text-white font-bold text-lg'>¿{question}?</p>
                <p className='text-center p-2 text-white'>{response}</p>
            </div>

        </div>
    </div>
  );
};

export default Form;