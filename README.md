# 🚀 Multi-Tenant SaaS Platform

A production-ready, containerized Multi-Tenant SaaS Application built
using modern full-stack technologies. This project demonstrates scalable
architecture, strict tenant isolation, secure authentication, and
Docker-based deployment.

------------------------------------------------------------------------

## 📌 Overview

This platform allows multiple organizations (tenants) to operate
independently within a single application instance.

Each tenant can:

-   Manage their own users
-   Create and manage projects
-   Assign and track tasks
-   View dashboard statistics

A system-level Super Admin has global access across all tenants.

------------------------------------------------------------------------

## 🎯 Key Features

-   Multi-tenant architecture with strict data isolation
-   Role-Based Access Control (super_admin, tenant_admin, user)
-   Secure JWT authentication
-   Tenant registration with automatic admin creation
-   Project and task management system
-   Dashboard with real-time statistics
-   PostgreSQL relational database
-   Fully containerized with Docker
-   Automatic database initialization
-   Health check endpoint

------------------------------------------------------------------------

## 🏗 Architecture

### Frontend

-   React (Vite)
-   React Router
-   Axios

### Backend

-   Node.js
-   Express.js
-   JWT Authentication
-   bcrypt password hashing
-   express-validator

### Database

-   PostgreSQL 15

### DevOps

-   Docker
-   Docker Compose

------------------------------------------------------------------------

## 🔐 Multi-Tenancy Strategy

-   Each user belongs to a specific tenant (except super_admin)
-   JWT contains the tenant identifier
-   All database queries are filtered by `tenant_id`
-   Super admin has `tenant_id = NULL` for global access

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### Prerequisites

-   Docker
-   Docker Compose
-   Git

### Clone the Repository

git clone https://github.com/Surya250106/multi-tenant-saas cd
multi-tenant-saas

### Start the Application

docker-compose up -d

------------------------------------------------------------------------

## 🌐 Application Access

Frontend: http://localhost:3000

Backend Health Check: http://localhost:5000/api/health

------------------------------------------------------------------------

## 🔑 Demo Credentials

Super Admin\
Email: superadmin@system.com\
Password: Admin@123

Tenant Admin\
Tenant: demo\
Email: admin@demo.com\
Password: Demo@123

Regular User\
Tenant: demo\
Email: user1@demo.com\
Password: User@123

------------------------------------------------------------------------

## 📡 API Documentation

See: docs/API.md

------------------------------------------------------------------------

## 📄 License

MIT License --- Free for educational or commercial use.
