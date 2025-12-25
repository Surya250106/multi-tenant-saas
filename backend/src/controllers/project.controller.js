const projectService = require('../services/project.service');

exports.createProject = async (req, res, next) => {
  try {
    const project = await projectService.createProject(req.user, req.body);

    return res.status(201).json({
      success: true,
      data: project
    });
  } catch (err) {
    next(err);
  }
};

exports.listProjects = async (req, res, next) => {
  try {
    const projects = await projectService.listProjects(req.user, req.query);

    return res.status(200).json({
      success: true,
      data: projects
    });
  } catch (err) {
    next(err);
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const project = await projectService.updateProject(
      req.params.projectId,
      req.body,
      req.user
    );

    return res.status(200).json({
      success: true,
      message: 'Project updated successfully',
      data: project
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    await projectService.deleteProject(req.params.projectId, req.user);

    return res.status(200).json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (err) {
    next(err);
  }
};
