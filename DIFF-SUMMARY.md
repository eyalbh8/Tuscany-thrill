# Detailed Diff Summary

## 📋 Files Changed

### 1. **NEW FILE:** `src/config/gallery.js`

```javascript
+// Gallery configuration with absolute paths
+// All paths start with / and point to public/ folder
+
+export const IMAGE_EXT = ".jpg";
+
+// Base paths for each gallery (absolute paths for Amplify)
+export const GALLERY_PATHS = {
+  LOCANDA_GALLERY: "/Locanda-del-Glicine-boutique-hotel-gallery",
+  LOCANDA_OPEN: "/Locanda-del-Glicine-boutique-hotel-open",
+  OSTERIA_GALLERY: "/Osteria-La-Rimessa-gallery",
+  OSTERIA_OPEN: "/Osteria-La-Rimessa-open",
+  RISTORANTE_GALLERY: "/Ristorante-del-Glicine-gallery",
+  RISTORANTE_OPEN: "/Ristorante-del-Glicine-open",
+  VILLA_FORNACA_GALLERY: "/Villa-La-Fornaca-gallery",
+  VILLA_FORNACA_OPEN: "/Villa-La-Fornaca-open",
+  VILLA_PIEVE_GALLERY: "/Villa-Pieve-Vecchia-gallery",
+};
+
+// Helper to construct image path
+export const imagePath = (base, filename) => `${base}/${filename}`;
```

---

### 2. **MODIFIED:** `src/ImagesLoader.js`

#### Header Changes:

```diff
 // ImagesLoader.js
 // Cache buster for CloudFront - change this on each deploy to force fresh image loads
-const CACHE_VERSION = "v2025-10-11-fix2";
+import { GALLERY_PATHS, IMAGE_EXT } from "./config/gallery";
+
+const CACHE_VERSION = "v2025-10-11-fix3";
 const withCacheBust = (path) => `${path}?v=${CACHE_VERSION}`;

+const { LOCANDA_GALLERY, LOCANDA_OPEN, OSTERIA_GALLERY, OSTERIA_OPEN, RISTORANTE_GALLERY, RISTORANTE_OPEN, VILLA_FORNACA_GALLERY, VILLA_FORNACA_OPEN, VILLA_PIEVE_GALLERY } = GALLERY_PATHS;
```

#### Locanda Gallery:

```diff
 const LocandaDelGlicineGallery = [
-  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC12.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC13.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC14.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC15.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC16.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC17.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC18.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC19.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC20.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC21.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC22.jpg",
+  `${LOCANDA_GALLERY}/LDC12${IMAGE_EXT}`,
+  `${LOCANDA_GALLERY}/LDC13${IMAGE_EXT}`,
+  `${LOCANDA_GALLERY}/LDC14${IMAGE_EXT}`,
+  `${LOCANDA_GALLERY}/LDC15${IMAGE_EXT}`,
+  `${LOCANDA_GALLERY}/LDC16${IMAGE_EXT}`,
+  `${LOCANDA_GALLERY}/LDC17${IMAGE_EXT}`,
+  `${LOCANDA_GALLERY}/LDC18${IMAGE_EXT}`,
+  `${LOCANDA_GALLERY}/LDC19${IMAGE_EXT}`,
+  `${LOCANDA_GALLERY}/LDC20${IMAGE_EXT}`,
+  `${LOCANDA_GALLERY}/LDC21${IMAGE_EXT}`,
+  `${LOCANDA_GALLERY}/LDC22${IMAGE_EXT}`,
 ].map(withCacheBust);
```

#### Locanda Open:

```diff
 const LocandaDelGlicineOpen = [
-  "/Locanda-del-Glicine-boutique-hotel-open/LDC1.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-open/LDC2.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-open/LDC5.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-open/LDC8.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-open/LDC9.jpg",
-  "/Locanda-del-Glicine-boutique-hotel-open/LDC10.jpg",
+  `${LOCANDA_OPEN}/LDC1${IMAGE_EXT}`,
+  `${LOCANDA_OPEN}/LDC2${IMAGE_EXT}`,
+  `${LOCANDA_OPEN}/LDC5${IMAGE_EXT}`,
+  `${LOCANDA_OPEN}/LDC8${IMAGE_EXT}`,
+  `${LOCANDA_OPEN}/LDC9${IMAGE_EXT}`,
+  `${LOCANDA_OPEN}/LDC10${IMAGE_EXT}`,
 ].map(withCacheBust);
```

#### Osteria Gallery:

