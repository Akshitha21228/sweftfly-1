import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import HomeSections from './components/HomeSections';
import About from './components/About';
import Technologies from './components/Technologies';
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-wrapper">
              <Hero />
              <HomeSections />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/hire"
          element={<div className="page-placeholder">Hire Talent Page</div>}
        />
      </Routes>
      <Footer />
    </Router>
  );
}