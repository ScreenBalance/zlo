import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import A1Screen from './components/A1'; // Import the A1 screen component
import A2Screen from './components/A2'; // Import the A2 screen component
import './App.css'; // Keep the default styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Use Routes for routing between screens */}
          <Route
            path="/"
            element={<A1Screen navigateToA2={() => window.location.replace('/a2')} />} // Use navigateToA2 to navigate to A2
          />
          <Route
            path="/a2"
            element={<A2Screen />} // Render A2Screen directly
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
