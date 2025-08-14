import React, { useState, useRef } from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { CgHome } from "react-icons/cg";
import { RiArrowRightSLine } from "react-icons/ri";
import ProductDescription from "./ProductDescription";
import AdditionalInformation from "./AdditionalInfomation";
import CustomerFeedback from "./CustomerFeedback";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const images = [
    "/images/pdetails/chinese-cabbage1 (5).png",
    "/images/pdetails/chinese-cabbage1 (2).png",
    "/images/pdetails/chinese-cabbage1 (3).png",
    "/images/pdetails/chinese-cabbage1 (4).png",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  // Refs for sections
  const descriptionRef = useRef(null);
  const infoRef = useRef(null);
  const feedbackRef = useRef(null);

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="relative">
        <img
          src="/images/breadcrum.png"
          alt="Breadcrumb Background"
          className="w-full object-cover"
        />
        <div className="absolute md:top-[50px] md:left-[250px] z-50 flex flex-wrap items-center gap-2 text-sm md:text-base bg-white/70 md:bg-transparent p-2 rounded md:p-0">
          <CgHome className="text-gray-400" />
          <RiArrowRightSLine className="text-stone-400" />
          <h3 className="text-stone-400">Categories</h3>
          <RiArrowRightSLine className="text-stone-400" />
          <p className="text-green-600">Vegetables</p>
        </div>
      </div>

      {/* Product Info */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        {/* Left images */}
        <div>
          <div className=" rounded-lg overflow-hidden">
            <img
              src={mainImage}
              alt="Chinese Cabbage"
              className="w-full max-h-[400px] object-contain"
            />
          </div>
          <div className="flex gap-3 mt-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="thumb"
                onClick={() => setMainImage(img)}
                className={`w-16 h-16 border rounded-lg cursor-pointer hover:border-green-500 ${
                  mainImage === img ? "border-green-500" : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right details */}
        <div>
          <h1 className="text-2xl font-bold">Chinese Cabbage</h1>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm text-gray-500">(1 Review)</span>
            <span className="text-green-600 text-xs font-semibold bg-green-100 px-2 py-0.5 rounded">
              IN STOCK
            </span>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-3">
            <span className="text-2xl font-bold text-green-600">$17.28</span>
            <span className="line-through text-gray-400">$48.00</span>
            <span className="text-red-500 text-sm font-medium">-64%</span>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus...
          </p>

          {/* Quantity & Actions */}
          <div className="mt-5 flex items-center gap-4 flex-wrap">
            <div className="flex border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-3 py-1 border-r"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border-l"
              >
                +
              </button>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">
              Add to cart
            </button>
            <button className="border p-2 rounded-lg hover:bg-gray-100">
              <FaRegHeart />
            </button>
            <button className="border p-2 rounded-lg hover:bg-gray-100">
              <FiShare2 />
            </button>
          </div>

          {/* Category & Tags */}
          <div className="mt-6 text-sm text-gray-500 space-y-1">
            <p>
              Category: <span className="text-gray-700">Vegetables</span>
            </p>
            <p>
              Tags:{" "}
              <span className="text-gray-700">
                Vegetable, Healthy, Chinese, Cabbage
              </span>
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="md:col-span-2 mt-10">
          <div className="flex flex-wrap border-b">
            <button
              onClick={() => handleScrollTo(descriptionRef)}
              className="px-4 md:px-6 py-3 text-sm font-medium border-b-2 border-green-500 text-green-600"
            >
              Description
            </button>
            <button
              onClick={() => handleScrollTo(infoRef)}
              className="px-4 md:px-6 py-3 text-sm font-medium border-b-2 border-transparent text-gray-500"
            >
              Additional Information
            </button>
            <button
              onClick={() => handleScrollTo(feedbackRef)}
              className="px-4 md:px-6 py-3 text-sm font-medium border-b-2 border-transparent text-gray-500"
            >
              Customer Feedback
            </button>
          </div>
        </div>

        {/* Sections */}
        <div ref={descriptionRef} className="md:col-span-2">
          <ProductDescription />
        </div>
        <div ref={infoRef} className="md:col-span-2">
          <AdditionalInformation />
        </div>
        <div ref={feedbackRef} className="md:col-span-2">
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
