import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductPage.css";


function ProductPage({ products }) {
  return (
    <>
      <div className="grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[30px] gap-x-[10px] px-[10px] max-w-[1200px] mx-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductPage;