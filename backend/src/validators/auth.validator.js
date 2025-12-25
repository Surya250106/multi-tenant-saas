const { body } = require('express-validator');

exports.registerTenant = [
  body('tenantName')
    .notEmpty()
    .withMessage('Tenant name is required'),

  body('subdomain')
    .matches(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/)
    .withMessage('Invalid subdomain format'),

  body('adminEmail')
    .isEmail()
    .withMessage('Valid admin email is required'),

  body('adminPassword')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters'),

  body('adminFullName')
    .notEmpty()
    .withMessage('Admin full name is required')
];

exports.login = [
  body('email')
    .isEmail()
    .withMessage('Valid email is required'),

  body('password')
    .notEmpty()
    .withMessage('Password is required'),

  body('tenantSubdomain')
    .notEmpty()
    .withMessage('Tenant subdomain is required')
];
