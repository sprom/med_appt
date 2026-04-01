import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Authentication Routes
app.post('/api/auth/register', (req, res) => {
  const { name, email, phone, password, role } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    userId: `user_${Date.now()}`,
    user: { name, email, phone, role },
    token: `jwt_token_${Date.now()}`,
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password required' });
  }

  res.status(200).json({
    success: true,
    message: 'Login successful',
    user: { id: 'user_123', email, name: 'John Doe', role: 'patient' },
    token: `jwt_token_${Date.now()}`,
    refreshToken: `refresh_token_${Date.now()}`,
  });
});

// Doctor Routes
app.get('/api/doctors', (req, res) => {
  res.json({
    success: true,
    doctors: [
      { id: 1, name: 'Dr. Smith', specialty: 'Cardiologist', rating: 4.5 },
      { id: 2, name: 'Dr. Johnson', specialty: 'Pediatrician', rating: 4.8 },
    ],
  });
});

// Appointment Routes
app.post('/api/appointments', (req, res) => {
  const { doctorId, date, time, reason } = req.body;
  res.status(201).json({
    success: true,
    appointmentId: `apt_${Date.now()}`,
    message: 'Appointment booked successfully',
    appointment: { doctorId, date, time, reason },
  });
});

// Review Routes
app.post('/api/reviews', (req, res) => {
  const { doctorId, rating, feedback } = req.body;
  res.status(201).json({
    success: true,
    reviewId: `rev_${Date.now()}`,
    message: 'Review submitted successfully',
    review: { doctorId, rating, feedback },
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 StayHealthy API Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 API Base URL: http://localhost:${PORT}/api`);
});

export default app;
