import React, { useState } from 'react';
import { CgHome } from "react-icons/cg";
import { RiArrowRightSLine } from "react-icons/ri";

const Scart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Green Capsicum",
      price: 14.0,
      quantity: 5,
      image: "/images/shopimages/shop10.png",
    },
    {
      id: 2,
      name: "Red Capsicum",
      price: 14.0,
      quantity: 1,
      image: "/images/shopimages/shop15.png",
    },
  ]);

  // Quantity increase
  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Quantity decrease
  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className='section'>
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
          <p className="text-green-600">Shopping-Cart</p>
        </div>
      </div>

      <div className="container mx-auto p-6 mt-[100px] mb-[100px]">
        <h1 className="text-zinc-900 text-3xl font-semibold leading-10 mb-6 text-center">
          My Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 border border-gray-300 rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-300 text-zinc-500 text-sm font-medium uppercase leading-none tracking-wide bg-gray-50">
                  <th className="p-4">PRODUCT</th>
                  <th className="p-4">PRICE</th>
                  <th className="p-4">QUANTITY</th>
                  <th className="p-4">SUBTOTAL</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-300">
                    <td className="p-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain"
                      />
                      {item.name}
                    </td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <div className="flex items-center border border-gray-300 rounded w-fit">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2 py-1"
                        >
                          −
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-2 py-1"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 font-bold text-lg"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Buttons */}
            <div className="flex justify-between p-4">
              <button className="px-4 py-2 text-neutral-600 text-sm font-semibold bg-gray-100 rounded hover:bg-gray-200">
                Return to shop
              </button>
              <button className="px-4 py-2 text-neutral-600 text-sm font-semibold bg-gray-100 rounded hover:bg-gray-200">
                Update Cart
              </button>
            </div>

            {/* Coupon */}
            <div className="flex items-center gap-4 p-4 border-t border-gray-300 flex-wrap">
              <h3 className="text-neutral-600 text-lg font-medium whitespace-nowrap">
                Coupon Code
              </h3>
              <div className="flex flex-1">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="border border-gray-300 px-4 py-2 rounded-full w-full focus:outline-none focus:border-green-500"
                />
                <button className="px-6 py-2 bg-zinc-900 text-white text-sm md:text-base font-semibold rounded-full hover:bg-gray-800 transition">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>

          {/* Cart Total */}
          <div className="border border-gray-300 rounded-lg p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between border-b pb-2 mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
              <span>Shipping:</span>
              <span className="text-green-500 font-medium">Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full bg-branding-success hover:bg-green-600 text-white py-2 rounded-full">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scart;
