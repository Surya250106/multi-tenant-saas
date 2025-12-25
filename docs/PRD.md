# 📄 Product Requirements Document (PRD)
Multi-Tenant SaaS – Project & Task Management System

---

## 1. Product Overview

The Multi-Tenant SaaS Platform is a web-based application that allows multiple organizations (tenants) to register, manage users, create projects, and track tasks within isolated workspaces. The system ensures strict data isolation, role-based access control, and subscription-based limits.

Target users include small to medium-sized organizations seeking a lightweight project and task management solution.

---

## 2. User Personas

### 2.1 Super Admin
**Description:** System-level administrator  
**Responsibilities:**
- Manage all tenants
- Control subscription plans and limits
- Monitor system health and audit logs

**Goals:**
- Ensure platform stability
- Oversee tenant growth

**Pain Points:**
- Need visibility across all tenants
- Prevent misuse or abuse of system resources

---

### 2.2 Tenant Admin
**Description:** Organization administrator  
**Responsibilities:**
- Manage tenant users
- Create and manage projects and tasks
- Enforce internal workflows

**Goals:**
- Efficient team collaboration
- Control access within organization

**Pain Points:**
- Subscription limits
- Managing user roles

---

### 2.3 End User
**Description:** Regular team member  
**Responsibilities:**
- View assigned projects and tasks
- Update task status

**Goals:**
- Clear task visibility
- Easy collaboration

**Pain Points:**
- Lack of clarity on priorities
- Overloaded task lists

---

## 3. Functional Requirements

### Authentication & Authorization
- FR-001: The system shall allow tenant registration with a unique subdomain.
- FR-002: The system shall authenticate users using JWT.
- FR-003: The system shall enforce role-based access control.

### Tenant Management
- FR-004: The system shall allow super admins to view all tenants.
- FR-005: The system shall allow tenant admins to update tenant name.
- FR-006: The system shall isolate tenant data completely.

### User Management
- FR-007: The system shall allow tenant admins to create users.
- FR-008: The system shall enforce max user limits per subscription.
- FR-009: The system shall allow tenant admins to deactivate users.

### Project Management
- FR-010: The system shall allow users to create projects.
- FR-011: The system shall enforce project limits per subscription.
- FR-012: The system shall allow project updates and deletion.

### Task Management
- FR-013: The system shall allow task creation within projects.
- FR-014: The system shall allow task assignment to users.
- FR-015: The system shall allow task status updates.

---

## 4. Non-Functional Requirements

- NFR-001: The system shall support at least 100 concurrent users.
- NFR-002: API response time shall be under 200ms for 90% of requests.
- NFR-003: All passwords shall be securely hashed.
- NFR-004: JWT tokens shall expire after 24 hours.
- NFR-005: The system shall be available 99% of the time.

---

## 5. Assumptions & Constraints

- The system uses a shared database with tenant_id isolation.
- Docker is mandatory for deployment.
- JWT-only authentication (no session storage).

---

## 6. Success Metrics

- Successful tenant onboarding
- Zero cross-tenant data leaks
- High API availability
- Positive user feedback

---

## 7. Out of Scope

- Billing and payments
- Notifications (email/SMS)
- Advanced analytics

---

## 8. Summary

This PRD defines the functional and non-functional requirements for building a secure, scalable, multi-tenant SaaS platform that meets evaluation and real-world standards.
