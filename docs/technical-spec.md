# ⚙️ Technical Specification
Multi-Tenant SaaS – Project & Task Management System

---

## 1. Overview

This document describes the technical architecture, project structure, and setup instructions for the Multi-Tenant SaaS application.

---

## 2. Technology Stack

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- bcrypt

### Frontend
- React
- Axios
- Context API

### DevOps
- Docker
- Docker Compose

---

## 3. Project Structure

### Backend
backend/
- src/
  - controllers/
  - services/
  - routes/
  - middleware/
  - models/
  - utils/
  - validators/
- migrations/
- seeds/
- scripts/
- tests/

### Frontend
frontend/
- src/
  - pages/
  - components/
  - services/
  - context/
  - utils/
- public/

---

## 4. Environment Variables

Backend (.env):
- DB_HOST
- DB_PORT
- DB_NAME
- DB_USER
- DB_PASSWORD
- JWT_SECRET
- JWT_EXPIRES_IN
- FRONTEND_URL

Frontend (.env):
- REACT_APP_API_URL

---

## 5. Setup Instructions

### Prerequisites
- Docker
- Docker Compose

### Run Application
```bash
docker-compose up -d
```

### Verify
- Backend: http://localhost:5000/api/health
- Frontend: http://localhost:3000

---

## 6. Database Initialization

- Migrations run automatically on container startup
- Seed data loads automatically
- No manual commands required

---

## 7. Development Notes

- JWT-only authentication
- Tenant isolation via tenant_id
- Role-based access control
