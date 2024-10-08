import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import AddReviewModal from '../components/AddReviewModal';
import ReviewCard from '../components/ReviewCard';

const CompanyDetails = () => {
  const { id } = useParams(); // Retrieve the company ID from the URL parameters
  const [company, setCompany] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch company details
  const fetchCompany = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/companies/${id}`);
      setCompany(response.data);
    } catch (error) {
      console.error('Error fetching company:', error);
    }
  }, [id]);

  // Fetch reviews for the company
  const fetchReviews = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/companies/${id}/reviews`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }, [id]);

  // Effect to fetch company details and reviews when the component mounts
  useEffect(() => {
    fetchCompany();
    fetchReviews();
  }, [fetchCompany, fetchReviews]);

  // Handle adding a new review
  const handleAddReview = async (reviewData) => {
    try {
      await axios.post(`http://localhost:5000/api/companies/${id}/reviews`, reviewData);
      fetchReviews(); // Refresh the reviews list
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {company && (
        <div className="border rounded-lg shadow-md bg-white p-6 my-4 flex justify-between items-start space-x-4">
          {/* Left Section: Company Info */}
          <div className="flex flex-col">
            {/* Company Name */}
            <h1 className="text-2xl font-bold text-gray-800">{company.name}</h1>

            {/* Company Location */}
            <p className="text-sm text-gray-500 my-2">{company.location}</p>

            {/* Rating and Review Count */}
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg">⭐ {company.rating}</span>
              <span className="text-gray-600 ml-2 text-sm">({company.reviewCount} Reviews)</span>
            </div>
          </div>

          {/* Right Section: Founded On and Detail Review Button */}
          <div className="flex flex-col items-end">
            {/* Founded On Date */}
            <p className="text-sm text-gray-500 mb-2">Founded on: {new Date(company.foundedOn).toLocaleDateString()}</p>
            
            {/* Add Review Button */}
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded mt-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Add Review
            </button>
            {isModalOpen && (
              <AddReviewModal companyId={id} onClose={() => setIsModalOpen(false)} onAddReview={handleAddReview} />
            )}
          </div>
        </div>
      )}
      {/* Reviews Section */}
      <h2 className="text-xl mt-4">Reviews:</h2>
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} /> // Use ReviewCard for individual reviews
      ))}
    </div>
  );
};

export default CompanyDetails;
