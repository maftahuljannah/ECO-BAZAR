// ShopHeader.jsx
import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import SearchProductCard from "../utils/SearchProductCard"; // adjust path if needed
import { Link } from "react-router";

const ShopHeader = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const containerRef = useRef(null);
  const debounceRef = useRef(null);

  // Debounced live search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowResults(false);
      setLoading(false);
      return;
    }

    setLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data?.products || []);
          setShowResults(true);
        })
        .catch((err) => {
          console.error("Search error:", err);
          setResults([]);
        })
        .finally(() => setLoading(false));
    }, 300); // 300ms debounce

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src="/images/Logo.png" alt="Logo" className="h-10" />
        </div>

     {/* Search box */}
<div ref={containerRef} className="relative flex-1 mx-6 max-w-2xl">
  <div className="flex items-center w-full max-w-lg border border-gray-300 rounded overflow-hidden bg-white">
    {/* Input with icon inside */}
    <div className="relative flex-grow">
      <FiSearch
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => { if (results.length) setShowResults(true); }}
        className="w-full py-2 pl-10 pr-3 outline-none"
      />
    </div>

    {/* Search button (Link) */}
    <Link
      to="/"
      className="bg-branding-success px-4 py-2 text-white whitespace-nowrap"
    >
      Search
    </Link>
  </div>

  {/* Dropdown results */}
  {showResults && (
    <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-50 max-h-96 overflow-auto p-3">
      {loading ? (
        <p className="text-sm text-gray-500">Searching...</p>
      ) : results.length > 3 ? (
        <div className="grid gap-2">
          {results.map((product) => (
            <SearchProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">No products found.</p>
      )}
    </div>
  )}
</div>


        {/* Wishlist + Cart */}
        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-green-500">
            <AiOutlineHeart size={26} />
          </button>
          <div className="flex items-center gap-2 text-gray-700">
            <AiOutlineShoppingCart size={26} />
            <span className="text-sm">Shopping cart: <br /> <strong>$57.00</strong></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
