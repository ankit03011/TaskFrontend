import React, { useState } from 'react';

const AddReviewModal = ({ onClose, onAddReview, companyId }) => {
  const [reviewData, setReviewData] = useState({
    fullName: '',
    subject: '',
    reviewText: '',
    rating: 0,
    companyId: companyId
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(reviewData); // Pass the review data to the parent component
    onClose(); // Close the modal after submitting
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Add Review</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="border p-2 w-full mb-2"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setReviewData({ ...reviewData, fullName: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2"
            type="text"
            placeholder="Subject"
            onChange={(e) => setReviewData({ ...reviewData, subject: e.target.value })}
          />
          <textarea
            className="border p-2 w-full mb-2"
            placeholder="Review"
            onChange={(e) => setReviewData({ ...reviewData, reviewText: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2"
            type="number"
            placeholder="Rating"
            onChange={(e) => setReviewData({ ...reviewData, rating: e.target.value })}
          />
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
            Add Review
          </button>
        </form>
        <button className="absolute top-2 right-2 text-red-500" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default AddReviewModal;
