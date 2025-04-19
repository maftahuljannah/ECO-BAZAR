import React from 'react';
import PrimaryMenu from '../utils/PrimaryMenu';
import { PiPhoneCall } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";

const MainHeader = () => {
  return (
    <nav className='bg-white py-[28.5px] shadow-xl'>
      <div className="container grid lg:grid-cols-5 items-center">
        
        {/* Left menu */}
        <div className="lg:col-span-2 manus">
          <PrimaryMenu />
        </div>

        {/* Center logo */}
        <div className="logos flex justify-center">
          <img src="images/Logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Right side: phone and icons */}
        <div className="lg:col-span-2 quicklinks flex justify-end items-center gap-6">
          {/* Phone Number */}
          <p className="flex gap-1.5 items-center text-[14px] font-medium text-gray-scale-gray-900">
            <PiPhoneCall className="text-2xl" />
            (219) 555-0114
          </p>

          {/* Icons side by side */}
          <div className="flex items-center gap-4 text-[22px]">
            <CiSearch />
            <CiHeart />
            <SlHandbag />
            <IoPersonOutline />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
