const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const db = require('../config/database');
const jwtConfig = require('../config/jwt');

const tenantModel = require('../models/tenant.model');
const userModel = require('../models/user.model');

exports.registerTenant = async (data) => {
  const client = await db.pool.connect();

  try {
    await client.query('BEGIN');

    const subscriptionPlan = 'free';
    const maxUsers = 5;
    const maxProjects = 3;

    const tenant = await tenantModel.createTenant({
      name: data.tenantName,
      subdomain: data.subdomain,
      subscriptionPlan,
      maxUsers,
      maxProjects
    });

    const passwordHash = await bcrypt.hash(data.adminPassword, 10);

    const adminUser = await userModel.createUser({
      tenantId: tenant.id,
      email: data.adminEmail,
      passwordHash,
      fullName: data.adminFullName,
      role: 'tenant_admin'
    });

    await client.query('COMMIT');

    return {
      tenantId: tenant.id,
      subdomain: tenant.subdomain,
      adminUser
    };
  } catch (err) {
    await client.query('ROLLBACK');
    err.statusCode = 400;
    throw err;
  } finally {
    client.release();
  }
};

exports.login = async ({ email, password, tenantSubdomain }) => {
  const tenant = await tenantModel.findBySubdomain(tenantSubdomain);
  if (!tenant || tenant.status !== 'active') {
    throw { statusCode: 404, message: 'Tenant not found or inactive' };
  }

  const user = await userModel.findByEmailAndTenant(email, tenant.id);
  if (!user || !user.is_active) {
    throw { statusCode: 401, message: 'Invalid credentials' };
  }

  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    throw { statusCode: 401, message: 'Invalid credentials' };
  }

  const token = jwt.sign(
    {
      userId: user.id,
      tenantId: user.tenant_id,
      role: user.role
    },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expiresIn }
  );

  return {
    user: {
      id: user.id,
      email: user.email,
      fullName: user.full_name,
      role: user.role,
      tenantId: user.tenant_id
    },
    token,
    expiresIn: 86400
  };
};

exports.getCurrentUser = async (userId) => {
  const user = await userModel.findById(userId);
  if (!user) {
    throw { statusCode: 404, message: 'User not found' };
  }

  return {
    id: user.id,
    email: user.email,
    fullName: user.full_name,
    role: user.role,
    isActive: user.is_active
  };
};
