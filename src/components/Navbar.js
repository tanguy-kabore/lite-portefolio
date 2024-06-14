import React from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <a href="#home">B. Tanguy KABORE</a> */}
        </div>
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
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
