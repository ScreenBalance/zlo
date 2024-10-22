import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Import necessary components from react-router-dom
import A1Screen from './components/A1';
import A2Screen from './components/A2';
import './App.css';

function App() {
  return (
    <Router basename="/zlo">  {/* Add the basename for your GitHub Pages subdirectory */}
      <div className="App">
        <Routes>
          <Route path="/" element={<A1Screen />} />
          <Route path="/a2" element={<A2Screen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
