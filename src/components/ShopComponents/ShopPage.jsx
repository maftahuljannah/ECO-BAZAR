import React, { useState } from "react";
import FiltersBar from "./shoputils/FiltersBar";
import ProductGrid from "./shoputils/ProductGrid";
import Pagination from "./shoputils/Pagination";

const ShopPage = () => {
  // productlist
  const products = [
    { id: 1, name: "Red Chili", price: 2.5, image: "/public/images/shopimages/shop1.png" },
    { id: 2, name: "Big Potatos", price: 1.5, image: "/public/images/shopimages/shop2.png" },
    { id: 3, name: "Chanise Cabbage", price: 1.5, image: "/public/images/shopimages/shop3.png" },
    { id: 4, name: "Corn", price: 1.5, image: "/public/images/shopimages/shop4.png" },
    { id: 5, name: "Red Tomato", price: 1.5, image: "/public/images/shopimages/shop5.png" },
    { id: 6, name: "Eggplant", price: 1.5, image: "/public/images/shopimages/shop6.png" },
    { id: 7, name: "Fresh Cauliflower", price: 1.5, image: "/public/images/shopimages/shop7.png" },
    { id: 8, name: "Red chili", price: 1.5, image: "/public/images/shopimages/shop1.png" },
    { id: 9, name: "Green Apple", price: 1.5, image: "/public/images/shopimages/shop8.png" },
    { id: 10, name: "Fresh Mango", price: 1.5, image: "/public/images/shopimages/shop9.png" },
    { id: 11, name: "Green Capsicum", price: 1.5, image: "/public/images/shopimages/shop10.png" },
    { id: 12, name: "Green Chili", price: 1.5, image: "/public/images/shopimages/shop11.png" },
    { id: 13, name: "Green Cucumber", price: 1.5, image: "/public/images/shopimages/shop12.png" },
    { id: 14, name: "Green Littuce", price: 1.5, image: "/public/images/shopimages/shop13.png" },
    { id: 15, name: "Ladies Finger", price: 1.5, image: "/public/images/shopimages/shop14.png" },
    { id: 16, name: "Green Capsicum", price: 1.5, image: "/public/images/shopimages/shop15.png" },
    { id: 17, name: "Red chili", price: 1.5, image: "/public/images/shopimages/shop1.png" },
     { id: 1, name: "Tomato", price: 2.5, image: "/public/images/shopimages/shop1.png" },
    { id: 2, name: "Big Potatos", price: 1.5, image: "/public/images/shopimages/shop2.png" },
    { id: 3, name: "Chanise Cabbage", price: 1.5, image: "/public/images/shopimages/shop3.png" },
    { id: 4, name: "Corn", price: 1.5, image: "/public/images/shopimages/shop4.png" },
    { id: 5, name: "Red Tomato", price: 1.5, image: "/public/images/shopimages/shop5.png" },
    { id: 6, name: "Eggplant", price: 1.5, image: "/public/images/shopimages/shop6.png" },
    { id: 7, name: "Fresh Cauliflower", price: 1.5, image: "/public/images/shopimages/shop7.png" },
    { id: 8, name: "Corn", price: 1.5, image: "/public/images/shopimages/shop4.png" },
    { id: 9, name: "Green Apple", price: 1.5, image: "/public/images/shopimages/shop8.png" },
    { id: 10, name: "Fresh Mango", price: 1.5, image: "/public/images/shopimages/shop9.png" },
    { id: 11, name: "Green Capsicum", price: 1.5, image: "/public/images/shopimages/shop10.png" },
    { id: 12, name: "Green Chili", price: 1.5, image: "/public/images/shopimages/shop11.png" },
    { id: 13, name: "Green Cucumber", price: 1.5, image: "/public/images/shopimages/shop12.png" },
    { id: 14, name: "Green Littuce", price: 1.5, image: "/public/images/shopimages/shop13.png" },
    { id: 15, name: "Ladies Finger", price: 1.5, image: "/public/images/shopimages/shop14.png" },
    { id: 15, name: "Ladies Finger", price: 1.5, image: "/public/images/shopimages/shop14.png" },
    { id: 16, name: "Green Capsicum", price: 1.5, image: "/public/images/shopimages/shop15.png" },
    { id: 17, name: "Red chili", price: 1.5, image: "/public/images/shopimages/shop1.png" },
     { id: 1, name: "Tomato", price: 2.5, image: "/public/images/shopimages/shop1.png" },
    { id: 2, name: "Big Potatos", price: 1.5, image: "/public/images/shopimages/shop2.png" },
    { id: 3, name: "Chanise Cabbage", price: 1.5, image: "/public/images/shopimages/shop3.png" },
    { id: 4, name: "Corn", price: 1.5, image: "/public/images/shopimages/shop4.png" },
    { id: 5, name: "Red Tomato", price: 1.5, image: "/public/images/shopimages/shop5.png" },
    { id: 6, name: "Eggplant", price: 1.5, image: "/public/images/shopimages/shop6.png" },
    { id: 7, name: "Fresh Cauliflower", price: 1.5, image: "/public/images/shopimages/shop7.png" },
    { id: 8, name: "Corn", price: 1.5, image: "/public/images/shopimages/shop4.png" },
    { id: 9, name: "Green Apple", price: 1.5, image: "/public/images/shopimages/shop8.png" },
    { id: 10, name: "Fresh Mango", price: 1.5, image: "/public/images/shopimages/shop9.png" },
    { id: 11, name: "Green Capsicum", price: 1.5, image: "/public/images/shopimages/shop10.png" },
    { id: 12, name: "Green Chili", price: 1.5, image: "/public/images/shopimages/shop11.png" },
    { id: 13, name: "Green Cucumber", price: 1.5, image: "/public/images/shopimages/shop12.png" },
    { id: 14, name: "Green Littuce", price: 1.5, image: "/public/images/shopimages/shop13.png" },
    { id: 15, name: "Ladies Finger", price: 1.5, image: "/public/images/shopimages/shop14.png" },

    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  // Pagnation
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  return (
    <div className="container mx-auto py-8">
      {/* Filters */}
      <FiltersBar />

      {/* Product List */}
      <ProductGrid products={currentProducts} />

      {/* Pagination */}
      <Pagination
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ShopPage;
