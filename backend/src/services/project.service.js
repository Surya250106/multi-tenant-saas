const projectModel = require('../models/project.model');
const tenantModel = require('../models/tenant.model');

exports.createProject = async (user, data) => {
  const tenant = await tenantModel.findById(user.tenantId);
  const projects = await projectModel.listByTenant(user.tenantId);

  if (projects.length >= tenant.max_projects) {
    throw { statusCode: 403, message: 'Project limit reached' };
  }

  return projectModel.createProject({
    tenantId: user.tenantId,
    name: data.name,
    description: data.description,
    status: data.status || 'active',
    createdBy: user.userId
  });
};

exports.listProjects = async (user) => {
  return projectModel.listByTenant(user.tenantId);
};

exports.updateProject = async (projectId, updates, user) => {
  const project = await projectModel.findById(projectId);
  if (!project || project.tenant_id !== user.tenantId) {
    throw { statusCode: 404, message: 'Project not found' };
  }

  return projectModel.updateProject(projectId, updates);
};

exports.deleteProject = async (projectId, user) => {
  const project = await projectModel.findById(projectId);
  if (!project || project.tenant_id !== user.tenantId) {
    throw { statusCode: 404, message: 'Project not found' };
  }

  return projectModel.deleteProject(projectId);
};
