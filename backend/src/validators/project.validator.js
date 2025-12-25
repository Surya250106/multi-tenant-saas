const { body } = require('express-validator');

exports.createProject = [
  body('name')
    .notEmpty()
    .withMessage('Project name is required'),

  body('description')
    .optional()
    .isString()
    .withMessage('Description must be text'),

  body('status')
    .optional()
    .isIn(['active', 'archived', 'completed'])
    .withMessage('Invalid project status')
];

exports.updateProject = [
  body('name')
    .optional()
    .notEmpty()
    .withMessage('Project name cannot be empty'),

  body('description')
    .optional()
    .isString()
    .withMessage('Description must be text'),

  body('status')
    .optional()
    .isIn(['active', 'archived', 'completed'])
    .withMessage('Invalid project status')
];
