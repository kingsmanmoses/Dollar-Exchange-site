import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import './navbar.css';
import { Button } from '../button/Button';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener('resize', showButton);
  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <Link to="/" className="nav-logo" onClick={toggleHome}>
            KINGS-MONEY
          </Link>
          <div className="mobile-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <LinkS
                className="nav-links "
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={closeMenu}
              >
                About
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                className="nav-links "
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="discover"
                onClick={closeMenu}
              >
                Discover
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                className="nav-links "
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="services"
                onClick={closeMenu}
              >
                Services
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                className="nav-links "
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="sign-up"
                onClick={closeMenu}
              >
                Sign Up
              </LinkS>
            </li>
            <div className={click ? 'btn-menu active' : 'btn-menu'}>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-in" className="btn-link">
                    <Button
                      buttonStyle="btn--primary"
                      buttonColor="orange"
                      buttonSize="btn--large"
                    >
                      SIGN IN
                    </Button>
                  </Link>
                ) : (
                  <Link to="/sign-in" className="btn-link" onClick={closeMenu}>
                    <Button
                      buttonStyle="btn--primary"
                      buttonColor="orange"
                      buttonSize="btn--mobile"
                    >
                      SIGN IN
                    </Button>
                  </Link>
                )}
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
