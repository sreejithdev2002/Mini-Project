import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductDetails,
  createOrder,
  getReviews,
  postReview,
  addToCart,
} from "../../../Services/UserApi";
import ReviewForm from "../ReviewForm/ReviewForm";
import StarRating from "../StarRating/StarRating";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const fetchProductDetails = async (productId) => {
    try {
      const response = await getProductDetails(productId);
      const { status, product, message } = response.data;
      if (status) {
        setProduct(product);
      } else {
        setError(message || "Failed to load product details.");
      }
    } catch (error) {
      setError("An error occurred while fetching the product details.");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const fetchReviews = async () => {
    try {
      const reviewsResponse = await getReviews(productId);
      setReviews(reviewsResponse.data);
    } catch (error) {
      console.log("Error fetching reviews : ", error);
    }
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + amount;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  const handleBuyNow = async () => {
    try {
      const orderData = { productId, quantity };
      const response = await createOrder(orderData);
      const { status, message } = response.data;
      if (status) {
        toast.success("Order placed successfully!");
      } else {
        toast.error(message || "Failed to place order.");
      }
    } catch (error) {
      toast.error("An error occurred while placing the order.");
    }
  };

  const handleAddToCart = async () => {
    try {
      const response = await addToCart(productId, quantity);
      const { status, message } = response.data;
      if (status) {
        toast.success("Product added to cart successfully!");
      } else {
        toast.error("Failed to add product to cart.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the product to the cart.");
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetails(productId);
      fetchReviews();
    }
  }, [productId]);

  const handlePostReview = async (reviewData) => {
    try {
      await postReview({ productId, ...reviewData });
      const reviewsResponse = await getReviews(productId);
      setReviews(reviewsResponse.data);
    } catch (error) {
      console.log("Error posting reviews : ", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  const baseURL = import.meta.env.VITE_BASE_URL;
  const imageURL = `${baseURL}/public/images/products/${product.image}`;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Product Details Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
            
            {/* Image Gallery */}
            <div className="relative aspect-square lg:border-r border-gray-100 bg-gray-50/50 flex items-center justify-center p-8 group">
              <img 
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" 
                src={imageURL} 
                alt={product.name} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>

            {/* Product Info */}
            <div className="p-8 lg:p-12 flex flex-col">
              <div className="mb-2">
                <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">{product.brand}</span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                {product.name}
              </h1>
              
              <div className="mb-8">
                <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
              </div>

              <div className="prose prose-sm text-gray-500 mb-10">
                <p className="leading-relaxed">{product.description}</p>
              </div>

              <div className="mt-auto space-y-6">
                {/* Quantity Selector */}
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-900">Quantity</span>
                  <div className="flex items-center border border-gray-200 rounded-full bg-white p-1">
                    <button 
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors focus:outline-none"
                      onClick={() => handleQuantityChange(-1)}
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium text-gray-900">{quantity}</span>
                    <button 
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors focus:outline-none"
                      onClick={() => handleQuantityChange(1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                  <button
                    className="flex-1 bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </button>
                  <button
                    className="flex-1 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <h2 className="font-display text-2xl font-bold text-gray-900">Customer Reviews</h2>
                <span className="text-gray-500 text-sm font-medium">{reviews.length} Reviews</span>
              </div>
              
              <div className="space-y-6">
                {reviews.length > 0 ? (
                  (expanded ? reviews : reviews.slice(0, 3)).map((review) => (
                    <div key={review._id} className="p-6 rounded-2xl bg-gray-50/50 border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{review.userId.username}</h4>
                        <div className="flex items-center gap-2">
                          <StarRating rating={review.rating} />
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                  </div>
                )}
                
                {reviews.length > 3 && (
                  <div className="pt-4 text-center">
                    <button 
                      className="text-sm font-semibold text-black border-b border-black hover:text-gray-600 hover:border-gray-600 transition-colors pb-0.5"
                      onClick={() => setExpanded(!expanded)}
                    >
                      {expanded ? "Show Less" : "Read All Reviews"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-24">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-6">Write a Review</h3>
              <ReviewForm onSubmit={handlePostReview} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SingleProduct;
