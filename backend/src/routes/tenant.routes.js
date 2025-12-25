const express = require('express');
const router = express.Router();

const tenantController = require('../controllers/tenant.controller');
const auth = require('../middleware/auth.middleware');
const role = require('../middleware/role.middleware');
const tenantGuard = require('../middleware/tenant.middleware');

// API 5: Get Tenant Details
router.get(
  '/:tenantId',
  auth,
  tenantGuard,
  tenantController.getTenantById
);

// API 6: Update Tenant
router.put(
  '/:tenantId',
  auth,
  tenantGuard,
  tenantController.updateTenant
);

// API 7: List All Tenants (super_admin only)
router.get(
  '/',
  auth,
  role('super_admin'),
  tenantController.listTenants
);

module.exports = router;
