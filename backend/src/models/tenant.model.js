const db = require("../config/database");

/**
 * Create a new tenant
 */
const createTenant = async (tenant) => {
  const query = `
    INSERT INTO tenants (id, name, subdomain, status, subscription_plan, max_users, max_projects)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
  `;

  const values = [
    tenant.id,
    tenant.name,
    tenant.subdomain,
    tenant.status,
    tenant.subscription_plan,
    tenant.max_users,
    tenant.max_projects
  ];

  const { rows } = await db.query(query, values);
  return rows[0];
};

/**
 * Find tenant by subdomain
 */
const findBySubdomain = async (subdomain) => {
  const { rows } = await db.query(
    "SELECT * FROM tenants WHERE subdomain = $1",
    [subdomain]
  );
  return rows[0];
};

/**
 * Find tenant by ID
 */
const findById = async (tenantId) => {
  const { rows } = await db.query(
    "SELECT * FROM tenants WHERE id = $1",
    [tenantId]
  );
  return rows[0];
};

/**
 * List all tenants (super admin)
 */
const listTenants = async () => {
  const { rows } = await db.query("SELECT * FROM tenants");
  return rows;
};

module.exports = {
  createTenant,
  findBySubdomain,
  findById,
  listTenants
};
