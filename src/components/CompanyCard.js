// src/components/CompanyCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component'; // Import the star rating component

const CompanyCard = ({ company }) => (
  
  <div className="border rounded-lg shadow-md bg-white p-6 my-4 flex justify-between items-start space-x-4">
    <div className="flex flex-col">
      <h2 className="text-xl font-bold text-gray-800">{company.name}</h2>
      <p className="text-sm text-gray-500 my-2">{company.location}</p>
      <div className="flex items-center">
        <StarRatingComponent
          name="rating"
          starCount={5}
          value={company.rating} 
          editing={false} 
          starColor="gold"
          emptyStarColor="gray" 
        />
        <span className="text-gray-600 ml-2 text-sm">({company.reviewCount} Reviews)</span>
      </div>
    </div>

    <div className="flex flex-col items-end">
      <p className="text-sm text-gray-500 mb-2">Founded on: {new Date(company.foundedOn).toLocaleDateString()}</p>
      <Link to={`/company/${company._id}`} className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-auto">
        Detail Review
      </Link>
    </div>
  </div>
);

export default CompanyCard;
