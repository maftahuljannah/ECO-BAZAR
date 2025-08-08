import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-zinc-900 text-2xl font-semibold leading-9">
                Subscribe our Newsletter
              </h2>
              <p className="w-80 text-zinc-500 text-sm font-normal leading-tight mt-1">
                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                Phasellus imperdiet elit eu magna.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-80 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button className="bg-green-600 hover:bg-green-800 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Subscribe
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-2">
                {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map((Icon, index) => (
                  <div
                    key={index}
                    className="hover:bg-green-500 hover:text-white text-black p-2 rounded-full cursor-pointer"
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Section */}
        <div className=' bg-gray-900'>
        <div className=" container mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-white rounded-t-xl">
          {/* Logo and Contact */}
          <div className="max-w-xs">
            <div className="text-2xl font-bold text-green-500 mb-3">
              <img src="/images/FooterLogo.png" alt="Footer Logo" />
            </div>
            <p className="text-zinc-500 text-sm font-normal mb-4">
              Morbi cursus porttitor enim lobortis molestie.
              Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <div className="grid grid-cols-2 gap-2 items-center text-sm text-white">
              <p className="font-semibold">(219) 555–0114 <span className=" text-zinc-500 text-base font-normal leading-normal ml-1">or</span></p>
              <p className=" text-green-500 underline cursor-pointer">
              Proxy@gmail.com
              </p>
            </div>
          </div>

          {/* My Account */}
          <div>
            <h4 className="font-medium text-base leading-normal text-white mb-3">My Account</h4>
            <ul className="space-y-1 text-zinc-500 text-sm font-normal">
              <li>My Account</li>
              <li>Order History</li>
              <li className="text-white font-semibold">Shopping Cart</li>
              <li>Wishlist</li>
            </ul>
          </div>

          {/* Helps */}
          <div>
            <h4 className="font-medium text-base leading-normal text-white mb-3">Helps</h4>
            <ul className="space-y-1 text-zinc-500 text-sm font-normal">
              <li>Contact</li>
              <li>FAQs</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Proxy */}
          <div>
            <h4 className="font-medium text-base leading-normal text-white mb-3">Proxy</h4>
            <ul className="space-y-1 text-zinc-500 text-sm font-normal">
              <li>About</li>
              <li>Shop</li>
              <li>Product</li>
              <li>Track Order</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-base font-medium leading-normal mb-3">Categories</h4>
            <ul className="space-y-1 text-zinc-500 text-sm font-normal">
              <li>Fruit & Vegetables</li>
              <li>Meat & Fish</li>
              <li>Bread & Bakery</li>
              <li>Beauty & Health</li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-gray-800 text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
          <div className="flex gap-2">
            <img src="/images/apple-pay.png" alt="Apple Pay" className="h-6" />
            <img src="/images/visa.png" alt="Visa" className="h-6" />
            <img src="/images/discover.png" alt="Discover" className="h-6" />
            <img src="/images/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="/images/secure.png" alt="Secure Payment" className="h-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
