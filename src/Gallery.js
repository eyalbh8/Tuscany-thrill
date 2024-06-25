import React, { useState } from 'react';
import './Gallery.css';
import Lightbox from './Lightbox'; // Ensure consistent import

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSectionImages, setCurrentSectionImages] = useState([]);

  const openImagesContext = require.context('./', true, /- open\//);
  const galleryImagesContext = require.context('./', true, /- gallery\//);

  const getOpenImages = (folder) => openImagesContext.keys().filter((path) => path.includes(folder)).map(openImagesContext);
  const getGalleryImages = (folder) => galleryImagesContext.keys().filter((path) => path.includes(folder)).map(galleryImagesContext);

  const villaLaFornaceOpenImages = getOpenImages('Villa La Fornaca - open');
  const villaPieveVecchiaOpenImages = getOpenImages('Villa Pieve Vecchia - open');
  const locandaDelGlicineOpenImages = getOpenImages('Locanda del Glicine boutique hotel - open');
  const osteriaLaRimessaOpenImages = getOpenImages('Osteria La Rimessa - open');
  const ristoranteIlGlicineOpenImages = getOpenImages('Ristorante il Glicine - open');

  const villaLaFornaceGalleryImages = getGalleryImages('Villa La Fornaca - gallery');
  const villaPieveVecchiaGalleryImages = getGalleryImages('Villa Pieve Vecchia - gallery');
  const locandaDelGlicineGalleryImages = getGalleryImages('Locanda del Glicine boutique hotel - gallery');
  const osteriaLaRimessaGalleryImages = getGalleryImages('Osteria La Rimessa - gallery');
  const ristoranteIlGlicineGalleryImages = getGalleryImages('Ristorante il Glicine - gallery');

  const openLightbox = (openImages, galleryImages, index) => {
    setCurrentSectionImages([...openImages, ...galleryImages]);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + currentSectionImages.length) % currentSectionImages.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % currentSectionImages.length);
  };

  const renderImages = (openImages, galleryImages) => {
    return [...openImages, ...galleryImages].map((image, index) => (
      <img
        src={image}
        alt={`Image-${index}`}
        key={index}
        onClick={() => openLightbox(openImages, galleryImages, index)}
      />
    ));
  };

  return (
    <div className="Gallery">
      <h1>Gallery</h1>
      <section className="Gallery-section" id="VillaLaFornace">
        <h2>Villa La Fornace</h2>
        <div className="Gallery-images">
          {renderImages(villaLaFornaceOpenImages, villaLaFornaceGalleryImages)}
        </div>
      </section>
      <section className="Gallery-section" id="VillaPieveVecchia">
        <h2>Villa Pieve Vecchia</h2>
        <div className="Gallery-images">
          {renderImages(villaPieveVecchiaOpenImages, villaPieveVecchiaGalleryImages)}
        </div>
      </section>
      <section className="Gallery-section" id="LocandaDelGlicine">
        <h2>Locanda del Glicine boutique hotel</h2>
        <div className="Gallery-images">
          {renderImages(locandaDelGlicineOpenImages, locandaDelGlicineGalleryImages)}
        </div>
      </section>
      <section className="Gallery-section" id="OsteriaLaRimessa">
        <h2>Osteria la Rimessa</h2>
        <div className="Gallery-images">
          {renderImages(osteriaLaRimessaOpenImages, osteriaLaRimessaGalleryImages)}
        </div>
      </section>
      <section className="Gallery-section" id="RistoranteIlGlicine">
        <h2>Ristorante il Glicine</h2>
        <div className="Gallery-images">
          {renderImages(ristoranteIlGlicineOpenImages, ristoranteIlGlicineGalleryImages)}
        </div>
      </section>
      {lightboxOpen && (
        <Lightbox
          images={currentSectionImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onPrev={previousImage}
          onNext={nextImage}
        />
      )}
      <section className="Gallery-section" id="ContactUs">
        <h2>Feel free to contact us anytime!</h2>
        <div className="contact-info">
          <a href="https://wa.me/393892388287?text=Ciao!%20I%20want%20to%20come%20to%20your%20restaurant%20%F0%9F%98%8A" target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
          </a>
          <a href="tel:+393892388287" className="icon-link">
            <span role="img" aria-label="Phone" className="phone-icon">📞</span>
          </a>
          <a href="mailto:TuscanyThrill@gmail.com" className="icon-link">
            <span role="img" aria-label="Email" className="email-icon">📧</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
