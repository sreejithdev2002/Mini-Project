import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AddToWishlist,
  checkProductInWishlist,
} from "../../../Services/UserApi";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const baseURL = import.meta.env.VITE_BASE_URL;
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

  const handleAddToWishlist = async (e) => {
    e.stopPropagation(); // Prevent triggering the card click
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
    <div 
      className="group relative flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto cursor-pointer"
      onClick={viewProduct}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-6">
        <img
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-multiply"
          src={imageURL}
          alt={product.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800"; // Elegant fallback
          }}
        />
        
        {/* Wishlist Button - Floating */}
        <button
          onClick={handleAddToWishlist}
          className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all duration-300 z-10 ${
            inWishlist 
              ? 'bg-red-50 text-red-500 scale-110 shadow-sm' 
              : 'bg-white/80 text-gray-400 hover:text-red-500 hover:bg-white shadow-sm'
          }`}
        >
          <svg className="w-5 h-5" fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" strokeWidth={inWishlist ? "0" : "2"}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="font-display text-lg font-semibold text-gray-900 truncate mb-1">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              viewProduct();
            }}
            className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
