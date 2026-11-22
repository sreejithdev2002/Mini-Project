import { useId, useState } from "react";


function ReviewForm({ onSubmit }) {
  const ratingId = useId();
  const commentId = useId();
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
      className="catalogue-review"
      onSubmit={handleSubmit}
    >
      <div className="mb-[15px]">
        <label htmlFor={ratingId}>
          Rating
        </label>
        <input
          id={ratingId}
          className="w-full p-2"
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
        />
      </div>
      <div>
        <label htmlFor={commentId}>Comment</label>
        <textarea
          id={commentId}
          rows={4}
          className="w-full p-2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
      </div>
      <button className="store-button store-button--accent" type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
