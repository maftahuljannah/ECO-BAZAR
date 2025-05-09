import React from 'react'
import ProductCard from '../utils/ProductCard'

const products = [
  { id: 1, title: 'Green Apple', price: 14.99, oldPrice: 20.99, image: '/images/apple.png' },
  { id: 2, title: 'Chanise Cabbage', price: 14.99, oldPrice: 15.99, image: '/images/cobbage.png' },
  { id: 3, title: 'Green Capsicum', price: 8.99, oldPrice: 12.99, image: '/images/capsicum.png' },
  { id: 4, title: 'Ladies Finger', price: 16.99, oldPrice: 21.99, image: '/images/ladiesfinger.png' },
]

const Featured = () => {
  return (
    <section id='featured' className='mt-[100px]'>
      <div className="container">
        <div className="header col-span-full mb-6">
          <h2 className='font-medium text-[40px] leading-[150%] text-gray-scale-gray-900'>
            Featured Products
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
