import React, { useState, useEffect } from 'react';
import { CgHome } from "react-icons/cg";
import { RiArrowRightSLine } from "react-icons/ri";

const ShopBanner = () => {

  const targetDate = new Date(2025, 7, 12, 12, 0, 0).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 30, hours: 20, minutes: 30, seconds: 10 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className='container mx-auto px-4 py-6'>
      {/* Breadcrumb */}
      <div className="heading flex items-center gap-2 mb-4">
        <CgHome className="text-gray-600" />
        <RiArrowRightSLine />
        <h3 className="text-stone-500">Categories</h3>
        <RiArrowRightSLine />
        <p className="text-green-600">Vegetables</p>
      </div>

      {/* Banner */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="/images/shopimages/Discount Bannar.png"
          alt="Discount Banner"
          className="w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-10">
          <p className="w-96  text-white text-sm font-medium uppercase tracking-wider mb-2">Best Deals</p>
          <h2 className="w-96  text-white text-4xl font-semibold leading-[48px]mb-4">Sale of the Month</h2>

          {/* Countdown */}
          <div className="flex gap-6 mb-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <p className="w-10 text-center text-green-600 text-2xl font-normal leading-9">
                  {String(item.value).padStart(2, '0')}
                </p>
                <p className="opacity-50 text-center  text-white text-xs font-normal uppercase leading-3 tracking-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
       
        {/* Shop Now Button */}
          <button className="btn absolute bottom-[70px] left-[30px]">
            Shop Now →
          </button>

        {/* Discount Badge */}
        <div className="absolute top-[100px] left-[500px] py-6 bg-amber-500 rounded-full items-center"> 
         <h5 className='w-24 text-center text-white text-2xl font-semibold  leading-9'>56%</h5> 
         <p className='text-center text-white/80 text-sm font-medium  uppercase leading-none tracking-wide'>OFF</p>  
          
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
