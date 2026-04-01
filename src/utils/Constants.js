// Application constants
export const APP_NAME = 'StayHealthy';
export const APP_VERSION = '1.0.0';

// User types
export const USER_TYPES = {
  PATIENT: 'patient',
  DOCTOR: 'doctor',
  ADMIN: 'admin',
};

// Appointment statuses
export const APPOINTMENT_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
};

// Rating categories
export const RATING_CATEGORIES = {
  DIAGNOSIS: 'diagnosis',
  COMMUNICATION: 'communication',
  PROFESSIONALISM: 'professionalism',
  TIME_MANAGEMENT: 'timeManagement',
};

// Doctor specialties
export const SPECIALTIES = [
  'General Practitioner',
  'Cardiologist',
  'Pediatrician',
  'Dermatologist',
  'Neurologist',
  'Orthopedic Surgeon',
  'Psychiatrist',
  'ENT Specialist',
];

// Time slots
export const TIME_SLOTS = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
];

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  APPOINTMENTS: '/appointments',
  DOCTORS: '/doctors',
  REVIEWS: '/reviews',
  PROFILE: '/profile',
  EDIT_PROFILE: '/profile/edit',
};
