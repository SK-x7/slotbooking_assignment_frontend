"use client"

import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { FormEvent, FormHTMLAttributes, HtmlHTMLAttributes, useEffect, useState } from 'react';
import { useUser } from './UserContext';

function LandingCard() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  
  const {username,setUsername} = useUser();
  // function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
  //       e.preventDefault();
  //       setUsername(e.target.value);
  //       if(localStorage){
  //         localStorage.setItem("username",e.target.value);
  //       }
  //     }
      if (!isClient) return <div></div>;
    
    
  return (
    <div 
    // <form 
    // onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{
    //     e.preventDefault();
    //     const form = e.currentTarget;
    //     const formData = new FormData(form);        
    //     const name = formData.get("name");  console.log(name,"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    //     // setUsername(e);
    //     if(username.length > 0){
    //       if(localStorage){
    //         // localStorage.setItem("username",e.target.value);
            
    //       }
        
    //     }
    //     redirect("/tables")
    //   }}  
    className="relative z-10 text-center h-full flex flex-col w-5/6 justify-center items-center mx-auto gap-2">
        <h1 className="capitalize text-2xl min-[420px]:text-4xl  sm:text-7xl text-white w-full -tracking-tighter">The best restaurant</h1>
        <p className="first-letter:capitalize text-base sm:text-2xl text-white">book your table for the best experience in the best restaurant</p>
        {/* <p className="capitalize text-base sm:text-xl text-white">👋 Welcome! Please start by telling us your name:</p> */}
        {/* <input type="text" id='name' name='name' max={50} minLength={2} onChange={handleChange}/>
        <input type="text" id='password' name='password' maxLength={8} minLength={8} onChange={handleChange}/> */}
        
        <Link href={"/login"} className="bg-yellow-400 py-2 px-3 capitalize rounded-xl mt-5 sm:mt-7 w-full sm:w-1/4 text-xl">Login-Now</Link>
        
      {/* </form> */}
      </div>
  )
}

export default LandingCard