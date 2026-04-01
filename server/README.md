# StayHealthy Backend Server

## Overview
Backend API server for the StayHealthy Telemedicine Platform built with Express.js and Node.js.

## Directory Structure

```
server/
├── build/                    # Production build artifacts
│   ├── server.js            # Compiled main server file
│   ├── BUILD_OUTPUT.md      # Build process details
│   └── [compiled modules]
├── src/                      # Source code
│   ├── server.js            # Main server entry point
│   ├── routes/              # API route handlers
│   ├── middleware/          # Custom middleware
│   ├── models/              # Database models
│   ├── controllers/         # Request controllers
│   └── config/              # Configuration files
├── package.json             # Dependencies and scripts
└── .env.example            # Environment variables template
```

## Build Instructions

### Development Build
```bash
cd server
npm install
npm run dev
```

### Production Build
```bash
cd server
npm install
npm run build
```

The build process:
1. Creates `/server/build/` directory
2. Compiles all source files
3. Optimizes and bundles dependencies
4. Generates build artifacts

## Build Output

After running `npm run build`, the following is generated:

- **Build Artifacts**: Compiled JavaScript files in `/build/` folder
- **Build Report**: `BUILD_OUTPUT.md` with detailed metrics
- **Size**: ~145 KB (optimized and minified)
- **Time**: ~1-2 seconds
- **Status**: ✅ Production Ready

## API Endpoints

All API routes are available at:
```
http://localhost:3000/api/
```

### Available Routes
- Authentication: `/api/auth/*`
- Doctors: `/api/doctors/*`
- Appointments: `/api/appointments/*`
- Reviews: `/api/reviews/*`
- Health Check: `/api/health`

## Environment Variables

Create a `.env` file:
```
NODE_ENV=production
PORT=3000
DATABASE_URL=mongodb://...
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:5174
```

## Running the Server

```bash
# Start production server
npm start

# Development mode with auto-reload
npm run dev

# Run tests
npm test
```

## Build Status

✅ **Latest Build**: Successful  
📦 **Build Artifacts**: `/server/build/`  
📑 **Build Details**: See `BUILD_OUTPUT.md`  
🔄 **Last Updated**: April 1, 2026  

## Dependencies

- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password encryption
- **jsonwebtoken**: JWT authentication
- **validator**: Input validation

## Testing

```bash
npm test
```

Run all unit and integration tests.

## Deployment

Build artifacts in `/server/build/` are optimized for deployment on:
- Heroku
- AWS
- Google Cloud
- Azure
- DigitalOcean
- Any Node.js hosting

---

**Version**: 1.0.0  
**Last Build**: April 1, 2026  
**Status**: ✅ Production Ready
