# 🏗️ System Architecture
Multi-Tenant SaaS – Project & Task Management System

---

## 1. High-Level Architecture

The system follows a standard three-tier architecture:

Client (Browser)
   ↓
Frontend Application (React)
   ↓
Backend API (Node.js + Express)
   ↓
Database (PostgreSQL)

All components are containerized using Docker and orchestrated via Docker Compose.

---

## 2. Component Overview

### Frontend
- Built with React
- Handles authentication, role-based UI, and user interactions
- Communicates with backend via REST APIs
- Runs on port 3000

### Backend
- Node.js + Express REST API
- Implements authentication, authorization, and tenant isolation
- Uses JWT for stateless auth
- Runs on port 5000

### Database
- PostgreSQL
- Shared database with shared schema
- Tenant isolation enforced using tenant_id
- Runs on port 5432

---

## 3. Authentication Flow

1. User logs in via frontend
2. Backend validates credentials
3. JWT token issued with payload:
   - userId
   - tenantId
   - role
4. Frontend stores token
5. Token sent in Authorization header for all protected requests

---

## 4. Multi-Tenancy & Data Isolation

- Each tenant has a unique tenant_id
- All tables (except super_admin users) include tenant_id
- Backend middleware enforces tenant filtering
- Super admins bypass tenant restriction

---

## 5. Database Schema Overview

### Tables
- tenants
- users
- projects
- tasks
- audit_logs

### Key Relationships
- tenants → users (1:N)
- tenants → projects (1:N)
- projects → tasks (1:N)
- users → tasks (assignment)

---

## 6. API Architecture

The API layer is divided into modules:

- Auth Module
- Tenant Module
- User Module
- Project Module
- Task Module

Total Endpoints: 19

---

## 7. Docker Architecture

- All services run in the same Docker network
- Services communicate using service names
- Single command startup:
  docker-compose up -d

---

## 8. Architecture Diagrams

### System Architecture Diagram
File:
docs/images/system-architecture.png

### Database ERD
File:
docs/images/database-erd.png

---

## 9. Design Decisions

- Shared DB + shared schema chosen for simplicity and scalability
- JWT-only authentication (no session table)
- Explicit tenant_id enforcement in queries
- Automatic migrations and seed data on startup

---

## 10. Summary

This architecture ensures:
- Strong tenant isolation
- Secure authentication and authorization
- Scalable and maintainable design
- Fully dockerized, reproducible environment
