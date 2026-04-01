import React, { useState } from 'react';
import SearchDoctor from '../components/Appointments/SearchDoctor';
import BookingForm from '../components/Appointments/BookingForm';
import Modal from '../components/Common/Modal';
import './Pages.css';

const AppointmentsPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [booking, setBooking] = useState(null);

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleBook = (bookingData) => {
    setBooking(bookingData);
    setTimeout(() => {
      alert('appointment booked successfully!');
      setSelectedDoctor(null);
      setBooking(null);
    }, 500);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
    setBooking(null);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Book an Appointment</h1>
      </div>

      <SearchDoctor onSelectDoctor={handleSelectDoctor} />

      {/* Booking Modal */}
      <Modal
        isOpen={!!selectedDoctor}
        onClose={handleCloseModal}
        title="Book Appointment"
        size="md"
      >
        {selectedDoctor && (
          <BookingForm
            doctor={selectedDoctor}
            onBook={handleBook}
            onCancel={handleCloseModal}
          />
        )}
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={!!booking}
        onClose={handleCloseModal}
        title="Booking Confirmed!"
        size="sm"
      >
        {booking && (
          <div className="booking-success">
            <p className="success-icon">✓</p>
            <h3>Appointment Confirmed!</h3>
            <p>
              Your appointment with <strong>{booking.doctor.name}</strong> has been
              scheduled for <strong>{booking.date}</strong> at <strong>{booking.time}</strong>.
            </p>
            <p>You will receive a reminder notification before the appointment.</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AppointmentsPage;
