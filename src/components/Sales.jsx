import React from 'react';
import Countdown from 'react-countdown';
import { GoArrowRight } from "react-icons/go";

const Sales = () => {
  const countdownDate = Date.now() + 30 * 24 * 60 * 60 * 1000;

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="flex text-white gap-4 mb-4 text-sm font-medium">
      <div className="text-center">
        <div className="text-lg font-bold">{days}</div>
        <div className="uppercase">Days</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold">{hours}</div>
        <div className="uppercase">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold">{minutes}</div>
        <div className="uppercase">Mins</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold">{seconds}</div>
        <div className="uppercase">Secs</div>
      </div>
    </div>
  );

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-4 mt-20">
      
      {/* ------------ Image 1 Section ------------ */}
      <div className="image1 relative min-h-[300px]">
        <img
          src="/images/fruit&vagetable1.png"
          alt="Fruit & Veg 1"
          className="w-full h-auto object-cover"
        />
        <div className="cnt absolute top-4 sm:top-[20%] left-4 sm:left-[10%] w-[90%] sm:w-auto">
          <p className="text-white text-sm font-medium uppercase tracking-wide">
            100% Organic
          </p>
          <h3 className="text-white text-2xl sm:text-4xl font-semibold mt-2 mb-3 leading-snug">
            Fruit & Vegetable
          </h3>
          <p className="opacity-80 text-white text-sm sm:text-base mb-1">
            Starting at:
            <span className="px-2 py-1 ml-2 bg-amber-500 rounded-[5px] inline-flex items-start gap-2.5">
              $11.99
            </span>
          </p>
          <div className="btn mt-4 sm:mt-6 text-white flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md w-fit transition-all">
            Shop Now <GoArrowRight />
          </div>
        </div>
      </div>

      {/* ------------ Image 2 Section ------------ */}
      <div className="image2 relative min-h-[300px]">
        <img
          src="/images/fruit&vagetable2.png"
          alt="Fruit & Veg 2"
          className="w-full h-auto object-cover"
        />
        <div className="cnt absolute top-4 sm:top-[20%] left-4 sm:left-[10%] w-[90%] sm:w-auto">
          <p className="text-white text-sm font-medium uppercase tracking-wide">
            SALE OFF THE WEEK
          </p>
          <h3 className="text-white text-2xl sm:text-4xl font-semibold mt-2 mb-3 leading-snug">
            Sales of the Year
          </h3>

          <Countdown date={countdownDate} renderer={renderer} />

          <p className="opacity-80 text-white text-sm sm:text-base mb-1">
            Starting at:
            <span className="px-2 py-1 ml-2 bg-amber-500 rounded-[5px] inline-flex items-start gap-2.5">
              $11.99
            </span>
          </p>
          <div className="btn mt-4 sm:mt-6 text-white flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md w-fit transition-all">
            Shop Now <GoArrowRight />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sales;
