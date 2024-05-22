// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import FlightRoute from './Components/FlightRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/route" element={<FlightRoute />} />
      </Routes>
    </Router>
  );
}

export default App;