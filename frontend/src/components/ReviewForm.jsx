import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment || rating === 0) {
      alert('Please fill in all fields and select a rating');
      return;
    }
    addReview({ name, comment, rating });
    setName('');
    setComment('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>LEAVE A REVIEW</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Comment:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
      </div>
      <div>
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))} required>
          <option value={0}>Select Rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button type="submit">SUBMIT REVIEW</button>
    </form>
  );
};

export default ReviewForm;
