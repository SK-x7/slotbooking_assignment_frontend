import Link from 'next/link';
import React from 'react'
import {getAllTablesFromApi} from '../_lib/data-service'


export interface tableInterface {
    id:string;
    maxNumOfGuests:number
    price:number;
    
}

async function page() {
    const tables = await getAllTablesFromApi();
  return (
    <section className='bg-gray-900 flex justify-center h-full w-full'>
        <main className='w-5/6 md:w-3/4 flex flex-col justify-center items-center text-2xl !h-full  py-7 md:py-7 gap-6'>
            <span className='capitalize text-white'>Book Your table now!!</span>
            <div className=' text-white w-full grid 
            grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base'>
                {
                   tables.length >0 && tables.map((table:tableInterface)=>(
                    <div className='flex min-h-40 bg-gray-800 rounded-xl' key={table.id}>
                        <div className='w-1/2 flex justify-center items-center'>Table {table.id} image</div>
                        <div className='flex flex-col w-1/2 justify-evenly'>
                            <span>Table {table.id}</span>
                            <span>For up to {table.maxNumOfGuests} people</span>
                            <div className='flex gap-3'>
                                
                            <span>$ {table.price}</span>
                            <Link href={`/tables/${table.id}` } className="bg-yellow-400 py-1 px-2 !text-black rounded-lg">Details & Reservation</Link>
                            </div>
                        </div>
                    </div>
                   )) 
                }
            </div>
        </main>
    </section>
  )
}

export default page