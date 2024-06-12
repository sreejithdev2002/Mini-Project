// import React, { useState } from 'react'

// function ReviewForm({ onSubmit }) {

//     const [rating, setRating] = useState(1);
//     const [comment, setComment] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const reviewData = { rating, comment };
//         onSubmit(reviewData);
//         setRating(1);
//         setComment('');
//     };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Rating</label>
//         <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" required />
//       </div>
//       <div>
//         <label>Comment</label>
//         <textarea value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
//       </div>
//       <button type="submit">Submit Review</button>
//     </form>
//   )
// }

// export default ReviewForm


import React, { useState } from 'react';
import './ReviewForm.css'; // Import the CSS file

function ReviewForm({ onSubmit }) {

    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const reviewData = { rating, comment };
        onSubmit(reviewData);
        setRating(1);
        setComment('');
    };

    return (
        <form className="reviewForm" onSubmit={handleSubmit}>
            <div>
                <label>Rating</label>
                <input 
                    type="number" 
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)} 
                    min="1" 
                    max="5" 
                    required 
                />
            </div>
            <div>
                <label>Comment</label>
                <textarea 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    required
                ></textarea>
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
}

export default ReviewForm;
