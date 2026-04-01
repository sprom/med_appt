import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/Constants';
import Button from '../Common/Button';
import Card from '../Common/Card';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Health, Our Priority</h1>
          <p>
            Connect with trusted healthcare professionals anytime, anywhere.
            Get online consultations with experienced doctors in minutes.
          </p>
          <div className="hero-buttons">
            <Link to={ROUTES.SIGNUP}>
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>
            <Link to={ROUTES.DOCTORS}>
              <Button variant="outline" size="lg">
                Find a Doctor
              </Button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <span>🏥</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose StayHealthy?</h2>
        <div className="features-grid">
          <Card className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Easy Booking</h3>
            <p>
              Book appointments with doctors in just a few clicks. Choose your preferred date and time.
            </p>
          </Card>

          <Card className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Available 24/7</h3>
            <p>
              Access healthcare consultations at any time that suits you. No waiting, no hassle.
            </p>
          </Card>

          <Card className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Expert Doctors</h3>
            <p>
              Connect with qualified and experienced healthcare professionals worldwide.
            </p>
          </Card>

          <Card className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Secure & Private</h3>
            <p>
              Your health data is encrypted and secure. Privacy is our top priority.
            </p>
          </Card>

          <Card className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Affordable Care</h3>
            <p>
              Get quality healthcare at affordable rates. No hidden charges or surprises.
            </p>
          </Card>

          <Card className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Medical Records</h3>
            <p>
              Access and download your medical records and prescriptions anytime.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Sign Up</h3>
            <p>Create your StayHealthy account with your basic information</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Browse Doctors</h3>
            <p>Search and find the right doctor for your needs</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Book Appointment</h3>
            <p>Choose your preferred date and time for consultation</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Consult & Get Care</h3>
            <p>Connect with your doctor and receive medical consultation</p>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <h3>Leave Feedback</h3>
            <p>Share your experience to help other patients</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Take Control of Your Health?</h2>
          <p>Join thousands of patients who trust StayHealthy for their healthcare needs.</p>
          <Link to={ROUTES.SIGNUP}>
            <Button variant="primary" size="lg">
              Start Your Health Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
