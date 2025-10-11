#!/bin/bash
# Rename all uppercase image extensions to lowercase using git mv

echo "🔄 Renaming image extensions to lowercase using git mv..."

# Locanda gallery
cd public/Locanda-del-Glicine-boutique-hotel-gallery
git mv LDC12.JPG LDC12.jpg 2>/dev/null && echo "✓ LDC12.JPG → LDC12.jpg"
git mv LDC13.JPG LDC13.jpg 2>/dev/null && echo "✓ LDC13.JPG → LDC13.jpg"
git mv LDC14.JPG LDC14.jpg 2>/dev/null && echo "✓ LDC14.JPG → LDC14.jpg"
git mv LDC22.JPG LDC22.jpg 2>/dev/null && echo "✓ LDC22.JPG → LDC22.jpg"

# Locanda open
cd ../Locanda-del-Glicine-boutique-hotel-open
git mv LDC1.JPG LDC1.jpg 2>/dev/null && echo "✓ LDC1.JPG → LDC1.jpg"

# Osteria gallery
cd ../Osteria-La-Rimessa-gallery
git mv La-Rimessa73.JPG La-Rimessa73.jpg 2>/dev/null && echo "✓ La-Rimessa73.JPG → La-Rimessa73.jpg"
git mv La-Rimessa83.JPG La-Rimessa83.jpg 2>/dev/null && echo "✓ La-Rimessa83.JPG → La-Rimessa83.jpg"
git mv La-Rimessa93.JPG La-Rimessa93.jpg 2>/dev/null && echo "✓ La-Rimessa93.JPG → La-Rimessa93.jpg"
git mv La-Rimessa103.JPG La-Rimessa103.jpg 2>/dev/null && echo "✓ La-Rimessa103.JPG → La-Rimessa103.jpg"
git mv La-Rimessa113.JPG La-Rimessa113.jpg 2>/dev/null && echo "✓ La-Rimessa113.JPG → La-Rimessa113.jpg"
git mv La-Rimessa123.JPG La-Rimessa123.jpg 2>/dev/null && echo "✓ La-Rimessa123.JPG → La-Rimessa123.jpg"
git mv La-Rimessa133.JPG La-Rimessa133.jpg 2>/dev/null && echo "✓ La-Rimessa133.JPG → La-Rimessa133.jpg"
git mv La-Rimessa143.JPG La-Rimessa143.jpg 2>/dev/null && echo "✓ La-Rimessa143.JPG → La-Rimessa143.jpg"
git mv La-Rimessa153.JPG La-Rimessa153.jpg 2>/dev/null && echo "✓ La-Rimessa153.JPG → La-Rimessa153.jpg"
git mv La-Rimessa163.JPG La-Rimessa163.jpg 2>/dev/null && echo "✓ La-Rimessa163.JPG → La-Rimessa163.jpg"

# Osteria open
cd ../Osteria-La-Rimessa-open
git mv La-Rimessa1.JPG La-Rimessa1.jpg 2>/dev/null && echo "✓ La-Rimessa1.JPG → La-Rimessa1.jpg"
git mv La-Rimessa2.JPG La-Rimessa2.jpg 2>/dev/null && echo "✓ La-Rimessa2.JPG → La-Rimessa2.jpg"
git mv La-Rimessa3.JPG La-Rimessa3.jpg 2>/dev/null && echo "✓ La-Rimessa3.JPG → La-Rimessa3.jpg"
git mv La-Rimessa4.JPG La-Rimessa4.jpg 2>/dev/null && echo "✓ La-Rimessa4.JPG → La-Rimessa4.jpg"
git mv La-Rimessa5.JPG La-Rimessa5.jpg 2>/dev/null && echo "✓ La-Rimessa5.JPG → La-Rimessa5.jpg"
git mv La-Rimessa6.JPG La-Rimessa6.jpg 2>/dev/null && echo "✓ La-Rimessa6.JPG → La-Rimessa6.jpg"

# Ristorante gallery
cd ../Ristorante-del-Glicine-gallery
git mv IMG_0568.JPG IMG_0568.jpg 2>/dev/null && echo "✓ IMG_0568.JPG → IMG_0568.jpg"
git mv IMG_0577.JPG IMG_0577.jpg 2>/dev/null && echo "✓ IMG_0577.JPG → IMG_0577.jpg"
git mv IMG_0578.JPG IMG_0578.jpg 2>/dev/null && echo "✓ IMG_0578.JPG → IMG_0578.jpg"
git mv IMG_0580.JPG IMG_0580.jpg 2>/dev/null && echo "✓ IMG_0580.JPG → IMG_0580.jpg"
git mv IMG_0581.JPG IMG_0581.jpg 2>/dev/null && echo "✓ IMG_0581.JPG → IMG_0581.jpg"
git mv IMG_0582.JPG IMG_0582.jpg 2>/dev/null && echo "✓ IMG_0582.JPG → IMG_0582.jpg"
git mv IMG_0583.JPG IMG_0583.jpg 2>/dev/null && echo "✓ IMG_0583.JPG → IMG_0583.jpg"
git mv IMG_0584.JPG IMG_0584.jpg 2>/dev/null && echo "✓ IMG_0584.JPG → IMG_0584.jpg"
git mv IMG_0588.JPG IMG_0588.jpg 2>/dev/null && echo "✓ IMG_0588.JPG → IMG_0588.jpg"

# Ristorante open
cd ../Ristorante-del-Glicine-open
git mv IMG_0565.JPG IMG_0565.jpg 2>/dev/null && echo "✓ IMG_0565.JPG → IMG_0565.jpg"
git mv IMG_0569.JPG IMG_0569.jpg 2>/dev/null && echo "✓ IMG_0569.JPG → IMG_0569.jpg"
git mv IMG_0586.JPG IMG_0586.jpg 2>/dev/null && echo "✓ IMG_0586.JPG → IMG_0586.jpg"
git mv IMG_0589.JPG IMG_0589.jpg 2>/dev/null && echo "✓ IMG_0589.JPG → IMG_0589.jpg"

# Villa Fornaca gallery
cd ../Villa-La-Fornaca-gallery
git mv La-fornaca7.JPG La-fornaca7.jpg 2>/dev/null && echo "✓ La-fornaca7.JPG → La-fornaca7.jpg"
git mv La-fornaca9.JPG La-fornaca9.jpg 2>/dev/null && echo "✓ La-fornaca9.JPG → La-fornaca9.jpg"

# Villa Fornaca open
cd ../Villa-La-Fornaca-open
git mv La-fornaca5.JPG La-fornaca5.jpg 2>/dev/null && echo "✓ La-fornaca5.JPG → La-fornaca5.jpg"

cd ../..

echo ""
echo "✅ Done! All image extensions normalized to lowercase."
echo "Run 'git status' to see the staged changes."

