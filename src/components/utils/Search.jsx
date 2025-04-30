import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchProductCard from "./SearchProductCard";
import { IoClose } from "react-icons/io5";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isOpen, setIsopen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 3) {
      fetch(`https://dummyjson.com/products/search?q=${value}`)
        .then((res) => res.json())
        .then((data) => setSearchResult(data))
        .catch((error) => console.error("Search error:", error));
    }
  };

  const handleClose = () => {
    setIsopen(false);
    setSearchResult(null);
    setSearch("");
  };

  return (
    <>
      {/* Button to open the search modal */}
      <button className="cursor-pointer flex items-center justify-center" onClick={() => setIsopen(true)}>
        <FiSearch />
      </button>

      {/* Search Modal */}
      <div
        className={`searchBox fixed inset-0 bg-white/60 backdrop-blur-[2px] z-10 lg:p-10 transition-all duration-200 ${
          !isOpen
            ? "translate-y-[100%] opacity-0 invisible"
            : "translate-y-[0%] opacity-100 visible"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-10 cursor-pointer text-2xl"
        >
          <IoClose />
        </button>

        {/* Search input */}
        <div className="searchArea mt-20">
          <input
            onChange={handleSearch}
            type="search"
            value={search}
            className="w-full border-b-2 pb-5 border-gray-400 focus:border-[#00b207] outline-0"
            placeholder="Search"
          />
        </div>

        {/* Search results */}
        {search.length > 3 && (
          <div className="results grid lg:grid-cols-3 gap-4 mt-5">
            {searchResult?.products && searchResult.products.length > 0 ? (
              searchResult.products.map((product) => (
                <SearchProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>Try something else!</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
