import React from 'react';
import Modal from './Modal';
import logo from "../Assets/TE.png"
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" className='logo-img'/>
      </div>
      <main className="navbar">
        <Link to={"/home"}  className='nav-link'>Home</Link>
        <Link to={"/about"} className='nav-link'>About us</Link>
        <Link to={"/products"} className='nav-link'>Products</Link>
        <Link to={"/contact"} className='nav-link'>Contact</Link>
      </main>
      <div>
        <button className="btn_signup">SignUp</button>
        <Modal/>
      </div>
    </nav>
  )
}

export default Navbar