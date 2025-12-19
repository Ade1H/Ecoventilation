#!/bin/bash
# Force Linux installation for Vercel
echo "=== FORCING LINUX INSTALL ==="
rm -rf node_modules package-lock.json
npm cache clean --force

# Create minimal .npmrc
echo "legacy-peer-deps=true" > .npmrc
echo "optional=false" >> .npmrc

# Install with explicit avoidance of Windows packages
npm install --force --legacy-peer-deps --no-optional

# Verify no Windows binaries
if grep -r "win32" package-lock.json; then
  echo "ERROR: Windows binaries still present!"
  exit 1
else
  echo "SUCCESS: Clean Linux installation"
fi
