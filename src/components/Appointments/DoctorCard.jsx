import React from 'react';
import Card from '../Common/Card';
import Button from '../Common/Button';
import './Appointments.css';

const DoctorCard = ({ doctor, onSelectDoctor }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= Math.round(rating) ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <Card className="doctor-card" isClickable>
      {/* Doctor Image */}
      <div className="doctor-image">
        <div className="placeholder-image">
          <span>👨‍⚕️</span>
        </div>
        {!doctor.available && <span className="unavailable-badge">Unavailable</span>}
      </div>

      {/* Doctor Info */}
      <div className="doctor-info">
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-specialty">{doctor.specialty}</p>

        {/* Rating */}
        <div className="doctor-rating">
          <div className="stars">{renderStars(doctor.rating)}</div>
          <span className="rating-value">{doctor.rating}</span>
          <span className="review-count">({doctor.reviewCount} reviews)</span>
        </div>

        {/* Bio */}
        <p className="doctor-bio">{doctor.bio}</p>

        {/* Availability */}
        <div className="doctor-availability">
          <span className={`availability-badge ${doctor.available ? 'available' : 'unavailable'}`}>
            {doctor.available ? '✓ Available' : '✗ Not Available'}
          </span>
        </div>

        {/* Action Button */}
        <Button
          variant="primary"
          size="sm"
          onClick={onSelectDoctor}
          disabled={!doctor.available}
          className="book-button"
        >
          {doctor.available ? 'Book Appointment' : 'Notify Me'}
        </Button>
      </div>
    </Card>
  );
};

export default DoctorCard;
