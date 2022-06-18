import React from 'react';
import { Link } from 'react-router-dom';
import UseForm from './UseForm';
import validateInfo from './validateInfo';
import './sign.css';

// eslint-disable-next-line react/prop-types
const Signup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = UseForm(
    validateInfo,
    submitForm
  );
  return (
    <>
      <div className="form-container">
        <div className="form-content-right">
          <form className="form" onSubmit={handleSubmit}>
            <Link className="icon" to="/">
              KINGS-MONEY
            </Link>
            <div className="form-inputs">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <button className="form-btn" type="submit">
              Sign Up
            </button>
            <span className="form-login">
              Already have an account? Login <a href="/">Here</a>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
