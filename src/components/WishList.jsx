import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import { CgHome } from "react-icons/cg";
import { RiArrowRightSLine } from "react-icons/ri";

const WishList = () => {
  const wishlistItems = [
    {
      name: "Chinese Cabbage Seeds",
      img: "/images/cobbage.png",
      rating: 5,
      price: "$12.99",
      stock: "In Stock",
    },
    {
      name: "Green Capsicum",
      img: "/images/capsicum.png",
      rating: 4,
      price: "$8.50",
      stock: "Low Stock",
    },
    {
      name: "Fresh Sujapuri Mango",
      img: "/images/shopimages/shop9.png",
      rating: 5,
      price: "$15.00",
      stock: "Out of Stock",
    },
  ];

  return (
 

    <div className="section">

{/* Breadcrumb */}
      <div className="relative">
        <img
          src="/images/breadcrum.png"
          alt="Breadcrumb Background"
          className="w-full object-cover"
        />
        <div className="absolute md:top-[50px] md:left-[250px] z-50 flex flex-wrap items-center gap-2 text-sm md:text-base bg-white/70 md:bg-transparent p-2 rounded md:p-0">
          <CgHome className="text-gray-400" />
          <RiArrowRightSLine className="text-stone-400" />
         
          <p className="text-green-600">Wishlist</p>
        </div>
      </div>

   <div className="container mt-[50px] mb-[100px]">

      <h2 className="text-center text-zinc-900 text-3xl font-semibold font-['Poppins'] leading-10 mb-6">My Wishlist</h2>

      {/* Table Header */}
      <div className="grid grid-cols-4 justify-start text-zinc-500 text-sm font-medium font-['Poppins'] 
      outline-1 outline-offset-[-0.50px] outline-neutral-200 uppercase leading-none tracking-wide py-4 px-3 mb-4">
        <span>Product</span>
        <span>Price</span>
        <span>Stock Status</span>
        <span></span>
      </div>

      {/* Wishlist Items */}
      <div className="space-y-4">
        {wishlistItems.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-4 items-center gap-4  border-b border-gray-200 pb-4"
          >
            {/* Column 1: Image, Name, Rating */}
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover border"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <div className="flex text-yellow-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Price */}
            <p className="text-green-600 font-medium">{item.price}</p>

            {/* Column 3: Stock Status */}
            <p
              className={`font-medium ${
                item.stock === "In Stock"
                  ? "text-green-600"
                  : item.stock === "Low Stock"
                  ? "text-yellow-600"
                  : "text-red-500"
              }`}
            >
              {item.stock}
            </p>

            {/* Column 4: Add to Cart + Close Icon */}
            <div className="flex items-center gap-3">
              <button
                className={`px-3 py-1 text-sm rounded ${
                  item.stock === "Out of Stock"
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600 transition"
                }`}
                disabled={item.stock === "Out of Stock"}
              >
                Add to Cart
              </button>
              <button className="text-gray-400 hover:text-red-500 transition">
                <IoCloseOutline size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Share Section */}
      <div className="flex items-center py-4 px-3 outline-1 outline-offset-[-0.50px] outline-neutral-200 gap-4 mt-6">
        <span className=" text-zinc-900 text-sm font-normal font-['Poppins'] leading-tight">Share:</span>
        <div className="flex gap-3 text-gray-500">
          <a href="#" className="hover:text-blue-600"><FaFacebookF size={18} /></a>
          <a href="#" className="hover:text-sky-500"><FaTwitter size={18} /></a>
          <a href="#" className="hover:text-red-500"><FaPinterestP size={18} /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram size={18} /></a>
        </div>
      </div>
    </div>
     </div>
  );
};

export default WishList;
