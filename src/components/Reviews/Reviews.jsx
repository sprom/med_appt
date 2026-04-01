import React, { useState } from 'react';
import { reviewsData, mockUserAppointments } from '../../data/ReviewsData';
import Modal from '../Common/Modal';
import Button from '../Common/Button';
import Card from '../Common/Card';
import './Reviews.css';

const Reviews = () => {
  const [appointments, setAppointments] = useState(mockUserAppointments);
  const [reviews, setReviews] = useState(reviewsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [formData, setFormData] = useState({
    rating: 0,
    feedback: '',
  });

  const handleOpenModal = (appointment) => {
    setSelectedAppointment(appointment);
    setFormData({ rating: 0, feedback: '' });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
    setFormData({ rating: 0, feedback: '' });
  };

  const handleRatingChange = (newRating) => {
    setFormData((prev) => ({
      ...prev,
      rating: newRating,
    }));
  };

  const handleFeedbackChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      feedback: e.target.value,
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (formData.rating === 0 || !formData.feedback.trim()) {
      alert('Please provide a rating and feedback');
      return;
    }

    // Create new review
    const newReview = {
      id: `rev-${Date.now()}`,
      appointmentId: selectedAppointment.id,
      doctorId: selectedAppointment.doctorId,
      doctorName: selectedAppointment.doctorName,
      patientName: 'Current User',
      rating: formData.rating,
      date: new Date().toISOString().split('T')[0],
      text: formData.feedback,
      categories: {
        diagnosis: formData.rating,
        communication: formData.rating,
        professionalism: formData.rating,
        timeManagement: Math.max(1, formData.rating - 1),
      },
    };

    // Update reviews
    setReviews([...reviews, newReview]);

    // Update appointment as reviewed
    setAppointments((prev) =>
      prev.map((apt) =>
        apt.id === selectedAppointment.id ? { ...apt, reviewed: true } : apt
      )
    );

    handleCloseModal();
  };

  const getReviewForAppointment = (appointmentId) => {
    return reviews.find((review) => review.appointmentId === appointmentId);
  };

  const renderStars = (rating, isInteractive = false, onRate = null) => {
    return (
      <div className={`star-rating ${isInteractive ? 'interactive' : ''}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`star-btn ${star <= rating ? 'filled' : ''}`}
            onClick={() => isInteractive && onRate(star)}
            disabled={!isInteractive}
            onFocus={(e) => isInteractive && e.target.classList.add('focused')}
            onBlur={(e) => isInteractive && e.target.classList.remove('focused')}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="reviews-container">
      <h2>Consultation Feedback</h2>
      <p className="reviews-intro">
        Share your experience with your consultations to help other patients make informed choices
      </p>

      {appointments.length === 0 ? (
        <Card className="no-appointments">
          <p>No past consultations available for review.</p>
        </Card>
      ) : (
        <div className="consultations-list">
          {appointments.map((appointment) => {
            const review = getReviewForAppointment(appointment.id);

            return (
              <Card key={appointment.id} className="consultation-card">
                <div className="consultation-header">
                  <div className="consultation-info">
                    <h3>{appointment.doctorName}</h3>
                    <p className="specialty">{appointment.specialty}</p>
                    <p className="date-time">
                      📅 {appointment.date} at {appointment.time}
                    </p>
                  </div>
                  <div className="consultation-status">
                    {review ? (
                      <span className="reviewed-badge">✓ Reviewed</span>
                    ) : (
                      <span className="not-reviewed-badge">Not Reviewed</span>
                    )}
                  </div>
                </div>

                {review ? (
                  <div className="review-display">
                    <div className="review-header">
                      <div className="review-rating">
                        {renderStars(review.rating)}
                        <span className="rating-label">
                          {
                            ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][
                              review.rating - 1
                            ]
                          }
                        </span>
                      </div>
                      <p className="review-date">{review.date}</p>
                    </div>
                    <p className="review-text">{review.text}</p>
                  </div>
                ) : (
                  <div className="consultation-footer">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleOpenModal(appointment)}
                    >
                      Add Review
                    </Button>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {/* Review Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Add Your Feedback"
        size="md"
        footer={
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmitReview}>
              Submit Feedback
            </Button>
          </div>
        }
      >
        {selectedAppointment && (
          <form onSubmit={handleSubmitReview} className="review-form">
            <div className="modal-appointment-info">
              <p>
                <strong>Doctor:</strong> {selectedAppointment.doctorName}
              </p>
              <p>
                <strong>Specialty:</strong> {selectedAppointment.specialty}
              </p>
              <p>
                <strong>Consultation Date:</strong> {selectedAppointment.date}
              </p>
            </div>

            {/* Star Rating */}
            <div className="form-group">
              <label>Rate Your Experience</label>
              <div className="rating-container">
                {renderStars(formData.rating, true, handleRatingChange)}
                <span className="rating-label">
                  {formData.rating > 0 &&
                    ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][
                      formData.rating - 1
                    ]}
                </span>
              </div>
            </div>

            {/* Feedback Text */}
            <div className="form-group">
              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                id="feedback"
                placeholder="Share your experience with this consultation..."
                value={formData.feedback}
                onChange={handleFeedbackChange}
                onFocus={(e) => e.target.classList.add('focused')}
                onBlur={(e) => e.target.classList.remove('focused')}
                rows="5"
                maxLength="500"
              />
              <p className="char-count">
                {formData.feedback.length} / 500 characters
              </p>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Reviews;
