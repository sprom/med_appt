import React from 'react';
import SearchDoctor from '../components/Appointments/SearchDoctor';
import './Pages.css';

const DoctorsPage = () => {
  const handleSelectDoctor = (doctor) => {
    console.log('Selected doctor:', doctor);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Find Doctors</h1>
        <p>Browse our network of qualified healthcare professionals</p>
      </div>

      <SearchDoctor onSelectDoctor={handleSelectDoctor} />
    </div>
  );
};

export default DoctorsPage;
