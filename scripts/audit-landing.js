import fs from 'fs';

const html = fs.readFileSync('public/landing.html', 'utf8');
const regex = /(?:src|srcset)="(\/images\/[^"]+)"/g;
let match;
const missing = [];
let total = 0;

while ((match = regex.exec(html)) !== null) {
  total++;
  const filePath = match[1];
  if (!fs.existsSync('public' + filePath)) {
    missing.push(filePath);
  }
}

console.log(`Total image references checked: ${total}`);
console.log(`Missing images: ${missing.length}`);
if (missing.length > 0) {
  console.log(missing);
} else {
  console.log('✅ ALL images exist on disk!');
}
