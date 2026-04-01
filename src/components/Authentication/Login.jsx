import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validators, errorMessages } from '../../utils/Validators';
import { ROUTES } from '../../utils/Constants';
import Button from '../Common/Button';
import Card from '../Common/Card';
import './Authentication.css';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validators.isRequired(formData.email)) {
      newErrors.email = errorMessages.REQUIRED;
    } else if (!validators.isValidEmail(formData.email)) {
      newErrors.email = errorMessages.INVALID_EMAIL;
    }

    if (!validators.isRequired(formData.password)) {
      newErrors.password = errorMessages.REQUIRED;
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Login:', formData);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', formData.email);
      setIsSubmitting(false);
      navigate(ROUTES.HOME);
    }, 1000);
  };

  const handleFocus = (e) => {
    e.target.classList.add('focused');
  };

  const handleBlur = (e) => {
    e.target.classList.remove('focused');
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to your StayHealthy account</p>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={errors.password ? 'error' : ''}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="form-row">
            <div className="checkbox">
              <input
                id="rememberMe"
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to={ROUTES.HOME} className="forgot-password">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="auth-button"
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to={ROUTES.SIGNUP}>Sign up here</Link>
        </p>
      </Card>
    </div>
  );
};

export default Login;
