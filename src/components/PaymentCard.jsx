import React from 'react';
import { IoBagCheckOutline } from "react-icons/io5";
import { LuHeadphones } from "react-icons/lu";
import { TbBus } from "react-icons/tb";
import { BsBox } from "react-icons/bs";

const PaymentCard = () => {
  return (
    <section className="mt-20">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {/* CARD 1 */}
        <div className="card flex flex-col items-center text-center rounded shadow p-4 group relative">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 bg-icon-bg transition-all duration-300 group-hover:bg-branding-success">
          <TbBus className="w-8 h-8 text-branding-success transition-all duration-300 group-hover:text-white" />
          </div>
          <h3 className="font-semibold text-lg leading-[150%] mt-3">Free Shipping</h3>
          <p className="text-sm leading-[150%] mt-2 text-gray-500">Free shipping with discount</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-branding-success transition-all duration-300"></div>
        </div>

        {/* CARD 2 */}
        <div className="card flex flex-col items-center text-center rounded shadow p-4 group relative">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 bg-icon-bg transition-all duration-300 group-hover:bg-branding-success">
          <LuHeadphones className="w-8 h-8 text-branding-success transition-all duration-300 group-hover:text-white" />
          </div>
          <h3 className="font-semibold text-lg leading-[150%] mt-3">Great Support 24/7</h3>
          <p className="text-sm leading-[150%] mt-2 text-gray-500">Instant access to Contact</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-branding-success transition-all duration-300"></div>
        </div>

        {/* CARD 3 */}
        <div className="card flex flex-col items-center text-center rounded shadow p-4 group relative">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 bg-icon-bg transition-all duration-300 group-hover:bg-branding-success">
            <IoBagCheckOutline className="w-8 h-8 text-branding-success transition-all duration-300 group-hover:text-white" />
          </div>
          <h3 className="font-semibold text-lg leading-[150%] mt-3">100% Sucure Payment</h3>
          <p className="text-sm leading-[150%] mt-2 text-gray-500">We ensure your money is save</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-branding-success transition-all duration-300"></div>
        </div>

        {/* CARD 4 */}
        <div className="card flex flex-col items-center text-center rounded shadow p-4 group relative">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 bg-icon-bg transition-all duration-300 group-hover:bg-branding-success">
          <BsBox  className="w-8 h-8 text-branding-success transition-all duration-300 group-hover:text-white" />
          </div>
          <h3 className="font-semibold text-lg leading-[150%] mt-3">Money-Back Guarantee</h3>
          <p className="text-sm leading-[150%] mt-2 text-gray-500">30 days money-back</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-branding-success transition-all duration-300"></div>
        </div>

      </div>
    </section>
  );
};

export default PaymentCard;
