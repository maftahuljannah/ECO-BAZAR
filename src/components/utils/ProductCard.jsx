import React from 'react'
import { Link } from 'react-router-dom'
import { SlHandbag } from "react-icons/sl";
import Rating from '../utils/Rating'


const ProductCard = ({ title, price, oldPrice, image }) => {
  return (
    <div className='productCard border border-gray-300 rounded-lg hover:border-branding-success transition-all'>
      <div className="productThumble">
        <Link to="#">
          <img src={image} className='max-w-full mx-auto bg-white' alt={title} />
        </Link>
      </div>

      <div className="productCnt relative p-4">
        <Link to="#" className="text-gray-scale-gray-700 text-sm font-normal leading-tight block">
          {title}
        </Link>
        <p className="text-gray-scale-gray-900 text-[16px] font-[500px] leading-normal mt-2">
          ${price.toFixed(2)}{' '}
          <del className="text-gray-scale-gray-400 text-base line-through">${oldPrice.toFixed(2)}</del>
        </p>
      <Rating count={3}/>
        <Link className='absolute top-1/8 right-6 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full translate-y-[50%]'>
      <SlHandbag />
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
