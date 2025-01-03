"use client"

import React from 'react'
import { useReservationContext } from './ReservationContext';
import { useEffect, useState } from "react";

function TimeSlotSelector() {
    const {slots,selectedSlot, setSelectedSlot} = useReservationContext();

    const [isClient,setIsClient] =useState(false);
    useEffect(()=>{
      setIsClient(true);
    },[])
    
    if(!isClient)  return <div></div>

  return (
    <div className='!w-full flex justify-center items-center py-10 bg-gray-800'>
        <div className=' flex justify-center bg-'>
            
        {
            slots && slots.length<=0 && <span className='!w-full flex justify-center items-center'>Please choose the date first</span>
        }
        </div>
        {
            slots&& slots.length>0 &&
        
        <div className=' !w-full grid grid-cols-2 justify-center items-center gap-3 py-1 px-3'>
            
        {
            slots&&slots.map((slot)=>{
                return <span key={slot}  className={` text-black py-2 px-3 ${selectedSlot===slot?"bg-yellow-500":"bg-transparent text-white ring-1 ring-yellow-600"}`} onClick={(e)=>{
                    e.preventDefault();
                    setSelectedSlot(slot);
                }}>{slot}</span>
            })
        }
        </div>
        }
    </div>
  )
}

export default TimeSlotSelector