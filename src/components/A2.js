import './A2.css'; // CSS for A2
import React from 'react';
import arrowIcon from '../assets/back-arrow.svg'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const A2Screen = () => {
  const navigate = useNavigate(); // Initialize useNavigate to programmatically navigate

  const handleNavigationClick = () => {
    navigate('/'); // Use useNavigate to go back to A1 without reloading the page
  };

  return (
    <div className="a2-container">
      <header className="a2-header">
        <img
          src={arrowIcon}
          alt="Back"
          className="a2-back-button"
          onClick={handleNavigationClick} // Back button triggers the navigation
        />

        {/* ZLO Logo */}
        <span className="a2-logo" onClick={handleNavigationClick}>
          ZLO
        </span>
      </header>
    </div>
  );
};

export default A2Screen;
