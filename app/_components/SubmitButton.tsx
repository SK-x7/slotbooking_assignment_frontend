"use client"

import { useFormStatus} from "react-dom";

function SubmitButton({children,pendingLabel}:{children:React.ReactNode,pendingLabel:string}) {
    const {pending}=useFormStatus();
    return <button className="bg-accent-500 bg-yellow-400 text-black py-3 px-2 text-base sm:text-lg w-full sm:w-auto sm:px-8 sm:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300" disabled={pending}>
              {
                pending?pendingLabel:
                children
              }
            </button>
  }
  
  export default SubmitButton;