import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import the hamburger icon
import Modal from './Modal';
import logo from "../Assets/TE.png";
import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5"
import { PiDotsNineBold } from "react-icons/pi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" className='logo-img'/>
      </div>

      {window.innerWidth > 768 ? (
        <>
          <main className="navbar">
            <Link to={"/home"} className='nav-link'>Home</Link>
            <Link to={"/about"} className='nav-link'>About us</Link>
            <Link to={"/products"} className='nav-link'>Products</Link>
            <Link to={"/contact"} className='nav-link'>Contact</Link>
          </main>
          <div className="signup">
            <button className="btn_signup">SignUp</button>
            <Modal/>
          </div>
        </>
      ) : (
        <>
          <div className="menu-icon" onClick={toggleMenu}>
          <PiDotsNineBold style={{ color: 'darkgreen' }} />
          </div>
          {isMenuOpen && (
          <div className="sidebar">
          <button className="close-btn" onClick={toggleMenu}>
            <IoCloseSharp />
          </button>
          <Link to={"/home"} className='sidebar-link' onClick={toggleMenu}>Home</Link>
          <Link to={"/about"} className='sidebar-link' onClick={toggleMenu}>About us</Link>
          <Link to={"/products"} className='sidebar-link' onClick={toggleMenu}>Products</Link>
          <Link to={"/contact"} className='sidebar-link' onClick={toggleMenu}>Contact</Link>
          <div className="sidebar-end">
            <button className="btn_signup">SignUp</button>
            <Modal/>
          </div>
        </div>
      )}

        </>
      )}
    </nav>
  );
};

export default Navbar;








