import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image';
import { LuBell } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";





const Header = () => {
  return (
    <header className="bg-white border-b border-[#E6EAEE] p-4 flex justify-between items-center">
    <div className="flex items-center">
      <Image
        src={logo}
        alt="profile"
      />
    </div>

    <div className="flex items-center">
      {/* <img src="/profile-image.jpg" alt="Profile" className="h-8 w-8 rounded-full mr-4" /> */}
      <LuBell  />
      <div className="relative">
        
        <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full p-1 text-xs">GA</span>
        <FaCaretDown />
      </div>
    </div>
  </header>
  )
}

export default Header;