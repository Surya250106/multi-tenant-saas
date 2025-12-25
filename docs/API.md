# 📘 API Documentation
**Multi-Tenant SaaS – Project & Task Management System**

Base URL (Docker):
http://localhost:5000/api

All responses follow this format:
{
  "success": true,
  "message": "optional",
  "data": {}
}

Authentication uses JWT:
Authorization: Bearer <token>

---

## AUTHENTICATION APIs

### API 1: Register Tenant
POST /auth/register-tenant
Auth: Public

Request:
{
  "tenantName": "Test Company",
  "subdomain": "testcompany",
  "adminEmail": "admin@test.com",
  "adminPassword": "Test@123",
  "adminFullName": "Admin User"
}

---

### API 2: Login
POST /auth/login
Auth: Public

Request:
{
  "email": "admin@demo.com",
  "password": "Demo@123",
  "tenantSubdomain": "demo"
}

---

### API 3: Get Current User
GET /auth/me
Auth: Required

---

### API 4: Logout
POST /auth/logout
Auth: Required

---

## TENANT MANAGEMENT APIs

### API 5: Get Tenant Details
GET /tenants/:tenantId

### API 6: Update Tenant
PUT /tenants/:tenantId

### API 7: List All Tenants
GET /tenants

---

## USER MANAGEMENT APIs

### API 8: Add User
POST /users/tenants/:tenantId/users

### API 9: List Tenant Users
GET /users/tenants/:tenantId/users

### API 10: Update User
PUT /users/:userId

### API 11: Delete User
DELETE /users/:userId

---

## PROJECT MANAGEMENT APIs

### API 12: Create Project
POST /projects

### API 13: List Projects
GET /projects

### API 14: Update Project
PUT /projects/:projectId

### API 15: Delete Project
DELETE /projects/:projectId

---

## TASK MANAGEMENT APIs

### API 16: Create Task
POST /tasks/projects/:projectId/tasks

### API 17: List Project Tasks
GET /tasks/projects/:projectId/tasks

### API 18: Update Task Status
PATCH /tasks/:taskId/status

### API 19: Update Task
PUT /tasks/:taskId

---

## HEALTH CHECK
GET /health
