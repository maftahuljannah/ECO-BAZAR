// components/Counter.jsx
import React from 'react';
import CounterItem from './utils/CounterItem';

const Counter = () => {
  return (
    <div className="counterBg w-full h-auto py-16 relative bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 z-10">
        
        <CounterItem end={37} suffix="+" title="Years of Hard Work" />
        <CounterItem end={500} suffix="k+" title="Happy Customer" />
        <CounterItem end={28} suffix="" title="Qualified Team Member" />
        <CounterItem end={750} suffix="k+" title="Monthly Orders" />

        {/* Decorative Images */}
        <div className="absolute top-0 left-0 z-0">
          <img src="/images/countObj-1.png" alt="" className="w-24 sm:w-32" />
        </div>
        <div className="absolute -top-20 right-20 z-0">
          <img src="/images/countObj-2.png" alt="" className="w-24 sm:w-32" />
        </div>
      </div>

    </div>




  );
};

export default Counter;
