const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');
const role = require('../middleware/role.middleware');
const tenantGuard = require('../middleware/tenant.middleware');

// API 8: Add User to Tenant
router.post(
  '/tenants/:tenantId/users',
  auth,
  role('tenant_admin'),
  tenantGuard,
  userController.createUser
);

// API 9: List Tenant Users
router.get(
  '/tenants/:tenantId/users',
  auth,
  tenantGuard,
  userController.listUsers
);

// API 10: Update User
router.put(
  '/:userId',
  auth,
  userController.updateUser
);

// API 11: Delete User
router.delete(
  '/:userId',
  auth,
  role('tenant_admin'),
  userController.deleteUser
);

module.exports = router;
