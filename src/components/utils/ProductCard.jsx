import React from 'react';
import { Link } from 'react-router-dom';
import { SlHandbag } from "react-icons/sl";
import Rating from '../utils/Rating';
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";

const ProductCard = ({ title, price, oldPrice, image, discountPercentage }) => {
  return (
    <div className='productCard group border border-gray-300 rounded-lg hover:border-branding-success transition-all overflow-hidden relative'>
      <div className="productThumble relative">
        <Link to="#">
          <p className='bg-branding-error text-white py-[3px] px-[6px] text-sm inline-block rounded-sm top-4 left-4 absolute'>
            Save {Math.round(discountPercentage)}%
          </p>
          
          <img loading='lazy' src={image} className='max-w-full mx-auto bg-white' alt={title} />
        </Link>
      </div>

      <div className="productCnt relative p-4">
        <Link to="#" className="text-gray-scale-gray-700 text-sm font-normal leading-tight block">
          {title}
        </Link>
        <p className="text-gray-scale-gray-900 text-[16px] font-medium leading-normal mt-2">
          ${price.toFixed(2)}{' '}
          <del className="text-gray-scale-gray-400 text-base line-through">
            ${oldPrice.toFixed(2)}
          </del>
        </p>
        <Rating count={3} />

        <Link className='absolute top-[12%] right-6 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full'>
          <SlHandbag />
        </Link>

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
