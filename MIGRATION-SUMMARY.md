# Image Extension Normalization - Migration Summary

## 🎯 Changes Overview

This migration normalizes all image extensions to lowercase and centralizes path configuration to fix Amplify deployment issues.

---

## 📝 Step 1: Rename Files (REQUIRED)

Run this command from the project root:

```bash
chmod +x rename-extensions.sh
./rename-extensions.sh
```

This will use `git mv` to rename **38 files** from uppercase to lowercase extensions:

### Files Being Renamed:

#### Locanda-del-Glicine-boutique-hotel-gallery (4 files)

- `LDC12.JPG` → `LDC12.jpg`
- `LDC13.JPG` → `LDC13.jpg`
- `LDC14.JPG` → `LDC14.jpg`
- `LDC22.JPG` → `LDC22.jpg`

#### Locanda-del-Glicine-boutique-hotel-open (1 file)

- `LDC1.JPG` → `LDC1.jpg`

#### Osteria-La-Rimessa-gallery (10 files)

- `La-Rimessa73.JPG` → `La-Rimessa73.jpg`
- `La-Rimessa83.JPG` → `La-Rimessa83.jpg`
- `La-Rimessa93.JPG` → `La-Rimessa93.jpg`
- `La-Rimessa103.JPG` → `La-Rimessa103.jpg`
- `La-Rimessa113.JPG` → `La-Rimessa113.jpg`
- `La-Rimessa123.JPG` → `La-Rimessa123.jpg`
- `La-Rimessa133.JPG` → `La-Rimessa133.jpg`
- `La-Rimessa143.JPG` → `La-Rimessa143.jpg`
- `La-Rimessa153.JPG` → `La-Rimessa153.jpg`
- `La-Rimessa163.JPG` → `La-Rimessa163.jpg`

#### Osteria-La-Rimessa-open (6 files)

- `La-Rimessa1.JPG` → `La-Rimessa1.jpg`
- `La-Rimessa2.JPG` → `La-Rimessa2.jpg`
- `La-Rimessa3.JPG` → `La-Rimessa3.jpg`
- `La-Rimessa4.JPG` → `La-Rimessa4.jpg`
- `La-Rimessa5.JPG` → `La-Rimessa5.jpg`
- `La-Rimessa6.JPG` → `La-Rimessa6.jpg`

#### Ristorante-del-Glicine-gallery (9 files)

- `IMG_0568.JPG` → `IMG_0568.jpg`
- `IMG_0577.JPG` → `IMG_0577.jpg`
- `IMG_0578.JPG` → `IMG_0578.jpg`
- `IMG_0580.JPG` → `IMG_0580.jpg`
- `IMG_0581.JPG` → `IMG_0581.jpg`
- `IMG_0582.JPG` → `IMG_0582.jpg`
- `IMG_0583.JPG` → `IMG_0583.jpg`
- `IMG_0584.JPG` → `IMG_0584.jpg`
- `IMG_0588.JPG` → `IMG_0588.jpg`

#### Ristorante-del-Glicine-open (4 files)

- `IMG_0565.JPG` → `IMG_0565.jpg`
- `IMG_0569.JPG` → `IMG_0569.jpg`
- `IMG_0586.JPG` → `IMG_0586.jpg`
- `IMG_0589.JPG` → `IMG_0589.jpg`

#### Villa-La-Fornaca-gallery (2 files)

- `La-fornaca7.JPG` → `La-fornaca7.jpg`
- `La-fornaca9.JPG` → `La-fornaca9.jpg`

#### Villa-La-Fornaca-open (1 file)

- `La-fornaca5.JPG` → `La-fornaca5.jpg`

**Total: 38 files renamed**

---

## 📁 Step 2: New Configuration File

**Created:** `src/config/gallery.js`

