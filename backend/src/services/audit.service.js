const auditModel = require('../models/audit.model');

exports.log = async (params) => {
  return auditModel.log(params);
};
