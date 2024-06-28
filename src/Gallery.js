import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Lightbox from './Lightbox'; // Correct the import statement
import { 
  LocandaDelGlicineGallery, 
  LocandaDelGlicineOpen, 
  LaRimmesaGallery, 
  LaRimmesaOpen, 
  VillaLaFornacaGallery, 
  VillaLaFornacaOpen
} from './ImagesLoader';

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSectionImages, setCurrentSectionImages] = useState([]);

  // Preload all images when the component mounts
  useEffect(() => {
    const preloadImages = (images) => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages([...LocandaDelGlicineGallery, ...LocandaDelGlicineOpen]);
    preloadImages([...LaRimmesaGallery, ...LaRimmesaOpen]);
    preloadImages([...VillaLaFornacaGallery, ...VillaLaFornacaOpen]);
  }, []);

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
      <h1 className="Gallery-title">Gallery</h1>
      <section className="Gallery-section" id="VillaLaFornace">
        <h2 className="Gallery-section-title">Villa La Fornace</h2>
        <div className="Gallery-images">
          {renderImages(VillaLaFornacaOpen, VillaLaFornacaGallery)}
        </div>
      </section>
      {/* <section className="Gallery-section" id="VillaPieveVecchia">
        <h2 className="Gallery-section-title">Villa Pieve Vecchia</h2>
        <div className="Gallery-images">
          {renderImages(villaPieveVecchiaOpenImages, villaPieveVecchiaGalleryImages)}
        </div>
      </section> */}
      <section className="Gallery-section" id="LocandaDelGlicine">
        <h2 className="Gallery-section-title">Locanda del Glicine boutique hotel</h2>
        <div className="Gallery-images">
          {renderImages(LocandaDelGlicineOpen, LocandaDelGlicineGallery)}
        </div>
      </section>
      <section className="Gallery-section" id="OsteriaLaRimessa">
        <h2 className="Gallery-section-title">Osteria la Rimessa</h2>
        <div className="Gallery-images">
          {renderImages(LaRimmesaOpen, LaRimmesaGallery)}
        </div>
      </section>
      {/* <section className="Gallery-section" id="RistoranteIlGlicine">
        <h2 className="Gallery-section-title">Ristorante il Glicine</h2>
        <div className="Gallery-images">
          {renderImages(ristoranteIlGlicineOpenImages, ristoranteIlGlicineGalleryImages)}
        </div>
      </section> */}
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
        <h2 className="Gallery-section-title">Feel free to contact us anytime!</h2>
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
