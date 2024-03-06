import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { WishlistIconTrue, WishlistIconFalse } from "../../../Assets/Icons";

function ProductCard({ product }) {

  const [inWishlist, setInWishlist] = useState(product.inWishlist);

  const toggleWishlist = () => {
    setInWishlist(!inWishlist);
  }
  return (
    <>
      <div className="productCard">
        <Link to={`/product/${product.id}`}>
          <div className="productImg"></div>
        </Link>
        <div className="productDetails">
          <h2>{product.name}</h2>
          <Link to={`/product/${product.id}`}>
          <p>{product.description}</p>
          </Link>
          <h3>₹{product.price}</h3>
        </div>
        <hr id="prdCardHr"/>
        <div className="productBtn">
          <button id="prdCardBtnWishlist" onClick={toggleWishlist} style={{ backgroundColor: inWishlist ? 'white' : '#ff4444'}} >{inWishlist ? <WishlistIconTrue/> : <WishlistIconFalse/>}</button>
          <button id="prdCardBtnCart" >Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
