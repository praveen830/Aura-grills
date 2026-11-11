import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputFile = process.argv[2];
const outputBaseName = process.argv[3];

if (!inputFile || !outputBaseName) {
  console.error("Usage: node scripts/process-image.js <input_path> <base_name>");
  process.exit(1);
}

const desktopDir = path.resolve('public', 'images', 'desktop');
const mobileDir = path.resolve('public', 'images', 'mobile');

if (!fs.existsSync(desktopDir)) fs.mkdirSync(desktopDir, { recursive: true });
if (!fs.existsSync(mobileDir)) fs.mkdirSync(mobileDir, { recursive: true });

async function processImage() {
  const desktopOut = path.join(desktopDir, `${outputBaseName}.webp`);
  const mobileOut = path.join(mobileDir, `${outputBaseName}.webp`);

  console.log(`Processing ${inputFile} ->`);
  console.log(`  Desktop (1920x1200, 16:10): ${desktopOut}`);
  console.log(`  Mobile (1080x1350, 4:5): ${mobileOut}`);

  // Desktop 16:10 (1920x1200)
  await sharp(inputFile)
    .resize(1920, 1200, { fit: 'cover', position: 'center' })
    .webp({ quality: 90 })
    .toFile(desktopOut);

  // Mobile 4:5 (1080x1350)
  await sharp(inputFile)
    .resize(1080, 1350, { fit: 'cover', position: 'center' })
    .webp({ quality: 90 })
    .toFile(mobileOut);

  console.log(`Done processing ${outputBaseName}`);
}

processImage().catch(err => {
  console.error(err);
  process.exit(1);
});
