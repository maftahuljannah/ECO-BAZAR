import React from 'react';
import { GoArrowRight } from "react-icons/go";

const Sales = () => {
  return (
   <div className="container grid grid-cols-2 gap-6 bg-gray-100 p-4 mt-20">
      <div className="image1 relative">
        <img src="/images/fruit&vagetable1.png" alt="Fruit & Veg 1" className="w-full h-auto" />
        <div className="cnt absolute top-[20%] left-[10%]">
          <p className=" text-white text-sm font-medium  uppercase leading-none tracking-wide">100% Organic</p>
          <h3 className=" text-white text-4xl font-semibold leading-10 mt-2 mb-5">Fruit & Vegetable</h3>
          <p className="opacity-80  text-white text-sm font-normal leading-tight">Starting at:
             <span className="px-2 py-1 ml-2 bg-amber-500 rounded-[5px] inline-flex  items-start gap-2.5">
  $11.99</span></p>
          <div className="button btn mt-6">
        Shop Now <GoArrowRight />
          </div>
        </div>
      </div>
      <div className="image2 relative">
        <img src="/images/fruit&vagetable2.png" alt="Fruit & Veg 2" className="w-full h-auto" />

   <div className="cnt absolute top-[20%] left-[10%]">
          <p className=" text-white text-sm font-medium  uppercase leading-none tracking-wide">sale off the week</p>
          <h3 className=" text-white text-4xl font-semibold leading-10 mt-2 mb-5">Sales of the Year</h3>
          <p className="opacity-80  text-white text-sm font-normal leading-tight">Starting at:
             <span className="px-2 py-1 ml-2 bg-amber-500 rounded-[5px] inline-flex  items-start gap-2.5">
  $11.99</span></p>
          <div className="button btn mt-6">
        Shop Now <GoArrowRight />
          </div>
        </div>

      </div>
    
    </div>
  );
};

export default Sales;
