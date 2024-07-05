// ImagesLoader.js

const LocandaDelGlicineGallery = [
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-gallery/LDC12.jpg",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-gallery/LDC13.jpg",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-gallery/LDC14.jpg",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-gallery/LDC15.jpg",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-gallery/LDC16.jpg",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-gallery/LDC17.jpg",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-gallery/LDC18.JPG",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-gallery/LDC19.JPG",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-gallery/LDC20.JPG",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-gallery/LDC21.JPG",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-gallery/LDC22.JPG",
];

const LocandaDelGlicineOpen = [
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-open/LDC1.JPG",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-open/LDC10.jpg",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-open/LDC2.jpg",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-open/LDC5.jpg",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-open/LDC8.jpg",
    "https://storage.googleapis.com/ttimages/Locanda-del-Glicine-boutique-hotel-open/LDC9.jpg"
];

const LaRimmesaGallery = [
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-gallery/La-Rimessa103.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-gallery/La-Rimessa113.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-gallery/La-Rimessa123.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-gallery/La-Rimessa133.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-gallery/La-Rimessa143.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-gallery/La-Rimessa153.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-gallery/La-Rimessa163.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-gallery/La-Rimessa73.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-gallery/La-Rimessa83.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-gallery/La-Rimessa93.JPG"
];

const LaRimmesaOpen = [
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-open/La-Rimessa1.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-open/La-Rimessa2.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-open/La-Rimessa3.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-open/La-Rimessa4.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-open/La-Rimessa5.JPG",
    "https://storage.googleapis.com/ttimages/Osteria-La-Rimessa-open/La-Rimessa6.JPG"
];

const RistoranteIlGlicineGallery = [
    "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-gallery/IMG_0494.JPG",
    "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-gallery/IMG_0495.JPG",
    "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-gallery/IMG_0496.JPG",
    "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-gallery/IMG_0501.JPG",
    "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-gallery/IMG_0502.JPG"
];

const RistoranteIlGlicineOpen = [
    "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-open/IMG_0494.JPG",
    "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-open/IMG_0495.JPG",
    "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-open/IMG_0496.JPG",
    "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-open/IMG_0501.JPG",
    "https://storage.googleapis.com/ttimages/Ristorante-il-Glicine-open/IMG_0502.JPG"
];

const VillaLaFornacaGallery = [
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca10.png",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca11.png",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca12.png",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca13.png",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca14.png",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca15.png",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca16.png",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca17.png",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca18.png",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca19.jpg",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca20.jpg",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca7.JPG",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca8.jpg",
    "https://storage.googleapis.com/ttimages/Vill-La-Fornaca-gallery/La-fornaca9.JPG"
];

const VillaLaFornacaOpen = [
    "http://storage.googleapis.com/ttimages/Villa-La-Fornaca-open/La-fornaca1.jpg",
    "http://storage.googleapis.com/ttimages/Villa-La-Fornaca-open/La-fornaca2.jpg",
    "http://storage.googleapis.com/ttimages/Villa-La-Fornaca-open/La-fornaca3.jpg",
    "http://storage.googleapis.com/ttimages/Villa-La-Fornaca-open/La-fornaca4.jpg",
    "http://storage.googleapis.com/ttimages/Villa-La-Fornaca-open/La-fornaca5.JPG",
    "http://storage.googleapis.com/ttimages/Villa-La-Fornaca-open/La-fornaca6.jpg"
];

const VillaPieveVecchiaGallery = [
    "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0494.JPG",
    "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0495.JPG",
    "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0496.JPG",
    "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0501.JPG",
    "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0502.JPG"
];

const VillaPieveVecchiaOpen = [
    "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0494.JPG",
    "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0495.JPG",
    "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0496.JPG",
    "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0501.JPG",
    "http://storage.googleapis.com/ttimages/Villa-Pieve-Vecchia-gallery/IMG_0502.JPG"
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
    VillaPieveVecchiaOpen
};