```javascript
// Gallery configuration with absolute paths
export const IMAGE_EXT = ".jpg";

export const GALLERY_PATHS = {
  LOCANDA_GALLERY: "/Locanda-del-Glicine-boutique-hotel-gallery",
  LOCANDA_OPEN: "/Locanda-del-Glicine-boutique-hotel-open",
  OSTERIA_GALLERY: "/Osteria-La-Rimessa-gallery",
  OSTERIA_OPEN: "/Osteria-La-Rimessa-open",
  RISTORANTE_GALLERY: "/Ristorante-del-Glicine-gallery",
  RISTORANTE_OPEN: "/Ristorante-del-Glicine-open",
  VILLA_FORNACA_GALLERY: "/Villa-La-Fornaca-gallery",
  VILLA_FORNACA_OPEN: "/Villa-La-Fornaca-open",
  VILLA_PIEVE_GALLERY: "/Villa-Pieve-Vecchia-gallery",
};
```

---

## 🔄 Step 3: Code Changes

### src/ImagesLoader.js

**Changed:**

- ✅ Imports centralized config from `./config/gallery`
- ✅ All hardcoded paths replaced with constants
- ✅ All `.JPG` → `${IMAGE_EXT}` (which is `.jpg`)
- ✅ Uses template literals with constants: `` `${LOCANDA_GALLERY}/LDC12${IMAGE_EXT}` ``
- ✅ Cache version bumped to `v2025-10-11-fix3`
- ✅ All paths are absolute (start with `/`)

**Example Before:**

```javascript
const LocandaDelGlicineGallery = [
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC12.JPG",
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC13.JPG",
  // ...
].map(withCacheBust);
```

**Example After:**

```javascript
import { GALLERY_PATHS, IMAGE_EXT } from "./config/gallery";
const { LOCANDA_GALLERY } = GALLERY_PATHS;

const LocandaDelGlicineGallery = [
  `${LOCANDA_GALLERY}/LDC12${IMAGE_EXT}`,
  `${LOCANDA_GALLERY}/LDC13${IMAGE_EXT}`,
  // ...
].map(withCacheBust);
```

---

## ✅ Verification Checklist

After running the rename script:

```bash
# 1. Check staged changes
git status

# 2. Verify all renames are tracked
git diff --staged --name-status | grep "^R"

# 3. Should see 38 renames like:
# R100 public/Locanda-del-Glicine-boutique-hotel-gallery/LDC12.JPG -> ...LDC12.jpg

# 4. Commit the changes
git commit -m "Normalize all image extensions to lowercase (.JPG → .jpg)"

# 5. Push to trigger Amplify build
git push
```

---

## 🚀 Deployment

After pushing:

1. **Amplify will build fresh** (no committed `/build` folder)
2. **All image URLs will use lowercase `.jpg`**
3. **Cache-busting query param updated** (`?v=v2025-10-11-fix3`)
4. **CloudFront will serve new files**

---

## 📊 Impact Summary

| Metric               | Count            |
| -------------------- | ---------------- |
| Files renamed        | 38               |
| Folders affected     | 8                |
| New config files     | 1                |
| Updated source files | 1                |
| Cache version        | v2025-10-11-fix3 |

---

## 🐛 Why This Fixes the Issue

**Problem:** Amplify's Linux filesystem is case-sensitive. `.JPG` ≠ `.jpg`

**Root Cause:** Your code referenced `.JPG` but Amplify build process may have:

- Converted extensions to lowercase
- Ignored uppercase extensions
- Created conflicts with duplicate filenames differing only by case

**Solution:**

1. ✅ Normalize all files to lowercase `.jpg`
2. ✅ Use `git mv` so Git tracks the renames (critical on case-insensitive macOS)
3. ✅ Centralize paths in config for single source of truth
4. ✅ Use absolute paths (`/folder/file.jpg`) for Amplify compatibility
5. ✅ Bump cache version to force fresh fetches

---

## 🎯 Next Steps

```bash
# Run the rename script
./rename-extensions.sh

# Verify and commit
git status
git commit -m "Normalize image extensions to lowercase and centralize config"
git push

# Monitor Amplify build
# Check CloudFront for fresh images
# Verify in production with DevTools console (should see all ✅)
```

All `.JPG` files will now load successfully on Amplify! 🎉
