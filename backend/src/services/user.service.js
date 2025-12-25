const bcrypt = require("bcryptjs");

const passwordHash = await bcrypt.hash(data.password, 10);

const userModel = require('../models/user.model');
const tenantModel = require('../models/tenant.model');

exports.createUser = async (tenantId, data, currentUser) => {
  if (currentUser.tenantId !== tenantId) {
    throw { statusCode: 403, message: 'Forbidden' };
  }

  const tenant = await tenantModel.findById(tenantId);
  const users = await userModel.listByTenant(tenantId);

  if (users.length >= tenant.max_users) {
    throw { statusCode: 403, message: 'Subscription limit reached' };
  }

  const passwordHash = await bcrypt.hash(data.password, 10);

  return userModel.createUser({
    tenantId,
    email: data.email,
    passwordHash,
    fullName: data.fullName,
    role: data.role || 'user'
  });
};

exports.listUsers = async (tenantId, query, user) => {
  if (tenantId !== user.tenantId && user.role !== 'super_admin') {
    throw { statusCode: 403, message: 'Forbidden' };
  }

  return userModel.listByTenant(tenantId);
};

exports.updateUser = async (userId, updates, currentUser) => {
  if (currentUser.userId !== userId && currentUser.role !== 'tenant_admin') {
    throw { statusCode: 403, message: 'Forbidden' };
  }

  return userModel.updateUser(userId, updates);
};

exports.deleteUser = async (userId, currentUser) => {
  if (currentUser.userId === userId) {
    throw { statusCode: 403, message: 'Cannot delete yourself' };
  }

  return userModel.deleteUser(userId);
};
