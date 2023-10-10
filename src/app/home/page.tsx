'use client'
import React, { useState, useEffect } from 'react';

import Card from '@/app/home/components/Card'
import Form from '@/app/home/components/Form'

interface Flashcard {
    question: string;
    response: string;
    state: boolean;
    id: number;
}

export default function Home() {
    const [flashcards, setFlashcards] = useState([]);
    
    const getData = async () => {
        try {
            // setLoader(true);
    
            const response = await fetch('api/flashcards', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            const data = await response.json();
    
            console.log(data);
            setFlashcards(data);
            // setLoader(false);
        } catch (error) {
            // Handle any errors that occurred during the fetch or data processing
            console.error('Error:', error);
            // setLoader(false); // Ensure loader is turned off even if an error occurred
        }
    };

    useEffect(() => {
        getData()
    }, []);

  return (
    <main className="flex flex-col items-center justify-between container mx-auto pt-3 m-1 bg-black">
        <h1 className='text-4xl font-bold mb-4 text-white'>Mis Fash Cards</h1>
        <div className='w-full h-full'>
            <Form onClick={()=> getData()}/>
            <p className='text-xl mb-4 uppercase text-yellow-400'></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-screen'>
                {
                    flashcards.map((item:Flashcard, index: number) => {
                        return <Card key={index} question={item.question} response={item.response} state={item.state} id={item.id} />
                    })
                }
            </div>
        </div>

    </main>
  )
}
