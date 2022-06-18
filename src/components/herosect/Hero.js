import React, { useEffect, useState } from 'react';
import './hero.css';
import vid from '../../vid/vid.mp4';
import { Button } from '../button/Button';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Link as LinkS } from 'react-scroll';

const Hero = () => {
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
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="hero-container" id="home">
        <div className="heroBg">
          <video src={vid} autoPlay loop muted></video>
        </div>
        <div className="hero-content">
          <h1>Virtual Dollar Exchange Made Easy</h1>
          <p>
            Sign Up For A New Account Today And Receive $500 In Credit Towards
            Your Next Payment.
          </p>
          <div className="hero-wrap">
            <LinkS
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="sign-up"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              {button ? (
                <Button
                  className="btn"
                  buttonStyle="btn--primary"
                  buttonColor="orange"
                  buttonSize="btn--large"
                >
                  Get Started
                  {hover ? (
                    <MdArrowForward className="arf" />
                  ) : (
                    <MdKeyboardArrowRight className="arf" />
                  )}
                </Button>
              ) : (
                <Button
                  className="btn"
                  buttonStyle="btn--primary"
                  buttonColor="orange"
                  buttonSize="btn--mobile"
                >
                  Get Started
                  {hover ? (
                    <MdArrowForward className="arf" />
                  ) : (
                    <MdKeyboardArrowRight className="arf" />
                  )}
                </Button>
              )}
            </LinkS>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
