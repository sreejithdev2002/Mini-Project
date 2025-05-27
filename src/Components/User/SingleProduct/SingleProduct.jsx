import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
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
      const orderData = {
        productId,
        quantity,
      };
      const response = await createOrder(orderData);
      const { status, message } = response.data;
      if (status) {
        alert("Order placed successfully!");
      } else {
        alert(message || "Failed to place order.");
      }
    } catch (error) {
      alert("An error occurred while placing the order.");
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

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  if (loading) {
    return (
      <div style={{ margin: "300px 50px" }}>
        <Loader />
      </div>
    );
  }

  if (error) {
    console.log(error);
    return <div>Error: {error}</div>;
  }

  // const baseURL = "https://mini-project-backend-production.up.railway.app";
  const baseURL = "https://mini-project-backend-nv1x.onrender.com";
  const imageURL = `${baseURL}/public/images/products/${product.image}`;

  return (
    <div className="my-[220px] lg:my-[150px]">
      <div className="flex flex-col lg:flex-row my-[100px] mx-[50px] justify-evenly">
        <div className="flex lg:flex-col">
          <img className="h-[400px] w-[400px] lg:h-[500px] lg:w-[300px]]" src={imageURL} alt={product.name} />
        </div>
        <div className="flex mt-[20px] lg:mt-0 lg:ml-[100px]">
          <div>
            <h1 className="text-3xl font-medium">{product.name}</h1>
            <h3 className="my-[5px] font-normal text-xl text-gray-700">
              {product.brand}
            </h3>
            <p className="my-[20px] text-gray-600 text-sm">
              {product.description}
            </p>
            <div>
              <button
                className="py-[7px] px-[15px] m-[10px] border-none rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="py-[7px] px-[15px] m-[10px] border-none rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <div className="flex mx-[10px]">
              <button
                className="lg:w-[10vw] lg:h-[50px] p-[10px] mr-[10px] cursor-pointer border-none bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 rounded font-semibold mt-[20px] lg:mt-[150px]"
                id="sinPrdBtn2"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
              <button
                className="lg:w-[10vw] lg:h-[50px] p-[10px] mr-[10px] cursor-pointer border-2 border-red-500 hover:bg-red-600 text-red-500 hover:border-red-600 hover:text-white transition-colors duration-300 rounded font-semibold mt-[20px] lg:mt-[150px]"
                id="sinPrdBtn1"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="relative lg:left-[10vw] left-[13vw]">
            <h2 className="text-green-600 text-2xl font-medium">
              ₹{product.price}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start lg:mx-[100px]">
        <div className="flex flex-col items-start p-[20px] relative lg:w-[100%] w-[80vw] bg-gray-50 rounded">
          <h2 className="text-xl">Reviews</h2>
          {reviews.length > 0 ? (
            (expanded ? reviews : reviews.slice(0, 3)).map((review) => (
              <div key={review._id} className="my-[10px] w-[100%] border-2 border-gray-100 rounded py-[10px] px-[20px] hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg">{review.userId.username}</h4>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-gray-400">{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
          {reviews.length > 3 && (
            <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white border-none py-[5px] px-[10px] rounded cursor-pointer text-sm" onClick={toggleExpanded}>
              {expanded ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
        <ReviewForm onSubmit={handlePostReview} />
      </div>
    </div>
  );
}

export default SingleProduct;
