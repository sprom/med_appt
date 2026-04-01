import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import { NotificationContainer } from './components/Common/Notification';
import HomePage from './pages/HomePage';
import AppointmentsPage from './pages/AppointmentsPage';
import DoctorsPage from './pages/DoctorsPage';
import ReviewsPage from './pages/ReviewsPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { ROUTES } from './utils/Constants';
import './styles/Global.css';
import './styles/Colors.css';
import './styles/Typography.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <NotificationContainer />
        <main>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.DOCTORS} element={<DoctorsPage />} />
            <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage />} />
            <Route path={ROUTES.REVIEWS} element={<ReviewsPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

