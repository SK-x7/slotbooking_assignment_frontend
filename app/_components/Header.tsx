import Link from 'next/link'
import React from 'react'
import Username from './Username'

function Header() {
    return <header className="flex justify-between items-center bg-gray-900 min-h-14  text-white px-2 lg:px-7 border-b-2 border-gray-800">
    <Link href={"/"} className="capitalize">Best restaurant</Link>
    <div className="flex gap-1 text-xs sm:text-sm sm:gap-5">
      <Link href={"/tables"} className="capitalize">Tables</Link>
      <Link href={"/bookings"} className="capitalize">My Bookings</Link>
    <Username></Username>
    </div>
  </header>
}
export default Header