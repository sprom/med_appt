import React, { useState } from 'react';
import Button from '../Common/Button';
import './Appointments.css';

const BookingForm = ({ doctor, onBook, onCancel }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time slot';
    }

    if (!formData.reason.trim()) {
      newErrors.reason = 'Please provide a reason for the consultation';
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

    onBook({
      doctor,
      ...formData,
    });
  };

  // Get available dates (next 30 days)
  const availableDates = [];
  for (let i = 1; i <= 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    availableDates.push(date.toISOString().split('T')[0]);
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h3>Book Appointment with {doctor.name}</h3>

      <div className="booking-summary">
        <p>
          <strong>Doctor:</strong> {doctor.name}
        </p>
        <p>
          <strong>Specialty:</strong> {doctor.specialty}
        </p>
      </div>

      {/* Date Selection */}
      <div className="form-group">
        <label htmlFor="date">Select Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          onFocus={(e) => e.target.classList.add('focused')}
          onBlur={(e) => e.target.classList.remove('focused')}
          min={new Date().toISOString().split('T')[0]}
          className={errors.date ? 'error' : ''}
        />
        {errors.date && <span className="error-message">{errors.date}</span>}
      </div>

      {/* Time Slot Selection */}
      <div className="form-group">
        <label htmlFor="time">Select Time Slot</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className={errors.time ? 'error' : ''}
        >
          <option value="">Choose a time</option>
          {doctor.availableSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {errors.time && <span className="error-message">{errors.time}</span>}
      </div>

      {/* Reason for Visit */}
      <div className="form-group">
        <label htmlFor="reason">Reason for Consultation</label>
        <textarea
          id="reason"
          name="reason"
          placeholder="Briefly describe the reason for your visit"
          value={formData.reason}
          onChange={handleChange}
          onFocus={(e) => e.target.classList.add('focused')}
          onBlur={(e) => e.target.classList.remove('focused')}
          className={errors.reason ? 'error' : ''}
          rows="4"
        />
        {errors.reason && <span className="error-message">{errors.reason}</span>}
      </div>

      {/* Buttons */}
      <div className="form-buttons">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Confirm Booking
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
