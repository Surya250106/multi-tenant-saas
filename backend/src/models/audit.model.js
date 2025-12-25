const db = require('../config/database');
const { v4: uuidv4 } = require('uuid');

exports.log = async ({
  tenantId,
  userId,
  action,
  entityType,
  entityId,
  ipAddress
}) => {
  const id = uuidv4();

  await db.query(
    `INSERT INTO audit_logs
     (id, tenant_id, user_id, action, entity_type, entity_id, ip_address)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [id, tenantId, userId, action, entityType, entityId, ipAddress]
  );
};
