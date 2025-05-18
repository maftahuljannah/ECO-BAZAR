import React, { useState } from 'react';
import PrimaryMenu from '../utils/PrimaryMenu';
import { PiPhoneCall } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Search from '../utils/Search';
import { IoMdMenu } from "react-icons/io";
import OffCanvas from '../utils/OffCanvas';
import Cart from '../utils/Cart';
import LoginForm from '../utils/LoginForm';


const MainHeader = () => {

  const [showPersonPanel, setShowPersonPanel] = useState(false);


  const [showMenu, setShowMenu] = useState(false);

  const showMobileNav = () => {
    setShowMenu(true);
  };

  const hideMobileNav = () => {
    setShowMenu(false);
  };

  return (
    <nav className='bg-white py-[28.5px] shadow-xl'>
      <div className="container flex items-center justify-between lg:grid lg:grid-cols-5 px-8 lg:px-0">

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={showMobileNav}>
            <IoMdMenu className="text-2xl" />
          </button>

          {/* Offcanvas */}
          <OffCanvas 
          position='left'
          hideSideBar={hideMobileNav} 
          showSideBar={showMenu} 
          heading='Shopping Cart'>
            <PrimaryMenu />
          </OffCanvas>
        </div>

        {/* Primary Menu (Large screens only) */}
        <div className="hidden lg:block lg:col-span-2">
          <PrimaryMenu />
        </div>

        {/* Center Logo */}
        <div className="flex justify-center lg:justify-center col-span-1">
          <Link to="/">
            <img src="images/Logo.png" alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Right Side - Phone + Icons */}
        <div className="flex justify-end items-center gap-6 lg:col-span-2">
          {/* Phone Number (Large screens only) */}
          <a href="tel:(219) 555-0114" className="hidden lg:flex gap-1.5 items-center text-[14px] font-medium text-gray-scale-gray-900">
            <span className='text-2xl'><PiPhoneCall /></span>
            (219) 555-0114
          </a>

          {/* Icons */}
          <ul className="flex items-center gap-4 text-2xl lg:text-3xl relative">
            <li><Search /></li>
            <li className='hidden lg:inline-block'><Link><FiHeart /></Link></li>
            <li><Cart /></li>

            <li className='hidden lg:inline-block'>
  <button onClick={() => setShowPersonPanel(true)}>
    <IoPersonOutline />
  </button>

  {/* Offcanvas */}
  <OffCanvas
  position='right'
  hideSideBar={() => setShowPersonPanel(false)}
  showSideBar={showPersonPanel}
  heading='My Account'
>
  <LoginForm />
</OffCanvas>
</li>


          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
