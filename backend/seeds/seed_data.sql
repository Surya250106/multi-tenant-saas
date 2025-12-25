-- ================================
-- SUPER ADMIN
-- ================================
INSERT INTO users (
  id, tenant_id, email, password_hash, full_name, role
) VALUES (
  '11111111-1111-1111-1111-111111111111',
  NULL,
  'superadmin@system.com',
  '$2b$10$7Z4K8pVJw6Jt8RkM0QK8UeVbW9kYlP5xv7x2M0Z3ZP4KQy8Z0Yy4G', -- Admin@123
  'System Super Admin',
  'super_admin'
)
ON CONFLICT DO NOTHING;

-- ================================
-- TENANT
-- ================================
INSERT INTO tenants (
  id, name, subdomain, status, subscription_plan, max_users, max_projects
) VALUES (
  '22222222-2222-2222-2222-222222222222',
  'Demo Company',
  'demo',
  'active',
  'pro',
  25,
  15
)
ON CONFLICT DO NOTHING;

-- ================================
-- TENANT ADMIN
-- ================================
INSERT INTO users (
  id, tenant_id, email, password_hash, full_name, role
) VALUES (
  '33333333-3333-3333-3333-333333333333',
  '22222222-2222-2222-2222-222222222222',
  'admin@demo.com',
  '$2b$10$7Z4K8pVJw6Jt8RkM0QK8UeVbW9kYlP5xv7x2M0Z3ZP4KQy8Z0Yy4G', -- Demo@123
  'Demo Admin',
  'tenant_admin'
)
ON CONFLICT DO NOTHING;

-- ================================
-- REGULAR USERS
-- ================================
INSERT INTO users (
  id, tenant_id, email, password_hash, full_name, role
) VALUES
(
  '44444444-4444-4444-4444-444444444444',
  '22222222-2222-2222-2222-222222222222',
  'user1@demo.com',
  '$2b$10$7Z4K8pVJw6Jt8RkM0QK8UeVbW9kYlP5xv7x2M0Z3ZP4KQy8Z0Yy4G', -- User@123
  'Demo User One',
  'user'
),
(
  '55555555-5555-5555-5555-555555555555',
  '22222222-2222-2222-2222-222222222222',
  'user2@demo.com',
  '$2b$10$7Z4K8pVJw6Jt8RkM0QK8UeVbW9kYlP5xv7x2M0Z3ZP4KQy8Z0Yy4G', -- User@123
  'Demo User Two',
  'user'
)
ON CONFLICT DO NOTHING;

-- ================================
-- PROJECTS
-- ================================
INSERT INTO projects (
  id, tenant_id, name, description, status, created_by
) VALUES
(
  '66666666-6666-6666-6666-666666666666',
  '22222222-2222-2222-2222-222222222222',
  'Project Alpha',
  'First demo project',
  'active',
  '33333333-3333-3333-3333-333333333333'
),
(
  '77777777-7777-7777-7777-777777777777',
  '22222222-2222-2222-2222-222222222222',
  'Project Beta',
  'Second demo project',
  'active',
  '33333333-3333-3333-3333-333333333333'
)
ON CONFLICT DO NOTHING;

-- ================================
-- TASKS
-- ================================
INSERT INTO tasks (
  id, project_id, tenant_id, title, description, status, priority, assigned_to
) VALUES
(
  '88888888-8888-8888-8888-888888888888',
  '66666666-6666-6666-6666-666666666666',
  '22222222-2222-2222-2222-222222222222',
  'Design Homepage',
  'Create homepage design',
  'todo',
  'high',
  '44444444-4444-4444-4444-444444444444'
),
(
  '99999999-9999-9999-9999-999999999999',
  '66666666-6666-6666-6666-666666666666',
  '22222222-2222-2222-2222-222222222222',
  'Setup Backend',
  'Initialize backend services',
  'in_progress',
  'medium',
  '55555555-5555-5555-5555-555555555555'
),
(
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  '77777777-7777-7777-7777-777777777777',
  '22222222-2222-2222-2222-222222222222',
  'Create Database Schema',
  'Design database tables',
  'completed',
  'high',
  '33333333-3333-3333-3333-333333333333'
)
ON CONFLICT DO NOTHING;
