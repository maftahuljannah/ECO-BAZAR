import React, { useState } from "react";
import { CgHome } from "react-icons/cg";
import { RiArrowRightSLine } from "react-icons/ri";

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className="section">
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
          <p className="text-green-600">Checkout</p>
        </div>
      </div>

      {/* Main Checkout Section */}
      <div className="container mx-auto mt-[100px] mb-[100px] px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Billing Information */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-6">Billing Information</h2>

          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Your last name"
                  className="border  border-gray-300 rounded-md p-3 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Company Name (optional)</label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="border  border-gray-300 rounded-md p-3 w-full"
                />
              </div>
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-sm font-medium mb-1">Street Address</label>
              <input
                type="text"
                placeholder="Street Address"
                className="border  border-gray-300 rounded-md p-3 w-full"
              />
            </div>

            {/* Country / Region - State - Zip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Country / Region</label>
                <select className="border  border-gray-300 rounded-md p-3 w-full">
                  <option>Select</option>
                  <option>Bangladesh</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <select className="border  border-gray-300 rounded-md p-3 w-full">
                  <option>Select</option>
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Khulna</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Zip Code</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="border  border-gray-300 rounded-md p-3 w-full"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border  border-gray-300 rounded-md p-3 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border  border-gray-300 rounded-md p-3 w-full"
                />
              </div>
            </div>

            {/* Ship to a different address */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <label className="text-sm">Ship to a different address</label>
            </div>

            {/* Additional Info */}
            <div>
              <h3 className="text-lg font-semibold mt-6 mb-2">Additional Info</h3>
              <label className="block text-sm font-medium mb-1">Order Notes (Optional)</label>
              <textarea
                rows="4"
                placeholder="Notes about your order, e.g. special notes for delivery"
                className="border  border-gray-300 rounded-md p-3 w-full"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="border  border-gray-300 mt-[40px] rounded-lg p-8 h-fit">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          {/* Items */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="/images/shopimages/shop10.png"
                  alt="Green Capsicum"
                  className="w-10 h-10"
                />
                <span>Green Capsicum x5</span>
              </div>
              <span>$70.00</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="/images/shopimages/shop15.png"
                  alt="Red Capsicum"
                  className="w-10 h-10"
                />
                <span>Red Capsicum x1</span>
              </div>
              <span>$14.00</span>
            </div>
          </div>

          {/* Totals */}
          <div className="border-t mt-4 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$84.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>$84.00</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Payment Method</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                  className="w-4 h-4 text-green-600"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                  className="w-4 h-4 text-green-600"
                />
                Paypal
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "amazon"}
                  onChange={() => setPaymentMethod("amazon")}
                  className="w-4 h-4 text-green-600"
                />
                Amazon Pay
              </label>
            </div>
          </div>

          {/* Place Order Button */}
          <button className="mt-6 w-full bg-branding-success text-white py-3 rounded-md font-medium hover:bg-green-700 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
