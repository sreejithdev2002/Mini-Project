import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { WishlistIconTrue, WishlistIconFalse } from "../../../Assets/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard({ product }) {
  const [inWishlist, setInWishlist] = useState(product.inWishlist);

  const toggleWishlist = () => {
    setInWishlist(!inWishlist);
    if (!inWishlist) {
      console.log(`${product.name} added to wishlist`);
    } else {
      console.log(`${product.name} removed from wishlist`);
    }
  };
  return (
    <>
      <div className="productCard">
        <div className="productWishlistIcon" onClick={toggleWishlist}>
          {inWishlist ? <WishlistIconTrue /> : <WishlistIconFalse />}
        </div>
        <Link to={`/product/${product.id}`}>
          <div className="productImg" />
        </Link>
        <div className="productDetails">
          <h2>{product.name}</h2>
          <Link to={`/product/${product.id}`}>
            <p>{product.description}</p>
          </Link>
          <div className="productDetailsPriceCart">
            <h3>₹{product.price}</h3>
            <button id="prdCardBtnCart">Add to cart</button>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}

export default ProductCard;
