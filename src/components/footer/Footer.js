import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <footer className="fo-container">
        <div className="fo-wrap">
          <div className="fo-linkcon">
            <div className="fo-linkwrap">
              <div className="fo-litem">
                <h1 className="fo-title">About Us</h1>
                <Link className="fo-link" to="/sign-in">
                  How it Works
                </Link>
                <Link className="fo-link" to="/sign-in">
                  Testimonials
                </Link>
                <Link className="fo-link" to="/sign-in">
                  Careers
                </Link>
                <Link className="fo-link" to="/sign-in">
                  Investors
                </Link>
                <Link className="fo-link" to="/sign-in">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="fo-linkwrap">
              <div className="fo-litem">
                <h1 className="fo-title">Contact Us</h1>
                <Link className="fo-link" to="/sign-in">
                  Contact
                </Link>
                <Link className="fo-link" to="/sign-in">
                  Support
                </Link>
                <Link className="fo-link" to="/sign-in">
                  Destinations
                </Link>
                <Link className="fo-link" to="/sign-in">
                  Sponsorships
                </Link>
              </div>
            </div>
            <div className="fo-linkwrap">
              <div className="fo-litem">
                <h1 className="fo-title">Social Media</h1>
                <Link className="fo-link" to="/sign-in">
                  Instagram
                </Link>
                <Link className="fo-link" to="/sign-in">
                  Facebook
                </Link>
                <Link className="fo-link" to="/sign-in">
                  Youtube
                </Link>
                <Link className="fo-link" to="/sign-in">
                  Twitter
                </Link>
              </div>
            </div>
          </div>
          <section className="social-media">
            <div className="social-wrap">
              <Link onClick={toggleHome} className="social-logo" to="/">
                KINGS-MONEY
              </Link>
              <small className="webright">
                KINGS-MONEY <FaCopyright /> {new Date().getFullYear()} All
                Rights Reserved.
              </small>
              <div className="social-icons">
                <a
                  className="social-link"
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  className="social-link"
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  className="social-link"
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  className="social-link"
                  href="/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
