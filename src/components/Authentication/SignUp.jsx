import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validators, errorMessages } from '../../utils/Validators';
import { USER_TYPES, ROUTES } from '../../utils/Constants';
import Button from '../Common/Button';
import Card from '../Common/Card';
import './Authentication.css';

const SignUp = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    userType: USER_TYPES.PATIENT,
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!validators.isRequired(formData.name)) {
      newErrors.name = errorMessages.REQUIRED;
    } else if (!validators.isValidName(formData.name)) {
      newErrors.name = errorMessages.INVALID_NAME;
    }

    // Validate email
    if (!validators.isRequired(formData.email)) {
      newErrors.email = errorMessages.REQUIRED;
    } else if (!validators.isValidEmail(formData.email)) {
      newErrors.email = errorMessages.INVALID_EMAIL;
    }

    // Validate phone
    if (!validators.isRequired(formData.phone)) {
      newErrors.phone = errorMessages.REQUIRED;
    } else if (!validators.isValidPhone(formData.phone)) {
      newErrors.phone = errorMessages.INVALID_PHONE;
    }

    // Validate password
    if (!validators.isRequired(formData.password)) {
      newErrors.password = errorMessages.REQUIRED;
    } else if (!validators.isValidPassword(formData.password)) {
      newErrors.password = errorMessages.INVALID_PASSWORD;
    }

    // Validate confirm password
    if (!validators.isRequired(formData.confirmPassword)) {
      newErrors.confirmPassword = errorMessages.REQUIRED;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = errorMessages.PASSWORD_MISMATCH;
    }

    // Validate terms
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
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
      console.log('Form submitted:', formData);
      // Store user data (in real app, this would be sent to backend)
      localStorage.setItem('user', JSON.stringify(formData));
      setIsSubmitting(false);
      navigate(ROUTES.HOME);
    }, 1000);
  };

  const handleFocus = (e) => {
    // Visual feedback on focus
    e.target.classList.add('focused');
  };

  const handleBlur = (e) => {
    // Remove focus class
    e.target.classList.remove('focused');
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join StayHealthy to access online consultations</p>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* User Type */}
          <div className="form-group">
            <label htmlFor="userType">I am a</label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <option value={USER_TYPES.PATIENT}>Patient</option>
              <option value={USER_TYPES.DOCTOR}>Doctor</option>
              <option value={USER_TYPES.ADMIN}>Admin</option>
            </select>
          </div>

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

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

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
            <p className="password-hint">Min 8 characters, 1 uppercase, 1 number</p>
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          {/* Terms Checkbox */}
          <div className="form-group checkbox">
            <input
              id="termsAccepted"
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label htmlFor="termsAccepted">
              I agree to the Terms and Conditions
            </label>
          </div>
          {errors.termsAccepted && <span className="error-message">{errors.termsAccepted}</span>}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="auth-button"
          >
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to={ROUTES.LOGIN}>Login here</Link>
        </p>
      </Card>
    </div>
  );
};

export default SignUp;
