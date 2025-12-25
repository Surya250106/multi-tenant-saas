const express = require('express');
const router = express.Router();

const projectController = require('../controllers/project.controller');
const auth = require('../middleware/auth.middleware');

// API 12: Create Project
router.post('/', auth, projectController.createProject);

// API 13: List Projects
router.get('/', auth, projectController.listProjects);

// API 14: Update Project
router.put('/:projectId', auth, projectController.updateProject);

// API 15: Delete Project
router.delete('/:projectId', auth, projectController.deleteProject);

module.exports = router;
