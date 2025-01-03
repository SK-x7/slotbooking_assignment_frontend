"use client";
import React, { useEffect, useState } from 'react';
import { useUser } from './UserContext';

import { getUserBookingsFromApi } from '../_lib/data-service';
// import { Key } from 'readline';


interface bookingInterface {
  id:null|undefined;
  numGuests:number;
  startDate:Date;
  endDate:Date;
  price:number;
  observations:string;
  tableId:number
  name:string
  phoneNum:string
}




function Page() {
  const [bookings, setBookings] = useState([])
  const { username } = useUser()||localStorage.getItem('username');
  const [isLoading, setIsLoading] = useState(true);  // Add loading state

  // Function to fetch API data based on username
  const fetchData = async (username:string) => {
  
      const data = await getUserBookingsFromApi(username)
      setBookings(data); // Set the data once the API call is successful
      setIsLoading(false); // Set loading to false once the API call is done
    
  };

  useEffect(() => {
    if (username && username !== "Username") {
      // If username is valid, proceed with the API call
      fetchData(username);
    }
  }, [username]); // Dependency array ensures this runs whenever `username` changes

  if (isLoading) {
    return <div className='h-full flex justify-center items-center w-full bg-gray-900 px-10 !text-white text-xs sm:text-xl'>Please set your username on the login page to fetch your bookings</div>;  // Show loading state until username is ready
  }

  return (
    <section className='bg-gray-800 flex justify-center items-start !h-full w-full py-7 md:py-14'>
      <main className='w-5/6 md:w-3/4 flex flex-col justify-center items-center sm:items-start gap-11'>
        <span className='text-white text-3xl sm:text-5xl -ml-8'>Your Bookings</span>
        <div className=' text-white w-full grid gap- 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 place-items-center items-start'>
          {bookings&&bookings.length<=0&&"You do not have any bookings"}
          
          {
            bookings&&bookings.map((booking:bookingInterface)=>(
              <div key={booking.id} className="flex flex-col justify-center items-start bg-gray-700 !w-full max-w-96 py-2 sm:py-3 px-3 sm:px-5 rounded-2xl">
                <div className='flex justify-between items-center w-full mb-3'>
                  
                <span className='text-base sm:text-xl'>{`"You Booked Table"+${booking.tableId}`}</span>
                <span className='text-sm sm:text-base'>{` "Price :$ "+ ${booking.price}`}</span>
                </div>
                <span className='text-sm sm:text-base mb-1'>{`"Max. Guest you can invite" :${booking.numGuests}`}</span>
                <span className='mb-1 text-sm  sm:text-base'>Date :{new Date(booking.startDate).toDateString()}</span>
                <span className='mb-3 sm:mb-5'>Time :{new Date(new Date(booking.startDate).setHours(new Date(booking.startDate).getHours()+5)).toLocaleTimeString()} -  {new Date(new Date(booking.endDate).setHours(new Date(booking.endDate).getHours()+5)).toLocaleTimeString()}</span>
                <p className=' !w-full !box-border break-words min-h-28  !h-full overflow-y-scroll'>Additional Info : {booking.observations}</p>
              </div>
            ))
          }



          {/* </div> */}
        </div>
      </main>
    </section>
  );
}

export default Page;
