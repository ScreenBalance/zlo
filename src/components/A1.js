import React, { useState, useEffect } from 'react';
import zelloLogo from '../assets/zello-logo.svg'; // Import your SVG file
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const A1Screen = () => {
  const [state, setState] = useState('state1'); // Starting with State 1 (initial state)
  const [showFullButton, setShowFullButton] = useState(false); // Controls full button visibility
  const navigate = useNavigate(); // Initialize useNavigate to programmatically navigate

  useEffect(() => {
    let timeouts = [];

    // State transitions
    if (state === 'state1') {
      timeouts.push(setTimeout(() => setState('state2'), 2000)); // Transition to state 2 after 2 seconds
    } else if (state === 'state2') {
      timeouts.push(setTimeout(() => setState('state3'), 2000)); // Transition to state 3 after 2 seconds
    } else if (state === 'state3') {
      timeouts.push(setTimeout(() => setState('state4'), 2000)); // Transition to state 4 after 2 seconds
    } else if (state === 'state4') {
      timeouts.push(setTimeout(() => setState('state5'), 3000)); // Transition to state 5 after 3 seconds
    } else if (state === 'state5') {
      // State 5 shows only "zlo", then transitions to blank
      timeouts.push(setTimeout(() => setState('state1'), 2000)); // Go back to state 1 (blank) after 2 seconds
    } else if (state === 'stateA') {
      timeouts.push(setTimeout(() => setState('state1'), 15000)); // Stay in state A for 15 seconds, then go to state 1
    }

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [state]); // Re-run the effect whenever `state` changes

  // Handle screen clicks
  const handleScreenClick = (e) => {
    if (!e.target.classList.contains('buttonArea')) {
      setState('stateA'); // Transition to State A when screen is clicked (outside button)
      setShowFullButton(true); // Show full button in State A
    }
  };

  // Handle button click
  const handleButtonClick = () => {
    if (state !== 'state1') {
      navigate('/a2'); // Use useNavigate to go to A2 without reloading the page
    }
  };

  return (
    <div
      className="element"
      onClick={handleScreenClick} // Handle screen clicks
      style={{
        width: '100%',
        minHeight: '100vh', // Full viewport height
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden', // Prevent overflow
      }}
    >
      {/* Zello Logo in the center */}
      <img
        src={zelloLogo}
        alt="Zello Logo"
        style={{
          width: 'clamp(240px, 100vw, 600px)', // Dynamic scaling between min and max
          height: 'auto', // Maintain aspect ratio
        }}
      />

      {/* Button with text (placed 20% from the bottom) */}
      <div
        className="buttonArea"
        onClick={handleButtonClick}
        style={{
          position: 'absolute',
          bottom: '20%', // Button placed 20% from the bottom of the viewport
          backgroundColor: state === 'stateA' ? '#F9F9F9' : 'transparent', // Full visibility in State A
          width: '393px', // Button size matches text
          height: '70px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'background-color 800ms ease-in-out', // Ease in/out background color
          cursor: state !== 'state1' ? 'pointer' : 'default', // Button clickable in all states except state 1
        }}
      >
        <span
          style={{
            color: 'rgba(0, 0, 0, 0.29)',
            fontSize: 25,
            fontFamily: 'Poppins',
            fontWeight: '300',
            letterSpacing: '17%',
            opacity: state === 'state2' || state === 'state3' || state === 'state4' || state === 'stateA' ? 1 : 0, // "Let’s" visible in states 2-4 and state A
            transition: 'opacity 800ms ease-in-out 200ms', // Delay easing out for "Let’s"
          }}
        >
          Let’s
        </span>

        <span
          style={{
            color: 'rgba(0, 0, 0, 0.29)',
            fontSize: 25,
            fontFamily: 'Poppins',
            fontWeight: '300',
            letterSpacing: '17%',
            opacity: state === 'state3' || state === 'state4' || state === 'state5' || state === 'stateA' ? 1 : 0, // "zlo" visible in states 3-5 and state A
            transition: 'opacity 800ms ease-in-out', // Smooth appearance and disappearance for "zlo"
            marginLeft: '10px',
          }}
        >
          zlo
        </span>

        <span
          style={{
            color: 'rgba(0, 0, 0, 0.29)',
            fontSize: 25,
            fontFamily: 'Poppins',
            fontWeight: '300',
            letterSpacing: '17%',
            opacity: state === 'state4' || state === 'stateA' ? 1 : 0, // "down" visible only in state 4 and state A
            transition: 'opacity 800ms ease-in-out 200ms', // Delay easing out for "down"
            marginLeft: '10px',
          }}
        >
          down
        </span>
      </div>

      {/* Static text at the bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '1%', // Adjust this to place it a little above the screen edge
          fontSize: '10px', // Small text size
          color: 'rgba(0, 0, 0, 0.29)', // Grey color similar to the "Let’s zlo down" text
          fontFamily: 'inter',
          textAlign: 'center', // Center the text
          width: '100%', // Ensure it's centered horizontally
        }}
      >
        Av studenter ved Høyskolen Kristiania.
      </div>

      {/* Custom scrollbar hiding for Safari and other browsers */}
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden; /* Prevent horizontal scrolling */
        }

        /* WebKit Browsers (Chrome, Safari, Opera) */
        .element::-webkit-scrollbar {
          display: none; /* Hide scrollbar */
          width: 0;
          height: 0;
          -webkit-appearance: none;
        }

        /* Firefox */
        .element {
          scrollbar-width: none; /* Hide scrollbar in Firefox */
        }

        /* Internet Explorer and Edge */
        .element {
          -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
        }
      `}</style>
    </div>
  );
};

export default A1Screen;
