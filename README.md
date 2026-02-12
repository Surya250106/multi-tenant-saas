# 🚀 Multi-Tenant SaaS Platform

A production-ready, containerized multi-tenant SaaS application built
with modern backend and frontend technologies. Designed to demonstrate
scalable architecture, strict tenant isolation, secure authentication,
and Docker-based deployment.

------------------------------------------------------------------------

## 📌 Overview

This project implements a full-stack SaaS platform where:

-   Multiple organizations (tenants) operate independently
-   Each tenant manages its own users, projects, and tasks
-   Data isolation is strictly enforced
-   A system-level super admin has global visibility

------------------------------------------------------------------------

## 🎯 Core Features

-   Multi-tenant architecture with strict data isolation
-   Role-based access control (super_admin, tenant_admin, user)
-   Secure JWT authentication
-   Tenant self-registration with automatic admin creation
-   Project and task management
-   Dashboard statistics
-   Automated PostgreSQL database initialization
-   Dockerized deployment
-   Health monitoring endpoint

------------------------------------------------------------------------

## 🏗 Architecture

### Frontend

-   React (Vite)
-   React Router
-   Axios

### Backend

-   Node.js
-   Express.js
-   jsonwebtoken
-   bcrypt
-   express-validator

### Database

-   PostgreSQL 15

### DevOps

-   Docker
-   Docker Compose

------------------------------------------------------------------------

## 🔐 Multi-Tenancy Strategy

-   Each user belongs to a tenant (except super_admin)
-   JWT contains tenant identifier
-   Every database query is filtered by `tenant_id`
-   Super admin has global access (`tenant_id = NULL`)

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### Prerequisites

-   Docker
-   Docker Compose
-   Git

### Clone the Repository

git clone `https://github.com/Surya250106/multi-tenant-saas`{=html} cd multi-tenant-saas

### Start the Application

docker-compose up -d

------------------------------------------------------------------------

## 🌐 Access

Frontend: http://localhost:3000\
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

MIT License --- Free for educational and commercial use.
