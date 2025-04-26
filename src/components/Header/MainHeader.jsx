import React from 'react';
import PrimaryMenu from '../utils/PrimaryMenu';
import { PiPhoneCall } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router';
import Search from '../utils/Search';

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
         <Link to="/">
         <img src="images/Logo.png" alt="Logo" className="h-10" />
         </Link>
        </div>

        {/* Right side: phone and icons */}
        <div className="lg:col-span-2 quicklinks flex justify-end items-center gap-6">
          {/* Phone Number */}
          <a herf="tel:(219) 555-0114" className="flex gap-1.5 items-center text-[14px] font-medium text-gray-scale-gray-900">
           <span className='text-2xl'> <PiPhoneCall /></span>
            (219) 555-0114
          </a>

          {/* Icons side by side */}
          <ul className="flex place-items-center gap-4 text-3xl">
            <li> <Search/> </li>
            <li><Link><FiHeart /></Link></li>
            <li className='relative'>
              <Link> <SlHandbag />
            <div className="cartCounter absolute top-0 right-[-4px] border-white rounded-full w-[18px] h-[18px] bg-branding-success-dark text-[10px] text-white text-center leading-[18px]">
              2
            </div>
            </Link></li>
            <li><Link> <IoPersonOutline /></Link></li>
          </ul>
        
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
