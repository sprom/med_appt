import React, { useState } from 'react';
import Button from '../Common/Button';
import Card from '../Common/Card';
import './Profile.css';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    age: 30,
    bloodGroup: 'O+',
    address: '123 Main Street, City, Country',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userProfile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(userProfile);
  };

  const handleSave = () => {
    setUserProfile(formData);
    setIsEditing(false);
  };

  const handleFocus = (e) => {
    e.target.classList.add('focused');
  };

  const handleBlur = (e) => {
    e.target.classList.remove('focused');
  };

  return (
    <div className="profile-container">
      <Card className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <span>👤</span>
          </div>
          <div className="profile-title">
            <h2>{userProfile.name}</h2>
            <p>{userProfile.email}</p>
          </div>
          {!isEditing && (
            <Button variant="primary" onClick={handleEdit}>
              Edit Profile
            </Button>
          )}
        </div>

        {isEditing ? (
          <form className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bloodGroup">Blood Group</label>
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="address">Full Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                rows="3"
              />
            </div>

            <div className="form-buttons">
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
        ) : (
          <div className="profile-details">
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{userProfile.email}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{userProfile.phone}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Age:</span>
              <span className="detail-value">{userProfile.age}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Blood Group:</span>
              <span className="detail-value">{userProfile.bloodGroup}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Address:</span>
              <span className="detail-value">{userProfile.address}</span>
            </div>
          </div>
        )}
      </Card>

      {/* Medical Records Section */}
      <Card className="medical-records-card">
        <h3>Medical Records</h3>
        <p className="records-info">
          You can download your medical records and test reports here.
        </p>
        <div className="records-list">
          <div className="record-item">
            <span>📄 Lab Report - March 2026</span>
            <Button variant="outline" size="sm">
              Download
            </Button>
          </div>
          <div className="record-item">
            <span>📄 Prescription - February 2026</span>
            <Button variant="outline" size="sm">
              Download
            </Button>
          </div>
          <div className="record-item">
            <span>📄 Health Summary - January 2026</span>
            <Button variant="outline" size="sm">
              Download
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
