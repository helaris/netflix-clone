import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    }
  }, []);
  
  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
      className='nav__logo' 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png" 
      alt="Netflix Logo"
      />
      <img 
      className='nav__avatar'
      src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" 
      alt="Profile Icon"
      />
    </nav>
  )
}

export default Navbar
