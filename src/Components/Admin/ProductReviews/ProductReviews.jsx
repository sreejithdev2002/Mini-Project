import React, { useEffect, useState } from "react";
import { getAllReviews } from "../../../Services/AdminApi";
import SampleImg from "../../../Assets/Images/example1.webp";
import StarRating from "../../User/StarRating/StarRating";
import "./ProductReviews.css";

function ProductReviews() {
  const [reviewsData, setReviewsData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await getAllReviews();
      if (data.status) {
        setReviewsData(data.reviews);
      } else {
        console.log("Error fetching reviews : ", data.message);
      }
    } catch (error) {
      console.log("Error fetching reviews : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="adminProductsReviews">
      <h1 className="prdReviewsHeading">Product Reviews</h1>

      <table className="prdReviewsTbl">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>User Name</th>
            <th>Comments</th>
            <th>Rating</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reviewsData.map((review) => {
            const imageURL = review.productId.image
              ? `https://mini-project-backend-nv1x.onrender.com/public/images/products/${review.productId.image}`
              : SampleImg;
            return (
              <tr key={review._id}>
                <td>{review.productId.name}</td>
                <td>
                  <img src={imageURL} alt="product" className="reviewImage"/>
                </td>
                <td>{review.userId.username}</td>
                <td>{review.comment}</td>
                <td>
                  <StarRating rating={review.rating} />
                </td>
                <td>{new Date(review.createdAt).toLocaleDateString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductReviews;
