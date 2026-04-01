import React, { useState } from 'react';
import { doctorsData } from '../../data/DoctorsData';
import DoctorCard from './DoctorCard';
import Button from '../Common/Button';
import './Appointments.css';

const SearchDoctor = ({ onSelectDoctor }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    specialty: '',
    availability: 'all',
    minRating: '0',
  });
  const [sortBy, setSortBy] = useState('rating');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter and search doctors
  let filteredDoctors = doctorsData.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty =
      filters.specialty === '' || doctor.specialty === filters.specialty;

    const matchesAvailability =
      filters.availability === 'all' ||
      (filters.availability === 'available' && doctor.available) ||
      (filters.availability === 'unavailable' && !doctor.available);

    const matchesRating = doctor.rating >= parseFloat(filters.minRating);

    return (
      matchesSearch && matchesSpecialty && matchesAvailability && matchesRating
    );
  });

  // Sort doctors
  if (sortBy === 'rating') {
    filteredDoctors.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'reviews') {
    filteredDoctors.sort((a, b) => b.reviewCount - a.reviewCount);
  } else if (sortBy === 'name') {
    filteredDoctors.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="search-doctor-container">
      <div className="search-section">
        <h2>Find a Doctor</h2>
        
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by doctor name or specialty..."
            value={searchTerm}
            onChange={handleSearch}
            onFocus={(e) => e.target.classList.add('focused')}
            onBlur={(e) => e.target.classList.remove('focused')}
          />
        </div>

        {/* Filters and Sort */}
        <div className="filters-section">
          <div className="filter-group">
            <label htmlFor="specialty">Specialty</label>
            <select
              id="specialty"
              name="specialty"
              value={filters.specialty}
              onChange={handleFilterChange}
            >
              <option value="">All Specialties</option>
              <option value="General Practitioner">General Practitioner</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="availability">Availability</label>
            <select
              id="availability"
              name="availability"
              value={filters.availability}
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="available">Available Now</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="minRating">Minimum Rating</label>
            <select
              id="minRating"
              name="minRating"
              value={filters.minRating}
              onChange={handleFilterChange}
            >
              <option value="0">Any Rating</option>
              <option value="3">3+ Stars</option>
              <option value="3.5">3.5+ Stars</option>
              <option value="4">4+ Stars</option>
              <option value="4.5">4.5+ Stars</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sortBy">Sort By</label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Highest Rating</option>
              <option value="reviews">Most Reviewed</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="doctors-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onSelectDoctor={() => onSelectDoctor(doctor)}
            />
          ))
        ) : (
          <div className="no-results">
            <p>No doctors found matching your criteria.</p>
            <p>Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDoctor;
