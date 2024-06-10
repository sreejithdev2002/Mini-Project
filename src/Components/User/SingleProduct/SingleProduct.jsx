// import React, { useEffect, useState } from "react";
// import "./SingleProduct.css";
// import { useParams } from "react-router-dom";
// import { getProductDetails } from "../../../Services/UserApi";

// function SingleProduct() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProductDetails = async (productId) => {
//     try {
//       console.log("Fetching product details for:", productId);
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

//   useEffect(() => {
//     if (productId) {
//       fetchProductDetails(productId);
//     }
//   }, [productId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     console.log(error);
//     return <div>Error: {error}</div>;
//   }

//   const baseURL = "http://localhost:8000"; // Replace with your actual base URL
//   const imageURL = `${baseURL}/public/images/products/${product.image}`;

//   return (
//     <div className="singleProduct">
//       <div className="sinPrdTopSection">
//         <div className="sinPrdImgSection">
//           <img id="sinPrdImg" src={imageURL} />
//         </div>
//         <div className="sinPrdDetailSection">
//           <div className="sinPrdDetailsName">
//             <h1>{product.name}</h1>
//             <h3>{product.brand}</h3>
//             <p>{product.description}</p>
//             <div className="sinPrdButtons">
//               <button className="sinPrdBtn" id="sinPrdBtn1">
//                 Add to Cart
//               </button>
//               <button className="sinPrdBtn" id="sinPrdBtn2">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//           <div className="sinPrdDetailsPrice">
//             <h2>₹{product.price}</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleProduct;

import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { getProductDetails, getUser, createOrder } from "../../../Services/UserApi";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      setLoading(false);
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

  useEffect(() => {
    if (productId) {
      fetchProductDetails(productId);
    }
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error: {error}</div>;
  }

  const baseURL = "http://localhost:8000"; // Replace with your actual base URL
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
              {/* <button className="sinPrdBtn" id="sinPrdBtn1">
                Add to Cart
              </button> */}
              <button
                className="sinPrdBtn"
                id="sinPrdBtn2"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="sinPrdDetailsPrice">
            <h2>₹{product.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
