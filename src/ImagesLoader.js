// ImagesLoader.js
// Cache buster for CloudFront - change this on each deploy to force fresh image loads
const CACHE_VERSION = "v2025-10-11-fix2";
const withCacheBust = (path) => `${path}?v=${CACHE_VERSION}`;

const LocandaDelGlicineGallery = [
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC12.jpg",
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC13.jpg",
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC14.jpg",
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC15.jpg",
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC16.jpg",
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC17.jpg",
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC18.jpg",
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC19.jpg",
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC20.jpg",
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC21.jpg",
  "/Locanda-del-Glicine-boutique-hotel-gallery/LDC22.jpg",
].map(withCacheBust);

const LocandaDelGlicineOpen = [
  "/Locanda-del-Glicine-boutique-hotel-open/LDC1.jpg",
  "/Locanda-del-Glicine-boutique-hotel-open/LDC2.jpg",
  "/Locanda-del-Glicine-boutique-hotel-open/LDC5.jpg",
  "/Locanda-del-Glicine-boutique-hotel-open/LDC8.jpg",
  "/Locanda-del-Glicine-boutique-hotel-open/LDC9.jpg",
  "/Locanda-del-Glicine-boutique-hotel-open/LDC10.jpg",
].map(withCacheBust);

const LaRimmesaGallery = [
  "/Osteria-La-Rimessa-gallery/La-Rimessa73.jpg",
  "/Osteria-La-Rimessa-gallery/La-Rimessa83.jpg",
  "/Osteria-La-Rimessa-gallery/La-Rimessa93.jpg",
  "/Osteria-La-Rimessa-gallery/La-Rimessa103.jpg",
  "/Osteria-La-Rimessa-gallery/La-Rimessa113.jpg",
  "/Osteria-La-Rimessa-gallery/La-Rimessa123.jpg",
  "/Osteria-La-Rimessa-gallery/La-Rimessa133.jpg",
  "/Osteria-La-Rimessa-gallery/La-Rimessa143.jpg",
  "/Osteria-La-Rimessa-gallery/La-Rimessa153.jpg",
  "/Osteria-La-Rimessa-gallery/La-Rimessa163.jpg",
].map(withCacheBust);

const LaRimmesaOpen = [
  "/Osteria-La-Rimessa-open/La-Rimessa1.jpg",
  "/Osteria-La-Rimessa-open/La-Rimessa2.jpg",
  "/Osteria-La-Rimessa-open/La-Rimessa3.jpg",
  "/Osteria-La-Rimessa-open/La-Rimessa4.jpg",
  "/Osteria-La-Rimessa-open/La-Rimessa5.jpg",
  "/Osteria-La-Rimessa-open/La-Rimessa6.jpg",
].map(withCacheBust);

const RistoranteIlGlicineGallery = [
  "/Ristorante-del-Glicine-gallery/IMG_0568.jpg",
  "/Ristorante-del-Glicine-gallery/IMG_0577.jpg",
  "/Ristorante-del-Glicine-gallery/IMG_0578.jpg",
  "/Ristorante-del-Glicine-gallery/IMG_0580.jpg",
  "/Ristorante-del-Glicine-gallery/IMG_0581.jpg",
  "/Ristorante-del-Glicine-gallery/IMG_0582.jpg",
  "/Ristorante-del-Glicine-gallery/IMG_0583.jpg",
  "/Ristorante-del-Glicine-gallery/IMG_0584.jpg",
  "/Ristorante-del-Glicine-gallery/IMG_0588.jpg",
].map(withCacheBust);

const RistoranteIlGlicineOpen = [
  "/Ristorante-del-Glicine-open/IMG_0565.jpg",
  "/Ristorante-del-Glicine-open/IMG_0569.jpg",
  "/Ristorante-del-Glicine-open/IMG_0586.jpg",
  "/Ristorante-del-Glicine-open/IMG_0589.jpg",
].map(withCacheBust);

const VillaLaFornacaGallery = [
  "/Villa-La-Fornaca-gallery/La-fornaca7.jpg",
  "/Villa-La-Fornaca-gallery/La-fornaca8.jpg",
  "/Villa-La-Fornaca-gallery/La-fornaca9.jpg",
  "/Villa-La-Fornaca-gallery/La-fornaca10.png",
  "/Villa-La-Fornaca-gallery/La-fornaca11.png",
  "/Villa-La-Fornaca-gallery/La-fornaca12.png",
  "/Villa-La-Fornaca-gallery/La-fornaca13.png",
  "/Villa-La-Fornaca-gallery/La-fornaca14.png",
  "/Villa-La-Fornaca-gallery/La-fornaca15.png",
  "/Villa-La-Fornaca-gallery/La-fornaca16.png",
  "/Villa-La-Fornaca-gallery/La-fornaca17.png",
  "/Villa-La-Fornaca-gallery/La-fornaca18.png",
  "/Villa-La-Fornaca-gallery/La-fornaca19.jpg",
  "/Villa-La-Fornaca-gallery/La-fornaca20.jpg",
].map(withCacheBust);

const VillaLaFornacaOpen = [
  "/Villa-La-Fornaca-open/La-fornaca1.jpg",
  "/Villa-La-Fornaca-open/La-fornaca2.jpg",
  "/Villa-La-Fornaca-open/La-fornaca3.jpg",
  "/Villa-La-Fornaca-open/La-fornaca4.jpg",
  "/Villa-La-Fornaca-open/La-fornaca5.jpg",
  "/Villa-La-Fornaca-open/La-fornaca6.jpg",
].map(withCacheBust);

const VillaPieveVecchiaGallery = [
  "/Villa-Pieve-Vecchia-gallery/20240721_193110.jpg",
  "/Villa-Pieve-Vecchia-gallery/20240721_193225.jpg",
  "/Villa-Pieve-Vecchia-gallery/20240721_193317.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0001.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0003.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0005.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0006.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0007.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0008.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0009.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0010.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0012.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0013.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0014.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0015.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0016.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0017.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0018.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0019.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0027.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0037.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0039.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0045.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0048.jpg",
].map(withCacheBust);

const VillaPieveVecchiaOpen = [
  "/Villa-Pieve-Vecchia-gallery/20240721_193110.jpg",
  "/Villa-Pieve-Vecchia-gallery/IMG-20240810-WA0001.jpg",
].map(withCacheBust);

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
