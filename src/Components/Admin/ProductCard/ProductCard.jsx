import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <>
      <div className="productCard">
        <div className="productImg"></div>
        <div className="productDetails">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>₹{product.price}</h3>
        </div>
        <hr id="prdCardHr" />
        <div className="productBtn">
          <button id="prdCardBtnEdit">Edit</button>
          <button id="prdCardBtnDelete">Delete</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
