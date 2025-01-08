"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { z } from 'zod';
import { signupAction, userDataInterface } from '../_lib/actions';
import { useUser } from './UserContext';


// Define Zod schema with updated validations
const signupSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(20, "Name must not exceed 20 characters")
      .regex(/^\S+$/, "Name must not contain spaces"),
    password: z
      .string()
      .min(8, "Password must be exactly 8 characters")
      .max(8, "Password must be exactly 8 characters")
      .regex(/^[A-Za-z0-9]+$/, "Password must not contain special characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be exactly 8 characters")
      .max(8, "Password must be exactly 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function SignupForm() {
  const { setUsername,setIsLoggedIn } = useUser();
  const router = useRouter();
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    try {
      // Validate form data with Zod schema
      signupSchema.parse(data);
      const userData:userDataInterface = {
        name:data.name,
        password : data.password
      }
      
      console.log(userData);
      const res = await signupAction(userData);
      console.log(res);
      if(res?.status==="fail"){
        alert(res.message);
      }else if(res?.status==="success"){
        alert(res.message);
          setIsLoggedIn(true);
          setUsername(res?.user?.name);
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
    }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 text-center flex flex-col gap-5 w-5/6 justify-center items-center mx-auto ring-1 ring-yellow-300 h-min rounded-lg py-5 px-5 min-[425px]:max-w-96"
    >
      <h1 className="capitalize text-yellow-400 mb-3 w-full text-3xl sm:text-4xl font-extrabold">
        Sign-up Now
      </h1>
      
      <input
        type="text"
        required
        id="name"
        name="name"
        max={50}
        minLength={2}
        // onChange={handleChange}
        placeholder={"Enter Your Name"}
        className="py-2 px-3 rounded-lg bg-gray-100 w-5/6 sm:!w-3/4"
      />
      {/* {errors.name && <p className="text-red-500">{errors.name}</p>} */}

      <input
        type="password"
        required
        id="password"
        name="password"
        maxLength={8}
        minLength={8}
        placeholder="Enter Your Password"
        className="py-2 px-3 rounded-lg bg-gray-100 w-5/6 sm:!w-3/4"
      />
      {/* {errors.password && <p className="text-red-500">{errors.password}</p>} */}

      <input
        type="password"
        required
        id="confirmPassword"
        name="confirmPassword"
        maxLength={8}
        minLength={8}
        // onChange={handleChange}
        placeholder="Re-Enter Your Password"
        className="py-2 px-3 rounded-lg bg-gray-100 w-5/6 sm:!w-3/4"
      />
      {/* {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword}</p>
      )} */}

      <button className="bg-yellow-400 py-2 px-3 capitalize rounded-xl w-5/6 sm:w-3/4 text-xl">
        Create Account
      </button>
    </form>
  );
}

export default SignupForm;
