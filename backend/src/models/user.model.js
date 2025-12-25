const db = require('../config/database');
const { v4: uuidv4 } = require('uuid');

exports.createUser = async ({
  tenantId,
  email,
  passwordHash,
  fullName,
  role
}) => {
  const id = uuidv4();

  await db.query(
    `INSERT INTO users
     (id, tenant_id, email, password_hash, full_name, role)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [id, tenantId, email, passwordHash, fullName, role]
  );

  return { id, email, fullName, role, tenantId };
};

exports.findByEmailAndTenant = async (email, tenantId) => {
  const { rows } = await db.query(
    `SELECT * FROM users
     WHERE email = $1 AND tenant_id = $2`,
    [email, tenantId]
  );
  return rows[0];
};

exports.findById = async (id) => {
  const { rows } = await db.query(
    `SELECT * FROM users WHERE id = $1`,
    [id]
  );
  return rows[0];
};

exports.listByTenant = async (tenantId) => {
  const { rows } = await db.query(
    `SELECT id, email, full_name, role, is_active, created_at
     FROM users WHERE tenant_id = $1
     ORDER BY created_at DESC`,
    [tenantId]
  );
  return rows;
};

exports.updateUser = async (id, fields) => {
  const keys = Object.keys(fields);
  const values = Object.values(fields);

  const setClause = keys
    .map((k, i) => `${k} = $${i + 1}`)
    .join(', ');

  const { rows } = await db.query(
    `UPDATE users SET ${setClause}, updated_at = NOW()
     WHERE id = $${keys.length + 1}
     RETURNING id, email, full_name, role, is_active`,
    [...values, id]
  );

  return rows[0];
};

exports.deleteUser = async (id) => {
  await db.query(`DELETE FROM users WHERE id = $1`, [id]);
};
