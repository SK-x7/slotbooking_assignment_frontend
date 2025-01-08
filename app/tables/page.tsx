import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {getAllTablesFromApi} from '../_lib/data-service'


export interface tableInterface {
    id:string;
    maxNumOfGuests:number
    price:number;
    image:string;
    
}


async function page() {
    const tables = await getAllTablesFromApi();
    
    return (

    <section className='bg-gray-900 flex justify-center h-full w-full'>
        <main className='w-5/6 sm:w-[90%] md:w-3/4 flex flex-col justify-center items-center text-2xl !h-full  py-7 md:py-7 gap-6'>
            <span className='capitalize text-white'>Book Your table now!!</span>
            <div className=' text-white w-full grid 
            grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base'>
                {
                   tables.length >0 && tables.map((table:tableInterface)=>(
                    <div className='flex flex-col min-[420px]:flex-row   bg-gray-800 rounded-xl' key={table.id}>
                        <div className='!w-full sm:!w-1/3 flex justify-center items-center py-[8px] px-[8px] !h-full min-h-36 min-[420px]:min-h-44 sm:min-h-44'>
                            
                                <div className='!relative flex-1 h-full !w-full '>
                                    
                            <Image src={table.image} alt={`${table.id}`} fill className='object-cover !rounded-xl'/>
                                </div>
                        </div>
                        <div className='flex flex-col 
                         w-full p-2 sm:w-2/3 justify-evenly gap-2 mb-1 px-4 min-[420px]:px-2'>
                            <span className='text-lg'>Table {table.id}</span>
                            <span>For up to {table.maxNumOfGuests} people</span>
                            <div className='flex gap-3 sm:gap-2 !mt-2 xl:gap-4'>
                                
                            <span className='flex 
                             justify-start items-center sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-max'>$ {table.price}</span>
                            <Link href={`/tables/${table.id}` } className="bg-yellow-400 py-1 px-2 !text-black rounded-lg sm:w-3/4 md:w-4/5 lg:w-5/6 xl:w-max">Details & Reservation</Link>
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