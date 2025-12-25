#!/bin/sh

echo "--------------------------------------"
echo " Waiting for PostgreSQL to be ready..."
echo "--------------------------------------"

until nc -z "$DB_HOST" "$DB_PORT"; do
  sleep 2
done

echo "PostgreSQL is ready!"

echo "--------------------------------------"
echo " Running database migrations..."
echo "--------------------------------------"
node migrations/migrate.js

echo "--------------------------------------"
echo " Running database seed data..."
echo "--------------------------------------"
node seeds/seed.js

echo "--------------------------------------"
echo " Starting backend server..."
echo "--------------------------------------"
node src/server.js
