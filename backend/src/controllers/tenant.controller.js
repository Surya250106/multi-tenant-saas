const tenantService = require('../services/tenant.service');

exports.getTenantById = async (req, res, next) => {
  try {
    const tenant = await tenantService.getTenantById(
      req.params.tenantId,
      req.user
    );

    return res.status(200).json({
      success: true,
      data: tenant
    });
  } catch (err) {
    next(err);
  }
};

exports.updateTenant = async (req, res, next) => {
  try {
    const updatedTenant = await tenantService.updateTenant(
      req.params.tenantId,
      req.body,
      req.user
    );

    return res.status(200).json({
      success: true,
      message: 'Tenant updated successfully',
      data: updatedTenant
    });
  } catch (err) {
    next(err);
  }
};

exports.listTenants = async (req, res, next) => {
  try {
    const tenants = await tenantService.listTenants(req.query, req.user);
    return res.status(200).json({
      success: true,
      data: tenants
    });
  } catch (err) {
    next(err);
  }
};
