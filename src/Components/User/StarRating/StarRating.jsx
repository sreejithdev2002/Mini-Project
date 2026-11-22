 ;


const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
        &#9733;
      </span>
    );
  }

  return <div className="catalogue-rating" role="img" aria-label={`${rating} out of 5 stars`}>{stars}</div>;
};

export default StarRating;