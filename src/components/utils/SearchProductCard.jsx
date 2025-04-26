import React from 'react'
import { Link } from 'react-router-dom'  // ✅ Correct import

const SearchProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <Link to="#" className="grid lg:grid-cols-4 place-items-center"> {/* ✅ "#" diye link */}
        <div className="productImage lg:col-span-1"> {/* ✅ "col-span" spelling fix */}
          <img src={product.thumbnail} alt={product.title} /> {/* ✅ product image dynamic */}
        </div>
        <div className="productDetails lg:col-span-3">
          <h4 className="text-lg">{product.title}</h4>
          <p className="text-sm">${product.price}</p>
          ⭐⭐⭐⭐⭐
        </div>
      </Link>
    </div>
  )
}

export default SearchProductCard
