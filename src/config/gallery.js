// Gallery configuration with absolute paths
// All paths start with / and point to public/ folder

export const IMAGE_EXT = ".jpg";

// Base paths for each gallery (absolute paths for Amplify)
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

// Helper to construct image path
export const imagePath = (base, filename) => `${base}/${filename}`;
