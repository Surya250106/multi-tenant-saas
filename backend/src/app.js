const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const authRoutes = require('./routes/auth');
const tenantRoutes = require('./routes/tenants');
const userRoutes = require('./routes/users');
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');

const app = express();

/* ===============================
   DATABASE CONNECTION
================================ */
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

/* ===============================
   GLOBAL MIDDLEWARE
================================ */
app.use(cors());
app.use(express.json());

/* ===============================
   HEALTH CHECK (MANDATORY)
================================ */
app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.status(200).json({
      status: 'ok',
      database: 'connected'
    });
  } catch (error) {
    console.error('Health check failed:', error.message);
    res.status(500).json({
      status: 'error',
      database: 'disconnected'
    });
  }
});

/* ===============================
   ROUTES
================================ */
app.use('/api', taskRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/tenants', tenantRoutes);   // tenant + tenant users
app.use('/api/users', userRoutes);       // user update/delete
app.use('/api/projects', projectRoutes); // projects

/* ===============================
   ERROR HANDLER (LAST)
================================ */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

/* ===============================
   START SERVER
================================ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

module.exports = app;
