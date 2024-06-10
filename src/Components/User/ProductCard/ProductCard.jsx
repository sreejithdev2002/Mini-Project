import React from "react";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({ product, user }) {
  const baseURL = "http://localhost:8000";
  const imageURL = `${baseURL}/public/images/products/${product.image}`;

  const navigate = useNavigate();
  const viewProduct = () => {
    navigate(`/product/${product._id}`);
  };
  return (
    <>
      <div className="productCard">
        <img className="productCrdImg" src={imageURL} />
        <div className="productDetails">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="productDetailsPriceCart">
            <h3>₹{product.price}</h3>
            <button id="prdCardBtnWishlist" onClick={viewProduct}>
              View Product{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
