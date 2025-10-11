import React, { useState, useEffect } from "react";
import "./Gallery.css";
import Lightbox from "./Lightbox"; // Correct the import statement
import ImageWithDebug from "./ImageWithDebug"; // Debug 404 images
import {
  LocandaDelGlicineGallery,
  LocandaDelGlicineOpen,
  LaRimmesaGallery,
  LaRimmesaOpen,
  VillaLaFornacaGallery,
  VillaLaFornacaOpen,
  VillaPieveVecchiaGallery,
  VillaPieveVecchiaOpen,
  RistoranteIlGlicineGallery,
  RistoranteIlGlicineOpen,
} from "./ImagesLoader";

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

    preloadImages([...LocandaDelGlicineOpen, ...LocandaDelGlicineGallery]);
    preloadImages([...LaRimmesaOpen, ...LaRimmesaGallery]);
    preloadImages([...VillaLaFornacaOpen, ...VillaLaFornacaGallery]);
    preloadImages([...VillaPieveVecchiaOpen, ...VillaPieveVecchiaGallery]);
    preloadImages([...RistoranteIlGlicineOpen, ...RistoranteIlGlicineGallery]);
  }, []);

  const openLightbox = (images, index) => {
    setCurrentSectionImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + currentSectionImages.length) %
        currentSectionImages.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % currentSectionImages.length);
  };

  const renderImages = (openImages, galleryImages) => {
    const allImages = [...openImages, ...galleryImages];
    return allImages.map((image, index) => (
      <ImageWithDebug
        src={image}
        alt={`Image-${index}`}
        key={index}
        onClick={() => openLightbox(allImages, index)}
      />
    ));
  };

  return (
    <div className="Gallery">
      <section className="Gallery-section" id="VillaLaFornace">
        <h2 className="Gallery-section-title">Villa La Fornace</h2>
        <p>
          This 17th-century villa offers an authentic yet pampering vacation
          experience, accommodating up to 10 guests in 5 double bedrooms. It
          features a snooker room, pool, spa, pizza oven, olive trees and a vast
          lawn. Guests can enjoy a private lake with kayaks, making it an ideal
          retreat for relaxation and fun. Located in an excellent area
          surrounded by a variety of activities.
        </p>
        <div className="Gallery-images">
          {renderImages(VillaLaFornacaOpen, VillaLaFornacaGallery)}
        </div>
        <p className="Gallery-address">
          <a
            href="https://www.google.com/maps/search/?api=1&query=La+Fornace%2C+58042+Campagnatico+GR"
            target="_blank"
            rel="noopener noreferrer"
            className="navy-link"
          >
            La Fornace, 58042 Campagnatico GR
          </a>
        </p>
      </section>
      <section className="Gallery-section" id="VillaPieveVecchia">
        <h2 className="Gallery-section-title">Villa Pieve Vecchia</h2>
        <p>
          A charming historic villa offering an authentic Tuscan experience.
          This beautiful property combines traditional architecture with modern
          comfort, providing guests with a peaceful retreat in the heart of
          Tuscany.
        </p>
        <div className="Gallery-images">
          {renderImages(VillaPieveVecchiaOpen, VillaPieveVecchiaGallery)}
        </div>
        <p className="Gallery-address">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Villa+Pieve+Vecchia%2C+Tuscany"
            target="_blank"
            rel="noopener noreferrer"
            className="navy-link"
          >
            Villa Pieve Vecchia, Tuscany
          </a>
        </p>
      </section>
      <section className="Gallery-section" id="LocandaDelGlicine">
        <h2 className="Gallery-section-title">
          Locanda del Glicine boutique hotel
        </h2>
        <p>
          This 17th-century boutique hotel, perched on a high hill above a Roman
          city, features a main building with 6 rooms for 2-5 guests.
          Additionally, there are 2 rooms nearby for up to 4 people and another
          room on a villa property with an archaeological site, museum, pool,
          and pizza oven. Located on the towns main piazza and has a restaurant,
          the hotel offers a unique blend of history and comfort.
        </p>
        <div className="Gallery-images">
          {renderImages(LocandaDelGlicineOpen, LocandaDelGlicineGallery)}
        </div>
        <p className="Gallery-address">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Piazza+Garibaldi%2C+1%2C+58042+Campagnatico+GR"
            target="_blank"
            rel="noopener noreferrer"
            className="navy-link"
          >
            Piazza Garibaldi, 1, 58042 Campagnatico GR
          </a>
          <br />
          <a href="tel:+393892388287" className="navy-link phone-link">
            Borys - +393892388287
          </a>
        </p>
      </section>
      <section className="Gallery-section" id="OsteriaLaRimessa">
        <h2 className="Gallery-section-title">Osteria la Rimessa</h2>
        <p>
          Nestled in the beautiful medieval town of Montorsaio, this Tuscan
          restaurant offers both indoor and outdoor dining with panoramic views.
          Specializing in authentic Tuscan meat dishes, it also hosts private
          events, providing a genuine culinary experience in a charming
          historical setting. Enjoy traditional flavors while soaking in the
          breathtaking scenery of the Tuscan landscape.
        </p>
        <div className="Gallery-images">
          {renderImages(LaRimmesaOpen, LaRimmesaGallery)}
        </div>
        <p className="Gallery-address">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Via+Aiottola%2C+2%2C+58042+Montorsaio+GR"
            target="_blank"
            rel="noopener noreferrer"
            className="navy-link"
          >
            Via Aiottola, 2, 58042 Montorsaio GR
          </a>
          <br />
          <a href="tel:+393892388287" className="navy-link phone-link">
            Borys - +393892388287
          </a>
        </p>
      </section>
      <section className="Gallery-section" id="RistoranteIlGlicine">
        <h2 className="Gallery-section-title">Ristorante del Glicine</h2>
        <p>
          Experience authentic Tuscan dining at Ristorante del Glicine, where
          traditional recipes meet modern culinary excellence. Located in a
          charming historic setting, the restaurant offers a carefully curated
          menu featuring local ingredients and regional specialties. Enjoy
          exquisite meals in an elegant atmosphere that captures the essence of
          Italian hospitality.
        </p>
        <div className="Gallery-images">
          {renderImages(RistoranteIlGlicineOpen, RistoranteIlGlicineGallery)}
        </div>
        <p className="Gallery-address">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ristorante+del+Glicine%2C+Tuscany"
            target="_blank"
            rel="noopener noreferrer"
            className="navy-link"
          >
            Ristorante del Glicine, Tuscany
          </a>
          <br />
          <a href="tel:+393892388287" className="navy-link phone-link">
            Borys - +393892388287
          </a>
        </p>
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
        <h2 className="Gallery-section-title">
          Feel free to contact us anytime!
        </h2>
        <div className="contact-info">
          <a
            href="https://wa.me/393892388287?text=Ciao!%20I%20want%20to%20come%20to%20your%20restaurant%20%F0%9F%98%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="whatsapp-icon"
            />
          </a>
          <a href="tel:+393892388287" className="icon-link">
            <span role="img" aria-label="Phone" className="phone-icon">
              📞
            </span>
          </a>
          <a href="mailto:TuscanyThrill@gmail.com" className="icon-link">
            <span role="img" aria-label="Email" className="email-icon">
              📧
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
