import React from 'react'
import ProductCard from './utils/ProductCard'

const BestSeller = () => {

  const bestSellers = [
    { id: 1, title: 'Red Apple', price: 12.99, oldPrice: 18.99, image: '/public/images/apple2.png' },
    { id: 2, title: 'Broccoli', price: 10.99, oldPrice: 13.99, image: '/public/images/cobbage2.png' },
    { id: 3, title: 'Carrot', price: 7.99, oldPrice: 9.99, image: '/public/images/green chilli.png' },
    { id: 4, title: 'Tomato', price: 6.99, oldPrice: 8.99, image: '/public/images/corn.png' },
  ]

  return (
    <section id='bestseller' className='mt-[40px]'>
      <div className="container">
       {/* Title & View All */}
        <div className="flex justify-between items-center mb-6">
          <h2 className='font-medium text-[40px] leading-[150%] text-gray-scale-gray-900'>
            Best Sellers
          </h2>
          <a
            href="/products/bestsellers"
            className='text-green-600 text-base font-medium'
          >
            View All →
          </a>
        </div>
           {/* Product Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {bestSellers.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              image={product.image}
              discountPercentage={((product.oldPrice - product.price) / product.oldPrice) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSeller
