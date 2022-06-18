import React from 'react';
import './service.css';
import icon1 from '../../img/growth.svg';
import icon2 from '../../img/world.svg';
import icon3 from '../../img/stat.svg';

const Service = () => {
  return (
    <>
      <div className="ser-container" id="services">
        <h1 className="ser-h1">Our Services</h1>
        <div className="ser-wrap">
          <div className="ser-card">
            <img className="ser-img" src={icon1} alt="icon" />
            <h2 className="ser-h2">Reduce Expenses</h2>
            <p className="ser-p">
              We help reduce your fees and increase your overall revenue.
            </p>
          </div>
          <div className="ser-card">
            <img className="ser-img" src={icon2} alt="icon" />
            <h2 className="ser-h2">Virtual Offices</h2>
            <p className="ser-p">
              You can access our platform online anywhere in the world.
            </p>
          </div>
          <div className="ser-card">
            <img className="ser-img" src={icon3} alt="icon" />
            <h2 className="ser-h2">Premium Benefits</h2>
            <p className="ser-p">
              Unlock our special membership card that returns 5% cash back.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
