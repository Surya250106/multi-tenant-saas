const tenantModel = require('../models/tenant.model');

exports.getTenantById = async (tenantId, user) => {
  if (user.role !== 'super_admin' && tenantId !== user.tenantId) {
    throw { statusCode: 403, message: 'Forbidden' };
  }

  const tenant = await tenantModel.findById(tenantId);
  if (!tenant) {
    throw { statusCode: 404, message: 'Tenant not found' };
  }

  const stats = await tenantModel.countStats(tenantId);

  return {
    ...tenant,
    stats
  };
};

exports.updateTenant = async (tenantId, updates, user) => {
  if (user.role !== 'super_admin') {
    delete updates.subscription_plan;
    delete updates.max_users;
    delete updates.max_projects;
    delete updates.status;
  }

  return tenantModel.updateTenant(tenantId, updates);
};

exports.listTenants = async () => {
  const { rows } = await require('../config/database').query(
    `SELECT * FROM tenants ORDER BY created_at DESC`
  );
  return rows;
};
