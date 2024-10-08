import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddCompanyModal from '../components/AddCompanyModal';
import CompanyCard from '../components/CompanyCard';
import SecondaryNavbar from '../components/SecondaryNavbar'; // Import the secondary navbar

const HomePage = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/companies');
      setCompanies(response.data);
      setFilteredCompanies(response.data); // Initially, all companies are shown
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  // Filter companies by city (case-insensitive)
  const filterByCity = (city) => {
    setSelectedCity(city); // Update selected city state
    const filtered = companies.filter(company => 
      company.city.toLowerCase().includes(city.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  const sortCompanies = (criteria) => {
    setSortCriteria(criteria); // Update selected sort criteria state
  
    // Make a copy of the filtered companies to avoid mutating the original array
    let sortedCompanies = [...filteredCompanies];
  
    console.log('Before sorting:', sortedCompanies); // Debug: Log before sorting
  
    if (criteria === 'rating_high') {
      sortedCompanies.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (criteria === 'rating_low') {
      sortedCompanies.sort((a, b) => (a.rating || 0) - (b.rating || 0));
    } else if (criteria === 'reviews_high') {
      sortedCompanies.sort((a, b) => (b.reviews?.length || 0) - (a.reviews?.length || 0));
    } else if (criteria === 'reviews_low') {
      sortedCompanies.sort((a, b) => (a.reviews?.length || 0) - (b.reviews?.length || 0));
    } else if (criteria === 'date_newest') {
      sortedCompanies.sort((a, b) => new Date(b.foundedOn) - new Date(a.foundedOn));
    } else if (criteria === 'date_oldest') {
      sortedCompanies.sort((a, b) => new Date(a.foundedOn) - new Date(b.foundedOn));
    } else if (criteria === 'relevance') {
      // Sorting by relevance based on reviews count as an example
      sortedCompanies.sort((a, b) => (b.reviews?.length || 0) - (a.reviews?.length || 0));
    }
  
    console.log('After sorting:', sortedCompanies); // Debug: Log after sorting
  
    // Finally, update the filteredCompanies with the sorted result
    setFilteredCompanies(sortedCompanies);
  };
  
  return (
    <div className="container mx-auto p-4">
      {/* Secondary Navbar for City Filter, Sorting, and Add Company */}
      <SecondaryNavbar
        onFilterByCity={filterByCity}
        onSortCompanies={sortCompanies}
        onOpenAddCompanyModal={() => setIsModalOpen(true)} // Open modal when button is clicked
      />

      {/* Add Company Modal */}
      {isModalOpen && (
        <AddCompanyModal
          onClose={() => setIsModalOpen(false)}
          onAddCompany={fetchCompanies}
        />
      )}

      {/* Display Company Cards */}
      <div>
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map(company => (
            <CompanyCard key={company.id} company={company} />
          ))
        ) : (
          <p>No companies found for the selected city.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
