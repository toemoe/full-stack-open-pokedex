#!/bin/bash
set -e

echo "=== Node.js версии ==="
node --version
npm --version

echo "=== Установка зависимостей ==="
npm ci --production --no-audit

echo "=== Сборка фронтенда ==="
npm run build

echo "=== Проверка структуры ==="
ls -la
echo "Содержимое корня:"
ls -la
echo "Содержимое после сборки:"
ls -la dist/ || echo "Нет dist/"
ls -la build/ || echo "Нет build/"

echo "=== Сборка завершена ==="