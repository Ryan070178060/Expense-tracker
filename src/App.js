import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Deposit from './components/Deposit';
import Contact from './components/Contact';
import About from './components/About';
import LoginSignup from './components/LoginSignup';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
