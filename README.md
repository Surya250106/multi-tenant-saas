# Multi-Tenant SaaS Platform – Project & Task Management System

## 📌 Overview
This is a production-ready **multi-tenant SaaS application** that allows multiple organizations (tenants) to independently manage users, projects, and tasks with **strict data isolation**, **role-based access control**, and **subscription limits**.

The application is fully **Dockerized** and can be started with a single command.

---

## 🚀 Features
- Multi-tenant architecture with complete data isolation
- JWT-based authentication (24h expiry)
- Role-based access control (Super Admin, Tenant Admin, User)
- Tenant registration with unique subdomain
- User, Project, and Task management
- Subscription plan enforcement (Free / Pro / Enterprise)
- Audit logging for critical actions
- Fully Dockerized (Database + Backend + Frontend)
- Automatic database migrations and seed data
- Health check endpoint

---

## 🛠 Technology Stack

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- bcrypt

### Frontend
- React
- Axios
- React Router

### DevOps
- Docker
- Docker Compose

---

## 🏗 Architecture Overview
The system follows a three-tier architecture:

Browser → Frontend (React) → Backend API (Node.js) → PostgreSQL

All services communicate within a Docker network using service names.

📌 Architecture Diagram:
```
docs/images/system-architecture.png
```

---

## ⚙️ Prerequisites
- Docker
- Docker Compose

---

## ▶️ How to Run (Docker – One Command)

```bash
docker-compose up -d
```

### Verify Services
- Backend Health Check: http://localhost:5000/api/health
- Frontend UI: http://localhost:3000

---

## 🔐 Environment Variables
All environment variables are **committed** for evaluation.

### Backend (`backend/.env`)
- DB_HOST
- DB_PORT
- DB_NAME
- DB_USER
- DB_PASSWORD
- JWT_SECRET
- JWT_EXPIRES_IN
- FRONTEND_URL

### Frontend (`frontend/.env`)
- REACT_APP_API_URL

---

## 🧪 Test Credentials
All test credentials are documented in:

```
submission.json
```

Includes:
- Super Admin
- Tenant Admin
- Regular Users
- Projects and Tasks

---

## 📡 API Documentation
Complete API documentation (19 endpoints):

```
docs/API.md
```

---

## 📂 Documentation
- Research: `docs/research.md`
- PRD: `docs/PRD.md`
- Architecture: `docs/architecture.md`
- Technical Spec: `docs/technical-spec.md`
- API Docs: `docs/API.md`

---

## 🩺 Health Check
```http
GET /api/health
```

Response:
```json
{
  "status": "ok",
  "database": "connected"
}
```

---

## 🎥 Demo Video
📺 YouTube Link: **ADD YOUR LINK HERE**

---

## ✅ Evaluation Checklist
✔ Dockerized (DB + Backend + Frontend)  
✔ One-command startup  
✔ Automatic migrations & seed data  
✔ Role-based access control  
✔ Tenant data isolation  
✔ Health check endpoint  
✔ Complete documentation  

---

## 📜 License
This project is for educational and evaluation purposes.
