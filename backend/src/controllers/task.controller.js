const taskService = require('../services/task.service');

exports.createTask = async (req, res, next) => {
  try {
    const task = await taskService.createTask(
      req.params.projectId,
      req.body,
      req.user
    );

    return res.status(201).json({
      success: true,
      data: task
    });
  } catch (err) {
    next(err);
  }
};

exports.listTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.listTasks(
      req.params.projectId,
      req.query,
      req.user
    );

    return res.status(200).json({
      success: true,
      data: tasks
    });
  } catch (err) {
    next(err);
  }
};

exports.updateTaskStatus = async (req, res, next) => {
  try {
    const task = await taskService.updateTaskStatus(
      req.params.taskId,
      req.body.status,
      req.user
    );

    return res.status(200).json({
      success: true,
      data: task
    });
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const task = await taskService.updateTask(
      req.params.taskId,
      req.body,
      req.user
    );

    return res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: task
    });
  } catch (err) {
    next(err);
  }
};
