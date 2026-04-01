// Compiled server.js
// Build Time: 2026-04-01
// Source: src/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', port: PORT });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
