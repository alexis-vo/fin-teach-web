import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/wolf-cropped.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-left" onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Logo" className="logo" />
        <span className="nav-brand">The Wolf of Paris-Saclay</span>
      </Link>

      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li className="dropdown">
          <span>Lessons ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/lesson-intro" onClick={() => setIsOpen(false)}>Introduction</Link></li>
            <li><Link to="/lesson-crr" onClick={() => setIsOpen(false)}>Cox-Ross-Rubinstein</Link></li>
          </ul>
        </li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
      </ul>
      
    </nav>
  );
}

export default Navbar;