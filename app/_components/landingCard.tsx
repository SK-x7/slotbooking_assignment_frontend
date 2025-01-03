"use client"

import { redirect } from 'next/navigation';
import React from 'react';
import { useUser } from './UserContext';

function UserLoginForm() {
    const {username,setUsername} = useUser();
    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setUsername(e.target.value);
    }
    
    
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
        setUsername(username);
        if(username.length > 0){
          if(localStorage){
            localStorage.setItem("username",username);
            
          }
        
        }
        redirect("/tables")
      }}  className="relative z-10 text-center h-full flex flex-col w-1/2 justify-center items-center mx-auto">
        <h1 className="capitalize text-4xl sm:text-7xl text-white">The best restaurant</h1>
        <p className="first-letter:capitalize text-xl sm:text-2xl text-white">book your table for the best experience in the best restaurant</p>
        <p className="capitalize text-base sm:text-xl text-white">👋 Welcome! Please start by telling us your name:</p>
        <input type="text" max={50} minLength={2} onChange={handleChange}/>
        {
            username.length>0 &&
        <button className="bg-yellow-400 py-2 px-3 capitalize rounded-xl mt-7 w-full sm:w-1/4 text-xl">Book a table</button>
        }
      </form>
  )
}

export default UserLoginForm