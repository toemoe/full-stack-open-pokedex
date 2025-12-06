#!/bin/bash
set -e

echo "Node version:"
node -v
npm -v

echo "Installing dependencies"
npm ci --no-audit

echo "Building frontend"
npm run build
