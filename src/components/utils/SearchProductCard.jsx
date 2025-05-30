import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const SearchProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <Link to="#" className="grid lg:grid-cols-4  place-items-center">
        <div className="productImage lg:col-span-1"> 
          <img src={product?.images[0]} alt={product.title} /> 
        </div>
        <div className="productDetails lg:col-span-3">
          <h4 className="text-lg">{product.title}</h4>
          <p className="text-sm">${product.price}</p>
         <p className='text-sm flex items-center gap-2'>
         <span className="text-amber-400 flex">
         <FaStar /><FaStar /><FaStar />
         </span>{product.rating}

         </p>
        </div>
      </Link>
    </div>
  )
}

export default SearchProductCard