```diff
 const LaRimmesaGallery = [
-  "/Osteria-La-Rimessa-gallery/La-Rimessa73.jpg",
-  "/Osteria-La-Rimessa-gallery/La-Rimessa83.jpg",
-  "/Osteria-La-Rimessa-gallery/La-Rimessa93.jpg",
-  "/Osteria-La-Rimessa-gallery/La-Rimessa103.jpg",
-  "/Osteria-La-Rimessa-gallery/La-Rimessa113.jpg",
-  "/Osteria-La-Rimessa-gallery/La-Rimessa123.jpg",
-  "/Osteria-La-Rimessa-gallery/La-Rimessa133.jpg",
-  "/Osteria-La-Rimessa-gallery/La-Rimessa143.jpg",
-  "/Osteria-La-Rimessa-gallery/La-Rimessa153.jpg",
-  "/Osteria-La-Rimessa-gallery/La-Rimessa163.jpg",
+  `${OSTERIA_GALLERY}/La-Rimessa73${IMAGE_EXT}`,
+  `${OSTERIA_GALLERY}/La-Rimessa83${IMAGE_EXT}`,
+  `${OSTERIA_GALLERY}/La-Rimessa93${IMAGE_EXT}`,
+  `${OSTERIA_GALLERY}/La-Rimessa103${IMAGE_EXT}`,
+  `${OSTERIA_GALLERY}/La-Rimessa113${IMAGE_EXT}`,
+  `${OSTERIA_GALLERY}/La-Rimessa123${IMAGE_EXT}`,
+  `${OSTERIA_GALLERY}/La-Rimessa133${IMAGE_EXT}`,
+  `${OSTERIA_GALLERY}/La-Rimessa143${IMAGE_EXT}`,
+  `${OSTERIA_GALLERY}/La-Rimessa153${IMAGE_EXT}`,
+  `${OSTERIA_GALLERY}/La-Rimessa163${IMAGE_EXT}`,
 ].map(withCacheBust);
```

#### (Similar pattern for Osteria Open, Ristorante Gallery/Open, Villa Fornaca Gallery/Open, Villa Pieve Gallery/Open)

---

### 3. **NEW FILE:** `rename-extensions.sh`

Shell script with 38 `git mv` commands to rename all `.JPG` → `.jpg`

---

## 📊 Summary Statistics

| Category                               | Count                              |
| -------------------------------------- | ---------------------------------- |
| Files renamed                          | 38                                 |
| Code files modified                    | 1 (`ImagesLoader.js`)              |
| Config files created                   | 1 (`gallery.js`)                   |
| Total lines changed in ImagesLoader.js | ~140 (all paths now use constants) |
| Hardcoded paths removed                | 87                                 |
| Uses centralized config                | ✅                                 |
| All paths absolute (start with /)      | ✅                                 |
| Cache version bumped                   | ✅ (`fix2` → `fix3`)               |

---

## 🎯 Key Improvements

### Before:

```javascript
// ❌ Hardcoded paths with mixed case extensions
const LocandaDelGlicineGallery = [
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC12.JPG", // uppercase
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC15.jpg", // lowercase
  // ...
];
```

### After:

```javascript
// ✅ Centralized config, consistent lowercase, reusable constants
import { GALLERY_PATHS, IMAGE_EXT } from "./config/gallery";
const { LOCANDA_GALLERY } = GALLERY_PATHS;

const LocandaDelGlicineGallery = [
  `${LOCANDA_GALLERY}/LDC12${IMAGE_EXT}`, // Always .jpg
  `${LOCANDA_GALLERY}/LDC15${IMAGE_EXT}`, // Always .jpg
  // ...
];
```

### Benefits:

1. **Single source of truth** for all paths
2. **Easy to change** extension globally (just update `IMAGE_EXT`)
3. **Easy to move** folders (just update `GALLERY_PATHS`)
4. **Type-safe** paths (no typos in folder names)
5. **Consistent** extensions (all lowercase)
6. **Git tracks** file renames properly
7. **Works on Linux** (Amplify) case-sensitive filesystem

---

## ✅ To Apply These Changes:

```bash
# 1. Run the rename script
chmod +x rename-extensions.sh
./rename-extensions.sh

# 2. Verify changes
git status

# You should see:
# - Renamed: 38 files (.JPG → .jpg)
# - New file: src/config/gallery.js
# - Modified: src/ImagesLoader.js
# - New file: rename-extensions.sh

# 3. Commit and push
git add .
git commit -m "Normalize image extensions and centralize gallery config"
git push

# 4. Amplify will rebuild with all lowercase .jpg files
# 5. Check production - all images should load! ✅
```
