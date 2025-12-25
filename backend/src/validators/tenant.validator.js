const { body } = require('express-validator');

exports.updateTenant = [
  body('name')
    .optional()
    .notEmpty()
    .withMessage('Tenant name cannot be empty'),

  body('status')
    .optional()
    .isIn(['active', 'suspended', 'trial'])
    .withMessage('Invalid tenant status'),

  body('subscription_plan')
    .optional()
    .isIn(['free', 'pro', 'enterprise'])
    .withMessage('Invalid subscription plan'),

  body('max_users')
    .optional()
    .isInt({ min: 1 })
    .withMessage('max_users must be a positive number'),

  body('max_projects')
    .optional()
    .isInt({ min: 1 })
    .withMessage('max_projects must be a positive number')
];
