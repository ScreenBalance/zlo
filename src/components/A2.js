import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import arrowIcon from '../assets/back-arrow.svg'; // Import the back arrow icon

const A2Screen = () => {
  const [dots, setDots] = useState([]);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const navigate = useNavigate(); // For navigation back to A1

  useEffect(() => {
    // Generate 1080 dots (24 columns * 45 rows)
    const newDots = Array.from({ length: 1080 }, (_, i) => i);
    setDots(newDots);

    // Update the viewport height dynamically for mobile devices
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleBackClick = () => {
    navigate('/'); // Navigate back to A1
  };

  return (
    <div
      style={{
        width: '100%',
        height: `${viewportHeight}px`, // Dynamically use window height for mobile devices
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header */}
      <header
        style={{
          width: '100%',
          height: '8.06vh', // Header height as percentage of viewport height
          backgroundColor: 'white',
          borderBottom: '1px solid #DFDFDF', // 1px bottom border for separation
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10, // Ensure it stays on top
        }}
      >
        {/* Back Button */}
        <img
          src={arrowIcon}
          alt="Back"
          onClick={handleBackClick}
          style={{
            position: 'absolute',
            left: '4vw', // Adjust to a responsive position
            cursor: 'pointer',
            width: '4vw', // Use viewport width to scale the button size for mobile
            height: '4vw',
          }}
        />

        {/* Logo (Text) */}
        <span
          style={{
            fontSize: '3.5vw', // Scaled for mobile devices, about 15pt for iPhone 13 Pro Max
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '17%',
            color: '#E8E8E8',
            textTransform: 'uppercase',
          }}
        >
          zlo
        </span>
      </header>

      {/* Dots Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(24, 1fr)', // 24 columns, adapted for smartphone
          gridGap: '2px', // Small gap between dots
          width: '80vw', // Make the grid fit nicely within the viewport width
          height: '71.54vh', // Grid height as percentage of viewport height
          margin: '0 auto', // Center the grid horizontally
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        {dots.map((dot, index) => (
          <div
            key={index}
            style={{
              width: '3vw', // Responsive circle size for mobile
              height: '3vw',
              backgroundColor: '#DFDFDF',
              borderRadius: '50%',
            }}
          ></div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: '1%',
          fontSize: '2.5vw', // Responsive font size for mobile
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
