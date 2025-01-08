"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useUser } from "./UserContext";
 // Import the custom hook

function Username() {
  const { username,isLoggedIn } = useUser(); // Access the username from context
  const router = useRouter(); // Access the username from context
  const pathname = usePathname(); // Access the username from context
  // const username  ="hello"; // Access the username from context
  // if(isLoggedIn===false&&((pathname!=="/login")&&(pathname!=="/signup"))){
  //   router.replace("/");
  // }else{
    
  // }
  
  useEffect(() => {
    if (!isLoggedIn &&!username && pathname !== "/login" && pathname !== "/signup") {
      router.replace("/"); // Redirect to home page if unauthenticated
    }
  }, [isLoggedIn, pathname, router,username]);
  
  
  return <>
  {
    (!isLoggedIn&&(pathname==="/signup"||pathname==="/"))&&<Link href={"/login"} className="capitalize">Login</Link>  
  }{
    
    (!isLoggedIn&&(pathname==="/login"))&&<Link href={"/signup"} className="capitalize">Sign up</Link>  
  }
  {
    (isLoggedIn===true)&&<span className="capitalize">{username}</span>
  }
  </>; 
}

export default Username;
