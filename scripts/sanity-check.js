#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const distIndex = path.resolve(process.cwd(), 'dist', 'index.html');

if (!fs.existsSync(distIndex)) {
  console.error('Sanity check failed: dist/index.html not found. Did the build fail?');
  process.exit(2);
}

const html = fs.readFileSync(distIndex, 'utf8');

const checks = [
  { name: 'page title or header contains "AVMS"', ok: /AVMS/i.test(html) },
  { name: 'index.html non-empty', ok: html.trim().length > 0 }
];

const failed = checks.filter(c => !c.ok);

if (failed.length) {
  console.error('Sanity check failed: missing expected content:');
  failed.forEach(f => console.error('- ' + f.name));
  process.exit(1);
}

console.log('Sanity check passed: dist/index.html found and content looks good.');
process.exit(0);
