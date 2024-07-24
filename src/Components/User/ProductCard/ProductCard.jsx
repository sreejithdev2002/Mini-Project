import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import {
  AddToWishlist,
  checkProductInWishlist,
} from "../../../Services/UserApi";
import { toast } from "react-toastify";
import { WishlistIconFalse, WishlistIconTrue } from "../../../Assets/Icons";

function ProductCard({ product }) {
  const baseURL = "https://mini-project-backend-nv1x.onrender.com";
  const imageURL = `${baseURL}/public/images/products/${product.image}`;
  const navigate = useNavigate();

  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const checkWishlistStatus = async () => {
      try {
        const response = await checkProductInWishlist(product._id);
        if (response.status === 200) {
          setInWishlist(response.data.inWishlist);
        }
      } catch (error) {
        console.error("Error checking wishlist status", error);
      }
    };

    checkWishlistStatus();
  }, [product._id]);

  const viewProduct = () => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToWishlist = async () => {
    try {
      const productId = product._id;
      const response = await AddToWishlist(productId);

      if (response.status === 200) {
        toast.success("Product added to wishlist");
        setInWishlist(true);
      } else if (response.status === 201) {
        toast.success("Product removed from wishlist");
        setInWishlist(false);
      }
    } catch (error) {
      console.error("Error adding/removing product to wishlist", error);
    }
  };

  return (
    <div className="productCard">
      <img className="productCrdImg" src={imageURL} alt={product.name} />
      <div className="productDetails">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="productDetailsPriceCart">
          <h3>₹{product.price}</h3>
          <button
            onClick={handleAddToWishlist}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            {inWishlist ? <WishlistIconTrue /> : <WishlistIconFalse />}
          </button>
          <button id="prdCardBtnWishlist" onClick={viewProduct}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
