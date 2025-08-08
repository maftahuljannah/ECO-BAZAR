import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const PromoSection = () => {
  const hotDeals = [
    { id: 1, title: 'Green Apple', price: 14.99, rating: 4, image: '/images/hot deal-1.png' },
    { id: 2, title: 'Indian Malta', price: 14.99, rating: 5, image: '/images/hot deal-4.png' },
    { id: 3, title: 'Green Lettuce', price: 14.99, rating: 3, image: '/images/hot deal-7.png' },
  ];

  const bestSellers = [
    { id: 4, title: 'Eggplant', price: 14.99, rating: 5, image: '/images/hot deal-2.png' },
    { id: 5, title: 'Red Capsicum', price: 14.99, oldPrice: 20.99, rating: 4, image: '/images/hot deal-5.png' },
    { id: 6, title: 'Red Tomatoes', price: 14.99, rating: 4, image: '/images/hot deal-8.png' },
  ];

  const topRated = [
    { id: 7, title: 'Big Potatoes', price: 14.99, rating: 5, image: '/images/hot deal-3.png' },
    { id: 8, title: 'Corn', price: 14.99, oldPrice: 20.99, rating: 4, image: '/images/hot deal-6.png' },
    { id: 9, title: 'Fresh Cauliflower', price: 14.99, rating: 5, image: '/images/hot deal-9.png' },
  ];

  const renderStars = (rating) => (
    <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
      {Array.from({ length: 5 }, (_, i) =>
        i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
      )}
    </div>
  );

  const renderProducts = (items) => (
    <div className="grid gap-4">
      {items.map(product => (
        <div key={product.id} className="flex items-center gap-6 p-3 rounded-xl border border-gray-200 shadow hover:border-green-400 transition">
          <img src={product.image} alt={product.title} />
          <div>
            <h4 className="w-72 text-neutral-600 text-sm font-normal leading-tight">{product.title}</h4>

            {/* Price Section */}
            <div className="flex items-center gap-2 text-sm mt-1">
              <span className=" text-zinc-900 text-base font-medium leading-normal">${product.price}</span>
              {product.oldPrice && (
                <>
                  <span className="line-through text-gray-400">${product.oldPrice}</span>
                  <span className="text-red-500 text-xs font-medium">
                    {(((product.oldPrice - product.price) / product.oldPrice) * 100).toFixed(0)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Star Rating Below Price */}
            {renderStars(product.rating)}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCategory = (title, items) => (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h3 className=" text-zinc-900 text-2xl font-medium leading-9">{title}</h3>
      </div>
      {renderProducts(items)}
    </div>
  );

  return (
    <section className="mt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {renderCategory('Hot Deals', hotDeals)}
        {renderCategory('Best Seller', bestSellers)}
        {renderCategory('Top Rated', topRated)}

        {/* Promo Banner */}
        <div className="relative w-full h-[750px] rounded-2xl">
          <img
            src="/images/hot deal banner.png"
            alt="Promo"
            className="absolute top-[80px]"
          />
          <div className="absolute top-[130px] left-[58px] z-10 flex flex-col items-center justify-center text-center px-4">
            <p className="text-xs font-medium uppercase text-zinc-900 tracking-wide">Hot Sale</p>
            <h2 className="text-3xl font-normal text-zinc-900 leading-10 mt-1">
              <span className="font-semibold">Save 37%</span> on <br /> Every Order
            </h2>
            <a
              href="/shop"
              className="mt-4 inline-flex items-center gap-2 bg-white text-green-600 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition"
            >
              Shop Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
