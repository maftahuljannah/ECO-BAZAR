import React, { useEffect, useState } from 'react';
import ProductCard from '../utils/ProductCard';

const Featured = ({ limit = 4 }) => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=30`)
      .then(res => res.json())
      .then(data => {
        setFeature(data?.products || []);
      });
  }, [limit]);

  return (
    <section id='featured' className='mt-[100px]'>
      <div className="container">
      
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {feature.map(product => (
            <ProductCard
            key={product.id}
           title={product.title}
           price={product.price}
           oldPrice={product.price / (1 - product.discountPercentage / 100)}
           image={product.thumbnail}
           discountPercentage={product.discountPercentage}
            />
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Featured;
