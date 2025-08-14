import React from "react";

const Pagination = ({ totalProducts, productsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-3 py-1 border rounded ${
            currentPage === index + 1
              ? "bg-green-500 text-white"
              : "hover:bg-gray-100"
          }`}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          className="px-3 py-1 border rounded hover:bg-gray-100"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
