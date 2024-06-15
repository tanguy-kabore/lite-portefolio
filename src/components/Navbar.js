import React, { useState } from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* Logo here if necessary */}
        </div>
        <div className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item"><a href="#home">Home</a></li>
            <li className="navbar-item"><a href="#about">About</a></li>
            <li className="navbar-item"><a href="#resume">Resume</a></li>
            <li className="navbar-item"><a href="#school">School</a></li>
            <li className="navbar-item"><a href="#services">Services</a></li>
            <li className="navbar-item"><a href="#skills">Skills</a></li>
            <li className="navbar-item"><a href="#projects">Projects</a></li>
            <li className="navbar-item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <ThemeToggle />
        <div className={`navbar-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
