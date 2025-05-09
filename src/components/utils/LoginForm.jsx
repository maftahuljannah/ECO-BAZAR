import React, { useState } from 'react';

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // এখানে তুমি চাইলে API call করতে পারো।
    // আমরা এখন ডেমো হিসেবে শুধু success message দেখাচ্ছি
    setIsLoggedIn(true);
  };

  return (
    <div className="p-4">
      {isLoggedIn ? (
        <div className="text-green-600 font-medium text-center">
          ✅ Login complete!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
