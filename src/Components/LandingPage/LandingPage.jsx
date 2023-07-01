import React from 'react';
import './LandingPage.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <header className="hero">
        <div className="hero-content">
          <h1>Efficient Online Recruitment Solution</h1>
          <p>
            Streamline your hiring process with our powerful online recruitment
            solution. Save time and make better hiring decisions.
          </p>
          <Link to="/JobsPage">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </header>
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Quick and easy candidate search</h3>
            <p>
              Search for candidates by keyword, location, or job title.
              Narrow down your results by skills, experience, and other
              criteria.
            </p>
          </div>
          <div className="feature-card">
            <h3>Access to a large pool of qualified candidates</h3>
            <p>
              We have a large database of qualified candidates from all over
              the world. You can easily find the right candidates for your
              open positions.
            </p>
          </div>
          <div className="feature-card">
            <h3>Efficient workflow for hiring managers</h3>
            <p>
              Our platform makes it easy for hiring managers to manage the
              entire hiring process. You can easily post jobs, screen
              candidates, and make hiring decisions.
            </p>
          </div>
        </div>
      </section>
      <section className="benefits">
        <h2>Benefits</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <h3>Save time and money on hiring</h3>
            <p>
              Our platform can help you save time and money on hiring. You
              can easily find the right candidates for your open positions,
              and you can manage the entire hiring process from one place.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Find the best candidates for your company</h3>
            <p>
              Our platform gives you access to a large pool of qualified
              candidates from all over the world. You can easily find the
              right candidates for your open positions, regardless of their
              location.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Improve your hiring process</h3>
            <p>
              Our platform can help you improve your hiring process. You can
              easily track the progress of your candidates, and you can
              get feedback from other hiring managers.
            </p>
          </div>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          For inquiries, please contact us at example@example.com or call us at
          +1-123-456-7890.
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
