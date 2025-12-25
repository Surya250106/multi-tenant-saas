const db = require('../config/database');
const { v4: uuidv4 } = require('uuid');

exports.createProject = async ({
  tenantId,
  name,
  description,
  status,
  createdBy
}) => {
  const id = uuidv4();

  await db.query(
    `INSERT INTO projects
     (id, tenant_id, name, description, status, created_by)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [id, tenantId, name, description, status, createdBy]
  );

  return { id, name, description, status };
};

exports.listByTenant = async (tenantId) => {
  const { rows } = await db.query(
    `SELECT * FROM projects
     WHERE tenant_id = $1
     ORDER BY created_at DESC`,
    [tenantId]
  );
  return rows;
};

exports.findById = async (id) => {
  const { rows } = await db.query(
    `SELECT * FROM projects WHERE id = $1`,
    [id]
  );
  return rows[0];
};

exports.updateProject = async (id, fields) => {
  const keys = Object.keys(fields);
  const values = Object.values(fields);

  const setClause = keys
    .map((k, i) => `${k} = $${i + 1}`)
    .join(', ');

  const { rows } = await db.query(
    `UPDATE projects SET ${setClause}, updated_at = NOW()
     WHERE id = $${keys.length + 1}
     RETURNING *`,
    [...values, id]
  );

  return rows[0];
};

exports.deleteProject = async (id) => {
  await db.query(`DELETE FROM projects WHERE id = $1`, [id]);
};
