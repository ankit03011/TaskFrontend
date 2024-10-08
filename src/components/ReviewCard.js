// src/components/ReviewCard.js
import React from 'react';

const ReviewCard = ({ review }) => (
  <div className="border p-4 my-4 rounded-lg shadow-md bg-white">
    <h3 className="text-lg font-bold">{review.subject}</h3>
    <p>Reviewed by: {review.fullName}</p>
    <p>{review.reviewText}</p>
    <p>Rating: {review.rating}</p>
  </div>
);

export default ReviewCard;
