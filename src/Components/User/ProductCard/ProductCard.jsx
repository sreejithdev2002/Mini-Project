// import React from "react";
// import "./ProductCard.css";
// import { Link, useNavigate } from "react-router-dom";
// import { AddToWishlist } from "../../../Services/UserApi";

// function ProductCard({ product, user }) {
//   const baseURL = "http://localhost:8000";
//   const imageURL = `${baseURL}/public/images/products/${product.image}`;

//   const navigate = useNavigate();
//   const viewProduct = () => {
//     navigate(`/product/${product._id}`);
//   };

//   const handleAddToWishlist = async () => {
//     try {
//       const productId = product._id;
//       const response = await AddToWishlist(productId);
//       if (response.status === 200) {
//         alert("Product added to wishlist");
//       }

//       if(response.status === 201){
//         alert("Product removed from wishlist")
//       }
//     } catch (error) {
//       console.error("Error adding product to wishlist");
//     }
//   };
//   return (
//     <>
//       <div className="productCard">
//         <img className="productCrdImg" src={imageURL} />
//         <div className="productDetails">
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <div className="productDetailsPriceCart">
//             <h3>₹{product.price}</h3>
//             <button onClick={handleAddToWishlist}>Add To Wishlist</button>
//             <button id="prdCardBtnWishlist" onClick={viewProduct}>
//               View Product
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductCard;

// import React, { useEffect, useState } from "react";
// import "./ProductCard.css";
// import { Link, useNavigate } from "react-router-dom";
// import { AddToWishlist, checkProductInWishlist } from "../../../Services/UserApi";
// import { WishlistIconFalse, WishlistIconTrue } from "../../../Assets/Icons";
// import { toast } from "react-toastify";

// function ProductCard({ product, user }) {
//   const baseURL = "http://localhost:8000";
//   const imageURL = `${baseURL}/public/images/products/${product.image}`;
//   const navigate = useNavigate();

//   const [inWishlist, setInWishlist] = useState(false);

//   useEffect(() => {
//     const checkWishlistStatus = async () => {
//       try {
//         const response = await checkProductInWishlist(product._id);
//         if (response.status === 200) {
//           setInWishlist(response.data.inWishlist);
//         }
//       } catch (error) {
//         console.error("Error checking wishlist status", error);
//       }
//     };

//     checkWishlistStatus();
//   }, [product._id]);

//   const viewProduct = () => {
//     navigate(`/product/${product._id}`);
//   };

//   const handleAddToWishlist = async () => {
//     try {
//       const productId = product._id;
//       const response = await AddToWishlist(productId);
//       if (response.status === 200) {
//         toast.success("Product Added to Wishlist");
//         setInWishlist(true);
//       } else if (response.status === 201) {
//         toast.success("Product Removed From Wishlist");
//         wishlist = wishlist.filter(id => id !== productId)
//         setInWishlist(false);
//       }
//     } catch (error) {
//       console.error("Error adding/removing product to wishlist", error);
//     }
//   };

//   return (
//     <div className="productCard">
//       <img className="productCrdImg" src={imageURL} alt={product.name} />
//       <div className="productDetails">
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <div className="productDetailsPriceCart">
//           <h3>₹{product.price}</h3>
//           <button
//             onClick={handleAddToWishlist}
//             style={{ border: "none", backgroundColor: "transparent" }}
//           >
//             {inWishlist ? <WishlistIconTrue /> : <WishlistIconFalse />}
//           </button>
//           <button id="prdCardBtnWishlist" onClick={viewProduct}>
//             View Product
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { AddToWishlist, checkProductInWishlist } from "../../../Services/UserApi";
import {toast} from 'react-toastify';
import { WishlistIconFalse, WishlistIconTrue } from "../../../Assets/Icons";


function ProductCard({ product }) {
  const baseURL = "http://localhost:8000";
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
          <button onClick={handleAddToWishlist} style={{ backgroundColor: "transparent", border: "none"}}>
            {inWishlist ? <WishlistIconTrue/> : <WishlistIconFalse/>}
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
