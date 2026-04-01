#!/bin/bash
# API Test Script for StayHealthy Telemedicine Platform
# Testing User Login Endpoint

echo "Testing StayHealthy API - User Login"
echo "====================================="
echo ""

# API Base URL (Update with actual backend URL)
API_URL="http://localhost:3000/api"

# Test User Login
echo "1. Testing User Login Endpoint"
echo "Request: POST /api/auth/login"
echo "---"

curl -X POST "${API_URL}/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "SecurePass123"
  }' \
  -w "\nStatus Code: %{http_code}\n" \
  -v

echo ""
echo "====================================="
echo "Login Response includes:"
echo "- user: User object with ID, name, email, etc."
echo "- token: JWT authentication token"
echo "- expires_in: Token expiration time in seconds"
echo "====================================="
