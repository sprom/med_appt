import React, { useState } from 'react';
import Button from '../Common/Button';
import './Appointments.css';

// AppointmentForm - Full form with Name, Phone, Date, and Time
const AppointmentForm = ({ doctor, onBook, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
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
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      reason: formData.reason,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h3>Book Appointment</h3>

      {doctor && (
        <div className="booking-summary">
          <p>
            <strong>Doctor:</strong> {doctor.name}
          </p>
          <p>
            <strong>Specialty:</strong> {doctor.specialty}
          </p>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          onFocus={(e) => e.target.classList.add('focused')}
          onBlur={(e) => e.target.classList.remove('focused')}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          onFocus={(e) => e.target.classList.add('focused')}
          onBlur={(e) => e.target.classList.remove('focused')}
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="date">Select Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          className={errors.date ? 'error' : ''}
        />
        {errors.date && <span className="error-message">{errors.date}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="time">Select Time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className={errors.time ? 'error' : ''}
        >
          <option value="">Choose a time</option>
          {doctor && doctor.availableSlots && doctor.availableSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {errors.time && <span className="error-message">{errors.time}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="reason">Reason for Visit (Optional)</label>
        <textarea
          id="reason"
          name="reason"
          placeholder="Describe your symptoms or reason for visit"
          value={formData.reason}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="form-buttons">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Book Appointment
        </Button>
      </div>
    </form>
  );
};

export default AppointmentForm;
