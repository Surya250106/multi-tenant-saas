const bcrypt = require("bcryptjs");

const fs = require('fs');
const path = require('path');
const db = require('../src/config/database');

(async () => {
  try {
    const seedFile = path.join(__dirname, 'seed_data.sql');
    const sql = fs.readFileSync(seedFile, 'utf8');

    console.log('Running seed data...');
    await db.query(sql);

    console.log('Seed data loaded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seed data failed:', err);
    process.exit(1);
  }
})();
