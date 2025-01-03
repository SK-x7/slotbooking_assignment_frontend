
import Image from "next/image";
import { text } from "stream/consumers";
import UserLoginForm from "./_components/landingCard";

export default function Home() {
  return (
   <div className="h-full relative bg-gray-700">
      <Image className="object-cover object-center opacity-50"  src="/landingImage.jpg" fill alt="Restaurant image" quality={50}/>
      <div className="relative z-10 h-full mx-auto">
        <UserLoginForm></UserLoginForm>
      </div>
   </div>
  )
}
