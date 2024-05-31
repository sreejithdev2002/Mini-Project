import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product, user }) {
  return (
    <>
      <div className="productCard">
        <Link to={`/product/${product._id}`}>
          <div className="productImg" />
        </Link>
        <div className="productDetails">
          <h2>{product.name}</h2>
          <Link to={`/product/${product._id}`}>
            <p>{product.description}</p>
          </Link>
          <div className="productDetailsPriceCart">
            <h3>₹{product.price}</h3>
            <button id="prdCardBtnCart">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
