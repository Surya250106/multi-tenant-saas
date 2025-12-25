const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

// API 1: Register Tenant
router.post('/register-tenant', authController.registerTenant);

// API 2: Login
router.post('/login', authController.login);

// API 3: Get Current User
router.get('/me', authMiddleware, authController.getCurrentUser);

// API 4: Logout
router.post('/logout', authMiddleware, authController.logout);

module.exports = router;
