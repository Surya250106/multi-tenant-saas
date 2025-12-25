# 📚 Research Document
Multi-Tenant SaaS – Architecture, Technology & Security

---

## 1. Introduction

Multi-tenancy is a core architectural concept in Software-as-a-Service (SaaS) platforms. It enables a single application instance to serve multiple organizations while maintaining strict data isolation.

---

## 2. Multi-Tenancy Models

### 2.1 Shared Database, Shared Schema (Chosen)

All tenants share the same database and schema. Each table includes a tenant_id column.

**Pros**
- Simple architecture
- Cost-effective
- Easy scaling

**Cons**
- Requires strict isolation logic

**Reason for Choice**
Chosen due to simplicity, Docker compatibility, and evaluation requirements.

---

### 2.2 Shared Database, Separate Schema

Each tenant has its own schema.

**Pros**
- Better isolation

**Cons**
- Complex migrations
- Higher maintenance

---

### 2.3 Separate Database per Tenant

**Pros**
- Maximum isolation

**Cons**
- High cost
- Complex DevOps

---

## 3. Technology Stack Justification

### Backend
Node.js + Express chosen for lightweight, fast development and Docker compatibility.

### Frontend
React chosen for component-based UI and ecosystem support.

### Database
PostgreSQL chosen for ACID compliance and relational integrity.

### Authentication
JWT chosen for stateless authentication.

---

## 4. Security Considerations

### Data Isolation
- tenant_id enforced at API and DB level

### Authentication
- bcrypt password hashing
- JWT expiration

### Authorization
- Role-based access control
- Super admin override

### API Security
- Input validation
- Centralized error handling

### Audit Logging
- Logs all critical actions

---

## 5. Conclusion

This research supports a secure, scalable, and evaluator-compliant multi-tenant SaaS architecture.
