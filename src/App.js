// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';  // Import MainLayout
import HomePage from './pages/HomePage';
import CompanyDetails from './pages/CompanyDetails'; // Update to CompanyDetails

const App = () => (
  <Router>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:id" element={<CompanyDetails />} /> {/* Updated here */}
      </Route>
    </Routes>
  </Router>
);

export default App;
