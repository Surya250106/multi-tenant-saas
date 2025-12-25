const db = require('../config/database');
const { v4: uuidv4 } = require('uuid');

exports.createTask = async ({
  projectId,
  tenantId,
  title,
  description,
  priority,
  assignedTo,
  dueDate
}) => {
  const id = uuidv4();

  await db.query(
    `INSERT INTO tasks
     (id, project_id, tenant_id, title, description, priority, assigned_to, due_date)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [id, projectId, tenantId, title, description, priority, assignedTo, dueDate]
  );

  return { id, title, priority };
};

exports.listByProject = async (projectId) => {
  const { rows } = await db.query(
    `SELECT * FROM tasks WHERE project_id = $1`,
    [projectId]
  );
  return rows;
};

exports.findById = async (id) => {
  const { rows } = await db.query(
    `SELECT * FROM tasks WHERE id = $1`,
    [id]
  );
  return rows[0];
};

exports.updateTask = async (id, fields) => {
  const keys = Object.keys(fields);
  const values = Object.values(fields);

  const setClause = keys
    .map((k, i) => `${k} = $${i + 1}`)
    .join(', ');

  const { rows } = await db.query(
    `UPDATE tasks SET ${setClause}, updated_at = NOW()
     WHERE id = $${keys.length + 1}
     RETURNING *`,
    [...values, id]
  );

  return rows[0];
};

exports.deleteTask = async (id) => {
  await db.query(`DELETE FROM tasks WHERE id = $1`, [id]);
};
