// ImagesLoader.js

const LocandaDelGlicineGallery = [
  "/images/Locanda-del-Glicine-boutique-hotel-gallery/WhatsApp Image 2025-10-03 at 11.40.25.jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-gallery/WhatsApp Image 2025-10-03 at 11.40.26 (1).jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-gallery/WhatsApp Image 2025-10-03 at 11.40.26.jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-gallery/WhatsApp Image 2025-10-03 at 11.40.27 (1).jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-gallery/WhatsApp Image 2025-10-03 at 11.40.27.jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-gallery/WhatsApp Image 2025-10-03 at 11.40.28 (1).jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-gallery/WhatsApp Image 2025-10-03 at 11.40.28 (2).jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-gallery/WhatsApp Image 2025-10-03 at 11.40.28.jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-gallery/WhatsApp Image 2025-10-03 at 11.40.29 (1).jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-gallery/WhatsApp Image 2025-10-03 at 11.40.29.jpeg",
];

const LocandaDelGlicineOpen = [
  "/images/Locanda-del-Glicine-boutique-hotel-open/WhatsApp Image 2025-10-03 at 11.40.25.jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-open/WhatsApp Image 2025-10-03 at 11.40.26 (1).jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-open/WhatsApp Image 2025-10-03 at 11.40.26.jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-open/WhatsApp Image 2025-10-03 at 11.40.27 (1).jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-open/WhatsApp Image 2025-10-03 at 11.40.27.jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-open/WhatsApp Image 2025-10-03 at 11.40.28 (1).jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-open/WhatsApp Image 2025-10-03 at 11.40.28 (2).jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-open/WhatsApp Image 2025-10-03 at 11.40.28.jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-open/WhatsApp Image 2025-10-03 at 11.40.29 (1).jpeg",
  "/images/Locanda-del-Glicine-boutique-hotel-open/WhatsApp Image 2025-10-03 at 11.40.29.jpeg",
];

const LaRimmesaGallery = [
  "/images/Osteria-La-Rimessa-gallery/WhatsApp Image 2025-10-03 at 11.40.25.jpeg",
  "/images/Osteria-La-Rimessa-gallery/WhatsApp Image 2025-10-03 at 11.40.26 (1).jpeg",
  "/images/Osteria-La-Rimessa-gallery/WhatsApp Image 2025-10-03 at 11.40.26.jpeg",
  "/images/Osteria-La-Rimessa-gallery/WhatsApp Image 2025-10-03 at 11.40.27 (1).jpeg",
  "/images/Osteria-La-Rimessa-gallery/WhatsApp Image 2025-10-03 at 11.40.27.jpeg",
  "/images/Osteria-La-Rimessa-gallery/WhatsApp Image 2025-10-03 at 11.40.28 (1).jpeg",
  "/images/Osteria-La-Rimessa-gallery/WhatsApp Image 2025-10-03 at 11.40.28 (2).jpeg",
  "/images/Osteria-La-Rimessa-gallery/WhatsApp Image 2025-10-03 at 11.40.28.jpeg",
  "/images/Osteria-La-Rimessa-gallery/WhatsApp Image 2025-10-03 at 11.40.29 (1).jpeg",
  "/images/Osteria-La-Rimessa-gallery/WhatsApp Image 2025-10-03 at 11.40.29.jpeg",
];

const LaRimmesaOpen = [
  "/images/Osteria-La-Rimessa-open/WhatsApp Image 2025-10-03 at 11.40.25.jpeg",
  "/images/Osteria-La-Rimessa-open/WhatsApp Image 2025-10-03 at 11.40.26 (1).jpeg",
  "/images/Osteria-La-Rimessa-open/WhatsApp Image 2025-10-03 at 11.40.26.jpeg",
  "/images/Osteria-La-Rimessa-open/WhatsApp Image 2025-10-03 at 11.40.27 (1).jpeg",
  "/images/Osteria-La-Rimessa-open/WhatsApp Image 2025-10-03 at 11.40.27.jpeg",
  "/images/Osteria-La-Rimessa-open/WhatsApp Image 2025-10-03 at 11.40.28 (1).jpeg",
  "/images/Osteria-La-Rimessa-open/WhatsApp Image 2025-10-03 at 11.40.28 (2).jpeg",
  "/images/Osteria-La-Rimessa-open/WhatsApp Image 2025-10-03 at 11.40.28.jpeg",
  "/images/Osteria-La-Rimessa-open/WhatsApp Image 2025-10-03 at 11.40.29 (1).jpeg",
  "/images/Osteria-La-Rimessa-open/WhatsApp Image 2025-10-03 at 11.40.29.jpeg",
];

