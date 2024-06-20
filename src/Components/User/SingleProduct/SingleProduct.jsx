// import React, { useEffect, useState } from "react";
// import "./SingleProduct.css";
// import { useParams } from "react-router-dom";
// import {
//   getProductDetails,
//   createOrder,
//   getReviews,
//   postReview,
// } from "../../../Services/UserApi";
// import ReviewForm from "../ReviewForm/ReviewForm";
// import StarRating from "../StarRating/StarRating";

// function SingleProduct() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [expanded, setExpanded] = useState(false);

//   const fetchProductDetails = async (productId) => {
//     try {
//       const response = await getProductDetails(productId);
//       const { status, product, message } = response.data;
//       if (status) {
//         setProduct(product);
//       } else {
//         setError(message || "Failed to load product details.");
//       }
//     } catch (error) {
//       setError("An error occurred while fetching the product details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchReviews = async () => {
//     try {
//       const reviewsResponse = await getReviews(productId);
//       setReviews(reviewsResponse.data);
//     } catch (error) {
//       console.log("Error fetching reviews : ", error);
//     }
//   };

//   const handleQuantityChange = (amount) => {
//     setQuantity((prevQuantity) => {
//       const newQuantity = prevQuantity + amount;
//       return newQuantity > 0 ? newQuantity : 1;
//     });
//   };

//   const handleBuyNow = async () => {
//     try {
//       const orderData = {
//         productId,
//         quantity,
//       };
//       const response = await createOrder(orderData);
//       const { status, message } = response.data;
//       if (status) {
//         alert("Order placed successfully!");
//       } else {
//         alert(message || "Failed to place order.");
//       }
//     } catch (error) {
//       alert("An error occurred while placing the order.");
//     }
//   };

//   useEffect(() => {
//     if (productId) {
//       fetchProductDetails(productId);
//       fetchReviews();
//     }
//   }, [productId]);

//   const handlePostReview = async (reviewData) => {
//     try {
//       await postReview({ productId, ...reviewData });
//       const reviewsResponse = await getReviews(productId);
//       setReviews(reviewsResponse.data);
//     } catch (error) {
//       console.log("Error posting reviews : ", error);
//     }
//   };

//   const toggleExpanded = () => {
//     setExpanded(!expanded);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     console.log(error);
//     return <div>Error: {error}</div>;
//   }

//   const baseURL = "http://localhost:8000";
//   const imageURL = `${baseURL}/public/images/products/${product.image}`;

//   return (
//     <div className="singleProduct">
//       <div className="sinPrdTopSection">
//         <div className="sinPrdImgSection">
//           <img id="sinPrdImg" src={imageURL} alt={product.name} />
//         </div>
//         <div className="sinPrdDetailSection">
//           <div className="sinPrdDetailsName">
//             <h1>{product.name}</h1>
//             <h3>{product.brand}</h3>
//             <p>{product.description}</p>
//             <div className="sinPrdQuantity">
//               <button onClick={() => handleQuantityChange(-1)}>-</button>
//               <span>{quantity}</span>
//               <button onClick={() => handleQuantityChange(1)}>+</button>
//             </div>
//             <div className="sinPrdButtons">
//               <button
//                 className="sinPrdBtn"
//                 id="sinPrdBtn2"
//                 onClick={handleBuyNow}
//               >
//                 Buy Now
//               </button>
//               <button
//                 className="sinPrdBtn"
//                 id="sinPrdBtn2"
//                 onClick={handleAddToCart}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//           <div className="sinPrdDetailsPrice">
//             <h2>₹{product.price}</h2>
//           </div>
//         </div>
//       </div>
//       <div className="sinPrdBtmSection">
//         <div className="reviewsSection">
//           <h2>Reviews</h2>
//           {reviews.length > 0 ? (
//             (expanded ? reviews : reviews.slice(0, 3)).map((review) => (
//               <div key={review._id} className="reviewDetails">
//                 <div className="reviewHeader">
//                   <h4>{review.userId.username}</h4>
//                   {/* <p>Rating: {review.rating}</p> */}
//                   <StarRating rating={review.rating} />
//                 </div>
//                 <p id="reviewComment">{review.comment}</p>
//               </div>
//             ))
//           ) : (
//             <p>No reviews yet.</p>
//           )}
//           {reviews.length > 5 && (
//             <button className="reviewExpandBtn" onClick={toggleExpanded}>
//               {expanded ? "Show Less" : "Show More"}
//             </button>
//           )}
//         </div>
//         <ReviewForm onSubmit={handlePostReview} />
//       </div>
//     </div>
//   );
// }

// export default SingleProduct;

import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import {
  getProductDetails,
  createOrder,
  getReviews,
  postReview,
  addToCart, // Import the addToCart function
} from "../../../Services/UserApi";
import ReviewForm from "../ReviewForm/ReviewForm";
import StarRating from "../StarRating/StarRating";
import Loader from "../Loader/Loader";

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
        alert("Product added to cart successfully!");
      } else {
        alert(message || "Failed to add product to cart.");
      }
    } catch (error) {
      alert("An error occurred while adding the product to the cart.");
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

  const baseURL = "http://localhost:8000";
  const imageURL = `${baseURL}/public/images/products/${product.image}`;

  return (
    <div className="singleProduct">
      <div className="sinPrdTopSection">
        <div className="sinPrdImgSection">
          <img id="sinPrdImg" src={imageURL} alt={product.name} />
        </div>
        <div className="sinPrdDetailSection">
          <div className="sinPrdDetailsName">
            <h1>{product.name}</h1>
            <h3>{product.brand}</h3>
            <p>{product.description}</p>
            <div className="sinPrdQuantity">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <div className="sinPrdButtons">
              <button
                className="sinPrdBtn"
                id="sinPrdBtn2"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
              <button
                className="sinPrdBtn"
                id="sinPrdBtn1"
                onClick={handleAddToCart} // Use the handleAddToCart function
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="sinPrdDetailsPrice">
            <h2>₹{product.price}</h2>
          </div>
        </div>
      </div>
      <div className="sinPrdBtmSection">
        <div className="reviewsSection">
          <h2>Reviews</h2>
          {reviews.length > 0 ? (
            (expanded ? reviews : reviews.slice(0, 3)).map((review) => (
              <div key={review._id} className="reviewDetails">
                <div className="reviewHeader">
                  <h4>{review.userId.username}</h4>
                  <StarRating rating={review.rating} />
                </div>
                <p id="reviewComment">{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
          {reviews.length > 5 && (
            <button className="reviewExpandBtn" onClick={toggleExpanded}>
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
