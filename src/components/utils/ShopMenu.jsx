import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";

const ShopMenu = () => {
  return (
    <nav className="bg-gray-950 text-neutral-400 text-sm font-medium leading-tight">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Menu Items */}
        <ul className="flex items-center space-x-6 text-sm font-medium">
          <li className="relative group">
            <div className="flex items-center cursor-pointer">
               <Link to="/" className="block px-4 py-2 ">
                  Home
                </Link> 
            </div>
           
          </li>

          <li className="relative group">
            <div className="flex items-center cursor-pointer">
              Shop <FaAngleDown className="ml-1" />
            </div>
            <ul className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <li>
                <Link to="/product/1" className="block px-4 py-2 hover:bg-gray-100">
                  Shop Grid
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100">
                  WishList
                </Link>
              </li>
               <li>
                <Link to="/scart" className="block px-4 py-2 hover:bg-gray-100">
                  Shopping-cart
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative group z-50">
            <div className="flex items-center cursor-pointer">
              Pages <FaAngleDown className="ml-1" />
            </div>
            <ul className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <li>
                <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-100">
                  Product Details
                </Link>
              </li>
             
            </ul>
          </li>

          <li className="relative group z-50">
            <div className="flex items-center cursor-pointer">
              Blog <FaAngleDown className="ml-1" />
            </div>
            <ul className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
             
              <li>
                <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-100">
                  Blog Details
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/about-us" className="hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Phone Number */}
        <div className="flex items-center space-x-2 text-sm text-white">
          <FiPhoneCall />
          <span className="text-white text-sm font-medium leading-tight">
            (219) 555-0114
          </span>
        </div>
      </div>
    </nav>
  );
};

export default ShopMenu;
