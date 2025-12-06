#!/bin/bash
set -e

echo "=== Node.js версии ==="
node --version
npm --version

echo "=== Установка ВСЕХ зависимостей ==="
npm ci --no-audit

echo "=== Сборка фронтенда ==="
npm run build

echo "=== Проверка структуры ==="
ls -la

echo "=== Сборка завершена ==="