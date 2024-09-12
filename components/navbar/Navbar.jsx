"use client"
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Navbar = () => {
  const location = useLocation(); // Get current path to highlight the active link
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src="/logo.png" alt="Teen Alive Logo" className="logo-image" />
            <span className="logo-text">Teen Alive</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="hamburger-icon">☰</span>
        </div>

        {/* Links */}
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
            Projects
          </Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
          <Link to="/donate" className={`donate-button ${location.pathname === '/donate' ? 'active' : ''}`}>
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
