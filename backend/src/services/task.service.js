const taskModel = require('../models/task.model');
const projectModel = require('../models/project.model');
const userModel = require('../models/user.model');

exports.createTask = async (projectId, data, user) => {
  const project = await projectModel.findById(projectId);
  if (!project || project.tenant_id !== user.tenantId) {
    throw { statusCode: 403, message: 'Invalid project' };
  }

  if (data.assignedTo) {
    const assignedUser = await userModel.findById(data.assignedTo);
    if (!assignedUser || assignedUser.tenant_id !== user.tenantId) {
      throw { statusCode: 400, message: 'Invalid assigned user' };
    }
  }

  return taskModel.createTask({
    projectId,
    tenantId: project.tenant_id,
    title: data.title,
    description: data.description,
    priority: data.priority || 'medium',
    assignedTo: data.assignedTo,
    dueDate: data.dueDate
  });
};

exports.listTasks = async (projectId, query, user) => {
  const project = await projectModel.findById(projectId);
  if (!project || project.tenant_id !== user.tenantId) {
    throw { statusCode: 403, message: 'Forbidden' };
  }

  return taskModel.listByProject(projectId);
};

exports.updateTaskStatus = async (taskId, status, user) => {
  const task = await taskModel.findById(taskId);
  if (!task || task.tenant_id !== user.tenantId) {
    throw { statusCode: 403, message: 'Forbidden' };
  }

  return taskModel.updateTask(taskId, { status });
};

exports.updateTask = async (taskId, updates, user) => {
  const task = await taskModel.findById(taskId);
  if (!task || task.tenant_id !== user.tenantId) {
    throw { statusCode: 403, message: 'Forbidden' };
  }

  return taskModel.updateTask(taskId, updates);
};
