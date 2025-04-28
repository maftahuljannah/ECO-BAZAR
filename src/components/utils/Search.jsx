import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchProductCard from "./SearchProductCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 3) {
      // ✅ fix: use "value", not "search"
      fetch(`https://dummyjson.com/products/search?q=${value}`)
        .then((res) => res.json())
        .then((data) => setSearchResult(data))
        .catch((error) => console.error("Search error:", error)); // ✅ optional error catch
    }
  };

  return (
    <>
      <button className="cursor-pointer">
        <FiSearch />
      </button>

      <div className="searchBox fixed inset-0 bg-white/60 backdrop-blur-[2px] z-10 lg:p-10">
        <div className="searchArea">
          <input
            onChange={handleSearch}
            type="search"
            className="w-full border-b-2 pb-5 border-gray-400 focus:border-[#00b207] outline-0"
            placeholder="Search"
          />
        </div>

        {search.length > 3 && (
          <div className="results grid lg:grid-cols-3 gap-4 mt-5">
            {searchResult?.products && searchResult.products.length > 0 ? (
              searchResult.products.map((product) => (
                <SearchProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>try anyting else!</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
