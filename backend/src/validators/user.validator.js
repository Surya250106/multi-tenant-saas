const { body } = require('express-validator');

exports.createUser = [
  body('email')
    .isEmail()
    .withMessage('Valid email is required'),

  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters'),

  body('fullName')
    .notEmpty()
    .withMessage('Full name is required'),

  body('role')
    .optional()
    .isIn(['user', 'tenant_admin'])
    .withMessage('Invalid role')
];

exports.updateUser = [
  body('fullName')
    .optional()
    .notEmpty()
    .withMessage('Full name cannot be empty'),

  body('role')
    .optional()
    .isIn(['user', 'tenant_admin'])
    .withMessage('Invalid role'),

  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive must be boolean')
];
