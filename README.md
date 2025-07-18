ah# MERN Bug Tracker

A full-stack bug tracking application built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS v4 (CDN). The app demonstrates systematic testing, debugging, and error handling best practices.

## Features
- Report new bugs via a form
- View a list of all reported bugs
- Update bug statuses (open, in-progress, resolved)
- Delete bugs
- Robust error handling (backend middleware & React error boundary)
- Comprehensive unit and integration tests (backend & frontend)

## Project Structure
```
mern-bug-tracker/
  backend/         # Express API, Mongoose models, tests
  frontend/        # React app, components, tests
```

## Installation & Setup

### Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)

### Backend
```bash
cd backend
npm install
cp .env.example .env # or edit .env with your MongoDB URI
npm run dev          # Starts server with nodemon
```

### Frontend
```bash
cd frontend
npm install
npm start            # Starts React app on http://localhost:3000
```

### Tailwind CSS v4
- Included via CDN in `frontend/public/index.html` (no config or PostCSS needed)

## Running Tests

### Backend
```bash
cd backend
npx jest
```
- Unit tests: `tests/validateBug.test.js`
- Integration tests: `tests/bugRoutes.test.js` (uses jest-mock for DB)

### Frontend
```bash
cd frontend
npm test
```
- Unit/component tests: `src/components/*.test.js`

## Debugging Techniques Used
- **Console logs**: Used in backend controllers and React error boundary
- **Chrome DevTools**: Inspect network requests and React state
- **Node.js Inspector**: Debug backend with `node --inspect server.js`
- **Error boundaries**: React error boundary component for graceful UI errors

## Testing Approach & Coverage
- **Backend**: Unit tests for helpers, integration tests for API (mocked DB)
- **Frontend**: Unit/component tests for form, list, error boundary
- **Coverage**: All critical logic and UI states are tested

## Error Handling
- **Backend**: Centralized Express error middleware returns JSON errors
- **Frontend**: Error boundary catches and displays UI errors

## Intentional Bugs & Debugging
- Try introducing typos or invalid data in the code to see error handling in action
- Use console logs and DevTools to trace issues


