import React from 'react'
import { CiLocationOn } from "react-icons/ci"
import { FaChevronDown } from "react-icons/fa";
function Logo() {
  return (
    <>
      <nav className='max-w-full bg-red-800 px-5 py-3 flex items-center justify-between'>
        <div className='logo max-w-32'><img src="https://res.cloudinary.com/rohitcloudinary/image/upload/v1724084775/Rural%20Company/dld1up59arncz10gsr4d.png" alt="logo" /></div>
        <div className='location-search'>
          <div className='max-h-36 max-w-fit p-2 gap-5 bg-blue-600 flex items-center justify-between'>
          <div className='flex items-center gap-1'><CiLocationOn /> <p>Home 101,Bhopal</p></div>
          <div><FaChevronDown /></div>
          </div>
        </div>
        <div className='auth-cart'></div>
      </nav>
    </>
  )
}

export default Logo