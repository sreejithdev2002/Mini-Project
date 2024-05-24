import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductPage.css";


function ProductPage({ products }) {
  return (
    <>
      <div className="productPage">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductPage;
