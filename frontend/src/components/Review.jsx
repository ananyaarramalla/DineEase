import React from 'react';

const Review = ({ review }) => {
  const handleDelete = () => {
    onDelete(review.id); // Assuming each review has a unique id
  };

  return (
    <div className="review-card review-each">
      <h3>{review.name}</h3>
      <p>{review.comment}</p>
      <div className="rating">Rating: {review.rating}</div>
    </div>
  );
};

export default Review;
