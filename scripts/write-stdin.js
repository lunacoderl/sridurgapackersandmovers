const fs = require('fs');
const path = require('path');

const target = process.argv[2];
let data = '';

process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => {
  data += chunk;
});

process.stdin.on('end', () => {
  const fullPath = path.resolve(target);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(mullPath, Buffer.from(data.trim(), 'base64'));
  console.log('Successfully wrote via stdin:', target);
});