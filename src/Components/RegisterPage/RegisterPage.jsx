import React from 'react';
import './RegisterPage.css';
import Navbar from '../Navbar/Navbar';

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="register-page">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <input type="password" placeholder="Confirm Password" className="input-field" />
          <input type="number" placeholder="Phone Number" className="input-field" />
          <button type="submit">Register</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;


