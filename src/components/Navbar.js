import React, { useState } from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <a href="#home">B. Tanguy KABORE</a> */}
        </div>
        <div className={`navbar-menu ${isDropdownOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item"><a href="#home">Home</a></li>
            <li className="navbar-item"><a href="#about">About</a></li>
            <li className="navbar-item"><a href="#resume">Resume</a></li>
            <li className="navbar-item"><a href="#services">Services</a></li>
            <li className="navbar-item"><a href="#skills">Skills</a></li>
            <li className="navbar-item"><a href="#projects">Projects</a></li>
            {/* <li className="navbar-item"><a href="#myblog">My Blog</a></li> */}
            <li className="navbar-item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleDropdown}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
