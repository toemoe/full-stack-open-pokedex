#!/bin/bash
set -e

echo "=== Настройка окружения ==="
PORT=${PORT:-3000}
NODE_ENV=${NODE_ENV:-production}

echo "Порт: $PORT"
echo "Окружение: $NODE_ENV"

echo "=== Запуск Express сервера ==="
node app.js
