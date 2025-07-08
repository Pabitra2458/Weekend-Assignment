import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>
      <nav className="navbar">
        <h1 className='logo'>PORTFOLIO</h1>
        <ul className="navlist">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} offset={-50}>About</Link></li>
          <li><Link to="skills-container" smooth={true} duration={500} offset={-90}>Skills</Link></li>
          <li><Link to="contact-container" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;