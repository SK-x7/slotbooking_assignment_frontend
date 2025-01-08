import { getTableFromApi } from '@/app/_lib/data-service';
import React from 'react'
import DateSelector from '../../_components/DateSelector';
import TimeSlotSelector from '../../_components/TimeSlotSelector';
import ReservationForm from '../../_components/ReservationForm'
import { getTableSlotsFromApi } from '../../_lib/data-service';

export interface TableSlot {
  [key: string]: string[]; // Key is the date string (e.g., "2025-01-04"), value is an array of time slots
}


export type paramsType = Promise<{ tableId: string }>;
async function page(props:{params:paramsType}) {
  
    const {tableId}=await props.params;
    const table=await getTableFromApi(tableId);
    // const tableSlots:TableSlot[]=await getTableSlotsFromApi(tableId);
    const tableSlots:TableSlot[]=await getTableSlotsFromApi(tableId);
    // console.log(tableSlots);
    
  return (

    <section className='h-full flex justify-center bg-gray-900'>
        <main className='flex flex-col w-full px-1 min-[420px]:w-4/5 lg:w-[90%] justify-start items-center text-white gap-7 py-5'>
            <h1 className='px-3 flex justify-center items-center text-2xl min-[420px]:text-3xl sm:text-3xl'>Reserve Table {tableId} today. Pay on arrival.</h1>
            <div className='w-full max-h-min grid grid-cols-1 
            grid-rows-auto gap-3 md:!grid-rows-auto md:!grid-cols-2 lg:!grid-cols-3 lg:!grid-rows-1 lg:gap-1'>
                <div className=' !w-full   !px-3 !max-h-min h-full'>
                  <DateSelector datesAvailableToBook={tableSlots} table={table}></DateSelector>
                </div>
                <div className=' w-full px-3'>
                  <TimeSlotSelector></TimeSlotSelector>     
                </div>
                <div className='md:col-span-2 lg:col-span-1 px-3'>
                  
                <ReservationForm table={table}></ReservationForm>
                </div>
            </div>
        </main>
    </section>
  )
}

export default page