#!/bin/bash
set -e

export NODE_ENV=production
PORT=${PORT:-10000}

echo "Environment production"
echo "Port = $PORT"

exec node app.js
