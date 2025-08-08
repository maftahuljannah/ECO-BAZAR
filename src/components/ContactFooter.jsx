import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactFooter = () => {
  return (
    <div className="bg-white py-12">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Logo Row */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 mb-12 pb-8">
          <img
            src="/images/CFImg-1.png"
            alt="Steps"
            className="h-6 grayscale hover:grayscale-0 transition duration-300 border-r border-gray-300 pr-4"
          />
          <img
            src="/images/CFImg-2.png"
            alt="Mango"
            className="h-6 grayscale hover:grayscale-0 transition duration-300 border-r border-gray-300 pr-4"
          />
          <img
            src="/images/CFImg-3.png"
            alt="Food"
            className="h-6 grayscale hover:grayscale-0 transition duration-300 border-r border-gray-300 pr-4"
          />
          <img
            src="/images/CFImg-4.png"
            alt="Book Off"
            className="h-6 grayscale hover:grayscale-0 transition duration-300 border-r border-gray-300 pr-4"
          />
          <img
            src="/images/CFImg-5.png"
            alt="G Series"
            className="h-6 grayscale hover:grayscale-0 transition duration-300 border-r border-gray-300 pr-4"
          />
          <img
            src="/images/CFImg-6.png"
            alt="Logo"
            className="h-6 grayscale hover:grayscale-0 transition duration-300 border-r border-gray-300 pr-4"
          />
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Location Card */}
          <div className="border border-green-100 rounded-xl p-6 bolck items-start gap-4 bg-white shadow-sm hover:shadow-md transition">
            <div className="bg-green-100 text-green-600 p-3 rounded-full inline-block">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">OUR LOCATION</h4>
              <p className="text-xs text-gray-500 mt-1">
                1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="border border-green-100 rounded-xl p-6 items-start gap-4 bg-white shadow-sm hover:shadow-md transition">
            <div className="bg-green-100 text-green-600 p-3 rounded-full inline-block">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">CALL US 24/7</h4>
              <p className="text-green-600 font-semibold text-sm mt-1">(303) 555–0105</p>
            </div>
          </div>

          {/* Newsletter Card */}
          <div className="border border-green-100 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition md:col-span-2">
            <div className="items-start gap-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-full inline-block">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">SUBSCRIBE NEWSLETTER</h4>
              </div>
            </div>
            <form className="mt-4 flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="ml-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter
