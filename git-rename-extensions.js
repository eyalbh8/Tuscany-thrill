const { execSync } = require("child_process");
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
  "public/Villa-Pieve-Vecchia-gallery",
];

console.log("🔄 Renaming image extensions to lowercase using git mv...\n");

const renamedFiles = [];

folders.forEach((folder) => {
  const fullPath = path.join(__dirname, folder);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Folder not found: ${folder}`);
    return;
  }

  const files = fs.readdirSync(fullPath);
  const uppercaseFiles = files.filter(
    (f) => f.endsWith(".JPG") || f.endsWith(".PNG") || f.endsWith(".JPEG")
  );

  if (uppercaseFiles.length === 0) {
    console.log(`✓ ${folder}: No uppercase extensions`);
    return;
  }

  console.log(`📁 ${folder}:`);
  uppercaseFiles.forEach((file) => {
    const oldPath = path.join(folder, file);
    let newName = file;

    if (file.endsWith(".JPG")) {
      newName = file.slice(0, -4) + ".jpg";
    } else if (file.endsWith(".PNG")) {
      newName = file.slice(0, -4) + ".png";
    } else if (file.endsWith(".JPEG")) {
      newName = file.slice(0, -5) + ".jpeg";
    }

    const newPath = path.join(folder, newName);

    try {
      // Use git mv to track the rename
      execSync(`git mv "${oldPath}" "${newPath}"`, { stdio: "pipe" });
      console.log(`  ✓ ${file} → ${newName}`);
      renamedFiles.push({ old: oldPath, new: newPath });
    } catch (err) {
      console.error(`  ✗ Failed to rename ${file}:`, err.message);
    }
  });

  console.log(`✅ ${folder}: Renamed ${uppercaseFiles.length} files\n`);
});

console.log("\n📊 Summary:");
console.log(`Total files renamed: ${renamedFiles.length}`);
console.log("\n✅ Done! Files renamed with git mv.");
console.log("Next: Run 'git status' to see staged changes.");
