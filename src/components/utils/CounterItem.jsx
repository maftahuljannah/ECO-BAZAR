// components/CounterItem.jsx
import React from 'react';
import CountUp from 'react-countup';

const CounterItem = ({ end, suffix, title }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm py-10 rounded-lg flex flex-col items-center text-center">
      <h3 className="text-green-600 text-5xl sm:text-6xl font-light mb-2">
        <CountUp end={end} duration={2.5} enableScrollSpy scrollSpyOnce />
        {suffix}
      </h3>
      <p className="text-white text-lg">{title}</p>
    </div>
  );
};

export default CounterItem;
