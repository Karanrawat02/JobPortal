import React from 'react';
import './LoginPage.css';
import Navbar from '../Navbar/Navbar';

const LoginPage = () => {
  return (
    <>
        <Navbar />
        <div className="login-page">
        <h2>Login</h2>
        <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        </form>
        <p className="forgot-password-link">
          <a href="">Forgot Password?</a>
        </p>
        <p className="register-link">
            Don't have an account? <a href="/register">Register here</a>
        </p>
        </div>
    </>
  );
};

export default LoginPage;
