import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h4>STUDY MONK</h4>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
        <div className="login-button">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
