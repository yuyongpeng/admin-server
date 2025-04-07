#!/usr/bin/env node
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
const srcPath = path.join(__dirname, '..', envFile);
const distPath = path.join(__dirname, '..', '..', 'dist', envFile);

if (fs.existsSync(srcPath)) {
  shell.cp(srcPath, distPath);
  console.log(`Copied ${envFile} to dist`);
} else {
  console.log(`${envFile} not found`);
}
