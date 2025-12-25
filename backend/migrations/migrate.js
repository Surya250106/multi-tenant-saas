const fs = require('fs');
const path = require('path');
const db = require('../src/config/database');

(async () => {
  try {
    const migrationsDir = __dirname;

    const files = fs
      .readdirSync(migrationsDir)
      .filter(f => f.endsWith('.sql'))
      .sort();

    for (const file of files) {
      const sql = fs.readFileSync(
        path.join(migrationsDir, file),
        'utf8'
      );
      console.log(`Running migration: ${file}`);
      await db.query(sql);
    }

    console.log('All migrations completed successfully');
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
})();
