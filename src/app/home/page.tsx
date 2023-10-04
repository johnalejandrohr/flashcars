import Image from 'next/image'
import Card from '@/app/home/components/Card'
import Form from '@/app/home/components/Form'
import datacience from '@/data/datacience.json';

interface Flashcard {
    question: string;
    response: string;
    state: boolean;
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between container mx-auto pt-3 m-1 bg-black">
        <h1 className='text-4xl font-bold mb-4 text-white'>Mis Fash Cards</h1>
        <div className='w-full h-full'>
            <Form />
            <p className='text-xl mb-4 uppercase text-yellow-400'>Ciencia de datos</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-screen'>
                {
                    datacience.map((item:Flashcard, index: number) => {
                        return <Card key={index} question={item.question} response={item.response} state={item.state} />
                    })
                }
            </div>
        </div>

    </main>
  )
}
