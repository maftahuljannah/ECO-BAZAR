import React from 'react';
import CategorySlider from '../utils/CategorySlider';
import { Link } from 'react-router-dom'; // Assuming you'll link "See All"

const Categories = () => {
  return (
    <section id='topCategory' className='py-[80px] my-[80px] relative'>
      <div className="container">
        {/* Heading row */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-gray-scale-gray-900 text-4xl font-semibold leading-[48px]">
            Shop by Top Categories
          </h3>
          <Link
            to="/all-categories" // Change to your actual route
            className="text-branding-success text-base font-medium flex items-center"
          >
            See All
            <span className="ml-1 text-lg">→</span>
          </Link>
        </div>

        <CategorySlider />
      </div>

      {/* Decorative leaves */}
      <div className="leaf absolute -top-[20px] left-[35px]">
        <img src="/images/leaf.png" alt="" />
      </div>
    
    </section>
  );
};

export default Categories;

