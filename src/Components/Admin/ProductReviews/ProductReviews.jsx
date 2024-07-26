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
    <div className="my-[140px] lg:my-[50px] mx-2 lg:mx-5 relative top-20">
      <h1 className="my-2 lg:my-5 text-4xl">Product Reviews</h1>

      <table className="w-[100%] border-collapse mb-[100px]">
        <thead>
          <tr>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Product Name
            </th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Product Image
            </th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              User Name
            </th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Comments
            </th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Rating
            </th>
            <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {reviewsData.map((review) => {
            const imageURL = review.productId.image
              ? `https://mini-project-backend-nv1x.onrender.com/public/images/products/${review.productId.image}`
              : SampleImg;
            return (
              <tr key={review._id} className="even:bg-[#f2f2f2] hover:bg-[#ddd] text-[12px] lg:text-base">
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  {review.productId.name}
                </td>
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  <img src={imageURL} alt="product" className="h-[50px] max-w-[50px] lg:h-[100px] lg:max-w-[100px]" />
                </td>
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  {review.userId.username}
                </td>
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  {review.comment}
                </td>
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  <StarRating rating={review.rating} />
                </td>
                <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                  {new Date(review.createdAt).toLocaleDateString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductReviews;
