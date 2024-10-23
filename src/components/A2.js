import './A2.css'; // CSS for A2
import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowIcon from '../assets/back-arrow.svg'; // Ensure this path is correct

const A2Screen = () => {
  const navigate = useNavigate(); // For navigation back to A1

  const handleBackClick = () => {
    navigate('/'); // Navigate back to A1
  };

  return (
    <div className="a2-container">
      <header className="a2-header">
        <img
          src={arrowIcon}
          alt="Back"
          className="a2-back-button"
          onClick={handleBackClick}
        />
        {/* Make the ZLO logo clickable */}
        <span className="a2-logo" onClick={handleBackClick}>
          ZLO
        </span>
      </header>
    </div>
  );
};

export default A2Screen;
