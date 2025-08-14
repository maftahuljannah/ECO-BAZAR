import React from 'react';
import {  FaStar } from 'react-icons/fa';
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className=" rounded-lg outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition relative">
      {product.badge && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {product.badge}
        </span>
      )}
      <img src={product.image} alt={product.name} className=" object-cover" />
      <div className="p-4">
        <h3 className="w-72  text-neutral-600 text-sm font-normal leading-tight">{product.name}</h3>
       
        <div className="flex items-center gap-2">
          <span className=" text-zinc-900 text-base font-medium">${product.price}</span>
          {product.oldPrice && (
            <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
          )}
        </div>
        {/* rating */}
        <div className="flex items-center gap-1 my-2">
     {[...Array(5)].map((_, i) => (
    <FaStar
      key={i}
      className={i < product.rating ? "text-yellow-500" : "text-yellow-500"}
    />
       ))}
      </div>      
         {/* Wishlist Icons */}
        <div className="wishlist absolute -top-[250px] right-5 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 transition-all duration-300">
          <div className="relative group">
            <Link className="bg-white shadow-md w-10 h-10 rounded-full flex justify-center items-center text-gray-700 hover:text-red-500">
              <IoHeartOutline size={25} />
            </Link>
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
              Go to wishlist
            </span>
          </div>
          <div className="relative group">
            <Link className="bg-white shadow-md w-10 h-10 rounded-full flex justify-center items-center text-gray-700 hover:text-blue-500">
              <IoEyeOutline size={25} />
            </Link>
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
              Quick view
            </span>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ProductCard;
