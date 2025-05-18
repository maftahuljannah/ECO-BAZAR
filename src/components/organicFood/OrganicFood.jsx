import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const OrganicFood = () => {
  return (
    <section id='organicFood' className='mb-16 px-4 sm:px-6 lg:px-8'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Image Section */}
        <div className="image flex justify-center">
          <img 
            src="/images/banner-2.png" 
            alt="Organic Banner" 
            className="w-full max-w-md sm:max-w-lg md:max-w-full h-auto object-contain" 
          />
        </div>

        {/* Content Section */}
        <div className="content">
          <h2 className="text-zinc-900 text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-6">
            100% Trusted <br /> Organic Food Store
          </h2>

          <h4 className="text-zinc-900 text-base sm:text-lg font-medium leading-relaxed flex items-start gap-2 mb-2">
            <BsCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white bg-green-600 rounded-full p-1" />
            Healthy & natural food for lovers of healthy food.
          </h4>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-4">
            Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. 
            Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum.
          </p>

          <h4 className="text-zinc-900 text-base sm:text-lg font-medium leading-relaxed flex items-start gap-2 mb-2">
            <BsCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white bg-green-600 rounded-full p-1" />
            Healthy & natural food for lovers of healthy food.
          </h4>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
            Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. 
            Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum.
          </p>

          <Link 
            className='btn mt-6 sm:mt-8 flex items-center gap-2 w-fit text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition-all duration-300' 
            to='/'
          >
            Shop Now <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrganicFood;
 