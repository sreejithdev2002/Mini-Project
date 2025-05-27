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
  // const baseURL = "https://mini-project-backend-production.up.railway.app";
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
    <div className="flex flex-col items-center border-[1px] border-[#cccccc45] rounded p-4 m-4 w-[60vw] hover:-translate-y-2 transition duration-200 h-[60vh] lg:w-[250px] lg:h-[60vh]">
      <img
        className="w-[100%] h-[60%] lg:w-[100%] lg:h-[50%] object-cover border-b-2 border-[#ccc]"
        src={imageURL}
        alt={product.name}
      />
      <div className="flex flex-col items-center text-center p-[16px] w-[100%] relative">
        <h2 className="text-xl my-2 text-nowrap">{product.name}</h2>
        <p className="text-base text-[#666] my-2">{product.description}</p>
        <div className="flex justify-between items-center w-[100%] mt-4">
          <h3 className="text-xl text-[#128c0c]">₹{product.price}</h3>
          <button
            onClick={handleAddToWishlist}
            className="bg-transparent border-none"
          >
            {inWishlist ? <WishlistIconTrue /> : <WishlistIconFalse />}
          </button>
          <button
            className="py-2 text-[#fff] bg-[#202633] hover:bg-[#2b3c5e] border-none rounded-md cursor-pointer transition-colors duration-200 w-[60px] h-[35px] text-xs text-nowrap"
            onClick={viewProduct}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
