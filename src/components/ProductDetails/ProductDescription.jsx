import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProductDescription = () => {
  return (
    <div className="container grid md:grid-cols-2 gap-8 mt-6">
      {/* Left Content */}
      <div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac,
          viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra.
          Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt
          metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci
          vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis,
          metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque
          tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> 100 g of fresh leaves provides.
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Aliquam ac est at augue volutpat elementum.
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Quisque nec enim eget sapien molestie.
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Proin convallis odio volutpat finibus posuere.
          </li>
        </ul>

        <p className="text-gray-600 leading-relaxed mt-4">
          Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros
          non turpis lobortis iaculis at ut massa.
        </p>
      </div>

      {/* Right Content */}
      <div>
        {/* Video/Image */}
        <div className="relative">
          <img
            src="/images/pdetails/deliveryman.png"
            alt="Video Thumbnail"
            className="w-full rounded-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="border rounded-lg p-4 flex items-center gap-3">
            <img src="/images/pdetails/price-tag 1.png" alt="Discount Icon" className="w-6 h-6" />
            <div>
              <h4 className="font-semibold text-gray-800">64% Discount</h4>
              <p className="text-sm text-gray-500">Save your 64% money with us</p>
            </div>
          </div>
          <div className="border rounded-lg p-4 flex items-center gap-3">
            <img src="/images/pdetails/Group.png" alt="Organic Icon" className="w-6 h-6" />
            <div>
              <h4 className="font-semibold text-gray-800">100% Organic</h4>
              <p className="text-sm text-gray-500">100% Organic Vegetables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
