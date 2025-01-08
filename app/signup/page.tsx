
import Image from "next/image";
import SignupForm from "../_components/SignupForm";

export default function page() {
  return (
   <div className="h-full relative bg-gray-700">
      <Image className="object-cover object-center opacity-50"  src="/landingImage.jpg" fill alt="Restaurant image" quality={50}/>
      <div className="relative z-10 h-full flex justify-center items-center  m-auto">
        <SignupForm></SignupForm>
        {/* <UserLoginForm></UserLoginForm> */}
      </div>
   </div>
  )
}
