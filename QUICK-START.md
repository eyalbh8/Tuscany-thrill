# 🚀 Quick Start Guide

## What Was Done

✅ **Created** `src/config/gallery.js` - Centralized path configuration  
✅ **Updated** `src/ImagesLoader.js` - Now uses centralized config with template literals  
✅ **Created** `rename-extensions.sh` - Script to rename 38 files (.JPG → .jpg)  
✅ **All paths** are now absolute (start with `/`)  
✅ **Cache version** bumped to `v2025-10-11-fix3`

---

## What You Need to Do

### Step 1: Rename the Files

```bash
cd /Users/eyalbenhaim/Desktop/Inbar/Tuscany-thrill
chmod +x rename-extensions.sh
./rename-extensions.sh
```

**Expected output:**

```
🔄 Renaming image extensions to lowercase using git mv...
📁 public/Locanda-del-Glicine-boutique-hotel-gallery:
  ✓ LDC12.JPG → LDC12.jpg
  ✓ LDC13.JPG → LDC13.jpg
  ...
✅ Done! All image extensions normalized to lowercase.
```

### Step 2: Verify Changes

```bash
git status
```

**You should see:**

- ✅ 38 renamed files (shown as `renamed:`)
- ✅ Modified: `src/ImagesLoader.js`
- ✅ New file: `src/config/gallery.js`

### Step 3: Commit & Push

```bash
git add .
git commit -m "Normalize image extensions to lowercase and centralize config"
git push
```

### Step 4: Wait for Amplify Build

- Go to AWS Amplify console
- Wait for build to complete
- Open your live site

### Step 5: Verify in Production

Open DevTools Console - you should see:

```
✅ [IMG OK] https://...LDC12.jpg?v=v2025-10-11-fix3
✅ [IMG OK] https://...La-Rimessa73.jpg?v=v2025-10-11-fix3
```

**No more ❌ [IMG 404] errors!** 🎉

---

## Files Renamed (38 total)

| Folder                | Files                                           | Extensions  |
| --------------------- | ----------------------------------------------- | ----------- |
| Locanda gallery       | LDC12, 13, 14, 22                               | .JPG → .jpg |
| Locanda open          | LDC1                                            | .JPG → .jpg |
| Osteria gallery       | La-Rimessa 73,83,93,103,113,123,133,143,153,163 | .JPG → .jpg |
| Osteria open          | La-Rimessa 1-6                                  | .JPG → .jpg |
| Ristorante gallery    | IMG_0568,77,78,80,81,82,83,84,88                | .JPG → .jpg |
| Ristorante open       | IMG_0565,69,86,89                               | .JPG → .jpg |
| Villa Fornaca gallery | La-fornaca 7,9                                  | .JPG → .jpg |
| Villa Fornaca open    | La-fornaca 5                                    | .JPG → .jpg |

---

## Why This Fixes the Issue

**Problem:** Amplify (Linux) is case-sensitive. `.JPG` ≠ `.jpg`

**Your local Mac:** Case-insensitive. `file.JPG` and `file.jpg` are the same.

**Amplify's Linux:** Case-sensitive. They're different files.

**What happened:**

1. Code referenced `.JPG` files
2. Build process or Git on Mac created `.jpg` versions
3. Amplify deployed only `.jpg` (lowercase)
4. Code still requested `.JPG` (uppercase)
5. Result: 404 errors in production

**The fix:**

1. ✅ Rename ALL files to `.jpg` using `git mv` (so Git tracks it properly)
2. ✅ Update code to match (all lowercase)
3. ✅ Use centralized config for easy maintenance
4. ✅ Bump cache version to force fresh fetches

---

## Troubleshooting

### Script says "command not found: git"

You need to run this in a proper terminal (not the restricted shell).

### "Permission denied" when running script

Run: `chmod +x rename-extensions.sh` first

### Still seeing 404s after deploy

1. Check Amplify build logs - did it complete?
2. Hard refresh browser (Cmd+Shift+R)
3. Check DevTools console for exact failing URLs
4. Verify files exist in git: `git ls-files | grep -i jpg`

### Some images work, others don't

Check if the working ones have lowercase `.jpg` and failing ones have uppercase `.JPG`

---

## 📞 Need Help?

Check the detailed documentation:

- `MIGRATION-SUMMARY.md` - Full migration guide
- `DIFF-SUMMARY.md` - Detailed code changes

**Ready?** Run Step 1 above! 🚀
