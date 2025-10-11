// Gallery configuration with absolute paths
// All paths start with / and point to public/ folder

export const IMAGE_EXT = ".jpg";

// Base paths for each gallery (absolute paths for Amplify)
export const GALLERY_PATHS = {
  LOCANDA_GALLERY: "/images/Locanda-del-Glicine-boutique-hotel-gallery",
  LOCANDA_OPEN: "/images/Locanda-del-Glicine-boutique-hotel-open",
  OSTERIA_GALLERY: "/images/Osteria-La-Rimessa-gallery",
  OSTERIA_OPEN: "/images/Osteria-La-Rimessa-open",
  RISTORANTE_GALLERY: "/images/Ristorante-del-Glicine-gallery",
  RISTORANTE_OPEN: "/images/Ristorante-del-Glicine-open",
  VILLA_FORNACA_GALLERY: "/images/Villa-La-Fornaca-gallery",
  VILLA_FORNACA_OPEN: "/images/Villa-La-Fornaca-open",
  VILLA_PIEVE_GALLERY: "/images/Villa-Pieve-Vecchia-gallery",
};

// Helper to construct image path
export const imagePath = (base, filename) => `${base}/${filename}`;
