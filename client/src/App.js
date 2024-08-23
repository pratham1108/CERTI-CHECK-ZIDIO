import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Price from './components/Price';
import Login from './components/Login';
import Register from './components/Register';
import AboutSection from './components/AboutSection';
import AdminDash from './components/AdminDash'

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/price' element={<Price />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/admin" element={<AdminDash />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
