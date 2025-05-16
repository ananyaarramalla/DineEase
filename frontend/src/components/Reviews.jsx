import React, { useState, useEffect } from 'react';
import Review from '../components/Review.jsx';
import ReviewForm from '../components/ReviewForm.jsx';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Load reviews from local storage when the component mounts
    const storedReviews = JSON.parse(localStorage.getItem('reviews'));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  const addReview = (review) => {
    const updatedReviews = [...reviews, review];
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    setReviews(updatedReviews);
  };

  return (
    <section className='reviews-container reviews' id='reviews'> {/* Assign a unique class name */}
      <div className="reviews-content">
        <div className="customer-reviews">
          <h1 className='heading rev'>CUSTOMER REVIEWS</h1>
          <div className="reviews-list">
            {reviews.length > 0 ? (
              reviews.map((review, index) => <Review key={index} review={review} />)
            ) : (
              <p>No reviews yet</p>
            )}
          </div>
        </div>
        <div className="review-form">
          <ReviewForm addReview={addReview} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