const RistoranteIlGlicineGallery = [
  "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-gallery/IMG_0494.JPG",
  "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-gallery/IMG_0495.JPG",
  "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-gallery/IMG_0496.JPG",
  "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-gallery/IMG_0501.JPG",
  "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-gallery/IMG_0502.JPG",
];

const RistoranteIlGlicineOpen = [
  "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-open/IMG_0494.JPG",
  "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-open/IMG_0495.JPG",
  "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-open/IMG_0496.JPG",
  "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-open/IMG_0501.JPG",
  "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-open/IMG_0502.JPG",
];

const VillaLaFornacaGallery = [
  "/images/Vill-La-Fornaca-gallery/WhatsApp Image 2025-10-03 at 11.40.25.jpeg",
  "/images/Vill-La-Fornaca-gallery/WhatsApp Image 2025-10-03 at 11.40.26 (1).jpeg",
  "/images/Vill-La-Fornaca-gallery/WhatsApp Image 2025-10-03 at 11.40.26.jpeg",
  "/images/Vill-La-Fornaca-gallery/WhatsApp Image 2025-10-03 at 11.40.27 (1).jpeg",
  "/images/Vill-La-Fornaca-gallery/WhatsApp Image 2025-10-03 at 11.40.27.jpeg",
  "/images/Vill-La-Fornaca-gallery/WhatsApp Image 2025-10-03 at 11.40.28 (1).jpeg",
  "/images/Vill-La-Fornaca-gallery/WhatsApp Image 2025-10-03 at 11.40.28 (2).jpeg",
  "/images/Vill-La-Fornaca-gallery/WhatsApp Image 2025-10-03 at 11.40.28.jpeg",
  "/images/Vill-La-Fornaca-gallery/WhatsApp Image 2025-10-03 at 11.40.29 (1).jpeg",
  "/images/Vill-La-Fornaca-gallery/WhatsApp Image 2025-10-03 at 11.40.29.jpeg",
];

const VillaLaFornacaOpen = [
  "/images/Villa-La-Fornaca-open/WhatsApp Image 2025-10-03 at 11.40.25.jpeg",
  "/images/Villa-La-Fornaca-open/WhatsApp Image 2025-10-03 at 11.40.26 (1).jpeg",
  "/images/Villa-La-Fornaca-open/WhatsApp Image 2025-10-03 at 11.40.26.jpeg",
  "/images/Villa-La-Fornaca-open/WhatsApp Image 2025-10-03 at 11.40.27 (1).jpeg",
  "/images/Villa-La-Fornaca-open/WhatsApp Image 2025-10-03 at 11.40.27.jpeg",
  "/images/Villa-La-Fornaca-open/WhatsApp Image 2025-10-03 at 11.40.28 (1).jpeg",
  "/images/Villa-La-Fornaca-open/WhatsApp Image 2025-10-03 at 11.40.28 (2).jpeg",
  "/images/Villa-La-Fornaca-open/WhatsApp Image 2025-10-03 at 11.40.28.jpeg",
  "/images/Villa-La-Fornaca-open/WhatsApp Image 2025-10-03 at 11.40.29 (1).jpeg",
  "/images/Villa-La-Fornaca-open/WhatsApp Image 2025-10-03 at 11.40.29.jpeg",
];

const VillaPieveVecchiaGallery = [
  "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0494.JPG",
  "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0495.JPG",
  "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0496.JPG",
  "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0501.JPG",
  "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0502.JPG",
];

const VillaPieveVecchiaOpen = [
  "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0494.JPG",
  "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0495.JPG",
  "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0496.JPG",
  "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0501.JPG",
  "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0502.JPG",
];

export {
  LocandaDelGlicineGallery,
  LocandaDelGlicineOpen,
  LaRimmesaGallery,
  LaRimmesaOpen,
  RistoranteIlGlicineGallery,
  RistoranteIlGlicineOpen,
  VillaLaFornacaGallery,
  VillaLaFornacaOpen,
  VillaPieveVecchiaGallery,
  VillaPieveVecchiaOpen,
};
