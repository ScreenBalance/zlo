import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowIcon from '../assets/back-arrow.svg'; // Import the back arrow icon

const A2Screen = () => {
  const navigate = useNavigate(); // To navigate back to A1

  const handleBackClick = () => {
    navigate('/'); // Navigate back to A1
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <header
        style={{
          width: '100%',
          height: '8.06vh', // Header height as percentage of viewport height
          backgroundColor: 'white',
          borderBottom: '1px solid #DFDFDF', // 1px bottom border
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Back Button */}
        <img
          src={arrowIcon}
          alt="Back"
          onClick={handleBackClick}
          style={{
            position: 'absolute',
            left: '20px', // Adjust as needed
            cursor: 'pointer',
            width: '15.84px',
            height: '15.84px',
          }}
        />

        {/* Logo (Text) */}
        <span
          style={{
            fontSize: '15pt',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '17%',
            color: '#E8E8E8',
            textTransform: 'uppercase', // Use uppercase letters for the "zlo" text
          }}
        >
          zlo
        </span>
      </header>

      {/* Placeholder for grid and other content */}
      <div style={{ flexGrow: 1 }}></div>
    </div>
  );
};

export default A2Screen;
