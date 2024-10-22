import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import arrowIcon from '../assets/back-arrow.svg'; // Import the arrow icon

const A2Screen = () => {
  const [dots, setDots] = useState([]);
  const navigate = useNavigate(); // For navigation back to A1

  useEffect(() => {
    // Generate 1080 dots (24 columns * 45 rows)
    const newDots = Array.from({ length: 1080 }, (_, i) => i);
    setDots(newDots);
  }, []);

  const handleBackClick = () => {
    navigate('/'); // Navigate back to A1
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: 'white',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Distribute the header, grid, and footer
      }}
    >
      {/* Header with arrow */}
      <div
        style={{
          width: '100%',
          height: '8.06vh', // Header height as percentage of viewport height
          background: 'white',
          borderBottom: '1px solid #EDEDED', // Bottom border
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Back Arrow */}
        <img
          src={arrowIcon}
          alt="Back"
          onClick={handleBackClick}
          style={{
            width: '15.84px',
            height: '15.84px',
            position: 'absolute',
            left: '22px',
            top: '50%', // Center vertically
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
        />

        {/* "zlo" Text Logo */}
        <span
          style={{
            fontSize: '15pt',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '17%',
            color: '#E8E8E8',
            textTransform: 'uppercase', // If you want uppercase "zlo"
          }}
        >
          zlo
        </span>
      </div>

      {/* Dots grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(24, 1fr)', // 24 columns
          gridGap: '2px', // 2px gap between dots
          width: '72.77%',
          height: '71.54vh', // Grid height as percentage of viewport height
          justifySelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {dots.map((dot, index) => (
          <div
            key={index}
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#DFDFDF',
              borderRadius: '50%',
            }}
          ></div>
        ))}
      </div>

      {/* "90 år i måneder" text */}
      <div
        style={{
          textAlign: 'center',
          fontSize: 'clamp(18px, 5vw, 36px)', // Dynamic font size for responsiveness
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '300',
          color: 'rgba(0, 0, 0, 0.7)',
          paddingBottom: '10px',
        }}
      >
        90 år i måneder
      </div>

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: '1%',
          fontSize: '10px',
          color: 'rgba(0, 0, 0, 0.29)',
          fontFamily: 'inter, sans-serif',
          textAlign: 'center',
          width: '100%',
        }}
      >
        Av studenter ved Høyskolen Kristiania.
      </div>
    </div>
  );
};

export default A2Screen;
