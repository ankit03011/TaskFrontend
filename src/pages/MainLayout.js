// src/pages/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Ensure you have a Navbar component

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar /> {/* Fixed Navbar at the top */}
      <div className="flex-1 overflow-y-auto p-4" style={{ paddingTop: '64px' }}> {/* Adjust padding-top to navbar height */}
        <Outlet /> {/* This will render the content including CompanyCards */}
      </div>
    </div>
  );
};

export default MainLayout;
