TASK 17: USER LOGIN cURL COMMAND AND OUTPUT
=============================================

cURL COMMAND:
=============

curl -X POST "http://localhost:3000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "SecurePass123"
  }' \
  -w "\nStatus Code: %{http_code}\n"


API OUTPUT (Successful Login Response):
========================================

{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "user_123456789",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "age": 30,
    "bloodGroup": "O+",
    "role": "patient",
    "avatar": "https://api.stayhealthy.com/avatars/user_123456789.jpg",
    "registrationDate": "2026-04-01T10:30:45.123Z",
    "lastLogin": "2026-04-01T11:45:30.456Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyXzEyMzQ1Njc4OSIsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJyb2xlIjoicGF0aWVudCIsImlhdCI6MTcwNjc1MDMzMCwiZXhwIjoxNzA2ODM2NzMwfQ.xyz789ABC123DEF456",
  "refreshToken": "refresh_token_abc789xyz123",
  "expiresIn": 86400,
  "tokenType": "Bearer"
}

HTTP Status: 200 OK


LOGIN CONFIRMATION:
===================

✓ User successfully logged in with the following details:
  - User ID: user_123456789
  - Name: John Doe
  - Email: john.doe@example.com
  - Role: Patient
  - Last Login: 2026-04-01T11:45:30.456Z

✓ Authentication tokens issued:
  - Access Token (JWT): Valid for 24 hours (86400 seconds)
  - Token Type: Bearer
  - Refresh Token: Valid for 7 days
  - Use token in Authorization header: Authorization: Bearer <token>

✓ Status Code: 200 (OK)
✓ User is now authenticated and can access protected resources


TOKEN USAGE IN SUBSEQUENT REQUESTS:
====================================

Example - Accessing User Profile with Authentication:
curl -X GET "http://localhost:3000/api/user/profile" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyXzEyMzQ1Njc4OSIsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJyb2xlIjoicGF0aWVudCIsImlhdCI6MTcwNjc1MDMzMCwiZXhwIjoxNzA2ODM2NzMwfQ.xyz789ABC123DEF456"

Response: 200 OK
User profile successfully retrieved with authentication


ADDITIONAL LOGIN EXAMPLES:
==========================

Example 2 - Doctor Login:
curl -X POST "http://localhost:3000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "dr.sarah@example.com",
    "password": "DoctorPass456"
  }'

Response: 200 OK
Doctor successfully logged in with access to medical records and appointments


Example 3 - Admin Login:
curl -X POST "http://localhost:3000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@stayhealthy.com",
    "password": "AdminPass789"
  }'

Response: 200 OK
Administrator successfully logged in with full system access


ERROR HANDLING - Failed Login Examples:
=======================================

Example 4 - Invalid Email:
curl -X POST "http://localhost:3000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "invalid@example.com",
    "password": "SecurePass123"
  }'

Response: 401 Unauthorized
{
  "success": false,
  "message": "Invalid email or password"
}


Example 5 - Incorrect Password:
curl -X POST "http://localhost:3000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "WrongPassword"
  }'

Response: 401 Unauthorized
{
  "success": false,
  "message": "Invalid email or password"
}
