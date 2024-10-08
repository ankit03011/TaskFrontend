import React, { useState } from 'react';

const SecondaryNavbar = ({ onFilterByCity, onSortCompanies, onOpenAddCompanyModal }) => {
  const [city, setCity] = useState('');
  const [sort, setSort] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value); // Only update the city input state
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    onSortCompanies(e.target.value); // Trigger sorting when the dropdown value changes
  };

  return (
    <div className="shadow-sm py-4 bottom-2">
      <div className="container mx-auto flex justify-between items-center space-x-4">
        {/* Select City Input */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={city}
            onChange={handleCityChange} // Update the input value but don't trigger the filter yet
            placeholder="Select City"
            className="w-[300px] p-2 rounded-lg border border-gray-300 focus:outline-none"
          />
          
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500"
            onClick={() => onFilterByCity(city)} // Filter companies by city when clicked
          >
            Find City
          </button>
        </div>

        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500"
          onClick={onOpenAddCompanyModal} // Trigger modal open when clicked
        >
          Add Company
        </button>

        {/* Sort Companies Dropdown */}
        <select
          className="w-[200px] p-2 rounded-lg border border-gray-300 focus:outline-none"
          value={sort}
          onChange={handleSortChange} // Trigger sorting when dropdown value changes
        >
          <option value="">Sort Companies</option>
          <option value="rating_high">Rating (High to Low)</option>
          <option value="rating_low">Rating (Low to High)</option>
          <option value="reviews_high">Reviews (High to Low)</option>
          <option value="reviews_low">Reviews (Low to High)</option>
          <option value="date_newest">Date (Newest First)</option>
          <option value="date_oldest">Date (Oldest First)</option>
          <option value="relevance">Relevance</option>
        </select>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
