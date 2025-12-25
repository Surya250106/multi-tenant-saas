const { body } = require('express-validator');

exports.createTask = [
  body('title')
    .notEmpty()
    .withMessage('Task title is required'),

  body('description')
    .optional()
    .isString()
    .withMessage('Description must be text'),

  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Invalid priority'),

  body('assignedTo')
    .optional({ nullable: true })
    .isUUID()
    .withMessage('assignedTo must be a valid UUID'),

  body('dueDate')
    .optional({ nullable: true })
    .isISO8601()
    .withMessage('dueDate must be a valid date')
];

exports.updateTask = [
  body('title')
    .optional()
    .notEmpty()
    .withMessage('Title cannot be empty'),

  body('status')
    .optional()
    .isIn(['todo', 'in_progress', 'completed'])
    .withMessage('Invalid task status'),

  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Invalid priority'),

  body('assignedTo')
    .optional({ nullable: true })
    .isUUID()
    .withMessage('assignedTo must be a valid UUID'),

  body('dueDate')
    .optional({ nullable: true })
    .isISO8601()
    .withMessage('dueDate must be a valid date')
];

exports.updateStatus = [
  body('status')
    .isIn(['todo', 'in_progress', 'completed'])
    .withMessage('Invalid task status')
];
