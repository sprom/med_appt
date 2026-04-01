// Form validation utilities
export const validators = {
  // Email validation
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Password validation (min 8 chars, 1 uppercase, 1 number)
  isValidPassword: (password) => {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
  },

  // Phone number validation
  isValidPhone: (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  },

  // Name validation
  isValidName: (name) => {
    return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
  },

  // Age validation
  isValidAge: (age) => {
    const ageNum = parseInt(age, 10);
    return !isNaN(ageNum) && ageNum >= 1 && ageNum <= 150;
  },

  // Blood group validation
  isValidBloodGroup: (bloodGroup) => {
    const validGroups = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
    return validGroups.includes(bloodGroup);
  },

  // Required field validation
  isRequired: (value) => {
    return value !== null && value !== undefined && value.toString().trim().length > 0;
  },

  // Rating validation (1-5)
  isValidRating: (rating) => {
    const ratingNum = parseInt(rating, 10);
    return !isNaN(ratingNum) && ratingNum >= 1 && ratingNum <= 5;
  },
};

// Form validation error messages
export const errorMessages = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD: 'Password must be at least 8 characters with one uppercase letter and one number',
  INVALID_PHONE: 'Please enter a valid phone number',
  INVALID_NAME: 'Name must be at least 2 characters and contain only letters',
  INVALID_AGE: 'Please enter a valid age between 1 and 150',
  INVALID_BLOOD_GROUP: 'Please select a valid blood group',
  PASSWORD_MISMATCH: 'Passwords do not match',
  INVALID_RATING: 'Rating must be between 1 and 5',
};
