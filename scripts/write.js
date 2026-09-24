const fs = require('fs');
const path = require('path');

const target = process.argv[2];
const b64 = process.argv[3];

if (!target || !b64) {
  console.error('Usage: node scripts/write.js <filePath> <base64Content>');
  process.exit(1);
}

const fullPath = path.resolve(target);
fs.mkdirSync(path.dirname(fullPath), { recursive: true });
fs.writeFileSync(fullPath, Buffer.from(b64, 'base64'));
console.log('Successfully wrote:', target);