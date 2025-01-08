"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { z } from 'zod';
import { loginAction, userDataInterface } from '../_lib/actions';
import { useUser } from './UserContext';


const loginFormSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(20, "Name must not exceed 20 characters")
      .trim()
      .regex(/^\S+$/, "Name must not contain spaces"),
    password: z
      .string()
      .min(8, "Password must be exactly 8 characters")
      .max(8, "Password must be exactly 8 characters")
      .trim()
      .regex(/^[A-Za-z0-9]+$/, "Password must not contain special characters"),
  })

function LoginForm() {
    const {setIsLoggedIn,setUsername} = useUser();
    // const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const router = useRouter();

    
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
  
      const data = {
        name: formData.get("name") as string,
        password: formData.get("password") as string,
      };
  
      try {
        // Validate form data with Zod schema
        loginFormSchema.parse(data);
        const userData:userDataInterface = {
          name:data.name,
          password : data.password
        }
        
        const res = await loginAction(userData);
        console.log(res);
        if(res?.status==="fail"){
          alert(res.message);
          return;
        }else if(res?.status==="success"){
          alert(res.message);
          setIsLoggedIn(true);
          setUsername(res.username);
          return router.replace("/tables");
        }
  
      } catch (err) {
        // Set validation errors
        if (err instanceof z.ZodError) {
          const formattedErrors: { [key: string]: string } = {};
          err.errors.forEach((error) => {
            if (error.path[0]) {
              formattedErrors[error.path[0] as string] = error.message;
              alert(error.message);
            }
          });
          // setErrors(formattedErrors);
      }
      }
    }

    
  return (
    <form 
    onSubmit={handleSubmit}  
    className="relative z-10 text-center flex flex-col gap-5 w-5/6 justify-center items-center mx-auto ring-1 ring-yellow-300 h-min rounded-lg py-5 px-5 min-[425px]:max-w-96">
        <h1 className="capitalize text-yellow-400 mb-3 w-full text-3xl sm:text-4xl font-extrabold">Login Now !!</h1>
        <input type="text" required id='name'  name='name' placeholder={"Enter Your Name"} className="py-2 px-3 rounded-lg bg-gray-100 w-5/6 sm:!w-3/4"/>
        <input type="password" required id='password' name='password' placeholder="Enter Your Password" className="py-2 px-3 rounded-lg bg-gray-100 w-5/6 sm:!w-3/4"/>
        <button className="bg-yellow-400 py-2 px-3 capitalize rounded-xl w-5/6 sm:w-3/4 text-xl">Login Now</button>
        
      </form>
  )
}

export default LoginForm