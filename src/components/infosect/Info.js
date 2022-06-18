/* eslint-disable react/prop-types */
import React from 'react';
import { Link as LinkS } from 'react-scroll';
import { Button } from '../button/Button';
import './info.css';

const Info = ({
  id,
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) => {
  return (
    <>
      <div id={id} className={lightBg ? 'info-sect' : 'info-sect darkBg'}>
        <div className="container">
          <div
            className="row info-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="info-txtwrap">
                <p className="top-line">{topLine}</p>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p className={lightTextDesc ? 'info-sub' : 'info-sub dark'}>
                  {description}
                </p>
                <LinkS
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                  to="home"
                >
                  <Button
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    buttonColor="primary"
                  >
                    {buttonLabel}
                  </Button>
                </LinkS>
              </div>
            </div>
            <div className="col">
              <div className="info-imgwrap">
                <img src={img} alt={alt} className="info-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
