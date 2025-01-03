import { getTableFromApi } from '@/app/_lib/data-service';
import React from 'react'
import DateSelector from '../../_components/DateSelector';
import TimeSlotSelector from '../../_components/TimeSlotSelector';
import ReservationForm from '../../_components/ReservationForm'
import { getTableSlotsFromApi } from '../../_lib/data-service';
import { PageProps } from '@/.next/types/app/tables/page';

export interface TableSlot {
  [key: string]: string[]; // Key is the date string (e.g., "2025-01-04"), value is an array of time slots
}
async function page(x:PageProps) {
    const {tableId}=await x.params;
    const table=await getTableFromApi(tableId);
    const tableSlots:TableSlot[]=await getTableSlotsFromApi(tableId);
    // console.log(tableSlots);
    
  return (
    <section className='h-full flex justify-center bg-gray-900'>
        <main className='flex flex-col w-full px-1 sm:w-3/4 lg:5/6 justify-start items-center text-white gap-7 py-5'>
            <h1 className='text-3xl sm:text-5xl'>Reserve Table {tableId} today. Pay on arrival.</h1>
            <div className='w-full grid grid-cols-1 
            grid-rows-3 gap-3 lg:!grid-rows-2 lg:!grid-cols-2 xl:!grid-cols-3 xl:!grid-rows-1'>
                <div className=' !w-full'>
                  <DateSelector datesAvailableToBook={tableSlots} table={table}></DateSelector>
                </div>
                <div className=' w-full'>
                  <TimeSlotSelector></TimeSlotSelector>   
                </div>
                <div className='lg:col-span-2 bg-red-200 xl:col-span-1'>
                  
                <ReservationForm table={table}></ReservationForm>
                </div>
            </div>
        </main>
    </section>
  )
}

export default page