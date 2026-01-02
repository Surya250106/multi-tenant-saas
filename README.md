
# 🏢 Multi-Tenant SaaS Platform – Project & Task Management System

A production-ready, full-stack, multi-tenant SaaS application where multiple organizations can independently manage users, projects, and tasks with strict tenant isolation, role-based access control, and subscription enforcement.

---

## 🎯 Objective
Build a secure, scalable, and dockerized multi-tenant SaaS system demonstrating real-world architecture and best practices.

---

## 🚀 Features
- Multi-tenant architecture with strict data isolation
- JWT authentication (24-hour expiry)
- Role-based access control (Super Admin, Tenant Admin, User)
- Subscription plans with enforced limits
- Project & task management
- Audit logging
- Responsive Dark Pro frontend
- Fully Dockerized (one-command startup)
- Automatic DB migrations & seed data
- Health check endpoint

---

## 🧱 Tech Stack
**Frontend:** React 18, CSS (Dark Pro Theme)  
**Backend:** Node.js, Express.js, JWT, bcrypt  
**Database:** PostgreSQL 15  
**DevOps:** Docker, Docker Compose  

---

## 🐳 Docker Setup
```bash
docker-compose up -d
```

Ports:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Database: 5432

Health Check:
```bash
curl http://localhost:5000/api/health
```

---

## 📂 Project Structure
```
backend/
frontend/
docs/
docker-compose.yml
submission.json
README.md
```

---

## 📘 API Coverage
19 REST APIs covering:
- Authentication
- Tenant management
- User management
- Projects
- Tasks

---

## 🔐 Security
- bcrypt password hashing
- JWT-based auth
- Tenant-level query filtering
- Audit logs

---

## 📚 Documentation
See `/docs` folder for:
- Research
- PRD
- Architecture
- Technical specs
- API docs

---

## 🎥 Demo
YouTube demo link provided in submission form.

---

## 👤 Author
Multi-Tenant SaaS Platform – 2026
