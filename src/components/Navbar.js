import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/wolf-cropped.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="nav-brand">The Wolf of Saclay</span>
      </div>

      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Lessons</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;