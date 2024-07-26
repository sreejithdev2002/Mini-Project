import React, { useState } from "react";
import "./ReviewForm.css";

function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = { rating, comment };
    onSubmit(reviewData);
    setRating(1);
    setComment("");
  };

  return (
    <form
      className="bg-gray-50 border-none rounded p-[20px] w-[80vw] lg:w-[100%] mt-[20px]"
      onSubmit={handleSubmit}
    >
      <div className="mb-[15px]">
        <label className="block mb-[5px]  text-gray-900">
          Rating
        </label>
        <input
          className="w-[100%] p-2 border-2 border-gray-100 rounded box-border focus:border-blue-400 outline-none"
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
        />
      </div>
      <div>
        <label className="block mb-[5px] text-gray-900">Comment</label>
        <textarea
          className="w-[100%] p-2 border-2 border-gray-100 rounded box-border focus:border-blue-400 outline-none"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
      </div>
      <button className="bg-blue-500 text-white border-none py-[10px] px-5 rounded cursor-pointer hover:bg-blue-600 transition-colors duration-300" type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
