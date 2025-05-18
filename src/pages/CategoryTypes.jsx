import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/utils/Breadcrum';
import ProductCard from '../components/utils/ProductCard'; 

const CategoryTypes = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      });
  }, [name]);

  return (
    <div>
      <Breadcrum url={`/categorytype/${name}`} title={name} />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 my-8 gap-6">
        {products?.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            oldPrice={Math.round(product.price / (1 - product.discountPercentage / 100))}
            image={product.images[0]}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryTypes;
