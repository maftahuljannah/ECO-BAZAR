import React from 'react';
import { FaQuoteRight, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Customer",
    image: "/images/testimonial-1.png",
    rating: 5,
    
  },
  {
    id: 2,
    name: "Dianne Russell",
    role: "Customer",
    image: "/images/testimonial-2.png",
    rating: 5,
    
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "Customer",
    image: "/images/testimonial-3.png",
    rating: 5,
   
  },
];

const CustomerTestimonials = () => {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/TestimonialsBG.png')" }}
    >
      <div className="container mb-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className=" text-green-600 text-base font-normal font-['Segoe_Script'] uppercase leading-tight">TESTIMONIAL</p>
            <h2 className=" text-zinc-900 text-4xl font-semibold leading-[48px]">What Our Customer Says</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 transition flex items-center justify-center">
              <FaArrowLeft />
            </button>
            <button className="w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition flex items-center justify-center">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-lg p-6 shadow-md relative transition-all duration-300`}
          >
            <FaQuoteRight className="text-green-600 opacity-30 text-2xl mb-4" />
            <p className="w-96  text-neutral-600 text-sm font-normal leading-tight mb-6">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna
              dictum, bibendum cursus velit sodales. Donec sed neque eget.
            </p>

            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
              />
              <div>
                <h4 className="text-center text-zinc-900 text-base font-medium">{item.name}</h4>
                <p className="text-sm text-gray-400 border-t border-dashed pt-1 w-fit">{item.role}</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 flex text-orange-400">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
