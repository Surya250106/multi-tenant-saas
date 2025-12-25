const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task.controller');
const auth = require('../middleware/auth.middleware');

// API 16: Create Task
router.post(
  '/projects/:projectId/tasks',
  auth,
  taskController.createTask
);

// API 17: List Project Tasks
router.get(
  '/projects/:projectId/tasks',
  auth,
  taskController.listTasks
);

// API 18: Update Task Status
router.patch(
  '/:taskId/status',
  auth,
  taskController.updateTaskStatus
);

// API 19: Update Task
router.put(
  '/:taskId',
  auth,
  taskController.updateTask
);

module.exports = router;
