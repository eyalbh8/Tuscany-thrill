const fs = require("fs");
const path = require("path");

const folders = [
  "public/Locanda-del-Glicine-boutique-hotel-gallery",
  "public/Locanda-del-Glicine-boutique-hotel-open",
  "public/Osteria-La-Rimessa-gallery",
  "public/Osteria-La-Rimessa-open",
  "public/Ristorante-del-Glicine-gallery",
  "public/Ristorante-del-Glicine-open",
  "public/Villa-La-Fornaca-gallery",
  "public/Villa-La-Fornaca-open",
];

console.log("🔄 Renaming all .JPG files to .jpg...\n");

folders.forEach((folder) => {
  const fullPath = path.join(__dirname, folder);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Folder not found: ${folder}`);
    return;
  }

  const files = fs.readdirSync(fullPath);
  const jpgFiles = files.filter((f) => f.endsWith(".JPG"));

  if (jpgFiles.length === 0) {
    console.log(`✓ ${folder}: No .JPG files`);
    return;
  }

  jpgFiles.forEach((file) => {
    const oldPath = path.join(fullPath, file);
    const newPath = path.join(fullPath, file.replace(".JPG", ".jpg"));

    try {
      fs.renameSync(oldPath, newPath);
      console.log(`  ✓ ${file} → ${file.replace(".JPG", ".jpg")}`);
    } catch (err) {
      console.error(`  ✗ Failed to rename ${file}:`, err.message);
    }
  });

  console.log(`✅ ${folder}: Renamed ${jpgFiles.length} files\n`);
});

console.log("✅ Done! Now update ImagesLoader.js to use .jpg instead of .JPG");
