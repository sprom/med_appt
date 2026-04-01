# StayHealthy Inc. - Telemedicine Platform

## Project Overview

StayHealthy is a modern telemedicine platform built with React and Vite, designed to facilitate seamless appointment booking between patients and healthcare professionals. The platform provides an intuitive interface for searching doctors, booking consultations, submitting reviews, and managing user profiles.

## Features

### 👥 User Management
- **User Registration**: Sign up with role selection (Patient/Doctor)
- **User Authentication**: Secure login with email and password
- **Profile Management**: View and edit user profile information
- **Account Features**: Update personal details, medical history, and preferences

### 🏥 Doctor Services
- **Doctor Search**: Browse available doctors with advanced filtering
- **Filter Options**:
  - By medical specialty (Cardiology, Neurology, Dermatology, etc.)
  - By availability status
  - By patient ratings
- **Doctor Details**: View ratings, reviews, available time slots, and specialties

### 📅 Appointment Management
- **Book Appointments**: Schedule consultations with selected doctors
- **Appointment Details**: Select date, time, and reason for visit
- **Available Slots**: View doctor's availability and select preferred time
- **Appointment Tracking**: Monitor booked, completed, and cancelled appointments

### ⭐ Review System
- **Give Feedback**: Submit reviews for completed consultations
- **Rating System**: 5-star rating interface for doctor evaluation
- **Detailed Reviews**: Write detailed feedback about consultation experience
- **Review Categories**: Rate doctors on diagnosis, communication, professionalism, and time management

### 🎨 Responsive Design
- **Mobile First**: Optimized for all device sizes
- **Modern UI**: Clean and intuitive user interface
- **Accessibility**: WCAG-compliant design patterns
- **Performance**: Fast loading and smooth interactions

## Tech Stack

### Frontend
- **React 19.2.4**: Modern JavaScript UI library
- **React Router v6.23.0**: Client-side routing
- **Vite 8.0.1**: Next-generation build tool
- **CSS3**: Responsive styling with CSS variables
- **reactjs-popup 2.0.5**: Modal components

### Development Tools
- **Node.js & npm**: Package management
- **HMR (Hot Module Replacement)**: Fast development experience

## Project Structure

```
src/
├── components/
│   ├── Appointments/          # Appointment management components
│   │   ├── SearchDoctor.jsx
│   │   ├── FindDoctorSearch.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── BookingForm.jsx
│   │   ├── AppointmentFormIC.jsx
│   │   └── AppointmentForm.jsx
│   ├── Authentication/         # Auth components
│   │   ├── SignUp.jsx
│   │   └── Login.jsx
│   ├── Reviews/               # Review management
│   │   ├── Reviews.jsx
│   │   └── GiveReviews.jsx
│   ├── Profile/               # User profile
│   │   ├── Profile.jsx
│   │   └── ProfileCard.jsx
│   ├── Navigation/            # Navigation components
│   │   └── Navbar.jsx
│   ├── Home/                  # Home page
│   │   └── Home.jsx
│   ├── Common/                # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   └── Notification.jsx
│   └── styles/                # Global styles
├── pages/                     # Page components
├── data/                      # Mock data
│   ├── DoctorsData.js
│   ├── AppointmentsData.js
│   └── ReviewsData.js
├── utils/                     # Utilities
│   ├── Constants.js
│   └── Validators.js
├── App.jsx                    # Main app component
├── main.jsx                   # Entry point
└── index.css                  # Global styles
```

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm installed

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Create production-optimized build
- `npm run preview` - Preview production build locally

## Usage Guide

### For Patients
1. **Sign Up**: Create account with personal details
2. **Browse Doctors**: Use search and filters to find specialists
3. **Book Appointments**: Select doctor, date, and time
4. **Give Feedback**: Submit reviews after consultation completion
5. **Manage Profile**: Update personal and medical information

## Form Validation

### Sign Up Validation
- Name: Required, minimum 2 characters
- Email: Valid email format required
- Phone: 10-digit number
- Password: Minimum 8 characters, must include uppercase and number
- Age: Valid number between 10-120
- Blood Group: Selection from predefined list

### Login Validation
- Email: Valid email format required
- Password: Minimum 8 characters

### Appointment Booking Validation
- Name: Required
- Phone: 10-digit number required
- Date: Must be future date
- Time: Must select available slot

### Review Submission Validation
- Rating: Must select 1-5 stars
- Feedback: Required, maximum 500 characters

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploying to Vercel
```bash
npm install -g vercel
vercel
```

### Deploying to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

**Version**: 1.0.0  
**Last Updated**: 2024
