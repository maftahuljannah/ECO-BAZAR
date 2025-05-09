import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ title, price, oldPrice, image }) => {
  return (
    <div className='productCard border border-gray-300 rounded-lg hover:shadow-lg transition-all'>
      <div className="productThumble">
        <Link to="#">
          <img src={image} className='max-w-full mx-auto bg-white' alt={title} />
        </Link>
      </div>

      <div className="productCnt p-4">
        <Link to="#" className="text-neutral-600 text-sm font-normal leading-tight block">
          {title}
        </Link>
        <p className="text-zinc-900 text-base font-medium leading-normal">
          ${price.toFixed(2)}{' '}
          <del className="text-neutral-400 text-base line-through">${oldPrice.toFixed(2)}</del>
        </p>
      </div>
    </div>
  )
}

export default ProductCard
