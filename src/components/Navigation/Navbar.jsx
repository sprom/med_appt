import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/Constants';
import Button from '../Common/Button';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={ROUTES.HOME} className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">🏥</span>
          StayHealthy
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to={ROUTES.HOME} className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={ROUTES.DOCTORS} className="nav-link" onClick={closeMenu}>
              Doctors
            </Link>
          </li>
          <li className="nav-item">
            <Link to={ROUTES.APPOINTMENTS} className="nav-link" onClick={closeMenu}>
              Appointments
            </Link>
          </li>
          <li className="nav-item">
            <Link to={ROUTES.REVIEWS} className="nav-link" onClick={closeMenu}>
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link to={ROUTES.PROFILE} className="nav-link" onClick={closeMenu}>
              Profile
            </Link>
          </li>
        </ul>

        <div className="nav-buttons">
          <Link to={ROUTES.LOGIN}>
            <Button
              variant="outline"
              size="sm"
              onClick={closeMenu}
            >
              Login
            </Button>
          </Link>
          <Link to={ROUTES.SIGNUP}>
            <Button
              variant="primary"
              size="sm"
              onClick={closeMenu}
            >
              Sign Up
            </Button>
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
