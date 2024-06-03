import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product, user }) {

  const baseURL = "http://localhost:8000";
  const imageURL = `${baseURL}/public/images/products/${product.image}`;
  return (
    <>
      <div className="productCard">
        <Link to={`/product/${product._id}`}>
          <img  className="productImg" src={imageURL}/>
        </Link>
        <div className="productDetails">
          <h2>{product.name}</h2>
          <Link to={`/product/${product._id}`}>
            <p>{product.description}</p>
          </Link>
          <div className="productDetailsPriceCart">
            <h3>₹{product.price}</h3>
            <button id="prdCardBtnWishlist">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
